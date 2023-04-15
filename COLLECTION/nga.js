const nga = {
    BaseUrl: 'https://bbs.nga.cn/app_api.php',
    iconCDNUrl: 'https://img4.nga.178.com/proxy/cache_attach/ficon/',
    defaultIconPath: 'https://img4.nga.178.com/ngabbs/nga_classic/f/00.png',
    empty: 'hiker://empty',
    files: {
        cookieFilePath: 'hiker://files/rules/TyrantG/cookie/nga_cookies.txt',
    },
    api: {
        HomeCategory: '__lib=home&__act=category&_v=2',
    },
    d: [],
    data: {
        rankTT: getMyVar('nga.tyrantgenesis.rankTT', 'H24'),
    },
    request: (api, method, data) => {
        const cookie = fetch(nga.files.cookieFilePath)
        const realUrl = nga.BaseUrl + '?' + api
        let json_res

        if (method === 'GET') {
            json_res = fetch(realUrl, {
                headers: {
                    'Cookie': cookie,
                    'User-Agent': PC_UA,
                }
            })
        } else {
            json_res = post(realUrl, {
                body: data,
                headers: {
                    'Cookie': cookie,
                    'User-Agent': PC_UA,
                }
            })
        }

        const res = JSON.parse(json_res)

        if (res.code === 0) {
            return res
        } else if (res.code === 12) {
            toast(res.msg)
            writeFile(nga.files.cookieFilePath, '')
            back(true)
        } else {
            toast(res.msg)
        }

        return []
    },
    get: (api) => {
        return nga.request(api, 'GET', {})
    },
    post: (api, data) => {
        return nga.request(api, 'POST', data)
    },
    loginPage: () => {
        setPageTitle('NGA登录')
        nga.d.push({
            url: 'https://nga.178.com/nuke.php?__lib=login&__act=account&login',
            desc: '100%&&float',
            col_type: 'x5_webview_single',
            extra: {
                ua: PC_UA,
                canBack: true,
                imgLongClick: false,
                js: $.toString(nga.injectJS),
            }
        })
    },
    injectJS: () => {
        const getCookie = function (name) {
            let arr;
            const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
            if (arr = document.cookie.match(reg)) return unescape(arr[2]);
            return null;
        };

        const loginFunc = () => {
            const ngaPassportUid = getCookie('ngaPassportUid')
            const ngaPassportOid = getCookie('ngaPassportOid')
            const ngaPassportCid = getCookie('ngaPassportCid')

            fba.log(ngaPassportUid+ngaPassportCid)
            // if (ngaPassportUid && (ngaPassportOid || ngaPassportCid)) {
            if (ngaPassportUid && ngaPassportCid) {
                alert('凭证获取成功')
                fba.writeFile('hiker://files/rules/TyrantG/cookie/douyin.txt', document.cookie)
                fba.back()
            }
        }

        const loginInterval = () => {
            setInterval(() => {
                loginFunc()
            }, 500)
        }

        loginInterval()
        loginFunc()
    },
    baseParse: () => {
        const categoryList = nga.get(nga.api.HomeCategory)
        const result = categoryList.result

        nga.d.push({
            title: '尚未登录',
            url: $(nga.empty).rule(() => {
                const nga = $.require('hiker://page/nga')
                nga.loginPage()
                setResult(nga.d);
            }),
            col_type: 'avatar',
        })
        nga.d.push({
            col_type: 'line_blank',
        })

        result.forEach((item) => {
            item.groups.forEach((group) => {
                nga.d.push({
                    title: '⛚ ' + group.name + ' ⛚',
                    url: nga.empty,
                    col_type: 'avatar',
                })
                group.forums.forEach((forum) => {
                    nga.d.push({
                        title: forum.name,
                        pic_url: nga.iconCDNUrl + (forum.stid ? forum.stid + 'v.png' : forum.fid + 'u.png'),
                        col_type: 'icon_round_small_4',
                    })
                })
                nga.d.push({
                    col_type: 'line_blank',
                })
            })
        })

        setResult(nga.d)
    },
    forumParse: () => {

    },
}

$.exports = nga
