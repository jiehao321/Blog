package com.dimple.framework.aspectj;

import com.dimple.common.utils.ServletUtils;
import com.dimple.common.utils.StringUtils;
import com.dimple.common.utils.ip.IpUtils;
import com.dimple.framework.aspectj.lang.annotation.VLog;
import com.dimple.framework.manager.AsyncManager;
import com.dimple.framework.manager.factory.AsyncFactory;
import com.dimple.project.log.domain.VisitLog;
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.Signature;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.core.LocalVariableTableParameterNameDiscoverer;
import org.springframework.expression.EvaluationContext;
import org.springframework.expression.Expression;
import org.springframework.expression.ExpressionParser;
import org.springframework.expression.spel.standard.SpelExpressionParser;
import org.springframework.expression.spel.support.StandardEvaluationContext;
import org.springframework.stereotype.Component;

import java.lang.reflect.Method;

/**
 * @className: VisitLogAspect
 * @description:
 * @author: holler
 * @date: 2019/11/30
 */
@Aspect
@Component
@Slf4j
public class VisitLogAspect {

    //@annotation表示具有某个标注的方法，
    // 比如@annotation(org.springframework.transaction.annotation.Transactional)
    // 表示被Transactional标注的方法
    /**
     * 通过标注定义切点需要连个步骤
     * 1 定义一个空方法
     * 2 使用@Piontcut标注，填入切点表达式
     */
    @Pointcut("@annotation(com.dimple.framework.aspectj.lang.annotation.VLog)")
    public void logPointCut() {
    }

    /**
     * 前置通知 用于拦截操作
     *
     * @param joinPoint 切点
     */
    @AfterReturning(pointcut = "logPointCut()")
    public void doBefore(JoinPoint joinPoint) {
        handleLog(joinPoint, null);
    }

    /**
     * 拦截异常操作
     *
     * @param joinPoint
     * @param e
     */
    @AfterThrowing(value = "logPointCut()", throwing = "e")
    public void doAfter(JoinPoint joinPoint, Exception e) {
        handleLog(joinPoint, e);
    }

    protected void handleLog(final JoinPoint joinPoint, final Exception e) {
        try {
            // 获得注解
            VLog vLog = getAnnotationLog(joinPoint);
            if (vLog == null) {
                return;
            }
            VisitLog visitLog = new VisitLog();
            visitLog.setPageId(getPageId(vLog, joinPoint));
            visitLog.setIp(IpUtils.getIpAddr(ServletUtils.getRequest()));
            visitLog.setUrl(ServletUtils.getRequest().getRequestURI());
            if (e != null) {
                visitLog.setStatus(false);
                visitLog.setErrorMsg(StringUtils.substring(e.getMessage(), 0, 2000));
            } else {
                visitLog.setStatus(true);
            }
            //设置入口地址
            visitLog.setEntryUrl(ServletUtils.getRequest().getHeader("referer"));
            // 处理设置注解上的参数
            getControllerMethodDescription(vLog, visitLog);
            // 异步保存数据库
            AsyncManager.me().execute(AsyncFactory.recordVisitLog(visitLog));
        } catch (Exception exp) {
            // 记录本地异常日志
            log.error("异常信息:{}", exp.getMessage(), exp);
        }
    }

    /**
     * 获取注解中对方法的描述信息 用于Controller层注解
     *
     * @param log      日志
     * @param visitLog 操作日志
     * @throws Exception
     */
    public void getControllerMethodDescription(VLog log, VisitLog visitLog) {
        visitLog.setTitle(log.title());
    }


    /**
     * 是否存在注解，如果存在就获取
     */
    private VLog getAnnotationLog(JoinPoint joinPoint) {
        Signature signature = joinPoint.getSignature();
        MethodSignature methodSignature = (MethodSignature) signature;
        Method method = methodSignature.getMethod();
        if (method != null) {
            return method.getAnnotation(VLog.class);
        }
        return null;
    }

    /**
     * 获取PageId
     *
     * @param joinPoint 切入点
     * @return PageId
     */
    private Long getPageId(VLog vLog, JoinPoint joinPoint) throws NoSuchMethodException {
        String pageIdStr = vLog.pageId();
        if (StringUtils.isEmpty(pageIdStr)) {
            return null;
        }
        //get target method
        //获取封装了署名信息的对象,在该对象中可以获取到目标方法名,所属类的Class等信息
        MethodSignature methodSignature = (MethodSignature) joinPoint.getSignature();
        //Object getTarget();	获取被代理的对象   getMethod  传入参数：方法名，参数类型
        Method method = joinPoint.getTarget().getClass().getMethod(methodSignature.getMethod().getName(), methodSignature.getMethod().getParameterTypes());
        //express SpEL
        //定义一个spel表达式
        ExpressionParser expressionParser = new SpelExpressionParser();
        //mvc
        LocalVariableTableParameterNameDiscoverer localVariableTableParameterNameDiscoverer = new LocalVariableTableParameterNameDiscoverer();
        //获取方法的参数
        String[] params = localVariableTableParameterNameDiscoverer.getParameterNames(method);
        //获取传入目标方法的参数对象
        Object[] args = joinPoint.getArgs();
        EvaluationContext context = new StandardEvaluationContext();
        assert params != null;
        for (int i = 0; i < params.length; i++) {
            context.setVariable(params[i], args[i]);
        }
        //指定解析器来处理字符串操作
        Expression expression = expressionParser.parseExpression(pageIdStr);
        //获取解析的结果
        Object value = expression.getValue(context);

        if (value == null) {
            return null;
        }
        try {
            return (Long) value;
        } catch (Exception e) {
            log.error("get pageId error for parameters {}", value);
            return null;
        }
    }
}
