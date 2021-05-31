const baseParse = _ => {
    let res = {};
    let d = [];

    d.push({
        title: '我的歌单',
        pic_url: "https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/assets/icons/list.png",
        col_type: 'icon_round_4'
    });
    d.push({
        title: '搜索',
        pic_url: "https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/assets/icons/search.png",
        col_type: 'icon_round_4'
    });
    d.push({
        title: '导入/导出',
        pic_url: "https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/assets/icons/turn.png",
        col_type: 'icon_round_4'
    });
    d.push({
        title: '设置',
        pic_url: "https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/assets/icons/setting.png",
        col_type: 'icon_round_4'
    });

    for (let i = 0; i < 24; i++) {
        d.push({
            title: 'The Off-Season',
            desc: 'J.Cole',
            pic_url: "https://wp.stanforddaily.com/wp-content/uploads/2021/05/The-Off-Season.png",
            col_type: 'movie_1_vertical_pic'
        });
    }

    res.data = d;
    setHomeResult(res);
}