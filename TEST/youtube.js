const baseParse = _ => {
    let d = [];
    const key = "AIzaSyBy6kexDANJ48q-JvTSm6_Klew7qDrYGTM"
    const channels_path = "hiker://files/rules/js/TyrantGenesis_YouTube频道.js"
    let channels = []
    let script = ""
    if (fileExist(channels_path) === 'true') {
        script = fetch(channels_path)
    } else {
        script = `local_channels = [{title: 'J. Cole', channelId: 'UCnc6db-y3IU7CkT_yeVXdVg', uploadsId: 'UUnc6db-y3IU7CkT_yeVXdVg', icon: 'https://yt3.ggpht.com/ytc/AAUvwniDYxWC2x4VZF7ecutGEaLpssNmrptdeuVFJI999g=s88-c-k-c0x00ffffff-no-rj-mo'}, {title: 'Lofi Girl', channelId: 'UCSJ4gkVC6NrvII8umztf0Ow', uploadsId: 'UUSJ4gkVC6NrvII8umztf0Ow', icon: 'https://yt3.ggpht.com/ytc/AAUvwnhGIymQGp3jRMECbTCBSRAUqi8sKbATpWowQG44CA=s88-c-k-c0x00ffffff-no-rj'}, {title: 'HatsuneMiku', channelId: 'UCJwGWV914kBlV4dKRn7AEFA', uploadsId: 'UUJwGWV914kBlV4dKRn7AEFA', icon: 'https://yt3.ggpht.com/ytc/AAUvwnjlsiW6yKsmkrfqn2foSm-ONTTWLeK_G70PF6TXBg=s800-c-k-c0x00ffffff-no-rj-mo'}]`
        writeFile(channels_path, script)
    }
    eval(script)
    channels = local_channels || []

    const channel_select = getVar("tyrantgenesis.youtube.channel_select", "2")
    const max_results = getVar("tyrantgenesis.youtube.max_results", "10")
    const page_token = getVar("tyrantgenesis.youtube.page_token", "")
    const channel_show = getVar("tyrantgenesis.youtube.channel_show", "1") // 0:关闭,1:展示,2:取消,3:置顶
    const search_select = getVar("tyrantgenesis.youtube.search_select", "video") // channel
    const search_show = getVar("tyrantgenesis.youtube.search_show", "1")

    let button_1_title = '',  button_2_title = '', channel_prefix_status = false, channel_prefix = '', button_1_status = '', button_2_status = ''
    switch(channel_show) {
        case '0': {
            button_1_title = '关注频道'
            button_2_title = '取消关注'
            channel_prefix_status = false
            channel_prefix = ''
            button_1_status = '1'
            button_2_status = '2'
            break
        }
        case '1': {
            button_1_title = '‘‘’’<strong><font color="red">关注频道</font></strong>'
            button_2_title = '取消关注'
            channel_prefix_status = false
            channel_prefix = '✓'
            button_1_status = '0'
            button_2_status = '2'
            break
        }
        case '2': {
            button_1_title = '关注频道'
            button_2_title = '‘‘’’<strong><font color="red">取消关注</font></strong>'
            channel_prefix_status = true
            channel_prefix = '❌'
            button_1_status = '1'
            button_2_status = '3'
            break
        }
        case '3': {
            button_1_title = '关注频道'
            button_2_title = '‘‘’’<strong><font color="red">置顶关注</font></strong>'
            channel_prefix_status = true
            channel_prefix = '🔝'
            button_1_status = '1'
            button_2_status = '2'
            break
        }
    }

    if (search_show === '1') {
        d.push({
            title: search_select === 'video' ? '‘‘’’<strong>搜索：<font color="red">视频</font></strong>' : '搜索：视频',
            url: $('').lazyRule(_ => {
                putVar("tyrantgenesis.youtube.search_select", "video")
                refreshPage(false)
                return "hiker://empty"
            }),
            col_type: 'text_2'
        })
        d.push({
            title: search_select === 'channel' ? '‘‘’’<strong>搜索：<font color="red">频道</font></strong>' : '搜索：频道',
            url: $('').lazyRule(_ => {
                putVar("tyrantgenesis.youtube.search_select", "channel")
                refreshPage(false)
                return "hiker://empty"
            }),
            col_type: 'text_2'
        })

        d.push({
            url: "input.trim() ? $('hiker://empty').rule(params => {eval(fetch('hiker://files/TyrantG/tyrantgenesis.js'));searchParse(params);}, {input: input.trim(), search_select: "+search_select+"}) : 'toast://请输入搜索内容'",
            col_type: "input"
        });
    }

    d.push({
        title: button_1_title,
        url: $("").lazyRule(params => {
            putVar("tyrantgenesis.youtube.channel_show", params.button_1_status)
            refreshPage(false)
            return "hiker://empty"
        }, {
            button_1_status: button_1_status
        }),
        col_type: 'text_4',
    })
    d.push({
        title: button_2_title,
        url: $("").lazyRule(params => {
            putVar("tyrantgenesis.youtube.channel_show", params.button_2_status)
            refreshPage(false)
            return "hiker://empty"
        }, {
            button_2_status: button_2_status
        }),
        col_type: 'text_4',
    })
    d.push({
        title: search_show === '1' ? '隐藏搜索' : '显示搜索',
        url: $("").lazyRule(params => {
            putVar("tyrantgenesis.youtube.search_show", params.search_show === '1' ? '0' : '1')
            refreshPage(false)
            return "hiker://empty"
        }, {
            search_show: search_show
        }),
        col_type: 'text_4',
    })
    d.push({
        title: '设置',
        url: 'hiker://empty',
        col_type: 'text_4',
    })

    if (channel_show !== '0') {
        channels.forEach((item, index) => {
            d.push({
                title: (parseInt(channel_select) === index || channel_prefix_status) ? channel_prefix+item.title : item.title,
                pic_url: item.icon,
                url: $("").lazyRule(params => {
                    // TODO 删除、排序
                    putVar("tyrantgenesis.youtube.channel_select", params.index.toString())
                    putVar("tyrantgenesis.youtube.page_token", "")
                    refreshPage(false)
                    return "hiker://empty"
                }, {
                    index: index,
                    channel_show: channel_show,
                }),
                col_type: 'icon_round_4',
            })
        })
        d.push({
            col_type:"blank_block"
        })
    }

    if (channels.length > 0) {
        const url = "https://www.googleapis.com/youtube/v3/playlistItems?key="+key+"&part=snippet&maxResults="+max_results+"&playlistId="+channels[channel_select].uploadsId+"&pageToken="+page_token
        const video_item_json = fetch(url)
        const video_item = JSON.parse(video_item_json)
        const list = video_item.items

        if (video_item.prevPageToken) {
            d.push({
                title: '上一页',
                url: $("").lazyRule(video_item => {
                    putVar("tyrantgenesis.youtube.page_token", video_item.prevPageToken)
                    refreshPage(true)
                    return "hiker://empty"
                }, video_item),
                col_type: 'text_center_1',
            })
            d.push({
                col_type: 'blank_block',
            })
        }

        list.forEach(item => {
            let thumbnails = item.snippet.thumbnails
            let pic_url = thumbnails[Object.keys(thumbnails)[Object.keys(thumbnails).length - 1]].url
            let video_id = item.snippet.resourceId.videoId
            let video_url = "https://www.googleapis.com/youtube/v3/videos?key="+key+"&part=snippet&part=snippet&id="+video_id
            d.push({
                title: item.snippet.title,
                pic_url: pic_url,
                url: $(video_url).rule(params => {
                    let d = [];
                    const video_desc_json = getResCode()
                    const video_desc = JSON.parse(video_desc_json)
                    const snippet = video_desc.items[0].snippet

                    let thumbnails = snippet.thumbnails
                    let pic_url = thumbnails[Object.keys(thumbnails)[Object.keys(thumbnails).length - 1]].url
                    let ori_url = "https://m.youtube.com/watch?v="+params.video_id

                    d.push({
                        title: snippet.title,
                        pic_url: pic_url,
                        url: ori_url,
                        desc: snippet.description,
                        col_type: 'pic_1'
                    })

                    const videoParse = fetch("https://www.youtubemy.com/search?url="+ori_url)
                    const video_list = parseDomForArray(videoParse, '.video_files&&a')
                    video_list.forEach(video => {
                        let audio = parseDomForHtml(video, 'img&&src').indexOf("yy.png") !== -1
                        d.push({
                            title: parseDomForHtml(video, 'a&&Text').replace(/\(.*?\)/, '') + (audio ? '（有声）' : '（无声）'),
                            url: parseDomForHtml(video, 'a&&href'),
                            col_type: 'text_2'
                        })
                    })

                    setResult(d);
                }, {
                    video_id: video_id,
                }),
                col_type: 'movie_2',
            })
        })

        if (video_item.nextPageToken) {
            d.push({
                col_type: 'blank_block',
            })
            d.push({
                title: '下一页',
                url: $("").lazyRule(video_item => {
                    putVar("tyrantgenesis.youtube.page_token", video_item.nextPageToken)
                    refreshPage(true)
                    return "hiker://empty"
                }, video_item),
                col_type: 'text_center_1',
            })
        }
    } else {
        d.push({
            title: '还没有关注的频道',
            col_type: 'long_text',
        })
    }

    setResult(d);
}

const searchParse = params => {
    const search = params.input
    const type = params.search_select
    const key = "AIzaSyBy6kexDANJ48q-JvTSm6_Klew7qDrYGTM"
    const max_results = getVar("tyrantgenesis.youtube.max_results", "10")
    const url = "https://www.googleapis.com/youtube/v3/search?key="+key+"&part=snippet,id&maxResults="+max_results+"&type="+type+"&q="+search
    setError(url);
}