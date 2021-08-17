const baseParse = _ => {
    const role_path = "hiker://files/rules/js/TyrantGenesis_永劫无间绑定.js"
    let d = [];
    let roleId = ''
    let empty = 'hiker://empty'

    let current_page = MY_URL.split('##')[1].toString()


    let cate_select = getVar("tyrantgenesis.naraka_score.cate_select", "1")
    let game_mode = getVar("tyrantgenesis.naraka_score.game_mode", "1")

    if (current_page === '1') {
        d.push({
            title: '查询',
            desc: '请输入游戏ID',
            url: "input.trim() ? $('hiker://empty').lazyRule(params => {eval(fetch('hiker://files/TyrantG/TOOL/naraka_score.js'));return setRoleId(params);}, {input: input.trim()}) : 'toast://请输入游戏ID'",
            col_type: "input"
        })
        d.push({
            title: cate_select === '1' ? '‘‘’’<strong><font color="red">最近战绩</font></strong>' : '最近战绩',
            url: $(empty).lazyRule(_ => {
                putVar("tyrantgenesis.naraka_score.cate_select", "1")
                refreshPage(true)
                return "hiker://empty"
            }),
            col_type: 'scroll_button',
        })
        d.push({
            title: cate_select === '2' ? '‘‘’’<strong><font color="red">生涯数据</font></strong>' : '生涯数据',
            url: $(empty).lazyRule(_ => {
                putVar("tyrantgenesis.naraka_score.cate_select", "2")
                refreshPage(true)
                return "hiker://empty"
            }),
            col_type: 'scroll_button',
        })
        d.push({
            title: cate_select === '3' ? '‘‘’’<strong><font color="red">角色数据</font></strong>' : '角色数据',
            url: $(empty).lazyRule(_ => {
                putVar("tyrantgenesis.naraka_score.cate_select", "3")
                refreshPage(true)
                return "hiker://empty"
            }),
            col_type: 'scroll_button',
        })
        d.push({
            title: cate_select === '4' ? '‘‘’’<strong><font color="red">武器数据</font></strong>' : '武器数据',
            url: $(empty).lazyRule(_ => {
                putVar("tyrantgenesis.naraka_score.cate_select", "4")
                refreshPage(true)
                return "hiker://empty"
            }),
            col_type: 'scroll_button',
        })
    }

    if (fetch(role_path)) {
        roleId = fetch(role_path)

        if (cate_select === '1') {
            let listData = "https://gamedb.gamersky.com/yjwujian/record/getRecentRecords?roleId="+roleId+"&pageIndex="+current_page+"&pageSize=20"
            let res_json = fetch(listData)
            let res = JSON.parse(res_json)
            if (res.code === 0) {
                res.data.list.forEach(item => {
                    d.push({
                        title: "‘‘’’<strong>#&nbsp;<font color=\"red\">"+item.groupRank+"</font></strong>",
                        url: "hiker://empty",
                        col_type: 'text_4',
                    })
                    d.push({
                        title: item.battleMode,
                        pic_url: "https:"+item.battleModeImage+"@Referer=https://www.gamersky.com/",
                        url: "hiker://empty",
                        col_type: 'icon_4',
                    })
                    d.push({
                        title: item.hero,
                        pic_url: "https:"+item.heroImage+"@Referer=https://www.gamersky.com/",
                        url: "hiker://empty",
                        col_type: 'icon_4',
                    })
                    d.push({
                        title: item.grade,
                        pic_url: "https:"+item.gradeImageUrl+"@Referer=https://www.gamersky.com/",
                        url: "hiker://empty",
                        col_type: 'icon_4',
                    })
                    d.push({
                        title: "‘‘’’<strong>分数：&nbsp;<font color=\"red\">"+item.gradeScore+"</font></strong>",
                        url: "hiker://empty",
                        col_type: 'text_2',
                    })
                    d.push({
                        title: "‘‘’’<strong>击杀：&nbsp;<font color=\"red\">"+item.killTimes+"</font></strong>",
                        url: "hiker://empty",
                        col_type: 'text_2',
                    })
                    d.push({
                        title: "‘‘’’<strong>伤害：&nbsp;<font color=\"red\">"+item.damage+"</font></strong>",
                        url: "hiker://empty",
                        col_type: 'text_2',
                    })
                    d.push({
                        title: "‘‘’’<strong>评分：&nbsp;<font color=\"red\">"+item.performScore+"</font></strong>",
                        url: "hiker://empty",
                        col_type: 'text_2',
                    })
                    d.push({
                        col_type: 'line_blank'
                    })
                })
            } else {
                d.push({
                    title: res.message,
                    col_type: 'long_text',
                })
            }
        } else if (cate_select === '2') {
            d.push({
                col_type: 'blank_block',
            })
            d.push({
                title: game_mode === '1' ? '‘‘’’<strong><font color="red">单人</font></strong>' : '单人',
                url: $(empty).lazyRule(_ => {
                    putVar("tyrantgenesis.naraka_score.game_mode", "1")
                    refreshPage(true)
                    return "hiker://empty"
                }),
                col_type: 'scroll_button',
            })
            d.push({
                title: game_mode === '2' ? '‘‘’’<strong><font color="red">三人</font></strong>' : '三人',
                url: $(empty).lazyRule(_ => {
                    putVar("tyrantgenesis.naraka_score.game_mode", "2")
                    refreshPage(true)
                    return "hiker://empty"
                }),
                col_type: 'scroll_button',
            })
            d.push({
                title: game_mode === '3' ? '‘‘’’<strong><font color="red">死斗</font></strong>' : '死斗',
                url: $(empty).lazyRule(_ => {
                    putVar("tyrantgenesis.naraka_score.game_mode", "3")
                    refreshPage(true)
                    return "hiker://empty"
                }),
                col_type: 'scroll_button',
            })
            let url = "https://gamedb.gamersky.com/yjwujian/career/getCareerData?gamerskyId=5861820&identity=0&roleId="+roleId
            let res_json = fetch(url)
            let res = JSON.parse(res_json)
            let data = {}

            if (res.code === 0) {
                if (game_mode === '1') {
                    data = res.data.single
                } else if (game_mode === '2') {
                    data = res.data.three
                } else if (game_mode === '3') {
                    data = res.data.chaos
                }
                d.push({
                    title: "场次："+data.gameCount,
                    col_type: 'text_2',
                })
                d.push({
                    title: "场均击杀："+data.avgKillTimes,
                    col_type: 'text_2',
                })
                d.push({
                    title: "场均伤害："+data.sumDamage,
                    col_type: 'text_2',
                })
                d.push({
                    title: "场均KDA："+data.kd,
                    col_type: 'text_2',
                })
            } else {
                d.push({
                    title: res.message,
                    col_type: 'long_text',
                })
            }

        } else if (cate_select === '3') {
            let url = "https://gamedb.gamersky.com/yjwujian/hero/getHeroData?roleId="+roleId
        } else if (cate_select === '4') {
            let url = "https://gamedb.gamersky.com/yjwujian/weapon/getWeaponData?roleId="+roleId
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

