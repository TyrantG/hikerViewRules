js:
const picacg = {
    BaseUrl: "https://picaapi.picacomic.com/",
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
        const request_url = picacg.BaseUrl + path
        // const time = (new Date().getTime()/1000).toFixed(0)
        let headers = picacg.headers
        headers['api-key'] = picacg.apiKey
        // headers.time = time
        headers.nonce = picacg.nonce
        headers.signature = picacg.encrypt(request_url, headers.time, method)

        if (method === 'GET')
            return fetch(request_url, {headers: headers})
        else
            return fetch(request_url, {headers: headers, method: method, body: data})
    },
    get: path => picacg.httpRequest(path, 'GET', {}),
    post: (path, data) => picacg.httpRequest(path, 'POST', data),
    baseParse: () => {
        picacg.d.push({
            title: picacg.login(),
            col_type: 'long_text'
        })
        setResult(picacg.d);
    },
    login: () => {
        return picacg.post('auth/sign-in', {
            email: 'tyrantgenesis',
            password: 'Genesis489449701'
        })
    }
}
picacg.baseParse()