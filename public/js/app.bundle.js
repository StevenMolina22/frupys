/*! For license information please see app.bundle.js.LICENSE.txt */
!(function () {
  var e = {
      2003: function (e) {
        "use strict";
        e.exports = function ({
          mustBeMetaMask: e = !1,
          silent: t = !1,
          timeout: n = 3e3,
        } = {}) {
          !(function () {
            if ("boolean" != typeof e)
              throw new Error(
                "@metamask/detect-provider: Expected option 'mustBeMetaMask' to be a boolean."
              );
            if ("boolean" != typeof t)
              throw new Error(
                "@metamask/detect-provider: Expected option 'silent' to be a boolean."
              );
            if ("number" != typeof n)
              throw new Error(
                "@metamask/detect-provider: Expected option 'timeout' to be a number."
              );
          })();
          let i = !1;
          return new Promise((s) => {
            function r() {
              if (i) return;
              (i = !0), window.removeEventListener("ethereum#initialized", r);
              const { ethereum: n } = window;
              if (!n || (e && !n.isMetaMask)) {
                const i =
                  e && n
                    ? "Non-MetaMask window.ethereum detected."
                    : "Unable to detect window.ethereum.";
                !t && console.error("@metamask/detect-provider:", i), s(null);
              } else s(n);
            }
            window.ethereum
              ? r()
              : (window.addEventListener("ethereum#initialized", r, {
                  once: !0,
                }),
                setTimeout(() => {
                  r();
                }, n));
          });
        };
      },
      8240: function (e, t, n) {
        "use strict";
        n.d(t, {
          fi: function () {
            return x;
          },
          kZ: function () {
            return y;
          },
        });
        var i = n(400),
          s = n(2163),
          r = n(2057),
          o = n(2556),
          a = n(6333),
          l = n(4063),
          c = n(7252),
          d = n(611),
          u = n(138);
        function p(e, t, n) {
          void 0 === n && (n = !1);
          var p,
            f,
            h = (0, o.Re)(t),
            m =
              (0, o.Re)(t) &&
              (function (e) {
                var t = e.getBoundingClientRect(),
                  n = (0, u.NM)(t.width) / e.offsetWidth || 1,
                  i = (0, u.NM)(t.height) / e.offsetHeight || 1;
                return 1 !== n || 1 !== i;
              })(t),
            g = (0, c.Z)(t),
            v = (0, i.Z)(e, m, n),
            b = { scrollLeft: 0, scrollTop: 0 },
            w = { x: 0, y: 0 };
          return (
            (h || (!h && !n)) &&
              (("body" !== (0, a.Z)(t) || (0, d.Z)(g)) &&
                (b =
                  (p = t) !== (0, r.Z)(p) && (0, o.Re)(p)
                    ? { scrollLeft: (f = p).scrollLeft, scrollTop: f.scrollTop }
                    : (0, s.Z)(p)),
              (0, o.Re)(t)
                ? (((w = (0, i.Z)(t, !0)).x += t.clientLeft),
                  (w.y += t.clientTop))
                : g && (w.x = (0, l.Z)(g))),
            {
              x: v.left + b.scrollLeft - w.x,
              y: v.top + b.scrollTop - w.y,
              width: v.width,
              height: v.height,
            }
          );
        }
        var f = n(583),
          h = n(3624),
          m = n(3779),
          g = n(7701);
        function v(e) {
          var t = new Map(),
            n = new Set(),
            i = [];
          function s(e) {
            n.add(e.name),
              []
                .concat(e.requires || [], e.requiresIfExists || [])
                .forEach(function (e) {
                  if (!n.has(e)) {
                    var i = t.get(e);
                    i && s(i);
                  }
                }),
              i.push(e);
          }
          return (
            e.forEach(function (e) {
              t.set(e.name, e);
            }),
            e.forEach(function (e) {
              n.has(e.name) || s(e);
            }),
            i
          );
        }
        var b = { placement: "bottom", modifiers: [], strategy: "absolute" };
        function w() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return !t.some(function (e) {
            return !(e && "function" == typeof e.getBoundingClientRect);
          });
        }
        function y(e) {
          void 0 === e && (e = {});
          var t = e,
            n = t.defaultModifiers,
            i = void 0 === n ? [] : n,
            s = t.defaultOptions,
            r = void 0 === s ? b : s;
          return function (e, t, n) {
            void 0 === n && (n = r);
            var s,
              a,
              l = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, b, r),
                modifiersData: {},
                elements: { reference: e, popper: t },
                attributes: {},
                styles: {},
              },
              c = [],
              d = !1,
              u = {
                state: l,
                setOptions: function (n) {
                  var s = "function" == typeof n ? n(l.options) : n;
                  y(),
                    (l.options = Object.assign({}, r, l.options, s)),
                    (l.scrollParents = {
                      reference: (0, o.kK)(e)
                        ? (0, h.Z)(e)
                        : e.contextElement
                        ? (0, h.Z)(e.contextElement)
                        : [],
                      popper: (0, h.Z)(t),
                    });
                  var a,
                    d,
                    p = (function (e) {
                      var t = v(e);
                      return g.xs.reduce(function (e, n) {
                        return e.concat(
                          t.filter(function (e) {
                            return e.phase === n;
                          })
                        );
                      }, []);
                    })(
                      ((a = [].concat(i, l.options.modifiers)),
                      (d = a.reduce(function (e, t) {
                        var n = e[t.name];
                        return (
                          (e[t.name] = n
                            ? Object.assign({}, n, t, {
                                options: Object.assign(
                                  {},
                                  n.options,
                                  t.options
                                ),
                                data: Object.assign({}, n.data, t.data),
                              })
                            : t),
                          e
                        );
                      }, {})),
                      Object.keys(d).map(function (e) {
                        return d[e];
                      }))
                    );
                  return (
                    (l.orderedModifiers = p.filter(function (e) {
                      return e.enabled;
                    })),
                    l.orderedModifiers.forEach(function (e) {
                      var t = e.name,
                        n = e.options,
                        i = void 0 === n ? {} : n,
                        s = e.effect;
                      if ("function" == typeof s) {
                        var r = s({
                          state: l,
                          name: t,
                          instance: u,
                          options: i,
                        });
                        c.push(r || function () {});
                      }
                    }),
                    u.update()
                  );
                },
                forceUpdate: function () {
                  if (!d) {
                    var e = l.elements,
                      t = e.reference,
                      n = e.popper;
                    if (w(t, n)) {
                      (l.rects = {
                        reference: p(
                          t,
                          (0, m.Z)(n),
                          "fixed" === l.options.strategy
                        ),
                        popper: (0, f.Z)(n),
                      }),
                        (l.reset = !1),
                        (l.placement = l.options.placement),
                        l.orderedModifiers.forEach(function (e) {
                          return (l.modifiersData[e.name] = Object.assign(
                            {},
                            e.data
                          ));
                        });
                      for (var i = 0; i < l.orderedModifiers.length; i++)
                        if (!0 !== l.reset) {
                          var s = l.orderedModifiers[i],
                            r = s.fn,
                            o = s.options,
                            a = void 0 === o ? {} : o,
                            c = s.name;
                          "function" == typeof r &&
                            (l =
                              r({
                                state: l,
                                options: a,
                                name: c,
                                instance: u,
                              }) || l);
                        } else (l.reset = !1), (i = -1);
                    }
                  }
                },
                update:
                  ((s = function () {
                    return new Promise(function (e) {
                      u.forceUpdate(), e(l);
                    });
                  }),
                  function () {
                    return (
                      a ||
                        (a = new Promise(function (e) {
                          Promise.resolve().then(function () {
                            (a = void 0), e(s());
                          });
                        })),
                      a
                    );
                  }),
                destroy: function () {
                  y(), (d = !0);
                },
              };
            if (!w(e, t)) return u;
            function y() {
              c.forEach(function (e) {
                return e();
              }),
                (c = []);
            }
            return (
              u.setOptions(n).then(function (e) {
                !d && n.onFirstUpdate && n.onFirstUpdate(e);
              }),
              u
            );
          };
        }
        var x = y();
      },
      4985: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return s;
          },
        });
        var i = n(2556);
        function s(e, t) {
          var n = t.getRootNode && t.getRootNode();
          if (e.contains(t)) return !0;
          if (n && (0, i.Zq)(n)) {
            var s = t;
            do {
              if (s && e.isSameNode(s)) return !0;
              s = s.parentNode || s.host;
            } while (s);
          }
          return !1;
        }
      },
      400: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return a;
          },
        });
        var i = n(2556),
          s = n(138),
          r = n(2057),
          o = n(7977);
        function a(e, t, n) {
          void 0 === t && (t = !1), void 0 === n && (n = !1);
          var a = e.getBoundingClientRect(),
            l = 1,
            c = 1;
          t &&
            (0, i.Re)(e) &&
            ((l =
              (e.offsetWidth > 0 && (0, s.NM)(a.width) / e.offsetWidth) || 1),
            (c =
              (e.offsetHeight > 0 && (0, s.NM)(a.height) / e.offsetHeight) ||
              1));
          var d = ((0, i.kK)(e) ? (0, r.Z)(e) : window).visualViewport,
            u = !(0, o.Z)() && n,
            p = (a.left + (u && d ? d.offsetLeft : 0)) / l,
            f = (a.top + (u && d ? d.offsetTop : 0)) / c,
            h = a.width / l,
            m = a.height / c;
          return {
            width: h,
            height: m,
            top: f,
            right: p + h,
            bottom: f + m,
            left: p,
            x: p,
            y: f,
          };
        }
      },
      3062: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return s;
          },
        });
        var i = n(2057);
        function s(e) {
          return (0, i.Z)(e).getComputedStyle(e);
        }
      },
      7252: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return s;
          },
        });
        var i = n(2556);
        function s(e) {
          return (
            ((0, i.kK)(e) ? e.ownerDocument : e.document) || window.document
          ).documentElement;
        }
      },
      583: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return s;
          },
        });
        var i = n(400);
        function s(e) {
          var t = (0, i.Z)(e),
            n = e.offsetWidth,
            s = e.offsetHeight;
          return (
            Math.abs(t.width - n) <= 1 && (n = t.width),
            Math.abs(t.height - s) <= 1 && (s = t.height),
            { x: e.offsetLeft, y: e.offsetTop, width: n, height: s }
          );
        }
      },
      6333: function (e, t, n) {
        "use strict";
        function i(e) {
          return e ? (e.nodeName || "").toLowerCase() : null;
        }
        n.d(t, {
          Z: function () {
            return i;
          },
        });
      },
      3779: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return u;
          },
        });
        var i = n(2057),
          s = n(6333),
          r = n(3062),
          o = n(2556);
        function a(e) {
          return ["table", "td", "th"].indexOf((0, s.Z)(e)) >= 0;
        }
        var l = n(5923),
          c = n(5918);
        function d(e) {
          return (0, o.Re)(e) && "fixed" !== (0, r.Z)(e).position
            ? e.offsetParent
            : null;
        }
        function u(e) {
          for (
            var t = (0, i.Z)(e), n = d(e);
            n && a(n) && "static" === (0, r.Z)(n).position;

          )
            n = d(n);
          return n &&
            ("html" === (0, s.Z)(n) ||
              ("body" === (0, s.Z)(n) && "static" === (0, r.Z)(n).position))
            ? t
            : n ||
                (function (e) {
                  var t = /firefox/i.test((0, c.Z)());
                  if (
                    /Trident/i.test((0, c.Z)()) &&
                    (0, o.Re)(e) &&
                    "fixed" === (0, r.Z)(e).position
                  )
                    return null;
                  var n = (0, l.Z)(e);
                  for (
                    (0, o.Zq)(n) && (n = n.host);
                    (0, o.Re)(n) && ["html", "body"].indexOf((0, s.Z)(n)) < 0;

                  ) {
                    var i = (0, r.Z)(n);
                    if (
                      "none" !== i.transform ||
                      "none" !== i.perspective ||
                      "paint" === i.contain ||
                      -1 !==
                        ["transform", "perspective"].indexOf(i.willChange) ||
                      (t && "filter" === i.willChange) ||
                      (t && i.filter && "none" !== i.filter)
                    )
                      return n;
                    n = n.parentNode;
                  }
                  return null;
                })(e) ||
                t;
        }
      },
      5923: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return o;
          },
        });
        var i = n(6333),
          s = n(7252),
          r = n(2556);
        function o(e) {
          return "html" === (0, i.Z)(e)
            ? e
            : e.assignedSlot ||
                e.parentNode ||
                ((0, r.Zq)(e) ? e.host : null) ||
                (0, s.Z)(e);
        }
      },
      2057: function (e, t, n) {
        "use strict";
        function i(e) {
          if (null == e) return window;
          if ("[object Window]" !== e.toString()) {
            var t = e.ownerDocument;
            return (t && t.defaultView) || window;
          }
          return e;
        }
        n.d(t, {
          Z: function () {
            return i;
          },
        });
      },
      2163: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return s;
          },
        });
        var i = n(2057);
        function s(e) {
          var t = (0, i.Z)(e);
          return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
        }
      },
      4063: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return o;
          },
        });
        var i = n(400),
          s = n(7252),
          r = n(2163);
        function o(e) {
          return (0, i.Z)((0, s.Z)(e)).left + (0, r.Z)(e).scrollLeft;
        }
      },
      2556: function (e, t, n) {
        "use strict";
        n.d(t, {
          Re: function () {
            return r;
          },
          Zq: function () {
            return o;
          },
          kK: function () {
            return s;
          },
        });
        var i = n(2057);
        function s(e) {
          return e instanceof (0, i.Z)(e).Element || e instanceof Element;
        }
        function r(e) {
          return (
            e instanceof (0, i.Z)(e).HTMLElement || e instanceof HTMLElement
          );
        }
        function o(e) {
          return (
            "undefined" != typeof ShadowRoot &&
            (e instanceof (0, i.Z)(e).ShadowRoot || e instanceof ShadowRoot)
          );
        }
      },
      7977: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return s;
          },
        });
        var i = n(5918);
        function s() {
          return !/^((?!chrome|android).)*safari/i.test((0, i.Z)());
        }
      },
      611: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return s;
          },
        });
        var i = n(3062);
        function s(e) {
          var t = (0, i.Z)(e),
            n = t.overflow,
            s = t.overflowX,
            r = t.overflowY;
          return /auto|scroll|overlay|hidden/.test(n + r + s);
        }
      },
      3624: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return c;
          },
        });
        var i = n(5923),
          s = n(611),
          r = n(6333),
          o = n(2556);
        function a(e) {
          return ["html", "body", "#document"].indexOf((0, r.Z)(e)) >= 0
            ? e.ownerDocument.body
            : (0, o.Re)(e) && (0, s.Z)(e)
            ? e
            : a((0, i.Z)(e));
        }
        var l = n(2057);
        function c(e, t) {
          var n;
          void 0 === t && (t = []);
          var r = a(e),
            o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
            d = (0, l.Z)(r),
            u = o
              ? [d].concat(d.visualViewport || [], (0, s.Z)(r) ? r : [])
              : r,
            p = t.concat(u);
          return o ? p : p.concat(c((0, i.Z)(u)));
        }
      },
      7701: function (e, t, n) {
        "use strict";
        n.d(t, {
          BL: function () {
            return c;
          },
          Ct: function () {
            return g;
          },
          DH: function () {
            return x;
          },
          F2: function () {
            return r;
          },
          I: function () {
            return s;
          },
          MS: function () {
            return S;
          },
          N7: function () {
            return v;
          },
          Pj: function () {
            return p;
          },
          XM: function () {
            return y;
          },
          YP: function () {
            return h;
          },
          bw: function () {
            return m;
          },
          cW: function () {
            return T;
          },
          d7: function () {
            return a;
          },
          ij: function () {
            return b;
          },
          iv: function () {
            return E;
          },
          k5: function () {
            return f;
          },
          mv: function () {
            return l;
          },
          r5: function () {
            return w;
          },
          t$: function () {
            return o;
          },
          ut: function () {
            return d;
          },
          wX: function () {
            return C;
          },
          we: function () {
            return i;
          },
          xs: function () {
            return _;
          },
          zV: function () {
            return u;
          },
        });
        var i = "top",
          s = "bottom",
          r = "right",
          o = "left",
          a = "auto",
          l = [i, s, r, o],
          c = "start",
          d = "end",
          u = "clippingParents",
          p = "viewport",
          f = "popper",
          h = "reference",
          m = l.reduce(function (e, t) {
            return e.concat([t + "-" + c, t + "-" + d]);
          }, []),
          g = [].concat(l, [a]).reduce(function (e, t) {
            return e.concat([t, t + "-" + c, t + "-" + d]);
          }, []),
          v = "beforeRead",
          b = "read",
          w = "afterRead",
          y = "beforeMain",
          x = "main",
          C = "afterMain",
          E = "beforeWrite",
          T = "write",
          S = "afterWrite",
          _ = [v, b, w, y, x, C, E, T, S];
      },
      9704: function (e, t, n) {
        "use strict";
        n.r(t),
          n.d(t, {
            afterMain: function () {
              return i.wX;
            },
            afterRead: function () {
              return i.r5;
            },
            afterWrite: function () {
              return i.MS;
            },
            applyStyles: function () {
              return s.Z;
            },
            arrow: function () {
              return r.Z;
            },
            auto: function () {
              return i.d7;
            },
            basePlacements: function () {
              return i.mv;
            },
            beforeMain: function () {
              return i.XM;
            },
            beforeRead: function () {
              return i.N7;
            },
            beforeWrite: function () {
              return i.iv;
            },
            bottom: function () {
              return i.I;
            },
            clippingParents: function () {
              return i.zV;
            },
            computeStyles: function () {
              return o.Z;
            },
            createPopper: function () {
              return m.fi;
            },
            createPopperBase: function () {
              return f.fi;
            },
            createPopperLite: function () {
              return v;
            },
            detectOverflow: function () {
              return h.Z;
            },
            end: function () {
              return i.ut;
            },
            eventListeners: function () {
              return a.Z;
            },
            flip: function () {
              return l.Z;
            },
            hide: function () {
              return c.Z;
            },
            left: function () {
              return i.t$;
            },
            main: function () {
              return i.DH;
            },
            modifierPhases: function () {
              return i.xs;
            },
            offset: function () {
              return d.Z;
            },
            placements: function () {
              return i.Ct;
            },
            popper: function () {
              return i.k5;
            },
            popperGenerator: function () {
              return f.kZ;
            },
            popperOffsets: function () {
              return u.Z;
            },
            preventOverflow: function () {
              return p.Z;
            },
            read: function () {
              return i.ij;
            },
            reference: function () {
              return i.YP;
            },
            right: function () {
              return i.F2;
            },
            start: function () {
              return i.BL;
            },
            top: function () {
              return i.we;
            },
            variationPlacements: function () {
              return i.bw;
            },
            viewport: function () {
              return i.Pj;
            },
            write: function () {
              return i.cW;
            },
          });
        var i = n(7701),
          s = n(7824),
          r = n(6896),
          o = n(6531),
          a = n(2372),
          l = n(5228),
          c = n(9892),
          d = n(2122),
          u = n(7421),
          p = n(3920),
          f = n(8240),
          h = n(9966),
          m = n(804),
          g = [a.Z, u.Z, o.Z, s.Z],
          v = (0, f.kZ)({ defaultModifiers: g });
      },
      7824: function (e, t, n) {
        "use strict";
        var i = n(6333),
          s = n(2556);
        t.Z = {
          name: "applyStyles",
          enabled: !0,
          phase: "write",
          fn: function (e) {
            var t = e.state;
            Object.keys(t.elements).forEach(function (e) {
              var n = t.styles[e] || {},
                r = t.attributes[e] || {},
                o = t.elements[e];
              (0, s.Re)(o) &&
                (0, i.Z)(o) &&
                (Object.assign(o.style, n),
                Object.keys(r).forEach(function (e) {
                  var t = r[e];
                  !1 === t
                    ? o.removeAttribute(e)
                    : o.setAttribute(e, !0 === t ? "" : t);
                }));
            });
          },
          effect: function (e) {
            var t = e.state,
              n = {
                popper: {
                  position: t.options.strategy,
                  left: "0",
                  top: "0",
                  margin: "0",
                },
                arrow: { position: "absolute" },
                reference: {},
              };
            return (
              Object.assign(t.elements.popper.style, n.popper),
              (t.styles = n),
              t.elements.arrow &&
                Object.assign(t.elements.arrow.style, n.arrow),
              function () {
                Object.keys(t.elements).forEach(function (e) {
                  var r = t.elements[e],
                    o = t.attributes[e] || {},
                    a = Object.keys(
                      t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]
                    ).reduce(function (e, t) {
                      return (e[t] = ""), e;
                    }, {});
                  (0, s.Re)(r) &&
                    (0, i.Z)(r) &&
                    (Object.assign(r.style, a),
                    Object.keys(o).forEach(function (e) {
                      r.removeAttribute(e);
                    }));
                });
              }
            );
          },
          requires: ["computeStyles"],
        };
      },
      6896: function (e, t, n) {
        "use strict";
        var i = n(6206),
          s = n(583),
          r = n(4985),
          o = n(3779),
          a = n(1516),
          l = n(7516),
          c = n(3293),
          d = n(3706),
          u = n(7701);
        t.Z = {
          name: "arrow",
          enabled: !0,
          phase: "main",
          fn: function (e) {
            var t,
              n = e.state,
              r = e.name,
              p = e.options,
              f = n.elements.arrow,
              h = n.modifiersData.popperOffsets,
              m = (0, i.Z)(n.placement),
              g = (0, a.Z)(m),
              v = [u.t$, u.F2].indexOf(m) >= 0 ? "height" : "width";
            if (f && h) {
              var b = (function (e, t) {
                  return (
                    (e =
                      "function" == typeof e
                        ? e(
                            Object.assign({}, t.rects, {
                              placement: t.placement,
                            })
                          )
                        : e),
                    (0, c.Z)("number" != typeof e ? e : (0, d.Z)(e, u.mv))
                  );
                })(p.padding, n),
                w = (0, s.Z)(f),
                y = "y" === g ? u.we : u.t$,
                x = "y" === g ? u.I : u.F2,
                C =
                  n.rects.reference[v] +
                  n.rects.reference[g] -
                  h[g] -
                  n.rects.popper[v],
                E = h[g] - n.rects.reference[g],
                T = (0, o.Z)(f),
                S = T
                  ? "y" === g
                    ? T.clientHeight || 0
                    : T.clientWidth || 0
                  : 0,
                _ = C / 2 - E / 2,
                k = b[y],
                A = S - w[v] - b[x],
                O = S / 2 - w[v] / 2 + _,
                P = (0, l.u)(k, O, A),
                $ = g;
              n.modifiersData[r] =
                (((t = {})[$] = P), (t.centerOffset = P - O), t);
            }
          },
          effect: function (e) {
            var t = e.state,
              n = e.options.element,
              i = void 0 === n ? "[data-popper-arrow]" : n;
            null != i &&
              ("string" != typeof i ||
                (i = t.elements.popper.querySelector(i))) &&
              (0, r.Z)(t.elements.popper, i) &&
              (t.elements.arrow = i);
          },
          requires: ["popperOffsets"],
          requiresIfExists: ["preventOverflow"],
        };
      },
      6531: function (e, t, n) {
        "use strict";
        var i = n(7701),
          s = n(3779),
          r = n(2057),
          o = n(7252),
          a = n(3062),
          l = n(6206),
          c = n(4943),
          d = n(138),
          u = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
        function p(e) {
          var t,
            n = e.popper,
            l = e.popperRect,
            c = e.placement,
            p = e.variation,
            f = e.offsets,
            h = e.position,
            m = e.gpuAcceleration,
            g = e.adaptive,
            v = e.roundOffsets,
            b = e.isFixed,
            w = f.x,
            y = void 0 === w ? 0 : w,
            x = f.y,
            C = void 0 === x ? 0 : x,
            E = "function" == typeof v ? v({ x: y, y: C }) : { x: y, y: C };
          (y = E.x), (C = E.y);
          var T = f.hasOwnProperty("x"),
            S = f.hasOwnProperty("y"),
            _ = i.t$,
            k = i.we,
            A = window;
          if (g) {
            var O = (0, s.Z)(n),
              P = "clientHeight",
              $ = "clientWidth";
            O === (0, r.Z)(n) &&
              ((O = (0, o.Z)(n)),
              "static" !== (0, a.Z)(O).position &&
                "absolute" === h &&
                ((P = "scrollHeight"), ($ = "scrollWidth"))),
              (c === i.we || ((c === i.t$ || c === i.F2) && p === i.ut)) &&
                ((k = i.I),
                (C -=
                  (b && O === A && A.visualViewport
                    ? A.visualViewport.height
                    : O[P]) - l.height),
                (C *= m ? 1 : -1)),
              (c !== i.t$ && ((c !== i.we && c !== i.I) || p !== i.ut)) ||
                ((_ = i.F2),
                (y -=
                  (b && O === A && A.visualViewport
                    ? A.visualViewport.width
                    : O[$]) - l.width),
                (y *= m ? 1 : -1));
          }
          var M,
            L = Object.assign({ position: h }, g && u),
            I =
              !0 === v
                ? (function (e, t) {
                    var n = e.x,
                      i = e.y,
                      s = t.devicePixelRatio || 1;
                    return {
                      x: (0, d.NM)(n * s) / s || 0,
                      y: (0, d.NM)(i * s) / s || 0,
                    };
                  })({ x: y, y: C }, (0, r.Z)(n))
                : { x: y, y: C };
          return (
            (y = I.x),
            (C = I.y),
            m
              ? Object.assign(
                  {},
                  L,
                  (((M = {})[k] = S ? "0" : ""),
                  (M[_] = T ? "0" : ""),
                  (M.transform =
                    (A.devicePixelRatio || 1) <= 1
                      ? "translate(" + y + "px, " + C + "px)"
                      : "translate3d(" + y + "px, " + C + "px, 0)"),
                  M)
                )
              : Object.assign(
                  {},
                  L,
                  (((t = {})[k] = S ? C + "px" : ""),
                  (t[_] = T ? y + "px" : ""),
                  (t.transform = ""),
                  t)
                )
          );
        }
        t.Z = {
          name: "computeStyles",
          enabled: !0,
          phase: "beforeWrite",
          fn: function (e) {
            var t = e.state,
              n = e.options,
              i = n.gpuAcceleration,
              s = void 0 === i || i,
              r = n.adaptive,
              o = void 0 === r || r,
              a = n.roundOffsets,
              d = void 0 === a || a,
              u = {
                placement: (0, l.Z)(t.placement),
                variation: (0, c.Z)(t.placement),
                popper: t.elements.popper,
                popperRect: t.rects.popper,
                gpuAcceleration: s,
                isFixed: "fixed" === t.options.strategy,
              };
            null != t.modifiersData.popperOffsets &&
              (t.styles.popper = Object.assign(
                {},
                t.styles.popper,
                p(
                  Object.assign({}, u, {
                    offsets: t.modifiersData.popperOffsets,
                    position: t.options.strategy,
                    adaptive: o,
                    roundOffsets: d,
                  })
                )
              )),
              null != t.modifiersData.arrow &&
                (t.styles.arrow = Object.assign(
                  {},
                  t.styles.arrow,
                  p(
                    Object.assign({}, u, {
                      offsets: t.modifiersData.arrow,
                      position: "absolute",
                      adaptive: !1,
                      roundOffsets: d,
                    })
                  )
                )),
              (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-placement": t.placement,
              }));
          },
          data: {},
        };
      },
      2372: function (e, t, n) {
        "use strict";
        var i = n(2057),
          s = { passive: !0 };
        t.Z = {
          name: "eventListeners",
          enabled: !0,
          phase: "write",
          fn: function () {},
          effect: function (e) {
            var t = e.state,
              n = e.instance,
              r = e.options,
              o = r.scroll,
              a = void 0 === o || o,
              l = r.resize,
              c = void 0 === l || l,
              d = (0, i.Z)(t.elements.popper),
              u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
            return (
              a &&
                u.forEach(function (e) {
                  e.addEventListener("scroll", n.update, s);
                }),
              c && d.addEventListener("resize", n.update, s),
              function () {
                a &&
                  u.forEach(function (e) {
                    e.removeEventListener("scroll", n.update, s);
                  }),
                  c && d.removeEventListener("resize", n.update, s);
              }
            );
          },
          data: {},
        };
      },
      5228: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return u;
          },
        });
        var i = { left: "right", right: "left", bottom: "top", top: "bottom" };
        function s(e) {
          return e.replace(/left|right|bottom|top/g, function (e) {
            return i[e];
          });
        }
        var r = n(6206),
          o = { start: "end", end: "start" };
        function a(e) {
          return e.replace(/start|end/g, function (e) {
            return o[e];
          });
        }
        var l = n(9966),
          c = n(4943),
          d = n(7701),
          u = {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function (e) {
              var t = e.state,
                n = e.options,
                i = e.name;
              if (!t.modifiersData[i]._skip) {
                for (
                  var o = n.mainAxis,
                    u = void 0 === o || o,
                    p = n.altAxis,
                    f = void 0 === p || p,
                    h = n.fallbackPlacements,
                    m = n.padding,
                    g = n.boundary,
                    v = n.rootBoundary,
                    b = n.altBoundary,
                    w = n.flipVariations,
                    y = void 0 === w || w,
                    x = n.allowedAutoPlacements,
                    C = t.options.placement,
                    E = (0, r.Z)(C),
                    T =
                      h ||
                      (E !== C && y
                        ? (function (e) {
                            if ((0, r.Z)(e) === d.d7) return [];
                            var t = s(e);
                            return [a(e), t, a(t)];
                          })(C)
                        : [s(C)]),
                    S = [C].concat(T).reduce(function (e, n) {
                      return e.concat(
                        (0, r.Z)(n) === d.d7
                          ? (function (e, t) {
                              void 0 === t && (t = {});
                              var n = t,
                                i = n.placement,
                                s = n.boundary,
                                o = n.rootBoundary,
                                a = n.padding,
                                u = n.flipVariations,
                                p = n.allowedAutoPlacements,
                                f = void 0 === p ? d.Ct : p,
                                h = (0, c.Z)(i),
                                m = h
                                  ? u
                                    ? d.bw
                                    : d.bw.filter(function (e) {
                                        return (0, c.Z)(e) === h;
                                      })
                                  : d.mv,
                                g = m.filter(function (e) {
                                  return f.indexOf(e) >= 0;
                                });
                              0 === g.length && (g = m);
                              var v = g.reduce(function (t, n) {
                                return (
                                  (t[n] = (0, l.Z)(e, {
                                    placement: n,
                                    boundary: s,
                                    rootBoundary: o,
                                    padding: a,
                                  })[(0, r.Z)(n)]),
                                  t
                                );
                              }, {});
                              return Object.keys(v).sort(function (e, t) {
                                return v[e] - v[t];
                              });
                            })(t, {
                              placement: n,
                              boundary: g,
                              rootBoundary: v,
                              padding: m,
                              flipVariations: y,
                              allowedAutoPlacements: x,
                            })
                          : n
                      );
                    }, []),
                    _ = t.rects.reference,
                    k = t.rects.popper,
                    A = new Map(),
                    O = !0,
                    P = S[0],
                    $ = 0;
                  $ < S.length;
                  $++
                ) {
                  var M = S[$],
                    L = (0, r.Z)(M),
                    I = (0, c.Z)(M) === d.BL,
                    D = [d.we, d.I].indexOf(L) >= 0,
                    N = D ? "width" : "height",
                    j = (0, l.Z)(t, {
                      placement: M,
                      boundary: g,
                      rootBoundary: v,
                      altBoundary: b,
                      padding: m,
                    }),
                    z = D ? (I ? d.F2 : d.t$) : I ? d.I : d.we;
                  _[N] > k[N] && (z = s(z));
                  var Z = s(z),
                    V = [];
                  if (
                    (u && V.push(j[L] <= 0),
                    f && V.push(j[z] <= 0, j[Z] <= 0),
                    V.every(function (e) {
                      return e;
                    }))
                  ) {
                    (P = M), (O = !1);
                    break;
                  }
                  A.set(M, V);
                }
                if (O)
                  for (
                    var B = function (e) {
                        var t = S.find(function (t) {
                          var n = A.get(t);
                          if (n)
                            return n.slice(0, e).every(function (e) {
                              return e;
                            });
                        });
                        if (t) return (P = t), "break";
                      },
                      F = y ? 3 : 1;
                    F > 0 && "break" !== B(F);
                    F--
                  );
                t.placement !== P &&
                  ((t.modifiersData[i]._skip = !0),
                  (t.placement = P),
                  (t.reset = !0));
              }
            },
            requiresIfExists: ["offset"],
            data: { _skip: !1 },
          };
      },
      9892: function (e, t, n) {
        "use strict";
        var i = n(7701),
          s = n(9966);
        function r(e, t, n) {
          return (
            void 0 === n && (n = { x: 0, y: 0 }),
            {
              top: e.top - t.height - n.y,
              right: e.right - t.width + n.x,
              bottom: e.bottom - t.height + n.y,
              left: e.left - t.width - n.x,
            }
          );
        }
        function o(e) {
          return [i.we, i.F2, i.I, i.t$].some(function (t) {
            return e[t] >= 0;
          });
        }
        t.Z = {
          name: "hide",
          enabled: !0,
          phase: "main",
          requiresIfExists: ["preventOverflow"],
          fn: function (e) {
            var t = e.state,
              n = e.name,
              i = t.rects.reference,
              a = t.rects.popper,
              l = t.modifiersData.preventOverflow,
              c = (0, s.Z)(t, { elementContext: "reference" }),
              d = (0, s.Z)(t, { altBoundary: !0 }),
              u = r(c, i),
              p = r(d, a, l),
              f = o(u),
              h = o(p);
            (t.modifiersData[n] = {
              referenceClippingOffsets: u,
              popperEscapeOffsets: p,
              isReferenceHidden: f,
              hasPopperEscaped: h,
            }),
              (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-reference-hidden": f,
                "data-popper-escaped": h,
              }));
          },
        };
      },
      2122: function (e, t, n) {
        "use strict";
        var i = n(6206),
          s = n(7701);
        t.Z = {
          name: "offset",
          enabled: !0,
          phase: "main",
          requires: ["popperOffsets"],
          fn: function (e) {
            var t = e.state,
              n = e.options,
              r = e.name,
              o = n.offset,
              a = void 0 === o ? [0, 0] : o,
              l = s.Ct.reduce(function (e, n) {
                return (
                  (e[n] = (function (e, t, n) {
                    var r = (0, i.Z)(e),
                      o = [s.t$, s.we].indexOf(r) >= 0 ? -1 : 1,
                      a =
                        "function" == typeof n
                          ? n(Object.assign({}, t, { placement: e }))
                          : n,
                      l = a[0],
                      c = a[1];
                    return (
                      (l = l || 0),
                      (c = (c || 0) * o),
                      [s.t$, s.F2].indexOf(r) >= 0
                        ? { x: c, y: l }
                        : { x: l, y: c }
                    );
                  })(n, t.rects, a)),
                  e
                );
              }, {}),
              c = l[t.placement],
              d = c.x,
              u = c.y;
            null != t.modifiersData.popperOffsets &&
              ((t.modifiersData.popperOffsets.x += d),
              (t.modifiersData.popperOffsets.y += u)),
              (t.modifiersData[r] = l);
          },
        };
      },
      7421: function (e, t, n) {
        "use strict";
        var i = n(2581);
        t.Z = {
          name: "popperOffsets",
          enabled: !0,
          phase: "read",
          fn: function (e) {
            var t = e.state,
              n = e.name;
            t.modifiersData[n] = (0, i.Z)({
              reference: t.rects.reference,
              element: t.rects.popper,
              strategy: "absolute",
              placement: t.placement,
            });
          },
          data: {},
        };
      },
      3920: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return f;
          },
        });
        var i = n(7701),
          s = n(6206),
          r = n(1516),
          o = n(7516),
          a = n(583),
          l = n(3779),
          c = n(9966),
          d = n(4943),
          u = n(3607),
          p = n(138),
          f = {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function (e) {
              var t = e.state,
                n = e.options,
                f = e.name,
                h = n.mainAxis,
                m = void 0 === h || h,
                g = n.altAxis,
                v = void 0 !== g && g,
                b = n.boundary,
                w = n.rootBoundary,
                y = n.altBoundary,
                x = n.padding,
                C = n.tether,
                E = void 0 === C || C,
                T = n.tetherOffset,
                S = void 0 === T ? 0 : T,
                _ = (0, c.Z)(t, {
                  boundary: b,
                  rootBoundary: w,
                  padding: x,
                  altBoundary: y,
                }),
                k = (0, s.Z)(t.placement),
                A = (0, d.Z)(t.placement),
                O = !A,
                P = (0, r.Z)(k),
                $ = "x" === P ? "y" : "x",
                M = t.modifiersData.popperOffsets,
                L = t.rects.reference,
                I = t.rects.popper,
                D =
                  "function" == typeof S
                    ? S(Object.assign({}, t.rects, { placement: t.placement }))
                    : S,
                N =
                  "number" == typeof D
                    ? { mainAxis: D, altAxis: D }
                    : Object.assign({ mainAxis: 0, altAxis: 0 }, D),
                j = t.modifiersData.offset
                  ? t.modifiersData.offset[t.placement]
                  : null,
                z = { x: 0, y: 0 };
              if (M) {
                if (m) {
                  var Z,
                    V = "y" === P ? i.we : i.t$,
                    B = "y" === P ? i.I : i.F2,
                    F = "y" === P ? "height" : "width",
                    G = M[P],
                    H = G + _[V],
                    R = G - _[B],
                    q = E ? -I[F] / 2 : 0,
                    W = A === i.BL ? L[F] : I[F],
                    Y = A === i.BL ? -I[F] : -L[F],
                    U = t.elements.arrow,
                    X = E && U ? (0, a.Z)(U) : { width: 0, height: 0 },
                    K = t.modifiersData["arrow#persistent"]
                      ? t.modifiersData["arrow#persistent"].padding
                      : (0, u.Z)(),
                    Q = K[V],
                    J = K[B],
                    ee = (0, o.u)(0, L[F], X[F]),
                    te = O
                      ? L[F] / 2 - q - ee - Q - N.mainAxis
                      : W - ee - Q - N.mainAxis,
                    ne = O
                      ? -L[F] / 2 + q + ee + J + N.mainAxis
                      : Y + ee + J + N.mainAxis,
                    ie = t.elements.arrow && (0, l.Z)(t.elements.arrow),
                    se = ie
                      ? "y" === P
                        ? ie.clientTop || 0
                        : ie.clientLeft || 0
                      : 0,
                    re = null != (Z = null == j ? void 0 : j[P]) ? Z : 0,
                    oe = G + te - re - se,
                    ae = G + ne - re,
                    le = (0, o.u)(
                      E ? (0, p.VV)(H, oe) : H,
                      G,
                      E ? (0, p.Fp)(R, ae) : R
                    );
                  (M[P] = le), (z[P] = le - G);
                }
                if (v) {
                  var ce,
                    de = "x" === P ? i.we : i.t$,
                    ue = "x" === P ? i.I : i.F2,
                    pe = M[$],
                    fe = "y" === $ ? "height" : "width",
                    he = pe + _[de],
                    me = pe - _[ue],
                    ge = -1 !== [i.we, i.t$].indexOf(k),
                    ve = null != (ce = null == j ? void 0 : j[$]) ? ce : 0,
                    be = ge ? he : pe - L[fe] - I[fe] - ve + N.altAxis,
                    we = ge ? pe + L[fe] + I[fe] - ve - N.altAxis : me,
                    ye =
                      E && ge
                        ? (0, o.q)(be, pe, we)
                        : (0, o.u)(E ? be : he, pe, E ? we : me);
                  (M[$] = ye), (z[$] = ye - pe);
                }
                t.modifiersData[f] = z;
              }
            },
            requiresIfExists: ["offset"],
          };
      },
      804: function (e, t, n) {
        "use strict";
        n.d(t, {
          fi: function () {
            return h;
          },
        });
        var i = n(8240),
          s = n(2372),
          r = n(7421),
          o = n(6531),
          a = n(7824),
          l = n(2122),
          c = n(5228),
          d = n(3920),
          u = n(6896),
          p = n(9892),
          f = [s.Z, r.Z, o.Z, a.Z, l.Z, c.Z, d.Z, u.Z, p.Z],
          h = (0, i.kZ)({ defaultModifiers: f });
      },
      2581: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return a;
          },
        });
        var i = n(6206),
          s = n(4943),
          r = n(1516),
          o = n(7701);
        function a(e) {
          var t,
            n = e.reference,
            a = e.element,
            l = e.placement,
            c = l ? (0, i.Z)(l) : null,
            d = l ? (0, s.Z)(l) : null,
            u = n.x + n.width / 2 - a.width / 2,
            p = n.y + n.height / 2 - a.height / 2;
          switch (c) {
            case o.we:
              t = { x: u, y: n.y - a.height };
              break;
            case o.I:
              t = { x: u, y: n.y + n.height };
              break;
            case o.F2:
              t = { x: n.x + n.width, y: p };
              break;
            case o.t$:
              t = { x: n.x - a.width, y: p };
              break;
            default:
              t = { x: n.x, y: n.y };
          }
          var f = c ? (0, r.Z)(c) : null;
          if (null != f) {
            var h = "y" === f ? "height" : "width";
            switch (d) {
              case o.BL:
                t[f] = t[f] - (n[h] / 2 - a[h] / 2);
                break;
              case o.ut:
                t[f] = t[f] + (n[h] / 2 - a[h] / 2);
            }
          }
          return t;
        }
      },
      9966: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return E;
          },
        });
        var i = n(7701),
          s = n(2057),
          r = n(7252),
          o = n(4063),
          a = n(7977),
          l = n(3062),
          c = n(2163),
          d = n(138),
          u = n(3624),
          p = n(3779),
          f = n(2556),
          h = n(400),
          m = n(5923),
          g = n(4985),
          v = n(6333);
        function b(e) {
          return Object.assign({}, e, {
            left: e.x,
            top: e.y,
            right: e.x + e.width,
            bottom: e.y + e.height,
          });
        }
        function w(e, t, n) {
          return t === i.Pj
            ? b(
                (function (e, t) {
                  var n = (0, s.Z)(e),
                    i = (0, r.Z)(e),
                    l = n.visualViewport,
                    c = i.clientWidth,
                    d = i.clientHeight,
                    u = 0,
                    p = 0;
                  if (l) {
                    (c = l.width), (d = l.height);
                    var f = (0, a.Z)();
                    (f || (!f && "fixed" === t)) &&
                      ((u = l.offsetLeft), (p = l.offsetTop));
                  }
                  return { width: c, height: d, x: u + (0, o.Z)(e), y: p };
                })(e, n)
              )
            : (0, f.kK)(t)
            ? (function (e, t) {
                var n = (0, h.Z)(e, !1, "fixed" === t);
                return (
                  (n.top = n.top + e.clientTop),
                  (n.left = n.left + e.clientLeft),
                  (n.bottom = n.top + e.clientHeight),
                  (n.right = n.left + e.clientWidth),
                  (n.width = e.clientWidth),
                  (n.height = e.clientHeight),
                  (n.x = n.left),
                  (n.y = n.top),
                  n
                );
              })(t, n)
            : b(
                (function (e) {
                  var t,
                    n = (0, r.Z)(e),
                    i = (0, c.Z)(e),
                    s = null == (t = e.ownerDocument) ? void 0 : t.body,
                    a = (0, d.Fp)(
                      n.scrollWidth,
                      n.clientWidth,
                      s ? s.scrollWidth : 0,
                      s ? s.clientWidth : 0
                    ),
                    u = (0, d.Fp)(
                      n.scrollHeight,
                      n.clientHeight,
                      s ? s.scrollHeight : 0,
                      s ? s.clientHeight : 0
                    ),
                    p = -i.scrollLeft + (0, o.Z)(e),
                    f = -i.scrollTop;
                  return (
                    "rtl" === (0, l.Z)(s || n).direction &&
                      (p +=
                        (0, d.Fp)(n.clientWidth, s ? s.clientWidth : 0) - a),
                    { width: a, height: u, x: p, y: f }
                  );
                })((0, r.Z)(e))
              );
        }
        var y = n(2581),
          x = n(3293),
          C = n(3706);
        function E(e, t) {
          void 0 === t && (t = {});
          var n = t,
            s = n.placement,
            o = void 0 === s ? e.placement : s,
            a = n.strategy,
            c = void 0 === a ? e.strategy : a,
            E = n.boundary,
            T = void 0 === E ? i.zV : E,
            S = n.rootBoundary,
            _ = void 0 === S ? i.Pj : S,
            k = n.elementContext,
            A = void 0 === k ? i.k5 : k,
            O = n.altBoundary,
            P = void 0 !== O && O,
            $ = n.padding,
            M = void 0 === $ ? 0 : $,
            L = (0, x.Z)("number" != typeof M ? M : (0, C.Z)(M, i.mv)),
            I = A === i.k5 ? i.YP : i.k5,
            D = e.rects.popper,
            N = e.elements[P ? I : A],
            j = (function (e, t, n, i) {
              var s =
                  "clippingParents" === t
                    ? (function (e) {
                        var t = (0, u.Z)((0, m.Z)(e)),
                          n =
                            ["absolute", "fixed"].indexOf(
                              (0, l.Z)(e).position
                            ) >= 0 && (0, f.Re)(e)
                              ? (0, p.Z)(e)
                              : e;
                        return (0, f.kK)(n)
                          ? t.filter(function (e) {
                              return (
                                (0, f.kK)(e) &&
                                (0, g.Z)(e, n) &&
                                "body" !== (0, v.Z)(e)
                              );
                            })
                          : [];
                      })(e)
                    : [].concat(t),
                r = [].concat(s, [n]),
                o = r[0],
                a = r.reduce(function (t, n) {
                  var s = w(e, n, i);
                  return (
                    (t.top = (0, d.Fp)(s.top, t.top)),
                    (t.right = (0, d.VV)(s.right, t.right)),
                    (t.bottom = (0, d.VV)(s.bottom, t.bottom)),
                    (t.left = (0, d.Fp)(s.left, t.left)),
                    t
                  );
                }, w(e, o, i));
              return (
                (a.width = a.right - a.left),
                (a.height = a.bottom - a.top),
                (a.x = a.left),
                (a.y = a.top),
                a
              );
            })(
              (0, f.kK)(N)
                ? N
                : N.contextElement || (0, r.Z)(e.elements.popper),
              T,
              _,
              c
            ),
            z = (0, h.Z)(e.elements.reference),
            Z = (0, y.Z)({
              reference: z,
              element: D,
              strategy: "absolute",
              placement: o,
            }),
            V = b(Object.assign({}, D, Z)),
            B = A === i.k5 ? V : z,
            F = {
              top: j.top - B.top + L.top,
              bottom: B.bottom - j.bottom + L.bottom,
              left: j.left - B.left + L.left,
              right: B.right - j.right + L.right,
            },
            G = e.modifiersData.offset;
          if (A === i.k5 && G) {
            var H = G[o];
            Object.keys(F).forEach(function (e) {
              var t = [i.F2, i.I].indexOf(e) >= 0 ? 1 : -1,
                n = [i.we, i.I].indexOf(e) >= 0 ? "y" : "x";
              F[e] += H[n] * t;
            });
          }
          return F;
        }
      },
      3706: function (e, t, n) {
        "use strict";
        function i(e, t) {
          return t.reduce(function (t, n) {
            return (t[n] = e), t;
          }, {});
        }
        n.d(t, {
          Z: function () {
            return i;
          },
        });
      },
      6206: function (e, t, n) {
        "use strict";
        function i(e) {
          return e.split("-")[0];
        }
        n.d(t, {
          Z: function () {
            return i;
          },
        });
      },
      3607: function (e, t, n) {
        "use strict";
        function i() {
          return { top: 0, right: 0, bottom: 0, left: 0 };
        }
        n.d(t, {
          Z: function () {
            return i;
          },
        });
      },
      1516: function (e, t, n) {
        "use strict";
        function i(e) {
          return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
        }
        n.d(t, {
          Z: function () {
            return i;
          },
        });
      },
      4943: function (e, t, n) {
        "use strict";
        function i(e) {
          return e.split("-")[1];
        }
        n.d(t, {
          Z: function () {
            return i;
          },
        });
      },
      138: function (e, t, n) {
        "use strict";
        n.d(t, {
          Fp: function () {
            return i;
          },
          NM: function () {
            return r;
          },
          VV: function () {
            return s;
          },
        });
        var i = Math.max,
          s = Math.min,
          r = Math.round;
      },
      3293: function (e, t, n) {
        "use strict";
        n.d(t, {
          Z: function () {
            return s;
          },
        });
        var i = n(3607);
        function s(e) {
          return Object.assign({}, (0, i.Z)(), e);
        }
      },
      5918: function (e, t, n) {
        "use strict";
        function i() {
          var e = navigator.userAgentData;
          return null != e && e.brands && Array.isArray(e.brands)
            ? e.brands
                .map(function (e) {
                  return e.brand + "/" + e.version;
                })
                .join(" ")
            : navigator.userAgent;
        }
        n.d(t, {
          Z: function () {
            return i;
          },
        });
      },
      7516: function (e, t, n) {
        "use strict";
        n.d(t, {
          q: function () {
            return r;
          },
          u: function () {
            return s;
          },
        });
        var i = n(138);
        function s(e, t, n) {
          return (0, i.Fp)(e, (0, i.VV)(t, n));
        }
        function r(e, t, n) {
          var i = s(e, t, n);
          return i > n ? n : i;
        }
      },
      5511: function (e, t, n) {
        e.exports = (function (e, t, n, i) {
          "use strict";
          const s = ".bs.alert",
            r = `close${s}`,
            o = `closed${s}`;
          class a extends e {
            static get NAME() {
              return "alert";
            }
            close() {
              if (t.trigger(this._element, r).defaultPrevented) return;
              this._element.classList.remove("show");
              const e = this._element.classList.contains("fade");
              this._queueCallback(
                () => this._destroyElement(),
                this._element,
                e
              );
            }
            _destroyElement() {
              this._element.remove(),
                t.trigger(this._element, o),
                this.dispose();
            }
            static jQueryInterface(e) {
              return this.each(function () {
                const t = a.getOrCreateInstance(this);
                if ("string" == typeof e) {
                  if (
                    void 0 === t[e] ||
                    e.startsWith("_") ||
                    "constructor" === e
                  )
                    throw new TypeError(`No method named "${e}"`);
                  t[e](this);
                }
              });
            }
          }
          return n.enableDismissTrigger(a, "close"), i.defineJQueryPlugin(a), a;
        })(n(5695), n(9286), n(1127), n(4072));
      },
      5695: function (e, t, n) {
        e.exports = (function (e, t, n, i) {
          "use strict";
          return class extends n {
            constructor(t, n) {
              super(),
                (t = i.getElement(t)) &&
                  ((this._element = t),
                  (this._config = this._getConfig(n)),
                  e.set(this._element, this.constructor.DATA_KEY, this));
            }
            dispose() {
              e.remove(this._element, this.constructor.DATA_KEY),
                t.off(this._element, this.constructor.EVENT_KEY);
              for (const e of Object.getOwnPropertyNames(this)) this[e] = null;
            }
            _queueCallback(e, t, n = !0) {
              i.executeAfterTransition(e, t, n);
            }
            _getConfig(e) {
              return (
                (e = this._mergeConfigObj(e, this._element)),
                (e = this._configAfterMerge(e)),
                this._typeCheckConfig(e),
                e
              );
            }
            static getInstance(t) {
              return e.get(i.getElement(t), this.DATA_KEY);
            }
            static getOrCreateInstance(e, t = {}) {
              return (
                this.getInstance(e) ||
                new this(e, "object" == typeof t ? t : null)
              );
            }
            static get VERSION() {
              return "5.3.2";
            }
            static get DATA_KEY() {
              return `bs.${this.NAME}`;
            }
            static get EVENT_KEY() {
              return `.${this.DATA_KEY}`;
            }
            static eventName(e) {
              return `${e}${this.EVENT_KEY}`;
            }
          };
        })(n(493), n(9286), n(4705), n(4072));
      },
      3863: function (e, t, n) {
        e.exports = (function (e, t, n, i) {
          "use strict";
          const s = ".bs.collapse",
            r = `show${s}`,
            o = `shown${s}`,
            a = `hide${s}`,
            l = `hidden${s}`,
            c = `click${s}.data-api`,
            d = "show",
            u = "collapse",
            p = "collapsing",
            f = `:scope .${u} .${u}`,
            h = '[data-bs-toggle="collapse"]',
            m = { parent: null, toggle: !0 },
            g = { parent: "(null|element)", toggle: "boolean" };
          class v extends e {
            constructor(e, t) {
              super(e, t),
                (this._isTransitioning = !1),
                (this._triggerArray = []);
              const i = n.find(h);
              for (const e of i) {
                const t = n.getSelectorFromElement(e),
                  i = n.find(t).filter((e) => e === this._element);
                null !== t && i.length && this._triggerArray.push(e);
              }
              this._initializeChildren(),
                this._config.parent ||
                  this._addAriaAndCollapsedClass(
                    this._triggerArray,
                    this._isShown()
                  ),
                this._config.toggle && this.toggle();
            }
            static get Default() {
              return m;
            }
            static get DefaultType() {
              return g;
            }
            static get NAME() {
              return "collapse";
            }
            toggle() {
              this._isShown() ? this.hide() : this.show();
            }
            show() {
              if (this._isTransitioning || this._isShown()) return;
              let e = [];
              if (
                (this._config.parent &&
                  (e = this._getFirstLevelChildren(
                    ".collapse.show, .collapse.collapsing"
                  )
                    .filter((e) => e !== this._element)
                    .map((e) => v.getOrCreateInstance(e, { toggle: !1 }))),
                e.length && e[0]._isTransitioning)
              )
                return;
              if (t.trigger(this._element, r).defaultPrevented) return;
              for (const t of e) t.hide();
              const n = this._getDimension();
              this._element.classList.remove(u),
                this._element.classList.add(p),
                (this._element.style[n] = 0),
                this._addAriaAndCollapsedClass(this._triggerArray, !0),
                (this._isTransitioning = !0);
              const i = `scroll${n[0].toUpperCase() + n.slice(1)}`;
              this._queueCallback(
                () => {
                  (this._isTransitioning = !1),
                    this._element.classList.remove(p),
                    this._element.classList.add(u, d),
                    (this._element.style[n] = ""),
                    t.trigger(this._element, o);
                },
                this._element,
                !0
              ),
                (this._element.style[n] = `${this._element[i]}px`);
            }
            hide() {
              if (this._isTransitioning || !this._isShown()) return;
              if (t.trigger(this._element, a).defaultPrevented) return;
              const e = this._getDimension();
              (this._element.style[e] = `${
                this._element.getBoundingClientRect()[e]
              }px`),
                i.reflow(this._element),
                this._element.classList.add(p),
                this._element.classList.remove(u, d);
              for (const e of this._triggerArray) {
                const t = n.getElementFromSelector(e);
                t &&
                  !this._isShown(t) &&
                  this._addAriaAndCollapsedClass([e], !1);
              }
              this._isTransitioning = !0;
              (this._element.style[e] = ""),
                this._queueCallback(
                  () => {
                    (this._isTransitioning = !1),
                      this._element.classList.remove(p),
                      this._element.classList.add(u),
                      t.trigger(this._element, l);
                  },
                  this._element,
                  !0
                );
            }
            _isShown(e = this._element) {
              return e.classList.contains(d);
            }
            _configAfterMerge(e) {
              return (
                (e.toggle = Boolean(e.toggle)),
                (e.parent = i.getElement(e.parent)),
                e
              );
            }
            _getDimension() {
              return this._element.classList.contains("collapse-horizontal")
                ? "width"
                : "height";
            }
            _initializeChildren() {
              if (!this._config.parent) return;
              const e = this._getFirstLevelChildren(h);
              for (const t of e) {
                const e = n.getElementFromSelector(t);
                e && this._addAriaAndCollapsedClass([t], this._isShown(e));
              }
            }
            _getFirstLevelChildren(e) {
              const t = n.find(f, this._config.parent);
              return n
                .find(e, this._config.parent)
                .filter((e) => !t.includes(e));
            }
            _addAriaAndCollapsedClass(e, t) {
              if (e.length)
                for (const n of e)
                  n.classList.toggle("collapsed", !t),
                    n.setAttribute("aria-expanded", t);
            }
            static jQueryInterface(e) {
              const t = {};
              return (
                "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1),
                this.each(function () {
                  const n = v.getOrCreateInstance(this, t);
                  if ("string" == typeof e) {
                    if (void 0 === n[e])
                      throw new TypeError(`No method named "${e}"`);
                    n[e]();
                  }
                })
              );
            }
          }
          return (
            t.on(document, c, h, function (e) {
              ("A" === e.target.tagName ||
                (e.delegateTarget && "A" === e.delegateTarget.tagName)) &&
                e.preventDefault();
              for (const e of n.getMultipleElementsFromSelector(this))
                v.getOrCreateInstance(e, { toggle: !1 }).toggle();
            }),
            i.defineJQueryPlugin(v),
            v
          );
        })(n(5695), n(9286), n(8737), n(4072));
      },
      493: function (e) {
        e.exports = (function () {
          "use strict";
          const e = new Map();
          return {
            set(t, n, i) {
              e.has(t) || e.set(t, new Map());
              const s = e.get(t);
              s.has(n) || 0 === s.size
                ? s.set(n, i)
                : console.error(
                    `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                      Array.from(s.keys())[0]
                    }.`
                  );
            },
            get(t, n) {
              return (e.has(t) && e.get(t).get(n)) || null;
            },
            remove(t, n) {
              if (!e.has(t)) return;
              const i = e.get(t);
              i.delete(n), 0 === i.size && e.delete(t);
            },
          };
        })();
      },
      9286: function (e, t, n) {
        e.exports = (function (e) {
          "use strict";
          const t = /[^.]*(?=\..*)\.|.*/,
            n = /\..*/,
            i = /::\d+$/,
            s = {};
          let r = 1;
          const o = { mouseenter: "mouseover", mouseleave: "mouseout" },
            a = new Set([
              "click",
              "dblclick",
              "mouseup",
              "mousedown",
              "contextmenu",
              "mousewheel",
              "DOMMouseScroll",
              "mouseover",
              "mouseout",
              "mousemove",
              "selectstart",
              "selectend",
              "keydown",
              "keypress",
              "keyup",
              "orientationchange",
              "touchstart",
              "touchmove",
              "touchend",
              "touchcancel",
              "pointerdown",
              "pointermove",
              "pointerup",
              "pointerleave",
              "pointercancel",
              "gesturestart",
              "gesturechange",
              "gestureend",
              "focus",
              "blur",
              "change",
              "reset",
              "select",
              "submit",
              "focusin",
              "focusout",
              "load",
              "unload",
              "beforeunload",
              "resize",
              "move",
              "DOMContentLoaded",
              "readystatechange",
              "error",
              "abort",
              "scroll",
            ]);
          function l(e, t) {
            return (t && `${t}::${r++}`) || e.uidEvent || r++;
          }
          function c(e) {
            const t = l(e);
            return (e.uidEvent = t), (s[t] = s[t] || {}), s[t];
          }
          function d(e, t, n = null) {
            return Object.values(e).find(
              (e) => e.callable === t && e.delegationSelector === n
            );
          }
          function u(e, t, n) {
            const i = "string" == typeof t,
              s = i ? n : t || n;
            let r = m(e);
            return a.has(r) || (r = e), [i, s, r];
          }
          function p(e, n, i, s, r) {
            if ("string" != typeof n || !e) return;
            let [a, p, f] = u(n, i, s);
            if (n in o) {
              const e = (e) =>
                function (t) {
                  if (
                    !t.relatedTarget ||
                    (t.relatedTarget !== t.delegateTarget &&
                      !t.delegateTarget.contains(t.relatedTarget))
                  )
                    return e.call(this, t);
                };
              p = e(p);
            }
            const h = c(e),
              m = h[f] || (h[f] = {}),
              b = d(m, p, a ? i : null);
            if (b) return void (b.oneOff = b.oneOff && r);
            const w = l(p, n.replace(t, "")),
              y = a
                ? (function (e, t, n) {
                    return function i(s) {
                      const r = e.querySelectorAll(t);
                      for (
                        let { target: o } = s;
                        o && o !== this;
                        o = o.parentNode
                      )
                        for (const a of r)
                          if (a === o)
                            return (
                              v(s, { delegateTarget: o }),
                              i.oneOff && g.off(e, s.type, t, n),
                              n.apply(o, [s])
                            );
                    };
                  })(e, i, p)
                : (function (e, t) {
                    return function n(i) {
                      return (
                        v(i, { delegateTarget: e }),
                        n.oneOff && g.off(e, i.type, t),
                        t.apply(e, [i])
                      );
                    };
                  })(e, p);
            (y.delegationSelector = a ? i : null),
              (y.callable = p),
              (y.oneOff = r),
              (y.uidEvent = w),
              (m[w] = y),
              e.addEventListener(f, y, a);
          }
          function f(e, t, n, i, s) {
            const r = d(t[n], i, s);
            r &&
              (e.removeEventListener(n, r, Boolean(s)),
              delete t[n][r.uidEvent]);
          }
          function h(e, t, n, i) {
            const s = t[n] || {};
            for (const [r, o] of Object.entries(s))
              r.includes(i) && f(e, t, n, o.callable, o.delegationSelector);
          }
          function m(e) {
            return (e = e.replace(n, "")), o[e] || e;
          }
          const g = {
            on(e, t, n, i) {
              p(e, t, n, i, !1);
            },
            one(e, t, n, i) {
              p(e, t, n, i, !0);
            },
            off(e, t, n, s) {
              if ("string" != typeof t || !e) return;
              const [r, o, a] = u(t, n, s),
                l = a !== t,
                d = c(e),
                p = d[a] || {},
                m = t.startsWith(".");
              if (void 0 === o) {
                if (m) for (const n of Object.keys(d)) h(e, d, n, t.slice(1));
                for (const [n, s] of Object.entries(p)) {
                  const r = n.replace(i, "");
                  (l && !t.includes(r)) ||
                    f(e, d, a, s.callable, s.delegationSelector);
                }
              } else {
                if (!Object.keys(p).length) return;
                f(e, d, a, o, r ? n : null);
              }
            },
            trigger(t, n, i) {
              if ("string" != typeof n || !t) return null;
              const s = e.getjQuery();
              let r = null,
                o = !0,
                a = !0,
                l = !1;
              n !== m(n) &&
                s &&
                ((r = s.Event(n, i)),
                s(t).trigger(r),
                (o = !r.isPropagationStopped()),
                (a = !r.isImmediatePropagationStopped()),
                (l = r.isDefaultPrevented()));
              const c = v(new Event(n, { bubbles: o, cancelable: !0 }), i);
              return (
                l && c.preventDefault(),
                a && t.dispatchEvent(c),
                c.defaultPrevented && r && r.preventDefault(),
                c
              );
            },
          };
          function v(e, t = {}) {
            for (const [n, i] of Object.entries(t))
              try {
                e[n] = i;
              } catch (t) {
                Object.defineProperty(e, n, {
                  configurable: !0,
                  get() {
                    return i;
                  },
                });
              }
            return e;
          }
          return g;
        })(n(4072));
      },
      3175: function (e) {
        e.exports = (function () {
          "use strict";
          function e(e) {
            if ("true" === e) return !0;
            if ("false" === e) return !1;
            if (e === Number(e).toString()) return Number(e);
            if ("" === e || "null" === e) return null;
            if ("string" != typeof e) return e;
            try {
              return JSON.parse(decodeURIComponent(e));
            } catch (t) {
              return e;
            }
          }
          function t(e) {
            return e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
          }
          return {
            setDataAttribute(e, n, i) {
              e.setAttribute(`data-bs-${t(n)}`, i);
            },
            removeDataAttribute(e, n) {
              e.removeAttribute(`data-bs-${t(n)}`);
            },
            getDataAttributes(t) {
              if (!t) return {};
              const n = {},
                i = Object.keys(t.dataset).filter(
                  (e) => e.startsWith("bs") && !e.startsWith("bsConfig")
                );
              for (const s of i) {
                let i = s.replace(/^bs/, "");
                (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
                  (n[i] = e(t.dataset[s]));
              }
              return n;
            },
            getDataAttribute(n, i) {
              return e(n.getAttribute(`data-bs-${t(i)}`));
            },
          };
        })();
      },
      8737: function (e, t, n) {
        e.exports = (function (e) {
          "use strict";
          const t = (t) => {
              let n = t.getAttribute("data-bs-target");
              if (!n || "#" === n) {
                let i = t.getAttribute("href");
                if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
                i.includes("#") &&
                  !i.startsWith("#") &&
                  (i = `#${i.split("#")[1]}`),
                  (n = i && "#" !== i ? e.parseSelector(i.trim()) : null);
              }
              return n;
            },
            n = {
              find(e, t = document.documentElement) {
                return [].concat(
                  ...Element.prototype.querySelectorAll.call(t, e)
                );
              },
              findOne(e, t = document.documentElement) {
                return Element.prototype.querySelector.call(t, e);
              },
              children(e, t) {
                return [].concat(...e.children).filter((e) => e.matches(t));
              },
              parents(e, t) {
                const n = [];
                let i = e.parentNode.closest(t);
                for (; i; ) n.push(i), (i = i.parentNode.closest(t));
                return n;
              },
              prev(e, t) {
                let n = e.previousElementSibling;
                for (; n; ) {
                  if (n.matches(t)) return [n];
                  n = n.previousElementSibling;
                }
                return [];
              },
              next(e, t) {
                let n = e.nextElementSibling;
                for (; n; ) {
                  if (n.matches(t)) return [n];
                  n = n.nextElementSibling;
                }
                return [];
              },
              focusableChildren(t) {
                const n = [
                  "a",
                  "button",
                  "input",
                  "textarea",
                  "select",
                  "details",
                  "[tabindex]",
                  '[contenteditable="true"]',
                ]
                  .map((e) => `${e}:not([tabindex^="-"])`)
                  .join(",");
                return this.find(n, t).filter(
                  (t) => !e.isDisabled(t) && e.isVisible(t)
                );
              },
              getSelectorFromElement(e) {
                const i = t(e);
                return i && n.findOne(i) ? i : null;
              },
              getElementFromSelector(e) {
                const i = t(e);
                return i ? n.findOne(i) : null;
              },
              getMultipleElementsFromSelector(e) {
                const i = t(e);
                return i ? n.find(i) : [];
              },
            };
          return n;
        })(n(4072));
      },
      9872: function (e, t, n) {
        e.exports = (function (e, t, n, i, s, r) {
          "use strict";
          function o(e) {
            const t = Object.create(null, {
              [Symbol.toStringTag]: { value: "Module" },
            });
            if (e)
              for (const n in e)
                if ("default" !== n) {
                  const i = Object.getOwnPropertyDescriptor(e, n);
                  Object.defineProperty(
                    t,
                    n,
                    i.get ? i : { enumerable: !0, get: () => e[n] }
                  );
                }
            return (t.default = e), Object.freeze(t);
          }
          const a = o(e),
            l = "dropdown",
            c = ".bs.dropdown",
            d = ".data-api",
            u = "ArrowUp",
            p = "ArrowDown",
            f = `hide${c}`,
            h = `hidden${c}`,
            m = `show${c}`,
            g = `shown${c}`,
            v = `click${c}${d}`,
            b = `keydown${c}${d}`,
            w = `keyup${c}${d}`,
            y = "show",
            x = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
            C = `${x}.${y}`,
            E = ".dropdown-menu",
            T = r.isRTL() ? "top-end" : "top-start",
            S = r.isRTL() ? "top-start" : "top-end",
            _ = r.isRTL() ? "bottom-end" : "bottom-start",
            k = r.isRTL() ? "bottom-start" : "bottom-end",
            A = r.isRTL() ? "left-start" : "right-start",
            O = r.isRTL() ? "right-start" : "left-start",
            P = {
              autoClose: !0,
              boundary: "clippingParents",
              display: "dynamic",
              offset: [0, 2],
              popperConfig: null,
              reference: "toggle",
            },
            $ = {
              autoClose: "(boolean|string)",
              boundary: "(string|element)",
              display: "string",
              offset: "(array|string|function)",
              popperConfig: "(null|object|function)",
              reference: "(string|element|object)",
            };
          class M extends t {
            constructor(e, t) {
              super(e, t),
                (this._popper = null),
                (this._parent = this._element.parentNode),
                (this._menu =
                  s.next(this._element, E)[0] ||
                  s.prev(this._element, E)[0] ||
                  s.findOne(E, this._parent)),
                (this._inNavbar = this._detectNavbar());
            }
            static get Default() {
              return P;
            }
            static get DefaultType() {
              return $;
            }
            static get NAME() {
              return l;
            }
            toggle() {
              return this._isShown() ? this.hide() : this.show();
            }
            show() {
              if (r.isDisabled(this._element) || this._isShown()) return;
              const e = { relatedTarget: this._element };
              if (!n.trigger(this._element, m, e).defaultPrevented) {
                if (
                  (this._createPopper(),
                  "ontouchstart" in document.documentElement &&
                    !this._parent.closest(".navbar-nav"))
                )
                  for (const e of [].concat(...document.body.children))
                    n.on(e, "mouseover", r.noop);
                this._element.focus(),
                  this._element.setAttribute("aria-expanded", !0),
                  this._menu.classList.add(y),
                  this._element.classList.add(y),
                  n.trigger(this._element, g, e);
              }
            }
            hide() {
              if (r.isDisabled(this._element) || !this._isShown()) return;
              const e = { relatedTarget: this._element };
              this._completeHide(e);
            }
            dispose() {
              this._popper && this._popper.destroy(), super.dispose();
            }
            update() {
              (this._inNavbar = this._detectNavbar()),
                this._popper && this._popper.update();
            }
            _completeHide(e) {
              if (!n.trigger(this._element, f, e).defaultPrevented) {
                if ("ontouchstart" in document.documentElement)
                  for (const e of [].concat(...document.body.children))
                    n.off(e, "mouseover", r.noop);
                this._popper && this._popper.destroy(),
                  this._menu.classList.remove(y),
                  this._element.classList.remove(y),
                  this._element.setAttribute("aria-expanded", "false"),
                  i.removeDataAttribute(this._menu, "popper"),
                  n.trigger(this._element, h, e);
              }
            }
            _getConfig(e) {
              if (
                "object" == typeof (e = super._getConfig(e)).reference &&
                !r.isElement(e.reference) &&
                "function" != typeof e.reference.getBoundingClientRect
              )
                throw new TypeError(
                  `${l.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
                );
              return e;
            }
            _createPopper() {
              if (void 0 === a)
                throw new TypeError(
                  "Bootstrap's dropdowns require Popper (https://popper.js.org)"
                );
              let e = this._element;
              "parent" === this._config.reference
                ? (e = this._parent)
                : r.isElement(this._config.reference)
                ? (e = r.getElement(this._config.reference))
                : "object" == typeof this._config.reference &&
                  (e = this._config.reference);
              const t = this._getPopperConfig();
              this._popper = a.createPopper(e, this._menu, t);
            }
            _isShown() {
              return this._menu.classList.contains(y);
            }
            _getPlacement() {
              const e = this._parent;
              if (e.classList.contains("dropend")) return A;
              if (e.classList.contains("dropstart")) return O;
              if (e.classList.contains("dropup-center")) return "top";
              if (e.classList.contains("dropdown-center")) return "bottom";
              const t =
                "end" ===
                getComputedStyle(this._menu)
                  .getPropertyValue("--bs-position")
                  .trim();
              return e.classList.contains("dropup") ? (t ? S : T) : t ? k : _;
            }
            _detectNavbar() {
              return null !== this._element.closest(".navbar");
            }
            _getOffset() {
              const { offset: e } = this._config;
              return "string" == typeof e
                ? e.split(",").map((e) => Number.parseInt(e, 10))
                : "function" == typeof e
                ? (t) => e(t, this._element)
                : e;
            }
            _getPopperConfig() {
              const e = {
                placement: this._getPlacement(),
                modifiers: [
                  {
                    name: "preventOverflow",
                    options: { boundary: this._config.boundary },
                  },
                  { name: "offset", options: { offset: this._getOffset() } },
                ],
              };
              return (
                (this._inNavbar || "static" === this._config.display) &&
                  (i.setDataAttribute(this._menu, "popper", "static"),
                  (e.modifiers = [{ name: "applyStyles", enabled: !1 }])),
                { ...e, ...r.execute(this._config.popperConfig, [e]) }
              );
            }
            _selectMenuItem({ key: e, target: t }) {
              const n = s
                .find(
                  ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                  this._menu
                )
                .filter((e) => r.isVisible(e));
              n.length &&
                r.getNextActiveElement(n, t, e === p, !n.includes(t)).focus();
            }
            static jQueryInterface(e) {
              return this.each(function () {
                const t = M.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                  if (void 0 === t[e])
                    throw new TypeError(`No method named "${e}"`);
                  t[e]();
                }
              });
            }
            static clearMenus(e) {
              if (2 === e.button || ("keyup" === e.type && "Tab" !== e.key))
                return;
              const t = s.find(C);
              for (const n of t) {
                const t = M.getInstance(n);
                if (!t || !1 === t._config.autoClose) continue;
                const i = e.composedPath(),
                  s = i.includes(t._menu);
                if (
                  i.includes(t._element) ||
                  ("inside" === t._config.autoClose && !s) ||
                  ("outside" === t._config.autoClose && s)
                )
                  continue;
                if (
                  t._menu.contains(e.target) &&
                  (("keyup" === e.type && "Tab" === e.key) ||
                    /input|select|option|textarea|form/i.test(e.target.tagName))
                )
                  continue;
                const r = { relatedTarget: t._element };
                "click" === e.type && (r.clickEvent = e), t._completeHide(r);
              }
            }
            static dataApiKeydownHandler(e) {
              const t = /input|textarea/i.test(e.target.tagName),
                n = "Escape" === e.key,
                i = [u, p].includes(e.key);
              if (!i && !n) return;
              if (t && !n) return;
              e.preventDefault();
              const r = this.matches(x)
                  ? this
                  : s.prev(this, x)[0] ||
                    s.next(this, x)[0] ||
                    s.findOne(x, e.delegateTarget.parentNode),
                o = M.getOrCreateInstance(r);
              if (i)
                return e.stopPropagation(), o.show(), void o._selectMenuItem(e);
              o._isShown() && (e.stopPropagation(), o.hide(), r.focus());
            }
          }
          return (
            n.on(document, b, x, M.dataApiKeydownHandler),
            n.on(document, b, E, M.dataApiKeydownHandler),
            n.on(document, v, M.clearMenus),
            n.on(document, w, M.clearMenus),
            n.on(document, v, x, function (e) {
              e.preventDefault(), M.getOrCreateInstance(this).toggle();
            }),
            r.defineJQueryPlugin(M),
            M
          );
        })(n(9704), n(5695), n(9286), n(3175), n(8737), n(4072));
      },
      7424: function (e, t, n) {
        e.exports = (function (e, t, n, i, s, r, o, a) {
          "use strict";
          const l = ".bs.modal",
            c = `hide${l}`,
            d = `hidePrevented${l}`,
            u = `hidden${l}`,
            p = `show${l}`,
            f = `shown${l}`,
            h = `resize${l}`,
            m = `click.dismiss${l}`,
            g = `mousedown.dismiss${l}`,
            v = `keydown.dismiss${l}`,
            b = `click${l}.data-api`,
            w = "modal-open",
            y = "show",
            x = "modal-static",
            C = { backdrop: !0, focus: !0, keyboard: !0 },
            E = {
              backdrop: "(boolean|string)",
              focus: "boolean",
              keyboard: "boolean",
            };
          class T extends e {
            constructor(e, t) {
              super(e, t),
                (this._dialog = n.findOne(".modal-dialog", this._element)),
                (this._backdrop = this._initializeBackDrop()),
                (this._focustrap = this._initializeFocusTrap()),
                (this._isShown = !1),
                (this._isTransitioning = !1),
                (this._scrollBar = new a()),
                this._addEventListeners();
            }
            static get Default() {
              return C;
            }
            static get DefaultType() {
              return E;
            }
            static get NAME() {
              return "modal";
            }
            toggle(e) {
              return this._isShown ? this.hide() : this.show(e);
            }
            show(e) {
              this._isShown ||
                this._isTransitioning ||
                t.trigger(this._element, p, { relatedTarget: e })
                  .defaultPrevented ||
                ((this._isShown = !0),
                (this._isTransitioning = !0),
                this._scrollBar.hide(),
                document.body.classList.add(w),
                this._adjustDialog(),
                this._backdrop.show(() => this._showElement(e)));
            }
            hide() {
              this._isShown &&
                !this._isTransitioning &&
                (t.trigger(this._element, c).defaultPrevented ||
                  ((this._isShown = !1),
                  (this._isTransitioning = !0),
                  this._focustrap.deactivate(),
                  this._element.classList.remove(y),
                  this._queueCallback(
                    () => this._hideModal(),
                    this._element,
                    this._isAnimated()
                  )));
            }
            dispose() {
              t.off(window, l),
                t.off(this._dialog, l),
                this._backdrop.dispose(),
                this._focustrap.deactivate(),
                super.dispose();
            }
            handleUpdate() {
              this._adjustDialog();
            }
            _initializeBackDrop() {
              return new i({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated(),
              });
            }
            _initializeFocusTrap() {
              return new r({ trapElement: this._element });
            }
            _showElement(e) {
              document.body.contains(this._element) ||
                document.body.append(this._element),
                (this._element.style.display = "block"),
                this._element.removeAttribute("aria-hidden"),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                (this._element.scrollTop = 0);
              const i = n.findOne(".modal-body", this._dialog);
              i && (i.scrollTop = 0),
                o.reflow(this._element),
                this._element.classList.add(y);
              this._queueCallback(
                () => {
                  this._config.focus && this._focustrap.activate(),
                    (this._isTransitioning = !1),
                    t.trigger(this._element, f, { relatedTarget: e });
                },
                this._dialog,
                this._isAnimated()
              );
            }
            _addEventListeners() {
              t.on(this._element, v, (e) => {
                "Escape" === e.key &&
                  (this._config.keyboard
                    ? this.hide()
                    : this._triggerBackdropTransition());
              }),
                t.on(window, h, () => {
                  this._isShown &&
                    !this._isTransitioning &&
                    this._adjustDialog();
                }),
                t.on(this._element, g, (e) => {
                  t.one(this._element, m, (t) => {
                    this._element === e.target &&
                      this._element === t.target &&
                      ("static" !== this._config.backdrop
                        ? this._config.backdrop && this.hide()
                        : this._triggerBackdropTransition());
                  });
                });
            }
            _hideModal() {
              (this._element.style.display = "none"),
                this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                (this._isTransitioning = !1),
                this._backdrop.hide(() => {
                  document.body.classList.remove(w),
                    this._resetAdjustments(),
                    this._scrollBar.reset(),
                    t.trigger(this._element, u);
                });
            }
            _isAnimated() {
              return this._element.classList.contains("fade");
            }
            _triggerBackdropTransition() {
              if (t.trigger(this._element, d).defaultPrevented) return;
              const e =
                  this._element.scrollHeight >
                  document.documentElement.clientHeight,
                n = this._element.style.overflowY;
              "hidden" === n ||
                this._element.classList.contains(x) ||
                (e || (this._element.style.overflowY = "hidden"),
                this._element.classList.add(x),
                this._queueCallback(() => {
                  this._element.classList.remove(x),
                    this._queueCallback(() => {
                      this._element.style.overflowY = n;
                    }, this._dialog);
                }, this._dialog),
                this._element.focus());
            }
            _adjustDialog() {
              const e =
                  this._element.scrollHeight >
                  document.documentElement.clientHeight,
                t = this._scrollBar.getWidth(),
                n = t > 0;
              if (n && !e) {
                const e = o.isRTL() ? "paddingLeft" : "paddingRight";
                this._element.style[e] = `${t}px`;
              }
              if (!n && e) {
                const e = o.isRTL() ? "paddingRight" : "paddingLeft";
                this._element.style[e] = `${t}px`;
              }
            }
            _resetAdjustments() {
              (this._element.style.paddingLeft = ""),
                (this._element.style.paddingRight = "");
            }
            static jQueryInterface(e, t) {
              return this.each(function () {
                const n = T.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                  if (void 0 === n[e])
                    throw new TypeError(`No method named "${e}"`);
                  n[e](t);
                }
              });
            }
          }
          return (
            t.on(document, b, '[data-bs-toggle="modal"]', function (e) {
              const i = n.getElementFromSelector(this);
              ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
                t.one(i, p, (e) => {
                  e.defaultPrevented ||
                    t.one(i, u, () => {
                      o.isVisible(this) && this.focus();
                    });
                });
              const s = n.findOne(".modal.show");
              s && T.getInstance(s).hide(),
                T.getOrCreateInstance(i).toggle(this);
            }),
            s.enableDismissTrigger(T),
            o.defineJQueryPlugin(T),
            T
          );
        })(
          n(5695),
          n(9286),
          n(8737),
          n(1358),
          n(1127),
          n(744),
          n(4072),
          n(1810)
        );
      },
      8471: function (e, t, n) {
        e.exports = (function (e, t, n, i) {
          "use strict";
          const s = ".bs.tab",
            r = `hide${s}`,
            o = `hidden${s}`,
            a = `show${s}`,
            l = `shown${s}`,
            c = `click${s}`,
            d = `keydown${s}`,
            u = `load${s}`,
            p = "ArrowLeft",
            f = "ArrowRight",
            h = "ArrowUp",
            m = "ArrowDown",
            g = "Home",
            v = "End",
            b = "active",
            w = "fade",
            y = "show",
            x = ".dropdown-toggle",
            C = `:not(${x})`,
            E =
              '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
            T = `.nav-link${C}, .list-group-item${C}, [role="tab"]${C}, ${E}`,
            S = `.${b}[data-bs-toggle="tab"], .${b}[data-bs-toggle="pill"], .${b}[data-bs-toggle="list"]`;
          class _ extends e {
            constructor(e) {
              super(e),
                (this._parent = this._element.closest(
                  '.list-group, .nav, [role="tablist"]'
                )),
                this._parent &&
                  (this._setInitialAttributes(
                    this._parent,
                    this._getChildren()
                  ),
                  t.on(this._element, d, (e) => this._keydown(e)));
            }
            static get NAME() {
              return "tab";
            }
            show() {
              const e = this._element;
              if (this._elemIsActive(e)) return;
              const n = this._getActiveElem(),
                i = n ? t.trigger(n, r, { relatedTarget: e }) : null;
              t.trigger(e, a, { relatedTarget: n }).defaultPrevented ||
                (i && i.defaultPrevented) ||
                (this._deactivate(n, e), this._activate(e, n));
            }
            _activate(e, i) {
              if (!e) return;
              e.classList.add(b), this._activate(n.getElementFromSelector(e));
              this._queueCallback(
                () => {
                  "tab" === e.getAttribute("role")
                    ? (e.removeAttribute("tabindex"),
                      e.setAttribute("aria-selected", !0),
                      this._toggleDropDown(e, !0),
                      t.trigger(e, l, { relatedTarget: i }))
                    : e.classList.add(y);
                },
                e,
                e.classList.contains(w)
              );
            }
            _deactivate(e, i) {
              if (!e) return;
              e.classList.remove(b),
                e.blur(),
                this._deactivate(n.getElementFromSelector(e));
              this._queueCallback(
                () => {
                  "tab" === e.getAttribute("role")
                    ? (e.setAttribute("aria-selected", !1),
                      e.setAttribute("tabindex", "-1"),
                      this._toggleDropDown(e, !1),
                      t.trigger(e, o, { relatedTarget: i }))
                    : e.classList.remove(y);
                },
                e,
                e.classList.contains(w)
              );
            }
            _keydown(e) {
              if (![p, f, h, m, g, v].includes(e.key)) return;
              e.stopPropagation(), e.preventDefault();
              const t = this._getChildren().filter((e) => !i.isDisabled(e));
              let n;
              if ([g, v].includes(e.key)) n = t[e.key === g ? 0 : t.length - 1];
              else {
                const s = [f, m].includes(e.key);
                n = i.getNextActiveElement(t, e.target, s, !0);
              }
              n &&
                (n.focus({ preventScroll: !0 }),
                _.getOrCreateInstance(n).show());
            }
            _getChildren() {
              return n.find(T, this._parent);
            }
            _getActiveElem() {
              return (
                this._getChildren().find((e) => this._elemIsActive(e)) || null
              );
            }
            _setInitialAttributes(e, t) {
              this._setAttributeIfNotExists(e, "role", "tablist");
              for (const e of t) this._setInitialAttributesOnChild(e);
            }
            _setInitialAttributesOnChild(e) {
              e = this._getInnerElement(e);
              const t = this._elemIsActive(e),
                n = this._getOuterElement(e);
              e.setAttribute("aria-selected", t),
                n !== e &&
                  this._setAttributeIfNotExists(n, "role", "presentation"),
                t || e.setAttribute("tabindex", "-1"),
                this._setAttributeIfNotExists(e, "role", "tab"),
                this._setInitialAttributesOnTargetPanel(e);
            }
            _setInitialAttributesOnTargetPanel(e) {
              const t = n.getElementFromSelector(e);
              t &&
                (this._setAttributeIfNotExists(t, "role", "tabpanel"),
                e.id &&
                  this._setAttributeIfNotExists(
                    t,
                    "aria-labelledby",
                    `${e.id}`
                  ));
            }
            _toggleDropDown(e, t) {
              const i = this._getOuterElement(e);
              if (!i.classList.contains("dropdown")) return;
              const s = (e, s) => {
                const r = n.findOne(e, i);
                r && r.classList.toggle(s, t);
              };
              s(x, b),
                s(".dropdown-menu", y),
                i.setAttribute("aria-expanded", t);
            }
            _setAttributeIfNotExists(e, t, n) {
              e.hasAttribute(t) || e.setAttribute(t, n);
            }
            _elemIsActive(e) {
              return e.classList.contains(b);
            }
            _getInnerElement(e) {
              return e.matches(T) ? e : n.findOne(T, e);
            }
            _getOuterElement(e) {
              return e.closest(".nav-item, .list-group-item") || e;
            }
            static jQueryInterface(e) {
              return this.each(function () {
                const t = _.getOrCreateInstance(this);
                if ("string" == typeof e) {
                  if (
                    void 0 === t[e] ||
                    e.startsWith("_") ||
                    "constructor" === e
                  )
                    throw new TypeError(`No method named "${e}"`);
                  t[e]();
                }
              });
            }
          }
          return (
            t.on(document, c, E, function (e) {
              ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
                i.isDisabled(this) || _.getOrCreateInstance(this).show();
            }),
            t.on(window, u, () => {
              for (const e of n.find(S)) _.getOrCreateInstance(e);
            }),
            i.defineJQueryPlugin(_),
            _
          );
        })(n(5695), n(9286), n(8737), n(4072));
      },
      1358: function (e, t, n) {
        e.exports = (function (e, t, n) {
          "use strict";
          const i = "backdrop",
            s = "show",
            r = `mousedown.bs.${i}`,
            o = {
              className: "modal-backdrop",
              clickCallback: null,
              isAnimated: !1,
              isVisible: !0,
              rootElement: "body",
            },
            a = {
              className: "string",
              clickCallback: "(function|null)",
              isAnimated: "boolean",
              isVisible: "boolean",
              rootElement: "(element|string)",
            };
          return class extends t {
            constructor(e) {
              super(),
                (this._config = this._getConfig(e)),
                (this._isAppended = !1),
                (this._element = null);
            }
            static get Default() {
              return o;
            }
            static get DefaultType() {
              return a;
            }
            static get NAME() {
              return i;
            }
            show(e) {
              if (!this._config.isVisible) return void n.execute(e);
              this._append();
              const t = this._getElement();
              this._config.isAnimated && n.reflow(t),
                t.classList.add(s),
                this._emulateAnimation(() => {
                  n.execute(e);
                });
            }
            hide(e) {
              this._config.isVisible
                ? (this._getElement().classList.remove(s),
                  this._emulateAnimation(() => {
                    this.dispose(), n.execute(e);
                  }))
                : n.execute(e);
            }
            dispose() {
              this._isAppended &&
                (e.off(this._element, r),
                this._element.remove(),
                (this._isAppended = !1));
            }
            _getElement() {
              if (!this._element) {
                const e = document.createElement("div");
                (e.className = this._config.className),
                  this._config.isAnimated && e.classList.add("fade"),
                  (this._element = e);
              }
              return this._element;
            }
            _configAfterMerge(e) {
              return (e.rootElement = n.getElement(e.rootElement)), e;
            }
            _append() {
              if (this._isAppended) return;
              const t = this._getElement();
              this._config.rootElement.append(t),
                e.on(t, r, () => {
                  n.execute(this._config.clickCallback);
                }),
                (this._isAppended = !0);
            }
            _emulateAnimation(e) {
              n.executeAfterTransition(
                e,
                this._getElement(),
                this._config.isAnimated
              );
            }
          };
        })(n(9286), n(4705), n(4072));
      },
      1127: function (e, t, n) {
        !(function (e, t, n, i) {
          "use strict";
          (e.enableDismissTrigger = (e, s = "hide") => {
            const r = `click.dismiss${e.EVENT_KEY}`,
              o = e.NAME;
            t.on(document, r, `[data-bs-dismiss="${o}"]`, function (t) {
              if (
                (["A", "AREA"].includes(this.tagName) && t.preventDefault(),
                i.isDisabled(this))
              )
                return;
              const r = n.getElementFromSelector(this) || this.closest(`.${o}`);
              e.getOrCreateInstance(r)[s]();
            });
          }),
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        })(t, n(9286), n(8737), n(4072));
      },
      4705: function (e, t, n) {
        e.exports = (function (e, t) {
          "use strict";
          return class {
            static get Default() {
              return {};
            }
            static get DefaultType() {
              return {};
            }
            static get NAME() {
              throw new Error(
                'You have to implement the static method "NAME", for each component!'
              );
            }
            _getConfig(e) {
              return (
                (e = this._mergeConfigObj(e)),
                (e = this._configAfterMerge(e)),
                this._typeCheckConfig(e),
                e
              );
            }
            _configAfterMerge(e) {
              return e;
            }
            _mergeConfigObj(n, i) {
              const s = t.isElement(i) ? e.getDataAttribute(i, "config") : {};
              return {
                ...this.constructor.Default,
                ...("object" == typeof s ? s : {}),
                ...(t.isElement(i) ? e.getDataAttributes(i) : {}),
                ...("object" == typeof n ? n : {}),
              };
            }
            _typeCheckConfig(e, n = this.constructor.DefaultType) {
              for (const [i, s] of Object.entries(n)) {
                const n = e[i],
                  r = t.isElement(n) ? "element" : t.toType(n);
                if (!new RegExp(s).test(r))
                  throw new TypeError(
                    `${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${r}" but expected type "${s}".`
                  );
              }
            }
          };
        })(n(3175), n(4072));
      },
      744: function (e, t, n) {
        e.exports = (function (e, t, n) {
          "use strict";
          const i = ".bs.focustrap",
            s = `focusin${i}`,
            r = `keydown.tab${i}`,
            o = "backward",
            a = { autofocus: !0, trapElement: null },
            l = { autofocus: "boolean", trapElement: "element" };
          return class extends n {
            constructor(e) {
              super(),
                (this._config = this._getConfig(e)),
                (this._isActive = !1),
                (this._lastTabNavDirection = null);
            }
            static get Default() {
              return a;
            }
            static get DefaultType() {
              return l;
            }
            static get NAME() {
              return "focustrap";
            }
            activate() {
              this._isActive ||
                (this._config.autofocus && this._config.trapElement.focus(),
                e.off(document, i),
                e.on(document, s, (e) => this._handleFocusin(e)),
                e.on(document, r, (e) => this._handleKeydown(e)),
                (this._isActive = !0));
            }
            deactivate() {
              this._isActive && ((this._isActive = !1), e.off(document, i));
            }
            _handleFocusin(e) {
              const { trapElement: n } = this._config;
              if (
                e.target === document ||
                e.target === n ||
                n.contains(e.target)
              )
                return;
              const i = t.focusableChildren(n);
              0 === i.length
                ? n.focus()
                : this._lastTabNavDirection === o
                ? i[i.length - 1].focus()
                : i[0].focus();
            }
            _handleKeydown(e) {
              "Tab" === e.key &&
                (this._lastTabNavDirection = e.shiftKey ? o : "forward");
            }
          };
        })(n(9286), n(8737), n(4705));
      },
      4072: function (e, t) {
        !(function (e) {
          "use strict";
          const t = "transitionend",
            n = (e) => (
              e &&
                window.CSS &&
                window.CSS.escape &&
                (e = e.replace(/#([^\s"#']+)/g, (e, t) => `#${CSS.escape(t)}`)),
              e
            ),
            i = (e) => {
              if (!e) return 0;
              let { transitionDuration: t, transitionDelay: n } =
                window.getComputedStyle(e);
              const i = Number.parseFloat(t),
                s = Number.parseFloat(n);
              return i || s
                ? ((t = t.split(",")[0]),
                  (n = n.split(",")[0]),
                  1e3 * (Number.parseFloat(t) + Number.parseFloat(n)))
                : 0;
            },
            s = (e) => {
              e.dispatchEvent(new Event(t));
            },
            r = (e) =>
              !(!e || "object" != typeof e) &&
              (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
            o = (e) => {
              if (!document.documentElement.attachShadow) return null;
              if ("function" == typeof e.getRootNode) {
                const t = e.getRootNode();
                return t instanceof ShadowRoot ? t : null;
              }
              return e instanceof ShadowRoot
                ? e
                : e.parentNode
                ? o(e.parentNode)
                : null;
            },
            a = () =>
              window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
                ? window.jQuery
                : null,
            l = [],
            c = (e) => {
              "loading" === document.readyState
                ? (l.length ||
                    document.addEventListener("DOMContentLoaded", () => {
                      for (const e of l) e();
                    }),
                  l.push(e))
                : e();
            },
            d = (e, t = [], n = e) => ("function" == typeof e ? e(...t) : n);
          (e.defineJQueryPlugin = (e) => {
            c(() => {
              const t = a();
              if (t) {
                const n = e.NAME,
                  i = t.fn[n];
                (t.fn[n] = e.jQueryInterface),
                  (t.fn[n].Constructor = e),
                  (t.fn[n].noConflict = () => (
                    (t.fn[n] = i), e.jQueryInterface
                  ));
              }
            });
          }),
            (e.execute = d),
            (e.executeAfterTransition = (e, n, r = !0) => {
              if (!r) return void d(e);
              const o = i(n) + 5;
              let a = !1;
              const l = ({ target: i }) => {
                i === n && ((a = !0), n.removeEventListener(t, l), d(e));
              };
              n.addEventListener(t, l),
                setTimeout(() => {
                  a || s(n);
                }, o);
            }),
            (e.findShadowRoot = o),
            (e.getElement = (e) =>
              r(e)
                ? e.jquery
                  ? e[0]
                  : e
                : "string" == typeof e && e.length > 0
                ? document.querySelector(n(e))
                : null),
            (e.getNextActiveElement = (e, t, n, i) => {
              const s = e.length;
              let r = e.indexOf(t);
              return -1 === r
                ? !n && i
                  ? e[s - 1]
                  : e[0]
                : ((r += n ? 1 : -1),
                  i && (r = (r + s) % s),
                  e[Math.max(0, Math.min(r, s - 1))]);
            }),
            (e.getTransitionDurationFromElement = i),
            (e.getUID = (e) => {
              do {
                e += Math.floor(1e6 * Math.random());
              } while (document.getElementById(e));
              return e;
            }),
            (e.getjQuery = a),
            (e.isDisabled = (e) =>
              !e ||
              e.nodeType !== Node.ELEMENT_NODE ||
              !!e.classList.contains("disabled") ||
              (void 0 !== e.disabled
                ? e.disabled
                : e.hasAttribute("disabled") &&
                  "false" !== e.getAttribute("disabled"))),
            (e.isElement = r),
            (e.isRTL = () => "rtl" === document.documentElement.dir),
            (e.isVisible = (e) => {
              if (!r(e) || 0 === e.getClientRects().length) return !1;
              const t =
                  "visible" ===
                  getComputedStyle(e).getPropertyValue("visibility"),
                n = e.closest("details:not([open])");
              if (!n) return t;
              if (n !== e) {
                const t = e.closest("summary");
                if (t && t.parentNode !== n) return !1;
                if (null === t) return !1;
              }
              return t;
            }),
            (e.noop = () => {}),
            (e.onDOMContentLoaded = c),
            (e.parseSelector = n),
            (e.reflow = (e) => {
              e.offsetHeight;
            }),
            (e.toType = (e) =>
              null == e
                ? `${e}`
                : Object.prototype.toString
                    .call(e)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase()),
            (e.triggerTransitionEnd = s),
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        })(t);
      },
      1810: function (e, t, n) {
        e.exports = (function (e, t, n) {
          "use strict";
          const i = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            s = ".sticky-top",
            r = "padding-right",
            o = "margin-right";
          return class {
            constructor() {
              this._element = document.body;
            }
            getWidth() {
              const e = document.documentElement.clientWidth;
              return Math.abs(window.innerWidth - e);
            }
            hide() {
              const e = this.getWidth();
              this._disableOverFlow(),
                this._setElementAttributes(this._element, r, (t) => t + e),
                this._setElementAttributes(i, r, (t) => t + e),
                this._setElementAttributes(s, o, (t) => t - e);
            }
            reset() {
              this._resetElementAttributes(this._element, "overflow"),
                this._resetElementAttributes(this._element, r),
                this._resetElementAttributes(i, r),
                this._resetElementAttributes(s, o);
            }
            isOverflowing() {
              return this.getWidth() > 0;
            }
            _disableOverFlow() {
              this._saveInitialAttribute(this._element, "overflow"),
                (this._element.style.overflow = "hidden");
            }
            _setElementAttributes(e, t, n) {
              const i = this.getWidth();
              this._applyManipulationCallback(e, (e) => {
                if (
                  e !== this._element &&
                  window.innerWidth > e.clientWidth + i
                )
                  return;
                this._saveInitialAttribute(e, t);
                const s = window.getComputedStyle(e).getPropertyValue(t);
                e.style.setProperty(t, `${n(Number.parseFloat(s))}px`);
              });
            }
            _saveInitialAttribute(t, n) {
              const i = t.style.getPropertyValue(n);
              i && e.setDataAttribute(t, n, i);
            }
            _resetElementAttributes(t, n) {
              this._applyManipulationCallback(t, (t) => {
                const i = e.getDataAttribute(t, n);
                null !== i
                  ? (e.removeDataAttribute(t, n), t.style.setProperty(n, i))
                  : t.style.removeProperty(n);
              });
            }
            _applyManipulationCallback(e, i) {
              if (n.isElement(e)) i(e);
              else for (const n of t.find(e, this._element)) i(n);
            }
          };
        })(n(3175), n(8737), n(4072));
      },
      7637: function () {
        !(function () {
          if (window.matchMedia && window.matchMedia("all").addListener)
            return !1;
          var e = window.matchMedia,
            t = e("only all").matches,
            n = !1,
            i = 0,
            s = [],
            r = function (t) {
              clearTimeout(i),
                (i = setTimeout(function () {
                  for (var t = 0, n = s.length; t < n; t++) {
                    var i = s[t].mql,
                      r = s[t].listeners || [],
                      o = e(i.media).matches;
                    if (o !== i.matches) {
                      i.matches = o;
                      for (var a = 0, l = r.length; a < l; a++)
                        r[a].call(window, i);
                    }
                  }
                }, 30));
            };
          window.matchMedia = function (i) {
            var o = e(i),
              a = [],
              l = 0;
            return (
              (o.addListener = function (e) {
                t &&
                  (n || ((n = !0), window.addEventListener("resize", r, !0)),
                  0 === l && (l = s.push({ mql: o, listeners: a })),
                  a.push(e));
              }),
              (o.removeListener = function (e) {
                for (var t = 0, n = a.length; t < n; t++)
                  a[t] === e && a.splice(t, 1);
              }),
              o
            );
          };
        })();
      },
      3733: function () {
        window.matchMedia ||
          (window.matchMedia = (function () {
            "use strict";
            var e = window.styleMedia || window.media;
            if (!e) {
              var t,
                n = document.createElement("style"),
                i = document.getElementsByTagName("script")[0];
              (n.type = "text/css"),
                (n.id = "matchmediajs-test"),
                i
                  ? i.parentNode.insertBefore(n, i)
                  : document.head.appendChild(n),
                (t =
                  ("getComputedStyle" in window &&
                    window.getComputedStyle(n, null)) ||
                  n.currentStyle),
                (e = {
                  matchMedium: function (e) {
                    var i =
                      "@media " + e + "{ #matchmediajs-test { width: 1px; } }";
                    return (
                      n.styleSheet
                        ? (n.styleSheet.cssText = i)
                        : (n.textContent = i),
                      "1px" === t.width
                    );
                  },
                });
            }
            return function (t) {
              return { matches: e.matchMedium(t || "all"), media: t || "all" };
            };
          })());
      },
    },
    t = {};
  function n(i) {
    var s = t[i];
    if (void 0 !== s) return s.exports;
    var r = (t[i] = { exports: {} });
    return e[i].call(r.exports, r, r.exports, n), r.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (n.d = function (e, t) {
      for (var i in t)
        n.o(t, i) &&
          !n.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (function () {
      "use strict";
      n(5511), n(3863), n(9872), n(7424), n(8471);
      n(3733), n(7637);
      function e(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function t(n = {}, i = {}) {
        Object.keys(i).forEach((s) => {
          void 0 === n[s]
            ? (n[s] = i[s])
            : e(i[s]) &&
              e(n[s]) &&
              Object.keys(i[s]).length > 0 &&
              t(n[s], i[s]);
        });
      }
      const i = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector() {
          return null;
        },
        querySelectorAll() {
          return [];
        },
        getElementById() {
          return null;
        },
        createEvent() {
          return { initEvent() {} };
        },
        createElement() {
          return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
              return [];
            },
          };
        },
        createElementNS() {
          return {};
        },
        importNode() {
          return null;
        },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function s() {
        const e = "undefined" != typeof document ? document : {};
        return t(e, i), e;
      }
      const r = {
        document: i,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle() {
          return {
            getPropertyValue() {
              return "";
            },
          };
        },
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia() {
          return {};
        },
        requestAnimationFrame(e) {
          return "undefined" == typeof setTimeout
            ? (e(), null)
            : setTimeout(e, 0);
        },
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e);
        },
      };
      function o() {
        const e = "undefined" != typeof window ? window : {};
        return t(e, r), e;
      }
      class a extends Array {
        constructor(e) {
          "number" == typeof e
            ? super(e)
            : (super(...(e || [])),
              (function (e) {
                const t = e.__proto__;
                Object.defineProperty(e, "__proto__", {
                  get() {
                    return t;
                  },
                  set(e) {
                    t.__proto__ = e;
                  },
                });
              })(this));
        }
      }
      function l(e = []) {
        const t = [];
        return (
          e.forEach((e) => {
            Array.isArray(e) ? t.push(...l(e)) : t.push(e);
          }),
          t
        );
      }
      function c(e, t) {
        return Array.prototype.filter.call(e, t);
      }
      function d(e, t) {
        const n = o(),
          i = s();
        let r = [];
        if (!t && e instanceof a) return e;
        if (!e) return new a(r);
        if ("string" == typeof e) {
          const n = e.trim();
          if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
            let e = "div";
            0 === n.indexOf("<li") && (e = "ul"),
              0 === n.indexOf("<tr") && (e = "tbody"),
              (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) || (e = "tr"),
              0 === n.indexOf("<tbody") && (e = "table"),
              0 === n.indexOf("<option") && (e = "select");
            const t = i.createElement(e);
            t.innerHTML = n;
            for (let e = 0; e < t.childNodes.length; e += 1)
              r.push(t.childNodes[e]);
          } else
            r = (function (e, t) {
              if ("string" != typeof e) return [e];
              const n = [],
                i = t.querySelectorAll(e);
              for (let e = 0; e < i.length; e += 1) n.push(i[e]);
              return n;
            })(e.trim(), t || i);
        } else if (e.nodeType || e === n || e === i) r.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof a) return e;
          r = e;
        }
        return new a(
          (function (e) {
            const t = [];
            for (let n = 0; n < e.length; n += 1)
              -1 === t.indexOf(e[n]) && t.push(e[n]);
            return t;
          })(r)
        );
      }
      d.fn = a.prototype;
      const u = "resize scroll".split(" ");
      function p(e) {
        return function (...t) {
          if (void 0 === t[0]) {
            for (let t = 0; t < this.length; t += 1)
              u.indexOf(e) < 0 &&
                (e in this[t] ? this[t][e]() : d(this[t]).trigger(e));
            return this;
          }
          return this.on(e, ...t);
        };
      }
      p("click"),
        p("blur"),
        p("focus"),
        p("focusin"),
        p("focusout"),
        p("keyup"),
        p("keydown"),
        p("keypress"),
        p("submit"),
        p("change"),
        p("mousedown"),
        p("mousemove"),
        p("mouseup"),
        p("mouseenter"),
        p("mouseleave"),
        p("mouseout"),
        p("mouseover"),
        p("touchstart"),
        p("touchend"),
        p("touchmove"),
        p("resize"),
        p("scroll");
      const f = {
        addClass: function (...e) {
          const t = l(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.add(...t);
            }),
            this
          );
        },
        removeClass: function (...e) {
          const t = l(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.remove(...t);
            }),
            this
          );
        },
        hasClass: function (...e) {
          const t = l(e.map((e) => e.split(" ")));
          return (
            c(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
              .length > 0
          );
        },
        toggleClass: function (...e) {
          const t = l(e.map((e) => e.split(" ")));
          this.forEach((e) => {
            t.forEach((t) => {
              e.classList.toggle(t);
            });
          });
        },
        attr: function (e, t) {
          if (1 === arguments.length && "string" == typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (let n = 0; n < this.length; n += 1)
            if (2 === arguments.length) this[n].setAttribute(e, t);
            else
              for (const t in e)
                (this[n][t] = e[t]), this[n].setAttribute(t, e[t]);
          return this;
        },
        removeAttr: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        transform: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
          return this;
        },
        transition: function (e) {
          for (let t = 0; t < this.length; t += 1)
            this[t].style.transitionDuration =
              "string" != typeof e ? `${e}ms` : e;
          return this;
        },
        on: function (...e) {
          let [t, n, i, s] = e;
          function r(e) {
            const t = e.target;
            if (!t) return;
            const s = e.target.dom7EventData || [];
            if ((s.indexOf(e) < 0 && s.unshift(e), d(t).is(n))) i.apply(t, s);
            else {
              const e = d(t).parents();
              for (let t = 0; t < e.length; t += 1)
                d(e[t]).is(n) && i.apply(e[t], s);
            }
          }
          function o(e) {
            const t = (e && e.target && e.target.dom7EventData) || [];
            t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
          }
          "function" == typeof e[1] && (([t, i, s] = e), (n = void 0)),
            s || (s = !1);
          const a = t.split(" ");
          let l;
          for (let e = 0; e < this.length; e += 1) {
            const t = this[e];
            if (n)
              for (l = 0; l < a.length; l += 1) {
                const e = a[l];
                t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                  t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                  t.dom7LiveListeners[e].push({
                    listener: i,
                    proxyListener: r,
                  }),
                  t.addEventListener(e, r, s);
              }
            else
              for (l = 0; l < a.length; l += 1) {
                const e = a[l];
                t.dom7Listeners || (t.dom7Listeners = {}),
                  t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                  t.dom7Listeners[e].push({ listener: i, proxyListener: o }),
                  t.addEventListener(e, o, s);
              }
          }
          return this;
        },
        off: function (...e) {
          let [t, n, i, s] = e;
          "function" == typeof e[1] && (([t, i, s] = e), (n = void 0)),
            s || (s = !1);
          const r = t.split(" ");
          for (let e = 0; e < r.length; e += 1) {
            const t = r[e];
            for (let e = 0; e < this.length; e += 1) {
              const r = this[e];
              let o;
              if (
                (!n && r.dom7Listeners
                  ? (o = r.dom7Listeners[t])
                  : n && r.dom7LiveListeners && (o = r.dom7LiveListeners[t]),
                o && o.length)
              )
                for (let e = o.length - 1; e >= 0; e -= 1) {
                  const n = o[e];
                  (i && n.listener === i) ||
                  (i &&
                    n.listener &&
                    n.listener.dom7proxy &&
                    n.listener.dom7proxy === i)
                    ? (r.removeEventListener(t, n.proxyListener, s),
                      o.splice(e, 1))
                    : i ||
                      (r.removeEventListener(t, n.proxyListener, s),
                      o.splice(e, 1));
                }
            }
          }
          return this;
        },
        trigger: function (...e) {
          const t = o(),
            n = e[0].split(" "),
            i = e[1];
          for (let s = 0; s < n.length; s += 1) {
            const r = n[s];
            for (let n = 0; n < this.length; n += 1) {
              const s = this[n];
              if (t.CustomEvent) {
                const n = new t.CustomEvent(r, {
                  detail: i,
                  bubbles: !0,
                  cancelable: !0,
                });
                (s.dom7EventData = e.filter((e, t) => t > 0)),
                  s.dispatchEvent(n),
                  (s.dom7EventData = []),
                  delete s.dom7EventData;
              }
            }
          }
          return this;
        },
        transitionEnd: function (e) {
          const t = this;
          return (
            e &&
              t.on("transitionend", function n(i) {
                i.target === this &&
                  (e.call(this, i), t.off("transitionend", n));
              }),
            this
          );
        },
        outerWidth: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(e.getPropertyValue("margin-right")) +
                parseFloat(e.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(e.getPropertyValue("margin-top")) +
                parseFloat(e.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        styles: function () {
          const e = o();
          return this[0] ? e.getComputedStyle(this[0], null) : {};
        },
        offset: function () {
          if (this.length > 0) {
            const e = o(),
              t = s(),
              n = this[0],
              i = n.getBoundingClientRect(),
              r = t.body,
              a = n.clientTop || r.clientTop || 0,
              l = n.clientLeft || r.clientLeft || 0,
              c = n === e ? e.scrollY : n.scrollTop,
              d = n === e ? e.scrollX : n.scrollLeft;
            return { top: i.top + c - a, left: i.left + d - l };
          }
          return null;
        },
        css: function (e, t) {
          const n = o();
          let i;
          if (1 === arguments.length) {
            if ("string" != typeof e) {
              for (i = 0; i < this.length; i += 1)
                for (const t in e) this[i].style[t] = e[t];
              return this;
            }
            if (this[0])
              return n.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && "string" == typeof e) {
            for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
            return this;
          }
          return this;
        },
        each: function (e) {
          return e
            ? (this.forEach((t, n) => {
                e.apply(t, [t, n]);
              }),
              this)
            : this;
        },
        html: function (e) {
          if (void 0 === e) return this[0] ? this[0].innerHTML : null;
          for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function (e) {
          if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
          for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function (e) {
          const t = o(),
            n = s(),
            i = this[0];
          let r, l;
          if (!i || void 0 === e) return !1;
          if ("string" == typeof e) {
            if (i.matches) return i.matches(e);
            if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
            if (i.msMatchesSelector) return i.msMatchesSelector(e);
            for (r = d(e), l = 0; l < r.length; l += 1)
              if (r[l] === i) return !0;
            return !1;
          }
          if (e === n) return i === n;
          if (e === t) return i === t;
          if (e.nodeType || e instanceof a) {
            for (r = e.nodeType ? [e] : e, l = 0; l < r.length; l += 1)
              if (r[l] === i) return !0;
            return !1;
          }
          return !1;
        },
        index: function () {
          let e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
              1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function (e) {
          if (void 0 === e) return this;
          const t = this.length;
          if (e > t - 1) return d([]);
          if (e < 0) {
            const n = t + e;
            return d(n < 0 ? [] : [this[n]]);
          }
          return d([this[e]]);
        },
        append: function (...e) {
          let t;
          const n = s();
          for (let i = 0; i < e.length; i += 1) {
            t = e[i];
            for (let e = 0; e < this.length; e += 1)
              if ("string" == typeof t) {
                const i = n.createElement("div");
                for (i.innerHTML = t; i.firstChild; )
                  this[e].appendChild(i.firstChild);
              } else if (t instanceof a)
                for (let n = 0; n < t.length; n += 1) this[e].appendChild(t[n]);
              else this[e].appendChild(t);
          }
          return this;
        },
        prepend: function (e) {
          const t = s();
          let n, i;
          for (n = 0; n < this.length; n += 1)
            if ("string" == typeof e) {
              const s = t.createElement("div");
              for (s.innerHTML = e, i = s.childNodes.length - 1; i >= 0; i -= 1)
                this[n].insertBefore(s.childNodes[i], this[n].childNodes[0]);
            } else if (e instanceof a)
              for (i = 0; i < e.length; i += 1)
                this[n].insertBefore(e[i], this[n].childNodes[0]);
            else this[n].insertBefore(e, this[n].childNodes[0]);
          return this;
        },
        next: function (e) {
          return this.length > 0
            ? e
              ? this[0].nextElementSibling &&
                d(this[0].nextElementSibling).is(e)
                ? d([this[0].nextElementSibling])
                : d([])
              : this[0].nextElementSibling
              ? d([this[0].nextElementSibling])
              : d([])
            : d([]);
        },
        nextAll: function (e) {
          const t = [];
          let n = this[0];
          if (!n) return d([]);
          for (; n.nextElementSibling; ) {
            const i = n.nextElementSibling;
            e ? d(i).is(e) && t.push(i) : t.push(i), (n = i);
          }
          return d(t);
        },
        prev: function (e) {
          if (this.length > 0) {
            const t = this[0];
            return e
              ? t.previousElementSibling && d(t.previousElementSibling).is(e)
                ? d([t.previousElementSibling])
                : d([])
              : t.previousElementSibling
              ? d([t.previousElementSibling])
              : d([]);
          }
          return d([]);
        },
        prevAll: function (e) {
          const t = [];
          let n = this[0];
          if (!n) return d([]);
          for (; n.previousElementSibling; ) {
            const i = n.previousElementSibling;
            e ? d(i).is(e) && t.push(i) : t.push(i), (n = i);
          }
          return d(t);
        },
        parent: function (e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1)
            null !== this[n].parentNode &&
              (e
                ? d(this[n].parentNode).is(e) && t.push(this[n].parentNode)
                : t.push(this[n].parentNode));
          return d(t);
        },
        parents: function (e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) {
            let i = this[n].parentNode;
            for (; i; )
              e ? d(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
          }
          return d(t);
        },
        closest: function (e) {
          let t = this;
          return void 0 === e
            ? d([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) {
            const i = this[n].querySelectorAll(e);
            for (let e = 0; e < i.length; e += 1) t.push(i[e]);
          }
          return d(t);
        },
        children: function (e) {
          const t = [];
          for (let n = 0; n < this.length; n += 1) {
            const i = this[n].children;
            for (let n = 0; n < i.length; n += 1)
              (e && !d(i[n]).is(e)) || t.push(i[n]);
          }
          return d(t);
        },
        filter: function (e) {
          return d(c(this, e));
        },
        remove: function () {
          for (let e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
      };
      Object.keys(f).forEach((e) => {
        Object.defineProperty(d.fn, e, { value: f[e], writable: !0 });
      });
      var h = d;
      function m(e, t = 0) {
        return setTimeout(e, t);
      }
      function g() {
        return Date.now();
      }
      function v(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function b(...e) {
        const t = Object(e[0]),
          n = ["__proto__", "constructor", "prototype"];
        for (let s = 1; s < e.length; s += 1) {
          const r = e[s];
          if (
            null != r &&
            ((i = r),
            !("undefined" != typeof window && void 0 !== window.HTMLElement
              ? i instanceof HTMLElement
              : i && (1 === i.nodeType || 11 === i.nodeType)))
          ) {
            const e = Object.keys(Object(r)).filter((e) => n.indexOf(e) < 0);
            for (let n = 0, i = e.length; n < i; n += 1) {
              const i = e[n],
                s = Object.getOwnPropertyDescriptor(r, i);
              void 0 !== s &&
                s.enumerable &&
                (v(t[i]) && v(r[i])
                  ? r[i].__swiper__
                    ? (t[i] = r[i])
                    : b(t[i], r[i])
                  : !v(t[i]) && v(r[i])
                  ? ((t[i] = {}),
                    r[i].__swiper__ ? (t[i] = r[i]) : b(t[i], r[i]))
                  : (t[i] = r[i]));
            }
          }
        }
        var i;
        return t;
      }
      function w(e, t, n) {
        e.style.setProperty(t, n);
      }
      function y({ swiper: e, targetPosition: t, side: n }) {
        const i = o(),
          s = -e.translate;
        let r,
          a = null;
        const l = e.params.speed;
        (e.wrapperEl.style.scrollSnapType = "none"),
          i.cancelAnimationFrame(e.cssModeFrameID);
        const c = t > s ? "next" : "prev",
          d = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
          u = () => {
            (r = new Date().getTime()), null === a && (a = r);
            const o = Math.max(Math.min((r - a) / l, 1), 0),
              c = 0.5 - Math.cos(o * Math.PI) / 2;
            let p = s + c * (t - s);
            if ((d(p, t) && (p = t), e.wrapperEl.scrollTo({ [n]: p }), d(p, t)))
              return (
                (e.wrapperEl.style.overflow = "hidden"),
                (e.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (e.wrapperEl.style.overflow = ""),
                    e.wrapperEl.scrollTo({ [n]: p });
                }),
                void i.cancelAnimationFrame(e.cssModeFrameID)
              );
            e.cssModeFrameID = i.requestAnimationFrame(u);
          };
        u();
      }
      let x, C, E;
      function T() {
        return (
          x ||
            (x = (function () {
              const e = o(),
                t = s();
              return {
                smoothScroll:
                  t.documentElement &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
                passiveListener: (function () {
                  let t = !1;
                  try {
                    const n = Object.defineProperty({}, "passive", {
                      get() {
                        t = !0;
                      },
                    });
                    e.addEventListener("testPassiveListener", null, n);
                  } catch (e) {}
                  return t;
                })(),
                gestures: "ongesturestart" in e,
              };
            })()),
          x
        );
      }
      var S = {
          on(e, t, n) {
            const i = this;
            if ("function" != typeof t) return i;
            const s = n ? "unshift" : "push";
            return (
              e.split(" ").forEach((e) => {
                i.eventsListeners[e] || (i.eventsListeners[e] = []),
                  i.eventsListeners[e][s](t);
              }),
              i
            );
          },
          once(e, t, n) {
            const i = this;
            if ("function" != typeof t) return i;
            function s(...n) {
              i.off(e, s),
                s.__emitterProxy && delete s.__emitterProxy,
                t.apply(i, n);
            }
            return (s.__emitterProxy = t), i.on(e, s, n);
          },
          onAny(e, t) {
            const n = this;
            if ("function" != typeof e) return n;
            const i = t ? "unshift" : "push";
            return (
              n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e),
              n
            );
          },
          offAny(e) {
            const t = this;
            if (!t.eventsAnyListeners) return t;
            const n = t.eventsAnyListeners.indexOf(e);
            return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
          },
          off(e, t) {
            const n = this;
            return n.eventsListeners
              ? (e.split(" ").forEach((e) => {
                  void 0 === t
                    ? (n.eventsListeners[e] = [])
                    : n.eventsListeners[e] &&
                      n.eventsListeners[e].forEach((i, s) => {
                        (i === t ||
                          (i.__emitterProxy && i.__emitterProxy === t)) &&
                          n.eventsListeners[e].splice(s, 1);
                      });
                }),
                n)
              : n;
          },
          emit(...e) {
            const t = this;
            if (!t.eventsListeners) return t;
            let n, i, s;
            return (
              "string" == typeof e[0] || Array.isArray(e[0])
                ? ((n = e[0]), (i = e.slice(1, e.length)), (s = t))
                : ((n = e[0].events), (i = e[0].data), (s = e[0].context || t)),
              i.unshift(s),
              (Array.isArray(n) ? n : n.split(" ")).forEach((e) => {
                t.eventsAnyListeners &&
                  t.eventsAnyListeners.length &&
                  t.eventsAnyListeners.forEach((t) => {
                    t.apply(s, [e, ...i]);
                  }),
                  t.eventsListeners &&
                    t.eventsListeners[e] &&
                    t.eventsListeners[e].forEach((e) => {
                      e.apply(s, i);
                    });
              }),
              t
            );
          },
        },
        _ = {
          updateSize: function () {
            const e = this;
            let t, n;
            const i = e.$el;
            (t =
              void 0 !== e.params.width && null !== e.params.width
                ? e.params.width
                : i[0].clientWidth),
              (n =
                void 0 !== e.params.height && null !== e.params.height
                  ? e.params.height
                  : i[0].clientHeight),
              (0 === t && e.isHorizontal()) ||
                (0 === n && e.isVertical()) ||
                ((t =
                  t -
                  parseInt(i.css("padding-left") || 0, 10) -
                  parseInt(i.css("padding-right") || 0, 10)),
                (n =
                  n -
                  parseInt(i.css("padding-top") || 0, 10) -
                  parseInt(i.css("padding-bottom") || 0, 10)),
                Number.isNaN(t) && (t = 0),
                Number.isNaN(n) && (n = 0),
                Object.assign(e, {
                  width: t,
                  height: n,
                  size: e.isHorizontal() ? t : n,
                }));
          },
          updateSlides: function () {
            const e = this;
            function t(t) {
              return e.isHorizontal()
                ? t
                : {
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom",
                  }[t];
            }
            function n(e, n) {
              return parseFloat(e.getPropertyValue(t(n)) || 0);
            }
            const i = e.params,
              { $wrapperEl: s, size: r, rtlTranslate: o, wrongRTL: a } = e,
              l = e.virtual && i.virtual.enabled,
              c = l ? e.virtual.slides.length : e.slides.length,
              d = s.children(`.${e.params.slideClass}`),
              u = l ? e.virtual.slides.length : d.length;
            let p = [];
            const f = [],
              h = [];
            let m = i.slidesOffsetBefore;
            "function" == typeof m && (m = i.slidesOffsetBefore.call(e));
            let g = i.slidesOffsetAfter;
            "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
            const v = e.snapGrid.length,
              b = e.slidesGrid.length;
            let y = i.spaceBetween,
              x = -m,
              C = 0,
              E = 0;
            if (void 0 === r) return;
            "string" == typeof y &&
              y.indexOf("%") >= 0 &&
              (y = (parseFloat(y.replace("%", "")) / 100) * r),
              (e.virtualSize = -y),
              o
                ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
                : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
              i.centeredSlides &&
                i.cssMode &&
                (w(e.wrapperEl, "--swiper-centered-offset-before", ""),
                w(e.wrapperEl, "--swiper-centered-offset-after", ""));
            const T = i.grid && i.grid.rows > 1 && e.grid;
            let S;
            T && e.grid.initSlides(u);
            const _ =
              "auto" === i.slidesPerView &&
              i.breakpoints &&
              Object.keys(i.breakpoints).filter(
                (e) => void 0 !== i.breakpoints[e].slidesPerView
              ).length > 0;
            for (let s = 0; s < u; s += 1) {
              S = 0;
              const o = d.eq(s);
              if (
                (T && e.grid.updateSlide(s, o, u, t),
                "none" !== o.css("display"))
              ) {
                if ("auto" === i.slidesPerView) {
                  _ && (d[s].style[t("width")] = "");
                  const r = getComputedStyle(o[0]),
                    a = o[0].style.transform,
                    l = o[0].style.webkitTransform;
                  if (
                    (a && (o[0].style.transform = "none"),
                    l && (o[0].style.webkitTransform = "none"),
                    i.roundLengths)
                  )
                    S = e.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0);
                  else {
                    const e = n(r, "width"),
                      t = n(r, "padding-left"),
                      i = n(r, "padding-right"),
                      s = n(r, "margin-left"),
                      a = n(r, "margin-right"),
                      l = r.getPropertyValue("box-sizing");
                    if (l && "border-box" === l) S = e + s + a;
                    else {
                      const { clientWidth: n, offsetWidth: r } = o[0];
                      S = e + t + i + s + a + (r - n);
                    }
                  }
                  a && (o[0].style.transform = a),
                    l && (o[0].style.webkitTransform = l),
                    i.roundLengths && (S = Math.floor(S));
                } else
                  (S = (r - (i.slidesPerView - 1) * y) / i.slidesPerView),
                    i.roundLengths && (S = Math.floor(S)),
                    d[s] && (d[s].style[t("width")] = `${S}px`);
                d[s] && (d[s].swiperSlideSize = S),
                  h.push(S),
                  i.centeredSlides
                    ? ((x = x + S / 2 + C / 2 + y),
                      0 === C && 0 !== s && (x = x - r / 2 - y),
                      0 === s && (x = x - r / 2 - y),
                      Math.abs(x) < 0.001 && (x = 0),
                      i.roundLengths && (x = Math.floor(x)),
                      E % i.slidesPerGroup == 0 && p.push(x),
                      f.push(x))
                    : (i.roundLengths && (x = Math.floor(x)),
                      (E - Math.min(e.params.slidesPerGroupSkip, E)) %
                        e.params.slidesPerGroup ==
                        0 && p.push(x),
                      f.push(x),
                      (x = x + S + y)),
                  (e.virtualSize += S + y),
                  (C = S),
                  (E += 1);
              }
            }
            if (
              ((e.virtualSize = Math.max(e.virtualSize, r) + g),
              o &&
                a &&
                ("slide" === i.effect || "coverflow" === i.effect) &&
                s.css({ width: `${e.virtualSize + i.spaceBetween}px` }),
              i.setWrapperSize &&
                s.css({ [t("width")]: `${e.virtualSize + i.spaceBetween}px` }),
              T && e.grid.updateWrapperSize(S, p, t),
              !i.centeredSlides)
            ) {
              const t = [];
              for (let n = 0; n < p.length; n += 1) {
                let s = p[n];
                i.roundLengths && (s = Math.floor(s)),
                  p[n] <= e.virtualSize - r && t.push(s);
              }
              (p = t),
                Math.floor(e.virtualSize - r) - Math.floor(p[p.length - 1]) >
                  1 && p.push(e.virtualSize - r);
            }
            if ((0 === p.length && (p = [0]), 0 !== i.spaceBetween)) {
              const n = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
              d.filter((e, t) => !i.cssMode || t !== d.length - 1).css({
                [n]: `${y}px`,
              });
            }
            if (i.centeredSlides && i.centeredSlidesBounds) {
              let e = 0;
              h.forEach((t) => {
                e += t + (i.spaceBetween ? i.spaceBetween : 0);
              }),
                (e -= i.spaceBetween);
              const t = e - r;
              p = p.map((e) => (e < 0 ? -m : e > t ? t + g : e));
            }
            if (i.centerInsufficientSlides) {
              let e = 0;
              if (
                (h.forEach((t) => {
                  e += t + (i.spaceBetween ? i.spaceBetween : 0);
                }),
                (e -= i.spaceBetween),
                e < r)
              ) {
                const t = (r - e) / 2;
                p.forEach((e, n) => {
                  p[n] = e - t;
                }),
                  f.forEach((e, n) => {
                    f[n] = e + t;
                  });
              }
            }
            if (
              (Object.assign(e, {
                slides: d,
                snapGrid: p,
                slidesGrid: f,
                slidesSizesGrid: h,
              }),
              i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
            ) {
              w(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
                w(
                  e.wrapperEl,
                  "--swiper-centered-offset-after",
                  e.size / 2 - h[h.length - 1] / 2 + "px"
                );
              const t = -e.snapGrid[0],
                n = -e.slidesGrid[0];
              (e.snapGrid = e.snapGrid.map((e) => e + t)),
                (e.slidesGrid = e.slidesGrid.map((e) => e + n));
            }
            u !== c && e.emit("slidesLengthChange"),
              p.length !== v &&
                (e.params.watchOverflow && e.checkOverflow(),
                e.emit("snapGridLengthChange")),
              f.length !== b && e.emit("slidesGridLengthChange"),
              i.watchSlidesProgress && e.updateSlidesOffset();
          },
          updateAutoHeight: function (e) {
            const t = this,
              n = [],
              i = t.virtual && t.params.virtual.enabled;
            let s,
              r = 0;
            "number" == typeof e
              ? t.setTransition(e)
              : !0 === e && t.setTransition(t.params.speed);
            const o = (e) =>
              i
                ? t.slides.filter(
                    (t) =>
                      parseInt(
                        t.getAttribute("data-swiper-slide-index"),
                        10
                      ) === e
                  )[0]
                : t.slides.eq(e)[0];
            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
              if (t.params.centeredSlides)
                t.visibleSlides.each((e) => {
                  n.push(e);
                });
              else
                for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
                  const e = t.activeIndex + s;
                  if (e > t.slides.length && !i) break;
                  n.push(o(e));
                }
            else n.push(o(t.activeIndex));
            for (s = 0; s < n.length; s += 1)
              if (void 0 !== n[s]) {
                const e = n[s].offsetHeight;
                r = e > r ? e : r;
              }
            (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
          },
          updateSlidesOffset: function () {
            const e = this,
              t = e.slides;
            for (let n = 0; n < t.length; n += 1)
              t[n].swiperSlideOffset = e.isHorizontal()
                ? t[n].offsetLeft
                : t[n].offsetTop;
          },
          updateSlidesProgress: function (e = (this && this.translate) || 0) {
            const t = this,
              n = t.params,
              { slides: i, rtlTranslate: s, snapGrid: r } = t;
            if (0 === i.length) return;
            void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
            let o = -e;
            s && (o = e),
              i.removeClass(n.slideVisibleClass),
              (t.visibleSlidesIndexes = []),
              (t.visibleSlides = []);
            for (let e = 0; e < i.length; e += 1) {
              const a = i[e];
              let l = a.swiperSlideOffset;
              n.cssMode && n.centeredSlides && (l -= i[0].swiperSlideOffset);
              const c =
                  (o + (n.centeredSlides ? t.minTranslate() : 0) - l) /
                  (a.swiperSlideSize + n.spaceBetween),
                d =
                  (o - r[0] + (n.centeredSlides ? t.minTranslate() : 0) - l) /
                  (a.swiperSlideSize + n.spaceBetween),
                u = -(o - l),
                p = u + t.slidesSizesGrid[e];
              ((u >= 0 && u < t.size - 1) ||
                (p > 1 && p <= t.size) ||
                (u <= 0 && p >= t.size)) &&
                (t.visibleSlides.push(a),
                t.visibleSlidesIndexes.push(e),
                i.eq(e).addClass(n.slideVisibleClass)),
                (a.progress = s ? -c : c),
                (a.originalProgress = s ? -d : d);
            }
            t.visibleSlides = h(t.visibleSlides);
          },
          updateProgress: function (e) {
            const t = this;
            if (void 0 === e) {
              const n = t.rtlTranslate ? -1 : 1;
              e = (t && t.translate && t.translate * n) || 0;
            }
            const n = t.params,
              i = t.maxTranslate() - t.minTranslate();
            let { progress: s, isBeginning: r, isEnd: o } = t;
            const a = r,
              l = o;
            0 === i
              ? ((s = 0), (r = !0), (o = !0))
              : ((s = (e - t.minTranslate()) / i), (r = s <= 0), (o = s >= 1)),
              Object.assign(t, { progress: s, isBeginning: r, isEnd: o }),
              (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
                t.updateSlidesProgress(e),
              r && !a && t.emit("reachBeginning toEdge"),
              o && !l && t.emit("reachEnd toEdge"),
              ((a && !r) || (l && !o)) && t.emit("fromEdge"),
              t.emit("progress", s);
          },
          updateSlidesClasses: function () {
            const e = this,
              {
                slides: t,
                params: n,
                $wrapperEl: i,
                activeIndex: s,
                realIndex: r,
              } = e,
              o = e.virtual && n.virtual.enabled;
            let a;
            t.removeClass(
              `${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`
            ),
              (a = o
                ? e.$wrapperEl.find(
                    `.${n.slideClass}[data-swiper-slide-index="${s}"]`
                  )
                : t.eq(s)),
              a.addClass(n.slideActiveClass),
              n.loop &&
                (a.hasClass(n.slideDuplicateClass)
                  ? i
                      .children(
                        `.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                      )
                      .addClass(n.slideDuplicateActiveClass)
                  : i
                      .children(
                        `.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                      )
                      .addClass(n.slideDuplicateActiveClass));
            let l = a
              .nextAll(`.${n.slideClass}`)
              .eq(0)
              .addClass(n.slideNextClass);
            n.loop &&
              0 === l.length &&
              ((l = t.eq(0)), l.addClass(n.slideNextClass));
            let c = a
              .prevAll(`.${n.slideClass}`)
              .eq(0)
              .addClass(n.slidePrevClass);
            n.loop &&
              0 === c.length &&
              ((c = t.eq(-1)), c.addClass(n.slidePrevClass)),
              n.loop &&
                (l.hasClass(n.slideDuplicateClass)
                  ? i
                      .children(
                        `.${n.slideClass}:not(.${
                          n.slideDuplicateClass
                        })[data-swiper-slide-index="${l.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(n.slideDuplicateNextClass)
                  : i
                      .children(
                        `.${n.slideClass}.${
                          n.slideDuplicateClass
                        }[data-swiper-slide-index="${l.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(n.slideDuplicateNextClass),
                c.hasClass(n.slideDuplicateClass)
                  ? i
                      .children(
                        `.${n.slideClass}:not(.${
                          n.slideDuplicateClass
                        })[data-swiper-slide-index="${c.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(n.slideDuplicatePrevClass)
                  : i
                      .children(
                        `.${n.slideClass}.${
                          n.slideDuplicateClass
                        }[data-swiper-slide-index="${c.attr(
                          "data-swiper-slide-index"
                        )}"]`
                      )
                      .addClass(n.slideDuplicatePrevClass)),
              e.emitSlidesClasses();
          },
          updateActiveIndex: function (e) {
            const t = this,
              n = t.rtlTranslate ? t.translate : -t.translate,
              {
                slidesGrid: i,
                snapGrid: s,
                params: r,
                activeIndex: o,
                realIndex: a,
                snapIndex: l,
              } = t;
            let c,
              d = e;
            if (void 0 === d) {
              for (let e = 0; e < i.length; e += 1)
                void 0 !== i[e + 1]
                  ? n >= i[e] && n < i[e + 1] - (i[e + 1] - i[e]) / 2
                    ? (d = e)
                    : n >= i[e] && n < i[e + 1] && (d = e + 1)
                  : n >= i[e] && (d = e);
              r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
            }
            if (s.indexOf(n) >= 0) c = s.indexOf(n);
            else {
              const e = Math.min(r.slidesPerGroupSkip, d);
              c = e + Math.floor((d - e) / r.slidesPerGroup);
            }
            if ((c >= s.length && (c = s.length - 1), d === o))
              return void (
                c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"))
              );
            const u = parseInt(
              t.slides.eq(d).attr("data-swiper-slide-index") || d,
              10
            );
            Object.assign(t, {
              snapIndex: c,
              realIndex: u,
              previousIndex: o,
              activeIndex: d,
            }),
              t.emit("activeIndexChange"),
              t.emit("snapIndexChange"),
              a !== u && t.emit("realIndexChange"),
              (t.initialized || t.params.runCallbacksOnInit) &&
                t.emit("slideChange");
          },
          updateClickedSlide: function (e) {
            const t = this,
              n = t.params,
              i = h(e).closest(`.${n.slideClass}`)[0];
            let s,
              r = !1;
            if (i)
              for (let e = 0; e < t.slides.length; e += 1)
                if (t.slides[e] === i) {
                  (r = !0), (s = e);
                  break;
                }
            if (!i || !r)
              return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
            (t.clickedSlide = i),
              t.virtual && t.params.virtual.enabled
                ? (t.clickedIndex = parseInt(
                    h(i).attr("data-swiper-slide-index"),
                    10
                  ))
                : (t.clickedIndex = s),
              n.slideToClickedSlide &&
                void 0 !== t.clickedIndex &&
                t.clickedIndex !== t.activeIndex &&
                t.slideToClickedSlide();
          },
        };
      function k({ swiper: e, runCallbacks: t, direction: n, step: i }) {
        const { activeIndex: s, previousIndex: r } = e;
        let o = n;
        if (
          (o || (o = s > r ? "next" : s < r ? "prev" : "reset"),
          e.emit(`transition${i}`),
          t && s !== r)
        ) {
          if ("reset" === o) return void e.emit(`slideResetTransition${i}`);
          e.emit(`slideChangeTransition${i}`),
            "next" === o
              ? e.emit(`slideNextTransition${i}`)
              : e.emit(`slidePrevTransition${i}`);
        }
      }
      var A = {
          slideTo: function (e = 0, t = this.params.speed, n = !0, i, s) {
            if ("number" != typeof e && "string" != typeof e)
              throw new Error(
                `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
              );
            if ("string" == typeof e) {
              const t = parseInt(e, 10);
              if (!isFinite(t))
                throw new Error(
                  `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
                );
              e = t;
            }
            const r = this;
            let o = e;
            o < 0 && (o = 0);
            const {
              params: a,
              snapGrid: l,
              slidesGrid: c,
              previousIndex: d,
              activeIndex: u,
              rtlTranslate: p,
              wrapperEl: f,
              enabled: h,
            } = r;
            if (
              (r.animating && a.preventInteractionOnTransition) ||
              (!h && !i && !s)
            )
              return !1;
            const m = Math.min(r.params.slidesPerGroupSkip, o);
            let g = m + Math.floor((o - m) / r.params.slidesPerGroup);
            g >= l.length && (g = l.length - 1),
              (u || a.initialSlide || 0) === (d || 0) &&
                n &&
                r.emit("beforeSlideChangeStart");
            const v = -l[g];
            if ((r.updateProgress(v), a.normalizeSlideIndex))
              for (let e = 0; e < c.length; e += 1) {
                const t = -Math.floor(100 * v),
                  n = Math.floor(100 * c[e]),
                  i = Math.floor(100 * c[e + 1]);
                void 0 !== c[e + 1]
                  ? t >= n && t < i - (i - n) / 2
                    ? (o = e)
                    : t >= n && t < i && (o = e + 1)
                  : t >= n && (o = e);
              }
            if (r.initialized && o !== u) {
              if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
                return !1;
              if (
                !r.allowSlidePrev &&
                v > r.translate &&
                v > r.maxTranslate() &&
                (u || 0) !== o
              )
                return !1;
            }
            let b;
            if (
              ((b = o > u ? "next" : o < u ? "prev" : "reset"),
              (p && -v === r.translate) || (!p && v === r.translate))
            )
              return (
                r.updateActiveIndex(o),
                a.autoHeight && r.updateAutoHeight(),
                r.updateSlidesClasses(),
                "slide" !== a.effect && r.setTranslate(v),
                "reset" !== b &&
                  (r.transitionStart(n, b), r.transitionEnd(n, b)),
                !1
              );
            if (a.cssMode) {
              const e = r.isHorizontal(),
                n = p ? v : -v;
              if (0 === t) {
                const t = r.virtual && r.params.virtual.enabled;
                t &&
                  ((r.wrapperEl.style.scrollSnapType = "none"),
                  (r._immediateVirtual = !0)),
                  (f[e ? "scrollLeft" : "scrollTop"] = n),
                  t &&
                    requestAnimationFrame(() => {
                      (r.wrapperEl.style.scrollSnapType = ""),
                        (r._swiperImmediateVirtual = !1);
                    });
              } else {
                if (!r.support.smoothScroll)
                  return (
                    y({
                      swiper: r,
                      targetPosition: n,
                      side: e ? "left" : "top",
                    }),
                    !0
                  );
                f.scrollTo({ [e ? "left" : "top"]: n, behavior: "smooth" });
              }
              return !0;
            }
            return (
              r.setTransition(t),
              r.setTranslate(v),
              r.updateActiveIndex(o),
              r.updateSlidesClasses(),
              r.emit("beforeTransitionStart", t, i),
              r.transitionStart(n, b),
              0 === t
                ? r.transitionEnd(n, b)
                : r.animating ||
                  ((r.animating = !0),
                  r.onSlideToWrapperTransitionEnd ||
                    (r.onSlideToWrapperTransitionEnd = function (e) {
                      r &&
                        !r.destroyed &&
                        e.target === this &&
                        (r.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          r.onSlideToWrapperTransitionEnd
                        ),
                        r.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          r.onSlideToWrapperTransitionEnd
                        ),
                        (r.onSlideToWrapperTransitionEnd = null),
                        delete r.onSlideToWrapperTransitionEnd,
                        r.transitionEnd(n, b));
                    }),
                  r.$wrapperEl[0].addEventListener(
                    "transitionend",
                    r.onSlideToWrapperTransitionEnd
                  ),
                  r.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    r.onSlideToWrapperTransitionEnd
                  )),
              !0
            );
          },
          slideToLoop: function (e = 0, t = this.params.speed, n = !0, i) {
            const s = this;
            let r = e;
            return (
              s.params.loop && (r += s.loopedSlides), s.slideTo(r, t, n, i)
            );
          },
          slideNext: function (e = this.params.speed, t = !0, n) {
            const i = this,
              { animating: s, enabled: r, params: o } = i;
            if (!r) return i;
            let a = o.slidesPerGroup;
            "auto" === o.slidesPerView &&
              1 === o.slidesPerGroup &&
              o.slidesPerGroupAuto &&
              (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
            const l = i.activeIndex < o.slidesPerGroupSkip ? 1 : a;
            if (o.loop) {
              if (s && o.loopPreventsSlide) return !1;
              i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
            }
            return o.rewind && i.isEnd
              ? i.slideTo(0, e, t, n)
              : i.slideTo(i.activeIndex + l, e, t, n);
          },
          slidePrev: function (e = this.params.speed, t = !0, n) {
            const i = this,
              {
                params: s,
                animating: r,
                snapGrid: o,
                slidesGrid: a,
                rtlTranslate: l,
                enabled: c,
              } = i;
            if (!c) return i;
            if (s.loop) {
              if (r && s.loopPreventsSlide) return !1;
              i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
            }
            function d(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            const u = d(l ? i.translate : -i.translate),
              p = o.map((e) => d(e));
            let f = o[p.indexOf(u) - 1];
            if (void 0 === f && s.cssMode) {
              let e;
              o.forEach((t, n) => {
                u >= t && (e = n);
              }),
                void 0 !== e && (f = o[e > 0 ? e - 1 : e]);
            }
            let h = 0;
            return (
              void 0 !== f &&
                ((h = a.indexOf(f)),
                h < 0 && (h = i.activeIndex - 1),
                "auto" === s.slidesPerView &&
                  1 === s.slidesPerGroup &&
                  s.slidesPerGroupAuto &&
                  ((h = h - i.slidesPerViewDynamic("previous", !0) + 1),
                  (h = Math.max(h, 0)))),
              s.rewind && i.isBeginning
                ? i.slideTo(i.slides.length - 1, e, t, n)
                : i.slideTo(h, e, t, n)
            );
          },
          slideReset: function (e = this.params.speed, t = !0, n) {
            return this.slideTo(this.activeIndex, e, t, n);
          },
          slideToClosest: function (e = this.params.speed, t = !0, n, i = 0.5) {
            const s = this;
            let r = s.activeIndex;
            const o = Math.min(s.params.slidesPerGroupSkip, r),
              a = o + Math.floor((r - o) / s.params.slidesPerGroup),
              l = s.rtlTranslate ? s.translate : -s.translate;
            if (l >= s.snapGrid[a]) {
              const e = s.snapGrid[a];
              l - e > (s.snapGrid[a + 1] - e) * i &&
                (r += s.params.slidesPerGroup);
            } else {
              const e = s.snapGrid[a - 1];
              l - e <= (s.snapGrid[a] - e) * i &&
                (r -= s.params.slidesPerGroup);
            }
            return (
              (r = Math.max(r, 0)),
              (r = Math.min(r, s.slidesGrid.length - 1)),
              s.slideTo(r, e, t, n)
            );
          },
          slideToClickedSlide: function () {
            const e = this,
              { params: t, $wrapperEl: n } = e,
              i =
                "auto" === t.slidesPerView
                  ? e.slidesPerViewDynamic()
                  : t.slidesPerView;
            let s,
              r = e.clickedIndex;
            if (t.loop) {
              if (e.animating) return;
              (s = parseInt(
                h(e.clickedSlide).attr("data-swiper-slide-index"),
                10
              )),
                t.centeredSlides
                  ? r < e.loopedSlides - i / 2 ||
                    r > e.slides.length - e.loopedSlides + i / 2
                    ? (e.loopFix(),
                      (r = n
                        .children(
                          `.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`
                        )
                        .eq(0)
                        .index()),
                      m(() => {
                        e.slideTo(r);
                      }))
                    : e.slideTo(r)
                  : r > e.slides.length - i
                  ? (e.loopFix(),
                    (r = n
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    m(() => {
                      e.slideTo(r);
                    }))
                  : e.slideTo(r);
            } else e.slideTo(r);
          },
        },
        O = {
          loopCreate: function () {
            const e = this,
              t = s(),
              { params: n, $wrapperEl: i } = e,
              r = i.children().length > 0 ? h(i.children()[0].parentNode) : i;
            r.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
            let o = r.children(`.${n.slideClass}`);
            if (n.loopFillGroupWithBlank) {
              const e = n.slidesPerGroup - (o.length % n.slidesPerGroup);
              if (e !== n.slidesPerGroup) {
                for (let i = 0; i < e; i += 1) {
                  const e = h(t.createElement("div")).addClass(
                    `${n.slideClass} ${n.slideBlankClass}`
                  );
                  r.append(e);
                }
                o = r.children(`.${n.slideClass}`);
              }
            }
            "auto" !== n.slidesPerView ||
              n.loopedSlides ||
              (n.loopedSlides = o.length),
              (e.loopedSlides = Math.ceil(
                parseFloat(n.loopedSlides || n.slidesPerView, 10)
              )),
              (e.loopedSlides += n.loopAdditionalSlides),
              e.loopedSlides > o.length && (e.loopedSlides = o.length);
            const a = [],
              l = [];
            o.each((t, n) => {
              const i = h(t);
              n < e.loopedSlides && l.push(t),
                n < o.length && n >= o.length - e.loopedSlides && a.push(t),
                i.attr("data-swiper-slide-index", n);
            });
            for (let e = 0; e < l.length; e += 1)
              r.append(h(l[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
            for (let e = a.length - 1; e >= 0; e -= 1)
              r.prepend(h(a[e].cloneNode(!0)).addClass(n.slideDuplicateClass));
          },
          loopFix: function () {
            const e = this;
            e.emit("beforeLoopFix");
            const {
              activeIndex: t,
              slides: n,
              loopedSlides: i,
              allowSlidePrev: s,
              allowSlideNext: r,
              snapGrid: o,
              rtlTranslate: a,
            } = e;
            let l;
            (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
            const c = -o[t] - e.getTranslate();
            t < i
              ? ((l = n.length - 3 * i + t),
                (l += i),
                e.slideTo(l, 0, !1, !0) &&
                  0 !== c &&
                  e.setTranslate((a ? -e.translate : e.translate) - c))
              : t >= n.length - i &&
                ((l = -n.length + t + i),
                (l += i),
                e.slideTo(l, 0, !1, !0) &&
                  0 !== c &&
                  e.setTranslate((a ? -e.translate : e.translate) - c)),
              (e.allowSlidePrev = s),
              (e.allowSlideNext = r),
              e.emit("loopFix");
          },
          loopDestroy: function () {
            const { $wrapperEl: e, params: t, slides: n } = this;
            e
              .children(
                `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
              )
              .remove(),
              n.removeAttr("data-swiper-slide-index");
          },
        };
      function P(e) {
        const t = this,
          n = s(),
          i = o(),
          r = t.touchEventsData,
          { params: a, touches: l, enabled: c } = t;
        if (!c) return;
        if (t.animating && a.preventInteractionOnTransition) return;
        !t.animating && a.cssMode && a.loop && t.loopFix();
        let d = e;
        d.originalEvent && (d = d.originalEvent);
        let u = h(d.target);
        if ("wrapper" === a.touchEventsTarget && !u.closest(t.wrapperEl).length)
          return;
        if (
          ((r.isTouchEvent = "touchstart" === d.type),
          !r.isTouchEvent && "which" in d && 3 === d.which)
        )
          return;
        if (!r.isTouchEvent && "button" in d && d.button > 0) return;
        if (r.isTouched && r.isMoved) return;
        a.noSwipingClass &&
          "" !== a.noSwipingClass &&
          d.target &&
          d.target.shadowRoot &&
          e.path &&
          e.path[0] &&
          (u = h(e.path[0]));
        const p = a.noSwipingSelector
            ? a.noSwipingSelector
            : `.${a.noSwipingClass}`,
          f = !(!d.target || !d.target.shadowRoot);
        if (
          a.noSwiping &&
          (f
            ? (function (e, t = this) {
                return (function t(n) {
                  return n && n !== s() && n !== o()
                    ? (n.assignedSlot && (n = n.assignedSlot),
                      n.closest(e) || t(n.getRootNode().host))
                    : null;
                })(t);
              })(p, d.target)
            : u.closest(p)[0])
        )
          return void (t.allowClick = !0);
        if (a.swipeHandler && !u.closest(a.swipeHandler)[0]) return;
        (l.currentX =
          "touchstart" === d.type ? d.targetTouches[0].pageX : d.pageX),
          (l.currentY =
            "touchstart" === d.type ? d.targetTouches[0].pageY : d.pageY);
        const m = l.currentX,
          v = l.currentY,
          b = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
          w = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
        if (b && (m <= w || m >= i.innerWidth - w)) {
          if ("prevent" !== b) return;
          e.preventDefault();
        }
        if (
          (Object.assign(r, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0,
          }),
          (l.startX = m),
          (l.startY = v),
          (r.touchStartTime = g()),
          (t.allowClick = !0),
          t.updateSize(),
          (t.swipeDirection = void 0),
          a.threshold > 0 && (r.allowThresholdMove = !1),
          "touchstart" !== d.type)
        ) {
          let e = !0;
          u.is(r.focusableElements) && (e = !1),
            n.activeElement &&
              h(n.activeElement).is(r.focusableElements) &&
              n.activeElement !== u[0] &&
              n.activeElement.blur();
          const i = e && t.allowTouchMove && a.touchStartPreventDefault;
          (!a.touchStartForcePreventDefault && !i) ||
            u[0].isContentEditable ||
            d.preventDefault();
        }
        t.emit("touchStart", d);
      }
      function $(e) {
        const t = s(),
          n = this,
          i = n.touchEventsData,
          { params: r, touches: o, rtlTranslate: a, enabled: l } = n;
        if (!l) return;
        let c = e;
        if ((c.originalEvent && (c = c.originalEvent), !i.isTouched))
          return void (
            i.startMoving &&
            i.isScrolling &&
            n.emit("touchMoveOpposite", c)
          );
        if (i.isTouchEvent && "touchmove" !== c.type) return;
        const d =
            "touchmove" === c.type &&
            c.targetTouches &&
            (c.targetTouches[0] || c.changedTouches[0]),
          u = "touchmove" === c.type ? d.pageX : c.pageX,
          p = "touchmove" === c.type ? d.pageY : c.pageY;
        if (c.preventedByNestedSwiper)
          return (o.startX = u), void (o.startY = p);
        if (!n.allowTouchMove)
          return (
            (n.allowClick = !1),
            void (
              i.isTouched &&
              (Object.assign(o, {
                startX: u,
                startY: p,
                currentX: u,
                currentY: p,
              }),
              (i.touchStartTime = g()))
            )
          );
        if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
          if (n.isVertical()) {
            if (
              (p < o.startY && n.translate <= n.maxTranslate()) ||
              (p > o.startY && n.translate >= n.minTranslate())
            )
              return (i.isTouched = !1), void (i.isMoved = !1);
          } else if (
            (u < o.startX && n.translate <= n.maxTranslate()) ||
            (u > o.startX && n.translate >= n.minTranslate())
          )
            return;
        if (
          i.isTouchEvent &&
          t.activeElement &&
          c.target === t.activeElement &&
          h(c.target).is(i.focusableElements)
        )
          return (i.isMoved = !0), void (n.allowClick = !1);
        if (
          (i.allowTouchCallbacks && n.emit("touchMove", c),
          c.targetTouches && c.targetTouches.length > 1)
        )
          return;
        (o.currentX = u), (o.currentY = p);
        const f = o.currentX - o.startX,
          m = o.currentY - o.startY;
        if (
          n.params.threshold &&
          Math.sqrt(f ** 2 + m ** 2) < n.params.threshold
        )
          return;
        if (void 0 === i.isScrolling) {
          let e;
          (n.isHorizontal() && o.currentY === o.startY) ||
          (n.isVertical() && o.currentX === o.startX)
            ? (i.isScrolling = !1)
            : f * f + m * m >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(m), Math.abs(f))) / Math.PI),
              (i.isScrolling = n.isHorizontal()
                ? e > r.touchAngle
                : 90 - e > r.touchAngle));
        }
        if (
          (i.isScrolling && n.emit("touchMoveOpposite", c),
          void 0 === i.startMoving &&
            ((o.currentX === o.startX && o.currentY === o.startY) ||
              (i.startMoving = !0)),
          i.isScrolling)
        )
          return void (i.isTouched = !1);
        if (!i.startMoving) return;
        (n.allowClick = !1),
          !r.cssMode && c.cancelable && c.preventDefault(),
          r.touchMoveStopPropagation && !r.nested && c.stopPropagation(),
          i.isMoved ||
            (r.loop && !r.cssMode && n.loopFix(),
            (i.startTranslate = n.getTranslate()),
            n.setTransition(0),
            n.animating &&
              n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
            (i.allowMomentumBounce = !1),
            !r.grabCursor ||
              (!0 !== n.allowSlideNext && !0 !== n.allowSlidePrev) ||
              n.setGrabCursor(!0),
            n.emit("sliderFirstMove", c)),
          n.emit("sliderMove", c),
          (i.isMoved = !0);
        let v = n.isHorizontal() ? f : m;
        (o.diff = v),
          (v *= r.touchRatio),
          a && (v = -v),
          (n.swipeDirection = v > 0 ? "prev" : "next"),
          (i.currentTranslate = v + i.startTranslate);
        let b = !0,
          w = r.resistanceRatio;
        if (
          (r.touchReleaseOnEdges && (w = 0),
          v > 0 && i.currentTranslate > n.minTranslate()
            ? ((b = !1),
              r.resistance &&
                (i.currentTranslate =
                  n.minTranslate() -
                  1 +
                  (-n.minTranslate() + i.startTranslate + v) ** w))
            : v < 0 &&
              i.currentTranslate < n.maxTranslate() &&
              ((b = !1),
              r.resistance &&
                (i.currentTranslate =
                  n.maxTranslate() +
                  1 -
                  (n.maxTranslate() - i.startTranslate - v) ** w)),
          b && (c.preventedByNestedSwiper = !0),
          !n.allowSlideNext &&
            "next" === n.swipeDirection &&
            i.currentTranslate < i.startTranslate &&
            (i.currentTranslate = i.startTranslate),
          !n.allowSlidePrev &&
            "prev" === n.swipeDirection &&
            i.currentTranslate > i.startTranslate &&
            (i.currentTranslate = i.startTranslate),
          n.allowSlidePrev ||
            n.allowSlideNext ||
            (i.currentTranslate = i.startTranslate),
          r.threshold > 0)
        ) {
          if (!(Math.abs(v) > r.threshold || i.allowThresholdMove))
            return void (i.currentTranslate = i.startTranslate);
          if (!i.allowThresholdMove)
            return (
              (i.allowThresholdMove = !0),
              (o.startX = o.currentX),
              (o.startY = o.currentY),
              (i.currentTranslate = i.startTranslate),
              void (o.diff = n.isHorizontal()
                ? o.currentX - o.startX
                : o.currentY - o.startY)
            );
        }
        r.followFinger &&
          !r.cssMode &&
          (((r.freeMode && r.freeMode.enabled && n.freeMode) ||
            r.watchSlidesProgress) &&
            (n.updateActiveIndex(), n.updateSlidesClasses()),
          n.params.freeMode &&
            r.freeMode.enabled &&
            n.freeMode &&
            n.freeMode.onTouchMove(),
          n.updateProgress(i.currentTranslate),
          n.setTranslate(i.currentTranslate));
      }
      function M(e) {
        const t = this,
          n = t.touchEventsData,
          {
            params: i,
            touches: s,
            rtlTranslate: r,
            slidesGrid: o,
            enabled: a,
          } = t;
        if (!a) return;
        let l = e;
        if (
          (l.originalEvent && (l = l.originalEvent),
          n.allowTouchCallbacks && t.emit("touchEnd", l),
          (n.allowTouchCallbacks = !1),
          !n.isTouched)
        )
          return (
            n.isMoved && i.grabCursor && t.setGrabCursor(!1),
            (n.isMoved = !1),
            void (n.startMoving = !1)
          );
        i.grabCursor &&
          n.isMoved &&
          n.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        const c = g(),
          d = c - n.touchStartTime;
        if (t.allowClick) {
          const e = l.path || (l.composedPath && l.composedPath());
          t.updateClickedSlide((e && e[0]) || l.target),
            t.emit("tap click", l),
            d < 300 &&
              c - n.lastClickTime < 300 &&
              t.emit("doubleTap doubleClick", l);
        }
        if (
          ((n.lastClickTime = g()),
          m(() => {
            t.destroyed || (t.allowClick = !0);
          }),
          !n.isTouched ||
            !n.isMoved ||
            !t.swipeDirection ||
            0 === s.diff ||
            n.currentTranslate === n.startTranslate)
        )
          return (
            (n.isTouched = !1), (n.isMoved = !1), void (n.startMoving = !1)
          );
        let u;
        if (
          ((n.isTouched = !1),
          (n.isMoved = !1),
          (n.startMoving = !1),
          (u = i.followFinger
            ? r
              ? t.translate
              : -t.translate
            : -n.currentTranslate),
          i.cssMode)
        )
          return;
        if (t.params.freeMode && i.freeMode.enabled)
          return void t.freeMode.onTouchEnd({ currentPos: u });
        let p = 0,
          f = t.slidesSizesGrid[0];
        for (
          let e = 0;
          e < o.length;
          e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
        ) {
          const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
          void 0 !== o[e + t]
            ? u >= o[e] && u < o[e + t] && ((p = e), (f = o[e + t] - o[e]))
            : u >= o[e] && ((p = e), (f = o[o.length - 1] - o[o.length - 2]));
        }
        const h = (u - o[p]) / f,
          v = p < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        if (d > i.longSwipesMs) {
          if (!i.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection &&
            (h >= i.longSwipesRatio ? t.slideTo(p + v) : t.slideTo(p)),
            "prev" === t.swipeDirection &&
              (h > 1 - i.longSwipesRatio ? t.slideTo(p + v) : t.slideTo(p));
        } else {
          if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
          !t.navigation ||
          (l.target !== t.navigation.nextEl && l.target !== t.navigation.prevEl)
            ? ("next" === t.swipeDirection && t.slideTo(p + v),
              "prev" === t.swipeDirection && t.slideTo(p))
            : l.target === t.navigation.nextEl
            ? t.slideTo(p + v)
            : t.slideTo(p);
        }
      }
      function L() {
        const e = this,
          { params: t, el: n } = e;
        if (n && 0 === n.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: i, allowSlidePrev: s, snapGrid: r } = e;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses(),
          ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
          e.isEnd &&
          !e.isBeginning &&
          !e.params.centeredSlides
            ? e.slideTo(e.slides.length - 1, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.run(),
          (e.allowSlidePrev = s),
          (e.allowSlideNext = i),
          e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
      }
      function I(e) {
        const t = this;
        t.enabled &&
          (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function D() {
        const e = this,
          { wrapperEl: t, rtlTranslate: n, enabled: i } = e;
        if (!i) return;
        let s;
        (e.previousTranslate = e.translate),
          e.isHorizontal()
            ? (e.translate = -t.scrollLeft)
            : (e.translate = -t.scrollTop),
          -0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        (s = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
          s !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
          e.emit("setTranslate", e.translate, !1);
      }
      let N = !1;
      function j() {}
      const z = (e, t) => {
        const n = s(),
          {
            params: i,
            touchEvents: r,
            el: o,
            wrapperEl: a,
            device: l,
            support: c,
          } = e,
          d = !!i.nested,
          u = "on" === t ? "addEventListener" : "removeEventListener",
          p = t;
        if (c.touch) {
          const t = !(
            "touchstart" !== r.start ||
            !c.passiveListener ||
            !i.passiveListeners
          ) && { passive: !0, capture: !1 };
          o[u](r.start, e.onTouchStart, t),
            o[u](
              r.move,
              e.onTouchMove,
              c.passiveListener ? { passive: !1, capture: d } : d
            ),
            o[u](r.end, e.onTouchEnd, t),
            r.cancel && o[u](r.cancel, e.onTouchEnd, t);
        } else
          o[u](r.start, e.onTouchStart, !1),
            n[u](r.move, e.onTouchMove, d),
            n[u](r.end, e.onTouchEnd, !1);
        (i.preventClicks || i.preventClicksPropagation) &&
          o[u]("click", e.onClick, !0),
          i.cssMode && a[u]("scroll", e.onScroll),
          i.updateOnWindowResize
            ? e[p](
                l.ios || l.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                L,
                !0
              )
            : e[p]("observerUpdate", L, !0);
      };
      var Z = {
        attachEvents: function () {
          const e = this,
            t = s(),
            { params: n, support: i } = e;
          (e.onTouchStart = P.bind(e)),
            (e.onTouchMove = $.bind(e)),
            (e.onTouchEnd = M.bind(e)),
            n.cssMode && (e.onScroll = D.bind(e)),
            (e.onClick = I.bind(e)),
            i.touch && !N && (t.addEventListener("touchstart", j), (N = !0)),
            z(e, "on");
        },
        detachEvents: function () {
          z(this, "off");
        },
      };
      const V = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var B = {
          addClasses: function () {
            const e = this,
              {
                classNames: t,
                params: n,
                rtl: i,
                $el: s,
                device: r,
                support: o,
              } = e,
              a = (function (e, t) {
                const n = [];
                return (
                  e.forEach((e) => {
                    "object" == typeof e
                      ? Object.keys(e).forEach((i) => {
                          e[i] && n.push(t + i);
                        })
                      : "string" == typeof e && n.push(t + e);
                  }),
                  n
                );
              })(
                [
                  "initialized",
                  n.direction,
                  { "pointer-events": !o.touch },
                  { "free-mode": e.params.freeMode && n.freeMode.enabled },
                  { autoheight: n.autoHeight },
                  { rtl: i },
                  { grid: n.grid && n.grid.rows > 1 },
                  {
                    "grid-column":
                      n.grid && n.grid.rows > 1 && "column" === n.grid.fill,
                  },
                  { android: r.android },
                  { ios: r.ios },
                  { "css-mode": n.cssMode },
                  { centered: n.cssMode && n.centeredSlides },
                ],
                n.containerModifierClass
              );
            t.push(...a),
              s.addClass([...t].join(" ")),
              e.emitContainerClasses();
          },
          removeClasses: function () {
            const { $el: e, classNames: t } = this;
            e.removeClass(t.join(" ")), this.emitContainerClasses();
          },
        },
        F = {
          init: !0,
          direction: "horizontal",
          touchEventsTarget: "wrapper",
          initialSlide: 0,
          speed: 300,
          cssMode: !1,
          updateOnWindowResize: !0,
          resizeObserver: !0,
          nested: !1,
          createElements: !1,
          enabled: !0,
          focusableElements:
            "input, select, option, textarea, button, video, label",
          width: null,
          height: null,
          preventInteractionOnTransition: !1,
          userAgent: null,
          url: null,
          edgeSwipeDetection: !1,
          edgeSwipeThreshold: 20,
          autoHeight: !1,
          setWrapperSize: !1,
          virtualTranslate: !1,
          effect: "slide",
          breakpoints: void 0,
          breakpointsBase: "window",
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerGroup: 1,
          slidesPerGroupSkip: 0,
          slidesPerGroupAuto: !1,
          centeredSlides: !1,
          centeredSlidesBounds: !1,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          normalizeSlideIndex: !0,
          centerInsufficientSlides: !1,
          watchOverflow: !0,
          roundLengths: !1,
          touchRatio: 1,
          touchAngle: 45,
          simulateTouch: !0,
          shortSwipes: !0,
          longSwipes: !0,
          longSwipesRatio: 0.5,
          longSwipesMs: 300,
          followFinger: !0,
          allowTouchMove: !0,
          threshold: 0,
          touchMoveStopPropagation: !1,
          touchStartPreventDefault: !0,
          touchStartForcePreventDefault: !1,
          touchReleaseOnEdges: !1,
          uniqueNavElements: !0,
          resistance: !0,
          resistanceRatio: 0.85,
          watchSlidesProgress: !1,
          grabCursor: !1,
          preventClicks: !0,
          preventClicksPropagation: !0,
          slideToClickedSlide: !1,
          preloadImages: !0,
          updateOnImagesReady: !0,
          loop: !1,
          loopAdditionalSlides: 0,
          loopedSlides: null,
          loopFillGroupWithBlank: !1,
          loopPreventsSlide: !0,
          rewind: !1,
          allowSlidePrev: !0,
          allowSlideNext: !0,
          swipeHandler: null,
          noSwiping: !0,
          noSwipingClass: "swiper-no-swiping",
          noSwipingSelector: null,
          passiveListeners: !0,
          containerModifierClass: "swiper-",
          slideClass: "swiper-slide",
          slideBlankClass: "swiper-slide-invisible-blank",
          slideActiveClass: "swiper-slide-active",
          slideDuplicateActiveClass: "swiper-slide-duplicate-active",
          slideVisibleClass: "swiper-slide-visible",
          slideDuplicateClass: "swiper-slide-duplicate",
          slideNextClass: "swiper-slide-next",
          slideDuplicateNextClass: "swiper-slide-duplicate-next",
          slidePrevClass: "swiper-slide-prev",
          slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
          wrapperClass: "swiper-wrapper",
          runCallbacksOnInit: !0,
          _emitClasses: !1,
        };
      function G(e, t) {
        return function (n = {}) {
          const i = Object.keys(n)[0],
            s = n[i];
          "object" == typeof s && null !== s
            ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
                !0 === e[i] &&
                (e[i] = { auto: !0 }),
              i in e && "enabled" in s
                ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                  "object" != typeof e[i] ||
                    "enabled" in e[i] ||
                    (e[i].enabled = !0),
                  e[i] || (e[i] = { enabled: !1 }),
                  b(t, n))
                : b(t, n))
            : b(t, n);
        };
      }
      const H = {
          eventsEmitter: S,
          update: _,
          translate: {
            getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
              const {
                params: t,
                rtlTranslate: n,
                translate: i,
                $wrapperEl: s,
              } = this;
              if (t.virtualTranslate) return n ? -i : i;
              if (t.cssMode) return i;
              let r = (function (e, t = "x") {
                const n = o();
                let i, s, r;
                const a = (function (e) {
                  const t = o();
                  let n;
                  return (
                    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
                    !n && e.currentStyle && (n = e.currentStyle),
                    n || (n = e.style),
                    n
                  );
                })(e);
                return (
                  n.WebKitCSSMatrix
                    ? ((s = a.transform || a.webkitTransform),
                      s.split(",").length > 6 &&
                        (s = s
                          .split(", ")
                          .map((e) => e.replace(",", "."))
                          .join(", ")),
                      (r = new n.WebKitCSSMatrix("none" === s ? "" : s)))
                    : ((r =
                        a.MozTransform ||
                        a.OTransform ||
                        a.MsTransform ||
                        a.msTransform ||
                        a.transform ||
                        a
                          .getPropertyValue("transform")
                          .replace("translate(", "matrix(1, 0, 0, 1,")),
                      (i = r.toString().split(","))),
                  "x" === t &&
                    (s = n.WebKitCSSMatrix
                      ? r.m41
                      : 16 === i.length
                      ? parseFloat(i[12])
                      : parseFloat(i[4])),
                  "y" === t &&
                    (s = n.WebKitCSSMatrix
                      ? r.m42
                      : 16 === i.length
                      ? parseFloat(i[13])
                      : parseFloat(i[5])),
                  s || 0
                );
              })(s[0], e);
              return n && (r = -r), r || 0;
            },
            setTranslate: function (e, t) {
              const n = this,
                {
                  rtlTranslate: i,
                  params: s,
                  $wrapperEl: r,
                  wrapperEl: o,
                  progress: a,
                } = n;
              let l,
                c = 0,
                d = 0;
              n.isHorizontal() ? (c = i ? -e : e) : (d = e),
                s.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
                s.cssMode
                  ? (o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                      n.isHorizontal() ? -c : -d)
                  : s.virtualTranslate ||
                    r.transform(`translate3d(${c}px, ${d}px, 0px)`),
                (n.previousTranslate = n.translate),
                (n.translate = n.isHorizontal() ? c : d);
              const u = n.maxTranslate() - n.minTranslate();
              (l = 0 === u ? 0 : (e - n.minTranslate()) / u),
                l !== a && n.updateProgress(e),
                n.emit("setTranslate", n.translate, t);
            },
            minTranslate: function () {
              return -this.snapGrid[0];
            },
            maxTranslate: function () {
              return -this.snapGrid[this.snapGrid.length - 1];
            },
            translateTo: function (
              e = 0,
              t = this.params.speed,
              n = !0,
              i = !0,
              s
            ) {
              const r = this,
                { params: o, wrapperEl: a } = r;
              if (r.animating && o.preventInteractionOnTransition) return !1;
              const l = r.minTranslate(),
                c = r.maxTranslate();
              let d;
              if (
                ((d = i && e > l ? l : i && e < c ? c : e),
                r.updateProgress(d),
                o.cssMode)
              ) {
                const e = r.isHorizontal();
                if (0 === t) a[e ? "scrollLeft" : "scrollTop"] = -d;
                else {
                  if (!r.support.smoothScroll)
                    return (
                      y({
                        swiper: r,
                        targetPosition: -d,
                        side: e ? "left" : "top",
                      }),
                      !0
                    );
                  a.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
                }
                return !0;
              }
              return (
                0 === t
                  ? (r.setTransition(0),
                    r.setTranslate(d),
                    n &&
                      (r.emit("beforeTransitionStart", t, s),
                      r.emit("transitionEnd")))
                  : (r.setTransition(t),
                    r.setTranslate(d),
                    n &&
                      (r.emit("beforeTransitionStart", t, s),
                      r.emit("transitionStart")),
                    r.animating ||
                      ((r.animating = !0),
                      r.onTranslateToWrapperTransitionEnd ||
                        (r.onTranslateToWrapperTransitionEnd = function (e) {
                          r &&
                            !r.destroyed &&
                            e.target === this &&
                            (r.$wrapperEl[0].removeEventListener(
                              "transitionend",
                              r.onTranslateToWrapperTransitionEnd
                            ),
                            r.$wrapperEl[0].removeEventListener(
                              "webkitTransitionEnd",
                              r.onTranslateToWrapperTransitionEnd
                            ),
                            (r.onTranslateToWrapperTransitionEnd = null),
                            delete r.onTranslateToWrapperTransitionEnd,
                            n && r.emit("transitionEnd"));
                        }),
                      r.$wrapperEl[0].addEventListener(
                        "transitionend",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      r.$wrapperEl[0].addEventListener(
                        "webkitTransitionEnd",
                        r.onTranslateToWrapperTransitionEnd
                      ))),
                !0
              );
            },
          },
          transition: {
            setTransition: function (e, t) {
              const n = this;
              n.params.cssMode || n.$wrapperEl.transition(e),
                n.emit("setTransition", e, t);
            },
            transitionStart: function (e = !0, t) {
              const n = this,
                { params: i } = n;
              i.cssMode ||
                (i.autoHeight && n.updateAutoHeight(),
                k({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
            },
            transitionEnd: function (e = !0, t) {
              const n = this,
                { params: i } = n;
              (n.animating = !1),
                i.cssMode ||
                  (n.setTransition(0),
                  k({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
            },
          },
          slide: A,
          loop: O,
          grabCursor: {
            setGrabCursor: function (e) {
              const t = this;
              if (
                t.support.touch ||
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
                return;
              const n =
                "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              (n.style.cursor = "move"),
                (n.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
                (n.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
                (n.style.cursor = e ? "grabbing" : "grab");
            },
            unsetGrabCursor: function () {
              const e = this;
              e.support.touch ||
                (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = "");
            },
          },
          events: Z,
          breakpoints: {
            setBreakpoint: function () {
              const e = this,
                {
                  activeIndex: t,
                  initialized: n,
                  loopedSlides: i = 0,
                  params: s,
                  $el: r,
                } = e,
                o = s.breakpoints;
              if (!o || (o && 0 === Object.keys(o).length)) return;
              const a = e.getBreakpoint(o, e.params.breakpointsBase, e.el);
              if (!a || e.currentBreakpoint === a) return;
              const l = (a in o ? o[a] : void 0) || e.originalParams,
                c = V(e, s),
                d = V(e, l),
                u = s.enabled;
              c && !d
                ? (r.removeClass(
                    `${s.containerModifierClass}grid ${s.containerModifierClass}grid-column`
                  ),
                  e.emitContainerClasses())
                : !c &&
                  d &&
                  (r.addClass(`${s.containerModifierClass}grid`),
                  ((l.grid.fill && "column" === l.grid.fill) ||
                    (!l.grid.fill && "column" === s.grid.fill)) &&
                    r.addClass(`${s.containerModifierClass}grid-column`),
                  e.emitContainerClasses());
              const p = l.direction && l.direction !== s.direction,
                f = s.loop && (l.slidesPerView !== s.slidesPerView || p);
              p && n && e.changeDirection(), b(e.params, l);
              const h = e.params.enabled;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev,
              }),
                u && !h ? e.disable() : !u && h && e.enable(),
                (e.currentBreakpoint = a),
                e.emit("_beforeBreakpoint", l),
                f &&
                  n &&
                  (e.loopDestroy(),
                  e.loopCreate(),
                  e.updateSlides(),
                  e.slideTo(t - i + e.loopedSlides, 0, !1)),
                e.emit("breakpoint", l);
            },
            getBreakpoint: function (e, t = "window", n) {
              if (!e || ("container" === t && !n)) return;
              let i = !1;
              const s = o(),
                r = "window" === t ? s.innerHeight : n.clientHeight,
                a = Object.keys(e).map((e) => {
                  if ("string" == typeof e && 0 === e.indexOf("@")) {
                    const t = parseFloat(e.substr(1));
                    return { value: r * t, point: e };
                  }
                  return { value: e, point: e };
                });
              a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
              for (let e = 0; e < a.length; e += 1) {
                const { point: r, value: o } = a[e];
                "window" === t
                  ? s.matchMedia(`(min-width: ${o}px)`).matches && (i = r)
                  : o <= n.clientWidth && (i = r);
              }
              return i || "max";
            },
          },
          checkOverflow: {
            checkOverflow: function () {
              const e = this,
                { isLocked: t, params: n } = e,
                { slidesOffsetBefore: i } = n;
              if (i) {
                const t = e.slides.length - 1,
                  n = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                e.isLocked = e.size > n;
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === n.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === n.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            },
          },
          classes: B,
          images: {
            loadImage: function (e, t, n, i, s, r) {
              const a = o();
              let l;
              function c() {
                r && r();
              }
              h(e).parent("picture")[0] || (e.complete && s)
                ? c()
                : t
                ? ((l = new a.Image()),
                  (l.onload = c),
                  (l.onerror = c),
                  i && (l.sizes = i),
                  n && (l.srcset = n),
                  t && (l.src = t))
                : c();
            },
            preloadImages: function () {
              const e = this;
              function t() {
                null != e &&
                  e &&
                  !e.destroyed &&
                  (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                  e.imagesLoaded === e.imagesToLoad.length &&
                    (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")));
              }
              e.imagesToLoad = e.$el.find("img");
              for (let n = 0; n < e.imagesToLoad.length; n += 1) {
                const i = e.imagesToLoad[n];
                e.loadImage(
                  i,
                  i.currentSrc || i.getAttribute("src"),
                  i.srcset || i.getAttribute("srcset"),
                  i.sizes || i.getAttribute("sizes"),
                  !0,
                  t
                );
              }
            },
          },
        },
        R = {};
      class q {
        constructor(...e) {
          let t, n;
          if (
            (1 === e.length &&
            e[0].constructor &&
            "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
              ? (n = e[0])
              : ([t, n] = e),
            n || (n = {}),
            (n = b({}, n)),
            t && !n.el && (n.el = t),
            n.el && h(n.el).length > 1)
          ) {
            const e = [];
            return (
              h(n.el).each((t) => {
                const i = b({}, n, { el: t });
                e.push(new q(i));
              }),
              e
            );
          }
          const i = this;
          (i.__swiper__ = !0),
            (i.support = T()),
            (i.device = (function (e = {}) {
              return (
                C ||
                  (C = (function ({ userAgent: e } = {}) {
                    const t = T(),
                      n = o(),
                      i = n.navigator.platform,
                      s = e || n.navigator.userAgent,
                      r = { ios: !1, android: !1 },
                      a = n.screen.width,
                      l = n.screen.height,
                      c = s.match(/(Android);?[\s\/]+([\d.]+)?/);
                    let d = s.match(/(iPad).*OS\s([\d_]+)/);
                    const u = s.match(/(iPod)(.*OS\s([\d_]+))?/),
                      p = !d && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                      f = "Win32" === i;
                    let h = "MacIntel" === i;
                    return (
                      !d &&
                        h &&
                        t.touch &&
                        [
                          "1024x1366",
                          "1366x1024",
                          "834x1194",
                          "1194x834",
                          "834x1112",
                          "1112x834",
                          "768x1024",
                          "1024x768",
                          "820x1180",
                          "1180x820",
                          "810x1080",
                          "1080x810",
                        ].indexOf(`${a}x${l}`) >= 0 &&
                        ((d = s.match(/(Version)\/([\d.]+)/)),
                        d || (d = [0, 1, "13_0_0"]),
                        (h = !1)),
                      c && !f && ((r.os = "android"), (r.android = !0)),
                      (d || p || u) && ((r.os = "ios"), (r.ios = !0)),
                      r
                    );
                  })(e)),
                C
              );
            })({ userAgent: n.userAgent })),
            (i.browser =
              (E ||
                (E = (function () {
                  const e = o();
                  return {
                    isSafari: (function () {
                      const t = e.navigator.userAgent.toLowerCase();
                      return (
                        t.indexOf("safari") >= 0 &&
                        t.indexOf("chrome") < 0 &&
                        t.indexOf("android") < 0
                      );
                    })(),
                    isWebView:
                      /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                        e.navigator.userAgent
                      ),
                  };
                })()),
              E)),
            (i.eventsListeners = {}),
            (i.eventsAnyListeners = []),
            (i.modules = [...i.__modules__]),
            n.modules &&
              Array.isArray(n.modules) &&
              i.modules.push(...n.modules);
          const s = {};
          i.modules.forEach((e) => {
            e({
              swiper: i,
              extendParams: G(n, s),
              on: i.on.bind(i),
              once: i.once.bind(i),
              off: i.off.bind(i),
              emit: i.emit.bind(i),
            });
          });
          const r = b({}, F, s);
          return (
            (i.params = b({}, r, R, n)),
            (i.originalParams = b({}, i.params)),
            (i.passedParams = b({}, n)),
            i.params &&
              i.params.on &&
              Object.keys(i.params.on).forEach((e) => {
                i.on(e, i.params.on[e]);
              }),
            i.params && i.params.onAny && i.onAny(i.params.onAny),
            (i.$ = h),
            Object.assign(i, {
              enabled: i.params.enabled,
              el: t,
              classNames: [],
              slides: h(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal() {
                return "horizontal" === i.params.direction;
              },
              isVertical() {
                return "vertical" === i.params.direction;
              },
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: i.params.allowSlideNext,
              allowSlidePrev: i.params.allowSlidePrev,
              touchEvents: (function () {
                const e = [
                    "touchstart",
                    "touchmove",
                    "touchend",
                    "touchcancel",
                  ],
                  t = ["pointerdown", "pointermove", "pointerup"];
                return (
                  (i.touchEventsTouch = {
                    start: e[0],
                    move: e[1],
                    end: e[2],
                    cancel: e[3],
                  }),
                  (i.touchEventsDesktop = {
                    start: t[0],
                    move: t[1],
                    end: t[2],
                  }),
                  i.support.touch || !i.params.simulateTouch
                    ? i.touchEventsTouch
                    : i.touchEventsDesktop
                );
              })(),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: i.params.focusableElements,
                lastClickTime: g(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: i.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            i.emit("_swiper"),
            i.params.init && i.init(),
            i
          );
        }
        enable() {
          const e = this;
          e.enabled ||
            ((e.enabled = !0),
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"));
        }
        disable() {
          const e = this;
          e.enabled &&
            ((e.enabled = !1),
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"));
        }
        setProgress(e, t) {
          const n = this;
          e = Math.min(Math.max(e, 0), 1);
          const i = n.minTranslate(),
            s = (n.maxTranslate() - i) * e + i;
          n.translateTo(s, void 0 === t ? 0 : t),
            n.updateActiveIndex(),
            n.updateSlidesClasses();
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className
            .split(" ")
            .filter(
              (t) =>
                0 === t.indexOf("swiper") ||
                0 === t.indexOf(e.params.containerModifierClass)
            );
          e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
          const t = this;
          return e.className
            .split(" ")
            .filter(
              (e) =>
                0 === e.indexOf("swiper-slide") ||
                0 === e.indexOf(t.params.slideClass)
            )
            .join(" ");
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.each((n) => {
            const i = e.getSlideClasses(n);
            t.push({ slideEl: n, classNames: i }), e.emit("_slideClass", n, i);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e = "current", t = !1) {
          const {
            params: n,
            slides: i,
            slidesGrid: s,
            slidesSizesGrid: r,
            size: o,
            activeIndex: a,
          } = this;
          let l = 1;
          if (n.centeredSlides) {
            let e,
              t = i[a].swiperSlideSize;
            for (let n = a + 1; n < i.length; n += 1)
              i[n] &&
                !e &&
                ((t += i[n].swiperSlideSize), (l += 1), t > o && (e = !0));
            for (let n = a - 1; n >= 0; n -= 1)
              i[n] &&
                !e &&
                ((t += i[n].swiperSlideSize), (l += 1), t > o && (e = !0));
          } else if ("current" === e)
            for (let e = a + 1; e < i.length; e += 1)
              (t ? s[e] + r[e] - s[a] < o : s[e] - s[a] < o) && (l += 1);
          else for (let e = a - 1; e >= 0; e -= 1) s[a] - s[e] < o && (l += 1);
          return l;
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const { snapGrid: t, params: n } = e;
          function i() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              n = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses();
          }
          let s;
          n.breakpoints && e.setBreakpoint(),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode && e.params.freeMode.enabled
              ? (i(), e.params.autoHeight && e.updateAutoHeight())
              : ((s =
                  ("auto" === e.params.slidesPerView ||
                    e.params.slidesPerView > 1) &&
                  e.isEnd &&
                  !e.params.centeredSlides
                    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                    : e.slideTo(e.activeIndex, 0, !1, !0)),
                s || i()),
            n.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update");
        }
        changeDirection(e, t = !0) {
          const n = this,
            i = n.params.direction;
          return (
            e || (e = "horizontal" === i ? "vertical" : "horizontal"),
            e === i ||
              ("horizontal" !== e && "vertical" !== e) ||
              (n.$el
                .removeClass(`${n.params.containerModifierClass}${i}`)
                .addClass(`${n.params.containerModifierClass}${e}`),
              n.emitContainerClasses(),
              (n.params.direction = e),
              n.slides.each((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              n.emit("changeDirection"),
              t && n.update()),
            n
          );
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          const n = h(e || t.params.el);
          if (!(e = n[0])) return !1;
          e.swiper = t;
          const i = () =>
            `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
          let r = (() => {
            if (e && e.shadowRoot && e.shadowRoot.querySelector) {
              const t = h(e.shadowRoot.querySelector(i()));
              return (t.children = (e) => n.children(e)), t;
            }
            return n.children(i());
          })();
          if (0 === r.length && t.params.createElements) {
            const e = s().createElement("div");
            (r = h(e)),
              (e.className = t.params.wrapperClass),
              n.append(e),
              n.children(`.${t.params.slideClass}`).each((e) => {
                r.append(e);
              });
          }
          return (
            Object.assign(t, {
              $el: n,
              el: e,
              $wrapperEl: r,
              wrapperEl: r[0],
              mounted: !0,
              rtl:
                "rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === e.dir.toLowerCase() || "rtl" === n.css("direction")),
              wrongRTL: "-webkit-box" === r.css("display"),
            }),
            !0
          );
        }
        init(e) {
          const t = this;
          return (
            t.initialized ||
              !1 === t.mount(e) ||
              (t.emit("beforeInit"),
              t.params.breakpoints && t.setBreakpoint(),
              t.addClasses(),
              t.params.loop && t.loopCreate(),
              t.updateSize(),
              t.updateSlides(),
              t.params.watchOverflow && t.checkOverflow(),
              t.params.grabCursor && t.enabled && t.setGrabCursor(),
              t.params.preloadImages && t.preloadImages(),
              t.params.loop
                ? t.slideTo(
                    t.params.initialSlide + t.loopedSlides,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  )
                : t.slideTo(
                    t.params.initialSlide,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  ),
              t.attachEvents(),
              (t.initialized = !0),
              t.emit("init"),
              t.emit("afterInit")),
            t
          );
        }
        destroy(e = !0, t = !0) {
          const n = this,
            { params: i, $el: s, $wrapperEl: r, slides: o } = n;
          return (
            void 0 === n.params ||
              n.destroyed ||
              (n.emit("beforeDestroy"),
              (n.initialized = !1),
              n.detachEvents(),
              i.loop && n.loopDestroy(),
              t &&
                (n.removeClasses(),
                s.removeAttr("style"),
                r.removeAttr("style"),
                o &&
                  o.length &&
                  o
                    .removeClass(
                      [
                        i.slideVisibleClass,
                        i.slideActiveClass,
                        i.slideNextClass,
                        i.slidePrevClass,
                      ].join(" ")
                    )
                    .removeAttr("style")
                    .removeAttr("data-swiper-slide-index")),
              n.emit("destroy"),
              Object.keys(n.eventsListeners).forEach((e) => {
                n.off(e);
              }),
              !1 !== e &&
                ((n.$el[0].swiper = null),
                (function (e) {
                  const t = e;
                  Object.keys(t).forEach((e) => {
                    try {
                      t[e] = null;
                    } catch (e) {}
                    try {
                      delete t[e];
                    } catch (e) {}
                  });
                })(n)),
              (n.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          b(R, e);
        }
        static get extendedDefaults() {
          return R;
        }
        static get defaults() {
          return F;
        }
        static installModule(e) {
          q.prototype.__modules__ || (q.prototype.__modules__ = []);
          const t = q.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
        }
        static use(e) {
          return Array.isArray(e)
            ? (e.forEach((e) => q.installModule(e)), q)
            : (q.installModule(e), q);
        }
      }
      Object.keys(H).forEach((e) => {
        Object.keys(H[e]).forEach((t) => {
          q.prototype[t] = H[e][t];
        });
      }),
        q.use([
          function ({ swiper: e, on: t, emit: n }) {
            const i = o();
            let s = null;
            const r = () => {
                e &&
                  !e.destroyed &&
                  e.initialized &&
                  (n("beforeResize"), n("resize"));
              },
              a = () => {
                e && !e.destroyed && e.initialized && n("orientationchange");
              };
            t("init", () => {
              e.params.resizeObserver && void 0 !== i.ResizeObserver
                ? e &&
                  !e.destroyed &&
                  e.initialized &&
                  ((s = new ResizeObserver((t) => {
                    const { width: n, height: i } = e;
                    let s = n,
                      o = i;
                    t.forEach(
                      ({ contentBoxSize: t, contentRect: n, target: i }) => {
                        (i && i !== e.el) ||
                          ((s = n ? n.width : (t[0] || t).inlineSize),
                          (o = n ? n.height : (t[0] || t).blockSize));
                      }
                    ),
                      (s === n && o === i) || r();
                  })),
                  s.observe(e.el))
                : (i.addEventListener("resize", r),
                  i.addEventListener("orientationchange", a));
            }),
              t("destroy", () => {
                s && s.unobserve && e.el && (s.unobserve(e.el), (s = null)),
                  i.removeEventListener("resize", r),
                  i.removeEventListener("orientationchange", a);
              });
          },
          function ({ swiper: e, extendParams: t, on: n, emit: i }) {
            const s = [],
              r = o(),
              a = (e, t = {}) => {
                const n = new (r.MutationObserver || r.WebkitMutationObserver)(
                  (e) => {
                    if (1 === e.length) return void i("observerUpdate", e[0]);
                    const t = function () {
                      i("observerUpdate", e[0]);
                    };
                    r.requestAnimationFrame
                      ? r.requestAnimationFrame(t)
                      : r.setTimeout(t, 0);
                  }
                );
                n.observe(e, {
                  attributes: void 0 === t.attributes || t.attributes,
                  childList: void 0 === t.childList || t.childList,
                  characterData: void 0 === t.characterData || t.characterData,
                }),
                  s.push(n);
              };
            t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              n("init", () => {
                if (e.params.observer) {
                  if (e.params.observeParents) {
                    const t = e.$el.parents();
                    for (let e = 0; e < t.length; e += 1) a(t[e]);
                  }
                  a(e.$el[0], { childList: e.params.observeSlideChildren }),
                    a(e.$wrapperEl[0], { attributes: !1 });
                }
              }),
              n("destroy", () => {
                s.forEach((e) => {
                  e.disconnect();
                }),
                  s.splice(0, s.length);
              });
          },
        ]);
      var W = q;
      function Y(e, t, n, i) {
        const r = s();
        return (
          e.params.createElements &&
            Object.keys(i).forEach((s) => {
              if (!n[s] && !0 === n.auto) {
                let o = e.$el.children(`.${i[s]}`)[0];
                o ||
                  ((o = r.createElement("div")),
                  (o.className = i[s]),
                  e.$el.append(o)),
                  (n[s] = o),
                  (t[s] = o);
              }
            }),
          n
        );
      }
      function U({ swiper: e, extendParams: t, on: n, emit: i }) {
        function s(t) {
          let n;
          return (
            t &&
              ((n = h(t)),
              e.params.uniqueNavElements &&
                "string" == typeof t &&
                n.length > 1 &&
                1 === e.$el.find(t).length &&
                (n = e.$el.find(t))),
            n
          );
        }
        function r(t, n) {
          const i = e.params.navigation;
          t &&
            t.length > 0 &&
            (t[n ? "addClass" : "removeClass"](i.disabledClass),
            t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = n),
            e.params.watchOverflow &&
              e.enabled &&
              t[e.isLocked ? "addClass" : "removeClass"](i.lockClass));
        }
        function o() {
          if (e.params.loop) return;
          const { $nextEl: t, $prevEl: n } = e.navigation;
          r(n, e.isBeginning && !e.params.rewind),
            r(t, e.isEnd && !e.params.rewind);
        }
        function a(t) {
          t.preventDefault(),
            (!e.isBeginning || e.params.loop || e.params.rewind) &&
              e.slidePrev();
        }
        function l(t) {
          t.preventDefault(),
            (!e.isEnd || e.params.loop || e.params.rewind) && e.slideNext();
        }
        function c() {
          const t = e.params.navigation;
          if (
            ((e.params.navigation = Y(
              e,
              e.originalParams.navigation,
              e.params.navigation,
              { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
            )),
            !t.nextEl && !t.prevEl)
          )
            return;
          const n = s(t.nextEl),
            i = s(t.prevEl);
          n && n.length > 0 && n.on("click", l),
            i && i.length > 0 && i.on("click", a),
            Object.assign(e.navigation, {
              $nextEl: n,
              nextEl: n && n[0],
              $prevEl: i,
              prevEl: i && i[0],
            }),
            e.enabled ||
              (n && n.addClass(t.lockClass), i && i.addClass(t.lockClass));
        }
        function d() {
          const { $nextEl: t, $prevEl: n } = e.navigation;
          t &&
            t.length &&
            (t.off("click", l),
            t.removeClass(e.params.navigation.disabledClass)),
            n &&
              n.length &&
              (n.off("click", a),
              n.removeClass(e.params.navigation.disabledClass));
        }
        t({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
          },
        }),
          (e.navigation = {
            nextEl: null,
            $nextEl: null,
            prevEl: null,
            $prevEl: null,
          }),
          n("init", () => {
            c(), o();
          }),
          n("toEdge fromEdge lock unlock", () => {
            o();
          }),
          n("destroy", () => {
            d();
          }),
          n("enable disable", () => {
            const { $nextEl: t, $prevEl: n } = e.navigation;
            t &&
              t[e.enabled ? "removeClass" : "addClass"](
                e.params.navigation.lockClass
              ),
              n &&
                n[e.enabled ? "removeClass" : "addClass"](
                  e.params.navigation.lockClass
                );
          }),
          n("click", (t, n) => {
            const { $nextEl: s, $prevEl: r } = e.navigation,
              o = n.target;
            if (e.params.navigation.hideOnClick && !h(o).is(r) && !h(o).is(s)) {
              if (
                e.pagination &&
                e.params.pagination &&
                e.params.pagination.clickable &&
                (e.pagination.el === o || e.pagination.el.contains(o))
              )
                return;
              let t;
              s
                ? (t = s.hasClass(e.params.navigation.hiddenClass))
                : r && (t = r.hasClass(e.params.navigation.hiddenClass)),
                i(!0 === t ? "navigationShow" : "navigationHide"),
                s && s.toggleClass(e.params.navigation.hiddenClass),
                r && r.toggleClass(e.params.navigation.hiddenClass);
            }
          }),
          Object.assign(e.navigation, { update: o, init: c, destroy: d });
      }
      function X(e = "") {
        return `.${e
          .trim()
          .replace(/([\.:!\/])/g, "\\$1")
          .replace(/ /g, ".")}`;
      }
      function K({ swiper: e, extendParams: t, on: n, emit: i }) {
        const s = "swiper-pagination";
        let r;
        t({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: `${s}-bullet`,
            bulletActiveClass: `${s}-bullet-active`,
            modifierClass: `${s}-`,
            currentClass: `${s}-current`,
            totalClass: `${s}-total`,
            hiddenClass: `${s}-hidden`,
            progressbarFillClass: `${s}-progressbar-fill`,
            progressbarOppositeClass: `${s}-progressbar-opposite`,
            clickableClass: `${s}-clickable`,
            lockClass: `${s}-lock`,
            horizontalClass: `${s}-horizontal`,
            verticalClass: `${s}-vertical`,
          },
        }),
          (e.pagination = { el: null, $el: null, bullets: [] });
        let o = 0;
        function a() {
          return (
            !e.params.pagination.el ||
            !e.pagination.el ||
            !e.pagination.$el ||
            0 === e.pagination.$el.length
          );
        }
        function l(t, n) {
          const { bulletActiveClass: i } = e.params.pagination;
          t[n]().addClass(`${i}-${n}`)[n]().addClass(`${i}-${n}-${n}`);
        }
        function c() {
          const t = e.rtl,
            n = e.params.pagination;
          if (a()) return;
          const s =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            c = e.pagination.$el;
          let d;
          const u = e.params.loop
            ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
            : e.snapGrid.length;
          if (
            (e.params.loop
              ? ((d = Math.ceil(
                  (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
                )),
                d > s - 1 - 2 * e.loopedSlides && (d -= s - 2 * e.loopedSlides),
                d > u - 1 && (d -= u),
                d < 0 && "bullets" !== e.params.paginationType && (d = u + d))
              : (d = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
            "bullets" === n.type &&
              e.pagination.bullets &&
              e.pagination.bullets.length > 0)
          ) {
            const i = e.pagination.bullets;
            let s, a, u;
            if (
              (n.dynamicBullets &&
                ((r = i
                  .eq(0)
                  [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                c.css(
                  e.isHorizontal() ? "width" : "height",
                  r * (n.dynamicMainBullets + 4) + "px"
                ),
                n.dynamicMainBullets > 1 &&
                  void 0 !== e.previousIndex &&
                  ((o += d - (e.previousIndex - e.loopedSlides || 0)),
                  o > n.dynamicMainBullets - 1
                    ? (o = n.dynamicMainBullets - 1)
                    : o < 0 && (o = 0)),
                (s = Math.max(d - o, 0)),
                (a = s + (Math.min(i.length, n.dynamicMainBullets) - 1)),
                (u = (a + s) / 2)),
              i.removeClass(
                ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                  .map((e) => `${n.bulletActiveClass}${e}`)
                  .join(" ")
              ),
              c.length > 1)
            )
              i.each((e) => {
                const t = h(e),
                  i = t.index();
                i === d && t.addClass(n.bulletActiveClass),
                  n.dynamicBullets &&
                    (i >= s &&
                      i <= a &&
                      t.addClass(`${n.bulletActiveClass}-main`),
                    i === s && l(t, "prev"),
                    i === a && l(t, "next"));
              });
            else {
              const t = i.eq(d),
                r = t.index();
              if ((t.addClass(n.bulletActiveClass), n.dynamicBullets)) {
                const t = i.eq(s),
                  o = i.eq(a);
                for (let e = s; e <= a; e += 1)
                  i.eq(e).addClass(`${n.bulletActiveClass}-main`);
                if (e.params.loop)
                  if (r >= i.length) {
                    for (let e = n.dynamicMainBullets; e >= 0; e -= 1)
                      i.eq(i.length - e).addClass(
                        `${n.bulletActiveClass}-main`
                      );
                    i.eq(i.length - n.dynamicMainBullets - 1).addClass(
                      `${n.bulletActiveClass}-prev`
                    );
                  } else l(t, "prev"), l(o, "next");
                else l(t, "prev"), l(o, "next");
              }
            }
            if (n.dynamicBullets) {
              const s = Math.min(i.length, n.dynamicMainBullets + 4),
                o = (r * s - r) / 2 - u * r,
                a = t ? "right" : "left";
              i.css(e.isHorizontal() ? a : "top", `${o}px`);
            }
          }
          if (
            ("fraction" === n.type &&
              (c.find(X(n.currentClass)).text(n.formatFractionCurrent(d + 1)),
              c.find(X(n.totalClass)).text(n.formatFractionTotal(u))),
            "progressbar" === n.type)
          ) {
            let t;
            t = n.progressbarOpposite
              ? e.isHorizontal()
                ? "vertical"
                : "horizontal"
              : e.isHorizontal()
              ? "horizontal"
              : "vertical";
            const i = (d + 1) / u;
            let s = 1,
              r = 1;
            "horizontal" === t ? (s = i) : (r = i),
              c
                .find(X(n.progressbarFillClass))
                .transform(`translate3d(0,0,0) scaleX(${s}) scaleY(${r})`)
                .transition(e.params.speed);
          }
          "custom" === n.type && n.renderCustom
            ? (c.html(n.renderCustom(e, d + 1, u)), i("paginationRender", c[0]))
            : i("paginationUpdate", c[0]),
            e.params.watchOverflow &&
              e.enabled &&
              c[e.isLocked ? "addClass" : "removeClass"](n.lockClass);
        }
        function d() {
          const t = e.params.pagination;
          if (a()) return;
          const n =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            s = e.pagination.$el;
          let r = "";
          if ("bullets" === t.type) {
            let i = e.params.loop
              ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup)
              : e.snapGrid.length;
            e.params.freeMode &&
              e.params.freeMode.enabled &&
              !e.params.loop &&
              i > n &&
              (i = n);
            for (let n = 0; n < i; n += 1)
              t.renderBullet
                ? (r += t.renderBullet.call(e, n, t.bulletClass))
                : (r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
            s.html(r), (e.pagination.bullets = s.find(X(t.bulletClass)));
          }
          "fraction" === t.type &&
            ((r = t.renderFraction
              ? t.renderFraction.call(e, t.currentClass, t.totalClass)
              : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
            s.html(r)),
            "progressbar" === t.type &&
              ((r = t.renderProgressbar
                ? t.renderProgressbar.call(e, t.progressbarFillClass)
                : `<span class="${t.progressbarFillClass}"></span>`),
              s.html(r)),
            "custom" !== t.type && i("paginationRender", e.pagination.$el[0]);
        }
        function u() {
          e.params.pagination = Y(
            e,
            e.originalParams.pagination,
            e.params.pagination,
            { el: "swiper-pagination" }
          );
          const t = e.params.pagination;
          if (!t.el) return;
          let n = h(t.el);
          0 !== n.length &&
            (e.params.uniqueNavElements &&
              "string" == typeof t.el &&
              n.length > 1 &&
              ((n = e.$el.find(t.el)),
              n.length > 1 &&
                (n = n.filter((t) => h(t).parents(".swiper")[0] === e.el))),
            "bullets" === t.type && t.clickable && n.addClass(t.clickableClass),
            n.addClass(t.modifierClass + t.type),
            n.addClass(t.modifierClass + e.params.direction),
            "bullets" === t.type &&
              t.dynamicBullets &&
              (n.addClass(`${t.modifierClass}${t.type}-dynamic`),
              (o = 0),
              t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
            "progressbar" === t.type &&
              t.progressbarOpposite &&
              n.addClass(t.progressbarOppositeClass),
            t.clickable &&
              n.on("click", X(t.bulletClass), function (t) {
                t.preventDefault();
                let n = h(this).index() * e.params.slidesPerGroup;
                e.params.loop && (n += e.loopedSlides), e.slideTo(n);
              }),
            Object.assign(e.pagination, { $el: n, el: n[0] }),
            e.enabled || n.addClass(t.lockClass));
        }
        function p() {
          const t = e.params.pagination;
          if (a()) return;
          const n = e.pagination.$el;
          n.removeClass(t.hiddenClass),
            n.removeClass(t.modifierClass + t.type),
            n.removeClass(t.modifierClass + e.params.direction),
            e.pagination.bullets &&
              e.pagination.bullets.removeClass &&
              e.pagination.bullets.removeClass(t.bulletActiveClass),
            t.clickable && n.off("click", X(t.bulletClass));
        }
        n("init", () => {
          u(), d(), c();
        }),
          n("activeIndexChange", () => {
            (e.params.loop || void 0 === e.snapIndex) && c();
          }),
          n("snapIndexChange", () => {
            e.params.loop || c();
          }),
          n("slidesLengthChange", () => {
            e.params.loop && (d(), c());
          }),
          n("snapGridLengthChange", () => {
            e.params.loop || (d(), c());
          }),
          n("destroy", () => {
            p();
          }),
          n("enable disable", () => {
            const { $el: t } = e.pagination;
            t &&
              t[e.enabled ? "removeClass" : "addClass"](
                e.params.pagination.lockClass
              );
          }),
          n("lock unlock", () => {
            c();
          }),
          n("click", (t, n) => {
            const s = n.target,
              { $el: r } = e.pagination;
            if (
              e.params.pagination.el &&
              e.params.pagination.hideOnClick &&
              r.length > 0 &&
              !h(s).hasClass(e.params.pagination.bulletClass)
            ) {
              if (
                e.navigation &&
                ((e.navigation.nextEl && s === e.navigation.nextEl) ||
                  (e.navigation.prevEl && s === e.navigation.prevEl))
              )
                return;
              const t = r.hasClass(e.params.pagination.hiddenClass);
              i(!0 === t ? "paginationShow" : "paginationHide"),
                r.toggleClass(e.params.pagination.hiddenClass);
            }
          }),
          Object.assign(e.pagination, {
            render: d,
            update: c,
            init: u,
            destroy: p,
          });
      }
      function Q({ swiper: e, extendParams: t, on: n, emit: i }) {
        const r = s();
        let o,
          a,
          l,
          c,
          d = !1,
          u = null,
          p = null;
        function f() {
          if (!e.params.scrollbar.el || !e.scrollbar.el) return;
          const { scrollbar: t, rtlTranslate: n, progress: i } = e,
            { $dragEl: s, $el: r } = t,
            o = e.params.scrollbar;
          let c = a,
            d = (l - a) * i;
          n
            ? ((d = -d),
              d > 0 ? ((c = a - d), (d = 0)) : -d + a > l && (c = l + d))
            : d < 0
            ? ((c = a + d), (d = 0))
            : d + a > l && (c = l - d),
            e.isHorizontal()
              ? (s.transform(`translate3d(${d}px, 0, 0)`),
                (s[0].style.width = `${c}px`))
              : (s.transform(`translate3d(0px, ${d}px, 0)`),
                (s[0].style.height = `${c}px`)),
            o.hide &&
              (clearTimeout(u),
              (r[0].style.opacity = 1),
              (u = setTimeout(() => {
                (r[0].style.opacity = 0), r.transition(400);
              }, 1e3)));
        }
        function g() {
          if (!e.params.scrollbar.el || !e.scrollbar.el) return;
          const { scrollbar: t } = e,
            { $dragEl: n, $el: i } = t;
          (n[0].style.width = ""),
            (n[0].style.height = ""),
            (l = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight),
            (c =
              e.size /
              (e.virtualSize +
                e.params.slidesOffsetBefore -
                (e.params.centeredSlides ? e.snapGrid[0] : 0))),
            (a =
              "auto" === e.params.scrollbar.dragSize
                ? l * c
                : parseInt(e.params.scrollbar.dragSize, 10)),
            e.isHorizontal()
              ? (n[0].style.width = `${a}px`)
              : (n[0].style.height = `${a}px`),
            (i[0].style.display = c >= 1 ? "none" : ""),
            e.params.scrollbar.hide && (i[0].style.opacity = 0),
            e.params.watchOverflow &&
              e.enabled &&
              t.$el[e.isLocked ? "addClass" : "removeClass"](
                e.params.scrollbar.lockClass
              );
        }
        function v(t) {
          return e.isHorizontal()
            ? "touchstart" === t.type || "touchmove" === t.type
              ? t.targetTouches[0].clientX
              : t.clientX
            : "touchstart" === t.type || "touchmove" === t.type
            ? t.targetTouches[0].clientY
            : t.clientY;
        }
        function b(t) {
          const { scrollbar: n, rtlTranslate: i } = e,
            { $el: s } = n;
          let r;
          (r =
            (v(t) -
              s.offset()[e.isHorizontal() ? "left" : "top"] -
              (null !== o ? o : a / 2)) /
            (l - a)),
            (r = Math.max(Math.min(r, 1), 0)),
            i && (r = 1 - r);
          const c =
            e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * r;
          e.updateProgress(c),
            e.setTranslate(c),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
        }
        function w(t) {
          const n = e.params.scrollbar,
            { scrollbar: s, $wrapperEl: r } = e,
            { $el: a, $dragEl: l } = s;
          (d = !0),
            (o =
              t.target === l[0] || t.target === l
                ? v(t) -
                  t.target.getBoundingClientRect()[
                    e.isHorizontal() ? "left" : "top"
                  ]
                : null),
            t.preventDefault(),
            t.stopPropagation(),
            r.transition(100),
            l.transition(100),
            b(t),
            clearTimeout(p),
            a.transition(0),
            n.hide && a.css("opacity", 1),
            e.params.cssMode && e.$wrapperEl.css("scroll-snap-type", "none"),
            i("scrollbarDragStart", t);
        }
        function y(t) {
          const { scrollbar: n, $wrapperEl: s } = e,
            { $el: r, $dragEl: o } = n;
          d &&
            (t.preventDefault ? t.preventDefault() : (t.returnValue = !1),
            b(t),
            s.transition(0),
            r.transition(0),
            o.transition(0),
            i("scrollbarDragMove", t));
        }
        function x(t) {
          const n = e.params.scrollbar,
            { scrollbar: s, $wrapperEl: r } = e,
            { $el: o } = s;
          d &&
            ((d = !1),
            e.params.cssMode &&
              (e.$wrapperEl.css("scroll-snap-type", ""), r.transition("")),
            n.hide &&
              (clearTimeout(p),
              (p = m(() => {
                o.css("opacity", 0), o.transition(400);
              }, 1e3))),
            i("scrollbarDragEnd", t),
            n.snapOnRelease && e.slideToClosest());
        }
        function C(t) {
          const {
              scrollbar: n,
              touchEventsTouch: i,
              touchEventsDesktop: s,
              params: o,
              support: a,
            } = e,
            l = n.$el[0],
            c = !(!a.passiveListener || !o.passiveListeners) && {
              passive: !1,
              capture: !1,
            },
            d = !(!a.passiveListener || !o.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
          if (!l) return;
          const u = "on" === t ? "addEventListener" : "removeEventListener";
          a.touch
            ? (l[u](i.start, w, c), l[u](i.move, y, c), l[u](i.end, x, d))
            : (l[u](s.start, w, c), r[u](s.move, y, c), r[u](s.end, x, d));
        }
        function E() {
          const { scrollbar: t, $el: n } = e;
          e.params.scrollbar = Y(
            e,
            e.originalParams.scrollbar,
            e.params.scrollbar,
            { el: "swiper-scrollbar" }
          );
          const i = e.params.scrollbar;
          if (!i.el) return;
          let s = h(i.el);
          e.params.uniqueNavElements &&
            "string" == typeof i.el &&
            s.length > 1 &&
            1 === n.find(i.el).length &&
            (s = n.find(i.el));
          let r = s.find(`.${e.params.scrollbar.dragClass}`);
          0 === r.length &&
            ((r = h(`<div class="${e.params.scrollbar.dragClass}"></div>`)),
            s.append(r)),
            Object.assign(t, { $el: s, el: s[0], $dragEl: r, dragEl: r[0] }),
            i.draggable && e.params.scrollbar.el && C("on"),
            s &&
              s[e.enabled ? "removeClass" : "addClass"](
                e.params.scrollbar.lockClass
              );
        }
        function T() {
          e.params.scrollbar.el && C("off");
        }
        t({
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag",
          },
        }),
          (e.scrollbar = { el: null, dragEl: null, $el: null, $dragEl: null }),
          n("init", () => {
            E(), g(), f();
          }),
          n("update resize observerUpdate lock unlock", () => {
            g();
          }),
          n("setTranslate", () => {
            f();
          }),
          n("setTransition", (t, n) => {
            !(function (t) {
              e.params.scrollbar.el &&
                e.scrollbar.el &&
                e.scrollbar.$dragEl.transition(t);
            })(n);
          }),
          n("enable disable", () => {
            const { $el: t } = e.scrollbar;
            t &&
              t[e.enabled ? "removeClass" : "addClass"](
                e.params.scrollbar.lockClass
              );
          }),
          n("destroy", () => {
            T();
          }),
          Object.assign(e.scrollbar, {
            updateSize: g,
            setTranslate: f,
            init: E,
            destroy: T,
          });
      }
      function J({ swiper: e, extendParams: t, on: n, emit: i }) {
        t({
          lazy: {
            checkInView: !1,
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            scrollingElement: "",
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader",
          },
        }),
          (e.lazy = {});
        let s = !1,
          r = !1;
        function a(t, n = !0) {
          const s = e.params.lazy;
          if (void 0 === t) return;
          if (0 === e.slides.length) return;
          const r =
              e.virtual && e.params.virtual.enabled
                ? e.$wrapperEl.children(
                    `.${e.params.slideClass}[data-swiper-slide-index="${t}"]`
                  )
                : e.slides.eq(t),
            o = r.find(
              `.${s.elementClass}:not(.${s.loadedClass}):not(.${s.loadingClass})`
            );
          !r.hasClass(s.elementClass) ||
            r.hasClass(s.loadedClass) ||
            r.hasClass(s.loadingClass) ||
            o.push(r[0]),
            0 !== o.length &&
              o.each((t) => {
                const o = h(t);
                o.addClass(s.loadingClass);
                const l = o.attr("data-background"),
                  c = o.attr("data-src"),
                  d = o.attr("data-srcset"),
                  u = o.attr("data-sizes"),
                  p = o.parent("picture");
                e.loadImage(o[0], c || l, d, u, !1, () => {
                  if (null != e && e && (!e || e.params) && !e.destroyed) {
                    if (
                      (l
                        ? (o.css("background-image", `url("${l}")`),
                          o.removeAttr("data-background"))
                        : (d &&
                            (o.attr("srcset", d), o.removeAttr("data-srcset")),
                          u && (o.attr("sizes", u), o.removeAttr("data-sizes")),
                          p.length &&
                            p.children("source").each((e) => {
                              const t = h(e);
                              t.attr("data-srcset") &&
                                (t.attr("srcset", t.attr("data-srcset")),
                                t.removeAttr("data-srcset"));
                            }),
                          c && (o.attr("src", c), o.removeAttr("data-src"))),
                      o.addClass(s.loadedClass).removeClass(s.loadingClass),
                      r.find(`.${s.preloaderClass}`).remove(),
                      e.params.loop && n)
                    ) {
                      const t = r.attr("data-swiper-slide-index");
                      r.hasClass(e.params.slideDuplicateClass)
                        ? a(
                            e.$wrapperEl
                              .children(
                                `[data-swiper-slide-index="${t}"]:not(.${e.params.slideDuplicateClass})`
                              )
                              .index(),
                            !1
                          )
                        : a(
                            e.$wrapperEl
                              .children(
                                `.${e.params.slideDuplicateClass}[data-swiper-slide-index="${t}"]`
                              )
                              .index(),
                            !1
                          );
                    }
                    i("lazyImageReady", r[0], o[0]),
                      e.params.autoHeight && e.updateAutoHeight();
                  }
                }),
                  i("lazyImageLoad", r[0], o[0]);
              });
        }
        function l() {
          const { $wrapperEl: t, params: n, slides: i, activeIndex: s } = e,
            o = e.virtual && n.virtual.enabled,
            l = n.lazy;
          let c = n.slidesPerView;
          function d(e) {
            if (o) {
              if (
                t.children(`.${n.slideClass}[data-swiper-slide-index="${e}"]`)
                  .length
              )
                return !0;
            } else if (i[e]) return !0;
            return !1;
          }
          function u(e) {
            return o ? h(e).attr("data-swiper-slide-index") : h(e).index();
          }
          if (
            ("auto" === c && (c = 0),
            r || (r = !0),
            e.params.watchSlidesProgress)
          )
            t.children(`.${n.slideVisibleClass}`).each((e) => {
              a(o ? h(e).attr("data-swiper-slide-index") : h(e).index());
            });
          else if (c > 1) for (let e = s; e < s + c; e += 1) d(e) && a(e);
          else a(s);
          if (l.loadPrevNext)
            if (c > 1 || (l.loadPrevNextAmount && l.loadPrevNextAmount > 1)) {
              const e = l.loadPrevNextAmount,
                t = c,
                n = Math.min(s + t + Math.max(e, t), i.length),
                r = Math.max(s - Math.max(t, e), 0);
              for (let e = s + c; e < n; e += 1) d(e) && a(e);
              for (let e = r; e < s; e += 1) d(e) && a(e);
            } else {
              const e = t.children(`.${n.slideNextClass}`);
              e.length > 0 && a(u(e));
              const i = t.children(`.${n.slidePrevClass}`);
              i.length > 0 && a(u(i));
            }
        }
        function c() {
          const t = o();
          if (!e || e.destroyed) return;
          const n = e.params.lazy.scrollingElement
              ? h(e.params.lazy.scrollingElement)
              : h(t),
            i = n[0] === t,
            r = i ? t.innerWidth : n[0].offsetWidth,
            a = i ? t.innerHeight : n[0].offsetHeight,
            d = e.$el.offset(),
            { rtlTranslate: u } = e;
          let p = !1;
          u && (d.left -= e.$el[0].scrollLeft);
          const f = [
            [d.left, d.top],
            [d.left + e.width, d.top],
            [d.left, d.top + e.height],
            [d.left + e.width, d.top + e.height],
          ];
          for (let e = 0; e < f.length; e += 1) {
            const t = f[e];
            if (t[0] >= 0 && t[0] <= r && t[1] >= 0 && t[1] <= a) {
              if (0 === t[0] && 0 === t[1]) continue;
              p = !0;
            }
          }
          const m = !(
            "touchstart" !== e.touchEvents.start ||
            !e.support.passiveListener ||
            !e.params.passiveListeners
          ) && { passive: !0, capture: !1 };
          p
            ? (l(), n.off("scroll", c, m))
            : s || ((s = !0), n.on("scroll", c, m));
        }
        n("beforeInit", () => {
          e.params.lazy.enabled &&
            e.params.preloadImages &&
            (e.params.preloadImages = !1);
        }),
          n("init", () => {
            e.params.lazy.enabled && (e.params.lazy.checkInView ? c() : l());
          }),
          n("scroll", () => {
            e.params.freeMode &&
              e.params.freeMode.enabled &&
              !e.params.freeMode.sticky &&
              l();
          }),
          n("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
            e.params.lazy.enabled && (e.params.lazy.checkInView ? c() : l());
          }),
          n("transitionStart", () => {
            e.params.lazy.enabled &&
              (e.params.lazy.loadOnTransitionStart ||
                (!e.params.lazy.loadOnTransitionStart && !r)) &&
              (e.params.lazy.checkInView ? c() : l());
          }),
          n("transitionEnd", () => {
            e.params.lazy.enabled &&
              !e.params.lazy.loadOnTransitionStart &&
              (e.params.lazy.checkInView ? c() : l());
          }),
          n("slideChange", () => {
            const {
              lazy: t,
              cssMode: n,
              watchSlidesProgress: i,
              touchReleaseOnEdges: s,
              resistanceRatio: r,
            } = e.params;
            t.enabled && (n || (i && (s || 0 === r))) && l();
          }),
          Object.assign(e.lazy, { load: l, loadInSlide: a });
      }
      function ee({ swiper: e, extendParams: t, on: n, emit: i }) {
        let r;
        function o() {
          const t = e.slides.eq(e.activeIndex);
          let n = e.params.autoplay.delay;
          t.attr("data-swiper-autoplay") &&
            (n = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
            clearTimeout(r),
            (r = m(() => {
              let t;
              e.params.autoplay.reverseDirection
                ? e.params.loop
                  ? (e.loopFix(),
                    (t = e.slidePrev(e.params.speed, !0, !0)),
                    i("autoplay"))
                  : e.isBeginning
                  ? e.params.autoplay.stopOnLastSlide
                    ? l()
                    : ((t = e.slideTo(
                        e.slides.length - 1,
                        e.params.speed,
                        !0,
                        !0
                      )),
                      i("autoplay"))
                  : ((t = e.slidePrev(e.params.speed, !0, !0)), i("autoplay"))
                : e.params.loop
                ? (e.loopFix(),
                  (t = e.slideNext(e.params.speed, !0, !0)),
                  i("autoplay"))
                : e.isEnd
                ? e.params.autoplay.stopOnLastSlide
                  ? l()
                  : ((t = e.slideTo(0, e.params.speed, !0, !0)), i("autoplay"))
                : ((t = e.slideNext(e.params.speed, !0, !0)), i("autoplay")),
                ((e.params.cssMode && e.autoplay.running) || !1 === t) && o();
            }, n));
        }
        function a() {
          return (
            void 0 === r &&
            !e.autoplay.running &&
            ((e.autoplay.running = !0), i("autoplayStart"), o(), !0)
          );
        }
        function l() {
          return (
            !!e.autoplay.running &&
            void 0 !== r &&
            (r && (clearTimeout(r), (r = void 0)),
            (e.autoplay.running = !1),
            i("autoplayStop"),
            !0)
          );
        }
        function c(t) {
          e.autoplay.running &&
            (e.autoplay.paused ||
              (r && clearTimeout(r),
              (e.autoplay.paused = !0),
              0 !== t && e.params.autoplay.waitForTransition
                ? ["transitionend", "webkitTransitionEnd"].forEach((t) => {
                    e.$wrapperEl[0].addEventListener(t, u);
                  })
                : ((e.autoplay.paused = !1), o())));
        }
        function d() {
          const t = s();
          "hidden" === t.visibilityState && e.autoplay.running && c(),
            "visible" === t.visibilityState &&
              e.autoplay.paused &&
              (o(), (e.autoplay.paused = !1));
        }
        function u(t) {
          e &&
            !e.destroyed &&
            e.$wrapperEl &&
            t.target === e.$wrapperEl[0] &&
            (["transitionend", "webkitTransitionEnd"].forEach((t) => {
              e.$wrapperEl[0].removeEventListener(t, u);
            }),
            (e.autoplay.paused = !1),
            e.autoplay.running ? o() : l());
        }
        function p() {
          e.params.autoplay.disableOnInteraction ? l() : c(),
            ["transitionend", "webkitTransitionEnd"].forEach((t) => {
              e.$wrapperEl[0].removeEventListener(t, u);
            });
        }
        function f() {
          e.params.autoplay.disableOnInteraction ||
            ((e.autoplay.paused = !1), o());
        }
        (e.autoplay = { running: !1, paused: !1 }),
          t({
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !0,
              stopOnLastSlide: !1,
              reverseDirection: !1,
              pauseOnMouseEnter: !1,
            },
          }),
          n("init", () => {
            e.params.autoplay.enabled &&
              (a(),
              s().addEventListener("visibilitychange", d),
              e.params.autoplay.pauseOnMouseEnter &&
                (e.$el.on("mouseenter", p), e.$el.on("mouseleave", f)));
          }),
          n("beforeTransitionStart", (t, n, i) => {
            e.autoplay.running &&
              (i || !e.params.autoplay.disableOnInteraction
                ? e.autoplay.pause(n)
                : l());
          }),
          n("sliderFirstMove", () => {
            e.autoplay.running &&
              (e.params.autoplay.disableOnInteraction ? l() : c());
          }),
          n("touchEnd", () => {
            e.params.cssMode &&
              e.autoplay.paused &&
              !e.params.autoplay.disableOnInteraction &&
              o();
          }),
          n("destroy", () => {
            e.$el.off("mouseenter", p),
              e.$el.off("mouseleave", f),
              e.autoplay.running && l(),
              s().removeEventListener("visibilitychange", d);
          }),
          Object.assign(e.autoplay, { pause: c, run: o, start: a, stop: l });
      }
      function te({ swiper: e, extendParams: t, on: n }) {
        t({
          thumbs: {
            swiper: null,
            multipleActiveThumbs: !0,
            autoScrollOffset: 0,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-thumbs",
          },
        });
        let i = !1,
          s = !1;
        function r() {
          const t = e.thumbs.swiper;
          if (!t) return;
          const n = t.clickedIndex,
            i = t.clickedSlide;
          if (i && h(i).hasClass(e.params.thumbs.slideThumbActiveClass)) return;
          if (null == n) return;
          let s;
          if (
            ((s = t.params.loop
              ? parseInt(h(t.clickedSlide).attr("data-swiper-slide-index"), 10)
              : n),
            e.params.loop)
          ) {
            let t = e.activeIndex;
            e.slides.eq(t).hasClass(e.params.slideDuplicateClass) &&
              (e.loopFix(),
              (e._clientLeft = e.$wrapperEl[0].clientLeft),
              (t = e.activeIndex));
            const n = e.slides
                .eq(t)
                .prevAll(`[data-swiper-slide-index="${s}"]`)
                .eq(0)
                .index(),
              i = e.slides
                .eq(t)
                .nextAll(`[data-swiper-slide-index="${s}"]`)
                .eq(0)
                .index();
            s = void 0 === n ? i : void 0 === i ? n : i - t < t - n ? i : n;
          }
          e.slideTo(s);
        }
        function o() {
          const { thumbs: t } = e.params;
          if (i) return !1;
          i = !0;
          const n = e.constructor;
          if (t.swiper instanceof n)
            (e.thumbs.swiper = t.swiper),
              Object.assign(e.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              }),
              Object.assign(e.thumbs.swiper.params, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1,
              });
          else if (v(t.swiper)) {
            const i = Object.assign({}, t.swiper);
            Object.assign(i, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
              (e.thumbs.swiper = new n(i)),
              (s = !0);
          }
          return (
            e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
            e.thumbs.swiper.on("tap", r),
            !0
          );
        }
        function a(t) {
          const n = e.thumbs.swiper;
          if (!n) return;
          const i =
              "auto" === n.params.slidesPerView
                ? n.slidesPerViewDynamic()
                : n.params.slidesPerView,
            s = e.params.thumbs.autoScrollOffset,
            r = s && !n.params.loop;
          if (e.realIndex !== n.realIndex || r) {
            let o,
              a,
              l = n.activeIndex;
            if (n.params.loop) {
              n.slides.eq(l).hasClass(n.params.slideDuplicateClass) &&
                (n.loopFix(),
                (n._clientLeft = n.$wrapperEl[0].clientLeft),
                (l = n.activeIndex));
              const t = n.slides
                  .eq(l)
                  .prevAll(`[data-swiper-slide-index="${e.realIndex}"]`)
                  .eq(0)
                  .index(),
                i = n.slides
                  .eq(l)
                  .nextAll(`[data-swiper-slide-index="${e.realIndex}"]`)
                  .eq(0)
                  .index();
              (o =
                void 0 === t
                  ? i
                  : void 0 === i
                  ? t
                  : i - l == l - t
                  ? n.params.slidesPerGroup > 1
                    ? i
                    : l
                  : i - l < l - t
                  ? i
                  : t),
                (a = e.activeIndex > e.previousIndex ? "next" : "prev");
            } else
              (o = e.realIndex), (a = o > e.previousIndex ? "next" : "prev");
            r && (o += "next" === a ? s : -1 * s),
              n.visibleSlidesIndexes &&
                n.visibleSlidesIndexes.indexOf(o) < 0 &&
                (n.params.centeredSlides
                  ? (o =
                      o > l
                        ? o - Math.floor(i / 2) + 1
                        : o + Math.floor(i / 2) - 1)
                  : o > l && n.params.slidesPerGroup,
                n.slideTo(o, t ? 0 : void 0));
          }
          let o = 1;
          const a = e.params.thumbs.slideThumbActiveClass;
          if (
            (e.params.slidesPerView > 1 &&
              !e.params.centeredSlides &&
              (o = e.params.slidesPerView),
            e.params.thumbs.multipleActiveThumbs || (o = 1),
            (o = Math.floor(o)),
            n.slides.removeClass(a),
            n.params.loop || (n.params.virtual && n.params.virtual.enabled))
          )
            for (let t = 0; t < o; t += 1)
              n.$wrapperEl
                .children(`[data-swiper-slide-index="${e.realIndex + t}"]`)
                .addClass(a);
          else
            for (let t = 0; t < o; t += 1)
              n.slides.eq(e.realIndex + t).addClass(a);
        }
        (e.thumbs = { swiper: null }),
          n("beforeInit", () => {
            const { thumbs: t } = e.params;
            t && t.swiper && (o(), a(!0));
          }),
          n("slideChange update resize observerUpdate", () => {
            e.thumbs.swiper && a();
          }),
          n("setTransition", (t, n) => {
            const i = e.thumbs.swiper;
            i && i.setTransition(n);
          }),
          n("beforeDestroy", () => {
            const t = e.thumbs.swiper;
            t && s && t && t.destroy();
          }),
          Object.assign(e.thumbs, { init: o, update: a });
      }
      function ne(e, t, n) {
        const i = "swiper-slide-shadow" + (n ? `-${n}` : ""),
          s = e.transformEl ? t.find(e.transformEl) : t;
        let r = s.children(`.${i}`);
        return (
          r.length ||
            ((r = h(
              `<div class="swiper-slide-shadow${n ? `-${n}` : ""}"></div>`
            )),
            s.append(r)),
          r
        );
      }
      function ie(e, t) {
        return e.transformEl
          ? t
              .find(e.transformEl)
              .css({
                "backface-visibility": "hidden",
                "-webkit-backface-visibility": "hidden",
              })
          : t;
      }
      function se({ swiper: e, extendParams: t, on: n }) {
        t({
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            scale: 1,
            modifier: 1,
            slideShadows: !0,
            transformEl: null,
          },
        }),
          (function (e) {
            const {
              effect: t,
              swiper: n,
              on: i,
              setTranslate: s,
              setTransition: r,
              overwriteParams: o,
              perspective: a,
            } = e;
            i("beforeInit", () => {
              if (n.params.effect !== t) return;
              n.classNames.push(`${n.params.containerModifierClass}${t}`),
                a &&
                  a() &&
                  n.classNames.push(`${n.params.containerModifierClass}3d`);
              const e = o ? o() : {};
              Object.assign(n.params, e), Object.assign(n.originalParams, e);
            }),
              i("setTranslate", () => {
                n.params.effect === t && s();
              }),
              i("setTransition", (e, i) => {
                n.params.effect === t && r(i);
              });
          })({
            effect: "coverflow",
            swiper: e,
            on: n,
            setTranslate: () => {
              const { width: t, height: n, slides: i, slidesSizesGrid: s } = e,
                r = e.params.coverflowEffect,
                o = e.isHorizontal(),
                a = e.translate,
                l = o ? t / 2 - a : n / 2 - a,
                c = o ? r.rotate : -r.rotate,
                d = r.depth;
              for (let e = 0, t = i.length; e < t; e += 1) {
                const t = i.eq(e),
                  n = s[e],
                  a = ((l - t[0].swiperSlideOffset - n / 2) / n) * r.modifier;
                let u = o ? c * a : 0,
                  p = o ? 0 : c * a,
                  f = -d * Math.abs(a),
                  h = r.stretch;
                "string" == typeof h &&
                  -1 !== h.indexOf("%") &&
                  (h = (parseFloat(r.stretch) / 100) * n);
                let m = o ? 0 : h * a,
                  g = o ? h * a : 0,
                  v = 1 - (1 - r.scale) * Math.abs(a);
                Math.abs(g) < 0.001 && (g = 0),
                  Math.abs(m) < 0.001 && (m = 0),
                  Math.abs(f) < 0.001 && (f = 0),
                  Math.abs(u) < 0.001 && (u = 0),
                  Math.abs(p) < 0.001 && (p = 0),
                  Math.abs(v) < 0.001 && (v = 0);
                const b = `translate3d(${g}px,${m}px,${f}px)  rotateX(${p}deg) rotateY(${u}deg) scale(${v})`;
                if (
                  (ie(r, t).transform(b),
                  (t[0].style.zIndex = 1 - Math.abs(Math.round(a))),
                  r.slideShadows)
                ) {
                  let e = o
                      ? t.find(".swiper-slide-shadow-left")
                      : t.find(".swiper-slide-shadow-top"),
                    n = o
                      ? t.find(".swiper-slide-shadow-right")
                      : t.find(".swiper-slide-shadow-bottom");
                  0 === e.length && (e = ne(r, t, o ? "left" : "top")),
                    0 === n.length && (n = ne(r, t, o ? "right" : "bottom")),
                    e.length && (e[0].style.opacity = a > 0 ? a : 0),
                    n.length && (n[0].style.opacity = -a > 0 ? -a : 0);
                }
              }
            },
            setTransition: (t) => {
              const { transformEl: n } = e.params.coverflowEffect;
              (n ? e.slides.find(n) : e.slides)
                .transition(t)
                .find(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .transition(t);
            },
            perspective: () => !0,
            overwriteParams: () => ({ watchSlidesProgress: !0 }),
          });
      }
      var re = n(804),
        oe = n(7824),
        ae = "tippy-content",
        le = "tippy-backdrop",
        ce = "tippy-arrow",
        de = "tippy-svg-arrow",
        ue = { passive: !0, capture: !0 },
        pe = function () {
          return document.body;
        };
      function fe(e, t, n) {
        if (Array.isArray(e)) {
          var i = e[t];
          return null == i ? (Array.isArray(n) ? n[t] : n) : i;
        }
        return e;
      }
      function he(e, t) {
        var n = {}.toString.call(e);
        return 0 === n.indexOf("[object") && n.indexOf(t + "]") > -1;
      }
      function me(e, t) {
        return "function" == typeof e ? e.apply(void 0, t) : e;
      }
      function ge(e, t) {
        return 0 === t
          ? e
          : function (i) {
              clearTimeout(n),
                (n = setTimeout(function () {
                  e(i);
                }, t));
            };
        var n;
      }
      function ve(e) {
        return [].concat(e);
      }
      function be(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function we(e) {
        return [].slice.call(e);
      }
      function ye(e) {
        return Object.keys(e).reduce(function (t, n) {
          return void 0 !== e[n] && (t[n] = e[n]), t;
        }, {});
      }
      function xe() {
        return document.createElement("div");
      }
      function Ce(e) {
        return ["Element", "Fragment"].some(function (t) {
          return he(e, t);
        });
      }
      function Ee(e, t) {
        e.forEach(function (e) {
          e && (e.style.transitionDuration = t + "ms");
        });
      }
      function Te(e, t) {
        e.forEach(function (e) {
          e && e.setAttribute("data-state", t);
        });
      }
      function Se(e, t, n) {
        var i = t + "EventListener";
        ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
          e[i](t, n);
        });
      }
      function _e(e, t) {
        for (var n = t; n; ) {
          var i;
          if (e.contains(n)) return !0;
          n =
            null == n.getRootNode || null == (i = n.getRootNode())
              ? void 0
              : i.host;
        }
        return !1;
      }
      var ke = { isTouch: !1 },
        Ae = 0;
      function Oe() {
        ke.isTouch ||
          ((ke.isTouch = !0),
          window.performance && document.addEventListener("mousemove", Pe));
      }
      function Pe() {
        var e = performance.now();
        e - Ae < 20 &&
          ((ke.isTouch = !1), document.removeEventListener("mousemove", Pe)),
          (Ae = e);
      }
      function $e() {
        var e,
          t = document.activeElement;
        if ((e = t) && e._tippy && e._tippy.reference === e) {
          var n = t._tippy;
          t.blur && !n.state.isVisible && t.blur();
        }
      }
      var Me = !(
          "undefined" == typeof window ||
          "undefined" == typeof document ||
          !window.msCrypto
        ),
        Le = Object.assign(
          {
            appendTo: pe,
            aria: { content: "auto", expanded: "auto" },
            delay: 0,
            duration: [300, 250],
            getReferenceClientRect: null,
            hideOnClick: !0,
            ignoreAttributes: !1,
            interactive: !1,
            interactiveBorder: 2,
            interactiveDebounce: 0,
            moveTransition: "",
            offset: [0, 10],
            onAfterUpdate: function () {},
            onBeforeUpdate: function () {},
            onCreate: function () {},
            onDestroy: function () {},
            onHidden: function () {},
            onHide: function () {},
            onMount: function () {},
            onShow: function () {},
            onShown: function () {},
            onTrigger: function () {},
            onUntrigger: function () {},
            onClickOutside: function () {},
            placement: "top",
            plugins: [],
            popperOptions: {},
            render: null,
            showOnCreate: !1,
            touch: !0,
            trigger: "mouseenter focus",
            triggerTarget: null,
          },
          {
            animateFill: !1,
            followCursor: !1,
            inlinePositioning: !1,
            sticky: !1,
          },
          {
            allowHTML: !1,
            animation: "fade",
            arrow: !0,
            content: "",
            inertia: !1,
            maxWidth: 350,
            role: "tooltip",
            theme: "",
            zIndex: 9999,
          }
        ),
        Ie = Object.keys(Le);
      function De(e) {
        var t = (e.plugins || []).reduce(function (t, n) {
          var i,
            s = n.name,
            r = n.defaultValue;
          return (
            s && (t[s] = void 0 !== e[s] ? e[s] : null != (i = Le[s]) ? i : r),
            t
          );
        }, {});
        return Object.assign({}, e, t);
      }
      function Ne(e, t) {
        var n = Object.assign(
          {},
          t,
          { content: me(t.content, [e]) },
          t.ignoreAttributes
            ? {}
            : (function (e, t) {
                return (
                  t
                    ? Object.keys(De(Object.assign({}, Le, { plugins: t })))
                    : Ie
                ).reduce(function (t, n) {
                  var i = (e.getAttribute("data-tippy-" + n) || "").trim();
                  if (!i) return t;
                  if ("content" === n) t[n] = i;
                  else
                    try {
                      t[n] = JSON.parse(i);
                    } catch (e) {
                      t[n] = i;
                    }
                  return t;
                }, {});
              })(e, t.plugins)
        );
        return (
          (n.aria = Object.assign({}, Le.aria, n.aria)),
          (n.aria = {
            expanded:
              "auto" === n.aria.expanded ? t.interactive : n.aria.expanded,
            content:
              "auto" === n.aria.content
                ? t.interactive
                  ? null
                  : "describedby"
                : n.aria.content,
          }),
          n
        );
      }
      var je = function () {
        return "innerHTML";
      };
      function ze(e, t) {
        e[je()] = t;
      }
      function Ze(e) {
        var t = xe();
        return (
          !0 === e
            ? (t.className = ce)
            : ((t.className = de), Ce(e) ? t.appendChild(e) : ze(t, e)),
          t
        );
      }
      function Ve(e, t) {
        Ce(t.content)
          ? (ze(e, ""), e.appendChild(t.content))
          : "function" != typeof t.content &&
            (t.allowHTML ? ze(e, t.content) : (e.textContent = t.content));
      }
      function Be(e) {
        var t = e.firstElementChild,
          n = we(t.children);
        return {
          box: t,
          content: n.find(function (e) {
            return e.classList.contains(ae);
          }),
          arrow: n.find(function (e) {
            return e.classList.contains(ce) || e.classList.contains(de);
          }),
          backdrop: n.find(function (e) {
            return e.classList.contains(le);
          }),
        };
      }
      function Fe(e) {
        var t = xe(),
          n = xe();
        (n.className = "tippy-box"),
          n.setAttribute("data-state", "hidden"),
          n.setAttribute("tabindex", "-1");
        var i = xe();
        function s(n, i) {
          var s = Be(t),
            r = s.box,
            o = s.content,
            a = s.arrow;
          i.theme
            ? r.setAttribute("data-theme", i.theme)
            : r.removeAttribute("data-theme"),
            "string" == typeof i.animation
              ? r.setAttribute("data-animation", i.animation)
              : r.removeAttribute("data-animation"),
            i.inertia
              ? r.setAttribute("data-inertia", "")
              : r.removeAttribute("data-inertia"),
            (r.style.maxWidth =
              "number" == typeof i.maxWidth ? i.maxWidth + "px" : i.maxWidth),
            i.role ? r.setAttribute("role", i.role) : r.removeAttribute("role"),
            (n.content === i.content && n.allowHTML === i.allowHTML) ||
              Ve(o, e.props),
            i.arrow
              ? a
                ? n.arrow !== i.arrow &&
                  (r.removeChild(a), r.appendChild(Ze(i.arrow)))
                : r.appendChild(Ze(i.arrow))
              : a && r.removeChild(a);
        }
        return (
          (i.className = ae),
          i.setAttribute("data-state", "hidden"),
          Ve(i, e.props),
          t.appendChild(n),
          n.appendChild(i),
          s(e.props, e.props),
          { popper: t, onUpdate: s }
        );
      }
      Fe.$$tippy = !0;
      var Ge = 1,
        He = [],
        Re = [];
      function qe(e, t) {
        var n,
          i,
          s,
          r,
          o,
          a,
          l,
          c,
          d = Ne(e, Object.assign({}, Le, De(ye(t)))),
          u = !1,
          p = !1,
          f = !1,
          h = !1,
          m = [],
          g = ge(W, d.interactiveDebounce),
          v = Ge++,
          b = (c = d.plugins).filter(function (e, t) {
            return c.indexOf(e) === t;
          }),
          w = {
            id: v,
            reference: e,
            popper: xe(),
            popperInstance: null,
            props: d,
            state: {
              isEnabled: !0,
              isVisible: !1,
              isDestroyed: !1,
              isMounted: !1,
              isShown: !1,
            },
            plugins: b,
            clearDelayTimeouts: function () {
              clearTimeout(n), clearTimeout(i), cancelAnimationFrame(s);
            },
            setProps: function (t) {
              if (!w.state.isDestroyed) {
                L("onBeforeUpdate", [w, t]), R();
                var n = w.props,
                  i = Ne(
                    e,
                    Object.assign({}, n, ye(t), { ignoreAttributes: !0 })
                  );
                (w.props = i),
                  H(),
                  n.interactiveDebounce !== i.interactiveDebounce &&
                    (N(), (g = ge(W, i.interactiveDebounce))),
                  n.triggerTarget && !i.triggerTarget
                    ? ve(n.triggerTarget).forEach(function (e) {
                        e.removeAttribute("aria-expanded");
                      })
                    : i.triggerTarget && e.removeAttribute("aria-expanded"),
                  D(),
                  M(),
                  C && C(n, i),
                  w.popperInstance &&
                    (K(),
                    J().forEach(function (e) {
                      requestAnimationFrame(
                        e._tippy.popperInstance.forceUpdate
                      );
                    })),
                  L("onAfterUpdate", [w, t]);
              }
            },
            setContent: function (e) {
              w.setProps({ content: e });
            },
            show: function () {
              var e = w.state.isVisible,
                t = w.state.isDestroyed,
                n = !w.state.isEnabled,
                i = ke.isTouch && !w.props.touch,
                s = fe(w.props.duration, 0, Le.duration);
              if (
                !(
                  e ||
                  t ||
                  n ||
                  i ||
                  A().hasAttribute("disabled") ||
                  (L("onShow", [w], !1), !1 === w.props.onShow(w))
                )
              ) {
                if (
                  ((w.state.isVisible = !0),
                  k() && (x.style.visibility = "visible"),
                  M(),
                  V(),
                  w.state.isMounted || (x.style.transition = "none"),
                  k())
                ) {
                  var r = P();
                  Ee([r.box, r.content], 0);
                }
                var o, l, c;
                (a = function () {
                  var e;
                  if (w.state.isVisible && !h) {
                    if (
                      ((h = !0),
                      x.offsetHeight,
                      (x.style.transition = w.props.moveTransition),
                      k() && w.props.animation)
                    ) {
                      var t = P(),
                        n = t.box,
                        i = t.content;
                      Ee([n, i], s), Te([n, i], "visible");
                    }
                    I(),
                      D(),
                      be(Re, w),
                      null == (e = w.popperInstance) || e.forceUpdate(),
                      L("onMount", [w]),
                      w.props.animation &&
                        k() &&
                        (function (e, t) {
                          F(e, function () {
                            (w.state.isShown = !0), L("onShown", [w]);
                          });
                        })(s);
                  }
                }),
                  (l = w.props.appendTo),
                  (c = A()),
                  (o =
                    (w.props.interactive && l === pe) || "parent" === l
                      ? c.parentNode
                      : me(l, [c])).contains(x) || o.appendChild(x),
                  (w.state.isMounted = !0),
                  K();
              }
            },
            hide: function () {
              var e = !w.state.isVisible,
                t = w.state.isDestroyed,
                n = !w.state.isEnabled,
                i = fe(w.props.duration, 1, Le.duration);
              if (
                !(e || t || n) &&
                (L("onHide", [w], !1), !1 !== w.props.onHide(w))
              ) {
                if (
                  ((w.state.isVisible = !1),
                  (w.state.isShown = !1),
                  (h = !1),
                  (u = !1),
                  k() && (x.style.visibility = "hidden"),
                  N(),
                  B(),
                  M(!0),
                  k())
                ) {
                  var s = P(),
                    r = s.box,
                    o = s.content;
                  w.props.animation && (Ee([r, o], i), Te([r, o], "hidden"));
                }
                I(),
                  D(),
                  w.props.animation
                    ? k() &&
                      (function (e, t) {
                        F(e, function () {
                          !w.state.isVisible &&
                            x.parentNode &&
                            x.parentNode.contains(x) &&
                            t();
                        });
                      })(i, w.unmount)
                    : w.unmount();
              }
            },
            hideWithInteractivity: function (e) {
              O().addEventListener("mousemove", g), be(He, g), g(e);
            },
            enable: function () {
              w.state.isEnabled = !0;
            },
            disable: function () {
              w.hide(), (w.state.isEnabled = !1);
            },
            unmount: function () {
              w.state.isVisible && w.hide(),
                w.state.isMounted &&
                  (Q(),
                  J().forEach(function (e) {
                    e._tippy.unmount();
                  }),
                  x.parentNode && x.parentNode.removeChild(x),
                  (Re = Re.filter(function (e) {
                    return e !== w;
                  })),
                  (w.state.isMounted = !1),
                  L("onHidden", [w]));
            },
            destroy: function () {
              w.state.isDestroyed ||
                (w.clearDelayTimeouts(),
                w.unmount(),
                R(),
                delete e._tippy,
                (w.state.isDestroyed = !0),
                L("onDestroy", [w]));
            },
          };
        if (!d.render) return w;
        var y = d.render(w),
          x = y.popper,
          C = y.onUpdate;
        x.setAttribute("data-tippy-root", ""),
          (x.id = "tippy-" + w.id),
          (w.popper = x),
          (e._tippy = w),
          (x._tippy = w);
        var E = b.map(function (e) {
            return e.fn(w);
          }),
          T = e.hasAttribute("aria-expanded");
        return (
          H(),
          D(),
          M(),
          L("onCreate", [w]),
          d.showOnCreate && ee(),
          x.addEventListener("mouseenter", function () {
            w.props.interactive && w.state.isVisible && w.clearDelayTimeouts();
          }),
          x.addEventListener("mouseleave", function () {
            w.props.interactive &&
              w.props.trigger.indexOf("mouseenter") >= 0 &&
              O().addEventListener("mousemove", g);
          }),
          w
        );
        function S() {
          var e = w.props.touch;
          return Array.isArray(e) ? e : [e, 0];
        }
        function _() {
          return "hold" === S()[0];
        }
        function k() {
          var e;
          return !(null == (e = w.props.render) || !e.$$tippy);
        }
        function A() {
          return l || e;
        }
        function O() {
          var e,
            t,
            n = A().parentNode;
          return n
            ? null != (t = ve(n)[0]) && null != (e = t.ownerDocument) && e.body
              ? t.ownerDocument
              : document
            : document;
        }
        function P() {
          return Be(x);
        }
        function $(e) {
          return (w.state.isMounted && !w.state.isVisible) ||
            ke.isTouch ||
            (r && "focus" === r.type)
            ? 0
            : fe(w.props.delay, e ? 0 : 1, Le.delay);
        }
        function M(e) {
          void 0 === e && (e = !1),
            (x.style.pointerEvents = w.props.interactive && !e ? "" : "none"),
            (x.style.zIndex = "" + w.props.zIndex);
        }
        function L(e, t, n) {
          var i;
          void 0 === n && (n = !0),
            E.forEach(function (n) {
              n[e] && n[e].apply(n, t);
            }),
            n && (i = w.props)[e].apply(i, t);
        }
        function I() {
          var t = w.props.aria;
          if (t.content) {
            var n = "aria-" + t.content,
              i = x.id;
            ve(w.props.triggerTarget || e).forEach(function (e) {
              var t = e.getAttribute(n);
              if (w.state.isVisible) e.setAttribute(n, t ? t + " " + i : i);
              else {
                var s = t && t.replace(i, "").trim();
                s ? e.setAttribute(n, s) : e.removeAttribute(n);
              }
            });
          }
        }
        function D() {
          !T &&
            w.props.aria.expanded &&
            ve(w.props.triggerTarget || e).forEach(function (e) {
              w.props.interactive
                ? e.setAttribute(
                    "aria-expanded",
                    w.state.isVisible && e === A() ? "true" : "false"
                  )
                : e.removeAttribute("aria-expanded");
            });
        }
        function N() {
          O().removeEventListener("mousemove", g),
            (He = He.filter(function (e) {
              return e !== g;
            }));
        }
        function j(t) {
          if (!ke.isTouch || (!f && "mousedown" !== t.type)) {
            var n = (t.composedPath && t.composedPath()[0]) || t.target;
            if (!w.props.interactive || !_e(x, n)) {
              if (
                ve(w.props.triggerTarget || e).some(function (e) {
                  return _e(e, n);
                })
              ) {
                if (ke.isTouch) return;
                if (w.state.isVisible && w.props.trigger.indexOf("click") >= 0)
                  return;
              } else L("onClickOutside", [w, t]);
              !0 === w.props.hideOnClick &&
                (w.clearDelayTimeouts(),
                w.hide(),
                (p = !0),
                setTimeout(function () {
                  p = !1;
                }),
                w.state.isMounted || B());
            }
          }
        }
        function z() {
          f = !0;
        }
        function Z() {
          f = !1;
        }
        function V() {
          var e = O();
          e.addEventListener("mousedown", j, !0),
            e.addEventListener("touchend", j, ue),
            e.addEventListener("touchstart", Z, ue),
            e.addEventListener("touchmove", z, ue);
        }
        function B() {
          var e = O();
          e.removeEventListener("mousedown", j, !0),
            e.removeEventListener("touchend", j, ue),
            e.removeEventListener("touchstart", Z, ue),
            e.removeEventListener("touchmove", z, ue);
        }
        function F(e, t) {
          var n = P().box;
          function i(e) {
            e.target === n && (Se(n, "remove", i), t());
          }
          if (0 === e) return t();
          Se(n, "remove", o), Se(n, "add", i), (o = i);
        }
        function G(t, n, i) {
          void 0 === i && (i = !1),
            ve(w.props.triggerTarget || e).forEach(function (e) {
              e.addEventListener(t, n, i),
                m.push({ node: e, eventType: t, handler: n, options: i });
            });
        }
        function H() {
          var e;
          _() &&
            (G("touchstart", q, { passive: !0 }),
            G("touchend", Y, { passive: !0 })),
            ((e = w.props.trigger), e.split(/\s+/).filter(Boolean)).forEach(
              function (e) {
                if ("manual" !== e)
                  switch ((G(e, q), e)) {
                    case "mouseenter":
                      G("mouseleave", Y);
                      break;
                    case "focus":
                      G(Me ? "focusout" : "blur", U);
                      break;
                    case "focusin":
                      G("focusout", U);
                  }
              }
            );
        }
        function R() {
          m.forEach(function (e) {
            var t = e.node,
              n = e.eventType,
              i = e.handler,
              s = e.options;
            t.removeEventListener(n, i, s);
          }),
            (m = []);
        }
        function q(e) {
          var t,
            n = !1;
          if (w.state.isEnabled && !X(e) && !p) {
            var i = "focus" === (null == (t = r) ? void 0 : t.type);
            (r = e),
              (l = e.currentTarget),
              D(),
              !w.state.isVisible &&
                he(e, "MouseEvent") &&
                He.forEach(function (t) {
                  return t(e);
                }),
              "click" === e.type &&
              (w.props.trigger.indexOf("mouseenter") < 0 || u) &&
              !1 !== w.props.hideOnClick &&
              w.state.isVisible
                ? (n = !0)
                : ee(e),
              "click" === e.type && (u = !n),
              n && !i && te(e);
          }
        }
        function W(e) {
          var t = e.target,
            n = A().contains(t) || x.contains(t);
          if ("mousemove" !== e.type || !n) {
            var i = J()
              .concat(x)
              .map(function (e) {
                var t,
                  n = null == (t = e._tippy.popperInstance) ? void 0 : t.state;
                return n
                  ? {
                      popperRect: e.getBoundingClientRect(),
                      popperState: n,
                      props: d,
                    }
                  : null;
              })
              .filter(Boolean);
            (function (e, t) {
              var n = t.clientX,
                i = t.clientY;
              return e.every(function (e) {
                var t = e.popperRect,
                  s = e.popperState,
                  r = e.props.interactiveBorder,
                  o = s.placement.split("-")[0],
                  a = s.modifiersData.offset;
                if (!a) return !0;
                var l = "bottom" === o ? a.top.y : 0,
                  c = "top" === o ? a.bottom.y : 0,
                  d = "right" === o ? a.left.x : 0,
                  u = "left" === o ? a.right.x : 0,
                  p = t.top - i + l > r,
                  f = i - t.bottom - c > r,
                  h = t.left - n + d > r,
                  m = n - t.right - u > r;
                return p || f || h || m;
              });
            })(i, e) && (N(), te(e));
          }
        }
        function Y(e) {
          X(e) ||
            (w.props.trigger.indexOf("click") >= 0 && u) ||
            (w.props.interactive ? w.hideWithInteractivity(e) : te(e));
        }
        function U(e) {
          (w.props.trigger.indexOf("focusin") < 0 && e.target !== A()) ||
            (w.props.interactive &&
              e.relatedTarget &&
              x.contains(e.relatedTarget)) ||
            te(e);
        }
        function X(e) {
          return !!ke.isTouch && _() !== e.type.indexOf("touch") >= 0;
        }
        function K() {
          Q();
          var t = w.props,
            n = t.popperOptions,
            i = t.placement,
            s = t.offset,
            r = t.getReferenceClientRect,
            o = t.moveTransition,
            l = k() ? Be(x).arrow : null,
            c = r
              ? {
                  getBoundingClientRect: r,
                  contextElement: r.contextElement || A(),
                }
              : e,
            d = [
              { name: "offset", options: { offset: s } },
              {
                name: "preventOverflow",
                options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } },
              },
              { name: "flip", options: { padding: 5 } },
              { name: "computeStyles", options: { adaptive: !o } },
              {
                name: "$$tippy",
                enabled: !0,
                phase: "beforeWrite",
                requires: ["computeStyles"],
                fn: function (e) {
                  var t = e.state;
                  if (k()) {
                    var n = P().box;
                    ["placement", "reference-hidden", "escaped"].forEach(
                      function (e) {
                        "placement" === e
                          ? n.setAttribute("data-placement", t.placement)
                          : t.attributes.popper["data-popper-" + e]
                          ? n.setAttribute("data-" + e, "")
                          : n.removeAttribute("data-" + e);
                      }
                    ),
                      (t.attributes.popper = {});
                  }
                },
              },
            ];
          k() &&
            l &&
            d.push({ name: "arrow", options: { element: l, padding: 3 } }),
            d.push.apply(d, (null == n ? void 0 : n.modifiers) || []),
            (w.popperInstance = (0, re.fi)(
              c,
              x,
              Object.assign({}, n, {
                placement: i,
                onFirstUpdate: a,
                modifiers: d,
              })
            ));
        }
        function Q() {
          w.popperInstance &&
            (w.popperInstance.destroy(), (w.popperInstance = null));
        }
        function J() {
          return we(x.querySelectorAll("[data-tippy-root]"));
        }
        function ee(e) {
          w.clearDelayTimeouts(), e && L("onTrigger", [w, e]), V();
          var t = $(!0),
            i = S(),
            s = i[0],
            r = i[1];
          ke.isTouch && "hold" === s && r && (t = r),
            t
              ? (n = setTimeout(function () {
                  w.show();
                }, t))
              : w.show();
        }
        function te(e) {
          if (
            (w.clearDelayTimeouts(),
            L("onUntrigger", [w, e]),
            w.state.isVisible)
          ) {
            if (
              !(
                w.props.trigger.indexOf("mouseenter") >= 0 &&
                w.props.trigger.indexOf("click") >= 0 &&
                ["mouseleave", "mousemove"].indexOf(e.type) >= 0 &&
                u
              )
            ) {
              var t = $(!1);
              t
                ? (i = setTimeout(function () {
                    w.state.isVisible && w.hide();
                  }, t))
                : (s = requestAnimationFrame(function () {
                    w.hide();
                  }));
            }
          } else B();
        }
      }
      function We(e, t) {
        void 0 === t && (t = {});
        var n = Le.plugins.concat(t.plugins || []);
        document.addEventListener("touchstart", Oe, ue),
          window.addEventListener("blur", $e);
        var i,
          s = Object.assign({}, t, { plugins: n }),
          r = ((i = e),
          Ce(i)
            ? [i]
            : (function (e) {
                return he(e, "NodeList");
              })(i)
            ? we(i)
            : Array.isArray(i)
            ? i
            : we(document.querySelectorAll(i))).reduce(function (e, t) {
            var n = t && qe(t, s);
            return n && e.push(n), e;
          }, []);
        return Ce(e) ? r[0] : r;
      }
      (We.defaultProps = Le),
        (We.setDefaultProps = function (e) {
          Object.keys(e).forEach(function (t) {
            Le[t] = e[t];
          });
        }),
        (We.currentInput = ke),
        Object.assign({}, oe.Z, {
          effect: function (e) {
            var t = e.state,
              n = {
                popper: {
                  position: t.options.strategy,
                  left: "0",
                  top: "0",
                  margin: "0",
                },
                arrow: { position: "absolute" },
                reference: {},
              };
            Object.assign(t.elements.popper.style, n.popper),
              (t.styles = n),
              t.elements.arrow &&
                Object.assign(t.elements.arrow.style, n.arrow);
          },
        }),
        We.setDefaultProps({ render: Fe });
      var Ye = We,
        Ue = n(2003),
        Xe = n.n(Ue);
      const Ke = "bitcoin,ethereum,cardano,solana,xrp";
      n(3733), n(7637);
      new (class {
        constructor() {
          (this.header = document.querySelector(".js-page-header")),
            this.header && (this.initStickyNavbar(), this.events());
        }
        initStickyNavbar() {
          window.scrollY > 0
            ? this.header.classList.add("js-page-header--is-sticky")
            : this.header.classList.remove("js-page-header--is-sticky");
        }
        events() {
          window.addEventListener("scroll", (e) => this.initStickyNavbar(e));
        }
      })(),
        new (class {
          constructor() {
            (this.mobileToggle = document.querySelector(".js-mobile-toggle")),
              (this.mobileMenu = document.querySelector(".js-mobile-menu")),
              (this.mobileMenuClose =
                document.querySelector(".js-mobile-close")),
              (this.pageHeader = document.querySelector(".js-page-header")),
              (this.navDropdown =
                document.querySelectorAll(".js-nav-dropdown")),
              this.mobileToggle && this.events();
          }
          events() {
            (this.belowMobile = window.matchMedia("(max-width: 1024px)")),
              (this.aboveMobile = window.matchMedia("(min-width: 1025px)")),
              this.mobileToggle.addEventListener("click", (e) =>
                this.toggleMobileMenu(e)
              ),
              this.mobileMenuClose.addEventListener("click", (e) =>
                this.toggleMobileMenu(e)
              ),
              this.belowMobile.addListener((e) => {
                e.matches &&
                  this.mobileMenu.classList.remove("nav-menu--is-open");
              }),
              this.aboveMobile.addListener((e) => {
                e.matches &&
                  (document.body.classList.remove("nav-open-noscroll"),
                  this.pageHeader.classList.remove("h-full"),
                  this.mobileMenu.classList.remove("nav-menu--is-open"));
              }),
              this.navDropdown.forEach((e) => {
                e.addEventListener("mouseenter", (e) =>
                  this.toggleAriaExpanded(e)
                ),
                  e.addEventListener("mouseleave", (e) =>
                    this.toggleAriaExpanded(e)
                  );
              });
          }
          toggleAriaExpanded(e) {
            "mouseenter" === e.type
              ? e.target.firstElementChild.setAttribute("aria-expanded", !0)
              : "mouseleave" === e.type &&
                e.target.firstElementChild.setAttribute("aria-expanded", !1);
          }
          toggleMobileMenu(e) {
            document.body.classList.toggle("nav-open-noscroll"),
              this.pageHeader.classList.toggle("h-full"),
              this.mobileMenu.classList.toggle("nav-menu--is-open");
          }
        })(),
        new (class {
          constructor() {
            this.initFullSlider(),
              this.initCenteredSlider(),
              this.initCardSlider(),
              this.initCollectionsSlider(),
              this.initCardSlider3Columns(),
              this.initCardSlider3ColumnsLargeGap(),
              this.initCoverflowSlider(),
              this.initCoverflowSlider2(),
              this.initCardSlider2Columns(),
              this.initSingleSlider(),
              this.initScrollbarSlider();
          }
          initFullSlider() {
            const e = new W(".full-slider-thumbs", {
              modules: [te, ee, J],
              loop: !0,
              slidesPerView: 2,
              breakpoints: { 1024: { slidesPerView: 3 } },
              freeMode: !0,
              preloadImages: !1,
              lazy: !0,
              watchSlidesProgress: !0,
            });
            new W(".full-slider", {
              modules: [te, ee, J],
              speed: 400,
              slidesPerView: 1,
              loop: !0,
              preloadImages: !1,
              lazy: !0,
              autoplay: { delay: 5e3, disableOnInteraction: !1 },
              thumbs: { swiper: e },
            });
          }
          initCenteredSlider() {
            new W(".centered-slider", {
              modules: [J],
              speed: 400,
              spaceBetween: 30,
              slidesPerView: 2,
              slidesPerGroup: 1,
              centeredSlides: !0,
              breakpoints: {
                560: { slidesPerView: 2, slidesPerGroup: 2 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 6 },
              },
              loop: !0,
              preloadImages: !1,
              lazy: !0,
            });
          }
          initCardSlider() {
            new W(".card-slider-4-columns", {
              modules: [U, J],
              speed: 400,
              spaceBetween: 30,
              slidesPerView: 1,
              breakpoints: {
                560: { slidesPerView: 2, slidesPerGroup: 2 },
                768: { slidesPerView: 3, slidesPerGroup: 3 },
                1024: { slidesPerView: 3, slidesPerGroup: 3 },
                1200: { slidesPerView: 4, slidesPerGroup: 4 },
              },
              preloadImages: !1,
              lazy: !0,
              navigation: {
                nextEl: ".swiper-button-next-1",
                prevEl: ".swiper-button-prev-1",
              },
            });
          }
          initCollectionsSlider() {
            new W(".collections-slider", {
              modules: [U, J],
              speed: 400,
              spaceBetween: 30,
              slidesPerView: 1,
              breakpoints: {
                560: { slidesPerView: 2, slidesPerGroup: 2 },
                768: { slidesPerView: 3, slidesPerGroup: 3 },
                1024: { slidesPerView: 3, slidesPerGroup: 3 },
                1200: { slidesPerView: 4, slidesPerGroup: 4 },
              },
              preloadImages: !1,
              lazy: !0,
              navigation: {
                nextEl: ".swiper-button-next-2",
                prevEl: ".swiper-button-prev-2",
              },
            });
          }
          initCardSlider3Columns() {
            new W(".card-slider-3-columns", {
              modules: [U, J],
              speed: 400,
              spaceBetween: 16,
              slidesPerView: 1,
              breakpoints: {
                560: { slidesPerView: 2, slidesPerGroup: 2 },
                768: { slidesPerView: 3, slidesPerGroup: 3 },
                1024: { slidesPerView: 3, slidesPerGroup: 3 },
              },
              preloadImages: !1,
              lazy: !0,
              navigation: {
                nextEl: ".swiper-button-next-3",
                prevEl: ".swiper-button-prev-3",
              },
            });
          }
          initCardSlider3ColumnsLargeGap() {
            new W(".card-slider-3-columns-large-gap", {
              modules: [K, U, J],
              speed: 400,
              spaceBetween: 30,
              slidesPerView: 1,
              loop: !0,
              breakpoints: {
                560: { slidesPerView: 2, slidesPerGroup: 2 },
                768: { slidesPerView: 3, slidesPerGroup: 1 },
                1024: { slidesPerView: 3, slidesPerGroup: 1 },
              },
              preloadImages: !1,
              lazy: !0,
              pagination: {
                el: ".swiper-pagination-1",
                type: "bullets",
                clickable: !0,
              },
            });
          }
          initCoverflowSlider() {
            new W(".coverflow-slider", {
              modules: [U, J, se],
              effect: "coverflow",
              speed: 400,
              loop: !0,
              spaceBetween: 20,
              centeredSlides: !0,
              slidesPerView: 1,
              slidesPerGroup: 1,
              coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 0.5,
                slideShadows: !0,
              },
              breakpoints: {
                560: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
              },
              preloadImages: !1,
              lazy: !0,
              navigation: {
                nextEl: ".swiper-button-next-4",
                prevEl: ".swiper-button-prev-4",
              },
            });
          }
          initCoverflowSlider2() {
            new W(".coverflow-slider-2", {
              modules: [K, J, se],
              effect: "coverflow",
              speed: 400,
              loop: !0,
              spaceBetween: 75,
              centeredSlides: !0,
              slidesPerView: 1,
              slidesPerGroup: 1,
              coverflowEffect: {
                rotate: 10,
                stretch: 0,
                depth: 50,
                modifier: 1.5,
                slideShadows: !1,
              },
              breakpoints: {
                560: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
              },
              preloadImages: !1,
              lazy: !0,
              pagination: {
                el: ".swiper-pagination-2",
                type: "bullets",
                clickable: !0,
              },
            });
          }
          initCardSlider2Columns() {
            new W(".card-slider-2-columns", {
              modules: [K, J, ee],
              speed: 400,
              loop: !0,
              loopAdditionalSlides: 2,
              spaceBetween: 30,
              slidesPerView: 1,
              breakpoints: {
                560: { slidesPerView: 2, slidesPerGroup: 1 },
                768: { slidesPerView: 2, slidesPerGroup: 1 },
                1024: { slidesPerView: 2, slidesPerGroup: 1 },
              },
              preloadImages: !1,
              lazy: !0,
              autoplay: { delay: 3e3, disableOnInteraction: !1 },
              pagination: {
                el: ".swiper-pagination",
                type: "bullets",
                clickable: !0,
              },
            });
          }
          initSingleSlider() {
            new W(".single-slider", {
              modules: [ee, U, J],
              speed: 400,
              loop: !0,
              spaceBetween: 0,
              slidesPerView: 1,
              slidesPerGroup: 1,
              preloadImages: !1,
              lazy: !0,
              autoplay: { delay: 3e3, disableOnInteraction: !1 },
              navigation: {
                nextEl: ".swiper-button-next-5",
                prevEl: ".swiper-button-prev-5",
              },
            });
          }
          initScrollbarSlider() {
            new W(".scrollbar-slider", {
              modules: [Q, U, ee],
              speed: 400,
              scrollbar: { el: ".swiper-scrollbar", hide: !1 },
              autoplay: { delay: 3e3, disableOnInteraction: !1 },
              spaceBetween: 30,
              slidesPerView: 1,
              breakpoints: {
                560: { slidesPerView: 2, slidesPerGroup: 1 },
                768: { slidesPerView: 2, slidesPerGroup: 1 },
                1024: { slidesPerView: 3, slidesPerGroup: 1 },
              },
            });
          }
        })(),
        new (class {
          constructor() {
            Ye("[data-tippy-content]", { theme: "xhibiter" });
          }
        })(),
        new (class {
          constructor() {
            (this.walletIcon = document.querySelectorAll(".js-wallet")),
              (this.walletModal = document.querySelector("#walletModal")),
              this.events(),
              this.detectMetamask();
          }
          events() {
            this.walletIcon.forEach((e) => {
              e.addEventListener("click", (e) => this.iconOnClick(e));
            });
          }
          iconOnClick(e) {
            if ((e.preventDefault(), this.walletConnected)) {
              console.log("Ethereum successfully detected!"),
                this.walletIcon.forEach((e) => {
                  e.removeAttribute("data-bs-toggle"),
                    e.removeAttribute("data-bs-target");
                });
              try {
                ethereum
                  .request({ method: "eth_requestAccounts" })
                  .then(this.handleAccountChanged);
              } catch (e) {
                console.log(e);
              }
            } else console.log("Please install MetaMask!");
          }
          async handleAccountChanged() {
            const e = await ethereum.request({ method: "eth_accounts" });
            console.log(e);
          }
          async detectMetamask() {
            (await Xe()({ silent: !0 }))
              ? ((this.walletConnected = !0),
                this.walletIcon.forEach((e) => {
                  e.removeAttribute("data-bs-toggle"),
                    e.removeAttribute("data-bs-target");
                }))
              : (this.walletConnected = !1);
          }
        })(),
        new (class {
          constructor() {
            (this.likes = document.querySelectorAll(".js-likes")),
              this.events();
          }
          events() {
            this.likes.length > 0 &&
              this.likes.forEach((e) => {
                e.addEventListener("click", (e) => this.handleClick(e));
              });
          }
          handleClick(e) {
            const t = e.currentTarget.nextElementSibling;
            e.currentTarget.classList.toggle("js-likes--active"),
              t &&
                (e.currentTarget.matches(".js-likes--active")
                  ? (t.textContent = Number(t.textContent) + 1)
                  : (t.textContent = Number(t.textContent) - 1));
          }
        })(),
        new (class {
          constructor() {
            (this.copyBtn = document.querySelectorAll(".js-copy-clipboard")),
              this.events();
          }
          events() {
            this.copyBtn.forEach((e) => {
              e.addEventListener("click", (e) => this.handleClick(e));
            });
          }
          handleClick(e) {
            const t = e.currentTarget,
              n = t.dataset.tippyContent;
            if (document.body.createTextRange) {
              const e = document.body.createTextRange();
              e.moveToElementText(t),
                e.select(),
                e.setSelectionRange(0, 99999),
                navigator.clipboard.writeText(e.value),
                t._tippy.setContent("Copied!"),
                t._tippy.show(),
                setTimeout(() => {
                  t._tippy.setContent(n);
                }, 1e3);
            } else {
              const e = window.getSelection(),
                i = document.createRange();
              i.selectNodeContents(t),
                e.removeAllRanges(),
                e.addRange(i),
                navigator.clipboard.writeText(e.focusNode.innerText),
                t._tippy.setContent("Copied!"),
                t._tippy.show(),
                setTimeout(() => {
                  t._tippy.setContent(n);
                }, 1e3);
            }
          }
        })(),
        new (class {
          constructor() {
            (this.cryptoPrices = document.getElementById("js-crypto-prices")),
              (this.pricesWs = new WebSocket(
                `wss://ws.coincap.io/prices?assets=${Ke}`
              )),
              this.fetchData();
          }
          subscribeToSocketPrices = (e) =>
            (this.pricesWs.onmessage = function (t) {
              e(t.data);
            });
          subsribeToUpdates = () => {
            this.subscribeToSocketPrices((e) => {
              const t = this.cryptoPrices.querySelectorAll(".crypto-price"),
                n = JSON.parse(e);
              t.forEach((e) => {
                const t = e.dataset.currency,
                  i = e.querySelector(".crypto-price__price");
                t in n &&
                  (i.getAttribute("data-price") < n[t]
                    ? (i.classList.remove("!text-red"),
                      i.classList.add("!text-green"))
                    : i.getAttribute("data-price") > n[t]
                    ? (i.classList.remove("!text-green"),
                      i.classList.add("!text-red"))
                    : i.getAttribute("data-price") === n[t] &&
                      i.classList.remove("text-green", "text-red"),
                  i.setAttribute("data-price", n[t]),
                  (i.textContent = this.formattedPrice(n[t])));
              });
            });
          };
          async fetchData() {
            try {
              if (!this.cryptoPrices) return;
              this.cryptoPrices.innerHTML =
                '<div class="p-10 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="fill-accent animate-spin"><path fill="none" d="M0 0h24v24H0z"/><path d="M5.463 4.433A9.961 9.961 0 0 1 12 2c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.81 5.74L17 12h3A8 8 0 0 0 6.46 6.228l-.997-1.795zm13.074 15.134A9.961 9.961 0 0 1 12 22C6.477 22 2 17.523 2 12c0-2.136.67-4.116 1.81-5.74L7 12H4a8 8 0 0 0 13.54 5.772l.997 1.795z"/></svg></div>';
              const { data: e } = await fetch(
                `https://api.coincap.io/v2/assets?limit=5&ids=${Ke}`
              ).then((e) => e.json());
              (this.cryptoPrices.innerHTML = ""),
                this.renderData(e),
                this.subsribeToUpdates();
            } catch (e) {
              console.log("Request failed", e.message);
            }
          }
          formattedPrice = (e) =>
            new Intl.NumberFormat("default", {
              style: "currency",
              currency: "USD",
            }).format(e);
          formattedPriceChange = (e) => {
            if (isNaN(e)) return "-";
            const t = new Intl.NumberFormat("default", {
              style: "percent",
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(e / 100);
            return e > 0
              ? `<span class="text-green">${t}</span>`
              : e < 0
              ? `<span class="text-red">${t}</span>`
              : void 0;
          };
          renderData = (e) => {
            e.forEach((e, t) => {
              const n = `<div class="flex crypto-price items-center" data-currency=${
                e.id
              }>\n        <div class="crypto-price__index hidden sm:block lg:pl-10 pl-4 w-[6%] text-sm">${
                t + 1
              }</div>\n        <div class="crypto-price__coin flex w-[36%] items-center px-3 py-5">\n          <img src="./img/coins/${e.symbol.toLowerCase()}.svg" alt="" width="24" height="24" class="mr-2 flex-shrink-0" />\n          <div class="crypto-price__name flex-1 text-sm font-display font-semibold">\n            <span class="text-jacarta-700 dark:text-white mr-3">${
                e.name
              }</span>\n            <span class="text-jacarta-300">${
                e.symbol
              }</span>\n          </div>\n        </div>\n        <div class="crypto-price__price lg:w-[16%] text-right w-[24%] px-3 py-5 text-jacarta-700 dark:text-white" data-price="${
                e.priceUsd
              }">${this.formattedPrice(
                e.priceUsd
              )}</div>\n        <div class="crypto-price__volume w-1/5 hidden text-right md:block px-3 py-5">${this.formattedPrice(
                e.volumeUsd24Hr
              )}</div>\n        <div class="crypto-price__change lg:w-[12%] text-right w-[16%] px-3 py-5">${this.formattedPriceChange(
                e.changePercent24Hr
              )}</div>\n        <div class="crypto-price__trade w-[10%] pl-3 pr-4 py-5 text-right"><a href="#" class="rounded-full hover:bg-jacarta-700 bg-green px-5 py-2 text-white font-display font-semibold text-sm">Buy</a></div>\n      </div>`;
              this.cryptoPrices.insertAdjacentHTML("beforeend", n);
            });
          };
        })(),
        new (class {
          constructor() {
            (this.button = document.querySelector(
              ".js-collections-toggle-filters"
            )),
              (this.sidebar = document.querySelector(
                ".js-collections-sidebar"
              )),
              (this.content = document.querySelector(
                ".js-collections-content"
              )),
              (this.grid = document.querySelector(".js-collections-grid")),
              (this.mediaQuery = window.matchMedia("(max-width: 1024px)")),
              this.events();
          }
          events() {
            this.button &&
              this.button.addEventListener("click", (e) => this.handleClick(e)),
              this.mediaQuery.addListener((e) =>
                this.handleMediaQueryChange(e)
              ),
              this.handleMediaQueryChange(this.mediaQuery);
          }
          handleMediaQueryChange(e) {
            if (e.matches)
              (this.isMobile = !0),
                this.sidebar && this.sidebar.classList.add("!hidden");
            else {
              if (((this.isMobile = !1), !this.sidebar)) return;
              this.sidebar.classList.contains(
                "js-collections-sidebar--is-closed"
              ) ||
                (this.sidebar.classList.remove("!hidden"),
                this.content.classList.remove("!w-full"),
                this.grid.classList.remove("lg:grid-cols-5"));
            }
          }
          handleClick(e) {
            this.sidebar &&
              (this.sidebar.classList.toggle("!hidden"),
              this.sidebar.classList.toggle(
                "js-collections-sidebar--is-closed"
              )),
              this.content &&
                (this.isMobile ||
                  (this.content.classList.toggle("!w-full"),
                  this.grid.classList.toggle("lg:grid-cols-5")));
          }
        })();
    })();
})();
