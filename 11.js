(function() {
      var fi = {
        15944: function(D, Z, E) {
          "use strict";
          E.d(Z, {
            l: function() {
              return fe
            }
          });
          var Ae = E(1447)
              , fe = new Ae.j({
            runtimeHookKeys: ["render", "rootContainer", "modifyClientRenderOpts", "ssr", "router", "dynamicPublicPath"]
          })
        },
        32489: function(D, Z, E) {
          "use strict";
          var Ae = E(15944)
        },
        4501: function(D, Z, E) {
          "use strict";
          var Ae = {};
          E.r(Ae),
              E.d(Ae, {
                ENTER_FROM: function() {
                  return Xf
                },
                LOG_PASS_THROW_PARAMS: function() {
                  return En
                },
                PREVIOUS_PAGE: function() {
                  return Yf
                }
              });
          var fe = {};
          E.r(fe),
              E.d(fe, {
                APP_ID: function() {
                  return rr
                },
                BASE_NAME: function() {
                  return Bt
                },
                FEELGOOD_APP_KEY: function() {
                  return Ci
                },
                SLARDAR_BID: function() {
                  return Ei
                }
              });
          var ee = {};
          E.r(ee),
              E.d(ee, {
                LOG_CURRENT_PAGE: function() {
                  return _d
                },
                LOG_TRACE: function() {
                  return Ed
                },
                LOG_TRACE_COUNT: function() {
                  return Cd
                },
                LogPageNameList: function() {
                  return Ti
                }
              });
          var Le = {};
          E.r(Le),
              E.d(Le, {
                ERROR_CODE: function() {
                  return he
                },
                genNetError: function() {
                  return zn
                }
              });
          var Be = {};
          E.r(Be),
              E.d(Be, {
                CHANNEL_PC_WEB: function() {
                  return Kn
                },
                COMMON_SEARCH_PARAMS: function() {
                  return He
                },
                DISABLE_SECRET_VIDEO_PARAMS: function() {
                  return zi
                }
              });
          var Re = {};
          E.r(Re),
              E.d(Re, {
                COLOR_PRIMARY: function() {
                  return Ki
                },
                COLOR_TEXT_1: function() {
                  return dt
                },
                COLOR_TEXT_2: function() {
                  return Gn
                },
                COLOR_TEXT_3: function() {
                  return im
                }
              });
          var at = {};
          E.r(at),
              E.d(at, {
                CHANNEL_MENU: function() {
                  return Zn
                },
                CHANNEL_REF: function() {
                  return Fr
                },
                COMMON_CHANNEL_MENU: function() {
                  return $n
                }
              });
          var me = {};
          E.r(me),
              E.d(me, {
                channel: function() {
                  return at
                },
                errorCode: function() {
                  return Le
                },
                serviceParam: function() {
                  return Be
                },
                storage: function() {
                  return ee
                },
                styles: function() {
                  return Re
                },
                url: function() {
                  return Ae
                },
                webapp: function() {
                  return fe
                }
              });
          var er = {};
          E.r(er),
              E.d(er, {
                Context: function() {
                  return it
                },
                effect: function() {
                  return wm
                },
                initialData: function() {
                  return _m
                },
                reducer: function() {
                  return bm
                }
              });
          var Ib = E(36080)
              , mi = E(25368)
              , Pb = E(98534)
              , xb = E(13944)
              , Ob = E(71090)
              , Rb = E(44097)
              , tr = E(1447)
              , Pt = E(15944)
              , Tb = E(99275)
              , kb = E(55951)
              , Nb = E(46816)
              , Lb = E(90417)
              , Fb = E(90953)
              , Mb = E(65050)
              , Bb = E(94067)
              , Db = E(86714)
              , jb = E(22584)
              , Ub = E(16037)
              , a = E(28342)
              , Hb = E(75662)
              , Wb = E(41479)
              , Vb = E(79051)
              , En = "extra_params"
              , Yf = "previous_page"
              , Xf = "enter_from"
              , vi = ""
              , pi = ""
              , Sr = function() {
            return vi
          }
              , gi = function(r) {
            vi = r
          }
              , $f = function() {
            return pi
          }
              , hi = function(r) {
            pi = r
          }
              , De = E(43390);
          function Zf(e, r) {
            if (!(e instanceof r))
              throw new TypeError("Cannot call a class as a function")
          }
          function yi(e, r) {
            for (var t = 0; t < r.length; t++) {
              var n = r[t];
              n.enumerable = n.enumerable || !1,
                  n.configurable = !0,
              "value"in n && (n.writable = !0),
                  Object.defineProperty(e, n.key, n)
            }
          }
          function Jf(e, r, t) {
            return r && yi(e.prototype, r),
            t && yi(e, t),
                e
          }
          function bi(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
              })),
                  t.push.apply(t, n)
            }
            return t
          }
          function xt(e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r] != null ? arguments[r] : {};
              r % 2 ? bi(Object(t), !0).forEach(function(n) {
                Ir(e, n, t[n])
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : bi(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              })
            }
            return e
          }
          function Ir(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          function wi(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function _i(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      wi(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      wi(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          function zb() {
            return Cn.apply(this, arguments)
          }
          function Cn() {
            return Cn = _i(regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(function(t) {
                for (; ; )
                  switch (t.prev = t.next) {
                    case 0:
                      return t.next = 2,
                          E.e(216).then(E.bind(E, 60323));
                    case 2:
                      return t.abrupt("return", t.sent.default);
                    case 3:
                    case "end":
                      return t.stop()
                  }
              }, e)
            })),
                Cn.apply(this, arguments)
          }
          var je;
          function qf(e) {
            return An.apply(this, arguments)
          }
          function An() {
            return An = _i(regeneratorRuntime.mark(function e(r) {
              var t;
              return regeneratorRuntime.wrap(function(o) {
                for (; ; )
                  switch (o.prev = o.next) {
                    case 0:
                      return o.next = 2,
                          E.e(216).then(E.bind(E, 60323));
                    case 2:
                      t = o.sent,
                          je = t.default,
                          je.init(r),
                          je.start();
                    case 6:
                    case "end":
                      return o.stop()
                  }
              }, e)
            })),
                An.apply(this, arguments)
          }
          function ed(e) {
            je && je.config(e)
          }
          function td(e) {
            var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            hi(e || ""),
                ed({
                  user_unique_id: "12_".concat(e || Sr()),
                  user_id: e || Sr(),
                  user_type: "12",
                  user_is_login: Number(r)
                })
          }
          function rd(e, r) {
            function t(n) {
              var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
              je && je(e[n].eventName, xt(xt(xt({}, e[n].params), r ? r() : {}), o))
            }
            return t
          }
          var ot = function() {
            function e(r) {
              Zf(this, e),
                  Ir(this, "config", {}),
                  Ir(this, "teaConfig", {}),
                  this._initLog(r)
            }
            return Jf(e, [{
              key: "sendLog",
              value: function(t) {
                var n, o, i = this, u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, l = u || {}, s = l.urlParamList, c = (n = this.config[t]) === null || n === void 0 ? void 0 : n.eventName, d = ((o = this.config[t]) === null || o === void 0 ? void 0 : o.params) || {}, f = {};
                try {
                  f = (s || []).reduce(function(p, g) {
                    return g === En || p[g] || (p[g] = i._setpUrlParam(g),
                    i._setpUrlParam(g) || delete p[g]),
                        p
                  }, {})
                } catch (p) {
                  console.error("parse [urlParamList] failed ==> ".concat(p)),
                      f = {}
                }
                var m = {};
                try {
                  m = JSON.parse(this._setpUrlParam(En))
                } catch (p) {}
                delete u.urlParamList;
                var v = xt(xt(xt(xt({}, d), m), f), u || {});
                je && je.config(this.teaConfig),
                je && je(c, v)
              }
            }, {
              key: "setConfig",
              value: function() {
                var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                Object.assign(this.teaConfig, t)
              }
            }, {
              key: "_setpUrlParam",
              value: function(t) {
                var n = (0,
                    De.parse)(window.location.search)[t];
                return n
              }
            }, {
              key: "_initLog",
              value: function(t) {
                this.config = t
              }
            }]),
                e
          }();
          Ir(ot, "logTrace", []);
          var rr = 6383
              , Ei = "douyin_website"
              , Bt = ""
              , Ci = "cbae2a42b075f1dfc39b9e7df764637c821e7bf2";
          function Ai(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
              })),
                  t.push.apply(t, n)
            }
            return t
          }
          function nd(e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r] != null ? arguments[r] : {};
              r % 2 ? Ai(Object(t), !0).forEach(function(n) {
                ad(e, n, t[n])
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ai(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              })
            }
            return e
          }
          function ad(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          function Si(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function od(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      Si(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      Si(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          var Pr, Kb = function() {
            !isInSSR() && Pr && Pr.apply(void 0, arguments)
          };
          function id() {
            return Sn.apply(this, arguments)
          }
          function Sn() {
            return Sn = od(regeneratorRuntime.mark(function e() {
              var r, t, n = arguments;
              return regeneratorRuntime.wrap(function(i) {
                for (; ; )
                  switch (i.prev = i.next) {
                    case 0:
                      return r = n.length > 0 && n[0] !== void 0 ? n[0] : {},
                          i.next = 3,
                          E.e(216).then(E.bind(E, 38668));
                    case 3:
                      t = i.sent,
                          Pr = t.default,
                          Pr("config", nd({
                            bid: Ei
                          }, r));
                    case 6:
                    case "end":
                      return i.stop()
                  }
              }, e)
            })),
                Sn.apply(this, arguments)
          }
          function Dt() {
            return typeof window == "undefined"
          }
          var Gb = E(63963)
              , Qb = E(14252)
              , Yb = E(46221)
              , Xb = E(14347)
              , $b = E(7018)
              , Zb = E(20603);
          function ud(e) {
            return fd(e) || cd(e) || sd(e) || ld()
          }
          function ld() {
            throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function sd(e, r) {
            if (!!e) {
              if (typeof e == "string")
                return In(e, r);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              if (t === "Object" && e.constructor && (t = e.constructor.name),
              t === "Map" || t === "Set")
                return Array.from(e);
              if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return In(e, r)
            }
          }
          function cd(e) {
            if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null)
              return Array.from(e)
          }
          function fd(e) {
            if (Array.isArray(e))
              return In(e)
          }
          function In(e, r) {
            (r == null || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
              n[t] = e[t];
            return n
          }
          var dd = rr;
          function md() {
            var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
            if (window.byted_acrawler)
              try {
                window.byted_acrawler.init({
                  aid: dd,
                  dfp: !1,
                  boe: !1,
                  intercept: !0,
                  enablePathList: ["/aweme/v1/*", "/aweme/v2/*"].concat(ud(e || []))
                })
              } catch (r) {
                console.error("SecSDK failed to init!!!")
              }
          }
          var vd = E(22975)
              , xr = E.n(vd);
          function Ii(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function Or(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      Ii(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      Ii(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          var Rr, pd = xr().create(), Ot = {
            host: null,
            next: null,
            captchaHost: null
          };
          function gd(e, r) {
            return Pn.apply(this, arguments)
          }
          function Pn() {
            return Pn = Or(regeneratorRuntime.mark(function e(r, t) {
              var n, o, i, u = arguments;
              return regeneratorRuntime.wrap(function(s) {
                for (; ; )
                  switch (s.prev = s.next) {
                    case 0:
                      return n = u.length > 2 && u[2] !== void 0 ? u[2] : null,
                          s.next = 3,
                          E.e(216).then(E.bind(E, 15800));
                    case 3:
                      o = s.sent,
                          i = o.SsoInterfaceSdk,
                      Rr || (Rr = new i({
                        aid: rr,
                        isOversea: !1,
                        isBoe: !0,
                        region: "cn",
                        appName: "\u6296\u97F3 Web \u7AD9",
                        host: r,
                        printLog: !0
                      })),
                          Ot.host = r,
                          Ot.next = t,
                          Ot.captchaHost = n;
                    case 9:
                    case "end":
                      return s.stop()
                  }
              }, e)
            })),
                Pn.apply(this, arguments)
          }
          function Jb() {
            return Rr
          }
          function qb() {
            return xn.apply(this, arguments)
          }
          function xn() {
            return xn = Or(regeneratorRuntime.mark(function e() {
              return regeneratorRuntime.wrap(function(t) {
                for (; ; )
                  switch (t.prev = t.next) {
                    case 0:
                      return t.next = 2,
                          Rr.login.checkLogin({
                            service: Ot.host
                          });
                    case 2:
                      return t.abrupt("return", t.sent);
                    case 3:
                    case "end":
                      return t.stop()
                  }
              }, e)
            })),
                xn.apply(this, arguments)
          }
          function Pi(e) {
            return On.apply(this, arguments)
          }
          function On() {
            return On = Or(regeneratorRuntime.mark(function e(r) {
              var t, n, o;
              return regeneratorRuntime.wrap(function(u) {
                for (; ; )
                  switch (u.prev = u.next) {
                    case 0:
                      t = encodeURIComponent(r || "".concat(window.location.origin).concat(window.location.pathname)),
                          n = encodeURIComponent("https://".concat(location.hostname, "/passport/web/logout/?next=").concat(t)),
                          o = "https://sso.douyin.com/logout/?service=".concat(n, "&aid=6383"),
                          location.href = o;
                    case 4:
                    case "end":
                      return u.stop()
                  }
              }, e)
            })),
                On.apply(this, arguments)
          }
          function e3() {
            return Rn.apply(this, arguments)
          }
          function Rn() {
            return Rn = Or(regeneratorRuntime.mark(function e() {
              var r;
              return regeneratorRuntime.wrap(function(n) {
                for (; ; )
                  switch (n.prev = n.next) {
                    case 0:
                      return n.next = 2,
                          pd({
                            url: "https://www.douyin.com/api/user/registerWebId",
                            method: "GET",
                            baseURL: origin,
                            headers: {
                              "Content-Type": "application/json",
                              withCredentials: !0
                            }
                          });
                    case 2:
                      r = n.sent;
                    case 3:
                    case "end":
                      return n.stop()
                  }
              }, e)
            })),
                Rn.apply(this, arguments)
          }
          function xi(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function hd(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      xi(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      xi(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          var Oi = {
            router: {
              type: "browser",
              basename: Bt
            },
            render: function() {
              var e = hd(regeneratorRuntime.mark(function t(n) {
                return regeneratorRuntime.wrap(function(i) {
                  for (; ; )
                    switch (i.prev = i.next) {
                      case 0:
                        if (Dt()) {
                          i.next = 9;
                          break
                        }
                        return md(),
                            i.next = 4,
                            gd("https://sso.douyin.com", "https://www.douyin.com");
                      case 4:
                        return i.next = 6,
                            qf({
                              app_id: rr,
                              channel: "cn"
                            });
                      case 6:
                        return document.cookie = "douyin.com",
                            i.next = 9,
                            id();
                      case 9:
                        n();
                      case 10:
                      case "end":
                        return i.stop()
                    }
                }, t)
              }));
              function r(t) {
                return e.apply(this, arguments)
              }
              return r
            }(),
            rootContainer: function(r) {
              return a.createElement(a.Fragment, null, r)
            },
            ssr: {
              helmet: !0
            }
          };
          Pt.l.register({
            apply: Oi,
            path: "/src/app.tsx"
          });
          var t3 = E(52223)
              , r3 = E(72302)
              , yd = Pt.l.applyPlugins({
            key: "dynamicPublicPath",
            type: tr.T.modify,
            initialValue: []
          })
              , Ri = Object.values(yd).join("");
          Ri && (E.p = Ri);
          var bd = E(67204), wd = E(41476), Ue = E(1851), n3 = E(57657), Tn = E(67365), a3 = E(90388), o3 = E(38976), _d = "LOG_CURRENT_PAGE", Ti = ["main_page", "video_detail", "personal_homepage", "others_homepage", "search_result"], Ed = "LOG_TRACE", Cd = 20, Tr;
          function jt(e) {
            Tr = e
          }
          function X() {
            return Tr
          }
          function kn() {
            if (Tr === "search_result") {
              var e = (0,
                  De.parse)(window.location.search).enter_from;
              return Ti.includes(e) ? e : "search_result"
            }
            return Tr
          }
          function Ad(e) {
            var r = e.success
                , t = e.host
                , n = e.next
                , o = e.ScanCodeDescription
                , i = e.enterMethod;
            return {
              appName: "\u6296\u97F3 Web \u7AD9",
              aid: 6383,
              teaConfig: {
                appId: 6383,
                config: {
                  evtParams: {
                    page_type: X() || "",
                    enter_method: i || "",
                    enter_from: kn() || ""
                  }
                }
              },
              isOversea: !1,
              globalMobileSupport: !0,
              region: "cn",
              scope: "sso",
              host: t || Ot.host || "https://sso.douyin.com",
              next: n || Ot.next || "https://www.douyin.com/",
              captchaHost: Ot.captchaHost,
              loginType: ["LOGIN_MOBILE_CODE"],
              ScanCodeDescription: o,
              bindConflictType: "create_account",
              rememberPwd: !0,
              textConfig: {
                mobileCodeLoginText: {
                  title: "\u9A8C\u8BC1\u7801\u767B\u5F55",
                  mobilePlaceholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7",
                  codePlaceholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",
                  buttonText: "\u767B\u5F55"
                },
                scanCodeLoginText: {
                  refreshCode: "\u4E8C\u7EF4\u7801\u5DF2\u5931\u6548",
                  getCodeFailed: "\u4E8C\u7EF4\u7801\u5DF2\u5931\u6548",
                  refreshBtnText: "\u70B9\u51FB\u5237\u65B0",
                  codeFailedBtnText: "\u70B9\u51FB\u5237\u65B0"
                },
                passwordResetText: {
                  newPwdPlaceholder: "\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801",
                  confirmPwdPlaceholder: "\u786E\u8BA4\u5BC6\u7801",
                  codePlaceholder: "\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"
                },
                bindConflictText: {
                  title: "",
                  description: "\u68C0\u6D4B\u5230\u6296\u97F3\u6388\u6743\u7684\u624B\u673A\u53F7\u6CE8\u518C\u7684\u897F\u74DC\u5E10\u53F7\u5DF2\u7ED1\u5B9A\u53E6\u4E00\u4E2A\u6296\u97F3\u5E10\u53F7\u201C{aweme_conflict_name}\u201D\uFF0C\u5B58\u5728\u7ED1\u5B9A\u51B2\u7A81\uFF0C\u8BF7\u5728\u4E0B\u65B9\u9009\u62E9\u89E3\u51B3\u65B9\u5F0F",
                  loginBtnText: "\u6362\u7ED1\u5E76\u767B\u5F55",
                  unbindText: "\u89E3\u9664\u7ED1\u5B9A",
                  backToLogin: "\u8FD4\u56DE\u91CD\u65B0\u767B\u5F55"
                },
                extraText: {
                  otherLoginText: "\u5176\u4ED6\u65B9\u5F0F\uFF1A"
                }
              },
              unionLoginPanel: !0,
              linkAreaPosition: "top",
              linkList: [{
                key: "login_mobile_code",
                existOn: ["LOGIN_ACCOUNT_PWD"],
                text: "\u9A8C\u8BC1\u7801\u767B\u5F55",
                type: "page",
                clickToPage: "LOGIN_MOBILE_CODE"
              }, {
                key: "login",
                existOn: ["PASSWORD_RESET"],
                text: "\u8FD4\u56DE\u767B\u5F55",
                type: "page",
                clickToPage: "LOGIN_ACCOUNT_PWD"
              }],
              accountType: ["email", "mobile"],
              success: r,
              confirm: [{
                text: "\u670D\u52A1\u534F\u8BAE",
                url: "https://www.douyin.com/agreements/?id=6773906068725565448"
              }, {
                text: "\u9690\u79C1\u6761\u6B3E",
                url: "https://www.douyin.com/agreements/?id=6773901168964798477"
              }],
              onPageChange: function(l) {
                console.log("onPageChange", l)
              },
              onPageBeforeChange: function(l) {
                console.log("onPageBeforeChange", l)
              }
            }
          }
          var ki;
          function Nn() {
            return Nn = Object.assign || function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }
                ,
                Nn.apply(this, arguments)
          }
          function Sd(e) {
            return a.createElement("svg", Nn({
              width: 36,
              height: 36,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, e), ki || (ki = a.createElement("path", {
              d: "M22.133 23.776a1.342 1.342 0 101.898-1.898l-4.112-4.113 4.112-4.112a1.342 1.342 0 00-1.898-1.898l-4.112 4.112-4.113-4.112a1.342 1.342 0 10-1.898 1.898l4.113 4.112-4.113 4.113a1.342 1.342 0 001.898 1.898l4.113-4.113 4.112 4.113z",
              fill: "#0A0C20"
            })))
          }
          var Id = Sd
              , i3 = E(64906);
          function Ni(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
              })),
                  t.push.apply(t, n)
            }
            return t
          }
          function Ln(e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r] != null ? arguments[r] : {};
              r % 2 ? Ni(Object(t), !0).forEach(function(n) {
                Pd(e, n, t[n])
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ni(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              })
            }
            return e
          }
          function Pd(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          function Li(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function xd(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      Li(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      Li(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          var Od = function() {
            return a.createElement("div", {
              className: "web-login-scan-desc"
            }, a.createElement("p", null, "\u6253\u5F00\u6296\u97F3APP \u626B\u63CF\u4E8C\u7EF4\u7801"), a.createElement("p", null, " \u70B9\u51FB\u300C\u9996\u9875\u300D-\u300C\u641C\u7D22\u300D-\u300C\u626B\u4E00\u626B\u300D"))
          };
          function Rd(e) {
            var r = e.config
                , t = e.destory
                , n = (0,
                a.useRef)(null)
                , o = function() {
              var l;
              (l = n.current) === null || l === void 0 || l.call(n),
              t == null || t()
            }
                , i = a.useCallback(function() {
              var u = xd(regeneratorRuntime.mark(function l(s) {
                var c, d, f;
                return regeneratorRuntime.wrap(function(v) {
                  for (; ; )
                    switch (v.prev = v.next) {
                      case 0:
                        if (s) {
                          v.next = 2;
                          break
                        }
                        return v.abrupt("return");
                      case 2:
                        return v.next = 4,
                            E.e(216).then(E.bind(E, 29333));
                      case 4:
                        d = v.sent.default,
                            f = new d(Ln(Ln({}, r), {}, {
                              success: function(g) {
                                f.checkLogin().then(function(h) {
                                  g != null && g.redirect_url ? xr().get(g == null ? void 0 : g.redirect_url).then(function(y) {
                                    var b;
                                    r == null || (b = r.success) === null || b === void 0 || b.call(r)
                                  }).catch(function(y) {
                                    o()
                                  }) : o()
                                }).catch(function(h) {
                                  console.log("initAccount error", h)
                                }).finally(function() {
                                  o()
                                })
                              },
                              ele: s
                            })),
                            n.current = f.init(),
                            f.setTeaConfig(Ln({}, r == null || (c = r.teaConfig) === null || c === void 0 ? void 0 : c.config));
                      case 8:
                      case "end":
                        return v.stop()
                    }
                }, l)
              }));
              return function(l) {
                return u.apply(this, arguments)
              }
            }(), []);
            return a.createElement("div", {
              className: "account-container",
              onClick: function(l) {
                o()
              }
            }, a.createElement("div", {
              ref: i,
              onClick: function(l) {
                l.stopPropagation()
              }
            }), a.createElement("div", {
              className: "account-close"
            }, a.createElement(Id, {
              fill: "#2F3035",
              opacity: "0.4"
            })))
          }
          var Fn = !1;
          function nr(e) {
            var r = e.success
                , t = r === void 0 ? null : r
                , n = e.host
                , o = n === void 0 ? null : n
                , i = e.next
                , u = i === void 0 ? null : i
                , l = e.enterMethod
                , s = l === void 0 ? "" : l;
            if (!Fn) {
              Fn = !0;
              var c = Ad({
                success: t,
                host: o,
                next: u,
                ScanCodeDescription: Od,
                enterMethod: s
              })
                  , d = document.createElement("div");
              document.body.appendChild(d);
              var f = function() {
                document.body.style.overflow = "",
                    Tn.unmountComponentAtNode(d),
                    document.body.removeChild(d)
              };
              return document.body.style.overflow = "hidden",
                  Tn.render(a.createElement(Rd, {
                    config: c,
                    destory: function() {
                      Fn = !1,
                          f()
                    }
                  }), d),
                  f
            }
          }
          var Mn, Td = 3e5, Bn = "AUTO_LOGIN_PROMPT_TIMESTAMP";
          function kd(e) {
            if (!Dt()) {
              var r = function() {
                return window.localStorage.getItem(Bn)
              }
                  , t = function() {
                return new Date().toDateString()
              };
              e ? clearTimeout(Mn) : r() !== t() && !Mn && (Mn = setTimeout(function() {
                var n = t();
                window.localStorage.getItem(Bn) !== n && nr({
                  success: function() {
                    window.location.reload()
                  },
                  enterMethod: "auto"
                }),
                    window.localStorage.setItem(Bn, n)
              }, Td))
            }
          }
          var u3 = E(17490)
              , Nd = E(1909)
              , Ld = [{
            url: "https://www.douyin.com/resource/douyin?source=dou",
            title: "\u5E7F\u544A\u6295\u653E"
          }, {
            url: "https://www.douyin.com/agreements/?id=6773906068725565448",
            title: "\u7528\u6237\u670D\u52A1\u534F\u8BAE"
          }, {
            url: "https://www.douyin.com/agreements/?id=6773901168964798477",
            title: "\u9690\u79C1\u653F\u7B56"
          }, {
            url: "https://www.douyin.com/recovery_account/",
            title: "\u5E10\u53F7\u627E\u56DE"
          }, {
            url: "https://www.douyin.com/aboutus/#contact",
            title: "\u8054\u7CFB\u6211\u4EEC"
          }, {
            url: "https://www.douyin.com/aboutus/#join",
            title: "\u52A0\u5165\u6211\u4EEC"
          }, {
            url: "https://www.douyin.com/business_license/",
            title: "\u8425\u4E1A\u6267\u7167"
          }]
              , Fd = [[{
            url: "https://www.piyao.org.cn/yybgt/index.htm",
            title: "\u7F51\u7EDC\u8C23\u8A00\u66DD\u5149\u53F0 \uFF5C "
          }, {
            url: "https://www.12377.cn/",
            title: "\u7F51\u4E0A\u6709\u5BB3\u4FE1\u606F\u4E3E\u62A5"
          }, {
            title: "\uFF5C \u8FDD\u6CD5\u548C\u4E0D\u826F\u4FE1\u606F\u4E3E\u62A5\uFF1A400-140-2108 \uFF5C \u672A\u6210\u5E74\u4EBA\u5B88\u62A4\u70ED\u7EBF\uFF1A400-9922-556 \uFF5C \u4E3E\u62A5\u90AE\u7BB1\uFF1Ajubao@douyin.com"
          }], [{
            url: "https://beian.miit.gov.cn/",
            title: "\u4EACICP\u590716016397\u53F7-3"
          }, {
            title: "  \uFF5C \u5317\u4EAC\u5FAE\u64AD\u89C6\u754C\u79D1\u6280\u6709\u9650\u516C\u53F8 \uFF5C \u4EACB2-20170846 \uFF5C \u7F51\u7EDC\u6587\u5316\u8BB8\u53EF\u8BC1-\u4EAC\u7F51\u6587-\uFF082016\uFF092282-264\u53F7 \uFF5C  "
          }, {
            icon: Nd,
            url: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002002046",
            title: "\u4EAC\u516C\u7F51\u5B89\u5907 11000002002046\u53F7"
          }]]
              , Ut = {
            footerWrapper: "_475f2998adb4df826fd760aa46e20e9e-scss",
            linkItems: "_2f6bc01d19a092f8f87e229419ced99c-scss",
            linkItem: "_6d301eeb7054f87347c25fcdcdce9fae-scss",
            subLinkItems: "_6a030b36a466765902157948f344b6cf-scss",
            subLinkItem: "_6da824a94ca68395bb18325cb06c0545-scss",
            icon: "a45cef481368a263c9a7cb7a85b22b48-scss"
          };
          function Md(e) {
            var r = e.linkItems
                , t = e.subLinkItems
                , n = r || Ld
                , o = t || Fd;
            return a.createElement("footer", null, a.createElement("div", {
              className: Ut.footerWrapper
            }, a.createElement("div", {
              className: Ut.linkItems
            }, Boolean(n.length) && n.map(function(i, u) {
              return a.createElement("div", {
                className: Ut.linkItem,
                key: u
              }, a.createElement("a", {
                href: i.url,
                target: "_blank",
                rel: "noopener noreferrer"
              }, i.title))
            })), Boolean(o.length) && o.map(function(i, u) {
              return a.createElement("div", {
                key: "group_".concat(u),
                className: Ut.subLinkItems
              }, Boolean(i.length) && i.map(function(l, s) {
                return a.createElement("div", {
                  className: Ut.subLinkItem,
                  key: s
                }, l.icon && a.createElement("img", {
                  className: Ut.icon,
                  src: l.icon
                }), l.url ? a.createElement("a", {
                  href: l.url,
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, l.title) : a.createElement("span", null, l.title))
              }))
            })))
          }
          var Bd = E(52998)
              , j = E.n(Bd)
              , Fi = {
            container: "_9f1b1dc461877bc141b6e50012a13f5d-scss",
            opContainer: "_17a46973a75dd0d51a011c8f093bd3ce-scss"
          }
              , Dd = {
            svg: "b48f34fd3b3d967911ebb9f5e585d007-scss"
          };
          function Dn() {
            return Dn = Object.assign || function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }
                ,
                Dn.apply(this, arguments)
          }
          var jd = function(r) {
            var t = r.src
                , n = r.width
                , o = n === void 0 ? 18 : n
                , i = r.height
                , u = i === void 0 ? 18 : i
                , l = r.color
                , s = r.viewBox
                , c = r.className
                , d = c === void 0 ? "" : c
                , f = l ? {
              fill: l
            } : {};
            return a.createElement(t, Dn({
              className: j()(l ? Dd.svg : "", d),
              width: o,
              height: u,
              viewBox: s || "0 0 36 36"
            }, f))
          }
              , oe = a.memo(jd);
          function kr(e) {
            if (e === window) {
              var r = window.pageXOffset !== void 0
                  , t = (document.compatMode || "") === "CSS1Compat"
                  , n = r ? window.pageXOffset : t ? document.documentElement.scrollLeft : document.body.scrollLeft
                  , o = r ? window.pageYOffset : t ? document.documentElement.scrollTop : document.body.scrollTop;
              return {
                x: n,
                y: o
              }
            } else
              return {
                x: e.scrollLeft,
                y: e.scrollTop
              }
          }
          function jn(e, r, t) {
            var n = kr(e)
                , o = n.x
                , i = n.y
                , u = i - r;
            if (Math.abs(u) < 100 || t <= 0)
              e.scrollTo(o, r);
            else {
              var l = u * 10 / t;
              e.scrollTo(o, i - l),
                  setTimeout(function() {
                    jn(e, r, t - 50)
                  }, 10)
            }
          }
          var Mi;
          function Un() {
            return Un = Object.assign || function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }
                ,
                Un.apply(this, arguments)
          }
          function Ud(e) {
            return a.createElement("svg", Un({
              width: 36,
              height: 36,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, e), Mi || (Mi = a.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M11 8.36c0 .75.609 1.359 1.36 1.359h10.873a1.36 1.36 0 100-2.719H12.36C11.61 7 11 7.609 11 8.36zm.422 9.164a1.44 1.44 0 002.037 2.037l2.973-2.972V27.56a1.44 1.44 0 102.88 0V16.587l1.277 1.277 1.698 1.697a1.44 1.44 0 002.037-2.037l-5.238-5.238a1.715 1.715 0 00-2.426 0l-5.238 5.238z",
              fill: "#0A0C20"
            })))
          }
          var Hd = Ud;
          function Wd(e, r) {
            return Gd(e) || Kd(e, r) || zd(e, r) || Vd()
          }
          function Vd() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function zd(e, r) {
            if (!!e) {
              if (typeof e == "string")
                return Bi(e, r);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              if (t === "Object" && e.constructor && (t = e.constructor.name),
              t === "Map" || t === "Set")
                return Array.from(e);
              if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return Bi(e, r)
            }
          }
          function Bi(e, r) {
            (r == null || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
              n[t] = e[t];
            return n
          }
          function Kd(e, r) {
            var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (t != null) {
              var n = [], o = !0, i = !1, u, l;
              try {
                for (t = t.call(e); !(o = (u = t.next()).done) && (n.push(u.value),
                    !(r && n.length === r)); o = !0)
                  ;
              } catch (s) {
                i = !0,
                    l = s
              } finally {
                try {
                  !o && t.return != null && t.return()
                } finally {
                  if (i)
                    throw l
                }
              }
              return n
            }
          }
          function Gd(e) {
            if (Array.isArray(e))
              return e
          }
          var Qd = jn
              , Yd = kr;
          function Hn(e) {
            var r = e.className
                , t = r === void 0 ? "" : r
                , n = e.showUpIconScrollY
                , o = e.children
                , i = (0,
                a.useState)(!1)
                , u = Wd(i, 2)
                , l = u[0]
                , s = u[1];
            return (0,
                a.useEffect)(function() {
              var c = function() {
                var f = Yd(window)
                    , m = f.y
                    , v = n || window.innerHeight * 3;
                m > v ? !l && s(!0) : l && s(!1)
              };
              return document.addEventListener("scroll", c),
                  function() {
                    document.removeEventListener("scroll", c)
                  }
            }, [n, l]),
                a.createElement("div", {
                  className: j()(Fi.container, t)
                }, o, l && a.createElement("div", {
                  className: j()(Fi.opContainer),
                  onClick: function() {
                    Qd(window, 0, 200)
                  }
                }, a.createElement(oe, {
                  src: Hd,
                  width: 36,
                  height: 36
                })))
          }
          var l3 = E(86171)
              , s3 = E(49906);
          function Nr(e) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Nr = function(t) {
                  return typeof t
                }
                : Nr = function(t) {
                  return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                ,
                Nr(e)
          }
          var ft = []
              , Di = Date.now();
          function c3() {
            ft = []
          }
          function ji(e) {
            var r;
            typeof e == "function" ? (r = ft.findIndex(function(t) {
              return t === e
            }),
                ft = ft.splice(r, 1)) : typeof e == "string" && (r = ft.findIndex(function(t) {
              return t.key === e
            })),
                ft.splice(r, 1)
          }
          function Wn(e) {
            ft.push(e)
          }
          function Ui(e) {
            var r = Math.floor(Date.now() - Di)
                , t = e !== void 0 ? e : document.visibilityState !== "hidden";
            ft.forEach(function(n) {
              typeof n == "function" ? n && n(t, r) : Nr(n) === "object" && n.event && n.event && n.event(t, r)
            }),
                Di = Date.now()
          }
          function Xd(e, r) {
            return qd(e) || Jd(e, r) || Zd(e, r) || $d()
          }
          function $d() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function Zd(e, r) {
            if (!!e) {
              if (typeof e == "string")
                return Hi(e, r);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              if (t === "Object" && e.constructor && (t = e.constructor.name),
              t === "Map" || t === "Set")
                return Array.from(e);
              if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return Hi(e, r)
            }
          }
          function Hi(e, r) {
            (r == null || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
              n[t] = e[t];
            return n
          }
          function Jd(e, r) {
            var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (t != null) {
              var n = [], o = !0, i = !1, u, l;
              try {
                for (t = t.call(e); !(o = (u = t.next()).done) && (n.push(u.value),
                    !(r && n.length === r)); o = !0)
                  ;
              } catch (s) {
                i = !0,
                    l = s
              } finally {
                try {
                  !o && t.return != null && t.return()
                } finally {
                  if (i)
                    throw l
                }
              }
              return n
            }
          }
          function qd(e) {
            if (Array.isArray(e))
              return e
          }
          function em(e) {
            var r = (0,
                a.useState)(!0)
                , t = Xd(r, 2)
                , n = t[0]
                , o = t[1];
            return (0,
                a.useEffect)(function() {
              function i() {
                var u = document.visibilityState !== "hidden";
                Ui(!u),
                e && e(!u),
                    o(u)
              }
              return document.addEventListener("visibilitychange", i),
                  function() {
                    document.removeEventListener("visibilitychange", i)
                  }
            }, [n]),
                {
                  isPageVisible: n
                }
          }
          function Wi(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function tm(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      Wi(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      Wi(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          function rm() {
            var e = document.head || document.getElementsByTagName("head")[0]
                , r = document.createElement("style")
                , t = `
    .athena-survey-widget[data-feelgood-task-id] {
      border-radius: 4px;
    }
    .athena-survey-widget[data-feelgood-task-id] .athena-form {
      color: #6C6F8D;
      font-family: "PingFang SC", "DFPKingGothicGB-Regular", sans-serif !important;
    }
    .athena-survey-widget[data-feelgood-task-id] .fg-rating__center-label {
      color: #6C6F8D;
    }
    .athena-survey-widget[data-feelgood-task-id] .athena-question-template__required::before {
      background: #FE2C55;
    }
    .athena-survey-widget[data-feelgood-task-id] .athena-question-template__title .fg-question__title-rich-text > p {
      color: #0A0C20 !important;
      font-family: "PingFang SC", "DFPKingGothicGB-Medium", sans-serif !important;
      font-weight: 500 !important;
    }
    .athena-survey-widget[data-feelgood-task-id] .athena-checkbox__input--wrapper.checked {
      border-color: #FE2C55 !important;
      background: #FE2C55 !important;
    }
    .athena-survey-widget[data-feelgood-task-id] .athena-checkbox__input--wrapper:hover {
      border-color: #FE2C55 !important;
    }
    .athena-survey-widget[data-feelgood-task-id] .athena-short-answer .athena-short-answer__input {
      border: none;
      background: #F1F2F5;
    }
    .athena-survey-widget[data-feelgood-task-id] .text-area_input > textarea {
      color: #0A0C20;
      background: #F1F2F5;
    }
    .athena-survey-widget[data-feelgood-task-id] button.form-footer__submit {
      background: #FE2C55;
    }
  `;
            r.appendChild(document.createTextNode(t)),
                e.appendChild(r)
          }
          function nm(e) {
            return Vn.apply(this, arguments)
          }
          function Vn() {
            return Vn = tm(regeneratorRuntime.mark(function e(r) {
              var t, n;
              return regeneratorRuntime.wrap(function(i) {
                for (; ; )
                  switch (i.prev = i.next) {
                    case 0:
                      return i.next = 2,
                          E.e(216).then(E.bind(E, 33336));
                    case 2:
                      return t = i.sent,
                          n = t.default,
                          rm(),
                          n.init(r),
                          i.abrupt("return", n);
                    case 7:
                    case "end":
                      return i.stop()
                  }
              }, e)
            })),
                Vn.apply(this, arguments)
          }
          function am(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          var he = {
            ERROR_UNKONWN: -1,
            ERROR_401: -401,
            ERROR_403: -403,
            ERROR_404: -404,
            ERROR_501: -501,
            ERROR_502: -502,
            ERROR_NO_NETWORK: -999,
            ERROR_SERVICE_INTERNAL: 4,
            ERROR_INVALID_PARAM: 5,
            ERROR_USER_UNLOGIN: 8,
            ERROR_USER_FORBIDEN: 9,
            ERROR_USER_NOTFOUND: 3170
          }, Vi = am({
            404: {
              status_code: -404,
              status_msg: "\u670D\u52A1\u5DF2\u4E0B\u7EBF"
            },
            501: {
              status_code: -501,
              status_msg: "\u554A\u54E6\uFF0C\u670D\u52A1\u5668\u6253\u778C\u7761\u4E86"
            },
            502: {
              status_code: -502,
              status_msg: "\u554A\u54E6\uFF0C\u670D\u52A1\u5668\u6253\u778C\u7761\u4E86"
            },
            401: {
              status_code: -401,
              status_msg: "\u670D\u52A1\u672A\u6388\u6743"
            },
            403: {
              status_code: -403,
              status_msg: "\u554A\u54E6\uFF0C\u670D\u52A1\u5668\u6253\u778C\u7761\u4E86"
            }
          }, he.ERROR_NO_NETWORK, {
            status_code: -999,
            status_msg: "\u7F51\u7EDC\u51FA\u73B0\u95EE\u9898"
          }), zn = function(r) {
            return Vi[r] ? Vi[r] : {
              status_code: -1,
              status_msg: "\u554A\u54E6\uFF0C\u670D\u52A1\u5668\u6253\u778C\u7761\u4E86"
            }
          }, ar;
          function Lr(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          var om = "webapp"
              , Kn = "channel_pc_web"
              , He = (ar = {},
              Lr(ar, "device_platform", om),
              Lr(ar, "aid", rr),
              Lr(ar, "channel", Kn),
              ar)
              , zi = Lr({}, "publish_video_strategy_type", 2)
              , dt = "#4F5168"
              , Gn = "#6C6F8D"
              , im = "#A9AAB7"
              , Ki = "#FE2C55"
              , Gi = "live.douyin.com"
              , mt = function(r) {
            return "https://www.douyin.com".concat(Bt).concat(r)
          }
              , Rt = function(r, t) {
            return "".concat(r).concat(t ? "?".concat(t) : "")
          }
              , or = function(r) {
            var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
            return Rt("/video/".concat(r), t)
          }
              , Qi = function(r, t) {
            var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
            return Rt("/collection/".concat(r), "pos=".concat(t, "&").concat(n))
          }
              , ir = function(r) {
            var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
            return mt(or(r, t))
          }
              , Tt = function(r) {
            var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ""
                , n = t ? "".concat(t, "&enter_from=").concat(X()) : "enter_from=".concat(X());
            return mt(Rt("/user/".concat(r), n))
          }
              , vt = function(r) {
            var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
            return mt(Rt("/channel/".concat(r), t))
          }
              , um = function() {
            var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
            return mt(Rt("/hot", r))
          }
              , Yi = function(r) {
            var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
            return mt(Rt("/search/".concat(r || ""), t))
          }
              , Xi = function(r, t) {
            var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
            return mt(Qi(r, t, n))
          }
              , Qn = function() {
            var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
            return mt(Rt("/", r))
          }
              , lm = function() {
            return "https://".concat(Gi)
          }
              , sm = function(r) {
            var t = r.liveBase
                , n = t === void 0 ? Gi : t
                , o = r.uniqueId
                , i = r.shortId;
            return "".concat(lm(), "/").concat(o || i)
          }
              , $i = function(r) {
            var t, n = (0,
                Ue.LX)(r, {
              path: "".concat(Bt, "/video/:id"),
              exact: !0,
              strict: !1
            });
            return n == null || (t = n.params) === null || t === void 0 ? void 0 : t.id
          }
              , Zi = function(r) {
            var t, n = (0,
                Ue.LX)(r, {
              path: "".concat(Bt, "/user/:id"),
              exact: !0,
              strict: !1
            });
            return n == null || (t = n.params) === null || t === void 0 ? void 0 : t.id
          }
              , Yn = function(r) {
            var t, n = (0,
                Ue.LX)(r, {
              path: "".concat(Bt, "/collection/:id"),
              exact: !0,
              strict: !1
            });
            return n == null || (t = n.params) === null || t === void 0 ? void 0 : t.id
          }
              , Xn = function(r) {
            var t;
            return (t = (0,
                De.parse)(r)) === null || t === void 0 ? void 0 : t.pos
          };
          function cm(e) {
            try {
              return decodeURIComponent(e)
            } catch (r) {
              return e
            }
          }
          var $n = [{
            value: "home",
            label: "\u5168\u90E8",
            href: Qn(),
            route: "/",
            target: ""
          }, {
            value: "live",
            label: "\u76F4\u64AD",
            href: mt("/live"),
            route: "",
            target: ""
          }]
              , Zn = [{
            value: "channel_300201",
            label: "\u5A31\u4E50",
            href: vt(300201),
            route: "/channel/300201",
            target: ""
          }, {
            value: "channel_300203",
            label: "\u77E5\u8BC6",
            href: vt(300203),
            route: "/channel/300203",
            target: ""
          }, {
            value: "channel_300206",
            label: "\u4E8C\u6B21\u5143",
            href: vt(300206),
            route: "/channel/300206",
            target: ""
          }, {
            value: "channel_300205",
            label: "\u6E38\u620F",
            href: vt(300205),
            route: "/channel/300205",
            target: ""
          }, {
            value: "channel_300204",
            label: "\u7F8E\u98DF",
            href: vt(300204),
            route: "/channel/300204",
            target: ""
          }, {
            value: "channel_300207",
            label: "\u4F53\u80B2",
            href: vt(300207),
            route: "/channel/300207",
            target: ""
          }, {
            value: "channel_300208",
            label: "\u65F6\u5C1A",
            href: vt(300208),
            route: "/channel/300208",
            target: ""
          }, {
            value: "channel_300209",
            label: "\u97F3\u4E50",
            href: vt(300209),
            route: "/channel/300209",
            target: ""
          }]
              , Fr = {};
          [].concat($n, Zn).map(function(e) {
            Fr[e.value] = e
          });
          function Ji(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function qi(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      Ji(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      Ji(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          function fm(e) {
            var r, t = {
              host: "//verify.snssdk.com/",
              showMode: "mask",
              autoClose: !0
            }, n = {
              commonOptions: {
                aid: me == null || (r = fe) === null || r === void 0 ? void 0 : r.APP_ID,
                did: "0",
                iid: "0"
              },
              captchaOptions: t
            }, o = function() {
              console.log("\u9A8C\u8BC1\u7801sdk\u521D\u59CB\u5316\u6210\u529F")
            }, i = function(l) {
              console.log(l, "\u9A8C\u8BC1\u7801sdk\u521D\u59CB\u5316\u5931\u8D25")
            };
            e.init(n, o, i)
          }
          function Jn(e, r) {
            return qn.apply(this, arguments)
          }
          function qn() {
            return qn = qi(regeneratorRuntime.mark(function e(r, t) {
              var n, o;
              return regeneratorRuntime.wrap(function(u) {
                for (; ; )
                  switch (u.prev = u.next) {
                    case 0:
                      if (n = t.headers["x-vc-bdturing-parameters"],
                          n) {
                        u.next = 3;
                        break
                      }
                      return u.abrupt("return", t);
                    case 3:
                      return u.next = 5,
                          E.e(216).then(E.bind(E, 92106));
                    case 5:
                      return o = u.sent,
                          u.abrupt("return", new Promise(function(l, s) {
                                n = atob(n),
                                    fm(o),
                                    o.render({
                                      verify_data: n,
                                      captchaOptions: {
                                        host: "//verify.snssdk.com/",
                                        successCb: function() {
                                          var c = qi(regeneratorRuntime.mark(function f(m) {
                                            var v;
                                            return regeneratorRuntime.wrap(function(g) {
                                              for (; ; )
                                                switch (g.prev = g.next) {
                                                  case 0:
                                                    return console.log(m, "succ"),
                                                        g.next = 3,
                                                        r.request(t.config);
                                                  case 3:
                                                    v = g.sent,
                                                        l(v);
                                                  case 5:
                                                  case "end":
                                                    return g.stop()
                                                }
                                            }, f)
                                          }));
                                          function d(f) {
                                            return c.apply(this, arguments)
                                          }
                                          return d
                                        }(),
                                        errorCb: function(d) {
                                          console.log(d, "error")
                                        },
                                        closeCb: function() {
                                          console.log("close"),
                                              s(new Error("captcha close"))
                                        }
                                      }
                                    })
                              }
                          ));
                    case 7:
                    case "end":
                      return u.stop()
                  }
              }, e)
            })),
                qn.apply(this, arguments)
          }
          function eu(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
              })),
                  t.push.apply(t, n)
            }
            return t
          }
          function Mr(e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r] != null ? arguments[r] : {};
              r % 2 ? eu(Object(t), !0).forEach(function(n) {
                dm(e, n, t[n])
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : eu(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              })
            }
            return e
          }
          function dm(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          function tu(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function ru(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      tu(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      tu(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          function Br(e) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Br = function(t) {
                  return typeof t
                }
                : Br = function(t) {
                  return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                ,
                Br(e)
          }
          var Ht = xr().create();
          Ht.interceptors.response.use(function(e) {
            if (e.data && Br(e.data) === "object") {
              var r;
              e.data.web_id = e == null || (r = e.headers) === null || r === void 0 ? void 0 : r.cookie_ttwidinfo_webid
            }
            return e
          }),
              Ht.interceptors.request.use(function(e) {
                return e.params.version_code = "160100",
                    e.params.version_name = "16.1.0",
                    e
              });
          function ur(e) {
            return ea.apply(this, arguments)
          }
          function ea() {
            return ea = ru(regeneratorRuntime.mark(function e(r) {
              var t, n, o, i, u, l, s, c, d, f, m, v, p, g, h, y, b, _, A, S, P, I, x = arguments;
              return regeneratorRuntime.wrap(function(C) {
                for (; ; )
                  switch (C.prev = C.next) {
                    case 0:
                      if (t = x.length > 1 && x[1] !== void 0 ? x[1] : {},
                          n = x.length > 2 && x[2] !== void 0 ? x[2] : {},
                          o = x.length > 3 && x[3] !== void 0 ? x[3] : "",
                          i = x.length > 4 && x[4] !== void 0 ? x[4] : null,
                          u = x.length > 5 && x[5] !== void 0 ? x[5] : {},
                          l = u.psm,
                          s = l === void 0 ? "" : l,
                          c = u.cluster,
                          d = c === void 0 ? "" : c,
                          C.prev = 5,
                          !i) {
                        C.next = 19;
                        break
                      }
                      return g = "consul:".concat(s).concat(r, "?").concat((0,
                          De.stringify)(t), "&version_code=160100&version_name=16.1.0"),
                          h = {
                            "content-type": "*/*",
                            "device-platform": "web",
                            "user-agent": i.request.headers["user-agent"],
                            "x-use-ppe": i.request.headers["x-use-ppe"] || "",
                            "x-use-boe": i.request.headers["x-use-boe"] || "",
                            "x-tt-env": i.request.headers["x-tt-env"] || "",
                            referer: ((f = i.request.header) === null || f === void 0 ? void 0 : f.referer) || "https://www.douyin.com/",
                            cookie: (m = i.request.header) === null || m === void 0 ? void 0 : m.cookie
                          },
                          C.next = 11,
                          i.fetch(g, Mr({
                            method: "GET",
                            handleMethod: r,
                            consul: {
                              cluster: d
                            },
                            timeout: 800,
                            headers: Mr({}, h),
                            ctx: {
                              env: i.request.headers["x-tt-env"],
                              handleMethod: r,
                              logId: i.logId
                            }
                          }, n));
                    case 11:
                      return y = C.sent,
                          C.next = 14,
                          y.json();
                    case 14:
                      return b = C.sent,
                      i == null || (v = i.logger) === null || v === void 0 || (p = v.info) === null || p === void 0 || p.call(v, "Fetch Success: ", r),
                          C.abrupt("return", b);
                    case 19:
                      return C.next = 21,
                          Ht(Mr({
                            url: r,
                            method: "GET",
                            baseURL: o,
                            params: t,
                            headers: {
                              "Content-Type": "application/json",
                              withCredentials: !0
                            }
                          }, n));
                    case 21:
                      return _ = C.sent,
                          C.next = 24,
                          Jn(Ht, _);
                    case 24:
                      return A = C.sent,
                          C.abrupt("return", A.data);
                    case 26:
                      C.next = 34;
                      break;
                    case 28:
                      return C.prev = 28,
                          C.t0 = C.catch(5),
                      i && (i == null || (S = i.logger) === null || S === void 0 || (P = S.info) === null || P === void 0 || P.call(S, "Fetch Error: ", r, C.t0 === null || C.t0 === void 0 ? void 0 : C.t0.stack)),
                          console.log("Fetch Error: ", C.t0),
                          C.t0 !== null && C.t0 !== void 0 && C.t0.response ? I = C.t0.response.status : C.t0 !== null && C.t0 !== void 0 && C.t0.request && (I = he.ERROR_NO_NETWORK),
                          C.abrupt("return", zn(I));
                    case 34:
                    case "end":
                      return C.stop()
                  }
              }, e, null, [[5, 28]])
            })),
                ea.apply(this, arguments)
          }
          function f3(e) {
            return ta.apply(this, arguments)
          }
          function ta() {
            return ta = ru(regeneratorRuntime.mark(function e(r) {
              var t, n, o, i, u, l = arguments;
              return regeneratorRuntime.wrap(function(c) {
                for (; ; )
                  switch (c.prev = c.next) {
                    case 0:
                      return t = l.length > 1 && l[1] !== void 0 ? l[1] : {},
                          n = l.length > 2 && l[2] !== void 0 ? l[2] : {},
                          o = l.length > 3 && l[3] !== void 0 ? l[3] : "",
                          c.next = 5,
                          Ht(Mr({
                            url: r,
                            method: "POST",
                            baseURL: o,
                            data: t,
                            headers: {
                              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                            }
                          }, n));
                    case 5:
                      return i = c.sent,
                          c.next = 8,
                          checkCode(Ht, i);
                    case 8:
                      return u = c.sent,
                          c.abrupt("return", u.data);
                    case 10:
                    case "end":
                      return c.stop()
                  }
              }, e)
            })),
                ta.apply(this, arguments)
          }
          function mm(e) {
            return (e || "").replace(/^https?\:/i, "")
          }
          function nu(e, r) {
            var t = {
              statusCode: he.ERROR_UNKONWN
            };
            try {
              t = r && r(e)
            } catch (n) {
              console.error("Pack Error:", n)
            }
            return t
          }
          function vm(e) {
            var r, t = e || {}, n = t.uid, o = t.sec_uid, i = t.short_id, u = t.nickname, l = t.remark_name, s = t.signature, c = t.gender, d = t.avatar_thumb, f = t.follow_status, m = f === void 0 ? 0 : f, v = t.follower_status, p = t.aweme_count, g = p === void 0 ? 0 : p, h = t.following_count, y = h === void 0 ? 0 : h, b = t.follower_count, _ = b === void 0 ? 0 : b, A = t.mplatform_followers_count, S = t.favoriting_count, P = S === void 0 ? 0 : S, I = t.total_favorited, x = I === void 0 ? 0 : I, T = t.unique_id, C = t.enterprise_verify_reason, O = t.custom_verify, k = t.secret, B = k === void 0 ? 0 : k, R = t.user_canceled, F = R === void 0 ? !1 : R, M = t.share_info, L = t.room_id, W = t.is_blocked, N = t.is_block, z = t.favorite_permission, U = t.show_favorite_list;
            return {
              uid: n,
              secUid: o,
              shortId: i,
              nickname: l || u,
              desc: s,
              gender: c,
              avatarUrl: mm(d == null ? void 0 : d.url_list[0]),
              followStatus: m,
              followerStatus: v,
              awemeCount: g,
              followingCount: y,
              followerCount: _,
              mplatformFollowersCount: A,
              favoritingCount: P,
              totalFavorited: x,
              uniqueId: T || i,
              customVerify: O,
              enterpriseVerifyReason: C,
              secret: B,
              userCanceled: F,
              shareQrcodeUrl: (M == null || (r = M.share_qrcode_url) === null || r === void 0 ? void 0 : r.url_list[0]) || "",
              roomId: L,
              isBlocked: W,
              isBlock: N,
              favoritePermission: z,
              showFavoriteList: U
            }
          }
          function au(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
              })),
                  t.push.apply(t, n)
            }
            return t
          }
          function Wt(e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r] != null ? arguments[r] : {};
              r % 2 ? au(Object(t), !0).forEach(function(n) {
                pm(e, n, t[n])
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : au(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              })
            }
            return e
          }
          function pm(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          function ou(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function iu(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      ou(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      ou(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          var uu = He
              , lu = zi
              , su = Kn;
          function cu(e) {
            var r = e.status_code
                , t = e.status_msg
                , n = e.user
                , o = e.log_pb
                , i = e.web_id;
            return i && gi(i),
                {
                  statusCode: r,
                  statusMsg: t,
                  logPb: o,
                  user: vm(n)
                }
          }
          function fu() {
            return ra.apply(this, arguments)
          }
          function ra() {
            return ra = iu(regeneratorRuntime.mark(function e() {
              var r, t, n, o = arguments;
              return regeneratorRuntime.wrap(function(u) {
                for (; ; )
                  switch (u.prev = u.next) {
                    case 0:
                      return r = o.length > 0 && o[0] !== void 0 ? o[0] : null,
                          t = o.length > 1 && o[1] !== void 0 ? o[1] : void 0,
                          u.next = 4,
                          ur("/aweme/v1/web/user/profile/self/", Wt(Wt(Wt({}, uu), lu), {}, {
                            source: su
                          }), {}, void 0, r, t);
                    case 4:
                      return n = u.sent,
                          u.abrupt("return", nu(n, cu));
                    case 6:
                    case "end":
                      return u.stop()
                  }
              }, e)
            })),
                ra.apply(this, arguments)
          }
          function du(e) {
            return na.apply(this, arguments)
          }
          function na() {
            return na = iu(regeneratorRuntime.mark(function e(r) {
              var t, n, o, i = arguments;
              return regeneratorRuntime.wrap(function(l) {
                for (; ; )
                  switch (l.prev = l.next) {
                    case 0:
                      return t = i.length > 1 && i[1] !== void 0 ? i[1] : null,
                          n = i.length > 2 && i[2] !== void 0 ? i[2] : void 0,
                          l.next = 4,
                          ur("/aweme/v1/web/user/profile/other/", Wt(Wt(Wt({}, uu), lu), {}, {
                            source: su,
                            sec_user_id: r
                          }), {}, void 0, t, n);
                    case 4:
                      return o = l.sent,
                          l.abrupt("return", nu(o, cu));
                    case 6:
                    case "end":
                      return l.stop()
                  }
              }, e)
            })),
                na.apply(this, arguments)
          }
          function mu(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function gm(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      mu(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      mu(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          function hm(e) {
            return aa.apply(this, arguments)
          }
          function aa() {
            return aa = gm(regeneratorRuntime.mark(function e(r) {
              var t, n, o, i, u, l;
              return regeneratorRuntime.wrap(function(c) {
                for (; ; )
                  switch (c.prev = c.next) {
                    case 0:
                      if (!r) {
                        c.next = 11;
                        break
                      }
                      return c.next = 3,
                          du(r);
                    case 3:
                      if (t = c.sent,
                          n = t.statusCode,
                          o = t.user,
                          !(n === 0 && o)) {
                        c.next = 10;
                        break
                      }
                      return c.abrupt("return", {
                        user: o
                      });
                    case 10:
                      return c.abrupt("return", {
                        statusCode: n
                      });
                    case 11:
                      return c.next = 13,
                          fu();
                    case 13:
                      if (i = c.sent,
                          u = i.statusCode,
                          l = i.user,
                          !(u === 0 && l)) {
                        c.next = 18;
                        break
                      }
                      return c.abrupt("return", {
                        isLogin: !0,
                        user: l,
                        statusCode: u
                      });
                    case 18:
                      return c.abrupt("return", {
                        isLogin: !1
                      });
                    case 19:
                    case "end":
                      return c.stop()
                  }
              }, e)
            })),
                aa.apply(this, arguments)
          }
          function vu(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function ym(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      vu(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      vu(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          var it = (0,
              a.createContext)(null)
              , bm = {
            setUserInfo: function(r, t) {
              var n;
              return td(t == null || (n = t.userInfo) === null || n === void 0 ? void 0 : n.uid, t == null ? void 0 : t.isLogin),
                  {
                    isLogin: t.isLogin,
                    info: t.userInfo,
                    statusCode: t.statusCode
                  }
            }
          }
              , wm = {
            updateUserInfo: function() {
              var e = ym(regeneratorRuntime.mark(function t(n, o, i) {
                var u, l, s, c;
                return regeneratorRuntime.wrap(function(f) {
                  for (; ; )
                    switch (f.prev = f.next) {
                      case 0:
                        return f.next = 2,
                            hm();
                      case 2:
                        return u = f.sent,
                            l = u.isLogin,
                            s = u.user,
                            c = u.statusCode,
                            o({
                              type: "setUserInfo",
                              payload: {
                                userInfo: s,
                                isLogin: l,
                                statusCode: c
                              }
                            }),
                            f.abrupt("return", {
                              isLogin: l,
                              user: s
                            });
                      case 8:
                      case "end":
                        return f.stop()
                    }
                }, t)
              }));
              function r(t, n, o) {
                return e.apply(this, arguments)
              }
              return r
            }()
          }
              , _m = {
            isLogin: void 0,
            info: {},
            statusCode: 0
          };
          function pu(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function Em(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      pu(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      pu(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          function Cm(e, r) {
            return Pm(e) || Im(e, r) || Sm(e, r) || Am()
          }
          function Am() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function Sm(e, r) {
            if (!!e) {
              if (typeof e == "string")
                return gu(e, r);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              if (t === "Object" && e.constructor && (t = e.constructor.name),
              t === "Map" || t === "Set")
                return Array.from(e);
              if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return gu(e, r)
            }
          }
          function gu(e, r) {
            (r == null || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
              n[t] = e[t];
            return n
          }
          function Im(e, r) {
            var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (t != null) {
              var n = [], o = !0, i = !1, u, l;
              try {
                for (t = t.call(e); !(o = (u = t.next()).done) && (n.push(u.value),
                    !(r && n.length === r)); o = !0)
                  ;
              } catch (s) {
                i = !0,
                    l = s
              } finally {
                try {
                  !o && t.return != null && t.return()
                } finally {
                  if (i)
                    throw l
                }
              }
              return n
            }
          }
          function Pm(e) {
            if (Array.isArray(e))
              return e
          }
          var xm = function(r) {
            return function(t, n) {
              if (!r[n.type])
                throw new Error("No Action Handler:".concat(n.type));
              return r[n.type](t, n.payload)
            }
          };
          function Om(e, r) {
            var t = e.reducer
                , n = e.initialData
                , o = e.effect
                , i = (0,
                a.useReducer)(xm(t), r || n)
                , u = Cm(i, 2)
                , l = u[0]
                , s = u[1];
            return [l, function() {
              var c = Em(regeneratorRuntime.mark(function d(f) {
                return regeneratorRuntime.wrap(function(v) {
                  for (; ; )
                    switch (v.prev = v.next) {
                      case 0:
                        if (o[f.type]) {
                          v.next = 2;
                          break
                        }
                        throw new Error("No Effect Handler:".concat(f.type));
                      case 2:
                        return v.abrupt("return", o[f.type](f, s, l));
                      case 3:
                      case "end":
                        return v.stop()
                    }
                }, d)
              }));
              return function(d) {
                return c.apply(this, arguments)
              }
            }()]
          }
          var Rm = E(49523)
              , pt = E.n(Rm)
              , Tm = Sr
              , km = $f
              , Vt = [];
          function Nm(e) {
            var r, t, n, o, i;
            try {
              var u, l = window.localStorage.getItem(me == null || (u = ee) === null || u === void 0 ? void 0 : u.LOG_TRACE);
              Vt = l ? JSON.parse(l) : []
            } catch (m) {}
            Vt && Vt.length >= (me == null || (r = ee) === null || r === void 0 ? void 0 : r.LOG_TRACE_COUNT) && Vt.shift();
            var s = e == null || (t = e.data) === null || t === void 0 || (n = t.log_pb) === null || n === void 0 ? void 0 : n.impr_id
                , c = e == null || (o = e.config) === null || o === void 0 ? void 0 : o.url
                , d = window.location.href;
            Vt.push({
              time: pt()(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
              wid: Tm(),
              uid: km(),
              logId: s,
              url: c,
              visit: d
            });
            var f = "";
            try {
              f = JSON.stringify(Vt)
            } catch (m) {}
            window.localStorage.setItem(me == null || (i = ee) === null || i === void 0 ? void 0 : i.LOG_TRACE, f)
          }
          var oa = "ies.janus.proxy"
              , ia = "aweme_pc"
              , Lm = E(56879)
              , ua = E.n(Lm);
          function hu(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
              })),
                  t.push.apply(t, n)
            }
            return t
          }
          function Dr(e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r] != null ? arguments[r] : {};
              r % 2 ? hu(Object(t), !0).forEach(function(n) {
                Fm(e, n, t[n])
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : hu(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              })
            }
            return e
          }
          function Fm(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          function yu(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function bu(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      yu(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      yu(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          var lr = xr().create();
          lr.interceptors.request.use(function(e) {
            return e.params || (e.params = {}),
                e.params.version_code = "160100",
                e.params.version_name = "16.1.0",
                e
          });
          function Fe(e) {
            return la.apply(this, arguments)
          }
          function la() {
            return la = bu(regeneratorRuntime.mark(function e(r) {
              var t, n, o, i, u, l, s, c, d, f, m, v, p, g, h, y, b, _, A, S, P, I, x = arguments;
              return regeneratorRuntime.wrap(function(C) {
                for (; ; )
                  switch (C.prev = C.next) {
                    case 0:
                      if (t = x.length > 1 && x[1] !== void 0 ? x[1] : {},
                          n = x.length > 2 ? x[2] : void 0,
                          o = x.length > 3 && x[3] !== void 0 ? x[3] : {},
                          i = o.options,
                          u = i === void 0 ? {} : i,
                          l = o.psm,
                          s = l === void 0 ? oa : l,
                          c = o.cluster,
                          d = c === void 0 ? ia : c,
                          C.prev = 3,
                          !n) {
                        C.next = 17;
                        break
                      }
                      return p = "consul:".concat(s).concat(r, "?").concat(De.stringify(t), "&version_code=160100&version_name=16.1.0"),
                          g = {
                            "content-type": "*/*",
                            "device-platform": "web",
                            "user-agent": n.request.headers["user-agent"],
                            "x-use-ppe": n.request.headers["x-use-ppe"] || "",
                            "x-use-boe": n.request.headers["x-use-boe"] || "",
                            "x-tt-env": n.request.headers["x-tt-env"] || "",
                            referer: ((f = n.request.header) === null || f === void 0 ? void 0 : f.referer) || "https://www.douyin.com/",
                            cookie: (m = n.request.header) === null || m === void 0 ? void 0 : m.cookie
                          },
                          C.next = 9,
                          n.fetch(p, Dr({
                            method: "GET",
                            handleMethod: r,
                            consul: {
                              cluster: d
                            },
                            timeout: 800,
                            cookie: (v = n.request.header) === null || v === void 0 ? void 0 : v.cookie,
                            headers: Dr({}, g),
                            ctx: {
                              env: n.request.headers["x-tt-env"],
                              handleMethod: r,
                              logId: n.request.logId
                            }
                          }, u));
                    case 9:
                      return h = C.sent,
                          C.next = 12,
                          h.text();
                    case 12:
                      return y = C.sent,
                          b = ua().parse(y),
                          C.abrupt("return", b);
                    case 17:
                      return C.next = 19,
                          lr(Dr({
                            url: r,
                            method: "GET",
                            baseURL: origin,
                            params: t,
                            headers: {
                              "Content-Type": "application/json",
                              withCredentials: !0
                            },
                            transformResponse: function(k, B) {
                              if (typeof k == "string")
                                try {
                                  k = ua().parse(k)
                                } catch (R) {
                                  k = JSON.parse(k)
                                }
                              return k
                            }
                          }, u));
                    case 19:
                      return _ = C.sent,
                          C.next = 22,
                          Jn(lr, _);
                    case 22:
                      return A = C.sent,
                          Nm(A),
                          C.abrupt("return", A.data);
                    case 25:
                      C.next = 32;
                      break;
                    case 27:
                      return C.prev = 27,
                          C.t0 = C.catch(3),
                      n && ((P = n.logger) === null || P === void 0 || (I = P.info) === null || I === void 0 || I.call(P, "Fetch Error: ", r, C.t0 === null || C.t0 === void 0 ? void 0 : C.t0.stack)),
                          console.log("Fetch Data Error:", C.t0),
                          C.abrupt("return", zn(C.t0 === null || C.t0 === void 0 || (S = C.t0.response) === null || S === void 0 ? void 0 : S.status));
                    case 32:
                    case "end":
                      return C.stop()
                  }
              }, e, null, [[3, 27]])
            })),
                la.apply(this, arguments)
          }
          function Mm(e) {
            return sa.apply(this, arguments)
          }
          function sa() {
            return sa = bu(regeneratorRuntime.mark(function e(r) {
              var t, n, o, i, u, l = arguments;
              return regeneratorRuntime.wrap(function(c) {
                for (; ; )
                  switch (c.prev = c.next) {
                    case 0:
                      return t = l.length > 1 && l[1] !== void 0 ? l[1] : {},
                          n = l.length > 2 && l[2] !== void 0 ? l[2] : {},
                          o = l.length > 3 && l[3] !== void 0 ? l[3] : "",
                          c.next = 5,
                          lr(Dr({
                            url: r,
                            method: "POST",
                            baseURL: o,
                            data: t,
                            headers: {
                              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
                            }
                          }, n));
                    case 5:
                      return i = c.sent,
                          c.next = 8,
                          Jn(lr, i);
                    case 8:
                      return u = c.sent,
                          c.abrupt("return", u.data);
                    case 10:
                    case "end":
                      return c.stop()
                  }
              }, e)
            })),
                sa.apply(this, arguments)
          }
          var Bm = Le;
          function ca(e) {
            return (e || "").replace(/^https?\:/i, "")
          }
          function Dm(e) {
            return e.kind === "deleted"
          }
          function Te(e, r) {
            var t = {
              statusCode: Bm.ERROR_CODE.ERROR_UNKONWN
            };
            try {
              t = r && r(e)
            } catch (n) {
              console.error("formatJsonResult Error:", n)
            }
            return t
          }
          function sr(e) {
            var r = e.url_list;
            return !Array.isArray(r) || r.length === 0 ? "" : ca(r[0])
          }
          function wu(e) {
            return {
              uid: e.uid,
              secUid: e.sec_uid,
              nickname: e.nickname,
              avatarUri: sr(e.avatar_thumb),
              followerCount: e.follower_count,
              totalFavorited: e.total_favorited,
              followStatus: e.follow_status,
              followerStatus: e.follower_status,
              enterpriseVerifyReason: e.enterprise_verify_reason,
              customVerify: e.custom_verify
            }
          }
          function _u(e) {
            return !e || !Array.isArray(e) ? [] : e.map(function(r) {
              var t = r.start
                  , n = r.end
                  , o = r.type
                  , i = r.hashtag_id
                  , u = i === void 0 ? "" : i
                  , l = r.hashtag_name
                  , s = l === void 0 ? "" : l
                  , c = r.aweme_id
                  , d = c === void 0 ? "" : c
                  , f = r.user_id
                  , m = f === void 0 ? "" : f
                  , v = r.is_commerce
                  , p = v === void 0 ? !1 : v;
              return {
                start: t,
                end: n,
                type: o,
                hashtagId: u,
                hashtagName: s,
                awemeId: d,
                userId: m,
                isCommerce: p
              }
            })
          }
          function d3(e) {
            var r, t, n, o = e.uid, i = e.short_id, u = e.nickname, l = e.signature, s = e.gender, c = e.avatar_thumb, d = e.follow_status, f = d === void 0 ? 0 : d, m = e.aweme_count, v = m === void 0 ? 0 : m, p = e.following_count, g = p === void 0 ? 0 : p, h = e.follower_count, y = h === void 0 ? 0 : h, b = e.favoriting_count, _ = b === void 0 ? 0 : b, A = e.total_favorited, S = A === void 0 ? 0 : A, P = e.unique_id, I = e.enterprise_verify_reason, x = e.custom_verify, T = e.secret, C = T === void 0 ? 0 : T, O = e.user_canceled, k = O === void 0 ? !1 : O, B = e.share_info;
            return {
              uid: o,
              shortId: i,
              nickname: u,
              desc: l,
              gender: s,
              avatarUrl: ca((c == null || (r = c.url_list) === null || r === void 0 ? void 0 : r[0]) || ""),
              followStatus: f,
              awemeCount: v,
              followingCount: g,
              followerCount: y,
              favoritingCount: _,
              totalFavorited: S,
              uniqueId: P || i,
              customVerify: x,
              enterpriseVerifyReason: I,
              secret: C,
              userCanceled: k,
              shareQrcodeUrl: (B == null || (t = B.share_qrcode_url) === null || t === void 0 || (n = t.url_list) === null || n === void 0 ? void 0 : n[0]) || ""
            }
          }
          function jm(e) {
            var r = e || {}
                , t = r.width
                , n = r.height
                , o = r.ratio
                , i = r.duration
                , u = r.play_addr
                , l = r.cover
                , s = r.dynamic_cover
                , c = r.origin_cover;
            return {
              width: t,
              height: n,
              ratio: o,
              duration: i,
              playAddr: ((u == null ? void 0 : u.url_list) || []).map(function(d) {
                return {
                  src: ca(d)
                }
              }),
              cover: l && sr(l),
              dynamicCover: s && sr(s),
              originCover: c && sr(c)
            }
          }
          function Eu(e) {
            var r, t, n, o, i, u, l;
            return {
              cover: (e == null || (r = e.cover_url) === null || r === void 0 || (t = r.url_list) === null || t === void 0 ? void 0 : t[0]) || "",
              mixId: e == null ? void 0 : e.mix_id,
              mixName: e == null ? void 0 : e.mix_name,
              status: (e == null || (n = e.status) === null || n === void 0 ? void 0 : n.status) || -1,
              playVV: e == null || (o = e.statis) === null || o === void 0 ? void 0 : o.play_vv,
              collectVV: e == null || (i = e.statis) === null || i === void 0 ? void 0 : i.collect_vv,
              currentEpisode: e == null || (u = e.statis) === null || u === void 0 ? void 0 : u.current_episode,
              totalEpisode: e == null || (l = e.statis) === null || l === void 0 ? void 0 : l.updated_to_episode
            }
          }
          function Um(e) {
            return e.map(Eu)
          }
          function Cu(e) {
            var r, t, n, o = e.statistics || {}, i = o.comment_count, u = i === void 0 ? 0 : i, l = o.digg_count, s = l === void 0 ? 0 : l, c = o.share_count, d = c === void 0 ? 0 : c, f = o.play_count, m = f === void 0 ? 0 : f, v = e.status || {}, p = v.allow_share, g = p === void 0 ? !0 : p, h = v.in_reviewing, y = h === void 0 ? !1 : h, b = v.is_delete, _ = b === void 0 ? !1 : b, A = v.is_prohibited, S = A === void 0 ? !1 : A, P = v.in_reviewing, I = v.private_status, x = I === void 0 ? 0 : I, T = v.review_result, C = e.share_info || {}, O = C.share_url, k = C.share_link_desc, B = "";
            try {
              B = ua().stringify(e == null ? void 0 : e.impression_data)
            } catch (R) {}
            return {
              awemeId: e.aweme_id,
              awemeType: e.aweme_type,
              groupId: e.group_id,
              authorInfo: wu(e.author),
              desc: e.desc,
              createTime: e.create_time,
              textExtra: _u(e.text_extra),
              userDigged: e.user_digged !== 0,
              video: jm(e.video),
              mixInfo: Eu(e.mix_info),
              isPrivate: Boolean(e.label_private),
              isFriendLimit: Boolean(e.label_friend),
              download: {
                prevent: e.prevent_download,
                url: e == null || (r = e.video) === null || r === void 0 || (t = r.download_addr) === null || t === void 0 || (n = t.url_list) === null || n === void 0 ? void 0 : n[0]
              },
              impressionData: B,
              tag: {
                isTop: Boolean(e == null ? void 0 : e.is_top),
                relationLabels: Boolean(e == null ? void 0 : e.relation_labels),
                isStory: Boolean(e == null ? void 0 : e.is_story),
                hotList: e == null ? void 0 : e.hot_list,
                reviewStatus: T == null ? void 0 : T.review_status,
                inReviewing: P,
                labelFriend: e == null ? void 0 : e.label_friend
              },
              stats: {
                commentCount: u,
                diggCount: s,
                shareCount: d,
                playCount: m
              },
              shareInfo: {
                shareUrl: O,
                shareLinkDesc: k
              },
              status: {
                allowShare: g,
                isReviewing: y,
                isDelete: _,
                isProhibited: S,
                privateStatus: x,
                reviewStatus: T == null ? void 0 : T.review_status
              }
            }
          }
          function cr(e) {
            return (e || []).filter(function(r) {
              return !Dm(r)
            }).map(function(r) {
              return Cu(r)
            })
          }
          function Hm(e) {
            var r = e.log_pb
                , t = e.qrcode_url;
            return {
              logPb: r && JSON.stringify(r),
              qrcodeUrl: t && sr(t)
            }
          }
          function Wm(e) {
            var r, t = e || {}, n = t.short_url_list, o = n && ((r = n[0]) === null || r === void 0 ? void 0 : r.short_url);
            return o
          }
          function Au(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
              })),
                  t.push.apply(t, n)
            }
            return t
          }
          function jr(e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r] != null ? arguments[r] : {};
              r % 2 ? Au(Object(t), !0).forEach(function(n) {
                gt(e, n, t[n])
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Au(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              })
            }
            return e
          }
          function gt(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          function Su(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function Iu(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      Su(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      Su(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          var Pu = He;
          function xu(e) {
            var r, t, n, o, i, u, l;
            return {
              diggCount: e.digg_count,
              cid: e.cid,
              text: e.text,
              textExtra: _u(e.text_extra),
              stickyInfo: {
                url: e == null || (r = e.sticker) === null || r === void 0 || (t = r.static_url) === null || t === void 0 || (n = t.url_list) === null || n === void 0 ? void 0 : n[0],
                height: e == null || (o = e.sticker) === null || o === void 0 || (i = o.static_url) === null || i === void 0 ? void 0 : i.height,
                width: e == null || (u = e.sticker) === null || u === void 0 || (l = u.static_url) === null || l === void 0 ? void 0 : l.width
              },
              user: wu(e.user),
              labelText: e.label_text,
              labelType: e.label_type,
              isTop: e.stick_position,
              labelList: e.label_list || [],
              createTime: e.create_time,
              forwardId: e.forward_id,
              replyTotal: e.reply_comment_total,
              replyToUserId: e.reply_to_reply_id,
              replyToUserName: e.reply_to_username,
              replySecUid: e.reply_to_user_sec_id,
              userDigged: e.user_digged,
              replyComment: (e.reply_comment || []).map(function(s) {
                return xu(s)
              })
            }
          }
          function Ou(e) {
            var r = e.comments
                , t = r === void 0 ? [] : r
                , n = e.status_code
                , o = e.has_more
                , i = o === void 0 ? 0 : o
                , u = e.total
                , l = e.hotsoon_has_more
                , s = e.hotsoon_text
                , c = e.log_pb;
            return {
              statusCode: n,
              hasMore: i !== 0,
              hotsoonHasMore: l,
              hotsoonText: s,
              total: u,
              logPb: c,
              cursor: e.cursor,
              comments: (t || []).map(function(d) {
                return xu(d)
              })
            }
          }
          function fa(e) {
            return da.apply(this, arguments)
          }
          function da() {
            return da = Iu(regeneratorRuntime.mark(function e(r) {
              var t, n, o, i, u, l, s = arguments;
              return regeneratorRuntime.wrap(function(d) {
                for (; ; )
                  switch (d.prev = d.next) {
                    case 0:
                      return n = r.awemeId,
                          o = r.cursor,
                          i = r.count,
                          u = s.length > 1 && s[1] !== void 0 ? s[1] : null,
                          d.next = 4,
                          Fe("/aweme/v1/web/comment/list/", jr(jr({}, Pu), {}, (t = {},
                              gt(t, "aweme_id", n),
                              gt(t, "cursor", o),
                              gt(t, "count", i),
                              t)), u);
                    case 4:
                      return l = d.sent,
                          d.abrupt("return", Te(l, Ou));
                    case 6:
                    case "end":
                      return d.stop()
                  }
              }, e)
            })),
                da.apply(this, arguments)
          }
          function Vm(e) {
            return ma.apply(this, arguments)
          }
          function ma() {
            return ma = Iu(regeneratorRuntime.mark(function e(r) {
              var t, n, o, i, u, l, s, c = arguments;
              return regeneratorRuntime.wrap(function(f) {
                for (; ; )
                  switch (f.prev = f.next) {
                    case 0:
                      return n = r.awemeId,
                          o = r.commentId,
                          i = r.cursor,
                          u = r.count,
                          l = c.length > 1 && c[1] !== void 0 ? c[1] : null,
                          f.next = 4,
                          Fe("/aweme/v1/web/comment/list/reply/", jr(jr({}, Pu), {}, (t = {},
                              gt(t, "item_id", n),
                              gt(t, "comment_id", o),
                              gt(t, "cursor", i),
                              gt(t, "count", u),
                              t)), l);
                    case 4:
                      return s = f.sent,
                          f.abrupt("return", Te(s, Ou));
                    case 6:
                    case "end":
                      return f.stop()
                  }
              }, e)
            })),
                ma.apply(this, arguments)
          }
          function Ru(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
              })),
                  t.push.apply(t, n)
            }
            return t
          }
          function va(e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r] != null ? arguments[r] : {};
              r % 2 ? Ru(Object(t), !0).forEach(function(n) {
                Tu(e, n, t[n])
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ru(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              })
            }
            return e
          }
          function Tu(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          function ku(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function Nu(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      ku(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      ku(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          var Lu = He;
          function zm(e, r) {
            return e || (r ? 0 : he.ERROR_404)
          }
          function Km(e) {
            var r = e.aweme_detail
                , t = e.status_code
                , n = e.log_pb;
            return {
              statusCode: zm(t, r),
              detail: r && Cu(r),
              logPb: n && JSON.stringify(n)
            }
          }
          function Fu(e) {
            return pa.apply(this, arguments)
          }
          function pa() {
            return pa = Nu(regeneratorRuntime.mark(function e(r) {
              var t, n, o, i, u = arguments;
              return regeneratorRuntime.wrap(function(s) {
                for (; ; )
                  switch (s.prev = s.next) {
                    case 0:
                      return t = r.awemeId,
                          n = t === void 0 ? "" : t,
                          o = u.length > 1 && u[1] !== void 0 ? u[1] : null,
                          s.next = 4,
                          Fe("/aweme/v1/web/aweme/detail/", va(va({}, Lu), {}, Tu({}, "aweme_id", n)), o);
                    case 4:
                      return i = s.sent,
                          s.abrupt("return", Te(i, Km));
                    case 6:
                    case "end":
                      return s.stop()
                  }
              }, e)
            })),
                pa.apply(this, arguments)
          }
          function Gm() {
            return ga.apply(this, arguments)
          }
          function ga() {
            return ga = Nu(regeneratorRuntime.mark(function e() {
              var r, t, n = arguments;
              return regeneratorRuntime.wrap(function(i) {
                for (; ; )
                  switch (i.prev = i.next) {
                    case 0:
                      if (r = n.length > 0 && n[0] !== void 0 ? n[0] : "",
                          r) {
                        i.next = 3;
                        break
                      }
                      return i.abrupt("return");
                    case 3:
                      return i.next = 5,
                          Mm("/aweme/v1/web/fancy/qrcode/info/", "schema_type=1&object_id=".concat(r), {
                            params: va({
                              app_name: "aweme"
                            }, Lu)
                          });
                    case 5:
                      return t = i.sent,
                          i.abrupt("return", Te(t, Hm));
                    case 7:
                    case "end":
                      return i.stop()
                  }
              }, e)
            })),
                ga.apply(this, arguments)
          }
          function Mu(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
              })),
                  t.push.apply(t, n)
            }
            return t
          }
          function Ur(e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r] != null ? arguments[r] : {};
              r % 2 ? Mu(Object(t), !0).forEach(function(n) {
                ht(e, n, t[n])
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Mu(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              })
            }
            return e
          }
          function ht(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          function Bu(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function ha(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      Bu(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      Bu(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          var Du = Be
              , ju = Du.COMMON_SEARCH_PARAMS
              , Qm = Du.CHANNEL_PC_WEB;
          function Ym(e) {
            var r = e.aweme_list
                , t = e.has_more
                , n = e.status_code
                , o = e.cursor
                , i = e.log_pb;
            return {
              logPb: i && JSON.stringify(i),
              statusCode: n || 0,
              hasMore: t,
              cursor: o,
              data: cr(r) || []
            }
          }
          function Xm(e) {
            var r = e.mix_infos
                , t = e.has_more
                , n = e.status_code
                , o = e.cursor
                , i = e.total
                , u = e.log_pb;
            return {
              statusCode: n,
              hasMore: t,
              cursor: o,
              total: i,
              logPb: u && JSON.stringify(u),
              data: Um(r || [])
            }
          }
          function ya(e) {
            return ba.apply(this, arguments)
          }
          function ba() {
            return ba = ha(regeneratorRuntime.mark(function e(r) {
              var t, n, o, i, u, l, s, c = arguments;
              return regeneratorRuntime.wrap(function(f) {
                for (; ; )
                  switch (f.prev = f.next) {
                    case 0:
                      return n = r.mixId,
                          o = r.cursor,
                          i = r.count,
                          u = i === void 0 ? 12 : i,
                          l = c.length > 1 && c[1] !== void 0 ? c[1] : null,
                          f.next = 4,
                          Fe("/aweme/v1/web/mix/aweme/", Ur(Ur({}, ju), {}, (t = {},
                              ht(t, "mix_id", n),
                              ht(t, "cursor", o),
                              ht(t, "count", u),
                              t)), l);
                    case 4:
                      return s = f.sent,
                          f.abrupt("return", Te(s, Ym));
                    case 6:
                    case "end":
                      return f.stop()
                  }
              }, e)
            })),
                ba.apply(this, arguments)
          }
          function Uu(e) {
            return wa.apply(this, arguments)
          }
          function wa() {
            return wa = ha(regeneratorRuntime.mark(function e(r) {
              var t, n, o, i, u, l, s, c, d = arguments;
              return regeneratorRuntime.wrap(function(m) {
                for (; ; )
                  switch (m.prev = m.next) {
                    case 0:
                      return n = r.uid,
                          o = r.cursor,
                          i = o === void 0 ? 0 : o,
                          u = r.count,
                          l = u === void 0 ? 12 : u,
                          s = d.length > 1 && d[1] !== void 0 ? d[1] : null,
                          m.next = 4,
                          Fe("/aweme/v1/web/mix/list/", Ur(Ur({}, ju), {}, (t = {},
                              ht(t, "sec_user_id", n),
                              ht(t, "req_from", Qm),
                              ht(t, "cursor", i),
                              ht(t, "count", l),
                              t)), s);
                    case 4:
                      return c = m.sent,
                          m.abrupt("return", Te(c, Xm));
                    case 6:
                    case "end":
                      return m.stop()
                  }
              }, e)
            })),
                wa.apply(this, arguments)
          }
          function $m(e) {
            var r = e || {}
                , t = r.data
                , n = r.currentEpisode
                , o = !1;
            if (t != null && t.length)
              for (var i = 0; i < t.length; i++) {
                var u;
                if (((u = t[i]) === null || u === void 0 ? void 0 : u.mixInfo.currentEpisode) === n) {
                  var l;
                  if (t != null && (l = t[i + 1]) !== null && l !== void 0 && l.awemeId) {
                    var s, c;
                    o = {
                      url: or(t == null || (s = t[i + 1]) === null || s === void 0 ? void 0 : s.awemeId, "previous_page=".concat(X() || "")),
                      img: t == null ? void 0 : t[i + 1].video.cover,
                      desc: "\u7B2C".concat(t == null ? void 0 : t[i + 1].mixInfo.currentEpisode, "\u96C6 | ").concat(t == null || (c = t[i + 1]) === null || c === void 0 ? void 0 : c.desc)
                    }
                  }
                  break
                }
              }
            return o
          }
          function _a(e) {
            return Ea.apply(this, arguments)
          }
          function Ea() {
            return Ea = ha(regeneratorRuntime.mark(function e(r) {
              var t, n, o, i, u, l, s, c, d, f, m, v, p = arguments;
              return regeneratorRuntime.wrap(function(h) {
                for (; ; )
                  switch (h.prev = h.next) {
                    case 0:
                      return t = r.mixId,
                          n = r.totalEpisode,
                          o = r.currentEpisode,
                          i = r.count,
                          u = p.length > 1 && p[1] !== void 0 ? p[1] : null,
                          l = Math.max(Math.min(o - 1, n - i), 0),
                          h.next = 5,
                          ya({
                            mixId: t,
                            cursor: l,
                            count: i
                          }, u);
                    case 5:
                      return s = h.sent,
                          c = s.statusCode,
                          d = s.data,
                          f = s.hasMore,
                          m = s.cursor,
                          v = s.logPb,
                          h.abrupt("return", {
                            mixId: t,
                            statusCode: c,
                            data: d,
                            currentEpisode: o,
                            hasMore: f,
                            cursor: m,
                            logPb: v
                          });
                    case 12:
                    case "end":
                      return h.stop()
                  }
              }, e)
            })),
                Ea.apply(this, arguments)
          }
          function Hu(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
              })),
                  t.push.apply(t, n)
            }
            return t
          }
          function Hr(e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r] != null ? arguments[r] : {};
              r % 2 ? Hu(Object(t), !0).forEach(function(n) {
                yt(e, n, t[n])
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Hu(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              })
            }
            return e
          }
          function yt(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          function Wu(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function Wr(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      Wu(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      Wu(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          var Vu = Be
              , zu = Vu.COMMON_SEARCH_PARAMS
              , Ku = Vu.DISABLE_SECRET_VIDEO_PARAMS;
          function Gu(e) {
            var r = e.aweme_list
                , t = e.status_code
                , n = e.has_more
                , o = e.cursor
                , i = e.max_cursor
                , u = e.log_pb;
            return {
              statusCode: t,
              hasMore: n,
              cursor: i,
              maxCursor: i,
              logPb: u,
              data: cr(r || [])
            }
          }
          function Qu(e) {
            return Ca.apply(this, arguments)
          }
          function Ca() {
            return Ca = Wr(regeneratorRuntime.mark(function e(r) {
              var t, n, o, i, u, l, s, c, d, f = arguments;
              return regeneratorRuntime.wrap(function(v) {
                for (; ; )
                  switch (v.prev = v.next) {
                    case 0:
                      return n = r.userId,
                          o = n === void 0 ? "" : n,
                          i = r.maxCursor,
                          u = i === void 0 ? 0 : i,
                          l = r.count,
                          s = l === void 0 ? 10 : l,
                          c = f.length > 1 && f[1] !== void 0 ? f[1] : null,
                          v.next = 4,
                          Fe("/aweme/v1/web/aweme/post/", Hr(Hr({}, zu), {}, (t = {},
                              yt(t, "sec_user_id", o),
                              yt(t, "max_cursor", u),
                              yt(t, "count", s),
                              t), Ku), c);
                    case 4:
                      return d = v.sent,
                          v.abrupt("return", Te(d, Gu));
                    case 6:
                    case "end":
                      return v.stop()
                  }
              }, e)
            })),
                Ca.apply(this, arguments)
          }
          function Zm(e) {
            return Aa.apply(this, arguments)
          }
          function Aa() {
            return Aa = Wr(regeneratorRuntime.mark(function e(r) {
              var t, n, o, i, u, l, s, c, d, f = arguments;
              return regeneratorRuntime.wrap(function(v) {
                for (; ; )
                  switch (v.prev = v.next) {
                    case 0:
                      return n = r.userId,
                          o = n === void 0 ? "" : n,
                          i = r.maxCursor,
                          u = i === void 0 ? 0 : i,
                          l = r.count,
                          s = l === void 0 ? 10 : l,
                          c = f.length > 1 && f[1] !== void 0 ? f[1] : null,
                          v.next = 4,
                          Fe("/aweme/v1/web/aweme/favorite/", Hr(Hr({}, zu), {}, (t = {},
                              yt(t, "sec_user_id", o),
                              yt(t, "max_cursor", u),
                              yt(t, "min_cursor", 0),
                              yt(t, "count", s),
                              t), Ku), c);
                    case 4:
                      return d = v.sent,
                          v.abrupt("return", Te(d, Gu));
                    case 6:
                    case "end":
                      return v.stop()
                  }
              }, e)
            })),
                Aa.apply(this, arguments)
          }
          function Jm() {
            return Sa.apply(this, arguments)
          }
          function Sa() {
            return Sa = Wr(regeneratorRuntime.mark(function e() {
              var r, t = arguments;
              return regeneratorRuntime.wrap(function(o) {
                for (; ; )
                  switch (o.prev = o.next) {
                    case 0:
                      return r = t.length > 0 && t[0] !== void 0 ? t[0] : null,
                          o.next = 3,
                          fu(r, {
                            psm: oa,
                            cluster: ia
                          });
                    case 3:
                      return o.abrupt("return", o.sent);
                    case 4:
                    case "end":
                      return o.stop()
                  }
              }, e)
            })),
                Sa.apply(this, arguments)
          }
          function Yu(e) {
            return Ia.apply(this, arguments)
          }
          function Ia() {
            return Ia = Wr(regeneratorRuntime.mark(function e(r) {
              var t, n = arguments;
              return regeneratorRuntime.wrap(function(i) {
                for (; ; )
                  switch (i.prev = i.next) {
                    case 0:
                      return t = n.length > 1 && n[1] !== void 0 ? n[1] : null,
                          i.next = 3,
                          du(r, t, {
                            psm: oa,
                            cluster: ia
                          });
                    case 3:
                      return i.abrupt("return", i.sent);
                    case 4:
                    case "end":
                      return i.stop()
                  }
              }, e)
            })),
                Ia.apply(this, arguments)
          }
          function Xu(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
              })),
                  t.push.apply(t, n)
            }
            return t
          }
          function Vr(e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r] != null ? arguments[r] : {};
              r % 2 ? Xu(Object(t), !0).forEach(function(n) {
                qm(e, n, t[n])
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Xu(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              })
            }
            return e
          }
          function qm(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          function $u(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function Zu(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      $u(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      $u(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          var Ju = He;
          function e0(e) {
            var r = e.aweme_list
                , t = r === void 0 ? [] : r
                , n = e.status_code
                , o = e.log_pb;
            return {
              statusCode: n,
              awemeList: cr(t || []),
              logPb: o && JSON.stringify(o)
            }
          }
          function Pa(e) {
            return xa.apply(this, arguments)
          }
          function xa() {
            return xa = Zu(regeneratorRuntime.mark(function e(r) {
              var t, n, o, i, u, l, s, c, d = arguments;
              return regeneratorRuntime.wrap(function(m) {
                for (; ; )
                  switch (m.prev = m.next) {
                    case 0:
                      return t = r.hotWord,
                          n = t === void 0 ? "" : t,
                          o = r.offest,
                          i = o === void 0 ? 0 : o,
                          u = r.count,
                          l = u === void 0 ? 1 : u,
                          s = d.length > 1 && d[1] !== void 0 ? d[1] : null,
                          m.next = 4,
                          Fe("/aweme/v1/web/hot/search/video/list/", Vr(Vr({}, Ju), {}, {
                            hotword: n,
                            offest: i,
                            count: l
                          }), s);
                    case 4:
                      return c = m.sent,
                          m.abrupt("return", Te(c, e0));
                    case 6:
                    case "end":
                      return m.stop()
                  }
              }, e)
            })),
                xa.apply(this, arguments)
          }
          function t0(e) {
            var r = e.data
                , t = e.status_code
                , n = e.log_pb
                , o = r || {}
                , i = o.word_list
                , u = o.trending_list;
            return {
              logPb: n && JSON.stringify(n),
              statusCode: t,
              wordList: i.map(function(l) {
                return {
                  word: l.word
                }
              }),
              trendingList: u.map(function(l) {
                return {
                  word: l.word
                }
              })
            }
          }
          function r0() {
            return Oa.apply(this, arguments)
          }
          function Oa() {
            return Oa = Zu(regeneratorRuntime.mark(function e() {
              var r, t, n = arguments;
              return regeneratorRuntime.wrap(function(i) {
                for (; ; )
                  switch (i.prev = i.next) {
                    case 0:
                      return r = n.length > 0 && n[0] !== void 0 ? n[0] : null,
                          i.next = 3,
                          Fe("/aweme/v1/web/hot/search/list/", Vr(Vr({}, Ju), {}, {
                            detail_list: 1,
                            source: 6
                          }), r);
                    case 3:
                      return t = i.sent,
                          i.abrupt("return", Te(t, t0));
                    case 5:
                    case "end":
                      return i.stop()
                  }
              }, e)
            })),
                Oa.apply(this, arguments)
          }
          function qu(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
              })),
                  t.push.apply(t, n)
            }
            return t
          }
          function el(e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r] != null ? arguments[r] : {};
              r % 2 ? qu(Object(t), !0).forEach(function(n) {
                Ra(e, n, t[n])
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : qu(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              })
            }
            return e
          }
          function Ra(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          function tl(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function n0(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      tl(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      tl(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          var a0 = He;
          function o0(e) {
            var r = e.aweme_list
                , t = r === void 0 ? [] : r
                , n = e.status_code
                , o = e.log_pb;
            return {
              statusCode: n,
              hasMore: !0,
              awemeList: cr(t || []),
              logPb: o && JSON.stringify(o)
            }
          }
          function rl() {
            return Ta.apply(this, arguments)
          }
          function Ta() {
            return Ta = n0(regeneratorRuntime.mark(function e() {
              var r, t, n, o, i, u, l, s, c = arguments;
              return regeneratorRuntime.wrap(function(f) {
                for (; ; )
                  switch (f.prev = f.next) {
                    case 0:
                      return t = c.length > 0 && c[0] !== void 0 ? c[0] : {},
                          n = t.tagId,
                          o = n === void 0 ? "" : n,
                          i = t.count,
                          u = i === void 0 ? 10 : i,
                          l = c.length > 1 && c[1] !== void 0 ? c[1] : null,
                          f.next = 4,
                          Fe("/aweme/v1/web/channel/feed/", el(el({}, a0), {}, (r = {},
                              Ra(r, "tag_id", o),
                              Ra(r, "count", u),
                              r)), l);
                    case 4:
                      return s = f.sent,
                          f.abrupt("return", Te(s, o0));
                    case 6:
                    case "end":
                      return f.stop()
                  }
              }, e)
            })),
                Ta.apply(this, arguments)
          }
          function nl(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
              })),
                  t.push.apply(t, n)
            }
            return t
          }
          function al(e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r] != null ? arguments[r] : {};
              r % 2 ? nl(Object(t), !0).forEach(function(n) {
                zr(e, n, t[n])
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : nl(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              })
            }
            return e
          }
          function zr(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          function ol(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function i0(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      ol(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      ol(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          var u0 = He;
          function l0(e) {
            var r = e.aweme_list
                , t = r === void 0 ? [] : r
                , n = e.status_code
                , o = e.has_more
                , i = e.log_pb;
            return {
              logPb: i && JSON.stringify(i),
              statusCode: n,
              hasMore: o,
              awemeList: cr(t || [])
            }
          }
          function il(e) {
            return ka.apply(this, arguments)
          }
          function ka() {
            return ka = i0(regeneratorRuntime.mark(function e(r) {
              var t, n, o, i, u, l, s, c, d = arguments;
              return regeneratorRuntime.wrap(function(m) {
                for (; ; )
                  switch (m.prev = m.next) {
                    case 0:
                      return n = r.awemeId,
                          o = n === void 0 ? "" : n,
                          i = r.count,
                          u = i === void 0 ? 6 : i,
                          l = r.filterGids,
                          s = d.length > 1 && d[1] !== void 0 ? d[1] : null,
                          m.next = 4,
                          Fe("/aweme/v1/web/aweme/related/", al(al({}, u0), {}, (t = {},
                              zr(t, "aweme_id", o),
                              zr(t, "count", u),
                              zr(t, "filterGids", l),
                              t)), s);
                    case 4:
                      return c = m.sent,
                          m.abrupt("return", Te(c, l0));
                    case 6:
                    case "end":
                      return m.stop()
                  }
              }, e)
            })),
                ka.apply(this, arguments)
          }
          var m3 = E(24348);
          function s0(e, r) {
            return m0(e) || d0(e, r) || f0(e, r) || c0()
          }
          function c0() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function f0(e, r) {
            if (!!e) {
              if (typeof e == "string")
                return ul(e, r);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              if (t === "Object" && e.constructor && (t = e.constructor.name),
              t === "Map" || t === "Set")
                return Array.from(e);
              if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return ul(e, r)
            }
          }
          function ul(e, r) {
            (r == null || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
              n[t] = e[t];
            return n
          }
          function d0(e, r) {
            var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (t != null) {
              var n = [], o = !0, i = !1, u, l;
              try {
                for (t = t.call(e); !(o = (u = t.next()).done) && (n.push(u.value),
                    !(r && n.length === r)); o = !0)
                  ;
              } catch (s) {
                i = !0,
                    l = s
              } finally {
                try {
                  !o && t.return != null && t.return()
                } finally {
                  if (i)
                    throw l
                }
              }
              return n
            }
          }
          function m0(e) {
            if (Array.isArray(e))
              return e
          }
          function Na() {
            var e = (0,
                a.useState)("")
                , r = s0(e, 2)
                , t = r[0]
                , n = r[1]
                , o = (0,
                a.useRef)(0)
                , i = function(c) {
              clearTimeout(o.current),
                  n(c)
            }
                , u = function() {
              o.current = window.setTimeout(function() {
                n("")
              }, 200)
            }
                , l = function(c) {
              c ? i(c) : u()
            };
            return {
              type: t,
              changeType: l
            }
          }
          var We = {
            avatar: "f38341477df2bf1cfbbd30ad10a017ce-scss",
            container: "_97b7ccf9a527539c7f3bd6a17e08b3c4-scss",
            more: "_1b60cdbe5dd6df538bbab9cbb3422bd8-scss",
            publishCt: "_80c75a643f76f056a46d3eea49612d35-scss",
            menu: "_4edb6f2720ac8ee2566465efd761f58e-scss",
            active: "e154a525613f961881a5573c1c5c9473-scss",
            loginBtn: "_1a2e793075e137c9a7d96039902bd664-scss",
            loginBtnWrapper: "d08c55a682bd1a1225337304fd86ac75-scss",
            avataUserCt: "_76e29aa3c1a5f33446f6f2eca80bfa2f-scss",
            explictShow: "c3ea5b248a8d756e517a4ad9471da22a-scss"
          }, ll;
          function La() {
            return La = Object.assign || function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }
                ,
                La.apply(this, arguments)
          }
          function v0(e) {
            return a.createElement("svg", La({
              width: 45,
              height: 46,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, e), ll || (ll = a.createElement("g", {
              opacity: .99,
              fill: "#000"
            }, a.createElement("path", {
              d: "M13 31a1.5 1.5 0 011.5-1.5h17a1.5 1.5 0 010 3h-17A1.5 1.5 0 0113 31zM13 23.5a1.5 1.5 0 011.5-1.5h17a1.5 1.5 0 010 3h-17a1.5 1.5 0 01-1.5-1.5zM13 16a1.5 1.5 0 011.5-1.5h17a1.5 1.5 0 010 3h-17A1.5 1.5 0 0113 16z"
            }))))
          }
          var p0 = v0, sl;
          function Fa() {
            return Fa = Object.assign || function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }
                ,
                Fa.apply(this, arguments)
          }
          function g0(e) {
            return a.createElement("svg", Fa({
              width: 14,
              height: 14,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, e), sl || (sl = a.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M5.5 12.5a1.5 1.5 0 003 0v-4h4a1.5 1.5 0 000-3h-4v-4a1.5 1.5 0 10-3 0v4h-4a1.5 1.5 0 100 3h4v4z",
              fill: "#fff"
            })))
          }
          var h0 = g0
              , fr = {
            avatar: "_751cf1d80303de5fb1b5c1bfe1bbf0e0-scss",
            icon: "_921929f2ea51f53251e84c1cf3f87258-scss",
            image: "_6bae574eea4bc99f3da09b6be51a0a0d-scss",
            live: "_662615749ab33a06d741e8592237ea79-scss",
            extraExtraSmall: "fdb06c9b21889e1013b042468f3e3f2a-scss",
            extraSmall: "bbdd32aa0d80f26630221e86b0c2bcf0-scss",
            small: "c7c1ca45c62bdb042bf5cede09f925fc-scss",
            default: "d7a993bbcca121e9c8b5896532ed4b37-scss"
          }
              , y0 = E(23644);
          function b0(e, r) {
            return C0(e) || E0(e, r) || _0(e, r) || w0()
          }
          function w0() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function _0(e, r) {
            if (!!e) {
              if (typeof e == "string")
                return cl(e, r);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              if (t === "Object" && e.constructor && (t = e.constructor.name),
              t === "Map" || t === "Set")
                return Array.from(e);
              if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return cl(e, r)
            }
          }
          function cl(e, r) {
            (r == null || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
              n[t] = e[t];
            return n
          }
          function E0(e, r) {
            var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (t != null) {
              var n = [], o = !0, i = !1, u, l;
              try {
                for (t = t.call(e); !(o = (u = t.next()).done) && (n.push(u.value),
                    !(r && n.length === r)); o = !0)
                  ;
              } catch (s) {
                i = !0,
                    l = s
              } finally {
                try {
                  !o && t.return != null && t.return()
                } finally {
                  if (i)
                    throw l
                }
              }
              return n
            }
          }
          function C0(e) {
            if (Array.isArray(e))
              return e
          }
          function Xe(e) {
            var r = e.type
                , t = r === void 0 ? "default" : r
                , n = e.src
                , o = e.alt
                , i = o === void 0 ? "" : o
                , u = (0,
                a.useState)(0)
                , l = b0(u, 2)
                , s = l[0]
                , c = l[1]
                , d = function() {
              c(-1)
            }
                , f = function() {
              c(1)
            };
            return (0,
                a.useEffect)(function() {
              var m = !1
                  , v = new Image;
              v.onload = function() {
                m || (m = !0,
                    f(),
                    v = null)
              }
                  ,
                  v.onerror = function() {
                    m || (m = !0,
                        c(-1),
                        v = null)
                  }
                  ,
                  setTimeout(function() {
                    m = !0,
                        f()
                  }, 3e3),
                  v.src = n
            }, [n]),
                a.createElement("div", {
                  className: j()(fr.avatar, fr[t])
                }, n && s === 1 && a.createElement("img", {
                  src: n,
                  alt: i,
                  className: fr.image,
                  onError: d,
                  onLoad: f
                }), s <= 0 && a.createElement("div", {
                  className: fr.icon
                }, a.createElement("img", {
                  src: y0,
                  className: fr[t],
                  alt: i
                })))
          }
          var v3 = E(80337)
              , dr = {
            button: "abace09bde29f9d2077ba2a9e9e2b67d-scss",
            small: "_3c25ad295260cb707e35da1ec8d93a51-scss",
            fixed: "_89065725befc01c0403de23447176234-scss",
            normal: "_93fbc55b0dd6667bca4858426fd34dde-scss",
            large: "_7e8551e45c800775399b78e29d3b2f6f-scss",
            primary: "_14339689bca6b9eda19c146a14df625e-scss",
            border: "_7ecaa8ba84de53f8bea1cb4996e405a7-scss",
            secondary: "_8b217f570572ea18be4a0032035309e2-scss",
            ghost: "_301167ec5784791a1c7b4110afd0b250-scss"
          };
          function fl(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
              })),
                  t.push.apply(t, n)
            }
            return t
          }
          function A0(e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r] != null ? arguments[r] : {};
              r % 2 ? fl(Object(t), !0).forEach(function(n) {
                dl(e, n, t[n])
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : fl(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              })
            }
            return e
          }
          function dl(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          var ml;
          (function(e) {
                e.small = "small",
                    e.normal = "normal",
                    e.large = "large"
              }
          )(ml || (ml = {}));
          var vl;
          (function(e) {
                e.primary = "primary",
                    e.secondary = "secondary"
              }
          )(vl || (vl = {}));
          function Pe(e) {
            var r = e.size
                , t = r === void 0 ? "normal" : r
                , n = e.type
                , o = n === void 0 ? "primary" : n
                , i = e.children
                , u = e.autoFixed
                , l = u === void 0 ? !0 : u
                , s = e.className
                , c = e.width
                , d = e.style
                , f = e.theme
                , m = f === void 0 ? "solid" : f
                , v = e.disabled
                , p = v === void 0 ? !1 : v
                , g = e.onClick
                , h = g === void 0 ? function() {}
                : g;
            return a.createElement("button", {
              disabled: p,
              onClick: h,
              className: j()(dr.button, dr[t], dr[o], dr[m], dl({}, dr.fixed, !l), s),
              style: A0({
                width: c && "".concat(c, "px")
              }, d)
            }, i)
          }
          function Ma(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          function pl() {
            return a.createElement("li", {
              className: We.publishCt
            }, a.createElement(Pe, {
              style: {
                marginLeft: "0",
                marginRight: "0",
                whiteSpace: "nowrap"
              }
            }, a.createElement("a", {
              target: "_blank",
              rel: "noopener noreferrer",
              href: "https://creator.douyin.com/creator-micro/content/upload"
            }, a.createElement(h0, null), a.createElement("span", null, "\u53D1\u5E03\u89C6\u9891"))))
          }
          function gl() {
            return a.createElement("li", null, a.createElement("a", {
              target: "_blank",
              rel: "noopener noreferrer",
              href: "https://www.douyin.com/home"
            }, "\u6296\u97F3\u5B98\u7F51"))
          }
          function hl() {
            return a.createElement("li", null, a.createElement("a", {
              target: "_blank",
              rel: "noopener noreferrer",
              href: "https://creator.douyin.com/"
            }, "\u521B\u4F5C\u8005\u670D\u52A1"))
          }
          function yl(e) {
            var r = e.secUid;
            return a.createElement(a.Fragment, null, a.createElement("li", null, a.createElement("a", {
              target: "_blank",
              href: Tt(r, "enter_method=top_bar")
            }, "\u4E2A\u4EBA\u4E2D\u5FC3")), a.createElement("li", null, a.createElement("a", {
              onClick: function(n) {
                n.preventDefault(),
                    Pi(location.href)
              }
            }, "\u9000\u51FA\u767B\u5F55")))
          }
          function bl(e) {
            var r = e.success
                , t = e.isLogin
                , n = e.children;
            return a.createElement(a.Fragment, null, t ? n : a.createElement("li", {
              className: We.loginBtnWrapper
            }, a.createElement(Pe, {
              className: We.loginBtn,
              theme: "border",
              onClick: function(i) {
                i.preventDefault(),
                    nr({
                      success: r,
                      enterMethod: "navigation_bar"
                    })
              }
            }, "\u767B\u5F55")))
          }
          function S0(e) {
            var r = e.secUid
                , t = e.avatarUrl
                , n = Na()
                , o = n.type
                , i = n.changeType;
            return a.createElement("li", {
              className: We.avataUserCt
            }, a.createElement("a", {
              target: "_blank",
              href: Tt(r, "enter_method=top_bar"),
              className: We.avatar,
              onMouseEnter: function() {
                i("active")
              },
              onMouseLeave: function() {
                i()
              }
            }, a.createElement(Xe, {
              type: "extraSmall",
              src: t
            })), a.createElement("ul", {
              className: j()(Ma({}, We.active, Boolean(o))),
              onMouseEnter: function() {
                i("active")
              },
              onMouseLeave: function() {
                i()
              }
            }, a.createElement(yl, {
              secUid: r
            })))
          }
          function wl(e) {
            var r, t = e.children, n = e.className, o = e.activeClassName, i = e.changeType;
            return a.createElement("ul", {
              className: j()(We.menu, (r = {},
                  Ma(r, We.active, Boolean(o)),
                  Ma(r, n, Boolean(n)),
                  r)),
              onMouseEnter: function() {
                o === "active" && (i == null || i("active"))
              },
              onMouseLeave: function() {
                i == null || i()
              }
            }, t)
          }
          function I0(e) {
            var r = e.success
                , t = e.userInfo
                , n = Na("")
                , o = n.type
                , i = n.changeType
                , u = t || {}
                , l = u.isLogin
                , s = u.info
                , c = s || {}
                , d = c.uid
                , f = c.avatarUrl
                , m = c.secUid;
            return a.createElement("div", {
              className: We.container
            }, a.createElement("div", {
              className: We.more,
              onMouseEnter: function() {
                i("active")
              },
              onMouseLeave: function() {
                i()
              }
            }, a.createElement(p0, null)), a.createElement(wl, {
              className: We.explictShow
            }, a.createElement(gl, null), a.createElement(hl, null), a.createElement(pl, null), a.createElement(bl, {
              success: r,
              isLogin: l
            }, a.createElement(S0, {
              secUid: m,
              avatarUrl: f
            }))), a.createElement(wl, {
              activeClassName: o,
              changeType: i
            }, a.createElement(pl, null), a.createElement(gl, null), a.createElement(hl, null), a.createElement(bl, {
              success: r,
              isLogin: l
            }, a.createElement(yl, {
              secUid: m
            }))))
          }
          var p3 = E(45566), g3 = E(6336), _l;
          function Ba() {
            return Ba = Object.assign || function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }
                ,
                Ba.apply(this, arguments)
          }
          function P0(e) {
            return a.createElement("svg", Ba({
              width: 18,
              height: 18,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, e), _l || (_l = a.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M7.875 1.5a6.375 6.375 0 103.642 11.608l3.063 3.063a1.125 1.125 0 001.59-1.591l-3.062-3.063A6.375 6.375 0 007.875 1.5zM3.75 7.875a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0z",
              fill: "#4F5168"
            })))
          }
          var x0 = P0, El;
          function Da() {
            return Da = Object.assign || function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }
                ,
                Da.apply(this, arguments)
          }
          function O0(e) {
            return a.createElement("svg", Da({
              width: 24,
              height: 24,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, e), El || (El = a.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M6.224 16.693a.766.766 0 101.083 1.083L12 13.083l4.693 4.693a.766.766 0 101.083-1.083L13.083 12l4.693-4.693a.766.766 0 00-1.083-1.083L12 10.917 7.307 6.224a.766.766 0 00-1.083 1.083L10.917 12l-4.693 4.693z",
              fill: "#4F5168"
            })))
          }
          var R0 = O0, Cl, Al, Sl;
          function ja() {
            return ja = Object.assign || function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }
                ,
                ja.apply(this, arguments)
          }
          function T0(e) {
            return a.createElement("svg", ja({
              width: 24,
              height: 24,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, e), Cl || (Cl = a.createElement("rect", {
              x: 6,
              y: 5,
              width: 10,
              height: 1.5,
              rx: .75,
              fill: "#4F5168"
            })), Al || (Al = a.createElement("rect", {
              x: 7.061,
              y: 5,
              width: 16,
              height: 1.5,
              rx: .75,
              transform: "rotate(45 7.06 5)",
              fill: "#4F5168"
            })), Sl || (Sl = a.createElement("rect", {
              x: 7.5,
              y: 5,
              width: 10,
              height: 1.5,
              rx: .75,
              transform: "rotate(90 7.5 5)",
              fill: "#4F5168"
            })))
          }
          var k0 = T0
              , N0 = 40
              , L0 = "guest"
              , F0 = "SEARCH_HISTORY_"
              , Ua = 10
              , M0 = {
            enterSearch: {
              eventName: "enter_search",
              params: {
                enter_from: "",
                enter_from_second: ""
              }
            },
            searchAnti: {
              eventName: "search_anti_rpt",
              params: {
                anti_id: "",
                anti_query_input_time: 0,
                anti_search_press_duration: 0,
                anti_search_viewport: ""
              }
            },
            sugShow: {
              eventName: "search_sug",
              params: {
                impr_id: "",
                search_keyword: "",
                search_type: "",
                sug_keyword: "",
                action_type: "show"
              }
            },
            sugClick: {
              eventName: "search_sug",
              params: {
                impr_id: "",
                search_keyword: "",
                search_type: "",
                sug_keyword: "",
                action_type: "click"
              }
            },
            trendingShow: {
              eventName: "trending_show",
              params: {
                log_pb: {},
                impr_id: "",
                search_id: "",
                words_num: 0,
                words_source: "sug",
                raw_query: "",
                rank: -1,
                search_position: ""
              }
            },
            trendingWordsShow: {
              eventName: "trending_words_show",
              params: {
                impr_id: "",
                search_id: "",
                words_source: "sug",
                words_position: 0,
                words_content: "",
                raw_query: "",
                rank: -1,
                search_position: "",
                query_id: "",
                group_id: ""
              }
            },
            trendingWordsClick: {
              eventName: "trending_words_click",
              params: {
                impr_id: "",
                words_source: "sug",
                words_position: 0,
                words_content: "",
                raw_query: "",
                rank: -1,
                search_position: "",
                query_id: "",
                group_id: ""
              }
            }
          }
              , Il = E(30316);
          function B0(e, r) {
            return H0(e) || U0(e, r) || j0(e, r) || D0()
          }
          function D0() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function j0(e, r) {
            if (!!e) {
              if (typeof e == "string")
                return Pl(e, r);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              if (t === "Object" && e.constructor && (t = e.constructor.name),
              t === "Map" || t === "Set")
                return Array.from(e);
              if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return Pl(e, r)
            }
          }
          function Pl(e, r) {
            (r == null || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
              n[t] = e[t];
            return n
          }
          function U0(e, r) {
            var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (t != null) {
              var n = [], o = !0, i = !1, u, l;
              try {
                for (t = t.call(e); !(o = (u = t.next()).done) && (n.push(u.value),
                    !(r && n.length === r)); o = !0)
                  ;
              } catch (s) {
                i = !0,
                    l = s
              } finally {
                try {
                  !o && t.return != null && t.return()
                } finally {
                  if (i)
                    throw l
                }
              }
              return n
            }
          }
          function H0(e) {
            if (Array.isArray(e))
              return e
          }
          function W0() {
            var e = (0,
                a.useState)(void 0)
                , r = B0(e, 2)
                , t = r[0]
                , n = r[1];
            return {
              router: t,
              setRouter: n
            }
          }
          var V0 = (0,
              Il.NY)(W0)
              , z0 = E(78840);
          function K0(e, r) {
            return X0(e) || Y0(e, r) || Q0(e, r) || G0()
          }
          function G0() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function Q0(e, r) {
            if (!!e) {
              if (typeof e == "string")
                return xl(e, r);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              if (t === "Object" && e.constructor && (t = e.constructor.name),
              t === "Map" || t === "Set")
                return Array.from(e);
              if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return xl(e, r)
            }
          }
          function xl(e, r) {
            (r == null || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
              n[t] = e[t];
            return n
          }
          function Y0(e, r) {
            var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (t != null) {
              var n = [], o = !0, i = !1, u, l;
              try {
                for (t = t.call(e); !(o = (u = t.next()).done) && (n.push(u.value),
                    !(r && n.length === r)); o = !0)
                  ;
              } catch (s) {
                i = !0,
                    l = s
              } finally {
                try {
                  !o && t.return != null && t.return()
                } finally {
                  if (i)
                    throw l
                }
              }
              return n
            }
          }
          function X0(e) {
            if (Array.isArray(e))
              return e
          }
          function mr(e) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? mr = function(t) {
                  return typeof t
                }
                : mr = function(t) {
                  return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                ,
                mr(e)
          }
          var $0 = ["normal_search", "search_history", "search_sug", "correct_word"]
              , zt = [{
            tab: "video",
            title: "\u89C6\u9891",
            search_type: "aweme_video_web",
            enableCorrect: !0,
            filter: [{
              key: "sort_type",
              filter_type: "by_top",
              filterItems: [{
                val: "0",
                title: "\u7EFC\u5408\u6392\u5E8F",
                filter_option: "top_all"
              }, {
                val: "2",
                title: "\u6700\u65B0\u53D1\u5E03",
                filter_option: "top_time"
              }, {
                val: "1",
                title: "\u6700\u591A\u70B9\u8D5E",
                filter_option: "top_likes"
              }]
            }, {
              key: "publish_time",
              filter_type: "by_time",
              filterItems: [{
                val: "0",
                title: "\u53D1\u5E03\u65F6\u95F4",
                filter_option: "time_all"
              }, {
                val: "1",
                title: "\u4E00\u5929\u5185",
                filter_option: "within_day"
              }, {
                val: "7",
                title: "\u4E00\u5468\u5185",
                filter_option: "within_week"
              }, {
                val: "182",
                title: "\u534A\u5E74\u5185",
                filter_option: "within_half_year"
              }]
            }]
          }, {
            tab: "user",
            title: "\u7528\u6237",
            search_type: "aweme_user_web",
            enableCorrect: !1,
            filter: []
          }];
          function Ha() {
            return [{
              filterIndex: [0, 0],
              showFilter: !0,
              enableCorrect: !0,
              correctType: "1"
            }, {
              filterIndex: [],
              showFilter: !0,
              enableCorrect: !1,
              correctType: "1"
            }]
          }
          function h3(e, r) {
            var t = {};
            return r.forEach(function(n, o) {
              t[zt[e].filter[o].key] = zt[e].filter[o].filterItems[n].val
            }),
                t
          }
          var Z0 = function() {
            return [typeof window == "undefined" ? "undefined" : mr(window), typeof document == "undefined" ? "undefined" : mr(document)].indexOf("undefined") === -1
          };
          function J0() {
            var e = {
              keyword: "",
              inited: !1,
              tabIndex: 0,
              tab: "video",
              tabs: Ha(),
              anti_id: "",
              source: "normal_search",
              changeReason: "init"
            };
            if (Z0()) {
              var r, t = (r = window.location.pathname.match(/\/search\/([\w%]+)/)) === null || r === void 0 ? void 0 : r[1], n = (0,
                  De.parse)(window.location.search);
              e.keyword = t ? cm(t) : "",
                  e.inited = !0,
              n.aid && (e.anti_id = n.aid);
              var o = n.source;
              $0.includes(o) && (e.source = o);
              var i = n.type
                  , u = zt.findIndex(function(h) {
                return h.tab === n.type
              });
              u !== -1 && (e.tab = i,
                  e.tabIndex = u),
                  zt[e.tabIndex].filter.forEach(function(h, y) {
                    var b = n[h.key]
                        , _ = h.filterItems.findIndex(function(A) {
                      return A.val === b
                    });
                    b && _ !== -1 && (e.tabs[e.tabIndex].filterIndex[y] = _)
                  })
            }
            var l = (0,
                z0.ZP)(e)
                , s = K0(l, 2)
                , c = s[0]
                , d = s[1]
                , f = (0,
                a.useCallback)(function(h, y) {
              var b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
              d(function(_) {
                _.keyword = h,
                    _.tabs = Ha(),
                    _.changeReason = "keyword",
                    _.source = y,
                    _.anti_id = b
              })
            }, [])
                , m = (0,
                a.useCallback)(function() {
              d(function(h) {
                h.tabs = Ha(),
                    h.tabs[h.tabIndex].correctType = "0",
                    h.changeReason = "correct",
                    h.source = "correct_word",
                    h.anti_id = ""
              })
            }, [])
                , v = (0,
                a.useCallback)(function(h) {
              var y = zt.findIndex(function(b) {
                return b.tab === h
              });
              y === -1 && (y = 0),
                  d(function(b) {
                    b.tabIndex = y,
                        b.tab = zt[y].tab,
                        b.changeReason = "tab",
                        b.anti_id = ""
                  })
            }, [])
                , p = (0,
                a.useCallback)(function(h, y) {
              d(function(b) {
                b.tabs[b.tabIndex].filterIndex[h] = y,
                    b.changeReason = "filter",
                    b.anti_id = ""
              })
            }, [])
                , g = (0,
                a.useCallback)(function() {
              d(function(h) {
                h.tabs[h.tabIndex].showFilter = !h.tabs[h.tabIndex].showFilter,
                    h.changeReason = "toggleShowFilter"
              })
            }, []);
            return {
              searchParams: c,
              updateSearchParams: d,
              changeKeyword: f,
              changeCorrect: m,
              changTab: v,
              changeIndex: p,
              toggleShowFilter: g
            }
          }
          var q0 = (0,
              Il.NY)(J0)
              , ev = E(42161)
              , Ol = E.n(ev)
              , tv = E(5619)
              , rv = E.n(tv);
          function nv(e, r) {
            return uv(e) || iv(e, r) || ov(e, r) || av()
          }
          function av() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function ov(e, r) {
            if (!!e) {
              if (typeof e == "string")
                return Rl(e, r);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              if (t === "Object" && e.constructor && (t = e.constructor.name),
              t === "Map" || t === "Set")
                return Array.from(e);
              if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return Rl(e, r)
            }
          }
          function Rl(e, r) {
            (r == null || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
              n[t] = e[t];
            return n
          }
          function iv(e, r) {
            var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (t != null) {
              var n = [], o = !0, i = !1, u, l;
              try {
                for (t = t.call(e); !(o = (u = t.next()).done) && (n.push(u.value),
                    !(r && n.length === r)); o = !0)
                  ;
              } catch (s) {
                i = !0,
                    l = s
              } finally {
                try {
                  !o && t.return != null && t.return()
                } finally {
                  if (i)
                    throw l
                }
              }
              return n
            }
          }
          function uv(e) {
            if (Array.isArray(e))
              return e
          }
          var Tl = ")a%06.4Sq~Xv]tDo8yFW-_gmbyaT.F,!KQhdKK}7:eW_cZk#;6lM[Q&BJ?%OVs$";
          function lv(e) {
            return Ol().encrypt(e, Tl).toString()
          }
          function sv(e) {
            var r = Ol().decrypt(e, Tl);
            return r.toString(rv())
          }
          function cv(e, r, t) {
            var n = (0,
                a.useState)([])
                , o = nv(n, 2)
                , i = o[0]
                , u = o[1]
                , l = (0,
                a.useRef)(e);
            l.current = e;
            var s = (0,
                a.useCallback)(function(v) {
              window.localStorage.setItem(r + l.current, lv(JSON.stringify(v)))
            }, [])
                , c = (0,
                a.useCallback)(function() {
              var v = sv(window.localStorage.getItem(r + l.current) || "");
              try {
                return JSON.parse(v)
              } catch (p) {
                return s([]),
                    []
              }
            }, [s]);
            (0,
                a.useEffect)(function() {
              u(c())
            }, [l.current]);
            var d = (0,
                a.useCallback)(function() {
              u([]),
                  s([])
            }, [u])
                , f = (0,
                a.useCallback)(function(v) {
              var p = c();
              Array.isArray(p) && (p = p.filter(function(g) {
                return g !== v
              }),
                  u(p),
                  s(p))
            }, [])
                , m = (0,
                a.useCallback)(function(v) {
              var p = c();
              Array.isArray(p) && (p = p.filter(function(g) {
                return g !== v
              }),
                  p.unshift(v),
                  p = p.slice(0, t),
                  u(p),
                  s(p))
            }, []);
            return {
              history: i,
              clearAll: d,
              deleteWord: f,
              unshiftWord: m
            }
          }
          var fv = E(69465)
              , kl = E(39437);
          function Nl(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
              })),
                  t.push.apply(t, n)
            }
            return t
          }
          function Kr(e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r] != null ? arguments[r] : {};
              r % 2 ? Nl(Object(t), !0).forEach(function(n) {
                dv(e, n, t[n])
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Nl(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              })
            }
            return e
          }
          function dv(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          function Kt(e, r) {
            return gv(e) || pv(e, r) || vv(e, r) || mv()
          }
          function mv() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function vv(e, r) {
            if (!!e) {
              if (typeof e == "string")
                return Ll(e, r);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              if (t === "Object" && e.constructor && (t = e.constructor.name),
              t === "Map" || t === "Set")
                return Array.from(e);
              if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return Ll(e, r)
            }
          }
          function Ll(e, r) {
            (r == null || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
              n[t] = e[t];
            return n
          }
          function pv(e, r) {
            var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (t != null) {
              var n = [], o = !0, i = !1, u, l;
              try {
                for (t = t.call(e); !(o = (u = t.next()).done) && (n.push(u.value),
                    !(r && n.length === r)); o = !0)
                  ;
              } catch (s) {
                i = !0,
                    l = s
              } finally {
                try {
                  !o && t.return != null && t.return()
                } finally {
                  if (i)
                    throw l
                }
              }
              return n
            }
          }
          function gv(e) {
            if (Array.isArray(e))
              return e
          }
          function hv(e) {
            e.preventDefault()
          }
          function yv(e) {
            var r = (0,
                a.useState)(null)
                , t = Kt(r, 2)
                , n = t[0]
                , o = t[1];
            (0,
                kl.Z)("ArrowUp", function() {
              o(function(u) {
                return e === 0 ? null : u === null ? 0 : Math.max(0, u - 1)
              })
            }),
                (0,
                    kl.Z)("ArrowDown", function() {
                  o(function(u) {
                    return e === 0 ? null : u === null ? 0 : Math.min(e - 1, u + 1)
                  })
                });
            var i = (0,
                a.useCallback)(function() {
              o(null)
            }, []);
            return {
              keyboardNavIndex: n,
              restKeyboardNavIndex: i
            }
          }
          function bv(e) {
            var r = V0()
                , t = r.router
                , n = (0,
                a.useMemo)(function() {
              return rd(M0)
            }, [])
                , o = q0()
                , i = o.searchParams
                , u = o.changeKeyword
                , l = cv(e, F0, N0)
                , s = l.history
                , c = l.clearAll
                , d = l.deleteWord
                , f = l.unshiftWord
                , m = (0,
                a.useState)({
              sugList: [],
              query: ""
            })
                , v = Kt(m, 2)
                , p = v[0]
                , g = v[1]
                , h = (0,
                a.useState)("")
                , y = Kt(h, 2)
                , b = y[0]
                , _ = y[1]
                , A = (0,
                a.useState)("")
                , S = Kt(A, 2)
                , P = S[0]
                , I = S[1]
                , x = (0,
                a.useState)("idle")
                , T = Kt(x, 2)
                , C = T[0]
                , O = T[1]
                , k = (0,
                a.useState)(!1)
                , B = Kt(k, 2)
                , R = B[0]
                , F = B[1]
                , M = yv(Math.min(Ua, {
              idle: 0,
              history: s.length,
              sug: p.sugList.length
            }[C]))
                , L = M.keyboardNavIndex
                , W = M.restKeyboardNavIndex
                , N = (0,
                a.useRef)()
                , z = (0,
                a.useRef)()
                , U = (0,
                a.useRef)({
              focusTime: 0,
              pressDownTime: 0,
              response: void 0,
              suggestionState: C,
              showText: P,
              inputText: b,
              inputFocus: R,
              router: t,
              tab: i.tab,
              history: s,
              sug: p,
              isPinyin: !1,
              isFirefox: !1
            });
            U.current = Kr(Kr({}, U.current), {}, {
              tab: i.tab,
              suggestionState: C,
              showText: P,
              inputText: b,
              inputFocus: R,
              router: t,
              history: s,
              sug: p
            }),
                (0,
                    a.useEffect)(function() {
                  _(i.keyword),
                      I(i.keyword),
                      W()
                }, [t == null ? void 0 : t.match]),
                (0,
                    a.useEffect)(function() {
                  L !== null && (U.current.suggestionState === "history" && I(U.current.history[L]),
                  U.current.suggestionState === "sug" && I(U.current.sug.sugList[L]))
                }, [L]),
                (0,
                    a.useEffect)(function() {
                  U.current.isFirefox = /firefox/i.test(navigator.userAgent)
                }, []);
            var re = (0,
                a.useCallback)(function(V, K, _e) {
              var ct = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
              if (!!V) {
                var ne = (0,
                    fv.Z)()
                    , qt = performance.now()
                    , Mt = K === "normal_search" ? ct ? -2 : qt - U.current.pressDownTime : -1;
                if (n("searchAnti", {
                  anti_id: ne,
                  anti_query_input_time: qt - U.current.focusTime,
                  anti_search_press_duration: Mt,
                  anti_search_viewport: _e
                }),
                U.current.router && U.current.router.match.path === "/Search/:keyword" && N.current.blur(),
                    f(V),
                U.current.router && U.current.router.match.path === "/Search/:keyword")
                  u(V, K, ne);
                else {
                  var tt = Yi(encodeURIComponent(V), "source=".concat(K, "&aid=").concat(ne, "&enter_from=").concat(X()));
                  if (U.current.isFirefox)
                    if (ct)
                      z.current.action = Yi(encodeURIComponent(V)),
                          z.current[0].value = K,
                          z.current[1].value = ne,
                          z.current[2].value = X();
                    else {
                      var Ar = window.open("about:blank");
                      Ar && (Ar.location.href = tt)
                    }
                  else
                    window.open(tt)
                }
              }
            }, [])
                , J = (0,
                a.useCallback)(function(V) {
              V.preventDefault(),
                  U.current.pressDownTime = performance.now()
            }, [])
                , ue = (0,
                a.useCallback)(function(V) {
              re(U.current.showText, "normal_search", "".concat(V.pageX, ",").concat(V.pageY))
            }, [])
                , Q = (0,
                a.useCallback)(function(V) {
              if ((V.code === "ArrowUp" || V.code === "ArrowDown") && V.preventDefault(),
              V.code === "Enter" && !U.current.isPinyin) {
                var K = U.current.showText;
                (!K || !U.current.isFirefox) && V.preventDefault(),
                    re(K, "normal_search", "-2,-2", !0)
              }
            }, [])
                , Y = (0,
                a.useCallback)(function(V) {
              var K = V.currentTarget.dataset.text;
              re(K, "search_history", "-1,-1")
            }, [])
                , H = (0,
                a.useCallback)(function(V) {
              var K = Number(V.currentTarget.dataset.index)
                  , _e = U.current.sug.sugList[K];
              re(_e, "search_sug", "-1,-1"),
                  n("sugClick", {
                    impr_id: U.current.response.log_pb.impr_id,
                    search_keyword: U.current.inputText,
                    search_type: U.current.tab,
                    sug_keyword: _e
                  }),
                  n("trendingWordsClick", {
                    impr_id: U.current.response.log_pb.impr_id,
                    words_position: K,
                    words_content: _e,
                    raw_query: U.current.inputText,
                    rank: -1,
                    search_position: U.current.tab,
                    query_id: U.current.response.words_query_record.query_id,
                    group_id: U.current.response.sug_list[K].word_record.group_id
                  })
            }, []);
            (0,
                a.useEffect)(function() {
              R && !b && Boolean(s == null ? void 0 : s.length) ? O("history") : R && Boolean(b) && Boolean(p.sugList.length) ? O("sug") : O("idle")
            }, [R, s, p, b]),
                (0,
                    a.useEffect)(function() {
                  !R || L !== null || p.sugList.length && p.query === b || ur("/aweme/v1/web/search/sug/", Kr(Kr({}, He), {}, {
                    keyword: b,
                    source: "aweme_video_web"
                  })).then(function(V) {
                    var K, _e = U.current.tab;
                    U.current.response = V;
                    var ct = V.log_pb.impr_id
                        , ne = V.extra.logId
                        , qt = V.words_query_record.query_id;
                    n("sugShow", {
                      impr_id: ct,
                      search_keyword: b,
                      search_type: _e,
                      sug_keyword: b
                    }),
                        n("trendingShow", {
                          log_pb: V.log_pb,
                          impr_id: ct,
                          search_id: ne,
                          words_num: (V == null || (K = V.sug_list) === null || K === void 0 ? void 0 : K.length) || 0,
                          raw_query: b,
                          search_position: _e
                        }),
                        g({
                          sugList: V == null ? void 0 : V.sug_list.map(function(Mt, tt) {
                            return n("trendingWordsShow", {
                              impr_id: ct,
                              search_id: ne,
                              words_position: tt,
                              words_content: Mt.content,
                              raw_query: b,
                              rank: -1,
                              search_position: _e,
                              query_id: qt,
                              group_id: Mt.word_record.group_id
                            }),
                                Mt.content
                          }),
                          query: b
                        })
                  }).catch(function() {
                    g({
                      sugList: [],
                      query: b
                    })
                  })
                }, [R, b, L]);
            var Ie = (0,
                a.useCallback)(function() {
              c()
            }, [])
                , we = (0,
                a.useCallback)(function(V) {
              var K = V.target.value;
              _(K),
                  I(K),
                  W()
            }, [])
                , qe = (0,
                a.useCallback)(function(V) {
              V.stopPropagation();
              var K = V.currentTarget.dataset.text;
              d(K)
            }, [])
                , $ = (0,
                a.useCallback)(function(V) {
              V.stopPropagation();
              var K = V.currentTarget.dataset.text;
              _(K),
                  I(K),
                  W()
            }, [])
                , pe = (0,
                a.useCallback)(function() {
              n("enterSearch", {
                enter_from: kn(),
                enter_from_second: kn()
              }),
                  U.current.focusTime = performance.now(),
                  F(!0)
            }, [])
                , et = (0,
                a.useCallback)(function() {
              F(!1)
            }, [])
                , Ye = (0,
                a.useCallback)(function() {
              U.current.isPinyin = !0
            }, [])
                , st = (0,
                a.useCallback)(function() {
              U.current.isPinyin = !1
            }, []);
            return {
              history: s,
              showText: P,
              suggestionState: C,
              onFocus: pe,
              inputFocus: R,
              onBlur: et,
              onInputChange: we,
              onSearchClick: ue,
              onInputKeyDown: Q,
              clearHistory: Ie,
              onHistoryClick: Y,
              onSugClick: H,
              onDeleteHistoryItem: qe,
              sug: p,
              setInputText: _,
              onSetSug: $,
              preventDefault: hv,
              onMouseDown: J,
              inputRef: N,
              formRef: z,
              onCompositionStart: Ye,
              onCompositionEnd: st,
              keyboardNavIndex: L
            }
          }
          var be = {
            searchBar: "_7bced65174c7e8498243a4e5b0a769f7-scss",
            input: "_28bcf0c81eecec324dc834fd9da6bc14-scss",
            blur: "_995df5bec116ef593426dbf2a410fa26-scss",
            button: "_913d1e3dbc906c79f2227a5d1a6e4d6c-scss",
            suggestion: "_04c5ea5f8b2c42eb36eb0013b564a3f1-scss",
            titleView: "_45d9562c20039e1e0ea8c9f7c22cdd15-scss",
            suggestionItem: "_21381500f58829ddd8151fca321e57ca-scss",
            keyboardSelected: "c54868746f3295b974da1cd21e114e36-scss",
            suggestionItemContext: "_327461e51981305199e773e86ac7701d-scss",
            queryMatch: "_103457b7e2b6d6e789d90247444fa465-scss",
            svgHover: "_1b805851682b45a8cf304f864fddf4d6-scss"
          };
          function Wa(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          var wv = function(r) {
            var t = r.words
                , n = r.query
                , o = r.matchClass
                , i = (t === n ? [""] : t.split(n)).map(function(u, l) {
              return u === "" ? a.createElement("span", {
                key: l,
                className: o
              }, n) : u
            });
            return a.createElement("span", {
              className: be.suggestionItemContext
            }, i)
          }
              , _v = function(r) {
            var t, n, o = (0,
                Ue.TH)(), i = o.pathname, u = r.onSearchClick, l = r.onHistoryClick, s = r.onInputKeyDown, c = bv(((t = r.userInfo) === null || t === void 0 || (n = t.info) === null || n === void 0 ? void 0 : n.secUid) || L0), d = c.inputRef, f = c.formRef, m = c.showText, v = c.suggestionState, p = c.keyboardNavIndex, g = c.onFocus, h = c.inputFocus, y = c.onBlur, b = c.onInputChange, _ = c.onMouseDown, A = c.onSearchClick, S = c.onInputKeyDown, P = c.clearHistory, I = c.onHistoryClick, x = c.onSugClick, T = c.history, C = c.sug, O = c.onSetSug, k = c.onDeleteHistoryItem, B = c.preventDefault, R = c.onCompositionStart, F = c.onCompositionEnd, M = (0,
                a.useCallback)(function(N) {
              var z = d.current.value
                  , U = u && u(z);
              U && A(N)
            }, []), L = (0,
                a.useCallback)(function(N) {
              var z = l && l(N);
              z && I(N)
            }, []), W = (0,
                a.useCallback)(function(N) {
              var z = d.current.value
                  , U = s && s(N, z);
              U && S(N)
            }, []);
            return a.createElement("div", {
              className: be.searchBar
            }, a.createElement("form", {
              action: "",
              target: "_blank",
              ref: f,
              style: {
                display: "flex",
                flex: 1
              }
            }, a.createElement("input", {
              type: "text",
              name: "source",
              style: {
                display: "none"
              }
            }), a.createElement("input", {
              type: "text",
              name: "aid",
              style: {
                display: "none"
              }
            }), a.createElement("input", {
              type: "text",
              name: "enter_from",
              style: {
                display: "none"
              }
            }), a.createElement("input", {
              ref: d,
              value: m,
              onFocus: g,
              onBlur: y,
              onChange: b,
              onKeyDown: W,
              onCompositionStart: R,
              onCompositionEnd: F,
              className: j()(be.input, Wa({}, be.blur, !h && !i.match(/^\/search/))),
              type: "text",
              maxLength: 100,
              placeholder: "\u641C\u7D22\u89C6\u9891\u548C\u7528\u6237"
            }), a.createElement("input", {
              type: "submit",
              value: "Submit",
              style: {
                display: "none"
              }
            })), a.createElement("button", {
              className: be.button,
              type: "button",
              onMouseDown: _,
              onClick: M
            }, a.createElement(x0, null), a.createElement("span", {
              className: "btn-title"
            }, "\u641C\u7D22")), v === "history" && a.createElement("div", {
              className: be.suggestion,
              onMouseDown: B
            }, a.createElement("div", {
              className: be.titleView
            }, a.createElement("span", {
              className: "history-title"
            }, "\u5386\u53F2\u8BB0\u5F55"), a.createElement("span", {
              className: "clear-btn",
              onClick: P
            }, "\u6E05\u9664\u5168\u90E8")), T && T.slice(0, Ua).map(function(N, z) {
              return a.createElement("div", {
                "data-text": N,
                onClick: L,
                className: j()(be.suggestionItem, Wa({}, be.keyboardSelected, z === p)),
                key: N
              }, a.createElement("span", {
                className: be.suggestionItemContext
              }, N), a.createElement("div", {
                className: "icon",
                "data-text": N,
                onClick: k
              }, a.createElement(R0, {
                className: be.svgHover
              })))
            })), v === "sug" && a.createElement("div", {
              className: be.suggestion,
              onMouseDown: B
            }, C.sugList.slice(0, Ua).map(function(N, z) {
              return a.createElement("div", {
                "data-index": z,
                onClick: x,
                className: j()(be.suggestionItem, Wa({}, be.keyboardSelected, z === p)),
                key: N
              }, a.createElement(wv, {
                words: N,
                query: C.query,
                matchClass: be.queryMatch
              }), a.createElement("div", {
                className: "icon",
                "data-text": N,
                onClick: O
              }, a.createElement(k0, {
                className: be.svgHover
              })))
            })))
          }
              , y3 = null
              , Ve = {
            container: "_2a8558639e6fca67dc8406296920bd21-scss",
            fixed: "d19baf4bcabde178eefcebd3f4df0aea-scss",
            header: "d1401c45c2ad52aa92a02c4cdea7edad-scss",
            logoCt: "_171c431d2f07bedd7c6f4a5735ace648-scss",
            logo: "cfd13d314f439d972881950df4619254-scss",
            searchCt: "_1e955d9673a39310dbeb0c73efefd558-scss",
            searchBlank: "_06d093177aaa248532646b0658fd757d-scss",
            menuCt: "_2837e1f9c208f00d1cd4e994df2f9a61-scss",
            floatRight: "_8f813fd65520931eebf833288ca9cd52-scss",
            searchInnerCt: "_247991e0eaa62bbd2d29168a7c0af157-scss",
            searchInput: "c9812c8e289b7ab81ff7336c28ee1d10-scss"
          }
              , b3 = E(10689)
              , w3 = E(90193)
              , _3 = E(88748)
              , Fl = {
            toastWrapper: "c40012825d3cd728adba9163c63f2877-scss",
            toast: "_9b00d27e3aa8c39515a9de377b5e2c05-scss"
          };
          function vr(e) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? vr = function(t) {
                  return typeof t
                }
                : vr = function(t) {
                  return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                ,
                vr(e)
          }
          function Ml(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
              })),
                  t.push.apply(t, n)
            }
            return t
          }
          function Va(e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r] != null ? arguments[r] : {};
              r % 2 ? Ml(Object(t), !0).forEach(function(n) {
                Ka(e, n, t[n])
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ml(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              })
            }
            return e
          }
          function Ev(e, r) {
            if (!(e instanceof r))
              throw new TypeError("Cannot call a class as a function")
          }
          function Bl(e, r) {
            for (var t = 0; t < r.length; t++) {
              var n = r[t];
              n.enumerable = n.enumerable || !1,
                  n.configurable = !0,
              "value"in n && (n.writable = !0),
                  Object.defineProperty(e, n.key, n)
            }
          }
          function Cv(e, r, t) {
            return r && Bl(e.prototype, r),
            t && Bl(e, t),
                e
          }
          function Av(e, r) {
            if (typeof r != "function" && r !== null)
              throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(r && r.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }),
            r && za(e, r)
          }
          function za(e, r) {
            return za = Object.setPrototypeOf || function(n, o) {
              return n.__proto__ = o,
                  n
            }
                ,
                za(e, r)
          }
          function Sv(e) {
            var r = Pv();
            return function() {
              var n = Gr(e), o;
              if (r) {
                var i = Gr(this).constructor;
                o = Reflect.construct(n, arguments, i)
              } else
                o = n.apply(this, arguments);
              return Iv(this, o)
            }
          }
          function Iv(e, r) {
            return r && (vr(r) === "object" || typeof r == "function") ? r : Dl(e)
          }
          function Dl(e) {
            if (e === void 0)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
          }
          function Pv() {
            if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
              return !1;
            if (typeof Proxy == "function")
              return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                  !0
            } catch (e) {
              return !1
            }
          }
          function Gr(e) {
            return Gr = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
              return t.__proto__ || Object.getPrototypeOf(t)
            }
                ,
                Gr(e)
          }
          function Ka(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          var pr = null
              , Gt = null
              , Ga = null
              , Qt = null
              , jl = {
            text: "",
            duration: 3e3
          }
              , ye = function(e) {
            Av(t, e);
            var r = Sv(t);
            function t() {
              var n;
              Ev(this, t);
              for (var o = arguments.length, i = new Array(o), u = 0; u < o; u++)
                i[u] = arguments[u];
              return n = r.call.apply(r, [this].concat(i)),
                  Ka(Dl(n), "state", {
                    showToast: !1,
                    text: ""
                  }),
                  n
            }
            return Cv(t, [{
              key: "handleShowToast",
              value: function() {
                var o = this;
                Gt && (clearTimeout(Gt),
                    Gt = null);
                var i = t.textList.shift()
                    , u = i.text
                    , l = i.duration;
                this.setState({
                  showToast: !0,
                  text: u
                }),
                    Gt = setTimeout(function() {
                      t.textList.length ? o.handleCloseToast(function() {
                        setTimeout(o.handleShowToast.bind(o), 50)
                      }) : (o.handleCloseToast(),
                          o.destroy()),
                          Gt = null
                    }, l)
              }
            }, {
              key: "handleCloseToast",
              value: function(o) {
                this.setState({
                  showToast: !1
                }, function() {
                  return o && o()
                })
              }
            }, {
              key: "destroy",
              value: function() {
                Ga.removeChild(Qt),
                    pr = null
              }
            }, {
              key: "render",
              value: function() {
                var o = this.state
                    , i = o.showToast
                    , u = o.text;
                return a.createElement(a.Fragment, null, i && a.createElement("div", {
                  className: Fl.toast
                }, u))
              }
            }], [{
              key: "create",
              value: function(o, i) {
                if (pr)
                  return o && o(pr);
                Ga = i || document.body;
                var u = document.querySelector("#toastContainer");
                u || (Qt = document.createElement("div"),
                    Qt.className = Fl.toastWrapper,
                    Qt.id = "toastContainer"),
                    Ga.appendChild(Qt),
                    Tn.render(a.createElement(t, {
                      ref: function(s) {
                        pr = s,
                        o && o(pr)
                      }
                    }), Qt)
              }
            }, {
              key: "info",
              value: function(o, i) {
                var u = Va({}, jl);
                typeof o == "string" ? u.text = o : vr(o) === "object" && o !== null && (u = Va(Va({}, jl), o)),
                    this.textList.push(u),
                    this.create(function(l) {
                      Gt || l.handleShowToast()
                    }, i)
              }
            }]),
                t
          }(a.Component);
          Ka(ye, "textList", []);
          var xv = E(7571)
              , Ul = E.n(xv);
          function Ov(e, r) {
            return Nv(e) || kv(e, r) || Tv(e, r) || Rv()
          }
          function Rv() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function Tv(e, r) {
            if (!!e) {
              if (typeof e == "string")
                return Hl(e, r);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              if (t === "Object" && e.constructor && (t = e.constructor.name),
              t === "Map" || t === "Set")
                return Array.from(e);
              if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return Hl(e, r)
            }
          }
          function Hl(e, r) {
            (r == null || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
              n[t] = e[t];
            return n
          }
          function kv(e, r) {
            var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (t != null) {
              var n = [], o = !0, i = !1, u, l;
              try {
                for (t = t.call(e); !(o = (u = t.next()).done) && (n.push(u.value),
                    !(r && n.length === r)); o = !0)
                  ;
              } catch (s) {
                i = !0,
                    l = s
              } finally {
                try {
                  !o && t.return != null && t.return()
                } finally {
                  if (i)
                    throw l
                }
              }
              return n
            }
          }
          function Nv(e) {
            if (Array.isArray(e))
              return e
          }
          function Wl() {
            var e = (0,
                a.useState)([])
                , r = Ov(e, 2)
                , t = r[0]
                , n = r[1]
                , o = function(s) {
              return s.sort(function(c, d) {
                return new Date(d.time).getTime() - new Date(c.time).getTime()
              })
            }
                , i = function(s) {
              var c, d = window.localStorage.getItem(me == null || (c = ee) === null || c === void 0 ? void 0 : c.LOG_TRACE) || "";
              if (d) {
                var f = JSON.parse(d)
                    , m = o(f)
                    , v = JSON.stringify(m);
                s && s({
                  logTraceStr: v,
                  logTraceJSON: m
                })
              }
            }
                , u = function() {
              try {
                i(function(s) {
                  var c = s.logTraceStr;
                  Ul()(c),
                      ye.info("\u5DF2\u590D\u5236\u8C03\u8BD5\u4FE1\u606F\u5230\u526A\u5207\u677F")
                })
              } catch (s) {
                ye.info("\u8C03\u8BD5\u4FE1\u606F\u590D\u5236\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")
              }
            };
            return (0,
                a.useEffect)(function() {
              try {
                i(function(l) {
                  var s = l.logTraceJSON;
                  n(s)
                })
              } catch (l) {}
            }, []),
                [t, u]
          }
          function Lv(e, r) {
            return Dv(e) || Bv(e, r) || Mv(e, r) || Fv()
          }
          function Fv() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function Mv(e, r) {
            if (!!e) {
              if (typeof e == "string")
                return Vl(e, r);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              if (t === "Object" && e.constructor && (t = e.constructor.name),
              t === "Map" || t === "Set")
                return Array.from(e);
              if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return Vl(e, r)
            }
          }
          function Vl(e, r) {
            (r == null || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
              n[t] = e[t];
            return n
          }
          function Bv(e, r) {
            var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (t != null) {
              var n = [], o = !0, i = !1, u, l;
              try {
                for (t = t.call(e); !(o = (u = t.next()).done) && (n.push(u.value),
                    !(r && n.length === r)); o = !0)
                  ;
              } catch (s) {
                i = !0,
                    l = s
              } finally {
                try {
                  !o && t.return != null && t.return()
                } finally {
                  if (i)
                    throw l
                }
              }
              return n
            }
          }
          function Dv(e) {
            if (Array.isArray(e))
              return e
          }
          function jv(e) {
            var r = e.userInfo
                , t = e.onChangeLoginStatus
                , n = Wl()
                , o = Lv(n, 2)
                , i = o[0]
                , u = o[1]
                , l = (0,
                a.useCallback)(function(s) {
              if (s !== "87A38998227CBBC23DCAD51CD7F76AB2")
                return !0;
              u()
            }, []);
            return a.createElement("div", {
              className: Ve.container
            }, a.createElement("div", {
              className: Ve.fixed
            }, a.createElement("header", {
              className: Ve.header
            }, a.createElement("div", {
              className: Ve.logoCt
            }, a.createElement("a", {
              href: Qn(),
              className: Ve.logo
            })), a.createElement("div", {
              className: Ve.searchCt
            }, a.createElement("div", {
              className: Ve.searchInnerCt
            }, a.createElement("div", {
              className: Ve.searchBlank
            }), a.createElement("div", {
              className: Ve.searchInput
            }, a.createElement(_v, {
              userInfo: r,
              onSearchClick: function(c) {
                return l(c)
              },
              onHistoryClick: function(c) {
                var d = c.currentTarget.dataset.text;
                return l(d)
              },
              onInputKeyDown: function(c, d) {
                if ((c == null ? void 0 : c.code) === "Enter")
                  return l(d)
              }
            })))), a.createElement("div", {
              className: Ve.menuCt
            }, a.createElement("div", {
              className: Ve.floatRight
            }, a.createElement(I0, {
              success: t,
              userInfo: r
            }))))))
          }
          function Uv() {
            var e = it
                , r = (0,
                a.useContext)(e) || {}
                , t = r.userInfo
                , n = r.dispatch;
            return a.createElement(jv, {
              userInfo: t,
              onChangeLoginStatus: function() {
                n({
                  type: "updateUserInfo"
                })
              }
            })
          }
          var Hv = {
            pageView: {
              eventName: "page_view",
              params: {
                url: "",
                url_path: "",
                enter_from: "",
                link_from: ""
              }
            },
            pageStayTime: {
              eventName: "page_stay_time",
              params: {
                url: "",
                url_path: "",
                enter_from: "",
                duration: 0,
                is_visible: 1,
                link_from: ""
              }
            }
          }
              , zl = new ot(Hv);
          function Kl(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function Gl(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      Kl(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      Kl(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          function Wv(e, r) {
            return Gv(e) || Kv(e, r) || zv(e, r) || Vv()
          }
          function Vv() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function zv(e, r) {
            if (!!e) {
              if (typeof e == "string")
                return Ql(e, r);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              if (t === "Object" && e.constructor && (t = e.constructor.name),
              t === "Map" || t === "Set")
                return Array.from(e);
              if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return Ql(e, r)
            }
          }
          function Ql(e, r) {
            (r == null || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
              n[t] = e[t];
            return n
          }
          function Kv(e, r) {
            var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (t != null) {
              var n = [], o = !0, i = !1, u, l;
              try {
                for (t = t.call(e); !(o = (u = t.next()).done) && (n.push(u.value),
                    !(r && n.length === r)); o = !0)
                  ;
              } catch (s) {
                i = !0,
                    l = s
              } finally {
                try {
                  !o && t.return != null && t.return()
                } finally {
                  if (i)
                    throw l
                }
              }
              return n
            }
          }
          function Gv(e) {
            if (Array.isArray(e))
              return e
          }
          function Yl(e) {
            var r = e.children
                , t = e.user
                , n = e.webId
                , o = it
                , i = Om(er, t)
                , u = Wv(i, 2)
                , l = u[0]
                , s = u[1]
                , c = (0,
                Ue.k6)();
            return kd(l.isLogin),
            n && gi(n),
                em(),
                (0,
                    a.useEffect)(function() {
                  Wn(function(d, f) {
                    var m = (0,
                        De.parse)(window.location.search).previous_page || ""
                        , v = {
                      app_code_link: "app_code",
                      web_code_link: "web_code"
                    };
                    f > 0 && zl.sendLog("pageStayTime", {
                      enter_from: X(),
                      url: location.href,
                      url_path: location.pathname,
                      duration: f,
                      is_visible: Number(d),
                      link_from: v[m] || ""
                    })
                  })
                }, []),
                (0,
                    a.useEffect)(function() {
                  l.statusCode === he.ERROR_USER_FORBIDEN && Pi("")
                }, [l]),
                (0,
                    a.useEffect)(function() {
                  s({
                    type: "updateUserInfo"
                  })
                }, []),
                (0,
                    a.useEffect)(function() {
                  var d = l || {}
                      , f = d.info
                      , m = Sr()
                      , v = (0,
                      De.parse)(window.location.search).previous_page || ""
                      , p = {
                    app_code_link: "app_code",
                    web_code_link: "web_code"
                  };
                  function g() {
                    X() && (f != null && f.uid || m) && zl.sendLog("pageView", {
                      enter_from: X(),
                      url: location.href,
                      url_path: location.pathname,
                      link_from: p[v] || ""
                    })
                  }
                  g(),
                      c.listen(g)
                }, [c]),
                (0,
                    a.useEffect)(function() {
                  function d() {
                    return f.apply(this, arguments)
                  }
                  function f() {
                    return f = Gl(regeneratorRuntime.mark(function m() {
                      var v, p, g, h, y;
                      return regeneratorRuntime.wrap(function(_) {
                        for (; ; )
                          switch (_.prev = _.next) {
                            case 0:
                              return v = {
                                appKey: Ci,
                                channel: "cn"
                              },
                              l != null && l.isLogin && l !== null && l !== void 0 && l.info && (p = l.info,
                                  g = p.uid,
                                  h = p.nickname,
                                  v.userInfo = {
                                    user_id: g,
                                    user_name: h
                                  }),
                                  _.next = 4,
                                  nm(v);
                            case 4:
                              y = _.sent,
                                  y.start();
                            case 6:
                            case "end":
                              return _.stop()
                          }
                      }, m)
                    })),
                        f.apply(this, arguments)
                  }
                  try {
                    d()
                  } catch (m) {}
                }, []),
                a.createElement(o.Provider, {
                  value: {
                    userInfo: l,
                    dispatch: s
                  }
                }, a.createElement("div", {
                  style: {
                    height: "100%",
                    display: "flex",
                    flexDirection: "column"
                  }
                }, a.createElement(Uv, null), a.createElement("div", {
                  style: {
                    flex: 1
                  }
                }, r), a.createElement(Md, null), a.createElement(Hn, null)))
          }
          Yl.getInitialProps = function() {
            var e = Gl(regeneratorRuntime.mark(function r(t) {
              var n, o, i, u;
              return regeneratorRuntime.wrap(function(s) {
                for (; ; )
                  switch (s.prev = s.next) {
                    case 0:
                      return n = t.ctx,
                          s.next = 3,
                          Jm(n);
                    case 3:
                      if (o = s.sent,
                          i = o.statusCode,
                          u = o.user,
                          n = n || {},
                          !(i === 0 && u)) {
                        s.next = 10;
                        break
                      }
                      return n.user = {
                        isLogin: !0,
                        info: u,
                        statusCode: i
                      },
                          s.abrupt("return", {
                            webId: n.webId,
                            user: n.user
                          });
                    case 10:
                      return s.abrupt("return", {
                        webId: n.webId,
                        user: {
                          isLogin: !1,
                          statusCode: i || -1
                        }
                      });
                    case 11:
                    case "end":
                      return s.stop()
                  }
              }, r)
            }));
            return function(r) {
              return e.apply(this, arguments)
            }
          }();
          var Qv = Yl, Yt = {
            errorPage: "eec047cb017e885666fc15bdebd6c52f-scss",
            icon: "_4390989690f1550046cdd1533f356870-scss",
            title: "_5930dce47d9957a02efeda459eb53139-scss",
            desc: "_43fdad32e86ba1fd1b2215db8ba405e8-scss",
            buttonGroup: "_10b2024926f79af13f812ed212e19ef8-scss"
          }, Yv = E(41219), Xv = E(20643), $v = E(53715), Zv = E(98751), Jv = E(39627), qv = E(35663), ep = E(12412), bt;
          (function(e) {
                e.unfollow = "unfollow",
                    e.emptyList = "emptyList",
                    e.emptySearch = "emptySearch",
                    e.noLogin = "noLogin",
                    e.notFound = "notFound",
                    e.noNetwork = "noNetwork",
                    e.serverError = "serverError"
              }
          )(bt || (bt = {}));
          var tp = {
            unfollow: a.createElement("img", {
              src: Yv,
              style: {
                width: 240,
                height: 160
              }
            }),
            emptyList: a.createElement("img", {
              src: $v,
              style: {
                width: 240,
                height: 160
              }
            }),
            emptySearch: a.createElement("img", {
              src: Zv,
              style: {
                width: 236,
                height: 158
              }
            }),
            noLogin: a.createElement("img", {
              src: Jv,
              style: {
                width: 240,
                height: 160
              }
            }),
            notFound: a.createElement("img", {
              src: Xv,
              style: {
                width: 240,
                height: 160
              }
            }),
            noNetwork: a.createElement("img", {
              src: ep,
              style: {
                width: 236,
                height: 157
              }
            }),
            serverError: a.createElement("img", {
              src: qv,
              style: {
                width: 240,
                height: 160
              }
            })
          };
          function Xt(e) {
            var r = e.type
                , t = r === void 0 ? "notFound" : r
                , n = e.title
                , o = n === void 0 ? "" : n
                , i = e.desc
                , u = i === void 0 ? "" : i
                , l = e.className
                , s = l === void 0 ? "" : l
                , c = e.style
                , d = c === void 0 ? {} : c
                , f = e.primaryButtonTitle
                , m = f === void 0 ? "" : f
                , v = e.primaryButtonAction
                , p = e.secondaryButtonTitle
                , g = p === void 0 ? "" : p
                , h = e.secondaryButtonAction;
            return a.createElement("div", {
              className: j()(Yt.errorPage, s),
              style: d
            }, a.createElement("div", {
              className: Yt.icon
            }, tp[t]), o && a.createElement("div", {
              className: Yt.title
            }, o), typeof u == "string" ? a.createElement("div", {
              className: Yt.desc
            }, u) : u.map(function(y, b) {
              return a.createElement("div", {
                key: b,
                className: Yt.desc
              }, y)
            }), a.createElement("div", {
              className: Yt.buttonGroup
            }, g && h && a.createElement(Pe, {
              size: "normal",
              type: "secondary",
              onClick: h
            }, g), m && v && a.createElement(Pe, {
              autoFixed: !1,
              size: "normal",
              type: "primary",
              onClick: v
            }, m)))
          }
          function Xl(e) {
            var r = e.title
                , t = e.desc
                , n = e.className
                , o = e.style
                , i = e.primaryButtonTitle
                , u = e.primaryButtonAction
                , l = e.secondaryButtonTitle
                , s = e.secondaryButtonAction;
            return a.createElement(Xt, {
              style: o,
              className: n,
              type: bt.noNetwork,
              title: r || "\u7F51\u7EDC\u51FA\u73B0\u95EE\u9898",
              desc: t || "\u8BF7\u68C0\u67E5\u7F51\u7EDC\u8FDE\u63A5\u540E\u91CD\u8BD5",
              primaryButtonTitle: i,
              primaryButtonAction: u,
              secondaryButtonTitle: l || "\u5237\u65B0",
              secondaryButtonAction: s || function() {
                window.location.reload()
              }
            })
          }
          function $t(e) {
            var r = e.title
                , t = e.desc
                , n = e.className
                , o = e.style
                , i = e.primaryButtonTitle
                , u = e.primaryButtonAction
                , l = e.secondaryButtonTitle
                , s = e.secondaryButtonAction;
            return a.createElement(Xt, {
              style: o,
              className: n,
              type: bt.notFound,
              title: r || "404",
              desc: t || "\u9875\u9762\u4E0D\u89C1\u4E86",
              primaryButtonTitle: i,
              primaryButtonAction: u,
              secondaryButtonTitle: l,
              secondaryButtonAction: s
            })
          }
          function wt(e) {
            var r = e.title
                , t = e.desc
                , n = e.className
                , o = e.style
                , i = e.primaryButtonTitle
                , u = e.primaryButtonAction
                , l = e.secondaryButtonTitle
                , s = e.secondaryButtonAction;
            return a.createElement(Xt, {
              style: o,
              className: n,
              type: bt.serverError,
              title: r || "\u670D\u52A1\u51FA\u73B0\u5F02\u5E38",
              desc: t,
              primaryButtonTitle: i,
              primaryButtonAction: u,
              secondaryButtonTitle: l,
              secondaryButtonAction: s
            })
          }
          function $e(e) {
            var r = e.title
                , t = r === void 0 ? "\u79C1\u5BC6\u8D26\u53F7" : r
                , n = e.desc
                , o = e.className
                , i = e.style
                , u = e.primaryButtonTitle
                , l = e.primaryButtonAction
                , s = e.secondaryButtonTitle
                , c = e.secondaryButtonAction;
            return a.createElement(Xt, {
              style: i,
              className: o,
              type: bt.emptyList,
              title: t,
              desc: n || "\u53D1\u8D77\u5173\u6CE8\u8BF7\u6C42\uFF0C\u901A\u8FC7\u540E\u5373\u53EF\u67E5\u770B\u8BE5\u5E10\u53F7\u5185\u5BB9",
              primaryButtonTitle: u,
              primaryButtonAction: l,
              secondaryButtonTitle: s,
              secondaryButtonAction: c
            })
          }
          function $l(e) {
            var r = e.title
                , t = e.desc
                , n = e.className
                , o = e.style
                , i = e.primaryButtonTitle
                , u = e.primaryButtonAction
                , l = e.secondaryButtonTitle
                , s = e.secondaryButtonAction;
            return a.createElement(Xt, {
              style: o,
              className: n,
              type: bt.emptySearch,
              title: r || "\u65E0\u641C\u7D22\u5185\u5BB9",
              desc: t,
              primaryButtonTitle: i,
              primaryButtonAction: u,
              secondaryButtonTitle: l,
              secondaryButtonAction: s
            })
          }
          function Zl(e) {
            return a.createElement($t, null)
          }
          var Jl = E(93489)
              , gr = {
            about: "bda465dab0f0daef39931412880e442c-scss",
            container: "a64db1a68fccb27eeeccf9471bd25a56-scss",
            item: "_7e0f509d70a47876eb8b16f305523dbd-scss",
            test2: "a2b4d73d10bc0ea2346e78dc06e19e13-scss",
            itemWrap: "_02afa7db2ec1a3809b84c3d51a11a406-scss"
          }
              , ql = E(90317);
          function rp(e, r) {
            return ip(e) || op(e, r) || ap(e, r) || np()
          }
          function np() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function ap(e, r) {
            if (!!e) {
              if (typeof e == "string")
                return es(e, r);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              if (t === "Object" && e.constructor && (t = e.constructor.name),
              t === "Map" || t === "Set")
                return Array.from(e);
              if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return es(e, r)
            }
          }
          function es(e, r) {
            (r == null || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
              n[t] = e[t];
            return n
          }
          function op(e, r) {
            var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (t != null) {
              var n = [], o = !0, i = !1, u, l;
              try {
                for (t = t.call(e); !(o = (u = t.next()).done) && (n.push(u.value),
                    !(r && n.length === r)); o = !0)
                  ;
              } catch (s) {
                i = !0,
                    l = s
              } finally {
                try {
                  !o && t.return != null && t.return()
                } finally {
                  if (i)
                    throw l
                }
              }
              return n
            }
          }
          function ip(e) {
            if (Array.isArray(e))
              return e
          }
          function ts(e) {
            var r = (0,
                ql.Z)()
                , t = rp(r, 2)
                , n = t[0]
                , o = t[1]
                , i = (0,
                a.useRef)(!1);
            return !i.current && o && (e && e(),
                i.current = !0),
                n
          }
          var E3 = E(71502)
              , C3 = "YYYY-MM-DD HH:mm";
          function rs(e) {
            if (!e || isNaN(e))
              return "";
            var r = pt()(e)
                , t = pt()();
            return t.diff(r, "year") > 0 ? "".concat(t.diff(r, "year"), "\u5E74\u524D") : t.diff(r, "month") > 0 ? "".concat(t.diff(r, "month"), "\u6708\u524D") : t.diff(r, "week") > 0 ? "".concat(t.diff(r, "week"), "\u5468\u524D") : t.diff(r, "day") > 0 ? "".concat(t.diff(r, "day"), "\u5929\u524D") : t.diff(r, "hour") > 0 ? "".concat(t.diff(r, "hour"), "\u5C0F\u65F6\u524D") : t.diff(r, "minute") > 0 ? "".concat(t.diff(r, "minute"), "\u5206\u949F\u524D") : "\u521A\u521A"
          }
          function ns(e) {
            var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
            return (Math.round(Number("".concat(e, "e").concat(r))) / Math.pow(10, r)).toFixed(r)
          }
          function xe() {
            var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, r = 1e4, t = 1e4 * r, n;
            return e < r ? n = e.toString() : e < t - 1 ? n = "".concat(ns(e / r), "w") : n = "".concat(ns(e / t), "\u4EBF"),
                n
          }
          function up(e) {
            var r = new Date(2018,8,18).valueOf() + e
                , t = pt()(r).format("HH");
            return t !== "00" ? pt()(r).format("HH:mm:ss") : pt()(r).format("mm:ss")
          }
          var Qr = null
              , as = null
              , lp = null;
          function sp(e) {
            for (var r = "", t = "", n = 0, o = !0; e > 0; ) {
              var i = e % 10;
              i === 0 ? o || (o = !0,
                  t = Qr[i] + t) : (o = !1,
                  r = Qr[i],
                  r += lp[n],
                  t = r + t),
                  n++,
                  e = Math.floor(e / 10)
            }
            return t
          }
          function A3(e) {
            var r = 0
                , t = ""
                , n = ""
                , o = !1;
            if (e === 0)
              return Qr[0];
            for (; e > 0; ) {
              var i = e % 1e4;
              o && (n = Qr[0] + n),
                  t = sp(i),
                  t += i !== 0 ? as[r] : as[0],
                  n = t + n,
                  o = i < 1e3 && i > 0,
                  e = Math.floor(e / 1e4),
                  r++
            }
            return n
          }
          var cp = E(72571)
              , w = "//sf3-ttcdn-tos.pstatp.com/obj/ies-douyin-opencn/emoji/"
              , fp = {
            "[\u5FAE\u7B11]": {
              name: "\u5FAE\u7B11",
              img: "".concat(w, "weixiao-3x.png"),
              hide: 0
            },
            "[\u8272]": {
              name: "\u8272",
              img: "".concat(w, "aimu-3x.png"),
              hide: 0
            },
            "[\u7231\u6155]": {
              name: "\u7231\u6155",
              img: "".concat(w, "aimu-3x.png"),
              hide: 0
            },
            "[\u6342\u8138]": {
              name: "\u6342\u8138",
              img: "".concat(w, "wulian-3x.png"),
              hide: 0
            },
            "[\u5472\u7259]": {
              name: "\u5472\u7259",
              img: "".concat(w, "ziya-3x.png"),
              hide: 0
            },
            "[\u5927\u7B11]": {
              name: "\u5927\u7B11",
              img: "".concat(w, "daxiao-3x.png"),
              hide: 0
            },
            "[\u53D1\u6012]": {
              name: "\u53D1\u6012",
              img: "".concat(w, "fanu-3x.png"),
              hide: 0
            },
            "[\u7075\u673A\u4E00\u52A8]": {
              name: "\u7075\u673A\u4E00\u52A8",
              img: "".concat(w, "lingguangyishan-3x.png"),
              hide: 0
            },
            "[\u7075\u5149\u4E00\u95EA]": {
              name: "\u7075\u5149\u4E00\u95EA",
              img: "".concat(w, "lingguangyishan-3x.png"),
              hide: 0
            },
            "[\u62A0\u9F3B]": {
              name: "\u62A0\u9F3B",
              img: "".concat(w, "koubi-3x.png"),
              hide: 0
            },
            "[\u5BB3\u7F9E]": {
              name: "\u5BB3\u7F9E",
              img: "".concat(w, "haixiu-3x.png"),
              hide: 0
            },
            "[\u8C03\u76AE]": {
              name: "\u8C03\u76AE",
              img: "".concat(w, "keai-3x.png"),
              hide: 0
            },
            "[\u53EF\u7231]": {
              name: "\u53EF\u7231",
              img: "".concat(w, "keai-3x.png"),
              hide: 0
            },
            "[\u5403\u74DC\u7FA4\u4F17]": {
              name: "\u5403\u74DC\u7FA4\u4F17",
              img: "".concat(w, "chiguaqunzhong-3x.png"),
              hide: 0
            },
            "[\u6655]": {
              name: "\u6655",
              img: "".concat(w, "yun-3x.png"),
              hide: 0
            },
            "[\u95ED\u5634]": {
              name: "\u95ED\u5634",
              img: "".concat(w, "bizui-3x.png"),
              hide: 0
            },
            "[\u7B11\u54ED]": {
              name: "\u7B11\u54ED",
              img: "".concat(w, "xiaoku-3x.png"),
              hide: 0
            },
            "[\u96BE\u8FC7]": {
              name: "\u96BE\u8FC7",
              img: "".concat(w, "nanguo-3x.png"),
              hide: 0
            },
            "[\u4EB2\u4EB2]": {
              name: "\u4EB2\u4EB2",
              img: "".concat(w, "wen-3x.png"),
              hide: 0
            },
            "[\u6765\u770B\u6211]": {
              name: "\u6765\u770B\u6211",
              img: "".concat(w, "laikanwo-3x.png"),
              hide: 0
            },
            "[\u5077\u7B11]": {
              name: "\u5077\u7B11",
              img: "".concat(w, "touxiao-3x.png"),
              hide: 0
            },
            "[\u6253\u8138]": {
              name: "\u6253\u8138",
              img: "".concat(w, "dalian-3x.png"),
              hide: 0
            },
            "[\u7FFB\u767D\u773C]": {
              name: "\u7FFB\u767D\u773C",
              img: "".concat(w, "fanbaiyan-3x.png"),
              hide: 0
            },
            "[\u7761]": {
              name: "\u7761",
              img: "".concat(w, "hanshui-3x.png"),
              hide: 0
            },
            "[\u9F3E\u7761]": {
              name: "\u9F3E\u7761",
              img: "".concat(w, "hanshui-3x.png"),
              hide: 0
            },
            "[\u5978\u7B11]": {
              name: "\u5978\u7B11",
              img: "".concat(w, "jianxiao-3x.png"),
              hide: 0
            },
            "[\u9001\u5FC3]": {
              name: "\u9001\u5FC3",
              img: "".concat(w, "songxin-3x.png"),
              hide: 0
            },
            "[\u5927\u54ED]": {
              name: "\u5927\u54ED",
              img: "".concat(w, "daku-3x.png"),
              hide: 0
            },
            "[\u6293\u72C2]": {
              name: "\u6293\u72C2",
              img: "".concat(w, "zhuakuang-3x.png"),
              hide: 0
            },
            "[\u60CA\u8BB6]": {
              name: "\u60CA\u8BB6",
              img: "".concat(w, "jingya-3x.png"),
              hide: 0
            },
            "[\u9177\u62FD]": {
              name: "\u9177\u62FD",
              img: "".concat(w, "kuye-3x.png"),
              hide: 0
            },
            "[\u6CE3\u4E0D\u6210\u58F0]": {
              name: "\u6CE3\u4E0D\u6210\u58F0",
              img: "".concat(w, "qibuchengsheng-3x.png"),
              hide: 0
            },
            "[\u5927\u91D1\u7259]": {
              name: "\u5927\u91D1\u7259",
              img: "".concat(w, "dajinya-3x.png"),
              hide: 0
            },
            "[\u7591\u95EE]": {
              name: "\u7591\u95EE",
              img: "".concat(w, "what-3x.png"),
              hide: 0
            },
            "[\u5C0F\u9F13\u638C]": {
              name: "\u5C0F\u9F13\u638C",
              img: "".concat(w, "xiaoguzhang-3x.png"),
              hide: 0
            },
            "[\u5410]": {
              name: "\u5410",
              img: "".concat(w, "tu-3x.png")
            },
            "[\u62E5\u62B1]": {
              name: "\u62E5\u62B1",
              img: "".concat(w, "qiubaobao-3x.png"),
              hide: 0
            },
            "[\u60CA\u6050]": {
              name: "\u60CA\u6050",
              img: "".concat(w, "jingkong-3x.png"),
              hide: 0
            },
            "[\u8036]": {
              name: "\u8036",
              img: "".concat(w, "ye-3x.png"),
              hide: 0
            },
            "[\u9189\u4E86]": {
              name: "\u9189\u4E86",
              img: "".concat(w, "zuile-3x.png"),
              hide: 0
            },
            "[\u770B]": {
              name: "\u770B",
              img: "".concat(w, "kan-3x.png"),
              hide: 0
            },
            "[\u4E8C\u54C8]": {
              name: "\u4E8C\u54C8",
              img: "".concat(w, "erha-3x.png"),
              hide: 0
            },
            "[\u5FAE\u7B11\u888B\u9F20]": {
              name: "\u5FAE\u7B11\u888B\u9F20",
              img: "".concat(w, "weixiaodaishu-3x.png"),
              hide: 0
            },
            "[\u51B7\u6F20]": {
              name: "\u51B7\u6F20",
              img: "".concat(w, "lengmo-3x.png"),
              hide: 0
            },
            "[\u6697\u4E2D\u89C2\u5BDF]": {
              name: "\u6697\u4E2D\u89C2\u5BDF",
              img: "".concat(w, "anzhongguancha-3x.png"),
              hide: 0
            },
            "[\u51DD\u89C6]": {
              name: "\u51DD\u89C6",
              img: "".concat(w, "ningshi-3x.png"),
              hide: 0
            },
            "[\u63E1\u722A]": {
              name: "\u63E1\u722A",
              img: "".concat(w, "wozhua-3x.png"),
              hide: 0
            },
            "[\u9526\u9CA4]": {
              name: "\u9526\u9CA4",
              img: "".concat(w, "jinli-3x.png"),
              hide: 0
            },
            "[\u8721\u70DB]": {
              name: "\u8721\u70DB",
              img: "".concat(w, "lazhu-3x.png"),
              hide: 0
            },
            "[\u52A0\u4E00]": {
              name: "\u52A0\u4E00",
              img: "".concat(w, "jiayi-3x.png"),
              hide: 0
            },
            "[\u6211\u9178\u4E86]": {
              name: "\u6211\u9178\u4E86",
              img: "".concat(w, "wosuanle-3x.png"),
              hide: 0
            },
            "[\u52A0\u9E21\u817F]": {
              name: "\u52A0\u9E21\u817F",
              img: "".concat(w, "jiajitui-3x.png"),
              hide: 0
            },
            "[\u6211\u592A\u5357\u4E86]": {
              name: "\u6211\u592A\u5357\u4E86",
              img: "".concat(w, "wotainanle-3x.png"),
              hide: 0
            },
            "[\u624E\u5FC3]": {
              name: "\u624E\u5FC3",
              img: "".concat(w, "zhaxin-3x.png"),
              hide: 0
            },
            "[\u7ED9\u8DEA\u4E86]": {
              name: "\u7ED9\u8DEA\u4E86",
              img: "".concat(w, "geiguile-3x.png"),
              hide: 0
            },
            "[\u8D5E]": {
              name: "\u8D5E",
              img: "".concat(w, "zan-3x.png"),
              hide: 0
            },
            "[\u9F13\u638C]": {
              name: "\u9F13\u638C",
              img: "".concat(w, "guzhang-3x.png"),
              hide: 0
            },
            "[\u6BD4\u5FC3]": {
              name: "\u6BD4\u5FC3",
              img: "".concat(w, "bixin-3x.png"),
              hide: 0
            },
            "[\u611F\u8C22]": {
              name: "\u611F\u8C22",
              img: "".concat(w, "qidao-3x.png"),
              hide: 0
            },
            "[\u7948\u7977]": {
              name: "\u7948\u7977",
              img: "".concat(w, "qidao-3x.png"),
              hide: 0
            },
            "[\u80DC\u5229]": {
              name: "\u80DC\u5229",
              img: "".concat(w, "shengli-3x.png"),
              hide: 0
            },
            "[\u5F3A\u58EE]": {
              name: "\u5F3A\u58EE",
              img: "".concat(w, "jiayou-3x.png"),
              hide: 0
            },
            "[\u52A0\u6CB9]": {
              name: "\u52A0\u6CB9",
              img: "".concat(w, "jiayou-3x.png"),
              hide: 0
            },
            "[OK]": {
              name: "OK",
              img: "".concat(w, "ok-3x.png"),
              hide: 0
            },
            "[ok]": {
              name: "ok",
              img: "".concat(w, "ok-3x.png"),
              hide: 0
            },
            "[\u5F31]": {
              name: "\u5F31",
              img: "".concat(w, "ruo-3x.png"),
              hide: 0
            },
            "[\u62B1\u62F3]": {
              name: "\u62B1\u62F3",
              img: "".concat(w, "baoquan-3x.png"),
              hide: 0
            },
            "[\u52FE\u5F15]": {
              name: "\u52FE\u5F15",
              img: "".concat(w, "gouyin-3x.png"),
              hide: 0
            },
            "[\u518D\u89C1]": {
              name: "\u518D\u89C1",
              img: "".concat(w, "zaijian-3x.png"),
              hide: 0
            },
            "[\u63E1\u624B]": {
              name: "\u63E1\u624B",
              img: "".concat(w, "woshou-3x.png"),
              hide: 0
            },
            "[\u73AB\u7470]": {
              name: "\u73AB\u7470",
              img: "".concat(w, "meigui-3x.png"),
              hide: 0
            },
            "[666]": {
              name: "666",
              img: "".concat(w, "666-3x.png"),
              hide: 0
            },
            "[\u7231\u5FC3]": {
              name: "\u7231\u5FC3",
              img: "".concat(w, "xin-3x.png"),
              hide: 0
            },
            "[\u5FC3]": {
              name: "\u5FC3",
              img: "".concat(w, "xin-3x.png")
            },
            "[\u80E1\u74DC]": {
              name: "\u80E1\u74DC",
              img: "".concat(w, "hugua-3x.png"),
              hide: 0
            },
            "[\u5634\u5507]": {
              name: "\u5634\u5507",
              img: "".concat(w, "kiss-3x.png"),
              hide: 0
            },
            "[kiss]": {
              name: "kiss",
              img: "".concat(w, "kiss-3x.png"),
              hide: 0
            },
            "[\u7ED9\u529B]": {
              name: "\u7ED9\u529B",
              img: "".concat(w, "geili-3x.png"),
              hide: 0
            },
            "[\u5564\u9152]": {
              name: "\u5564\u9152",
              img: "".concat(w, "pijiu-3x.png"),
              hide: 0
            },
            "[\u6D3E\u5BF9]": {
              name: "\u6D3E\u5BF9",
              img: "".concat(w, "sahua-3x.png"),
              hide: 0
            },
            "[\u6492\u82B1]": {
              name: "\u6492\u82B1",
              img: "".concat(w, "sahua-3x.png"),
              hide: 0
            },
            "[\u86CB\u7CD5]": {
              name: "\u86CB\u7CD5",
              img: "".concat(w, "dangao-3x.png"),
              hide: 0
            },
            "[\u7EA2\u5305]": {
              name: "\u7EA2\u5305",
              img: "".concat(w, "hongbao-3x.png"),
              hide: 0
            },
            "[\u793C\u7269]": {
              name: "\u793C\u7269",
              img: "".concat(w, "liwu-3x.png"),
              hide: 0
            },
            "[\u53D1]": {
              name: "\u53D1",
              img: "".concat(w, "fa-3x.png"),
              hide: 0
            },
            "[\u5496\u5561]": {
              name: "\u5496\u5561",
              img: "".concat(w, "kafei-3x.png"),
              hide: 0
            },
            "[\u592A\u9633]": {
              name: "\u592A\u9633",
              img: "".concat(w, "taiyang-3x.png"),
              hide: 0
            },
            "[\u6708\u4EAE]": {
              name: "\u6708\u4EAE",
              img: "".concat(w, "yueliang-3x.png"),
              hide: 0
            },
            "[\u5FC3\u788E]": {
              name: "\u5FC3\u788E",
              img: "".concat(w, "shangxin-3x.png"),
              hide: 0
            },
            "[\u4F24\u5FC3]": {
              name: "\u4F24\u5FC3",
              img: "".concat(w, "shangxin-3x.png"),
              hide: 0
            },
            "[\u4FBF\u4FBF]": {
              name: "\u4FBF\u4FBF",
              img: "".concat(w, "shi-3x.png"),
              hide: 0
            },
            "[\u798F]": {
              name: "\u798F",
              img: "".concat(w, "fu-3x.png"),
              hide: 0
            },
            "[\u4E00\u8D77\u52A0\u6CB9]": {
              name: "\u4E00\u8D77\u52A0\u6CB9",
              img: "".concat(w, "yiqijiayou-3x.png"),
              hide: 0
            },
            "[\u6234\u53E3\u7F69]": {
              name: "\u6234\u53E3\u7F69",
              img: "".concat(w, "daikouzhao-3x.png"),
              hide: 0
            },
            "[\u52E4\u6D17\u624B]": {
              name: "\u52E4\u6D17\u624B",
              img: "".concat(w, "qinxishou-3x.png"),
              hide: 0
            },
            "[\u4E0D\u4FE1\u8C23\u8A00]": {
              name: "\u4E0D\u4FE1\u8C23\u8A00",
              img: "".concat(w, "buxinyaoyan-3x.png"),
              hide: 0
            },
            "[\u60C5\u4E66]": {
              name: "\u60C5\u4E66",
              img: "".concat(w, "qingshu-3x.png"),
              hide: 0
            },
            "[iloveyou]": {
              name: "iloveyou",
              img: "".concat(w, "iloveyou-3x.png"),
              hide: 0
            },
            "[\u5DE7\u514B\u529B]": {
              name: "\u5DE7\u514B\u529B",
              img: "".concat(w, "qiaokeli-3x.png"),
              hide: 0
            },
            "[\u6212\u6307]": {
              name: "\u6212\u6307",
              img: "".concat(w, "jiezhi-3x.png"),
              hide: 0
            },
            "[\u6D41\u6CEA]": {
              name: "\u6D41\u6CEA",
              img: "".concat(w, "liulei-3x.png")
            },
            "[\u6109\u5FEB]": {
              name: "\u6109\u5FEB",
              img: "".concat(w, "xiao-3x.png")
            },
            "[\u7B11]": {
              name: "\u7B11",
              img: "".concat(w, "xiao-3x.png"),
              hide: 0
            },
            "[\u53D1\u5446]": {
              name: "\u53D1\u5446",
              img: "".concat(w, "liangdai-3x.png")
            },
            "[\u60CA\u5446]": {
              name: "\u60CA\u5446",
              img: "".concat(w, "liangdai-3x.png"),
              hide: 0
            },
            "[\u673A\u667A]": {
              name: "\u673A\u667A",
              img: "".concat(w, "jizhi-3x.png")
            },
            "[\u5FEB\u54ED\u4E86]": {
              name: "\u5FEB\u54ED\u4E86",
              img: "".concat(w, "kuaikule-3x.png")
            },
            "[\u51FB\u638C]": {
              name: "\u51FB\u638C",
              img: "".concat(w, "jizhang-3x.png")
            },
            "[\u9ED1\u8138]": {
              name: "\u9ED1\u8138",
              img: "".concat(w, "heilian-3x.png")
            },
            "[\u98DE\u543B]": {
              name: "\u98DE\u543B",
              img: "".concat(w, "feiwen-3x.png")
            },
            "[\u78B0\u62F3]": {
              name: "\u78B0\u62F3",
              img: "".concat(w, "pengquan-3x.png")
            },
            "[\u8214\u5C4F]": {
              name: "\u8214\u5C4F",
              img: "".concat(w, "tianping-3x.png")
            },
            "[\u61A8\u7B11]": {
              name: "\u61A8\u7B11",
              img: "".concat(w, "hanxiao-3x.png")
            },
            "[\u6211\u60F3\u9759\u9759]": {
              name: "\u6211\u60F3\u9759\u9759",
              img: "".concat(w, "woxiangjingjing-3x.png")
            },
            "[\u601D\u8003]": {
              name: "\u601D\u8003",
              img: "".concat(w, "sikao-3x.png")
            },
            "[\u5446\u65E0\u8F9C]": {
              name: "\u5446\u65E0\u8F9C",
              img: "".concat(w, "daiwugu-3x.png")
            },
            "[\u5C34\u5C2C]": {
              name: "\u5C34\u5C2C",
              img: "".concat(w, "heixian-3x.png")
            },
            "[\u9ED1\u7EBF]": {
              name: "\u9ED1\u7EBF",
              img: "".concat(w, "heixian-3x.png"),
              hide: 0
            },
            "[\u5F97\u610F]": {
              name: "\u5F97\u610F",
              img: "".concat(w, "deyi-3x.png")
            },
            "[\u8870]": {
              name: "\u8870",
              img: "".concat(w, "shuai-3x.png")
            },
            "[\u4E92\u7C89]": {
              name: "\u4E92\u7C89",
              img: "".concat(w, "hufen-3x.png")
            },
            "[\u5410\u8840]": {
              name: "\u5410\u8840",
              img: "".concat(w, "tuxie-3x.png")
            },
            "[\u53EF\u601C]": {
              name: "\u53EF\u601C",
              img: "".concat(w, "kelian-3x.png")
            },
            "[\u4E0D\u770B]": {
              name: "\u4E0D\u770B",
              img: "".concat(w, "bukan-3x.png")
            },
            "[\u6478\u5934]": {
              name: "\u6478\u5934",
              img: "".concat(w, "motou-3x.png")
            },
            "[\u53BB\u6C61\u7C89]": {
              name: "\u53BB\u6C61\u7C89",
              img: "".concat(w, "quwufen-3x.png")
            },
            "[\u94B1]": {
              name: "\u94B1",
              img: "".concat(w, "qian-3x.png")
            },
            "[\u6487\u5634]": {
              name: "\u6487\u5634",
              img: "".concat(w, "piezui-3x.png")
            },
            "[\u9707\u60CA]": {
              name: "\u9707\u60CA",
              img: "".concat(w, "zhenliang-3x.png")
            },
            "[V5]": {
              name: "V5",
              img: "".concat(w, "V5-3x.png")
            },
            "[\u83DC\u5200]": {
              name: "\u83DC\u5200",
              img: "".concat(w, "dao-3x.png")
            },
            "[\u5200]": {
              name: "\u5200",
              img: "".concat(w, "dao-3x.png"),
              hide: 0
            },
            "[\u505A\u9B3C\u8138]": {
              name: "\u505A\u9B3C\u8138",
              img: "".concat(w, "zuoguilian-3x.png")
            },
            "[\u76B1\u7709]": {
              name: "\u76B1\u7709",
              img: "".concat(w, "zhoumei-3x.png")
            },
            "[\u6572\u6253]": {
              name: "\u6572\u6253",
              img: "".concat(w, "qiaoda-3x.png")
            },
            "[\u5C2C\u7B11]": {
              name: "\u5C2C\u7B11",
              img: "".concat(w, "gaxiao-3x.png")
            },
            "[\u6050\u60E7]": {
              name: "\u6050\u60E7",
              img: "".concat(w, "kongju-3x.png")
            },
            "[\u60CA\u559C]": {
              name: "\u60CA\u559C",
              img: "".concat(w, "liangxi-3x.png")
            },
            "[\u77F3\u5316]": {
              name: "\u77F3\u5316",
              img: "".concat(w, "shihua-3x.png")
            },
            "[\u54C8\u6B20]": {
              name: "\u54C8\u6B20",
              img: "".concat(w, "haqian-3x.png")
            },
            "[\u70B8\u5F39]": {
              name: "\u70B8\u5F39",
              img: "".concat(w, "zhadan-3x.png")
            },
            "[\u5618]": {
              name: "\u5618",
              img: "".concat(w, "xu-3x.png")
            },
            "[\u5410\u820C]": {
              name: "\u5410\u820C",
              img: "".concat(w, "tushe-3x.png")
            },
            "[\u59D4\u5C48]": {
              name: "\u59D4\u5C48",
              img: "".concat(w, "weiqu-3x.png")
            },
            "[\u5410\u5F69\u8679]": {
              name: "\u5410\u5F69\u8679",
              img: "".concat(w, "tucaihong-3x.png")
            },
            "[\u594B\u6597]": {
              name: "\u594B\u6597",
              img: "".concat(w, "fendou-3x.png")
            },
            "[\u751F\u75C5]": {
              name: "\u751F\u75C5",
              img: "".concat(w, "wumai-3x.png")
            },
            "[\u96FE\u973E]": {
              name: "\u96FE\u973E",
              img: "".concat(w, "wumai-3x.png"),
              hide: 0
            },
            "[\u64E6\u6C57]": {
              name: "\u64E6\u6C57",
              img: "".concat(w, "cahan-3x.png")
            },
            "[\u5982\u82B1]": {
              name: "\u5982\u82B1",
              img: "".concat(w, "ruhua-3x.png")
            },
            "[\u9119\u89C6]": {
              name: "\u9119\u89C6",
              img: "".concat(w, "bishi-3x.png")
            },
            "[\u5F3A]": {
              name: "\u5F3A",
              img: "".concat(w, "qiang-3x.png")
            },
            "[\u7D2B\u8587\u522B\u8D70]": {
              name: "\u7D2B\u8587\u522B\u8D70",
              img: "".concat(w, "ziweibiezou-3x.png")
            },
            "[\u7EA2\u8138]": {
              name: "\u7EA2\u8138",
              img: "".concat(w, "honglian-3x.png")
            },
            "[\u56F0]": {
              name: "\u56F0",
              img: "".concat(w, "kun-3x.png")
            },
            "[\u6D41\u6C57]": {
              name: "\u6D41\u6C57",
              img: "".concat(w, "han-3x.png")
            },
            "[\u6C57]": {
              name: "\u6C57",
              img: "".concat(w, "han-3x.png"),
              hide: 0
            },
            "[\u7EFF\u5E3D\u5B50]": {
              name: "\u7EFF\u5E3D\u5B50",
              img: "".concat(w, "lvmaozi-3x.png")
            },
            "[\u5DE6\u4E0A]": {
              name: "\u5DE6\u4E0A",
              img: "".concat(w, "zuoshang-3x.png")
            },
            "[\u718A\u5409]": {
              name: "\u718A\u5409",
              img: "".concat(w, "xiongji-3x.png")
            },
            "[\u542C\u6B4C]": {
              name: "\u542C\u6B4C",
              img: "".concat(w, "tingge-3x.png")
            },
            "[\u9AB7\u9AC5]": {
              name: "\u9AB7\u9AC5",
              img: "".concat(w, "kulou-3x.png")
            },
            "[18\u7981]": {
              name: "18\u7981",
              img: "".concat(w, "18jin-3x.png")
            },
            "[\u897F\u74DC]": {
              name: "\u897F\u74DC",
              img: "".concat(w, "xigua-3x.png")
            },
            "[\u659C\u773C]": {
              name: "\u659C\u773C",
              img: "".concat(w, "xieyan-3x.png")
            },
            "[\u9634\u9669]": {
              name: "\u9634\u9669",
              img: "".concat(w, "yinxian-3x.png")
            },
            "[\u767D\u773C]": {
              name: "\u767D\u773C",
              img: "".concat(w, "baiyan-3x.png")
            },
            "[\u51CB\u8C22]": {
              name: "\u51CB\u8C22",
              img: "".concat(w, "diaoxie-3x.png")
            },
            "[\u563F\u54C8]": {
              name: "\u563F\u54C8",
              img: "".concat(w, "heiha-3x.png")
            },
            "[\u574F\u7B11]": {
              name: "\u574F\u7B11",
              img: "".concat(w, "huaixiao-3x.png")
            },
            "[\u52A0\u597D\u53CB]": {
              name: "\u52A0\u597D\u53CB",
              img: "".concat(w, "jiahaoyou-3x.png")
            },
            "[\u56E7]": {
              name: "\u56E7",
              img: "".concat(w, "jiong-3x.png")
            },
            "[\u6CEA\u5954]": {
              name: "\u6CEA\u5954",
              img: "".concat(w, "leiben-3x.png")
            },
            "[\u4E0D\u5931\u793C\u8C8C\u7684\u5FAE\u7B11]": {
              name: "\u4E0D\u5931\u793C\u8C8C\u7684\u5FAE\u7B11",
              img: "".concat(w, "masichundeweixiao-3x.png")
            },
            "[\u62F3\u5934]": {
              name: "\u62F3\u5934",
              img: "".concat(w, "quantou-3x.png")
            },
            "[\u53F3\u8FB9]": {
              name: "\u53F3\u8FB9",
              img: "".concat(w, "youbian-3x.png")
            },
            "[\u53F3\u54FC\u54FC]": {
              name: "\u53F3\u54FC\u54FC",
              img: "".concat(w, "youhengheng-3x.png")
            },
            "[\u60A0\u95F2]": {
              name: "\u60A0\u95F2",
              img: "".concat(w, "youxian-3x.png")
            },
            "[\u7EDD\u671B\u7684\u51DD\u89C6]": {
              name: "\u7EDD\u671B\u7684\u51DD\u89C6",
              img: "".concat(w, "zhoudongyudeningshi-3x.png")
            },
            "[\u5492\u9A82]": {
              name: "\u5492\u9A82",
              img: "".concat(w, "zhouma-3x.png")
            },
            "[\u732A\u5934]": {
              name: "\u732A\u5934",
              img: "".concat(w, "zhutou-3x.png")
            },
            "[\u5DE6\u8FB9]": {
              name: "\u5DE6\u8FB9",
              img: "".concat(w, "zuobian-3x.png")
            },
            "[\u5DE6\u54FC\u54FC]": {
              name: "\u5DE6\u54FC\u54FC",
              img: "".concat(w, "zuohengheng-3x.png")
            }
          }
              , os = fp
              , dp = /(\[\S+?\])/g
              , mp = function(r) {
            var t = r.text
                , n = r.imgClassname;
            if (!t)
              return null;
            var o = t.split(dp).map(function(i, u) {
              if (i)
                if (os[i]) {
                  var l;
                  return a.createElement("img", {
                    key: "emoji-text-".concat(u),
                    src: (l = os[i]) === null || l === void 0 ? void 0 : l.img,
                    alt: i,
                    style: {
                      margin: "0 4px",
                      verticalAlign: "text-bottom"
                    }
                  })
                } else
                  return a.createElement("span", {
                    key: "emoji-text-".concat(u)
                  }, i);
              else
                return null
            });
            return a.createElement("span", null, o)
          }
              , vp = a.memo(mp)
              , hr = {
            actionableText: "_9b365a9d76cfb9db759d93e586f25133-scss",
            twemojiText: "_1388f91fcfb70a08f895c70111c1693b-scss",
            userText: "f54ecac7c0dde5fa16c614e11e93768c-scss",
            hashtagText: "d0dc3c2350cb9c47358a6f454d353bb7-scss",
            clarity: "ffc06e8717738ebe8deec089c26e8d8a-scss"
          };
          function pp(e) {
            return bp(e) || yp(e) || hp(e) || gp()
          }
          function gp() {
            throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function hp(e, r) {
            if (!!e) {
              if (typeof e == "string")
                return Qa(e, r);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              if (t === "Object" && e.constructor && (t = e.constructor.name),
              t === "Map" || t === "Set")
                return Array.from(e);
              if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return Qa(e, r)
            }
          }
          function yp(e) {
            if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null)
              return Array.from(e)
          }
          function bp(e) {
            if (Array.isArray(e))
              return Qa(e)
          }
          function Qa(e, r) {
            (r == null || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
              n[t] = e[t];
            return n
          }
          function wp(e) {
            if (e && Array.isArray(e) && e.length > 0) {
              var r = pp(e);
              return r.sort(function(t, n) {
                return t.start - n.start
              }),
                  r
            } else
              return e
          }
          var _p = a.memo(function(e) {
            var r = e.hashtagId
                , t = e.text
                , n = e.onClickHashtag
                , o = e.onCloseVideoPlayer
                , i = (0,
                a.useCallback)(function() {
              o && o(),
              n && n(r)
            }, [r, n, o]);
            return a.createElement("span", {
              className: hr.hashtagText,
              onClick: i
            }, t)
          })
              , Ep = a.memo(function(e) {
            var r = e.userId
                , t = e.text
                , n = e.onClickUser
                , o = e.onCloseVideoPlayer
                , i = (0,
                a.useCallback)(function() {
              o && o(),
              n && n(r)
            }, [r, n, o]);
            return a.createElement("span", {
              className: hr.userText,
              onClick: i
            }, t)
          });
          function Yr(e) {
            var r = e.text
                , t = e.stickyInfo
                , n = r.split(`
`);
            return a.createElement(a.Fragment, null, n.map(function(o, i) {
              return a.createElement("span", {
                key: i
              }, a.createElement(vp, {
                text: o
              }), i < n.length - 1 ? a.createElement("br", null) : "")
            }))
          }
          function Cp(e) {
            var r = e.text
                , t = r === void 0 ? "" : r
                , n = e.textExtra
                , o = n === void 0 ? null : n
                , i = e.stickyInfo
                , u = i === void 0 ? null : i
                , l = e.onClickHashtag
                , s = l === void 0 ? null : l
                , c = e.onClickUser
                , d = c === void 0 ? null : c
                , f = e.onCloseVideoPlayer
                , m = f === void 0 ? null : f
                , v = e.children
                , p = v === void 0 ? void 0 : v
                , g = e.type
                , h = g === void 0 ? "" : g;
            t = t || "";
            var y = [], b;
            if (u && u.url) {
              t = t.replace(/\[图片表情\]$/, "");
              var _ = u.width
                  , A = u.height;
              if (_ > 0 && A > 0) {
                var S = _ / A;
                _ = Math.min(_, 120),
                    A = _ * S,
                    b = a.createElement("p", null, a.createElement("img", {
                      src: u.url,
                      style: {
                        width: _,
                        height: A
                      }
                    }))
              }
            }
            if (!o || Array.isArray(o) && o.length === 0)
              y.push(a.createElement(Yr, {
                text: t,
                stickyInfo: u
              }));
            else {
              var P = 0
                  , I = wp(o);
              I.forEach(function(x, T) {
                var C = x.type
                    , O = x.start
                    , k = x.end
                    , B = x.hashtagId
                    , R = x.userId;
                P < O && y.push(a.createElement(Yr, {
                  text: t.slice(P, O),
                  stickyInfo: u
                }));
                var F = t.slice(O, k);
                C === 0 || Boolean(R) ? y.push(a.createElement(Ep, {
                  userId: R,
                  text: F,
                  onClickUser: d,
                  onCloseVideoPlayer: m
                })) : C === 1 || Boolean(B) ? y.push(a.createElement(_p, {
                  hashtagId: B,
                  text: F,
                  onClickHashtag: s,
                  onCloseVideoPlayer: m
                })) : y.push(a.createElement(Yr, {
                  text: F,
                  stickyInfo: u
                })),
                    P = k
              }),
              P < t.length && y.push(a.createElement(Yr, {
                text: t.slice(P, t.length),
                stickyInfo: u
              }))
            }
            return a.createElement(a.Fragment, null, a.createElement(cp.Z, {
              noWrapper: !0,
              options: {
                className: hr.twemojiText
              }
            }, a.createElement("span", {
              className: j()(hr.actionableText, hr[h])
            }, p || "", y.map(function(x, T) {
              return a.createElement("span", {
                key: T
              }, x)
            }))), b)
          }
          var ze = a.memo(Cp), Se = {
            container: "ce8a5983e72f5388729b341c265c3537-scss",
            skeleton: "be367270dc1e93c497860fc45102b6ff-scss",
            imgCt: "b1f3ae9ea43259154c0790a3379bfc56-scss",
            long: "_47485cbd13bc470eb8483acc53ef228e-scss",
            small: "_6f6c8f2daabd817e837ef7e8704778f4-scss",
            descCt: "_48cfb66a1b04cb2a1e4235afd583c75f-scss",
            title: "b1c48cedd1d809c762458b27ab1f470a-scss",
            primary: "b570c6f8c606e9e19f04773decd9199e-scss",
            diggNum: "b5d0fd3c566ef51f74a8cdb46270b366-scss"
          }, is;
          function Ya() {
            return Ya = Object.assign || function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }
                ,
                Ya.apply(this, arguments)
          }
          function Ap(e) {
            return a.createElement("svg", Ya({
              width: 16,
              height: 16,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, e), is || (is = a.createElement("path", {
              opacity: .9,
              d: "M7.663 3.153c.599-.854 1.582-1.305 2.665-1.305 2.06 0 3.775 1.788 3.775 3.914 0 .06 0 .107-.002.14a.316.316 0 00.002.077c-.008.448-.085.817-.222 1.305-.078.088-.15.253-.222.435a1.936 1.936 0 00-.222.435 7.96 7.96 0 01-.136.22c-.564.884-1.346 1.768-2.125 2.547-1.144 1.151-2.304 2.108-2.81 2.526-.142.116-.232.19-.258.216-.185.185-.37.185-.556.185h-.005c-.368-.001-.553-.186-.738-.37a1.68 1.68 0 00-.1-.085 26.877 26.877 0 01-3.068-2.698c-.89-.912-1.743-1.952-2.213-2.97C1.242 7.353 1.01 6.47 1 5.979c.004-.003.003-.027.002-.074L1 5.762c0-2.127 1.713-3.914 3.775-3.914 1.08 0 2.065.451 2.888 1.305z",
              fill: "#4F5168"
            })))
          }
          var Sp = Ap, us;
          function Xa() {
            return Xa = Object.assign || function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }
                ,
                Xa.apply(this, arguments)
          }
          function Ip(e) {
            return a.createElement("svg", Xa({
              width: 105,
              height: 120,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, e), us || (us = a.createElement("path", {
              d: "M89.013 24.055C82.55 19.84 77.883 13.098 76.427 5.238A28.704 28.704 0 0175.939 0H55.31l-.035 82.675c-.345 9.257-7.967 16.689-17.307 16.689-2.902 0-5.636-.726-8.044-1.992-5.517-2.907-9.299-8.692-9.299-15.35 0-9.56 7.783-17.343 17.343-17.343 1.783 0 3.495.297 5.119.803V44.423a38.211 38.211 0 00-5.12-.368C17.034 44.055 0 61.088 0 82.027c0 12.848 6.42 24.216 16.213 31.088A37.749 37.749 0 0037.973 120c20.939 0 37.972-17.033 37.972-37.973V40.101a49.054 49.054 0 0028.704 9.227v-20.63a28.56 28.56 0 01-15.636-4.643z",
              fill: "#D9DAE5",
              fillOpacity: .7,
              opacity: .2
            })))
          }
          var Xr = Ip
              , _t = {
            imageContainer: "f34e96e88162611d7208f348d4f89234-scss",
            imagePlaceholder: "_8ece57cfbd4600e271975eeb4109e127-scss",
            blurBg: "_1a19094785cdb4907c48fb16eae14f86-scss",
            blurMask: "_0474a1af38e207e9b0d4bf802e141d52-scss",
            imgDefaultBg: "_4630bd0f78f34c3e4e2102bad6bc5a1b-scss",
            hidden: "bf833c012f5ddea87a9d1ea9ccd99a9e-scss"
          }
              , Pp = ["src", "className", "iconWidth", "iconHeight", "iconColor", "withBlurBg", "onHandleImgLoad", "imgClass", "isPreviewing"];
          function $a() {
            return $a = Object.assign || function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }
                ,
                $a.apply(this, arguments)
          }
          function Za(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          function xp(e, r) {
            return kp(e) || Tp(e, r) || Rp(e, r) || Op()
          }
          function Op() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function Rp(e, r) {
            if (!!e) {
              if (typeof e == "string")
                return ls(e, r);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              if (t === "Object" && e.constructor && (t = e.constructor.name),
              t === "Map" || t === "Set")
                return Array.from(e);
              if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return ls(e, r)
            }
          }
          function ls(e, r) {
            (r == null || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
              n[t] = e[t];
            return n
          }
          function Tp(e, r) {
            var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (t != null) {
              var n = [], o = !0, i = !1, u, l;
              try {
                for (t = t.call(e); !(o = (u = t.next()).done) && (n.push(u.value),
                    !(r && n.length === r)); o = !0)
                  ;
              } catch (s) {
                i = !0,
                    l = s
              } finally {
                try {
                  !o && t.return != null && t.return()
                } finally {
                  if (i)
                    throw l
                }
              }
              return n
            }
          }
          function kp(e) {
            if (Array.isArray(e))
              return e
          }
          function Np(e, r) {
            if (e == null)
              return {};
            var t = Lp(e, r), n, o;
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              for (o = 0; o < i.length; o++)
                n = i[o],
                !(r.indexOf(n) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, n) || (t[n] = e[n]))
            }
            return t
          }
          function Lp(e, r) {
            if (e == null)
              return {};
            var t = {}, n = Object.keys(e), o, i;
            for (i = 0; i < n.length; i++)
              o = n[i],
              !(r.indexOf(o) >= 0) && (t[o] = e[o]);
            return t
          }
          function yr(e) {
            var r = e.src
                , t = e.className
                , n = e.iconWidth
                , o = n === void 0 ? 105 : n
                , i = e.iconHeight
                , u = i === void 0 ? 120 : i
                , l = e.iconColor
                , s = l === void 0 ? "rgba(169, 170, 183, 1)" : l
                , c = e.withBlurBg
                , d = c === void 0 ? !1 : c
                , f = e.onHandleImgLoad
                , m = e.imgClass
                , v = e.isPreviewing
                , p = Np(e, Pp)
                , g = (0,
                a.useState)(0)
                , h = xp(g, 2)
                , y = h[0]
                , b = h[1]
                , _ = (0,
                a.useRef)(!1)
                , A = (0,
                a.useCallback)(function() {
              b(1),
              !_.current && (f && f(),
                  _.current = !0)
            }, []);
            return (0,
                a.useEffect)(function() {
              var S = !1
                  , P = new Image;
              P.onload = function() {
                S || (S = !0,
                    A(),
                    P = null)
              }
                  ,
                  P.onerror = function() {
                    S || (S = !0)
                  }
                  ,
                  setTimeout(function() {
                    S || (S = !0,
                        A())
                  }, 3e3),
                  P.src = r
            }, [r]),
                a.createElement("div", {
                  className: j()(_t.imageContainer, t, Za({}, _t.imagePlaceholder, y !== 1))
                }, d && y === 1 && a.createElement(a.Fragment, null, a.createElement("div", {
                  className: _t.blurBg,
                  style: {
                    backgroundImage: "url(".concat(r, ")")
                  }
                }), a.createElement("div", {
                  className: _t.blurBg,
                  style: {
                    backgroundImage: "url(".concat(r, ")")
                  }
                }), a.createElement("div", {
                  className: _t.blurMask
                })), a.createElement("img", $a({
                  src: r
                }, p, {
                  className: j()(m, Za({}, _t.hidden, v)),
                  onLoad: A
                })), y !== 1 && a.createElement("div", {
                  className: j()(_t.imgDefaultBg, Za({}, _t.hidden, v))
                }, a.createElement(oe, {
                  width: o,
                  height: u,
                  src: Xr,
                  color: s,
                  viewBox: "0 0 105 120"
                })))
          }
          function Fp(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          function Ja(e) {
            var r = e.imgSrc
                , t = e.videoUrl
                , n = e.title
                , o = e.diggNum
                , i = e.type
                , u = i === void 0 ? "default" : i
                , l = e.onClick
                , s = e.onShow
                , c = e.rank
                , d = ts(s && s.bind(null, c));
            return a.createElement("div", {
              ref: d,
              className: j()(Se.container, Fp({}, Se[u], Boolean(Se[u])))
            }, a.createElement("div", {
              className: Se.imgCt
            }, a.createElement("a", {
              href: t,
              onClick: l
            }, a.createElement(yr, {
              src: r,
              iconWidth: 52,
              iconHeight: 60,
              withBlurBg: !0
            }))), a.createElement("div", {
              className: Se.descCt
            }, a.createElement("a", {
              href: t,
              className: Se.title,
              onClick: l
            }, a.createElement(ze, {
              text: n
            })), a.createElement("span", {
              className: Se.diggNum
            }, a.createElement(Sp, null), xe(o))))
          }
          function Me() {
            return a.createElement("div", {
              className: j()(Se.container, Se.skeleton)
            }, a.createElement("div", {
              className: Se.imgCt
            }, a.createElement(Xr, null)), a.createElement("div", {
              className: Se.descCt
            }, a.createElement("div", {
              className: Se.long
            }), a.createElement("div", {
              className: Se.long
            }), a.createElement("div", {
              className: Se.long
            }), a.createElement("div", {
              className: Se.small
            })))
          }
          var ss = E(35297);
          function cs(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function Mp(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      cs(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      cs(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          var fs = "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2Ftg%2F035%2F063%2F726%2F3ea4031f045945e1843ae5156749d64c.jpg&refer=http%3A%2F%2Fyouimg1.c-ctrip.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623919372&t=7fb737774f8d005a942438868a321451";
          function Ke() {
            return a.createElement("div", {
              className: gr.item
            }, a.createElement("div", {
              className: gr.test2
            }, a.createElement("div", {
              className: gr.itemWrap
            }, a.createElement("a", null, a.createElement("img", {
              src: fs
            }))), a.createElement("p", null, "test")))
          }
          function ds(e) {
            return a.createElement("div", {
              className: gr.about
            }, a.createElement(ss.ql, null, a.createElement("title", null, "\u6296\u97F3 PC \u7248\u672C - About-", e.name), a.createElement("meta", {
              name: "description",
              content: "\u6296\u97F3 PC \u7248\u672C - About"
            })), a.createElement("h1", null, "About Page"), a.createElement(Jl.rU, {
              to: "/"
            }, "go home"), a.createElement("div", {
              style: {
                width: 300
              }
            }, a.createElement(Ja, {
              imgSrc: fs,
              videoUrl: "/",
              title: "\u7B2C\u4E09\u96C6 | \u4ECA\u5929\u6CA1\u624E\u53CC\u9A6C\u5C3E\uFF0C\u7B4966\u5C81\u4E86\u6211\u624E\u539F\u6765\u5BB6\u7535\u8FD8\u53EF\u4EE5\u7B2C\u4E09\u96C6 | \u4ECA\u5929\u6CA1\u624E\u53CC\u9A6C\u5C3E\uFF0C\u7B4966\u5C81\u4E86\u6211\u624E\u539F\u6765\u5BB6\u7535\u8FD8\u53EF\u4EE5",
              diggNum: 123123
            })), a.createElement("div", {
              className: gr.container
            }, a.createElement(Ke, null), a.createElement(Ke, null), a.createElement(Ke, null), a.createElement(Ke, null), a.createElement(Ke, null), a.createElement(Ke, null), a.createElement(Ke, null), a.createElement(Ke, null), a.createElement(Ke, null), a.createElement(Ke, null), a.createElement(Ke, null)))
          }
          ds.getInitialProps = Mp(regeneratorRuntime.mark(function e() {
            var r;
            return regeneratorRuntime.wrap(function(n) {
              for (; ; )
                switch (n.prev = n.next) {
                  case 0:
                    return n.next = 2,
                        new Promise(function(o) {
                              setTimeout(function() {
                                o({
                                  name: "About 3"
                                })
                              }, 1e3)
                            }
                        );
                  case 2:
                    return r = n.sent,
                        n.abrupt("return", r);
                  case 4:
                  case "end":
                    return n.stop()
                }
            }, e)
          }));
          var Bp = ds
              , Dp = {
            enterPersonalHomepage: {
              eventName: "enter_personal_homepage",
              params: {
                enter_method: "top_bar",
                enter_from: "main_page"
              }
            },
            enterPersonalDetail: {
              eventName: "enter_personal_detail",
              params: {
                to_user_id: "",
                is_private: 0,
                enter_method: "Comment",
                enter_from: "main_page"
              }
            },
            changeProfileTab: {
              eventName: "change_profile_tab",
              params: {
                enter_from: "others_homepage",
                to_user_id: "\u4E2A\u4EBA\u9875user_id",
                tab_name: "post"
              }
            },
            follow: {
              eventName: "follow",
              params: {
                enter_from: "others_homepage",
                to_user_id: ""
              }
            },
            unfollow: {
              eventName: "unfollow",
              params: {
                enter_from: "others_homepage",
                to_user_id: ""
              }
            }
          }
              , jp = E(61149);
          function Up(e) {
            var r = e.children;
            return a.createElement(jp.q, null, a.createElement("meta", {
              charSet: "utf-8"
            }), r, a.createElement("meta", {
              httpEquiv: "Cache-Control",
              content: "no-transform"
            }), a.createElement("meta", {
              httpEquiv: "Cache-Control",
              content: "no-siteapp"
            }), a.createElement("meta", {
              name: "applicable-device",
              content: "pc,mobile"
            }), a.createElement("meta", {
              name: "viewport",
              content: "width=device-width,initial-scale=1"
            }), a.createElement("meta", {
              name: "baidu-site-verification",
              content: "szjdG38sKy"
            }), a.createElement("link", {
              rel: "shortcut icon",
              href: "".concat("https://sf1-scmcdn-tos.pstatp.com/goofy/ies/douyin_web/public", "/favicon.ico"),
              type: "image/x-icon"
            }), a.createElement("link", {
              href: "https://fonts.bytedance.com/dfd/api/v1/css?family=DFPKingGothicGB-Medium:500&display=swap",
              rel: "stylesheet"
            }), a.createElement("link", {
              href: "https://fonts.bytedance.com/dfd/api/v1/css?family=DFPKingGothicGB-Regular:500&display=swap",
              rel: "stylesheet"
            }), a.createElement("link", {
              href: "https://fonts.bytedance.com/dfd/api/v1/css?family=DINNextLTPro-Medium:500&display=swap",
              rel: "stylesheet"
            }), a.createElement("link", {
              rel: "dns-prefetch",
              href: "//vcs.snssdk.com"
            }), a.createElement("link", {
              rel: "dns-prefetch",
              href: "//sf6-hscdn-tos.pstatp.com"
            }), a.createElement("link", {
              rel: "dns-prefetch",
              href: "//p29.douyinpic.com"
            }), a.createElement("link", {
              rel: "dns-prefetch",
              href: "//verify.snssdk.com"
            }), a.createElement("link", {
              rel: "dns-prefetch",
              href: "//p6.douyinpic.com"
            }), a.createElement("link", {
              rel: "dns-prefetch",
              href: "//p3.douyinpic.com"
            }), a.createElement("link", {
              rel: "dns-prefetch",
              href: "//sso.douyin.com"
            }), a.createElement("link", {
              rel: "dns-prefetch",
              href: "//mcs.snssdk.com"
            }), a.createElement("link", {
              rel: "dns-prefetch",
              href: "//p9.douyinpic.com"
            }), a.createElement("link", {
              rel: "dns-prefetch",
              href: "//p26.douyinpic.com"
            }), a.createElement("link", {
              rel: "dns-prefetch",
              href: "//p5-ipv6.douyinpic.com/"
            }))
          }
          var Zt = function(e) {
            var r = e.children;
            return a.createElement(Up, null, r)
          }
              , Oe = {
            tabs: "ea4481b8c9b4fe32e10ed9a86ad6521b-scss",
            tabsGroup: "_571e4a68209044fe80272c9a93186830-scss",
            tabItem: "fd2d4afc47eda7e637af00a0d42a721c-scss",
            tabsContainer: "_92400026d1182d4f8f006dada62ebc1c-scss",
            "tabsGroup-normal": "_21b256ce8db1a7153adeed4b130c6b28-scss",
            "tabsGroup-expandable": "f054c3d4d01fa98e2e4033e7aae2509c-scss",
            expandTab: "_95d0b76de9266daf684f3794b66696ad-scss",
            expanded: "_602972e7848f15c5264d41fe38e6d916-scss",
            close: "_95f1adbffa291685652630698b2db3f3-scss",
            expandLabel: "_50a15ac813110c2329f55a001e6fc2f9-scss",
            expandLabelText: "_78df5b4d1412e28eeef316720fdb04b3-scss",
            icon: "_7110153298e72b15b67fb372bb7b6e66-scss"
          }
              , Et = {
            tab: "_9d7b9bd9eded9928c836ba08bfda2833-scss",
            text: "_7c69ce5516c883db813a5b0152c1fede-scss",
            active: "_4586e5eb7bb56ef07005a35134458f60-scss",
            activeClickable: "fb24668254727a2b8622bd8b1c9cc4f2-scss"
          };
          function $r(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          var ms = function(r) {
            var t, n, o = r.label, i = r.value, u = r.onClick, l = r.active, s = r.className, c = r.renderLabel, d = r.href, f = r.target, m = r.spa, v = r.activeClickable, p = a.useCallback(function(g) {
              !u || (v ? u(i, g) : l || u(i, g))
            }, [i, u, l]);
            return m ? a.createElement(Jl.rU, {
              to: d,
              target: f,
              title: o,
              onClick: p,
              className: j()(Et.tab, (t = {},
                  $r(t, Et.active, l),
                  $r(t, Et.activeClickable, v && l),
                  t), s)
            }, a.createElement("span", {
              className: Et.text
            }, c ? c() : o)) : a.createElement("a", {
              href: d,
              target: f,
              className: j()(Et.tab, (n = {},
                  $r(n, Et.active, l),
                  $r(n, Et.activeClickable, v && l),
                  n), s),
              onClick: p,
              title: o
            }, a.createElement("span", {
              className: Et.text
            }, c ? c() : o))
          }, vs;
          function qa() {
            return qa = Object.assign || function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }
                ,
                qa.apply(this, arguments)
          }
          function Hp(e) {
            return a.createElement("svg", qa({
              width: 13,
              height: 12,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, e), vs || (vs = a.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M2.741 8.28a.798.798 0 001.1 0l2.931-2.828L9.704 8.28a.797.797 0 001.099 0 .731.731 0 000-1.06L7.322 3.86a.798.798 0 00-1.1 0l-3.48 3.36a.732.732 0 000 1.06z",
              fill: "#4F5168"
            })))
          }
          var Wp = Hp, ps;
          function eo() {
            return eo = Object.assign || function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }
                ,
                eo.apply(this, arguments)
          }
          function Vp(e) {
            return a.createElement("svg", eo({
              width: 13,
              height: 12,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, e), ps || (ps = a.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M2.741 3.72a.798.798 0 011.1 0l2.931 2.828L9.704 3.72a.798.798 0 011.1 0 .731.731 0 010 1.06L7.321 8.14a.798.798 0 01-1.1 0l-3.48-3.36a.732.732 0 010-1.06z",
              fill: "#4F5168"
            })))
          }
          var zp = Vp;
          function gs(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
              })),
                  t.push.apply(t, n)
            }
            return t
          }
          function Kp(e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r] != null ? arguments[r] : {};
              r % 2 ? gs(Object(t), !0).forEach(function(n) {
                to(e, n, t[n])
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : gs(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              })
            }
            return e
          }
          function to(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          function ro(e, r) {
            return Xp(e) || Yp(e, r) || Qp(e, r) || Gp()
          }
          function Gp() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function Qp(e, r) {
            if (!!e) {
              if (typeof e == "string")
                return hs(e, r);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              if (t === "Object" && e.constructor && (t = e.constructor.name),
              t === "Map" || t === "Set")
                return Array.from(e);
              if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return hs(e, r)
            }
          }
          function hs(e, r) {
            (r == null || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
              n[t] = e[t];
            return n
          }
          function Yp(e, r) {
            var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (t != null) {
              var n = [], o = !0, i = !1, u, l;
              try {
                for (t = t.call(e); !(o = (u = t.next()).done) && (n.push(u.value),
                    !(r && n.length === r)); o = !0)
                  ;
              } catch (s) {
                i = !0,
                    l = s
              } finally {
                try {
                  !o && t.return != null && t.return()
                } finally {
                  if (i)
                    throw l
                }
              }
              return n
            }
          }
          function Xp(e) {
            if (Array.isArray(e))
              return e
          }
          var $p = 60
              , Zp = function(r) {
            var t = r.list
                , n = r.current
                , o = r.onChange
                , i = r.className
                , u = r.mode
                , l = u === void 0 ? "normal" : u
                , s = r.onExpand
                , c = r.activeClickable
                , d = a.useState(!1)
                , f = ro(d, 2)
                , m = f[0]
                , v = f[1]
                , p = a.useRef(null)
                , g = a.useState(!1)
                , h = ro(g, 2)
                , y = h[0]
                , b = h[1]
                , _ = a.useState(0)
                , A = ro(_, 2)
                , S = A[0]
                , P = A[1]
                , I = a.useRef(0)
                , x = a.useCallback(function() {
              if (!!p.current) {
                b(p.current.clientHeight > $p);
                var R = t.findIndex(function(M) {
                  return M.value === n
                });
                if (R !== -1) {
                  var F = p.current.children[R];
                  F && (I.current = F.offsetTop,
                  m || P(F.offsetTop))
                }
              }
            }, [t, n, m])
                , T = a.useCallback(function() {
              return m ? a.createElement("span", {
                className: Oe.expandLabel
              }, a.createElement("span", {
                className: Oe.expandLabelText
              }, "\u6536\u8D77"), a.createElement(Wp, {
                className: Oe.icon
              })) : a.createElement("span", {
                className: Oe.expandLabel
              }, a.createElement("span", {
                className: Oe.expandLabelText
              }, "\u66F4\u591A"), a.createElement(zp, {
                className: Oe.icon
              }))
            }, [m])
                , C = a.useCallback(function() {
              s && s(m);
              var R = !m;
              P(R ? 0 : I.current),
                  v(R)
            }, [m])
                , O = a.useCallback(function() {
              x()
            }, [x]);
            a.useEffect(function() {
              O()
            }, [y]),
                a.useEffect(function() {
                  return l === "expandable" && (window.addEventListener("resize", O),
                      O()),
                      function() {
                        l === "expandable" && window.removeEventListener("resize", O)
                      }
                }, [O, l]);
            var k = a.useMemo(function() {
              return t
            }, [t])
                , B = a.useMemo(function() {
              var R;
              return R = {},
                  to(R, Oe.expanded, m && l === "expandable"),
                  to(R, Oe.close, !m && l === "expandable"),
                  R
            }, [m, l]);
            return a.createElement("div", {
              className: j()(Oe.tabs, i)
            }, a.createElement("div", {
              className: j()(Oe.tabsGroup, Kp({}, B), Oe["tabsGroup-".concat(l)])
            }, a.createElement("div", {
              className: Oe.tabsContainer,
              style: {
                transform: "translateY(-".concat(S, "px)")
              },
              ref: p
            }, k.map(function(R) {
              return a.createElement(ms, {
                key: R.value,
                href: R.href,
                spa: R.spa,
                target: R.target,
                active: R.value === n,
                activeClickable: c,
                className: Oe.tabItem,
                value: R.value,
                label: R.label,
                onClick: o
              })
            }))), l === "expandable" && y && a.createElement("div", null, a.createElement(ms, {
              className: Oe.expandTab,
              value: "expand",
              renderLabel: T,
              onClick: C
            })))
          }
              , br = {
            tabWrap: "a863cbaaffe537635d0f8cc2af289789-scss",
            tabFlex: "_84821df5bfe8ebabd514b4e75cac05d0-scss",
            tabFix: "_9f4c88a1884e2780564b40f395a6ca42-scss",
            tabCt: "_72a107254ee0fde07ba9fa5d74eeea2c-scss",
            contentContainer: "c96abcf83ef225168c01a76ada561507-scss",
            itemWidth: "_1a77ed6a0c7b32c1e04c6614b6baa1f2-scss",
            container: "_76fee9eb3865bb42613dce1bdd7c13b2-scss",
            leftSpace: "_867fac25d78f37fda2211efdd7fee7d4-scss",
            rightSpace: "_0cf669a1efd0d846f9899e2fe6f2ada6-scss"
          };
          function no() {
            return no = Object.assign || function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }
                ,
                no.apply(this, arguments)
          }
          function ys(e) {
            return tg(e) || eg(e) || qp(e) || Jp()
          }
          function Jp() {
            throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function qp(e, r) {
            if (!!e) {
              if (typeof e == "string")
                return ao(e, r);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              if (t === "Object" && e.constructor && (t = e.constructor.name),
              t === "Map" || t === "Set")
                return Array.from(e);
              if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return ao(e, r)
            }
          }
          function eg(e) {
            if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null)
              return Array.from(e)
          }
          function tg(e) {
            if (Array.isArray(e))
              return ao(e)
          }
          function ao(e, r) {
            (r == null || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
              n[t] = e[t];
            return n
          }
          var rg = [].concat(ys($n), ys(Zn))
              , ng = function(r) {
            return a.createElement("div", {
              className: br.tabFix
            }, a.createElement("div", {
              className: br.tabWrap
            }, a.createElement("div", {
              className: br.tabFlex
            }, a.createElement("div", {
              className: br.leftSpace
            }), a.createElement(Zp, no({}, r, {
              className: j()(r.className),
              mode: "expandable",
              list: rg
            })), a.createElement("div", {
              className: br.rightSpace
            }))))
          }
              , ag = E(8180)
              , oo = E.n(ag)
              , kt = {
            bottomWrap: "_5711aa3bb8cc604a63af009da08a1e20-scss",
            noMoreText: "_7ce8711a27620d9356e5d8a0dbec1e32-scss",
            opBtn: "_7f36460f72398e570573c11ce1103a8e-scss",
            last: "b63d861abc9b78af29d06fe08b394ccd-scss"
          }
              , io = {
            container: "_8dfd3684a7eb68aede591c5b339d3461-scss",
            loading: "_3f6f0f96f137417475844d1f8deeabd7-scss",
            text: "_7b6370c7df645cb93eadbe7ece3b17b3-scss"
          };
          function Ge(e) {
            var r = e.className
                , t = e.text;
            return a.createElement("div", {
              className: j()(io.container, r)
            }, a.createElement("div", {
              className: io.loading
            }), t && a.createElement("div", {
              className: io.text
            }, t))
          }
          function Zr(e) {
            return ug(e) || ig(e) || ws(e) || og()
          }
          function og() {
            throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function ig(e) {
            if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null)
              return Array.from(e)
          }
          function ug(e) {
            if (Array.isArray(e))
              return so(e)
          }
          function bs(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function uo(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      bs(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      bs(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          function lo(e, r) {
            return cg(e) || sg(e, r) || ws(e, r) || lg()
          }
          function lg() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function ws(e, r) {
            if (!!e) {
              if (typeof e == "string")
                return so(e, r);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              if (t === "Object" && e.constructor && (t = e.constructor.name),
              t === "Map" || t === "Set")
                return Array.from(e);
              if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return so(e, r)
            }
          }
          function so(e, r) {
            (r == null || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
              n[t] = e[t];
            return n
          }
          function sg(e, r) {
            var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (t != null) {
              var n = [], o = !0, i = !1, u, l;
              try {
                for (t = t.call(e); !(o = (u = t.next()).done) && (n.push(u.value),
                    !(r && n.length === r)); o = !0)
                  ;
              } catch (s) {
                i = !0,
                    l = s
              } finally {
                try {
                  !o && t.return != null && t.return()
                } finally {
                  if (i)
                    throw l
                }
              }
              return n
            }
          }
          function cg(e) {
            if (Array.isArray(e))
              return e
          }
          function fg(e) {
            var r = e.enterMethod;
            return a.createElement("div", {
              className: kt.noMoreText
            }, "\u8BF7\u5148", a.createElement("span", {
              className: kt.opBtn,
              onClick: function() {
                nr({
                  success: function() {
                    location.reload()
                  },
                  enterMethod: r
                })
              }
            }, "\u767B\u5F55"), "\uFF0C\u67E5\u770B\u66F4\u591A\u6570\u636E")
          }
          function dg(e) {
            var r = e.reload;
            return a.createElement("div", {
              className: kt.noMoreText
            }, "\u670D\u52A1\u5F02\u5E38\uFF0C\u91CD\u65B0", a.createElement("span", {
              onClick: r,
              className: kt.opBtn
            }, "\u5237\u65B0"), "\u62C9\u53D6\u6570\u636E")
          }
          function mg(e, r) {
            var t = e.defaultDataList
                , n = e.defaultHasMoreFlag
                , o = n === void 0 ? !0 : n
                , i = e.defaultStatusCode
                , u = i === void 0 ? 0 : i
                , l = e.fetchMoreData
                , s = e.scrollContainerEl
                , c = e.containerClassName
                , d = c === void 0 ? "" : c
                , f = e.itemClassName
                , m = f === void 0 ? "" : f
                , v = e.pageId
                , p = v === void 0 ? "" : v
                , g = e.renderItem
                , h = e.isHorizontal
                , y = h === void 0 ? !1 : h
                , b = e.pause
                , _ = b === void 0 ? !1 : b
                , A = e.skeletonNum
                , S = A === void 0 ? 20 : A
                , P = e.renderSkeleton
                , I = P === void 0 ? null : P
                , x = e.panelLoginError
                , T = x === void 0 ? null : x
                , C = e.panelReloadDataError
                , O = C === void 0 ? null : C
                , k = e.panelNoData
                , B = k === void 0 ? null : k
                , R = e.panelNoMoreData
                , F = R === void 0 ? null : R
                , M = e.renderNoDataError
                , L = M === void 0 ? null : M
                , W = e.handleLoadEnd
                , N = e.dataFilter
                , z = e.loginNeedLogMethod
                , U = z === void 0 ? "" : z
                , re = (0,
                a.useMemo)(function() {
              for (var ae = [], se = 0; se < S; se++)
                ae.push({
                  type: 1,
                  data: ae
                });
              return ae
            }, [I ? S : 0])
                , J = (0,
                a.useState)(t || [])
                , ue = lo(J, 2)
                , Q = ue[0]
                , Y = ue[1]
                , H = (0,
                a.useState)(u)
                , Ie = lo(H, 2)
                , we = Ie[0]
                , qe = Ie[1]
                , $ = (0,
                a.useRef)(o)
                , pe = (0,
                a.useRef)(null)
                , et = (0,
                a.useRef)(null)
                , Ye = (0,
                a.useRef)(!1)
                , st = (0,
                a.useRef)(null)
                , V = (0,
                a.useRef)(null)
                , K = (0,
                a.useRef)(null)
                , _e = (0,
                a.useRef)(null)
                , ct = (0,
                a.useState)(void 0)
                , ne = lo(ct, 2)
                , qt = ne[0]
                , Mt = ne[1];
            _e.current = p,
                V.current = y,
                st.current = l;
            var tt = null;
            K.current = uo(regeneratorRuntime.mark(function ae() {
              var se, Ee, rt, nt, It;
              return regeneratorRuntime.wrap(function(Ce) {
                for (; ; )
                  switch (Ce.prev = Ce.next) {
                    case 0:
                      if (se = et.current ? et : pe,
                          se.current) {
                        Ce.next = 3;
                        break
                      }
                      return Ce.abrupt("return");
                    case 3:
                      if ($.current) {
                        Ce.next = 5;
                        break
                      }
                      return Ce.abrupt("return");
                    case 5:
                      if (Ee = 0,
                          rt = 0,
                          nt = se.current.getBoundingClientRect(),
                          s ? (It = s.getBoundingClientRect(),
                              Ee = nt.right - It.right,
                              rt = nt.bottom - It.bottom) : (Ee = nt.right - window.innerWidth,
                              rt = nt.bottom - window.innerHeight),
                          !(se != null && se.current && !_)) {
                        Ce.next = 18;
                        break
                      }
                      if (!(!V.current && rt <= 800 || !et.current)) {
                        Ce.next = 15;
                        break
                      }
                      return Ce.next = 13,
                          tt();
                    case 13:
                      Ce.next = 18;
                      break;
                    case 15:
                      if (!(V.current && Ee <= 500)) {
                        Ce.next = 18;
                        break
                      }
                      return Ce.next = 18,
                          tt();
                    case 18:
                    case "end":
                      return Ce.stop()
                  }
              }, ae)
            })),
                tt = a.useCallback(uo(regeneratorRuntime.mark(function ae() {
                  var se, Ee, rt, nt, It, ci, Ce;
                  return regeneratorRuntime.wrap(function(ce) {
                    for (; ; )
                      switch (ce.prev = ce.next) {
                        case 0:
                          if (st.current) {
                            ce.next = 3;
                            break
                          }
                          return qe(1),
                              ce.abrupt("return");
                        case 3:
                          if (Ye.current) {
                            ce.next = 41;
                            break
                          }
                          return Ye.current = !0,
                              ce.prev = 5,
                              se = _e.current,
                              ce.next = 9,
                              st.current(se);
                        case 9:
                          if (Ee = ce.sent,
                              rt = Ee.statusCode,
                              nt = Ee.data,
                              It = Ee.hasMore,
                              ci = Ee.logPb,
                              Mt(ci),
                          se !== _e.current) {
                            ce.next = 31;
                            break
                          }
                          if (Ce = N ? N(nt) : nt,
                              qe(rt),
                          rt !== 0) {
                            ce.next = 28;
                            break
                          }
                          if (!(nt.length === 0 && It)) {
                            ce.next = 21;
                            break
                          }
                          throw new Error("loadMoreData Error! ");
                        case 21:
                          if ($.current = It,
                              Y(function(Sb) {
                                return [].concat(Zr(Sb), Zr(Ce))
                              }),
                              Ye.current = !1,
                              ce.t0 = It,
                              !ce.t0) {
                            ce.next = 28;
                            break
                          }
                          return ce.next = 28,
                              K.current();
                        case 28:
                          Ye.current = !1,
                              ce.next = 33;
                          break;
                        case 31:
                          Ye.current = !1,
                              K.current();
                        case 33:
                          return ce.abrupt("return");
                        case 36:
                          ce.prev = 36,
                              ce.t1 = ce.catch(5),
                              console.error("ScrollList Get Data Error", ce.t1),
                              qe(1);
                        case 40:
                          Ye.current = !1;
                        case 41:
                        case "end":
                          return ce.stop()
                      }
                  }, ae, null, [[5, 36]])
                })), []);
            var Ar = a.useCallback(uo(regeneratorRuntime.mark(function ae() {
              return regeneratorRuntime.wrap(function(Ee) {
                for (; ; )
                  switch (Ee.prev = Ee.next) {
                    case 0:
                      return qe(0),
                          Ee.next = 3,
                          tt();
                    case 3:
                    case "end":
                      return Ee.stop()
                  }
              }, ae)
            })), [])
                , Ab = a.useCallback(function() {
              Y([]),
                  $.current = !0,
                  qe(0)
            }, []);
            (0,
                a.useImperativeHandle)(r, function() {
              return {
                reload: Ar,
                reset: Ab,
                getTotal: function() {
                  return Q.length
                }
              }
            }, [Q.length]),
                (0,
                    a.useEffect)(function() {
                  if (_)
                    return null;
                  var ae = oo()(function() {
                    K.current()
                  }, 50, {
                    leading: !0,
                    trailing: !0,
                    maxWait: 100
                  })
                      , se = s || document;
                  return $.current || W && W(),
                  se && $.current && we === 0 && (se.addEventListener("scroll", ae),
                      window.addEventListener("resize", ae),
                      ae()),
                      function() {
                        se && $.current && (se.removeEventListener("scroll", ae),
                            window.removeEventListener("resize", ae))
                      }
                }, [s, tt, $.current, we, _]);
            var St = null
                , Qf = !1;
            return we === 2 ? St = T || a.createElement(fg, {
              enterMethod: U
            }) : we === 0 ? $.current ? (Qf = !0,
                St = a.createElement(a.Fragment, null, a.createElement(Ge, {
                  className: "",
                  text: ""
                }))) : Q.length === 0 ? St = B || a.createElement("div", {
              className: kt.noMoreText
            }, "\u6CA1\u6709\u6570\u636E") : St = F || a.createElement("div", {
              className: kt.noMoreText
            }, "\u6682\u65F6\u6CA1\u6709\u66F4\u591A\u4E86") : (Q.length === 0 && (St = L == null ? void 0 : L(we)),
            St || (St = O || a.createElement(dg, {
              reload: Ar
            }))),
                a.createElement(a.Fragment, null, a.createElement("ul", {
                  className: d,
                  ref: pe
                }, [].concat(Zr(Q), Zr(Qf && re || [])).map(function(ae, se) {
                  return a.createElement("li", {
                    className: m,
                    key: "li_".concat(se),
                    ref: function(rt) {
                      (ae == null ? void 0 : ae.type) !== 1 && (et.current = rt)
                    }
                  }, (ae == null ? void 0 : ae.type) === 1 ? I && I() : g(ae, se, qt))
                })), a.createElement("div", {
                  className: kt.bottomWrap
                }, St))
          }
          var co = a.forwardRef(mg), S3 = E(90622), vg = E(33298), _s;
          function fo() {
            return fo = Object.assign || function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }
                ,
                fo.apply(this, arguments)
          }
          function pg(e) {
            return a.createElement("svg", fo({
              width: 18,
              height: 17,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, e), _s || (_s = a.createElement("path", {
              d: "M9.12 3.225l-.721.693A1 1 0 009.938 3.8l-.819-.574zm6.94 2.812h-1a1 1 0 001.906.425l-.905-.425zm0 0h1a1 1 0 00-1.904-.425l.905.425zm-.001.15l-1-.022 1 .023zm.002.084l1 .018a1 1 0 00-.092-.437l-.908.419zm-.24 1.406l.748.664a1 1 0 00.215-.393l-.962-.27zm-.239.469l.84.541a.996.996 0 00.09-.174l-.93-.367zm-.24.468l.86.512a1 1 0 00.076-.157l-.935-.355zm-.146.238l-.842-.539.842.539zm-2.29 2.745l-.707-.707-.002.002.71.705zm-3.03 2.722l-.636-.772.637.772zm-.276.233l-.707-.707.707.707zm-.605.2l.017-1h-.013l-.004 1zm-.903-.49l.625-.78a.936.936 0 00-.032-.026l-.593.806zm-3.307-2.909l.719-.695-.003-.003-.716.699zM2.4 8.152l.907-.42a1 1 0 00-.013-.027l-.894.447zM1.938 6.27l-.705-.709a1 1 0 00-.294.73l1-.021zm.003-.08l1-.026-1 .026zM11.99.818c-1.444 0-2.831.608-3.69 1.832L9.938 3.8c.432-.616 1.165-.98 2.054-.98v-2zm5.07 5.219c0-2.808-2.26-5.219-5.07-5.219v2c1.634 0 3.07 1.444 3.07 3.219h2zm0 0h-2 2zm-1.905-.425l1.81.85-1.81-.85zm1.903.599l.002-.174h-2l-.002.128 2 .046zm-.09-.359a.979.979 0 01.084.307c.005.04.005.07.005.074V6.21l-1.999-.046v.093c0 .018 0 .058.005.107.003.024.015.166.089.325l1.816-.838zm-.185 2.096c.158-.564.266-1.055.277-1.66l-2-.034c-.006.359-.065.664-.202 1.153l1.925.54zm-.272.565c.037-.092.064-.155.085-.2l.014-.027a.517.517 0 01-.042.055l-1.495-1.328c-.132.149-.22.313-.272.42a4.839 4.839 0 00-.15.345l1.86.735zm-.234.456c.029-.077.044-.109.056-.134.014-.026.035-.065.089-.148L14.74 7.604a3.06 3.06 0 00-.333.656l1.87.709zm-.24.421c.057-.087.111-.175.164-.264l-1.718-1.023c-.042.069-.085.14-.13.21l1.685 1.077zm-2.424 2.914c.863-.863 1.762-1.874 2.425-2.915l-1.686-1.075c-.552.865-1.338 1.76-2.153 2.576l1.414 1.414zm-3.101 2.787c.548-.452 1.832-1.51 3.103-2.79l-1.419-1.41c-1.195 1.204-2.412 2.207-2.957 2.656l1.273 1.543zm-.206.168c-.02.02-.032.03-.018.018l.044-.038.18-.149-1.273-1.543c-.117.097-.275.226-.347.298l1.414 1.414zM9 15.752c.215 0 .796.018 1.307-.493l-1.414-1.414c.01-.01.032-.03.066-.05a.402.402 0 01.098-.038c.026-.007.04-.007.03-.006H9v2zm-.023 0H9v-2h.012l-.035 2zm-1.485-.693c.21.209.664.69 1.498.693l.009-2c-.014 0-.01-.002.005.003.016.004.029.01.035.014.005.003-.002 0-.025-.02a2.548 2.548 0 01-.107-.104l-1.415 1.414zm-.026-.017l.033.027.021.017.004.003-.01-.008a.772.772 0 01-.022-.022l1.415-1.414c-.063-.063-.153-.134-.19-.164l-1.25 1.56zm-3.4-2.993A29.95 29.95 0 007.5 15.067l1.186-1.61a27.982 27.982 0 01-3.181-2.8L4.067 12.05zM1.493 8.571c.578 1.253 1.592 2.472 2.578 3.481l1.43-1.397c-.933-.956-1.758-1.98-2.193-2.923l-1.815.84zM.939 6.293c.008.374.094.828.19 1.21.095.38.228.8.376 1.096l1.789-.894a4.046 4.046 0 01-.226-.689 4.03 4.03 0 01-.13-.767l-2 .044zm.002-.077v.017a.973.973 0 01.291-.67L2.645 6.98a1.006 1.006 0 00.298-.716l-.002-.1-1.999.052zm-.003-.18c0 .08.002.142.003.18l2-.051c-.002-.036-.003-.076-.003-.128h-2zM6.008.819c-2.81 0-5.07 2.41-5.07 5.219h2c0-1.776 1.435-3.219 3.07-3.219v-2zM9.84 2.531C8.79 1.44 7.477.818 6.008.818v2c.859 0 1.669.35 2.391 1.1l1.44-1.387z",
              fill: "#fff"
            })))
          }
          var Es = pg, Cs, As, Ss;
          function mo() {
            return mo = Object.assign || function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }
                ,
                mo.apply(this, arguments)
          }
          function gg(e) {
            return a.createElement("svg", mo({
              width: 10,
              height: 12,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, e), Cs || (Cs = a.createElement("path", {
              d: "M.616 4.435a.75.75 0 010-1.292l3.622-2.135a1.5 1.5 0 011.524 0l3.622 2.135a.75.75 0 010 1.292L5.762 6.57a1.5 1.5 0 01-1.524 0L.616 4.435z",
              fill: "#fff"
            })), As || (As = a.createElement("path", {
              d: "M.07 5.785a.5.5 0 01.684-.177l3.738 2.204a1 1 0 001.016 0l3.738-2.204a.5.5 0 11.508.862L6.016 8.673a2 2 0 01-2.032 0L.246 6.47a.5.5 0 01-.177-.685z",
              fill: "#fff"
            })), Ss || (Ss = a.createElement("path", {
              d: "M.754 7.858a.5.5 0 10-.508.862l3.738 2.203a2 2 0 002.032 0L9.754 8.72a.5.5 0 10-.508-.862l-3.738 2.204a1 1 0 01-1.016 0L.754 7.857z",
              fill: "#fff"
            })))
          }
          var hg = gg
              , G = {
            imgContent: "_863f6ea4f8ed8c3f88c51527f1ea8d43-scss",
            link: "a074d7a61356015feb31633ad4c45f49-scss",
            videoWrapper: "d4fafaeb9c272a86583da2249e4b662c-scss",
            imgBorder: "b388acfeaeef33f0122af9c4f71a93c9-scss",
            imgWrapper: "c1b7c8e6be13150a7516bfc20bbb8ad1-scss",
            imageContainer: "_46cb4690b43b2c3500c78191b9c87d80-scss",
            image: "c0efa8c116eec8c11854d9bda213b4e5-scss",
            imgMask: "_1a451682eeb2d4df81bf8e1ada549729-scss",
            bottomInfo: "a19d91dabb2ea86fa5cb7ea590c80064-scss",
            likeCount: "ad67e6d4c79ab72997256d1847e19b10-scss",
            text: "_04b09e32a7964282872626a4aff3353b-scss",
            duration: "d170ababc38fdbf760ca677dbaa9206a-scss",
            imgCapsule: "f3bc7f5cffcbab3cc43c26ec2ad98e9a-scss",
            collection: "_53346e2188e2c8a7195be6340dc4eb2a-scss",
            icon: "_4a35f1041ceac1affb2c0c2efb207926-scss",
            live: "_936aa8ce542f0b93057237ffb908b0dc-scss",
            unloadImgWrapper: "c79ea3c0e92e43c8e797e89992f7e06d-scss",
            titleWrapper: "_9c976841beef15a22bcd1540d1e84c02-scss",
            title: "_1d72ef4c67644daab0f1496c89e038aa-scss",
            titleClamp1: "b2c8df63da2ed9be2bc3d38cf902e5b4-scss",
            dialog: "_047f631cf71847dc20e5d333d0a4ccca-scss",
            source: "d8d25680ae6956e5aa7807679ce66b7e-scss",
            userInfo: "_9c247910afecae7b8e47d4c75867113a-scss",
            name: "_31dc42fa6181927e1afa821a0db10ed0-scss",
            nameGap: "_7cfe89a4f1868679513e50ad5cf7215c-scss",
            time: "b32855717201aaabd3d83c162315ff0a-scss",
            imgContentSkeleton: "d9cdbac4f027db3a2e2189a4a2152c50-scss",
            imgSkeleton: "cf08474a79d34895d8917d41038eb249-scss",
            titleSkeleton: "_0ed6f665abf5e1e9adee05cee3b0ddcb-scss",
            titleSkeletonSecond: "_565100c0b703735e045f4f673a1d19e2-scss",
            sourceSkeleton: "f56462754124ebf9fa85b8b515861ca1-scss",
            hidden: "f8a18932f8400953d0113eae6a56a813-scss",
            opacityAnimation: "_825ee6a2309eb4a4d9f707ef61be8629-scss"
          }
              , Jr = {
            previewWrapper: "_761439704d5a73a3f30a204280c9ac3a-scss",
            progressWrapper: "d677066d88e6e23cde69168b4d95121c-scss",
            progress: "e3205f9f0e69ea6967756ebe56ae69d2-scss",
            video: "_1ddad15aa66c856884914ce9725ea2de-scss"
          }
              , yg = function(r) {
            var t = r.onReady
                , n = r.previewUrlList
                , o = r.isHorizontal
                , i = (0,
                a.useRef)()
                , u = (0,
                a.useRef)()
                , l = (0,
                a.useRef)();
            return (0,
                a.useEffect)(function() {
              function s() {
                l.current = requestAnimationFrame(function() {
                  i.current && u.current && (u.current.style.width = "".concat(i.current.currentTime / i.current.duration * 100, "%")),
                      s()
                })
              }
              return s(),
                  function() {
                    return cancelAnimationFrame(l.current)
                  }
            }, []),
                a.createElement("div", {
                  className: Jr.previewWrapper
                }, a.createElement("video", {
                  ref: i,
                  onPlaying: t,
                  className: Jr.video,
                  style: {
                    objectFit: o ? "cover" : "contain"
                  },
                  loop: !0,
                  muted: !0,
                  autoPlay: !0,
                  preload: "none"
                }, n.map(function(s, c) {
                  return a.createElement("source", {
                    src: s,
                    key: "".concat(s, "_").concat(c)
                  })
                })), a.createElement("div", {
                  className: Jr.progressWrapper
                }, a.createElement("div", {
                  ref: u,
                  className: Jr.progress
                })))
          }
              , bg = yg;
          function wr() {
            return wr = Object.assign || function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }
                ,
                wr.apply(this, arguments)
          }
          function vo(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          function qr(e, r) {
            return Cg(e) || Eg(e, r) || _g(e, r) || wg()
          }
          function wg() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function _g(e, r) {
            if (!!e) {
              if (typeof e == "string")
                return Is(e, r);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              if (t === "Object" && e.constructor && (t = e.constructor.name),
              t === "Map" || t === "Set")
                return Array.from(e);
              if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return Is(e, r)
            }
          }
          function Is(e, r) {
            (r == null || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
              n[t] = e[t];
            return n
          }
          function Eg(e, r) {
            var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (t != null) {
              var n = [], o = !0, i = !1, u, l;
              try {
                for (t = t.call(e); !(o = (u = t.next()).done) && (n.push(u.value),
                    !(r && n.length === r)); o = !0)
                  ;
              } catch (s) {
                i = !0,
                    l = s
              } finally {
                try {
                  !o && t.return != null && t.return()
                } finally {
                  if (i)
                    throw l
                }
              }
              return n
            }
          }
          function Cg(e) {
            if (Array.isArray(e))
              return e
          }
          var Ps = function() {
            var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
            return r.replace(/\n/g, "")
          }
              , Ag = function(r) {
            var t = r.url
                , n = r.poster
                , o = r.likeCount
                , i = r.duration
                , u = r.collection
                , l = r.live
                , s = r.alt
                , c = r.previewUrlList
                , d = r.width
                , f = r.height
                , m = r.onVideoClick
                , v = (0,
                a.useState)(0)
                , p = qr(v, 2)
                , g = p[0]
                , h = p[1]
                , y = function() {
              return h(1)
            }
                , b = (0,
                vg.Z)()
                , _ = qr(b, 2)
                , A = _[0]
                , S = _[1]
                , P = (0,
                a.useRef)(!1)
                , I = (0,
                a.useState)(!1)
                , x = qr(I, 2)
                , T = x[0]
                , C = x[1]
                , O = T && S
                , k = (0,
                a.useCallback)(function() {
              C(!0)
            }, []);
            return (0,
                a.useEffect)(function() {
              P.current = /firefox/i.test(navigator.userAgent)
            }, []),
                (0,
                    a.useEffect)(function() {
                  C(!1)
                }, [S]),
                a.createElement("a", {
                  ref: A,
                  target: "_blank",
                  href: t,
                  className: j()(G.link, G.imgBorder)
                }, a.createElement("div", {
                  className: "".concat(G.imgWrapper, " ").concat(g !== 1 ? G.unloadImgWrapper : ""),
                  onClick: m
                }, a.createElement(yr, {
                  src: n,
                  alt: s,
                  imgClass: G.image,
                  className: G.imageContainer,
                  withBlurBg: !0,
                  onHandleImgLoad: y,
                  isPreviewing: O
                }), !P.current && Boolean(c) && c.length && S && a.createElement(bg, {
                  previewUrlList: c,
                  isHorizontal: d >= f,
                  onReady: k
                }), (u || l) && a.createElement("div", {
                  className: j()(G.imgCapsule, u ? G.collection : G.live, G.opacityAnimation, vo({}, G.hidden, O))
                }, u && a.createElement(hg, {
                  className: G.icon
                }), a.createElement("span", null, u ? "\u5408\u96C6" : "\u76F4\u64AD\u4E2D")), (o || i) && a.createElement("div", {
                  className: j()(G.imgMask, G.opacityAnimation, vo({}, G.hidden, O))
                }, a.createElement("div", {
                  className: G.bottomInfo
                }, o && a.createElement("div", {
                  className: G.likeCount
                }, a.createElement(oe, {
                  width: 20,
                  height: 18,
                  src: Es,
                  viewBox: "0 0 18 17"
                }), a.createElement("span", {
                  className: G.text
                }, o)), i && a.createElement("span", {
                  className: G.duration
                }, i)))))
          }
              , Sg = function(r) {
            var t = r.url
                , n = r.text
                , o = r.clamp
                , i = o === void 0 ? 2 : o
                , u = r.showTip
                , l = u === void 0 ? !1 : u
                , s = r.onVideoClick
                , c = (0,
                a.useState)(!1)
                , d = qr(c, 2)
                , f = d[0]
                , m = d[1]
                , v = Ps(n);
            return a.createElement("a", {
              target: "_blank",
              href: t,
              onClick: s,
              className: j()(G.link, G.titleWrapper)
            }, a.createElement("p", {
              onMouseEnter: function(g) {
                var h = g.currentTarget;
                l && h.scrollHeight > h.clientHeight && m(!0)
              },
              onMouseLeave: function() {
                return l && m(!1)
              },
              className: j()(G.title, vo({}, G.titleClamp1, i === 1))
            }, a.createElement(ze, {
              text: v
            })), f && a.createElement("div", {
              className: G.dialog
            }, a.createElement(ze, {
              text: v
            })))
          }
              , Ig = function(r) {
            var t = r.url
                , n = r.avatar
                , o = r.userName
                , i = r.time
                , u = r.onAuthorClick;
            return a.createElement("div", {
              className: G.source
            }, a.createElement("a", {
              target: "_blank",
              href: t,
              className: j()(G.link, G.userInfo),
              onClick: u
            }, a.createElement(Xe, {
              type: "extraExtraSmall",
              src: n,
              alt: "".concat(o, "\u5934\u50CF")
            }), a.createElement("p", {
              className: j()(G.name, G.nameGap)
            }, a.createElement(ze, {
              text: Ps(o)
            }))), i && a.createElement("span", {
              className: G.time
            }, i))
          }
              , Pg = function(r) {
            var t = r.video
                , n = r.title
                , o = r.source
                , i = r.className
                , u = r.onShow
                , l = r.onVideoClick
                , s = l === void 0 ? function() {
                  return {}
                }
                : l
                , c = r.onAuthorClick
                , d = c === void 0 ? function() {
                  return {}
                }
                : c
                , f = ts(u);
            return a.createElement("div", {
              ref: f,
              className: j()(G.imgContent, i)
            }, a.createElement(Ag, wr({}, t, {
              alt: n == null ? void 0 : n.text,
              onVideoClick: s
            })), (n == null ? void 0 : n.text) && a.createElement(Sg, wr({}, n, {
              onVideoClick: s
            })), o && a.createElement(Ig, wr({}, o, {
              onAuthorClick: d
            })))
          }
              , xg = function(r) {
            var t = r.titleClamp
                , n = t === void 0 ? 2 : t;
            return a.createElement("div", {
              className: G.imgContentSkeleton
            }, a.createElement("div", {
              className: G.imgWrapper
            }, a.createElement("div", {
              className: G.imgSkeleton
            }, a.createElement(Xr, null))), a.createElement("div", {
              className: G.titleSkeleton
            }), n >= 2 && a.createElement("div", {
              className: j()(G.titleSkeleton, G.titleSkeletonSecond)
            }), a.createElement("div", {
              className: G.sourceSkeleton
            }))
          }
              , Og = {
            videoCoverShow: {
              eventName: "video_cover_show",
              params: {
                author_id: "",
                group_id: "",
                log_pb: "",
                tab_name: "",
                enter_from: "",
                rank: 0
              }
            },
            videoCoverClick: {
              eventName: "video_cover_click",
              params: {
                author_id: "",
                group_id: "",
                log_pb: "",
                tab_name: "",
                enter_from: "",
                rank: 0
              }
            },
            enterVideoTab: {
              eventName: "enter_video_tab",
              params: {
                tab_name: ""
              }
            },
            stayVideoTab: {
              eventName: "stay_video_tab",
              params: {
                tab_name: "",
                duration: 0,
                is_visible: 1
              }
            },
            clickMoreTab: {
              eventName: "click_more_tab",
              params: {}
            }
          }
              , _r = new ot(Og)
              , Jt = {
            container: "_494bc1c6f4fa1450fb0b5f9811c4db08-scss",
            leftSpace: "_2dc9812849bfe436957345d09237dade-scss",
            rightSpace: "f19d0aab4fbba8274ea85214be60ee79-scss",
            feedContainer: "a503bb2ac66ba9ccb5f2277ad1f58c0a-scss",
            tabWrap: "_103a226d6a4f5fad9c9c5efa5bf350d4-scss",
            tabFlex: "_92c2ab53dfd9b61f59cc895d342661b5-scss",
            tabFix: "_4850f727473e6843a1d8768b6c5bc506-scss",
            tabCt: "_0939bf09effb3570d67f8a55da0be547-scss",
            contentContainer: "f3f8d90bfdc74a44ab0cbe784a4af104-scss",
            itemWidth: "ff48959a07ac65915c5a5582a6d72fbe-scss"
          };
          function xs(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function Rg(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      xs(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      xs(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          var Tg = rs
              , kg = xe
              , Ng = up
              , I3 = Tt
              , P3 = Qn
              , x3 = um
              , Lg = 1e3
              , Fg = function(r) {
            var t = r.current
                , n = r.onReload
                , o = (0,
                Ue.k6)();
            return (0,
                a.useEffect)(function() {
              var i = {
                key: t,
                event: function(l, s) {
                  s > 0 && _r.sendLog("stayVideoTab", {
                    tab_name: t,
                    duration: s,
                    is_visible: Number(l)
                  })
                }
              };
              Wn(i)
            }, [t]),
                a.createElement(ng, {
                  mode: "expandable",
                  activeClickable: !0,
                  onExpand: function(u) {
                    u || _r.sendLog("clickMoreTab")
                  },
                  onChange: function(u, l) {
                    console.log("t.....", u, t),
                        _r.sendLog("enterVideoTab", {
                          tab_name: u
                        }),
                        Ui(),
                        ji(t),
                        u === t ? (l.preventDefault(),
                            n(),
                            window.scrollTo(0, 0)) : Fr[u].route && (l.preventDefault(),
                            o.push(Fr[u].route))
                  },
                  current: t
                })
          }
              , Mg = a.memo(Fg);
          function Bg(e, r) {
            var t = e.fetchFeeds
                , n = e.current
                , o = e.defaultData
                , i = o === void 0 ? [] : o
                , u = (0,
                a.useCallback)(Rg(regeneratorRuntime.mark(function d() {
              var f, m, v, p, g;
              return regeneratorRuntime.wrap(function(y) {
                for (; ; )
                  switch (y.prev = y.next) {
                    case 0:
                      return y.next = 2,
                          t();
                    case 2:
                      return f = y.sent,
                          m = f.statusCode,
                          v = f.hasMore,
                          p = f.awemeList,
                          g = f.logPb,
                          y.abrupt("return", {
                            statusCode: m,
                            hasMore: v,
                            data: p,
                            logPb: g
                          });
                    case 8:
                    case "end":
                      return y.stop()
                  }
              }, d)
            })), [t])
                , l = function(f, m, v) {
              var p;
              _r.sendLog("videoCoverClick", {
                author_id: f == null || (p = f.authorInfo) === null || p === void 0 ? void 0 : p.uid,
                log_pb: v,
                group_id: f == null ? void 0 : f.groupId,
                enter_from: X(),
                rank: m,
                tab_name: n
              })
            }
                , s = function(f, m, v) {
              var p;
              _r.sendLog("videoCoverShow", {
                author_id: f == null || (p = f.authorInfo) === null || p === void 0 ? void 0 : p.uid,
                log_pb: v,
                group_id: f == null ? void 0 : f.groupId,
                enter_from: X(),
                rank: m,
                tab_name: n
              })
            };
            (0,
                a.useEffect)(function() {
              window.scrollTo(0, 0)
            }, [n]);
            var c = (0,
                a.useCallback)(function(d, f) {
              var m, v, p = {
                author_id: d == null || (m = d.authorInfo) === null || m === void 0 ? void 0 : m.uid,
                group_id: d == null ? void 0 : d.groupId,
                log_pb: f
              }, g = Tt(d == null || (v = d.authorInfo) === null || v === void 0 ? void 0 : v.secUid, "enter_method=video_title&".concat((0,
                  De.stringify)(p)));
              return g
            }, []);
            return a.createElement(a.Fragment, null, a.createElement(Mg, {
              current: n,
              onReload: function() {
                var f, m;
                console.log("result:", r),
                (f = r.current) === null || f === void 0 || f.reset(),
                (m = r.current) === null || m === void 0 || m.reload()
              }
            }), a.createElement("div", {
              className: Jt.container
            }, a.createElement("div", {
              className: Jt.leftSpace
            }), a.createElement("div", {
              className: Jt.feedContainer
            }, a.createElement(co, {
              ref: r,
              pageId: n,
              defaultDataList: i || [],
              fetchMoreData: u,
              containerClassName: Jt.contentContainer,
              itemClassName: Jt.itemWidth,
              skeletonNum: 8,
              renderSkeleton: function() {
                return a.createElement(xg, null)
              },
              renderNoDataError: function(f) {
                return f === he.ERROR_502 ? a.createElement(Xl, null) : f === he.ERROR_USER_FORBIDEN ? a.createElement(wt, {
                  title: "\u8D26\u53F7\u88AB\u5C01\u7981",
                  desc: " "
                }) : a.createElement(wt, null)
              },
              renderItem: function(f, m, v) {
                var p, g, h, y;
                return a.createElement(Pg, {
                  onVideoClick: function() {
                    return l(f, m, v)
                  },
                  onShow: function() {
                    return s(f, m, v)
                  },
                  video: {
                    url: ir(f.awemeId, "previous_page=".concat(X())),
                    poster: f.video.cover,
                    likeCount: kg(f.stats.diggCount),
                    duration: Ng(f.video.duration),
                    collection: f.mixInfo.status !== -1,
                    live: !1,
                    previewUrlList: (f == null || (p = f.video) === null || p === void 0 || (g = p.playAddr) === null || g === void 0 ? void 0 : g.map(function(b) {
                      return b.src || ""
                    })) || [],
                    width: f == null || (h = f.video) === null || h === void 0 ? void 0 : h.width,
                    height: f == null || (y = f.video) === null || y === void 0 ? void 0 : y.height
                  },
                  title: {
                    url: ir(f.awemeId, "previous_page=".concat(X())),
                    text: f.desc
                  },
                  source: {
                    url: c(f, v),
                    avatar: f.authorInfo.avatarUri,
                    userName: f.authorInfo.nickname,
                    time: Tg(f.createTime * Lg)
                  }
                })
              }
            })), a.createElement("div", {
              className: Jt.rightSpace
            })))
          }
          var po = a.forwardRef(Bg)
              , Dg = at;
          function jg(e) {
            var r = (0,
                Ue.UO)()
                , t = r.id
                , n = (0,
                a.useRef)(null)
                , o = Dg.CHANNEL_REF["channel_".concat(t)]
                , i = (o == null ? void 0 : o.label) || "\u9891\u9053";
            return jt("main_page"),
                (0,
                    a.useEffect)(function() {
                  n.current && (n.current.reset(),
                      n.current.reload())
                }, [t]),
                a.createElement(a.Fragment, null, a.createElement(Zt, null, a.createElement("title", null, i, "\u9891\u9053 - \u70ED\u95E8", i, "\u89C6\u9891\u5927\u5168 - \u6296\u97F3"), a.createElement("meta", {
                  name: "keywords",
                  content: "".concat(i, ",").concat(i, "\u89C6\u9891,\u70ED\u95E8").concat(i, ",").concat(i, "\u5C0F\u89C6\u9891,").concat(i, "\u77ED\u89C6\u9891,").concat(i, "\u6296\u97F3,").concat(i, "\u89C6\u9891\u5927\u5168,\u6296\u97F3")
                }), a.createElement("meta", {
                  name: "description",
                  content: "\u6296\u97F3\u4E3A\u60A8\u63D0\u4F9B".concat(i, "\u89C6\u9891\u5185\u5BB9\uFF0C\u53C8\u65B0\u53C8\u5168\u7684\u70ED\u95E8").concat(i, "\u89C6\u9891\u6BCF\u65E5\u66F4\u65B0\u3002\u6765\u6296\u97F3\uFF0C\u8BB0\u5F55\u7F8E\u597D\u751F\u6D3B\uFF01")
                }), a.createElement("link", {
                  rel: "canonical",
                  href: "https://www.douyin.com/channel/".concat(t)
                })), o ? a.createElement(po, {
                  fetchFeeds: function() {
                    return rl({
                      tagId: t
                    })
                  },
                  current: "channel_".concat(t),
                  ref: n
                }) : a.createElement($t, {
                  title: "\u4F60\u8981\u89C2\u770B\u7684\u9891\u9053\u4E0D\u5B58\u5728",
                  desc: " "
                }))
          }
          var O3 = E(98419)
              , Ug = {
            compilationDropDownMenuClick: {
              eventName: "compilation_drop_down_menu_click",
              params: {
                compilation_id: ""
              }
            },
            compilationClickMore: {
              eventName: "compilation_click_more",
              params: {
                compilation_id: ""
              }
            },
            collectionCoverShow: {
              eventName: "video_cover_show",
              params: {
                author_id: "",
                group_id: "",
                log_pb: "",
                enter_from: "",
                compilation_id: "",
                compilation_video_cnt: 0,
                type: "compilation",
                rank: 0
              }
            },
            collectionCoverClick: {
              eventName: "video_cover_click",
              params: {
                author_id: "",
                group_id: "",
                log_pb: "",
                enter_from: "",
                compilation_id: "",
                compilation_video_cnt: 0,
                type: "compilation",
                rank: 0
              }
            },
            videoCoverShow: {
              eventName: "video_cover_show",
              params: {
                author_id: "",
                group_id: "",
                log_pb: "",
                enter_from: "",
                type: "related_video",
                rank: 0
              }
            },
            videoCoverClick: {
              eventName: "video_cover_click",
              params: {
                author_id: "",
                group_id: "",
                log_pb: "",
                enter_from: "",
                type: "related_video",
                rank: 0
              }
            },
            like: {
              eventName: "like",
              params: {
                author_id: "",
                group_id: "",
                log_pb: "",
                enter_from: "",
                previous_page: "web_link"
              }
            },
            cancelLike: {
              eventName: "cancel_like",
              params: {
                author_id: "",
                group_id: "",
                log_pb: "",
                enter_from: "",
                previous_page: "web_link"
              }
            },
            clickCommentButton: {
              eventName: "click_comment_button",
              params: {
                author_id: "",
                group_id: "",
                log_pb: "",
                enter_from: "",
                previous_page: "web_link"
              }
            },
            shareMenuShow: {
              eventName: "share_menu_show",
              params: {
                author_id: "",
                group_id: "",
                log_pb: "",
                enter_from: "",
                previous_page: "web_link"
              }
            },
            shareVideo: {
              eventName: "share_video",
              params: {
                author_id: "",
                group_id: "",
                log_pb: "",
                enter_from: "",
                previous_page: "web_link",
                type: ""
              }
            },
            follow: {
              eventName: "follow",
              params: {
                author_id: "",
                group_id: "",
                log_pb: "",
                enter_from: "",
                previous_page: "web_link"
              }
            },
            followCancel: {
              eventName: "follow_cancel",
              params: {
                author_id: "",
                group_id: "",
                log_pb: "",
                enter_from: "",
                previous_page: "web_link"
              }
            },
            enterPersonalDetail: {
              eventName: "enter_personal_detail",
              params: {
                author_id: "",
                group_id: "",
                log_pb: "",
                enter_from: "",
                previous_page: "web_link",
                to_user_id: "",
                enter_method: ""
              }
            }
          }
              , Ze = new ot(Ug)
              , Hg = {
            container: "_01d08daac5bd9ca8e8d001c0835ab65b-scss"
          }
              , Wg = {
            divider: "dd52d12b7fd9593beb6f1cb2c50d3c37-scss"
          };
          function en() {
            return a.createElement("div", {
              className: Wg.divider
            })
          }
          var Vg = {
            container: "c77c4bde2eb9353bd95e963166e29091-scss"
          };
          function zg(e) {
            var r = e.width
                , t = r === void 0 ? 5 : r
                , n = e.height
                , o = n === void 0 ? 4 : n
                , i = e.color
                , u = i === void 0 ? "#6C6F8D" : i
                , l = e.className
                , s = l === void 0 ? "" : l;
            return a.createElement("div", {
              className: j()(Vg.container, s),
              style: {
                borderTopWidth: o,
                borderBottomWidth: o,
                borderLeftWidth: t,
                borderLeftColor: u
              }
            })
          }
          var Kg = {
            default: "#D9DAE5",
            label: "#FE2C55",
            live: "linear-gradient(134.66deg, #FF1764 0%, #ED3495 100%)",
            hot: "linear-gradient(268.09deg, #F01B5B 6.38%, #FF5A44 59.9%, #FF9113 91.68%)",
            coupon: "linear-gradient(135.01deg, #FF6238 0%, #FF851D 100%)",
            top: "#FACE15",
            collection: "rgba(18, 20, 35, 0.9)"
          }
              , go = Kg
              , Os = {
            tag: "_780bf853c56f3d6e150c9f36e78fecb1-scss",
            label: "cfd18500dd499c48446fa5fef9ec3705-scss",
            live: "c615018b42fb551ebc14aea049e776e1-scss",
            hot: "d53a0b842b7a4d8df7c7879511b47d62-scss",
            coupon: "_2713f4185b8d0e9aad88928f28ae29a4-scss",
            collection: "c69f6b7ce546ae8fb7cb9f57fa35c9ca-scss",
            default: "_48099a373fbdc023b589445c3756fa85-scss",
            top: "e73b432b1a9f7f342785c7231dd707da-scss"
          };
          function Rs(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
              })),
                  t.push.apply(t, n)
            }
            return t
          }
          function Gg(e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r] != null ? arguments[r] : {};
              r % 2 ? Rs(Object(t), !0).forEach(function(n) {
                Qg(e, n, t[n])
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Rs(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              })
            }
            return e
          }
          function Qg(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          var Je = function(r) {
            var t = r.type
                , n = t === void 0 ? "label" : t
                , o = r.className
                , i = r.style
                , u = r.children
                , l = r.icon
                , s = r.onChange
                , c = function() {
              return !!go[n]
            }
                , d = Gg({
              background: n && c() ? go[n] : go.label
            }, i)
                , f = j()(Os.tag, Os[n], o)
                , m = l || null
                , v = m ? a.createElement(a.Fragment, null, m, u) : u;
            return a.createElement("span", {
              className: f,
              style: d,
              onClick: s
            }, v)
          }, Ts = function() {
            return a.createElement(Je, {
              type: "top"
            }, "\u7F6E\u9876")
          }, ks = function() {
            return a.createElement(Je, {
              type: "top"
            }, "\u540C\u57CE\u7CBE\u9009")
          }, Ns = function(r) {
            var t = r.top;
            return a.createElement(Je, {
              type: "hot"
            }, "\u70ED\u699C", t ? " TOP".concat(t) : "", " ")
          }, Yg = function() {
            return a.createElement(Je, {
              type: "hot"
            }, "\u65E5\u5E38")
          }, Xg = function() {
            return a.createElement(Je, {
              type: "live"
            }, "\u76F4\u64AD\u4E2D")
          }, Nt = function(r) {
            var t = r.type
                , n = {
              1: "\u5BA1\u6838\u672A\u901A\u8FC7",
              2: "\u5BA1\u6838\u4E2D"
            };
            return a.createElement(Je, {
              type: "collection"
            }, n[t] || n["1"])
          }, le = {
            commentItemContainer: "aa8946e6a10e3788dca09663eb82fc99-scss",
            tag: "_7f0c74cf21d6b46ba1e04cc6a5df2812-scss",
            defaultTag: "_5dfe2aee6bbf61c8ad452d65ee612834-scss",
            avatar: "_32d65b2328ba9277f082c879bd49a0e6-scss",
            contentContainer: "c7ee22de401c856152e3646bffd656a3-scss",
            infoWrap: "_52058b306f496907c5d55c0facb81886-scss",
            nickWrap: "d8e7526a15bef9ed83cb2bd813766939-scss",
            nickname: "_96ab12486b27de1f4a4a52e10dcb631a-scss",
            triggle: "_72df56174004b66fa0d904137212dab6-scss",
            tagWrap: "aece40589e3ede276d7b09bfb9dab9f4-scss",
            timeWrap: "_6d51b35c250a771d1e1b5b400ff3176e-scss",
            actionText: "_4606ab538a02ebc403e739ef22ef3604-scss",
            opContainer: "c2de27b4f28bd4bb0cdbcabadabe8bf3-scss",
            statsContainer: "f09c3b4bb22295c1b1b4e0e735992f87-scss",
            stats: "_314bde61933468933fabb30f1507cdb2-scss",
            replyExpandBtn: "_41129c3e587f113be731ac011aca7574-scss",
            dividWrap: "_253f6877e92ecf3acb0686793672aa00-scss"
          }, Ls;
          function ho() {
            return ho = Object.assign || function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }
                ,
                ho.apply(this, arguments)
          }
          function $g(e) {
            return a.createElement("svg", ho({
              width: 16,
              height: 16,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, e), Ls || (Ls = a.createElement("path", {
              d: "M8.119 2.413C8.759 1.49 9.809 1 10.966 1 13.168 1 15 2.937 15 5.24l-.002.152a.349.349 0 00.002.083c-.008.485-.09.885-.237 1.414-.083.095-.16.274-.238.47a2.107 2.107 0 00-.237.472 8.278 8.278 0 01-.051.086c-.614 1.018-1.505 2.044-2.39 2.938-1.214 1.235-2.44 2.26-2.978 2.71-.15.126-.247.206-.274.234C8.397 14 8.198 14 8 14h-.001c-.396 0-.594-.201-.792-.402a1.777 1.777 0 00-.106-.09 28.843 28.843 0 01-3.29-2.935c-.947-.985-1.853-2.108-2.354-3.207-.198-.402-.446-1.36-.457-1.89.004-.005.004-.03.002-.081A5.655 5.655 0 011 5.24C1 2.936 2.83 1 5.034 1c1.154 0 2.206.489 3.085 1.413z",
              fill: "#4F5168"
            })))
          }
          var Zg = $g, Fs;
          function yo() {
            return yo = Object.assign || function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }
                ,
                yo.apply(this, arguments)
          }
          function Jg(e) {
            return a.createElement("svg", yo({
              width: 36,
              height: 36,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, e), Fs || (Fs = a.createElement("path", {
              d: "M10.065 12.864a1.928 1.928 0 000 2.727l7 7a1.929 1.929 0 002.728 0l.015-.015 6.985-6.985a1.928 1.928 0 10-2.727-2.727L18.429 18.5l-5.637-5.637a1.928 1.928 0 00-2.727 0z",
              fill: "#0A0C20"
            })))
          }
          var tn = Jg;
          function Ms(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          function qg(e, r) {
            return n1(e) || r1(e, r) || t1(e, r) || e1()
          }
          function e1() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function t1(e, r) {
            if (!!e) {
              if (typeof e == "string")
                return Bs(e, r);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              if (t === "Object" && e.constructor && (t = e.constructor.name),
              t === "Map" || t === "Set")
                return Array.from(e);
              if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return Bs(e, r)
            }
          }
          function Bs(e, r) {
            (r == null || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
              n[t] = e[t];
            return n
          }
          function r1(e, r) {
            var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (t != null) {
              var n = [], o = !0, i = !1, u, l;
              try {
                for (t = t.call(e); !(o = (u = t.next()).done) && (n.push(u.value),
                    !(r && n.length === r)); o = !0)
                  ;
              } catch (s) {
                i = !0,
                    l = s
              } finally {
                try {
                  !o && t.return != null && t.return()
                } finally {
                  if (i)
                    throw l
                }
              }
              return n
            }
          }
          function n1(e) {
            if (Array.isArray(e))
              return e
          }
          var a1 = rs
              , o1 = xe
              , R3 = Tt
              , i1 = 1e3
              , bo = function(r, t, n) {
            var o, i = {
              author_id: t == null || (o = t.authorInfo) === null || o === void 0 ? void 0 : o.uid,
              group_id: t == null ? void 0 : t.groupId,
              log_pb: n
            }, u = Tt(r, "enter_method=comment&".concat((0,
                De.stringify)(i)));
            return u
          };
          function Ds(e) {
            var r, t = e.type, n = t === void 0 ? "clarity" : t, o = e.commentInfo, i = e.isNeedReply, u = i === void 0 ? !0 : i, l = e.children, s = e.awemeInfo, c = e.awemelogPb, d = e.isNeedDivid, f = d === void 0 ? !1 : d, m = (0,
                a.useState)(Boolean(o == null || (r = o.replyComment) === null || r === void 0 ? void 0 : r.length)), v = qg(m, 2), p = v[0], g = v[1], h = o.user, y = o.diggCount, b = o.text, _ = o.textExtra, A = o.createTime, S = o.replyTotal, P = o.labelText, I = o.labelType, x = o.isTop, T = o.replyToUserName, C = o.replyToUserId, O = o.replySecUid, k = o.labelList, B = o.stickyInfo, R = o.forwardId, F = h.nickname, M = h.avatarUri, L = h.secUid, W = h.uid;
            return a.createElement("div", {
              className: j()(le.commentItemContainer, Ms({}, le[n], Boolean(le[n])))
            }, a.createElement("div", {
              className: le.avatar
            }, a.createElement("div", {
              onClick: function() {
                location.href = bo(L, s, c)
              }
            }, a.createElement(Xe, {
              src: M,
              type: "extraSmall",
              alt: "".concat(F, "\u5934\u50CF")
            }))), a.createElement("div", {
              className: le.contentContainer
            }, a.createElement("div", {
              className: le.infoWrap
            }, a.createElement("div", {
              className: le.nickWrap
            }, a.createElement("div", {
              className: le.nickname
            }, a.createElement("a", {
              href: bo(L, s, c)
            }, a.createElement(ze, {
              text: F
            })), T && C && a.createElement(a.Fragment, null, a.createElement(zg, {
              className: le.triggle
            }), a.createElement("a", {
              href: bo(O, s, c)
            }, a.createElement(ze, {
              text: T
            })))), P && a.createElement(Je, {
              type: I === 1 ? "label" : "default",
              className: j()(le.tag, Ms({}, le.defaultTag, I !== 1))
            }, P) || ""), a.createElement("div", null, a.createElement("p", {
              className: le.timeWrap
            }, A && a1(A * i1)))), a.createElement("p", null, a.createElement("span", {
              className: le.actionText
            }, a.createElement(ze, {
              text: b,
              textExtra: _,
              stickyInfo: B
            }, R ? a.createElement("span", null, "\u8F6C\u53D1 \xB7 ") : "")), k[0] && a.createElement(Je, {
              type: "default",
              className: j()(le.tag, le.defaultTag)
            }, " ", k[0].text) || "", x && a.createElement(Je, {
              type: "default",
              className: j()(le.tag, le.defaultTag)
            }, "\u7F6E\u9876") || ""), a.createElement("div", {
              className: le.opContainer
            }, a.createElement("div", {
              className: le.statsContainer
            }, a.createElement("p", {
              className: le.stats
            }, a.createElement(Zg, null), a.createElement("span", null, o1(y || 0)))), u && !p && S && a.createElement("button", {
              type: "button",
              className: le.replyExpandBtn,
              onClick: function() {
                g(!0)
              }
            }, a.createElement("span", null, "\u5C55\u5F00", S, "\u6761\u56DE\u590D"), a.createElement(oe, {
              src: tn,
              color: dt
            })) || ""), u && p && S && l, f && a.createElement("div", {
              className: le.dividWrap
            }, a.createElement(en, null))))
          }
          var js;
          function wo() {
            return wo = Object.assign || function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }
                ,
                wo.apply(this, arguments)
          }
          function u1(e) {
            return a.createElement("svg", wo({
              width: 36,
              height: 36,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, e), js || (js = a.createElement("path", {
              d: "M10.065 22.592a1.928 1.928 0 010-2.728l7-7a1.928 1.928 0 012.728 0l.015.016 6.985 6.984a1.928 1.928 0 11-2.727 2.728l-5.637-5.637-5.637 5.637a1.928 1.928 0 01-2.727 0z",
              fill: "#0A0C20"
            })))
          }
          var Us = u1
              , rn = {
            conatainer: "dcf8057cf54e16c8f3718fe9fd11a3cd-scss",
            replyExpandBtn: "b82d8f7a3085b37109200dce4939beb8-scss"
          };
          function Hs(e) {
            return c1(e) || s1(e) || Vs(e) || l1()
          }
          function l1() {
            throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function s1(e) {
            if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null)
              return Array.from(e)
          }
          function c1(e) {
            if (Array.isArray(e))
              return Eo(e)
          }
          function Ws(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function f1(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      Ws(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      Ws(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          function _o(e, r) {
            return v1(e) || m1(e, r) || Vs(e, r) || d1()
          }
          function d1() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function Vs(e, r) {
            if (!!e) {
              if (typeof e == "string")
                return Eo(e, r);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              if (t === "Object" && e.constructor && (t = e.constructor.name),
              t === "Map" || t === "Set")
                return Array.from(e);
              if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return Eo(e, r)
            }
          }
          function Eo(e, r) {
            (r == null || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
              n[t] = e[t];
            return n
          }
          function m1(e, r) {
            var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (t != null) {
              var n = [], o = !0, i = !1, u, l;
              try {
                for (t = t.call(e); !(o = (u = t.next()).done) && (n.push(u.value),
                    !(r && n.length === r)); o = !0)
                  ;
              } catch (s) {
                i = !0,
                    l = s
              } finally {
                try {
                  !o && t.return != null && t.return()
                } finally {
                  if (i)
                    throw l
                }
              }
              return n
            }
          }
          function v1(e) {
            if (Array.isArray(e))
              return e
          }
          function zs(e) {
            var r = e.replyInfo;
            return a.createElement(Ds, {
              commentInfo: r
            })
          }
          function p1(e) {
            var r = e.defaultReply
                , t = r === void 0 ? [] : r
                , n = e.replyTotal
                , o = e.fetchReply
                , i = e.firstReplyCount
                , u = i === void 0 ? 3 : i
                , l = e.replyCount
                , s = l === void 0 ? 10 : l
                , c = e.scrollContainerEl
                , d = (0,
                a.useMemo)(function() {
              return t.map(function(M) {
                return M.cid
              })
            }, [t])
                , f = n > ((t == null ? void 0 : t.length) || 0)
                , m = (0,
                a.useState)([])
                , v = _o(m, 2)
                , p = v[0]
                , g = v[1]
                , h = (0,
                a.useRef)(0)
                , y = (0,
                a.useRef)(f)
                , b = (0,
                a.useState)(!1)
                , _ = _o(b, 2)
                , A = _[0]
                , S = _[1]
                , P = (0,
                a.useState)(!0)
                , I = _o(P, 2)
                , x = I[0]
                , T = I[1]
                , C = (0,
                a.useRef)(null)
                , O = a.useCallback(f1(regeneratorRuntime.mark(function M() {
              var L, W, N, z, U, re, J = arguments;
              return regeneratorRuntime.wrap(function(Q) {
                for (; ; )
                  switch (Q.prev = Q.next) {
                    case 0:
                      if (L = J.length > 0 && J[0] !== void 0 ? J[0] : !1,
                          !(!A && y.current)) {
                        Q.next = 12;
                        break
                      }
                      return S(!0),
                          Q.next = 5,
                          o(h.current, L ? u : s);
                    case 5:
                      W = Q.sent,
                          N = W.statusCode,
                          z = W.comments,
                          U = W.cursor,
                          re = W.hasMore,
                      N === 0 && (y.current = re,
                          h.current = U,
                          g(function(Y) {
                            return [].concat(Hs(Y), Hs(z))
                          })),
                          S(!1);
                    case 12:
                    case "end":
                      return Q.stop()
                  }
              }, M)
            })), [u, s, A])
                , k = a.useCallback(function() {
              if (c = c || window,
              C.current && c && C.current.getBoundingClientRect().top < 122) {
                T(!1);
                var M = C.current.clientHeight
                    , L = kr(c)
                    , W = L.x
                    , N = L.y;
                c.scrollTo(W, Math.max(N - M - 25, 0))
              } else
                T(!1)
            }, [c])
                , B = p.length === 0 && t.length === 0;
            (0,
                a.useEffect)(function() {
              B && O(!0)
            }, [B]);
            var R = n - t.length
                , F = null;
            return A ? F = a.createElement(Ge, {
              text: ""
            }) : R > 0 && (y.current ? F = a.createElement("button", {
              type: "button",
              className: rn.replyExpandBtn,
              onClick: function() {
                O(p.length === 0)
              }
            }, p.length > 0 ? a.createElement("span", null, "\u5C55\u5F00\u66F4\u591A") : a.createElement("span", null, "\u5C55\u5F00", R, "\u6761\u56DE\u590D"), a.createElement(oe, {
              src: tn,
              color: dt
            })) : x ? F = a.createElement("button", {
              type: "button",
              className: rn.replyExpandBtn,
              onClick: k
            }, a.createElement("span", null, "\u6536\u8D77"), a.createElement(oe, {
              src: Us,
              color: dt
            })) : F = a.createElement("button", {
              type: "button",
              className: rn.replyExpandBtn,
              onClick: function() {
                T(!0)
              }
            }, a.createElement("span", null, "\u5C55\u5F00", R, "\u6761\u56DE\u590D"), a.createElement(oe, {
              src: tn,
              color: dt
            }))),
                a.createElement("div", {
                  className: rn.conatainer,
                  ref: C
                }, t.map(function(M) {
                  return a.createElement(zs, {
                    replyInfo: M,
                    key: M.cid
                  })
                }), x && p.filter(function(M) {
                  return !d.includes(M.cid)
                }).map(function(M) {
                  return a.createElement(zs, {
                    replyInfo: M,
                    key: M.cid
                  })
                }), A ? a.createElement(Ge, {
                  text: ""
                }) : F)
          }
          function g1(e) {
            var r = e.type
                , t = r === void 0 ? "clarity" : r
                , n = e.commentInfo
                , o = e.fetchReply
                , i = o === void 0 ? null : o
                , u = e.isNeedReply
                , l = u === void 0 ? !0 : u
                , s = e.scrollContainerEl
                , c = e.awemeInfo
                , d = e.userInfo
                , f = e.awemelogPb
                , m = n.cid
                , v = a.useCallback(function(p, g) {
              return i == null ? void 0 : i(m, p, g)
            }, [i, m]);
            return a.createElement("div", null, a.createElement(Ds, {
              awemelogPb: f,
              type: t,
              commentInfo: n,
              isNeedReply: l,
              awemeInfo: c,
              userInfo: d,
              isNeedDivid: !0
            }, a.createElement(p1, {
              fetchReply: v,
              scrollContainerEl: s,
              replyTotal: (n == null ? void 0 : n.replyTotal) || 0,
              defaultReply: (n == null ? void 0 : n.replyComment) || []
            })))
          }
          var ut = {
            noMoreText: "_2b22e342b8c47a455d1f3ef37ea9e7b2-scss",
            opBtn: "_25f0ee03b8c6561fb398f48c27f04ebe-scss",
            dividWrap: "_933b69f01010c3db090e6b1cf8d5c73a-scss",
            title: "_55599f22c0f9ab22c07603f367a65225-scss",
            divider: "af0f88d04c3a21977735983f9bd58583-scss",
            emptyComment: "_7586d2516d90247952e2ad75804cced7-scss"
          };
          function Ks(e) {
            return b1(e) || y1(e) || Ys(e) || h1()
          }
          function h1() {
            throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function y1(e) {
            if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null)
              return Array.from(e)
          }
          function b1(e) {
            if (Array.isArray(e))
              return Co(e)
          }
          function Gs(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function w1(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      Gs(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      Gs(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          function Qs(e, r) {
            return C1(e) || E1(e, r) || Ys(e, r) || _1()
          }
          function _1() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function Ys(e, r) {
            if (!!e) {
              if (typeof e == "string")
                return Co(e, r);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              if (t === "Object" && e.constructor && (t = e.constructor.name),
              t === "Map" || t === "Set")
                return Array.from(e);
              if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return Co(e, r)
            }
          }
          function Co(e, r) {
            (r == null || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
              n[t] = e[t];
            return n
          }
          function E1(e, r) {
            var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (t != null) {
              var n = [], o = !0, i = !1, u, l;
              try {
                for (t = t.call(e); !(o = (u = t.next()).done) && (n.push(u.value),
                    !(r && n.length === r)); o = !0)
                  ;
              } catch (s) {
                i = !0,
                    l = s
              } finally {
                try {
                  !o && t.return != null && t.return()
                } finally {
                  if (i)
                    throw l
                }
              }
              return n
            }
          }
          function C1(e) {
            if (Array.isArray(e))
              return e
          }
          function A1(e) {
            var r = e.reload;
            return a.createElement("div", {
              className: ut.noMoreText
            }, "\u670D\u52A1\u5F02\u5E38\uFF0C", a.createElement("span", {
              onClick: r,
              className: ut.opBtn
            }, "\u5237\u65B0"), "\u62C9\u53D6\u6570\u636E")
          }
          function S1(e) {
            var r = e.isInit
                , t = r === void 0 ? !1 : r
                , n = e.defaultommentList
                , o = n === void 0 ? [] : n
                , i = e.defaultCursor
                , u = i === void 0 ? 0 : i
                , l = e.defaultHotsoonHasMoreRef
                , s = l === void 0 ? 0 : l
                , c = e.defaultHasMore
                , d = c === void 0 ? !0 : c
                , f = e.defaultStatusCode
                , m = f === void 0 ? 0 : f
                , v = e.count
                , p = v === void 0 ? 20 : v
                , g = e.scrollContainerEl
                , h = g === void 0 ? null : g
                , y = e.fetchComment
                , b = e.fetchReply
                , _ = e.awemeInfo
                , A = e.userInfo
                , S = e.awemelogPb
                , P = (0,
                a.useState)(o)
                , I = Qs(P, 2)
                , x = I[0]
                , T = I[1]
                , C = (0,
                a.useRef)(u)
                , O = (0,
                a.useRef)(d)
                , k = (0,
                a.useState)(m)
                , B = Qs(k, 2)
                , R = B[0]
                , F = B[1]
                , M = (0,
                a.useRef)(s)
                , L = (0,
                a.useRef)(null)
                , W = (0,
                a.useRef)(t)
                , N = (0,
                a.useRef)(!1);
            (0,
                a.useEffect)(function() {
              return N.current = !1,
                  function() {
                    N.current = !0
                  }
            }, []);
            var z = a.useCallback(w1(regeneratorRuntime.mark(function J() {
              var ue, Q, Y, H, Ie, we;
              return regeneratorRuntime.wrap(function($) {
                for (; ; )
                  switch ($.prev = $.next) {
                    case 0:
                      if (!(!W.current && O.current)) {
                        $.next = 21;
                        break
                      }
                      return W.current = !0,
                          $.prev = 2,
                          $.next = 5,
                          y(C.current, p);
                    case 5:
                      if (ue = $.sent,
                          Q = ue.statusCode,
                          Y = ue.comments,
                          H = ue.cursor,
                          Ie = ue.hasMore,
                          we = ue.hotsoonHasMore,
                          !N.current) {
                        $.next = 13;
                        break
                      }
                      return $.abrupt("return");
                    case 13:
                      F(Q),
                      Q === 0 && (C.current = H,
                          O.current = Ie,
                          M.current = we,
                          T(function(pe) {
                            return [].concat(Ks(pe), Ks(Y))
                          })),
                          $.next = 20;
                      break;
                    case 17:
                      $.prev = 17,
                          $.t0 = $.catch(2),
                          F(-1);
                    case 20:
                      W.current = !1;
                    case 21:
                    case "end":
                      return $.stop()
                  }
              }, J, null, [[2, 17]])
            })), [p]);
            (0,
                a.useEffect)(function() {
              x.length === 0 && z()
            }, [z, x.length]),
                (0,
                    a.useEffect)(function() {
                  var J = oo()(function() {
                    if (L && L.current) {
                      var ue = L.current.getBoundingClientRect()
                          , Q = ue.bottom;
                      Q <= window.innerHeight + 250 && z()
                    }
                  }, 500);
                  return h = h || document,
                  h && O.current && R === 0 && (h.addEventListener("scroll", J),
                      window.addEventListener("resize", J),
                      J()),
                      function() {
                        h && O.current && (h.removeEventListener("scroll", J),
                            window.removeEventListener("resize", J))
                      }
                }, [h, z, R]);
            var U = !1
                , re = null;
            return R === 0 ? O.current ? re = a.createElement(Ge, {
              className: "",
              text: ""
            }) : M.current ? re = a.createElement("p", {
              className: ut.noMoreText
            }, "\u90E8\u5206\u8BC4\u8BBA\u56E0\u672A\u6388\u6743\u6296\u97F3\uFF0C\u6682\u4E0D\u652F\u6301\u67E5\u770B") : x.length === 0 ? (re = a.createElement("div", {
              className: ut.noMoreText
            }, a.createElement($e, {
              desc: "\u6682\u65E0\u8BC4\u8BBA",
              title: "",
              className: ut.emptyComment
            })),
                U = !0) : re = a.createElement("div", {
              className: ut.noMoreText
            }, "\u6682\u65F6\u6CA1\u6709\u66F4\u591A\u8BC4\u8BBA") : re = a.createElement(A1, {
              reload: function() {
                F(0),
                    z()
              }
            }),
                a.createElement(a.Fragment, null, !U && a.createElement("div", {
                  className: ut.dividWrap
                }, a.createElement("span", {
                  className: ut.title
                }, "\u5168\u90E8\u8BC4\u8BBA"), a.createElement("div", {
                  className: ut.divider
                }, a.createElement(en, null))), a.createElement("div", {
                  ref: L
                }, x.map(function(J) {
                  return a.createElement(g1, {
                    userInfo: A,
                    awemeInfo: _,
                    key: J.cid,
                    commentInfo: J,
                    fetchReply: b,
                    scrollContainerEl: h,
                    awemelogPb: S
                  })
                }), re))
          }
          function I1(e) {
            var r = e.awemeId
                , t = e.awemeInfo
                , n = e.userInfo
                , o = e.defaultComment
                , i = e.awemelogPb
                , u = a.useCallback(function(c, d) {
              return fa({
                awemeId: r,
                cursor: c,
                count: d
              })
            }, [r])
                , l = a.useCallback(function(c, d, f) {
              return Vm({
                awemeId: r,
                commentId: c,
                cursor: d,
                count: f
              })
            }, [r]);
            if (!r)
              return a.createElement(a.Fragment, null);
            var s = (o == null ? void 0 : o.statusCode) === 0;
            return a.createElement(a.Fragment, null, a.createElement("div", {
              className: Hg.container
            }, a.createElement(S1, {
              awemelogPb: i,
              defaultommentList: (o == null ? void 0 : o.comments) || [],
              defaultCursor: (o == null ? void 0 : o.cursor) || 0,
              defaultHotsoonHasMoreRef: s ? o == null ? void 0 : o.hotsoonHasMore : 0,
              defaultHasMore: s ? o == null ? void 0 : o.hasMore : !0,
              defaultStatusCode: 0,
              fetchComment: u,
              fetchReply: l,
              awemeInfo: t,
              userInfo: n
            })))
          }
          function Xs(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
              })),
                  t.push.apply(t, n)
            }
            return t
          }
          function $s(e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r] != null ? arguments[r] : {};
              r % 2 ? Xs(Object(t), !0).forEach(function(n) {
                Ao(e, n, t[n])
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Xs(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              })
            }
            return e
          }
          function Ao(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          function Zs(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function P1(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      Zs(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      Zs(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          var x1 = He;
          function O1() {
            return So.apply(this, arguments)
          }
          function So() {
            return So = P1(regeneratorRuntime.mark(function e() {
              var r, t, n, o, i, u, l = arguments;
              return regeneratorRuntime.wrap(function(c) {
                for (; ; )
                  switch (c.prev = c.next) {
                    case 0:
                      return t = l.length > 0 && l[0] !== void 0 ? l[0] : "",
                          n = l.length > 1 && l[1] !== void 0 ? l[1] : 1,
                          c.next = 4,
                          ur("/aweme/v1/web/commit/follow/user/", $s($s({}, x1), {}, (r = {},
                              Ao(r, "user_id", t),
                              Ao(r, "type", Number(Boolean(n))),
                              r)));
                    case 4:
                      return o = c.sent,
                          i = o.log_pb && JSON.stringify(o.log_pb),
                          u = o.status_code,
                      o.status_code === 0 && o.follow_status === void 0 && (u = -1),
                          c.abrupt("return", {
                            logPb: i,
                            statusCode: u,
                            followStatus: o.follow_status,
                            errMsg: u !== 0 && !o.status_msg ? "\u554A\u54E6\uFF0C\u670D\u52A1\u5668\u6253\u778C\u7761\u4E86" : o.status_msg
                          });
                    case 9:
                    case "end":
                      return c.stop()
                  }
              }, e)
            })),
                So.apply(this, arguments)
          }
          function Js(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function Io(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      Js(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      Js(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          function qs(e, r) {
            return N1(e) || k1(e, r) || T1(e, r) || R1()
          }
          function R1() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function T1(e, r) {
            if (!!e) {
              if (typeof e == "string")
                return ec(e, r);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              if (t === "Object" && e.constructor && (t = e.constructor.name),
              t === "Map" || t === "Set")
                return Array.from(e);
              if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return ec(e, r)
            }
          }
          function ec(e, r) {
            (r == null || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
              n[t] = e[t];
            return n
          }
          function k1(e, r) {
            var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (t != null) {
              var n = [], o = !0, i = !1, u, l;
              try {
                for (t = t.call(e); !(o = (u = t.next()).done) && (n.push(u.value),
                    !(r && n.length === r)); o = !0)
                  ;
              } catch (s) {
                i = !0,
                    l = s
              } finally {
                try {
                  !o && t.return != null && t.return()
                } finally {
                  if (i)
                    throw l
                }
              }
              return n
            }
          }
          function N1(e) {
            if (Array.isArray(e))
              return e
          }
          var L1 = {
            follow: {
              eventName: "follow",
              params: {
                enter_from: "",
                to_user_id: ""
              }
            },
            followCancel: {
              eventName: "follow_cancel",
              params: {
                enter_from: "",
                to_user_id: ""
              }
            }
          }
              , tc = new ot(L1);
          function rc(e, r) {
            e || tc.sendLog("follow", {
              enter_from: X(),
              to_user_id: r
            })
          }
          function nc(e, r) {
            e || tc.sendLog("followCancel", {
              enter_from: X(),
              to_user_id: r
            })
          }
          function ac(e) {
            var r = e.followStatus
                , t = e.followerStatus
                , n = e.isLogin
                , o = e.uid
                , i = e.onLoginSuc
                , u = e.onSuccFollow
                , l = e.onSuccUnFollow
                , s = e.useCustomLog
                , c = (0,
                a.useState)(r)
                , d = qs(c, 2)
                , f = d[0]
                , m = d[1]
                , v = (0,
                a.useState)(n)
                , p = qs(v, 2)
                , g = p[0]
                , h = p[1]
                , y = (0,
                a.useRef)(t)
                , b = (0,
                a.useRef)(!1)
                , _ = (0,
                a.useRef)(o)
                , A = "\u5173\u6CE8"
                , S = 0;
            f === 1 ? (A = "\u5DF2\u5173\u6CE8",
                S = 1) : f === 2 ? (A = "\u4E92\u76F8\u5173\u6CE8",
                S = 1) : f === 4 ? (A = "\u5DF2\u8BF7\u6C42",
                S = 1) : y.current > 0 && (A = "\u56DE\u5173");
            var P = (0,
                a.useCallback)(function() {
              var x = Io(regeneratorRuntime.mark(function T(C, O, k) {
                var B, R, F, M, L;
                return regeneratorRuntime.wrap(function(N) {
                  for (; ; )
                    switch (N.prev = N.next) {
                      case 0:
                        return N.prev = 0,
                            N.next = 3,
                            O1(C, O);
                      case 3:
                        B = N.sent,
                            R = B.statusCode,
                            F = B.followStatus,
                            M = B.errMsg,
                            L = B.logPb,
                            R ? (ye.info(M),
                            R === he.ERROR_USER_UNLOGIN && h(0)) : (F === 1 || F === 2 ? (ye.info("\u5DF2\u5173\u6CE8"),
                            u && u(L),
                                rc(s, C)) : F === 4 ? (ye.info("\u5DF2\u8BF7\u6C42"),
                            u && u(L),
                                rc(s, C)) : k === 4 ? (ye.info("\u5DF2\u53D6\u6D88\u5173\u6CE8\u8BF7\u6C42"),
                            l && l(L),
                                nc(s, C)) : (ye.info("\u5DF2\u53D6\u6D88\u5173\u6CE8"),
                            l && l(L),
                                nc(s, C)),
                            (_.current === C || !_.current) && m(F),
                                h(1)),
                            N.next = 14;
                        break;
                      case 11:
                        N.prev = 11,
                            N.t0 = N.catch(0),
                            ye.info("\u5173\u6CE8\u5931\u8D25");
                      case 14:
                      case "end":
                        return N.stop()
                    }
                }, T, null, [[0, 11]])
              }));
              return function(T, C, O) {
                return x.apply(this, arguments)
              }
            }(), [])
                , I = (0,
                a.useCallback)(function() {
              var x = Io(regeneratorRuntime.mark(function T(C) {
                return regeneratorRuntime.wrap(function(k) {
                  for (; ; )
                    switch (k.prev = k.next) {
                      case 0:
                        if (g) {
                          k.next = 4;
                          break
                        }
                        nr({
                          success: function() {
                            var B = Io(regeneratorRuntime.mark(function F() {
                              return regeneratorRuntime.wrap(function(L) {
                                for (; ; )
                                  switch (L.prev = L.next) {
                                    case 0:
                                      return L.next = 2,
                                          i == null ? void 0 : i();
                                    case 2:
                                      return L.next = 4,
                                          P(C, 1, f);
                                    case 4:
                                    case "end":
                                      return L.stop()
                                  }
                              }, F)
                            }));
                            function R() {
                              return B.apply(this, arguments)
                            }
                            return R
                          }(),
                          enterMethod: "follow"
                        }),
                            k.next = 10;
                        break;
                      case 4:
                        if (!(b.current || !C)) {
                          k.next = 6;
                          break
                        }
                        return k.abrupt("return");
                      case 6:
                        return b.current = !0,
                            k.next = 9,
                            P(C, !S, f);
                      case 9:
                        b.current = !1;
                      case 10:
                      case "end":
                        return k.stop()
                    }
                }, T)
              }));
              return function(T) {
                return x.apply(this, arguments)
              }
            }(), [g, S, f]);
            return {
              text: A,
              type: S,
              changeStatus: function(T, C, O, k) {
                t !== void 0 && (y.current = O),
                    _.current = k,
                    m(T),
                    h(C)
              },
              onChangeFollowStatus: I
            }
          }
          var nn = {
            role: "_5d8be58ad5f4d44a3d5aad430a387721-scss",
            roleName: "_27d72bae9f835ee6648bae5aead3d956-scss",
            badgePersonel: "c5c8d04ef7d8685c4610cd0b11b5c6be-scss",
            badgeBusiness: "b7cc6985317a8e453cc814711a313019-scss"
          }
              , oc = {
            Personal: a.createElement("div", {
              className: nn.badgePersonel
            }),
            Enterprise: a.createElement("div", {
              className: nn.badgeBusiness
            })
          };
          function an(e) {
            var r = e.className
                , t = e.userInfo
                , n = t.customVerify
                , o = t.enterpriseVerifyReason;
            return a.createElement(a.Fragment, null, (n || o) && a.createElement("div", {
              className: j()(nn.role, r)
            }, o ? oc.Enterprise : oc.Personal, a.createElement("span", {
              className: nn.roleName
            }, o || n)))
          }
          function ic(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
              })),
                  t.push.apply(t, n)
            }
            return t
          }
          function Po(e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r] != null ? arguments[r] : {};
              r % 2 ? ic(Object(t), !0).forEach(function(n) {
                F1(e, n, t[n])
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ic(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              })
            }
            return e
          }
          function F1(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          function on() {
            var e = (0,
                Ue.k6)();
            return {
              push: function(t) {
                var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                e.push(Po(Po({
                  pathname: t
                }, n), {}, {
                  extra: Po({
                    isSpa: !0
                  }, n.extra || {})
                }))
              }
            }
          }
          var te = {
            container: "_83db846b679aa45f1e4484bab3e6f9a7-scss",
            badge: "b7391a522892d662118f65de2972a077-scss",
            noMoreText: "e6496fa18bea1489f891d260a232dfc5-scss",
            opBtn: "_0e6a20947cf2abc8868affa0187ad70f-scss",
            userContainer: "_92512541734704081f350a4d5f5650bc-scss",
            userInfoWrap: "_976c31c5a089c1b1b6d8809f82aa9a7a-scss",
            title: "_68f42b31b21901f17a4cac909b3dd86a-scss",
            stats: "_8d24558261abe1e52a36814bf8a1dd84-scss",
            text: "c21b9a5a18beec7090b44420f0957f8e-scss",
            number: "_6cb45f0985d8d9bec3689193e1e43f55-scss",
            followBtnWrap: "_1eaea836cf3e2028633e489fba379514-scss",
            episodeContainer: "_6ac94fcf7302ca9c396f86834e9efd33-scss",
            episodeNum: "_6d530a85e60f767d742337b3ac999a13-scss",
            boxContainer: "f5287cb4cdbeba685ae629fd42bef2d1-scss",
            expand: "_04690145c187acb3be56b08b9eff6360-scss",
            primary: "_754f22d851ec9453de3a6feae0b1ef3a-scss",
            coverageContainer: "de86a28b214413f6162c650141758cf2-scss",
            titleContainer: "cddad4028129b401fb414dbeac836a87-scss",
            more: "_28b4f95b5c1c53a6158fcb9da3f09083-scss",
            cardWrap: "_5d5fdde630aeb329e04a2fca8f19e78e-scss",
            moreBtnWrap: "_1d68c1df9268ef77e64c76f9c859d4ce-scss",
            moreBtn: "_6bc16b1574a432943edf16be0ad85276-scss"
          };
          function uc(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          function lc(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function un(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      lc(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      lc(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          function xo(e, r) {
            return j1(e) || D1(e, r) || B1(e, r) || M1()
          }
          function M1() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function B1(e, r) {
            if (!!e) {
              if (typeof e == "string")
                return sc(e, r);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              if (t === "Object" && e.constructor && (t = e.constructor.name),
              t === "Map" || t === "Set")
                return Array.from(e);
              if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return sc(e, r)
            }
          }
          function sc(e, r) {
            (r == null || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
              n[t] = e[t];
            return n
          }
          function D1(e, r) {
            var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (t != null) {
              var n = [], o = !0, i = !1, u, l;
              try {
                for (t = t.call(e); !(o = (u = t.next()).done) && (n.push(u.value),
                    !(r && n.length === r)); o = !0)
                  ;
              } catch (s) {
                i = !0,
                    l = s
              } finally {
                try {
                  !o && t.return != null && t.return()
                } finally {
                  if (i)
                    throw l
                }
              }
              return n
            }
          }
          function j1(e) {
            if (Array.isArray(e))
              return e
          }
          var U1 = it
              , H1 = 6;
          function W1(e) {
            var r = e.onClick;
            return a.createElement("button", {
              type: "button",
              className: te.moreBtn,
              onClick: r
            }, "\u70B9\u51FB\u52A0\u8F7D\u66F4\u591A")
          }
          function V1(e) {
            var r = e.reload;
            return a.createElement("div", {
              className: te.noMoreText
            }, "\u670D\u52A1\u5F02\u5E38\uFF0C\u8BF7", a.createElement("span", {
              onClick: r,
              className: te.opBtn
            }, "\u5237\u65B0"), "\u91CD\u8BD5")
          }
          function z1(e) {
            var r, t, n, o, i, u, l, s, c, d, f = e.awemeInfo, m = e.isReoload, v = e.awemelogPb, p = (0,
                a.useContext)(U1) || {}, g = p.userInfo, h = p.dispatch, y = (f == null ? void 0 : f.authorInfo) || {}, b = y.uid, _ = y.secUid, A = {
              author_id: f == null || (r = f.authorInfo) === null || r === void 0 ? void 0 : r.uid,
              group_id: f == null ? void 0 : f.groupId,
              log_pb: v
            }, S = b && Tt(_, "enter_method=video_title&".concat((0,
                De.stringify)(A))) || "", P = f == null || (t = f.authorInfo) === null || t === void 0 ? void 0 : t.followStatus, I = f == null || (n = f.authorInfo) === null || n === void 0 ? void 0 : n.followerStatus, x = g.isLogin, T = g.info, C = ac({
              followStatus: P,
              followerStatus: I,
              isLogin: x,
              uid: f == null || (o = f.authorInfo) === null || o === void 0 ? void 0 : o.uid,
              useCustomLog: !0,
              onSuccFollow: function(M) {
                var L;
                Ze.sendLog("follow", {
                  urlParamList: ["previous_page"],
                  author_id: f == null || (L = f.authorInfo) === null || L === void 0 ? void 0 : L.uid,
                  group_id: f == null ? void 0 : f.groupId,
                  log_pb: M,
                  enter_from: X()
                })
              },
              onSuccUnFollow: function(M) {
                var L;
                Ze.sendLog("followCancel", {
                  urlParamList: ["previous_page"],
                  author_id: f == null || (L = f.authorInfo) === null || L === void 0 ? void 0 : L.uid,
                  group_id: f == null ? void 0 : f.groupId,
                  log_pb: M,
                  enter_from: X()
                })
              },
              onLoginSuc: function() {
                return h({
                  type: "updateUserInfo"
                })
              }
            }), O = C.changeStatus, k = C.type, B = C.text, R = C.onChangeFollowStatus;
            return (0,
                a.useEffect)(function() {
              if (m) {
                var F;
                O(P, x, I, f == null || (F = f.authorInfo) === null || F === void 0 ? void 0 : F.uid)
              }
            }, [P, I, x, m, f == null || (i = f.authorInfo) === null || i === void 0 ? void 0 : i.uid]),
                a.createElement(a.Fragment, null, a.createElement("div", {
                  className: te.userContainer
                }, a.createElement("div", null, a.createElement("a", {
                  href: S
                }, a.createElement(Xe, {
                  type: "default",
                  src: f == null || (u = f.authorInfo) === null || u === void 0 ? void 0 : u.avatarUri
                }))), a.createElement("div", {
                  className: te.userInfoWrap
                }, a.createElement("a", {
                  href: S
                }, a.createElement("div", {
                  className: te.title
                }, a.createElement(ze, {
                  text: (f == null || (l = f.authorInfo) === null || l === void 0 ? void 0 : l.nickname) || ""
                }), a.createElement(an, {
                  userInfo: (f == null ? void 0 : f.authorInfo) || {},
                  className: te.badge
                }))), a.createElement("p", {
                  className: te.stats
                }, a.createElement("span", {
                  className: te.text
                }, "\u7C89\u4E1D"), a.createElement("span", {
                  className: te.number
                }, xe((f == null || (s = f.authorInfo) === null || s === void 0 ? void 0 : s.followerCount) || 0)), a.createElement("span", {
                  className: te.text
                }, "\u83B7\u8D5E"), a.createElement("span", {
                  className: te.number
                }, xe((f == null || (c = f.authorInfo) === null || c === void 0 ? void 0 : c.totalFavorited) || 0)))), a.createElement("div", {
                  className: te.followBtnWrap
                }, b === (g == null || (d = g.info) === null || d === void 0 ? void 0 : d.uid) ? "" : a.createElement(Pe, {
                  size: "small",
                  type: k !== 0 ? "secondary" : "primary",
                  onClick: function() {
                    var M;
                    R(f == null || (M = f.authorInfo) === null || M === void 0 ? void 0 : M.uid)
                  }
                }, B))))
          }
          function Oo(e) {
            var r = e.awemeId
                , t = e.title
                , n = e.fetchMore
                , o = e.children
                , i = e.videoList
                , u = e.hasMore
                , l = e.rendItem
                , s = e.statusCode
                , c = s === void 0 ? 0 : s
                , d = e.mixId
                , f = e.relateInfo
                , m = (0,
                a.useState)(!1)
                , v = xo(m, 2)
                , p = v[0]
                , g = v[1]
                , h = (0,
                a.useRef)(!1)
                , y = (0,
                a.useRef)(null)
                , b = on();
            y.current = n,
                i = i || [];
            var _ = a.useCallback(un(regeneratorRuntime.mark(function S() {
              return regeneratorRuntime.wrap(function(I) {
                for (; ; )
                  switch (I.prev = I.next) {
                    case 0:
                      if (d && Ze.sendLog("compilationClickMore", {
                        compilation_id: d
                      }),
                          !h.current) {
                        I.next = 3;
                        break
                      }
                      return I.abrupt("return");
                    case 3:
                      return h.current = !0,
                          g(!0),
                          I.prev = 5,
                          I.next = 8,
                          y.current();
                    case 8:
                      I.next = 12;
                      break;
                    case 10:
                      I.prev = 10,
                          I.t0 = I.catch(5);
                    case 12:
                      h.current = !1,
                          g(!1);
                    case 14:
                    case "end":
                      return I.stop()
                  }
              }, S, null, [[5, 10]])
            })), [])
                , A = function(P) {
              var I, x = f == null ? void 0 : f.data[P];
              Ze.sendLog("videoCoverShow", {
                author_id: x == null || (I = x.authorInfo) === null || I === void 0 ? void 0 : I.uid,
                log_pb: f.logPb,
                group_id: x == null ? void 0 : x.groupId,
                enter_from: X(),
                rank: P
              })
            };
            return a.createElement("div", {
              className: te.coverageContainer
            }, a.createElement("div", {
              className: te.titleContainer
            }, a.createElement("p", {
              className: te.title
            }, t), a.createElement("div", {
              className: te.left
            }, o)), a.createElement("ul", null, i.map(function(S, P) {
              return a.createElement("li", {
                className: te.cardWrap,
                key: S.awemeId
              }, l && l(S, P) || a.createElement(Ja, {
                onShow: A,
                rank: P,
                imgSrc: S.video.cover,
                videoUrl: ir(S.awemeId),
                onClick: function(x) {
                  var T;
                  x.preventDefault(),
                      window.scrollTo(0, 0),
                      Ze.sendLog("videoCoverClick", {
                        author_id: S == null || (T = S.authorInfo) === null || T === void 0 ? void 0 : T.uid,
                        log_pb: f == null ? void 0 : f.logPb,
                        group_id: S == null ? void 0 : S.groupId,
                        enter_from: X(),
                        rank: P
                      }),
                      b.push(or(S.awemeId, "pre_vid=".concat(r, "&previous_page=").concat(X())))
                },
                title: S.desc,
                diggNum: S.stats.diggCount
              }))
            })), p ? a.createElement(a.Fragment, null, a.createElement(Me, null), a.createElement(Me, null), a.createElement(Me, null), a.createElement(Me, null), a.createElement(Me, null), a.createElement(Me, null), a.createElement(Ge, null)) : i.length === 0 ? c === 0 ? a.createElement(a.Fragment, null, a.createElement(Me, null), a.createElement(Me, null), a.createElement(Me, null), a.createElement(Me, null), a.createElement(Me, null), a.createElement(Me, null), a.createElement(Ge, null)) : a.createElement(V1, {
              reload: function() {
                _()
              }
            }) : n && Boolean(u) && a.createElement("div", {
              className: te.moreBtnWrap
            }, a.createElement(W1, {
              onClick: _
            })))
          }
          function K1(e) {
            for (var r = e.totalEpisode, t = e.currentEpisode, n = e.mixId, o = [], i = 0; i < r; i++)
              o.push(i + 1);
            var u = on()
                , l = (0,
                a.useState)(!1)
                , s = xo(l, 2)
                , c = s[0]
                , d = s[1]
                , f = (0,
                a.useRef)(null);
            return (0,
                a.useEffect)(function() {
              var m = function() {
                d(!1)
              };
              return document.addEventListener("click", m),
                  function() {
                    document.removeEventListener("click", m)
                  }
            }, []),
                a.createElement("div", {
                  className: te.episodeContainer,
                  onClick: function(v) {
                    v.stopPropagation()
                  }
                }, a.createElement("div", {
                  className: te.episodeNum,
                  onClick: function() {
                    if (d(!c),
                        !c) {
                      var v = (t - 1) * 36;
                      setTimeout(function() {
                        var p, g;
                        f == null || (p = f.current) === null || p === void 0 || (g = p.scrollTo) === null || g === void 0 || g.call(p, 0, v)
                      }, 0)
                    }
                  }
                }, a.createElement("span", null, r, "\u96C6"), c ? a.createElement(oe, {
                  src: Us,
                  color: Gn
                }) : a.createElement(oe, {
                  src: tn,
                  color: Gn
                })), a.createElement("div", {
                  className: j()(te.boxContainer, uc({}, te.expand, c))
                }, a.createElement("ul", {
                  ref: f
                }, o.map(function(m, v) {
                  return a.createElement("li", {
                    key: v
                  }, a.createElement("a", {
                    href: Xi(n, m - 1),
                    onClick: function(g) {
                      d(!1),
                          g.preventDefault(),
                          window.scrollTo(0, 0),
                          Ze.sendLog("compilationDropDownMenuClick", {
                            compilation_id: n
                          }),
                          u.push(Qi(n, m - 1, "previous_page=".concat(X())))
                    },
                    className: j()(uc({}, te.primary, m === t))
                  }, "\u7B2C", m, "\u96C6"))
                }))))
          }
          function G1(e) {
            var r, t, n, o, i = e.awemeInfo, u = e.mixInfo, l = e.loadMoreMixInfo, s = (i == null ? void 0 : i.mixInfo) || {}, c = s.mixId, d = s.currentEpisode, f = on();
            if (!i || !c)
              return a.createElement(a.Fragment, null);
            var m = function(p) {
              var g, h;
              Ze.sendLog("collectionCoverShow", {
                enter_from: X(),
                compilation_id: c,
                compilation_video_cnt: i == null || (g = i.mixInfo) === null || g === void 0 ? void 0 : g.totalEpisode,
                author_id: i == null || (h = i.authorInfo) === null || h === void 0 ? void 0 : h.uid,
                group_id: i == null ? void 0 : i.groupId,
                log_pb: u == null ? void 0 : u.logPb,
                rank: p
              })
            };
            return a.createElement(Oo, {
              mixId: c,
              title: i == null || (r = i.mixInfo) === null || r === void 0 ? void 0 : r.mixName,
              statusCode: u == null ? void 0 : u.statusCode,
              videoList: u == null ? void 0 : u.data,
              hasMore: u == null ? void 0 : u.hasMore,
              fetchMore: un(regeneratorRuntime.mark(function v() {
                return regeneratorRuntime.wrap(function(g) {
                  for (; ; )
                    switch (g.prev = g.next) {
                      case 0:
                        return g.next = 2,
                            l(c, u == null ? void 0 : u.cursor);
                      case 2:
                      case "end":
                        return g.stop()
                    }
                }, v)
              })),
              rendItem: function(p, g) {
                var h, y, b;
                return a.createElement(Ja, {
                  onShow: m,
                  rank: g,
                  type: (p == null || (h = p.mixInfo) === null || h === void 0 ? void 0 : h.currentEpisode) === d ? "primary" : "default",
                  imgSrc: p.video.cover,
                  videoUrl: ir(p.awemeId),
                  onClick: function(A) {
                    var S, P;
                    Ze.sendLog("collectionCoverClick", {
                      enter_from: X(),
                      compilation_id: c,
                      compilation_video_cnt: i == null || (S = i.mixInfo) === null || S === void 0 ? void 0 : S.totalEpisode,
                      author_id: i == null || (P = i.authorInfo) === null || P === void 0 ? void 0 : P.uid,
                      group_id: i == null ? void 0 : i.groupId,
                      log_pb: u == null ? void 0 : u.logPb,
                      rank: g
                    }),
                        A.preventDefault(),
                        window.scrollTo(0, 0),
                        f.push(or(p.awemeId, "previous_page=".concat(X())))
                  },
                  title: "".concat((p == null || (y = p.mixInfo) === null || y === void 0 ? void 0 : y.currentEpisode) && "\u7B2C".concat(p == null || (b = p.mixInfo) === null || b === void 0 ? void 0 : b.currentEpisode, "\u96C6 "), " | ").concat(p.desc),
                  diggNum: p.stats.diggCount
                })
              }
            }, a.createElement(K1, {
              totalEpisode: i == null || (t = i.mixInfo) === null || t === void 0 ? void 0 : t.totalEpisode,
              currentEpisode: i == null || (n = i.mixInfo) === null || n === void 0 ? void 0 : n.currentEpisode,
              mixId: i == null || (o = i.mixInfo) === null || o === void 0 ? void 0 : o.mixId
            }))
          }
          function T3(e) {
            var r = e.awemeInfo
                , t = useState([])
                , n = xo(t, 2)
                , o = n[0]
                , i = n[1]
                , u = (r == null ? void 0 : r.authorInfo) || {}
                , l = u.uid
                , s = u.secUid
                , c = useRef(!1);
            return useEffect(function() {
              return c.current = !1,
                  function() {
                    c.current = !0
                  }
            }, []),
                useEffect(function() {
                  un(regeneratorRuntime.mark(function d() {
                    var f, m, v;
                    return regeneratorRuntime.wrap(function(g) {
                      for (; ; )
                        switch (g.prev = g.next) {
                          case 0:
                            if (!l) {
                              g.next = 7;
                              break
                            }
                            return g.next = 3,
                                fetchUserPost({
                                  userId: l,
                                  maxCursor: 0,
                                  count: H1
                                });
                          case 3:
                            f = g.sent,
                                m = f.statusCode,
                                v = f.data,
                            m === 0 && !c.current && i(v);
                          case 7:
                          case "end":
                            return g.stop()
                        }
                    }, d)
                  }))()
                }, [l]),
                !r || !l || o.length === 0 ? React.createElement(React.Fragment, null) : React.createElement(Oo, {
                  title: "TA\u7684\u4F5C\u54C1",
                  videoList: o
                }, React.createElement("p", {
                  className: styles.more
                }, React.createElement("a", {
                  href: helper.genUserUrl(s)
                }, "\u66F4\u591A\u4F5C\u54C1"), React.createElement(Svg, {
                  src: Right,
                  color: constants.styles.COLOR_TEXT_3
                })))
          }
          function Q1(e) {
            var r = e.awemeInfo
                , t = e.relateInfo
                , n = e.loadMoreRelateInfo
                , o = r || {}
                , i = o.awemeId;
            return r ? a.createElement(Oo, {
              title: "\u63A8\u8350\u89C6\u9891",
              awemeId: i,
              statusCode: t == null ? void 0 : t.statusCode,
              videoList: t.data,
              hasMore: t.hasMore,
              relateInfo: t,
              fetchMore: un(regeneratorRuntime.mark(function u() {
                return regeneratorRuntime.wrap(function(s) {
                  for (; ; )
                    switch (s.prev = s.next) {
                      case 0:
                        return s.next = 2,
                            n(i);
                      case 2:
                      case "end":
                        return s.stop()
                    }
                }, u)
              }))
            }) : a.createElement(a.Fragment, null)
          }
          function cc(e) {
            var r = e.awemeInfo
                , t = e.mixInfo
                , n = e.loadMoreMixInfo
                , o = e.relateInfo
                , i = e.loadMoreRelateInfo
                , u = e.isReoload
                , l = e.awemelogPb;
            return a.createElement("div", {
              className: te.container
            }, a.createElement(z1, {
              awemelogPb: l,
              awemeInfo: r,
              isReoload: u
            }), a.createElement(en, null), a.createElement(G1, {
              awemeInfo: r,
              mixInfo: t,
              loadMoreMixInfo: n
            }), a.createElement(Q1, {
              awemeInfo: r,
              relateInfo: o,
              loadMoreRelateInfo: i
            }))
          }
          var Y1 = {
            like: {
              eventName: "like",
              params: {
                author_id: "",
                group_id: "",
                log_pb: "",
                enter_from: "",
                previous_page: "web_link"
              }
            },
            cancelLike: {
              eventName: "cancel_like",
              params: {
                author_id: "",
                group_id: "",
                log_pb: "",
                enter_from: "",
                previous_page: "web_link"
              }
            },
            clickCommentButton: {
              eventName: "click_comment_button",
              params: {
                author_id: "",
                group_id: "",
                log_pb: "",
                enter_from: "",
                previous_page: "web_link"
              }
            },
            shareMenuShow: {
              eventName: "share_menu_show",
              params: {
                author_id: "",
                group_id: "",
                log_pb: "",
                enter_from: "",
                previous_page: "web_link"
              }
            },
            shareVideo: {
              eventName: "share_video",
              params: {
                author_id: "",
                group_id: "",
                log_pb: "",
                enter_from: "",
                previous_page: "web_link"
              }
            },
            follow: {
              eventName: "follow",
              params: {
                author_id: "",
                group_id: "",
                log_pb: "",
                enter_from: "",
                previous_page: "web_link"
              }
            },
            followCancel: {
              eventName: "follow_cancel",
              params: {
                author_id: "",
                group_id: "",
                log_pb: "",
                enter_from: "",
                previous_page: "web_link"
              }
            },
            enterPersonalDetail: {
              eventName: "enter_personal_detail",
              params: {
                author_id: "",
                group_id: "",
                log_pb: "",
                enter_from: "",
                previous_page: "web_link"
              }
            }
          }
              , fc = new ot(Y1);
          function dc(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
              })),
                  t.push.apply(t, n)
            }
            return t
          }
          function mc(e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r] != null ? arguments[r] : {};
              r % 2 ? dc(Object(t), !0).forEach(function(n) {
                Ro(e, n, t[n])
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : dc(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              })
            }
            return e
          }
          function Ro(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          function vc(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function X1(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      vc(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      vc(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          var $1 = He;
          function Z1() {
            return To.apply(this, arguments)
          }
          function To() {
            return To = X1(regeneratorRuntime.mark(function e() {
              var r, t, n, o, i, u = arguments;
              return regeneratorRuntime.wrap(function(s) {
                for (; ; )
                  switch (s.prev = s.next) {
                    case 0:
                      return t = u.length > 0 && u[0] !== void 0 ? u[0] : "",
                          n = u.length > 1 && u[1] !== void 0 ? u[1] : 1,
                          s.next = 4,
                          ur("/aweme/v1/web/commit/item/digg/", mc(mc({}, $1), {}, (r = {},
                              Ro(r, "aweme_id", t),
                              Ro(r, "type", Number(n)),
                              r)));
                    case 4:
                      return o = s.sent,
                          i = o.status_code,
                      o.status_code === 0 && o.is_digg === void 0 && (i = -1),
                          s.abrupt("return", {
                            logPb: o.log_pb && JSON.stringify(o.log_pb),
                            statusCode: i,
                            isDigg: o.is_digg,
                            errMsg: i !== 0 && !o.status_msg ? "\u554A\u54E6\uFF0C\u670D\u52A1\u5668\u6253\u778C\u7761\u4E86" : o.status_msg
                          });
                    case 8:
                    case "end":
                      return s.stop()
                  }
              }, e)
            })),
                To.apply(this, arguments)
          }
          function pc(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function ko(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      pc(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      pc(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          function gc(e, r) {
            return th(e) || eh(e, r) || q1(e, r) || J1()
          }
          function J1() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function q1(e, r) {
            if (!!e) {
              if (typeof e == "string")
                return hc(e, r);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              if (t === "Object" && e.constructor && (t = e.constructor.name),
              t === "Map" || t === "Set")
                return Array.from(e);
              if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return hc(e, r)
            }
          }
          function hc(e, r) {
            (r == null || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
              n[t] = e[t];
            return n
          }
          function eh(e, r) {
            var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (t != null) {
              var n = [], o = !0, i = !1, u, l;
              try {
                for (t = t.call(e); !(o = (u = t.next()).done) && (n.push(u.value),
                    !(r && n.length === r)); o = !0)
                  ;
              } catch (s) {
                i = !0,
                    l = s
              } finally {
                try {
                  !o && t.return != null && t.return()
                } finally {
                  if (i)
                    throw l
                }
              }
              return n
            }
          }
          function th(e) {
            if (Array.isArray(e))
              return e
          }
          function rh(e) {
            var r = e.userDigged
                , t = e.isLogin
                , n = e.onLoginSuc
                , o = e.userInfo
                , i = e.awemeId
                , u = e.awemeInfo
                , l = (0,
                a.useState)(r)
                , s = gc(l, 2)
                , c = s[0]
                , d = s[1]
                , f = (0,
                a.useState)(t)
                , m = gc(f, 2)
                , v = m[0]
                , p = m[1]
                , g = (0,
                a.useRef)(!1)
                , h = (0,
                a.useRef)(i)
                , y = (0,
                a.useCallback)(function() {
              var _ = ko(regeneratorRuntime.mark(function A(S, P) {
                var I, x, T, C, O, k;
                return regeneratorRuntime.wrap(function(R) {
                  for (; ; )
                    switch (R.prev = R.next) {
                      case 0:
                        return R.prev = 0,
                            R.next = 3,
                            Z1(S, P);
                      case 3:
                        I = R.sent,
                            x = I.statusCode,
                            T = I.errMsg,
                            C = I.logPb,
                            x ? (ye.info(T || "\u70B9\u8D5E\u5931\u8D25"),
                            x === he.ERROR_USER_UNLOGIN && p(0)) : (Number(P) === 1 ? (ye.info("\u5DF2\u70B9\u8D5E"),
                                fc.sendLog("like", {
                                  urlParamList: ["previous_page"],
                                  author_id: u == null || (O = u.authorInfo) === null || O === void 0 ? void 0 : O.uid,
                                  group_id: u == null ? void 0 : u.groupId,
                                  log_pb: C,
                                  enter_from: X()
                                })) : (ye.info("\u5DF2\u53D6\u6D88\u70B9\u8D5E"),
                                fc.sendLog("cancelLike", {
                                  urlParamList: ["previous_page"],
                                  author_id: u == null || (k = u.authorInfo) === null || k === void 0 ? void 0 : k.uid,
                                  group_id: u == null ? void 0 : u.groupId,
                                  log_pb: C,
                                  enter_from: X()
                                })),
                            (h.current === S || !h.current) && d(P),
                                p(1)),
                            R.next = 13;
                        break;
                      case 10:
                        R.prev = 10,
                            R.t0 = R.catch(0),
                            ye.info("\u70B9\u8D5E\u5931\u8D25");
                      case 13:
                      case "end":
                        return R.stop()
                    }
                }, A, null, [[0, 10]])
              }));
              return function(A, S) {
                return _.apply(this, arguments)
              }
            }(), [])
                , b = (0,
                a.useCallback)(function() {
              var _ = ko(regeneratorRuntime.mark(function A(S) {
                return regeneratorRuntime.wrap(function(I) {
                  for (; ; )
                    switch (I.prev = I.next) {
                      case 0:
                        if (!g.current) {
                          I.next = 2;
                          break
                        }
                        return I.abrupt("return");
                      case 2:
                        if (v) {
                          I.next = 6;
                          break
                        }
                        nr({
                          success: function() {
                            var x = ko(regeneratorRuntime.mark(function C() {
                              return regeneratorRuntime.wrap(function(k) {
                                for (; ; )
                                  switch (k.prev = k.next) {
                                    case 0:
                                      return g.current = !0,
                                          k.next = 3,
                                          n == null ? void 0 : n();
                                    case 3:
                                      return k.next = 5,
                                          y(S, 1);
                                    case 5:
                                      g.current = !1;
                                    case 6:
                                    case "end":
                                      return k.stop()
                                  }
                              }, C)
                            }));
                            function T() {
                              return x.apply(this, arguments)
                            }
                            return T
                          }(),
                          enterMethod: "digg"
                        }),
                            I.next = 10;
                        break;
                      case 6:
                        return g.current = !0,
                            I.next = 9,
                            y(S, !c);
                      case 9:
                        g.current = !1;
                      case 10:
                      case "end":
                        return I.stop()
                    }
                }, A)
              }));
              return function(A) {
                return _.apply(this, arguments)
              }
            }(), [v, c]);
            return {
              favoriteStatus: c,
              changeStatus: function(A, S, P) {
                d(A),
                    p(S),
                    h.current = P
              },
              onChangeFavoriteStatus: b
            }
          }
          var yc;
          function No() {
            return No = Object.assign || function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }
                ,
                No.apply(this, arguments)
          }
          function nh(e) {
            return a.createElement("svg", No({
              width: 36,
              height: 36,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, e), yc || (yc = a.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M18.19 9.74c1.03-1.466 2.718-2.24 4.576-2.24 3.54 0 6.483 3.07 6.483 6.72v.001h.001c0 .103-.002.182-.003.24a.539.539 0 00.003.133c-.014.767-.146 1.402-.381 2.24-.134.15-.258.434-.382.746-.195.303-.269.45-.381.747-.095.16-.195.32-.3.48-.959 1.48-2.266 2.955-3.568 4.258-1.969 1.983-3.969 3.631-4.84 4.35-.243.2-.398.328-.442.372-.31.31-.621.318-.932.318H18c-.638 0-.956-.318-1.275-.637a3.037 3.037 0 00-.178-.15c-.968-.712-3.155-2.46-5.204-4.568-1.55-1.58-3.04-3.39-3.858-5.16-.319-.637-.717-2.154-.735-2.996.007-.007.006-.048.004-.128-.002-.06-.004-.14-.004-.246 0-3.651 2.942-6.72 6.483-6.72 1.855 0 3.546.774 4.957 2.24z",
              fill: "#0A0C20"
            })))
          }
          var ah = nh, bc, wc;
          function Lo() {
            return Lo = Object.assign || function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }
                ,
                Lo.apply(this, arguments)
          }
          function oh(e) {
            return a.createElement("svg", Lo({
              width: 36,
              height: 36,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, e), bc || (bc = a.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M29.25 16.71c0 2.712-1.304 5.04-3.536 7.275-.196.197-.404.392-.62.584-1.953 2.171-3.86 3.437-5.583 3.94-2.243.657-1.376-2.42-1.348-2.518v-.002c-6.214 0-11.413-3.777-11.413-9.278S11.787 6.75 18 6.75c6.214 0 11.25 4.46 11.25 9.96zm-16.715 1.85c.888 0 1.608-.715 1.608-1.597 0-.88-.72-1.595-1.608-1.595-.887 0-1.607.714-1.607 1.595 0 .882.72 1.596 1.607 1.596zm7.072-1.597c0 .882-.72 1.596-1.607 1.596a1.602 1.602 0 01-1.608-1.596c0-.88.72-1.595 1.608-1.595.887 0 1.607.714 1.607 1.595zm3.857 1.596c.888 0 1.607-.714 1.607-1.596a1.6 1.6 0 00-1.607-1.595c-.888 0-1.607.714-1.607 1.595 0 .882.72 1.596 1.607 1.596z",
              fill: "#0A0C20"
            })), wc || (wc = a.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M29.25 16.71c0 2.712-1.304 5.04-3.536 7.275-.196.197-.404.392-.62.584-1.953 2.171-3.86 3.437-5.583 3.94-2.243.657-1.376-2.42-1.348-2.518v-.002c-6.214 0-11.413-3.777-11.413-9.278S11.787 6.75 18 6.75c6.214 0 11.25 4.46 11.25 9.96zm-16.715 1.85c.888 0 1.608-.715 1.608-1.597 0-.88-.72-1.595-1.608-1.595-.887 0-1.607.714-1.607 1.595 0 .882.72 1.596 1.607 1.596zm7.072-1.597c0 .882-.72 1.596-1.607 1.596a1.602 1.602 0 01-1.608-1.596c0-.88.72-1.595 1.608-1.595.887 0 1.607.714 1.607 1.595zm3.857 1.596c.888 0 1.607-.714 1.607-1.596a1.6 1.6 0 00-1.607-1.595c-.888 0-1.607.714-1.607 1.595 0 .882.72 1.596 1.607 1.596z",
              fill: "#0A0C20"
            })))
          }
          var ih = oh, _c, Ec;
          function Fo() {
            return Fo = Object.assign || function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }
                ,
                Fo.apply(this, arguments)
          }
          function uh(e) {
            return a.createElement("svg", Fo({
              width: 36,
              height: 36,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, e), _c || (_c = a.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M21.884 9.417c-1.209-1.157-3.214-.3-3.214 1.373v2.396c-.132 0-.263.001-.393.004-1.402-.039-6.254.115-9.667 3.775-2.361 2.532-3.423 6.562-3.357 8.64-.062 2.075.905 1.888 1.165 1.41 2.976-5.46 12.252-3.79 12.252-3.79v2.265c0 1.637 1.932 2.508 3.159 1.424l7.989-7.059a1.9 1.9 0 00.055-2.797l-7.99-7.641z",
              fill: "#0A0C20"
            })), Ec || (Ec = a.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M21.884 9.417c-1.209-1.157-3.214-.3-3.214 1.373v2.396c-.132 0-.263.001-.393.004-1.402-.039-6.254.115-9.667 3.775-2.361 2.532-3.423 6.562-3.357 8.64-.062 2.075.905 1.888 1.165 1.41 2.976-5.46 12.252-3.79 12.252-3.79v2.265c0 1.637 1.932 2.508 3.159 1.424l7.989-7.059a1.9 1.9 0 00.055-2.797l-7.99-7.641z",
              fill: "#0A0C20"
            })))
          }
          var lh = uh, de = {
            playerContainer: "_9036a17f9488cffb2fbb167ee3cf819b-scss",
            playerWrap: "e0855af4151de070355c4d56e74b5c5e-scss",
            videoInfoContainer: "_99cb8eda13900e275fd1a31ac257c97e-scss",
            title: "_0101d0dac9513f32356fa89903cf7f4e-scss",
            infoContainer: "_1c5fdff0b83f80174147ddcadc9f7141-scss",
            time: "_3f5a4457e19c10aae6f40f4448fd9cb6-scss",
            statsContainer: "_9c2452d0d6d8dbc6de035f37c1b11314-scss",
            count: "_63f39b0bbf80afa98948f5dc199307f7-scss",
            statsItem: "_1ff76af5eb8264c41dbf36b70319d944-scss",
            share: "_891e9d38c00e1b78e2eae43ab8b92359-scss",
            active: "_47092d686b7362605f4af5f87053c987-scss",
            iconSvg: "dc0ebe29d2f027b192f35e304bd51970-scss",
            shareContainer: "_07991c9043badbe055fdf2acb3cbad62-scss",
            shareBox: "_421d3aff42f03ac25665dc94de7ceadb-scss",
            shareBoxHidden: "fb401bb82eac51ed2dc4f0cb45aca466-scss",
            miniScreenBtn: "_74d826764c020e303e5a3170b33b0205-scss"
          }, k3 = E(94791), Cc;
          function Mo() {
            return Mo = Object.assign || function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }
                ,
                Mo.apply(this, arguments)
          }
          function sh(e) {
            return a.createElement("svg", Mo({
              width: 36,
              height: 36,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, e), Cc || (Cc = a.createElement("path", {
              d: "M10 10.693c0-1.7 0-2.549.354-3.013A1.729 1.729 0 0111.64 7c.582-.03 1.284.45 2.687 1.409l9.697 6.63c1.097.75 1.646 1.126 1.843 1.598.172.414.177.878.014 1.296-.187.476-.727.863-1.808 1.638l-9.697 6.945c-1.413 1.013-2.12 1.52-2.71 1.498a1.728 1.728 0 01-1.305-.67C10 26.877 10 26.007 10 24.268V10.693z",
              fill: "#0A0C20"
            })))
          }
          var ch = sh, Ac;
          function Bo() {
            return Bo = Object.assign || function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }
                ,
                Bo.apply(this, arguments)
          }
          function fh(e) {
            return a.createElement("svg", Bo({
              width: 36,
              height: 36,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, e), Ac || (Ac = a.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M11 10.282C11 9.574 11.514 9 12.149 9h1.596c.634 0 1.149.574 1.149 1.282v15.436c0 .708-.515 1.282-1.15 1.282H12.15C11.514 27 11 26.426 11 25.718V10.282zm11 0C22 9.574 22.514 9 23.149 9h1.596c.634 0 1.149.574 1.149 1.282v15.436c0 .708-.515 1.282-1.15 1.282H23.15C22.514 27 22 26.426 22 25.718V10.282z",
              fill: "#0A0C20"
            })))
          }
          var dh = fh, Sc;
          function Do() {
            return Do = Object.assign || function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }
                ,
                Do.apply(this, arguments)
          }
          function mh(e) {
            return a.createElement("svg", Do({
              width: 36,
              height: 36,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, e), Sc || (Sc = a.createElement("path", {
              d: "M10.937 9.382C9.737 8.459 8 9.314 8 10.828v14.344c0 1.514 1.737 2.37 2.937 1.446l9.324-7.172c.95-.73.95-2.162 0-2.892l-9.324-7.172zM23.75 10.548c0-.69.56-1.25 1.25-1.25h1.214c.69 0 1.25.56 1.25 1.25V25.59c0 .69-.56 1.25-1.25 1.25H25c-.69 0-1.25-.56-1.25-1.25V10.548z",
              fill: "#0A0C20"
            })))
          }
          var vh = mh, Ic;
          function jo() {
            return jo = Object.assign || function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }
                ,
                jo.apply(this, arguments)
          }
          function ph(e) {
            return a.createElement("svg", jo({
              width: 36,
              height: 36,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, e), Ic || (Ic = a.createElement("path", {
              d: "M25.341 17.97c0-.46-.048-.793-.048-.793a.887.887 0 01.402-.828l1.002-.578a.557.557 0 00.203-.76L25 11.725a.559.559 0 00-.76-.204l-1.001.577a.896.896 0 01-.921-.063s-.267-.208-.656-.432a6.572 6.572 0 00-.717-.358.896.896 0 01-.516-.766V9.32a.558.558 0 00-.556-.556h-3.8a.558.558 0 00-.555.556v1.157c0 .306-.232.65-.515.766 0 0-.327.133-.717.357-.39.225-.657.433-.657.433a.896.896 0 01-.92.063l-1.001-.578a.558.558 0 00-.76.204l-1.9 3.289a.558.558 0 00.204.76l1 .577a.887.887 0 01.402.828s-.048.333-.048.792c0 .46.048.793.048.793a.887.887 0 01-.402.829l-1 .576a.557.557 0 00-.204.76l1.9 3.289a.558.558 0 00.76.203l1.002-.577a.894.894 0 01.92.064s.245.191.621.412c.4.233.752.377.752.377.283.115.515.46.515.766v1.156c0 .306.25.556.556.556h3.8c.305 0 .556-.25.556-.556v-1.156c0-.306.231-.65.515-.766 0 0 .324-.132.711-.355.391-.225.66-.435.66-.435a.896.896 0 01.922-.063l1.002.578a.558.558 0 00.76-.204l1.899-3.289a.557.557 0 00-.204-.76l-1-.576a.887.887 0 01-.402-.829s.048-.332.048-.793zm-7.367 3.067a3.069 3.069 0 113.07-3.068 3.069 3.069 0 01-3.07 3.068z",
              fill: "#0A0C20"
            })))
          }
          var Uo = ph, Pc, xc;
          function Ho() {
            return Ho = Object.assign || function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }
                ,
                Ho.apply(this, arguments)
          }
          function gh(e) {
            return a.createElement("svg", Ho({
              width: 36,
              height: 36,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, e), Pc || (Pc = a.createElement("path", {
              d: "M17.974 17.11c-.634 0-1.149.515-1.149 1.15v3.83c0 .634.515 1.148 1.15 1.148h4.595c.634 0 1.149-.514 1.149-1.148v-3.83c0-.635-.515-1.15-1.15-1.15h-4.595z",
              fill: "#0A0C20"
            })), xc || (xc = a.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M11.463 10.026a2.49 2.49 0 00-2.489 2.49v11.488a2.49 2.49 0 002.49 2.49h13.02a2.49 2.49 0 002.49-2.49V12.515a2.49 2.49 0 00-2.49-2.49h-13.02zm-.574 2.49c0-.318.257-.575.575-.575h13.02c.318 0 .575.257.575.574v11.49a.574.574 0 01-.574.574H11.464a.574.574 0 01-.575-.575V12.515z",
              fill: "#0A0C20"
            })))
          }
          var Oc = gh, Rc, Tc;
          function Wo() {
            return Wo = Object.assign || function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }
                ,
                Wo.apply(this, arguments)
          }
          function hh(e) {
            return a.createElement("svg", Wo({
              width: 36,
              height: 36,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, e), Rc || (Rc = a.createElement("path", {
              d: "M20.336 9.942c.288.138.472.43.472.75v15a.833.833 0 01-1.354.651l-5.605-3.984h-3.041a.833.833 0 01-.833-.833v-6.667c0-.46.373-.833.833-.833h3.04l5.606-3.984c.25-.2.593-.24.882-.1zM22.433 15.217a1.25 1.25 0 011.768.018 4.157 4.157 0 011.19 2.916 4.157 4.157 0 01-1.19 2.916 1.25 1.25 0 11-1.786-1.75c.296-.302.476-.712.476-1.166 0-.455-.18-.865-.476-1.167a1.25 1.25 0 01.018-1.767z",
              fill: "#0A0C20"
            })), Tc || (Tc = a.createElement("path", {
              d: "M26.512 11.647a1.25 1.25 0 00-1.408 2.066 5.41 5.41 0 012.37 4.48 5.41 5.41 0 01-2.37 4.48 1.25 1.25 0 101.408 2.065 7.91 7.91 0 003.462-6.545 7.91 7.91 0 00-3.462-6.546z",
              fill: "#0A0C20"
            })))
          }
          var yh = hh, kc;
          function Vo() {
            return Vo = Object.assign || function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }
                ,
                Vo.apply(this, arguments)
          }
          function bh(e) {
            return a.createElement("svg", Vo({
              width: 36,
              height: 36,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, e), kc || (kc = a.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M20.808 10.693a.833.833 0 00-1.354-.651l-5.605 3.984h-3.041a.833.833 0 00-.833.833v6.667c0 .46.373.833.833.833h3.04l5.606 3.984a.833.833 0 001.354-.65v-15zM22.7 22.8a1.384 1.384 0 010-1.958l2.284-2.285-2.284-2.285a1.385 1.385 0 111.958-1.958l2.284 2.285 2.285-2.285a1.385 1.385 0 111.958 1.958L28.9 18.558l2.285 2.285a1.385 1.385 0 01-1.958 1.958l-2.285-2.285-2.284 2.285c-.541.54-1.418.54-1.958 0z",
              fill: "#0A0C20"
            })))
          }
          var wh = bh, Nc;
          function zo() {
            return zo = Object.assign || function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }
                ,
                zo.apply(this, arguments)
          }
          function _h(e) {
            return a.createElement("svg", zo({
              width: 37,
              height: 37,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, e), Nc || (Nc = a.createElement("path", {
              d: "M11.444 16.028a1 1 0 01-1-1v-4.002a1 1 0 011-1h4.001a1 1 0 010 2H13.91l3.072 3.073a1 1 0 11-1.414 1.414l-3.122-3.122v1.636a1 1 0 01-1 1zM20.443 25.026a1 1 0 001 1h4a1 1 0 001.001-1v-4.001a1 1 0 10-2 0v1.536l-3.072-3.072a1 1 0 10-1.415 1.414l3.122 3.123h-1.636a1 1 0 00-1 1zM11.444 20.025a1 1 0 00-1 1v4a1 1 0 001 1.001h4.001a1 1 0 100-2H13.91l3.072-3.072a1 1 0 00-1.414-1.415l-3.122 3.122v-1.636a1 1 0 00-1-1zM20.443 11.026a1 1 0 011-1h4a1 1 0 011.001 1v4.001a1 1 0 01-2 0v-1.536l-3.072 3.073a1 1 0 11-1.415-1.415l3.122-3.122h-1.636a1 1 0 01-1-1z",
              fill: "#0A0C20"
            })))
          }
          var Eh = _h, Lc;
          function Ko() {
            return Ko = Object.assign || function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }
                ,
                Ko.apply(this, arguments)
          }
          function Ch(e) {
            return a.createElement("svg", Ko({
              width: 37,
              height: 37,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, e), Lc || (Lc = a.createElement("path", {
              d: "M20.25 25.878a1 1 0 01-1-1v-4.001a1 1 0 011-1h4.001a1 1 0 010 2h-1.536l3.072 3.072a1 1 0 11-1.414 1.415L21.25 23.24v1.637a1 1 0 01-1 1zM10.248 15.877a1 1 0 001 1h4.002a1 1 0 001-1v-4.002a1 1 0 10-2 0v1.536l-3.073-3.072a1 1 0 00-1.414 1.415l3.122 3.122h-1.636a1 1 0 00-1 1zM20.25 10.875a1 1 0 00-1 1v4.002a1 1 0 001 1h4.001a1 1 0 100-2h-1.536l3.072-3.073a1 1 0 10-1.414-1.414l-3.123 3.122v-1.636a1 1 0 00-1-1zM10.248 20.877a1 1 0 011-1h4.002a1 1 0 011 1v4a1 1 0 11-2 0v-1.535l-3.073 3.072A1 1 0 119.763 25l3.122-3.122h-1.636a1 1 0 01-1-1z",
              fill: "#0A0C20"
            })))
          }
          var Ah = Ch
              , Sh = E(2757)
              , N3 = E(76200)
              , ie = E(99170);
          function ln(e) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ln = function(t) {
                  return typeof t
                }
                : ln = function(t) {
                  return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                ,
                ln(e)
          }
          function Ih(e, r) {
            if (!(e instanceof r))
              throw new TypeError("Cannot call a class as a function")
          }
          function Fc(e, r) {
            for (var t = 0; t < r.length; t++) {
              var n = r[t];
              n.enumerable = n.enumerable || !1,
                  n.configurable = !0,
              "value"in n && (n.writable = !0),
                  Object.defineProperty(e, n.key, n)
            }
          }
          function Ph(e, r, t) {
            return r && Fc(e.prototype, r),
            t && Fc(e, t),
                e
          }
          function xh(e, r) {
            if (typeof r != "function" && r !== null)
              throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(r && r.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }),
            r && Go(e, r)
          }
          function Go(e, r) {
            return Go = Object.setPrototypeOf || function(n, o) {
              return n.__proto__ = o,
                  n
            }
                ,
                Go(e, r)
          }
          function Oh(e) {
            var r = kh();
            return function() {
              var n = sn(e), o;
              if (r) {
                var i = sn(this).constructor;
                o = Reflect.construct(n, arguments, i)
              } else
                o = n.apply(this, arguments);
              return Rh(this, o)
            }
          }
          function Rh(e, r) {
            return r && (ln(r) === "object" || typeof r == "function") ? r : Th(e)
          }
          function Th(e) {
            if (e === void 0)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
          }
          function kh() {
            if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
              return !1;
            if (typeof Proxy == "function")
              return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                  !0
            } catch (e) {
              return !1
            }
          }
          function sn(e) {
            return sn = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
              return t.__proto__ || Object.getPrototypeOf(t)
            }
                ,
                sn(e)
          }
          var Nh = function(e) {
            xh(t, e);
            var r = Oh(t);
            function t() {
              return Ih(this, t),
                  r.apply(this, arguments)
            }
            return Ph(t, [{
              key: "beforePlayerInit",
              value: function() {
                console.log("beforePlayerInit...")
              }
            }, {
              key: "afterPlayerInit",
              value: function() {
                console.log("afterPlayerInit...")
              }
            }, {
              key: "afterCreate",
              value: function() {
                var o = this;
                this.config.disable || (this.timer = setInterval(function() {
                  o.onTimeUpdate()
                }, 200))
              }
            }, {
              key: "onTimeUpdate",
              value: function() {
                if (!(!this.player || this.player.duration <= 0)) {
                  var o = Math.ceil(this.player.duration - this.player.currentTime);
                  o <= 3 && !this.player.paused ? (this.find(".full-en").innerText = "".concat(o, "s "),
                      this.find(".next-en").innerText = "".concat(o, "s "),
                      this.find(".loop-en").innerText = "".concat(o, "s "),
                      this.player.isNextAutoPlay ? (ie.Util.addClass(this.root, "douyin-show"),
                          ie.Util.addClass(this.find(".xgplayer-autoplay-tips-full"), "active"),
                          ie.Util.addClass(this.find(".xgplayer-autoplay-tips-next"), "active"),
                          ie.Util.removeClass(this.find(".xgplayer-autoplay-tips-loop"), "active")) : this.player.isReplay || (ie.Util.addClass(this.root, "douyin-show"),
                          ie.Util.removeClass(this.find(".xgplayer-autoplay-tips-full"), "active"),
                          ie.Util.removeClass(this.find(".xgplayer-autoplay-tips-next"), "active"),
                          ie.Util.addClass(this.find(".xgplayer-autoplay-tips-loop"), "active"))) : ie.Util.removeClass(this.root, "douyin-show")
                }
              }
            }, {
              key: "destroy",
              value: function() {
                this.timer && clearInterval(this.timer)
              }
            }, {
              key: "render",
              value: function() {
                return `
    <div class="xgplayer-autoplay-tips " data-state="normal">
      <div class="xgplayer-box-dg xgplayer-autoplay-tips-full ">
        <div class="img-wh-ct">
          <div class="img-wrap">
            <div class="blur-bg" style='background-image: url(`.concat(this.config.img, `)' ></div>
            <div class="blur-mask"  ></div>
            <img src="`).concat(this.config.img, `" />
          </div>
        </div>
        <div class="rightCt">
          <div > <span class="en-title full-en">3s </span>\u540E\u64AD\u653E</div>
          <div class="desc"> `).concat(this.config.desc, `</div>
        </div>
      </div>
      <div class="xgplayer-box-dg xgplayer-autoplay-tips-next ">
        <span class="en-title next-en">3s </span>\u540E\u64AD\u653E\u4E0B\u4E00\u4E2A\u89C6\u9891
      </div>
      <div class="xgplayer-box-dg xgplayer-autoplay-tips-loop ">
        <span class="en-title loop-en">3s </span>\u540E\u5FAA\u73AF\u64AD\u653E\u5F53\u524D\u89C6\u9891
      </div>
      
    </div>`)
              }
            }], [{
              key: "pluginName",
              get: function() {
                return "AutoPlayTipsPlugin"
              }
            }, {
              key: "defaultConfig",
              get: function() {
                return {
                  position: ie.POSITIONS.ROOT,
                  index: 10,
                  className: "xgplayer-autoplay-tips"
                }
              }
            }]),
                t
          }(ie.default);
          function cn(e) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? cn = function(t) {
                  return typeof t
                }
                : cn = function(t) {
                  return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                ,
                cn(e)
          }
          function Lh(e, r) {
            if (!(e instanceof r))
              throw new TypeError("Cannot call a class as a function")
          }
          function Mc(e, r) {
            for (var t = 0; t < r.length; t++) {
              var n = r[t];
              n.enumerable = n.enumerable || !1,
                  n.configurable = !0,
              "value"in n && (n.writable = !0),
                  Object.defineProperty(e, n.key, n)
            }
          }
          function Fh(e, r, t) {
            return r && Mc(e.prototype, r),
            t && Mc(e, t),
                e
          }
          function Mh(e, r) {
            if (typeof r != "function" && r !== null)
              throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(r && r.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }),
            r && Qo(e, r)
          }
          function Qo(e, r) {
            return Qo = Object.setPrototypeOf || function(n, o) {
              return n.__proto__ = o,
                  n
            }
                ,
                Qo(e, r)
          }
          function Bh(e) {
            var r = Uh();
            return function() {
              var n = fn(e), o;
              if (r) {
                var i = fn(this).constructor;
                o = Reflect.construct(n, arguments, i)
              } else
                o = n.apply(this, arguments);
              return Dh(this, o)
            }
          }
          function Dh(e, r) {
            return r && (cn(r) === "object" || typeof r == "function") ? r : jh(e)
          }
          function jh(e) {
            if (e === void 0)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
          }
          function Uh() {
            if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
              return !1;
            if (typeof Proxy == "function")
              return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                  !0
            } catch (e) {
              return !1
            }
          }
          function fn(e) {
            return fn = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
              return t.__proto__ || Object.getPrototypeOf(t)
            }
                ,
                fn(e)
          }
          var Hh = function(e) {
            Mh(t, e);
            var r = Bh(t);
            function t() {
              return Lh(this, t),
                  r.apply(this, arguments)
            }
            return Fh(t, [{
              key: "registerIcons",
              value: function() {
                return {
                  setting: {
                    icon: Uo,
                    class: "xg-icon-setting"
                  }
                }
              }
            }, {
              key: "initIcons",
              value: function() {
                var o = this.icons;
                this.appendChild(".xgplayer-icon", {
                  icon: Uo,
                  class: "xg-icon-setting"
                })
              }
            }, {
              key: "beforePlayerInit",
              value: function() {
                console.log("beforePlayerInit...")
              }
            }, {
              key: "afterPlayerInit",
              value: function() {
                console.log("afterPlayerInit...")
              }
            }, {
              key: "afterCreate",
              value: function() {
                this.config.disable || (this.initIcons(),
                    this.bind("mouseenter", this.onMouseenter.bind(this)),
                    this.bind(["blur", "mouseleave"], this.onMouseleave.bind(this)),
                    this.bind(".xg-switch", "click", this.onXgChange.bind(this)),
                    this.bind(".xgplayer-playratio-item", "click", this.onPlayratioClick.bind(this)))
              }
            }, {
              key: "onPlayratioClick",
              value: function(o) {
                if (o != null && o.target) {
                  var i = o.target.getAttribute("rate");
                  if (Number(i) === this.player.playbackRate)
                    return !1;
                  for (var u = this.find(".xgplayer-playratio-wrap"), l = u.children, s = 0; s < l.length; s++) {
                    var c = l[s];
                    c.getAttribute("rate") === i ? ie.Util.addClass(c, "select") : ie.Util.removeClass(c, "select")
                  }
                  this.player.emit("playRatioChange", i),
                      this.player.playbackRate = Number(i)
                }
              }
            }, {
              key: "onXgChange",
              value: function() {
                var o = this.find(".xg-switch");
                this.config.nextAutoPlay ? (this.player.emit("nextAutoplayChange", !1),
                    this.config.nextAutoPlay = !1,
                    ie.Util.removeClass(o, "xg-switch-checked")) : (this.player.emit("nextAutoplayChange", !0),
                    this.config.nextAutoPlay = !0,
                    ie.Util.addClass(o, "xg-switch-checked"))
              }
            }, {
              key: "onMouseleave",
              value: function() {
                ie.Util.removeClass(this.root, "slide-show")
              }
            }, {
              key: "onMouseenter",
              value: function() {
                ie.Util.addClass(this.root, "slide-show")
              }
            }, {
              key: "destroy",
              value: function() {
                this.unbind("mouseenter", this.onMouseenter.bind(this)),
                    this.unbind(["blur", "mouseleave"], this.onMouseleave.bind(this)),
                    this.unbind(".xg-switch", "click", this.onXgChange.bind(this)),
                    this.unbind(".xgplayer-playratio-item", "click", this.onPlayratioClick.bind(this))
              }
            }, {
              key: "render",
              value: function() {
                var o = this.player.playbackRate || 1
                    , i = Boolean(this.config.nextAutoPlay);
                return `
    <xg-icon class="xgplayer-setting " data-state="normal">
      <div class="xgplayer-icon">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.3412 17.9694C25.3412 17.5103 25.2928 17.1775 25.2928 17.1775C25.2488 16.8748 25.4296 16.5021 25.6946 16.3492L26.6965 15.7713C26.9615 15.6184 27.053 15.2767 26.8999 15.0119L24.9995 11.7239C24.8464 11.4591 24.5044 11.3675 24.2394 11.5202L23.2388 12.0972C22.9738 12.25 22.5594 12.2214 22.3179 12.0337C22.3179 12.0337 22.0507 11.8261 21.6622 11.602C21.2712 11.3767 20.9445 11.2436 20.9445 11.2436C20.6612 11.1283 20.4294 10.7837 20.4294 10.4778V9.32141C20.4294 9.01552 20.1792 8.76526 19.8733 8.76526L16.0738 8.76526C15.7679 8.76526 15.5177 9.01552 15.5177 9.32141V10.4778C15.5177 10.7837 15.2859 11.1283 15.0026 11.2436C15.0026 11.2436 14.6759 11.3767 14.2861 11.6008C13.8964 11.8261 13.6292 12.0337 13.6292 12.0337C13.3877 12.2214 12.9734 12.2499 12.7084 12.097L11.7076 11.5193C11.4427 11.3664 11.1007 11.458 10.9478 11.7228L9.04823 15.0118C8.89526 15.2766 8.98684 15.6185 9.25174 15.7714L10.2526 16.3491C10.5175 16.502 10.6983 16.8748 10.6543 17.1774C10.6543 17.1774 10.606 17.5103 10.606 17.9693C10.606 18.4295 10.6543 18.7625 10.6543 18.7625C10.6983 19.0652 10.5175 19.4378 10.2525 19.5906L9.25188 20.1675C8.9869 20.3203 8.89532 20.662 9.04835 20.9269L10.9489 24.2159C11.102 24.4807 11.4439 24.5723 11.7088 24.4194L12.7097 23.8417C12.9746 23.6888 13.3887 23.7177 13.6298 23.9058C13.6298 23.9058 13.8749 24.097 14.2514 24.3175C14.6508 24.5512 15.0028 24.6948 15.0028 24.6948C15.286 24.8103 15.5177 25.155 15.5177 25.4609V26.6173C15.5177 26.9232 15.768 27.1734 16.0739 27.1734H19.8733C20.1792 27.1734 20.4295 26.9232 20.4295 26.6173V25.4609C20.4295 25.155 20.6613 24.8105 20.9446 24.6952C20.9446 24.6952 21.2689 24.5632 21.6562 24.3403C22.0471 24.115 22.3169 23.9052 22.3169 23.9052C22.5583 23.7174 22.9726 23.6888 23.2376 23.8416L24.2395 24.4196C24.5045 24.5724 24.8464 24.4807 24.9994 24.2159L26.8989 20.927C27.0519 20.6621 26.9603 20.3203 26.6953 20.1676L25.6946 19.5906C25.4296 19.4378 25.2488 19.0652 25.2928 18.7625C25.2928 18.7625 25.3412 18.4296 25.3412 17.9694ZM17.9735 21.0374C16.2779 21.0374 14.9037 19.6639 14.9037 17.9693C14.9037 16.2747 16.2779 14.9013 17.9735 14.9013C19.6692 14.9013 21.0434 16.2747 21.0434 17.9693C21.0434 19.6639 19.6692 21.0374 17.9735 21.0374Z" fill="#0A0C20"/>
        </svg>
      </div>
      <xg-slider class="xgplayer-slider xgplayer-box-douyin ">
        <div class="xgplayer-setting-box">
            <div class="xgplayer-setting-label">
                <div class="xgplayer-setting-title">\u81EA\u52A8\u64AD\u653E</div>
                <div class="xgplayer-setting-content">
                    <button aria-checked="true" class="xg-switch `.concat(i === !0 ? "xg-switch-checked" : "", ` " aria-labelledby="xg-switch-pip"><span class="xg-switch-inner"></span></button>
                </div>
            </div>
            <div class="xgplayer-setting-line"></div>
            <div class="xgplayer-setting-label">
                <div class="xgplayer-setting-title">\u500D\u901F\u64AD\u653E</div>
                <div class="xgplayer-setting-content">
                    <div class="xgplayer-playratio-wrap">
                    `).concat([.75, 1, 1.25, 1.5, 2].map(function(u) {
                  return "<span class='".concat(o === u ? "select" : "", " xgplayer-playratio-item' rate='").concat(u, "'>").concat(u, "x</span>")
                }).join(""), `
                    </div>
                </div>
            </div>
        </div>
      </xg-slider>
    </xg-icon>`)
              }
            }], [{
              key: "pluginName",
              get: function() {
                return "SettingPlugin"
              }
            }, {
              key: "defaultConfig",
              get: function() {
                return {
                  position: ie.POSITIONS.CONTROLS_RIGHT,
                  index: 2,
                  className: "xgplayer-setting",
                  nextAutoPlay: !0
                }
              }
            }]),
                t
          }(ie.default);
          function dn(e) {
            return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? dn = function(t) {
                  return typeof t
                }
                : dn = function(t) {
                  return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                ,
                dn(e)
          }
          function Wh(e, r) {
            if (!(e instanceof r))
              throw new TypeError("Cannot call a class as a function")
          }
          function Bc(e, r) {
            for (var t = 0; t < r.length; t++) {
              var n = r[t];
              n.enumerable = n.enumerable || !1,
                  n.configurable = !0,
              "value"in n && (n.writable = !0),
                  Object.defineProperty(e, n.key, n)
            }
          }
          function Vh(e, r, t) {
            return r && Bc(e.prototype, r),
            t && Bc(e, t),
                e
          }
          function zh(e, r) {
            if (typeof r != "function" && r !== null)
              throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(r && r.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }),
            r && Yo(e, r)
          }
          function Yo(e, r) {
            return Yo = Object.setPrototypeOf || function(n, o) {
              return n.__proto__ = o,
                  n
            }
                ,
                Yo(e, r)
          }
          function Kh(e) {
            var r = Yh();
            return function() {
              var n = mn(e), o;
              if (r) {
                var i = mn(this).constructor;
                o = Reflect.construct(n, arguments, i)
              } else
                o = n.apply(this, arguments);
              return Gh(this, o)
            }
          }
          function Gh(e, r) {
            return r && (dn(r) === "object" || typeof r == "function") ? r : Qh(e)
          }
          function Qh(e) {
            if (e === void 0)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
          }
          function Yh() {
            if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
              return !1;
            if (typeof Proxy == "function")
              return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
                  !0
            } catch (e) {
              return !1
            }
          }
          function mn(e) {
            return mn = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
              return t.__proto__ || Object.getPrototypeOf(t)
            }
                ,
                mn(e)
          }
          var Xh = `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.9741 17.1108C17.3396 17.1108 16.8252 17.6252 16.8252 18.2597V22.0895C16.8252 22.7241 17.3396 23.2385 17.9741 23.2385H22.5699C23.2044 23.2385 23.7188 22.7241 23.7188 22.0895V18.2597C23.7188 17.6252 23.2044 17.1108 22.5699 17.1108H17.9741Z" fill="#0A0C20"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4635 10.0257C10.0886 10.0257 8.97412 11.1402 8.97412 12.5151V24.0044C8.97412 25.3793 10.0886 26.4938 11.4635 26.4938H24.4848C25.8596 26.4938 26.9741 25.3793 26.9741 24.0044V12.5151C26.9741 11.1402 25.8596 10.0257 24.4848 10.0257H11.4635ZM10.889 12.5151C10.889 12.1978 11.1462 11.9406 11.4635 11.9406H24.4848C24.802 11.9406 25.0592 12.1978 25.0592 12.5151V24.0044C25.0592 24.3217 24.802 24.5789 24.4848 24.5789H11.4635C11.1462 24.5789 10.889 24.3217 10.889 24.0044V12.5151Z" fill="#0A0C20"/>
        </svg>`
              , $h = function(e) {
            zh(t, e);
            var r = Kh(t);
            function t() {
              return Wh(this, t),
                  r.apply(this, arguments)
            }
            return Vh(t, [{
              key: "registerIcons",
              value: function() {
                return {}
              }
            }, {
              key: "initIcons",
              value: function() {}
            }, {
              key: "beforePlayerInit",
              value: function() {}
            }, {
              key: "afterPlayerInit",
              value: function() {
                console.log("afterPlayerInit...")
              }
            }, {
              key: "afterCreate",
              value: function() {
                this.config.disable || (this.initIcons(),
                    this.bind(".xgplayer-icon", "click", this.onClickIcon.bind(this)),
                    this.player.on("manual_change_min_state", this.onManualChangeState.bind(this)))
              }
            }, {
              key: "onManualChangeState",
              value: function(o) {
                var i;
                this === null || this === void 0 || (i = this.changeMiniState) === null || i === void 0 || i.call(this, o)
              }
            }, {
              key: "changeMiniState",
              value: function(o) {
                o ? (this.config.autoMini = !0,
                    ie.Util.addClass(this.find(".xgplayer-icon"), "select"),
                    this.find(".xgplayer-box-douyin").innerHTML = "\u70B9\u51FB\u5173\u95ED\u60AC\u6D6E\u5C0F\u7A97\u53E3") : (this.config.autoMini = !1,
                    ie.Util.removeClass(this.find(".xgplayer-icon"), "select"),
                    this.find(".xgplayer-box-douyin").innerHTML = "\u70B9\u51FB\u5F00\u542F\u60AC\u6D6E\u5C0F\u7A97\u53E3")
              }
            }, {
              key: "onClickIcon",
              value: function() {
                this.changeMiniState(!this.config.autoMini),
                    this.player.emit("miniWinChange", this.config.autoMini)
              }
            }, {
              key: "destroy",
              value: function() {
                this.unbind(".xgplayer-icon", "click", this.onClickIcon),
                    this.player.off("manual_change_min_state", this.onManualChangeState)
              }
            }, {
              key: "render",
              value: function() {
                var o = this.config.autoMini;
                return `
    <xg-icon class="xgplayer-mini-win " data-state="normal">
      <div class="xgplayer-icon `.concat(o ? "select" : "", `">
        `).concat(Xh, `
      </div>
       <xg-slider class="xgplayer-slider xgplayer-box-douyin">
        `).concat(o ? "\u70B9\u51FB\u5173\u95ED\u60AC\u6D6E\u5C0F\u7A97\u53E3" : "\u70B9\u51FB\u5F00\u542F\u60AC\u6D6E\u5C0F\u7A97\u53E3", `
      </xg-slider>
    </xg-icon>`)
              }
            }], [{
              key: "pluginName",
              get: function() {
                return "MiniWinPlugin"
              }
            }, {
              key: "defaultConfig",
              get: function() {
                return {
                  position: ie.POSITIONS.CONTROLS_RIGHT,
                  index: 5,
                  className: "xgplayer-miniwin",
                  autoMini: !0
                }
              }
            }]),
                t
          }(ie.default)
              , Zh = {
            videoPlay: {
              eventName: "video_play",
              params: {
                author_id: "",
                group_id: "",
                log_pb: "",
                enter_from: "",
                previous_page: "web_link",
                compilation_id: "",
                is_auto_play: !1,
                impression_data: ""
              }
            },
            videoPlayFinish: {
              eventName: "video_play_finish",
              params: {
                author_id: "",
                group_id: "",
                log_pb: "",
                is_visible: 1,
                enter_from: "",
                compilation_id: "",
                previous_page: "web_link"
              }
            },
            playTime: {
              eventName: "play_time",
              params: {
                author_id: "",
                group_id: "",
                log_pb: "",
                enter_from: "",
                previous_page: "web_link",
                is_auto_play: !1,
                is_visible: 1,
                duration: 0,
                from_percent: 0,
                to_percent: 0
              }
            },
            videoPlayCheckPoint: {
              eventName: "video_play_check_point",
              params: {
                author_id: "",
                group_id: "",
                log_pb: "",
                enter_from: "",
                previous_page: "web_link",
                compilation_id: "",
                order: 0
              }
            }
          }
              , vn = new ot(Zh);
          function Dc(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function jc(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      Dc(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      Dc(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          var Jh = 122, pn, qh = function() {
            var e = jc(regeneratorRuntime.mark(function r() {
              var t, n;
              return regeneratorRuntime.wrap(function(i) {
                for (; ; )
                  switch (i.prev = i.next) {
                    case 0:
                      if (pn) {
                        i.next = 5;
                        break
                      }
                      return i.next = 3,
                          E.e(216).then(E.bind(E, 45268));
                    case 3:
                      n = i.sent,
                          pn = (n == null || (t = n.default) === null || t === void 0 ? void 0 : t.default) || (n == null ? void 0 : n.default);
                    case 5:
                      return i.abrupt("return", pn);
                    case 6:
                    case "end":
                      return i.stop()
                  }
              }, r)
            }));
            return function() {
              return e.apply(this, arguments)
            }
          }(), L3 = null, ey = function() {
            var e = jc(regeneratorRuntime.mark(function r(t) {
              var n, o, i, u, l, s, c, d, f, m, v, p, g, h, y, b, _, A, S, P, I, x, T, C, O, k, B, R, F, M, L, W, N, z, U, re, J;
              return regeneratorRuntime.wrap(function(Q) {
                for (; ; )
                  switch (Q.prev = Q.next) {
                    case 0:
                      return n = t.src,
                          o = t.width,
                          i = t.el,
                          u = t.height,
                          l = t.changeNextUrlFunc,
                          s = t.icons,
                          c = t.poster,
                          d = t.onShouldShowMiniScreen,
                          f = t.logInfo,
                          Q.next = 3,
                          qh();
                    case 3:
                      m = 1,
                          v = 1,
                          p = 1,
                          g = .6,
                          h = !1;
                      try {
                        localStorage.getItem("player_nextautoplay") === "0" && (m = 0),
                            v = Number(localStorage.getItem("player_playbackratio")) || 1,
                            y = localStorage.getItem("player_volume"),
                            b = localStorage.getItem("player_is_mute"),
                            h = b === "1",
                        y && (g = Number(y)),
                        localStorage.getItem("player_miniwin") === "0" && (p = 0)
                      } catch (Y) {}
                      return _ = new pn({
                        el: i,
                        lang: "zh",
                        url: n,
                        width: o,
                        height: u,
                        leavePlayerTime: 0,
                        autoplay: !0,
                        defaultMuted: !0,
                        autoMini: Boolean(p),
                        autoplayMuted: h,
                        defaultPlaybackRate: v,
                        poster: c,
                        loop: !1,
                        closeFocusVideoFocus: !0,
                        closeControlsBlur: !0,
                        closePlayVideoFocus: !0,
                        closeVideoPreventDefault: !0,
                        closeVideoStopPropagation: !0,
                        volume: g,
                        icons: s,
                        controls: {
                          mode: "bottom",
                          autoHide: !0,
                          initShow: !0
                        },
                        playbackRate: !1,
                        cssFullscreen: !1,
                        dynamicBg: {
                          disable: !1,
                          frameRate: 10,
                          filter: "blur(60px)",
                          maskBg: "rgba(0,0,0,0.7)"
                        },
                        keyboard: {
                          checkVisible: !1
                        },
                        enter: {
                          innerHtml: '<div class="xg-douyin-loading" />'
                        },
                        plugins: [Hh, $h],
                        MiniWinPlugin: {
                          autoMini: Boolean(p)
                        },
                        SettingPlugin: {
                          nextAutoPlay: Boolean(m)
                        },
                        start: {
                          disableAnimate: !0
                        },
                        ignores: ["progresspreview", "poster"],
                        progress: !0,
                        miniprogress: !0,
                        miniscreen: {
                          left: -1,
                          top: -1,
                          disableDrag: !0
                        }
                      }),
                          A = !1,
                          S = function() {
                            var H;
                            if (i != null && (H = i.parentElement) !== null && H !== void 0 && H.getBoundingClientRect) {
                              var Ie = i.parentElement.getBoundingClientRect()
                                  , we = Ie.bottom;
                              return we <= Jh
                            }
                            return !1
                          }
                          ,
                          P = function() {
                            var H = S();
                            if (d(H),
                                p)
                              if (H) {
                                var Ie;
                                if (A || !(_ != null && (Ie = _.plugins) !== null && Ie !== void 0 && Ie.miniscreen))
                                  return;
                                A || (A = !0,
                                    _.plugins.miniscreen.getMini())
                              } else
                                A && (A = !1,
                                    _.plugins.miniscreen.exitMini())
                          }
                          ,
                          _.isNextAutoPlay = m,
                          document.addEventListener("scroll", P),
                          I = function(H) {
                            m = H,
                                _.isNextAutoPlay = m,
                                localStorage.setItem("player_nextautoplay", H ? "1" : "0")
                          }
                          ,
                          x = function(H) {
                            localStorage.setItem("player_playbackratio", H)
                          }
                          ,
                          T = function() {
                            localStorage.setItem("player_volume", _.volume),
                                localStorage.setItem("player_is_mute", _.muted ? "1" : "0")
                          }
                          ,
                          C = function(H) {
                            p = H,
                                localStorage.setItem("player_miniwin", H ? "1" : "0")
                          }
                          ,
                          O = function() {
                            vn.sendLog("videoPlayFinish", {
                              urlParamList: ["previous_page"],
                              enter_from: "video_detail",
                              author_id: f == null ? void 0 : f.author_id,
                              group_id: f == null ? void 0 : f.group_id,
                              log_pb: f == null ? void 0 : f.log_pb,
                              compilation_id: f == null ? void 0 : f.compilation_id,
                              is_visible: document.visibilityState === "visible"
                            }),
                            !(m && !S() && l()) && (_.isReplay = !0,
                                _.replay())
                          }
                          ,
                          k = function(H) {
                            A && H === !1 && (A = !1,
                                _.emit("manual_change_min_state", !1),
                                C(0))
                          }
                          ,
                          B = !1,
                          R = !0,
                          F = 0,
                          M = function() {
                            _.emit("focus"),
                                B = !0,
                                vn.sendLog("videoPlay", {
                                  urlParamList: ["previous_page"],
                                  author_id: f == null ? void 0 : f.author_id,
                                  enter_from: "video_detail",
                                  group_id: f == null ? void 0 : f.group_id,
                                  log_pb: f == null ? void 0 : f.log_pb,
                                  compilation_id: f == null ? void 0 : f.compilation_id,
                                  is_auto_play: R,
                                  impression_data: f == null ? void 0 : f.impressionData
                                })
                          }
                          ,
                          L = function() {
                            R = !1
                          }
                          ,
                          W = 0,
                          N = function(H) {
                            !F || !_ || !_.duration || (vn.sendLog("playTime", {
                              is_visible: Number(H),
                              duration: Date.now() - F,
                              from_percent: W / _.duration,
                              to_percent: _.currentTime / _.duration,
                              is_auto_play: R,
                              urlParamList: ["previous_page"],
                              author_id: f == null ? void 0 : f.author_id,
                              enter_from: "video_detail",
                              group_id: f == null ? void 0 : f.group_id,
                              log_pb: f == null ? void 0 : f.log_pb
                            }),
                                F = Date.now())
                          }
                          ,
                          z = function() {
                            B = !0,
                                F = Date.now(),
                                W = _.currentTime
                          }
                          ,
                          U = function() {
                            N(document.visibilityState === "visible")
                          }
                          ,
                          re = 1,
                          J = setInterval(function() {
                            B && vn.sendLog("videoPlayCheckPoint", {
                              urlParamList: ["previous_page"],
                              author_id: f == null ? void 0 : f.author_id,
                              group_id: f == null ? void 0 : f.group_id,
                              log_pb: f == null ? void 0 : f.log_pb,
                              enter_from: "video_detail",
                              compilation_id: f == null ? void 0 : f.compilation_id,
                              order: re++
                            })
                          }, 6e4),
                          Wn(N),
                          _.plugins.progress.addCallBack("click", function() {
                            N(document.visibilityState === "visible")
                          }),
                          _.plugins.progress.addCallBack("dragend", function() {
                            N(document.visibilityState === "visible")
                          }),
                          _.on("autoplay_was_prevented", L),
                          _.on("autoplay_started", M),
                          _.on("play", z),
                          _.on("pause", U),
                          _.on("nextAutoplayChange", I),
                          _.on("playRatioChange", x),
                          _.on("miniWinChange", C),
                          _.on("ended", O),
                          _.on("mini_state_change", k),
                          _.on("volumechange", T),
                          Q.abrupt("return", {
                            player: _,
                            changeMiniWin: function(H) {
                              if (A)
                                if (H)
                                  C(H),
                                      P();
                                else {
                                  _.plugins.miniscreen.exitMini();
                                  return
                                }
                              C(H),
                                  _.emit("manual_change_min_state", H),
                                  P()
                            },
                            destroy: function(H) {
                              J && clearInterval(J),
                              H && (H.destroy(),
                                  document.removeEventListener("scroll", P),
                                  H.off("autoplay_was_prevented", L),
                                  H.off("autoplay_started", M),
                                  H.off("play", z),
                                  H.off("pause", z),
                                  H.off("nextAutoplayChange", I),
                                  H.off("playRatioChange", x),
                                  H.off("miniWinChange", x),
                                  H.off("ended", O),
                                  H.off("mini_state_change", k),
                                  H.off("volumechange", T))
                            },
                            changeNextPlay: function() {
                              ji(N)
                            },
                            isNextAutoPlay: m
                          });
                    case 46:
                    case "end":
                      return Q.stop()
                  }
              }, r)
            }));
            return function(t) {
              return e.apply(this, arguments)
            }
          }();
          function Uc(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function ty(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      Uc(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      Uc(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          function ry(e) {
            var r = e.onMountIcon;
            return a.createElement(a.Fragment, null, a.createElement("div", {
              ref: function(n) {
                n && n.children && n.children.length === 9 && r({
                  play: function() {
                    var i = document.createElement("div");
                    return i.innerHTML = n.children[0].outerHTML + n.children[1].outerHTML,
                        i.children[0]
                  },
                  pause: function() {
                    var i = document.createElement("div");
                    return i.innerHTML = n.children[0].outerHTML + n.children[1].outerHTML,
                        i.children[1]
                  },
                  startPlay: n.children[0].outerHTML,
                  startPause: n.children[1].outerHTML,
                  playNext: n.children[2].outerHTML,
                  mini: n.children[4].outerHTML,
                  volumeSmall: n.children[5].outerHTML,
                  volumeLarge: n.children[5].outerHTML,
                  volumeMuted: n.children[6].outerHTML,
                  fullscreen: n.children[7].outerHTML,
                  exitFullscreen: n.children[8].outerHTML,
                  loadingIcon: 'loading: "<div class="xg-douyin-loading" />"'
                })
              },
              style: {
                display: "none"
              }
            }, a.createElement(oe, {
              src: ch,
              width: 36,
              height: 36
            }), a.createElement(oe, {
              src: dh,
              width: 36,
              height: 36
            }), a.createElement(oe, {
              src: vh,
              width: 36,
              height: 36
            }), a.createElement(oe, {
              src: Uo,
              width: 36,
              height: 36
            }), a.createElement(oe, {
              src: Oc,
              width: 36,
              height: 36
            }), a.createElement(oe, {
              src: yh,
              width: 36,
              height: 36
            }), a.createElement(oe, {
              src: wh,
              width: 36,
              height: 36
            }), a.createElement(oe, {
              src: Eh,
              width: 36,
              height: 36
            }), a.createElement(oe, {
              src: Ah,
              width: 36,
              height: 36
            })))
          }
          function ny(e, r) {
            var t = e.playAddr
                , n = e.cover
                , o = e.onShouldShowMiniScreen
                , i = e.awemeId
                , u = e.logInfo
                , l = e.nextVideoInfo
                , s = (0,
                a.useRef)(null)
                , c = (0,
                a.useRef)(null)
                , d = (0,
                a.useRef)(null)
                , f = (0,
                a.useRef)(null)
                , m = (0,
                a.useRef)(null)
                , v = on()
                , p = a.useCallback(function() {
              var y;
              if ((y = m.current) !== null && y !== void 0 && y.url) {
                var b, _, A;
                return window.scrollTo(0, 0),
                (b = s.current) === null || b === void 0 || (_ = b.changeNextPlay) === null || _ === void 0 || _.call(b),
                    v.push((A = m.current) === null || A === void 0 ? void 0 : A.url, {
                      extra: {
                        prevId: i
                      }
                    }),
                    !0
              } else
                ye.info("\u6CA1\u6709\u4E0B\u4E00\u96C6\u4E86");
              return !1
            }, [])
                , g = a.useCallback(function() {
              var y;
              if ((y = s.current) !== null && y !== void 0 && y.player && s.current.player.registerPlugin)
                try {
                  m.current && (s.current.player.i18n.PLAYNEXT_TIPS = "\u4E0B\u4E2A\u89C6\u9891\uFF1A".concat(m.current.desc),
                      s.current.player.registerPlugin({
                        plugin: Sh.Z,
                        options: {},
                        pluginName: "playNext"
                      }, {
                        urlList: [m.current.url]
                      }),
                      s.current.player.registerPlugin({
                        plugin: Nh,
                        options: {},
                        pluginName: "AutoPlayTipsPlugin"
                      }, {
                        img: m.current.img,
                        desc: m.current.desc
                      }),
                      s.current.player.usePluginHooks("playNext", "playNext", function(b, _) {
                        return p()
                      }))
                } catch (b) {
                  console.log("registerPlugin:", b)
                }
            }, [])
                , h = a.useCallback(ty(regeneratorRuntime.mark(function y() {
              return regeneratorRuntime.wrap(function(_) {
                for (; ; )
                  switch (_.prev = _.next) {
                    case 0:
                      if (!(!c.current || !d.current)) {
                        _.next = 2;
                        break
                      }
                      return _.abrupt("return");
                    case 2:
                      if (s.current) {
                        _.next = 15;
                        break
                      }
                      return s.current = {},
                          _.prev = 4,
                          _.next = 7,
                          ey({
                            src: t,
                            el: d.current,
                            poster: n,
                            icons: c.current,
                            refNextUrl: f,
                            onShouldShowMiniScreen: o,
                            changeNextUrlFunc: p,
                            logInfo: u
                          });
                    case 7:
                      s.current = _.sent,
                          g(),
                          _.next = 15;
                      break;
                    case 11:
                      _.prev = 11,
                          _.t0 = _.catch(4),
                          console.error("init Player Error:", _.t0),
                          s.current = null;
                    case 15:
                    case "end":
                      return _.stop()
                  }
              }, y, null, [[4, 11]])
            })), [t, n]);
            return (0,
                a.useImperativeHandle)(r, function() {
              return {
                changeMiniWin: function(b) {
                  s.current.changeMiniWin(b)
                }
              }
            }),
                (0,
                    a.useEffect)(function() {
                  m.current = l,
                      g()
                }, [l]),
                (0,
                    a.useEffect)(function() {
                  return function() {
                    if (s.current)
                      try {
                        s.current.destroy(s.current.player)
                      } catch (y) {
                        console.error("\u9500\u6BC1\u64AD\u653E\u5668\u5931\u8D25 \uFF1A", y)
                      }
                  }
                }, []),
                a.createElement(a.Fragment, null, a.createElement(ry, {
                  onMountIcon: function(b) {
                    c.current = b,
                        h()
                  }
                }), a.createElement("div", {
                  className: "videoWrap",
                  ref: function(b) {
                    d.current = b,
                        h()
                  },
                  style: {
                    width: "100%",
                    height: "100%"
                  }
                }))
          }
          var ay = (0,
              a.forwardRef)(ny);
          function Hc(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
              })),
                  t.push.apply(t, n)
            }
            return t
          }
          function oy(e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r] != null ? arguments[r] : {};
              r % 2 ? Hc(Object(t), !0).forEach(function(n) {
                iy(e, n, t[n])
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Hc(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              })
            }
            return e
          }
          function iy(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          function Wc(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function uy(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      Wc(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      Wc(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          var ly = He;
          function sy() {
            return Xo.apply(this, arguments)
          }
          function Xo() {
            return Xo = uy(regeneratorRuntime.mark(function e() {
              var r, t, n, o = arguments;
              return regeneratorRuntime.wrap(function(u) {
                for (; ; )
                  switch (u.prev = u.next) {
                    case 0:
                      return r = o.length > 0 && o[0] !== void 0 ? o[0] : "",
                          t = o.length > 1 && o[1] !== void 0 ? o[1] : null,
                          u.next = 4,
                          Fe("/aweme/v1/web/shorten/", oy({
                            targets: r,
                            belong: "aweme",
                            persist: 1
                          }, ly), t);
                    case 4:
                      return n = u.sent,
                          u.abrupt("return", Te(n, Wm));
                    case 6:
                    case "end":
                      return u.stop()
                  }
              }, e)
            })),
                Xo.apply(this, arguments)
          }
          var cy = "web_code_link"
              , fy = {
            shareMenuShow: {
              eventName: "share_menu_show",
              params: {
                author_id: "",
                group_id: "",
                log_pb: "",
                enter_from: "",
                previous_page: "web_link"
              }
            },
            shareVideo: {
              eventName: "share_video",
              params: {
                author_id: "",
                group_id: "",
                log_pb: "",
                enter_from: "",
                previous_page: "web_link",
                type: ""
              }
            }
          }
              , Vc = new ot(fy)
              , Lt = {
            container: "_6e84962fcb7da3b1e8100d798c94fd0a-scss",
            qrcode: "a508b8e520c4938b699e76f52758e1b5-scss",
            shareCode: "c970dfb43b7e68344f353625de339de0-scss",
            desc: "_6ed090956a2566bf4d47a648b75d87ef-scss",
            commandWrapper: "_5d025eb178c1c97d99eb9717cb4f0290-scss",
            command: "_95cfb8df7d5be42fc93f8f4464a1c648-scss",
            copyBtn: "_047cfcad258573fad8a7513577bb9f75-scss"
          };
          function zc(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function dy(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      zc(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      zc(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          function $o(e, r) {
            return gy(e) || py(e, r) || vy(e, r) || my()
          }
          function my() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function vy(e, r) {
            if (!!e) {
              if (typeof e == "string")
                return Kc(e, r);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              if (t === "Object" && e.constructor && (t = e.constructor.name),
              t === "Map" || t === "Set")
                return Array.from(e);
              if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return Kc(e, r)
            }
          }
          function Kc(e, r) {
            (r == null || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
              n[t] = e[t];
            return n
          }
          function py(e, r) {
            var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (t != null) {
              var n = [], o = !0, i = !1, u, l;
              try {
                for (t = t.call(e); !(o = (u = t.next()).done) && (n.push(u.value),
                    !(r && n.length === r)); o = !0)
                  ;
              } catch (s) {
                i = !0,
                    l = s
              } finally {
                try {
                  !o && t.return != null && t.return()
                } finally {
                  if (i)
                    throw l
                }
              }
              return n
            }
          }
          function gy(e) {
            if (Array.isArray(e))
              return e
          }
          var hy = function(r) {
            var t = r.className
                , n = r.awemeInfo
                , o = r.onMouseEnter
                , i = r.onMouseLeave
                , u = r.hidden
                , l = r.awemelogPb
                , s = (0,
                a.useState)("")
                , c = $o(s, 2)
                , d = c[0]
                , f = c[1]
                , m = (0,
                a.useState)("")
                , v = $o(m, 2)
                , p = v[0]
                , g = v[1];
            (0,
                a.useEffect)(function() {
              dy(regeneratorRuntime.mark(function y() {
                var b, _, A, S, P, I, x, T, C, O, k;
                return regeneratorRuntime.wrap(function(R) {
                  for (; ; )
                    switch (R.prev = R.next) {
                      case 0:
                        return b = n == null ? void 0 : n.shareInfo,
                            _ = b.shareLinkDesc,
                            A = b.shareUrl,
                            S = A && "".concat(A, "&from=").concat(cy),
                            R.next = 4,
                            Promise.all([Gm(n == null ? void 0 : n.awemeId), sy(S)]);
                      case 4:
                        P = R.sent,
                            I = $o(P, 2),
                            x = I[0],
                            T = I[1],
                            C = x || {},
                            O = C.qrcodeUrl,
                            k = _ && _.replace("%s", T),
                            f(O),
                            g(k);
                      case 12:
                      case "end":
                        return R.stop()
                    }
                }, y)
              }))()
            }, [n]),
                (0,
                    a.useEffect)(function() {
                  if (!u) {
                    var y;
                    Vc.sendLog("shareMenuShow", {
                      urlParamList: ["previous_page"],
                      author_id: n == null || (y = n.authorInfo) === null || y === void 0 ? void 0 : y.uid,
                      group_id: n == null ? void 0 : n.groupId,
                      enter_from: X(),
                      log_pb: l
                    })
                  }
                }, [u]);
            var h = (0,
                a.useCallback)(function() {
              var y;
              Ul()(p),
                  ye.info("\u53E3\u4EE4\u5DF2\u590D\u5236\uFF0C\u8BF7\u7C98\u8D34\u7ED9\u5FAE\u4FE1/QQ\u597D\u53CB\u6216\u7FA4\u804A"),
                  Vc.sendLog("shareVideo", {
                    urlParamList: ["previous_page"],
                    author_id: n == null || (y = n.authorInfo) === null || y === void 0 ? void 0 : y.uid,
                    group_id: n == null ? void 0 : n.groupId,
                    enter_from: X(),
                    log_pb: l,
                    type: "copy_link"
                  })
            }, [p]);
            return a.createElement("div", {
              className: j()(t, Lt.container),
              onMouseEnter: o,
              onMouseLeave: i,
              style: {
                display: u ? "none" : "flex"
              }
            }, a.createElement("div", {
              className: Lt.qrcode
            }, a.createElement(yr, {
              src: d,
              alt: p,
              iconWidth: 30
            })), a.createElement("div", {
              className: Lt.shareCode
            }, a.createElement("div", {
              className: Lt.desc
            }, "\u6253\u5F00\u6296\u97F3\u626B\u7801\u6216\u590D\u5236\u53E3\u4EE4\u7C98\u8D34\u7ED9\u5FAE\u4FE1/QQ\u597D\u53CB"), a.createElement("div", {
              className: Lt.commandWrapper
            }, a.createElement("span", {
              className: Lt.command
            }, p), a.createElement(Pe, {
              size: "small",
              className: Lt.copyBtn,
              onClick: h
            }, a.createElement("span", null, "\u590D\u5236")))))
          }
              , yy = hy;
          function by(e, r) {
            return Cy(e) || Ey(e, r) || _y(e, r) || wy()
          }
          function wy() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function _y(e, r) {
            if (!!e) {
              if (typeof e == "string")
                return Gc(e, r);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              if (t === "Object" && e.constructor && (t = e.constructor.name),
              t === "Map" || t === "Set")
                return Array.from(e);
              if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return Gc(e, r)
            }
          }
          function Gc(e, r) {
            (r == null || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
              n[t] = e[t];
            return n
          }
          function Ey(e, r) {
            var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (t != null) {
              var n = [], o = !0, i = !1, u, l;
              try {
                for (t = t.call(e); !(o = (u = t.next()).done) && (n.push(u.value),
                    !(r && n.length === r)); o = !0)
                  ;
              } catch (s) {
                i = !0,
                    l = s
              } finally {
                try {
                  !o && t.return != null && t.return()
                } finally {
                  if (i)
                    throw l
                }
              }
              return n
            }
          }
          function Cy(e) {
            if (Array.isArray(e))
              return e
          }
          function Qc(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          var Ay = it;
          function Sy(e) {
            var r, t, n, o, i = e.awemeInfo, u = e.onScrollToComment, l = e.isReoload, s = e.awemelogPb, c = Na(), d = c.type, f = c.changeType, m = (0,
                a.useContext)(Ay) || {}, v = m.userInfo, p = m.dispatch, g = v.isLogin, h = v.info, y = i == null ? void 0 : i.userDigged, b = rh({
              userInfo: h,
              awemeInfo: i,
              userDigged: y,
              isLogin: g,
              awemeId: i == null ? void 0 : i.awemeId,
              onLoginSuc: function() {
                return p({
                  type: "updateUserInfo"
                })
              }
            }), _ = b.changeStatus, A = b.favoriteStatus, S = b.onChangeFavoriteStatus;
            (0,
                a.useEffect)(function() {
              l && _(y, g, i == null ? void 0 : i.awemeId)
            }, [y, g, l, i == null ? void 0 : i.awemeId]);
            var P = i == null || (r = i.stats) === null || r === void 0 ? void 0 : r.diggCount;
            return Boolean(y) !== Boolean(A) && (y ? P-- : P++),
                a.createElement("div", {
                  className: de.videoInfoContainer
                }, a.createElement("h1", {
                  className: de.title
                }, a.createElement("span", null, (i == null || (t = i.mixInfo) === null || t === void 0 ? void 0 : t.currentEpisode) && "\u7B2C".concat(i == null || (n = i.mixInfo) === null || n === void 0 ? void 0 : n.currentEpisode, "\u96C6 | ") || ""), a.createElement(ze, {
                  text: i == null ? void 0 : i.desc,
                  textExtra: i == null ? void 0 : i.textExtra
                })), a.createElement("div", {
                  className: de.infoContainer
                }, a.createElement("div", {
                  className: de.statsContainer
                }, a.createElement("div", {
                  onClick: function() {
                    S(i == null ? void 0 : i.awemeId)
                  },
                  className: j()(de.statsItem, j()(Qc({}, de.active, A)))
                }, a.createElement(oe, {
                  width: 32,
                  height: 32,
                  src: ah,
                  color: A ? Ki : dt,
                  className: de.iconSvg
                }), a.createElement("span", {
                  className: de.count
                }, xe(P))), a.createElement("div", {
                  onClick: u,
                  className: de.statsItem
                }, a.createElement(oe, {
                  width: 32,
                  height: 32,
                  src: ih,
                  color: dt,
                  className: de.iconSvg
                }), a.createElement("span", {
                  className: de.count
                }, xe(i == null || (o = i.stats) === null || o === void 0 ? void 0 : o.commentCount))), a.createElement("div", {
                  className: j()(de.shareContainer, de.statsItem),
                  onMouseEnter: function() {
                    f("share_btn")
                  },
                  onMouseLeave: function() {
                    f("")
                  }
                }, a.createElement(oe, {
                  width: 32,
                  height: 32,
                  src: lh,
                  color: dt,
                  className: de.iconSvg
                }), a.createElement("span", {
                  className: de.share
                }, "\u5206\u4EAB"), a.createElement(yy, {
                  awemelogPb: s,
                  awemeInfo: i,
                  className: de.shareBox,
                  hidden: d !== "share_btn",
                  onMouseEnter: function() {
                    f("share_btn")
                  },
                  onMouseLeave: function() {
                    f("")
                  }
                }))), a.createElement("span", {
                  className: de.time
                }, pt()((i == null ? void 0 : i.createTime) * 1e3).format("YYYY-MM-DD"))))
          }
          function Iy(e) {
            var r, t, n = e.awemeInfo, o = e.isReoload, i = e.awemelogPb, u = e.nextVideoInfo, l = (n == null ? void 0 : n.video) || {}, s = l.playAddr, c = l.cover, d = (0,
                a.useState)(!1), f = by(d, 2), m = f[0], v = f[1], p = (0,
                a.useRef)(null);
            return a.createElement("div", {
              className: de.playerContainer
            }, a.createElement("div", {
              className: de.playerWrap
            }, n && o && a.createElement(ay, {
              nextVideoInfo: u,
              playAddr: s,
              cover: c,
              ref: function(h) {
                p.current = h
              },
              logInfo: {
                author_id: n == null || (r = n.authorInfo) === null || r === void 0 ? void 0 : r.uid,
                group_id: n == null ? void 0 : n.groupId,
                log_pb: i,
                compilation_id: n == null || (t = n.mixInfo) === null || t === void 0 ? void 0 : t.mixId,
                impressionData: n == null ? void 0 : n.impressionData
              },
              awemeId: n.awemeId,
              onShouldShowMiniScreen: function(h) {
                v(h)
              }
            })), a.createElement("div", {
              className: j()(de.miniScreenBtn, Qc({}, de.active, m)),
              onClick: function() {
                var h, y;
                (h = p.current) === null || h === void 0 || (y = h.changeMiniWin) === null || y === void 0 || y.call(h, !0)
              }
            }, a.createElement(oe, {
              src: Oc,
              width: 36,
              height: 36
            })))
          }
          var Py = (0,
              a.forwardRef)(Iy);
          function Yc(e) {
            return Ry(e) || Oy(e) || qc(e) || xy()
          }
          function xy() {
            throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function Oy(e) {
            if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null)
              return Array.from(e)
          }
          function Ry(e) {
            if (Array.isArray(e))
              return Zo(e)
          }
          function Xc(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
              })),
                  t.push.apply(t, n)
            }
            return t
          }
          function $c(e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r] != null ? arguments[r] : {};
              r % 2 ? Xc(Object(t), !0).forEach(function(n) {
                Ty(e, n, t[n])
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Xc(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              })
            }
            return e
          }
          function Ty(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          function Zc(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function Jc(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      Zc(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      Zc(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          function ky(e, r) {
            return Fy(e) || Ly(e, r) || qc(e, r) || Ny()
          }
          function Ny() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function qc(e, r) {
            if (!!e) {
              if (typeof e == "string")
                return Zo(e, r);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              if (t === "Object" && e.constructor && (t = e.constructor.name),
              t === "Map" || t === "Set")
                return Array.from(e);
              if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return Zo(e, r)
            }
          }
          function Zo(e, r) {
            (r == null || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
              n[t] = e[t];
            return n
          }
          function Ly(e, r) {
            var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (t != null) {
              var n = [], o = !0, i = !1, u, l;
              try {
                for (t = t.call(e); !(o = (u = t.next()).done) && (n.push(u.value),
                    !(r && n.length === r)); o = !0)
                  ;
              } catch (s) {
                i = !0,
                    l = s
              } finally {
                try {
                  !o && t.return != null && t.return()
                } finally {
                  if (i)
                    throw l
                }
              }
              return n
            }
          }
          function Fy(e) {
            if (Array.isArray(e))
              return e
          }
          var My = 6
              , ef = {
            statusCode: 0,
            data: [],
            mixId: "",
            hasMore: !1,
            cursor: 0,
            nextUrl: "",
            logPb: ""
          };
          function By(e) {
            var r = (0,
                a.useState)(e || ef)
                , t = ky(r, 2)
                , n = t[0]
                , o = t[1]
                , i = (0,
                a.useCallback)(function() {
              var l = Jc(regeneratorRuntime.mark(function s(c, d) {
                var f, m, v, p, g, h;
                return regeneratorRuntime.wrap(function(b) {
                  for (; ; )
                    switch (b.prev = b.next) {
                      case 0:
                        return b.next = 2,
                            ya({
                              mixId: c,
                              cursor: d,
                              count: My
                            });
                      case 2:
                        f = b.sent,
                            m = f.statusCode,
                            v = f.data,
                            p = f.hasMore,
                            g = f.cursor,
                            h = f.logPb,
                            o(function(_) {
                              return $c($c({}, _), {}, {
                                statusCode: m,
                                mixId: c,
                                data: [].concat(Yc(_.data), Yc(v)),
                                hasMore: p,
                                cursor: g,
                                logPb: h
                              })
                            });
                      case 9:
                      case "end":
                        return b.stop()
                    }
                }, s)
              }));
              return function(s, c) {
                return l.apply(this, arguments)
              }
            }(), [])
                , u = (0,
                a.useCallback)(function() {
              var l = Jc(regeneratorRuntime.mark(function s(c, d) {
                var f, m, v, p;
                return regeneratorRuntime.wrap(function(h) {
                  for (; ; )
                    switch (h.prev = h.next) {
                      case 0:
                        if (f = d || {},
                            m = f.mixId,
                            v = f.totalEpisode,
                            p = f.currentEpisode,
                            !m) {
                          h.next = 13;
                          break
                        }
                        if (!(c && c.statusCode === 0 && c.mixId === m && c.currentEpisode === p)) {
                          h.next = 6;
                          break
                        }
                        o(c),
                            h.next = 11;
                        break;
                      case 6:
                        return h.t0 = o,
                            h.next = 9,
                            _a({
                              mixId: m,
                              totalEpisode: v,
                              currentEpisode: p,
                              count: 6
                            });
                      case 9:
                        h.t1 = h.sent,
                            (0,
                                h.t0)(h.t1);
                      case 11:
                        h.next = 14;
                        break;
                      case 13:
                        o(ef);
                      case 14:
                      case "end":
                        return h.stop()
                    }
                }, s)
              }));
              return function(s, c) {
                return l.apply(this, arguments)
              }
            }(), []);
            return {
              mixInfo: n,
              loadMoreMixInfo: i,
              resetMixInfo: u
            }
          }
          function tf(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
              })),
                  t.push.apply(t, n)
            }
            return t
          }
          function rf(e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r] != null ? arguments[r] : {};
              r % 2 ? tf(Object(t), !0).forEach(function(n) {
                Dy(e, n, t[n])
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : tf(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              })
            }
            return e
          }
          function Dy(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          function gn(e) {
            return Hy(e) || Uy(e) || of(e) || jy()
          }
          function jy() {
            throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function Uy(e) {
            if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null)
              return Array.from(e)
          }
          function Hy(e) {
            if (Array.isArray(e))
              return Jo(e)
          }
          function nf(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function af(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      nf(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      nf(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          function Wy(e, r) {
            return Ky(e) || zy(e, r) || of(e, r) || Vy()
          }
          function Vy() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function of(e, r) {
            if (!!e) {
              if (typeof e == "string")
                return Jo(e, r);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              if (t === "Object" && e.constructor && (t = e.constructor.name),
              t === "Map" || t === "Set")
                return Array.from(e);
              if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return Jo(e, r)
            }
          }
          function Jo(e, r) {
            (r == null || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
              n[t] = e[t];
            return n
          }
          function zy(e, r) {
            var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (t != null) {
              var n = [], o = !0, i = !1, u, l;
              try {
                for (t = t.call(e); !(o = (u = t.next()).done) && (n.push(u.value),
                    !(r && n.length === r)); o = !0)
                  ;
              } catch (s) {
                i = !0,
                    l = s
              } finally {
                try {
                  !o && t.return != null && t.return()
                } finally {
                  if (i)
                    throw l
                }
              }
              return n
            }
          }
          function Ky(e) {
            if (Array.isArray(e))
              return e
          }
          var Gy = 20
              , Qy = 20
              , uf = {
            statusCode: 0,
            data: [],
            hasMore: !1,
            nextVideoInfo: "",
            logPb: ""
          }
              , lf = "douyin_detail_played_awmeme"
              , sf = function() {
            var r = [];
            try {
              r = JSON.parse(sessionStorage.getItem(lf) || "[]") || []
            } catch (t) {
              console.error("getPlayedVideo Error:", t)
            }
            return r
          }
              , Yy = function(r) {
            var t = sf();
            try {
              t.unshift(r),
                  t.splice(4),
                  sessionStorage.setItem(lf, JSON.stringify(t))
            } catch (n) {
              console.error("setPlayedVideo Error:", n)
            }
            return t
          };
          function Xy() {
            var e = (0,
                a.useRef)([])
                , r = (0,
                a.useRef)([])
                , t = (0,
                a.useState)(uf)
                , n = Wy(t, 2)
                , o = n[0]
                , i = n[1]
                , u = (0,
                a.useCallback)(function() {
              var c = af(regeneratorRuntime.mark(function d(f) {
                var m, v, p, g, h, y, b, _, A, S;
                return regeneratorRuntime.wrap(function(I) {
                  for (; ; )
                    switch (I.prev = I.next) {
                      case 0:
                        if (!f) {
                          I.next = 16;
                          break
                        }
                        return e.current = [],
                            r.current = [],
                            m = sf(),
                            I.next = 6,
                            il({
                              awemeId: f,
                              count: Qy,
                              filterGids: m.join(",") || ""
                            });
                      case 6:
                        for (v = I.sent,
                                 p = v.statusCode,
                                 g = v.awemeList,
                                 h = v.logPb,
                                 e.current = e.current.concat(m),
                                 y = !1,
                                 b = 0; b < (g == null ? void 0 : g.length); b++)
                          ((_ = g[b]) === null || _ === void 0 ? void 0 : _.awemeId) !== f && (y || (y = {
                            url: or(g[b].awemeId, "pre_vid=".concat(f, "&previous_page=").concat(X())),
                            img: g[b].video.cover,
                            desc: (A = g[b]) === null || A === void 0 ? void 0 : A.desc
                          }),
                              e.current.push(g[b].awemeId),
                              r.current.push(g[b]));
                        S = r.current.length,
                            Yy(f),
                            i({
                              logPb: h,
                              statusCode: p,
                              hasMore: S > 0,
                              data: r.current.splice(0, 20),
                              nextVideoInfo: y
                            });
                      case 16:
                      case "end":
                        return I.stop()
                    }
                }, d)
              }));
              return function(d) {
                return c.apply(this, arguments)
              }
            }(), [])
                , l = (0,
                a.useCallback)(function() {
              i(uf)
            }, [])
                , s = (0,
                a.useCallback)(function() {
              var c = af(regeneratorRuntime.mark(function d(f) {
                var m, v, p, g, h;
                return regeneratorRuntime.wrap(function(b) {
                  for (; ; )
                    switch (b.prev = b.next) {
                      case 0:
                        if (m = "",
                            !(e.current.length > 0)) {
                          b.next = 10;
                          break
                        }
                        return b.next = 4,
                            il({
                              awemeId: f,
                              count: Gy,
                              filterGids: e.current.join(",")
                            });
                      case 4:
                        v = b.sent,
                            p = v.awemeList,
                            g = v.logPb,
                            m = g,
                            e.current = [],
                            r.current = [].concat(gn(r.current), gn(p || []));
                      case 10:
                        h = r.current.splice(0, 6),
                            i(function(_) {
                              var A = [].concat(gn(_.data), gn(h));
                              return rf(rf({}, _), {}, {
                                logPb: m,
                                statusCode: 0,
                                data: A,
                                hasMore: r.current.length > 0
                              })
                            });
                      case 12:
                      case "end":
                        return b.stop()
                    }
                }, d)
              }));
              return function(d) {
                return c.apply(this, arguments)
              }
            }(), [o == null ? void 0 : o.data.length]);
            return {
              relateInfo: o,
              loadMoreRelateInfo: s,
              initRelateInfo: u,
              resetRelateInfo: l
            }
          }
          var Ft = {
            container: "_97d705de994bee2e76ad8876a1648171-scss",
            leftContainer: "_20bc24e2255076f4dbc27d9fe1a241f3-scss",
            rightContainer: "_7a161db40dc91a5e9612ebc02b3c05b2-scss",
            playerContainer: "f8f92fbaa6a9978696cbc0d0e2f862ae-scss",
            smallSecreenCt: "b01ca5bb6faf8af52959afb6eb56d369-scss",
            loadingVideoDetailContainer: "_9fcde2e9976fb40adac29f76c400e0bd-scss",
            loadingVideoDetail: "_422e6309ede26166f3dfa1bfb413b2d5-scss"
          }
              , $y = it;
          function cf(e) {
            var r, t = e.awemeInfo, n = e.statusCode, o = n === void 0 ? 0 : n, i = e.isReoload, u = e.defaultMixInfo, l = e.defaultComment, s = e.awemelogPb, c = (0,
                a.useContext)($y) || {}, d = c.userInfo, f = d.isLogin, m = d.info, v = m == null ? void 0 : m.uid, p = (0,
                a.useRef)(null), g = t || {}, h = g.awemeId, y = By(u), b = y.mixInfo, _ = y.loadMoreMixInfo, A = y.resetMixInfo, S = Xy(), P = S.relateInfo, I = S.loadMoreRelateInfo, x = S.initRelateInfo, T = S.resetRelateInfo, C = $m(b) || (P == null ? void 0 : P.nextVideoInfo) || "";
            return jt("video_detail"),
                (0,
                    a.useEffect)(function() {
                  i && t && A(u, t == null ? void 0 : t.mixInfo)
                }, [u, t, i]),
                (0,
                    a.useEffect)(function() {
                  i && (T(),
                      x(h))
                }, [h, i]),
                o === 0 && (!t || f === void 0) ? a.createElement("div", {
                  className: Ft.loadingVideoDetailContainer
                }, a.createElement(Ge, {
                  text: "\u89C6\u9891\u6570\u636E\u52A0\u8F7D\u4E2D",
                  className: Ft.loadingVideoDetail
                })) : o === he.ERROR_404 ? a.createElement($t, {
                  title: "\u4F60\u8981\u89C2\u770B\u7684\u89C6\u9891\u4E0D\u5B58\u5728",
                  desc: " "
                }) : o === he.ERROR_INVALID_PARAM ? a.createElement(wt, {
                  title: "\u4F60\u6D4F\u89C8\u7684\u89C6\u9891\u4E0D\u662F\u6709\u6548\u89C6\u9891",
                  desc: " "
                }) : o === he.ERROR_USER_FORBIDEN ? a.createElement(wt, {
                  title: "\u8D26\u53F7\u88AB\u5C01\u7981",
                  desc: " "
                }) : o ? a.createElement(wt, {
                  title: "\u670D\u52A1\u5668\u51FA\u73B0\u95EE\u9898",
                  desc: "\u8BF7\u7A0D\u540E\u91CD\u8BD5"
                }) : t != null && t.isPrivate && (t == null || (r = t.authorInfo) === null || r === void 0 ? void 0 : r.uid) !== v ? f ? a.createElement($e, {
                  title: "\u9690\u79C1\u89C6\u9891",
                  desc: "\u4E0D\u80FD\u67E5\u770B"
                }) : a.createElement($e, {
                  title: "\u9690\u79C1\u89C6\u9891",
                  desc: "\u8BF7\u767B\u9646\u540E\u67E5\u770B"
                }) : a.createElement(a.Fragment, null, a.createElement("div", {
                  className: Ft.container
                }, a.createElement("div", {
                  className: Ft.leftContainer
                }, a.createElement("div", null, a.createElement("div", {
                  className: Ft.playerContainer
                }, a.createElement(Py, {
                  awemelogPb: s,
                  awemeInfo: t,
                  nextVideoInfo: C,
                  isReoload: i
                })), a.createElement(Sy, {
                  awemelogPb: s,
                  awemeInfo: t,
                  isReoload: i,
                  onScrollToComment: function() {
                    if (p.current) {
                      var k;
                      Ze.sendLog("clickCommentButton", {
                        urlParamList: ["previous_page"],
                        author_id: t == null || (k = t.authorInfo) === null || k === void 0 ? void 0 : k.uid,
                        group_id: t == null ? void 0 : t.groupId,
                        enter_from: X(),
                        log_pb: s
                      });
                      var B = kr(window)
                          , R = B.y
                          , F = R + p.current.getBoundingClientRect().top - 122 - 25;
                      jn(window, F, 200)
                    }
                  }
                })), a.createElement("div", {
                  className: Ft.smallSecreenCt
                }, a.createElement(cc, {
                  awemeInfo: t,
                  mixInfo: b,
                  loadMoreMixInfo: _,
                  relateInfo: P,
                  loadMoreRelateInfo: I,
                  awemelogPb: s,
                  isReoload: i
                })), a.createElement("div", {
                  ref: p
                }, a.createElement(I1, {
                  userInfo: m,
                  awemeInfo: t,
                  awemeId: i ? t == null ? void 0 : t.awemeId : "",
                  defaultComment: l,
                  awemelogPb: s
                }))), a.createElement("div", {
                  className: Ft.rightContainer
                }, a.createElement(cc, {
                  awemeInfo: t,
                  mixInfo: b,
                  loadMoreMixInfo: _,
                  relateInfo: P,
                  loadMoreRelateInfo: I,
                  awemelogPb: s,
                  isReoload: i
                }))), a.createElement(Hn, null))
          }
          function ff(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
              })),
                  t.push.apply(t, n)
            }
            return t
          }
          function hn(e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r] != null ? arguments[r] : {};
              r % 2 ? ff(Object(t), !0).forEach(function(n) {
                Zy(e, n, t[n])
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ff(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              })
            }
            return e
          }
          function Zy(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          function df(e, r) {
            return t2(e) || e2(e, r) || qy(e, r) || Jy()
          }
          function Jy() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function qy(e, r) {
            if (!!e) {
              if (typeof e == "string")
                return mf(e, r);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              if (t === "Object" && e.constructor && (t = e.constructor.name),
              t === "Map" || t === "Set")
                return Array.from(e);
              if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return mf(e, r)
            }
          }
          function mf(e, r) {
            (r == null || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
              n[t] = e[t];
            return n
          }
          function e2(e, r) {
            var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (t != null) {
              var n = [], o = !0, i = !1, u, l;
              try {
                for (t = t.call(e); !(o = (u = t.next()).done) && (n.push(u.value),
                    !(r && n.length === r)); o = !0)
                  ;
              } catch (s) {
                i = !0,
                    l = s
              } finally {
                try {
                  !o && t.return != null && t.return()
                } finally {
                  if (i)
                    throw l
                }
              }
              return n
            }
          }
          function t2(e) {
            if (Array.isArray(e))
              return e
          }
          function vf(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function yn(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      vf(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      vf(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          var pf = function() {
            var e = yn(regeneratorRuntime.mark(function r(t, n) {
              var o, i, u, l = arguments;
              return regeneratorRuntime.wrap(function(c) {
                for (; ; )
                  switch (c.prev = c.next) {
                    case 0:
                      return i = l.length > 2 && l[2] !== void 0 ? l[2] : null,
                          c.next = 3,
                          ya({
                            mixId: t,
                            cursor: n,
                            count: 1
                          }, i);
                    case 3:
                      return u = c.sent,
                          c.abrupt("return", {
                            statusCode: (u == null || (o = u.data) === null || o === void 0 ? void 0 : o.length) > 0 ? 0 : he.ERROR_404,
                            detail: u == null ? void 0 : u.data[0],
                            logPb: u == null ? void 0 : u.logPb
                          });
                    case 5:
                    case "end":
                      return c.stop()
                  }
              }, r)
            }));
            return function(t, n) {
              return e.apply(this, arguments)
            }
          }()
              , r2 = function() {
            var e = yn(regeneratorRuntime.mark(function r(t, n) {
              var o, i, u, l, s, c, d, f, m, v, p, g = arguments;
              return regeneratorRuntime.wrap(function(y) {
                for (; ; )
                  switch (y.prev = y.next) {
                    case 0:
                      return o = g.length > 2 && g[2] !== void 0 ? g[2] : null,
                          i = {
                            statusCod: -1
                          },
                          u = {
                            awemeId: null,
                            mixId: t,
                            episode: n,
                            aweme: null,
                            comment: null,
                            mixInfo: null,
                            logPb: ""
                          },
                          y.prev = 3,
                          y.next = 6,
                          pf(t, n, o);
                    case 6:
                      if (u.aweme = y.sent,
                      u.aweme.statusCode === 0) {
                        y.next = 9;
                        break
                      }
                      return y.abrupt("return", u);
                    case 9:
                      return u.awemeId = u.aweme.detail.awemeId,
                          s = u.aweme.detail.mixInfo,
                          c = s.totalEpisode,
                          d = s.currentEpisode,
                          y.next = 13,
                          Promise.allSettled([_a({
                            mixId: t,
                            totalEpisode: c,
                            currentEpisode: d,
                            count: 6
                          }, o), fa({
                            awemeId: u.awemeId,
                            cursor: 0,
                            count: 20
                          }, o)]);
                    case 13:
                      return f = y.sent,
                          m = df(f, 2),
                          v = m[0],
                          p = m[1],
                          u.mixInfo = v.status !== "fulfilled" ? i : v.value,
                          u.comment = p.status !== "fulfilled" ? i : p.value,
                          u.logPb = u == null || (l = u.aweme) === null || l === void 0 ? void 0 : l.logPb,
                      u.aweme.statusCode !== 0 && (u.aweme = null),
                          y.abrupt("return", u);
                    case 24:
                      y.prev = 24,
                          y.t0 = y.catch(3),
                          console.log("Collection GetPageData ERROR:", y.t0);
                    case 27:
                      return y.abrupt("return", u);
                    case 28:
                    case "end":
                      return y.stop()
                  }
              }, r, null, [[3, 24]])
            }));
            return function(t, n) {
              return e.apply(this, arguments)
            }
          }();
          function n2(e) {
            var r = e.awemeInfo
                , t = (r == null ? void 0 : r.mixInfo) || {}
                , n = t.mixName
                , o = n === void 0 ? "\u5408\u96C6" : n
                , i = t.currentEpisode
                , u = i === void 0 ? "" : i
                , l = t.mixId
                , s = l === void 0 ? "" : l
                , c = (r == null ? void 0 : r.authorInfo) || {}
                , d = c.nickname
                , f = d === void 0 ? "" : d;
            return a.createElement(Zt, null, a.createElement("title", null, o, " - ", f, " - \u6296\u97F3"), a.createElement("meta", {
              name: "description",
              content: "".concat(o, " \uFF0C\u7531").concat(f, "\u5728\u6296\u97F3\u521B\u5EFA\u7684\u89C6\u9891\u5408\u96C6\u3002\u6296\u97F3\u89C6\u9891-\u8BB0\u5F55\u7F8E\u597D\u751F\u6D3B\u7684\u89C6\u9891\u5E73\u53F0\uFF0C\u6765\u6296\u97F3\uFF0C\u89C2\u770B").concat(f, "\u7684\u66F4\u591A\u4F5C\u54C1\uFF01")
            }), a.createElement("meta", {
              name: "keywords",
              content: "".concat(o, ",").concat(o, "\u6296\u97F3,").concat(f, ",\u6296\u97F3")
            }), a.createElement("link", {
              rel: "canonical",
              href: "https://www.douyin.com/collection/".concat(s, "?pos=").concat(u)
            }))
          }
          function gf(e) {
            var r, t, n, o, i, u, l, s, c = !1, d = e || {}, f = d.aweme, m = d.comment, v = d.mixInfo, p = d.logPb, g = d.episode, h = d.mixId;
            Dt() ? (l = h,
                s = g) : (s = Xn(window.location.search),
                l = Yn(window.location.pathname));
            var y = (0,
                a.useRef)(!0);
            y.current && l === h && s === g && (c = !0);
            var b = (0,
                a.useState)({
              isReload: !0,
              logPb: "",
              data: c ? {
                comment: m,
                aweme: f,
                mixInfo: v
              } : {}
            })
                , _ = df(b, 2)
                , A = _[0]
                , S = _[1];
            if (A != null && (r = A.data) !== null && r !== void 0 && r.mixInfo) {
              var P, I;
              A.data.mixInfo.logPb = A == null || (P = A.data) === null || P === void 0 || (I = P.aweme) === null || I === void 0 ? void 0 : I.logPb
            }
            return A.logPb = A == null || (t = A.data) === null || t === void 0 || (n = t.aweme) === null || n === void 0 ? void 0 : n.logPb,
                (0,
                    a.useEffect)(function() {
                  c && (y.current = !1,
                  f && (f == null ? void 0 : f.statusCode) === 0) || yn(regeneratorRuntime.mark(function x() {
                    var T;
                    return regeneratorRuntime.wrap(function(O) {
                      for (; ; )
                        switch (O.prev = O.next) {
                          case 0:
                            return S(function(k) {
                              return {
                                isReload: !1,
                                data: hn(hn({}, k.data), {}, {
                                  comment: null
                                })
                              }
                            }),
                                O.next = 3,
                                pf(l, s);
                          case 3:
                            T = O.sent,
                                S(function(k) {
                                  return {
                                    isReload: !0,
                                    data: hn(hn({}, k.data), {}, {
                                      aweme: T
                                    })
                                  }
                                });
                          case 5:
                          case "end":
                            return O.stop()
                        }
                    }, x)
                  }))()
                }, [l, s, f, c]),
                a.createElement(a.Fragment, null, a.createElement(n2, {
                  awemeInfo: (o = A.data.aweme) === null || o === void 0 ? void 0 : o.detail
                }), a.createElement(cf, {
                  awemelogPb: A == null ? void 0 : A.logPb,
                  awemeInfo: (i = A.data.aweme) === null || i === void 0 ? void 0 : i.detail,
                  statusCode: ((u = A.data.aweme) === null || u === void 0 ? void 0 : u.statusCode) || 0,
                  isReoload: A.isReload,
                  defaultMixInfo: A.data.mixInfo,
                  defaultComment: A.data.comment
                }))
          }
          gf.getInitialProps = function() {
            var e = yn(regeneratorRuntime.mark(function r(t) {
              var n, o, i;
              return regeneratorRuntime.wrap(function(l) {
                for (; ; )
                  switch (l.prev = l.next) {
                    case 0:
                      return n = t.ctx,
                          o = null,
                          i = null,
                          Dt() ? (o = Yn(n.request.path),
                              i = Xn(n.request.search)) : (o = Yn(location.pathname),
                              i = Xn(location.search)),
                          l.next = 6,
                          r2(o, i, n);
                    case 6:
                      return l.abrupt("return", l.sent);
                    case 7:
                    case "end":
                      return l.stop()
                  }
              }, r)
            }));
            return function(r) {
              return e.apply(this, arguments)
            }
          }();
          var a2 = gf
              , qo = {
            userVideoSkeleton: "de63d23574118840e58c6b98acf1c5a9-scss",
            userVideo: "_730ce2261aeac50c4dff95097b44491e-scss",
            wrapper: "_1c8e8ed4158abca9b50ff81a98604c00-scss"
          };
          function hf() {
            return a.createElement("div", {
              className: qo.userVideoSkeleton
            }, a.createElement("div", {
              className: qo.userVideo
            }, a.createElement("div", {
              className: qo.wrapper
            }, a.createElement(Xr, null))))
          }
          var o2 = {
            demoComponents: "_744eae510a18e08d7fbdd9dbc93aaf03-scss"
          }
              , i2 = function() {
            var e = (0,
                a.useRef)(null);
            return a.createElement("div", {
              className: o2.demoComponents,
              ref: e
            }, "---UserVideoSkeleton:", a.createElement(hf, null), "---Tag:", a.createElement(Je, null, "\u70ED\u70B9"), a.createElement(Nt, {
              type: "1"
            }), a.createElement(Nt, {
              type: "2"
            }), a.createElement(Nt, {
              type: "3"
            }), a.createElement(Nt, {
              type: "4"
            }), a.createElement(Nt, {
              type: "6"
            }), a.createElement(Nt, {
              type: "7"
            }), a.createElement(Ts, null), a.createElement(ks, null), a.createElement(Yg, null), a.createElement(Ns, null), a.createElement(Xg, null), "---Badge:", a.createElement(an, {
              userInfo: {
                customVerify: "test"
              }
            }), a.createElement(an, {
              userInfo: {
                enterpriseVerifyReason: "test"
              }
            }), "---Button:", a.createElement(Pe, {
              autoFixed: !1,
              onClick: function() {
                ye.info("this is toast", e.current)
              }
            }, "solid"), a.createElement(Pe, {
              theme: "border",
              onClick: function() {
                console.log("click")
              }
            }, "border"), a.createElement(Pe, {
              size: "normal",
              type: "secondary",
              theme: "border",
              onClick: function() {
                console.log("click")
              }
            }, "border"), a.createElement(Pe, {
              type: "secondary"
            }, "secondary"), a.createElement(Pe, {
              type: "ghost"
            }, "ghost"), "---Error basic:", a.createElement(Xt, {
              type: bt.notFound,
              title: "\u8FD9\u662F\u6807\u9898",
              desc: ["\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0", "\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0\u63CF\u8FF0"],
              primaryButtonTitle: "primary",
              primaryButtonAction: function() {
                return console.log("primary")
              },
              secondaryButtonTitle: "secondary",
              secondaryButtonAction: function() {
                return console.log("secondary")
              }
            }), "---NetWorkError:", a.createElement(Xl, null), "---NotFoundError:", a.createElement($t, null), "---ServerError:", a.createElement(wt, null), "---PrivateAccountError:", a.createElement($e, null), "---SearchEmptyError:", a.createElement($l, null), "---Divider:", a.createElement(en, null), "---Loading:", a.createElement(Ge, null), a.createElement(Ge, {
              text: "\u52A0\u8F7D\u4E2D"
            }), "---SiderBar:", a.createElement(Hn, null), "---Avatar:", a.createElement("div", {
              style: {
                display: "flex",
                backgroundColor: "#aaa"
              }
            }, a.createElement(Xe, {
              type: "live"
            }), a.createElement(Xe, {
              type: "extraExtraSmall"
            }), a.createElement(Xe, {
              type: "extraSmall"
            }), a.createElement(Xe, {
              type: "small"
            }), a.createElement(Xe, {
              type: "default"
            })))
          };
          function Er(e) {
            return c2(e) || s2(e) || l2(e) || u2()
          }
          function u2() {
            throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function l2(e, r) {
            if (!!e) {
              if (typeof e == "string")
                return ei(e, r);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              if (t === "Object" && e.constructor && (t = e.constructor.name),
              t === "Map" || t === "Set")
                return Array.from(e);
              if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return ei(e, r)
            }
          }
          function s2(e) {
            if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null)
              return Array.from(e)
          }
          function c2(e) {
            if (Array.isArray(e))
              return ei(e)
          }
          function ei(e, r) {
            (r == null || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
              n[t] = e[t];
            return n
          }
          function yf(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function bf(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      yf(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      yf(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          var Cr = 10
              , f2 = function() {
            var e = bf(regeneratorRuntime.mark(function r(t, n, o, i) {
              var u, l, s, c, d, f;
              return regeneratorRuntime.wrap(function(v) {
                for (; ; )
                  switch (v.prev = v.next) {
                    case 0:
                      return u = 0,
                          l = [],
                          s = o,
                          t.length <= Cr ? (t.slice(0, t.length),
                              l = t.map(function(p) {
                                return Pa({
                                  hotWord: p.word,
                                  offset: s
                                }, i)
                              }),
                              u = 0,
                              s++) : (l = t.slice(n, n + Cr).map(function(p) {
                            return Pa({
                              hotWord: p.word,
                              offset: s
                            }, i)
                          }),
                              n + Cr > t.length ? (s++,
                                  u = n + Cr - t.length,
                                  l = [].concat(Er(l), [t.slice(0, u).map(function(p) {
                                    return Pa({
                                      hotWord: p.word,
                                      offset: s
                                    }, i)
                                  })])) : u = n + Cr),
                          v.next = 6,
                          Promise == null ? void 0 : Promise.allSettled(l);
                    case 6:
                      return c = v.sent,
                          d = [],
                          c.forEach(function(p) {
                            p.status === "fulfilled" && p.value.statusCode === 0 && (d = [].concat(Er(d), Er(p.value.awemeList)),
                                f = p.value.logPb)
                          }),
                          v.abrupt("return", {
                            awemeList: d,
                            wordCur: u,
                            loopCur: s,
                            logPb: f
                          });
                    case 10:
                    case "end":
                      return v.stop()
                  }
              }, r)
            }));
            return function(t, n, o, i) {
              return e.apply(this, arguments)
            }
          }();
          function d2(e) {
            var r = e || {}
                , t = r.wordList
                , n = r.awemeList
                , o = r.wordCur
                , i = r.loopCur
                , u = (0,
                a.useRef)(t || [])
                , l = (0,
                a.useRef)(o || 0)
                , s = (0,
                a.useRef)(i || 0);
            return jt("main_page"),
                a.createElement(a.Fragment, null, a.createElement(Zt, null, a.createElement("title", null, "\u6296\u97F3\u70ED\u70B9\u699C_\u6296\u97F3\u70ED\u95E8\u8BDD\u9898_\u6296\u97F3\u70ED\u95E8\u89C6\u9891\u5927\u5168_\u6296\u97F3"), a.createElement("meta", {
                  name: "description",
                  content: "\u6296\u97F3\u70ED\u70B9\u699C - \u6296\u97F3\u70ED\u95E8\u89C6\u9891\u5185\u5BB9\u5B9E\u65F6\u66F4\u65B0\uFF0C\u6765\u6296\u97F3\uFF0C\u8FFD\u70ED\u70B9\uFF01\u6296\u97F3\u89C6\u9891-\u8BB0\u5F55\u7F8E\u597D\u751F\u6D3B\u7684\u89C6\u9891\u5E73\u53F0"
                }), a.createElement("meta", {
                  name: "keywords",
                  content: "\u6296\u97F3\u70ED\u70B9,\u6296\u97F3\u70ED\u70B9\u699C,\u6296\u97F3\u70ED\u95E8\u8BDD\u9898,\u6296\u97F3\u70ED\u95E8,\u6296\u97F3\u70ED\u95E8\u89C6\u9891,\u6296\u97F3"
                }), a.createElement("link", {
                  rel: "canonical",
                  href: "https://www.douyin.com/hot"
                })), a.createElement(po, {
                  defaultData: n || [],
                  fetchFeeds: bf(regeneratorRuntime.mark(function c() {
                    var d, f, m, v, p, g, h, y, b, _;
                    return regeneratorRuntime.wrap(function(S) {
                      for (; ; )
                        switch (S.prev = S.next) {
                          case 0:
                            if ((u == null || (d = u.current) === null || d === void 0 ? void 0 : d.length) !== 0) {
                              S.next = 11;
                              break
                            }
                            return S.next = 3,
                                r0();
                          case 3:
                            if (f = S.sent,
                                m = f.statusCode,
                                v = f.wordList,
                                p = f.trendingList,
                                !m) {
                              S.next = 9;
                              break
                            }
                            return S.abrupt("return", {
                              statusCode: m
                            });
                          case 9:
                            u.current = [].concat(Er(v), Er(p)),
                                l.current = 0;
                          case 11:
                            return S.next = 13,
                                f2(u.current, l.current, s.current, null);
                          case 13:
                            return g = S.sent,
                                h = g.awemeList,
                                y = g.wordCur,
                                b = g.loopCur,
                                _ = g.logPb,
                                l.current = y,
                                s.current = b,
                                S.abrupt("return", {
                                  statusCode: 0,
                                  awemeList: h,
                                  hasMore: h.length !== 0,
                                  logPb: _
                                });
                          case 21:
                          case "end":
                            return S.stop()
                        }
                    }, c)
                  })),
                  current: "hot"
                }))
          }
          var m2 = d2
              , bn = {
            logContainer: "_45754f2c42931ee87840abb276addb96-scss",
            title: "f4f0e863044c5812e2034da8612cc3fc-scss",
            copyBtn: "_1fca205189171a319665f64a223ce1ce-scss",
            item: "_6f9de2a6f752fffb21b1a98a0e7143c9-scss"
          };
          function v2(e, r) {
            return y2(e) || h2(e, r) || g2(e, r) || p2()
          }
          function p2() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function g2(e, r) {
            if (!!e) {
              if (typeof e == "string")
                return wf(e, r);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              if (t === "Object" && e.constructor && (t = e.constructor.name),
              t === "Map" || t === "Set")
                return Array.from(e);
              if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return wf(e, r)
            }
          }
          function wf(e, r) {
            (r == null || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
              n[t] = e[t];
            return n
          }
          function h2(e, r) {
            var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (t != null) {
              var n = [], o = !0, i = !1, u, l;
              try {
                for (t = t.call(e); !(o = (u = t.next()).done) && (n.push(u.value),
                    !(r && n.length === r)); o = !0)
                  ;
              } catch (s) {
                i = !0,
                    l = s
              } finally {
                try {
                  !o && t.return != null && t.return()
                } finally {
                  if (i)
                    throw l
                }
              }
              return n
            }
          }
          function y2(e) {
            if (Array.isArray(e))
              return e
          }
          function b2(e) {
            var r = e.log;
            return a.createElement("div", {
              className: bn.item
            }, Object.keys(r).map(function(t) {
              return a.createElement("div", {
                key: t
              }, t, ": ", r[t])
            }))
          }
          function w2() {
            var e, r = Wl(), t = v2(r, 2), n = t[0], o = t[1];
            return a.createElement("div", {
              className: bn.logContainer
            }, a.createElement(ss.ql, null, a.createElement("title", null, "\u6296\u97F3 PC \u7248\u672C - log "), a.createElement("meta", {
              name: "description",
              content: "\u6296\u97F3 PC \u7248\u672C - Log"
            })), a.createElement("h1", {
              className: bn.title
            }, "LOG TRACE: \uFF08\u6700\u65B0", me == null || (e = ee) === null || e === void 0 ? void 0 : e.LOG_TRACE_COUNT, "\u6761\u8BB0\u5F55\uFF09", a.createElement(Pe, {
              type: "primary",
              size: "small",
              className: bn.copyBtn,
              onClick: o
            }, "copy")), n.length ? n.map(function(i, u) {
              return a.createElement(b2, {
                log: i,
                key: u
              })
            }) : "-")
          }
          var _2 = w2
              , E2 = {
            pageView: {
              eventName: "page_view",
              params: {
                url: "",
                url_path: "",
                enter_from: ""
              }
            },
            enterPersonalHomepage: {
              eventName: "enter_personal_homepage",
              params: {
                enter_method: "",
                enter_from: ""
              }
            },
            enterPersonalDetail: {
              eventName: "enter_personal_detail",
              params: {
                to_user_id: "",
                is_private: 0,
                enter_method: "",
                enter_from: ""
              }
            },
            changeProfileTab: {
              eventName: "change_profile_tab",
              params: {
                enter_from: "",
                to_user_id: "",
                tab_name: ""
              }
            },
            follow: {
              eventName: "follow",
              params: {
                enter_from: "",
                to_user_id: ""
              }
            },
            unfollow: {
              eventName: "unfollow",
              params: {
                enter_from: "",
                to_user_id: ""
              }
            },
            collectionCoverShow: {
              eventName: "video_cover_show",
              params: {
                author_id: "",
                group_id: "",
                log_pb: "",
                enter_from: "",
                compilation_id: "",
                compilation_video_cnt: 0,
                type: "compilation",
                rank: 0
              }
            },
            collectionCoverClick: {
              eventName: "video_cover_click",
              params: {
                author_id: "",
                group_id: "",
                log_pb: "",
                enter_from: "",
                compilation_id: "",
                compilation_video_cnt: 0,
                type: "compilation",
                rank: 0
              }
            }
          }
              , Ct = new ot(E2)
              , ke = {
            baseInfo: "_2da84af4a13f9ed378341c734a671f7d-scss",
            avatarWrap: "cf401c80d44e90da0baab2068e3edaac-scss",
            tagWrap: "cdfe966a407e789030b16d9d8c266d66-scss",
            badge: "_23043643eb775fcec3bc4c75c34426ed-scss",
            baseItem: "f390983fee6153bf80f046030b8e0c06-scss",
            itemIitle: "ef687334cee7d6b32d3456902b72e29c-scss",
            itemCount: "_9035ad37393516563c608293fdc27a22-scss",
            nameInfo: "_1e8bc5bf754cfef809605f6833209c55-scss",
            nickname: "_8dd93d57eec85530213bd4ab53a890dd-scss",
            douyinId: "f6e7db18685cfb97d85998acb4f9cd56-scss",
            desc: "_550b0cedbc4e51e02407525217d22ca3-scss",
            follow: "_0604942a82a9c66991d95814f914ad17-scss",
            isLive: "_82dfdbfaea91a6669d6e0847ce05f064-scss"
          };
          function C2(e) {
            var r = e.userInfo
                , t = e.isSelf
                , n = r || {}
                , o = n.uid
                , i = n.nickname
                , u = n.avatarUrl
                , l = n.desc
                , s = n.followingCount
                , c = n.mplatformFollowersCount
                , d = n.totalFavorited
                , f = n.followStatus
                , m = n.customVerify
                , v = n.enterpriseVerifyReason
                , p = n.uniqueId
                , g = n.roomId
                , h = n.secret
                , y = n.shortId
                , b = n.followerStatus
                , _ = n.isBlock
                , A = n.isBlocked
                , S = it
                , P = (0,
                a.useContext)(S) || {}
                , I = P.userInfo.isLogin
                , x = P.dispatch
                , T = ac({
              followStatus: f,
              followerStatus: b,
              isLogin: I,
              onLoginSuc: function() {
                return x({
                  type: "updateUserInfo"
                })
              }
            })
                , C = T.changeStatus
                , O = T.type
                , k = T.text
                , B = T.onChangeFollowStatus
                , R = {
              follower: {
                title: "\u7C89\u4E1D",
                count: xe(c)
              },
              following: {
                title: "\u5173\u6CE8",
                count: xe(s)
              },
              like: {
                title: "\u83B7\u8D5E",
                count: xe(d)
              }
            }
                , F = function() {
              B(o)
            }
                , M = function() {
              location.href = sm({
                uniqueId: p,
                shortId: y
              })
            }
                , L = function() {
              return !!((h && I && !t && [1, 2].includes(f) || !h || t) && Boolean(g))
            };
            return (0,
                a.useEffect)(function() {
              C(f, I, b)
            }, [f, I, b]),
                a.createElement(a.Fragment, null, a.createElement("div", {
                  className: ke.baseInfo
                }, a.createElement("div", {
                  className: ke.avatarWrap
                }, a.createElement(Xe, {
                  src: u,
                  alt: "".concat(i, "\u5934\u50CF")
                })), a.createElement("div", {
                  className: ke.tagWrap
                }, [R.follower, R.following, R.like].map(function(W, N) {
                  return a.createElement("div", {
                    key: N,
                    className: ke.baseItem
                  }, a.createElement("div", {
                    className: ke.itemIitle
                  }, W.title), a.createElement("div", {
                    className: ke.itemCount
                  }, W.count))
                }))), a.createElement("div", {
                  className: ke.nameInfo
                }, a.createElement("h1", {
                  className: ke.nickname
                }, a.createElement(ze, {
                  text: i
                })), a.createElement(an, {
                  userInfo: {
                    customVerify: m,
                    enterpriseVerifyReason: v
                  },
                  className: ke.badge
                })), a.createElement("p", {
                  className: ke.douyinId
                }, "\u6296\u97F3\u53F7\uFF1A ", p), a.createElement("p", {
                  className: ke.desc
                }, a.createElement(ze, {
                  text: l
                })), !t && a.createElement(a.Fragment, null, a.createElement(Pe, {
                  onClick: F,
                  className: ke.follow,
                  type: O !== 0 ? "secondary" : "primary"
                }, k), L() && a.createElement(Pe, {
                  onClick: M,
                  className: ke.isLive,
                  theme: "border"
                }, "\u76F4\u64AD\u4E2D")))
          }
          var _f, Ef;
          function ti() {
            return ti = Object.assign || function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }
                ,
                ti.apply(this, arguments)
          }
          function A2(e) {
            return a.createElement("svg", ti({
              width: 20,
              height: 20,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, e), _f || (_f = a.createElement("circle", {
              cx: 10,
              cy: 10,
              r: 10,
              fill: "#D9DAE5",
              fillOpacity: .7
            })), Ef || (Ef = a.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M7.72 13.898a.75.75 0 010-1.06l2.828-2.83L7.72 7.18a.75.75 0 011.06-1.06l3.36 3.358a.75.75 0 010 1.061l-3.36 3.359a.75.75 0 01-1.06 0z",
              fill: "#4F5168"
            })))
          }
          var Cf = A2
              , ge = {
            title: "_98eac1a8ae3cf5aed02645ed721dbf7c-scss",
            count: "_4c73f90d571304b739151c7b2c61306b-scss",
            collectionListWrapper: "_80a842334a1811211997ad5e3c1c7c87-scss",
            collectionList: "acec75baba73207596dbc8725e9addb3-scss",
            collectionItem: "e09c8bd92216061e8d76dbab8391cda0-scss",
            cover: "_01db9cc44f78bbc7cc39f6dc5d34d731-scss",
            content: "_2d51037291c267edaba16e7db6fcc328-scss",
            mixName: "_4287e866a4045b678bac19aebd459099-scss",
            playCount: "_5d54768aeca0f3e4d13d45e13307b0b2-scss",
            totalEpisode: "_82b8792bdffe1467ebf5a6cdea2fd518-scss",
            header: "c647f1d3bf0e8d9659bca456247e9d98-scss",
            pageCtrl: "dc74979f33d630befafa81b783e87609-scss",
            leftPage: "_3a28c8b0e6a6b17f53de1b02f677e363-scss",
            rightPage: "_29a4142a1919a42b06ff90e9a38abc39-scss",
            disabled: "_87f8247a1138b3398b65bce38170b6a7-scss"
          };
          function Af(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          function ri() {
            return ri = Object.assign || function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }
                ,
                ri.apply(this, arguments)
          }
          function Sf(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function S2(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      Sf(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      Sf(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          function At(e, r) {
            return O2(e) || x2(e, r) || P2(e, r) || I2()
          }
          function I2() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function P2(e, r) {
            if (!!e) {
              if (typeof e == "string")
                return If(e, r);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              if (t === "Object" && e.constructor && (t = e.constructor.name),
              t === "Map" || t === "Set")
                return Array.from(e);
              if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return If(e, r)
            }
          }
          function If(e, r) {
            (r == null || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
              n[t] = e[t];
            return n
          }
          function x2(e, r) {
            var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (t != null) {
              var n = [], o = !0, i = !1, u, l;
              try {
                for (t = t.call(e); !(o = (u = t.next()).done) && (n.push(u.value),
                    !(r && n.length === r)); o = !0)
                  ;
              } catch (s) {
                i = !0,
                    l = s
              } finally {
                try {
                  !o && t.return != null && t.return()
                } finally {
                  if (i)
                    throw l
                }
              }
              return n
            }
          }
          function O2(e) {
            if (Array.isArray(e))
              return e
          }
          var R2 = function(r) {
            var t = r.userInfo
                , n = r.cover
                , o = r.mixName
                , i = r.playVV
                , u = r.totalEpisode
                , l = r.mixId
                , s = r.logPb
                , c = r.index
                , d = r.mixVideoHref
                , f = (0,
                ql.Z)(void 0, {}, [])
                , m = At(f, 2)
                , v = m[0]
                , p = m[1]
                , g = (0,
                a.useState)(!1)
                , h = At(g, 2)
                , y = h[0]
                , b = h[1];
            (0,
                a.useEffect)(function() {
              p && !y && (b(!0),
                  Ct.sendLog("collectionCoverShow", {
                    enter_from: X(),
                    compilation_id: l,
                    compilation_video_cnt: u,
                    author_id: t.uid,
                    log_pb: s,
                    rank: c,
                    group_id: ""
                  }))
            }, [p]);
            var _ = function(S) {
              Ct.sendLog("collectionCoverClick", {
                enter_from: X(),
                compilation_id: l,
                compilation_video_cnt: u,
                author_id: t.uid,
                log_pb: s,
                rank: c
              }),
                  u ? location.href = d : (ye.info("\u521B\u4F5C\u8005\u8FD8\u6CA1\u6709\u4E3A\u8FD9\u4E2A\u5408\u96C6\u6DFB\u52A0\u89C6\u9891"),
                      S.preventDefault())
            };
            return a.createElement("div", {
              style: {
                display: "inline-flex"
              },
              ref: v,
              onClick: _
            }, a.createElement("a", {
              className: ge.cover,
              href: d,
              onClick: _,
              title: o
            }, a.createElement(yr, {
              src: n,
              alt: o,
              iconWidth: 30
            })), a.createElement("div", {
              className: ge.content
            }, a.createElement("a", {
              className: ge.mixName,
              href: d,
              onClick: _,
              title: o
            }, o), a.createElement("div", null, a.createElement("p", {
              className: ge.playCount
            }, a.createElement("span", {
              className: ge.count
            }, xe(i)), "\u64AD\u653E"), a.createElement("p", {
              className: ge.totalEpisode
            }, "\u66F4\u65B0\u81F3", a.createElement("span", {
              className: ge.count
            }, u), "\u96C6"))))
          }
              , T2 = function(r) {
            var t = r.userInfo
                , n = r.scrollContainerElRef
                , o = r.handleLoadEnd
                , i = r.handleSetTotal
                , u = r.defaultMixRes
                , l = r.pageName
                , s = (0,
                a.useRef)(null)
                , c = (0,
                Ue.UO)()
                , d = c.id
                , f = (0,
                a.useRef)((u == null ? void 0 : u.cursor) || 0)
                , m = (0,
                a.useRef)((u == null ? void 0 : u.hasMore) || !0)
                , v = (0,
                a.useRef)((u == null ? void 0 : u.total) || void 0)
                , p = (0,
                a.useRef)((u == null ? void 0 : u.logPb) || "")
                , g = (0,
                a.useState)(!1)
                , h = At(g, 2)
                , y = h[0]
                , b = h[1]
                , _ = (0,
                a.useCallback)(S2(regeneratorRuntime.mark(function S() {
              var P, I, x, T, C, O, k;
              return regeneratorRuntime.wrap(function(R) {
                for (; ; )
                  switch (R.prev = R.next) {
                    case 0:
                      if (!m.current) {
                        R.next = 16;
                        break
                      }
                      return R.next = 3,
                          Uu({
                            uid: d,
                            cursor: f.current,
                            count: 6
                          });
                    case 3:
                      return P = R.sent,
                          I = P.data,
                          x = P.cursor,
                          T = P.hasMore,
                          C = P.statusCode,
                          O = P.total,
                          k = P.logPb,
                          f.current = x,
                          m.current = T,
                      typeof O == "number" && v.current === void 0 && i(O),
                          p.current = k,
                          v.current = O,
                          R.abrupt("return", {
                            data: I,
                            cursor: x,
                            hasMore: T,
                            statusCode: C
                          });
                    case 16:
                      return R.abrupt("return", {
                        data: [],
                        hasMore: !1,
                        statusCode: 0
                      });
                    case 17:
                    case "end":
                      return R.stop()
                  }
              }, S)
            })), [])
                , A = (0,
                a.useCallback)(function() {
              window.innerWidth < 1128 ? !y && b(!0) : y && b(!1)
            }, [y]);
            return (0,
                a.useEffect)(function() {
              A();
              var S = oo()(function() {
                A()
              }, 100);
              return window.addEventListener("resize", S),
                  function() {
                    window.removeEventListener("resize", S)
                  }
            }, [A]),
                a.createElement(co, {
                  panelNoMoreData: a.createElement("div", null),
                  handleLoadEnd: o,
                  scrollContainerEl: y ? n.current : void 0,
                  isHorizontal: y,
                  skeletonNum: 0,
                  ref: s,
                  defaultHasMoreFlag: u == null ? void 0 : u.hasMore,
                  defaultStatusCode: u == null ? void 0 : u.statusCode,
                  defaultDataList: u == null ? void 0 : u.data,
                  fetchMoreData: _,
                  containerClassName: ge.collectionList,
                  itemClassName: ge.collectionItem,
                  renderItem: function(P, I) {
                    var x = Xi(P == null ? void 0 : P.mixId, 0, "previous_page=".concat(l));
                    return a.createElement(R2, ri({
                      mixVideoHref: x,
                      userInfo: t
                    }, P, {
                      logPb: p.current,
                      index: I
                    }))
                  }
                })
          };
          function k2(e) {
            var r = e.pageName
                , t = e.userInfo
                , n = e.isSelf
                , o = e.defaultMixRes
                , i = (0,
                a.useMemo)(function() {
              var L = t.isBlock
                  , W = t.isBlocked
                  , N = t.secret;
              return !(L || W || !n && N)
            }, [n, t])
                , u = (0,
                a.useRef)()
                , l = (0,
                a.useState)((o == null ? void 0 : o.total) === 0)
                , s = At(l, 2)
                , c = s[0]
                , d = s[1]
                , f = (0,
                a.useState)(!1)
                , m = At(f, 2)
                , v = m[0]
                , p = m[1]
                , g = (0,
                a.useState)(0)
                , h = At(g, 2)
                , y = h[0]
                , b = h[1]
                , _ = (0,
                a.useState)(void 0)
                , A = At(_, 2)
                , S = A[0]
                , P = A[1]
                , I = (0,
                a.useState)(o == null ? void 0 : o.total)
                , x = At(I, 2)
                , T = x[0]
                , C = x[1]
                , O = (0,
                a.useRef)(0)
                , k = function(W) {
              var N, z;
              if (!(W === "right" && c)) {
                var U = u == null || (N = u.current) === null || N === void 0 ? void 0 : N.clientWidth
                    , re = 256 + 16
                    , J = Math.floor(U / re)
                    , ue = J * re
                    , Q = 0;
                W === "right" && (Q = O.current ? O.current + ue : y + ue),
                W === "left" && (y > 0 && d(!1),
                    O.current ? Q = y <= 0 ? 0 : O.current - ue : Q = y <= 0 ? 0 : y - ue),
                u == null || (z = u.current) === null || z === void 0 || z.scrollTo(Q, 0);
                var Y = u == null ? void 0 : u.current.scrollLeft;
                if (v && Y < Q || S === Y) {
                  var H = Y;
                  S === void 0 && P(H),
                      d(!0),
                      b(Y),
                  O.current || (O.current = Q)
                } else
                  Y < Q ? (O.current || (O.current = Q),
                      b(Y)) : (b(Q),
                      O.current = 0)
              }
            }
                , B = function() {
              return a.createElement("div", {
                className: j()(ge.leftPage, Af({}, ge.disabled, y <= 0)),
                onClick: function() {
                  return k("left")
                }
              }, a.createElement(Cf, null))
            }
                , R = function() {
              return a.createElement("div", {
                className: j()(ge.rightPage, Af({}, ge.disabled, c)),
                onClick: function() {
                  return k("right")
                }
              }, a.createElement(Cf, null))
            }
                , F = function() {
              p(!0)
            }
                , M = function(W) {
              C(W),
              W > 0 && d(!1)
            };
            return i ? a.createElement("div", {
              hidden: !T
            }, a.createElement("div", {
              className: ge.header
            }, a.createElement("div", {
              className: ge.title
            }, "\u5408\u96C6", a.createElement("span", {
              className: ge.count
            }, T)), a.createElement("div", {
              className: ge.pageCtrl
            }, a.createElement(B, null), a.createElement(R, null))), a.createElement("div", {
              className: ge.collectionListWrapper,
              ref: u
            }, a.createElement(T2, {
              pageName: r,
              defaultMixRes: o,
              userInfo: t,
              scrollContainerElRef: u,
              handleLoadEnd: F,
              handleSetTotal: M
            }))) : null
          }
          var Ne = {
            userVideo: "_787337747252a601a979b6885202ecb6-scss",
            wrapper: "a456002e7c59d3b3c47ac9a3f362f6a7-scss",
            tag: "_0187c7e4a16792ec73e6bafffd36c35b-scss",
            tags: "_4b7b866b651e00a3254e7d936ac534fe-scss",
            topLeft: "ee2c9591d3e3a48b6acb04e6fbacef9d-scss",
            bottomRight: "_919bc87433ffd6bae555bd1f83d9a82f-scss",
            videoImg: "_97a0a8fa4fb9eb092882c832463dad24-scss",
            likeCount: "_4c7753003fcad283963e6dd5d4aa5f1e-scss",
            playCount: "_004c885434c9e917fea2b714c5b7680b-scss",
            mask: "_1013367ca093a6ddbeb236c4426a0c35-scss"
          }, Pf;
          function ni() {
            return ni = Object.assign || function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }
                ,
                ni.apply(this, arguments)
          }
          function N2(e) {
            return a.createElement("svg", ni({
              width: 14,
              height: 17,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, e), Pf || (Pf = a.createElement("path", {
              d: "M1.89 13.3V2.963c0-.665 0-1.102.03-1.42.022-.248.056-.33.062-.342a.427.427 0 01.304-.16c.014.002.101.02.319.141.278.155.64.401 1.188.776l7.382 5.048c.432.295.706.483.895.64a.919.919 0 01.19.187.427.427 0 01.004.316.925.925 0 01-.186.192c-.186.16-.456.354-.88.658l-7.383 5.288c-.553.396-.918.656-1.2.822-.22.13-.31.15-.323.153a.427.427 0 01-.308-.159c-.005-.012-.04-.097-.064-.352-.03-.325-.03-.773-.03-1.453z",
              stroke: "#fff",
              strokeWidth: 1.778
            })))
          }
          var L2 = N2, xf, Of;
          function ai() {
            return ai = Object.assign || function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }
                ,
                ai.apply(this, arguments)
          }
          function F2(e) {
            return a.createElement("svg", ai({
              width: 19,
              height: 19,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, e), xf || (xf = a.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M16.533 14.824a.625.625 0 001.25 0 7.391 7.391 0 00-3.371-6.208 5.115 5.115 0 001.113-3.195 5.107 5.107 0 00-1.506-3.636A5.107 5.107 0 0010.384.28c-.815 0-1.594.185-2.316.55a.625.625 0 10.564 1.116 3.896 3.896 0 015.643 3.476 3.862 3.862 0 01-1.165 2.776.756.756 0 00.172 1.203 6.145 6.145 0 013.251 5.424zm-3.119 2.32a.625.625 0 001.25 0 7.19 7.19 0 00-3.262-6.027 4.982 4.982 0 001.071-3.095c0-1.338-.52-2.595-1.466-3.54a4.974 4.974 0 00-3.54-1.467c-1.337 0-2.595.52-3.54 1.466a4.974 4.974 0 00-1.467 3.54 4.974 4.974 0 001.071 3.096A7.19 7.19 0 00.27 17.145a.625.625 0 001.25 0 5.943 5.943 0 013.143-5.247.752.752 0 00.172-1.196 3.729 3.729 0 01-1.125-2.68 3.76 3.76 0 013.757-3.757 3.76 3.76 0 013.756 3.757c0 1.016-.399 1.967-1.124 2.68a.752.752 0 00.171 1.197 5.943 5.943 0 013.144 5.246z",
              fill: "#fff"
            })), Of || (Of = a.createElement("path", {
              d: "M17.783 14.824h.25-.25zm-3.371-6.208l-.196-.156-.171.216.231.15.136-.21zm.7-1.172l-.23-.099.23.099zm-1.093-5.659l-.177.177.177-.177zM8.068.83l.113.223L8.068.83zm-.276.84l-.223.113.223-.113zm.84.276l-.113-.223.113.223zm4.478 6.252l-.175-.179.175.179zm-.218.645l-.247.036.247-.036zm.39.557l-.118.22.118-.22zm-1.88 1.718l-.196-.155-.17.215.23.15.136-.21zm.669-1.125l-.23-.099.23.099zm-1.064-5.51l-.177.176.177-.177zm-7.08 0l.176.176-.176-.177zm-1.064 5.51l.23-.099-.23.099zm.668 1.125l.137.21.229-.15-.17-.214-.196.154zm1.132.781l-.118-.22.118.22zm.389-.554l.247.035-.247-.035zm-.217-.642l.175-.179-.175.179zm5.264 0l-.175-.179.175.179zm-.217.642l.247-.036-.247.036zm.388.554l.118-.22-.118.22zm6.888 3.301a.375.375 0 01-.375-.375h-.5c0 .483.392.875.875.875v-.5zm.375-.375a.375.375 0 01-.375.375v.5a.875.875 0 00.875-.875h-.5zm-3.257-5.998a7.141 7.141 0 013.257 5.998h.5a7.641 7.641 0 00-3.485-6.418l-.272.42zm.606-1.48a4.869 4.869 0 01-.666 1.114l.392.312c.298-.375.543-.787.733-1.23l-.46-.197zm.393-1.925c0 .668-.132 1.315-.393 1.924l.46.197a5.358 5.358 0 00.433-2.121h-.5zm-1.433-3.46a4.858 4.858 0 011.433 3.46h.5c0-1.44-.561-2.795-1.579-3.813l-.354.354zM10.384.53c1.307 0 2.534.509 3.458 1.433l.354-.354A5.358 5.358 0 0010.384.03v.5zm-2.203.523A4.838 4.838 0 0110.384.53v-.5c-.854 0-1.671.194-2.429.577l.226.446zm-.166.504a.375.375 0 01.166-.504L7.955.606a.875.875 0 00-.386 1.176l.446-.226zm.504.166a.375.375 0 01-.504-.166l-.446.226a.875.875 0 001.175.386l-.225-.446zm1.865-.443a4.1 4.1 0 00-1.865.443l.225.446a3.6 3.6 0 011.64-.389v-.5zm4.141 4.142a4.146 4.146 0 00-4.141-4.142v.5a3.646 3.646 0 013.641 3.642h.5zm-1.24 2.954a4.113 4.113 0 001.24-2.954h-.5c0 .985-.387 1.907-1.09 2.597l.35.357zm-.145.432a.508.508 0 01.146-.432l-.35-.357a1.007 1.007 0 00-.291.86l.495-.071zm.26.372a.506.506 0 01-.26-.372l-.495.07c.045.315.239.592.52.743l.235-.441zm3.383 5.645A6.395 6.395 0 0013.4 9.18l-.236.44a5.895 5.895 0 013.12 5.205h.5zM14.04 17.52a.375.375 0 01-.375-.375h-.5c0 .483.392.875.875.875v-.5zm.375-.375a.375.375 0 01-.375.375v.5a.875.875 0 00.875-.875h-.5zm-3.149-5.818a6.94 6.94 0 013.15 5.818h.5a7.439 7.439 0 00-3.376-6.237l-.274.419zm.576-1.434a4.73 4.73 0 01-.635 1.07l.393.31c.284-.362.52-.758.701-1.183l-.46-.197zm.382-1.871c0 .65-.128 1.279-.382 1.871l.46.197c.28-.655.422-1.351.422-2.068h-.5zM10.83 4.658a4.724 4.724 0 011.393 3.364h.5a5.224 5.224 0 00-1.54-3.717l-.353.353zM7.467 3.265c1.27 0 2.464.495 3.363 1.393l.354-.353a5.224 5.224 0 00-3.717-1.54v.5zM4.103 4.658a4.724 4.724 0 013.364-1.393v-.5a5.224 5.224 0 00-3.717 1.54l.353.353zM2.71 8.022c0-1.271.495-2.465 1.393-3.364l-.353-.353a5.224 5.224 0 00-1.54 3.717h.5zm.383 1.871a4.724 4.724 0 01-.383-1.871h-.5c0 .717.143 1.413.423 2.068l.46-.197zm.635 1.07a4.73 4.73 0 01-.635-1.07l-.46.197c.182.425.418.821.702 1.182l.393-.31zM.52 17.145a6.939 6.939 0 013.148-5.818l-.273-.419A7.439 7.439 0 00.02 17.145h.5zm.375.375a.375.375 0 01-.375-.375h-.5c0 .483.391.875.875.875v-.5zm.375-.375a.375.375 0 01-.375.375v.5a.875.875 0 00.875-.875h-.5zm3.275-5.467a6.193 6.193 0 00-3.275 5.467h.5a5.693 5.693 0 013.012-5.027l-.237-.44zm.26-.37a.503.503 0 01-.26.37l.237.44c.279-.15.472-.425.517-.739l-.495-.07zm-.146-.428a.504.504 0 01.145.428l.495.071a1.004 1.004 0 00-.29-.856l-.35.357zM3.46 8.022c0 1.083.426 2.099 1.2 2.858l.35-.357a3.479 3.479 0 01-1.05-2.501h-.5zm4.007-4.007A4.01 4.01 0 003.46 8.022h.5a3.51 3.51 0 013.507-3.507v-.5zm4.006 4.007a4.01 4.01 0 00-4.006-4.007v.5a3.51 3.51 0 013.506 3.507h.5zm-1.199 2.858a3.979 3.979 0 001.2-2.858h-.5a3.48 3.48 0 01-1.05 2.501l.35.357zm-.145.428a.504.504 0 01.145-.428l-.35-.357a1.003 1.003 0 00-.29.856l.495-.07zm.26.37a.503.503 0 01-.26-.37l-.495.071c.046.314.239.59.518.74l.236-.441zm3.275 5.467a6.193 6.193 0 00-3.276-5.467l-.236.44a5.693 5.693 0 013.012 5.027h.5z",
              fill: "#fff"
            })))
          }
          var M2 = F2
              , B2 = function(r) {
            var t = r.awemeInfo
                , n = [{
              key: "isTop",
              El: Ts
            }, {
              key: "hotList",
              El: Ns
            }, {
              key: "relationLabels",
              El: ks
            }, {
              key: "labelFriend",
              El: function() {
                return a.createElement(oe, {
                  viewBox: "0 0 19 19",
                  src: M2
                })
              }
            }, {
              key: "reviewStatus",
              El: Nt
            }]
                , o = []
                , i = [];
            return n.forEach(function(u, l) {
              var s = t == null ? void 0 : t.tag[u.key];
              s && (u.key === "reviewStatus" ? o.push(a.createElement("div", {
                className: Ne.tag,
                key: "".concat(u.key, "_").concat(l)
              }, a.createElement(u.El, {
                type: s
              }))) : u.key === "labelFriend" ? i.push(a.createElement("div", {
                className: Ne.tag,
                key: "".concat(u.key, "_").concat(l)
              }, a.createElement(u.El, null))) : o.push(a.createElement("div", {
                className: Ne.tag,
                key: "".concat(u.key, "_").concat(l)
              }, a.createElement(u.El, null))))
            }),
                a.createElement(a.Fragment, null, Boolean(o.length) && a.createElement("div", {
                  className: j()(Ne.tags, Ne.topLeft)
                }, o), Boolean(i.length) && a.createElement("div", {
                  className: j()(Ne.tags, Ne.bottomRight)
                }, i))
          };
          function D2(e) {
            var r = e.videoHref
                , t = e.className
                , n = e.src
                , o = e.awemeInfo
                , i = e.likeCount
                , u = e.playCount;
            return a.createElement("a", {
              className: j()(Ne.userVideo, t),
              href: r
            }, a.createElement("div", {
              className: Ne.wrapper
            }, Boolean(n) && a.createElement(yr, {
              className: Ne.videoImg,
              src: n,
              iconWidth: 80
            }), a.createElement("div", {
              className: Ne.mask
            }), a.createElement(B2, {
              awemeInfo: o
            }), i !== void 0 && a.createElement("span", {
              className: Ne.likeCount
            }, a.createElement(Es, null), a.createElement("span", null, xe(i))), u !== void 0 && a.createElement("div", {
              className: Ne.playCount
            }, a.createElement(L2, null), a.createElement("span", null, xe(u)))))
          }
          var Rf;
          function oi() {
            return oi = Object.assign || function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }
                ,
                oi.apply(this, arguments)
          }
          function j2(e) {
            return a.createElement("svg", oi({
              width: 14,
              height: 16,
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, e), Rf || (Rf = a.createElement("path", {
              opacity: .8,
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M2.824 5.647h-.942C.842 5.647 0 6.49 0 7.53v6.589C0 15.158.843 16 1.882 16h9.412c1.04 0 1.883-.843 1.883-1.882V7.529c0-1.04-.843-1.882-1.883-1.882h-.941V3.765a3.765 3.765 0 10-7.53 0v1.882zm1.882 0H8.47V3.765a1.882 1.882 0 10-3.765 0v1.882z",
              fill: "#A9AAB7"
            })))
          }
          var U2 = j2
              , Qe = {
            container: "_927ae3b0dd790b5b62eae61c7d2fa0bc-scss",
            videos: "_411d39e9802ae4571ae23446263bb6bc-scss",
            videoWrapper: "e0fe394964bbd9fef7d310c80353afdd-scss",
            tabs: "f22cc9873556867763db1941010f3a11-scss",
            tabItem: "b5f750a8a8d56e09f7dc2c532c887b6f-scss",
            count: "_03811320ee25b81d1c705fae532572ec-scss",
            active: "_7f14685e2f4201f7b65e97b005c61935-scss",
            tabIcon: "_54961f872a8317c9c64c0e5c6fd293e8-scss",
            scrollListWrapper: "bdf04d302a5afa95cb44df379dbedab9-scss",
            errorCt: "_81414a41f58f6640885ce7ff1cdbd784-scss"
          };
          function Tf(e, r) {
            return z2(e) || V2(e, r) || W2(e, r) || H2()
          }
          function H2() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function W2(e, r) {
            if (!!e) {
              if (typeof e == "string")
                return kf(e, r);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              if (t === "Object" && e.constructor && (t = e.constructor.name),
              t === "Map" || t === "Set")
                return Array.from(e);
              if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return kf(e, r)
            }
          }
          function kf(e, r) {
            (r == null || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
              n[t] = e[t];
            return n
          }
          function V2(e, r) {
            var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (t != null) {
              var n = [], o = !0, i = !1, u, l;
              try {
                for (t = t.call(e); !(o = (u = t.next()).done) && (n.push(u.value),
                    !(r && n.length === r)); o = !0)
                  ;
              } catch (s) {
                i = !0,
                    l = s
              } finally {
                try {
                  !o && t.return != null && t.return()
                } finally {
                  if (i)
                    throw l
                }
              }
              return n
            }
          }
          function z2(e) {
            if (Array.isArray(e))
              return e
          }
          function ii() {
            return ii = Object.assign || function(e) {
              for (var r = 1; r < arguments.length; r++) {
                var t = arguments[r];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
              }
              return e
            }
                ,
                ii.apply(this, arguments)
          }
          function Nf(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function K2(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      Nf(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      Nf(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          function G2(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          var Q2 = function(r) {
            var t = r.children
                , n = r.title
                , o = r.tabKey
                , i = r.count
                , u = r.handleClickTab
                , l = r.currentTab
                , s = r.icon;
            return a.createElement("div", {
              onClick: function() {
                return u(o)
              },
              className: j()(Qe.tabItem, G2({}, Qe.active, l === o))
            }, n, a.createElement("span", {
              className: Qe.count
            }, i !== void 0 ? i : ""), t, s)
          }
              , Y2 = function(r) {
            var t = r.isSelf
                , n = r.currentTab
                , o = r.tabKey
                , i = r.userInfo
                , u = r.disabled
                , l = r.onTotalEnd
                , s = r.onShowDefaultTotal
                , c = r.defaultPostRes
                , d = r.pageName
                , f = (0,
                Ue.UO)()
                , m = f.id
                , v = (0,
                a.useRef)(null)
                , p = (0,
                a.useRef)((c == null ? void 0 : c.cursor) || 0)
                , g = it
                , h = (0,
                a.useContext)(g) || {}
                , y = h.userInfo
                , b = y.isLogin
                , _ = (0,
                a.useRef)(!0)
                , A = function() {
              var x = K2(regeneratorRuntime.mark(function T() {
                var C, O, k, B, R, F, M, L;
                return regeneratorRuntime.wrap(function(N) {
                  for (; ; )
                    switch (N.prev = N.next) {
                      case 0:
                        if (o !== "post") {
                          N.next = 6;
                          break
                        }
                        return N.next = 3,
                            Qu({
                              userId: m,
                              maxCursor: p.current
                            });
                      case 3:
                        N.t0 = N.sent,
                            N.next = 9;
                        break;
                      case 6:
                        return N.next = 8,
                            Zm({
                              userId: m,
                              maxCursor: p.current
                            });
                      case 8:
                        N.t0 = N.sent;
                      case 9:
                        return C = N.t0,
                            O = C.data,
                            k = C.maxCursor,
                            B = C.hasMore,
                            R = C.statusCode,
                            F = O.filter(function(z) {
                              return !z.tag.inReviewing
                            }),
                        R || (p.current = k),
                        o === "post" && (B ? s() : (v == null || (M = v.current) === null || M === void 0 ? void 0 : M.getTotal) && l((v == null || (L = v.current) === null || L === void 0 ? void 0 : L.getTotal()) + F.length)),
                            N.abrupt("return", {
                              data: F,
                              maxCursor: k,
                              hasMore: B,
                              statusCode: R
                            });
                      case 18:
                      case "end":
                        return N.stop()
                    }
                }, T)
              }));
              return function() {
                return x.apply(this, arguments)
              }
            }()
                , S = function(T) {
              return T.filter(function(C) {
                var O;
                return !(C != null && (O = C.tag) !== null && O !== void 0 && O.isStory) || C.awemeType === 68
              })
            }
                , P = function() {
              return i.isBlock ? a.createElement($e, {
                title: "\u4F60\u5DF2\u7ECF\u62C9\u9ED1\u5BF9\u65B9\uFF0C\u65E0\u6CD5\u67E5\u770B\u5176\u4F5C\u54C1",
                desc: " "
              }) : i.isBlocked ? a.createElement($e, {
                title: "\u7531\u4E8E\u5BF9\u65B9\u7684\u9690\u79C1\u8BBE\u7F6E\uFF0C\u4F60\u65E0\u6CD5\u67E5\u770BTA\u7684\u4F5C\u54C1",
                desc: " "
              }) : null
            }
                , I = (0,
                a.useMemo)(function() {
              return i.isBlock || i.isBlocked ? a.createElement("div", {
                className: Qe.errorCt
              }, P()) : u ? a.createElement("div", {
                className: Qe.errorCt
              }, u) : a.createElement(co, {
                ref: v,
                defaultDataList: (c == null ? void 0 : c.data) || [],
                defaultHasMoreFlag: (c == null ? void 0 : c.hasMore) || !0,
                defaultStatusCode: (c == null ? void 0 : c.statusCode) || 0,
                pause: n !== o,
                dataFilter: S,
                fetchMoreData: A,
                containerClassName: Qe.videos,
                itemClassName: Qe.videoWrapper,
                panelNoData: a.createElement($l, {
                  title: "\u65E0\u4F5C\u54C1"
                }),
                skeletonNum: 9,
                renderSkeleton: function() {
                  return a.createElement(hf, null)
                },
                renderItem: function(T) {
                  var C, O, k, B = T == null || (C = T.video) === null || C === void 0 ? void 0 : C.cover, R = T == null || (O = T.stats) === null || O === void 0 ? void 0 : O.diggCount, F = T == null || (k = T.stats) === null || k === void 0 ? void 0 : k.playCount, M = {};
                  t && o === "post" ? M.playCount = F : M.likeCount = R;
                  var L = ir(T == null ? void 0 : T.awemeId, "previous_page=".concat(d));
                  return a.createElement(D2, ii({
                    awemeInfo: T,
                    src: B
                  }, M, {
                    videoHref: L
                  }))
                }
              })
            }, [n, d, t, i.isBlock, i.isBlocked]);
            return (0,
                a.useEffect)(function() {
              var x;
              if (_.current) {
                _.current = !1;
                return
              }
              if (p.current = 0,
              v != null && (x = v.current) !== null && x !== void 0 && x.reset) {
                var T, C;
                v == null || (T = v.current) === null || T === void 0 || T.reset(),
                v == null || (C = v.current) === null || C === void 0 || C.reload()
              }
            }, [b]),
                a.createElement("div", {
                  style: {
                    display: n !== o ? "none" : "flex"
                  },
                  className: Qe.scrollListWrapper
                }, I)
          };
          function X2(e) {
            var r = e.pageName
                , t = e.isSelf
                , n = e.userInfo
                , o = n === void 0 ? {} : n
                , i = e.defaultPostRes
                , u = (0,
                a.useState)("post")
                , l = Tf(u, 2)
                , s = l[0]
                , c = l[1]
                , d = !t && !o.showFavoriteList || Boolean(t && o.favoritePermission)
                , f = (0,
                a.useState)((o == null ? void 0 : o.awemeCount) || 0)
                , m = Tf(f, 2)
                , v = m[0]
                , p = m[1]
                , g = [{
              title: "\u4F5C\u54C1",
              key: "post",
              defaultData: i,
              count: v
            }, {
              title: "\u559C\u6B22",
              key: "like",
              disabled: !t && d && a.createElement($e, {
                title: "\u559C\u6B22\u5185\u5BB9\u4E0D\u53EF\u89C1",
                desc: "\u8BE5\u7528\u6237\u5DF2\u5C06\u559C\u6B22\u8BBE\u4E3A\u79C1\u5BC6"
              }),
              count: !d && o.favoritingCount,
              icon: d && a.createElement("div", {
                className: Qe.tabIcon
              }, a.createElement(U2, null))
            }]
                , h = function(b) {
              Ct.sendLog("changeProfileTab", {
                enter_from: X(),
                tab_name: b,
                to_user_id: o == null ? void 0 : o.uid
              }),
                  c(b)
            };
            return a.createElement("div", {
              className: Qe.container
            }, a.createElement("div", {
              className: Qe.tabs
            }, g.map(function(y) {
              var b = y.title
                  , _ = y.key
                  , A = y.count
                  , S = y.icon;
              return a.createElement(Q2, {
                key: _,
                title: b,
                count: A,
                tabKey: _,
                handleClickTab: h,
                currentTab: s,
                icon: S
              })
            })), g.map(function(y) {
              var b = y.key
                  , _ = y.disabled
                  , A = y.defaultData;
              return a.createElement(Y2, {
                pageName: r,
                isSelf: t,
                disabled: _,
                defaultPostRes: A,
                key: b,
                tabKey: b,
                onTotalEnd: function(P) {
                  P < 10 && p(P)
                },
                onShowDefaultTotal: function() {
                  p(o.awemeCount)
                },
                currentTab: s,
                userInfo: o
              })
            }))
          }
          var ve = {
            container: "f60b07af0157228d718f00a32f3449bd-scss",
            leftContainer: "_290cf15d030cac8ae38a7b3f8189ba36-scss",
            userInfoWrapper: "e6f3c9aceb6c59ff2df1cef17c3959f3-scss",
            collectionsWrapper: "f6d13c219e462d0841179413ab5dc70b-scss",
            leftPlaceHolderRight: "_7ac642bbbb7f4391bb963e0b784c7f3b-scss",
            leftPlaceHolderLeft: "_1c6908067423cb7b36cb803b6494590e-scss",
            rightPlaceHolderRight: "b7c10213b08e9ee1ce926dc487856dd6-scss",
            rightContainer: "_67f6d320f692f9e5f19d66f4c8a1ecf9-scss",
            errorRight: "ebcd6ef6f36a906578f37f40864acf3b-scss",
            errorWrapper: "_80b9072639cdc8b0c68763fe4865a889-scss",
            errorContent: "_6cf880d84b97239d69aaeb6021862aa1-scss",
            notFound: "af56f7cbe109efc8ef81623d2e0d6a1f-scss",
            errorMarginRight: "_8b9de4d7bc417ce86e6390fe6828620b-scss",
            loading: "a538e9cbe0670751a0ce3d35f622d122-scss"
          };
          function $2(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          function lt(e, r) {
            return eb(e) || q2(e, r) || J2(e, r) || Z2()
          }
          function Z2() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function J2(e, r) {
            if (!!e) {
              if (typeof e == "string")
                return Lf(e, r);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              if (t === "Object" && e.constructor && (t = e.constructor.name),
              t === "Map" || t === "Set")
                return Array.from(e);
              if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return Lf(e, r)
            }
          }
          function Lf(e, r) {
            (r == null || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
              n[t] = e[t];
            return n
          }
          function q2(e, r) {
            var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (t != null) {
              var n = [], o = !0, i = !1, u, l;
              try {
                for (t = t.call(e); !(o = (u = t.next()).done) && (n.push(u.value),
                    !(r && n.length === r)); o = !0)
                  ;
              } catch (s) {
                i = !0,
                    l = s
              } finally {
                try {
                  !o && t.return != null && t.return()
                } finally {
                  if (i)
                    throw l
                }
              }
              return n
            }
          }
          function eb(e) {
            if (Array.isArray(e))
              return e
          }
          function Ff(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function ui(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      Ff(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      Ff(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          function tb(e, r, t, n) {
            var o, i, u, l, s, c = {
              isEmptyUser: !1,
              isUserCanceled: !1,
              isSelf: !1,
              userInfo: {},
              statusCode: 0,
              showErrorRight: !1
            };
            if (r && e && t === e.secUid)
              c.userInfo = e,
                  c.isSelf = !0,
                  c.statusCode = 0;
            else {
              var d = n || {}
                  , f = d.user
                  , m = d.statusCode;
              m && (c.statusCode = m),
              (!f || !f.uid || f.secUid !== t) && (c.isEmptyUser = !0),
              f != null && f.userCanceled && (c.isUserCanceled = !0),
                  c.userInfo = f,
                  c.isSelf = !1
            }
            return !c.isSelf && c !== null && c !== void 0 && (o = c.userInfo) !== null && o !== void 0 && o.secret && (c == null || (i = c.userInfo) === null || i === void 0 ? void 0 : i.followStatus) !== 1 && (c == null || (u = c.userInfo) === null || u === void 0 ? void 0 : u.followStatus) !== 2 || c != null && (l = c.userInfo) !== null && l !== void 0 && l.isBlock || c != null && (s = c.userInfo) !== null && s !== void 0 && s.isBlocked ? c.showErrorRight = !0 : c.showErrorRight = !1,
                c
          }
          function rb(e) {
            return li.apply(this, arguments)
          }
          function li() {
            return li = ui(regeneratorRuntime.mark(function e(r) {
              var t, n, o, i, u, l, s, c, d, f = arguments;
              return regeneratorRuntime.wrap(function(v) {
                for (; ; )
                  switch (v.prev = v.next) {
                    case 0:
                      return t = f.length > 1 && f[1] !== void 0 ? f[1] : null,
                          n = {
                            statusCod: -1
                          },
                          o = {
                            uid: r,
                            user: {
                              isEmptyUser: !1,
                              isUserCanceled: !1,
                              isSelf: void 0,
                              userInfo: {},
                              statusCode: 0
                            },
                            mix: null,
                            post: null
                          },
                          v.next = 5,
                          Promise.allSettled([Yu(r, t), Uu({
                            uid: r,
                            cursor: 0,
                            count: 6
                          }, t), Qu({
                            userId: r,
                            maxCursor: 0
                          }, t)]);
                    case 5:
                      return i = v.sent,
                          u = lt(i, 3),
                          l = u[0],
                          s = u[1],
                          c = u[2],
                          d = l.status !== "fulfilled" ? n : l.value,
                          o.mix = s.status !== "fulfilled" ? n : s.value,
                          o.post = c.status !== "fulfilled" ? n : c.value,
                          o.user = d,
                      o.post.statusCode !== 0 && (o.post = null),
                      o.mix.statusCode !== 0 && (o.mix = null),
                      o.user.statusCode !== 0 && (o.user = null),
                          v.abrupt("return", o);
                    case 18:
                    case "end":
                      return v.stop()
                  }
              }, e)
            })),
                li.apply(this, arguments)
          }
          function nb(e) {
            var r = e.userInfo
                , t = e.uid
                , n = r || {}
                , o = n.nickname
                , i = o === void 0 ? "" : o
                , u = n.desc
                , l = u === void 0 ? "" : u
                , s = n.uniqueId
                , c = s === void 0 ? "" : s
                , d = n.followerCount
                , f = d === void 0 ? "" : d
                , m = n.totalFavorited
                , v = m === void 0 ? "" : m;
            return a.createElement(Zt, null, a.createElement("title", null, i, "\u7684\u4E2A\u4EBA\u4E3B\u9875 - \u6296\u97F3"), a.createElement("meta", {
              name: "description",
              content: "".concat(i, "\uFF1A").concat(l, "\u3002").concat(i, "\u5165\u9A7B\u6296\u97F3\uFF0CTA\u7684\u6296\u97F3\u53F7\u662F").concat(c, "\uFF0C\u5DF2\u6709").concat(f, "\u4E2A\u7C89\u4E1D\uFF0C\u6536\u83B7\u4E86").concat(v, "\u4E2A\u559C\u6B22\uFF0C\u6B22\u8FCE\u89C2\u770B").concat(i, "\u5728\u6296\u97F3\u53D1\u5E03\u7684\u89C6\u9891\u4F5C\u54C1\uFF0C\u6765\u6296\u97F3\uFF0C\u8BB0\u5F55\u7F8E\u597D\u751F\u6D3B\uFF01")
            }), a.createElement("meta", {
              name: "keywords",
              content: "".concat(i, ",").concat(i, "\u6296\u97F3,").concat(i, "\u5C0F\u89C6\u9891,").concat(i, "\u77ED\u89C6\u9891,").concat(i, "\u6296\u97F3\u77ED\u89C6\u9891,").concat(i, "\u6296\u97F3\u76F4\u64AD,").concat(i, "\u6296\u97F3\u5B98\u7F51")
            }), a.createElement("link", {
              rel: "canonical",
              href: "https://www.douyin.com/user/".concat(t)
            }))
          }
          function Mf(e) {
            var r = (0,
                Ue.UO)()
                , t = r.id
                , n = it
                , o = e || {}
                , i = o.user
                , u = o.mix
                , l = o.post
                , s = (0,
                a.useContext)(n) || {}
                , c = s.userInfo
                , d = c.isLogin
                , f = c.statusCode
                , m = (0,
                a.useMemo)(function() {
              return tb(c == null ? void 0 : c.info, d, t, i)
            }, [t, c, d, i])
                , v = (0,
                a.useState)(m.isEmptyUser)
                , p = lt(v, 2)
                , g = p[0]
                , h = p[1]
                , y = (0,
                a.useState)(m.isUserCanceled)
                , b = lt(y, 2)
                , _ = b[0]
                , A = b[1]
                , S = (0,
                a.useState)(m.isSelf)
                , P = lt(S, 2)
                , I = P[0]
                , x = P[1]
                , T = (0,
                a.useState)(m.userInfo)
                , C = lt(T, 2)
                , O = C[0]
                , k = C[1]
                , B = (0,
                a.useState)(m.statusCode)
                , R = lt(B, 2)
                , F = R[0]
                , M = R[1]
                , L = (0,
                a.useState)(m.showErrorRight)
                , W = lt(L, 2)
                , N = W[0]
                , z = W[1]
                , U = (0,
                a.useState)("")
                , re = lt(U, 2)
                , J = re[0]
                , ue = re[1]
                , Q = (0,
                a.useState)(!0)
                , Y = lt(Q, 2)
                , H = Y[0]
                , Ie = Y[1];
            if ((0,
                a.useEffect)(function() {
              if (!H) {
                var $ = O == null ? void 0 : O.uid
                    , pe = Number(O == null ? void 0 : O.secret);
                $ && I ? (jt("personal_homepage"),
                    ue("personal_homepage"),
                    Ct.sendLog("enterPersonalHomepage", {
                      urlParamList: ["enter_from", "enter_method"]
                    }),
                    Ct.sendLog("pageView", {
                      enter_from: X(),
                      url: location.href,
                      url_path: location.pathname
                    })) : $ && I !== void 0 && !I && (jt("others_homepage"),
                    ue("others_homepage"),
                    Ct.sendLog("enterPersonalDetail", {
                      urlParamList: ["enter_from", "enter_method", "log_pb", "group_id", "author_id"],
                      to_user_id: $,
                      is_private: pe
                    }),
                    Ct.sendLog("pageView", {
                      enter_from: X(),
                      url: location.href,
                      url_path: location.pathname
                    }))
              }
            }, [I, H]),
                (0,
                    a.useEffect)(function() {
                  if (!H || (i == null ? void 0 : i.statusCode) !== 0) {
                    var $ = !1;
                    if (d === void 0)
                      return;
                    var pe = function() {
                      var et = ui(regeneratorRuntime.mark(function Ye() {
                        var st, V, K, _e;
                        return regeneratorRuntime.wrap(function(ne) {
                          for (; ; )
                            switch (ne.prev = ne.next) {
                              case 0:
                                if (!(d && c !== null && c !== void 0 && c.info && t === (c == null || (st = c.info) === null || st === void 0 ? void 0 : st.secUid) && !$)) {
                                  ne.next = 6;
                                  break
                                }
                                k(c == null ? void 0 : c.info),
                                    x(!0),
                                    M(f),
                                    ne.next = 20;
                                break;
                              case 6:
                                if ($) {
                                  ne.next = 20;
                                  break
                                }
                                return ne.next = 9,
                                    Yu(t);
                              case 9:
                                if (ne.t0 = ne.sent,
                                    ne.t0) {
                                  ne.next = 12;
                                  break
                                }
                                ne.t0 = {};
                              case 12:
                                V = ne.t0,
                                    K = V.user,
                                    _e = V.statusCode,
                                    !K || !K.uid || K.secUid !== t ? h(!0) : h(!1),
                                    K != null && K.userCanceled ? A(!0) : A(!1),
                                    M(_e),
                                    k(K),
                                    x(!1);
                              case 20:
                              case "end":
                                return ne.stop()
                            }
                        }, Ye)
                      }));
                      return function() {
                        return et.apply(this, arguments)
                      }
                    }();
                    return pe(),
                        function() {
                          return $ = !0
                        }
                  }
                }, [c, H]),
                (0,
                    a.useEffect)(function() {
                  (!H || (i == null ? void 0 : i.statusCode) !== 0) && (!I && O && O.secret && O.followStatus !== 1 && O.followStatus !== 2 || O != null && O.isBlock || O != null && O.isBlocked ? z(!0) : z(!1)),
                      Ie(!1)
                }, [I, H]),
            F === he.ERROR_USER_FORBIDEN)
              return a.createElement(wt, {
                title: "\u8D26\u53F7\u88AB\u5C01\u7981",
                desc: " "
              });
            if (F !== 0 && (F === he.ERROR_USER_NOTFOUND || F === he.ERROR_INVALID_PARAM))
              return a.createElement($t, {
                title: "\u7528\u6237\u4E0D\u5B58\u5728",
                desc: " "
              });
            if (F)
              return a.createElement(wt, {
                desc: "\u8BF7\u7A0D\u540E\u91CD\u8BD5"
              });
            var we = function(pe) {
              var et = pe.children;
              return a.createElement("div", {
                className: ve.errorWrapper
              }, a.createElement("div", {
                className: ve.errorContent
              }, et))
            }
                , qe = function(pe) {
              return d === void 0 ? a.createElement(Ge, null) : !I && pe.secret && pe.followStatus !== 1 && pe.followStatus !== 2 ? a.createElement("div", {
                className: j()(ve.rightContainer, ve.errorRight)
              }, a.createElement(we, null, a.createElement($e, null))) : pe.isBlock ? a.createElement("div", {
                className: j()(ve.rightContainer, ve.errorRight)
              }, a.createElement(we, null, a.createElement($e, {
                title: "\u4F60\u5DF2\u7ECF\u62C9\u9ED1\u5BF9\u65B9\uFF0C\u65E0\u6CD5\u67E5\u770B\u5176\u4F5C\u54C1",
                desc: " "
              }))) : pe.isBlocked ? a.createElement("div", {
                className: j()(ve.rightContainer, ve.errorRight)
              }, a.createElement(we, null, a.createElement($e, {
                title: "\u7531\u4E8E\u5BF9\u65B9\u7684\u9690\u79C1\u8BBE\u7F6E\uFF0C\u4F60\u65E0\u6CD5\u67E5\u770BTA\u7684\u4F5C\u54C1",
                desc: " "
              }))) : a.createElement("div", {
                className: ve.rightContainer
              }, a.createElement(X2, {
                pageName: J,
                isSelf: I,
                userInfo: pe,
                defaultPostRes: l
              }), a.createElement("div", {
                className: ve.rightPlaceHolderRight
              }))
            };
            return a.createElement(a.Fragment, null, a.createElement(nb, {
              userInfo: O,
              uid: t
            }), O != null && O.uid ? a.createElement("div", {
              className: j()(ve.container, $2({}, ve.errorMarginRight, N))
            }, g || _ ? a.createElement("div", {
              className: ve.notFound
            }, a.createElement($t, {
              title: "\u7528\u6237\u4E0D\u5B58\u5728",
              desc: " "
            })) : a.createElement(a.Fragment, null, a.createElement("div", {
              className: ve.leftPlaceHolderLeft
            }), a.createElement("div", {
              className: ve.leftContainer
            }, a.createElement("div", {
              className: ve.userInfoWrapper
            }, a.createElement(C2, {
              userInfo: O,
              isSelf: I
            })), a.createElement("div", {
              className: ve.collectionsWrapper
            }, a.createElement(k2, {
              pageName: J,
              userInfo: O,
              isSelf: I,
              defaultMixRes: u
            }))), a.createElement("div", {
              className: ve.leftPlaceHolderRight
            }), qe(O))) : a.createElement(Ge, {
              text: "\u6570\u636E\u52A0\u8F7D\u4E2D",
              className: ve.loading
            }))
          }
          Mf.getInitialProps = function() {
            var e = ui(regeneratorRuntime.mark(function r(t) {
              var n, o;
              return regeneratorRuntime.wrap(function(u) {
                for (; ; )
                  switch (u.prev = u.next) {
                    case 0:
                      return n = t.ctx,
                          o = null,
                          Dt() ? o = Zi(n.request.path) : o = Zi(location.pathname),
                          u.next = 5,
                          rb(o, n);
                    case 5:
                      return u.abrupt("return", u.sent);
                    case 6:
                    case "end":
                      return u.stop()
                  }
              }, r)
            }));
            return function(r) {
              return e.apply(this, arguments)
            }
          }();
          var ab = Mf;
          function Bf(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
              })),
                  t.push.apply(t, n)
            }
            return t
          }
          function wn(e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r] != null ? arguments[r] : {};
              r % 2 ? Bf(Object(t), !0).forEach(function(n) {
                ob(e, n, t[n])
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Bf(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              })
            }
            return e
          }
          function ob(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          function Df(e, r) {
            return sb(e) || lb(e, r) || ub(e, r) || ib()
          }
          function ib() {
            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
          }
          function ub(e, r) {
            if (!!e) {
              if (typeof e == "string")
                return jf(e, r);
              var t = Object.prototype.toString.call(e).slice(8, -1);
              if (t === "Object" && e.constructor && (t = e.constructor.name),
              t === "Map" || t === "Set")
                return Array.from(e);
              if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return jf(e, r)
            }
          }
          function jf(e, r) {
            (r == null || r > e.length) && (r = e.length);
            for (var t = 0, n = new Array(r); t < r; t++)
              n[t] = e[t];
            return n
          }
          function lb(e, r) {
            var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (t != null) {
              var n = [], o = !0, i = !1, u, l;
              try {
                for (t = t.call(e); !(o = (u = t.next()).done) && (n.push(u.value),
                    !(r && n.length === r)); o = !0)
                  ;
              } catch (s) {
                i = !0,
                    l = s
              } finally {
                try {
                  !o && t.return != null && t.return()
                } finally {
                  if (i)
                    throw l
                }
              }
              return n
            }
          }
          function sb(e) {
            if (Array.isArray(e))
              return e
          }
          function Uf(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function si(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      Uf(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      Uf(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          var cb = function() {
            var e = si(regeneratorRuntime.mark(function r(t) {
              var n, o, i, u, l, s, c, d, f, m, v, p, g, h, y, b = arguments;
              return regeneratorRuntime.wrap(function(A) {
                for (; ; )
                  switch (A.prev = A.next) {
                    case 0:
                      return n = b.length > 1 && b[1] !== void 0 ? b[1] : null,
                          o = {
                            statusCod: -1
                          },
                          i = {
                            awemeId: t,
                            logPb: "",
                            aweme: null,
                            comment: null,
                            mixInfo: null
                          },
                          A.prev = 3,
                          A.next = 6,
                          Promise.allSettled([Fu({
                            awemeId: t
                          }, n), fa({
                            awemeId: t,
                            cursor: 0,
                            count: 20
                          }, n)]);
                    case 6:
                      if (d = A.sent,
                          f = Df(d, 2),
                          m = f[0],
                          v = f[1],
                          i.aweme = m.status !== "fulfilled" ? o : m.value,
                          i.comment = v.status !== "fulfilled" ? o : v.value,
                          i.logPb = ((u = i.aweme) === null || u === void 0 ? void 0 : u.logPb) || "",
                          !((l = i.aweme) !== null && l !== void 0 && (s = l.detail) !== null && s !== void 0 && (c = s.mixInfo) !== null && c !== void 0 && c.mixId)) {
                        A.next = 19;
                        break
                      }
                      return p = i.aweme.detail.mixInfo,
                          g = p.mixId,
                          h = p.totalEpisode,
                          y = p.currentEpisode,
                          A.next = 17,
                          _a({
                            mixId: g,
                            totalEpisode: h,
                            currentEpisode: y,
                            count: 6
                          }, n);
                    case 17:
                      i.mixInfo = A.sent,
                          i.mixInfo.logPb = i.logPb;
                    case 19:
                      return i.aweme.statusCode !== 0 && (i.aweme = null),
                          A.abrupt("return", i);
                    case 23:
                      A.prev = 23,
                          A.t0 = A.catch(3),
                          console.log("Video GetPage Data Error:", A.t0);
                    case 26:
                      return A.abrupt("return", i);
                    case 27:
                    case "end":
                      return A.stop()
                  }
              }, r, null, [[3, 23]])
            }));
            return function(t) {
              return e.apply(this, arguments)
            }
          }();
          function fb(e) {
            var r = e.awemeInfo
                , t = e.awemeId
                , n = (r == null ? void 0 : r.desc) || "\u89C6\u9891"
                , o = (r == null ? void 0 : r.authorInfo) || {}
                , i = o.nickname
                , u = i === void 0 ? "" : i
                , l = o.createTime
                , s = l === void 0 ? Date.now() / 1e3 : l
                , c = o.totalFavorited
                , d = c === void 0 ? 0 : c
                , f = pt()(s * 1e3).format("YYYY-MM-DD") || "";
            return a.createElement(Zt, null, a.createElement("title", null, " ", n.substr(0, 35), " - \u6296\u97F3"), a.createElement("meta", {
              name: "keywords",
              content: "\u6296\u97F3,\u6296\u97F3\u77ED\u89C6\u9891,\u6296\u97F3\u5B98\u7F51"
            }), a.createElement("meta", {
              name: "description",
              content: "".concat(n, " - ").concat(u, "\u4E8E").concat(f, "\u53D1\u5E03\u5728\u6296\u97F3\uFF0C\u5DF2\u7ECF\u6536\u83B7\u4E86").concat(xe(d), "\u4E2A\u559C\u6B22\uFF0C\u6765\u6296\u97F3\uFF0C\u8BB0\u5F55\u7F8E\u597D\u751F\u6D3B\uFF01")
            }), a.createElement("link", {
              rel: "canonical",
              href: "https://www.douyin.com/video/".concat(t)
            }))
          }
          function Hf(e) {
            var r, t, n, o, i, u, l, s, c = (e == null || (r = e.match) === null || r === void 0 || (t = r.params) === null || t === void 0 ? void 0 : t.id) || "", d = (n = c.split("?")) === null || n === void 0 ? void 0 : n[0], f = e || {}, m = f.aweme, v = f.comment, p = f.mixInfo, g = f.logPb, h = f.awemeId, y = (0,
                a.useRef)(!0), b = y.current && d === h, _ = (0,
                a.useState)({
              isReload: !0,
              logPb: g || "",
              data: b ? {
                comment: v,
                aweme: m,
                mixInfo: p
              } : {}
            }), A = Df(_, 2), S = A[0], P = A[1];
            return (0,
                a.useEffect)(function() {
              b && (y.current = !1,
              m && (m == null ? void 0 : m.statusCode) === 0) || si(regeneratorRuntime.mark(function I() {
                var x;
                return regeneratorRuntime.wrap(function(C) {
                  for (; ; )
                    switch (C.prev = C.next) {
                      case 0:
                        return P(function(O) {
                          return {
                            isReload: !1,
                            logPb: "",
                            data: wn(wn({}, O.data), {}, {
                              comment: null
                            })
                          }
                        }),
                            C.next = 3,
                            Fu({
                              awemeId: d
                            });
                      case 3:
                        x = C.sent,
                            P(function(O) {
                              return {
                                isReload: !0,
                                logPb: x == null ? void 0 : x.logPb,
                                data: wn(wn({}, O.data), {}, {
                                  aweme: x
                                })
                              }
                            });
                      case 5:
                      case "end":
                        return C.stop()
                    }
                }, I)
              }))()
            }, [d, m, b]),
                a.createElement(a.Fragment, null, a.createElement(fb, {
                  awemeInfo: (o = S.data.aweme) === null || o === void 0 ? void 0 : o.detail,
                  awemeId: d
                }), a.createElement(cf, {
                  awemelogPb: S == null ? void 0 : S.logPb,
                  awemeInfo: (i = S.data.aweme) === null || i === void 0 ? void 0 : i.detail,
                  statusCode: ((u = S.data.aweme) === null || u === void 0 ? void 0 : u.statusCode) || 0,
                  isReoload: S.isReload,
                  defaultMixInfo: (l = S.data) === null || l === void 0 ? void 0 : l.mixInfo,
                  defaultComment: (s = S.data) === null || s === void 0 ? void 0 : s.comment
                }))
          }
          Hf.getInitialProps = function() {
            var e = si(regeneratorRuntime.mark(function r(t) {
              var n, o;
              return regeneratorRuntime.wrap(function(u) {
                for (; ; )
                  switch (u.prev = u.next) {
                    case 0:
                      return n = t.ctx,
                          o = null,
                          Dt() ? o = $i(n.request.path) : o = $i(location.pathname),
                          u.next = 5,
                          cb(o, n);
                    case 5:
                      return u.abrupt("return", u.sent);
                    case 6:
                    case "end":
                      return u.stop()
                  }
              }, r)
            }));
            return function(r) {
              return e.apply(this, arguments)
            }
          }();
          var db = Hf;
          function mb(e) {
            jt("main_page");
            var r = (0,
                a.useRef)(null);
            return a.createElement(a.Fragment, null, a.createElement(Zt, null, a.createElement("title", null, "\u3010\u6296\u97F3\u3011\u8BB0\u5F55\u7F8E\u597D\u751F\u6D3B"), a.createElement("meta", {
              name: "description",
              content: "\u6296\u97F3-\u8BB0\u5F55\u7F8E\u597D\u751F\u6D3B\u7684\u89C6\u9891\u5E73\u53F0"
            }), a.createElement("meta", {
              name: "keywords",
              content: "\u6296\u97F3,\u6296\u97F3\u97F3\u4E50,\u6296\u97F3\u77ED\u89C6\u9891,\u6296\u97F3\u5B98\u7F51,amemv,\u6296\u97F3app,\u6296\u97F3app\u4E0B\u8F7D"
            }), a.createElement("link", {
              rel: "canonical",
              href: "https://www.douyin.com/"
            })), a.createElement(po, {
              fetchFeeds: rl,
              current: "home",
              ref: r
            }))
          }
          function Wf() {
            var e = [{
              path: "/",
              exact: !1,
              component: Qv,
              routes: [{
                path: "/404",
                exact: !0,
                component: Zl,
                id: "C_1"
              }, {
                path: "/About",
                exact: !0,
                component: Bp,
                id: "C_2"
              }, {
                path: "/Channel/log",
                exact: !0,
                component: Dp,
                id: "C_3"
              }, {
                path: "/Channel/:id",
                exact: !0,
                component: jg,
                id: "C_4"
              }, {
                path: "/Collection/:id",
                exact: !0,
                component: a2,
                id: "C_5"
              }, {
                path: "/DemoComponents",
                exact: !0,
                component: i2,
                id: "C_6"
              }, {
                path: "/Hot",
                exact: !0,
                component: m2,
                id: "C_7"
              }, {
                path: "/LogTrace",
                exact: !0,
                component: _2,
                id: "C_8"
              }, {
                path: "/User/log",
                exact: !0,
                component: Ct,
                id: "C_9"
              }, {
                path: "/User/:id",
                exact: !0,
                component: ab,
                id: "C_10"
              }, {
                path: "/Video/log",
                exact: !0,
                component: Ze,
                id: "C_11"
              }, {
                path: "/Video/:id",
                exact: !0,
                component: db,
                id: "C_12"
              }, {
                path: "/",
                exact: !0,
                component: mb,
                id: "C_13"
              }, {
                component: Zl,
                id: "404_C_1"
              }],
              id: "C_0"
            }];
            return e
          }
          function Vf(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
              })),
                  t.push.apply(t, n)
            }
            return t
          }
          function vb(e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r] != null ? arguments[r] : {};
              r % 2 ? Vf(Object(t), !0).forEach(function(n) {
                pb(e, n, t[n])
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Vf(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              })
            }
            return e
          }
          function pb(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          function zf(e, r, t, n, o, i, u) {
            try {
              var l = e[i](u)
                  , s = l.value
            } catch (c) {
              t(c);
              return
            }
            l.done ? r(s) : Promise.resolve(s).then(n, o)
          }
          function gb(e) {
            return function() {
              var r = this
                  , t = arguments;
              return new Promise(function(n, o) {
                    var i = e.apply(r, t);
                    function u(s) {
                      zf(i, n, o, u, l, "next", s)
                    }
                    function l(s) {
                      zf(i, n, o, u, l, "throw", s)
                    }
                    u(void 0)
                  }
              )
            }
          }
          function Kf(e) {
            var r = a.createElement(bd.aW, {
              routes: Wf(),
              initProps: e,
              appConfig: Oi
            })
                , t = Pt.l.applyPlugins({
              key: "modifyClientRenderOpts",
              type: tr.T.modify,
              initialValue: {
                plugin: Pt.l
              }
            })
                , n = Pt.l.applyPlugins({
              type: tr.T.modify,
              key: "rootContainer",
              initialValue: r,
              args: t
            });
            return n
          }
          var hb = Pt.l.applyPlugins({
            key: "router",
            type: tr.T.modify
          }) || {}
              , yb = Wf();
          Kf.getInitialProps = function() {
            var e = gb(regeneratorRuntime.mark(function r(t) {
              var n, o, i, u, l, s;
              return regeneratorRuntime.wrap(function(d) {
                for (; ; )
                  switch (d.prev = d.next) {
                    case 0:
                      return n = t.pathname.replace(new RegExp("^(".concat(hb.basename, ")(?=/.*|)")), ""),
                          o = ((0,
                              wd.f)(yb, n) || []).filter(function(f) {
                            return f.route.component
                          }) || [],
                          i = {},
                          u = [],
                          l = [],
                          o.forEach(function(f) {
                            var m, v = f == null ? void 0 : f.route, p = v.id, g = f == null || (m = f.route) === null || m === void 0 ? void 0 : m.component, h = g.getInitialProps;
                            if (h) {
                              if (typeof h != "function")
                                throw new Error("getInitialProps needs to be a function\uFF01");
                              var y = new Promise(function(b, _) {
                                    Promise.resolve(h(t)).then(b).catch(_)
                                  }
                              );
                              l.push(y),
                                  u.push(p)
                            }
                          }),
                          d.next = 8,
                          Promise.all(l);
                    case 8:
                      return s = d.sent,
                          s.forEach(function(f, m) {
                            i[u[m]] = f
                          }),
                          d.abrupt("return", vb({
                            _location: t.pathname
                          }, i));
                    case 11:
                    case "end":
                      return d.stop()
                  }
              }, r)
            }));
            return function(r) {
              return e.apply(this, arguments)
            }
          }();
          var bb = Kf
              , F3 = null
              , wb = E(47055);
          function Gf(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              r && (n = n.filter(function(o) {
                return Object.getOwnPropertyDescriptor(e, o).enumerable
              })),
                  t.push.apply(t, n)
            }
            return t
          }
          function _b(e) {
            for (var r = 1; r < arguments.length; r++) {
              var t = arguments[r] != null ? arguments[r] : {};
              r % 2 ? Gf(Object(t), !0).forEach(function(n) {
                Eb(e, n, t[n])
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Gf(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              })
            }
            return e
          }
          function Eb(e, r, t) {
            return r in e ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[r] = t,
                e
          }
          var Cb = Pt.l.applyPlugins({
            key: "render",
            type: tr.T.compose,
            initialValue: function(r) {
              (0,
                  wb.x)(_b({
                rootContainer: bb,
                rootElement: "root"
              }, r))
            }
          });
          Cb()
        },
        23644: function(D) {
          "use strict";
          D.exports = "data:image/jpeg;base64,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"
        },
        1909: function(D) {
          "use strict";
          D.exports = "data:image/png;base64,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"
        },
        53715: function(D, Z, E) {
          "use strict";
          D.exports = E.p + "image/EmptyList.82c3fe11.png"
        },
        98751: function(D, Z, E) {
          "use strict";
          D.exports = E.p + "image/EmptySearch.19da93c9.png"
        },
        39627: function(D, Z, E) {
          "use strict";
          D.exports = E.p + "image/NoLogin.f32770e8.png"
        },
        12412: function(D) {
          "use strict";
          D.exports = "data:image/png;base64,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"
        },
        20643: function(D, Z, E) {
          "use strict";
          D.exports = E.p + "image/NotFound.3933d7c5.png"
        },
        35663: function(D, Z, E) {
          "use strict";
          D.exports = E.p + "image/ServerError.33c682c5.png"
        },
        41219: function(D, Z, E) {
          "use strict";
          D.exports = E.p + "image/Unfollow.05a1cb9c.png"
        },
        8056: function() {}
      }
          , _n = {};
      function q(D) {
        var Z = _n[D];
        if (Z !== void 0)
          return Z.exports;
        var E = _n[D] = {
          id: D,
          loaded: !1,
          exports: {}
        };
        return fi[D].call(E.exports, E, E.exports, q),
            E.loaded = !0,
            E.exports
      }
      q.m = fi,
          q.c = _n,
          function() {
            var D = [];
            q.O = function(Z, E, Ae, fe) {
              if (E) {
                fe = fe || 0;
                for (var ee = D.length; ee > 0 && D[ee - 1][2] > fe; ee--)
                  D[ee] = D[ee - 1];
                D[ee] = [E, Ae, fe];
                return
              }
              for (var Le = Infinity, ee = 0; ee < D.length; ee++) {
                for (var E = D[ee][0], Ae = D[ee][1], fe = D[ee][2], Be = !0, Re = 0; Re < E.length; Re++)
                  (fe & !1 || Le >= fe) && Object.keys(q.O).every(function(mi) {
                    return q.O[mi](E[Re])
                  }) ? E.splice(Re--, 1) : (Be = !1,
                  fe < Le && (Le = fe));
                Be && (D.splice(ee--, 1),
                    Z = Ae())
              }
              return Z
            }
          }(),
          function() {
            q.n = function(D) {
              var Z = D && D.__esModule ? function() {
                    return D.default
                  }
                  : function() {
                    return D
                  }
              ;
              return q.d(Z, {
                a: Z
              }),
                  Z
            }
          }(),
          function() {
            q.d = function(D, Z) {
              for (var E in Z)
                q.o(Z, E) && !q.o(D, E) && Object.defineProperty(D, E, {
                  enumerable: !0,
                  get: Z[E]
                })
            }
          }(),
          function() {
            q.e = function() {
              return Promise.resolve()
            }
          }(),
          function() {
            q.g = function() {
              if (typeof globalThis == "object")
                return globalThis;
              try {
                return this || new Function("return this")()
              } catch (D) {
                if (typeof window == "object")
                  return window
              }
            }()
          }(),
          function() {
            q.o = function(D, Z) {
              return Object.prototype.hasOwnProperty.call(D, Z)
            }
          }(),
          function() {
            q.r = function(D) {
              typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(D, Symbol.toStringTag, {
                value: "Module"
              }),
                  Object.defineProperty(D, "__esModule", {
                    value: !0
                  })
            }
          }(),
          function() {
            q.nmd = function(D) {
              return D.paths = [],
              D.children || (D.children = []),
                  D
            }
          }(),
          function() {
            q.p = "https://sf1-scmcdn-tos.pstatp.com/goofy/ies/douyin_web/"
          }(),
          function() {
            var D = {
              826: 0
            };
            q.O.j = function(Ae) {
              return D[Ae] === 0
            }
            ;
            var Z = function(Ae, fe) {
              var ee = fe[0], Le = fe[1], Be = fe[2], Re, at, me = 0;
              for (Re in Le)
                q.o(Le, Re) && (q.m[Re] = Le[Re]);
              if (Be)
                var er = Be(q);
              for (Ae && Ae(fe); me < ee.length; me++)
                at = ee[me],
                q.o(D, at) && D[at] && D[at][0](),
                    D[ee[me]] = 0;
              return q.O(er)
            }
                , E = self.webpackChunkdouyin_web = self.webpackChunkdouyin_web || [];
            E.forEach(Z.bind(null, 0)),
                E.push = Z.bind(null, E.push.bind(E))
          }();
      var di = q.O(void 0, [216], function() {
        return q(4501)
      });
      di = q.O(di)
    }
)();

//# sourceMappingURL=index.f4c60464.js.map
