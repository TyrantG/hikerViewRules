// 初始化应用样式
export default function initAppStyle(vm) {
    return new Promise((resolve, reject) => {
        let html = document.documentElement,
            // ClientWidth = html.getBoundingClientRect().width,
            fontSizePayload = vm.fontSizePayload,
            fontsize

        fontsize = 100 * fontSizePayload
        /*if (ClientWidth >= 1920){
            fontsize = 50 * fontSizePayload
        } else if (ClientWidth < 1920 && ClientWidth >= 1200) {
            fontsize = 40 * fontSizePayload
        } else if (ClientWidth < 1200 && ClientWidth >= 992) {
            fontsize = 32 * fontSizePayload
        } else if (ClientWidth < 992 && ClientWidth >= 768) {
            fontsize = 24 * fontSizePayload
        } else {
            fontsize = 20 * fontSizePayload
        }*/

        vm.$store.dispatch('Interface/setFontSize', fontsize+'px').catch(err => {
            reject(err)
        })
        resolve(html)
    })
}
