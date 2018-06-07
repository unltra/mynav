var wau_w_col = wau_w_col || "000000FFFFFF";
(function(f, a) { f = f || "docReady";
    a = a || window; var g = []; var b = false; var e = false;

    function d() { if (!b) { b = true; for (var h = 0; h < g.length; h++) { g[h].fn.call(window, g[h].ctx) } g = [] } }

    function c() { if (document.readyState === "complete") { d() } } a[f] = function(i, h) { if (typeof i !== "function") { throw new TypeError("callback for docReady(fn) must be a function") } if (b) { setTimeout(function() { i(h) }, 1); return } else { g.push({ fn: i, ctx: h }) } if (document.readyState === "complete" || (!document.attachEvent && document.readyState === "interactive")) { setTimeout(d, 1) } else { if (!e) { if (document.addEventListener) { document.addEventListener("DOMContentLoaded", d, false);
                    window.addEventListener("load", d, false) } else { document.attachEvent("onreadystatechange", c);
                    window.attachEvent("onload", d) } e = true } } } })("docReady", window);
if (typeof _wau !== "undefined") { var WAU_ren = WAU_ren || [];
    docReady(function() { WAU_la() }) }

function WAU_colored(c, b, e) { if (typeof e === "undefined") { e = -1;
        wau_w_col = b;
        docReady(function() { WAU_colored(c, b, -1) }) } else { var a = ""; if (document.title) { a = encodeURIComponent(document.title.substr(0, 80).replace(/(\?=)|(\/)/g, "")) } var d = document.getElementsByTagName("script")[0];
        (function() { var h = 0; if (window.performance && window.performance.timing.domContentLoadedEventStart) { h = (window.performance.timing.domContentLoadedEventStart - window.performance.timing.navigationStart) / 1000 } var g = encodeURIComponent(document.referrer); var f = document.createElement("script");
            f.async = "async";
            f.type = "text/javascript";
            f.src = "//whos.amung.us/pingjs/?k=" + c + "&t=" + a + "&c=u&y=" + g + "&a=" + e + "&d=" + h + "&v=22&r=" + Math.ceil(Math.random() * 9999);
            d.parentNode.insertBefore(f, d) })() } }

function WAU_r_u(c, key, async_index) { var col; if (typeof async_index === "undefined" || async_index == -1) { async_index = -1;
        col = wau_w_col } else { if (async_index != -1) { col = _wau[async_index][3] } } c = parseInt(c.replace(/,/g, ""));
    c = WAU_addCommas(c); var raw_im_meta_l = eval("({'0':[0,-29,9,14], '1':[-11,-29,6,14], '2':[-20,-29,9,14], '3':[-30,-29,9,14], '4':[-40,-29,10,14], '5':[-50,-29,8,14],'6':[-60,-29,9,14], '7':[-70,-29,9,14], '8':[-80,-29,9,14], '9':[-90,-29,9,14], ',':[-102,-29,4,17]})"); var raw_im_meta_s = eval("({'0':[0,-43,7,11], '1':[-8,-43,4,11], '2':[-14,-43,7,11], '3':[-21,-43,7,11], '4':[-28,-43,7,11], '5':[-35,-43,6,11],'6':[-42,-43,7,11], '7':[-49,-43,7,11], '8':[-56,-43,7,11], '9':[-63,-43,7,11], ',':[-71,-43,4,14]})");
    c = c.split(""); var w_large = 0; var w_small = 0; for (var i = 0; i < c.length; i++) { w_large += raw_im_meta_l[c[i]][2];
        w_small += raw_im_meta_s[c[i]][2] + 2 } var y_pos, meta, left_offset; if ((w_large - 2) > 45) { y_pos = 9;
        meta = raw_im_meta_s;
        left_offset = 24 } else { y_pos = 7;
        meta = raw_im_meta_l;
        left_offset = 19; if (w_large > 25) { left_offset = 23 } if (w_large > 50) { left_offset = 21 } } var img = document.createElement("img");
    img.onload = function() { var wid = document.createElement("div");
        wid.style.position = "relative";
        wid.style.display = "inline-block";
        wid.style.backgroundImage = "url(" + img.src + ")";
        wid.style.width = "81px";
        wid.style.height = "29px";
        wid.style.padding = "0";
        wid.style.overflow = "hidden";
        wid.style.cursor = "pointer";
        wid.style.direction = "ltr";
        wid.title = "Click to see what's popular on this site!"; var txt = document.createElement("div");
        txt.style.position = "absolute";
        txt.style.top = y_pos + "px";
        txt.style.padding = "0";
        txt.style.margin = "0";
        txt.style.overflow = "visible"; var x_pos = 0; var txt_w = 0; for (var i = 0; i < c.length; i++) { var char_meta = meta[c[i]]; var character = document.createElement("div");
            character.style.backgroundImage = "url(" + img.src + ")";
            character.style.backgroundRepeat = "no-repeat";
            character.style.backgroundAttachment = "scroll";
            character.style.backgroundPosition = char_meta[0] + "px " + char_meta[1] + "px";
            character.style.position = "absolute";
            character.style.width = char_meta[2] + "px";
            character.style.height = char_meta[3] + "px";
            character.style.left = x_pos + "px";
            character.style.lineHeight = char_meta[3] + "px";
            character.style.overflow = "hidden";
            character.style.padding = "0";
            character.style.margin = "0";
            txt.appendChild(character);
            x_pos += char_meta[2] + 2;
            txt_w += char_meta[2] + 2 } txt.style.left = (left_offset + Math.floor((54 - (txt_w - 2)) / 2)) + "px";
        wid.appendChild(txt);
        wid.onclick = function() { top.location = "//whos.amung.us/stats/" + key + "/" }; if (async_index >= 0) { var scr = document.getElementById("_wau" + _wau[async_index][2]);
            scr.parentNode.insertBefore(wid, scr.nextSibling) } else { WAU_insert(wid, "amung.us/colored.js") } };
    img.src = "//widgets.amung.us/colwid/?c=" + col; if (typeof WAU_cps_d == "undefined") { WAU_cps(key) } }

