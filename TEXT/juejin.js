const baseParse = _ => {
    // 初始化
    let d = [];
    const cate_url = "https://juejin.cn"
    const empty = "hiker://empty"
    const page = MY_URL.split('##')[1]
    const sort = [{title: '编辑精选', url: 'recommendLevel=2&sort=9'},{title: '首页推荐', url: 'recommendLevel=3&sort=9'},{title: '全部推荐', url: 'recommendLevel=1&sort=9'},{title: '最新发布', url: 'recommendLevel=0&sort=0'}]

    // 缓存
    let cate_1st = getVar("tyrantgenesis.juejin.cate_1st_select", "0")
    let cate_2nd = getVar("tyrantgenesis.juejin.cate_2nd_select", "0")

    const api_url = MY_URL.split('##')[0] + "?cate="+cate_1st+"&subCate="+cate_2nd+"&hasVideo=0&city=0&college=0&"+sort[cate_sort].url+"&limit=20&page="+page

    // 一级分类
    const category_json = fetch(cate_url, {headers:{"User-Agent": PC_UA}})
    const category = JSON.parse(category_json).data

    if (parseInt(page) === 1) {

        // 一级分类
        category.forEach(cate => {
            d.push({
                title: cate_1st === cate.id.toString() ? '‘‘’’<strong><font color="red">'+cate.name+'</font></strong>' : cate.name,
                url: $(empty).lazyRule(params => {
                    putVar("tyrantgenesis.zcool.cate_1st_select", params.cate_id.toString())
                    putVar("tyrantgenesis.zcool.cate_2nd_select", "0")
                    refreshPage(true)
                    return "hiker://empty"
                }, {
                    cate_id: cate.id,
                }),
                col_type: 'scroll_button'
            })
        })
        d.push({
            col_type: 'blank_block',
        })

        // 二级分类
        let sub_category = category.find(item => item.id.toString() === cate_1st).subCateList
        d.push({
            title: cate_2nd === "0" ? '‘‘’’<strong><font color="red">全部</font></strong>' : '全部',
            url: $(empty).lazyRule(params => {
                putVar("tyrantgenesis.zcool.cate_2nd_select", "0")
                refreshPage(true)
                return "hiker://empty"
            }),
            col_type: 'scroll_button'
        })
        sub_category.forEach(cate => {
            d.push({
                title: cate_2nd === cate.id.toString() ? '‘‘’’<strong><font color="red">'+cate.name+'</font></strong>' : cate.name,
                url: $(empty).lazyRule(params => {
                    putVar("tyrantgenesis.zcool.cate_2nd_select", params.cate_id.toString())
                    refreshPage(true)
                    return "hiker://empty"
                }, {
                    cate_id: cate.id
                }),
                col_type: 'scroll_button'
            })
        })
        d.push({
            col_type: 'blank_block',
        })

        // 三级分类
        sort.forEach((item, index) => {
            d.push({
                title: cate_sort === index.toString() ? '‘‘’’<strong><font color="red">'+item.title+'</font></strong>' : item.title,
                url: $(empty).lazyRule(params => {
                    putVar("tyrantgenesis.zcool.cate_sort", params.cate_id.toString())
                    refreshPage(true)
                    return "hiker://empty"
                }, {
                    cate_id: index
                }),
                col_type: 'scroll_button'
            })
        })
        d.push({
            col_type: 'blank_block',
        })
    }

    const list_json = fetch(api_url, {headers:{"User-Agent": PC_UA}})
    const list = JSON.parse(list_json).data.data

    list.forEach(item => {
        if (item.objectType === 78) {
            let obj = item.object
            if (obj.objectType === 3) {
                d.push({
                    title: obj.title,
                    desc: obj.creatorObj.username,
                    pic_url: obj.cover,
                    url: $(obj.pageUrl).rule(_ => {
                        eval(fetch('hiker://files/TyrantG/IMAGE/zcool.js'))
                        secParse()
                    }),
                    col_type: 'movie_2'
                })
            }
        }
    })

    setResult(d);
}

const secParse = _ => {
    let d = [];
    const html = parseDomForHtml(getResCode(), '.work-content-wrap&&Html');

    d.push({
        title: html.replace(/收藏/g, '').replace(/<script(.|\r|\n)*script>/, ''),
        col_type: 'rich_text'
    })

    setResult(d);
}

