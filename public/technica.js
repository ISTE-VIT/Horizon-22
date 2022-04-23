!(function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var s = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(s.exports, s, s.exports, r), (s.l = !0), s.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var s in e)
          r.d(
            n,
            s,
            function (t) {
              return e[t];
            }.bind(null, s)
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 124));
})({
  11: function (e, t, r) {},
  12: function (e, t, r) {},
  124: function (e, t, r) {
    "use strict";
    r.r(t);
    r(3),
      r(11),
      r.p,
      r.p,
      r.p,
      r.p,
      r.p,
      r.p,
      r.p,
      r.p,
      r.p,
      r.p,
      r(12),
      r.p,
      r.p,
      r.p,
      r.p,
      r.p,
      r.p,
      r(13),
      r.p,
      r.p,
      r.p,
      r.p,
      r.p,
      r.p,
      r(14),
      r(15),
      r.p,
      r.p,
      r.p,
      r(16),
      r(17);
    r(18);
    r(33);
    VANTA.WAVES({
      el: "#hero",
      mouseControls: !0,
      touchControls: !0,
      gyroControls: !1,
      scale: 1,
      scaleMobile: 1,
      color: 131586,
    });
    const n = document.querySelectorAll(".vert-line.top"),
      s = document.querySelectorAll(".vert-line.bottom");
    n.forEach((e) => {
      const t = e.getTotalLength();
      (e.style.strokeDasharray = t), (e.style.strokeDashoffset = t);
    }),
      s.forEach((e) => {
        const t = e.getTotalLength();
        (e.style.strokeDasharray = t), (e.style.strokeDashoffset = t);
      });
    let o = !0,
      i = !0;
    window.addEventListener("scroll", (e) => {
      let t =
        (document.body.scrollTop + document.documentElement.scrollTop) /
        document.documentElement.clientHeight;
      if (
        (o &&
          (t >= 1
            ? (n.forEach((e) => {
                (e.style.strokeDasharray = 0), (e.style.strokeDashoffset = 0);
              }),
              (o = !1))
            : n.forEach((e) => {
                length = e.getTotalLength();
                var r = length * t;
                e.style.strokeDashoffset = length - r;
              })),
        i)
      ) {
        const e = Math.max(t - 2.14, 0);
        e >= 1
          ? (s.forEach((e) => {
              (e.style.strokeDasharray = 0), (e.style.strokeDashoffset = 0);
            }),
            (i = !1))
          : s.forEach((t) => {
              length = t.getTotalLength();
              var r = length * e;
              t.style.strokeDashoffset = length - r;
            });
      }
    }),
      "serviceWorker" in navigator &&
        (console.log("service worker working"),
        window.addEventListener("load", () => {
          navigator.serviceWorker.register("/service-worker.js");
        }));
  },
  13: function (e, t, r) {},
  14: function (e, t, r) {},
  15: function (e, t, r) {},
  16: function (e, t, r) {},
  17: function (e, t, r) {},
  18: function (e, t, r) {
    var n = {
      "./education-prize.png": 19,
      "./fintech-prize.png": 20,
      "./first-prize.png": 21,
      "./first-prize.svg": 22,
      "./fresher-prize.png": 23,
      "./girls-prize.png": 24,
      "./hackerfirst.png": 25,
      "./healthcare-prize.png": 26,
      "./oi-prize.png": 27,
      "./prize-upper-card-section.svg": 28,
      "./second-prize.png": 29,
      "./second-prize.svg": 30,
      "./third-prize.png": 31,
      "./third-prize.svg": 32,
    };
    function s(e) {
      var t = o(e);
      return r(t);
    }
    function o(e) {
      if (!r.o(n, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      return n[e];
    }
    (s.keys = function () {
      return Object.keys(n);
    }),
      (s.resolve = o),
      (e.exports = s),
      (s.id = 18);
  },
  19: function (e, t, r) {
    "use strict";
    r.r(t), (t.default = r.p + "assets/education-prize.png");
  },
  20: function (e, t, r) {
    "use strict";
    r.r(t), (t.default = r.p + "assets/fintech-prize.png");
  },
  21: function (e, t, r) {
    "use strict";
    r.r(t), (t.default = r.p + "assets/first-prize.png");
  },
  22: function (e, t, r) {
    "use strict";
    r.r(t), (t.default = r.p + "assets/first-prize.svg");
  },
  23: function (e, t, r) {
    "use strict";
    r.r(t), (t.default = r.p + "assets/fresher-prize.png");
  },
  24: function (e, t, r) {
    "use strict";
    r.r(t), (t.default = r.p + "assets/girls-prize.png");
  },
  25: function (e, t, r) {
    "use strict";
    r.r(t), (t.default = r.p + "assets/hackerfirst.png");
  },
  26: function (e, t, r) {
    "use strict";
    r.r(t), (t.default = r.p + "assets/healthcare-prize.png");
  },
  27: function (e, t, r) {
    "use strict";
    r.r(t), (t.default = r.p + "assets/oi-prize.png");
  },
  28: function (e, t, r) {
    "use strict";
    r.r(t), (t.default = r.p + "assets/prize-upper-card-section.svg");
  },
  29: function (e, t, r) {
    "use strict";
    r.r(t), (t.default = r.p + "assets/second-prize.png");
  },
  3: function (e, t, r) {},
  30: function (e, t, r) {
    "use strict";
    r.r(t), (t.default = r.p + "assets/second-prize.svg");
  },
  31: function (e, t, r) {
    "use strict";
    r.r(t), (t.default = r.p + "assets/third-prize.png");
  },
  32: function (e, t, r) {
    "use strict";
    r.r(t), (t.default = r.p + "assets/third-prize.svg");
  },
  33: function (e, t, r) {},
});