function WAU_insert(c, d) { var a = document.getElementsByTagName("script"); for (var b = 0; b < a.length; b++) { if (a[b].src.indexOf(d) > 0) { a[b].parentNode.insertBefore(c, a[b].nextSibling) } } }

function WAU_la() { for (var a = 0; a < _wau.length; a++) { if (typeof WAU_ren[a] === "undefined" || WAU_ren[a] == false) { if (typeof window["WAU_" + _wau[a][0]] === "function") { WAU_ren[a] = true; if (_wau[a][0] == "map") { window.WAU_map(_wau[a][1], _wau[a][3], _wau[a][4], _wau[a][5], _wau[a][6], a) } else { if (_wau[a][0] == "dynamic") { window.WAU_dynamic(_wau[a][1], _wau[a][3], _wau[a][4], a) } else { if (typeof _wau[a][3] !== "undefined") { window["WAU_" + _wau[a][0]](_wau[a][1], _wau[a][3], a) } else { window["WAU_" + _wau[a][0]](_wau[a][1], a) } } } } else { setTimeout(WAU_la, 1000) } } } }

function WAU_addCommas(b) { b += "";
    x = b.split(".");
    x1 = x[0];
    x2 = x.length > 1 ? "." + x[1] : ""; var a = /(\d+)(\d{3})/; while (a.test(x1)) { x1 = x1.replace(a, "$1,$2") } return x1 + x2 }

function WAU_cps(a) { window.Tynt = window.Tynt || []; if (typeof _wau_opt != "object" || (typeof _wau_opt == "object" && !("fbase" in _wau_opt))) { if (document.location.protocol == "http:") { Tynt.push("w!" + a);
            (function() { var c = document.getElementsByTagName("script")[0]; var b = document.createElement("script");
                b.async = "async";
                b.type = "text/javascript";
                b.src = "//cdn.tynt.com/tc.js";
                c.parentNode.insertBefore(b, c) })() } } }(function() { if (typeof _wau_opt != "object" || (typeof _wau_opt == "object" && !("fbase" in _wau_opt))) { if (window.location.protocol != "https:") { var b = document.createElement("script");
            b.src = "//t.dtscout.com/i/?l=" + encodeURIComponent(window.location.href) + "&j=" + encodeURIComponent(document.referrer);
            b.async = "async";
            b.type = "text/javascript"; var a = document.getElementsByTagName("script")[0];
            a.parentNode.insertBefore(b, a) } } })();