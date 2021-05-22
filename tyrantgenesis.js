const BASE_URL = "https://git.tyrantg.com/tyrantgenesis/hikerViewRules/raw/master/"
const collection_password = "海阔视界，首页频道合集￥home_rule_url￥"
const rule_password = "海阔视界规则分享，当前分享的是：小程序￥home_rule_v2￥"

const baseParse = _ => {
    let res = {};
    let d = [];
    const script = fetch(MY_URL);
    const data_json = fetch('hiker://files/TyrantG/data/base.json');
    const data = JSON.parse(data_json)
    let fst_rule_list = []
    let snd_rule_list = []

    eval(script);

    d.push({
        pic_url: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cu\n' +
            'dzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNDk1IiBoZWlnaHQ9IjE5NSIgdmll\n' +
            'd0JveD0iMCAwIDQ5NSAxOTUiIGZpbGw9Im5vbmUiPgogICAgPHN0eWxlPgog\n' +
            'ICAgICAgIC5oZWFkZXIgewogICAgICAgIGZvbnQ6IDYwMCAxOHB4ICdTZWdv\n' +
            'ZSBVSScsIFVidW50dSwgU2Fucy1TZXJpZjsKICAgICAgICBmaWxsOiAjNzBh\n' +
            'NWZkOwogICAgICAgIGFuaW1hdGlvbjogZmFkZUluQW5pbWF0aW9uIDAuOHMg\n' +
            'ZWFzZS1pbi1vdXQgZm9yd2FyZHM7CiAgICAgICAgfQoKICAgICAgICAuc3Rh\n' +
            'dCB7CiAgICAgICAgZm9udDogNjAwIDE0cHggJ1NlZ29lIFVJJywgVWJ1bnR1\n' +
            'LCAiSGVsdmV0aWNhIE5ldWUiLCBTYW5zLVNlcmlmOyBmaWxsOiAjMzhiZGFl\n' +
            'OwogICAgICAgIH0KICAgICAgICAuc3RhZ2dlciB7CiAgICAgICAgb3BhY2l0\n' +
            'eTogMDsKICAgICAgICBhbmltYXRpb246IGZhZGVJbkFuaW1hdGlvbiAwLjNz\n' +
            'IGVhc2UtaW4tb3V0IGZvcndhcmRzOwogICAgICAgIH0KICAgICAgICAucmFu\n' +
            'ay10ZXh0IHsKICAgICAgICBmb250OiA4MDAgMjRweCAnU2Vnb2UgVUknLCBV\n' +
            'YnVudHUsIFNhbnMtU2VyaWY7IGZpbGw6ICMzOGJkYWU7CiAgICAgICAgYW5p\n' +
            'bWF0aW9uOiBzY2FsZUluQW5pbWF0aW9uIDAuM3MgZWFzZS1pbi1vdXQgZm9y\n' +
            'd2FyZHM7CiAgICAgICAgfQoKICAgICAgICAuYm9sZCB7IGZvbnQtd2VpZ2h0\n' +
            'OiA3MDAgfQogICAgICAgIC5pY29uIHsKICAgICAgICBmaWxsOiAjYmY5MWYz\n' +
            'OwogICAgICAgIGRpc3BsYXk6IGJsb2NrOwogICAgICAgIH0KCiAgICAgICAg\n' +
            'LnJhbmstY2lyY2xlLXJpbSB7CiAgICAgICAgc3Ryb2tlOiAjNzBhNWZkOwog\n' +
            'ICAgICAgIGZpbGw6IG5vbmU7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiA2Owog\n' +
            'ICAgICAgIG9wYWNpdHk6IDAuMjsKICAgICAgICB9CiAgICAgICAgLnJhbmst\n' +
            'Y2lyY2xlIHsKICAgICAgICBzdHJva2U6ICM3MGE1ZmQ7CiAgICAgICAgc3Ry\n' +
            'b2tlLWRhc2hhcnJheTogMjUwOwogICAgICAgIGZpbGw6IG5vbmU7CiAgICAg\n' +
            'ICAgc3Ryb2tlLXdpZHRoOiA2OwogICAgICAgIHN0cm9rZS1saW5lY2FwOiBy\n' +
            'b3VuZDsKICAgICAgICBvcGFjaXR5OiAwLjg7CiAgICAgICAgdHJhbnNmb3Jt\n' +
            'LW9yaWdpbjogLTEwcHggOHB4OwogICAgICAgIHRyYW5zZm9ybTogcm90YXRl\n' +
            'KC05MGRlZyk7CiAgICAgICAgYW5pbWF0aW9uOiByYW5rQW5pbWF0aW9uIDFz\n' +
            'IGZvcndhcmRzIGVhc2UtaW4tb3V0OwogICAgICAgIH0KCiAgICAgICAgQGtl\n' +
            'eWZyYW1lcyByYW5rQW5pbWF0aW9uIHsKICAgICAgICBmcm9tIHsKICAgICAg\n' +
            'ICBzdHJva2UtZGFzaG9mZnNldDogMjUxLjMyNzQxMjI4NzE4MzQ1OwogICAg\n' +
            'ICAgIH0KICAgICAgICB0byB7CiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6\n' +
            'IDEyNy42NjA2MTI1NTgyODc7CiAgICAgICAgfQogICAgICAgIH0KCgoKCiAg\n' +
            'ICAgICAgLyogQW5pbWF0aW9ucyAqLwogICAgICAgIEBrZXlmcmFtZXMgc2Nh\n' +
            'bGVJbkFuaW1hdGlvbiB7CiAgICAgICAgZnJvbSB7CiAgICAgICAgdHJhbnNm\n' +
            'b3JtOiB0cmFuc2xhdGUoLTVweCwgNXB4KSBzY2FsZSgwKTsKICAgICAgICB9\n' +
            'CiAgICAgICAgdG8gewogICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01\n' +
            'cHgsIDVweCkgc2NhbGUoMSk7CiAgICAgICAgfQogICAgICAgIH0KICAgICAg\n' +
            'ICBAa2V5ZnJhbWVzIGZhZGVJbkFuaW1hdGlvbiB7CiAgICAgICAgZnJvbSB7\n' +
            'CiAgICAgICAgb3BhY2l0eTogMDsKICAgICAgICB9CiAgICAgICAgdG8gewog\n' +
            'ICAgICAgIG9wYWNpdHk6IDE7CiAgICAgICAgfQogICAgICAgIH0KCgogICAg\n' +
            'PC9zdHlsZT4KCiAgICB1bmRlZmluZWQKCiAgICA8cmVjdCB4PSIwLjUiIHk9\n' +
            'IjAuNSIgcng9IjQuNSIgaGVpZ2h0PSI5OSUiIHN0cm9rZT0iI2U0ZTJlMiIg\n' +
            'd2lkdGg9IjQ5NCIgZmlsbD0iIzFhMWIyNyIgc3Ryb2tlLW9wYWNpdHk9IjEi\n' +
            'Lz4KCgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUsIDM1KSI+CiAg\n' +
            'ICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwgMCkiPgogICAgICAg\n' +
            'ICAgICA8dGV4dCB4PSIwIiB5PSIwIiBjbGFzcz0iaGVhZGVyIj5UeXJhbnRH\n' +
            'ZW5lc2lzJyBHaXRIdWIgU3RhdHM8L3RleHQ+CiAgICAgICAgPC9nPgogICAg\n' +
            'PC9nPgoKCiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLCA1NSkiPgoK\n' +
            'ICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MDAsIDQ3LjUpIj4K\n' +
            'ICAgICAgICAgICAgPGNpcmNsZSBjbGFzcz0icmFuay1jaXJjbGUtcmltIiBj\n' +
            'eD0iLTEwIiBjeT0iOCIgcj0iNDAiLz4KICAgICAgICAgICAgPGNpcmNsZSBj\n' +
            'bGFzcz0icmFuay1jaXJjbGUiIGN4PSItMTAiIGN5PSI4IiByPSI0MCIvPgog\n' +
            'ICAgICAgICAgICA8ZyBjbGFzcz0icmFuay10ZXh0Ij4KICAgICAgICAgICAg\n' +
            'ICAgIDx0ZXh0IHg9IjAiIHk9IjAiIGFsaWdubWVudC1iYXNlbGluZT0iY2Vu\n' +
            'dHJhbCIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiIHRleHQtYW5jaG9y\n' +
            'PSJtaWRkbGUiPgogICAgICAgICAgICAgICAgICAgIEErCiAgICAgICAgICAg\n' +
            'ICAgICA8L3RleHQ+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+Cgog\n' +
            'ICAgICAgIDxzdmcgeD0iMCIgeT0iMCI+CiAgICAgICAgICAgIDxnIHRyYW5z\n' +
            'Zm9ybT0idHJhbnNsYXRlKDAsIDApIj4KICAgICAgICAgICAgICAgIDxnIGNs\n' +
            'YXNzPSJzdGFnZ2VyIiBzdHlsZT0iYW5pbWF0aW9uLWRlbGF5OiA0NTBtcyIg\n' +
            'dHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUsIDApIj4KCiAgICAgICAgICAgICAg\n' +
            'ICAgICAgPHN2ZyBkYXRhLXRlc3RpZD0iaWNvbiIgY2xhc3M9Imljb24iIHZp\n' +
            'ZXdCb3g9IjAgMCAxNiAxNiIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMTYiIGhl\n' +
            'aWdodD0iMTYiPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxs\n' +
            'LXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IC4yNWEuNzUuNzUgMCAwMS42NzMuNDE4\n' +
            'bDEuODgyIDMuODE1IDQuMjEuNjEyYS43NS43NSAwIDAxLjQxNiAxLjI3OWwt\n' +
            'My4wNDYgMi45Ny43MTkgNC4xOTJhLjc1Ljc1IDAgMDEtMS4wODguNzkxTDgg\n' +
            'MTIuMzQ3bC0zLjc2NiAxLjk4YS43NS43NSAwIDAxLTEuMDg4LS43OWwuNzIt\n' +
            'NC4xOTRMLjgxOCA2LjM3NGEuNzUuNzUgMCAwMS40MTYtMS4yOGw0LjIxLS42\n' +
            'MTFMNy4zMjcuNjY4QS43NS43NSAwIDAxOCAuMjV6bTAgMi40NDVMNi42MTUg\n' +
            'NS41YS43NS43NSAwIDAxLS41NjQuNDFsLTMuMDk3LjQ1IDIuMjQgMi4xODRh\n' +
            'Ljc1Ljc1IDAgMDEuMjE2LjY2NGwtLjUyOCAzLjA4NCAyLjc2OS0xLjQ1NmEu\n' +
            'NzUuNzUgMCAwMS42OTggMGwyLjc3IDEuNDU2LS41My0zLjA4NGEuNzUuNzUg\n' +
            'MCAwMS4yMTYtLjY2NGwyLjI0LTIuMTgzLTMuMDk2LS40NWEuNzUuNzUgMCAw\n' +
            'MS0uNTY0LS40MUw4IDIuNjk0di4wMDF6Ii8+CiAgICAgICAgICAgICAgICAg\n' +
            'ICAgPC9zdmc+CgogICAgICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPSJz\n' +
            'dGF0IGJvbGQiIHg9IjI1IiB5PSIxMi41Ij5Ub3RhbCBTdGFyczo8L3RleHQ+\n' +
            'CiAgICAgICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9InN0YXQiIHg9IjE5\n' +
            'MCIgeT0iMTIuNSI+ODwvdGV4dD4KICAgICAgICAgICAgICAgIDwvZz4KICAg\n' +
            'ICAgICAgICAgPC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsIDI1KSI+\n' +
            'CiAgICAgICAgICAgIDxnIGNsYXNzPSJzdGFnZ2VyIiBzdHlsZT0iYW5pbWF0\n' +
            'aW9uLWRlbGF5OiA2MDBtcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUsIDAp\n' +
            'Ij4KCiAgICAgICAgICAgICAgICA8c3ZnIGRhdGEtdGVzdGlkPSJpY29uIiBj\n' +
            'bGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDE2IDE2IiB2ZXJzaW9uPSIxLjEi\n' +
            'IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+CiAgICAgICAgICAgICAgICAgICAg\n' +
            'PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMS42NDMgMy4xNDNMLjQy\n' +
            'NyAxLjkyN0EuMjUuMjUgMCAwMDAgMi4xMDRWNS43NWMwIC4xMzguMTEyLjI1\n' +
            'LjI1LjI1aDMuNjQ2YS4yNS4yNSAwIDAwLjE3Ny0uNDI3TDIuNzE1IDQuMjE1\n' +
            'YTYuNSA2LjUgMCAxMS0xLjE4IDQuNDU4Ljc1Ljc1IDAgMTAtMS40OTMuMTU0\n' +
            'IDguMDAxIDguMDAxIDAgMTAxLjYtNS42ODR6TTcuNzUgNGEuNzUuNzUgMCAw\n' +
            'MS43NS43NXYyLjk5MmwyLjAyOC44MTJhLjc1Ljc1IDAgMDEtLjU1NyAxLjM5\n' +
            'MmwtMi41LTFBLjc1Ljc1IDAgMDE3IDguMjV2LTMuNUEuNzUuNzUgMCAwMTcu\n' +
            'NzUgNHoiLz4KICAgICAgICAgICAgICAgIDwvc3ZnPgoKICAgICAgICAgICAg\n' +
            'ICAgIDx0ZXh0IGNsYXNzPSJzdGF0IGJvbGQiIHg9IjI1IiB5PSIxMi41Ij5U\n' +
            'b3RhbCBDb21taXRzICgyMDIxKTo8L3RleHQ+CiAgICAgICAgICAgICAgICA8\n' +
            'dGV4dCBjbGFzcz0ic3RhdCIgeD0iMTkwIiB5PSIxMi41Ij42MDwvdGV4dD4K\n' +
            'ICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz48ZyB0cmFuc2Zvcm09InRy\n' +
            'YW5zbGF0ZSgwLCA1MCkiPgogICAgICAgICAgICA8ZyBjbGFzcz0ic3RhZ2dl\n' +
            'ciIgc3R5bGU9ImFuaW1hdGlvbi1kZWxheTogNzUwbXMiIHRyYW5zZm9ybT0i\n' +
            'dHJhbnNsYXRlKDI1LCAwKSI+CgogICAgICAgICAgICAgICAgPHN2ZyBkYXRh\n' +
            'LXRlc3RpZD0iaWNvbiIgY2xhc3M9Imljb24iIHZpZXdCb3g9IjAgMCAxNiAx\n' +
            'NiIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiPgogICAg\n' +
            'ICAgICAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0i\n' +
            'TTcuMTc3IDMuMDczTDkuNTczLjY3N0EuMjUuMjUgMCAwMTEwIC44NTR2NC43\n' +
            'OTJhLjI1LjI1IDAgMDEtLjQyNy4xNzdMNy4xNzcgMy40MjdhLjI1LjI1IDAg\n' +
            'MDEwLS4zNTR6TTMuNzUgMi41YS43NS43NSAwIDEwMCAxLjUuNzUuNzUgMCAw\n' +
            'MDAtMS41em0tMi4yNS43NWEyLjI1IDIuMjUgMCAxMTMgMi4xMjJ2NS4yNTZh\n' +
            'Mi4yNTEgMi4yNTEgMCAxMS0xLjUgMFY1LjM3MkEyLjI1IDIuMjUgMCAwMTEu\n' +
            'NSAzLjI1ek0xMSAyLjVoLTFWNGgxYTEgMSAwIDAxMSAxdjUuNjI4YTIuMjUx\n' +
            'IDIuMjUxIDAgMTAxLjUgMFY1QTIuNSAyLjUgMCAwMDExIDIuNXptMSAxMC4y\n' +
            'NWEuNzUuNzUgMCAxMTEuNSAwIC43NS43NSAwIDAxLTEuNSAwek0zLjc1IDEy\n' +
            'YS43NS43NSAwIDEwMCAxLjUuNzUuNzUgMCAwMDAtMS41eiIvPgogICAgICAg\n' +
            'ICAgICAgICAgPC9zdmc+CgogICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9\n' +
            'InN0YXQgYm9sZCIgeD0iMjUiIHk9IjEyLjUiPlRvdGFsIFBSczo8L3RleHQ+\n' +
            'CiAgICAgICAgICAgICAgICA8dGV4dCBjbGFzcz0ic3RhdCIgeD0iMTkwIiB5\n' +
            'PSIxMi41Ij4yPC90ZXh0PgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9n\n' +
            'PjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsIDc1KSI+CiAgICAgICAgICAg\n' +
            'IDxnIGNsYXNzPSJzdGFnZ2VyIiBzdHlsZT0iYW5pbWF0aW9uLWRlbGF5OiA5\n' +
            'MDBtcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUsIDApIj4KCiAgICAgICAg\n' +
            'ICAgICAgICA8c3ZnIGRhdGEtdGVzdGlkPSJpY29uIiBjbGFzcz0iaWNvbiIg\n' +
            'dmlld0JveD0iMCAwIDE2IDE2IiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxNiIg\n' +
            'aGVpZ2h0PSIxNiI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbC1y\n' +
            'dWxlPSJldmVub2RkIiBkPSJNOCAxLjVhNi41IDYuNSAwIDEwMCAxMyA2LjUg\n' +
            'Ni41IDAgMDAwLTEzek0wIDhhOCA4IDAgMTExNiAwQTggOCAwIDAxMCA4em05\n' +
            'IDNhMSAxIDAgMTEtMiAwIDEgMSAwIDAxMiAwem0tLjI1LTYuMjVhLjc1Ljc1\n' +
            'IDAgMDAtMS41IDB2My41YS43NS43NSAwIDAwMS41IDB2LTMuNXoiLz4KICAg\n' +
            'ICAgICAgICAgICAgIDwvc3ZnPgoKICAgICAgICAgICAgICAgIDx0ZXh0IGNs\n' +
            'YXNzPSJzdGF0IGJvbGQiIHg9IjI1IiB5PSIxMi41Ij5Ub3RhbCBJc3N1ZXM6\n' +
            'PC90ZXh0PgogICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9InN0YXQiIHg9\n' +
            'IjE5MCIgeT0iMTIuNSI+MjwvdGV4dD4KICAgICAgICAgICAgPC9nPgogICAg\n' +
            'ICAgIDwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLCAxMDApIj4KICAg\n' +
            'ICAgICAgICAgPGcgY2xhc3M9InN0YWdnZXIiIHN0eWxlPSJhbmltYXRpb24t\n' +
            'ZGVsYXk6IDEwNTBtcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUsIDApIj4K\n' +
            'CiAgICAgICAgICAgICAgICA8c3ZnIGRhdGEtdGVzdGlkPSJpY29uIiBjbGFz\n' +
            'cz0iaWNvbiIgdmlld0JveD0iMCAwIDE2IDE2IiB2ZXJzaW9uPSIxLjEiIHdp\n' +
            'ZHRoPSIxNiIgaGVpZ2h0PSIxNiI+CiAgICAgICAgICAgICAgICAgICAgPHBh\n' +
            'dGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMiAyLjVBMi41IDIuNSAwIDAx\n' +
            'NC41IDBoOC43NWEuNzUuNzUgMCAwMS43NS43NXYxMi41YS43NS43NSAwIDAx\n' +
            'LS43NS43NWgtMi41YS43NS43NSAwIDExMC0xLjVoMS43NXYtMmgtOGExIDEg\n' +
            'MCAwMC0uNzE0IDEuNy43NS43NSAwIDAxLTEuMDcyIDEuMDVBMi40OTUgMi40\n' +
            'OTUgMCAwMTIgMTEuNXYtOXptMTAuNS0xVjloLThjLS4zNTYgMC0uNjk0LjA3\n' +
            'NC0xIC4yMDhWMi41YTEgMSAwIDAxMS0xaDh6TTUgMTIuMjV2My4yNWEuMjUu\n' +
            'MjUgMCAwMC40LjJsMS40NS0xLjA4N2EuMjUuMjUgMCAwMS4zIDBMOC42IDE1\n' +
            'LjdhLjI1LjI1IDAgMDAuNC0uMnYtMy4yNWEuMjUuMjUgMCAwMC0uMjUtLjI1\n' +
            'aC0zLjVhLjI1LjI1IDAgMDAtLjI1LjI1eiIvPgogICAgICAgICAgICAgICAg\n' +
            'PC9zdmc+CgogICAgICAgICAgICAgICAgPHRleHQgY2xhc3M9InN0YXQgYm9s\n' +
            'ZCIgeD0iMjUiIHk9IjEyLjUiPkNvbnRyaWJ1dGVkIHRvOjwvdGV4dD4KICAg\n' +
            'ICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPSJzdGF0IiB4PSIxOTAiIHk9IjEy\n' +
            'LjUiPjU8L3RleHQ+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAg\n' +
            'ICAgICAgPC9zdmc+CgogICAgPC9nPgo8L3N2Zz4K',
        url: "https://github.com/TyrantG",
        col_type: 'pic_1_full'
    });

    data.forEach(rule => {
        fst_rule_list = []
        rule.data.forEach(item => {
            item.rules.forEach(each => {
                fst_rule_list.push(each.rule)
            })
        })
        writeFile("hiker://files/TyrantG/Temporary/"+rule.title+".json", JSON.stringify(fst_rule_list));

        d.push({
            title: rule.title,
            url: "rule://"+base64Encode(collection_password+"hiker://files/TyrantG/Temporary/"+rule.title+".json").replace(/\n/g, ''),
            col_type: 'text_center_1'
        });

        rule.data.forEach(item => {
            snd_rule_list = []
            item.rules.forEach(each => {
                snd_rule_list.push(each.rule)
            })
            writeFile("hiker://files/TyrantG/Temporary/"+rule.title+"/"+item.title+".json", JSON.stringify(snd_rule_list));
            d.push({
                title: item.title,
                url: "rule://"+base64Encode(collection_password+"hiker://files/TyrantG/Temporary/"+rule.title+"/"+item.title+".json").replace(/\n/g, ''),
                col_type: 'text_2'
            });
            item.rules.forEach(each => {
                d.push({
                    title: each.title,
                    url: "rule://"+base64Encode(rule_password+JSON.stringify(each.rule)).replace(/\n/g, ''),
                    col_type: 'flex_button'
                })
            })
            d.push({
                col_type: 'line'
            });
        })

        d.push({
            col_type: 'line_blank'
        });
    })

    res.data = d;
    setHomeResult(res);
}