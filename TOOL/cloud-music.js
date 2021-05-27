const baseParse = _ => {
    let res = {};
    let d = [];

    for (let i = 0; i < 4; i++) {
        d.push({
            pic_url: "http://p3.music.126.net/tBTNafgjNnTL1KlZMt7lVA==/18885211718935735.jpg",
            col_type: 'icon_round_4'
        });
    }

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