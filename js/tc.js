//v147 Copyright (c) 2008-2018 33Across Inc. All Rights Reserved

Tynt = window.Tynt || [];
"undefined" == typeof Tynt.TIL && "undefined" == typeof Tynt.TCL && "undefined" == typeof Tynt.TICFL && function() {
    var d = window,
        g = document,
        n = { distro: "TC", id: "TC-" + (new Date).getTime() };
    Tynt.TCL = function() {
        function J(a) { var b = J.options;
            a = b.parser[b.strictMode ? "strict" : "loose"].exec(a); for (var c = {}, e = 14; e--;) c[b.key[e]] = a[e] || "";
            c[b.q.name] = {};
            c[b.key[12]].replace(b.q.parser, function(a, e, d) { e && (c[b.q.name][e] = d) }); return c }
        if (document.body) {
            Date.now || (Date.now = function() { return (new Date).getTime() });
            var f = {
                    _maxRef: 600,
                    _idMacro: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                    init: function() { this._icUrl = n.protocol + (Tynt.e || "") + "ic.tynt.com";
                        this._debUrl = n.protocol + (Tynt.e || "") + "de.tynt.com/deb/v2";
                        this._sicUrl = n.protocol + (Tynt.e || "") + "cdn-sic.33across.com/1/javascripts/sic.js";
                        this._apUrl = n.protocol + (Tynt.e || "") + "cdn-ap.33across.com/javascripts/ap.js" },
                    newEle: function(a, b, c, e) { e = e || window;
                        a = e.document.createElement(a);
                        b && this.extend(a, b);
                        c && this.extend(a.style, c); return a },
                    injectScript: function(a, b, c) {
                        b = b ||
                            window;
                        a = this.newEle("script", { async: "async", type: "text/javascript", src: a }, null, b);
                        this.insertEle(a, c || b.document.getElementsByTagName("script")[0])
                    },
                    injectSicScript: function(a) { this.injectScript(this._sicUrl, window, a) },
                    injectApolloScript: function() { this.injectScript(this._apUrl) },
                    injectSicIframe: function(a, b, c) {
                        var e = { width: a.width + "px", height: a.height + "px", border: "0 none", margin: "0" };
                        c && this.extend(e, c);
                        c = this.newEle("iframe", { src: "about:blank", frameBorder: "0", frameSpacing: "0", scrolling: "no" }, e);
                        this.insertEle(c, b);
                        a.iframeId = this.eleId(c);
                        a.sicWindow = c.contentWindow;
                        a = c.contentWindow.document;
                        a.open();
                        a.write('<!DOCTYPE html><html><head><style type="text/css">*{margin:0;padding:0;}</style></head><body><script type="text/javascript">window.Tynt = window.parent.Tynt;\x3c/script><script type="text/javascript" src="' + this._sicUrl + '">\x3c/script></body></html>');
                        a.close()
                    },
                    insertEle: function(a, b) { b ? "script" == b.tagName.toLowerCase() ? b.parentNode.insertBefore(a, b) : b.appendChild(a) : document.body.appendChild(a) },
                    eleId: function(a) { var b = a.id;
                        b || (b = "x33x" + Date.now(), a.id = b); return b },
                    _imgs: [],
                    injectPixel: function(a, b, c) { var e; try { e = g.createElement("img") } catch (d) { e = document.createElement("img") } e && (this._imgs.push(e), b && (e.onload = b), c && (e.onerror = c), e.src = a) },
                    docUrl: function() {
                        var a = this.getLink("canonical");
                        a || (a = this.getMeta("property", "og:url", "name", "original-source"));
                        if (a) {
                            if (0 != a.indexOf("http")) {
                                var b = n.protocol + d.location.host + d.location.pathname,
                                    c = g.getElementsByTagName("base")[0];
                                c && (c = c.getAttribute("href")) &&
                                    (b = c);
                                "/" == a.charAt(0) ? (c = b.indexOf("/", 9), -1 < c && (b = b.slice(0, c))) : (c = b.lastIndexOf("/"), b = 9 < c ? b.slice(0, c + 1) : b + "/");
                                a = b + a
                            }
                            return a
                        }
                        return ""
                    },
                    getMeta: function(a, b, c, e) { var d, k = null,
                            h = null,
                            m = g.getElementsByTagName("meta"); for (d = 0; d < m.length; ++d) k || m[d].getAttribute(a) !== b ? c && !h && m[d].getAttribute(c) === e && (h = m[d].getAttribute("content") || null) : k = m[d].getAttribute("content") || null; return k || h },
                    getLink: function(a, b) {
                        var c, e, d = g.getElementsByTagName("link");
                        for (c = 0; c < d.length; ++c)
                            if (e = d[c].getAttribute("rel"),
                                d[c].getAttribute("href") && e && (!b && 0 <= e.indexOf(a) || b && e == a)) return d[c].href;
                        return null
                    },
                    extend: function(a, b) { var c, e; for (c = 1; c < arguments.length; ++c)
                            for (e in arguments[c]) arguments[c].hasOwnProperty(e) && (a[e] = arguments[c][e]); return a },
                    isArray: function(a) { return "undefined" != typeof a && "[object Array]" === Object.prototype.toString.call(a) },
                    inArray: function(a, b) { return 0 <= this.indexOf(a, b) },
                    toArray: function(a, b) { return Array.prototype.slice.call(a, b || 0) },
                    indexOf: function(a, b) {
                        if (a.indexOf) return a.indexOf(b);
                        for (var c = 0; c < a.length; ++c)
                            if (a[c] === b) return c;
                        return -1
                    },
                    unique: function(a) { var b, c = {},
                            e = []; for (b = 0; b < a.length; ++b) c[a[b]] || (c[a[b]] = !0, e.push(a[b])); return e },
                    iframeType: function() {
                        var a = this.iframeEle(),
                            b = K,
                            c = ", iso:" + this.isolated();
                        if (a) a.id && 0 <= a.id.search(/google_ads?_i?frame/) ? (b = 6, f.clog("In same-origin iframe from DFP" + c)) : (b = L, f.clog("In same-origin iframe" + c));
                        else try {
                            window != window.top ? "undefined" != typeof window.$sf ? (b = M, f.clog("In SafeFrame")) : (b = z, f.clog("In cross-origin iframe")) :
                                f.clog("In top window")
                        } catch (e) { b = z, f.clog("iframeType: " + e.message) }
                        return b
                    },
                    iframeEle: function(a) { var b = null;
                        a = a || window; try { b = a.frameElement } catch (c) {} return b },
                    iframeTop: function() { var a = window,
                            b = null; try { for (; a != window.top;) b = a, a = a.parent } catch (c) { return null } return b ? this.iframeEle(b) : null },
                    getTopWin: function() { var a = window; try { for (; a.parent !== a && a.parent.document;) a = a.parent } catch (b) {} return a },
                    isolated: function() { var a = !0; try { "function" == typeof window.top.open && (a = !1) } catch (b) {} return a },
                    tyntIds: function() { return this.unique(Tynt).join("~") },
                    getPubId: function() { for (var a = null, b = 0; b < Tynt.length; ++b)
                            if ("string" == typeof Tynt[b] && 22 == Tynt[b].length && 0 > Tynt[b].indexOf("!")) { a = Tynt[b]; break }
                        return a },
                    countIds: function(a) { var b, c = 0; for (b = 0; b < Tynt.length; ++b) Tynt[b] === a && ++c; return c },
                    _log: function(a) {
                        "undefined" == typeof Tynt.debug && 0 < d.location.search.indexOf("__tcdebugmode=1") && d.console && d.console.log && (Tynt.debug = !0);
                        if (!0 === Tynt.debug || 1 === Tynt.debug) a.unshift("[TC]"), d.console.log.apply(d.console,
                            a)
                    },
                    log: function() { n.inXOIframe() ? this.clog.apply(this, arguments) : this._log(this.toArray(arguments)) },
                    clog: function() { var a = this.toArray(arguments);
                        a.unshift(n.id);
                        this._log(a) },
                    callIc: function() {
                        var a, b, c, e, y, k, h, m;
                        if (!d._33Across.state.icDone) {
                            d._33Across.state.icDone = W;
                            b = this.getCookie(g.cookie, "tracertraffic");
                            a = d.location.hash;
                            a = /tynt=/.test(a) ? a.match(/tynt=?([^?&$#]*)/)[1] : !1;
                            e = c = this._icUrl + "/b/p?id=" + this.tyntIds() + (b ? "&et=" + b : "") + (a ? "&a=" + a : "") + ("string" == typeof Tynt.b ? "&b=" + Tynt.b : "") +
                                "&lm=" + n.type + "&ts=" + Date.now() + "&dn=" + n.distro + "&iso=" + (this.isolated() ? "1" : "0");
                            (a = this.getMeta("property", "og:image:url", "property", "og:image")) && (e += "&img=" + encodeURIComponent(this.trunc(a, 250)));
                            y = e;
                            (a = this.getMeta("property", "og:title")) && a != g.title && (y += "&ct=" + encodeURIComponent(this.trunc(a, 200)));
                            k = y;
                            g.referrer && (a = this.trunc(g.referrer, this._maxRef), k += "&r=" + encodeURIComponent(a));
                            h = k;
                            if (a = g.title || d.location.hostname) a = this.trim(this.trunc(a, 200)), h += "&t=" + encodeURIComponent(a);
                            m = h;
                            if (a =
                                this.docUrl()) a = this.trunc(a, 400), m += "&cu=" + encodeURIComponent(a);
                            b = m;
                            if (a = this.getLink("amphtml", !0)) a = this.trunc(a, 250), b += "&ah=" + encodeURIComponent(a);
                            f.callIc.rsp = function() { d._33Across.state.icDone = G };
                            f.clog("Calling IC");
                            this.injectPixel(b, f.callIc.rsp, function() { f.injectPixel(m, f.callIc.rsp, function() { f.injectPixel(h, f.callIc.rsp, function() { f.injectPixel(k, f.callIc.rsp, function() { f.injectPixel(y, f.callIc.rsp, function() { f.injectPixel(e, f.callIc.rsp, function() { f.injectPixel(c, f.callIc.rsp) }) }) }) }) }) })
                        }
                    },
                    callDeb: function(a) {
                        function b(a, b) { f.clog("Calling DEB " + b + (a ? "" : " on IC timeout")); var y = encodeURIComponent(f.trunc(g.referrer, f._maxRef));
                            f.injectScript(f._debUrl + "?id=" + f.tyntIds() + "&dn=" + n.distro + "&cc=" + b + "&r=" + y, d) } "undefined" == typeof a && (a = 1);
                        d._33Across.state.deDone >= a || (++d._33Across.state.deDone, this.when(function() { return d._33Across.state.icDone == G }, b, { timeout: 300, timeoutCallback: b, callbackData: d._33Across.state.deDone }, this)) },
                    callDebX: function(a, b) {
                        function c(a, c) {
                            f[b ? "log" : "clog"]("Calling DEBx " +
                                c + (a ? "" : " on IC timeout"));
                            var k = encodeURIComponent(f.trunc(g.referrer, f._maxRef));
                            f.injectScript(f._debUrl + "?m=xch&id=" + f.tyntIds() + "&dn=" + n.distro + "&cc=" + c + "&r=" + k, d)
                        }
                        a || (a = 10);
                        d._33Across.state.dxDone >= a || (++d._33Across.state.dxDone, this.when(function() { return d._33Across.state.icDone == G }, c, { timeout: 300, timeoutCallback: c, callbackData: d._33Across.state.dxDone }, this))
                    },
                    jsonDecode: function(a) {
                        if ("function" != typeof Array.prototype.toJSON) return JSON.stringify(a);
                        var b = Array.prototype.toJSON;
                        delete Array.prototype.toJSON;
                        a = JSON.stringify(a);
                        Array.prototype.toJSON = b;
                        return a
                    },
                    getCookie: function(a, b) { for (var c = b + "=", e = a.split(";"), d = 0; d < e.length; d++) { for (var k = e[d];
                                " " == k.charAt(0);) k = k.substring(1, k.length); if (0 == k.indexOf(c)) return k.substring(c.length, k.length) } return null },
                    trim: function(a) { return a.replace(/^\s+|\s+$/g, "") },
                    trunc: function(a, b) { var c, e; if (!a || a.length <= b) return a;
                        c = a.substring(0, b); for (e = 1; 3 >= e; ++e)
                            if ("%" == c.charAt(c.length - e)) return c.substring(0, c.length - e); return c },
                    when: function(a, b, c, e) {
                        var f,
                            k, h, m = null,
                            g = null,
                            p = a();
                        c = c || {};
                        f = c.interval || 50;
                        k = c.timeout;
                        h = c.timeoutCallback || function() {};
                        if (p) return b.call(e, p, c.callbackData), !0;
                        m = d.setInterval(function() { if (p = a()) d.clearInterval(m), d.clearTimeout(g), b.call(e, p, c.callbackData) }, f);
                        k && (g = d.setTimeout(function() { d.clearInterval(m);
                            h.call(e, p, c.callbackData) }, k));
                        return !1
                    },
                    prob: function(a) { a = parseFloat(a) || 0; return Math.random() < a }
                },
                W = 1,
                G = 2,
                K = 0,
                z = 3,
                M = 4,
                L = 5;
            n.type = 0;
            n.inIframe = function() { return this.type > K };
            n.inSOIframe = function() {
                return this.type >=
                    L && 6 >= this.type
            };
            n.inXOIframe = function() { return this.type >= z && this.type <= M };
            n.init = function() { this.type = f.iframeType();
                this.inSOIframe() && (d = f.getTopWin(), g = d.document);
                d._33Across || (d._33Across = {});
                d._33Across.state || (d._33Across.state = { icDone: 0, deDone: 0, dxDone: 0, ivDone: !1 }); "https:" === d.location.protocol ? (this.isSecure = !0, this.protocol = "https://") : (this.isSecure = !1, this.protocol = "http://");
                f.init();
                this.isolated = f.isolated();
                d._33Across.pvTs || (d._33Across.pvTs = Date.now()) };
            J.options = {
                strictMode: !1,
                key: "source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),
                q: { name: "queryKey", parser: /(?:^|&)([^&=]*)=?([^&]*)/g },
                parser: { strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/, loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/ }
            };
            n.init();
            var l = g.body,
                q = g.documentElement,
                X = d.eval("/*@cc_on!@*/false"),
                N = function(a, b) { for (var c = "", e = 0; e < b; e++) c += a; return c },
                D = N("a", 50),
                C = (Tynt.e || "") + "ic.tynt.com",
                O = C + "/b/s",
                P;
            P = d.addEventListener ? function(a, b, c) { a.addEventListener(b, c, !1) } : function(a, b, c) { a.attachEvent("on" + b, c) };
            var Y = function(a) { "complete" == g.readyState ? a() : P(d, "load", function(b) { setTimeout(function() { "undefined" != typeof g.readyState || X || (g.readyState = "complete");
                            a() }, 10) }) },
                v = function(a, b) {
                    var c = [],
                        e = function(a, b) {
                            var c =
                                n.protocol + a.replace("id=" + D, "id=" + f.tyntIds()); - 1 < c.indexOf(C + "/b/p?") && "string" == typeof Tynt.b && (c += "&b=" + Tynt.b);
                            var e = new Image(1, 1);
                            b && (e.onerror = b);
                            e.src = c
                        };
                    v = function(a, b) { c.push([a, b]) };
                    Y(function() { v = e; for (var a = 0; a < c.length; a++) v(c[a][0], c[a][1]);
                        c = null });
                    v(a, b)
                },
                Q = function(a) { var b = [],
                        c = "",
                        e; for (e in a) a.hasOwnProperty(e) && (b.push(c, e, "=", a[e]), c = "&"); return b.join("") },
                S = function(a) {
                    for (var b = 0, c = 100 > a.length ? a.length : 100, e = 0; e < c; e++) b += a.charCodeAt(e);
                    a = Math.floor(3844 * Math.random());
                    c = Math.abs(Date.now() - 12281184E5);
                    return R(c, 7) + R((b + a) % 3844, 2)
                },
                T = function(a) { if (62 > a) return "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(this); var b = Math.floor(a / 62);
                    a -= 62 * b; return 62 <= b ? T(b) + "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(a) : "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(b) + "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(a) },
                R = function(a, b) { var c = T(a); return N("0", b - c.length) + c },
                Z = f.trim((g.title || d.location.hostname).toString()).replace(new RegExp(d.location.hash, "g"), ""),
                aa = function() { if (-1 !== g.cookie.indexOf("tracertraffic=") && (!g.referrer || -1 == g.referrer.indexOf(d.location.host))) { var a = d.location.hostname.split("."),
                            b, c = 2;
                        do b = "tracertraffic=0;path=/;domain=." + a.slice(a.length - c, a.length).join(".") + ";expires=Thu, 01 Jan 1970 00:00:00 GMT", g.cookie = b, c++; while (-1 == g.cookie.indexOf("tracertraffic=0") && c <= a.length); - 1 == g.cookie.indexOf("tracertraffic=0") && (g.cookie = "tracertraffic=0;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT") } },
                t = function() { var a = []; return function(b) { for (var c = a.length - 1; 0 <= c; c--)
                            if (a[c] == b) return !1;
                        a.unshift(b);
                        3 < a.length && a.pop(); return !0 } },
                ba = t(),
                ca = t(),
                da = function(a) { var b, c = function(a) { d.removeEventListener("blur", c, !1);
                        H(b); return !0 }; return function(a) { b = a.target || a.srcElement;
                        d.removeEventListener("blur", c, !1); "IMG" == b.nodeName && "A" != b.parentNode.nodeName && (d.addEventListener("blur", c, !1), setTimeout(function() { g.removeEventListener("blur", c, !1) }, 1E4)); return !0 } }(),
                U = function(a) {
                    H(a.target || a.srcElement, !0)
                },
                u, V = function(a) { a = a.target || a.srcElement;
                    u = "IMG" == a.nodeName ? a : null },
                I = function(a) {
                    var b = function(a) { return "number" == typeof a.pageX ? { x: a.pageX - (q.scrollLeft ? q.scrollLeft : l.scrollLeft), y: a.pageY - (q.scrollTop ? q.scrollTop : l.scrollTop) } : { x: a.clientX, y: a.clientY } },
                        c = function(a) { a = b(a); return 0 >= a.x || 0 >= a.y || a.x >= l.clientWidth || a.y >= l.clientHeight },
                        e = function(a) { a = b(a); return 0 >= a.x || 0 >= a.y || a.x >= q.clientWidth || a.y >= q.clientHeight },
                        d = function(a) { return "#document" == a.target.nodeName },
                        f = function(a) {
                            a =
                                b(a);
                            return 4 >= a.x || 4 >= a.y || a.x >= q.clientWidth - 4 || a.y >= q.clientHeight - 4
                        },
                        h = function(a) { h = navigator.userAgent.match("MSIE") ? g.compatMode && -1 != g.compatMode.indexOf("CSS") ? e : c : navigator.userAgent.match("Firefox") ? d : f;
                            h(a) };
                    return function(a) { u && h(a) && (H(u), u = null); return !0 }
                }();
            Tynt.ci = function() { var a; return function(b, c) { a = c || a; var e = O + ["?ci=", b, "&id=", D, "&g=", a, "&r=", encodeURIComponent(g.referrer), "&ts=", Date.now()].join("");
                    v(e) } }();
            Tynt.st = function() {
                var a;
                return function(b, c, e, f) {
                    a = e || a;
                    b = [O, "?",
                        encodeURIComponent(b), "=", encodeURIComponent(c), "&id=", D, "&g=", a, "&r=", encodeURIComponent(g.referrer), "&href=", encodeURIComponent(d.location.href), "&ts=", Date.now()
                    ];
                    c = "";
                    if (f) { c = [];
                        e = ""; for (var k in f) f.hasOwnProperty(k) && (c.push(e, encodeURIComponent(k), "=", encodeURIComponent(f[k])), e = "&");
                        c = "&" + c.join("") } v(b.join("") + c)
                }
            }();
            Tynt.c ? t = function() {} : (Tynt.c = !0, Tynt.m = Tynt.m || [], Tynt.n = Tynt.n || [], t = function() {
                var a = !0,
                    b, c = function(b, c) {
                        var d;
                        d = (d = f.trim(c)) ? d.split(/\s+/i).length : 0;
                        var h = {
                            id: D,
                            wc: d,
                            c: c,
                            f: a ? 1 : 0,
                            t: Z
                        };
                        f.extend(h, b);
                        a = !1;
                        d = h.trace_type;
                        delete h.trace_type;
                        var g = h.g;
                        delete h.g;
                        for (var B = [], p = "id wc f w h t c".split(" "), A = 0; A < p.length; A++) { var q = p[A],
                                l = h[q];
                            l && B.push([q, encodeURIComponent(l).replace(/\'/g, "%27")]);
                            delete h[q] }
                        for (var r in h) h.hasOwnProperty(r) && (p = h[r]) && B.push([r, encodeURIComponent(p).replace(/\'/g, "%27")]);
                        r = [];
                        var A = 2048 - ((n.protocol + C + "/a/t/x#?").length + (3 + g.length) + 5),
                            q = B.length,
                            w = l = 0,
                            x = 0,
                            t, u, z, E, F = 0;
                        for (r[F] = { g: g, tp: null }; l < q && 35 > r.length;) t = B[l][0], h = B[l][1],
                            z = t.length + 2, u = A - z - w, 0 < u ? (p = h.substring(x, x + u), E = p.slice(-2).indexOf("%"), -1 < E && (p = h.substring(x, x + u - 2 + E), w += E + 2), w += p.length + z, x += p.length, r[F][t] = p) : w = A, w >= A && (r[++F] = { g: g, p: F }, w = 0), x >= h.length && (l++, x = 0);
                        r[0].tp = r.length;
                        v(C + "/b/t/" + d + "?" + Q(r[0]));
                        for (g = 1; g < r.length; g++) v(C + "/b/x/" + d + "?" + Q(r[g]))
                    };
                d.addEventListener ? (navigator.userAgent.match(/Firefox\/2\b/) || l.addEventListener("copy", U, !1), d.addEventListener("mousedown", V, !1), d.addEventListener("dragleave", I, !1), d.addEventListener("dragexit",
                    I, !1), g.addEventListener("contextmenu", da, !1)) : (l.attachEvent("oncopy", U), g.getElementsByTagName("html")[0].attachEvent("ondragleave", I), l.attachEvent("onmousedown", V));
                aa();
                f.callIc();
                f.callDeb();
                return function(a, n) {
                    if (!g.getElementById("tyntSh")) {
                        var k, h, m;
                        n && (g.selection && g.selection.createRange ? (h = g.selection.createRange(), m = h.duplicate(), k = h.text) : (h = d.getSelection(), m = 0 < h.rangeCount && h.getRangeAt(0), k = h.toString()));
                        var l = a.src;
                        if (l && !k && ca(l)) {
                            h = { trace_type: 3, g: S(l), w: a.width, h: a.height };
                            for (m = 0; m < Tynt.n.length; m++) Tynt.n[m](h, l);
                            c(h, l)
                        } else if (k && f.trim(k).length && "TEXTAREA" != a.nodeName && "INPUT" != a.nodeName) { l = ba(k);
                            h = { trace_type: 1 };
                            l && (b = S(k));
                            h.g = b; for (var p = !0, q = 0; q < Tynt.m.length; q++) p = p && Tynt.m[q](h, k, m, l);
                            l && p && c(h, k) }
                    }
                }
            });
            if (!/tracer=test|tracer=no_tracing|disableTracer=/.test(d.location.href) && !/disableTracer=y/.test(g.cookie)) var H = t()
        } else setTimeout(function() { Tynt.TCL() }, 50)
    };
    Tynt.TCL()
}();