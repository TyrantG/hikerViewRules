(function (e) {
      function t(t) {
        for (var o, a, i = t[0], u = t[1], l = t[2], d = 0, f = []; d < i.length; d++)
          a = i[d],
          Object.prototype.hasOwnProperty.call(r, a) && r[a] && f.push(r[a][0]),
              r[a] = 0;
        for (o in u)
          Object.prototype.hasOwnProperty.call(u, o) && (e[o] = u[o]);
        s && s(t);
        while (f.length)
          f.shift()();
        return c.push.apply(c, l || []),
            n()
      }

      function n() {
        for (var e, t = 0; t < c.length; t++) {
          for (var n = c[t], o = !0, a = 1; a < n.length; a++) {
            var i = n[a];
            0 !== r[i] && (o = !1)
          }
          o && (c.splice(t--, 1),
              e = u(u.s = n[0]))
        }
        return e
      }

      var o = {}
          , a = {
        app: 0
      }
          , r = {
        app: 0
      }
          , c = [];

      function i(e) {
        return u.p + "js/" + ({}[e] || e) + "." + {
          "chunk-15938044": "179a630b",
          "chunk-368b6807": "99e0305d",
          "chunk-4249ab2c": "8ee2aa29",
          "chunk-6b30d805": "78a3143b",
          "chunk-6e286dfa": "f38a98b3",
          "chunk-2097b46e": "9a575f86",
          "chunk-543efe52": "eae3d0f4",
          "chunk-85f53adc": "c811eccf",
          "chunk-a00914aa": "2b85da67",
          "chunk-a9e43fac": "80eecac7",
          "chunk-b66fbe84": "b58c27f3",
          "chunk-c5d8cefe": "3577eb5f"
        }[e] + ".js"
      }

      function u(t) {
        if (o[t])
          return o[t].exports;
        var n = o[t] = {
          i: t,
          l: !1,
          exports: {}
        };
        return e[t].call(n.exports, n, n.exports, u),
            n.l = !0,
            n.exports
      }

      u.e = function (e) {
        var t = []
            , n = {
          "chunk-15938044": 1,
          "chunk-368b6807": 1,
          "chunk-4249ab2c": 1,
          "chunk-6b30d805": 1,
          "chunk-6e286dfa": 1,
          "chunk-2097b46e": 1,
          "chunk-543efe52": 1,
          "chunk-85f53adc": 1,
          "chunk-a00914aa": 1,
          "chunk-a9e43fac": 1,
          "chunk-b66fbe84": 1,
          "chunk-c5d8cefe": 1
        };
        a[e] ? t.push(a[e]) : 0 !== a[e] && n[e] && t.push(a[e] = new Promise((function (t, n) {
              for (var o = "css/" + ({}[e] || e) + "." + {
                "chunk-15938044": "002c44df",
                "chunk-368b6807": "1210c05b",
                "chunk-4249ab2c": "1c454788",
                "chunk-6b30d805": "2b068499",
                "chunk-6e286dfa": "1355d26e",
                "chunk-2097b46e": "b8b526db",
                "chunk-543efe52": "a85bcdac",
                "chunk-85f53adc": "301cf366",
                "chunk-a00914aa": "683df4c3",
                "chunk-a9e43fac": "4c01e81e",
                "chunk-b66fbe84": "7fb76a31",
                "chunk-c5d8cefe": "6ff9330b"
              }[e] + ".css", r = u.p + o, c = document.getElementsByTagName("link"), i = 0; i < c.length; i++) {
                var l = c[i]
                    , d = l.getAttribute("data-href") || l.getAttribute("href");
                if ("stylesheet" === l.rel && (d === o || d === r))
                  return t()
              }
              var f = document.getElementsByTagName("style");
              for (i = 0; i < f.length; i++) {
                l = f[i],
                    d = l.getAttribute("data-href");
                if (d === o || d === r)
                  return t()
              }
              var s = document.createElement("link");
              s.rel = "stylesheet",
                  s.type = "text/css",
                  s.onload = t,
                  s.onerror = function (t) {
                    var o = t && t.target && t.target.src || r
                        , c = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
                    c.code = "CSS_CHUNK_LOAD_FAILED",
                        c.request = o,
                        delete a[e],
                        s.parentNode.removeChild(s),
                        n(c)
                  }
                  ,
                  s.href = r;
              var p = document.getElementsByTagName("head")[0];
              p.appendChild(s)
            }
        )).then((function () {
              a[e] = 0
            }
        )));
        var o = r[e];
        if (0 !== o)
          if (o)
            t.push(o[2]);
          else {
            var c = new Promise((function (t, n) {
                  o = r[e] = [t, n]
                }
            ));
            t.push(o[2] = c);
            var l, d = document.createElement("script");
            d.charset = "utf-8",
                d.timeout = 120,
            u.nc && d.setAttribute("nonce", u.nc),
                d.src = i(e);
            var f = new Error;
            l = function (t) {
              d.onerror = d.onload = null,
                  clearTimeout(s);
              var n = r[e];
              if (0 !== n) {
                if (n) {
                  var o = t && ("load" === t.type ? "missing" : t.type)
                      , a = t && t.target && t.target.src;
                  f.message = "Loading chunk " + e + " failed.\n(" + o + ": " + a + ")",
                      f.name = "ChunkLoadError",
                      f.type = o,
                      f.request = a,
                      n[1](f)
                }
                r[e] = void 0
              }
            }
            ;
            var s = setTimeout((function () {
                  l({
                    type: "timeout",
                    target: d
                  })
                }
            ), 12e4);
            d.onerror = d.onload = l,
                document.head.appendChild(d)
          }
        return Promise.all(t)
      }
          ,
          u.m = e,
          u.c = o,
          u.d = function (e, t, n) {
            u.o(e, t) || Object.defineProperty(e, t, {
              enumerable: !0,
              get: n
            })
          }
          ,
          u.r = function (e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
              value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                  value: !0
                })
          }
          ,
          u.t = function (e, t) {
            if (1 & t && (e = u(e)),
            8 & t)
              return e;
            if (4 & t && "object" === typeof e && e && e.__esModule)
              return e;
            var n = Object.create(null);
            if (u.r(n),
                Object.defineProperty(n, "default", {
                  enumerable: !0,
                  value: e
                }),
            2 & t && "string" != typeof e)
              for (var o in e)
                u.d(n, o, function (t) {
                  return e[t]
                }
                    .bind(null, o));
            return n
          }
          ,
          u.n = function (e) {
            var t = e && e.__esModule ? function () {
                  return e["default"]
                }
                : function () {
                  return e
                }
            ;
            return u.d(t, "a", t),
                t
          }
          ,
          u.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
          }
          ,
          u.p = "/",
          u.oe = function (e) {
            throw console.error(e),
                e
          }
      ;
      var l = window["webpackJsonp"] = window["webpackJsonp"] || []
          , d = l.push.bind(l);
      l.push = t,
          l = l.slice();
      for (var f = 0; f < l.length; f++)
        t(l[f]);
      var s = d;
      c.push([0, "chunk-vendors"]),
          n()
    }
)({
  0: function (e, t, n) {
    e.exports = n("56d7")
  },
  "56d7": function (e, t, n) {
    "use strict";
    n.r(t);
    n("e260"),
        n("e6cf"),
        n("cca6"),
        n("a79d");
    var o = n("2b0e")
        , a = (n("aa35"),
            function () {
              var e = this
                  , t = e.$createElement
                  , n = e._self._c || t;
              return n("div", {
                attrs: {
                  id: "app"
                }
              }, [n("keep-alive", [e.$route.meta.keepAlive ? n("router-view") : e._e()], 1), e.$route.meta.keepAlive ? e._e() : n("router-view"), n("div", {
                directives: [{
                  name: "show",
                  rawName: "v-show",
                  value: e.download,
                  expression: "download"
                }],
                staticClass: "download"
              }, [n("div", [e._v("下载APP观看流畅视频")]), n("div", [n("a", {
                on: {
                  click: function (t) {
                    return e.goTo()
                  }
                }
              }, [n("button", [e._v("前往下载")])]), n("van-icon", {
                attrs: {
                  name: "cross",
                  size: "2rem"
                },
                on: {
                  click: e.hideDownload
                }
              })], 1)])], 1)
            }
    )
        , r = []
        , c = n("01a1")
        , i = n.n(c)
        , u = {
      data: function () {
        return {
          download: !this.$isApp()
        }
      },
      watch: {
        "$route.query": function (e) {
          void 0 != e.topheight && void 0 == this.$store.state.query.topheight && this.$store.commit("updateQuery", e)
        }
      },
      methods: {
        hideDownload: function () {
          this.download = !1
        },
        goTo: function () {
          var e = {
            scheme: {
              protocol: "fruit",
              host: "splash"
            },
            appstore: "//fp5.app",
            fallback: "//fp5.app"
          }
              , t = new i.a(e);
          t.open({
            param: {},
            path: ""
          })
        }
      }
    }
        , l = u
        , d = (n("5c0b"),
        n("2877"))
        , f = Object(d["a"])(l, a, r, !1, null, null, null)
        , s = f.exports
        , p = (n("d3b7"),
        n("8c4f"));
    o["default"].use(p["a"]);
    var h = [{
      path: "/",
      name: "home",
      component: function () {
        return Promise.all([n.e("chunk-15938044"), n.e("chunk-368b6807")]).then(n.bind(null, "bb51"))
      },
      meta: {
        keepAlive: !0
      }
    }, {
      path: "/find",
      name: "find",
      component: function () {
        return n.e("chunk-a9e43fac").then(n.bind(null, "3afa"))
      },
      meta: {
        keepAlive: !1
      }
    }, {
      path: "/find/recommended-weekly",
      name: "recommended-weekly",
      component: function () {
        return Promise.all([n.e("chunk-15938044"), n.e("chunk-4249ab2c")]).then(n.bind(null, "222e"))
      },
      meta: {
        keepAlive: !1
      }
    }, {
      path: "/find/hot-tag/:id(\\d+)/:tag",
      name: "hot-tag",
      component: function () {
        return Promise.all([n.e("chunk-15938044"), n.e("chunk-6b30d805")]).then(n.bind(null, "f243"))
      },
      meta: {
        keepAlive: !1
      }
    }, {
      path: "/find/new-hot",
      name: "new-hot",
      component: function () {
        return Promise.all([n.e("chunk-15938044"), n.e("chunk-6e286dfa")]).then(n.bind(null, "c1ab"))
      },
      meta: {
        keepAlive: !1
      }
    }, {
      path: "/anchor",
      name: "anchor",
      component: function () {
        return n.e("chunk-543efe52").then(n.bind(null, "b111"))
      },
      meta: {
        keepAlive: !1
      }
    }, {
      path: "/on",
      name: "on",
      component: function () {
        return n.e("chunk-85f53adc").then(n.bind(null, "4818"))
      },
      meta: {
        keepAlive: !1
      }
    }, {
      path: "/anchor/anchor-details/:id",
      name: "anchorDetails",
      component: function () {
        return n.e("chunk-2097b46e").then(n.bind(null, "0b52"))
      },
      meta: {
        keepAlive: !1
      }
    }, {
      path: "/play-details/:id",
      name: "playDetails",
      component: function () {
        return n.e("chunk-b66fbe84").then(n.bind(null, "56d8"))
      },
      meta: {
        keepAlive: !1
      }
    }, {
      path: "/video",
      name: "video",
      component: function () {
        return n.e("chunk-a00914aa").then(n.bind(null, "81a8"))
      },
      meta: {
        keepAlive: !1
      }
    }, {
      path: "/merchants",
      name: "merchants",
      component: function () {
        return n.e("chunk-c5d8cefe").then(n.bind(null, "5606"))
      },
      meta: {
        keepAlive: !1
      }
    }]
        , m = new p["a"]({
      base: "/",
      routes: h
    })
        , g = m
        , v = (n("99af"),
        n("bc3a"))
        , b = n.n(v)
        , k = n("76a0")
        , y = n.n(k)
        , w = function (e) {
      Object(k["Toast"])({
        message: e,
        position: "middle",
        duration: 1e3
      })
    }
        , _ = function (e) {
      switch (e) {
        case 404:
          w("请求的资源不存在");
          break;
        case 500:
          w("服务器错误");
          break;
        default:
          w("请求失败")
      }
    }
        , A = b.a.create({
      timeout: 12e3
    });
    A.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded",
        A.interceptors.response.use((function (e) {
              return 200 === e.status ? Promise.resolve(e) : Promise.reject(e)
            }
        ), (function (e) {
              var t = e.response;
              return t ? (_(t.status, t.data.message),
                  Promise.reject(t)) : window.navigator.onLine ? Promise.reject(e) : void _(t.status, t.data.message)
            }
        ));
    var P = A
        , j = n("4328")
        , O = n.n(j)
        , S = {
      test: "//api.f510b.info",
      formal: "//api.f03d9.info"
    }
        , $ = S.formal;

    function T() {
      var e = "";
      return e = /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ? "iOS" : /(Android)/i.test(navigator.userAgent) ? "Android" : "PC",
          e
    }

    function E() {
      var e = !0
          , t = !0;
      try {
        window.webkit.messageHandlers.openVideoUrl.postMessage
      } catch (n) {
        e = !1
      }
      try {
        window.Android.openVideoUrl
      } catch (n) {
        t = !1
      }
      return !(!e && !t)
    }

    function C() {
      if (!E())
        return 0;
      var e = T();
      return "Android" == e ? 1 : "iOS" == e ? 2 : void 0
    }

    var I = {
      getOnInfo: function () {
        return P.get("".concat($, "/article/1?platfrom=").concat(C()))
      },
      getAnchorList: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10
            , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return P.get("".concat($, "/anchor?limit=").concat(e, "&page=").concat(t, "&platfrom=").concat(C()))
      },
      getHomeVideo: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10
            , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return P.get("".concat($, "/movie?limit=").concat(e, "&page=").concat(t, "&platfrom=").concat(C()))
      },
      getAnchorInfo: function (e) {
        return P.get("".concat($, "/anchor/detail/").concat(e, "?platfrom=").concat(C()))
      },
      getAnchorVideo: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7
            , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return P.get("".concat($, "/anchor/getMovie/").concat(e, "?limit=").concat(t, "&page=").concat(n, "&platfrom=").concat(C()))
      },
      getAnchorBottom: function () {
        return P.get("".concat($, "/advert/anchor-bottom?platfrom=").concat(C()))
      },
      getCarousel: function () {
        return P.get("".concat($, "/banner?platfrom=").concat(C()))
      },
      getVideoList: function (e) {
        return P.get("".concat($, "/library?limit=").concat(e.limit, "&page=").concat(e.page, "&platfrom=").concat(C()))
      },
      getVideoInfo: function (e) {
        return P.get("".concat($, "/playDetail/").concat(e, "?platfrom=").concat(C()))
      },
      postLikeVideo: function (e) {
        return e.platfrom = C(),
            P.post("".concat($, "/social/like"), O.a.stringify(e))
      },
      postCancelLikeVideo: function (e) {
        return e.platfrom = C(),
            P.post("".concat($, "/social/cancel_like"), O.a.stringify(e))
      },
      postSocialPlay: function (e) {
        return e.platfrom = C(),
            P.post("".concat($, "/social/play"), O.a.stringify(e))
      },
      postShareVideo: function (e) {
        return e.platfrom = C(),
            P.post("".concat($, "/social/share"), O.a.stringify(e))
      },
      postPlayVideo: function (e) {
        return e.platfrom = C(),
            P.post("".concat($, "/social/movie-play"), O.a.stringify(e))
      },
      getInfo: function () {
        return P.get("".concat($, "/site/h5_page_bottom?platfrom=").concat(C()))
      },
      getLibraryDetail: function (e) {
        return P.get("".concat($, "/library-detail/").concat(e, "?platfrom=").concat(C()))
      },
      getLibrary: function (e) {
        return P.get("".concat($, "/anchor/get-library/").concat(e.id, "?limit=").concat(e.limit, "&page=").concat(e.page, "&platfrom=").concat(C()))
      },
      getMovieInfo: function (e) {
        return P.get("".concat($, "/movie/info/").concat(e, "?platfrom=").concat(C()))
      },
      getMovieplay: function (e) {
        return e.platfrom = C(),
            P.post("".concat($, "/social/movie-play/"), O.a.stringify(e))
      },
      getFind: function () {
        return P.get("".concat($, "/discovery?platfrom=").concat(C()))
      },
      getRecommend: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return P.get("".concat($, "/recommend?page=").concat(e, "&platfrom=").concat(C()))
      },
      getHot: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return P.get("".concat($, "/hot?page=").concat(e, "&platfrom=").concat(C()))
      },
      getHotTag: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
            , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return P.get("".concat($, "/library-tag-list?page=").concat(t, "&tag_id=").concat(e, "&platfrom=").concat(C()))
      }
    }
        , L = I
        , V = n("4eb5")
        , x = n.n(V)
        , M = n("2f62");
    o["default"].use(M["a"]);
    var B = new M["a"].Store({
      state: {
        info: {},
        query: {}
      },
      getters: {},
      mutations: {
        updateInfo: function (e, t) {
          e.info = t
        },
        updateQuery: function (e, t) {
          e.query = t
        }
      },
      actions: {
        updateInfo: function (e, t) {
          var n = e.commit;
          e.state;
          t.$api.getInfo().then((function (e) {
                n("updateInfo", e.data.data)
              }
          ))
        }
      }
    })
        , D = n("2b27")
        , N = n.n(D)
        , U = n("b970");
    n("157a");
    o["default"].use(U["a"]),
        o["default"].use(y.a),
        o["default"].use(x.a),
        o["default"].use(N.a),
        o["default"].prototype.goBack = function () {
          window.history.length <= 1 ? this.$router.push("/") : this.$router.back(-1)
        }
        ,
        o["default"].prototype.$api = L,
        o["default"].prototype.$judgeClient = function () {
          var e = "";
          return e = /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ? "iOS" : /(Android)/i.test(navigator.userAgent) ? "Android" : "PC",
              e
        }
        ,
        o["default"].prototype.$isApp = function () {
          var e = !0
              , t = !0;
          try {
            window.webkit.messageHandlers.openVideoUrl.postMessage
          } catch (n) {
            e = !1
          }
          try {
            window.Android.openVideoUrl
          } catch (n) {
            t = !1
          }
          return !(!e && !t)
        }
        ,
        o["default"].prototype.$openUrl = function (e) {
          if (2 == e.open_type) {
            var t = this.$judgeClient();
            if (this.$isApp())
              "iOS" == t ? window.webkit.messageHandlers.openUrl.postMessage({
                url: e.outer_type_link
              }) : "Android" == t && window.Android.openUrl(e.outer_type_link);
            else if ("iOS" == t) {
              var n = window.open(e.outer_type_link, "_blank");
              b()({
                method: "",
                url: "",
                data: ""
              }).then((function () {
                    n.location = e.outer_type_link
                  }
              ))
            } else
              window.open(e.outer_type_link, "_blank")
          } else
            1 == e.inner_type ? this.$router.push({
              path: "/play-details/".concat(e.inner_type_library_id)
            }) : this.$router.push({
              path: "/anchor/anchor-details/".concat(e.inner_type_anchor_id)
            })
        }
        ,
        o["default"].config.productionTip = !1,
        g.afterEach((function () {
              setTimeout((function () {
                    (function () {
                          document.getElementById("baidu_tj") && document.getElementById("baidu_tj").remove();
                          var e = document.createElement("script");
                          e.src = "https://hm.baidu.com/hm.js?adbf5693397f5c466bc59863bfe5cf52",
                              e.id = "baidu_tj";
                          var t = document.getElementsByTagName("script")[0];
                          t.parentNode.insertBefore(e, t)
                        }
                    )()
                  }
              ), 0)
            }
        )),
        g.beforeEach((function (e, t, n) {
              if (t.meta.keepAlive) {
                var o = document.querySelector(".scroll")
                    , a = o ? o.scrollTop : 0;
                t.meta.scrollTop = a
              }
              n()
            }
        )),
        new o["default"]({
          store: B,
          router: g,
          render: function (e) {
            return e(s)
          }
        }).$mount("#app")
  },
  "5c0b": function (e, t, n) {
    "use strict";
    var o = n("9c0c")
        , a = n.n(o);
    a.a
  },
  "9c0c": function (e, t, n) {
  }
});


