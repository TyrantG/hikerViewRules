js:
const douyin_cookie = "hiker://files/TyrantG/cookie/douyin.txt"

const baseParse = _ => {
    let d = [], category, html
    let home_cookie = request(douyin_cookie)
    // let slide_d_cookie = request(slide_cookie)
    const empty = "hiker://empty"
    html = fetch("https://www.douyin.com", {headers:{"User-Agent": PC_UA, "cookie": home_cookie}, withHeaders: true})
    html = JSON.parse(html)

    d.push

    // 首页cookie
    /*if (! home_cookie || ! home_cookie.match(/__ac_nonce/) || html.body.match(/<body><\/body>/)) {
        let cookie = html.headers["set-cookie"]
        home_cookie = html.headers["set-cookie"]

        let ac_nonce_cookie = ''
        home_cookie.forEach(item => {
            if (item.match(/__ac_nonce=(.*?);/)) ac_nonce_cookie = item.match(/__ac_nonce=(.*?);/)[0]
        })
        writeFile(douyin_cookie, ac_nonce_cookie)
        refreshPage(true)
    }*/

    // 滑块验证
    if (! home_cookie || html.body.match(/验证码/) || ! home_cookie.match(/__ac_nonce/) || html.body.match(/<body><\/body>/)) {
        let html_hiker_path ='hiker://files/cache/TyrantG/html/douyin_slide.html'
        let html_real_path = getPath(html_hiker_path)
        writeFile(html_hiker_path, html.body)

        /*d.push({
            url: /!*html_real_path*!/'https://www.douyin.com/',
            col_type: 'x5_webview_single',
            desc: '100%&&float',
            extra: {
                ua: PC_UA,
                canBack: true,
                js: $.toString(params => {
                    const douyin_cookie = "hiker://files/TyrantG/cookie/douyin.txt"
                    fy_bridge_app.writeFile(douyin_cookie, window.document.cookie)
                    fy_bridge_app.back()
                }, {
                    home_cookie: home_cookie
                })
            }
        })*/

    }

    d.push({
        title: douyin_cookie,
        col_type: 'long_text'
    })
    setResult(d);
}

const parseCookie = cookie => {
    var obj = cookie.split(';')
        .filter(function(item) {
            return !!item.trim();
        })
        .reduce(function(obj, item) {
            var pairs = item.split('=');
            var key = pairs[0] && pairs[0].trim();
            var val = pairs[1] && pairs[1].trim();
            obj[key] = val;
            return obj;
        }, {});
    return obj;
}
baseParse()