const baseParse = _ => {
    const role_path = "hiker://files/rules/js/TyrantGenesis_永劫无间绑定.js"
    let d = [];
    let roleId = ''
    if (fetch(role_path)) {
        roleId = fetch(role_path)
    } else {
        d.push({
            title: '绑定',
            desc: '请输入游戏ID',
            url: "input.trim() ? $('hiker://empty').lazyRule(params => {eval(fetch('hiker://files/TyrantG/TOOL/naraka_score.js'));setRoleId(params);}, {input: input.trim()}) : 'toast://请输入游戏ID'",
            col_type: "input"
        });
        // let defaultChannels = [
        //     {title: '法老_Pharaoh', sec_uid: 'MS4wLjABAAAAENcAhhKYCY80DmEdGk9gH2jlG42xW_5kRh33ynV8Ii4', avatar_url: 'https://p3.douyinpic.com/img/tos-cn-i-0813/833a09e8f9b14bcf87ee5a9c5435b825~c5_1080x1080.jpeg?from=116350172'},
        //     {title: '马思唯马思唯', sec_uid: 'MS4wLjABAAAA508qPG3qA_ogo6wjQ9QTIEW_n_NBemKv8ujnHDxt-4OjNI0vC_rqs8x7I0EOoywP', avatar_url: 'https://p3.douyinpic.com/img/tos-cn-avt-0015/cd07db037361174d855251b2854d8b49~c5_1080x1080.jpeg?from=116350172'},
        //     {title: '乃万NINEONE', sec_uid: 'MS4wLjABAAAAPqhPtBXeQ1E3eow8onFHRaZsfKXZnb9gLii-8QvhiJ4', avatar_url: 'https://p9.douyinpic.com/aweme/1080x1080/31afc0003a07472f77daf.jpeg?from=116350172'},
        // ]
        // writeFile(channels_path, JSON.stringify(defaultChannels))
        // channels = defaultChannels
    }

    setResult(d);
}

const setRoleId = params => {
    let res = fetch("https://gamedb.gamersky.com/yjwujian/search/getSearchResult?roleName="+params.input)
    setError(res)
}