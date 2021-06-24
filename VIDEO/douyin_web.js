const baseParse = _ => {
    let d = [];
    const html = getResCode()
    const category = parseDomForArray(html, '._92400026d1182d4f8f006dada62ebc1c-scss&&a')

    const channel_select = getVar("tyrantgenesis.douyin_web.channel_select", "")

    d.push({
        desc: '1',
        url: 'file:///storage/emulated/0/Android/data/com.example.hikerview/files/Documents/TyrantG/public/_signature.html?time='+(new Date()).getTime(),
        col_type:"x5_webview_single"
    })

    d.push({
        title: channel_select === '' ? '‘‘’’<strong><font color="red">全部</font></strong>' : '全部',
        url: $("hiker://empty").lazyRule(_ => {
            putVar("tyrantgenesis.douyin_web.channel_select", "")
            refreshPage(false)
            return "hiker://empty"
        }),
        col_type: 'scroll_button',
    })
    category.forEach(cate => {
        let href = parseDomForHtml(cate, 'a&&href')
        let channel = href.split('/').pop()
        if (/^[\d]+$/.test(channel)) {
            d.push({
                title: channel_select === channel.toString() ? '‘‘’’<strong><font color="red">'+parseDomForHtml(cate, 'a&&Text')+'</font></strong>' : parseDomForHtml(cate, 'a&&Text'),
                url: $("hiker://empty").lazyRule(params => {
                    putVar("tyrantgenesis.douyin_web.channel_select", params.channel.toString())
                    refreshPage(false)
                    return "hiker://empty"
                }, {
                    channel: channel
                }),
                col_type: 'scroll_button',
            })
        }
    })

    const not_sign_url = "https://www.douyin.com/aweme/v1/web/channel/feed/?device_platform=webapp&aid=6383&channel=channel_pc_web&tag_id="+channel_select+"&count=10&version_code=160100&version_name=16.1.0"

    setResult(d);
}