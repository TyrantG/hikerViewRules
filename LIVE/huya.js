var hexcase=0;function hex_md5(a){ if(a=="") return a; return rstr2hex(rstr_md5(str2rstr_utf8(a)))}function hex_hmac_md5(a,b){return rstr2hex(rstr_hmac_md5(str2rstr_utf8(a),str2rstr_utf8(b)))}function md5_vm_test(){return hex_md5("abc").toLowerCase()=="900150983cd24fb0d6963f7d28e17f72"}function rstr_md5(a){return binl2rstr(binl_md5(rstr2binl(a),a.length*8))}function rstr_hmac_md5(c,f){var e=rstr2binl(c);if(e.length>16){e=binl_md5(e,c.length*8)}var a=Array(16),d=Array(16);for(var b=0;b<16;b++){a[b]=e[b]^909522486;d[b]=e[b]^1549556828}var g=binl_md5(a.concat(rstr2binl(f)),512+f.length*8);return binl2rstr(binl_md5(d.concat(g),512+128))}function rstr2hex(c){try{hexcase}catch(g){hexcase=0}var f=hexcase?"0123456789ABCDEF":"0123456789abcdef";var b="";var a;for(var d=0;d<c.length;d++){a=c.charCodeAt(d);b+=f.charAt((a>>>4)&15)+f.charAt(a&15)}return b}function str2rstr_utf8(c){var b="";var d=-1;var a,e;while(++d<c.length){a=c.charCodeAt(d);e=d+1<c.length?c.charCodeAt(d+1):0;if(55296<=a&&a<=56319&&56320<=e&&e<=57343){a=65536+((a&1023)<<10)+(e&1023);d++}if(a<=127){b+=String.fromCharCode(a)}else{if(a<=2047){b+=String.fromCharCode(192|((a>>>6)&31),128|(a&63))}else{if(a<=65535){b+=String.fromCharCode(224|((a>>>12)&15),128|((a>>>6)&63),128|(a&63))}else{if(a<=2097151){b+=String.fromCharCode(240|((a>>>18)&7),128|((a>>>12)&63),128|((a>>>6)&63),128|(a&63))}}}}}return b}function rstr2binl(b){var a=Array(b.length>>2);for(var c=0;c<a.length;c++){a[c]=0}for(var c=0;c<b.length*8;c+=8){a[c>>5]|=(b.charCodeAt(c/8)&255)<<(c%32)}return a}function binl2rstr(b){var a="";for(var c=0;c<b.length*32;c+=8){a+=String.fromCharCode((b[c>>5]>>>(c%32))&255)}return a}function binl_md5(p,k){p[k>>5]|=128<<((k)%32);p[(((k+64)>>>9)<<4)+14]=k;var o=1732584193;var n=-271733879;var m=-1732584194;var l=271733878;for(var g=0;g<p.length;g+=16){var j=o;var h=n;var f=m;var e=l;o=md5_ff(o,n,m,l,p[g+0],7,-680876936);l=md5_ff(l,o,n,m,p[g+1],12,-389564586);m=md5_ff(m,l,o,n,p[g+2],17,606105819);n=md5_ff(n,m,l,o,p[g+3],22,-1044525330);o=md5_ff(o,n,m,l,p[g+4],7,-176418897);l=md5_ff(l,o,n,m,p[g+5],12,1200080426);m=md5_ff(m,l,o,n,p[g+6],17,-1473231341);n=md5_ff(n,m,l,o,p[g+7],22,-45705983);o=md5_ff(o,n,m,l,p[g+8],7,1770035416);l=md5_ff(l,o,n,m,p[g+9],12,-1958414417);m=md5_ff(m,l,o,n,p[g+10],17,-42063);n=md5_ff(n,m,l,o,p[g+11],22,-1990404162);o=md5_ff(o,n,m,l,p[g+12],7,1804603682);l=md5_ff(l,o,n,m,p[g+13],12,-40341101);m=md5_ff(m,l,o,n,p[g+14],17,-1502002290);n=md5_ff(n,m,l,o,p[g+15],22,1236535329);o=md5_gg(o,n,m,l,p[g+1],5,-165796510);l=md5_gg(l,o,n,m,p[g+6],9,-1069501632);m=md5_gg(m,l,o,n,p[g+11],14,643717713);n=md5_gg(n,m,l,o,p[g+0],20,-373897302);o=md5_gg(o,n,m,l,p[g+5],5,-701558691);l=md5_gg(l,o,n,m,p[g+10],9,38016083);m=md5_gg(m,l,o,n,p[g+15],14,-660478335);n=md5_gg(n,m,l,o,p[g+4],20,-405537848);o=md5_gg(o,n,m,l,p[g+9],5,568446438);l=md5_gg(l,o,n,m,p[g+14],9,-1019803690);m=md5_gg(m,l,o,n,p[g+3],14,-187363961);n=md5_gg(n,m,l,o,p[g+8],20,1163531501);o=md5_gg(o,n,m,l,p[g+13],5,-1444681467);l=md5_gg(l,o,n,m,p[g+2],9,-51403784);m=md5_gg(m,l,o,n,p[g+7],14,1735328473);n=md5_gg(n,m,l,o,p[g+12],20,-1926607734);o=md5_hh(o,n,m,l,p[g+5],4,-378558);l=md5_hh(l,o,n,m,p[g+8],11,-2022574463);m=md5_hh(m,l,o,n,p[g+11],16,1839030562);n=md5_hh(n,m,l,o,p[g+14],23,-35309556);o=md5_hh(o,n,m,l,p[g+1],4,-1530992060);l=md5_hh(l,o,n,m,p[g+4],11,1272893353);m=md5_hh(m,l,o,n,p[g+7],16,-155497632);n=md5_hh(n,m,l,o,p[g+10],23,-1094730640);o=md5_hh(o,n,m,l,p[g+13],4,681279174);l=md5_hh(l,o,n,m,p[g+0],11,-358537222);m=md5_hh(m,l,o,n,p[g+3],16,-722521979);n=md5_hh(n,m,l,o,p[g+6],23,76029189);o=md5_hh(o,n,m,l,p[g+9],4,-640364487);l=md5_hh(l,o,n,m,p[g+12],11,-421815835);m=md5_hh(m,l,o,n,p[g+15],16,530742520);n=md5_hh(n,m,l,o,p[g+2],23,-995338651);o=md5_ii(o,n,m,l,p[g+0],6,-198630844);l=md5_ii(l,o,n,m,p[g+7],10,1126891415);m=md5_ii(m,l,o,n,p[g+14],15,-1416354905);n=md5_ii(n,m,l,o,p[g+5],21,-57434055);o=md5_ii(o,n,m,l,p[g+12],6,1700485571);l=md5_ii(l,o,n,m,p[g+3],10,-1894986606);m=md5_ii(m,l,o,n,p[g+10],15,-1051523);n=md5_ii(n,m,l,o,p[g+1],21,-2054922799);o=md5_ii(o,n,m,l,p[g+8],6,1873313359);l=md5_ii(l,o,n,m,p[g+15],10,-30611744);m=md5_ii(m,l,o,n,p[g+6],15,-1560198380);n=md5_ii(n,m,l,o,p[g+13],21,1309151649);o=md5_ii(o,n,m,l,p[g+4],6,-145523070);l=md5_ii(l,o,n,m,p[g+11],10,-1120210379);m=md5_ii(m,l,o,n,p[g+2],15,718787259);n=md5_ii(n,m,l,o,p[g+9],21,-343485551);o=safe_add(o,j);n=safe_add(n,h);m=safe_add(m,f);l=safe_add(l,e)}return Array(o,n,m,l)}function md5_cmn(h,e,d,c,g,f){return safe_add(bit_rol(safe_add(safe_add(e,h),safe_add(c,f)),g),d)}function md5_ff(g,f,k,j,e,i,h){return md5_cmn((f&k)|((~f)&j),g,f,e,i,h)}function md5_gg(g,f,k,j,e,i,h){return md5_cmn((f&j)|(k&(~j)),g,f,e,i,h)}function md5_hh(g,f,k,j,e,i,h){return md5_cmn(f^k^j,g,f,e,i,h)}function md5_ii(g,f,k,j,e,i,h){return md5_cmn(k^(f|(~j)),g,f,e,i,h)}function safe_add(a,d){var c=(a&65535)+(d&65535);var b=(a>>16)+(d>>16)+(c>>16);return(b<<16)|(c&65535)}function bit_rol(a,b){return(a<<b)|(a>>>(32-b))};

