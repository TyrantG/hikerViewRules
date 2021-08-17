const baseParse = _ => {
    const role_path = "hiker://files/rules/js/TyrantGenesis_永劫无间绑定.js"
    let d = [];
    let roleId = ''

    let current_page = MY_URL.split('##')[1].toString()

    if (current_page === '1') {
        d.push({
            title: '绑定',
            desc: '请输入游戏ID',
            url: "input.trim() ? $('hiker://empty').lazyRule(params => {eval(fetch('hiker://files/TyrantG/TOOL/naraka_score.js'));return setRoleId(params);}, {input: input.trim()}) : 'toast://请输入游戏ID'",
            col_type: "input"
        })
    }

    if (fetch(role_path)) {
        if (current_page === '1') {
            const channel_select = getVar("tyrantgenesis.youtube.channel_select", "0")
            roleId = fetch(role_path)
            let careerData = "https://gamedb.gamersky.com/yjwujian/career/getCareerData?gamerskyId=5861820&identity=0&roleId="+roleId
        }

        let listData = "https://gamedb.gamersky.com/yjwujian/record/getRecentRecords?roleId="+roleId+"&pageIndex="+current_page+"&pageSize=20"
        let res_json = fetch(listData)
        let res = JSON.parse(res_json)
        if (res.code === 0) {
            res.data.list.forEach(item => {
                d.push({
                    title: makeListHtml(item),
                    col_type: 'rich_text',
                })
                d.push({
                    col_type: 'line'
                })
            })
        } else {
            d.push({
                title: res.message,
                col_type: 'long_text',
            })
        }

    }

    setResult(d);
}

const setRoleId = params => {
    const role_path = "hiker://files/rules/js/TyrantGenesis_永劫无间绑定.js"
    let res_json = fetch("https://gamedb.gamersky.com/yjwujian/search/getSearchResult?roleName="+params.input)
    let res = JSON.parse(res_json)
    if (res.data.length > 0) {
        writeFile(role_path, res.data[0].roleId)
        refreshPage(false)
        return 'hiker://empty'
    } else {
        refreshPage(false)
        return 'toast://查找不到玩家数据'
    }
}

const makeListHtml = object => {
    return "<div style=\"margin: 0px; padding: 0px 30px 0px 0px; display: flex; align-items: center; box-sizing: border-box; color: #ffffff; font-size: 12px; background: #2b2b2b; font-family: Avenir, Helvetica, Arial, sans-serif; text-align: center;\">\n" +
        "<div style=\"margin: 0px 21px 0px 0px; padding: 0px; height: 65px; text-align: left; display: flex; align-items: center; width: 88px;\">\n" +
        "<p style=\"margin: 0px; padding: 0px; color: #aaaaaa; width: 110px; height: 65px; font-size: 24px; font-weight: 600; display: flex; align-items: center;\"><span style=\"margin: 0px; padding: 0px 0px 0px 32px;\">#"+object.groupRank+"</span></p>\n" +
        "</div>\n" +
        "<div style=\"margin: 0px 21px 0px 0px; padding: 0px; height: 65px; display: flex; align-items: center; width: 72px; justify-content: center; flex-direction: column;\">\n" +
        "<p style=\"margin: 0px; padding: 0px; width: 72px; height: 20px; font-size: 14px;\">"+object.startTs+"</p>\n" +
        // "<span style=\"margin: 0px; padding: 0px; line-height: 12px; color: #aaaaaa;\">23:18</span></div>\n" +
        "<div style=\"margin: 0px 21px 0px 0px; padding: 0px; height: 65px; display: flex; align-items: center; width: 112px;\"><img style=\"margin: 0px 5px 0px 0px; padding: 0px; width: 34px; height: 34px; border-radius: 50%; display: block;\" src=\"https:"+object.heroImage+"\" alt=\"\" />\n" +
        "<p style=\"margin: 0px; padding: 0px; width: 73px; text-align: left; line-height: 20px; height: 20px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\">"+object.hero+"</p>\n" +
        "</div>\n" +
        "<div style=\"margin: 0px 21px 0px 0px; padding: 0px; height: 65px; text-align: left; display: flex; align-items: center; width: 36px;\"><img style=\"margin: 0px 5px 0px 0px; padding: 0px; width: 36px; height: 36px; border-radius: 50%; display: block;\" src=\"https:"+object.battleModeImage+"\" alt=\"\" /></div>\n" +
        "<div style=\"margin: 0px 21px 0px 0px; padding: 0px; height: 65px; display: flex; align-items: center; width: 66px;\">\n" +
        "<p style=\"margin: 0px; padding: 0px; width: 66px; line-height: 20px; height: 20px;\">"+object.map+"</p>\n" +
        "</div>\n" +
        "<div style=\"margin: 0px 21px 0px 0px; padding: 0px; height: 65px; display: flex; align-items: center; width: 72px;\">\n" +
        "<p style=\"margin: 0px; padding: 0px; width: 72px; line-height: 20px; height: 20px;\">"+object.grade+"</p>\n" +
        "</div>\n" +
        "<div style=\"margin: 0px 21px 0px 0px; padding: 0px; height: 65px; display: flex; align-items: center; width: 91px;\">\n" +
        "<p style=\"margin: 0px; padding: 0px; width: 58px; text-align: right; text-indent: 10px; font-size: 14px;\">"+object.gradeScore+"</p>\n" +
        "<span style=\"margin: 0px 0px 0px 8px; padding: 0px; width: 25px; text-align: left; color: #e9494c;\">"+object.deltaValue+"</span></div>\n" +
        "<div style=\"margin: 0px 21px 0px 0px; padding: 0px; height: 65px; display: flex; align-items: center; width: 34px;\">\n" +
        "<p style=\"margin: 0px; padding: 0px; width: 34px; line-height: 20px; height: 20px;\">"+object.killTimes+"</p>\n" +
        "</div>\n" +
        "<div style=\"margin: 0px 21px 0px 0px; padding: 0px; height: 65px; display: flex; align-items: center; width: 35px;\">\n" +
        "<p style=\"margin: 0px; padding: 0px; width: 35px; line-height: 20px; height: 20px;\">"+object.damage+"</p>\n" +
        "</div>\n" +
        "<div style=\"margin: 0px; padding: 0px; height: 65px; align-items: center; width: 28px;\">\n" +
        "<p style=\"margin: 0px; padding: 0px; width: 28px; line-height: 65px; height: 65px;\">"+object.performScore+"</p>\n" +
        "</div>\n" +
        "</div>"
}
