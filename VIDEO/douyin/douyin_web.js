const douyin = {
    d: [],
    empty: 'hiker://empty',
    files: {
        cookieTemp: 'hiker://files/rules/TyrantG/cookie/douyin.txt',
        channels: 'hiker://files/rules/js/TyrantGenesis_抖音关注.js',
    },
    variable: {
        host: 'https://www.douyin.com',
        tabs: [
            {title: '推荐', name: 'feed'},
            {title: '热点', name: 'hot'},
            {title: '本地关注', name: 'local'},
            {title: '抖音关注', name: 'attention'},
            {title: '直播', name: 'live'},
            {title: '设置', name: 'setting'},
        ],
    },
    data: {
        tab_selected: getMyVar('tg.dy_web.class.tab_selected', '0'),
    },
    channelsInit: () => {
        let channels

        if (fetch(douyin.files.channels)) {
            let local_channels = fetch(douyin.files.channels)
            channels = JSON.parse(local_channels)
        } else {
            let defaultChannels = [
                {title: '长期洗涤Longwashing', sec_uid: 'MS4wLjABAAAAG6rxkrEV5bnuXAL1K8uiY8dZKkFBLszhYw1nm5_ohIQ', avatar_url: 'https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-avt-0015_f8826b2fe246913f696a2ca94a832e23~c5_300x300.jpeg?from=2956013662'},
            ]
            writeFile(douyin.files.channels, JSON.stringify(defaultChannels))
            channels = defaultChannels
        }

        return channels
    },
    baseParse: () => {
        // eval(JSON.parse(request('hiker://page/signature')).rule)
        // log(search_item('天天'))

        const cookie_content = request(douyin.files.cookieTemp)
        const has_login = cookie_content.match(/(^| )LOGIN_STATUS=([^;]*)(;|$)/)

        if (has_login) {
            const page = parseInt(MY_URL.split('##')[1])
            const channels = douyin.channelsInit()

            if (page === 1) {
                douyin.d.push({
                    url: $(douyin.empty+"#fullTheme#$$fypage").rule(() => {
                        const douyin = $.require('hiker://page/douyin')

                        setResult(douyin.d)
                    }),
                    title: '请输入关键词',
                    col_type: "icon_1_search",
                })

                douyin.variable.tabs.forEach((item, index) => {
                    let url
                    if (item.name === 'setting') {
                        url = $(douyin.empty).rule(() => {
                            const douyin = $.require('hiker://page/douyin')
                            douyin.settingParse()
                            setResult(douyin.d)
                        })
                    } else {
                        url = $(douyin.empty).lazyRule((index) => {
                            putMyVar('tg.dy_web.class.tab_selected', index)
                            refreshPage(false)
                            return 'hiker://empty'
                        }, index.toString())
                    }
                    douyin.d.push({
                        title: douyin.data.tab_selected === index.toString() ? '‘‘’’<strong><font color="#5FCC97">'+item.title+'</font></strong>' : item.title,
                        url: url,
                        col_type: 'scroll_button',
                    })
                })
                douyin.d.push({
                    col_type: 'blank_block',
                })
            }
            douyin.feedList(cookie_content, page)

        } else {
            douyin.d.push({
                title: '小程序没有检测到有效的cookie，请按照下面步骤登录抖音网页版以获取cookie',
                col_type: 'rich_text',
            })
            douyin.d.push({
                title: '前往登录',
                url: $(douyin.empty+'#fullTheme#').rule(() => {
                    const douyin = $.require('hiker://page/douyin')
                    douyin.d.push({
                        url: 'https://www.douyin.com',
                        desc: '100%&&float',
                        col_type: 'x5_webview_single',
                        extra: {
                            ua: PC_UA,
                            canBack: true,
                            js: $.toString(douyin.injectJS),
                        }
                    })
                    setResult(douyin.d)
                }),
                col_type: 'text_1',
            })
            douyin.d.push({
                title: '输入已登录的网站cookie',
                col_type: 'text_1',
            })
        }

        setResult(douyin.d)
    },
    settingParse: () => {

    },
    injectJS: () => {
        const getCookie = function (name) {
            let arr;
            const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
            if (arr = document.cookie.match(reg)) return unescape(arr[2]);
            return null;
        };

        const interval = setInterval(() => {
            let login_status = getCookie('LOGIN_STATUS')
            if (login_status && login_status === '1') {
                // fba.log(login_status)
                alert('获取登录信息成功')
                clearInterval(interval)
                fba.writeFile('hiker://files/rules/TyrantG/cookie/douyin.txt', document.cookie)
                fba.back()
            }
        }, 1000)
    },
    feedList: (cookie_content, page) => {
        eval(JSON.parse(request('hiker://page/signature')).rule)
        let e = {
            "url": "/aweme/v1/web/channel/feed/",
            "method": "get",
            "headers": {
                "Accept": "application/json, text/plain, */*",
                "Content-Type": "application/json",
                "withCredentials": true
            },
            "params": {
                "device_platform": "webapp",
                "aid": 6383,
                "channel": "channel_pc_web",
                "tag_id": "",
                "count": 20,
                "refresh_index": page,
                "pc_client_type": 1,
                "version_code": "170400",
                "version_name": "17.4.0",
                "cookie_enabled": true,
                "screen_width": 1920,
                "screen_height": 1080,
                "browser_language": "zh-CN",
                "browser_platform": "Win32",
                "browser_name": "Mozilla",
                "browser_version": "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.164 Safari/537.36",
                "browser_online": true
            },
        }
        const url = makeSignatureUrl(douyin.variable.host, e)

        let data_json = fetch(url, {
            headers: {
                "referer" : "https://www.douyin.com/",
                "cookie": cookie_content,
                "Accept": 'application/json, text/plain, */*',
                "User-Agent": PC_UA,
                "Accept-Language": 'zh-CN,zh;q=0.9',
            }
        })

        if (! data_json || data_json === 'Need Verifying') {
            douyin.d.push({
                title: 'signature 获取失败，待修复',
                col_type: "long_text",
            })
        } else {
            let list = JSON.parse(data_json).aweme_list
            if (list && list.length > 0) {
                list.forEach(item => {
                    if (item.video && item.author) {
                        douyin.d.push({
                            title: item.desc,
                            pic_url: item.video.cover.url_list[0],
                            desc: item.author.nickname,
                            url: $("https://www.douyin.com/video/"+item.aweme_id+"##fypage").rule(item => {

                            }, item),
                            col_type: 'movie_2',
                        })
                    }
                })
            }
        }
    },
}

$.exports = douyin