const getQueryVariable = (host, variable) => {
    let vars = host.split("&");
    for (let i=0;i<vars.length;i++) {
        let pair = vars[i].split("=");
        if(pair[0] === variable) return pair[1]
    }
    return false
}

const baseParse = _ => {
    let res = {};
    let d = [];
    // const list_json = parseDomForHtml(getResCode(), "#ssrData&&Text")
    const list_json = getResCode().match(/window\.HNF_GLOBAL_INIT = (.*?) <\/script>/)[1]
    const json = JSON.parse(list_json)
    const list = json.recommendList

    d.push({
        desc: '48',
        url: 'file:///storage/emulated/0/Android/data/com.example.hikerview/files/Documents/TyrantG/public/huya-tabs.html?time='+(new Date()).getTime(),
        col_type:"x5_webview_single"
    })

    list.forEach((cate, index) => {
        let group = cate.sName, current_cate, cate_id
        if(index === 0) log(cate)
            
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
                    url: $(item.sAction).lazyRule( _ => {
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

    res.data = d;
    setHomeResult(res);
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

    return liva_url
}

const categoryParse = index =>{
    let res = {};
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

    
    res.data = d;
    setHomeResult(res);
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
    let m = hex_md5(h)
    return "https:"+i+"?wsSecret="+m+"&wsTime="+ll+"&u="+t+"&seqid="+f+"&"+tmp2
}
