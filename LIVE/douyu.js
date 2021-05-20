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

/* const getFormatDate = _ => {
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
    let v = res.match(/v=(\d+)/)[0]
    let rb = hex_md5(rid + did + tt + v)

    let func_sign = res.replace(/return rt;}\);?/, 'return rt;}')
    func_sign = func_sign.replace('(function (', 'function sign(')
    func_sign = func_sign.replace('CryptoJS.MD5(cb).toString()', '"' + rb + '"')
    eval(func_sign)

    let params = sign(rid, did, tt) + "&ver=219032101&rid={}&rate=-1&rid="+rid
    return params
} */

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
            title: item.roomName,
            desc: item.nickname,
            pic_url: item.roomSrc,
            url: "https://m.douyu.com/"+item.roomId
        })
    })
        
    
    res.data = d;
    setHomeResult(res);
}