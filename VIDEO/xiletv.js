const baseParse = _ => {
    let d = [];
    const BASE_URL = 'http://www.xiletv.com'
    const current_page = MY_URL.split('##')[1]
    let current_url = getVar('true_url')
    clearVar('true_url')

    if (! current_url) {
        const ori_html = fetch(MY_URL, {headers: {"User-Agent": PC_UA}})
        let top_temp = pdfa(ori_html, '.nav&&ul&&li&&a')
        log(1)
        log(top_temp)
        putVar('true_url', top_temp[1])
        current_url = top_temp[1]
    }

    log(2)
    log(current_url)
    const html = fetch(current_url, {headers: {"User-Agent": PC_UA}})
    let top_cate = pdfa(html, '.nav&&ul&&li')
    top_cate.shift()
    top_cate.pop()

    log(html)

    const fold = getVar("fold", "0")
    const cate_temp_json = getVar("category")
    const cate_temp = cate_temp_json ? JSON.parse(cate_temp_json) : []


    if (parseInt(current_page) === 1) {

    }

    setResult(d);
}