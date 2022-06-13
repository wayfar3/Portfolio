!function (t) {
    var e = {};

    function r(a) {
        if (e[a]) return e[a].exports;
        var o = e[a] = {i: a, l: !1, exports: {}};
        return t[a].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }

    r.m = t, r.c = e, r.d = function (t, e, a) {
        r.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: a})
    }, r.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, r.t = function (t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (r.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var o in t) r.d(a, o, function (e) {
            return t[e]
        }.bind(null, o));
        return a
    }, r.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return r.d(e, "a", e), e
    }, r.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "", r(r.s = 0)
}([function (t, e, r) {
    var a = r(1);
    r(2), a.fn.percircle = function (t) {
        var e = [], r = a.extend({}, {animate: !0}, t);
        return a(window).scroll((function (t) {
            a.each(e, (function (t, e) {
                e.completed || o(e.instance) && (e.completed = !0, a(e.instance).percircle(e.options))
            }))
        })), this.each((function () {
            a(this).hasClass("gt50") && a(this).removeClass("gt50");
            var t = a(this), i = !1;
            t.data("initialised") ? i = !0 : t.data("initialised", !0);
            var d, c, l;
            t.hasClass("percircle") || t.addClass("percircle"), void 0 !== t.attr("data-animate") && (r.animate = "true" == t.attr("data-animate")), r.animate && t.addClass("animate"), void 0 !== t.attr("data-animateOnView") && (r.animateOnView = "true" == t.attr("data-animateOnView")), void 0 !== t.attr("data-progressBarColor") && (r.progressBarColor = t.attr("data-progressBarColor")), d = {"border-color": r.progressBarColor}, c = a(this), l = r.progressBarColor, t.on("mouseover", (function () {
                c.children("span").css("color", l)
            })), t.on("mouseleave", (function () {
                c.children("span").attr("style", "")
            }));
            var f = t.attr("data-percent") || r.percent || 0, u = t.attr("data-perclock") || r.perclock || 0,
                m = t.attr("data-perdown") || r.perdown || 0;
            if (r.animate && r.animateOnView && !o(this) && !i && (e.push({
                instance: this,
                options: r
            }), f = 0), f || r.displayTextAtZero) {
                f > 50 && t.addClass("gt50");
                var p = t.attr("data-text") || r.text || f + "%";
                t.html("<span>" + p + "</span>"), a('<div class="slice"><div class="bar"></div><div class="fill"></div></div>').appendTo(t), a(".slice .bar, .slice .fill", t).css(d), f > 50 && a(".bar", t).css({
                    "-webkit-transform": "rotate(180deg)",
                    "-moz-transform": "rotate(180deg)",
                    "-ms-transform": "rotate(180deg)",
                    "-o-transform": "rotate(180deg)",
                    transform: "rotate(180deg)"
                });
                var v = 3.6 * f;
                setTimeout((function () {
                    a(".bar", t).css({
                        "-webkit-transform": "rotate(" + v + "deg)",
                        "-moz-transform": "rotate(" + v + "deg)",
                        "-ms-transform": "rotate(" + v + "deg)",
                        "-o-transform": "rotate(" + v + "deg)",
                        transform: "rotate(" + v + "deg)"
                    })
                }), 0)
            } else u && !i ? (t.hasClass("perclock") || t.addClass("perclock"), setInterval((function () {
                var e = new Date, r = s(e.getHours()) + ":" + s(e.getMinutes()) + ":" + s(e.getSeconds());
                t.html("<span>" + r + "</span>"), a('<div class="slice"><div class="bar"></div><div class="fill"></div></div>').css(d).appendTo(t);
                var o = e.getSeconds();
                0 === o && t.removeClass("gt50"), o > 30 && (t.addClass("gt50"), a(".bar", t).css({
                    "-webkit-transform": "rotate(180deg);scale(1,3)",
                    "-moz-transform": "rotate(180deg);scale(1,3)",
                    "-ms-transform": "rotate(180deg);scale(1,3)",
                    "-o-transform": "rotate(180deg);scale(1,3)",
                    transform: "rotate(180deg);scale(1,3)"
                }));
                var n = 6 * o;
                a(".bar", t).css({
                    "-webkit-transform": "rotate(" + n + "deg)",
                    "-moz-transform": "rotate(" + n + "deg)",
                    "-ms-transform": "rotate(" + n + "deg)",
                    "-o-transform": "rotate(" + n + "deg)",
                    transform: "rotate(" + n + "deg)"
                })
            }), 1e3)) : m && !i && n(t, r, d)
        }))
    };
    var o = function (t) {
        return a(t).offset().top + a(t).height() < a(window).scrollTop() + a(window).height()
    }, n = function (t, e, r) {
        var o, n = t.attr("data-secs") || e.secs, s = t.attr("data-timeUpText") || e.timeUpText,
            i = t[0].hasAttribute("data-reset") || e.reset;

        function d() {
            if ((n -= 1) > 30 && t.addClass("gt50"), n < 30 && t.removeClass("gt50"), f(), n <= 0) return l(), void t.html("<span>" + s + "</span>")
        }

        function c() {
            o = setInterval(d, 1e3)
        }

        function l() {
            clearInterval(o)
        }

        function f() {
            t.html("<span>" + n + "</span>"), a('<div class="slice"><div class="bar"></div><div class="fill"></div></div>').css(r).appendTo(t);
            var e = 6 * n;
            a(".bar", t).css({
                "-webkit-transform": "rotate(" + e + "deg)",
                "-moz-transform": "rotate(" + e + "deg)",
                "-ms-transform": "rotate(" + e + "deg)",
                "-o-transform": "rotate(" + e + "deg)",
                transform: "rotate(" + e + "deg)"
            })
        }

        s.length > 8 && (s = "the end"), i && t.on("click", (function () {
            l(), n = e.secs, f(), c()
        })), c()
    }, s = function (t) {
        return t < 10 ? "0" + t : t
    }
}, function (t, e) {
    t.exports = jQuery
}, function (t, e, r) {
}]);
//# sourceMappingURL=percircle.js.map