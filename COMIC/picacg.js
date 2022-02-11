const picacg = {
    BaseUrl: "https://picaapi.picacomic.com/",
    picacg_path: "hiker://files/rules/js/TyrantGenesis_哔咔设置.js",
    apiKey: "C69BAF41DA5ABD1FFEDC6D2FEA56B",
    nonce: "b1ab87b4800d4d4590a11701b8551afa",
    secretKey: "~d}$Q7$eIni=V)9\\RK/P.RM4;9[7|@/CA}b~OW!3?EV`:<>M7pddUBL5n|0/*Cn",
    d: [],
    headers: {
        "accept":            "application/vnd.picacomic.com.v1+json",
        "app-channel":       "3",
        // "signature":         "",
        "app-version":       "2.2.1.3.3.4",
        "app-uuid":          "defaultUuid",
        "app-platform":      "android",
        "app-build-version": "45",
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
    httpRequest: (path, method) => {
        const request_url = picacg.BaseUrl + path
        let headers = picacg.headers
        headers['api-key'] = picacg.apiKey
        headers.time = (new Date().getTime()/1000).toFixed(0)
        headers.nonce = picacg.nonce
        headers.signature = picacg.encrypt(request_url, headers.time, method)

        return fetch(request_url, {headers: headers})
    },
    get: path => picacg.httpRequest(path, 'GET'),
    post: path => picacg.httpRequest(path, 'POST'),
    baseParse: () => {
        picacg.d.push({
            title: picacg.login(),
            col_type: 'long_text'
        })
        setResult(picacg.d);
    },
    login: () => {
        return picacg.post('auth/sign-in')
    }
}
