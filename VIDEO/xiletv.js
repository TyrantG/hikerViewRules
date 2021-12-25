const baseParse = _ => {
    let d = [];
    const BASE_URL = 'http://www.xiletv.com'
    const current_page = MY_URL.split('##')[1]
    let current_url = getVar('true_url')

    const fold = getVar("fold", "0")
    const cate_temp_json = getVar("category")
    let cate_temp = cate_temp_json ? JSON.parse(cate_temp_json) : ['0']

    if (! current_url) {
        const ori_html = fetch(MY_URL, {headers: {"User-Agent": PC_UA}})
        let top_temp = pdfa(ori_html, '.nav&&ul&&li')
        const true_url = pdfh(top_temp[1], 'a&&href')
        putVar('true_url', BASE_URL+true_url)
        current_url = BASE_URL+true_url
    }

    const html = fetch(current_url, {headers: {"User-Agent": PC_UA}})
    let top_cate = pdfa(html, '.nav&&ul&&li')
    top_cate.shift()
    top_cate.pop()

    const categories = pdfa(html, '.list-box&&dl');

    if (parseInt(current_page) === 1) {
        d.push({
            title: fold === '1' ?  '““””<b><span style="color: #FF0000">∨</span></b>': '““””<b><span style="color: #1aad19">∧</span></b>',
            url: $("hiker://empty").lazyRule((fold) => {
                putVar("fold", fold === '1' ? '0' : '1');
                refreshPage(false);
                return "hiker://empty"
            }, fold),
            col_type: 'scroll_button',
        })

        top_cate.forEach((item, index) => {
            let title = pdfh(item, 'a&&Text')
            let url = BASE_URL + pdfh(item, 'a&&href')
            d.push({
                title: cate_temp[0] === index.toString() ?  '““””<b><span style="color: #FF0000">'+title+'</span></b>': title,
                url: $(url).lazyRule(params => {
                    params.cate_temp[0] = params.index.toString()
                    putVar("true_url", input);
                    putVar("category", JSON.stringify(params.cate_temp));
                    refreshPage(false);
                    return "hiker://empty"
                }, {
                    cate_temp: cate_temp,
                    index: index
                }),
                col_type: 'scroll_button',
            })
        })
        d.push({
            col_type:"blank_block"
        })

        if (fold === '1') {
            categories.forEach((category, index) => {
                let sub_categories = pdfa(category, 'dl&&dd');
                sub_categories.forEach((item, key) => {
                    let title = pdfh(item, 'a&&Text')
                    let url = parseDom(item, 'a&&href')
                    let title_show = (cate_temp[index+1] && key.toString() === cate_temp[index+1]) || key === 0 ? '““””<b><span style="color: #FF0000">'+title+'</span></b>' : title
                    d.push({
                        title: title_show,
                        url: $(url).lazyRule((params) => {
                            params.cate_temp[params.index] = params.key.toString()
                            putVar("category", JSON.stringify(params.cate_temp))
                            putVar("true_url", input)
                            refreshPage(true)
                            return "hiker://empty"
                        }, {
                            cate_temp: cate_temp,
                            index: index,
                            key: key,
                        }),
                        col_type: 'scroll_button',
                    })
                })
                d.push({
                    col_type:"blank_block"
                })
            })
        }

    }

    setResult(d);
}