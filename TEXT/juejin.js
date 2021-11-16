js:
let d = []

// 网址前缀
const URL_PREFIX            = 'https://www.xinpianchang.com'
// 取分页
const CURRENT_PAGE          = MY_URL.split('##')[1]
// 当前 url
const CURRENT_URL           = getItem('current_url', URL_PREFIX+'/channel/')
// 已知动态分类最多二级
const CATE_LEVEL_1          = getItem("cate_1", "0")
const CATE_LEVEL_2          = getItem("cate_2", "0")

// 获取页面内容
let html = request(CURRENT_URL, {headers: {"User-Agent": PC_UA}})

// 第一页独占
if (parseInt(CURRENT_PAGE) === 1) {
    // 取一级标签
    const categorie_level_1 = parseDomForArray(html, '.first-type&&li')
    // 循环一级标签
    categorie_level_1.forEach((cate_1, index_1) => {
        let title = parseDomForHtml(cate_1, 'a&&Text')
        let link = parseDomForHtml(cate_1, 'a&&href')
        d.push({
            title: parseInt(CATE_LEVEL_1)===index_1? "““"+title+"””":title,
            col_type: 'scroll_button',
            url: $().lazyRule(params => {
                // 存在链接的情况下更新缓存
                if (params.link) {
                    setItem('cate_1', params.index.toString())

                    // 重置二级
                    setItem('cate_2', '0')

                    setItem('current_url', params.prefix+params.link)
                    refreshPage(true)
                }
                
                return "hiker://empty"
            }, {
                prefix: URL_PREFIX,
                index: index_1,
                link: link
            })
        })
    })
    d.push({
        col_type:"blank_block"
    })

    // 取二级标签
    let categorie_level_2 = parseDomForArray(html, '.second-type&&li')
    // 循环二级标签
    categorie_level_2.forEach((cate_2, index_2) => {
        let title = parseDomForHtml(cate_2, 'a&&Text')
        let link = parseDomForHtml(cate_2, 'a&&href')
        d.push({
            title: parseInt(CATE_LEVEL_2)===index_2? "““"+title+"””":title,
            col_type: 'scroll_button',
            url: $().lazyRule(params => {
                // 存在链接的情况下更新缓存
                if (params.link) {
                    setItem('cate_2', params.index.toString())
                    setItem('current_url', params.prefix+params.link)
                    refreshPage(true)
                }

                return "hiker://empty"
            }, {
                prefix: URL_PREFIX,
                index: index_2,
                link: link
            })
        })
    })
    
    d.push({
        col_type:"blank_block"
    })

    d.push({
        title: '当前URL：'+CURRENT_URL,
        col_type: 'long_text',
    })
}

setResult(d)