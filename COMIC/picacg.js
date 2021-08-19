const config =
    "Url=https://picaapi.picacomic.com/\r\n"+
    "ApiKey=C69BAF41DA5ABD1FFEDC6D2FEA56B\r\n"+
    "AppChannel=3\r\n"+
    "Version=2.2.1.3.3.4\r\n"+
    "BuildVersion=45\r\n"+
    "Accept=application/vnd.picacomic.com.v1+json\r\n"+
    "username=\r\n"+
    "password="

const picacg_path = "hiker://files/rules/js/TyrantGenesis_哔咔设置.js"

const baseParse = _ => {
    // 初始化
    let d = [];
    let picacg_config = fetch(picacg_path)
    if (picacg_config) {
        let username = getConf("username", picacg_config)
        let password = getConf("password", picacg_config)

        d.push({
            title: '用户名:'+username,
            col_type: 'long_text',
        })
    } else {
        writeFile(picacg_path, config)
        refreshPage(true)
    }

    setResult(d);
}

const getConf = (key, config) => {
    let reg = new RegExp(key+"=(.*?)")
    const match = config.match(reg, config)
    if (match)
        return match[1]
    else
        return false
}