const searchParse = _ => {
    let d = [];
    const list = JSON.parse(getResCode()).data.data

    list.forEach(item => {
        if (item.objectType === 78) {
            let obj = item.object
            if (obj.objectType === 3) {
                d.push({
                    title: obj.title.replace(/<[^>]+>/g, ""),
                    desc: obj.creatorObj.username,
                    pic_url: obj.cover,
                    url: $(obj.pageUrl).rule(_ => {
                        eval(fetch('hiker://files/TyrantG/IMAGE/zcool.js'))
                        secParse()
                    }),
                    col_type: 'movie_2'
                })
            }
        }
    })

    setResult(d);
}


js:
var myCollection_el = []

// 处理MY_URL和MY_RULE
let RULE = MY_PARAMS.RULE
MY_RULE.version = RULE.version
MY_RULE.group = RULE.group
MY_RULE.title = RULE.title
MY_RULE.url = MY_URL
MY_RULE.ua = RULE.ua
MY_RULE.col_type = RULE.detail_col_type
MY_RULE.find_rule = RULE.detail_find_rule
MY_RULE.preRule = RULE.preRule
MY_RULE.pageList = RULE.pageList
MY_RULE.pages = RULE.pages
MY_RULE.last_chapter_rule = RULE.last_chapter_rule
MY_RULE.params = RULE.params
// 解析正文
if(MY_PARAMS.pageTitle) setPageTitle(MY_PARAMS.pageTitle)
eval(MY_RULE.preRule)
setLastChapterRule(MY_RULE.last_chapter_rule)
MY_PARAMS = MY_RULE.params
if (MY_RULE.find_rule.startsWith('js:')) {
    function setResult(el, param1, param2, param3) {
        param1 = CALLBACK_KEY
        param2 = MY_RULE
        param3 = MY_TYPE
        if (Array.isArray(el.data)) el = el.data

        Array.prototype.push.apply(myCollection_el, el.map((v) => {
            let RULE = Object.assign({}, MY_RULE)
            v.col_type = v.col_type || MY_RULE.col_type

            if (!v.url) {
                return v
            } else if (v.url.includes('@lazyRule=')) {
                v.url = v.url.replace('.js:', '.js:\nif(MY_RULE)Object.assign(MY_RULE,' + $.stringify({ title: MY_RULE.title, pages: MY_RULE.pages, pageList: MY_RULE.pageList, find_rule: '', params: '' }) + ');')
                return v
            } else if (v.url.includes('@rule=')) {
                let [_, url, rule] = v.url.match(/^([\s\S]*?)@rule=([\s\S]*)$/)
                v.url = url
                RULE.detail_find_rule = rule
                RULE.detail_col_type = MY_RULE.col_type
            } else if (v.url.startsWith('hiker://page/')) {
                if (v.url.includes('rule=') || (v.extra || {}).rule)
                    return v
                let path = v.url.split('#')[0].match(/^hiker:\/\/page\/(.+?)(?:\?.*)?$/)[1],
                    subPage = MY_RULE.pageList.find((v) => v.path == path)
                RULE.detail_find_rule = subPage.rule
                RULE.detail_col_type = subPage.col_type
                RULE.params = v.extra || {}
            } else { return v }
            v.extra = { url: v.url, RULE: RULE }
            v.url = 'hiker://page/detailLoad?rule=' + getItem('myCollection')
            return v
        }))
        method_setResult.invoke(javaContext, myCollection_el, param1, param2, param3)
    }

    function setHomeResult(a, param1, param2, param3) {
        setResult(a, param1, param2, param3)
    }

    function setSearchResult(a, param1, param2, param3) {
        setResult(a, param1, param2, param3)
    }

    eval(MY_RULE.find_rule.slice(3))
} else {
    const { runCode } = $.require('hiker://page/utility?rule=' + getItem('myCollection'))
    let findRule = MY_RULE.find_rule.split(';')
    parseDomForArray(getResCode(), findRule.shift()).forEach((data) => {
        let [title, img, desc, url] = findRule.map((v, i) => {
                try {
                    if (v == '*') return ''
                    else v = (i == 1 || i == 3) ?
                        parseDom(data, v) :
                        parseDomForHtml(data, v)
                    if (i != 3) v = runCode(v)
                    return v
                } catch (e) {}
            }),
            res = {
                title: title,
                url: url,
                desc: desc,
                img: img,
                col_type: MY_RULE.col_type
            }
        if (res.url && res.url.includes('@lazyRule='))
            res.url = res.url.replace('.js:', '.js:\nif(MY_RULE)Object.assign(MY_RULE,' + $.stringify({ title: MY_RULE.title, pages: MY_RULE.pages, pageList: MY_RULE.pageList, find_rule: '', params: '' }) + ');')
        myCollection_el.push(res)
    })
    setResult(myCollection_el)
}
