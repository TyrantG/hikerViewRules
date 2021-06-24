const channels_path = "hiker://files/rules/js/TyrantGenesis_抖音关注.js"

const baseParse = _ => {
    let d = [];
    let html = fetch("https://www.douyin.com", {headers:{"User-Agent": PC_UA}})
    let current_page = MY_URL.split('##')[1].toString()
    let category = parseDomForArray(html, '._92400026d1182d4f8f006dada62ebc1c-scss&&a')
    let channels

    let defaultChannels = [
        {title: '乃万NINEONE', sec_uid: 'MS4wLjABAAAAPqhPtBXeQ1E3eow8onFHRaZsfKXZnb9gLii-8QvhiJ4', avatar_url: 'https://p9.douyinpic.com/aweme/1080x1080/31afc0003a07472f77daf.jpeg?from=116350172'},
    ]
    channels = defaultChannels

    let cate_select = getVar("tyrantgenesis.douyin_web.cate_select", "")
    let channel_select = getVar("tyrantgenesis.douyin_web.channel_select", "0")
    let button_show = getVar("tyrantgenesis.douyin_web.button_show", "1") // 1:热门,2:直播,3:关注,4:收起,5:取消,6:置顶
    let max_cursor = getVar("tyrantgenesis.douyin_web.max_cursor", "")

    let level_1_button_1_title = '',
        // level_1_button_2_title = '',
        level_1_button_3_title = '',
        level_1_button_4_title = '',
        level_1_button_3_show = '',
        level_1_button_4_show = ''

    switch (button_show) {
        case "1": {
            level_1_button_1_title = '‘‘’’<strong><font color="red">热门视频</font></strong>'
            // level_1_button_2_title = '热门直播'
            level_1_button_3_title = '我的关注'
            level_1_button_4_title = '取消关注'
            level_1_button_3_show = '3'
            level_1_button_4_show = '5'
            break
        }
        /*case "2": {
            level_1_button_1_title = '热门视频'
            level_1_button_2_title = '‘‘’’<strong><font color="red">热门直播</font></strong>'
            level_1_button_3_title = '我的关注'
            level_1_button_4_title = '取消关注'
            break
        }*/
        case "3": {
            level_1_button_1_title = '热门视频'
            // level_1_button_2_title = '热门直播'
            level_1_button_3_title = '‘‘’’<strong><font color="red">我的关注</font></strong>'
            level_1_button_4_title = '取消关注'
            level_1_button_3_show = '4'
            level_1_button_4_show = '5'
            break
        }
        case "4": {
            level_1_button_1_title = '热门视频'
            // level_1_button_2_title = '热门直播'
            level_1_button_3_title = '‘‘’’<strong><font color="red">我的关注</font></strong>'
            level_1_button_4_title = '取消关注'
            level_1_button_3_show = '3'
            level_1_button_4_show = '5'
            break
        }
        case "5": {
            level_1_button_1_title = '热门视频'
            // level_1_button_2_title = '热门直播'
            level_1_button_3_title = '我的关注'
            level_1_button_4_title = '‘‘’’<strong><font color="red">取消关注</font></strong>'
            level_1_button_3_show = '3'
            level_1_button_4_show = '6'
            break
        }
        case "6": {
            level_1_button_1_title = '热门视频'
            // level_1_button_2_title = '热门直播'
            level_1_button_3_title = '我的关注'
            level_1_button_4_title = '‘‘’’<strong><font color="red">置顶关注</font></strong>'
            level_1_button_3_show = '3'
            level_1_button_4_show = '5'
            break
        }
    }

    if (current_page === '1') {
        d.push({
            title: level_1_button_1_title,
            url: $("hiker://empty").lazyRule(_ => {
                putVar("tyrantgenesis.douyin_web.button_show", "1")
                refreshPage(true)
                return "hiker://empty"
            }),
            col_type: 'text_3',
        })
        /*d.push({
            title: level_1_button_2_title,
            col_type: 'text_4',
        })*/
        d.push({
            title: level_1_button_3_title,
            url: $("hiker://empty").lazyRule(params => {
                putVar("tyrantgenesis.douyin_web.button_show", params.level_1_button_3_show)
                refreshPage(true)
                return "hiker://empty"
            }, {
                level_1_button_3_show: level_1_button_3_show
            }),
            col_type: 'text_3',
        })
        d.push({
            title: level_1_button_4_title,
            url: $("hiker://empty").lazyRule(params => {
                putVar("tyrantgenesis.douyin_web.button_show", params.level_1_button_4_show)
                refreshPage(true)
                return "hiker://empty"
            }, {
                level_1_button_4_show: level_1_button_4_show
            }),
            col_type: 'text_3',
        })
    }

    /*d.push({
        col_type:"blank_block"
    })*/

    switch (button_show) {
        case "1": {
            if (current_page === '1') {
                d.push({
                    title: cate_select === '' ? '‘‘’’<strong><font color="red">全部</font></strong>' : '全部',
                    url: $("hiker://empty").lazyRule(_ => {
                        putVar("tyrantgenesis.douyin_web.cate_select", "")
                        refreshPage(false)
                        return "hiker://empty"
                    }),
                    col_type: 'scroll_button',
                })
                category.forEach(cate => {
                    let href = parseDomForHtml(cate, 'a&&href')
                    let cate_id = href.split('/').pop()
                    if (/^[\d]+$/.test(cate_id)) {
                        d.push({
                            title: cate_select === cate_id.toString() ? '‘‘’’<strong><font color="red">'+parseDomForHtml(cate, 'a&&Text')+'</font></strong>' : parseDomForHtml(cate, 'a&&Text'),
                            url: $("hiker://empty").lazyRule(params => {
                                putVar("tyrantgenesis.douyin_web.cate_select", params.cate_id.toString())
                                refreshPage(false)
                                return "hiker://empty"
                            }, {
                                cate_id: cate_id
                            }),
                            col_type: 'scroll_button',
                        })
                    }
                })
                let not_sign_url = "https://www.douyin.com/aweme/v1/web/channel/feed/?device_platform=webapp&aid=6383&channel=channel_pc_web&tag_id="+cate_select+"&count=20&version_code=160100&version_name=16.1.0"
                let sign = fetch("http://douyin_signature.dev.tyrantg.com?url="+encodeURIComponent(not_sign_url))
                let true_url = not_sign_url + "&_signature="+sign
                let data_json = fetch(true_url, {
                    headers: {
                        "referer" : "https://www.douyin.com/"
                    }
                })

                if (data_json === 'Need Verifying') {
                    d.push({
                        title: 'signature 获取失败，待修复',
                        col_type: "long_text",
                    })
                } else {
                    let list = JSON.parse(data_json).aweme_list
                    list.forEach(item => {
                        d.push({
                            title: item.desc,
                            pic_url: item.video.cover.url_list.shift(),
                            desc: '',
                            url: item.video.play_addr.url_list.shift() + "#isVideo=true#",
                            col_type: 'movie_2',
                        })
                    })
                }
            } else if (current_page === '2') {
                d.push({
                    title: '没有更多内容了~',
                    col_type: 'text_center_1',
                })
            }

            break
        }
        case "3":
        case "4": {

            const sec_uid = channels[channel_select].sec_uid

            if (current_page === '1') {
                channels.forEach(channel => {
                    d.push({
                        title: channel.title,
                        pic_url: channel.avatar_url,
                        col_type: 'icon_round_4'
                    })
                })

                d.push({
                    col_type:"blank_block"
                })

                let web_url = "https://www.douyin.com/user/"+sec_uid
                let html = fetch(web_url, {headers:{"User-Agent": PC_UA}})
                max_cursor = html.match(/%22maxCursor%22%3A(.*?)%2C%22/)[1]
            }

            let not_sign_url = "https://www.douyin.com/aweme/v1/web/aweme/post/?device_platform=webapp&aid=6383&channel=channel_pc_web&sec_user_id="+sec_uid+"&max_cursor="+max_cursor+"&count=10&publish_video_strategy_type=2&version_code=160100&version_name=16.1.0"
            let sign = fetch("http://douyin_signature.dev.tyrantg.com?url="+encodeURIComponent(not_sign_url))
            let true_url = not_sign_url + "&_signature="+sign
            let data_json = fetch(true_url, {
                headers: {
                    "referer" : "https://www.douyin.com/"
                }
            })

            if (data_json === 'Need Verifying') {
                d.push({
                    title: 'signature 获取失败，待修复',
                    col_type: "long_text",
                })
            } else {
                let data = JSON.parse(data_json)
                putVar("tyrantgenesis.douyin_web.max_cursor", data.max_cursor.toString())
                let list = JSON.parse(data_json).aweme_list
                list.forEach(item => {
                    d.push({
                        title: item.desc,
                        pic_url: item.video.cover.url_list.shift(),
                        desc: '',
                        url: item.video.play_addr.url_list.shift() + "#isVideo=true#",
                        col_type: 'movie_2',
                    })
                })
            }
            break

        }
    }


    setResult(d);
}