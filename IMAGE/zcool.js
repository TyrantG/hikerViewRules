const baseParse = _ => {
    let d = [];
    const base_url = "https://www.zcool.com.cn/discover"
    let api_url = MY_URL.split('##')[0]
    let page = MY_URL.split('##')[1]

    const html = fetch(base_url, {headers:{"User-Agent": PC_UA}})
    const cate_first = parseDomForArray(html, '.swiper-wrapper&&.cate-slide');
    setError(cate_first)

    setResult(d);
}


const secParse = _ => {
    let d = [];


    setResult(d);
}