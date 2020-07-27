/**
 * 系统全局配置
 * @type {{fixedHeader: boolean, sidebarLogo: boolean, webName: string, showSettings: boolean, errorLog: (string|array), tagsView: boolean, title: string}}
 */
module.exports = {
  /**
   * 系统的名称
   */
  title: '丢丢与困困',

  /**
   * 是否系统布局配置
   */
  showSettings: false,

  /**
   * 是否显示 tagsView
   */
  tagsView: true,

  /**
   * 是否固定头部
   */
  fixedHeader: false,

  /**
   * 是否显示logo
   */
  sidebarLogo: true,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: ['production', 'development'],

  /**
   * 请求超时时间，毫秒（默认2分钟）
   */
  timeout: 1200000,
  /**
   * 是否显示设置的底部信息
   */
  showFooter: true,
  /**
   * 备案号
   */
  caseNumber: '湘ICP备 20002758',
  /**
   * 底部文字，支持html语法
   */
  footerTxt: '© 2020 holler <a href="http://beian.miit.gov.cn/" target="_blank">丢丢与困困</a>',

  TokenKey: 'Admin-Token',
  /**
   *  请求超时时间，毫秒（默认2分钟）
   */
  timeout: 1200000,
};
