const baseParse = _ => {
    let d = [];
    const current_page = MY_URL.split('##')[1]
    const current_url = getVar('true_url', MY_URL)

    const fold = getVar("fold", "0")
    const cate_temp_json = getVar("category")
    const cate_temp = cate_temp_json ? JSON.parse(cate_temp_json) : []

    const html = fetch(current_url, {headers: {"User-Agent": PC_UA}})
    const top_cate = pdfa(html, '.nav&&ul&&li')
    log(top_cate)

    if (parseInt(current_page) === 1) {

    }

    setResult(d);
}