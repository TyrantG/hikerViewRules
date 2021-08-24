const channels_path = "hiker://files/rules/js/TyrantGenesis_触站关注.js"

const baseParse = _ => {
    // 初始化
    let d = [];
    const base_url = "https://www.huashi6.com"
    const empty = "hiker://empty"
    const page = MY_URL.split('##')[1]
    const cateArray = [
        {
            title: '关注画师',
            url: empty,
        },
        {
            title: '新作',
            url: "https://www.huashi6.com/share_"+page,
        },
        {
            title: '热门',
            url: "https://www.huashi6.com/hot_"+page,
        },
        /*{
            title: '标签',
            url: "https://www.huashi6.com/tags",
        },*/
        {
            title: '今日榜单',
            url: "https://rt.huashi6.com/front/works/rank_page",
        },
        {
            title: '推荐画师',
            url: "https://rt.huashi6.com/front/painter/list?index="+page+"&size=12",
        },
        {
            title: '取消关注',
            url: empty,
        },
        {
            title: '置顶关注',
            url: empty,
        }
    ]
    let channels

    // 缓存
    let cate = getVar("tyrantgenesis.huashi6.cate_select", "0")
    let channel_select = getVar("tyrantgenesis.huashi6.channel_select", "0")
    let button_show = getVar("tyrantgenesis.huashi6.button_show", "1") // 1:热门,2:收起,3:取消,4:置顶

    if (fetch(channels_path)) {
        let local_channels = fetch(channels_path)
        channels = JSON.parse(local_channels)
    } else {
        let defaultChannels = [
            {name: 'wlop', uid: '7168', avatar: 'https://img2.huashi6.com/images/resource/2015/06/24/51h068746p0.jpg?imageView2/1/q/100/interlace/1/w/160/h/160'},
        ]
        writeFile(channels_path, JSON.stringify(defaultChannels))
        channels = defaultChannels
    }

    if (parseInt(page) === 1) {
        cateArray.forEach((item, index) => {
            d.push({
                title: parseInt(cate) === index ? '‘‘’’<strong><font color="red">'+item.title+'</font></strong>' : item.title,
                url: $(empty).lazyRule(params => {
                    putVar("tyrantgenesis.huashi6.cate_select", params.index.toString())
                    refreshPage(true)
                    return "hiker://empty"
                }, {
                    item: item,
                    index: index
                }),
                col_type: 'scroll_button',
            })
        })
    }

    switch (cate) {
        case '0': {
            let uid = channels[channel_select].uid
            if (parseInt(page) === 1) {
                d.push({
                    col_type: 'blank_block',
                })
                d.push({
                    title: button_show === '1' ? '‘‘’’<strong><font color="red">关注画师</font></strong>' : '关注画师',
                    url: $(empty).lazyRule(_ => {
                        putVar("tyrantgenesis.huashi6.button_show", '1')
                        refreshPage(true)
                        return "hiker://empty"
                    }),
                    col_type: 'scroll_button',
                })
                d.push({
                    title: button_show === '2' ? '‘‘’’<strong><font color="red">收起</font></strong>' : '收起',
                    url: $(empty).lazyRule(_ => {
                        putVar("tyrantgenesis.huashi6.button_show", '2')
                        refreshPage(true)
                        return "hiker://empty"
                    }),
                    col_type: 'scroll_button',
                })
                d.push({
                    title: button_show === '3' ? '‘‘’’<strong><font color="red">置顶</font></strong>' : '置顶',
                    url: $(empty).lazyRule(_ => {
                        putVar("tyrantgenesis.huashi6.button_show", '3')
                        refreshPage(true)
                        return "hiker://empty"
                    }),
                    col_type: 'scroll_button',
                })
                d.push({
                    title: button_show === '4' ? '‘‘’’<strong><font color="red">取消</font></strong>' : '✓取消',
                    url: $(empty).lazyRule(_ => {
                        putVar("tyrantgenesis.huashi6.button_show", '4')
                        refreshPage(true)
                        return "hiker://empty"
                    }),
                    col_type: 'scroll_button',
                })
                channels.forEach((channel, index) => {
                    d.push({
                        title: parseInt(channel_select) === index ? '✓'+channel.name : channel.name,
                        pic_url: channel.avatar+'@Referer='+base_url,
                        url: $(empty).lazyRule(param => {
                            putVar("tyrantgenesis.huashi6.channel_select", param.index.toString())
                            refreshPage(true)
                            return "hiker://empty"
                        }, {
                            index: index
                        }),
                        col_type: 'icon_round_4',
                    })
                })
            }
            break
        }
        case '1':
        case '2': {
            let html = fetch(cateArray[parseInt(cate)].url, {headers:{"User-Agent": PC_UA}})

            let list = parseDomForArray(html, '.px-container&&.px-waterfall-item')

            list.forEach(item => {
                d.push({
                    title: parseDomForHtml(item, '.px-info-title&&Text'),
                    pic_url: parseDomForHtml(item, 'source&&srcset').split(' ')[0]+'@Referer='+base_url,
                    url: parseDomForHtml(item, 'a&&href'),
                    desc: parseDomForHtml(item, '.painter-name&&Text'),
                    col_type: 'movie_3'
                })
            })

            break
        }
        case '3': {
            /*if (parseInt(page) === 1) {
                let html = fetch(cateArray[parseInt(cate)].url, {headers:{"User-Agent": PC_UA}})

                let list = parseDomForArray(html, '.c-tag-alphabet-list&&li')

                list.forEach((item, index) => {
                    let title = parseDomForHtml(item, '.row-label&&Text')
                    let tagList = parseDomForArray(item, '.label-list&&a')
                    d.push({
                        title: '首字母：'+title,
                        col_type: 'text_1'
                    })
                    if (index === 1)
                        tagList.forEach(tag => {
                            d.push({
                                title: parseDomForHtml(tag, 'a&&Text'),
                                url: parseDomForHtml(tag, 'a&&href'),
                                col_type: 'flex_button',
                            })
                        })
                    d.push({
                        col_type: 'line_blank'
                    })
                })
            }*/
            if (parseInt(page) === 1) {
                let list_json = fetch(cateArray[parseInt(cate)].url, {headers:{
                    "User-Agent": PC_UA,
                    "body": "index=0&size=50"
                }})

                let list = JSON.parse(list_json).data.works.datas

                list.forEach(item => {
                    d.push({
                        title: item.title,
                        pic_url: "https://img2.huashi6.com/"+item.coverImage.path+'@Referer='+base_url,
                        url: "https://www.huashi6.com/draw/"+item.id,
                        desc: item.description,
                        col_type: 'movie_3_marquee'
                    })
                })
            }

            break
        }
        case '4': {
            let list_json = fetch(cateArray[parseInt(cate)].url, {headers:{"User-Agent": PC_UA}})

            let list = JSON.parse(list_json).data.datas

            list.forEach(item => {
                d.push({
                    title: item.name,
                    pic_url: item.coverImageUrl ? "https://img2.huashi6.com/"+item.coverImageUrl+'@Referer='+base_url : "https://res2.huashi6.com/static/hst/pc/imgs/default_avatar.d59d546.png"+'@Referer='+base_url,
                    url: "https://www.huashi6.com/painter/"+item.id,
                    desc: item.profile,
                    col_type: 'movie_3_marquee'
                })
            })

            break
        }
    }

    setResult(d);
}