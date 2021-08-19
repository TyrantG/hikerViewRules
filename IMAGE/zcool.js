const baseParse = _ => {
    // 初始化
    let d = [];
    const cate_url = "https://www.zcool.com.cn/common/category"
    const empty = "hiker://empty"
    const page = MY_URL.split('##')[1]
    const sort = [{title: '编辑精选', url: 'recommendLevel=2&sort=9'},{title: '首页推荐', url: 'recommendLevel=3&sort=9'},{title: '全部推荐', url: 'recommendLevel=1&sort=9'},{title: '最新发布', url: 'recommendLevel=0&sort=0'}]

    // 缓存
    let cate_1st = getVar("tyrantgenesis.zcool.cate_1st_select", "0")
    let cate_2nd = getVar("tyrantgenesis.zcool.cate_2nd_select", "0")
    let cate_sort = getVar("tyrantgenesis.zcool.cate_sort", "0")

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
                    url: obj.pageUrl,
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
                    url: obj.pageUrl,
                    col_type: 'movie_2'
                })
            }
        }
    })

    setResult(d);
}
