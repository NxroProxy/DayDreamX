/*! eruda-timing v2.0.1 https://github.com/liriliri/eruda-timing#readme */
!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
      ? define([], e)
      : "object" == typeof exports
        ? (exports.erudaTiming = e())
        : (t.erudaTiming = e());
})(window, function () {
  return (function (t) {
    var e = {};
    function n(r) {
      if (e[r]) return e[r].exports;
      var o = (e[r] = { i: r, l: !1, exports: {} });
      return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
      }),
      (n.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (n.t = function (t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var o in t)
            n.d(
              r,
              o,
              function (e) {
                return t[e];
              }.bind(null, o),
            );
        return r;
      }),
      (n.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return n.d(e, "a", e), e;
      }),
      (n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = "/assets/"),
      n((n.s = 45))
    );
  })([
    function (t, e, n) {
      var r = n(10),
        o = n(7),
        i = n(24);
      (e = function (t, e, n) {
        var a, u;
        if (((e = i(e, n)), r(t)))
          for (a = 0, u = t.length; a < u; a++) e(t[a], a, t);
        else {
          var s = o(t);
          for (a = 0, u = s.length; a < u; a++) e(t[s[a]], s[a], t);
        }
        return t;
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var r = n(12);
      (e = function (t) {
        return "[object String]" === r(t);
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var r = n(1),
        o = n(13),
        i = n(20);
      (e = function (t) {
        return o(r(t) ? new i(t) : t);
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      "use strict";
      (e.__esModule = !0),
        (e.extend = u),
        (e.indexOf = function (t, e) {
          for (var n = 0, r = t.length; n < r; n++) if (t[n] === e) return n;
          return -1;
        }),
        (e.escapeExpression = function (t) {
          if ("string" != typeof t) {
            if (t && t.toHTML) return t.toHTML();
            if (null == t) return "";
            if (!t) return t + "";
            t = "" + t;
          }
          if (!i.test(t)) return t;
          return t.replace(o, a);
        }),
        (e.isEmpty = function (t) {
          return (!t && 0 !== t) || !(!c(t) || 0 !== t.length);
        }),
        (e.createFrame = function (t) {
          var e = u({}, t);
          return (e._parent = t), e;
        }),
        (e.blockParams = function (t, e) {
          return (t.path = e), t;
        }),
        (e.appendContextPath = function (t, e) {
          return (t ? t + "." : "") + e;
        });
      var r = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#x27;",
          "`": "&#x60;",
          "=": "&#x3D;",
        },
        o = /[&<>"'`=]/g,
        i = /[&<>"'`=]/;
      function a(t) {
        return r[t];
      }
      function u(t) {
        for (var e = 1; e < arguments.length; e++)
          for (var n in arguments[e])
            Object.prototype.hasOwnProperty.call(arguments[e], n) &&
              (t[n] = arguments[e][n]);
        return t;
      }
      var s = Object.prototype.toString;
      e.toString = s;
      var l = function (t) {
        return "function" == typeof t;
      };
      l(/x/) &&
        (e.isFunction = l =
          function (t) {
            return "function" == typeof t && "[object Function]" === s.call(t);
          }),
        (e.isFunction = l);
      var c =
        Array.isArray ||
        function (t) {
          return (
            !(!t || "object" != typeof t) && "[object Array]" === s.call(t)
          );
        };
      e.isArray = c;
    },
    function (t, e) {
      (e = function (t) {
        return void 0 === t;
      }),
        (t.exports = e);
    },
    function (t, e) {
      (e = function (t) {
        var e = typeof t;
        return !!t && ("function" === e || "object" === e);
      }),
        (t.exports = e);
    },
    function (t, e) {
      function n(e) {
        return (
          (t.exports = n =
            Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports),
          n(e)
        );
      }
      (t.exports = n),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e, n) {
      var r = n(15);
      (e = Object.keys
        ? Object.keys
        : function (t) {
            var e = [];
            for (var n in t) r(t, n) && e.push(n);
            return e;
          }),
        (t.exports = e);
    },
    function (t, e, n) {
      var r = n(12);
      (e = Array.isArray
        ? Array.isArray
        : function (t) {
            return "[object Array]" === r(t);
          }),
        (t.exports = e);
    },
    function (t, e, n) {
      "use strict";
      e.__esModule = !0;
      var r = [
        "description",
        "fileName",
        "lineNumber",
        "endLineNumber",
        "message",
        "name",
        "number",
        "stack",
      ];
      function o(t, e) {
        var n = e && e.loc,
          i = void 0,
          a = void 0,
          u = void 0,
          s = void 0;
        n &&
          ((i = n.start.line),
          (a = n.end.line),
          (u = n.start.column),
          (s = n.end.column),
          (t += " - " + i + ":" + u));
        for (
          var l = Error.prototype.constructor.call(this, t), c = 0;
          c < r.length;
          c++
        )
          this[r[c]] = l[r[c]];
        Error.captureStackTrace && Error.captureStackTrace(this, o);
        try {
          n &&
            ((this.lineNumber = i),
            (this.endLineNumber = a),
            Object.defineProperty
              ? (Object.defineProperty(this, "column", {
                  value: u,
                  enumerable: !0,
                }),
                Object.defineProperty(this, "endColumn", {
                  value: s,
                  enumerable: !0,
                }))
              : ((this.column = u), (this.endColumn = s)));
        } catch (t) {}
      }
      (o.prototype = new Error()), (e.default = o), (t.exports = e.default);
    },
    function (t, e, n) {
      var r = n(23),
        o = n(11),
        i = Math.pow(2, 53) - 1;
      (e = function (t) {
        if (!t) return !1;
        var e = t.length;
        return r(e) && e >= 0 && e <= i && !o(t);
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var r = n(12);
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
    function (t, e) {
      var n = Object.prototype.toString;
      (e = function (t) {
        return n.call(t);
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var r = n(10),
        o = n(27),
        i = n(8),
        a = n(1);
      (e = function (t) {
        return t ? (i(t) ? t : r(t) && !a(t) ? o(t) : [t]) : [];
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var r = n(46);
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
    function (t, e) {
      var n = Object.prototype.hasOwnProperty;
      (e = function (t, e) {
        return n.call(t, e);
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var r = n(81),
        o = n(82);
      (e = function (t, e) {
        return null == e && t.trim ? t.trim() : r(o(t, e), e);
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var r = n(21),
        o = n(13),
        i = n(59),
        a = n(26),
        u = n(61);
      var s = ((e = function (t, e) {
        return s.extend(t, e);
      }).Base = (function t(e, n, s) {
        s = s || {};
        var l = n.className || a(n, "initialize.name") || "";
        delete n.className;
        var c = function () {
          var t = o(arguments);
          return (this.initialize && this.initialize.apply(this, t)) || this;
        };
        if (!u)
          try {
            c = new Function(
              "toArr",
              "return function " +
                l +
                "(){var args = toArr(arguments);return this.initialize ? this.initialize.apply(this, args) || this : this;};",
            )(o);
          } catch (t) {}
        return (
          i(c, e),
          (c.prototype.constructor = c),
          (c.extend = function (e, n) {
            return t(c, e, n);
          }),
          (c.inherits = function (t) {
            i(c, t);
          }),
          (c.methods = function (t) {
            return r(c.prototype, t), c;
          }),
          (c.statics = function (t) {
            return r(c, t), c;
          }),
          c.methods(n).statics(s),
          c
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
    function (t, e, n) {
      var r = n(11),
        o = n(5),
        i = n(8),
        a = n(24),
        u = n(53),
        s = n(56),
        l = n(57);
      (e = function (t, e, n) {
        return null == t ? s : r(t) ? a(t, e, n) : o(t) && !i(t) ? u(t) : l(t);
      }),
        (t.exports = e);
    },
    function (t, e) {
      (e = function (t) {
        var e = t ? t.length : 0;
        if (e) return t[e - 1];
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var r = n(17),
        o = n(1),
        i = n(0),
        a = n(62),
        u = new (e = r({
          className: "Select",
          initialize: function (t) {
            return (
              (this.length = 0),
              t
                ? o(t)
                  ? u.find(t)
                  : void (t.nodeType && ((this[0] = t), (this.length = 1)))
                : this
            );
          },
          find: function (t) {
            var n = new e();
            return (
              this.each(function () {
                a(n, this.querySelectorAll(t));
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
    function (t, e, n) {
      (e = n(22)(n(50))), (t.exports = e);
    },
    function (t, e, n) {
      var r = n(4),
        o = n(0);
      (e = function (t, e) {
        return function (n) {
          return (
            o(arguments, function (i, a) {
              if (0 !== a) {
                var u = t(i);
                o(u, function (t) {
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
    function (t, e, n) {
      var r = n(12);
      (e = function (t) {
        return "[object Number]" === r(t);
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var r = n(4);
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
    function (t, e, n) {
      var r = n(18),
        o = n(0);
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
    function (t, e, n) {
      var r = n(4),
        o = n(58);
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
    function (t, e, n) {
      var r = n(18),
        o = n(7),
        i = n(10);
      (e = function (t, e, n) {
        e = r(e, n);
        for (
          var a = !i(t) && o(t), u = (a || t).length, s = Array(u), l = 0;
          l < u;
          l++
        ) {
          var c = a ? a[l] : l;
          s[l] = e(t[c], c, t);
        }
        return s;
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var r = n(29);
      (e = function (t) {
        return r(t).join("-");
      }),
        (t.exports = e);
    },
    function (t, e) {
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
    function (t, e, n) {
      var r = n(67),
        o = n(1),
        i = n(10),
        a = n(68);
      (e = function (t, e) {
        return o(t) ? t.indexOf(e) > -1 : (i(t) || (t = a(t)), r(t, e) >= 0);
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var r = n(13),
        o = n(5),
        i = n(1),
        a = n(0),
        u = n(4),
        s = n(2);
      ((e = function (t, e, n) {
        if (((t = s(t)), u(n) && i(e)))
          return (function (t, e) {
            return t.getAttribute(e);
          })(t[0], e);
        var r = e;
        o(r) || ((r = {})[e] = n),
          (function (t, e) {
            a(t, function (t) {
              a(e, function (e, n) {
                t.setAttribute(n, e);
              });
            });
          })(t, r);
      }).remove = function (t, e) {
        (t = s(t)),
          (e = r(e)),
          a(t, function (t) {
            a(e, function (e) {
              t.removeAttribute(e);
            });
          });
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var r = n(10),
        o = n(8),
        i = n(1),
        a = n(84),
        u = n(7);
      (e = function (t) {
        return (
          null == t ||
          (r(t) && (o(t) || i(t) || a(t)) ? 0 === t.length : 0 === u(t).length)
        );
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      (e.__esModule = !0), (e.HandlebarsEnvironment = c);
      var o = n(3),
        i = r(n(9)),
        a = n(34),
        u = n(99),
        s = r(n(36)),
        l = n(37);
      e.VERSION = "4.7.7";
      e.COMPILER_REVISION = 8;
      e.LAST_COMPATIBLE_COMPILER_REVISION = 7;
      e.REVISION_CHANGES = {
        1: "<= 1.0.rc.2",
        2: "== 1.0.0-rc.3",
        3: "== 1.0.0-rc.4",
        4: "== 1.x.x",
        5: "== 2.0.0-alpha.x",
        6: ">= 2.0.0-beta.1",
        7: ">= 4.0.0 <4.3.0",
        8: ">= 4.3.0",
      };
      function c(t, e, n) {
        (this.helpers = t || {}),
          (this.partials = e || {}),
          (this.decorators = n || {}),
          a.registerDefaultHelpers(this),
          u.registerDefaultDecorators(this);
      }
      c.prototype = {
        constructor: c,
        logger: s.default,
        log: s.default.log,
        registerHelper: function (t, e) {
          if ("[object Object]" === o.toString.call(t)) {
            if (e)
              throw new i.default("Arg not supported with multiple helpers");
            o.extend(this.helpers, t);
          } else this.helpers[t] = e;
        },
        unregisterHelper: function (t) {
          delete this.helpers[t];
        },
        registerPartial: function (t, e) {
          if ("[object Object]" === o.toString.call(t))
            o.extend(this.partials, t);
          else {
            if (void 0 === e)
              throw new i.default(
                'Attempting to register a partial called "' +
                  t +
                  '" as undefined',
              );
            this.partials[t] = e;
          }
        },
        unregisterPartial: function (t) {
          delete this.partials[t];
        },
        registerDecorator: function (t, e) {
          if ("[object Object]" === o.toString.call(t)) {
            if (e)
              throw new i.default("Arg not supported with multiple decorators");
            o.extend(this.decorators, t);
          } else this.decorators[t] = e;
        },
        unregisterDecorator: function (t) {
          delete this.decorators[t];
        },
        resetLoggedPropertyAccesses: function () {
          l.resetLoggedProperties();
        },
      };
      var f = s.default.log;
      (e.log = f), (e.createFrame = o.createFrame), (e.logger = s.default);
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      (e.__esModule = !0),
        (e.registerDefaultHelpers = function (t) {
          o.default(t),
            i.default(t),
            a.default(t),
            u.default(t),
            s.default(t),
            l.default(t),
            c.default(t);
        }),
        (e.moveHelperToHooks = function (t, e, n) {
          t.helpers[e] &&
            ((t.hooks[e] = t.helpers[e]), n || delete t.helpers[e]);
        });
      var o = r(n(92)),
        i = r(n(93)),
        a = r(n(94)),
        u = r(n(95)),
        s = r(n(96)),
        l = r(n(97)),
        c = r(n(98));
    },
    function (t, e) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (t) {
        "object" == typeof window && (n = window);
      }
      t.exports = n;
    },
    function (t, e, n) {
      "use strict";
      e.__esModule = !0;
      var r = n(3),
        o = {
          methodMap: ["debug", "info", "warn", "error"],
          level: "info",
          lookupLevel: function (t) {
            if ("string" == typeof t) {
              var e = r.indexOf(o.methodMap, t.toLowerCase());
              t = e >= 0 ? e : parseInt(t, 10);
            }
            return t;
          },
          log: function (t) {
            if (
              ((t = o.lookupLevel(t)),
              "undefined" != typeof console && o.lookupLevel(o.level) <= t)
            ) {
              var e = o.methodMap[t];
              console[e] || (e = "log");
              for (
                var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1;
                i < n;
                i++
              )
                r[i - 1] = arguments[i];
              console[e].apply(console, r);
            }
          },
        };
      (e.default = o), (t.exports = e.default);
    },
    function (t, e, n) {
      "use strict";
      (e.__esModule = !0),
        (e.createProtoAccessControl = function (t) {
          var e = Object.create(null);
          (e.constructor = !1),
            (e.__defineGetter__ = !1),
            (e.__defineSetter__ = !1),
            (e.__lookupGetter__ = !1);
          var n = Object.create(null);
          return (
            (n.__proto__ = !1),
            {
              properties: {
                whitelist: r.createNewLookupObject(n, t.allowedProtoProperties),
                defaultValue: t.allowProtoPropertiesByDefault,
              },
              methods: {
                whitelist: r.createNewLookupObject(e, t.allowedProtoMethods),
                defaultValue: t.allowProtoMethodsByDefault,
              },
            }
          );
        }),
        (e.resultIsAllowed = function (t, e, n) {
          return a("function" == typeof t ? e.methods : e.properties, n);
        }),
        (e.resetLoggedProperties = function () {
          Object.keys(i).forEach(function (t) {
            delete i[t];
          });
        });
      var r = n(101),
        o = (function (t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return (e.default = t), e;
        })(n(36)),
        i = Object.create(null);
      function a(t, e) {
        return void 0 !== t.whitelist[e]
          ? !0 === t.whitelist[e]
          : void 0 !== t.defaultValue
            ? t.defaultValue
            : ((function (t) {
                !0 !== i[t] &&
                  ((i[t] = !0),
                  o.log(
                    "error",
                    'Handlebars: Access has been denied to resolve the property "' +
                      t +
                      '" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details',
                  ));
              })(e),
              !1);
      }
    },
    function (t, e) {
      (t.exports = function (t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e) {
      function n(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      (t.exports = function (t, e, r) {
        return (
          e && n(t.prototype, e),
          r && n(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          t
        );
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e, n) {
      var r = n(47);
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
    function (t, e, n) {
      var r = n(48).default,
        o = n(49);
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
    function (t, e) {
      var n,
        r = [],
        o = document,
        i = o.documentElement.doScroll,
        a = (i ? /^loaded|^c/ : /^loaded|^i|^c/).test(o.readyState);
      a ||
        o.addEventListener(
          "DOMContentLoaded",
          (n = function () {
            for (
              o.removeEventListener("DOMContentLoaded", n), a = 1;
              (n = r.shift());

            )
              n();
          }),
        ),
        (e = function (t) {
          a ? setTimeout(t, 0) : r.push(t);
        }),
        (t.exports = e);
    },
    function (t, e, n) {
      var r = n(20),
        o = n(64),
        i = n(65),
        a = n(66),
        u = n(31),
        s = n(73),
        l = n(19),
        c = n(74),
        f = n(75),
        p = n(76),
        d = n(78),
        h = n(80),
        v = n(4),
        m = n(1);
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
            return e(l(this));
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
            var e = s.html(this, t);
            return v(t) ? e : this;
          },
          text: function (t) {
            var e = s.text(this, t);
            return v(t) ? e : this;
          },
          val: function (t) {
            var e = s.val(this, t);
            return v(t) ? e : this;
          },
          css: function (t, e) {
            var n = a(this, t, e);
            return g(t, e) ? n : this;
          },
          attr: function (t, e) {
            var n = u(this, t, e);
            return g(t, e) ? n : this;
          },
          data: function (t, e) {
            var n = f(this, t, e);
            return g(t, e) ? n : this;
          },
          rmAttr: function (t) {
            return u.remove(this, t), this;
          },
          remove: function () {
            return c(this), this;
          },
          addClass: function (t) {
            return d.add(this, t), this;
          },
          rmClass: function (t) {
            return d.remove(this, t), this;
          },
          toggleClass: function (t) {
            return d.toggle(this, t), this;
          },
          hasClass: function (t) {
            return d.has(this, t);
          },
          parent: function () {
            return e(this[0].parentNode);
          },
          append: function (t) {
            return h.append(this, t), this;
          },
          prepend: function (t) {
            return h.prepend(this, t), this;
          },
          before: function (t) {
            return h.before(this, t), this;
          },
          after: function (t) {
            return h.after(this, t), this;
          },
        });
      var g = function (t, e) {
        return v(e) && m(t);
      };
      t.exports = e;
    },
    function (t, e, n) {
      var r = n(17),
        o = n(21),
        i = n(16),
        a = n(83),
        u = n(32),
        s = n(0),
        l = n(8),
        c = n(13),
        f = n(85),
        p = n(5),
        d = n(86);
      e = r(
        {
          className: "Url",
          initialize: function (t) {
            !t && f && (t = window.location.href), o(this, e.parse(t || ""));
          },
          setQuery: function (t, e) {
            var n = this.query;
            return (
              p(t)
                ? s(t, function (t, e) {
                    n[e] = d(t);
                  })
                : (n[t] = d(e)),
              this
            );
          },
          rmQuery: function (t) {
            var e = this.query;
            return (
              l(t) || (t = c(t)),
              s(t, function (t) {
                delete e[t];
              }),
              this
            );
          },
          toString: function () {
            return e.stringify(this);
          },
        },
        {
          parse: function (t) {
            var e = {
                protocol: "",
                auth: "",
                hostname: "",
                hash: "",
                query: {},
                port: "",
                pathname: "",
                slashes: !1,
              },
              n = i(t),
              r = !1,
              o = n.match(h);
            if (
              (o &&
                ((o = o[0]),
                (e.protocol = o.toLowerCase()),
                (n = n.substr(o.length))),
              o &&
                (r = "//" === n.substr(0, 2)) &&
                ((n = n.slice(2)), (e.slashes = !0)),
              r)
            ) {
              for (var u = n, s = -1, l = 0, c = m.length; l < c; l++) {
                var f = n.indexOf(m[l]);
                -1 !== f && (-1 === s || f < s) && (s = f);
              }
              s > -1 && ((u = n.slice(0, s)), (n = n.slice(s)));
              var p = u.lastIndexOf("@");
              -1 !== p &&
                ((e.auth = decodeURIComponent(u.slice(0, p))),
                (u = u.slice(p + 1))),
                (e.hostname = u);
              var d = u.match(v);
              d &&
                (":" !== (d = d[0]) && (e.port = d.substr(1)),
                (e.hostname = u.substr(0, u.length - d.length)));
            }
            var g = n.indexOf("#");
            -1 !== g && ((e.hash = n.substr(g)), (n = n.slice(0, g)));
            var y = n.indexOf("?");
            return (
              -1 !== y &&
                ((e.query = a.parse(n.substr(y + 1))), (n = n.slice(0, y))),
              (e.pathname = n || "/"),
              e
            );
          },
          stringify: function (t) {
            var e =
              t.protocol +
              (t.slashes ? "//" : "") +
              (t.auth ? encodeURIComponent(t.auth) + "@" : "") +
              t.hostname +
              (t.port ? ":" + t.port : "") +
              t.pathname;
            return (
              u(t.query) || (e += "?" + a.stringify(t.query)),
              t.hash && (e += t.hash),
              e
            );
          },
        },
      );
      var h = /^([a-z0-9.+-]+:)/i,
        v = /:[0-9]*$/,
        m = ["/", "?", "#"];
      t.exports = e;
    },
    function (t, e, n) {
      t.exports = n(106).default;
    },
    function (t, e, n) {
      var r = n(6);
      (t.exports = function (t, e) {
        for (
          ;
          !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = r(t));

        );
        return t;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e) {
      function n(e, r) {
        return (
          (t.exports = n =
            Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (t, e) {
                  return (t.__proto__ = e), t;
                }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports),
          n(e, r)
        );
      }
      (t.exports = n),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e) {
      function n(e) {
        return (
          (t.exports = n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
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
          n(e)
        );
      }
      (t.exports = n),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e) {
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
    function (t, e, n) {
      var r = n(7),
        o = n(51),
        i = n(52),
        a = Object.getOwnPropertyNames,
        u = Object.getOwnPropertySymbols;
      (e = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = e.prototype,
          s = void 0 === n || n,
          l = e.unenumerable,
          c = void 0 !== l && l,
          f = e.symbol,
          p = void 0 !== f && f,
          d = [];
        if ((c || p) && a) {
          var h = r;
          c && a && (h = a);
          do {
            (d = d.concat(h(t))), p && u && (d = d.concat(u(t)));
          } while (s && (t = o(t)) && t !== Object.prototype);
          d = i(d);
        } else if (s) for (var v in t) d.push(v);
        else d = r(t);
        return d;
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var r = n(5),
        o = n(11),
        i = Object.getPrototypeOf,
        a = {}.constructor;
      (e = function (t) {
        if (r(t)) {
          if (i) return i(t);
          var e = t.__proto__;
          return e || null === e
            ? e
            : o(t.constructor)
              ? t.constructor.prototype
              : t instanceof a
                ? a.prototype
                : void 0;
        }
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var r = n(25);
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
    function (t, e, n) {
      var r = n(54),
        o = n(55);
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
    function (t, e, n) {
      var r = n(7);
      (e = n(22)(r)), (t.exports = e);
    },
    function (t, e, n) {
      var r = n(7);
      (e = function (t, e) {
        var n = r(e),
          o = n.length;
        if (null == t) return !o;
        t = Object(t);
        for (var i = 0; i < o; i++) {
          var a = n[i];
          if (e[a] !== t[a] || !(a in t)) return !1;
        }
        return !0;
      }),
        (t.exports = e);
    },
    function (t, e) {
      (e = function (t) {
        return t;
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var r = n(8),
        o = n(26);
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
    function (t, e, n) {
      var r = n(15),
        o = n(8);
      e = function (t, e) {
        if (o(t)) return t;
        if (e && r(e, t)) return [t];
        var n = [];
        return (
          t.replace(i, function (t, e, r, o) {
            n.push(r ? o.replace(a, "$1") : e || t);
          }),
          n
        );
      };
      var i =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        a = /\\(\\)?/g;
      t.exports = e;
    },
    function (t, e, n) {
      var r = n(60);
      (e = function (t, e) {
        t.prototype = r(e.prototype);
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var r = n(5);
      e = function (t) {
        if (!r(t)) return {};
        if (o) return o(t);
        function e() {}
        return (e.prototype = t), new e();
      };
      var o = Object.create;
      t.exports = e;
    },
    function (t, e, n) {
      var r = n(11);
      (e = "undefined" != typeof wx && r(wx.openLocation)), (t.exports = e);
    },
    function (t, e, n) {
      (e = n(63)(function (t, e) {
        for (var n = t.length, r = 0, o = e.length; r < o; r++)
          for (var i = e[r], a = 0, u = i.length; a < u; a++) t[n++] = i[a];
        return (t.length = n), t;
      })),
        (t.exports = e);
    },
    function (t, e) {
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
    function (t, e, n) {
      var r = n(2);
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
    function (t, e, n) {
      var r = n(0),
        o = n(2);
      e = function (t) {
        (t = o(t)),
          r(t, function (t) {
            (function (t) {
              return (
                "none" == getComputedStyle(t, "").getPropertyValue("display")
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
    function (t, e, n) {
      var r = n(1),
        o = n(5),
        i = n(28),
        a = n(4),
        u = n(30),
        s = n(23),
        l = n(2),
        c = n(69),
        f = n(0);
      e = function (t, e, n) {
        if (((t = l(t)), a(n) && r(e)))
          return (function (t, e) {
            return t.style[c(e)] || getComputedStyle(t, "").getPropertyValue(e);
          })(t[0], e);
        var d = e;
        o(d) || ((d = {})[e] = n),
          (function (t, e) {
            f(t, function (t) {
              var n = ";";
              f(e, function (t, e) {
                (e = c.dash(e)),
                  (n +=
                    e +
                    ":" +
                    (function (t, e) {
                      return s(e) && !u(p, i(t)) ? e + "px" : e;
                    })(e, t) +
                    ";");
              }),
                (t.style.cssText += n);
            });
          })(t, d);
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
    function (t, e) {
      (e = function (t, e, n) {
        return Array.prototype.indexOf.call(t, e, n);
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var r = n(0);
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
    function (t, e, n) {
      var r = n(70),
        o = n(71),
        i = n(72),
        a = n(15),
        u = n(28);
      (e = r(function (t) {
        if (((t = t.replace(l, "")), (t = o(t)), a(c, t))) return t;
        for (var e = s.length; e--; ) {
          var n = s[e] + i(t);
          if (a(c, n)) return n;
        }
        return t;
      })).dash = r(function (t) {
        var n = e(t);
        return (l.test(n) ? "-" : "") + u(n);
      });
      var s = ["O", "ms", "Moz", "Webkit"],
        l = /^(O)|(ms)|(Moz)|(Webkit)|(-o-)|(-ms-)|(-moz-)|(-webkit-)/g,
        c = document.createElement("p").style;
      t.exports = e;
    },
    function (t, e, n) {
      var r = n(15);
      (e = function (t, e) {
        var n = function (o) {
          var i = n.cache,
            a = "" + (e ? e.apply(this, arguments) : o);
          return r(i, a) || (i[a] = t.apply(this, arguments)), i[a];
        };
        return (n.cache = {}), n;
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var r = n(29);
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
    function (t, e) {
      (e = function (t) {
        return t.length < 1 ? t : t[0].toUpperCase() + t.slice(1);
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var r = n(4),
        o = n(0),
        i = n(2);
      function a(t) {
        return function (e, n) {
          var a = (e = i(e))[0];
          if (r(n)) return a ? a[t] : "";
          a &&
            o(e, function (e) {
              e[t] = n;
            });
        };
      }
      (e = { html: a("innerHTML"), text: a("textContent"), val: a("value") }),
        (t.exports = e);
    },
    function (t, e, n) {
      var r = n(0),
        o = n(2);
      (e = function (t) {
        (t = o(t)),
          r(t, function (t) {
            var e = t.parentNode;
            e && e.removeChild(t);
          });
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var r = n(31),
        o = n(1),
        i = n(5),
        a = n(0);
      n(2);
      (e = function (t, e, n) {
        var u = e;
        return (
          o(e) && (u = "data-" + e),
          i(e) &&
            ((u = {}),
            a(e, function (t, e) {
              u["data-" + e] = t;
            })),
          r(t, u, n)
        );
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var r = n(77),
        o = n(4),
        i = n(2),
        a = n(0);
      function u(t) {
        return function (e, n, u, s) {
          (e = i(e)),
            o(s) && ((s = u), (u = void 0)),
            a(e, function (e) {
              r[t](e, n, u, s);
            });
        };
      }
      (e = { on: u("add"), off: u("remove") }), (t.exports = e);
    },
    function (t, e, n) {
      var r = n(17),
        o = n(30);
      function i() {
        return !0;
      }
      function a() {
        return !1;
      }
      function u(t) {
        var n,
          r = this.events[t.type],
          o = s.call(this, t, r);
        t = new e.Event(t);
        for (var i, a, u = 0; (a = o[u++]) && !t.isPropagationStopped(); )
          for (
            t.curTarget = a.el, i = 0;
            (n = a.handlers[i++]) && !t.isImmediatePropagationStopped();

          )
            !1 === n.handler.apply(a.el, [t]) &&
              (t.preventDefault(), t.stopPropagation());
      }
      function s(t, e) {
        var n,
          r,
          i,
          a,
          u = t.target,
          s = [],
          l = e.delegateCount;
        if (u.nodeType)
          for (; u !== this; u = u.parentNode || this) {
            for (r = [], a = 0; a < l; a++)
              void 0 === r[(n = (i = e[a]).selector + " ")] &&
                (r[n] = o(this.querySelectorAll(n), u)),
                r[n] && r.push(i);
            r.length && s.push({ el: u, handlers: r });
          }
        return l < e.length && s.push({ el: this, handlers: e.slice(l) }), s;
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
                  u.apply(t, arguments);
                },
                !1,
              )),
            n ? o.splice(o.delegateCount++, 0, i) : o.push(i);
        },
        remove: function (t, e, n, r) {
          var o = t.events;
          if (o && o[e])
            for (var i, a = o[e], u = a.length; u--; )
              (i = a[u]),
                (n && i.selector != n) ||
                  i.handler != r ||
                  (a.splice(u, 1), i.selector && a.delegateCount--);
        },
        Event: r({
          className: "Event",
          initialize: function (t) {
            this.origEvent = t;
          },
          isDefaultPrevented: a,
          isPropagationStopped: a,
          isImmediatePropagationStopped: a,
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
              t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var r = n(13),
        o = n(79),
        i = n(2),
        a = n(1),
        u = n(0);
      function s(t) {
        return a(t) ? t.split(/\s+/) : r(t);
      }
      (e = {
        add: function (t, n) {
          t = i(t);
          var r = s(n);
          u(t, function (t) {
            var n = [];
            u(r, function (r) {
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
            u(t, function (t) {
              if (!e.has(t, n)) return e.add(t, n);
              e.remove(t, n);
            });
        },
        remove: function (t, e) {
          t = i(t);
          var n = s(e);
          u(t, function (t) {
            u(n, function (e) {
              t.classList.remove(e);
            });
          });
        },
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var r = n(18),
        o = n(10),
        i = n(7);
      (e = function (t, e, n) {
        e = r(e, n);
        for (var a = !o(t) && i(t), u = (a || t).length, s = 0; s < u; s++) {
          var l = a ? a[s] : s;
          if (e(t[l], l, t)) return !0;
        }
        return !1;
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var r = n(0),
        o = n(2),
        i = n(1);
      function a(t) {
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
        before: a("beforebegin"),
        after: a("afterend"),
        append: a("beforeend"),
        prepend: a("afterbegin"),
      }),
        (t.exports = e);
    },
    function (t, e) {
      var n = /^\s+/;
      (e = function (t, e) {
        if (null == e) return t.trimLeft ? t.trimLeft() : t.replace(n, "");
        for (var r, o, i = 0, a = t.length, u = e.length, s = !0; s && i < a; )
          for (s = !1, r = -1, o = t.charAt(i); ++r < u; )
            if (o === e[r]) {
              (s = !0), i++;
              break;
            }
        return i >= a ? "" : t.substr(i, a);
      }),
        (t.exports = e);
    },
    function (t, e) {
      (e = function (t, e) {
        if (null == e) {
          if (t.trimRight) return t.trimRight();
          e = " \r\n\t\f\v";
        }
        for (var n, r, o = t.length - 1, i = e.length, a = !0; a && o >= 0; )
          for (a = !1, n = -1, r = t.charAt(o); ++n < i; )
            if (r === e[n]) {
              (a = !0), o--;
              break;
            }
        return o >= 0 ? t.substring(0, o + 1) : "";
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      var r = n(16),
        o = n(0),
        i = n(4),
        a = n(8),
        u = n(27),
        s = n(32),
        l = n(25),
        c = n(5);
      e = {
        parse: function (t) {
          var e = {};
          return (
            (t = r(t).replace(f, "")),
            o(t.split("&"), function (t) {
              var n = t.split("="),
                r = n.shift(),
                o = n.length > 0 ? n.join("=") : null;
              (r = decodeURIComponent(r)),
                (o = decodeURIComponent(o)),
                i(e[r])
                  ? (e[r] = o)
                  : a(e[r])
                    ? e[r].push(o)
                    : (e[r] = [e[r], o]);
            }),
            e
          );
        },
        stringify: function (t, n) {
          return l(
            u(t, function (t, r) {
              return c(t) && s(t)
                ? ""
                : a(t)
                  ? e.stringify(t, r)
                  : (n ? encodeURIComponent(n) : encodeURIComponent(r)) +
                    "=" +
                    encodeURIComponent(t);
            }),
            function (t) {
              return t.length > 0;
            },
          ).join("&");
        },
      };
      var f = /^(\?|#|&)/g;
      t.exports = e;
    },
    function (t, e, n) {
      var r = n(12);
      (e = function (t) {
        return "[object Arguments]" === r(t);
      }),
        (t.exports = e);
    },
    function (t, e) {
      (e =
        "object" == typeof window &&
        "object" == typeof document &&
        9 === document.nodeType),
        (t.exports = e);
    },
    function (t, e) {
      (e = function (t) {
        return null == t ? "" : t.toString();
      }),
        (t.exports = e);
    },
    function (t, e, n) {
      (e = n(88)(!1)).push([
        t.i,
        ".eruda-dev-tools .eruda-tools .eruda-timing{overflow-y:auto;-webkit-overflow-scrolling:touch}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-performance-timing{padding:10px 0}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-performance-timing .eruda-inner-wrapper{background:var(--darker-background)}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-performance-timing .eruda-inner-wrapper .eruda-bar{overflow-x:auto;-webkit-overflow-scrolling:touch;border-bottom:1px solid var(--border)}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-performance-timing .eruda-inner-wrapper .eruda-bar span{font-size:12px;white-space:nowrap;padding:5px 0;background:var(--highlight);display:inline-block}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-performance-timing .eruda-inner-wrapper .eruda-bar:last-child{border-bottom:none}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-performance-timing-data{padding-bottom:10px;text-align:center}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-performance-timing-data table{width:100%;border-collapse:collapse;text-align:left}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-performance-timing-data table th{background:var(--darker-background);text-align:left;font-size:14px}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-performance-timing-data table td{font-size:12px}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-performance-timing-data table th,.eruda-dev-tools .eruda-tools .eruda-timing .eruda-performance-timing-data table td{padding:10px;border:1px solid var(--border)}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-performance-timing-data table tr:nth-child(even){background:var(--contrast)}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-title{border-top:1px solid var(--border);background:var(--darker-background);padding:10px}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-title .eruda-btn{display:flex;margin-left:5px;float:right;width:18px;height:18px;justify-content:center;align-items:center;font-size:16px;cursor:pointer;transition:color .3s}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-title .eruda-btn:active{color:var(--select-foreground)}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-entries{border-bottom:1px solid var(--border);margin-bottom:10px;overflow-x:auto;-webkit-overflow-scrolling:touch}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-entries table{min-width:100%;cursor:pointer}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-entries table tr:nth-child(4n-1){background:var(--contrast)}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-entries table td.eruda-timeline{padding:0;height:4px;font-size:0}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-entries table td.eruda-timeline span{display:inline-block;height:100%}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-entries table td{border:1px solid var(--border);padding:10px;white-space:nowrap}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-entries table .eruda-right{text-align:right}.eruda-dev-tools .eruda-tools .eruda-timing .eruda-not-supported{background:var(--console-error-background);border:1px solid var(--console-error-border);color:var(--console-error-foreground);margin:10px;padding:10px;text-align:center}\n",
        "",
      ]),
        (t.exports = e);
    },
    function (t, e, n) {
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
                      ((a = r),
                      (u = btoa(
                        unescape(encodeURIComponent(JSON.stringify(a))),
                      )),
                      (s =
                        "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                          u,
                        )),
                      "/*# ".concat(s, " */")),
                    i = r.sources.map(function (t) {
                      return "/*# sourceURL="
                        .concat(r.sourceRoot || "")
                        .concat(t, " */");
                    });
                  return [n].concat(i).concat([o]).join("\n");
                }
                var a, u, s;
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
                var a = this[i][0];
                null != a && (o[a] = !0);
              }
            for (var u = 0; u < t.length; u++) {
              var s = [].concat(t[u]);
              (r && o[s[0]]) ||
                (n &&
                  (s[2]
                    ? (s[2] = "".concat(n, " and ").concat(s[2]))
                    : (s[2] = n)),
                e.push(s));
            }
          }),
          e
        );
      };
    },
    function (t, e, n) {
      var r = n(90);
      t.exports = (r.default || r).template({
        1: function (t, e, n, r, o) {
          var i,
            a = null != e ? e : t.nullContext || {},
            u =
              t.lookupProperty ||
              function (t, e) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
              };
          return (
            '    <div class="eruda-performance-timing">\n        <div class="eruda-inner-wrapper">\n' +
            (null !=
            (i = u(n, "each").call(a, null != e ? u(e, "data") : e, {
              name: "each",
              hash: {},
              fn: t.program(2, o, 0),
              inverse: t.noop,
              data: o,
              loc: {
                start: { line: 4, column: 12 },
                end: { line: 8, column: 21 },
              },
            }))
              ? i
              : "") +
            "        </div>\n    </div>\n\n" +
            (null !=
            (i = u(n, "if").call(
              a,
              null != e ? u(e, "showPerformanceDetail") : e,
              {
                name: "if",
                hash: {},
                fn: t.program(4, o, 0),
                inverse: t.noop,
                data: o,
                loc: {
                  start: { line: 12, column: 4 },
                  end: { line: 31, column: 11 },
                },
              },
            ))
              ? i
              : "")
          );
        },
        2: function (t, e, n, r, o) {
          var i = t.lambda,
            a = t.escapeExpression,
            u =
              t.lookupProperty ||
              function (t, e) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
              };
          return (
            '                <div class="eruda-bar">\n                    <span style="position:relative;left:' +
            a(i(null != e ? u(e, "start") : e, e)) +
            "%;width:" +
            a(i(null != e ? u(e, "len") : e, e)) +
            '%">' +
            a(i(null != e ? u(e, "name") : e, e)) +
            "(" +
            a(i(null != e ? u(e, "duration") : e, e)) +
            "ms)</span>\n                </div>\n"
          );
        },
        4: function (t, e, n, r, o) {
          var i,
            a =
              t.lookupProperty ||
              function (t, e) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
              };
          return (
            '        <div class="eruda-performance-timing-data">\n            <table>\n                <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Time(ms)</th>\n                    </tr>\n                </thead>\n                <tbody>\n' +
            (null !=
            (i = a(n, "each").call(
              null != e ? e : t.nullContext || {},
              null != e ? a(e, "timing") : e,
              {
                name: "each",
                hash: {},
                fn: t.program(5, o, 0),
                inverse: t.noop,
                data: o,
                loc: {
                  start: { line: 22, column: 20 },
                  end: { line: 27, column: 29 },
                },
              },
            ))
              ? i
              : "") +
            "                </tbody>\n            </table>\n        </div>\n"
          );
        },
        5: function (t, e, n, r, o) {
          var i = t.lambda,
            a = t.escapeExpression,
            u =
              t.lookupProperty ||
              function (t, e) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
              };
          return (
            "                        <tr>\n                            <td>" +
            a(i(o && u(o, "key"), e)) +
            "</td>\n                            <td>" +
            a(i(e, e)) +
            "</td>\n                        </tr>\n"
          );
        },
        7: function (t, e, n, r, o) {
          var i,
            a =
              t.lookupProperty ||
              function (t, e) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
              };
          return (
            '    <div class="eruda-title">\n        ResourceTiming\n        <div class="eruda-btn eruda-refresh-resource-timing">\n            <span class="eruda-icon-refresh"></span>\n        </div>\n    </div>\n    <div class="eruda-entries">\n        <table>\n            <tbody>\n' +
            (null !=
            (i = a(n, "each").call(
              null != e ? e : t.nullContext || {},
              null != e ? a(e, "entries") : e,
              {
                name: "each",
                hash: {},
                fn: t.program(8, o, 0),
                inverse: t.noop,
                data: o,
                loc: {
                  start: { line: 44, column: 16 },
                  end: { line: 58, column: 25 },
                },
              },
            ))
              ? i
              : "") +
            "            </tbody>\n        </table>\n    </div>\n"
          );
        },
        8: function (t, e, n, r, o) {
          var i,
            a = t.lambda,
            u = t.escapeExpression,
            s =
              t.lookupProperty ||
              function (t, e) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
              };
          return (
            '                    <tr class="eruda-entry" data-idx="' +
            u(a(o && s(o, "key"), e)) +
            '">\n                        <td>' +
            u(a(null != e ? s(e, "name") : e, e)) +
            "</td>\n                        <td>" +
            (null !=
            (i = s(n, "if").call(
              null != e ? e : t.nullContext || {},
              null != e ? s(e, "initiatorType") : e,
              {
                name: "if",
                hash: {},
                fn: t.program(9, o, 0),
                inverse: t.noop,
                data: o,
                loc: {
                  start: { line: 47, column: 28 },
                  end: { line: 47, column: 86 },
                },
              },
            ))
              ? i
              : "") +
            '</td>\n                        <td class="eruda-right">' +
            u(a(null != e ? s(e, "displayTime") : e, e)) +
            '</td>\n                        <td class="eruda-blue">' +
            u(a(null != e ? s(e, "url") : e, e)) +
            '</td>\n                    </tr>\n                    <tr>\n                        <td class="eruda-timeline" colspan="4">\n                            <span style="border-left: 1px solid #707d8b; background: #707d8b; margin-left: ' +
            u(
              a(
                null != (i = null != e ? s(e, "timeline") : e)
                  ? s(i, "left")
                  : i,
                e,
              ),
            ) +
            "%; width: " +
            u(
              a(
                null != (i = null != e ? s(e, "timeline") : e)
                  ? s(i, "connection")
                  : i,
                e,
              ),
            ) +
            '%;"></span>\n                            <span style="background: #009688; width: ' +
            u(
              a(
                null != (i = null != e ? s(e, "timeline") : e)
                  ? s(i, "ttfb")
                  : i,
                e,
              ),
            ) +
            '%"></span>\n                            <span style="background: #2196f3; width: ' +
            u(
              a(
                null != (i = null != e ? s(e, "timeline") : e)
                  ? s(i, "response")
                  : i,
                e,
              ),
            ) +
            '%"></span>\n                        </td>\n                    </tr>\n'
          );
        },
        9: function (t, e, n, r, o) {
          var i =
            t.lookupProperty ||
            function (t, e) {
              if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
            };
          return (
            "<span>" +
            t.escapeExpression(
              t.lambda(null != e ? i(e, "initiatorType") : e, e),
            ) +
            "</span>"
          );
        },
        11: function (t, e, n, r, o) {
          return '    <div class="eruda-not-supported">\n        Not supported for this browser!\n    </div>\n';
        },
        compiler: [8, ">= 4.3.0"],
        main: function (t, e, n, r, o) {
          var i,
            a = null != e ? e : t.nullContext || {},
            u =
              t.lookupProperty ||
              function (t, e) {
                if (Object.prototype.hasOwnProperty.call(t, e)) return t[e];
              };
          return (
            (null !=
            (i = u(n, "if").call(a, null != e ? u(e, "timing") : e, {
              name: "if",
              hash: {},
              fn: t.program(1, o, 0),
              inverse: t.noop,
              data: o,
              loc: {
                start: { line: 1, column: 0 },
                end: { line: 32, column: 7 },
              },
            }))
              ? i
              : "") +
            "\n" +
            (null !=
            (i = u(n, "if").call(a, null != e ? u(e, "entries") : e, {
              name: "if",
              hash: {},
              fn: t.program(7, o, 0),
              inverse: t.noop,
              data: o,
              loc: {
                start: { line: 34, column: 0 },
                end: { line: 62, column: 7 },
              },
            }))
              ? i
              : "") +
            "\n" +
            (null !=
            (i = u(n, "if").call(a, null != e ? u(e, "notSupported") : e, {
              name: "if",
              hash: {},
              fn: t.program(11, o, 0),
              inverse: t.noop,
              data: o,
              loc: {
                start: { line: 64, column: 0 },
                end: { line: 68, column: 7 },
              },
            }))
              ? i
              : "")
          );
        },
        useData: !0,
      });
    },
    function (t, e, n) {
      t.exports = n(91).default;
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function o(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return (e.default = t), e;
      }
      e.__esModule = !0;
      var i = o(n(33)),
        a = r(n(102)),
        u = r(n(9)),
        s = o(n(3)),
        l = o(n(103)),
        c = r(n(105));
      function f() {
        var t = new i.HandlebarsEnvironment();
        return (
          s.extend(t, i),
          (t.SafeString = a.default),
          (t.Exception = u.default),
          (t.Utils = s),
          (t.escapeExpression = s.escapeExpression),
          (t.VM = l),
          (t.template = function (e) {
            return l.template(e, t);
          }),
          t
        );
      }
      var p = f();
      (p.create = f),
        c.default(p),
        (p.default = p),
        (e.default = p),
        (t.exports = e.default);
    },
    function (t, e, n) {
      "use strict";
      e.__esModule = !0;
      var r = n(3);
      (e.default = function (t) {
        t.registerHelper("blockHelperMissing", function (e, n) {
          var o = n.inverse,
            i = n.fn;
          if (!0 === e) return i(this);
          if (!1 === e || null == e) return o(this);
          if (r.isArray(e))
            return e.length > 0
              ? (n.ids && (n.ids = [n.name]), t.helpers.each(e, n))
              : o(this);
          if (n.data && n.ids) {
            var a = r.createFrame(n.data);
            (a.contextPath = r.appendContextPath(n.data.contextPath, n.name)),
              (n = { data: a });
          }
          return i(e, n);
        });
      }),
        (t.exports = e.default);
    },
    function (t, e, n) {
      "use strict";
      (function (r) {
        e.__esModule = !0;
        var o,
          i = n(3),
          a = n(9),
          u = (o = a) && o.__esModule ? o : { default: o };
        (e.default = function (t) {
          t.registerHelper("each", function (t, e) {
            if (!e) throw new u.default("Must pass iterator to #each");
            var n,
              o = e.fn,
              a = e.inverse,
              s = 0,
              l = "",
              c = void 0,
              f = void 0;
            function p(e, n, r) {
              c &&
                ((c.key = e),
                (c.index = n),
                (c.first = 0 === n),
                (c.last = !!r),
                f && (c.contextPath = f + e)),
                (l += o(t[e], {
                  data: c,
                  blockParams: i.blockParams([t[e], e], [f + e, null]),
                }));
            }
            if (
              (e.data &&
                e.ids &&
                (f = i.appendContextPath(e.data.contextPath, e.ids[0]) + "."),
              i.isFunction(t) && (t = t.call(this)),
              e.data && (c = i.createFrame(e.data)),
              t && "object" == typeof t)
            )
              if (i.isArray(t))
                for (var d = t.length; s < d; s++)
                  s in t && p(s, s, s === t.length - 1);
              else if (r.Symbol && t[r.Symbol.iterator]) {
                for (
                  var h = [], v = t[r.Symbol.iterator](), m = v.next();
                  !m.done;
                  m = v.next()
                )
                  h.push(m.value);
                for (d = (t = h).length; s < d; s++)
                  p(s, s, s === t.length - 1);
              } else
                (n = void 0),
                  Object.keys(t).forEach(function (t) {
                    void 0 !== n && p(n, s - 1), (n = t), s++;
                  }),
                  void 0 !== n && p(n, s - 1, !0);
            return 0 === s && (l = a(this)), l;
          });
        }),
          (t.exports = e.default);
      }).call(this, n(35));
    },
    function (t, e, n) {
      "use strict";
      e.__esModule = !0;
      var r,
        o = n(9),
        i = (r = o) && r.__esModule ? r : { default: r };
      (e.default = function (t) {
        t.registerHelper("helperMissing", function () {
          if (1 !== arguments.length)
            throw new i.default(
              'Missing helper: "' + arguments[arguments.length - 1].name + '"',
            );
        });
      }),
        (t.exports = e.default);
    },
    function (t, e, n) {
      "use strict";
      e.__esModule = !0;
      var r,
        o = n(3),
        i = n(9),
        a = (r = i) && r.__esModule ? r : { default: r };
      (e.default = function (t) {
        t.registerHelper("if", function (t, e) {
          if (2 != arguments.length)
            throw new a.default("#if requires exactly one argument");
          return (
            o.isFunction(t) && (t = t.call(this)),
            (!e.hash.includeZero && !t) || o.isEmpty(t)
              ? e.inverse(this)
              : e.fn(this)
          );
        }),
          t.registerHelper("unless", function (e, n) {
            if (2 != arguments.length)
              throw new a.default("#unless requires exactly one argument");
            return t.helpers.if.call(this, e, {
              fn: n.inverse,
              inverse: n.fn,
              hash: n.hash,
            });
          });
      }),
        (t.exports = e.default);
    },
    function (t, e, n) {
      "use strict";
      (e.__esModule = !0),
        (e.default = function (t) {
          t.registerHelper("log", function () {
            for (
              var e = [void 0], n = arguments[arguments.length - 1], r = 0;
              r < arguments.length - 1;
              r++
            )
              e.push(arguments[r]);
            var o = 1;
            null != n.hash.level
              ? (o = n.hash.level)
              : n.data && null != n.data.level && (o = n.data.level),
              (e[0] = o),
              t.log.apply(t, e);
          });
        }),
        (t.exports = e.default);
    },
    function (t, e, n) {
      "use strict";
      (e.__esModule = !0),
        (e.default = function (t) {
          t.registerHelper("lookup", function (t, e, n) {
            return t ? n.lookupProperty(t, e) : t;
          });
        }),
        (t.exports = e.default);
    },
    function (t, e, n) {
      "use strict";
      e.__esModule = !0;
      var r,
        o = n(3),
        i = n(9),
        a = (r = i) && r.__esModule ? r : { default: r };
      (e.default = function (t) {
        t.registerHelper("with", function (t, e) {
          if (2 != arguments.length)
            throw new a.default("#with requires exactly one argument");
          o.isFunction(t) && (t = t.call(this));
          var n = e.fn;
          if (o.isEmpty(t)) return e.inverse(this);
          var r = e.data;
          return (
            e.data &&
              e.ids &&
              ((r = o.createFrame(e.data)).contextPath = o.appendContextPath(
                e.data.contextPath,
                e.ids[0],
              )),
            n(t, {
              data: r,
              blockParams: o.blockParams([t], [r && r.contextPath]),
            })
          );
        });
      }),
        (t.exports = e.default);
    },
    function (t, e, n) {
      "use strict";
      (e.__esModule = !0),
        (e.registerDefaultDecorators = function (t) {
          i.default(t);
        });
      var r,
        o = n(100),
        i = (r = o) && r.__esModule ? r : { default: r };
    },
    function (t, e, n) {
      "use strict";
      e.__esModule = !0;
      var r = n(3);
      (e.default = function (t) {
        t.registerDecorator("inline", function (t, e, n, o) {
          var i = t;
          return (
            e.partials ||
              ((e.partials = {}),
              (i = function (o, i) {
                var a = n.partials;
                n.partials = r.extend({}, a, e.partials);
                var u = t(o, i);
                return (n.partials = a), u;
              })),
            (e.partials[o.args[0]] = o.fn),
            i
          );
        });
      }),
        (t.exports = e.default);
    },
    function (t, e, n) {
      "use strict";
      (e.__esModule = !0),
        (e.createNewLookupObject = function () {
          for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          return r.extend.apply(void 0, [Object.create(null)].concat(e));
        });
      var r = n(3);
    },
    function (t, e, n) {
      "use strict";
      function r(t) {
        this.string = t;
      }
      (e.__esModule = !0),
        (r.prototype.toString = r.prototype.toHTML =
          function () {
            return "" + this.string;
          }),
        (e.default = r),
        (t.exports = e.default);
    },
    function (t, e, n) {
      "use strict";
      (e.__esModule = !0),
        (e.checkRevision = function (t) {
          var e = (t && t[0]) || 1,
            n = u.COMPILER_REVISION;
          if (
            e >= u.LAST_COMPATIBLE_COMPILER_REVISION &&
            e <= u.COMPILER_REVISION
          )
            return;
          if (e < u.LAST_COMPATIBLE_COMPILER_REVISION) {
            var r = u.REVISION_CHANGES[n],
              o = u.REVISION_CHANGES[e];
            throw new a.default(
              "Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" +
                r +
                ") or downgrade your runtime to an older version (" +
                o +
                ").",
            );
          }
          throw new a.default(
            "Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" +
              t[1] +
              ").",
          );
        }),
        (e.template = function (t, e) {
          if (!e) throw new a.default("No environment passed to template");
          if (!t || !t.main)
            throw new a.default("Unknown template object: " + typeof t);
          (t.main.decorator = t.main_d), e.VM.checkRevision(t.compiler);
          var n = t.compiler && 7 === t.compiler[0];
          var r = {
            strict: function (t, e, n) {
              if (!t || !(e in t))
                throw new a.default('"' + e + '" not defined in ' + t, {
                  loc: n,
                });
              return r.lookupProperty(t, e);
            },
            lookupProperty: function (t, e) {
              var n = t[e];
              return null == n ||
                Object.prototype.hasOwnProperty.call(t, e) ||
                c.resultIsAllowed(n, r.protoAccessControl, e)
                ? n
                : void 0;
            },
            lookup: function (t, e) {
              for (var n = t.length, o = 0; o < n; o++) {
                if (null != (t[o] && r.lookupProperty(t[o], e))) return t[o][e];
              }
            },
            lambda: function (t, e) {
              return "function" == typeof t ? t.call(e) : t;
            },
            escapeExpression: o.escapeExpression,
            invokePartial: function (n, r, i) {
              i.hash &&
                ((r = o.extend({}, r, i.hash)), i.ids && (i.ids[0] = !0)),
                (n = e.VM.resolvePartial.call(this, n, r, i));
              var u = o.extend({}, i, {
                  hooks: this.hooks,
                  protoAccessControl: this.protoAccessControl,
                }),
                s = e.VM.invokePartial.call(this, n, r, u);
              if (
                (null == s &&
                  e.compile &&
                  ((i.partials[i.name] = e.compile(n, t.compilerOptions, e)),
                  (s = i.partials[i.name](r, u))),
                null != s)
              ) {
                if (i.indent) {
                  for (
                    var l = s.split("\n"), c = 0, f = l.length;
                    c < f && (l[c] || c + 1 !== f);
                    c++
                  )
                    l[c] = i.indent + l[c];
                  s = l.join("\n");
                }
                return s;
              }
              throw new a.default(
                "The partial " +
                  i.name +
                  " could not be compiled when running in runtime-only mode",
              );
            },
            fn: function (e) {
              var n = t[e];
              return (n.decorator = t[e + "_d"]), n;
            },
            programs: [],
            program: function (t, e, n, r, o) {
              var i = this.programs[t],
                a = this.fn(t);
              return (
                e || o || r || n
                  ? (i = f(this, t, a, e, n, r, o))
                  : i || (i = this.programs[t] = f(this, t, a)),
                i
              );
            },
            data: function (t, e) {
              for (; t && e--; ) t = t._parent;
              return t;
            },
            mergeIfNeeded: function (t, e) {
              var n = t || e;
              return t && e && t !== e && (n = o.extend({}, e, t)), n;
            },
            nullContext: Object.seal({}),
            noop: e.VM.noop,
            compilerInfo: t.compiler,
          };
          function i(e) {
            var n =
                arguments.length <= 1 || void 0 === arguments[1]
                  ? {}
                  : arguments[1],
              o = n.data;
            i._setup(n), !n.partial && t.useData && (o = d(e, o));
            var a = void 0,
              u = t.useBlockParams ? [] : void 0;
            function s(e) {
              return "" + t.main(r, e, r.helpers, r.partials, o, u, a);
            }
            return (
              t.useDepths &&
                (a = n.depths
                  ? e != n.depths[0]
                    ? [e].concat(n.depths)
                    : n.depths
                  : [e]),
              (s = h(t.main, s, r, n.depths || [], o, u))(e, n)
            );
          }
          return (
            (i.isTop = !0),
            (i._setup = function (i) {
              if (i.partial)
                (r.protoAccessControl = i.protoAccessControl),
                  (r.helpers = i.helpers),
                  (r.partials = i.partials),
                  (r.decorators = i.decorators),
                  (r.hooks = i.hooks);
              else {
                var a = o.extend({}, e.helpers, i.helpers);
                !(function (t, e) {
                  Object.keys(t).forEach(function (n) {
                    var r = t[n];
                    t[n] = (function (t, e) {
                      var n = e.lookupProperty;
                      return l.wrapHelper(t, function (t) {
                        return o.extend({ lookupProperty: n }, t);
                      });
                    })(r, e);
                  });
                })(a, r),
                  (r.helpers = a),
                  t.usePartial &&
                    (r.partials = r.mergeIfNeeded(i.partials, e.partials)),
                  (t.usePartial || t.useDecorators) &&
                    (r.decorators = o.extend({}, e.decorators, i.decorators)),
                  (r.hooks = {}),
                  (r.protoAccessControl = c.createProtoAccessControl(i));
                var u = i.allowCallsToHelperMissing || n;
                s.moveHelperToHooks(r, "helperMissing", u),
                  s.moveHelperToHooks(r, "blockHelperMissing", u);
              }
            }),
            (i._child = function (e, n, o, i) {
              if (t.useBlockParams && !o)
                throw new a.default("must pass block params");
              if (t.useDepths && !i)
                throw new a.default("must pass parent depths");
              return f(r, e, t[e], n, 0, o, i);
            }),
            i
          );
        }),
        (e.wrapProgram = f),
        (e.resolvePartial = function (t, e, n) {
          t
            ? t.call || n.name || ((n.name = t), (t = n.partials[t]))
            : (t =
                "@partial-block" === n.name
                  ? n.data["partial-block"]
                  : n.partials[n.name]);
          return t;
        }),
        (e.invokePartial = function (t, e, n) {
          var r = n.data && n.data["partial-block"];
          (n.partial = !0),
            n.ids && (n.data.contextPath = n.ids[0] || n.data.contextPath);
          var i = void 0;
          n.fn &&
            n.fn !== p &&
            (function () {
              n.data = u.createFrame(n.data);
              var t = n.fn;
              (i = n.data["partial-block"] =
                function (e) {
                  var n =
                    arguments.length <= 1 || void 0 === arguments[1]
                      ? {}
                      : arguments[1];
                  return (
                    (n.data = u.createFrame(n.data)),
                    (n.data["partial-block"] = r),
                    t(e, n)
                  );
                }),
                t.partials &&
                  (n.partials = o.extend({}, n.partials, t.partials));
            })();
          void 0 === t && i && (t = i);
          if (void 0 === t)
            throw new a.default(
              "The partial " + n.name + " could not be found",
            );
          if (t instanceof Function) return t(e, n);
        }),
        (e.noop = p);
      var r,
        o = (function (t) {
          if (t && t.__esModule) return t;
          var e = {};
          if (null != t)
            for (var n in t)
              Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return (e.default = t), e;
        })(n(3)),
        i = n(9),
        a = (r = i) && r.__esModule ? r : { default: r },
        u = n(33),
        s = n(34),
        l = n(104),
        c = n(37);
      function f(t, e, n, r, o, i, a) {
        function u(e) {
          var o =
              arguments.length <= 1 || void 0 === arguments[1]
                ? {}
                : arguments[1],
            u = a;
          return (
            !a ||
              e == a[0] ||
              (e === t.nullContext && null === a[0]) ||
              (u = [e].concat(a)),
            n(
              t,
              e,
              t.helpers,
              t.partials,
              o.data || r,
              i && [o.blockParams].concat(i),
              u,
            )
          );
        }
        return (
          ((u = h(n, u, t, a, r, i)).program = e),
          (u.depth = a ? a.length : 0),
          (u.blockParams = o || 0),
          u
        );
      }
      function p() {
        return "";
      }
      function d(t, e) {
        return (
          (e && "root" in e) || ((e = e ? u.createFrame(e) : {}).root = t), e
        );
      }
      function h(t, e, n, r, i, a) {
        if (t.decorator) {
          var u = {};
          (e = t.decorator(e, u, n, r && r[0], i, a, r)), o.extend(e, u);
        }
        return e;
      }
    },
    function (t, e, n) {
      "use strict";
      (e.__esModule = !0),
        (e.wrapHelper = function (t, e) {
          if ("function" != typeof t) return t;
          return function () {
            var n = arguments[arguments.length - 1];
            return (
              (arguments[arguments.length - 1] = e(n)), t.apply(this, arguments)
            );
          };
        });
    },
    function (t, e, n) {
      "use strict";
      (function (n) {
        (e.__esModule = !0),
          (e.default = function (t) {
            var e = void 0 !== n ? n : window,
              r = e.Handlebars;
            t.noConflict = function () {
              return e.Handlebars === t && (e.Handlebars = r), t;
            };
          }),
          (t.exports = e.default);
      }).call(this, n(35));
    },
    function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n(38),
        o = n.n(r),
        i = n(39),
        a = n.n(i),
        u = n(14),
        s = n.n(u),
        l = n(40),
        c = n.n(l),
        f = n(41),
        p = n.n(f),
        d = n(6),
        h = n.n(d),
        v = n(42),
        m = n.n(v),
        g = n(11),
        y = n.n(g),
        x = n(43),
        b = n.n(x),
        _ = n(19),
        w = n.n(_),
        P = n(16),
        O = n.n(P),
        k = n(44),
        E = n.n(k);
      function j(t) {
        var e = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
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
            r = h()(t);
          if (e) {
            var o = h()(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return p()(this, n);
        };
      }
      e.default = function (t) {
        var e = t.util.evalCss;
        return new ((function (t) {
          c()(i, t);
          var r = j(i);
          function i() {
            var t;
            o()(this, i),
              ((t = r.call(this)).name = "timing"),
              (t._style = e(n(87))),
              (t._performanceTimingData = []),
              (t._performanceTiming = {}),
              (t._showPerformanceDetail = !1),
              (t._resourceTimingData = []),
              (t._tpl = n(89));
            var a = (t._performance =
              window.webkitPerformance || window.performance);
            return (t._hasResourceTiming = a && y()(a.getEntries)), t;
          }
          return (
            a()(i, [
              {
                key: "init",
                value: function (t, e) {
                  s()(h()(i.prototype), "init", this).call(this, t, e),
                    (this._container = e),
                    this._bindEvent();
                },
              },
              {
                key: "show",
                value: function () {
                  s()(h()(i.prototype), "show", this).call(this),
                    this._render();
                },
              },
              {
                key: "hide",
                value: function () {
                  s()(h()(i.prototype), "hide", this).call(this);
                },
              },
              {
                key: "destroy",
                value: function () {
                  s()(h()(i.prototype), "destroy", this).call(this),
                    e.remove(this._style);
                },
              },
              {
                key: "_bindEvent",
                value: function () {
                  var t = this,
                    e = this._$el,
                    n = this._container,
                    r = this;
                  e.on("click", ".eruda-performance-timing", function () {
                    (r._showPerformanceDetail = !r._showPerformanceDetail),
                      r._render();
                  })
                    .on("click", ".eruda-entry", function () {
                      var t = b()(this).data("idx"),
                        e = r._resourceTimingData[Number(t)];
                      "img" === e.initiatorType &&
                        (function (t, e) {
                          var r = n.get("sources");
                          if (!r) return;
                          r.set(t, e), n.showTool("sources");
                        })("img", e.url);
                    })
                    .on("click", ".eruda-refresh-resource-timing", function () {
                      t._render();
                    });
                },
              },
              {
                key: "_getPerformanceTimingData",
                value: function () {
                  var t = this._performance;
                  if (t) {
                    var e = t.timing;
                    if (e) {
                      var n = [],
                        r = e.navigationStart,
                        o = e.unloadEventStart,
                        i = e.unloadEventEnd,
                        a = (e.redirectStart, e.redirectEnd, e.fetchStart),
                        u = e.domainLookupStart,
                        s = e.domainLookupEnd,
                        l = e.connectStart,
                        c = e.connectEnd,
                        f = (e.secureConnectionStart, e.requestStart),
                        p = e.responseStart,
                        d = e.responseEnd,
                        h = e.domLoading,
                        v = e.domInteractive,
                        m =
                          (e.domContentLoadedEventStart,
                          e.domContentLoadedEventEnd,
                          e.domComplete),
                        g = (e.loadEventStart, e.loadEventEnd),
                        y = r,
                        x = !0,
                        b = g - y;
                      if (
                        (n.push(w("Total", r, g)),
                        n.push(w("Network/Server", r, p)),
                        n.push(w("App Cache", a, u)),
                        n.push(w("DNS", u, s)),
                        n.push(w("TCP", l, c)),
                        n.push(w("Time to First Byte", f, p)),
                        n.push(w("Response", p, d)),
                        n.push(w("Unload", o, i)),
                        n.push(w("DOM Processing", h, m)),
                        n.push(w("DOM Construction", h, v)),
                        x)
                      ) {
                        this._performanceTimingData = n;
                        var _ = {};
                        [
                          "navigationStart",
                          "unloadEventStart",
                          "unloadEventEnd",
                          "redirectStart",
                          "redirectEnd",
                          "fetchStart",
                          "domainLookupStart",
                          "domainLookupEnd",
                          "connectStart",
                          "connectEnd",
                          "secureConnectionStart",
                          "requestStart",
                          "responseStart",
                          "responseEnd",
                          "domLoading",
                          "domInteractive",
                          "domContentLoadedEventStart",
                          "domContentLoadedEventEnd",
                          "domComplete",
                          "loadEventStart",
                          "loadEventEnd",
                        ].forEach(function (t) {
                          _[t] = 0 === e[t] ? 0 : e[t] - y;
                        }),
                          (this._performanceTiming = _);
                      }
                    }
                  }
                  function w(t, e, n) {
                    var r = n - e;
                    return (
                      r < 0 && (x = !1),
                      {
                        name: t,
                        start: ((e - y) / b) * 100,
                        duration: r,
                        len: (r / b) * 100,
                      }
                    );
                  }
                },
              },
              {
                key: "_getResourceTimingData",
                value: function () {
                  if (this._hasResourceTiming) {
                    var t = this._performance.getEntries(),
                      e = [],
                      n = 0;
                    t.forEach(function (t) {
                      "resource" === t.entryType &&
                        t.responseEnd > n &&
                        (n = t.responseEnd);
                    }),
                      t.forEach(function (t) {
                        if ("resource" === t.entryType) {
                          var r,
                            o,
                            i = {
                              left: (t.startTime / n) * 100,
                              connection:
                                ((t.requestStart - t.startTime) / n) * 100,
                              ttfb:
                                ((t.responseStart - t.requestStart) / n) * 100,
                              response:
                                ((t.responseEnd - t.responseStart) / n) * 100,
                            };
                          e.push({
                            name:
                              ((r = t.name),
                              (o = w()(r.split("/"))),
                              o.indexOf("?") > -1 && (o = O()(o.split("?")[0])),
                              "" === o && (o = (r = new E.a(r)).hostname),
                              o),
                            displayTime: Math.round(t.duration) + "ms",
                            url: t.name,
                            timeline: i,
                            initiatorType: t.initiatorType,
                          });
                        }
                      }),
                      (this._resourceTimingData = e);
                  }
                },
              },
              {
                key: "_render",
                value: function () {
                  var t = this;
                  if (this.active) {
                    this._getResourceTimingData();
                    var e = { entries: this._resourceTimingData };
                    0 === this._performanceTimingData.length
                      ? m()(function () {
                          t._getPerformanceTimingData(), t._render();
                        })
                      : this._getPerformanceTimingData(),
                      (e.data = this._performanceTimingData),
                      (e.timing = this._performanceTiming),
                      (e.showPerformanceDetail = this._showPerformanceDetail),
                      e.timing || e.entries || (e.notSupported = !0),
                      this._renderHtml(this._tpl(e));
                  }
                },
              },
              {
                key: "_renderHtml",
                value: function (t) {
                  t !== this._lastHtml &&
                    ((this._lastHtml = t), this._$el.html(t));
                },
              },
            ]),
            i
          );
        })(t.Tool))();
      };
    },
  ]);
});
//# sourceMappingURL=eruda-timing.js.map
