const getQueryVariable = (host, variable) => {
    let vars = host.split("&");
    for (let i=0;i<vars.length;i++) {
        let pair = vars[i].split("=");
        if(pair[0] === variable) return pair[1]
    }
    return false
}

const baseParse = _ => {
    let d = [];
    // const list_json = parseDomForHtml(getResCode(), "#ssrData&&Text")
    const list_json = getResCode().match(/window\.HNF_GLOBAL_INIT = (.*?) <\/script>/)[1]
    const json = JSON.parse(list_json)
    const list = json.recommendList

    d.push({
        desc: '48',
        url: 'file:///storage/emulated/0/Android/data/com.example.hikerview/files/Documents/TyrantG/public/huya-tabs.html',
        col_type:"x5_webview_single"
    })

    list.forEach((cate, index) => {
        let group = cate.sName, current_cate, cate_id
            
        try {

            let videoDom = cate.vItems.value
            cate_id = videoDom[0].iGameId
            current_cate = "g/"+cate_id
            let group_url = "https://m.huya.com/"+current_cate+'?p=fypage&id='+cate_id

            d.push({
                title: group,
                pic_url: cate.sIcon,
                url: $(group_url).rule(params => {
                    eval(fetch('hiker://files/TyrantG/LIVE/huya.js'))
                    categoryParse(params.index)
                }, {index: index}),
                col_type: 'avatar'
            })
            videoDom.forEach(item => {
                d.push({
                    title: item.sTitle,
                    desc: item.sNickName,
                    pic_url: item.sCoverUrl,
                    url: $("https://m.huya.com"+item.sAction).lazyRule( _ => {
                        eval(fetch('hiker://files/TyrantG/LIVE/huya.js'))
                        return secParse()
                    }),
                    col_type: 'movie_2'
                })
            })
            d.push({
                col_type: 'line_blank'
            })
        } catch (e) {}
    })

    setResult(d);
}

const secParse = params => {
    let rid = input.split('/').pop()
    let html = fetch(input, {headers:{"User-Agent": MOBILE_UA}})

    let live_json = html.match(/window.HNF_GLOBAL_INIT = (.*?)<\/script>/)[1]
    let live  = JSON.parse(live_json)
    let streamInfo = live.roomInfo.tLiveInfo.tLiveStreamInfo.vStreamInfo.value
    // let gameName = live.roomInfo.tLiveInfo.sGameFullName
    // let defaultLiveStreamUrl = live.roomInfo.tLiveInfo.tLiveStreamInfo.sDefaultLiveStreamUrl

    let liva_url

    /*if (gameName === '一起看') {
        streamInfo.forEach(info => {
            if (info.sCdnType === 'AL') {
                liva_url = info.sHlsUrl + '/' + info.sStreamName + '.' + info.sHlsUrlSuffix + '?' + info.sHlsAntiCode
            }
        })
    } else {

    }*/

    streamInfo.forEach(info => {
        if (info.sCdnType === 'TX') {
            liva_url = info.sFlvUrl + '/' + info.sStreamName + '.' + info.sFlvUrlSuffix + '?' + info.sFlvAntiCode
        }
    })

    return getRealUrl(liva_url)
}

const categoryParse = index =>{
    let d = [];
    let id = getQueryVariable(MY_URL, 'id')
    let page = getQueryVariable(MY_URL, 'page')
    const url = index === 0 ? "https://m.huya.com/cache.php?m=Live&do=ajaxGetProfileLive&page="+page+"&pageSize=120" : "https://m.huya.com/cache.php?m=Game&do=ajaxGetGameLive&gameId="+id+"&page="+page+"&pageSize=120"
    const html = fetch(url, {headers:{"User-Agent":MOBILE_UA}});
    const list = JSON.parse(html).gameList ? JSON.parse(html).gameList : JSON.parse(html).profileList

    list.forEach(item => {
        d.push({
            title: item.introduction,
            desc: item.nick,
            pic_url: item.screenshot,
            url: $("https://m.huya.com/"+item.profileRoom).lazyRule(_ => {
                eval(fetch('hiker://files/TyrantG/LIVE/huya.js'))
                return secParse()
            }),
            col_type: 'movie_2'
        })
    })

    setResult(d);
}

const searchParse = () => {
    let res = {};
    let d = [];
    const html = getResCode();
    const list = JSON.parse(html).response[3].docs

    list.forEach(item => {
        d.push({
            title: item.game_roomName,
            desc: item.game_nick,
            pic_url: item.game_screenshot,
            url: $("https://m.huya.com/"+item.room_id).lazyRule(_ => {
                eval(fetch('hiker://files/TyrantG/LIVE/huya.js'))
                return secParse()
            }),
            col_type: 'movie_2'
        })
    })

    res.data = d;
    setHomeResult(res);
}

const cateGroupParse = _ => {
    let d = [], cate
    /*const list_json = parseDomForHtml(getResCode(), "#ssrData&&Text")
    const json = JSON.parse(list_json)*/

    const tabCurrent = parseInt(getVar('tab-current') || 0)
    switch (tabCurrent) {
        case 0: cate = JSON.parse(fetch("https://live.cdn.huya.com/liveconfig/game/bussLive?bussType=1")).data;break;
        case 1: cate = JSON.parse(fetch("https://live.cdn.huya.com/liveconfig/game/bussLive?bussType=2")).data;break;
        case 2: cate = JSON.parse(fetch("https://live.cdn.huya.com/liveconfig/game/bussLive?bussType=8")).data;break;
        case 3: cate = JSON.parse(fetch("https://live.cdn.huya.com/liveconfig/game/bussLive?bussType=3")).data;break;
        default: cate = /*json.gameList*/[]
    }

    d.push({
        desc: '45',
        url: 'file:///storage/emulated/0/Android/data/com.example.hikerview/files/Documents/TyrantG/public/huya-category.html',
        col_type:"x5_webview_single"
    })

    cate.forEach(cate2 => {
        d.push({
            title:cate2.gameFullName,
            pic_url:"https://huyaimg.msstatic.com/cdnimage/game/"+cate2.gid+"-MS.jpg",
            url: $("https://m.huya.com/g/"+cate2.gid+'?p=fypage&id='+cate2.gid).rule(_ => {
                eval(fetch('hiker://files/TyrantG/LIVE/huya.js'))
                categoryParse()
            }),
            col_type:"icon_round_4"
        });
    });
    setResult(d);
}

const getRealUrl = (live_url) => {
    let [i, b] = live_url.split('?')
    let r = i.split('/').pop()
    let s = r.replace(/\.(flv|m3u8)/, '')
    let c_tmp = b.split('&').filter(n => n)
    // let c = []
    let n = {}
    let c_tmp2 = []
    c_tmp.forEach((tmp, index) => {
        if (index < 3) {
            // c.push(tmp)
            n[tmp.split('=')[0]] = tmp.split('=')[1]
        } else {
            c_tmp2.push(tmp)
        }
    })
    let tmp2 = c_tmp2.join('&')
    n[tmp2.split('=')[0]] = tmp2.split('=')[1]

    let fm = decodeURIComponent(n.fm).split('&')[0]
    let u = base64Decode(fm)
    let p = u.split('_')[0]
    let f = new Date().getTime() + '0000'
    let ll = n.wsTime
    let t = '0'
    let h = [p, t, s, f, ll].join('_')
    let m = md5(h)
    return (i+"?wsSecret="+m+"&wsTime="+ll+"&u="+t+"&seqid="+f+"&"+tmp2).replace('http://', 'https://')
}
