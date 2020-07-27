const state = {
    /**
     * 备案号
     */
    F_ICP: '湘ICP备 20002758',
    F_Title: 'hollerBlog',
    F_Title_Desc: 'Code for the world',
    /**
     * 版权
     */
    F_Copyright: " © 2017 - 2020",
    F_Copyright_Desc: "丢丢与困困的个人博客",
    F_Copyright_Desc_En: "",
};

const mutations = {
    CHANGE_SETTING: (state, {key, value}) => {
        if (state.hasOwnProperty(key)) {
            state[key] = value
        }
    }
};

const actions = {
    changeSetting({commit}, data) {
        commit('CHANGE_SETTING', data)
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}

