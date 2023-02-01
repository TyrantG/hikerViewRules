const one = {
    empty: 'hiker://empty',
    d: [],
    data: {
        subTab: getMyVar('HentaiOne.subTab', '0'),
    },
    baseParse: () => {
        const [url, classType, page] = MY_URL.split('##')

        if (classType === 'new') {
            one.list(pdfa(fetch(url+'/page/'+page), '#list&&a'))
        } else if (classType === 'hot') {
            if (parseInt(page) === 1) {
                const tabs = [
                    {
                        title: '今日',
                        target: '#daily_content',
                    },
                    {
                        title: '本周',
                        target: '#weekly_content',
                    },
                    {
                        title: '本月',
                        target: '#monthly_content',
                    },
                    {
                        title: '全期',
                        target: '#all-days_content',
                    },
                ]

                tabs.forEach((tab, index) => {
                    one.d.push({
                        title: one.data.subTab === index.toString() ? '‘‘’’<strong><font color="#5FCC97">'+tab.title+'</font></strong>' : tab.title,
                        url: $(one.empty).lazyRule((index) => {
                            putMyVar("HentaiOne.subTab", index)
                            refreshPage(false)
                            return 'hiker://empty'
                        }, index.toString()),
                        col_type: 'scroll_button'
                    })
                })

                one.d.push({
                    col_type: 'blank_block',
                })

                one.list(pdfa(fetch(url+'/ranking'), tabs[one.data.subTab].target+'&&.tab_content_description&&a'))
            }
        }
        setResult(one.d)
    },
    searchParse: () => {
        one.list(pdfa(getResCode(), '#list&&a'))
        setResult(one.d)
    },
    list: (list) => {
        list.forEach(item => {
            let title = pdfh(item, 'a&&Title')
            let url = pdfh(item, 'a&&href')
            let pic_url = pdfh(item, 'img&&src')
            one.d.push({
                title: title,
                url: $(url+'#immersiveTheme#').rule((title, url, pic_url) => {
                    const one = $.require('hiker://page/one')
                    one.detail(title, url, pic_url)
                    setResult(one.d)
                }, title, url, pic_url),
                pic_url: pic_url,
                col_type: 'movie_3',
            })
        })
    },
    detail: (title, url, pic_url) => {
        setPageTitle(title)
        const html = getResCode()
        one.d.push({
            title: title,
            url: url,
            pic_url: pic_url,
            col_type: 'movie_1_vertical_pic_blur',
        })
        one.d.push({
            col_type: 'line_blank'
        })

        const tags = pdfa(html, '.entry-tags&&a')

        tags.forEach(tag => {
            let title = pdfh(tag, 'a&&Text')
            let url = pdfh(tag, 'a&&href')
            one.d.push({
                title: pdfh(tag, 'a&&Text'),
                url: $(url+'/page/fypage').rule((title) => {
                    const one = $.require('hiker://page/one')
                    one.tag(title)
                    setResult(one.d)
                }, title),
                col_type: 'flex_button',
            })
        })

        one.d.push({
            col_type: 'line_blank'
        })

        one.d.push({
            title: '浏览',
            url: one.getPics(html),
            col_type: 'text_center_1',
        })
        one.d.push({
            col_type: 'line_blank'
        })

        one.d.push({
            title: '相似内容',
            url: one.empty,
            col_type: 'text_1',
        })

        one.list(pdfa(html, '.related-list&&a'))
    },
    tag: (title) => {
        setPageTitle(title)
        try {
            one.list(pdfa(getResCode(), '#list&&a'))
        } catch(e) {}
    },
    getPics: (html) => {
        const img_list = []
        pdfa(html, '.article-images&&img').forEach(img => {
            img_list.push(pdfh(img, 'img&&src'))
        })
        return 'pics://'+img_list.join('&&')
    },
}

$.exports = one
