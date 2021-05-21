const install = (Vue) => {

    // demo
    let demo = (params = {}) => Vue.prototype.$http.get('demo', {params})

    Vue.prototype.$api = {
        demo,
    }
}

export default {
    install
}
