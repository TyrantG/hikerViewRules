const picacg = {
    BaseUrl: "https://picaapi.picacomic.com/",
    empty: 'hiker://empty',
    picacg_path: "hiker://files/rules/js/TyrantGenesis_哔咔设置.js",
    apiKey: "C69BAF41DA5ABD1FFEDC6D2FEA56B",
    nonce: "b1ab87b4800d4d4590a11701b8551afa",
    secretKey: "~d}$Q7$eIni=V)9\\RK/P.RM4;9[7|@/CA}b~OW!3?EV`:<>M7pddUBL5n|0/*Cn",
    d: [],
    images: [],
    episodes: [],
    headers: {
        "accept":            "application/vnd.picacomic.com.v1+json",
        "app-channel":       "2",
        "time":              (new Date().getTime()/1000).toFixed(0),
        // "signature":         "",
        "app-version":       "2.2.1.2.3.3",
        "app-uuid":          "defaultUuid",
        "app-platform":      "android",
        "app-build-version": "44",
        "Content-Type":      "application/json; charset=UTF-8",
        "User-Agent":        "okhttp/3.8.1",
        // "authorization":     getConf("authorization"),
        "image-quality":     "original",
    },
    encrypt: (url, ts, method) => {
        eval(getCryptoJS())
        let raw = url.replace(picacg.BaseUrl, "") + ts + picacg.nonce + method + picacg.apiKey
        raw = raw.toLocaleLowerCase()
        // return crypto.createHmac('sha256', secret_key).update(raw).digest('hex')
        return CryptoJS.HmacSHA256(raw, picacg.secretKey).toString(CryptoJS.enc.Hex)
    },
    httpRequest: (path, method, data) => {
        let responseJson
        const request_url = picacg.BaseUrl + path
        // const time = (new Date().getTime()/1000).toFixed(0)
        let headers = picacg.headers
        headers['api-key'] = picacg.apiKey
        // headers.time = time
        headers.nonce = picacg.nonce
        headers.signature = picacg.encrypt(request_url, headers.time, method)

        try {
            if (fileExist(picacg.picacg_path)) headers.authorization = fetch(picacg.picacg_path).split('\n')[2]
        } catch (e) {}

        if (method === 'GET')
            responseJson = fetch(request_url, {headers: headers})
        else
            responseJson = fetch(request_url, {headers: headers, method: method, body: data})

        return JSON.parse(responseJson)
    },
    get: (path, data) => picacg.httpRequest(path, 'GET', data),
    post: (path, data) => picacg.httpRequest(path, 'POST', data),
    baseParse: () => {
        if (! fileExist(picacg.picacg_path)) {
            picacg.d.push({
                title: '登录哔咔',
                url: $(picacg.empty).rule(() => {
                    const picacg = $.require('hiker://page/picacg')
                    picacg.login()
                    setResult(picacg.d);
                }),
                col_type: 'text_center_1'
            })
            picacg.d.push({
                title: '注册哔咔',
                url: $(picacg.empty).rule(() => {
                    const picacg = $.require('hiker://page/picacg')
                    picacg.register()
                    setResult(picacg.d);
                }),
                col_type: 'text_center_1'
            })
        } else {
            picacg.getCategories()
        }

        setResult(picacg.d);
    },
    login: () => {
        picacg.d.push({
            desc: '请输入用户名',
            col_type: 'input',
            extra: {
                titleVisible: false,
                onChange: $.toString(() => {
                    if (input) setItem('email', input)
                })
            }
        })
        picacg.d.push({
            desc: '请输入密码',
            col_type: 'input',
            extra: {
                titleVisible: false,
                onChange: $.toString(() => {
                    if (input) setItem('password', input)
                })
            }
        })
        picacg.d.push({
            title: '登录',
            url: $(picacg.empty).lazyRule(() => {
                const picacg = $.require('hiker://page/picacg')
                const response = picacg.post('auth/sign-in', {
                    email: getItem('email', ''),
                    password: getItem('password', ''),
                })
                if (response.code === 400) {
                    return 'toast://'+ (response.detail || response.message)
                } else {
                    const setting = getItem('email', '') + '\n' + getItem('password', '') + '\n' +response.data.token
                    writeFile(picacg.picacg_path, setting)
                    toast('登录成功')
                    back(true)
                    return picacg.empty
                }
            }),
            col_type: 'text_center_1',
            extra: {
                lineVisible: false,
            }
        })

    },
    register: () => {
        picacg.d.push({
            desc: '请输入昵称',
            col_type: 'input',
            extra: {
                titleVisible: false,
                onChange: $.toString(() => {
                    if (input) setItem('name', input)
                })
            }
        })
        picacg.d.push({
            desc: '请输入用户名',
            col_type: 'input',
            extra: {
                titleVisible: false,
                onChange: $.toString(() => {
                    if (input) setItem('email', input)
                })
            }
        })
        picacg.d.push({
            desc: '请输入密码',
            col_type: 'input',
            extra: {
                titleVisible: false,
                onChange: $.toString(() => {
                    if (input) setItem('password', input)
                })
            }
        })
        picacg.d.push({
            title: '注册',
            url: $(picacg.empty).lazyRule(() => {
                const picacg = $.require('hiker://page/picacg')
                const response = picacg.post('auth/register', {
                    email: getItem('email', ''),
                    password: getItem('password', ''),
                    name: getItem('name', ''),
                    birthday: '1970-01-01',
                    gender: 'f',
                    question1: 'question1',
                    question2: 'question2',
                    question3: 'question3',
                    answer1: 'answer1',
                    answer2: 'answer2',
                    answer3: 'answer3',
                })

                if (response.code === 400) {
                    return 'toast://'+ (response.detail || response.message)
                } else {
                    const loginResponse = picacg.post('auth/sign-in', {
                        email: getItem('email', ''),
                        password: getItem('password', ''),
                    })
                    const setting = getItem('email', '') + '\n' + getItem('password', '') + '\n' +loginResponse.data.token
                    writeFile(picacg.picacg_path, setting)
                    toast('注册成功，已自动登录')
                    back(true)
                    return picacg.empty
                }
            }),
            col_type: 'text_center_1',
            extra: {
                lineVisible: false,
            }
        })
    },
    getCategories: () => {
        const response = picacg.get('categories', {})
        if (response.code === 200) {
            const no_image = ['大家都在看', '那年今天', '官方都在看'];
            response.data.categories.forEach((cate, index) => {
                let pic = no_image.includes(cate.title) ? 'https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/assets/images/pica.jpg' : cate.thumb.fileServer+'/static/'+cate.thumb.path
                let desc = no_image.includes(cate.title) ? '5' : '0'
                if (!cate.isWeb) {
                    picacg.d.push({
                        title: cate.title,
                        desc: desc,
                        pic_url: pic,
                        url: $(picacg.empty+'#noHistory#$$fypage').rule((title) => {
                            const picacg = $.require('hiker://page/picacg')
                            picacg.getComics(title)
                            setResult(picacg.d);
                        }, cate.title),
                        col_type: 'card_pic_2'
                    })
                }
            })
        }
    },
    getComics: (title) => {
        const page = MY_URL.split('$$')[1]
        const response = picacg.get('comics?c='+encodeURIComponent(title)+'&page='+page+'&s=ua', {})
        if (response.code === 200) {
            response.data.comics.docs.forEach((comic, index) => {
                picacg.d.push({
                    title: comic.title,
                    desc: comic.author,
                    pic_url: comic.thumb.fileServer+'/static/'+comic.thumb.path,
                    url: $(picacg.empty+'#immersiveTheme##noHistory#').rule((id) => {
                        const picacg = $.require('hiker://page/picacg')
                        picacg.getInfo(id)
                        setResult(picacg.d);
                    }, comic._id),
                    col_type: 'movie_2'
                })
            })
        }
    },
    getEpisodesPicture: (id, page) => {
        const episodesRes = picacg.get('comics/'+id+'/eps?page='+page)
        if (episodesRes.code === 200 && episodesRes.data.eps.docs.length > 0) {
            episodesRes.data.eps.docs.forEach((ep, index) => {
                picacg.episodes.push({
                    title: ep.title,
                    order: ep.order,
                })
            })
            page = page+1
            picacg.getEpisodesPicture(id, page)
        }
    },
    getInfo: (id) => {
        const response = picacg.get('comics/'+id)
        const info = response.data.comic
        picacg.d.push({
            title: info.title,
            desc: info.description,
            pic_url: info.thumb.fileServer+'/static/'+info.thumb.path,
            url: picacg.empty,
            col_type: 'movie_1_vertical_pic_blur'
        })

        picacg.getEpisodesPicture(id, 1)
        picacg.episodes.reverse().forEach(ep => {
            picacg.d.push({
                title: ep.title,
                url: $(picacg.empty+'#noHistory#').lazyRule((id, order) => {
                    const picacg = $.require('hiker://page/picacg')
                    return picacg.getPicture(id, order)
                }, id, ep.order),
                col_type: 'text_3'
            })
        })
    },
    getRecursionPicture: (id, order, page) => {
        const response = picacg.get('comics/'+id+'/order/'+order+'/pages?page='+page)
        if (response.code === 200 && response.data.pages.docs.length > 0) {
            response.data.pages.docs.forEach((page, index) => {
                picacg.images.push(page.media.fileServer+'/static/'+page.media.path)
            })
            page = page+1
            picacg.getRecursionPicture(id, order, page)
        }
    },
    getPicture: (id, order) => {
        picacg.getRecursionPicture(id, order, 1)
        return 'pics://'+picacg.images.join('&&')
    }
}

$.exports = picacg
