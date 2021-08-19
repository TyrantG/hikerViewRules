const baseParse = _ => {
    // 初始化
    let d = [];
    const base_url = "https://www.zcool.com.cn/discover"
    const empty = "hiker://empty"
    let api_url = MY_URL.split('##')[0]
    let page = MY_URL.split('##')[1]

    // 缓存
    let cate_1st = getVar("tyrantgenesis.zcool.cate_1st_select", "0")
    let cate_2nd = getVar("tyrantgenesis.zcool.cate_2nd_select", "0")
    let cate_sort = getVar("tyrantgenesis.zcool.cate_sort", "0")

    // 一级分类
    const html = fetch(base_url, {headers:{"User-Agent": PC_UA}})
    const cate_array = parseDomForArray(html, '.swiper-wrapper&&.cate-slide');

    cate_array.forEach((cate, index) => {
        let ori_title = parseDomForHtml(cate, 'span&&Text')
        let cate_id = parseDomForHtml(cate, '.cate-slide&&data-cateid')
        let title = index === parseInt(cate_1st) ? '‘‘’’<strong><font color="red">'+ori_title+'</font></strong>' : ori_title
        d.push({
            title: title,
            url: $(empty).lazyRule(params => {
                putVar("tyrantgenesis.zcool.cate_1st_select", params.cate_id.toString())
                refreshPage(true)
                return "hiker://empty"
            }, {
                cate_id: cate_id
            }),
            col_type: 'scroll_button'
        })
    })
    d.push({
        col_type: 'blank_block',
    })

    setResult(d);
}


const secParse = _ => {
    let d = [];


    setResult(d);
}