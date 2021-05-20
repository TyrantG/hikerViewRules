const baseParse = _ => {
    let res = {};
    let d = [];

    const list_json = fetch("https://m.douyu.com/api/home/mix");
    const list = JSON.parse(list_json)

    list.data.forEach(element => {
        let category_url = "https://m.douyu.com/api/room/list?page=fypage&type="+element.shortName
        d.push({
            title: element.cate2Info[0].cate2Name,
            pic_url: element.icon,
            url: $(category_url).rule(_ => {
                eval(fetch('hiker://files/TyrantG/LIVE/douyu.js'))
                categoryParse()
            }),
            col_type: 'icon_2'
        })
        d.push({
            col_type: 'line'
        })

        element.list.forEach(item => {
            d.push({
                title: item.roomName,
                desc: item.nickname,
                pic_url: item.roomSrc,
                url: "https://m.douyu.com/"+item.rid,
                col_type: 'movie_2'
            })
        })
        d.push({
            col_type: 'line_blank'
        })
    });

    res.data = d;
    setHomeResult(res);
}

const secParse = _ => {
    let res = {};
    let d = [];
    const html = getResCode();
    const script_raw = parseDomForHtml(html, "script&&Html");

    const script = script_raw.substring(0, script_raw.length-569);

    eval(script)

    const rid = parseInt(MY_URL.replace("https://m.douyu.com/", ""))

    const stream_json = fetch('http://douyu-api.dev.tyrantg.com/index.php?rid='+rid, {headers: {"Content-Type": "application/json"}})
    const stream = JSON.parse(stream_json)

    d.push({
        title: $ROOM.roomName,
        pic_url: $ROOM.roomSrc,
        desc: $ROOM.desc,
        url: stream.url,
        col_type: 'pic_1'
    })
    d.push({
        pic_url: $ROOM.avatar,
        title: $ROOM.nickname,
        url: stream.url,
        col_type: 'icon_2_round'
    })
    d.push({
        title: "观看直播",
        url: stream.url,
        col_type: 'icon_2'
    })

    res.data = d;
    setHomeResult(res);
}

const getFormatDate = _ => {
    var date = new Date();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentDate = date.getFullYear() + month + strDate
    return currentDate;
}

const getSign = (script, rid, did, tt) => {

    let result = script.match(/(function ub98484234.*)\s(var.*)/)[0]
    let func_ub9 = result.replace(/eval.*;}/, 'strc;}', result)
    eval(func_ub9)

    let res = ub98484234()
    let v = res.match(/v=(\d+)/)[0].replace("v=", '')
    let rb = hex_md5(rid + did + tt + v)

    let func_sign = res.replace(/return rt;}\);?/, 'return rt;}')
    func_sign = func_sign.replace('(function (', 'function sign(')
    func_sign = func_sign.replace('CryptoJS.MD5(cb).toString()', '"' + rb + '"')
    eval(func_sign)

    let params = sign(rid, did, tt)/*  + "&ver=219032101&rid={}&rate=-1&rid="+rid */
    return params
}

const categoryParse = _ =>{
    let res = {};
    let d = [];
    const html = getResCode();
    const list = JSON.parse(html).data

    list.list.forEach(item => {
        d.push({
            title: item.roomName,
            desc: item.nickname,
            pic_url: item.roomSrc,
            url: $("https://m.douyu.com/"+item.rid).rule(_ => {
                eval(fetch('hiker://files/TyrantG/LIVE/douyu.js'))
                secParse()
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
    const list = JSON.parse(html).data
    
    list.list.forEach(item => {
        d.push({
            title: "主播："+item.nickname,
            desc: item.roomName,
            pic_url: item.roomSrc,
            url: "https://m.douyu.com/"+item.roomId
        })
    })
    
    res.data = d;
    setHomeResult(res);
}

const sb = _ => {
    let res = {};
    let d = [];
    let params = {}
    const html = getResCode();
    const script = parseDomForHtml(html, "script&&Html");

    const cookie = fetch('https://passport.douyu.com/lapi/did/api/get?client_id=25&_='+params.tt+'&callback=axiosJsonpCallback1', {headers: {referer: "https://m.douyu.com/"}})

    const did = cookie.match(/"did":".*"/)

    params.rid = /* parseInt(MY_URL.replace("https://m.douyu.com/", "")) */"6985688"
    // params.v = "2501"+getFormatDate()
    params.tt = /* Date.parse(new Date()).toString().substr(0,10) */"1621503905"
    params.did = /* did[0].replace("\"did\":\"", "").replace("\"", "") */ "10000000000000000000000000001501"




    let param_body = getSign(script, params.rid, params.did, params.tt)
    setError(param_body)


    const stream_json = fetch('https://m.douyu.com/api/room/ratestream', {headers:{'content-type':'application/json'}, body: param_body, method:'POST', withHeader: true})
    


    res.data = d;
    setHomeResult(res);
}
sb()