const config = {
    BaseUrl: "http://68.183.234.72/",
    Url: "https://picaapi.picacomic.com/",
}

let header = {
    "api-key":           "C69BAF41DA5ABD1FFEDC6D2FEA56B",
    "accept":            "application/vnd.picacomic.com.v1+json",
    "app-channel":       "3",
    "time":              (new Date().getTime()/1000).toString(),
    "nonce":             "b1ab87b4800d4d4590a11701b8551afa",
    // "signature":         "",
    "app-version":       "2.2.1.3.3.4",
    "app-uuid":          "defaultUuid",
    "app-platform":      "android",
    "app-build-version": "45",
    "Content-Type":      "application/json; charset=UTF-8",
    "User-Agent":        "okhttp/3.8.1",
    "authorization":     getConf("authorization"),
    "image-quality":     "original",
}

const picacg_path = "hiker://files/rules/js/TyrantGenesis_哔咔设置.js"

let picacg_config = fetch(picacg_path)
if (! picacg_config) {
    picacg_config = "username=\r\npassword=\r\nauthorization=\r\n"
    writeFile(picacg_path, picacg_config)
}
// url = config.Url + "auth/sign-in"

const baseParse = _ => {
    // 初始化
    let d = [];
    let username = getConf("username")
    let password = getConf("password")

    setResult(d);
}

const getConf = key => {
    let reg = new RegExp(key+"=(.*?)")
    const match = config.match(reg, picacg_config)
    if (match && match[1])
        return match[1]
    else
        return false
}

const req = (url, data) => {
    url = config.Url + url

}

const getHeader = (url, method) => {
    return getSign(header, url, method)
}

const getSign = (header, url, method) => {
    eval(getCryptoJS())
    let raw = (url + header.time + header.nonce + method + header.apiKey).toLowerCase()
    let h = CryptoJS.HmacSHA256("~d}$Q7$eIni=V)9\\RK/P.RM4;9[7|@/CA}b~OW!3?EV`:<>M7pddUBL5n|0/*Cn", )
    // h := hmac.New(sha256.New, []byte())
    // h.Write([]byte(raw))
    // header["signature"] = hex.EncodeToString(h.Sum(nil))
    // return header
}