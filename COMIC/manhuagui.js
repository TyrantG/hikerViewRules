const baseParse = _ => {
    let d = [];
    let true_url = getVar("tyrantgenesis.manhuagui.url", "https://www.manhuagui.com/list/")
    const page = MY_URL.split('##')[1]
    true_url = true_url+"index_p"+page+".html"
    const html = fetch(true_url, {headers:{"User-Agent": PC_UA}})
    const empty = "hiker://empty"

    const categories = parseDomForArray(html, '.filter-nav&&.filter');
    setError(categories)

    let init_cate = []

    for (let i = 0; i < 10; i ++) {
        init_cate.push("0")
    }

    // 取缓存
    const fold = getVar("tyrantgenesis.manhuagui.fold", "0")
    const cate_temp_json = getVar("tyrantgenesis.manhuagui.category", JSON.stringify(init_cate))
    const cate_temp = JSON.parse(cate_temp_json)


    if (parseInt(page) === 1) {
        d.push({
            title: fold === '1' ?  '““””<b><span style="color: #FF0000">∨</span></b>': '““””<b><span style="color: #1aad19">∧</span></b>',
            url: $(empty).lazyRule((fold) => {
                putVar("tyrantgenesis.manhuagui.fold", fold === '1' ? '0' : '1');
                refreshPage(false);
                return "hiker://empty"
            }, fold),
            col_type: 'scroll_button',
        })


        categories.forEach((category, index) => {
            let sub_categories = parseDomForArray(category, 'ul&&li');
            if (fold === '1' || index === 0) {
                sub_categories.forEach((item, key) => {
                    let title = parseDomForHtml(item, 'a&&Text')
                    d.push({
                        title: key.toString()===cate_temp[index]? "““"+title+"””":title,
                        url: $(parseDom(item, 'a&&href')).lazyRule((params) => {
                            params.cate_temp[params.index] = params.key.toString()

                            putVar("tyrantgenesis.manhuagui.category", JSON.stringify(params.cate_temp))
                            putVar("tyrantgenesis.manhuagui.url", "https://www.manhuagui.com"+input)
                            refreshPage(true)
                            return "hiker://empty"
                        }, {
                            cate_temp: cate_temp,
                            index: index,
                            key: key,
                            page: page,
                        }),
                        col_type: 'scroll_button',
                    })
                })
                d.push({
                    col_type:"blank_block"
                });
            }
        })

        // const by_cate = parseDomForArray(parseDomForArray(html, '.mo-java-waps&&.mo-cols-lays')[1], 'h2&&a')
        // by_cate.forEach((item, key) => {
        //     let title = parseDomForHtml(item, 'a&&Text')
        //     let index = 15
        //     d.push({
        //         title: key.toString()===cate_temp[index]? "““"+title+"””":title,
        //         url: $(parseDom(item, 'a&&href')).lazyRule((params) => {
        //             params.cate_temp[params.index] = params.key.toString()
        //
        //             putVar("tyrantgenesis.manhuagui.category", JSON.stringify(params.cate_temp))
        //             putVar("tyrantgenesis.manhuagui.url", input)
        //             refreshPage(true)
        //             return "hiker://empty"
        //         }, {
        //             cate_temp: cate_temp,
        //             index: index,
        //             key: key,
        //             page: page,
        //         }),
        //         col_type: 'scroll_button',
        //     })
        // })
        // d.push({
        //     col_type:"blank_block"
        // });
    }

    const comic_list = parseDomForArray(html, '#contList&&li')
    comic_list.forEach(comic => {
        d.push({
            title: parseDomForHtml(comic, '.ell&&a&&Text'),
            desc: parseDomForHtml(comic, '.tt&&Text'),
            pic_url: parseDom(comic, 'img&&src')+"@Referer=https://www.manhuagui.com/",
            url: "https://www.manhuagui.com"+parseDom(comic, '.bcover&&href'),
            col_type: 'movie_3_marquee',
        })
    })

    setResult(d);
}