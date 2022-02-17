const picacg = {
    BaseUrl: "https://picaapi.picacomic.com/",
    empty: 'hiker://empty',
    picacg_path: "hiker://files/rules/js/TyrantGenesis_哔咔设置.js",
    apiKey: "C69BAF41DA5ABD1FFEDC6D2FEA56B",
    nonce: "b1ab87b4800d4d4590a11701b8551afa",
    secretKey: "~d}$Q7$eIni=V)9\\RK/P.RM4;9[7|@/CA}b~OW!3?EV`:<>M7pddUBL5n|0/*Cn",
    d: [],
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
                url: $(picacg.empty).rule((picacg_path) => {
                    
                    writeFile(picacg_path, 'tyrantgenesis\nGenesis489449701\neyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OGQ2ZTI0ZGRhMDU2ZTdmOTdiNmVmNjkiLCJlbWFpbCI6InR5cmFudGdlbmVzaXMiLCJyb2xlIjoibWVtYmVyIiwibmFtZSI6IlR5cmFudEdlbmVzaXMiLCJ2ZXJzaW9uIjoiMi4yLjEuMi4zLjMiLCJidWlsZFZlcnNpb24iOiI0NCIsInBsYXRmb3JtIjoiYW5kcm9pZCIsImlhdCI6MTY0NDU5NDA5MCwiZXhwIjoxNjQ1MTk4ODkwfQ.0XROdah4UyuBBJ03k962biuKZsQfrZQhFcwqAjMd4RQ')
                    refreshPage(false)
                    return 'hiker://empty'
                }, picacg.picacg_path),
                col_type: 'text_center_1'
            })
            picacg.d.push({
                title: '注册哔咔',
                url: $(picacg.empty).lazyRule((picacg_path) => {
                    writeFile(picacg_path, 'tyrantgenesis\nGenesis489449701\neyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OGQ2ZTI0ZGRhMDU2ZTdmOTdiNmVmNjkiLCJlbWFpbCI6InR5cmFudGdlbmVzaXMiLCJyb2xlIjoibWVtYmVyIiwibmFtZSI6IlR5cmFudEdlbmVzaXMiLCJ2ZXJzaW9uIjoiMi4yLjEuMi4zLjMiLCJidWlsZFZlcnNpb24iOiI0NCIsInBsYXRmb3JtIjoiYW5kcm9pZCIsImlhdCI6MTY0NDU5NDA5MCwiZXhwIjoxNjQ1MTk4ODkwfQ.0XROdah4UyuBBJ03k962biuKZsQfrZQhFcwqAjMd4RQ')
                    refreshPage(false)
                    return 'hiker://empty'
                }, picacg.picacg_path),
                col_type: 'text_center_1'
            })
        } else {
            picacg.getCategories()
        }

        setResult(picacg.d);
    },
    login: (data) => {
        return picacg.post('auth/sign-in', {
            email: data.email,
            password: data.password
        })
    },
    register: (data) => {
        return picacg.post('auth/register', {
            email: data.email,
            password: data.password,
            name: data.name,
            birthday: '1970-01-01',
            gender: 'f',
            question1: 'question1',
            question2: 'question2',
            question3: 'question3',
            answer1: 'answer1',
            answer2: 'answer2',
            answer3: 'answer3',
        })
    },
    getCategories: () => {
        const response = picacg.get('categories', {})
        if (response.code === 200) {
            const except = [''];
            response.data.categories.forEach((cate, index) => {
                if (!cate.isWeb) {
                    picacg.d.push({
                        title: cate.title,
                        desc: '30',
                        pic_url: cate.thumb.fileServer+'/static/'+cate.thumb.path,
                        url: $(picacg.empty+'$$fypage').rule((title) => {
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
                    url: $(picacg.empty+'#immersiveTheme##noHistory#$$fypage').rule((id) => {
                        const picacg = $.require('hiker://page/picacg')
                        picacg.getInfo(id)
                        setResult(picacg.d);
                    }, comic._id),
                    col_type: 'movie_2'
                })
            })
        }
    },
    getInfo: (id) => {
        const page = MY_URL.split('$$')[1]
        if (parseInt(page) === 1) {
            const response = picacg.get('comics/'+id)
            const info = response.data.comic
            picacg.d.push({
                title: info.title,
                desc: info.description,
                pic_url: info.thumb.fileServer+'/static/'+info.thumb.path,
                url: picacg.empty,
                col_type: 'movie_1_vertical_pic_blur'
            })
        }

        const episodesRes = picacg.get('comics/'+id+'/eps?page='+page)
        if (episodesRes.code === 200) {
            episodesRes.data.eps.docs.forEach((ep, index) => {
                picacg.d.push({
                    title: ep.title,
                    url: $(picacg.empty+'#fullTheme##noHistory#$$fypage').rule((id, order) => {
                        const picacg = $.require('hiker://page/picacg')
                        picacg.getPicture(id, order)
                        setResult(picacg.d);
                    }, id, ep.order),
                    col_type: 'text_3'
                })
            })
        }
    },
    getPicture: (id, order) => {
        const page = MY_URL.split('$$')[1]
        const url = 'comics/'+id+'/order/'+order+'/pages?page='+page
        const response = picacg.get('comics/'+id+'/order/'+order+'/pages?page='+page)
        log(url)
        log(response)
        if (response.code === 200) {
            response.data.pages.docs.forEach((page, index) => {
                picacg.d.push({
                    url: page.media.fileServer+'/static/'+page.media.path,
                    pic_url: page.media.fileServer+'/static/'+page.media.path,
                    col_type: 'pic_1_full'
                })
            })
        }
    }
}

$.exports = picacg