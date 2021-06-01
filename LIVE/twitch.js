const baseParse = _ => {
    let res = {};
    let d = [];
    const url = MY_URL
    const header = {'Accept': 'application/vnd.twitchtv.v5+json', 'Client-ID' : '7i8imjlwj0oqyiu3rutgfayf17op3w'}
    const data_json = fetch(url, {headers: header})
    const list = JSON.parse(data_json).top
    list.forEach(item => {
        d.push({
            title: item.game.name,
            desc: item.viewers+'人观看',
            pic_url: item.game.box.medium,
            url: "https://api.twitch.tv/kraken/streams/?game="+encodeURIComponent(item.game.name)+"&offset=fypage@-1@*24@&limit=24",
        })
    })


    res.data = d;
    setHomeResult(res);
}

const secParse = _ => {
    let res = {};
    let d = [];
    const header = {'Accept': 'application/vnd.twitchtv.v5+json', 'Client-ID' : '7i8imjlwj0oqyiu3rutgfayf17op3w', 'User-Agent': PC_UA}
    const data_json = fetch(MY_URL, {headers: header})

    const list = JSON.parse(data_json).streams
    list.forEach(item => {
        let channel = item.channel
        d.push({
            title: channel.status,
            desc: channel.display_name,
            pic_url: item.preview.medium,
            url: $(channel.url).lazyRule(_ => {
                eval(fetch("hiker://files/TyrantG/LIVE/twitch.js"))
                videoParse()
            }),
            col_type: 'movie_2'
        })
    })

    res.data = d;
    setHomeResult(res);
}

const videoParse = _ => {
    const header = {'User-Agent': PC_UA}
    const html = fetch(input, {headers: header})
    const client_id = html.match(/"Client-ID":"(.*?)"/)[1]
    const rid = input.split('/').pop()

    const data = {
        "operationName": "PlaybackAccessToken_Template",
        "query": "query PlaybackAccessToken_Template($login: String!, $isLive: Boolean!, $vodID: ID!, $isVod: Boolean!, $playerType: String!) {  streamPlaybackAccessToken(channelName: $login, params: {platform: \"web\", playerBackend: \"mediaplayer\", playerType: $playerType}) @include(if: $isLive) {    value    signature    __typename  }  videoPlaybackAccessToken(id: $vodID, params: {platform: \"web\", playerBackend: \"mediaplayer\", playerType: $playerType}) @include(if: $isVod) {    value    signature    __typename  }}",
        "variables": {
            "isLive": true,
            "login": rid,
            "isVod": true,
            "vodID": "",
            "playerType": "site"
        }
    }

    const headers = {
        'Client-ID': client_id,
        'Content-Type': 'application/json',
        'Referer': 'https://www.twitch.tv/',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.214 Safari/537.36'
    }

    const data_json = fetch('https://gql.twitch.tv/gql', {headers: headers, method:'POST', body: JSON.stringify(data)})
    const {value, signature, _} = JSON.parse(data_json).data.streamPlaybackAccessToken

    return 'https://usher.ttvnw.net/api/channel/hls/'+rid+'.m3u8?allow_source=true' +
        '&dt=2&fast_bread=true' +
        '&player_backend=mediaplayer' +
        '&playlist_include_framerate=true' +
        '&reassignments_supported=true' +
        '&sig=' + signature +
        '&supported_codecs=vp09,avc1' +
        '&token=' + encodeURIComponent(value) +
        '&cdm=wv' +
        '&player_version=1.4.0'
}