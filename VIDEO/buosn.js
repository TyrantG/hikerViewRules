const baseParse = _ => {
    addListener('onClose', $.toString(() => {
        clearItem('buosn.fold')
        clearItem('buosn.cate_id')
        clearItem('buosn.click_url')
        clearItem('buosn.cate_tab')
    }))
    let d = [];
    const empty = "hiker://empty"
    const current_page = MY_URL.split('##')[1]
    const fold = getItem("buosn.fold", "0")
    const cate_id  = getItem("buosn.cate_id", "1")
    let click_url = getItem('buosn.click_url', "https://buosn.com/vodshow/"+cate_id+"-----------/")

    const category = [
        {id: 1, name: '电影'},
        {id: 2, name: '连续剧'},
        {id: 3, name: '综艺'},
        {id: 4, name: '动漫'},
    ];

    const cate_temp_json = getItem("buosn.category", JSON.stringify(new Array('-----------'.length).fill('0')))
    let cate_temp = JSON.parse(cate_temp_json)

    let url_params = click_url.match(/vodshow\/(.*?)\//)[1].split('-')
    url_params[8] = current_page

    const true_url = "https://buosn.com/vodshow/"+url_params.join('-')+"/"

    const html = fetch(true_url)
    const box = pdfa(html, '.slideDown-box&&ul')

    if (parseInt(current_page) === 1) {
        d.push({
            title: fold === '1' ?  '““””<b><span style="color: #FF0000">∨</span></b>': '““””<b><span style="color: #1aad19">∧</span></b>',
            url: $(empty).lazyRule((fold) => {
                setItem("buosn.fold", fold === '1' ? '0' : '1');
                refreshPage(true);
                return "hiker://empty"
            }, fold),
            col_type: 'scroll_button',
        })

        category.forEach(item => {
            d.push({
                title: item.id.toString() === cate_id ? '““””<b><span style="color: #FF0000">'+item.name+"</span></b>" : item.name,
                url: $(empty).lazyRule((id) => {
                    setItem("buosn.cate_id", id)
                    setItem("buosn.click_url", "https://buosn.com/vodshow/"+id+"-----------/")
                    clearItem('buosn.category')
                    refreshPage(true)
                    return "hiker://empty"
                }, item.id.toString()),
                col_type: 'scroll_button',
            })
        })
        d.push({
            col_type:"blank_block"
        })

        if (fold === '1') {
            box.forEach((item, index) => {
                let cates = pdfa(item, 'ul&&li')
                cates.forEach((cate, key) => {
                    let name = pdfh(cate, 'a&&Text')
                    let href = pd(cate, 'a&&href')
                    if (key !== 0) {
                        d.push({
                            title: 1 === key - cate_temp[index] ? '““””<b><span style="color: #FF0000">'+name+"</span></b>" : name,
                            url: $(empty).lazyRule((key, index, cate_temp, href) => {
                                let new_cate = []
                                cate_temp.forEach(item => new_cate.push(item))
                                new_cate[index] = parseInt(key)-1
                                setItem("buosn.click_url", href)
                                setItem("buosn.category", JSON.stringify(new_cate))
                                refreshPage(true)
                                return "hiker://empty"
                            }, key.toString(), index.toString(), cate_temp, href),
                            col_type: 'scroll_button',
                        })
                    }
                })
                d.push({
                    col_type:"blank_block"
                })
            })
        }
    }

    const list = pdfa(html, '.myui-panel-bg&&ul&&li')
    list.forEach(item => {
        d.push({
            title: pdfh(item, 'h4&&Text'),
            desc: pdfh(item, '.pic-tag&&Text'),
            url: pd(item, 'a&&href')+'#immersiveTheme#',
            pic_url: pd(item, '.myui-vodlist__thumb&&data-original'),
            col_type: 'movie_3_marquee',
        })
    })

    setResult(d);
}

const secParse = _ => {
    addListener('onClose', $.toString(() => {
        clearItem('buosn.cate_tab')
    }))
    let d = [];
    const html = getResCode()
    const empty = "hiker://empty"
    const cate_tab  = getItem("buosn.cate_tab", "0")

    const video_array = pdfa(html, 'body&&.myui-panel-bg')
    const video_info = video_array[0]
    const video_desc = video_array[1]
    const list_box = video_array[2]

    d.push({
        title: pdfa(video_info, '.myui-content__detail&&.data').map(item => pdfh(item, '.data&&Text')).join('\n'),
        desc: pdfh(video_desc, '.content&&.sketch&&Text'),
        url: MY_URL,
        pic_url: pd(video_info, 'img&&data-original'),
        col_type: 'movie_1_vertical_pic_blur',
    })
    d.push({
        col_type: 'line_blank'
    })

    const tabs = pdfa(list_box, 'ul&&li')
    const playlist = pdfa(list_box, '.tab-content&&.tab-pane')

    if (tabs.length > 0) {
        tabs.forEach((tab, index) => {
            let title = pdfh(tab, 'a&&Text')
            d.push({
                title: cate_tab === index.toString() ? '““””<b><span style="color: #FF0000">'+title+"</span></b>" : title,
                url: $(empty).lazyRule((index) => {
                    setItem("buosn.cate_tab", index)
                    refreshPage(true)
                    return "hiker://empty"
                }, index.toString()),
                col_type: 'scroll_button',
            })
        })
        d.push({
            title: '',
            col_type: 'avatar'
        })
    }

    setResult(d);
}
