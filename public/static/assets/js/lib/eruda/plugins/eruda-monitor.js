!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
      ? define([], e)
      : "object" == typeof exports
        ? (exports.erudaMonitor = e())
        : (t.erudaMonitor = e());
})(self, function () {
  return (function () {
    var t = {
        5605: function (t, e, n) {
          "use strict";
          t = n.nmd(t);
          var r,
            o =
              (this && this.__extends) ||
              ((r = function (t, e) {
                return (
                  (r =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) &&
                          (t[n] = e[n]);
                    }),
                  r(t, e)
                );
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null",
                  );
                function n() {
                  this.constructor = t;
                }
                r(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            i =
              (this && this.__makeTemplateObject) ||
              function (t, e) {
                return (
                  Object.defineProperty
                    ? Object.defineProperty(t, "raw", { value: e })
                    : (t.raw = e),
                  t
                );
              },
            s =
              (this && this.__importDefault) ||
              function (t) {
                return t && t.__esModule ? t : { default: t };
              };
          Object.defineProperty(e, "__esModule", { value: !0 });
          var a,
            u = s(n(9115)),
            c = s(n(1907)),
            f = s(n(1512)),
            l = s(n(1571)),
            p = s(n(1194)),
            h = s(n(9702)),
            d = s(n(242)),
            v = s(n(8901)),
            m = s(n(8847)),
            x = s(n(4407)),
            g = s(n(3009)),
            y = s(n(9585)),
            b = n(8267),
            _ = 500,
            w = 0.01,
            M = (function (t) {
              function e(e, n) {
                var r =
                  t.call(this, e, { compName: "performance-monitor" }, n) ||
                  this;
                (r.width = 0),
                  (r.height = 0),
                  (r.curMax = 0),
                  (r.fillColor = ""),
                  (r.metricBuffer = []),
                  (r.poll = function () {
                    var t = r.metricBuffer,
                      e = r.options.data();
                    r.metricBuffer.push({
                      timestamp: (0, p.default)(),
                      value: e,
                    });
                    var n = r.width / w,
                      o = Math.ceil((n / _) * 2);
                    r.metricBuffer.length > 2 * o && t.splice(0, t.length - o),
                      r.$value.text(e + r.options.unit);
                  }),
                  (r.onResize = function () {
                    if (!(0, y.default)(r.container)) {
                      var t = r.canvas;
                      (r.width = t.offsetWidth),
                        (t.width = Math.round(
                          r.width * window.devicePixelRatio,
                        )),
                        (r.height = 100),
                        (t.height = r.height * window.devicePixelRatio);
                    }
                  }),
                  r.initOptions(n, {
                    smooth: !0,
                    unit: "",
                    color: "#1a73e8",
                    max: 0,
                  }),
                  r.initTpl(),
                  (r.$value = r.find(".value")),
                  r.updateColor();
                var o = document.createElement("canvas");
                return (
                  (0, f.default)(o).addClass(r.c("chart")),
                  r.$container.append(o),
                  (r.canvas = o),
                  (r.ctx = o.getContext("2d")),
                  (r.resizeSensor = new d.default(e)),
                  r.bindEvent(),
                  r
                );
              }
              return (
                o(e, t),
                (e.prototype.destroy = function () {
                  this.stop(),
                    this.resizeSensor.destroy(),
                    t.prototype.destroy.call(this),
                    (this.metricBuffer = []);
                }),
                (e.prototype.start = function () {
                  var t = this;
                  (this.pollTimer = setInterval(this.poll, _)),
                    this.poll(),
                    this.onResize();
                  !(function e() {
                    t.draw(), (t.animationId = l.default.call(window, e));
                  })();
                }),
                (e.prototype.stop = function () {
                  clearInterval(this.pollTimer),
                    l.default.cancel.call(window, this.animationId);
                }),
                (e.prototype.updateColor = function () {
                  var t = this.options.color;
                  (this.fillColor = (function (t, e) {
                    var n = new g.default(t),
                      r = n.toRgb(),
                      o = g.default.parse(r);
                    return (o.val[3] = e), new g.default(o).toRgb();
                  })(t, 0.2)),
                    this.$value.css("color", t);
                }),
                Object.defineProperty(e.prototype, "gridColor", {
                  get: function () {
                    return "dark" === this.options.theme
                      ? "rgb(255 255 255 / 8%)"
                      : "rgb(0 0 0 / 8%)";
                  },
                  enumerable: !1,
                  configurable: !0,
                }),
                (e.prototype.bindEvent = function () {
                  var t = this;
                  this.resizeSensor.addListener(
                    (0, v.default)(function () {
                      return t.onResize();
                    }, 16),
                  ),
                    this.on("optionChange", function (e, n) {
                      "color" === e && t.updateColor();
                    });
                }),
                (e.prototype.draw = function () {
                  var t = this,
                    e = t.ctx,
                    n = t.width,
                    r = t.height;
                  e.save(),
                    e.scale(window.devicePixelRatio, window.devicePixelRatio),
                    e.clearRect(0, 0, n, r),
                    this.drawChart(),
                    this.drawHorizontalGrid(),
                    e.restore();
                }),
                (e.prototype.drawChart = function () {
                  var t = this.ctx,
                    e = this.options.color,
                    n = 1.05 * this.calcMax(),
                    r = this.buildMetricPath(n);
                  t.save(),
                    (t.fillStyle = this.fillColor),
                    t.fill(r),
                    (t.strokeStyle = e),
                    (t.lineWidth = 0.5),
                    t.stroke(r),
                    t.restore(),
                    this.drawVerticalGrid(n);
                }),
                (e.prototype.buildMetricPath = function (t) {
                  var e = this,
                    n = e.width,
                    r = e.height,
                    o = e.metricBuffer,
                    i = this.options.smooth,
                    s = new Path2D(),
                    a = r - 18,
                    u = (0, p.default)() - _ - n / w,
                    c = 0,
                    f = 0,
                    l = 0;
                  o.length &&
                    ((c = (o[0].timestamp - u) * w),
                    s.moveTo(c, y(0)),
                    s.lineTo(n + 5, y(0)),
                    (f = y((0, h.default)(o).value)),
                    (l = n + 5),
                    s.lineTo(l, f));
                  for (var d = o.length - 1; d >= 0; --d) {
                    var v = o[d],
                      m = v.timestamp,
                      x = y(v.value);
                    if (((c = (m - u) * w), i)) {
                      var g = (l + c) / 2;
                      s.bezierCurveTo(g, f, g, x, c, x);
                    } else s.lineTo(c, f), s.lineTo(c, x);
                    if (((l = c), (f = x), m < u)) break;
                  }
                  return s;
                  function y(e) {
                    return Math.round(r - (a * e) / t) + 0.5;
                  }
                }),
                (e.prototype.calcMax = function () {
                  if (this.options.max) return this.options.max;
                  for (
                    var t = this.width,
                      e = this.metricBuffer,
                      n = (0, p.default)() - _ - t / w,
                      r = -1 / 0,
                      o = e.length - 1;
                    o >= 0;
                    --o
                  ) {
                    var i = e[o],
                      s = i.value;
                    if (((r = Math.max(r, s)), i.timestamp < n)) break;
                  }
                  if (!e.length) return 10;
                  var a = Math.pow(10, Math.floor(Math.log10(r)));
                  r = Math.ceil(r / a / 2) * a * 2;
                  return (
                    (this.curMax = 0.2 * r + 0.8 * (this.curMax || r)),
                    this.curMax
                  );
                }),
                (e.prototype.drawHorizontalGrid = function () {
                  var t = this.ctx,
                    e = this.options.theme,
                    n =
                      "dark" === e
                        ? "rgb(255 255 255 / 2%)"
                        : "rgb(0 0 0 / 2%)";
                  (t.font = "10px Arial, Helvetica, sans-serif"),
                    (t.fillStyle =
                      "dark" === e
                        ? "rgba(255, 255, 255, 0.5)"
                        : "rgba(0, 0, 0, 0.5)");
                  for (
                    var r = (0, m.default)() / 1e3, o = Math.ceil(r);
                    --o;

                  ) {
                    var i = this.width - (1e3 * (r - o) - _) * w;
                    if (i < -50) break;
                    t.beginPath(),
                      t.moveTo(i, 0),
                      t.lineTo(i, this.height),
                      o >= 0 &&
                        o % 10 == 0 &&
                        t.fillText(
                          (0, x.default)(new Date(1e3 * o), "HH:MM:ss"),
                          i + 4,
                          12,
                        ),
                      (t.strokeStyle = o % 10 ? n : this.gridColor),
                      t.stroke();
                  }
                }),
                (e.prototype.drawVerticalGrid = function (t) {
                  var e = this.ctx,
                    n = this.height,
                    r = this.options,
                    o = r.unit,
                    i = r.theme,
                    s = Math.pow(10, Math.floor(Math.log10(t))),
                    a = Math.floor(t / s);
                  1 !== a && a % 2 == 1 && (s *= 2);
                  var u = Math.floor(t / s) * s,
                    c = n - 18;
                  (e.fillStyle =
                    "dark" === i
                      ? "rgba(255, 255, 255, 0.5)"
                      : "rgba(0, 0, 0, 0.5)"),
                    (e.strokeStyle = this.gridColor),
                    e.beginPath();
                  for (var f = 0; f < 2; ++f) {
                    var l = h(u),
                      p = u + o;
                    e.moveTo(0, l),
                      e.lineTo(4, l),
                      e.moveTo(e.measureText(p).width + 12, l),
                      e.lineTo(this.width, l),
                      e.fillText(p, 8, h(u) + 3),
                      (u /= 2);
                  }
                  function h(e) {
                    return Math.round(n - (c * e) / t) + 0.5;
                  }
                  e.stroke(),
                    e.beginPath(),
                    e.moveTo(0, n + 0.5),
                    e.lineTo(this.width, n + 0.5),
                    (e.strokeStyle =
                      "dark" === i
                        ? "rgba(255, 255, 255, 0.2)"
                        : "rgba(0, 0, 0, 0.2)"),
                    e.stroke();
                }),
                (e.prototype.initTpl = function () {
                  var t = this.options.title;
                  this.$container.html(
                    this.c(
                      (0, c.default)(
                        a ||
                          (a = i(
                            [
                              '\n      <div class="title">',
                              '<span class="value"></span></div>\n      ',
                            ],
                            [
                              '\n      <div class="title">',
                              '<span class="value"></span></div>\n      ',
                            ],
                          )),
                        t,
                      ),
                    ),
                  );
                }),
                e
              );
            })(u.default);
          (e.default = M), (0, b.exportCjs)(t, M);
        },
        9115: function (t, e, n) {
          "use strict";
          var r,
            o =
              (this && this.__extends) ||
              ((r = function (t, e) {
                return (
                  (r =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                      function (t, e) {
                        t.__proto__ = e;
                      }) ||
                    function (t, e) {
                      for (var n in e)
                        Object.prototype.hasOwnProperty.call(e, n) &&
                          (t[n] = e[n]);
                    }),
                  r(t, e)
                );
              }),
              function (t, e) {
                if ("function" != typeof e && null !== e)
                  throw new TypeError(
                    "Class extends value " +
                      String(e) +
                      " is not a constructor or null",
                  );
                function n() {
                  this.constructor = t;
                }
                r(t, e),
                  (t.prototype =
                    null === e
                      ? Object.create(e)
                      : ((n.prototype = e.prototype), new n()));
              }),
            i =
              (this && this.__importDefault) ||
              function (t) {
                return t && t.__esModule ? t : { default: t };
              };
          Object.defineProperty(e, "__esModule", { value: !0 });
          var s = i(n(1443)),
            a = i(n(1512)),
            u = n(8267),
            c = i(n(3783)),
            f = i(n(6329)),
            l = i(n(4193)),
            p = i(n(5852)),
            h = (function (t) {
              function e(e, n, r) {
                var o = n.compName,
                  i = (void 0 === r ? {} : r).theme,
                  s = void 0 === i ? "light" : i,
                  f = t.call(this) || this;
                return (
                  (f.subComponents = []),
                  (f.compName = o),
                  (f.c = (0, u.classPrefix)(o)),
                  (f.options = {}),
                  (f.container = e),
                  (f.$container = (0, a.default)(e)),
                  f.$container.addClass([
                    "luna-".concat(o),
                    f.c("platform-".concat((0, u.getPlatform)())),
                  ]),
                  f.on("optionChange", function (t, e, n) {
                    var r = f.c;
                    "theme" === t &&
                      (f.$container
                        .rmClass(r("theme-".concat(n)))
                        .addClass(r("theme-".concat(e))),
                      (0, c.default)(f.subComponents, function (t) {
                        return t.setOption("theme", e);
                      }));
                  }),
                  f.setOption("theme", s),
                  f
                );
              }
              return (
                o(e, t),
                (e.prototype.destroy = function () {
                  this.destroySubComponents();
                  var t = this.c;
                  this.$container
                    .rmClass("luna-".concat(this.compName))
                    .rmClass(t("platform-".concat((0, u.getPlatform)())))
                    .rmClass(t("theme-".concat(this.options.theme))),
                    this.$container.html(""),
                    this.emit("destroy"),
                    this.removeAllListeners();
                }),
                (e.prototype.setOption = function (t, e) {
                  var n = this,
                    r = this.options,
                    o = {};
                  "string" == typeof t ? (o[t] = e) : (o = t),
                    (0, c.default)(o, function (t, e) {
                      var o = r[e];
                      (r[e] = t), n.emit("optionChange", e, t, o);
                    });
                }),
                (e.prototype.getOption = function (t) {
                  return this.options[t];
                }),
                (e.prototype.addSubComponent = function (t) {
                  t.setOption("theme", this.options.theme),
                    this.subComponents.push(t);
                }),
                (e.prototype.removeSubComponent = function (t) {
                  (0, p.default)(this.subComponents, function (e) {
                    return e === t;
                  });
                }),
                (e.prototype.destroySubComponents = function () {
                  (0, c.default)(this.subComponents, function (t) {
                    return t.destroy();
                  }),
                    (this.subComponents = []);
                }),
                (e.prototype.initOptions = function (t, e) {
                  void 0 === e && (e = {}),
                    (0, l.default)(t, e),
                    (0, f.default)(this.options, t);
                }),
                (e.prototype.find = function (t) {
                  return this.$container.find(this.c(t));
                }),
                e
              );
            })(s.default);
          e.default = h;
        },
        8267: function (t, e, n) {
          "use strict";
          var r =
            (this && this.__importDefault) ||
            function (t) {
              return t && t.__esModule ? t : { default: t };
            };
          Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.resetCanvasSize =
              e.getPlatform =
              e.pxToNum =
              e.executeAfterTransition =
              e.hasVerticalScrollbar =
              e.measuredScrollbarWidth =
              e.eventPage =
              e.eventClient =
              e.drag =
              e.hasTouchSupport =
              e.classPrefix =
              e.exportCjs =
                void 0);
          var o = r(n(2461)),
            i = r(n(4331)),
            s = r(n(5610)),
            a = r(n(7483)),
            u = r(n(3990)),
            c = r(n(6341)),
            f = r(n(3875)),
            l = r(n(6954)),
            p = r(n(9585));
          function h(t, e) {
            for (var n = 0, r = t.length; n < r; n++) {
              var o = t[n];
              e(o), o.content && h(o.content, e);
            }
          }
          (e.exportCjs = function (t, e) {
            try {
              (t.exports = e), (t.exports.default = e);
            } catch (t) {}
          }),
            (e.classPrefix = function (t) {
              var e = "luna-".concat(t, "-");
              function n(t) {
                return (0, o.default)(
                  (0, i.default)(t).split(/\s+/),
                  function (t) {
                    return (0, c.default)(t, e)
                      ? t
                      : t.replace(/[\w-]+/, function (t) {
                          return "".concat(e).concat(t);
                        });
                  },
                ).join(" ");
              }
              return function (t) {
                if (/<[^>]*>/g.test(t))
                  try {
                    var e = a.default.parse(t);
                    return (
                      h(e, function (t) {
                        t.attrs &&
                          t.attrs.class &&
                          (t.attrs.class = n(t.attrs.class));
                      }),
                      a.default.stringify(e)
                    );
                  } catch (e) {
                    return n(t);
                  }
                return n(t);
              };
            }),
            (e.hasTouchSupport = "ontouchstart" in s.default);
          var d,
            v = { start: "touchstart", move: "touchmove", end: "touchend" },
            m = { start: "mousedown", move: "mousemove", end: "mouseup" };
          (e.drag = function (t) {
            return e.hasTouchSupport ? v[t] : m[t];
          }),
            (e.eventClient = function (t, e) {
              var n = "x" === t ? "clientX" : "clientY";
              return e[n]
                ? e[n]
                : e.changedTouches
                  ? e.changedTouches[0][n]
                  : 0;
            }),
            (e.eventPage = function (t, e) {
              var n = "x" === t ? "pageX" : "pageY";
              return e[n]
                ? e[n]
                : e.changedTouches
                  ? e.changedTouches[0][n]
                  : 0;
            }),
            (e.measuredScrollbarWidth = function () {
              if ((0, u.default)(d)) return d;
              if (!document) return 16;
              var t = document.createElement("div"),
                e = document.createElement("div");
              t.setAttribute(
                "style",
                "display: block; width: 100px; height: 100px; overflow: scroll;",
              ),
                e.setAttribute("style", "height: 200px"),
                t.appendChild(e);
              var n = document.body || document.documentElement;
              return (
                n.appendChild(t),
                (d = t.offsetWidth - t.clientWidth),
                n.removeChild(t),
                d
              );
            }),
            (e.hasVerticalScrollbar = function (t) {
              return t.scrollHeight > t.offsetHeight;
            }),
            (e.executeAfterTransition = function (t, e) {
              if ((0, p.default)(t)) return e();
              t.addEventListener("transitionend", function n(r) {
                r.target === t &&
                  (t.removeEventListener("transitionend", n), e());
              });
            }),
            (e.pxToNum = function (t) {
              return (0, f.default)(t.replace("px", ""));
            }),
            (e.getPlatform = function () {
              var t = (0, l.default)();
              return "os x" === t ? "mac" : t;
            }),
            (e.resetCanvasSize = function (t) {
              (t.width = Math.round(t.offsetWidth * window.devicePixelRatio)),
                (t.height = Math.round(
                  t.offsetHeight * window.devicePixelRatio,
                ));
            });
        },
        2352: function (t, e, n) {
          var r = n(6690),
            o = n(9728),
            i = n(6115),
            s = n(1588),
            a = n(1655),
            u = n(4993),
            c = n(3808),
            f = n(8416);
          function l(t) {
            var e = (function () {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {}),
                  ),
                  !0
                );
              } catch (t) {
                return !1;
              }
            })();
            return function () {
              var n,
                r = c(t);
              if (e) {
                var o = c(this).constructor;
                n = Reflect.construct(r, arguments, o);
              } else n = r.apply(this, arguments);
              return u(this, n);
            };
          }
          var p = n(5605),
            h = n(1571),
            d = n(8847),
            v = n(6341);
          t.exports = function (t) {
            var e = t.util.evalCss;
            return new ((function (u) {
              "use strict";
              a(g, u);
              var x = l(g);
              function g() {
                var t;
                return (
                  r(this, g),
                  (t = x.call(this)),
                  f(i(t), "_onThemeChange", function (e, n) {
                    var r = t._fpsMonitor,
                      o = t._memoryMonitor;
                    if ("theme" === e) {
                      var i = t._getTheme();
                      r.setOption({ color: t._getColor(), theme: i }),
                        o && o.setOption({ color: t._getColor(), theme: i });
                    }
                  }),
                  (t.name = "monitor"),
                  (t._style = e(n(3339) + n(6773))),
                  t
                );
              }
              return (
                o(g, [
                  {
                    key: "init",
                    value: function (e, n) {
                      s(c(g.prototype), "init", this).call(this, e, n),
                        e.html(
                          '<div class="eruda-fps"></div><div class="eruda-memory"></div>',
                        ),
                        this._initFps(e.find(".eruda-fps").get(0)),
                        performance.memory &&
                          this._initMemory(e.find(".eruda-memory").get(0)),
                        t.get().config.on("change", this._onThemeChange);
                    },
                  },
                  {
                    key: "show",
                    value: function () {
                      s(c(g.prototype), "show", this).call(this),
                        this._fpsMonitor.start(),
                        this._memoryMonitor && this._memoryMonitor.start();
                    },
                  },
                  {
                    key: "hide",
                    value: function () {
                      s(c(g.prototype), "hide", this).call(this),
                        this._fpsMonitor.stop(),
                        this._memoryMonitor && this._memoryMonitor.stop();
                    },
                  },
                  {
                    key: "destroy",
                    value: function () {
                      t.get().config.off("change", this._onThemeChange),
                        this._fpsMonitor.destroy(),
                        this._memoryMonitor && this._memoryMonitor.destroy(),
                        s(c(g.prototype), "destroy", this).call(this),
                        e.remove(this._style);
                    },
                  },
                  {
                    key: "_getColor",
                    value: function () {
                      return t.util.evalCss.getCurTheme().accent;
                    },
                  },
                  {
                    key: "_getTheme",
                    value: function () {
                      return (
                        (e = t.get().config.get("theme")),
                        v(m, e) ? "dark" : "light"
                      );
                      var e;
                    },
                  },
                  {
                    key: "_initFps",
                    value: function (t) {
                      var e,
                        n = 0,
                        r = 0,
                        o = 0;
                      !(function t() {
                        n++;
                        var i = d();
                        i > r + 1e3 &&
                          ((o = Math.round((1e3 * n) / (i - r))),
                          (r = i),
                          (n = 0)),
                          (e = h(t));
                      })();
                      var i = new p(t, {
                        title: "FPS",
                        color: this._getColor(),
                        smooth: !1,
                        theme: this._getTheme(),
                        data: function () {
                          return o;
                        },
                      });
                      i.on("destroy", function () {
                        return h.cancel.call(window, e);
                      }),
                        (this._fpsMonitor = i);
                    },
                  },
                  {
                    key: "_initMemory",
                    value: function (t) {
                      var e = new p(t, {
                        title: "Used JS heap size",
                        unit: "MB",
                        color: this._getColor(),
                        smooth: !1,
                        theme: this._getTheme(),
                        data: function () {
                          return (
                            performance.memory.usedJSHeapSize /
                            1024 /
                            1024
                          ).toFixed(1);
                        },
                      });
                      this._memoryMonitor = e;
                    },
                  },
                ]),
                g
              );
            })(t.Tool))();
          };
          var m = [
            "Dark",
            "Material Oceanic",
            "Material Darker",
            "Material Palenight",
            "Material Deep Ocean",
            "Monokai Pro",
            "Dracula",
            "Arc Dark",
            "Atom One Dark",
            "Solarized Dark",
            "Night Owl",
          ];
        },
        6773: function (t, e, n) {
          (e = n(3645)(!1)).push([
            t.id,
            ".eruda-dev-tools .eruda-tools .luna-performance-monitor{box-shadow:0 2px 2px 0 rgba(0,0,0,.07),0 1px 5px 0 rgba(0,0,0,.1);background:#fff;width:100%;padding:5px}.eruda-dev-tools .eruda-tools .luna-performance-monitor.luna-performance-monitor-theme-dark{box-shadow:0 2px 2px 0 rgba(255,255,255,.07),0 1px 5px 0 rgba(255,255,255,.1);background:#242424}.eruda-dev-tools .eruda-tools .luna-performance-monitor-title{font-size:14px;margin-bottom:5px;color:#333}.eruda-dev-tools .eruda-tools .luna-performance-monitor-value{float:right}.eruda-dev-tools .eruda-tools .luna-performance-monitor-chart{box-sizing:border-box;border:1px solid #ccc;width:100%;height:100px}.eruda-dev-tools .eruda-tools .luna-performance-monitor-theme-dark .luna-performance-monitor-title{color:#a5a5a5}.eruda-dev-tools .eruda-tools .luna-performance-monitor-theme-dark .luna-performance-monitor-chart{border-color:#3d3d3d}",
            "",
          ]),
            (t.exports = e);
        },
        3339: function (t, e, n) {
          (e = n(3645)(!1)).push([
            t.id,
            ".eruda-dev-tools .eruda-tools .eruda-monitor{padding:10px}.eruda-dev-tools .eruda-tools .eruda-monitor .eruda-memory{margin:10px 0}\n",
            "",
          ]),
            (t.exports = e);
        },
        3645: function (t) {
          "use strict";
          t.exports = function (t) {
            var e = [];
            return (
              (e.toString = function () {
                return this.map(function (e) {
                  var n = (function (t, e) {
                    var n = t[1] || "",
                      r = t[3];
                    if (!r) return n;
                    if (e && "function" == typeof btoa) {
                      var o =
                          ((s = r),
                          (a = btoa(
                            unescape(encodeURIComponent(JSON.stringify(s))),
                          )),
                          (u =
                            "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                              a,
                            )),
                          "/*# ".concat(u, " */")),
                        i = r.sources.map(function (t) {
                          return "/*# sourceURL="
                            .concat(r.sourceRoot || "")
                            .concat(t, " */");
                        });
                      return [n].concat(i).concat([o]).join("\n");
                    }
                    var s, a, u;
                    return [n].join("\n");
                  })(e, t);
                  return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n;
                }).join("");
              }),
              (e.i = function (t, n, r) {
                "string" == typeof t && (t = [[null, t, ""]]);
                var o = {};
                if (r)
                  for (var i = 0; i < this.length; i++) {
                    var s = this[i][0];
                    null != s && (o[s] = !0);
                  }
                for (var a = 0; a < t.length; a++) {
                  var u = [].concat(t[a]);
                  (r && o[u[0]]) ||
                    (n &&
                      (u[2]
                        ? (u[2] = "".concat(n, " and ").concat(u[2]))
                        : (u[2] = n)),
                    e.push(u));
                }
              }),
              e
            );
          };
        },
        1512: function (t, e, n) {
          var r = n(3244),
            o = n(6906),
            i = n(7665),
            s = n(975),
            a = n(4991),
            u = n(4209),
            c = n(9702),
            f = n(6757),
            l = n(8381),
            p = n(5543),
            h = n(7781),
            d = n(8908),
            v = n(1286),
            m = n(6768);
          (e = function (t) {
            return new r(t);
          }),
            r.methods({
              offset: function () {
                return o(this);
              },
              hide: function () {
                return this.css("display", "none");
              },
              show: function () {
                return i(this), this;
              },
              first: function () {
                return e(this[0]);
              },
              last: function () {
                return e(c(this));
              },
              get: function (t) {
                return this[t];
              },
              eq: function (t) {
                return e(this[t]);
              },
              on: function (t, e, n) {
                return p.on(this, t, e, n), this;
              },
              off: function (t, e, n) {
                return p.off(this, t, e, n), this;
              },
              html: function (t) {
                var e = u.html(this, t);
                return v(t) ? e : this;
              },
              text: function (t) {
                var e = u.text(this, t);
                return v(t) ? e : this;
              },
              val: function (t) {
                var e = u.val(this, t);
                return v(t) ? e : this;
              },
              css: function (t, e) {
                var n = s(this, t, e);
                return x(t, e) ? n : this;
              },
              attr: function (t, e) {
                var n = a(this, t, e);
                return x(t, e) ? n : this;
              },
              data: function (t, e) {
                var n = l(this, t, e);
                return x(t, e) ? n : this;
              },
              rmAttr: function (t) {
                return a.remove(this, t), this;
              },
              remove: function () {
                return f(this), this;
              },
              addClass: function (t) {
                return h.add(this, t), this;
              },
              rmClass: function (t) {
                return h.remove(this, t), this;
              },
              toggleClass: function (t) {
                return h.toggle(this, t), this;
              },
              hasClass: function (t) {
                return h.has(this, t);
              },
              parent: function () {
                return e(this[0].parentNode);
              },
              append: function (t) {
                return d.append(this, t), this;
              },
              prepend: function (t) {
                return d.prepend(this, t), this;
              },
              before: function (t) {
                return d.before(this, t), this;
              },
              after: function (t) {
                return d.after(this, t), this;
              },
            });
          var x = function (t, e) {
            return v(e) && m(t);
          };
          t.exports = e;
        },
        4991: function (t, e, n) {
          var r = n(1352),
            o = n(5166),
            i = n(6768),
            s = n(3783),
            a = n(1286),
            u = n(2341);
          ((e = function (t, e, n) {
            if (((t = u(t)), a(n) && i(e)))
              return (function (t, e) {
                return t.getAttribute(e);
              })(t[0], e);
            var r = e;
            o(r) || ((r = {})[e] = n),
              (function (t, e) {
                s(t, function (t) {
                  s(e, function (e, n) {
                    t.setAttribute(n, e);
                  });
                });
              })(t, r);
          }).remove = function (t, e) {
            (t = u(t)),
              (e = r(e)),
              s(t, function (t) {
                s(e, function (e) {
                  t.removeAttribute(e);
                });
              });
          }),
            (t.exports = e);
        },
        7781: function (t, e, n) {
          var r = n(1352),
            o = n(6053),
            i = n(2341),
            s = n(6768),
            a = n(3783);
          function u(t) {
            return s(t) ? t.split(/\s+/) : r(t);
          }
          (e = {
            add: function (t, n) {
              t = i(t);
              var r = u(n);
              a(t, function (t) {
                var n = [];
                a(r, function (r) {
                  e.has(t, r) || n.push(r);
                }),
                  0 !== n.length &&
                    (t.className += (t.className ? " " : "") + n.join(" "));
              });
            },
            has: function (t, e) {
              t = i(t);
              var n = new RegExp("(^|\\s)" + e + "(\\s|$)");
              return o(t, function (t) {
                return n.test(t.className);
              });
            },
            toggle: function (t, n) {
              (t = i(t)),
                a(t, function (t) {
                  if (!e.has(t, n)) return e.add(t, n);
                  e.remove(t, n);
                });
            },
            remove: function (t, e) {
              t = i(t);
              var n = u(e);
              a(t, function (t) {
                a(n, function (e) {
                  t.classList.remove(e);
                });
              });
            },
          }),
            (t.exports = e);
        },
        975: function (t, e, n) {
          var r = n(6768),
            o = n(5166),
            i = n(7622),
            s = n(1286),
            a = n(6341),
            u = n(3990),
            c = n(2341),
            f = n(747),
            l = n(3783);
          e = function (t, e, n) {
            if (((t = c(t)), s(n) && r(e)))
              return (function (t, e) {
                return (
                  t.style[f(e)] || getComputedStyle(t, "").getPropertyValue(e)
                );
              })(t[0], e);
            var h = e;
            o(h) || ((h = {})[e] = n),
              (function (t, e) {
                l(t, function (t) {
                  var n = ";";
                  l(e, function (t, e) {
                    (e = f.dash(e)),
                      (n +=
                        e +
                        ":" +
                        (function (t, e) {
                          var n = u(e) && !a(p, i(t));
                          return n ? e + "px" : e;
                        })(e, t) +
                        ";");
                  }),
                    (t.style.cssText += n);
                });
              })(t, h);
          };
          var p = [
            "column-count",
            "columns",
            "font-weight",
            "line-weight",
            "opacity",
            "z-index",
            "zoom",
          ];
          t.exports = e;
        },
        8381: function (t, e, n) {
          var r = n(4991),
            o = n(6768),
            i = n(5166),
            s = n(3783);
          n(2341);
          (e = function (t, e, n) {
            var a = e;
            return (
              o(e) && (a = "data-" + e),
              i(e) &&
                ((a = {}),
                s(e, function (t, e) {
                  a["data-" + e] = t;
                })),
              r(t, a, n)
            );
          }),
            (t.exports = e);
        },
        5543: function (t, e, n) {
          var r = n(2443),
            o = n(1286),
            i = n(2341),
            s = n(3783);
          function a(t) {
            return function (e, n, a, u) {
              (e = i(e)),
                o(u) && ((u = a), (a = void 0)),
                s(e, function (e) {
                  r[t](e, n, a, u);
                });
            };
          }
          (e = { on: a("add"), off: a("remove") }), (t.exports = e);
        },
        8908: function (t, e, n) {
          var r = n(3783),
            o = n(2341),
            i = n(6768);
          function s(t) {
            return function (e, n) {
              (e = o(e)),
                r(e, function (e) {
                  if (i(n)) e.insertAdjacentHTML(t, n);
                  else {
                    var r = e.parentNode;
                    switch (t) {
                      case "beforebegin":
                        r && r.insertBefore(n, e);
                        break;
                      case "afterend":
                        r && r.insertBefore(n, e.nextSibling);
                        break;
                      case "beforeend":
                        e.appendChild(n);
                        break;
                      case "afterbegin":
                        e.prepend(n);
                    }
                  }
                });
            };
          }
          (e = {
            before: s("beforebegin"),
            after: s("afterend"),
            append: s("beforeend"),
            prepend: s("afterbegin"),
          }),
            (t.exports = e);
        },
        6906: function (t, e, n) {
          var r = n(2341);
          (e = function (t) {
            var e = (t = r(t))[0].getBoundingClientRect();
            return {
              left: e.left + window.pageXOffset,
              top: e.top + window.pageYOffset,
              width: Math.round(e.width),
              height: Math.round(e.height),
            };
          }),
            (t.exports = e);
        },
        4209: function (t, e, n) {
          var r = n(1286),
            o = n(3783),
            i = n(2341);
          function s(t) {
            return function (e, n) {
              var s = (e = i(e))[0];
              if (r(n)) return s ? s[t] : "";
              s &&
                o(e, function (e) {
                  e[t] = n;
                });
            };
          }
          (e = {
            html: s("innerHTML"),
            text: s("textContent"),
            val: s("value"),
          }),
            (t.exports = e);
        },
        6757: function (t, e, n) {
          var r = n(3783),
            o = n(2341);
          (e = function (t) {
            (t = o(t)),
              r(t, function (t) {
                var e = t.parentNode;
                e && e.removeChild(t);
              });
          }),
            (t.exports = e);
        },
        2341: function (t, e, n) {
          var r = n(6768),
            o = n(1352),
            i = n(3244);
          (e = function (t) {
            return o(r(t) ? new i(t) : t);
          }),
            (t.exports = e);
        },
        7665: function (t, e, n) {
          var r = n(3783),
            o = n(2341);
          e = function (t) {
            (t = o(t)),
              r(t, function (t) {
                (function (t) {
                  return (
                    "none" ==
                    getComputedStyle(t, "").getPropertyValue("display")
                  );
                })(t) &&
                  (t.style.display = (function (t) {
                    var e, n;
                    i[t] ||
                      ((e = document.createElement(t)),
                      document.documentElement.appendChild(e),
                      (n = getComputedStyle(e, "").getPropertyValue("display")),
                      e.parentNode.removeChild(e),
                      "none" == n && (n = "block"),
                      (i[t] = n));
                    return i[t];
                  })(t.nodeName));
              });
          };
          var i = {};
          t.exports = e;
        },
        7496: function (t, e, n) {
          var r = n(6329),
            o = n(1352),
            i = n(5022),
            s = n(7653),
            a = n(9537);
          var u = ((e = function (t, e) {
            return u.extend(t, e);
          }).Base = (function t(e, n, u) {
            u = u || {};
            var c = n.className || s(n, "initialize.name") || "";
            delete n.className;
            var f = function () {
              var t = o(arguments);
              return (
                (this.initialize && this.initialize.apply(this, t)) || this
              );
            };
            if (!a)
              try {
                f = new Function(
                  "toArr",
                  "return function " +
                    c +
                    "(){var args = toArr(arguments);return this.initialize ? this.initialize.apply(this, args) || this : this;};",
                )(o);
              } catch (t) {}
            return (
              i(f, e),
              (f.prototype.constructor = f),
              (f.extend = function (e, n) {
                return t(f, e, n);
              }),
              (f.inherits = function (t) {
                i(f, t);
              }),
              (f.methods = function (t) {
                return r(f.prototype, t), f;
              }),
              (f.statics = function (t) {
                return r(f, t), f;
              }),
              f.methods(n).statics(u),
              f
            );
          })(Object, {
            className: "Base",
            callSuper: function (t, e, n) {
              return t.prototype[e].apply(this, n);
            },
            toString: function () {
              return this.constructor.name;
            },
          }));
          t.exports = e;
        },
        3009: function (t, e, n) {
          var r = n(7496),
            o = n(6768),
            i = n(9882),
            s = n(3279),
            a = n(5925),
            u = n(5044);
          e = r(
            {
              initialize: function (t) {
                o(t) && (t = e.parse(t)),
                  (this.model = t.model),
                  (this.val = t.val);
              },
              toRgb: function () {
                var t = this.val;
                "hsl" === this.model && (t = a(t));
                var e = "rgba";
                return (
                  1 === t[3] && ((e = "rgb"), (t = t.slice(0, 3))),
                  e + "(" + t.join(", ") + ")"
                );
              },
              toHex: function () {
                var t = this.val;
                "hsl" === this.model && (t = a(t));
                var e = u.encode(t.slice(0, 3));
                return (
                  e[0] === e[1] &&
                    e[2] === e[3] &&
                    e[4] === e[5] &&
                    (e = e[0] + e[2] + e[5]),
                  "#" + e
                );
              },
              toHsl: function () {
                var t = this.val;
                "rgb" === this.model && (t = s(t));
                var e = "hsla";
                return (
                  1 === t[3] && ((e = "hsl"), (t = t.slice(0, 3))),
                  (t[1] = t[1] + "%"),
                  (t[2] = t[2] + "%"),
                  e + "(" + t.join(", ") + ")"
                );
              },
            },
            {
              parse: function (t) {
                var e,
                  n,
                  r = [0, 0, 0, 1],
                  o = "rgb";
                if ((n = t.match(c)))
                  for (n = n[1], e = 0; e < 3; e++)
                    r[e] = parseInt(n[e] + n[e], 16);
                else if ((n = t.match(f)))
                  for (n = n[1], e = 0; e < 3; e++) {
                    var s = 2 * e;
                    r[e] = parseInt(n.slice(s, s + 2), 16);
                  }
                else if ((n = t.match(l))) {
                  for (e = 0; e < 3; e++) r[e] = parseInt(n[e + 1], 0);
                  n[4] && (r[3] = parseFloat(n[4]));
                } else if ((n = t.match(p))) {
                  for (e = 0; e < 3; e++)
                    r[e] = Math.round(2.55 * parseFloat(n[e + 1]));
                  n[4] && (r[3] = parseFloat(n[4]));
                } else
                  (n = t.match(h)) &&
                    ((o = "hsl"),
                    (r = [
                      ((parseFloat(n[1]) % 360) + 360) % 360,
                      i(parseFloat(n[2]), 0, 100),
                      i(parseFloat(n[3]), 0, 100),
                      i(parseFloat(n[4]), 0, 1),
                    ]));
                return { val: r, model: o };
              },
            },
          );
          var c = /^#([a-fA-F0-9]{3})$/,
            f = /^#([a-fA-F0-9]{6})$/,
            l =
              /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d.]+)\s*)?\)$/,
            p =
              /^rgba?\(\s*([+-]?[\d.]+)%\s*,\s*([+-]?[\d.]+)%\s*,\s*([+-]?[\d.]+)%\s*(?:,\s*([+-]?[\d.]+)\s*)?\)$/,
            h =
              /^hsla?\(\s*([+-]?\d*[.]?\d+)(?:deg)?\s*,\s*([+-]?[\d.]+)%\s*,\s*([+-]?[\d.]+)%\s*(?:,\s*([+-]?[\d.]+)\s*)?\)$/;
          t.exports = e;
        },
        1443: function (t, e, n) {
          var r = n(7496),
            o = n(6257),
            i = n(3783),
            s = n(9677),
            a = n(8763),
            u = n(4675);
          (e = r(
            {
              initialize: function () {
                this._events = this._events || {};
              },
              on: function (t, e) {
                return (
                  (this._events[t] = this._events[t] || []),
                  this._events[t].push(e),
                  this
                );
              },
              off: function (t, e) {
                var n = this._events;
                if (o(n, t)) {
                  var r = n[t].indexOf(e);
                  return r > -1 && n[t].splice(r, 1), this;
                }
              },
              once: function (t, e) {
                return this.on(t, a(e)), this;
              },
              emit: function (t) {
                var e = this;
                if (o(this._events, t)) {
                  var n = s(arguments, 1),
                    r = u(this._events[t]);
                  return (
                    i(
                      r,
                      function (t) {
                        return t.apply(e, n);
                      },
                      this,
                    ),
                    this
                  );
                }
              },
              removeAllListeners: function (t) {
                return t ? delete this._events[t] : (this._events = {}), this;
              },
            },
            {
              mixin: function (t) {
                i(
                  ["on", "off", "once", "emit", "removeAllListeners"],
                  function (n) {
                    t[n] = e.prototype[n];
                  },
                ),
                  (t._events = t._events || {});
              },
            },
          )),
            (t.exports = e);
        },
        242: function (t, e, n) {
          var r = n(8985),
            o = n(8613),
            i = n(5543),
            s = n(975),
            a = n(6341),
            u = n(6329),
            c = n(5610);
          (e = c.ResizeObserver
            ? r.extend({
                initialize: function (t) {
                  var e = this;
                  if (t._resizeSensor) return t._resizeSensor;
                  this.callSuper(r, "initialize");
                  var n = new c.ResizeObserver(function () {
                    return e.emit();
                  });
                  n.observe(t),
                    (t._resizeSensor = this),
                    (this._resizeObserver = n),
                    (this._el = t);
                },
                destroy: function () {
                  var t = this._el;
                  t._resizeSensor &&
                    (this.rmAllListeners(),
                    delete t._resizeSensor,
                    this._resizeObserver.unobserve(t));
                },
              })
            : r.extend({
                initialize: function (t) {
                  if (t._resizeSensor) return t._resizeSensor;
                  this.callSuper(r, "initialize"),
                    (this._el = t),
                    (t._resizeSensor = this),
                    a(
                      ["absolute", "relative", "fixed", "sticky"],
                      s(t, "position"),
                    ) || s(t, "position", "relative"),
                    this._appendResizeSensor(),
                    this._bindEvent();
                },
                destroy: function () {
                  var t = this._el;
                  t._resizeSensor &&
                    (this.rmAllListeners(),
                    delete t._resizeSensor,
                    t.removeChild(this._resizeSensorEl));
                },
                _appendResizeSensor: function () {
                  var t = this._el,
                    e = {
                      pointerEvents: "none",
                      position: "absolute",
                      left: "0px",
                      top: "0px",
                      right: "0px",
                      bottom: "0px",
                      overflow: "hidden",
                      zIndex: "-1",
                      visibility: "hidden",
                      maxWidth: "100%",
                    },
                    n = {
                      position: "absolute",
                      left: "0px",
                      top: "0px",
                      transition: "0s",
                    },
                    r = o("div", { style: n }),
                    i = o("div.resize-sensor-expand", { style: e }, r),
                    s = o(
                      "div.resize-sensor-shrink",
                      { style: e },
                      o("div", {
                        style: u({ width: "200%", height: "200%" }, n),
                      }),
                    ),
                    a = o("div.resize-sensor", { dir: "ltr", style: e }, i, s);
                  (this._expandEl = i),
                    (this._expandChildEl = r),
                    (this._shrinkEl = s),
                    (this._resizeSensorEl = a),
                    t.appendChild(a),
                    this._resetExpandShrink();
                },
                _bindEvent: function () {
                  var t = this;
                  i.on(this._expandEl, "scroll", function () {
                    return t._onScroll();
                  }),
                    i.on(this._shrinkEl, "scroll", function () {
                      return t._onScroll();
                    });
                },
                _onScroll: function () {
                  this.emit(), this._resetExpandShrink();
                },
                _resetExpandShrink: function () {
                  var t = this._el,
                    e = t.offsetWidth,
                    n = t.offsetHeight;
                  s(this._expandChildEl, { width: e + 10, height: n + 10 }),
                    u(this._expandEl, {
                      scrollLeft: e + 10,
                      scrollTop: n + 10,
                    }),
                    u(this._shrinkEl, {
                      scrollLeft: e + 10,
                      scrollTop: n + 10,
                    });
                },
              })),
            (t.exports = e);
        },
        3244: function (t, e, n) {
          var r = n(7496),
            o = n(6768),
            i = n(3783),
            s = n(9971),
            a = new (e = r({
              className: "Select",
              initialize: function (t) {
                return (
                  (this.length = 0),
                  t
                    ? o(t)
                      ? a.find(t)
                      : void (t.nodeType && ((this[0] = t), (this.length = 1)))
                    : this
                );
              },
              find: function (t) {
                var n = new e();
                return (
                  this.each(function () {
                    s(n, this.querySelectorAll(t));
                  }),
                  n
                );
              },
              each: function (t) {
                return (
                  i(this, function (e, n) {
                    t.call(e, n, e);
                  }),
                  this
                );
              },
            }))(document);
          t.exports = e;
        },
        8985: function (t, e, n) {
          var r = n(7496),
            o = n(4675),
            i = n(3783),
            s = n(1352);
          (e = r(
            {
              initialize: function () {
                this._listeners = [];
              },
              addListener: function (t) {
                this._listeners.push(t);
              },
              rmListener: function (t) {
                var e = this._listeners.indexOf(t);
                e > -1 && this._listeners.splice(e, 1);
              },
              rmAllListeners: function () {
                this._listeners = [];
              },
              emit: function () {
                var t = this,
                  e = s(arguments),
                  n = o(this._listeners);
                i(
                  n,
                  function (n) {
                    return n.apply(t, e);
                  },
                  this,
                );
              },
            },
            {
              mixin: function (t) {
                i(
                  ["addListener", "rmListener", "emit", "rmAllListeners"],
                  function (n) {
                    t[n] = e.prototype[n];
                  },
                ),
                  (t._listeners = t._listeners || []);
              },
            },
          )),
            (t.exports = e);
        },
        9001: function (t, e, n) {
          var r = n(7496),
            o = n(1527);
          (e = r({
            initialize: function () {
              this.clear();
            },
            clear: function () {
              (this._items = []), (this.size = 0);
            },
            push: function (t) {
              return this._items.push(t), ++this.size;
            },
            pop: function () {
              if (this.size) return this.size--, this._items.pop();
            },
            peek: function () {
              return this._items[this.size - 1];
            },
            forEach: function (t, e) {
              e = arguments.length > 1 ? e : this;
              for (
                var n = this._items, r = this.size - 1, o = 0;
                r >= 0;
                r--, o++
              )
                t.call(e, n[r], o, this);
            },
            toArr: function () {
              return o(this._items);
            },
          })),
            (t.exports = e);
        },
        1116: function (t, e, n) {
          var r = n(2533),
            o = n(415),
            i = n(42),
            s = Object.getOwnPropertyNames,
            a = Object.getOwnPropertySymbols;
          (e = function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = e.prototype,
              u = void 0 === n || n,
              c = e.unenumerable,
              f = void 0 !== c && c,
              l = e.symbol,
              p = void 0 !== l && l,
              h = [];
            if ((f || p) && s) {
              var d = r;
              f && s && (d = s);
              do {
                (h = h.concat(d(t))), p && a && (h = h.concat(a(t)));
              } while (u && (t = o(t)) && t !== Object.prototype);
              h = i(h);
            } else if (u) for (var v in t) h.push(v);
            else h = r(t);
            return h;
          }),
            (t.exports = e);
        },
        7913: function (t, e, n) {
          var r = n(3783),
            o = n(1286),
            i = n(4777);
          (e = function (t, e) {
            o(e) && (e = !0);
            var n = i(e),
              s = {};
            return (
              r(t, function (t) {
                s[t] = n ? e(t) : e;
              }),
              s
            );
          }),
            (t.exports = e);
        },
        5637: function (t, e) {
          (e = function (t, e) {
            var n;
            return function () {
              return (
                --t > 0 && (n = e.apply(this, arguments)),
                t <= 1 && (e = null),
                n
              );
            };
          }),
            (t.exports = e);
        },
        7494: function (t, e, n) {
          var r = n(8935);
          function o(t, e) {
            this[e] = t.replace(/\w/, function (t) {
              return t.toUpperCase();
            });
          }
          (e = function (t) {
            var e = r(t),
              n = e[0];
            return e.shift(), e.forEach(o, e), (n += e.join(""));
          }),
            (t.exports = e);
        },
        1694: function (t, e, n) {
          var r = n(6257),
            o = n(6472);
          e = function (t, e) {
            if (o(t)) return t;
            if (e && r(e, t)) return [t];
            var n = [];
            return (
              t.replace(i, function (t, e, r, o) {
                n.push(r ? o.replace(s, "$1") : e || t);
              }),
              n
            );
          };
          var i =
              /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            s = /\\(\\)?/g;
          t.exports = e;
        },
        9882: function (t, e, n) {
          var r = n(1286);
          (e = function (t, e, n) {
            return (
              r(n) && ((n = e), (e = void 0)),
              !r(e) && t < e ? e : t > n ? n : t
            );
          }),
            (t.exports = e);
        },
        4675: function (t, e, n) {
          var r = n(5166),
            o = n(6472),
            i = n(6329);
          (e = function (t) {
            return r(t) ? (o(t) ? t.slice() : i({}, t)) : t;
          }),
            (t.exports = e);
        },
        6341: function (t, e, n) {
          var r = n(496),
            o = n(6768),
            i = n(1369),
            s = n(2578);
          (e = function (t, e) {
            return o(t)
              ? t.indexOf(e) > -1
              : (i(t) || (t = s(t)), r(t, e) >= 0);
          }),
            (t.exports = e);
        },
        1662: function (t, e, n) {
          var r = n(5166);
          e = function (t) {
            if (!r(t)) return {};
            if (o) return o(t);
            function e() {}
            return (e.prototype = t), new e();
          };
          var o = Object.create;
          t.exports = e;
        },
        4427: function (t, e, n) {
          var r = n(1286),
            o = n(3783);
          (e = function (t, e) {
            return function (n) {
              return (
                o(arguments, function (i, s) {
                  if (0 !== s) {
                    var a = t(i);
                    o(a, function (t) {
                      (e && !r(n[t])) || (n[t] = i[t]);
                    });
                  }
                }),
                n
              );
            };
          }),
            (t.exports = e);
        },
        4407: function (t, e, n) {
          var r = n(6768),
            o = n(2106),
            i = n(3367),
            s = n(5351);
          e = function (t, n, s, p) {
            1 === arguments.length &&
              r(t) &&
              !f.test(t) &&
              ((n = t), (t = void 0)),
              (t = t || new Date()),
              o(t) || (t = new Date(t));
            var h = (n = i(e.masks[n] || n || e.masks.default)).slice(0, 4);
            ("UTC:" !== h && "GMT:" !== h) ||
              ((n = n.slice(4)), (s = !0), "GMT:" === h && (p = !0));
            var d = s ? "getUTC" : "get",
              v = t[d + "Date"](),
              m = t[d + "Day"](),
              x = t[d + "Month"](),
              g = t[d + "FullYear"](),
              y = t[d + "Hours"](),
              b = t[d + "Minutes"](),
              _ = t[d + "Seconds"](),
              w = t[d + "Milliseconds"](),
              M = s ? 0 : t.getTimezoneOffset(),
              T = {
                d: v,
                dd: a(v),
                ddd: e.i18n.dayNames[m],
                dddd: e.i18n.dayNames[m + 7],
                m: x + 1,
                mm: a(x + 1),
                mmm: e.i18n.monthNames[x],
                mmmm: e.i18n.monthNames[x + 12],
                yy: i(g).slice(2),
                yyyy: g,
                h: y % 12 || 12,
                hh: a(y % 12 || 12),
                H: y,
                HH: a(y),
                M: b,
                MM: a(b),
                s: _,
                ss: a(_),
                l: a(w, 3),
                L: a(Math.round(w / 10)),
                t: y < 12 ? "a" : "p",
                tt: y < 12 ? "am" : "pm",
                T: y < 12 ? "A" : "P",
                TT: y < 12 ? "AM" : "PM",
                Z: p
                  ? "GMT"
                  : s
                    ? "UTC"
                    : (i(t).match(c) || [""]).pop().replace(l, ""),
                o:
                  (M > 0 ? "-" : "+") +
                  a(100 * Math.floor(Math.abs(M) / 60) + (Math.abs(M) % 60), 4),
                S: ["th", "st", "nd", "rd"][
                  v % 10 > 3 ? 0 : (((v % 100) - (v % 10) != 10) * v) % 10
                ],
              };
            return n.replace(u, function (t) {
              return t in T ? T[t] : t.slice(1, t.length - 1);
            });
          };
          var a = function (t) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 2;
              return s(i(t), e, "0");
            },
            u =
              /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g,
            c =
              /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
            f = /\d/,
            l = /[^-+\dA-Z]/g;
          (e.masks = {
            default: "ddd mmm dd yyyy HH:MM:ss",
            shortDate: "m/d/yy",
            mediumDate: "mmm d, yyyy",
            longDate: "mmmm d, yyyy",
            fullDate: "dddd, mmmm d, yyyy",
            shortTime: "h:MM TT",
            mediumTime: "h:MM:ss TT",
            longTime: "h:MM:ss TT Z",
            isoDate: "yyyy-mm-dd",
            isoTime: "HH:MM:ss",
            isoDateTime: "yyyy-mm-dd'T'HH:MM:sso",
            isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
            expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z",
          }),
            (e.i18n = {
              dayNames: [
                "Sun",
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              monthNames: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ],
            }),
            (t.exports = e);
        },
        6049: function (t, e) {
          (e = function (t, e, n) {
            var r;
            return function () {
              var o = this,
                i = arguments;
              n || clearTimeout(r),
                (n && r) ||
                  (r = setTimeout(function () {
                    (r = null), t.apply(o, i);
                  }, e));
            };
          }),
            (t.exports = e);
        },
        4193: function (t, e, n) {
          (e = n(4427)(n(1116), !0)), (t.exports = e);
        },
        2443: function (t, e, n) {
          var r = n(7496),
            o = n(6341);
          function i() {
            return !0;
          }
          function s() {
            return !1;
          }
          function a(t) {
            var n,
              r = this.events[t.type],
              o = u.call(this, t, r);
            t = new e.Event(t);
            for (var i, s, a = 0; (s = o[a++]) && !t.isPropagationStopped(); )
              for (
                t.curTarget = s.el, i = 0;
                (n = s.handlers[i++]) && !t.isImmediatePropagationStopped();

              )
                !1 === n.handler.apply(s.el, [t]) &&
                  (t.preventDefault(), t.stopPropagation());
          }
          function u(t, e) {
            var n,
              r,
              i,
              s,
              a = t.target,
              u = [],
              c = e.delegateCount;
            if (a.nodeType)
              for (; a !== this; a = a.parentNode || this) {
                for (r = [], s = 0; s < c; s++)
                  void 0 === r[(n = (i = e[s]).selector + " ")] &&
                    (r[n] = o(this.querySelectorAll(n), a)),
                    r[n] && r.push(i);
                r.length && u.push({ el: a, handlers: r });
              }
            return (
              c < e.length && u.push({ el: this, handlers: e.slice(c) }), u
            );
          }
          (e = {
            add: function (t, e, n, r) {
              var o,
                i = { selector: n, handler: r };
              t.events || (t.events = {}),
                (o = t.events[e]) ||
                  (((o = t.events[e] = []).delegateCount = 0),
                  t.addEventListener(
                    e,
                    function () {
                      a.apply(t, arguments);
                    },
                    !1,
                  )),
                n ? o.splice(o.delegateCount++, 0, i) : o.push(i);
            },
            remove: function (t, e, n, r) {
              var o = t.events;
              if (o && o[e])
                for (var i, s = o[e], a = s.length; a--; )
                  (i = s[a]),
                    (n && i.selector != n) ||
                      i.handler != r ||
                      (s.splice(a, 1), i.selector && s.delegateCount--);
            },
            Event: r({
              className: "Event",
              initialize: function (t) {
                this.origEvent = t;
              },
              isDefaultPrevented: s,
              isPropagationStopped: s,
              isImmediatePropagationStopped: s,
              preventDefault: function () {
                var t = this.origEvent;
                (this.isDefaultPrevented = i),
                  t && t.preventDefault && t.preventDefault();
              },
              stopPropagation: function () {
                var t = this.origEvent;
                (this.isPropagationStopped = i),
                  t && t.stopPropagation && t.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var t = this.origEvent;
                (this.isImmediatePropagationStopped = i),
                  t &&
                    t.stopImmediatePropagation &&
                    t.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
          }),
            (t.exports = e);
        },
        6954: function (t, e, n) {
          var r = n(2727);
          (e = function (t) {
            if (
              ((t = (t = t || (r ? navigator.userAgent : "")).toLowerCase()),
              e("windows phone"))
            )
              return "windows phone";
            if (e("win")) return "windows";
            if (e("android")) return "android";
            if (e("ipad") || e("iphone") || e("ipod")) return "ios";
            if (e("mac")) return "os x";
            if (e("linux")) return "linux";
            function e(e) {
              return t.indexOf(e) > -1;
            }
            return "unknown";
          }),
            (t.exports = e);
        },
        3783: function (t, e, n) {
          var r = n(1369),
            o = n(2533),
            i = n(3955);
          (e = function (t, e, n) {
            var s, a;
            if (((e = i(e, n)), r(t)))
              for (s = 0, a = t.length; s < a; s++) e(t[s], s, t);
            else {
              var u = o(t);
              for (s = 0, a = u.length; s < a; s++) e(t[u[s]], u[s], t);
            }
            return t;
          }),
            (t.exports = e);
        },
        6329: function (t, e, n) {
          (e = n(4427)(n(1116))), (t.exports = e);
        },
        3021: function (t, e, n) {
          var r = n(2533);
          (e = n(4427)(r)), (t.exports = e);
        },
        5972: function (t, e, n) {
          var r = n(2838),
            o = n(3783);
          (e = function (t, e, n) {
            var i = [];
            return (
              (e = r(e, n)),
              o(t, function (t, n, r) {
                e(t, n, r) && i.push(t);
              }),
              i
            );
          }),
            (t.exports = e);
        },
        415: function (t, e, n) {
          var r = n(5166),
            o = n(4777),
            i = Object.getPrototypeOf,
            s = {}.constructor;
          (e = function (t) {
            if (r(t)) {
              if (i) return i(t);
              var e = t.__proto__;
              return e || null === e
                ? e
                : o(t.constructor)
                  ? t.constructor.prototype
                  : t instanceof s
                    ? s.prototype
                    : void 0;
            }
          }),
            (t.exports = e);
        },
        8613: function (t, e, n) {
          var r = n(9833),
            o = n(6768),
            i = n(6930),
            s = n(7781),
            a = n(975),
            u = n(3783),
            c = n(4777);
          (e = function (t, e) {
            for (
              var n = arguments.length, f = new Array(n > 2 ? n - 2 : 0), l = 2;
              l < n;
              l++
            )
              f[l - 2] = arguments[l];
            (r(e) || o(e)) && (f.unshift(e), (e = null)), e || (e = {});
            var p = (function (t) {
                for (
                  var e = "div",
                    n = "",
                    r = [],
                    o = [],
                    s = "",
                    a = 0,
                    u = t.length;
                  a < u;
                  a++
                ) {
                  var c = t[a];
                  "#" === c || "." === c ? (o.push(s), (s = c)) : (s += c);
                }
                o.push(s);
                for (var f = 0, l = o.length; f < l; f++)
                  (s = o[f]) &&
                    (i(s, "#")
                      ? (n = s.slice(1))
                      : i(s, ".")
                        ? r.push(s.slice(1))
                        : (e = s));
                return { tagName: e, id: n, classes: r };
              })(t),
              h = p.tagName,
              d = p.id,
              v = p.classes,
              m = document.createElement(h);
            return (
              d && m.setAttribute("id", d),
              s.add(m, v),
              u(f, function (t) {
                o(t)
                  ? m.appendChild(document.createTextNode(t))
                  : r(t) && m.appendChild(t);
              }),
              u(e, function (t, e) {
                o(t)
                  ? m.setAttribute(e, t)
                  : c(t) && i(e, "on")
                    ? m.addEventListener(e.slice(2), t, !1)
                    : "style" === e && a(m, t);
              }),
              m
            );
          }),
            (t.exports = e);
        },
        6257: function (t, e) {
          var n = Object.prototype.hasOwnProperty;
          (e = function (t, e) {
            return n.call(t, e);
          }),
            (t.exports = e);
        },
        5044: function (t, e, n) {
          var r = n(7348);
          (e = {
            encode: function (t) {
              for (var e = [], n = 0, r = t.length; n < r; n++) {
                var o = t[n];
                e.push((o >>> 4).toString(16)), e.push((15 & o).toString(16));
              }
              return e.join("");
            },
            decode: function (t) {
              var e = [],
                n = t.length;
              r(n) && n--;
              for (var o = 0; o < n; o += 2)
                e.push(parseInt(t.substr(o, 2), 16));
              return e;
            },
          }),
            (t.exports = e);
        },
        5925: function (t, e) {
          e = function (t) {
            var e,
              r,
              o,
              i = t[0] / 360,
              s = t[1] / 100,
              a = t[2] / 100,
              u = [];
            if ((t[3] && (u[3] = t[3]), 0 === s))
              return (o = n(255 * a)), (u[0] = u[1] = u[2] = o), u;
            for (
              var c = 2 * a - (e = a < 0.5 ? a * (1 + s) : a + s - a * s),
                f = 0;
              f < 3;
              f++
            )
              (r = i + (1 / 3) * -(f - 1)) < 0 && r++,
                r > 1 && r--,
                (o =
                  6 * r < 1
                    ? c + 6 * (e - c) * r
                    : 2 * r < 1
                      ? e
                      : 3 * r < 2
                        ? c + (e - c) * (2 / 3 - r) * 6
                        : c),
                (u[f] = n(255 * o));
            return u;
          };
          var n = Math.round;
          t.exports = e;
        },
        7483: function (t, e, n) {
          var r = n(8702),
            o = n(9001),
            i = n(6472),
            s = n(3783),
            a = n(6768),
            u = n(8820);
          var c = function (t) {
              return t.replace(/&quot;/g, '"');
            },
            f = function (t) {
              return t.replace(/"/g, "&quot;");
            };
          (e = {
            parse: function (t) {
              var e = [],
                n = new o();
              return (
                r(t, {
                  start: function (t, e) {
                    (e = u(e, function (t) {
                      return c(t);
                    })),
                      n.push({ tag: t, attrs: e });
                  },
                  end: function () {
                    var t = n.pop();
                    if (n.size) {
                      var r = n.peek();
                      i(r.content) || (r.content = []), r.content.push(t);
                    } else e.push(t);
                  },
                  comment: function (t) {
                    var r = "\x3c!--".concat(t, "--\x3e"),
                      o = n.peek();
                    o
                      ? (o.content || (o.content = []), o.content.push(r))
                      : e.push(r);
                  },
                  text: function (t) {
                    var r = n.peek();
                    r
                      ? (r.content || (r.content = []), r.content.push(t))
                      : e.push(t);
                  },
                }),
                e
              );
            },
            stringify: function t(e) {
              var n = "";
              return (
                i(e)
                  ? s(e, function (e) {
                      return (n += t(e));
                    })
                  : a(e)
                    ? (n = e)
                    : ((n += "<".concat(e.tag)),
                      s(e.attrs, function (t, e) {
                        return (n += " ".concat(e, '="').concat(f(t), '"'));
                      }),
                      (n += ">"),
                      e.content && (n += t(e.content)),
                      (n += "</".concat(e.tag, ">"))),
                n
              );
            },
          }),
            (t.exports = e);
        },
        6362: function (t, e) {
          (e = function (t) {
            return t;
          }),
            (t.exports = e);
        },
        496: function (t, e) {
          (e = function (t, e, n) {
            return Array.prototype.indexOf.call(t, e, n);
          }),
            (t.exports = e);
        },
        5022: function (t, e, n) {
          var r = n(1662);
          (e = function (t, e) {
            t.prototype = r(e.prototype);
          }),
            (t.exports = e);
        },
        6472: function (t, e, n) {
          var r = n(106);
          (e = Array.isArray
            ? Array.isArray
            : function (t) {
                return "[object Array]" === r(t);
              }),
            (t.exports = e);
        },
        1369: function (t, e, n) {
          var r = n(3990),
            o = n(4777),
            i = Math.pow(2, 53) - 1;
          (e = function (t) {
            if (!t) return !1;
            var e = t.length;
            return r(e) && e >= 0 && e <= i && !o(t);
          }),
            (t.exports = e);
        },
        2727: function (t, e) {
          (e =
            "object" == typeof window &&
            "object" == typeof document &&
            9 === document.nodeType),
            (t.exports = e);
        },
        2106: function (t, e, n) {
          var r = n(106);
          (e = function (t) {
            return "[object Date]" === r(t);
          }),
            (t.exports = e);
        },
        9833: function (t, e) {
          (e = function (t) {
            return !(!t || 1 !== t.nodeType);
          }),
            (t.exports = e);
        },
        4777: function (t, e, n) {
          var r = n(106);
          (e = function (t) {
            var e = r(t);
            return (
              "[object Function]" === e ||
              "[object GeneratorFunction]" === e ||
              "[object AsyncFunction]" === e
            );
          }),
            (t.exports = e);
        },
        9585: function (t, e, n) {
          var r = n(5610),
            o = r.getComputedStyle,
            i = r.document;
          function s(t, e) {
            return (
              t.right < e.left ||
              t.left > e.right ||
              t.bottom < e.top ||
              t.top > e.bottom
            );
          }
          (e = function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = e.display,
              r = void 0 === n || n,
              a = e.visibility,
              u = void 0 !== a && a,
              c = e.opacity,
              f = void 0 !== c && c,
              l = e.size,
              p = void 0 !== l && l,
              h = e.viewport,
              d = void 0 !== h && h,
              v = e.overflow,
              m = void 0 !== v && v;
            if (r) return null === t.offsetParent;
            var x = o(t);
            if (u && "hidden" === x.visibility) return !0;
            if (f) {
              if ("0" === x.opacity) return !0;
              for (var g = t; (g = g.parentElement); ) {
                if ("0" === o(g).opacity) return !0;
              }
            }
            var y = t.getBoundingClientRect();
            if (p && (0 === y.width || 0 === y.height)) return !0;
            if (d)
              return s(y, {
                top: 0,
                left: 0,
                right: i.documentElement.clientWidth,
                bottom: i.documentElement.clientHeight,
              });
            if (m)
              for (var b = t; (b = b.parentElement); ) {
                var _ = o(b).overflow;
                if ("scroll" === _ || "hidden" === _)
                  if (s(y, b.getBoundingClientRect())) return !0;
              }
            return !1;
          }),
            (t.exports = e);
        },
        801: function (t, e, n) {
          var r = n(3990);
          (e = function (t) {
            return r(t) && t % 1 == 0;
          }),
            (t.exports = e);
        },
        7949: function (t, e, n) {
          var r = n(2533);
          (e = function (t, e) {
            var n = r(e),
              o = n.length;
            if (null == t) return !o;
            t = Object(t);
            for (var i = 0; i < o; i++) {
              var s = n[i];
              if (e[s] !== t[s] || !(s in t)) return !1;
            }
            return !0;
          }),
            (t.exports = e);
        },
        9537: function (t, e, n) {
          var r = n(4777);
          (e = "undefined" != typeof wx && r(wx.openLocation)), (t.exports = e);
        },
        3990: function (t, e, n) {
          var r = n(106);
          (e = function (t) {
            return "[object Number]" === r(t);
          }),
            (t.exports = e);
        },
        5166: function (t, e) {
          (e = function (t) {
            var e = typeof t;
            return !!t && ("function" === e || "object" === e);
          }),
            (t.exports = e);
        },
        7348: function (t, e, n) {
          var r = n(801);
          (e = function (t) {
            return !!r(t) && t % 2 != 0;
          }),
            (t.exports = e);
        },
        6768: function (t, e, n) {
          var r = n(106);
          (e = function (t) {
            return "[object String]" === r(t);
          }),
            (t.exports = e);
        },
        1286: function (t, e) {
          (e = function (t) {
            return void 0 === t;
          }),
            (t.exports = e);
        },
        7622: function (t, e, n) {
          var r = n(8935);
          (e = function (t) {
            return r(t).join("-");
          }),
            (t.exports = e);
        },
        2533: function (t, e, n) {
          var r = n(6257);
          (e = Object.keys
            ? Object.keys
            : function (t) {
                var e = [];
                for (var n in t) r(t, n) && e.push(n);
                return e;
              }),
            (t.exports = e);
        },
        9702: function (t, e) {
          (e = function (t) {
            var e = t ? t.length : 0;
            if (e) return t[e - 1];
          }),
            (t.exports = e);
        },
        3063: function (t, e, n) {
          var r = n(3367);
          (e = function (t) {
            return r(t).toLocaleLowerCase();
          }),
            (t.exports = e);
        },
        5351: function (t, e, n) {
          var r = n(4552),
            o = n(3367);
          (e = function (t, e, n) {
            var i = (t = o(t)).length;
            return (
              (n = n || " "), i < e && (t = (r(n, e - i) + t).slice(-e)), t
            );
          }),
            (t.exports = e);
        },
        7767: function (t, e) {
          var n = /^\s+/;
          (e = function (t, e) {
            if (null == e) return t.trimLeft ? t.trimLeft() : t.replace(n, "");
            for (
              var r, o, i = 0, s = t.length, a = e.length, u = !0;
              u && i < s;

            )
              for (u = !1, r = -1, o = t.charAt(i); ++r < a; )
                if (o === e[r]) {
                  (u = !0), i++;
                  break;
                }
            return i >= s ? "" : t.substr(i, s);
          }),
            (t.exports = e);
        },
        2461: function (t, e, n) {
          var r = n(2838),
            o = n(2533),
            i = n(1369);
          (e = function (t, e, n) {
            e = r(e, n);
            for (
              var s = !i(t) && o(t), a = (s || t).length, u = Array(a), c = 0;
              c < a;
              c++
            ) {
              var f = s ? s[c] : c;
              u[c] = e(t[f], f, t);
            }
            return u;
          }),
            (t.exports = e);
        },
        8820: function (t, e, n) {
          var r = n(2838),
            o = n(2533);
          (e = function (t, e, n) {
            e = r(e, n);
            for (var i = o(t), s = i.length, a = {}, u = 0; u < s; u++) {
              var c = i[u];
              a[c] = e(t[c], c, t);
            }
            return a;
          }),
            (t.exports = e);
        },
        4491: function (t, e, n) {
          var r = n(3021),
            o = n(7949);
          (e = function (t) {
            return (
              (t = r({}, t)),
              function (e) {
                return o(e, t);
              }
            );
          }),
            (t.exports = e);
        },
        1475: function (t, e, n) {
          var r = n(6257);
          (e = function (t, e) {
            var n = function (o) {
              var i = n.cache,
                s = "" + (e ? e.apply(this, arguments) : o);
              return r(i, s) || (i[s] = t.apply(this, arguments)), i[s];
            };
            return (n.cache = {}), n;
          }),
            (t.exports = e);
        },
        9971: function (t, e, n) {
          (e = n(1137)(function (t, e) {
            for (var n = t.length, r = 0, o = e.length; r < o; r++)
              for (var i = e[r], s = 0, a = i.length; s < a; s++) t[n++] = i[s];
            return (t.length = n), t;
          })),
            (t.exports = e);
        },
        6435: function (t, e) {
          (e = function () {
            for (var t = arguments, e = t[0], n = 1, r = t.length; n < r; n++)
              t[n] < e && (e = t[n]);
            return e;
          }),
            (t.exports = e);
        },
        8847: function (t, e) {
          (e = Date.now
            ? Date.now
            : function () {
                return new Date().getTime();
              }),
            (t.exports = e);
        },
        106: function (t, e) {
          var n = Object.prototype.toString;
          (e = function (t) {
            return n.call(t);
          }),
            (t.exports = e);
        },
        8763: function (t, e, n) {
          (e = n(4198)(n(5637), 2)), (t.exports = e);
        },
        3955: function (t, e, n) {
          var r = n(1286);
          (e = function (t, e, n) {
            if (r(e)) return t;
            switch (null == n ? 3 : n) {
              case 1:
                return function (n) {
                  return t.call(e, n);
                };
              case 3:
                return function (n, r, o) {
                  return t.call(e, n, r, o);
                };
              case 4:
                return function (n, r, o, i) {
                  return t.call(e, n, r, o, i);
                };
            }
            return function () {
              return t.apply(e, arguments);
            };
          }),
            (t.exports = e);
        },
        8702: function (t, e, n) {
          var r = n(9702),
            o = n(7913),
            i = n(6930),
            s = n(3063);
          e = function (t, e) {
            for (var n, o = [], p = t; t; ) {
              if (((n = !0), r(o) && l[r(o)])) {
                var h = new RegExp("</".concat(r(o), "[^>]*>")).exec(t);
                if (h) {
                  var d = t.substring(0, h.index);
                  (t = t.substring(h.index + h[0].length)),
                    d && e.text && e.text(d);
                }
                w("", r(o));
              } else {
                if (i(t, "\x3c!--")) {
                  var v = t.indexOf("--\x3e");
                  v >= 0 &&
                    (e.comment && e.comment(t.substring(4, v)),
                    (t = t.substring(v + 3)),
                    (n = !1));
                } else if (i(t, "<!")) {
                  var m = t.match(a);
                  m &&
                    (e.text && e.text(t.substring(0, m[0].length)),
                    (t = t.substring(m[0].length)),
                    (n = !1));
                } else if (i(t, "</")) {
                  var x = t.match(u);
                  x &&
                    ((t = t.substring(x[0].length)),
                    x[0].replace(u, w),
                    (n = !1));
                } else if (i(t, "<")) {
                  var g = t.match(c);
                  g &&
                    ((t = t.substring(g[0].length)),
                    g[0].replace(c, _),
                    (n = !1));
                }
                if (n) {
                  var y = t.indexOf("<"),
                    b = y < 0 ? t : t.substring(0, y);
                  (t = y < 0 ? "" : t.substring(y)), e.text && e.text(b);
                }
              }
              if (p === t) throw Error("Parse Error: " + t);
              p = t;
            }
            function _(t, n, r, i) {
              if (((n = s(n)), (i = !!i) || o.push(n), e.start)) {
                var a = {};
                r.replace(f, function (t, e, n, r, o) {
                  a[e] = n || r || o || "";
                }),
                  e.start(n, a, i);
              }
            }
            function w(t, n) {
              var r;
              if ((n = s(n))) for (r = o.length - 1; r >= 0 && o[r] !== n; r--);
              else r = 0;
              if (r >= 0) {
                for (var i = o.length - 1; i >= r; i--) e.end && e.end(o[i]);
                o.length = r;
              }
            }
            w();
          };
          var a =
              /^<!\s*doctype((?:\s+[\w:]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/i,
            u = /^<\/([-A-Za-z0-9_]+)[^>]*>/,
            c =
              /^<([-A-Za-z0-9_]+)((?:\s+[-A-Za-z0-9_:@.]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/i,
            f =
              /([-A-Za-z0-9_:@.]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,
            l = o("script,style".split(","));
          t.exports = e;
        },
        4198: function (t, e, n) {
          var r = n(1137),
            o = n(1352);
          (e = r(function (t, e) {
            return function () {
              var n = [];
              return (
                (n = (n = n.concat(e)).concat(o(arguments))), t.apply(this, n)
              );
            };
          })),
            (t.exports = e);
        },
        1194: function (t, e, n) {
          var r,
            o = n(8847),
            i = n(5610),
            s = i.performance,
            a = i.process;
          if (s && s.now)
            e = function () {
              return s.now();
            };
          else if (a && a.hrtime) {
            var u = function () {
              var t = a.hrtime();
              return 1e9 * t[0] + t[1];
            };
            (r = u() - 1e9 * a.uptime()),
              (e = function () {
                return (u() - r) / 1e6;
              });
          } else
            (r = o()),
              (e = function () {
                return o() - r;
              });
          t.exports = e;
        },
        747: function (t, e, n) {
          var r = n(1475),
            o = n(7494),
            i = n(3023),
            s = n(6257),
            a = n(7622);
          (e = r(function (t) {
            if (((t = t.replace(c, "")), (t = o(t)), s(f, t))) return t;
            for (var e = u.length; e--; ) {
              var n = u[e] + i(t);
              if (s(f, n)) return n;
            }
            return t;
          })).dash = r(function (t) {
            var n = e(t);
            return (c.test(n) ? "-" : "") + a(n);
          });
          var u = ["O", "ms", "Moz", "Webkit"],
            c = /^(O)|(ms)|(Moz)|(Webkit)|(-o-)|(-ms-)|(-moz-)|(-webkit-)/g,
            f = document.createElement("p").style;
          t.exports = e;
        },
        2994: function (t, e, n) {
          var r = n(6472),
            o = n(7653);
          (e = function (t) {
            return r(t)
              ? function (e) {
                  return o(e, t);
                }
              : ((e = t),
                function (t) {
                  return null == t ? void 0 : t[e];
                });
            var e;
          }),
            (t.exports = e);
        },
        1571: function (t, e, n) {
          var r,
            o,
            i = n(8847),
            s = n(2727),
            a = 0;
          if (s) {
            (r = window.requestAnimationFrame),
              (o = window.cancelAnimationFrame);
            for (
              var u = ["ms", "moz", "webkit", "o"], c = 0, f = u.length;
              c < f && !r;
              c++
            )
              (r = window[u[c] + "RequestAnimationFrame"]),
                (o =
                  window[u[c] + "CancelAnimationFrame"] ||
                  window[u[c] + "CancelRequestAnimationFrame"]);
            r && ((r = r.bind(window)), (o = o.bind(window)));
          }
          (o =
            o ||
            function (t) {
              clearTimeout(t);
            }),
            ((r =
              r ||
              function (t) {
                var e = i(),
                  n = Math.max(0, 16 - (e - a)),
                  r = setTimeout(function () {
                    t(e + n);
                  }, n);
                return (a = e + n), r;
              }).cancel = o),
            (e = r),
            (t.exports = e);
        },
        5852: function (t, e, n) {
          var r = n(2838);
          (e = function (t, e, n) {
            var o = [];
            e = r(e, n);
            for (var i = -1, s = t.length; ++i < s; ) {
              var a = t[i];
              e(a, i, t) && (o.push(a), t.splice(i, 1));
            }
            return o;
          }),
            (t.exports = e);
        },
        4552: function (t, e) {
          (e = function (t, e) {
            var n = "";
            if (e < 1) return "";
            for (; e > 0; ) 1 & e && (n += t), (e >>= 1), (t += t);
            return n;
          }),
            (t.exports = e);
        },
        1137: function (t, e) {
          (e = function (t, e) {
            return (
              (e = null == e ? t.length - 1 : +e),
              function () {
                var n,
                  r = Math.max(arguments.length - e, 0),
                  o = new Array(r);
                for (n = 0; n < r; n++) o[n] = arguments[n + e];
                switch (e) {
                  case 0:
                    return t.call(this, o);
                  case 1:
                    return t.call(this, arguments[0], o);
                  case 2:
                    return t.call(this, arguments[0], arguments[1], o);
                }
                var i = new Array(e + 1);
                for (n = 0; n < e; n++) i[n] = arguments[n];
                return (i[e] = o), t.apply(this, i);
              }
            );
          }),
            (t.exports = e);
        },
        1527: function (t, e) {
          (e = function (t) {
            var e = t.length,
              n = Array(e);
            e--;
            for (var r = 0; r <= e; r++) n[e - r] = t[r];
            return n;
          }),
            (t.exports = e);
        },
        3279: function (t, e) {
          e = function (t) {
            var e,
              i,
              s = t[0] / 255,
              a = t[1] / 255,
              u = t[2] / 255,
              c = n(s, a, u),
              f = r(s, a, u),
              l = f - c;
            (e = n(
              60 *
                (e =
                  f === c
                    ? 0
                    : s === f
                      ? (a - u) / l
                      : a === f
                        ? 2 + (u - s) / l
                        : 4 + (s - a) / l),
              360,
            )) < 0 && (e += 360);
            var p = (c + f) / 2;
            i = f === c ? 0 : p <= 0.5 ? l / (f + c) : l / (2 - f - c);
            var h = [o(e), o(100 * i), o(100 * p)];
            return t[3] && (h[3] = t[3]), h;
          };
          var n = Math.min,
            r = Math.max,
            o = Math.round;
          t.exports = e;
        },
        5610: function (t, e, n) {
          (e = n(2727) ? window : n.g), (t.exports = e);
        },
        3597: function (t, e) {
          (e = function (t, e) {
            if (null == e) {
              if (t.trimRight) return t.trimRight();
              e = " \r\n\t\f\v";
            }
            for (
              var n, r, o = t.length - 1, i = e.length, s = !0;
              s && o >= 0;

            )
              for (s = !1, n = -1, r = t.charAt(o); ++n < i; )
                if (r === e[n]) {
                  (s = !0), o--;
                  break;
                }
            return o >= 0 ? t.substring(0, o + 1) : "";
          }),
            (t.exports = e);
        },
        2838: function (t, e, n) {
          var r = n(4777),
            o = n(5166),
            i = n(6472),
            s = n(3955),
            a = n(4491),
            u = n(6362),
            c = n(2994);
          (e = function (t, e, n) {
            return null == t
              ? u
              : r(t)
                ? s(t, e, n)
                : o(t) && !i(t)
                  ? a(t)
                  : c(t);
          }),
            (t.exports = e);
        },
        7653: function (t, e, n) {
          var r = n(1286),
            o = n(1694);
          (e = function (t, e) {
            var n;
            for (n = (e = o(e, t)).shift(); !r(n); ) {
              if (null == (t = t[n])) return;
              n = e.shift();
            }
            return t;
          }),
            (t.exports = e);
        },
        9677: function (t, e) {
          (e = function (t, e, n) {
            var r = t.length;
            (e = null == e ? 0 : e < 0 ? Math.max(r + e, 0) : Math.min(e, r)),
              (n = null == n ? r : n < 0 ? Math.max(r + n, 0) : Math.min(n, r));
            for (var o = []; e < n; ) o.push(t[e++]);
            return o;
          }),
            (t.exports = e);
        },
        6053: function (t, e, n) {
          var r = n(2838),
            o = n(1369),
            i = n(2533);
          (e = function (t, e, n) {
            e = r(e, n);
            for (
              var s = !o(t) && i(t), a = (s || t).length, u = 0;
              u < a;
              u++
            ) {
              var c = s ? s[u] : u;
              if (e(t[c], c, t)) return !0;
            }
            return !1;
          }),
            (t.exports = e);
        },
        8935: function (t, e) {
          var n = /([A-Z])/g,
            r = /[_.\- ]+/g,
            o = /(^-)|(-$)/g;
          (e = function (t) {
            return (t = t
              .replace(n, "-$1")
              .toLowerCase()
              .replace(r, "-")
              .replace(o, "")).split("-");
          }),
            (t.exports = e);
        },
        6930: function (t, e) {
          (e = function (t, e) {
            return 0 === t.indexOf(e);
          }),
            (t.exports = e);
        },
        1907: function (t, e, n) {
          var r = n(6768),
            o = n(1352),
            i = n(6435),
            s = n(2461),
            a = n(4331);
          e = function (t) {
            r(t) && (t = o(t));
            for (
              var e = "",
                n = arguments.length,
                c = new Array(n > 1 ? n - 1 : 0),
                f = 1;
              f < n;
              f++
            )
              c[f - 1] = arguments[f];
            for (var l = 0, p = t.length; l < p; l++)
              (e += t[l]), c[l] && (e += c[l]);
            for (
              var h = e.split("\n"), d = [], v = 0, m = h.length;
              v < m;
              v++
            ) {
              var x = h[v].match(u);
              x && d.push(x[1].length);
            }
            var g = d.length > 0 ? i.apply(null, d) : 0;
            return a(
              s(h, function (t) {
                return " " === t[0] ? t.slice(g) : t;
              }).join("\n"),
            );
          };
          var u = /^(\s+)\S+/;
          t.exports = e;
        },
        8901: function (t, e, n) {
          var r = n(6049);
          (e = function (t, e) {
            return r(t, e, !0);
          }),
            (t.exports = e);
        },
        1352: function (t, e, n) {
          var r = n(1369),
            o = n(2461),
            i = n(6472),
            s = n(6768);
          (e = function (t) {
            return t ? (i(t) ? t : r(t) && !s(t) ? o(t) : [t]) : [];
          }),
            (t.exports = e);
        },
        3875: function (t, e, n) {
          var r = n(3990),
            o = n(5166),
            i = n(4777),
            s = n(6768);
          (e = function (t) {
            if (r(t)) return t;
            if (o(t)) {
              var e = i(t.valueOf) ? t.valueOf() : t;
              t = o(e) ? e + "" : e;
            }
            return s(t) ? +t : 0 === t ? t : +t;
          }),
            (t.exports = e);
        },
        3367: function (t, e) {
          (e = function (t) {
            return null == t ? "" : t.toString();
          }),
            (t.exports = e);
        },
        4331: function (t, e, n) {
          var r = n(7767),
            o = n(3597);
          (e = function (t, e) {
            return null == e && t.trim ? t.trim() : r(o(t, e), e);
          }),
            (t.exports = e);
        },
        42: function (t, e, n) {
          var r = n(5972);
          function o(t, e) {
            return t === e;
          }
          (e = function (t, e) {
            return (
              (e = e || o),
              r(t, function (t, n, r) {
                for (var o = r.length; ++n < o; ) if (e(t, r[n])) return !1;
                return !0;
              })
            );
          }),
            (t.exports = e);
        },
        3023: function (t, e) {
          (e = function (t) {
            return t.length < 1 ? t : t[0].toUpperCase() + t.slice(1);
          }),
            (t.exports = e);
        },
        2578: function (t, e, n) {
          var r = n(3783);
          (e = function (t) {
            var e = [];
            return (
              r(t, function (t) {
                e.push(t);
              }),
              e
            );
          }),
            (t.exports = e);
        },
        6115: function (t) {
          (t.exports = function (t) {
            if (void 0 === t)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called",
              );
            return t;
          }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
        },
        6690: function (t) {
          (t.exports = function (t, e) {
            if (!(t instanceof e))
              throw new TypeError("Cannot call a class as a function");
          }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
        },
        9728: function (t, e, n) {
          var r = n(4062);
          function o(t, e) {
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(t, r(o.key), o);
            }
          }
          (t.exports = function (t, e, n) {
            return (
              e && o(t.prototype, e),
              n && o(t, n),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              t
            );
          }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
        },
        8416: function (t, e, n) {
          var r = n(4062);
          (t.exports = function (t, e, n) {
            return (
              (e = r(e)) in t
                ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[e] = n),
              t
            );
          }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
        },
        1588: function (t, e, n) {
          var r = n(1753);
          function o() {
            return (
              "undefined" != typeof Reflect && Reflect.get
                ? ((t.exports = o = Reflect.get.bind()),
                  (t.exports.__esModule = !0),
                  (t.exports.default = t.exports))
                : ((t.exports = o =
                    function (t, e, n) {
                      var o = r(t, e);
                      if (o) {
                        var i = Object.getOwnPropertyDescriptor(o, e);
                        return i.get
                          ? i.get.call(arguments.length < 3 ? t : n)
                          : i.value;
                      }
                    }),
                  (t.exports.__esModule = !0),
                  (t.exports.default = t.exports)),
              o.apply(this, arguments)
            );
          }
          (t.exports = o),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
        },
        3808: function (t) {
          function e(n) {
            return (
              (t.exports = e =
                Object.setPrototypeOf
                  ? Object.getPrototypeOf.bind()
                  : function (t) {
                      return t.__proto__ || Object.getPrototypeOf(t);
                    }),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports),
              e(n)
            );
          }
          (t.exports = e),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
        },
        1655: function (t, e, n) {
          var r = n(6015);
          (t.exports = function (t, e) {
            if ("function" != typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && r(t, e);
          }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
        },
        4993: function (t, e, n) {
          var r = n(8698).default,
            o = n(6115);
          (t.exports = function (t, e) {
            if (e && ("object" === r(e) || "function" == typeof e)) return e;
            if (void 0 !== e)
              throw new TypeError(
                "Derived constructors may only return object or undefined",
              );
            return o(t);
          }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
        },
        6015: function (t) {
          function e(n, r) {
            return (
              (t.exports = e =
                Object.setPrototypeOf
                  ? Object.setPrototypeOf.bind()
                  : function (t, e) {
                      return (t.__proto__ = e), t;
                    }),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports),
              e(n, r)
            );
          }
          (t.exports = e),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
        },
        1753: function (t, e, n) {
          var r = n(3808);
          (t.exports = function (t, e) {
            for (
              ;
              !Object.prototype.hasOwnProperty.call(t, e) &&
              null !== (t = r(t));

            );
            return t;
          }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
        },
        5036: function (t, e, n) {
          var r = n(8698).default;
          (t.exports = function (t, e) {
            if ("object" !== r(t) || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var o = n.call(t, e || "default");
              if ("object" !== r(o)) return o;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return ("string" === e ? String : Number)(t);
          }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
        },
        4062: function (t, e, n) {
          var r = n(8698).default,
            o = n(5036);
          (t.exports = function (t) {
            var e = o(t, "string");
            return "symbol" === r(e) ? e : String(e);
          }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
        },
        8698: function (t) {
          function e(n) {
            return (
              (t.exports = e =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (t) {
                      return typeof t;
                    }
                  : function (t) {
                      return t &&
                        "function" == typeof Symbol &&
                        t.constructor === Symbol &&
                        t !== Symbol.prototype
                        ? "symbol"
                        : typeof t;
                    }),
              (t.exports.__esModule = !0),
              (t.exports.default = t.exports),
              e(n)
            );
          }
          (t.exports = e),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
        },
      },
      e = {};
    function n(r) {
      var o = e[r];
      if (void 0 !== o) return o.exports;
      var i = (e[r] = { id: r, loaded: !1, exports: {} });
      return t[r].call(i.exports, i, i.exports, n), (i.loaded = !0), i.exports;
    }
    return (
      (n.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" == typeof window) return window;
        }
      })()),
      (n.nmd = function (t) {
        return (t.paths = []), t.children || (t.children = []), t;
      }),
      n(2352)
    );
  })();
});
//# sourceMappingURL=eruda-monitor.js.map