(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-b66fbe84"], {
  "0418": function(e, t, n) {
    "use strict";
    var r = function() {
      var e = this
          , t = e.$createElement
          , n = e._self._c || t;
      return n("div", {
        staticClass: "header"
      }, [n("div", {
        style: {
          marginTop: e.$store.state.query.topheight + "px"
        }
      }, [n("div", {
        staticClass: "back-icon",
        on: {
          click: e.pushBack
        }
      }, [n("van-icon", {
        attrs: {
          name: "arrow-left",
          size: "1.5rem"
        }
      })], 1), n("div", {
        staticClass: "title"
      }, [e._t("title", [e._m(0), e._v("水果派 ")])], 2), n("div", {
        staticClass: "back-icon"
      })])])
    }
        , i = [function() {
      var e = this
          , t = e.$createElement
          , r = e._self._c || t;
      return r("div", {
        staticClass: "logo"
      }, [r("img", {
        attrs: {
          src: n("712c"),
          alt: "",
          lazy: "loaded"
        }
      })])
    }
    ]
        , o = {
      methods: {
        pushBack: function() {
          this.goBack()
        }
      }
    }
        , a = o
        , s = (n("b131"),
        n("2877"))
        , u = Object(s["a"])(a, r, i, !1, null, "f9dd0cc8", null);
    t["a"] = u.exports
  },
  1157: function(e, t, n) {
    var r, i;
    /*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
    (function(t, n) {
          "use strict";
          "object" === typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
                if (!e.document)
                  throw new Error("jQuery requires a window with a document");
                return n(e)
              }
              : n(t)
        }
    )("undefined" !== typeof window ? window : this, (function(n, o) {
          "use strict";
          var a = []
              , s = Object.getPrototypeOf
              , u = a.slice
              , l = a.flat ? function(e) {
                return a.flat.call(e)
              }
              : function(e) {
                return a.concat.apply([], e)
              }
              , c = a.push
              , f = a.indexOf
              , d = {}
              , p = d.toString
              , h = d.hasOwnProperty
              , g = h.toString
              , v = g.call(Object)
              , m = {}
              , y = function(e) {
            return "function" === typeof e && "number" !== typeof e.nodeType
          }
              , x = function(e) {
            return null != e && e === e.window
          }
              , b = n.document
              , w = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
          };
          function T(e, t, n) {
            n = n || b;
            var r, i, o = n.createElement("script");
            if (o.text = e,
                t)
              for (r in w)
                i = t[r] || t.getAttribute && t.getAttribute(r),
                i && o.setAttribute(r, i);
            n.head.appendChild(o).parentNode.removeChild(o)
          }
          function C(e) {
            return null == e ? e + "" : "object" === typeof e || "function" === typeof e ? d[p.call(e)] || "object" : typeof e
          }
          var k = "3.5.1"
              , E = function(e, t) {
            return new E.fn.init(e,t)
          };
          function S(e) {
            var t = !!e && "length"in e && e.length
                , n = C(e);
            return !y(e) && !x(e) && ("array" === n || 0 === t || "number" === typeof t && t > 0 && t - 1 in e)
          }
          E.fn = E.prototype = {
            jquery: k,
            constructor: E,
            length: 0,
            toArray: function() {
              return u.call(this)
            },
            get: function(e) {
              return null == e ? u.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
              var t = E.merge(this.constructor(), e);
              return t.prevObject = this,
                  t
            },
            each: function(e) {
              return E.each(this, e)
            },
            map: function(e) {
              return this.pushStack(E.map(this, (function(t, n) {
                    return e.call(t, n, t)
                  }
              )))
            },
            slice: function() {
              return this.pushStack(u.apply(this, arguments))
            },
            first: function() {
              return this.eq(0)
            },
            last: function() {
              return this.eq(-1)
            },
            even: function() {
              return this.pushStack(E.grep(this, (function(e, t) {
                    return (t + 1) % 2
                  }
              )))
            },
            odd: function() {
              return this.pushStack(E.grep(this, (function(e, t) {
                    return t % 2
                  }
              )))
            },
            eq: function(e) {
              var t = this.length
                  , n = +e + (e < 0 ? t : 0);
              return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
              return this.prevObject || this.constructor()
            },
            push: c,
            sort: a.sort,
            splice: a.splice
          },
              E.extend = E.fn.extend = function() {
                var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
                for ("boolean" === typeof a && (l = a,
                    a = arguments[s] || {},
                    s++),
                     "object" === typeof a || y(a) || (a = {}),
                     s === u && (a = this,
                         s--); s < u; s++)
                  if (null != (e = arguments[s]))
                    for (t in e)
                      r = e[t],
                      "__proto__" !== t && a !== r && (l && r && (E.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t],
                          o = i && !Array.isArray(n) ? [] : i || E.isPlainObject(n) ? n : {},
                          i = !1,
                          a[t] = E.extend(l, o, r)) : void 0 !== r && (a[t] = r));
                return a
              }
              ,
              E.extend({
                expando: "jQuery" + (k + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(e) {
                  throw new Error(e)
                },
                noop: function() {},
                isPlainObject: function(e) {
                  var t, n;
                  return !(!e || "[object Object]" !== p.call(e)) && (t = s(e),
                  !t || (n = h.call(t, "constructor") && t.constructor,
                  "function" === typeof n && g.call(n) === v))
                },
                isEmptyObject: function(e) {
                  var t;
                  for (t in e)
                    return !1;
                  return !0
                },
                globalEval: function(e, t, n) {
                  T(e, {
                    nonce: t && t.nonce
                  }, n)
                },
                each: function(e, t) {
                  var n, r = 0;
                  if (S(e)) {
                    for (n = e.length; r < n; r++)
                      if (!1 === t.call(e[r], r, e[r]))
                        break
                  } else
                    for (r in e)
                      if (!1 === t.call(e[r], r, e[r]))
                        break;
                  return e
                },
                makeArray: function(e, t) {
                  var n = t || [];
                  return null != e && (S(Object(e)) ? E.merge(n, "string" === typeof e ? [e] : e) : c.call(n, e)),
                      n
                },
                inArray: function(e, t, n) {
                  return null == t ? -1 : f.call(t, e, n)
                },
                merge: function(e, t) {
                  for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                    e[i++] = t[r];
                  return e.length = i,
                      e
                },
                grep: function(e, t, n) {
                  for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++)
                    r = !t(e[o], o),
                    r !== s && i.push(e[o]);
                  return i
                },
                map: function(e, t, n) {
                  var r, i, o = 0, a = [];
                  if (S(e))
                    for (r = e.length; o < r; o++)
                      i = t(e[o], o, n),
                      null != i && a.push(i);
                  else
                    for (o in e)
                      i = t(e[o], o, n),
                      null != i && a.push(i);
                  return l(a)
                },
                guid: 1,
                support: m
              }),
          "function" === typeof Symbol && (E.fn[Symbol.iterator] = a[Symbol.iterator]),
              E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
                    d["[object " + t + "]"] = t.toLowerCase()
                  }
              ));
          var D = /*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
              function(e) {
                var t, n, r, i, o, a, s, u, l, c, f, d, p, h, g, v, m, y, x, b = "sizzle" + 1 * new Date, w = e.document, T = 0, C = 0, k = ue(), E = ue(), S = ue(), D = ue(), A = function(e, t) {
                  return e === t && (f = !0),
                      0
                }, j = {}.hasOwnProperty, N = [], L = N.pop, q = N.push, O = N.push, H = N.slice, _ = function(e, t) {
                  for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t)
                      return n;
                  return -1
                }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", P = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\[\\da-fA-F]{1,6}" + P + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", I = "\\[" + P + "*(" + M + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + P + "*\\]", $ = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)", W = new RegExp(P + "+","g"), B = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$","g"), F = new RegExp("^" + P + "*," + P + "*"), z = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"), U = new RegExp(P + "|>"), V = new RegExp($), X = new RegExp("^" + M + "$"), Y = {
                  ID: new RegExp("^#(" + M + ")"),
                  CLASS: new RegExp("^\\.(" + M + ")"),
                  TAG: new RegExp("^(" + M + "|[*])"),
                  ATTR: new RegExp("^" + I),
                  PSEUDO: new RegExp("^" + $),
                  CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)","i"),
                  bool: new RegExp("^(?:" + R + ")$","i"),
                  needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)","i")
                }, G = /HTML$/i, J = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + P + "?|\\\\([^\\r\\n\\f])","g"), ne = function(e, t) {
                  var n = "0x" + e.slice(1) - 65536;
                  return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
                  return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                }, oe = function() {
                  d()
                }, ae = be((function(e) {
                      return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                    }
                ), {
                  dir: "parentNode",
                  next: "legend"
                });
                try {
                  O.apply(N = H.call(w.childNodes), w.childNodes),
                      N[w.childNodes.length].nodeType
                } catch (De) {
                  O = {
                    apply: N.length ? function(e, t) {
                          q.apply(e, H.call(t))
                        }
                        : function(e, t) {
                          var n = e.length
                              , r = 0;
                          while (e[n++] = t[r++])
                            ;
                          e.length = n - 1
                        }
                  }
                }
                function se(e, t, r, i) {
                  var o, s, l, c, f, h, m, y = t && t.ownerDocument, w = t ? t.nodeType : 9;
                  if (r = r || [],
                  "string" !== typeof e || !e || 1 !== w && 9 !== w && 11 !== w)
                    return r;
                  if (!i && (d(t),
                      t = t || p,
                      g)) {
                    if (11 !== w && (f = Z.exec(e)))
                      if (o = f[1]) {
                        if (9 === w) {
                          if (!(l = t.getElementById(o)))
                            return r;
                          if (l.id === o)
                            return r.push(l),
                                r
                        } else if (y && (l = y.getElementById(o)) && x(t, l) && l.id === o)
                          return r.push(l),
                              r
                      } else {
                        if (f[2])
                          return O.apply(r, t.getElementsByTagName(e)),
                              r;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName)
                          return O.apply(r, t.getElementsByClassName(o)),
                              r
                      }
                    if (n.qsa && !D[e + " "] && (!v || !v.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                      if (m = e,
                          y = t,
                      1 === w && (U.test(e) || z.test(e))) {
                        y = ee.test(e) && me(t.parentNode) || t,
                        y === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(re, ie) : t.setAttribute("id", c = b)),
                            h = a(e),
                            s = h.length;
                        while (s--)
                          h[s] = (c ? "#" + c : ":scope") + " " + xe(h[s]);
                        m = h.join(",")
                      }
                      try {
                        return O.apply(r, y.querySelectorAll(m)),
                            r
                      } catch (T) {
                        D(e, !0)
                      } finally {
                        c === b && t.removeAttribute("id")
                      }
                    }
                  }
                  return u(e.replace(B, "$1"), t, r, i)
                }
                function ue() {
                  var e = [];
                  function t(n, i) {
                    return e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                        t[n + " "] = i
                  }
                  return t
                }
                function le(e) {
                  return e[b] = !0,
                      e
                }
                function ce(e) {
                  var t = p.createElement("fieldset");
                  try {
                    return !!e(t)
                  } catch (De) {
                    return !1
                  } finally {
                    t.parentNode && t.parentNode.removeChild(t),
                        t = null
                  }
                }
                function fe(e, t) {
                  var n = e.split("|")
                      , i = n.length;
                  while (i--)
                    r.attrHandle[n[i]] = t
                }
                function de(e, t) {
                  var n = t && e
                      , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                  if (r)
                    return r;
                  if (n)
                    while (n = n.nextSibling)
                      if (n === t)
                        return -1;
                  return e ? 1 : -1
                }
                function pe(e) {
                  return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                  }
                }
                function he(e) {
                  return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                  }
                }
                function ge(e) {
                  return function(t) {
                    return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label"in t && t.disabled === e
                  }
                }
                function ve(e) {
                  return le((function(t) {
                        return t = +t,
                            le((function(n, r) {
                                  var i, o = e([], n.length, t), a = o.length;
                                  while (a--)
                                    n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                                }
                            ))
                      }
                  ))
                }
                function me(e) {
                  return e && "undefined" !== typeof e.getElementsByTagName && e
                }
                for (t in n = se.support = {},
                    o = se.isXML = function(e) {
                      var t = e.namespaceURI
                          , n = (e.ownerDocument || e).documentElement;
                      return !G.test(t || n && n.nodeName || "HTML")
                    }
                    ,
                    d = se.setDocument = function(e) {
                      var t, i, a = e ? e.ownerDocument || e : w;
                      return a != p && 9 === a.nodeType && a.documentElement ? (p = a,
                          h = p.documentElement,
                          g = !o(p),
                      w != p && (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)),
                          n.scope = ce((function(e) {
                                return h.appendChild(e).appendChild(p.createElement("div")),
                                "undefined" !== typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                              }
                          )),
                          n.attributes = ce((function(e) {
                                return e.className = "i",
                                    !e.getAttribute("className")
                              }
                          )),
                          n.getElementsByTagName = ce((function(e) {
                                return e.appendChild(p.createComment("")),
                                    !e.getElementsByTagName("*").length
                              }
                          )),
                          n.getElementsByClassName = K.test(p.getElementsByClassName),
                          n.getById = ce((function(e) {
                                return h.appendChild(e).id = b,
                                !p.getElementsByName || !p.getElementsByName(b).length
                              }
                          )),
                          n.getById ? (r.filter["ID"] = function(e) {
                                var t = e.replace(te, ne);
                                return function(e) {
                                  return e.getAttribute("id") === t
                                }
                              }
                                  ,
                                  r.find["ID"] = function(e, t) {
                                    if ("undefined" !== typeof t.getElementById && g) {
                                      var n = t.getElementById(e);
                                      return n ? [n] : []
                                    }
                                  }
                          ) : (r.filter["ID"] = function(e) {
                                var t = e.replace(te, ne);
                                return function(e) {
                                  var n = "undefined" !== typeof e.getAttributeNode && e.getAttributeNode("id");
                                  return n && n.value === t
                                }
                              }
                                  ,
                                  r.find["ID"] = function(e, t) {
                                    if ("undefined" !== typeof t.getElementById && g) {
                                      var n, r, i, o = t.getElementById(e);
                                      if (o) {
                                        if (n = o.getAttributeNode("id"),
                                        n && n.value === e)
                                          return [o];
                                        i = t.getElementsByName(e),
                                            r = 0;
                                        while (o = i[r++])
                                          if (n = o.getAttributeNode("id"),
                                          n && n.value === e)
                                            return [o]
                                      }
                                      return []
                                    }
                                  }
                          ),
                          r.find["TAG"] = n.getElementsByTagName ? function(e, t) {
                                return "undefined" !== typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                              }
                              : function(e, t) {
                                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                                if ("*" === e) {
                                  while (n = o[i++])
                                    1 === n.nodeType && r.push(n);
                                  return r
                                }
                                return o
                              }
                          ,
                          r.find["CLASS"] = n.getElementsByClassName && function(e, t) {
                            if ("undefined" !== typeof t.getElementsByClassName && g)
                              return t.getElementsByClassName(e)
                          }
                          ,
                          m = [],
                          v = [],
                      (n.qsa = K.test(p.querySelectorAll)) && (ce((function(e) {
                            var t;
                            h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                            e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + P + "*(?:''|\"\")"),
                            e.querySelectorAll("[selected]").length || v.push("\\[" + P + "*(?:value|" + R + ")"),
                            e.querySelectorAll("[id~=" + b + "-]").length || v.push("~="),
                                t = p.createElement("input"),
                                t.setAttribute("name", ""),
                                e.appendChild(t),
                            e.querySelectorAll("[name='']").length || v.push("\\[" + P + "*name" + P + "*=" + P + "*(?:''|\"\")"),
                            e.querySelectorAll(":checked").length || v.push(":checked"),
                            e.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]"),
                                e.querySelectorAll("\\\f"),
                                v.push("[\\r\\n\\f]")
                          }
                      )),
                          ce((function(e) {
                                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                var t = p.createElement("input");
                                t.setAttribute("type", "hidden"),
                                    e.appendChild(t).setAttribute("name", "D"),
                                e.querySelectorAll("[name=d]").length && v.push("name" + P + "*[*^$|!~]?="),
                                2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                                    h.appendChild(e).disabled = !0,
                                2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                                    e.querySelectorAll("*,:x"),
                                    v.push(",.*:")
                              }
                          ))),
                      (n.matchesSelector = K.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce((function(e) {
                            n.disconnectedMatch = y.call(e, "*"),
                                y.call(e, "[s!='']:x"),
                                m.push("!=", $)
                          }
                      )),
                          v = v.length && new RegExp(v.join("|")),
                          m = m.length && new RegExp(m.join("|")),
                          t = K.test(h.compareDocumentPosition),
                          x = t || K.test(h.contains) ? function(e, t) {
                                var n = 9 === e.nodeType ? e.documentElement : e
                                    , r = t && t.parentNode;
                                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                              }
                              : function(e, t) {
                                if (t)
                                  while (t = t.parentNode)
                                    if (t === e)
                                      return !0;
                                return !1
                              }
                          ,
                          A = t ? function(e, t) {
                                if (e === t)
                                  return f = !0,
                                      0;
                                var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                return r || (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                                    1 & r || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == p || e.ownerDocument == w && x(w, e) ? -1 : t == p || t.ownerDocument == w && x(w, t) ? 1 : c ? _(c, e) - _(c, t) : 0 : 4 & r ? -1 : 1)
                              }
                              : function(e, t) {
                                if (e === t)
                                  return f = !0,
                                      0;
                                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                                if (!i || !o)
                                  return e == p ? -1 : t == p ? 1 : i ? -1 : o ? 1 : c ? _(c, e) - _(c, t) : 0;
                                if (i === o)
                                  return de(e, t);
                                n = e;
                                while (n = n.parentNode)
                                  a.unshift(n);
                                n = t;
                                while (n = n.parentNode)
                                  s.unshift(n);
                                while (a[r] === s[r])
                                  r++;
                                return r ? de(a[r], s[r]) : a[r] == w ? -1 : s[r] == w ? 1 : 0
                              }
                          ,
                          p) : p
                    }
                    ,
                    se.matches = function(e, t) {
                      return se(e, null, null, t)
                    }
                    ,
                    se.matchesSelector = function(e, t) {
                      if (d(e),
                      n.matchesSelector && g && !D[t + " "] && (!m || !m.test(t)) && (!v || !v.test(t)))
                        try {
                          var r = y.call(e, t);
                          if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                            return r
                        } catch (De) {
                          D(t, !0)
                        }
                      return se(t, p, null, [e]).length > 0
                    }
                    ,
                    se.contains = function(e, t) {
                      return (e.ownerDocument || e) != p && d(e),
                          x(e, t)
                    }
                    ,
                    se.attr = function(e, t) {
                      (e.ownerDocument || e) != p && d(e);
                      var i = r.attrHandle[t.toLowerCase()]
                          , o = i && j.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                      return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                    }
                    ,
                    se.escape = function(e) {
                      return (e + "").replace(re, ie)
                    }
                    ,
                    se.error = function(e) {
                      throw new Error("Syntax error, unrecognized expression: " + e)
                    }
                    ,
                    se.uniqueSort = function(e) {
                      var t, r = [], i = 0, o = 0;
                      if (f = !n.detectDuplicates,
                          c = !n.sortStable && e.slice(0),
                          e.sort(A),
                          f) {
                        while (t = e[o++])
                          t === e[o] && (i = r.push(o));
                        while (i--)
                          e.splice(r[i], 1)
                      }
                      return c = null,
                          e
                    }
                    ,
                    i = se.getText = function(e) {
                      var t, n = "", r = 0, o = e.nodeType;
                      if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                          if ("string" === typeof e.textContent)
                            return e.textContent;
                          for (e = e.firstChild; e; e = e.nextSibling)
                            n += i(e)
                        } else if (3 === o || 4 === o)
                          return e.nodeValue
                      } else
                        while (t = e[r++])
                          n += i(t);
                      return n
                    }
                    ,
                    r = se.selectors = {
                      cacheLength: 50,
                      createPseudo: le,
                      match: Y,
                      attrHandle: {},
                      find: {},
                      relative: {
                        ">": {
                          dir: "parentNode",
                          first: !0
                        },
                        " ": {
                          dir: "parentNode"
                        },
                        "+": {
                          dir: "previousSibling",
                          first: !0
                        },
                        "~": {
                          dir: "previousSibling"
                        }
                      },
                      preFilter: {
                        ATTR: function(e) {
                          return e[1] = e[1].replace(te, ne),
                              e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                          "~=" === e[2] && (e[3] = " " + e[3] + " "),
                              e.slice(0, 4)
                        },
                        CHILD: function(e) {
                          return e[1] = e[1].toLowerCase(),
                              "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                                  e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                                  e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                              e
                        },
                        PSEUDO: function(e) {
                          var t, n = !e[6] && e[2];
                          return Y["CHILD"].test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                              e[2] = n.slice(0, t)),
                              e.slice(0, 3))
                        }
                      },
                      filter: {
                        TAG: function(e) {
                          var t = e.replace(te, ne).toLowerCase();
                          return "*" === e ? function() {
                                return !0
                              }
                              : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                              }
                        },
                        CLASS: function(e) {
                          var t = k[e + " "];
                          return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && k(e, (function(e) {
                                return t.test("string" === typeof e.className && e.className || "undefined" !== typeof e.getAttribute && e.getAttribute("class") || "")
                              }
                          ))
                        },
                        ATTR: function(e, t, n) {
                          return function(r) {
                            var i = se.attr(r, e);
                            return null == i ? "!=" === t : !t || (i += "",
                                "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(W, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                          }
                        },
                        CHILD: function(e, t, n, r, i) {
                          var o = "nth" !== e.slice(0, 3)
                              , a = "last" !== e.slice(-4)
                              , s = "of-type" === t;
                          return 1 === r && 0 === i ? function(e) {
                                return !!e.parentNode
                              }
                              : function(t, n, u) {
                                var l, c, f, d, p, h, g = o !== a ? "nextSibling" : "previousSibling", v = t.parentNode, m = s && t.nodeName.toLowerCase(), y = !u && !s, x = !1;
                                if (v) {
                                  if (o) {
                                    while (g) {
                                      d = t;
                                      while (d = d[g])
                                        if (s ? d.nodeName.toLowerCase() === m : 1 === d.nodeType)
                                          return !1;
                                      h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                  }
                                  if (h = [a ? v.firstChild : v.lastChild],
                                  a && y) {
                                    d = v,
                                        f = d[b] || (d[b] = {}),
                                        c = f[d.uniqueID] || (f[d.uniqueID] = {}),
                                        l = c[e] || [],
                                        p = l[0] === T && l[1],
                                        x = p && l[2],
                                        d = p && v.childNodes[p];
                                    while (d = ++p && d && d[g] || (x = p = 0) || h.pop())
                                      if (1 === d.nodeType && ++x && d === t) {
                                        c[e] = [T, p, x];
                                        break
                                      }
                                  } else if (y && (d = t,
                                      f = d[b] || (d[b] = {}),
                                      c = f[d.uniqueID] || (f[d.uniqueID] = {}),
                                      l = c[e] || [],
                                      p = l[0] === T && l[1],
                                      x = p),
                                  !1 === x)
                                    while (d = ++p && d && d[g] || (x = p = 0) || h.pop())
                                      if ((s ? d.nodeName.toLowerCase() === m : 1 === d.nodeType) && ++x && (y && (f = d[b] || (d[b] = {}),
                                          c = f[d.uniqueID] || (f[d.uniqueID] = {}),
                                          c[e] = [T, x]),
                                      d === t))
                                        break;
                                  return x -= i,
                                  x === r || x % r === 0 && x / r >= 0
                                }
                              }
                        },
                        PSEUDO: function(e, t) {
                          var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                          return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t],
                                  r.setFilters.hasOwnProperty(e.toLowerCase()) ? le((function(e, n) {
                                        var r, o = i(e, t), a = o.length;
                                        while (a--)
                                          r = _(e, o[a]),
                                              e[r] = !(n[r] = o[a])
                                      }
                                  )) : function(e) {
                                    return i(e, 0, n)
                                  }
                          ) : i
                        }
                      },
                      pseudos: {
                        not: le((function(e) {
                              var t = []
                                  , n = []
                                  , r = s(e.replace(B, "$1"));
                              return r[b] ? le((function(e, t, n, i) {
                                    var o, a = r(e, null, i, []), s = e.length;
                                    while (s--)
                                      (o = a[s]) && (e[s] = !(t[s] = o))
                                  }
                              )) : function(e, i, o) {
                                return t[0] = e,
                                    r(t, null, o, n),
                                    t[0] = null,
                                    !n.pop()
                              }
                            }
                        )),
                        has: le((function(e) {
                              return function(t) {
                                return se(e, t).length > 0
                              }
                            }
                        )),
                        contains: le((function(e) {
                              return e = e.replace(te, ne),
                                  function(t) {
                                    return (t.textContent || i(t)).indexOf(e) > -1
                                  }
                            }
                        )),
                        lang: le((function(e) {
                              return X.test(e || "") || se.error("unsupported lang: " + e),
                                  e = e.replace(te, ne).toLowerCase(),
                                  function(t) {
                                    var n;
                                    do {
                                      if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                        return n = n.toLowerCase(),
                                        n === e || 0 === n.indexOf(e + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                  }
                            }
                        )),
                        target: function(t) {
                          var n = e.location && e.location.hash;
                          return n && n.slice(1) === t.id
                        },
                        root: function(e) {
                          return e === h
                        },
                        focus: function(e) {
                          return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: ge(!1),
                        disabled: ge(!0),
                        checked: function(e) {
                          var t = e.nodeName.toLowerCase();
                          return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                          return e.parentNode && e.parentNode.selectedIndex,
                          !0 === e.selected
                        },
                        empty: function(e) {
                          for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6)
                              return !1;
                          return !0
                        },
                        parent: function(e) {
                          return !r.pseudos["empty"](e)
                        },
                        header: function(e) {
                          return Q.test(e.nodeName)
                        },
                        input: function(e) {
                          return J.test(e.nodeName)
                        },
                        button: function(e) {
                          var t = e.nodeName.toLowerCase();
                          return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                          var t;
                          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                        },
                        first: ve((function() {
                              return [0]
                            }
                        )),
                        last: ve((function(e, t) {
                              return [t - 1]
                            }
                        )),
                        eq: ve((function(e, t, n) {
                              return [n < 0 ? n + t : n]
                            }
                        )),
                        even: ve((function(e, t) {
                              for (var n = 0; n < t; n += 2)
                                e.push(n);
                              return e
                            }
                        )),
                        odd: ve((function(e, t) {
                              for (var n = 1; n < t; n += 2)
                                e.push(n);
                              return e
                            }
                        )),
                        lt: ve((function(e, t, n) {
                              for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                                e.push(r);
                              return e
                            }
                        )),
                        gt: ve((function(e, t, n) {
                              for (var r = n < 0 ? n + t : n; ++r < t; )
                                e.push(r);
                              return e
                            }
                        ))
                      }
                    },
                    r.pseudos["nth"] = r.pseudos["eq"],
                    {
                      radio: !0,
                      checkbox: !0,
                      file: !0,
                      password: !0,
                      image: !0
                    })
                  r.pseudos[t] = pe(t);
                for (t in {
                  submit: !0,
                  reset: !0
                })
                  r.pseudos[t] = he(t);
                function ye() {}
                function xe(e) {
                  for (var t = 0, n = e.length, r = ""; t < n; t++)
                    r += e[t].value;
                  return r
                }
                function be(e, t, n) {
                  var r = t.dir
                      , i = t.next
                      , o = i || r
                      , a = n && "parentNode" === o
                      , s = C++;
                  return t.first ? function(t, n, i) {
                        while (t = t[r])
                          if (1 === t.nodeType || a)
                            return e(t, n, i);
                        return !1
                      }
                      : function(t, n, u) {
                        var l, c, f, d = [T, s];
                        if (u) {
                          while (t = t[r])
                            if ((1 === t.nodeType || a) && e(t, n, u))
                              return !0
                        } else
                          while (t = t[r])
                            if (1 === t.nodeType || a)
                              if (f = t[b] || (t[b] = {}),
                                  c = f[t.uniqueID] || (f[t.uniqueID] = {}),
                              i && i === t.nodeName.toLowerCase())
                                t = t[r] || t;
                              else {
                                if ((l = c[o]) && l[0] === T && l[1] === s)
                                  return d[2] = l[2];
                                if (c[o] = d,
                                    d[2] = e(t, n, u))
                                  return !0
                              }
                        return !1
                      }
                }
                function we(e) {
                  return e.length > 1 ? function(t, n, r) {
                        var i = e.length;
                        while (i--)
                          if (!e[i](t, n, r))
                            return !1;
                        return !0
                      }
                      : e[0]
                }
                function Te(e, t, n) {
                  for (var r = 0, i = t.length; r < i; r++)
                    se(e, t[r], n);
                  return n
                }
                function Ce(e, t, n, r, i) {
                  for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                    (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                    l && t.push(s)));
                  return a
                }
                function ke(e, t, n, r, i, o) {
                  return r && !r[b] && (r = ke(r)),
                  i && !i[b] && (i = ke(i, o)),
                      le((function(o, a, s, u) {
                            var l, c, f, d = [], p = [], h = a.length, g = o || Te(t || "*", s.nodeType ? [s] : s, []), v = !e || !o && t ? g : Ce(g, d, e, s, u), m = n ? i || (o ? e : h || r) ? [] : a : v;
                            if (n && n(v, m, s, u),
                                r) {
                              l = Ce(m, p),
                                  r(l, [], s, u),
                                  c = l.length;
                              while (c--)
                                (f = l[c]) && (m[p[c]] = !(v[p[c]] = f))
                            }
                            if (o) {
                              if (i || e) {
                                if (i) {
                                  l = [],
                                      c = m.length;
                                  while (c--)
                                    (f = m[c]) && l.push(v[c] = f);
                                  i(null, m = [], l, u)
                                }
                                c = m.length;
                                while (c--)
                                  (f = m[c]) && (l = i ? _(o, f) : d[c]) > -1 && (o[l] = !(a[l] = f))
                              }
                            } else
                              m = Ce(m === a ? m.splice(h, m.length) : m),
                                  i ? i(null, a, m, u) : O.apply(a, m)
                          }
                      ))
                }
                function Ee(e) {
                  for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = be((function(e) {
                        return e === t
                      }
                  ), s, !0), f = be((function(e) {
                        return _(t, e) > -1
                      }
                  ), s, !0), d = [function(e, n, r) {
                    var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                    return t = null,
                        i
                  }
                  ]; u < o; u++)
                    if (n = r.relative[e[u].type])
                      d = [be(we(d), n)];
                    else {
                      if (n = r.filter[e[u].type].apply(null, e[u].matches),
                          n[b]) {
                        for (i = ++u; i < o; i++)
                          if (r.relative[e[i].type])
                            break;
                        return ke(u > 1 && we(d), u > 1 && xe(e.slice(0, u - 1).concat({
                          value: " " === e[u - 2].type ? "*" : ""
                        })).replace(B, "$1"), n, u < i && Ee(e.slice(u, i)), i < o && Ee(e = e.slice(i)), i < o && xe(e))
                      }
                      d.push(n)
                    }
                  return we(d)
                }
                function Se(e, t) {
                  var n = t.length > 0
                      , i = e.length > 0
                      , o = function(o, a, s, u, c) {
                    var f, h, v, m = 0, y = "0", x = o && [], b = [], w = l, C = o || i && r.find["TAG"]("*", c), k = T += null == w ? 1 : Math.random() || .1, E = C.length;
                    for (c && (l = a == p || a || c); y !== E && null != (f = C[y]); y++) {
                      if (i && f) {
                        h = 0,
                        a || f.ownerDocument == p || (d(f),
                            s = !g);
                        while (v = e[h++])
                          if (v(f, a || p, s)) {
                            u.push(f);
                            break
                          }
                        c && (T = k)
                      }
                      n && ((f = !v && f) && m--,
                      o && x.push(f))
                    }
                    if (m += y,
                    n && y !== m) {
                      h = 0;
                      while (v = t[h++])
                        v(x, b, a, s);
                      if (o) {
                        if (m > 0)
                          while (y--)
                            x[y] || b[y] || (b[y] = L.call(u));
                        b = Ce(b)
                      }
                      O.apply(u, b),
                      c && !o && b.length > 0 && m + t.length > 1 && se.uniqueSort(u)
                    }
                    return c && (T = k,
                        l = w),
                        x
                  };
                  return n ? le(o) : o
                }
                return ye.prototype = r.filters = r.pseudos,
                    r.setFilters = new ye,
                    a = se.tokenize = function(e, t) {
                      var n, i, o, a, s, u, l, c = E[e + " "];
                      if (c)
                        return t ? 0 : c.slice(0);
                      s = e,
                          u = [],
                          l = r.preFilter;
                      while (s) {
                        for (a in n && !(i = F.exec(s)) || (i && (s = s.slice(i[0].length) || s),
                            u.push(o = [])),
                            n = !1,
                        (i = z.exec(s)) && (n = i.shift(),
                            o.push({
                              value: n,
                              type: i[0].replace(B, " ")
                            }),
                            s = s.slice(n.length)),
                            r.filter)
                          !(i = Y[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(),
                              o.push({
                                value: n,
                                type: a,
                                matches: i
                              }),
                              s = s.slice(n.length));
                        if (!n)
                          break
                      }
                      return t ? s.length : s ? se.error(e) : E(e, u).slice(0)
                    }
                    ,
                    s = se.compile = function(e, t) {
                      var n, r = [], i = [], o = S[e + " "];
                      if (!o) {
                        t || (t = a(e)),
                            n = t.length;
                        while (n--)
                          o = Ee(t[n]),
                              o[b] ? r.push(o) : i.push(o);
                        o = S(e, Se(i, r)),
                            o.selector = e
                      }
                      return o
                    }
                    ,
                    u = se.select = function(e, t, n, i) {
                      var o, u, l, c, f, d = "function" === typeof e && e, p = !i && a(e = d.selector || e);
                      if (n = n || [],
                      1 === p.length) {
                        if (u = p[0] = p[0].slice(0),
                        u.length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
                          if (t = (r.find["ID"](l.matches[0].replace(te, ne), t) || [])[0],
                              !t)
                            return n;
                          d && (t = t.parentNode),
                              e = e.slice(u.shift().value.length)
                        }
                        o = Y["needsContext"].test(e) ? 0 : u.length;
                        while (o--) {
                          if (l = u[o],
                              r.relative[c = l.type])
                            break;
                          if ((f = r.find[c]) && (i = f(l.matches[0].replace(te, ne), ee.test(u[0].type) && me(t.parentNode) || t))) {
                            if (u.splice(o, 1),
                                e = i.length && xe(u),
                                !e)
                              return O.apply(n, i),
                                  n;
                            break
                          }
                        }
                      }
                      return (d || s(e, p))(i, t, !g, n, !t || ee.test(e) && me(t.parentNode) || t),
                          n
                    }
                    ,
                    n.sortStable = b.split("").sort(A).join("") === b,
                    n.detectDuplicates = !!f,
                    d(),
                    n.sortDetached = ce((function(e) {
                          return 1 & e.compareDocumentPosition(p.createElement("fieldset"))
                        }
                    )),
                ce((function(e) {
                      return e.innerHTML = "<a href='#'></a>",
                      "#" === e.firstChild.getAttribute("href")
                    }
                )) || fe("type|href|height|width", (function(e, t, n) {
                      if (!n)
                        return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                    }
                )),
                n.attributes && ce((function(e) {
                      return e.innerHTML = "<input/>",
                          e.firstChild.setAttribute("value", ""),
                      "" === e.firstChild.getAttribute("value")
                    }
                )) || fe("value", (function(e, t, n) {
                      if (!n && "input" === e.nodeName.toLowerCase())
                        return e.defaultValue
                    }
                )),
                ce((function(e) {
                      return null == e.getAttribute("disabled")
                    }
                )) || fe(R, (function(e, t, n) {
                      var r;
                      if (!n)
                        return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
                    }
                )),
                    se
              }(n);
          E.find = D,
              E.expr = D.selectors,
              E.expr[":"] = E.expr.pseudos,
              E.uniqueSort = E.unique = D.uniqueSort,
              E.text = D.getText,
              E.isXMLDoc = D.isXML,
              E.contains = D.contains,
              E.escapeSelector = D.escape;
          var A = function(e, t, n) {
            var r = []
                , i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
              if (1 === e.nodeType) {
                if (i && E(e).is(n))
                  break;
                r.push(e)
              }
            return r
          }
              , j = function(e, t) {
            for (var n = []; e; e = e.nextSibling)
              1 === e.nodeType && e !== t && n.push(e);
            return n
          }
              , N = E.expr.match.needsContext;
          function L(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
          }
          var q = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function O(e, t, n) {
            return y(t) ? E.grep(e, (function(e, r) {
                  return !!t.call(e, r, e) !== n
                }
            )) : t.nodeType ? E.grep(e, (function(e) {
                  return e === t !== n
                }
            )) : "string" !== typeof t ? E.grep(e, (function(e) {
                  return f.call(t, e) > -1 !== n
                }
            )) : E.filter(t, e, n)
          }
          E.filter = function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"),
                1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [r] : [] : E.find.matches(e, E.grep(t, (function(e) {
                      return 1 === e.nodeType
                    }
                )))
          }
              ,
              E.fn.extend({
                find: function(e) {
                  var t, n, r = this.length, i = this;
                  if ("string" !== typeof e)
                    return this.pushStack(E(e).filter((function() {
                          for (t = 0; t < r; t++)
                            if (E.contains(i[t], this))
                              return !0
                        }
                    )));
                  for (n = this.pushStack([]),
                           t = 0; t < r; t++)
                    E.find(e, i[t], n);
                  return r > 1 ? E.uniqueSort(n) : n
                },
                filter: function(e) {
                  return this.pushStack(O(this, e || [], !1))
                },
                not: function(e) {
                  return this.pushStack(O(this, e || [], !0))
                },
                is: function(e) {
                  return !!O(this, "string" === typeof e && N.test(e) ? E(e) : e || [], !1).length
                }
              });
          var H, _ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, R = E.fn.init = function(e, t, n) {
                var r, i;
                if (!e)
                  return this;
                if (n = n || H,
                "string" === typeof e) {
                  if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : _.exec(e),
                  !r || !r[1] && t)
                    return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                  if (r[1]) {
                    if (t = t instanceof E ? t[0] : t,
                        E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : b, !0)),
                    q.test(r[1]) && E.isPlainObject(t))
                      for (r in t)
                        y(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                  }
                  return i = b.getElementById(r[2]),
                  i && (this[0] = i,
                      this.length = 1),
                      this
                }
                return e.nodeType ? (this[0] = e,
                    this.length = 1,
                    this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this)
              }
          ;
          R.prototype = E.fn,
              H = E(b);
          var P = /^(?:parents|prev(?:Until|All))/
              , M = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
          };
          function I(e, t) {
            while ((e = e[t]) && 1 !== e.nodeType)
              ;
            return e
          }
          E.fn.extend({
            has: function(e) {
              var t = E(e, this)
                  , n = t.length;
              return this.filter((function() {
                    for (var e = 0; e < n; e++)
                      if (E.contains(this, t[e]))
                        return !0
                  }
              ))
            },
            closest: function(e, t) {
              var n, r = 0, i = this.length, o = [], a = "string" !== typeof e && E(e);
              if (!N.test(e))
                for (; r < i; r++)
                  for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                      o.push(n);
                      break
                    }
              return this.pushStack(o.length > 1 ? E.uniqueSort(o) : o)
            },
            index: function(e) {
              return e ? "string" === typeof e ? f.call(E(e), this[0]) : f.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
              return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
            },
            addBack: function(e) {
              return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
          }),
              E.each({
                parent: function(e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null
                },
                parents: function(e) {
                  return A(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                  return A(e, "parentNode", n)
                },
                next: function(e) {
                  return I(e, "nextSibling")
                },
                prev: function(e) {
                  return I(e, "previousSibling")
                },
                nextAll: function(e) {
                  return A(e, "nextSibling")
                },
                prevAll: function(e) {
                  return A(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                  return A(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                  return A(e, "previousSibling", n)
                },
                siblings: function(e) {
                  return j((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                  return j(e.firstChild)
                },
                contents: function(e) {
                  return null != e.contentDocument && s(e.contentDocument) ? e.contentDocument : (L(e, "template") && (e = e.content || e),
                      E.merge([], e.childNodes))
                }
              }, (function(e, t) {
                    E.fn[e] = function(n, r) {
                      var i = E.map(this, t, n);
                      return "Until" !== e.slice(-5) && (r = n),
                      r && "string" === typeof r && (i = E.filter(r, i)),
                      this.length > 1 && (M[e] || E.uniqueSort(i),
                      P.test(e) && i.reverse()),
                          this.pushStack(i)
                    }
                  }
              ));
          var $ = /[^\x20\t\r\n\f]+/g;
          function W(e) {
            var t = {};
            return E.each(e.match($) || [], (function(e, n) {
                  t[n] = !0
                }
            )),
                t
          }
          function B(e) {
            return e
          }
          function F(e) {
            throw e
          }
          function z(e, t, n, r) {
            var i;
            try {
              e && y(i = e.promise) ? i.call(e).done(t).fail(n) : e && y(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
            } catch (e) {
              n.apply(void 0, [e])
            }
          }
          E.Callbacks = function(e) {
            e = "string" === typeof e ? W(e) : E.extend({}, e);
            var t, n, r, i, o = [], a = [], s = -1, u = function() {
              for (i = i || e.once,
                       r = t = !0; a.length; s = -1) {
                n = a.shift();
                while (++s < o.length)
                  !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length,
                      n = !1)
              }
              e.memory || (n = !1),
                  t = !1,
              i && (o = n ? [] : "")
            }, l = {
              add: function() {
                return o && (n && !t && (s = o.length - 1,
                    a.push(n)),
                    function t(n) {
                      E.each(n, (function(n, r) {
                            y(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== C(r) && t(r)
                          }
                      ))
                    }(arguments),
                n && !t && u()),
                    this
              },
              remove: function() {
                return E.each(arguments, (function(e, t) {
                      var n;
                      while ((n = E.inArray(t, o, n)) > -1)
                        o.splice(n, 1),
                        n <= s && s--
                    }
                )),
                    this
              },
              has: function(e) {
                return e ? E.inArray(e, o) > -1 : o.length > 0
              },
              empty: function() {
                return o && (o = []),
                    this
              },
              disable: function() {
                return i = a = [],
                    o = n = "",
                    this
              },
              disabled: function() {
                return !o
              },
              lock: function() {
                return i = a = [],
                n || t || (o = n = ""),
                    this
              },
              locked: function() {
                return !!i
              },
              fireWith: function(e, n) {
                return i || (n = n || [],
                    n = [e, n.slice ? n.slice() : n],
                    a.push(n),
                t || u()),
                    this
              },
              fire: function() {
                return l.fireWith(this, arguments),
                    this
              },
              fired: function() {
                return !!r
              }
            };
            return l
          }
              ,
              E.extend({
                Deferred: function(e) {
                  var t = [["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2], ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]]
                      , r = "pending"
                      , i = {
                    state: function() {
                      return r
                    },
                    always: function() {
                      return o.done(arguments).fail(arguments),
                          this
                    },
                    catch: function(e) {
                      return i.then(null, e)
                    },
                    pipe: function() {
                      var e = arguments;
                      return E.Deferred((function(n) {
                            E.each(t, (function(t, r) {
                                  var i = y(e[r[4]]) && e[r[4]];
                                  o[r[1]]((function() {
                                        var e = i && i.apply(this, arguments);
                                        e && y(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [e] : arguments)
                                      }
                                  ))
                                }
                            )),
                                e = null
                          }
                      )).promise()
                    },
                    then: function(e, r, i) {
                      var o = 0;
                      function a(e, t, r, i) {
                        return function() {
                          var s = this
                              , u = arguments
                              , l = function() {
                                var n, l;
                                if (!(e < o)) {
                                  if (n = r.apply(s, u),
                                  n === t.promise())
                                    throw new TypeError("Thenable self-resolution");
                                  l = n && ("object" === typeof n || "function" === typeof n) && n.then,
                                      y(l) ? i ? l.call(n, a(o, t, B, i), a(o, t, F, i)) : (o++,
                                          l.call(n, a(o, t, B, i), a(o, t, F, i), a(o, t, B, t.notifyWith))) : (r !== B && (s = void 0,
                                          u = [n]),
                                          (i || t.resolveWith)(s, u))
                                }
                              }
                              , c = i ? l : function() {
                                try {
                                  l()
                                } catch (n) {
                                  E.Deferred.exceptionHook && E.Deferred.exceptionHook(n, c.stackTrace),
                                  e + 1 >= o && (r !== F && (s = void 0,
                                      u = [n]),
                                      t.rejectWith(s, u))
                                }
                              }
                          ;
                          e ? c() : (E.Deferred.getStackHook && (c.stackTrace = E.Deferred.getStackHook()),
                              n.setTimeout(c))
                        }
                      }
                      return E.Deferred((function(n) {
                            t[0][3].add(a(0, n, y(i) ? i : B, n.notifyWith)),
                                t[1][3].add(a(0, n, y(e) ? e : B)),
                                t[2][3].add(a(0, n, y(r) ? r : F))
                          }
                      )).promise()
                    },
                    promise: function(e) {
                      return null != e ? E.extend(e, i) : i
                    }
                  }
                      , o = {};
                  return E.each(t, (function(e, n) {
                        var a = n[2]
                            , s = n[5];
                        i[n[1]] = a.add,
                        s && a.add((function() {
                              r = s
                            }
                        ), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock),
                            a.add(n[3].fire),
                            o[n[0]] = function() {
                              return o[n[0] + "With"](this === o ? void 0 : this, arguments),
                                  this
                            }
                            ,
                            o[n[0] + "With"] = a.fireWith
                      }
                  )),
                      i.promise(o),
                  e && e.call(o, o),
                      o
                },
                when: function(e) {
                  var t = arguments.length
                      , n = t
                      , r = Array(n)
                      , i = u.call(arguments)
                      , o = E.Deferred()
                      , a = function(e) {
                    return function(n) {
                      r[e] = this,
                          i[e] = arguments.length > 1 ? u.call(arguments) : n,
                      --t || o.resolveWith(r, i)
                    }
                  };
                  if (t <= 1 && (z(e, o.done(a(n)).resolve, o.reject, !t),
                  "pending" === o.state() || y(i[n] && i[n].then)))
                    return o.then();
                  while (n--)
                    z(i[n], a(n), o.reject);
                  return o.promise()
                }
              });
          var U = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          E.Deferred.exceptionHook = function(e, t) {
            n.console && n.console.warn && e && U.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
          }
              ,
              E.readyException = function(e) {
                n.setTimeout((function() {
                      throw e
                    }
                ))
              }
          ;
          var V = E.Deferred();
          function X() {
            b.removeEventListener("DOMContentLoaded", X),
                n.removeEventListener("load", X),
                E.ready()
          }
          E.fn.ready = function(e) {
            return V.then(e).catch((function(e) {
                  E.readyException(e)
                }
            )),
                this
          }
              ,
              E.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(e) {
                  (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0,
                  !0 !== e && --E.readyWait > 0 || V.resolveWith(b, [E]))
                }
              }),
              E.ready.then = V.then,
              "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? n.setTimeout(E.ready) : (b.addEventListener("DOMContentLoaded", X),
                  n.addEventListener("load", X));
          var Y = function(e, t, n, r, i, o, a) {
            var s = 0
                , u = e.length
                , l = null == n;
            if ("object" === C(n))
              for (s in i = !0,
                  n)
                Y(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0,
            y(r) || (a = !0),
            l && (a ? (t.call(e, r),
                t = null) : (l = t,
                    t = function(e, t, n) {
                      return l.call(E(e), n)
                    }
            )),
                t))
              for (; s < u; s++)
                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
          }
              , G = /^-ms-/
              , J = /-([a-z])/g;
          function Q(e, t) {
            return t.toUpperCase()
          }
          function K(e) {
            return e.replace(G, "ms-").replace(J, Q)
          }
          var Z = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
          };
          function ee() {
            this.expando = E.expando + ee.uid++
          }
          ee.uid = 1,
              ee.prototype = {
                cache: function(e) {
                  var t = e[this.expando];
                  return t || (t = {},
                  Z(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                  }))),
                      t
                },
                set: function(e, t, n) {
                  var r, i = this.cache(e);
                  if ("string" === typeof t)
                    i[K(t)] = n;
                  else
                    for (r in t)
                      i[K(r)] = t[r];
                  return i
                },
                get: function(e, t) {
                  return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][K(t)]
                },
                access: function(e, t, n) {
                  return void 0 === t || t && "string" === typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
                      void 0 !== n ? n : t)
                },
                remove: function(e, t) {
                  var n, r = e[this.expando];
                  if (void 0 !== r) {
                    if (void 0 !== t) {
                      Array.isArray(t) ? t = t.map(K) : (t = K(t),
                          t = t in r ? [t] : t.match($) || []),
                          n = t.length;
                      while (n--)
                        delete r[t[n]]
                    }
                    (void 0 === t || E.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                  }
                },
                hasData: function(e) {
                  var t = e[this.expando];
                  return void 0 !== t && !E.isEmptyObject(t)
                }
              };
          var te = new ee
              , ne = new ee
              , re = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
              , ie = /[A-Z]/g;
          function oe(e) {
            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : re.test(e) ? JSON.parse(e) : e)
          }
          function ae(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
              if (r = "data-" + t.replace(ie, "-$&").toLowerCase(),
                  n = e.getAttribute(r),
              "string" === typeof n) {
                try {
                  n = oe(n)
                } catch (i) {}
                ne.set(e, t, n)
              } else
                n = void 0;
            return n
          }
          E.extend({
            hasData: function(e) {
              return ne.hasData(e) || te.hasData(e)
            },
            data: function(e, t, n) {
              return ne.access(e, t, n)
            },
            removeData: function(e, t) {
              ne.remove(e, t)
            },
            _data: function(e, t, n) {
              return te.access(e, t, n)
            },
            _removeData: function(e, t) {
              te.remove(e, t)
            }
          }),
              E.fn.extend({
                data: function(e, t) {
                  var n, r, i, o = this[0], a = o && o.attributes;
                  if (void 0 === e) {
                    if (this.length && (i = ne.get(o),
                    1 === o.nodeType && !te.get(o, "hasDataAttrs"))) {
                      n = a.length;
                      while (n--)
                        a[n] && (r = a[n].name,
                        0 === r.indexOf("data-") && (r = K(r.slice(5)),
                            ae(o, r, i[r])));
                      te.set(o, "hasDataAttrs", !0)
                    }
                    return i
                  }
                  return "object" === typeof e ? this.each((function() {
                        ne.set(this, e)
                      }
                  )) : Y(this, (function(t) {
                        var n;
                        if (o && void 0 === t)
                          return n = ne.get(o, e),
                              void 0 !== n ? n : (n = ae(o, e),
                                  void 0 !== n ? n : void 0);
                        this.each((function() {
                              ne.set(this, e, t)
                            }
                        ))
                      }
                  ), null, t, arguments.length > 1, null, !0)
                },
                removeData: function(e) {
                  return this.each((function() {
                        ne.remove(this, e)
                      }
                  ))
                }
              }),
              E.extend({
                queue: function(e, t, n) {
                  var r;
                  if (e)
                    return t = (t || "fx") + "queue",
                        r = te.get(e, t),
                    n && (!r || Array.isArray(n) ? r = te.access(e, t, E.makeArray(n)) : r.push(n)),
                    r || []
                },
                dequeue: function(e, t) {
                  t = t || "fx";
                  var n = E.queue(e, t)
                      , r = n.length
                      , i = n.shift()
                      , o = E._queueHooks(e, t)
                      , a = function() {
                    E.dequeue(e, t)
                  };
                  "inprogress" === i && (i = n.shift(),
                      r--),
                  i && ("fx" === t && n.unshift("inprogress"),
                      delete o.stop,
                      i.call(e, a, o)),
                  !r && o && o.empty.fire()
                },
                _queueHooks: function(e, t) {
                  var n = t + "queueHooks";
                  return te.get(e, n) || te.access(e, n, {
                    empty: E.Callbacks("once memory").add((function() {
                          te.remove(e, [t + "queue", n])
                        }
                    ))
                  })
                }
              }),
              E.fn.extend({
                queue: function(e, t) {
                  var n = 2;
                  return "string" !== typeof e && (t = e,
                      e = "fx",
                      n--),
                      arguments.length < n ? E.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                            var n = E.queue(this, e, t);
                            E._queueHooks(this, e),
                            "fx" === e && "inprogress" !== n[0] && E.dequeue(this, e)
                          }
                      ))
                },
                dequeue: function(e) {
                  return this.each((function() {
                        E.dequeue(this, e)
                      }
                  ))
                },
                clearQueue: function(e) {
                  return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                  var n, r = 1, i = E.Deferred(), o = this, a = this.length, s = function() {
                    --r || i.resolveWith(o, [o])
                  };
                  "string" !== typeof e && (t = e,
                      e = void 0),
                      e = e || "fx";
                  while (a--)
                    n = te.get(o[a], e + "queueHooks"),
                    n && n.empty && (r++,
                        n.empty.add(s));
                  return s(),
                      i.promise(t)
                }
              });
          var se = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
              , ue = new RegExp("^(?:([+-])=|)(" + se + ")([a-z%]*)$","i")
              , le = ["Top", "Right", "Bottom", "Left"]
              , ce = b.documentElement
              , fe = function(e) {
            return E.contains(e.ownerDocument, e)
          }
              , de = {
            composed: !0
          };
          ce.getRootNode && (fe = function(e) {
                return E.contains(e.ownerDocument, e) || e.getRootNode(de) === e.ownerDocument
              }
          );
          var pe = function(e, t) {
            return e = t || e,
            "none" === e.style.display || "" === e.style.display && fe(e) && "none" === E.css(e, "display")
          };
          function he(e, t, n, r) {
            var i, o, a = 20, s = r ? function() {
                  return r.cur()
                }
                : function() {
                  return E.css(e, t, "")
                }
                , u = s(), l = n && n[3] || (E.cssNumber[t] ? "" : "px"), c = e.nodeType && (E.cssNumber[t] || "px" !== l && +u) && ue.exec(E.css(e, t));
            if (c && c[3] !== l) {
              u /= 2,
                  l = l || c[3],
                  c = +u || 1;
              while (a--)
                E.style(e, t, c + l),
                (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                    c /= o;
              c *= 2,
                  E.style(e, t, c + l),
                  n = n || []
            }
            return n && (c = +c || +u || 0,
                i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
            r && (r.unit = l,
                r.start = c,
                r.end = i)),
                i
          }
          var ge = {};
          function ve(e) {
            var t, n = e.ownerDocument, r = e.nodeName, i = ge[r];
            return i || (t = n.body.appendChild(n.createElement(r)),
                i = E.css(t, "display"),
                t.parentNode.removeChild(t),
            "none" === i && (i = "block"),
                ge[r] = i,
                i)
          }
          function me(e, t) {
            for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
              r = e[o],
              r.style && (n = r.style.display,
                  t ? ("none" === n && (i[o] = te.get(r, "display") || null,
                  i[o] || (r.style.display = "")),
                  "" === r.style.display && pe(r) && (i[o] = ve(r))) : "none" !== n && (i[o] = "none",
                      te.set(r, "display", n)));
            for (o = 0; o < a; o++)
              null != i[o] && (e[o].style.display = i[o]);
            return e
          }
          E.fn.extend({
            show: function() {
              return me(this, !0)
            },
            hide: function() {
              return me(this)
            },
            toggle: function(e) {
              return "boolean" === typeof e ? e ? this.show() : this.hide() : this.each((function() {
                    pe(this) ? E(this).show() : E(this).hide()
                  }
              ))
            }
          });
          var ye = /^(?:checkbox|radio)$/i
              , xe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i
              , be = /^$|^module$|\/(?:java|ecma)script/i;
          (function() {
                var e = b.createDocumentFragment()
                    , t = e.appendChild(b.createElement("div"))
                    , n = b.createElement("input");
                n.setAttribute("type", "radio"),
                    n.setAttribute("checked", "checked"),
                    n.setAttribute("name", "t"),
                    t.appendChild(n),
                    m.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
                    t.innerHTML = "<textarea>x</textarea>",
                    m.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue,
                    t.innerHTML = "<option></option>",
                    m.option = !!t.lastChild
              }
          )();
          var we = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
          };
          function Te(e, t) {
            var n;
            return n = "undefined" !== typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" !== typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
                void 0 === t || t && L(e, t) ? E.merge([e], n) : n
          }
          function Ce(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
              te.set(e[n], "globalEval", !t || te.get(t[n], "globalEval"))
          }
          we.tbody = we.tfoot = we.colgroup = we.caption = we.thead,
              we.th = we.td,
          m.option || (we.optgroup = we.option = [1, "<select multiple='multiple'>", "</select>"]);
          var ke = /<|&#?\w+;/;
          function Ee(e, t, n, r, i) {
            for (var o, a, s, u, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
              if (o = e[p],
              o || 0 === o)
                if ("object" === C(o))
                  E.merge(d, o.nodeType ? [o] : o);
                else if (ke.test(o)) {
                  a = a || f.appendChild(t.createElement("div")),
                      s = (xe.exec(o) || ["", ""])[1].toLowerCase(),
                      u = we[s] || we._default,
                      a.innerHTML = u[1] + E.htmlPrefilter(o) + u[2],
                      c = u[0];
                  while (c--)
                    a = a.lastChild;
                  E.merge(d, a.childNodes),
                      a = f.firstChild,
                      a.textContent = ""
                } else
                  d.push(t.createTextNode(o));
            f.textContent = "",
                p = 0;
            while (o = d[p++])
              if (r && E.inArray(o, r) > -1)
                i && i.push(o);
              else if (l = fe(o),
                  a = Te(f.appendChild(o), "script"),
              l && Ce(a),
                  n) {
                c = 0;
                while (o = a[c++])
                  be.test(o.type || "") && n.push(o)
              }
            return f
          }
          var Se = /^key/
              , De = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
              , Ae = /^([^.]*)(?:\.(.+)|)/;
          function je() {
            return !0
          }
          function Ne() {
            return !1
          }
          function Le(e, t) {
            return e === qe() === ("focus" === t)
          }
          function qe() {
            try {
              return b.activeElement
            } catch (e) {}
          }
          function Oe(e, t, n, r, i, o) {
            var a, s;
            if ("object" === typeof t) {
              for (s in "string" !== typeof n && (r = r || n,
                  n = void 0),
                  t)
                Oe(e, s, n, r, t[s], o);
              return e
            }
            if (null == r && null == i ? (i = n,
                r = n = void 0) : null == i && ("string" === typeof n ? (i = r,
                r = void 0) : (i = r,
                r = n,
                n = void 0)),
            !1 === i)
              i = Ne;
            else if (!i)
              return e;
            return 1 === o && (a = i,
                i = function(e) {
                  return E().off(e),
                      a.apply(this, arguments)
                }
                ,
                i.guid = a.guid || (a.guid = E.guid++)),
                e.each((function() {
                      E.event.add(this, t, i, r, n)
                    }
                ))
          }
          function He(e, t, n) {
            n ? (te.set(e, t, !1),
                E.event.add(e, t, {
                  namespace: !1,
                  handler: function(e) {
                    var r, i, o = te.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (o.length)
                        (E.event.special[t] || {}).delegateType && e.stopPropagation();
                      else if (o = u.call(arguments),
                          te.set(this, t, o),
                          r = n(this, t),
                          this[t](),
                          i = te.get(this, t),
                          o !== i || r ? te.set(this, t, !1) : i = {},
                      o !== i)
                        return e.stopImmediatePropagation(),
                            e.preventDefault(),
                            i.value
                    } else
                      o.length && (te.set(this, t, {
                        value: E.event.trigger(E.extend(o[0], E.Event.prototype), o.slice(1), this)
                      }),
                          e.stopImmediatePropagation())
                  }
                })) : void 0 === te.get(e, t) && E.event.add(e, t, je)
          }
          E.event = {
            global: {},
            add: function(e, t, n, r, i) {
              var o, a, s, u, l, c, f, d, p, h, g, v = te.get(e);
              if (Z(e)) {
                n.handler && (o = n,
                    n = o.handler,
                    i = o.selector),
                i && E.find.matchesSelector(ce, i),
                n.guid || (n.guid = E.guid++),
                (u = v.events) || (u = v.events = Object.create(null)),
                (a = v.handle) || (a = v.handle = function(t) {
                      return "undefined" !== typeof E && E.event.triggered !== t.type ? E.event.dispatch.apply(e, arguments) : void 0
                    }
                ),
                    t = (t || "").match($) || [""],
                    l = t.length;
                while (l--)
                  s = Ae.exec(t[l]) || [],
                      p = g = s[1],
                      h = (s[2] || "").split(".").sort(),
                  p && (f = E.event.special[p] || {},
                      p = (i ? f.delegateType : f.bindType) || p,
                      f = E.event.special[p] || {},
                      c = E.extend({
                        type: p,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && E.expr.match.needsContext.test(i),
                        namespace: h.join(".")
                      }, o),
                  (d = u[p]) || (d = u[p] = [],
                      d.delegateCount = 0,
                  f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)),
                  f.add && (f.add.call(e, c),
                  c.handler.guid || (c.handler.guid = n.guid)),
                      i ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                      E.event.global[p] = !0)
              }
            },
            remove: function(e, t, n, r, i) {
              var o, a, s, u, l, c, f, d, p, h, g, v = te.hasData(e) && te.get(e);
              if (v && (u = v.events)) {
                t = (t || "").match($) || [""],
                    l = t.length;
                while (l--)
                  if (s = Ae.exec(t[l]) || [],
                      p = g = s[1],
                      h = (s[2] || "").split(".").sort(),
                      p) {
                    f = E.event.special[p] || {},
                        p = (r ? f.delegateType : f.bindType) || p,
                        d = u[p] || [],
                        s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        a = o = d.length;
                    while (o--)
                      c = d[o],
                      !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1),
                      c.selector && d.delegateCount--,
                      f.remove && f.remove.call(e, c));
                    a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || E.removeEvent(e, p, v.handle),
                        delete u[p])
                  } else
                    for (p in u)
                      E.event.remove(e, p + t[l], n, r, !0);
                E.isEmptyObject(u) && te.remove(e, "handle events")
              }
            },
            dispatch: function(e) {
              var t, n, r, i, o, a, s = new Array(arguments.length), u = E.event.fix(e), l = (te.get(this, "events") || Object.create(null))[u.type] || [], c = E.event.special[u.type] || {};
              for (s[0] = u,
                       t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
              if (u.delegateTarget = this,
              !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = E.event.handlers.call(this, u, l),
                    t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                  u.currentTarget = i.elem,
                      n = 0;
                  while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
                    u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o,
                        u.data = o.data,
                        r = ((E.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s),
                    void 0 !== r && !1 === (u.result = r) && (u.preventDefault(),
                        u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u),
                    u.result
              }
            },
            handlers: function(e, t) {
              var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
              if (u && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                  if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                    for (o = [],
                             a = {},
                             n = 0; n < u; n++)
                      r = t[n],
                          i = r.selector + " ",
                      void 0 === a[i] && (a[i] = r.needsContext ? E(i, this).index(l) > -1 : E.find(i, this, null, [l]).length),
                      a[i] && o.push(r);
                    o.length && s.push({
                      elem: l,
                      handlers: o
                    })
                  }
              return l = this,
              u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
              }),
                  s
            },
            addProp: function(e, t) {
              Object.defineProperty(E.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: y(t) ? function() {
                      if (this.originalEvent)
                        return t(this.originalEvent)
                    }
                    : function() {
                      if (this.originalEvent)
                        return this.originalEvent[e]
                    }
                ,
                set: function(t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                  })
                }
              })
            },
            fix: function(e) {
              return e[E.expando] ? e : new E.Event(e)
            },
            special: {
              load: {
                noBubble: !0
              },
              click: {
                setup: function(e) {
                  var t = this || e;
                  return ye.test(t.type) && t.click && L(t, "input") && He(t, "click", je),
                      !1
                },
                trigger: function(e) {
                  var t = this || e;
                  return ye.test(t.type) && t.click && L(t, "input") && He(t, "click"),
                      !0
                },
                _default: function(e) {
                  var t = e.target;
                  return ye.test(t.type) && t.click && L(t, "input") && te.get(t, "click") || L(t, "a")
                }
              },
              beforeunload: {
                postDispatch: function(e) {
                  void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
              }
            }
          },
              E.removeEvent = function(e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n)
              }
              ,
              E.Event = function(e, t) {
                if (!(this instanceof E.Event))
                  return new E.Event(e,t);
                e && e.type ? (this.originalEvent = e,
                    this.type = e.type,
                    this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? je : Ne,
                    this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
                    this.currentTarget = e.currentTarget,
                    this.relatedTarget = e.relatedTarget) : this.type = e,
                t && E.extend(this, t),
                    this.timeStamp = e && e.timeStamp || Date.now(),
                    this[E.expando] = !0
              }
              ,
              E.Event.prototype = {
                constructor: E.Event,
                isDefaultPrevented: Ne,
                isPropagationStopped: Ne,
                isImmediatePropagationStopped: Ne,
                isSimulated: !1,
                preventDefault: function() {
                  var e = this.originalEvent;
                  this.isDefaultPrevented = je,
                  e && !this.isSimulated && e.preventDefault()
                },
                stopPropagation: function() {
                  var e = this.originalEvent;
                  this.isPropagationStopped = je,
                  e && !this.isSimulated && e.stopPropagation()
                },
                stopImmediatePropagation: function() {
                  var e = this.originalEvent;
                  this.isImmediatePropagationStopped = je,
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                      this.stopPropagation()
                }
              },
              E.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function(e) {
                  var t = e.button;
                  return null == e.which && Se.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && De.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
                }
              }, E.event.addProp),
              E.each({
                focus: "focusin",
                blur: "focusout"
              }, (function(e, t) {
                    E.event.special[e] = {
                      setup: function() {
                        return He(this, e, Le),
                            !1
                      },
                      trigger: function() {
                        return He(this, e),
                            !0
                      },
                      delegateType: t
                    }
                  }
              )),
              E.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
              }, (function(e, t) {
                    E.event.special[e] = {
                      delegateType: t,
                      bindType: t,
                      handle: function(e) {
                        var n, r = this, i = e.relatedTarget, o = e.handleObj;
                        return i && (i === r || E.contains(r, i)) || (e.type = o.origType,
                            n = o.handler.apply(this, arguments),
                            e.type = t),
                            n
                      }
                    }
                  }
              )),
              E.fn.extend({
                on: function(e, t, n, r) {
                  return Oe(this, e, t, n, r)
                },
                one: function(e, t, n, r) {
                  return Oe(this, e, t, n, r, 1)
                },
                off: function(e, t, n) {
                  var r, i;
                  if (e && e.preventDefault && e.handleObj)
                    return r = e.handleObj,
                        E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                        this;
                  if ("object" === typeof e) {
                    for (i in e)
                      this.off(i, t, e[i]);
                    return this
                  }
                  return !1 !== t && "function" !== typeof t || (n = t,
                      t = void 0),
                  !1 === n && (n = Ne),
                      this.each((function() {
                            E.event.remove(this, e, n, t)
                          }
                      ))
                }
              });
          var _e = /<script|<style|<link/i
              , Re = /checked\s*(?:[^=]|=\s*.checked.)/i
              , Pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
          function Me(e, t) {
            return L(e, "table") && L(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e
          }
          function Ie(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
                e
          }
          function $e(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
                e
          }
          function We(e, t) {
            var n, r, i, o, a, s, u;
            if (1 === t.nodeType) {
              if (te.hasData(e) && (o = te.get(e),
                  u = o.events,
                  u))
                for (i in te.remove(t, "handle events"),
                    u)
                  for (n = 0,
                           r = u[i].length; n < r; n++)
                    E.event.add(t, i, u[i][n]);
              ne.hasData(e) && (a = ne.access(e),
                  s = E.extend({}, a),
                  ne.set(t, s))
            }
          }
          function Be(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && ye.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
          }
          function Fe(e, t, n, r) {
            t = l(t);
            var i, o, a, s, u, c, f = 0, d = e.length, p = d - 1, h = t[0], g = y(h);
            if (g || d > 1 && "string" === typeof h && !m.checkClone && Re.test(h))
              return e.each((function(i) {
                    var o = e.eq(i);
                    g && (t[0] = h.call(this, i, o.html())),
                        Fe(o, t, n, r)
                  }
              ));
            if (d && (i = Ee(t, e[0].ownerDocument, !1, e, r),
                o = i.firstChild,
            1 === i.childNodes.length && (i = o),
            o || r)) {
              for (a = E.map(Te(i, "script"), Ie),
                       s = a.length; f < d; f++)
                u = i,
                f !== p && (u = E.clone(u, !0, !0),
                s && E.merge(a, Te(u, "script"))),
                    n.call(e[f], u, f);
              if (s)
                for (c = a[a.length - 1].ownerDocument,
                         E.map(a, $e),
                         f = 0; f < s; f++)
                  u = a[f],
                  be.test(u.type || "") && !te.access(u, "globalEval") && E.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? E._evalUrl && !u.noModule && E._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                  }, c) : T(u.textContent.replace(Pe, ""), u, c))
            }
            return e
          }
          function ze(e, t, n) {
            for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
              n || 1 !== r.nodeType || E.cleanData(Te(r)),
              r.parentNode && (n && fe(r) && Ce(Te(r, "script")),
                  r.parentNode.removeChild(r));
            return e
          }
          E.extend({
            htmlPrefilter: function(e) {
              return e
            },
            clone: function(e, t, n) {
              var r, i, o, a, s = e.cloneNode(!0), u = fe(e);
              if (!m.noCloneChecked && (1 === e.nodeType || 11 === e.nodeType) && !E.isXMLDoc(e))
                for (a = Te(s),
                         o = Te(e),
                         r = 0,
                         i = o.length; r < i; r++)
                  Be(o[r], a[r]);
              if (t)
                if (n)
                  for (o = o || Te(e),
                           a = a || Te(s),
                           r = 0,
                           i = o.length; r < i; r++)
                    We(o[r], a[r]);
                else
                  We(e, s);
              return a = Te(s, "script"),
              a.length > 0 && Ce(a, !u && Te(e, "script")),
                  s
            },
            cleanData: function(e) {
              for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Z(n)) {
                  if (t = n[te.expando]) {
                    if (t.events)
                      for (r in t.events)
                        i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
                    n[te.expando] = void 0
                  }
                  n[ne.expando] && (n[ne.expando] = void 0)
                }
            }
          }),
              E.fn.extend({
                detach: function(e) {
                  return ze(this, e, !0)
                },
                remove: function(e) {
                  return ze(this, e)
                },
                text: function(e) {
                  return Y(this, (function(e) {
                        return void 0 === e ? E.text(this) : this.empty().each((function() {
                              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                            }
                        ))
                      }
                  ), null, e, arguments.length)
                },
                append: function() {
                  return Fe(this, arguments, (function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                          var t = Me(this, e);
                          t.appendChild(e)
                        }
                      }
                  ))
                },
                prepend: function() {
                  return Fe(this, arguments, (function(e) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                          var t = Me(this, e);
                          t.insertBefore(e, t.firstChild)
                        }
                      }
                  ))
                },
                before: function() {
                  return Fe(this, arguments, (function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this)
                      }
                  ))
                },
                after: function() {
                  return Fe(this, arguments, (function(e) {
                        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                      }
                  ))
                },
                empty: function() {
                  for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType && (E.cleanData(Te(e, !1)),
                        e.textContent = "");
                  return this
                },
                clone: function(e, t) {
                  return e = null != e && e,
                      t = null == t ? e : t,
                      this.map((function() {
                            return E.clone(this, e, t)
                          }
                      ))
                },
                html: function(e) {
                  return Y(this, (function(e) {
                        var t = this[0] || {}
                            , n = 0
                            , r = this.length;
                        if (void 0 === e && 1 === t.nodeType)
                          return t.innerHTML;
                        if ("string" === typeof e && !_e.test(e) && !we[(xe.exec(e) || ["", ""])[1].toLowerCase()]) {
                          e = E.htmlPrefilter(e);
                          try {
                            for (; n < r; n++)
                              t = this[n] || {},
                              1 === t.nodeType && (E.cleanData(Te(t, !1)),
                                  t.innerHTML = e);
                            t = 0
                          } catch (i) {}
                        }
                        t && this.empty().append(e)
                      }
                  ), null, e, arguments.length)
                },
                replaceWith: function() {
                  var e = [];
                  return Fe(this, arguments, (function(t) {
                        var n = this.parentNode;
                        E.inArray(this, e) < 0 && (E.cleanData(Te(this)),
                        n && n.replaceChild(t, this))
                      }
                  ), e)
                }
              }),
              E.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
              }, (function(e, t) {
                    E.fn[e] = function(e) {
                      for (var n, r = [], i = E(e), o = i.length - 1, a = 0; a <= o; a++)
                        n = a === o ? this : this.clone(!0),
                            E(i[a])[t](n),
                            c.apply(r, n.get());
                      return this.pushStack(r)
                    }
                  }
              ));
          var Ue = new RegExp("^(" + se + ")(?!px)[a-z%]+$","i")
              , Ve = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = n),
                t.getComputedStyle(e)
          }
              , Xe = function(e, t, n) {
            var r, i, o = {};
            for (i in t)
              o[i] = e.style[i],
                  e.style[i] = t[i];
            for (i in r = n.call(e),
                t)
              e.style[i] = o[i];
            return r
          }
              , Ye = new RegExp(le.join("|"),"i");
          function Ge(e, t, n) {
            var r, i, o, a, s = e.style;
            return n = n || Ve(e),
            n && (a = n.getPropertyValue(t) || n[t],
            "" !== a || fe(e) || (a = E.style(e, t)),
            !m.pixelBoxStyles() && Ue.test(a) && Ye.test(t) && (r = s.width,
                i = s.minWidth,
                o = s.maxWidth,
                s.minWidth = s.maxWidth = s.width = a,
                a = n.width,
                s.width = r,
                s.minWidth = i,
                s.maxWidth = o)),
                void 0 !== a ? a + "" : a
          }
          function Je(e, t) {
            return {
              get: function() {
                if (!e())
                  return (this.get = t).apply(this, arguments);
                delete this.get
              }
            }
          }
          (function() {
                function e() {
                  if (c) {
                    l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                        c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                        ce.appendChild(l).appendChild(c);
                    var e = n.getComputedStyle(c);
                    r = "1%" !== e.top,
                        u = 12 === t(e.marginLeft),
                        c.style.right = "60%",
                        a = 36 === t(e.right),
                        i = 36 === t(e.width),
                        c.style.position = "absolute",
                        o = 12 === t(c.offsetWidth / 3),
                        ce.removeChild(l),
                        c = null
                  }
                }
                function t(e) {
                  return Math.round(parseFloat(e))
                }
                var r, i, o, a, s, u, l = b.createElement("div"), c = b.createElement("div");
                c.style && (c.style.backgroundClip = "content-box",
                    c.cloneNode(!0).style.backgroundClip = "",
                    m.clearCloneStyle = "content-box" === c.style.backgroundClip,
                    E.extend(m, {
                      boxSizingReliable: function() {
                        return e(),
                            i
                      },
                      pixelBoxStyles: function() {
                        return e(),
                            a
                      },
                      pixelPosition: function() {
                        return e(),
                            r
                      },
                      reliableMarginLeft: function() {
                        return e(),
                            u
                      },
                      scrollboxSize: function() {
                        return e(),
                            o
                      },
                      reliableTrDimensions: function() {
                        var e, t, r, i;
                        return null == s && (e = b.createElement("table"),
                            t = b.createElement("tr"),
                            r = b.createElement("div"),
                            e.style.cssText = "position:absolute;left:-11111px",
                            t.style.height = "1px",
                            r.style.height = "9px",
                            ce.appendChild(e).appendChild(t).appendChild(r),
                            i = n.getComputedStyle(t),
                            s = parseInt(i.height) > 3,
                            ce.removeChild(e)),
                            s
                      }
                    }))
              }
          )();
          var Qe = ["Webkit", "Moz", "ms"]
              , Ke = b.createElement("div").style
              , Ze = {};
          function et(e) {
            var t = e[0].toUpperCase() + e.slice(1)
                , n = Qe.length;
            while (n--)
              if (e = Qe[n] + t,
              e in Ke)
                return e
          }
          function tt(e) {
            var t = E.cssProps[e] || Ze[e];
            return t || (e in Ke ? e : Ze[e] = et(e) || e)
          }
          var nt = /^(none|table(?!-c[ea]).+)/
              , rt = /^--/
              , it = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
          }
              , ot = {
            letterSpacing: "0",
            fontWeight: "400"
          };
          function at(e, t, n) {
            var r = ue.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
          }
          function st(e, t, n, r, i, o) {
            var a = "width" === t ? 1 : 0
                , s = 0
                , u = 0;
            if (n === (r ? "border" : "content"))
              return 0;
            for (; a < 4; a += 2)
              "margin" === n && (u += E.css(e, n + le[a], !0, i)),
                  r ? ("content" === n && (u -= E.css(e, "padding" + le[a], !0, i)),
                  "margin" !== n && (u -= E.css(e, "border" + le[a] + "Width", !0, i))) : (u += E.css(e, "padding" + le[a], !0, i),
                      "padding" !== n ? u += E.css(e, "border" + le[a] + "Width", !0, i) : s += E.css(e, "border" + le[a] + "Width", !0, i));
            return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0),
                u
          }
          function ut(e, t, n) {
            var r = Ve(e)
                , i = !m.boxSizingReliable() || n
                , o = i && "border-box" === E.css(e, "boxSizing", !1, r)
                , a = o
                , s = Ge(e, t, r)
                , u = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Ue.test(s)) {
              if (!n)
                return s;
              s = "auto"
            }
            return (!m.boxSizingReliable() && o || !m.reliableTrDimensions() && L(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === E.css(e, "display", !1, r)) && e.getClientRects().length && (o = "border-box" === E.css(e, "boxSizing", !1, r),
                a = u in e,
            a && (s = e[u])),
                s = parseFloat(s) || 0,
            s + st(e, t, n || (o ? "border" : "content"), a, r, s) + "px"
          }
          function lt(e, t, n, r, i) {
            return new lt.prototype.init(e,t,n,r,i)
          }
          E.extend({
            cssHooks: {
              opacity: {
                get: function(e, t) {
                  if (t) {
                    var n = Ge(e, "opacity");
                    return "" === n ? "1" : n
                  }
                }
              }
            },
            cssNumber: {
              animationIterationCount: !0,
              columnCount: !0,
              fillOpacity: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0
            },
            cssProps: {},
            style: function(e, t, n, r) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = K(t), u = rt.test(t), l = e.style;
                if (u || (t = tt(s)),
                    a = E.cssHooks[t] || E.cssHooks[s],
                void 0 === n)
                  return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                o = typeof n,
                "string" === o && (i = ue.exec(n)) && i[1] && (n = he(e, t, i),
                    o = "number"),
                null != n && n === n && ("number" !== o || u || (n += i && i[3] || (E.cssNumber[s] ? "" : "px")),
                m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
              }
            },
            css: function(e, t, n, r) {
              var i, o, a, s = K(t), u = rt.test(t);
              return u || (t = tt(s)),
                  a = E.cssHooks[t] || E.cssHooks[s],
              a && "get"in a && (i = a.get(e, !0, n)),
              void 0 === i && (i = Ge(e, t, r)),
              "normal" === i && t in ot && (i = ot[t]),
                  "" === n || n ? (o = parseFloat(i),
                      !0 === n || isFinite(o) ? o || 0 : i) : i
            }
          }),
              E.each(["height", "width"], (function(e, t) {
                    E.cssHooks[t] = {
                      get: function(e, n, r) {
                        if (n)
                          return !nt.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ut(e, t, r) : Xe(e, it, (function() {
                                return ut(e, t, r)
                              }
                          ))
                      },
                      set: function(e, n, r) {
                        var i, o = Ve(e), a = !m.scrollboxSize() && "absolute" === o.position, s = a || r, u = s && "border-box" === E.css(e, "boxSizing", !1, o), l = r ? st(e, t, r, u, o) : 0;
                        return u && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - st(e, t, "border", !1, o) - .5)),
                        l && (i = ue.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
                            n = E.css(e, t)),
                            at(e, n, l)
                      }
                    }
                  }
              )),
              E.cssHooks.marginLeft = Je(m.reliableMarginLeft, (function(e, t) {
                    if (t)
                      return (parseFloat(Ge(e, "marginLeft")) || e.getBoundingClientRect().left - Xe(e, {
                        marginLeft: 0
                      }, (function() {
                            return e.getBoundingClientRect().left
                          }
                      ))) + "px"
                  }
              )),
              E.each({
                margin: "",
                padding: "",
                border: "Width"
              }, (function(e, t) {
                    E.cssHooks[e + t] = {
                      expand: function(n) {
                        for (var r = 0, i = {}, o = "string" === typeof n ? n.split(" ") : [n]; r < 4; r++)
                          i[e + le[r] + t] = o[r] || o[r - 2] || o[0];
                        return i
                      }
                    },
                    "margin" !== e && (E.cssHooks[e + t].set = at)
                  }
              )),
              E.fn.extend({
                css: function(e, t) {
                  return Y(this, (function(e, t, n) {
                        var r, i, o = {}, a = 0;
                        if (Array.isArray(t)) {
                          for (r = Ve(e),
                                   i = t.length; a < i; a++)
                            o[t[a]] = E.css(e, t[a], !1, r);
                          return o
                        }
                        return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
                      }
                  ), e, t, arguments.length > 1)
                }
              }),
              E.Tween = lt,
              lt.prototype = {
                constructor: lt,
                init: function(e, t, n, r, i, o) {
                  this.elem = e,
                      this.prop = n,
                      this.easing = i || E.easing._default,
                      this.options = t,
                      this.start = this.now = this.cur(),
                      this.end = r,
                      this.unit = o || (E.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                  var e = lt.propHooks[this.prop];
                  return e && e.get ? e.get(this) : lt.propHooks._default.get(this)
                },
                run: function(e) {
                  var t, n = lt.propHooks[this.prop];
                  return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                      this.now = (this.end - this.start) * t + this.start,
                  this.options.step && this.options.step.call(this.elem, this.now, this),
                      n && n.set ? n.set(this) : lt.propHooks._default.set(this),
                      this
                }
              },
              lt.prototype.init.prototype = lt.prototype,
              lt.propHooks = {
                _default: {
                  get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, ""),
                        t && "auto" !== t ? t : 0)
                  },
                  set: function(e) {
                    E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !E.cssHooks[e.prop] && null == e.elem.style[tt(e.prop)] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit)
                  }
                }
              },
              lt.propHooks.scrollTop = lt.propHooks.scrollLeft = {
                set: function(e) {
                  e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                }
              },
              E.easing = {
                linear: function(e) {
                  return e
                },
                swing: function(e) {
                  return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
              },
              E.fx = lt.prototype.init,
              E.fx.step = {};
          var ct, ft, dt = /^(?:toggle|show|hide)$/, pt = /queueHooks$/;
          function ht() {
            ft && (!1 === b.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(ht) : n.setTimeout(ht, E.fx.interval),
                E.fx.tick())
          }
          function gt() {
            return n.setTimeout((function() {
                  ct = void 0
                }
            )),
                ct = Date.now()
          }
          function vt(e, t) {
            var n, r = 0, i = {
              height: e
            };
            for (t = t ? 1 : 0; r < 4; r += 2 - t)
              n = le[r],
                  i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e),
                i
          }
          function mt(e, t, n) {
            for (var r, i = (bt.tweeners[t] || []).concat(bt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
              if (r = i[o].call(n, t, e))
                return r
          }
          function yt(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, d = this, p = {}, h = e.style, g = e.nodeType && pe(e), v = te.get(e, "fxshow");
            for (r in n.queue || (a = E._queueHooks(e, "fx"),
            null == a.unqueued && (a.unqueued = 0,
                    s = a.empty.fire,
                    a.empty.fire = function() {
                      a.unqueued || s()
                    }
            ),
                a.unqueued++,
                d.always((function() {
                      d.always((function() {
                            a.unqueued--,
                            E.queue(e, "fx").length || a.empty.fire()
                          }
                      ))
                    }
                ))),
                t)
              if (i = t[r],
                  dt.test(i)) {
                if (delete t[r],
                    o = o || "toggle" === i,
                i === (g ? "hide" : "show")) {
                  if ("show" !== i || !v || void 0 === v[r])
                    continue;
                  g = !0
                }
                p[r] = v && v[r] || E.style(e, r)
              }
            if (u = !E.isEmptyObject(t),
            u || !E.isEmptyObject(p))
              for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                  l = v && v.display,
              null == l && (l = te.get(e, "display")),
                  c = E.css(e, "display"),
              "none" === c && (l ? c = l : (me([e], !0),
                  l = e.style.display || l,
                  c = E.css(e, "display"),
                  me([e]))),
              ("inline" === c || "inline-block" === c && null != l) && "none" === E.css(e, "float") && (u || (d.done((function() {
                    h.display = l
                  }
              )),
              null == l && (c = h.display,
                  l = "none" === c ? "" : c)),
                  h.display = "inline-block")),
              n.overflow && (h.overflow = "hidden",
                  d.always((function() {
                        h.overflow = n.overflow[0],
                            h.overflowX = n.overflow[1],
                            h.overflowY = n.overflow[2]
                      }
                  ))),
                  u = !1,
                  p)
                u || (v ? "hidden"in v && (g = v.hidden) : v = te.access(e, "fxshow", {
                  display: l
                }),
                o && (v.hidden = !g),
                g && me([e], !0),
                    d.done((function() {
                          for (r in g || me([e]),
                              te.remove(e, "fxshow"),
                              p)
                            E.style(e, r, p[r])
                        }
                    ))),
                    u = mt(g ? v[r] : 0, r, d),
                r in v || (v[r] = u.start,
                g && (u.end = u.start,
                    u.start = 0))
          }
          function xt(e, t) {
            var n, r, i, o, a;
            for (n in e)
              if (r = K(n),
                  i = t[r],
                  o = e[n],
              Array.isArray(o) && (i = o[1],
                  o = e[n] = o[0]),
              n !== r && (e[r] = o,
                  delete e[n]),
                  a = E.cssHooks[r],
              a && "expand"in a)
                for (n in o = a.expand(o),
                    delete e[r],
                    o)
                  n in e || (e[n] = o[n],
                      t[n] = i);
              else
                t[r] = i
          }
          function bt(e, t, n) {
            var r, i, o = 0, a = bt.prefilters.length, s = E.Deferred().always((function() {
                  delete u.elem
                }
            )), u = function() {
              if (i)
                return !1;
              for (var t = ct || gt(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; a < u; a++)
                l.tweens[a].run(o);
              return s.notifyWith(e, [l, o, n]),
                  o < 1 && u ? n : (u || s.notifyWith(e, [l, 1, 0]),
                      s.resolveWith(e, [l]),
                      !1)
            }, l = s.promise({
              elem: e,
              props: E.extend({}, t),
              opts: E.extend(!0, {
                specialEasing: {},
                easing: E.easing._default
              }, n),
              originalProperties: t,
              originalOptions: n,
              startTime: ct || gt(),
              duration: n.duration,
              tweens: [],
              createTween: function(t, n) {
                var r = E.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r),
                    r
              },
              stop: function(t) {
                var n = 0
                    , r = t ? l.tweens.length : 0;
                if (i)
                  return this;
                for (i = !0; n < r; n++)
                  l.tweens[n].run(1);
                return t ? (s.notifyWith(e, [l, 1, 0]),
                    s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]),
                    this
              }
            }), c = l.props;
            for (xt(c, l.opts.specialEasing); o < a; o++)
              if (r = bt.prefilters[o].call(l, e, c, l.opts),
                  r)
                return y(r.stop) && (E._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)),
                    r;
            return E.map(c, mt, l),
            y(l.opts.start) && l.opts.start.call(e, l),
                l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
                E.fx.timer(E.extend(u, {
                  elem: e,
                  anim: l,
                  queue: l.opts.queue
                })),
                l
          }
          E.Animation = E.extend(bt, {
            tweeners: {
              "*": [function(e, t) {
                var n = this.createTween(e, t);
                return he(n.elem, e, ue.exec(t), n),
                    n
              }
              ]
            },
            tweener: function(e, t) {
              y(e) ? (t = e,
                  e = ["*"]) : e = e.match($);
              for (var n, r = 0, i = e.length; r < i; r++)
                n = e[r],
                    bt.tweeners[n] = bt.tweeners[n] || [],
                    bt.tweeners[n].unshift(t)
            },
            prefilters: [yt],
            prefilter: function(e, t) {
              t ? bt.prefilters.unshift(e) : bt.prefilters.push(e)
            }
          }),
              E.speed = function(e, t, n) {
                var r = e && "object" === typeof e ? E.extend({}, e) : {
                  complete: n || !n && t || y(e) && e,
                  duration: e,
                  easing: n && t || t && !y(t) && t
                };
                return E.fx.off ? r.duration = 0 : "number" !== typeof r.duration && (r.duration in E.fx.speeds ? r.duration = E.fx.speeds[r.duration] : r.duration = E.fx.speeds._default),
                null != r.queue && !0 !== r.queue || (r.queue = "fx"),
                    r.old = r.complete,
                    r.complete = function() {
                      y(r.old) && r.old.call(this),
                      r.queue && E.dequeue(this, r.queue)
                    }
                    ,
                    r
              }
              ,
              E.fn.extend({
                fadeTo: function(e, t, n, r) {
                  return this.filter(pe).css("opacity", 0).show().end().animate({
                    opacity: t
                  }, e, n, r)
                },
                animate: function(e, t, n, r) {
                  var i = E.isEmptyObject(e)
                      , o = E.speed(t, n, r)
                      , a = function() {
                    var t = bt(this, E.extend({}, e), o);
                    (i || te.get(this, "finish")) && t.stop(!0)
                  };
                  return a.finish = a,
                      i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                },
                stop: function(e, t, n) {
                  var r = function(e) {
                    var t = e.stop;
                    delete e.stop,
                        t(n)
                  };
                  return "string" !== typeof e && (n = t,
                      t = e,
                      e = void 0),
                  t && this.queue(e || "fx", []),
                      this.each((function() {
                            var t = !0
                                , i = null != e && e + "queueHooks"
                                , o = E.timers
                                , a = te.get(this);
                            if (i)
                              a[i] && a[i].stop && r(a[i]);
                            else
                              for (i in a)
                                a[i] && a[i].stop && pt.test(i) && r(a[i]);
                            for (i = o.length; i--; )
                              o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                                  t = !1,
                                  o.splice(i, 1));
                            !t && n || E.dequeue(this, e)
                          }
                      ))
                },
                finish: function(e) {
                  return !1 !== e && (e = e || "fx"),
                      this.each((function() {
                            var t, n = te.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = E.timers, a = r ? r.length : 0;
                            for (n.finish = !0,
                                     E.queue(this, e, []),
                                 i && i.stop && i.stop.call(this, !0),
                                     t = o.length; t--; )
                              o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                                  o.splice(t, 1));
                            for (t = 0; t < a; t++)
                              r[t] && r[t].finish && r[t].finish.call(this);
                            delete n.finish
                          }
                      ))
                }
              }),
              E.each(["toggle", "show", "hide"], (function(e, t) {
                    var n = E.fn[t];
                    E.fn[t] = function(e, r, i) {
                      return null == e || "boolean" === typeof e ? n.apply(this, arguments) : this.animate(vt(t, !0), e, r, i)
                    }
                  }
              )),
              E.each({
                slideDown: vt("show"),
                slideUp: vt("hide"),
                slideToggle: vt("toggle"),
                fadeIn: {
                  opacity: "show"
                },
                fadeOut: {
                  opacity: "hide"
                },
                fadeToggle: {
                  opacity: "toggle"
                }
              }, (function(e, t) {
                    E.fn[e] = function(e, n, r) {
                      return this.animate(t, e, n, r)
                    }
                  }
              )),
              E.timers = [],
              E.fx.tick = function() {
                var e, t = 0, n = E.timers;
                for (ct = Date.now(); t < n.length; t++)
                  e = n[t],
                  e() || n[t] !== e || n.splice(t--, 1);
                n.length || E.fx.stop(),
                    ct = void 0
              }
              ,
              E.fx.timer = function(e) {
                E.timers.push(e),
                    E.fx.start()
              }
              ,
              E.fx.interval = 13,
              E.fx.start = function() {
                ft || (ft = !0,
                    ht())
              }
              ,
              E.fx.stop = function() {
                ft = null
              }
              ,
              E.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
              },
              E.fn.delay = function(e, t) {
                return e = E.fx && E.fx.speeds[e] || e,
                    t = t || "fx",
                    this.queue(t, (function(t, r) {
                          var i = n.setTimeout(t, e);
                          r.stop = function() {
                            n.clearTimeout(i)
                          }
                        }
                    ))
              }
              ,
              function() {
                var e = b.createElement("input")
                    , t = b.createElement("select")
                    , n = t.appendChild(b.createElement("option"));
                e.type = "checkbox",
                    m.checkOn = "" !== e.value,
                    m.optSelected = n.selected,
                    e = b.createElement("input"),
                    e.value = "t",
                    e.type = "radio",
                    m.radioValue = "t" === e.value
              }();
          var wt, Tt = E.expr.attrHandle;
          E.fn.extend({
            attr: function(e, t) {
              return Y(this, E.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
              return this.each((function() {
                    E.removeAttr(this, e)
                  }
              ))
            }
          }),
              E.extend({
                attr: function(e, t, n) {
                  var r, i, o = e.nodeType;
                  if (3 !== o && 8 !== o && 2 !== o)
                    return "undefined" === typeof e.getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) || (i = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? wt : void 0)),
                        void 0 !== n ? null === n ? void E.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                            n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : (r = E.find.attr(e, t),
                            null == r ? void 0 : r))
                },
                attrHooks: {
                  type: {
                    set: function(e, t) {
                      if (!m.radioValue && "radio" === t && L(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                            t
                      }
                    }
                  }
                },
                removeAttr: function(e, t) {
                  var n, r = 0, i = t && t.match($);
                  if (i && 1 === e.nodeType)
                    while (n = i[r++])
                      e.removeAttribute(n)
                }
              }),
              wt = {
                set: function(e, t, n) {
                  return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n),
                      n
                }
              },
              E.each(E.expr.match.bool.source.match(/\w+/g), (function(e, t) {
                    var n = Tt[t] || E.find.attr;
                    Tt[t] = function(e, t, r) {
                      var i, o, a = t.toLowerCase();
                      return r || (o = Tt[a],
                          Tt[a] = i,
                          i = null != n(e, t, r) ? a : null,
                          Tt[a] = o),
                          i
                    }
                  }
              ));
          var Ct = /^(?:input|select|textarea|button)$/i
              , kt = /^(?:a|area)$/i;
          function Et(e) {
            var t = e.match($) || [];
            return t.join(" ")
          }
          function St(e) {
            return e.getAttribute && e.getAttribute("class") || ""
          }
          function Dt(e) {
            return Array.isArray(e) ? e : "string" === typeof e && e.match($) || []
          }
          E.fn.extend({
            prop: function(e, t) {
              return Y(this, E.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
              return this.each((function() {
                    delete this[E.propFix[e] || e]
                  }
              ))
            }
          }),
              E.extend({
                prop: function(e, t, n) {
                  var r, i, o = e.nodeType;
                  if (3 !== o && 8 !== o && 2 !== o)
                    return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t,
                        i = E.propHooks[t]),
                        void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
                },
                propHooks: {
                  tabIndex: {
                    get: function(e) {
                      var t = E.find.attr(e, "tabindex");
                      return t ? parseInt(t, 10) : Ct.test(e.nodeName) || kt.test(e.nodeName) && e.href ? 0 : -1
                    }
                  }
                },
                propFix: {
                  for: "htmlFor",
                  class: "className"
                }
              }),
          m.optSelected || (E.propHooks.selected = {
            get: function(e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex,
                  null
            },
            set: function(e) {
              var t = e.parentNode;
              t && (t.selectedIndex,
              t.parentNode && t.parentNode.selectedIndex)
            }
          }),
              E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
                    E.propFix[this.toLowerCase()] = this
                  }
              )),
              E.fn.extend({
                addClass: function(e) {
                  var t, n, r, i, o, a, s, u = 0;
                  if (y(e))
                    return this.each((function(t) {
                          E(this).addClass(e.call(this, t, St(this)))
                        }
                    ));
                  if (t = Dt(e),
                      t.length)
                    while (n = this[u++])
                      if (i = St(n),
                          r = 1 === n.nodeType && " " + Et(i) + " ",
                          r) {
                        a = 0;
                        while (o = t[a++])
                          r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        s = Et(r),
                        i !== s && n.setAttribute("class", s)
                      }
                  return this
                },
                removeClass: function(e) {
                  var t, n, r, i, o, a, s, u = 0;
                  if (y(e))
                    return this.each((function(t) {
                          E(this).removeClass(e.call(this, t, St(this)))
                        }
                    ));
                  if (!arguments.length)
                    return this.attr("class", "");
                  if (t = Dt(e),
                      t.length)
                    while (n = this[u++])
                      if (i = St(n),
                          r = 1 === n.nodeType && " " + Et(i) + " ",
                          r) {
                        a = 0;
                        while (o = t[a++])
                          while (r.indexOf(" " + o + " ") > -1)
                            r = r.replace(" " + o + " ", " ");
                        s = Et(r),
                        i !== s && n.setAttribute("class", s)
                      }
                  return this
                },
                toggleClass: function(e, t) {
                  var n = typeof e
                      , r = "string" === n || Array.isArray(e);
                  return "boolean" === typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : y(e) ? this.each((function(n) {
                        E(this).toggleClass(e.call(this, n, St(this), t), t)
                      }
                  )) : this.each((function() {
                        var t, i, o, a;
                        if (r) {
                          i = 0,
                              o = E(this),
                              a = Dt(e);
                          while (t = a[i++])
                            o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
                        } else
                          void 0 !== e && "boolean" !== n || (t = St(this),
                          t && te.set(this, "__className__", t),
                          this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : te.get(this, "__className__") || ""))
                      }
                  ))
                },
                hasClass: function(e) {
                  var t, n, r = 0;
                  t = " " + e + " ";
                  while (n = this[r++])
                    if (1 === n.nodeType && (" " + Et(St(n)) + " ").indexOf(t) > -1)
                      return !0;
                  return !1
                }
              });
          var At = /\r/g;
          E.fn.extend({
            val: function(e) {
              var t, n, r, i = this[0];
              return arguments.length ? (r = y(e),
                  this.each((function(n) {
                        var i;
                        1 === this.nodeType && (i = r ? e.call(this, n, E(this).val()) : e,
                            null == i ? i = "" : "number" === typeof i ? i += "" : Array.isArray(i) && (i = E.map(i, (function(e) {
                                  return null == e ? "" : e + ""
                                }
                            ))),
                            t = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()],
                        t && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                      }
                  ))) : i ? (t = E.valHooks[i.type] || E.valHooks[i.nodeName.toLowerCase()],
                  t && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value,
                      "string" === typeof n ? n.replace(At, "") : null == n ? "" : n)) : void 0
            }
          }),
              E.extend({
                valHooks: {
                  option: {
                    get: function(e) {
                      var t = E.find.attr(e, "value");
                      return null != t ? t : Et(E.text(e))
                    }
                  },
                  select: {
                    get: function(e) {
                      var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                      for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (n = i[r],
                        (n.selected || r === o) && !n.disabled && (!n.parentNode.disabled || !L(n.parentNode, "optgroup"))) {
                          if (t = E(n).val(),
                              a)
                            return t;
                          s.push(t)
                        }
                      return s
                    },
                    set: function(e, t) {
                      var n, r, i = e.options, o = E.makeArray(t), a = i.length;
                      while (a--)
                        r = i[a],
                        (r.selected = E.inArray(E.valHooks.option.get(r), o) > -1) && (n = !0);
                      return n || (e.selectedIndex = -1),
                          o
                    }
                  }
                }
              }),
              E.each(["radio", "checkbox"], (function() {
                    E.valHooks[this] = {
                      set: function(e, t) {
                        if (Array.isArray(t))
                          return e.checked = E.inArray(E(e).val(), t) > -1
                      }
                    },
                    m.checkOn || (E.valHooks[this].get = function(e) {
                          return null === e.getAttribute("value") ? "on" : e.value
                        }
                    )
                  }
              )),
              m.focusin = "onfocusin"in n;
          var jt = /^(?:focusinfocus|focusoutblur)$/
              , Nt = function(e) {
            e.stopPropagation()
          };
          E.extend(E.event, {
            trigger: function(e, t, r, i) {
              var o, a, s, u, l, c, f, d, p = [r || b], g = h.call(e, "type") ? e.type : e, v = h.call(e, "namespace") ? e.namespace.split(".") : [];
              if (a = d = s = r = r || b,
              3 !== r.nodeType && 8 !== r.nodeType && !jt.test(g + E.event.triggered) && (g.indexOf(".") > -1 && (v = g.split("."),
                  g = v.shift(),
                  v.sort()),
                  l = g.indexOf(":") < 0 && "on" + g,
                  e = e[E.expando] ? e : new E.Event(g,"object" === typeof e && e),
                  e.isTrigger = i ? 2 : 3,
                  e.namespace = v.join("."),
                  e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                  e.result = void 0,
              e.target || (e.target = r),
                  t = null == t ? [e] : E.makeArray(t, [e]),
                  f = E.event.special[g] || {},
              i || !f.trigger || !1 !== f.trigger.apply(r, t))) {
                if (!i && !f.noBubble && !x(r)) {
                  for (u = f.delegateType || g,
                       jt.test(u + g) || (a = a.parentNode); a; a = a.parentNode)
                    p.push(a),
                        s = a;
                  s === (r.ownerDocument || b) && p.push(s.defaultView || s.parentWindow || n)
                }
                o = 0;
                while ((a = p[o++]) && !e.isPropagationStopped())
                  d = a,
                      e.type = o > 1 ? u : f.bindType || g,
                      c = (te.get(a, "events") || Object.create(null))[e.type] && te.get(a, "handle"),
                  c && c.apply(a, t),
                      c = l && a[l],
                  c && c.apply && Z(a) && (e.result = c.apply(a, t),
                  !1 === e.result && e.preventDefault());
                return e.type = g,
                i || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(p.pop(), t) || !Z(r) || l && y(r[g]) && !x(r) && (s = r[l],
                s && (r[l] = null),
                    E.event.triggered = g,
                e.isPropagationStopped() && d.addEventListener(g, Nt),
                    r[g](),
                e.isPropagationStopped() && d.removeEventListener(g, Nt),
                    E.event.triggered = void 0,
                s && (r[l] = s)),
                    e.result
              }
            },
            simulate: function(e, t, n) {
              var r = E.extend(new E.Event, n, {
                type: e,
                isSimulated: !0
              });
              E.event.trigger(r, null, t)
            }
          }),
              E.fn.extend({
                trigger: function(e, t) {
                  return this.each((function() {
                        E.event.trigger(e, t, this)
                      }
                  ))
                },
                triggerHandler: function(e, t) {
                  var n = this[0];
                  if (n)
                    return E.event.trigger(e, t, n, !0)
                }
              }),
          m.focusin || E.each({
            focus: "focusin",
            blur: "focusout"
          }, (function(e, t) {
                var n = function(e) {
                  E.event.simulate(t, e.target, E.event.fix(e))
                };
                E.event.special[t] = {
                  setup: function() {
                    var r = this.ownerDocument || this.document || this
                        , i = te.access(r, t);
                    i || r.addEventListener(e, n, !0),
                        te.access(r, t, (i || 0) + 1)
                  },
                  teardown: function() {
                    var r = this.ownerDocument || this.document || this
                        , i = te.access(r, t) - 1;
                    i ? te.access(r, t, i) : (r.removeEventListener(e, n, !0),
                        te.remove(r, t))
                  }
                }
              }
          ));
          var Lt = n.location
              , qt = {
            guid: Date.now()
          }
              , Ot = /\?/;
          E.parseXML = function(e) {
            var t;
            if (!e || "string" !== typeof e)
              return null;
            try {
              t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (r) {
              t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || E.error("Invalid XML: " + e),
                t
          }
          ;
          var Ht = /\[\]$/
              , _t = /\r?\n/g
              , Rt = /^(?:submit|button|image|reset|file)$/i
              , Pt = /^(?:input|select|textarea|keygen)/i;
          function Mt(e, t, n, r) {
            var i;
            if (Array.isArray(t))
              E.each(t, (function(t, i) {
                    n || Ht.test(e) ? r(e, i) : Mt(e + "[" + ("object" === typeof i && null != i ? t : "") + "]", i, n, r)
                  }
              ));
            else if (n || "object" !== C(t))
              r(e, t);
            else
              for (i in t)
                Mt(e + "[" + i + "]", t[i], n, r)
          }
          E.param = function(e, t) {
            var n, r = [], i = function(e, t) {
              var n = y(t) ? t() : t;
              r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
            if (null == e)
              return "";
            if (Array.isArray(e) || e.jquery && !E.isPlainObject(e))
              E.each(e, (function() {
                    i(this.name, this.value)
                  }
              ));
            else
              for (n in e)
                Mt(n, e[n], t, i);
            return r.join("&")
          }
              ,
              E.fn.extend({
                serialize: function() {
                  return E.param(this.serializeArray())
                },
                serializeArray: function() {
                  return this.map((function() {
                        var e = E.prop(this, "elements");
                        return e ? E.makeArray(e) : this
                      }
                  )).filter((function() {
                        var e = this.type;
                        return this.name && !E(this).is(":disabled") && Pt.test(this.nodeName) && !Rt.test(e) && (this.checked || !ye.test(e))
                      }
                  )).map((function(e, t) {
                        var n = E(this).val();
                        return null == n ? null : Array.isArray(n) ? E.map(n, (function(e) {
                              return {
                                name: t.name,
                                value: e.replace(_t, "\r\n")
                              }
                            }
                        )) : {
                          name: t.name,
                          value: n.replace(_t, "\r\n")
                        }
                      }
                  )).get()
                }
              });
          var It = /%20/g
              , $t = /#.*$/
              , Wt = /([?&])_=[^&]*/
              , Bt = /^(.*?):[ \t]*([^\r\n]*)$/gm
              , Ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
              , zt = /^(?:GET|HEAD)$/
              , Ut = /^\/\//
              , Vt = {}
              , Xt = {}
              , Yt = "*/".concat("*")
              , Gt = b.createElement("a");
          function Jt(e) {
            return function(t, n) {
              "string" !== typeof t && (n = t,
                  t = "*");
              var r, i = 0, o = t.toLowerCase().match($) || [];
              if (y(n))
                while (r = o[i++])
                  "+" === r[0] ? (r = r.slice(1) || "*",
                      (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
          }
          function Qt(e, t, n, r) {
            var i = {}
                , o = e === Xt;
            function a(s) {
              var u;
              return i[s] = !0,
                  E.each(e[s] || [], (function(e, s) {
                        var l = s(t, n, r);
                        return "string" !== typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l),
                            a(l),
                            !1)
                      }
                  )),
                  u
            }
            return a(t.dataTypes[0]) || !i["*"] && a("*")
          }
          function Kt(e, t) {
            var n, r, i = E.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && E.extend(!0, e, r),
                e
          }
          function Zt(e, t, n) {
            var r, i, o, a, s = e.contents, u = e.dataTypes;
            while ("*" === u[0])
              u.shift(),
              void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r)
              for (i in s)
                if (s[i] && s[i].test(r)) {
                  u.unshift(i);
                  break
                }
            if (u[0]in n)
              o = u[0];
            else {
              for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                  o = i;
                  break
                }
                a || (a = i)
              }
              o = o || a
            }
            if (o)
              return o !== u[0] && u.unshift(o),
                  n[o]
          }
          function en(e, t, n, r) {
            var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
            if (c[1])
              for (a in e.converters)
                l[a.toLowerCase()] = e.converters[a];
            o = c.shift();
            while (o)
              if (e.responseFields[o] && (n[e.responseFields[o]] = t),
              !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  u = o,
                  o = c.shift(),
                  o)
                if ("*" === o)
                  o = u;
                else if ("*" !== u && u !== o) {
                  if (a = l[u + " " + o] || l["* " + o],
                      !a)
                    for (i in l)
                      if (s = i.split(" "),
                      s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]],
                          a)) {
                        !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                            c.unshift(s[1]));
                        break
                      }
                  if (!0 !== a)
                    if (a && e.throws)
                      t = a(t);
                    else
                      try {
                        t = a(t)
                      } catch (f) {
                        return {
                          state: "parsererror",
                          error: a ? f : "No conversion from " + u + " to " + o
                        }
                      }
                }
            return {
              state: "success",
              data: t
            }
          }
          Gt.href = Lt.href,
              E.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                  url: Lt.href,
                  type: "GET",
                  isLocal: Ft.test(Lt.protocol),
                  global: !0,
                  processData: !0,
                  async: !0,
                  contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                  accepts: {
                    "*": Yt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                  },
                  contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                  },
                  responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                  },
                  converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": E.parseXML
                  },
                  flatOptions: {
                    url: !0,
                    context: !0
                  }
                },
                ajaxSetup: function(e, t) {
                  return t ? Kt(Kt(e, E.ajaxSettings), t) : Kt(E.ajaxSettings, e)
                },
                ajaxPrefilter: Jt(Vt),
                ajaxTransport: Jt(Xt),
                ajax: function(e, t) {
                  "object" === typeof e && (t = e,
                      e = void 0),
                      t = t || {};
                  var r, i, o, a, s, u, l, c, f, d, p = E.ajaxSetup({}, t), h = p.context || p, g = p.context && (h.nodeType || h.jquery) ? E(h) : E.event, v = E.Deferred(), m = E.Callbacks("once memory"), y = p.statusCode || {}, x = {}, w = {}, T = "canceled", C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                      var t;
                      if (l) {
                        if (!a) {
                          a = {};
                          while (t = Bt.exec(o))
                            a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2])
                        }
                        t = a[e.toLowerCase() + " "]
                      }
                      return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                      return l ? o : null
                    },
                    setRequestHeader: function(e, t) {
                      return null == l && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e,
                          x[e] = t),
                          this
                    },
                    overrideMimeType: function(e) {
                      return null == l && (p.mimeType = e),
                          this
                    },
                    statusCode: function(e) {
                      var t;
                      if (e)
                        if (l)
                          C.always(e[C.status]);
                        else
                          for (t in e)
                            y[t] = [y[t], e[t]];
                      return this
                    },
                    abort: function(e) {
                      var t = e || T;
                      return r && r.abort(t),
                          k(0, t),
                          this
                    }
                  };
                  if (v.promise(C),
                      p.url = ((e || p.url || Lt.href) + "").replace(Ut, Lt.protocol + "//"),
                      p.type = t.method || t.type || p.method || p.type,
                      p.dataTypes = (p.dataType || "*").toLowerCase().match($) || [""],
                  null == p.crossDomain) {
                    u = b.createElement("a");
                    try {
                      u.href = p.url,
                          u.href = u.href,
                          p.crossDomain = Gt.protocol + "//" + Gt.host !== u.protocol + "//" + u.host
                    } catch (S) {
                      p.crossDomain = !0
                    }
                  }
                  if (p.data && p.processData && "string" !== typeof p.data && (p.data = E.param(p.data, p.traditional)),
                      Qt(Vt, p, t, C),
                      l)
                    return C;
                  for (f in c = E.event && p.global,
                  c && 0 === E.active++ && E.event.trigger("ajaxStart"),
                      p.type = p.type.toUpperCase(),
                      p.hasContent = !zt.test(p.type),
                      i = p.url.replace($t, ""),
                      p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(It, "+")) : (d = p.url.slice(i.length),
                      p.data && (p.processData || "string" === typeof p.data) && (i += (Ot.test(i) ? "&" : "?") + p.data,
                          delete p.data),
                      !1 === p.cache && (i = i.replace(Wt, "$1"),
                          d = (Ot.test(i) ? "&" : "?") + "_=" + qt.guid++ + d),
                          p.url = i + d),
                  p.ifModified && (E.lastModified[i] && C.setRequestHeader("If-Modified-Since", E.lastModified[i]),
                  E.etag[i] && C.setRequestHeader("If-None-Match", E.etag[i])),
                  (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && C.setRequestHeader("Content-Type", p.contentType),
                      C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Yt + "; q=0.01" : "") : p.accepts["*"]),
                      p.headers)
                    C.setRequestHeader(f, p.headers[f]);
                  if (p.beforeSend && (!1 === p.beforeSend.call(h, C, p) || l))
                    return C.abort();
                  if (T = "abort",
                      m.add(p.complete),
                      C.done(p.success),
                      C.fail(p.error),
                      r = Qt(Xt, p, t, C),
                      r) {
                    if (C.readyState = 1,
                    c && g.trigger("ajaxSend", [C, p]),
                        l)
                      return C;
                    p.async && p.timeout > 0 && (s = n.setTimeout((function() {
                          C.abort("timeout")
                        }
                    ), p.timeout));
                    try {
                      l = !1,
                          r.send(x, k)
                    } catch (S) {
                      if (l)
                        throw S;
                      k(-1, S)
                    }
                  } else
                    k(-1, "No Transport");
                  function k(e, t, a, u) {
                    var f, d, x, b, w, T = t;
                    l || (l = !0,
                    s && n.clearTimeout(s),
                        r = void 0,
                        o = u || "",
                        C.readyState = e > 0 ? 4 : 0,
                        f = e >= 200 && e < 300 || 304 === e,
                    a && (b = Zt(p, C, a)),
                    !f && E.inArray("script", p.dataTypes) > -1 && (p.converters["text script"] = function() {}
                    ),
                        b = en(p, b, C, f),
                        f ? (p.ifModified && (w = C.getResponseHeader("Last-Modified"),
                        w && (E.lastModified[i] = w),
                            w = C.getResponseHeader("etag"),
                        w && (E.etag[i] = w)),
                            204 === e || "HEAD" === p.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = b.state,
                                d = b.data,
                                x = b.error,
                                f = !x)) : (x = T,
                        !e && T || (T = "error",
                        e < 0 && (e = 0))),
                        C.status = e,
                        C.statusText = (t || T) + "",
                        f ? v.resolveWith(h, [d, T, C]) : v.rejectWith(h, [C, T, x]),
                        C.statusCode(y),
                        y = void 0,
                    c && g.trigger(f ? "ajaxSuccess" : "ajaxError", [C, p, f ? d : x]),
                        m.fireWith(h, [C, T]),
                    c && (g.trigger("ajaxComplete", [C, p]),
                    --E.active || E.event.trigger("ajaxStop")))
                  }
                  return C
                },
                getJSON: function(e, t, n) {
                  return E.get(e, t, n, "json")
                },
                getScript: function(e, t) {
                  return E.get(e, void 0, t, "script")
                }
              }),
              E.each(["get", "post"], (function(e, t) {
                    E[t] = function(e, n, r, i) {
                      return y(n) && (i = i || r,
                          r = n,
                          n = void 0),
                          E.ajax(E.extend({
                            url: e,
                            type: t,
                            dataType: i,
                            data: n,
                            success: r
                          }, E.isPlainObject(e) && e))
                    }
                  }
              )),
              E.ajaxPrefilter((function(e) {
                    var t;
                    for (t in e.headers)
                      "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
                  }
              )),
              E._evalUrl = function(e, t, n) {
                return E.ajax({
                  url: e,
                  type: "GET",
                  dataType: "script",
                  cache: !0,
                  async: !1,
                  global: !1,
                  converters: {
                    "text script": function() {}
                  },
                  dataFilter: function(e) {
                    E.globalEval(e, t, n)
                  }
                })
              }
              ,
              E.fn.extend({
                wrapAll: function(e) {
                  var t;
                  return this[0] && (y(e) && (e = e.call(this[0])),
                      t = E(e, this[0].ownerDocument).eq(0).clone(!0),
                  this[0].parentNode && t.insertBefore(this[0]),
                      t.map((function() {
                            var e = this;
                            while (e.firstElementChild)
                              e = e.firstElementChild;
                            return e
                          }
                      )).append(this)),
                      this
                },
                wrapInner: function(e) {
                  return y(e) ? this.each((function(t) {
                        E(this).wrapInner(e.call(this, t))
                      }
                  )) : this.each((function() {
                        var t = E(this)
                            , n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e)
                      }
                  ))
                },
                wrap: function(e) {
                  var t = y(e);
                  return this.each((function(n) {
                        E(this).wrapAll(t ? e.call(this, n) : e)
                      }
                  ))
                },
                unwrap: function(e) {
                  return this.parent(e).not("body").each((function() {
                        E(this).replaceWith(this.childNodes)
                      }
                  )),
                      this
                }
              }),
              E.expr.pseudos.hidden = function(e) {
                return !E.expr.pseudos.visible(e)
              }
              ,
              E.expr.pseudos.visible = function(e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
              }
              ,
              E.ajaxSettings.xhr = function() {
                try {
                  return new n.XMLHttpRequest
                } catch (e) {}
              }
          ;
          var tn = {
            0: 200,
            1223: 204
          }
              , nn = E.ajaxSettings.xhr();
          m.cors = !!nn && "withCredentials"in nn,
              m.ajax = nn = !!nn,
              E.ajaxTransport((function(e) {
                    var t, r;
                    if (m.cors || nn && !e.crossDomain)
                      return {
                        send: function(i, o) {
                          var a, s = e.xhr();
                          if (s.open(e.type, e.url, e.async, e.username, e.password),
                              e.xhrFields)
                            for (a in e.xhrFields)
                              s[a] = e.xhrFields[a];
                          for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
                          e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"),
                              i)
                            s.setRequestHeader(a, i[a]);
                          t = function(e) {
                            return function() {
                              t && (t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null,
                                  "abort" === e ? s.abort() : "error" === e ? "number" !== typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(tn[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" !== typeof s.responseText ? {
                                    binary: s.response
                                  } : {
                                    text: s.responseText
                                  }, s.getAllResponseHeaders()))
                            }
                          }
                              ,
                              s.onload = t(),
                              r = s.onerror = s.ontimeout = t("error"),
                              void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
                                4 === s.readyState && n.setTimeout((function() {
                                      t && r()
                                    }
                                ))
                              }
                              ,
                              t = t("abort");
                          try {
                            s.send(e.hasContent && e.data || null)
                          } catch (u) {
                            if (t)
                              throw u
                          }
                        },
                        abort: function() {
                          t && t()
                        }
                      }
                  }
              )),
              E.ajaxPrefilter((function(e) {
                    e.crossDomain && (e.contents.script = !1)
                  }
              )),
              E.ajaxSetup({
                accepts: {
                  script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                  script: /\b(?:java|ecma)script\b/
                },
                converters: {
                  "text script": function(e) {
                    return E.globalEval(e),
                        e
                  }
                }
              }),
              E.ajaxPrefilter("script", (function(e) {
                    void 0 === e.cache && (e.cache = !1),
                    e.crossDomain && (e.type = "GET")
                  }
              )),
              E.ajaxTransport("script", (function(e) {
                    var t, n;
                    if (e.crossDomain || e.scriptAttrs)
                      return {
                        send: function(r, i) {
                          t = E("<script>").attr(e.scriptAttrs || {}).prop({
                            charset: e.scriptCharset,
                            src: e.url
                          }).on("load error", n = function(e) {
                                t.remove(),
                                    n = null,
                                e && i("error" === e.type ? 404 : 200, e.type)
                              }
                          ),
                              b.head.appendChild(t[0])
                        },
                        abort: function() {
                          n && n()
                        }
                      }
                  }
              ));
          var rn = []
              , on = /(=)\?(?=&|$)|\?\?/;
          E.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
              var e = rn.pop() || E.expando + "_" + qt.guid++;
              return this[e] = !0,
                  e
            }
          }),
              E.ajaxPrefilter("json jsonp", (function(e, t, r) {
                    var i, o, a, s = !1 !== e.jsonp && (on.test(e.url) ? "url" : "string" === typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && on.test(e.data) && "data");
                    if (s || "jsonp" === e.dataTypes[0])
                      return i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                          s ? e[s] = e[s].replace(on, "$1" + i) : !1 !== e.jsonp && (e.url += (Ot.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                          e.converters["script json"] = function() {
                            return a || E.error(i + " was not called"),
                                a[0]
                          }
                          ,
                          e.dataTypes[0] = "json",
                          o = n[i],
                          n[i] = function() {
                            a = arguments
                          }
                          ,
                          r.always((function() {
                                void 0 === o ? E(n).removeProp(i) : n[i] = o,
                                e[i] && (e.jsonpCallback = t.jsonpCallback,
                                    rn.push(i)),
                                a && y(o) && o(a[0]),
                                    a = o = void 0
                              }
                          )),
                          "script"
                  }
              )),
              m.createHTMLDocument = function() {
                var e = b.implementation.createHTMLDocument("").body;
                return e.innerHTML = "<form></form><form></form>",
                2 === e.childNodes.length
              }(),
              E.parseHTML = function(e, t, n) {
                return "string" !== typeof e ? [] : ("boolean" === typeof t && (n = t,
                    t = !1),
                t || (m.createHTMLDocument ? (t = b.implementation.createHTMLDocument(""),
                    r = t.createElement("base"),
                    r.href = b.location.href,
                    t.head.appendChild(r)) : t = b),
                    i = q.exec(e),
                    o = !n && [],
                    i ? [t.createElement(i[1])] : (i = Ee([e], t, o),
                    o && o.length && E(o).remove(),
                        E.merge([], i.childNodes)));
                var r, i, o
              }
              ,
              E.fn.load = function(e, t, n) {
                var r, i, o, a = this, s = e.indexOf(" ");
                return s > -1 && (r = Et(e.slice(s)),
                    e = e.slice(0, s)),
                    y(t) ? (n = t,
                        t = void 0) : t && "object" === typeof t && (i = "POST"),
                a.length > 0 && E.ajax({
                  url: e,
                  type: i || "GET",
                  dataType: "html",
                  data: t
                }).done((function(e) {
                      o = arguments,
                          a.html(r ? E("<div>").append(E.parseHTML(e)).find(r) : e)
                    }
                )).always(n && function(e, t) {
                  a.each((function() {
                        n.apply(this, o || [e.responseText, t, e])
                      }
                  ))
                }
                ),
                    this
              }
              ,
              E.expr.pseudos.animated = function(e) {
                return E.grep(E.timers, (function(t) {
                      return e === t.elem
                    }
                )).length
              }
              ,
              E.offset = {
                setOffset: function(e, t, n) {
                  var r, i, o, a, s, u, l, c = E.css(e, "position"), f = E(e), d = {};
                  "static" === c && (e.style.position = "relative"),
                      s = f.offset(),
                      o = E.css(e, "top"),
                      u = E.css(e, "left"),
                      l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1,
                      l ? (r = f.position(),
                          a = r.top,
                          i = r.left) : (a = parseFloat(o) || 0,
                          i = parseFloat(u) || 0),
                  y(t) && (t = t.call(e, n, E.extend({}, s))),
                  null != t.top && (d.top = t.top - s.top + a),
                  null != t.left && (d.left = t.left - s.left + i),
                      "using"in t ? t.using.call(e, d) : ("number" === typeof d.top && (d.top += "px"),
                      "number" === typeof d.left && (d.left += "px"),
                          f.css(d))
                }
              },
              E.fn.extend({
                offset: function(e) {
                  if (arguments.length)
                    return void 0 === e ? this : this.each((function(t) {
                          E.offset.setOffset(this, e, t)
                        }
                    ));
                  var t, n, r = this[0];
                  return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(),
                      n = r.ownerDocument.defaultView,
                      {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset
                      }) : {
                    top: 0,
                    left: 0
                  } : void 0
                },
                position: function() {
                  if (this[0]) {
                    var e, t, n, r = this[0], i = {
                      top: 0,
                      left: 0
                    };
                    if ("fixed" === E.css(r, "position"))
                      t = r.getBoundingClientRect();
                    else {
                      t = this.offset(),
                          n = r.ownerDocument,
                          e = r.offsetParent || n.documentElement;
                      while (e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position"))
                        e = e.parentNode;
                      e && e !== r && 1 === e.nodeType && (i = E(e).offset(),
                          i.top += E.css(e, "borderTopWidth", !0),
                          i.left += E.css(e, "borderLeftWidth", !0))
                    }
                    return {
                      top: t.top - i.top - E.css(r, "marginTop", !0),
                      left: t.left - i.left - E.css(r, "marginLeft", !0)
                    }
                  }
                },
                offsetParent: function() {
                  return this.map((function() {
                        var e = this.offsetParent;
                        while (e && "static" === E.css(e, "position"))
                          e = e.offsetParent;
                        return e || ce
                      }
                  ))
                }
              }),
              E.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
              }, (function(e, t) {
                    var n = "pageYOffset" === t;
                    E.fn[e] = function(r) {
                      return Y(this, (function(e, r, i) {
                            var o;
                            if (x(e) ? o = e : 9 === e.nodeType && (o = e.defaultView),
                            void 0 === i)
                              return o ? o[t] : e[r];
                            o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
                          }
                      ), e, r, arguments.length)
                    }
                  }
              )),
              E.each(["top", "left"], (function(e, t) {
                    E.cssHooks[t] = Je(m.pixelPosition, (function(e, n) {
                          if (n)
                            return n = Ge(e, t),
                                Ue.test(n) ? E(e).position()[t] + "px" : n
                        }
                    ))
                  }
              )),
              E.each({
                Height: "height",
                Width: "width"
              }, (function(e, t) {
                    E.each({
                      padding: "inner" + e,
                      content: t,
                      "": "outer" + e
                    }, (function(n, r) {
                          E.fn[r] = function(i, o) {
                            var a = arguments.length && (n || "boolean" !== typeof i)
                                , s = n || (!0 === i || !0 === o ? "margin" : "border");
                            return Y(this, (function(t, n, i) {
                                  var o;
                                  return x(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement,
                                      Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? E.css(t, n, s) : E.style(t, n, i, s)
                                }
                            ), t, a ? i : void 0, a)
                          }
                        }
                    ))
                  }
              )),
              E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
                    E.fn[t] = function(e) {
                      return this.on(t, e)
                    }
                  }
              )),
              E.fn.extend({
                bind: function(e, t, n) {
                  return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                  return this.off(e, null, t)
                },
                delegate: function(e, t, n, r) {
                  return this.on(t, e, n, r)
                },
                undelegate: function(e, t, n) {
                  return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                },
                hover: function(e, t) {
                  return this.mouseenter(e).mouseleave(t || e)
                }
              }),
              E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
                    E.fn[t] = function(e, n) {
                      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                    }
                  }
              ));
          var an = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
          E.proxy = function(e, t) {
            var n, r, i;
            if ("string" === typeof t && (n = e[t],
                t = e,
                e = n),
                y(e))
              return r = u.call(arguments, 2),
                  i = function() {
                    return e.apply(t || this, r.concat(u.call(arguments)))
                  }
                  ,
                  i.guid = e.guid = e.guid || E.guid++,
                  i
          }
              ,
              E.holdReady = function(e) {
                e ? E.readyWait++ : E.ready(!0)
              }
              ,
              E.isArray = Array.isArray,
              E.parseJSON = JSON.parse,
              E.nodeName = L,
              E.isFunction = y,
              E.isWindow = x,
              E.camelCase = K,
              E.type = C,
              E.now = Date.now,
              E.isNumeric = function(e) {
                var t = E.type(e);
                return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              }
              ,
              E.trim = function(e) {
                return null == e ? "" : (e + "").replace(an, "")
              }
              ,
              r = [],
              i = function() {
                return E
              }
                  .apply(t, r),
          void 0 === i || (e.exports = i);
          var sn = n.jQuery
              , un = n.$;
          return E.noConflict = function(e) {
            return n.$ === E && (n.$ = un),
            e && n.jQuery === E && (n.jQuery = sn),
                E
          }
              ,
          "undefined" === typeof o && (n.jQuery = n.$ = E),
              E
        }
    ))
  },
  1276: function(e, t, n) {
    "use strict";
    var r = n("d784")
        , i = n("44e7")
        , o = n("825a")
        , a = n("1d80")
        , s = n("4840")
        , u = n("8aa5")
        , l = n("50c4")
        , c = n("14c3")
        , f = n("9263")
        , d = n("d039")
        , p = [].push
        , h = Math.min
        , g = 4294967295
        , v = !d((function() {
          return !RegExp(g, "y")
        }
    ));
    r("split", 2, (function(e, t, n) {
          var r;
          return r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(e, n) {
                var r = String(a(this))
                    , o = void 0 === n ? g : n >>> 0;
                if (0 === o)
                  return [];
                if (void 0 === e)
                  return [r];
                if (!i(e))
                  return t.call(r, e, o);
                var s, u, l, c = [], d = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), h = 0, v = new RegExp(e.source,d + "g");
                while (s = f.call(v, r)) {
                  if (u = v.lastIndex,
                  u > h && (c.push(r.slice(h, s.index)),
                  s.length > 1 && s.index < r.length && p.apply(c, s.slice(1)),
                      l = s[0].length,
                      h = u,
                  c.length >= o))
                    break;
                  v.lastIndex === s.index && v.lastIndex++
                }
                return h === r.length ? !l && v.test("") || c.push("") : c.push(r.slice(h)),
                    c.length > o ? c.slice(0, o) : c
              }
              : "0".split(void 0, 0).length ? function(e, n) {
                    return void 0 === e && 0 === n ? [] : t.call(this, e, n)
                  }
                  : t,
              [function(t, n) {
                var i = a(this)
                    , o = void 0 == t ? void 0 : t[e];
                return void 0 !== o ? o.call(t, i, n) : r.call(String(i), t, n)
              }
                , function(e, i) {
                var a = n(r, e, this, i, r !== t);
                if (a.done)
                  return a.value;
                var f = o(e)
                    , d = String(this)
                    , p = s(f, RegExp)
                    , m = f.unicode
                    , y = (f.ignoreCase ? "i" : "") + (f.multiline ? "m" : "") + (f.unicode ? "u" : "") + (v ? "y" : "g")
                    , x = new p(v ? f : "^(?:" + f.source + ")",y)
                    , b = void 0 === i ? g : i >>> 0;
                if (0 === b)
                  return [];
                if (0 === d.length)
                  return null === c(x, d) ? [d] : [];
                var w = 0
                    , T = 0
                    , C = [];
                while (T < d.length) {
                  x.lastIndex = v ? T : 0;
                  var k, E = c(x, v ? d : d.slice(T));
                  if (null === E || (k = h(l(x.lastIndex + (v ? 0 : T)), d.length)) === w)
                    T = u(d, T, m);
                  else {
                    if (C.push(d.slice(w, T)),
                    C.length === b)
                      return C;
                    for (var S = 1; S <= E.length - 1; S++)
                      if (C.push(E[S]),
                      C.length === b)
                        return C;
                    T = w = k
                  }
                }
                return C.push(d.slice(w)),
                    C
              }
              ]
        }
    ), !v)
  },
  "14c3": function(e, t, n) {
    var r = n("c6b6")
        , i = n("9263");
    e.exports = function(e, t) {
      var n = e.exec;
      if ("function" === typeof n) {
        var o = n.call(e, t);
        if ("object" !== typeof o)
          throw TypeError("RegExp exec method returned something other than an Object or null");
        return o
      }
      if ("RegExp" !== r(e))
        throw TypeError("RegExp#exec called on incompatible receiver");
      return i.call(e, t)
    }
  },
  1750: function(e, t, n) {
    "use strict";
    var r = n("6c1d")
        , i = n.n(r);
    i.a
  },
  "25f0": function(e, t, n) {
    "use strict";
    var r = n("6eeb")
        , i = n("825a")
        , o = n("d039")
        , a = n("ad6d")
        , s = "toString"
        , u = RegExp.prototype
        , l = u[s]
        , c = o((function() {
          return "/a/b" != l.call({
            source: "a",
            flags: "b"
          })
        }
    ))
        , f = l.name != s;
    (c || f) && r(RegExp.prototype, s, (function() {
          var e = i(this)
              , t = String(e.source)
              , n = e.flags
              , r = String(void 0 === n && e instanceof RegExp && !("flags"in u) ? a.call(e) : n);
          return "/" + t + "/" + r
        }
    ), {
      unsafe: !0
    })
  },
  "44e7": function(e, t, n) {
    var r = n("861d")
        , i = n("c6b6")
        , o = n("b622")
        , a = o("match");
    e.exports = function(e) {
      var t;
      return r(e) && (void 0 !== (t = e[a]) ? !!t : "RegExp" == i(e))
    }
  },
  4699: function(e, t, n) {},
  "56d8": function(e, t, n) {
    "use strict";
    n.r(t);
    var r = function() {
      var e = this
          , t = e.$createElement
          , n = e._self._c || t;
      return n("div", {
        ref: "scroll",
        staticClass: "play-details"
      }, [n("Header"), n("div", {
        staticClass: "scroll"
      }, [n("div", {
        staticClass: "scroll-box"
      }, [e.html ? n("div", {
        staticClass: "library-detail-title"
      }, [n("div", {
        staticClass: "title"
      }, [e._v(e._s(e.videoData.title))]), n("div", {
        staticClass: "library-detail-box"
      }, [n("div", {
        staticClass: "library-detail-icons"
      }, [n("div", e._l(e.videoData.anchors, (function(t, r) {
            return n("router-link", {
              key: r,
              attrs: {
                to: {
                  path: "/anchor/anchor-details/" + t.anchor_id,
                  query: {
                    topheight: e.$route.query.topheight,
                    device: e.$route.query.device
                  }
                }
              }
            }, [n("img", {
              attrs: {
                src: e.CDN.image + t.img,
                lazy: "loaded"
              }
            })])
          }
      )), 1)]), n("div", {
        staticClass: "library-detail-names"
      }, [n("div", {
        staticClass: "names"
      }, e._l(e.videoData.anchors, (function(t, r) {
            return n("span", {
              key: r
            }, [e._v(e._s(t.name + " "))])
          }
      )), 0), n("div", {
        staticClass: "time"
      }, [e._v(" " + e._s(e.videoData.show_time && e.judgmentTime(e.videoData.show_time.replace(/\-/g, "/"))) + " 第" + e._s(e.videoData.date_number) + "期 ")])])])]) : e._e(), n("div", {
        staticClass: "content",
        domProps: {
          innerHTML: e._s(e.renderHTML)
        }
      }), e.ad ? n("div", {
        staticClass: "carousel"
      }, [n("mt-swipe", {
        staticClass: "is-active",
        attrs: {
          showIndicators: !1
        }
      }, [n("mt-swipe-item", [n("div", {
        staticClass: "link",
        on: {
          click: function(t) {
            return e.$openUrl(e.ad)
          }
        }
      }, [n("div", {
        staticClass: "img",
        style: "background-image:url(" + (e.CDN.image + e.ad.thumb) + ")"
      })])])], 1)], 1) : e._e(), e.html ? n("div", {
        staticClass: "operating"
      }, [n("p", {
        staticClass: "read"
      }, [e._v(" 阅读 "), n("span", [e._v(e._s(e.handleMillion(e.views)))])]), n("p", {
        class: ["like", {
          "is-like": e.isLike
        }],
        on: {
          click: e.postLikeVideo
        }
      }, [n("i"), n("span", [e._v(e._s(e.handleMillion(e.likes)))])]), n("p", {
        staticClass: "share",
        on: {
          click: e.postShareVideo
        }
      }, [n("i"), n("span", [e._v(e._s(e.handleMillion(e.shares)))])])]) : e._e()]), e.html ? n("tips-drop", {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: e.tipsDropShow,
          expression: "tipsDropShow"
        }],
        class: [{
          loading: e.tipsDropType
        }],
        attrs: {
          prompt: e.info
        }
      }) : e._e()], 1)], 1)
    }
        , i = []
        , o = (n("99af"),
        n("7db0"),
        n("c975"),
        n("a434"),
        n("d3b7"),
        n("ac1f"),
        n("25f0"),
        n("1276"),
        n("1157"))
        , a = n.n(o)
        , s = n("0418")
        , u = n("76a0")
        , l = n("f20c")
        , c = n("b5f5")
        , f = {
      components: {
        Header: s["a"],
        TipsDrop: c["a"]
      },
      data: function() {
        return {
          anchorListShow: !1,
          active: !1,
          paused: !0,
          videoData: {},
          CDN: {},
          loadVedio: !0,
          tipsDropType: !1,
          tipsDropShow: !0,
          videoPage: 1,
          videoTotalPage: 1,
          videoListData: [],
          views: 0,
          likes: 0,
          shares: 0,
          isLike: !1,
          likesArr: "",
          videoLiseLoding: !1,
          site: {},
          html: !1,
          ad: []
        }
      },
      created: function() {
        var e = this;
        window.addEventListener("message", (function(t) {
              "setHTML" === t.data.type && (e.videoData = {
                content: t.data.data
              })
            }
        )),
        window.self === window.top && (this.html = !0,
            this.init())
      },
      watch: {
        "$route.params": function(e) {
          this.$refs.scroll.scrollTop = 0,
              Object.assign(this.$data, this.$options),
              this.init()
        }
      },
      computed: {
        info: function() {
          return this.$store.state.info.value
        },
        renderHTML: function() {
          var e = a()("<div/>").append(this.videoData.content)
              , t = e.find(".video-iframe");
          return t.length > 0 && t.each((function(e, t) {
                var n = a()(t).attr("src")
                    , r = n.indexOf("/#/")
                    , i = n.substring(r);
                a()(t).attr("src", i)
              }
          )),
              e.html()
        }
      },
      methods: {
        judgmentTime: l["a"].judgmentTime,
        handleMillion: l["a"].handleMillion,
        init: function() {
          var e = this
              , t = this.$route.params.id;
          this.likesArr = this.$cookies.get("likes") || "",
              this.isLike = this.likesArr.toString().indexOf(t) > -1,
              this.$store.dispatch("updateInfo", this),
              this.$api.postSocialPlay({
                id: t
              }),
              this.$api.getLibraryDetail(t).then((function(t) {
                    console.log(t)
                    e.videoData = t.data.data.library || {},
                        e.site = t.data.data.site || {},
                        e.CDN = t.data.cdn,
                        e.ad = t.data.data.ad;
                    var n = e.videoData
                        , r = n.play_time_sgin
                        , i = n.play_time_num_self
                        , o = n.play_time_num_hand
                        , a = n.like_sgin
                        , s = n.like_num_self
                        , u = n.like_num_hand
                        , l = n.share_sgin
                        , c = n.share_num_self
                        , f = n.share_num_hand;
                    e.views = 1 === r ? i : o,
                        e.likes = 1 === a ? s : u,
                        e.shares = 1 === l ? c : f
                  }
              )).catch((function() {
                    Object(u["Toast"])("文章加载失败")
                  }
              ))
        },
        postLikeVideo: function() {
          var e = this
              , t = this.$cookies.get("likes") || "";
          t.indexOf(this.videoData.id) > -1 ? this.$api.postCancelLikeVideo({
            id: this.videoData.id
          }).then((function() {
                for (var n = t.split(","), r = 0; r < n.length; r++) {
                  var i = n[r];
                  e.videoData.id == i && (n.splice(r, 1),
                      e.likesArr = n.toString(),
                      e.$cookies.set("likes", e.likesArr))
                }
                e.isLike = !1,
                    e.likes -= 1,
                    e.likes = e.likes < 0 ? 0 : e.likes
              }
          )).catch((function() {
                Object(u["Toast"])("取消点赞失败")
              }
          )) : this.$api.postLikeVideo({
            id: this.videoData.id
          }).then((function() {
                e.likesArr = "" !== e.likesArr ? e.likesArr + "," + e.videoData.id : e.videoData.id,
                    e.$cookies.set("likes", e.likesArr),
                    e.isLike = !0,
                    e.likes += 1
              }
          )).catch((function() {
                Object(u["Toast"])("点赞失败")
              }
          ))
        },
        postShareVideo: function() {
          var e = this
              , t = this.site.text || ""
              , n = "" == this.site.url || void 0 == this.site.url ? "".concat(window.location.origin, "/#/play-details/").concat(this.videoData.id) : this.site.url;
          n = t + " " + n,
              this.$copyText(n).then((function() {
                    Object(u["Toast"])("复制成功")
                  }
              ), (function() {
                    Object(u["Toast"])("浏览器不支持一键复制")
                  }
              )),
              this.$api.postShareVideo({
                id: this.videoData.id
              }).then((function(t) {
                    t.data.status && e.shares++
                  }
              ))
        }
      }
    }
        , d = f
        , p = (n("1750"),
        n("2877"))
        , h = Object(p["a"])(d, r, i, !1, null, null, null);
    t["default"] = h.exports
  },
  6547: function(e, t, n) {
    var r = n("a691")
        , i = n("1d80")
        , o = function(e) {
      return function(t, n) {
        var o, a, s = String(i(t)), u = r(n), l = s.length;
        return u < 0 || u >= l ? e ? "" : void 0 : (o = s.charCodeAt(u),
            o < 55296 || o > 56319 || u + 1 === l || (a = s.charCodeAt(u + 1)) < 56320 || a > 57343 ? e ? s.charAt(u) : o : e ? s.slice(u, u + 2) : a - 56320 + (o - 55296 << 10) + 65536)
      }
    };
    e.exports = {
      codeAt: o(!1),
      charAt: o(!0)
    }
  },
  "6c1d": function(e, t, n) {},
  "712c": function(e, t, n) {
    e.exports = n.p + "img/ic_logo.778843eb.png"
  },
  "7db0": function(e, t, n) {
    "use strict";
    var r = n("23e7")
        , i = n("b727").find
        , o = n("44d2")
        , a = "find"
        , s = !0;
    a in [] && Array(1)[a]((function() {
          s = !1
        }
    )),
        r({
          target: "Array",
          proto: !0,
          forced: s
        }, {
          find: function(e) {
            return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
          }
        }),
        o(a)
  },
  "8aa5": function(e, t, n) {
    "use strict";
    var r = n("6547").charAt;
    e.exports = function(e, t, n) {
      return t + (n ? r(e, t).length : 1)
    }
  },
  "8c7b": function(e, t, n) {
    "use strict";
    var r = n("4699")
        , i = n.n(r);
    i.a
  },
  9263: function(e, t, n) {
    "use strict";
    var r = n("ad6d")
        , i = n("9f7f")
        , o = RegExp.prototype.exec
        , a = String.prototype.replace
        , s = o
        , u = function() {
      var e = /a/
          , t = /b*/g;
      return o.call(e, "a"),
          o.call(t, "a"),
      0 !== e.lastIndex || 0 !== t.lastIndex
    }()
        , l = i.UNSUPPORTED_Y || i.BROKEN_CARET
        , c = void 0 !== /()??/.exec("")[1]
        , f = u || c || l;
    f && (s = function(e) {
          var t, n, i, s, f = this, d = l && f.sticky, p = r.call(f), h = f.source, g = 0, v = e;
          return d && (p = p.replace("y", ""),
          -1 === p.indexOf("g") && (p += "g"),
              v = String(e).slice(f.lastIndex),
          f.lastIndex > 0 && (!f.multiline || f.multiline && "\n" !== e[f.lastIndex - 1]) && (h = "(?: " + h + ")",
              v = " " + v,
              g++),
              n = new RegExp("^(?:" + h + ")",p)),
          c && (n = new RegExp("^" + h + "$(?!\\s)",p)),
          u && (t = f.lastIndex),
              i = o.call(d ? n : f, v),
              d ? i ? (i.input = i.input.slice(g),
                  i[0] = i[0].slice(g),
                  i.index = f.lastIndex,
                  f.lastIndex += i[0].length) : f.lastIndex = 0 : u && i && (f.lastIndex = f.global ? i.index + i[0].length : t),
          c && i && i.length > 1 && a.call(i[0], n, (function() {
                for (s = 1; s < arguments.length - 2; s++)
                  void 0 === arguments[s] && (i[s] = void 0)
              }
          )),
              i
        }
    ),
        e.exports = s
  },
  "9f7f": function(e, t, n) {
    "use strict";
    var r = n("d039");
    function i(e, t) {
      return RegExp(e, t)
    }
    t.UNSUPPORTED_Y = r((function() {
          var e = i("a", "y");
          return e.lastIndex = 2,
          null != e.exec("abcd")
        }
    )),
        t.BROKEN_CARET = r((function() {
              var e = i("^r", "gy");
              return e.lastIndex = 2,
              null != e.exec("str")
            }
        ))
  },
  a434: function(e, t, n) {
    "use strict";
    var r = n("23e7")
        , i = n("23cb")
        , o = n("a691")
        , a = n("50c4")
        , s = n("7b0b")
        , u = n("65f0")
        , l = n("8418")
        , c = n("1dde")
        , f = Math.max
        , d = Math.min
        , p = 9007199254740991
        , h = "Maximum allowed length exceeded";
    r({
      target: "Array",
      proto: !0,
      forced: !c("splice")
    }, {
      splice: function(e, t) {
        var n, r, c, g, v, m, y = s(this), x = a(y.length), b = i(e, x), w = arguments.length;
        if (0 === w ? n = r = 0 : 1 === w ? (n = 0,
            r = x - b) : (n = w - 2,
            r = d(f(o(t), 0), x - b)),
        x + n - r > p)
          throw TypeError(h);
        for (c = u(y, r),
                 g = 0; g < r; g++)
          v = b + g,
          v in y && l(c, g, y[v]);
        if (c.length = r,
        n < r) {
          for (g = b; g < x - r; g++)
            v = g + r,
                m = g + n,
                v in y ? y[m] = y[v] : delete y[m];
          for (g = x; g > x - r + n; g--)
            delete y[g - 1]
        } else if (n > r)
          for (g = x - r; g > b; g--)
            v = g + r - 1,
                m = g + n - 1,
                v in y ? y[m] = y[v] : delete y[m];
        for (g = 0; g < n; g++)
          y[g + b] = arguments[g + 2];
        return y.length = x - r + n,
            c
      }
    })
  },
  ac1f: function(e, t, n) {
    "use strict";
    var r = n("23e7")
        , i = n("9263");
    r({
      target: "RegExp",
      proto: !0,
      forced: /./.exec !== i
    }, {
      exec: i
    })
  },
  ad6d: function(e, t, n) {
    "use strict";
    var r = n("825a");
    e.exports = function() {
      var e = r(this)
          , t = "";
      return e.global && (t += "g"),
      e.ignoreCase && (t += "i"),
      e.multiline && (t += "m"),
      e.dotAll && (t += "s"),
      e.unicode && (t += "u"),
      e.sticky && (t += "y"),
          t
    }
  },
  b131: function(e, t, n) {
    "use strict";
    var r = n("cb42")
        , i = n.n(r);
    i.a
  },
  b301: function(e, t, n) {
    "use strict";
    var r = n("d039");
    e.exports = function(e, t) {
      var n = [][e];
      return !n || !r((function() {
            n.call(null, t || function() {
              throw 1
            }
                , 1)
          }
      ))
    }
  },
  b5f5: function(e, t, n) {
    "use strict";
    var r = function() {
      var e = this
          , t = e.$createElement
          , n = e._self._c || t;
      return n("div", {
        staticClass: "tips-drop"
      }, [n("div", {
        staticClass: "finish-prompt"
      }, [e._v(e._s(e.prompt))]), n("div", {
        staticClass: "loading-prompt"
      }, [n("spinner", {
        attrs: {
          type: "fading-circle"
        }
      }), n("div", {
        staticClass: "logding-text"
      }, [e._v(" 加载中... ")])], 1)])
    }
        , i = []
        , o = n("76a0")
        , a = {
      props: {
        prompt: {
          type: String
        }
      },
      components: {
        Spinner: o["Spinner"]
      }
    }
        , s = a
        , u = (n("8c7b"),
        n("2877"))
        , l = Object(u["a"])(s, r, i, !1, null, null, null);
    t["a"] = l.exports
  },
  b727: function(e, t, n) {
    var r = n("f8c2")
        , i = n("44ad")
        , o = n("7b0b")
        , a = n("50c4")
        , s = n("65f0")
        , u = [].push
        , l = function(e) {
      var t = 1 == e
          , n = 2 == e
          , l = 3 == e
          , c = 4 == e
          , f = 6 == e
          , d = 5 == e || f;
      return function(p, h, g, v) {
        for (var m, y, x = o(p), b = i(x), w = r(h, g, 3), T = a(b.length), C = 0, k = v || s, E = t ? k(p, T) : n ? k(p, 0) : void 0; T > C; C++)
          if ((d || C in b) && (m = b[C],
              y = w(m, C, x),
              e))
            if (t)
              E[C] = y;
            else if (y)
              switch (e) {
                case 3:
                  return !0;
                case 5:
                  return m;
                case 6:
                  return C;
                case 2:
                  u.call(E, m)
              }
            else if (c)
              return !1;
        return f ? -1 : l || c ? c : E
      }
    };
    e.exports = {
      forEach: l(0),
      map: l(1),
      filter: l(2),
      some: l(3),
      every: l(4),
      find: l(5),
      findIndex: l(6)
    }
  },
  c975: function(e, t, n) {
    "use strict";
    var r = n("23e7")
        , i = n("4d64").indexOf
        , o = n("b301")
        , a = [].indexOf
        , s = !!a && 1 / [1].indexOf(1, -0) < 0
        , u = o("indexOf");
    r({
      target: "Array",
      proto: !0,
      forced: s || u
    }, {
      indexOf: function(e) {
        return s ? a.apply(this, arguments) || 0 : i(this, e, arguments.length > 1 ? arguments[1] : void 0)
      }
    })
  },
  cb42: function(e, t, n) {},
  d784: function(e, t, n) {
    "use strict";
    var r = n("6eeb")
        , i = n("d039")
        , o = n("b622")
        , a = n("9263")
        , s = n("9112")
        , u = o("species")
        , l = !i((function() {
          var e = /./;
          return e.exec = function() {
            var e = [];
            return e.groups = {
              a: "7"
            },
                e
          }
              ,
          "7" !== "".replace(e, "$<a>")
        }
    ))
        , c = function() {
      return "$0" === "a".replace(/./, "$0")
    }()
        , f = !i((function() {
          var e = /(?:)/
              , t = e.exec;
          e.exec = function() {
            return t.apply(this, arguments)
          }
          ;
          var n = "ab".split(e);
          return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
        }
    ));
    e.exports = function(e, t, n, d) {
      var p = o(e)
          , h = !i((function() {
            var t = {};
            return t[p] = function() {
              return 7
            }
                ,
            7 != ""[e](t)
          }
      ))
          , g = h && !i((function() {
            var t = !1
                , n = /a/;
            return "split" === e && (n = {},
                n.constructor = {},
                n.constructor[u] = function() {
                  return n
                }
                ,
                n.flags = "",
                n[p] = /./[p]),
                n.exec = function() {
                  return t = !0,
                      null
                }
                ,
                n[p](""),
                !t
          }
      ));
      if (!h || !g || "replace" === e && (!l || !c) || "split" === e && !f) {
        var v = /./[p]
            , m = n(p, ""[e], (function(e, t, n, r, i) {
              return t.exec === a ? h && !i ? {
                done: !0,
                value: v.call(t, n, r)
              } : {
                done: !0,
                value: e.call(n, t, r)
              } : {
                done: !1
              }
            }
        ), {
          REPLACE_KEEPS_$0: c
        })
            , y = m[0]
            , x = m[1];
        r(String.prototype, e, y),
            r(RegExp.prototype, p, 2 == t ? function(e, t) {
                  return x.call(e, this, t)
                }
                : function(e) {
                  return x.call(e, this)
                }
            )
      }
      d && s(RegExp.prototype[p], "sham", !0)
    }
  },
  f20c: function(e, t, n) {
    "use strict";
    n("99af");
    t["a"] = {
      handleMillion: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "W";
        if (e > 9999) {
          e = Math.floor(e / 1e4 * 10) / 10;
          var n = e + t;
          return n
        }
        return e
      },
      judgmentTime: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date("2020/2/11 00:00");
        e = new Date(e);
        var t = ""
            , n = e.getHours();
        n = n < 10 ? "0" + n : n;
        var r = e.getMinutes();
        r = r < 10 ? "0" + r : r;
        var i = function(e) {
          return new Date("1971/1/1 " + e).getTime()
        }
            , o = function(e, t) {
          var n = i(e) - i(t);
          return n
        }
            , a = function(e, t, n) {
          return o(e, t) >= 0 && o(e, n) <= 0
        };
        return a(n + ":" + r, "00:00", "04:59") ? t = "凌晨" : a(n + ":" + r, "05:00", "05:59") ? t = "清晨" : a(n + ":" + r, "06:00", "08:00") ? t = "早上" : a(n + ":" + r, "08:01", "10:59") ? t = "上午" : a(n + ":" + r, "11:00", "12:59") ? t = "中午" : a(n + ":" + r, "13:00", "17:00") ? t = "下午" : a(n + ":" + r, "17:01", "18:00") ? t = "傍晚" : a(n + ":" + r, "18:01", "23:59") && (t = "晚上"),
            "".concat(e.getMonth() + 1, "月").concat(e.getDate(), "日").concat(t).concat(n, ":").concat(r, " ")
      }
    }
  }
}]);
