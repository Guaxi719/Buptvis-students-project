! function(t, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define("me-too-mentum", [], n) : "object" == typeof exports ? exports["me-too-mentum"] = n() : t["me-too-mentum"] = n()
}(window, function() {
    return function(e) {
        var r = {};

        function i(t) {
            if (r[t]) return r[t].exports;
            var n = r[t] = {
                i: t,
                l: !1,
                exports: {}
            };
            return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports
        }
        return i.m = e, i.c = r, i.d = function(t, n, e) {
            i.o(t, n) || Object.defineProperty(t, n, {
                enumerable: !0,
                get: e
            })
        }, i.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, i.t = function(n, t) {
            if (1 & t && (n = i(n)), 8 & t) return n;
            if (4 & t && "object" == typeof n && n && n.__esModule) return n;
            var e = Object.create(null);
            if (i.r(e), Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: n
                }), 2 & t && "string" != typeof n)
                for (var r in n) i.d(e, r, function(t) {
                    return n[t]
                }.bind(null, r));
            return e
        }, i.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return i.d(n, "a", n), n
        }, i.o = function(t, n) {
            return Object.prototype.hasOwnProperty.call(t, n)
        }, i.p = "", i(i.s = 12)
    }([function(t, n, e) {
        "use strict";
        e.r(n);
        var r = "http://www.w3.org/1999/xhtml",
            i = {
                svg: "http://www.w3.org/2000/svg",
                xhtml: r,
                xlink: "http://www.w3.org/1999/xlink",
                xml: "http://www.w3.org/XML/1998/namespace",
                xmlns: "http://www.w3.org/2000/xmlns/"
            },
            o = function(t) {
                var n = t += "",
                    e = n.indexOf(":");
                return 0 <= e && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), i.hasOwnProperty(n) ? {
                    space: i[n],
                    local: t
                } : t
            };
        var u = function(t) {
            var n = o(t);
            return (n.local ? function(t) {
                return function() {
                    return this.ownerDocument.createElementNS(t.space, t.local)
                }
            } : function(e) {
                return function() {
                    var t = this.ownerDocument,
                        n = this.namespaceURI;
                    return n === r && t.documentElement.namespaceURI === r ? t.createElement(e) : t.createElementNS(n, e)
                }
            })(n)
        };

        function a() {}
        var l = function(t) {
            return null == t ? a : function() {
                return this.querySelector(t)
            }
        };

        function c() {
            return []
        }
        var s = function(t) {
                return null == t ? c : function() {
                    return this.querySelectorAll(t)
                }
            },
            f = function(t) {
                return function() {
                    return this.matches(t)
                }
            };
        if ("undefined" != typeof document) {
            var h = document.documentElement;
            if (!h.matches) {
                var d = h.webkitMatchesSelector || h.msMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector;
                f = function(t) {
                    return function() {
                        return d.call(this, t)
                    }
                }
            }
        }
        var p = f,
            v = function(t) {
                return new Array(t.length)
            };

        function g(t, n) {
            this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n
        }
        g.prototype = {
            constructor: g,
            appendChild: function(t) {
                return this._parent.insertBefore(t, this._next)
            },
            insertBefore: function(t, n) {
                return this._parent.insertBefore(t, n)
            },
            querySelector: function(t) {
                return this._parent.querySelector(t)
            },
            querySelectorAll: function(t) {
                return this._parent.querySelectorAll(t)
            }
        };

        function w(t, n, e, r, i, o) {
            for (var u, a = 0, c = n.length, f = o.length; a < f; ++a)(u = n[a]) ? (u.__data__ = o[a], r[a] = u) : e[a] = new g(t, o[a]);
            for (; a < c; ++a)(u = n[a]) && (i[a] = u)
        }

        function M(t, n, e, r, i, o, u) {
            var a, c, f, s = {},
                l = n.length,
                h = o.length,
                d = new Array(l);
            for (a = 0; a < l; ++a)(c = n[a]) && (d[a] = f = "$" + u.call(c, c.__data__, a, n), f in s ? i[a] = c : s[f] = c);
            for (a = 0; a < h; ++a)(c = s[f = "$" + u.call(t, o[a], a, o)]) ? ((r[a] = c).__data__ = o[a], s[f] = null) : e[a] = new g(t, o[a]);
            for (a = 0; a < l; ++a)(c = n[a]) && s[d[a]] === c && (i[a] = c)
        }

        function y(t, n) {
            return t < n ? -1 : n < t ? 1 : n <= t ? 0 : NaN
        }
        var b = function(t) {
            return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
        };

        function m(t, n) {
            return t.style.getPropertyValue(n) || b(t).getComputedStyle(t, null).getPropertyValue(n)
        }

        function _(t) {
            return t.trim().split(/^|\s+/)
        }

        function x(t) {
            return t.classList || new k(t)
        }

        function k(t) {
            this._node = t, this._names = _(t.getAttribute("class") || "")
        }

        function E(t, n) {
            for (var e = x(t), r = -1, i = n.length; ++r < i;) e.add(n[r])
        }

        function T(t, n) {
            for (var e = x(t), r = -1, i = n.length; ++r < i;) e.remove(n[r])
        }
        k.prototype = {
            add: function(t) {
                this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
            },
            remove: function(t) {
                var n = this._names.indexOf(t);
                0 <= n && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
            },
            contains: function(t) {
                return 0 <= this._names.indexOf(t)
            }
        };

        function A() {
            this.textContent = ""
        }

        function S() {
            this.innerHTML = ""
        }

        function C() {
            this.nextSibling && this.parentNode.appendChild(this)
        }

        function N() {
            this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild)
        }

        function O() {
            return null
        }

        function P() {
            var t = this.parentNode;
            t && t.removeChild(this)
        }

        function R() {
            return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling)
        }

        function I() {
            return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling)
        }
        var z = {},
            j = null;
        "undefined" != typeof document && ("onmouseenter" in document.documentElement || (z = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }));

        function D(e, t, n) {
            return e = L(e, t, n),
                function(t) {
                    var n = t.relatedTarget;
                    n && (n === this || 8 & n.compareDocumentPosition(this)) || e.call(this, t)
                }
        }

        function L(e, r, i) {
            return function(t) {
                var n = j;
                j = t;
                try {
                    e.call(this, this.__data__, r, i)
                } finally {
                    j = n
                }
            }
        }

        function B(o) {
            return function() {
                var t = this.__on;
                if (t) {
                    for (var n, e = 0, r = -1, i = t.length; e < i; ++e) n = t[e], o.type && n.type !== o.type || n.name !== o.name ? t[++r] = n : this.removeEventListener(n.type, n.listener, n.capture);
                    ++r ? t.length = r : delete this.__on
                }
            }
        }

        function q(c, f, s) {
            var l = z.hasOwnProperty(c.type) ? D : L;
            return function(t, n, e) {
                var r, i = this.__on,
                    o = l(f, n, e);
                if (i)
                    for (var u = 0, a = i.length; u < a; ++u)
                        if ((r = i[u]).type === c.type && r.name === c.name) return this.removeEventListener(r.type, r.listener, r.capture), this.addEventListener(r.type, r.listener = o, r.capture = s), void(r.value = f);
                this.addEventListener(c.type, o, s), r = {
                    type: c.type,
                    name: c.name,
                    value: f,
                    listener: o,
                    capture: s
                }, i ? i.push(r) : this.__on = [r]
            }
        }

        function F(t, n, e, r) {
            var i = j;
            t.sourceEvent = j, j = t;
            try {
                return n.apply(e, r)
            } finally {
                j = i
            }
        }

        function U(t, n, e) {
            var r = b(t),
                i = r.CustomEvent;
            "function" == typeof i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i)
        }
        var H = [null];

        function Y(t, n) {
            this._groups = t, this._parents = n
        }

        function V() {
            return new Y([
                [document.documentElement]
            ], H)
        }
        Y.prototype = V.prototype = {
            constructor: Y,
            select: function(t) {
                "function" != typeof t && (t = l(t));
                for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                    for (var o, u, a = n[i], c = a.length, f = r[i] = new Array(c), s = 0; s < c; ++s)(o = a[s]) && (u = t.call(o, o.__data__, s, a)) && ("__data__" in o && (u.__data__ = o.__data__), f[s] = u);
                return new Y(r, this._parents)
            },
            selectAll: function(t) {
                "function" != typeof t && (t = s(t));
                for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
                    for (var u, a = n[o], c = a.length, f = 0; f < c; ++f)(u = a[f]) && (r.push(t.call(u, u.__data__, f, a)), i.push(u));
                return new Y(r, i)
            },
            filter: function(t) {
                "function" != typeof t && (t = p(t));
                for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                    for (var o, u = n[i], a = u.length, c = r[i] = [], f = 0; f < a; ++f)(o = u[f]) && t.call(o, o.__data__, f, u) && c.push(o);
                return new Y(r, this._parents)
            },
            data: function(t, n) {
                if (!t) return p = new Array(this.size()), s = -1, this.each(function(t) {
                    p[++s] = t
                }), p;
                var e, r = n ? M : w,
                    i = this._parents,
                    o = this._groups;
                "function" != typeof t && (e = t, t = function() {
                    return e
                });
                for (var u = o.length, a = new Array(u), c = new Array(u), f = new Array(u), s = 0; s < u; ++s) {
                    var l = i[s],
                        h = o[s],
                        d = h.length,
                        p = t.call(l, l && l.__data__, s, i),
                        v = p.length,
                        g = c[s] = new Array(v),
                        y = a[s] = new Array(v);
                    r(l, h, g, y, f[s] = new Array(d), p, n);
                    for (var b, m, _ = 0, x = 0; _ < v; ++_)
                        if (b = g[_]) {
                            for (x <= _ && (x = _ + 1); !(m = y[x]) && ++x < v;);
                            b._next = m || null
                        }
                }
                return (a = new Y(a, i))._enter = c, a._exit = f, a
            },
            enter: function() {
                return new Y(this._enter || this._groups.map(v), this._parents)
            },
            exit: function() {
                return new Y(this._exit || this._groups.map(v), this._parents)
            },
            merge: function(t) {
                for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), a = 0; a < o; ++a)
                    for (var c, f = n[a], s = e[a], l = f.length, h = u[a] = new Array(l), d = 0; d < l; ++d)(c = f[d] || s[d]) && (h[d] = c);
                for (; a < r; ++a) u[a] = n[a];
                return new Y(u, this._parents)
            },
            order: function() {
                for (var t = this._groups, n = -1, e = t.length; ++n < e;)
                    for (var r, i = t[n], o = i.length - 1, u = i[o]; 0 <= --o;)(r = i[o]) && (u && u !== r.nextSibling && u.parentNode.insertBefore(r, u), u = r);
                return this
            },
            sort: function(e) {
                function t(t, n) {
                    return t && n ? e(t.__data__, n.__data__) : !t - !n
                }
                e || (e = y);
                for (var n = this._groups, r = n.length, i = new Array(r), o = 0; o < r; ++o) {
                    for (var u, a = n[o], c = a.length, f = i[o] = new Array(c), s = 0; s < c; ++s)(u = a[s]) && (f[s] = u);
                    f.sort(t)
                }
                return new Y(i, this._parents).order()
            },
            call: function() {
                var t = arguments[0];
                return arguments[0] = this, t.apply(null, arguments), this
            },
            nodes: function() {
                var t = new Array(this.size()),
                    n = -1;
                return this.each(function() {
                    t[++n] = this
                }), t
            },
            node: function() {
                for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
                    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
                        var u = r[i];
                        if (u) return u
                    }
                return null
            },
            size: function() {
                var t = 0;
                return this.each(function() {
                    ++t
                }), t
            },
            empty: function() {
                return !this.node()
            },
            each: function(t) {
                for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
                    for (var i, o = n[e], u = 0, a = o.length; u < a; ++u)(i = o[u]) && t.call(i, i.__data__, u, o);
                return this
            },
            attr: function(t, n) {
                var e = o(t);
                if (arguments.length < 2) {
                    var r = this.node();
                    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
                }
                return this.each((null == n ? e.local ? function(t) {
                    return function() {
                        this.removeAttributeNS(t.space, t.local)
                    }
                } : function(t) {
                    return function() {
                        this.removeAttribute(t)
                    }
                } : "function" == typeof n ? e.local ? function(n, e) {
                    return function() {
                        var t = e.apply(this, arguments);
                        null == t ? this.removeAttributeNS(n.space, n.local) : this.setAttributeNS(n.space, n.local, t)
                    }
                } : function(n, e) {
                    return function() {
                        var t = e.apply(this, arguments);
                        null == t ? this.removeAttribute(n) : this.setAttribute(n, t)
                    }
                } : e.local ? function(t, n) {
                    return function() {
                        this.setAttributeNS(t.space, t.local, n)
                    }
                } : function(t, n) {
                    return function() {
                        this.setAttribute(t, n)
                    }
                })(e, n))
            },
            style: function(t, n, e) {
                return 1 < arguments.length ? this.each((null == n ? function(t) {
                    return function() {
                        this.style.removeProperty(t)
                    }
                } : "function" == typeof n ? function(n, e, r) {
                    return function() {
                        var t = e.apply(this, arguments);
                        null == t ? this.style.removeProperty(n) : this.style.setProperty(n, t, r)
                    }
                } : function(t, n, e) {
                    return function() {
                        this.style.setProperty(t, n, e)
                    }
                })(t, n, null == e ? "" : e)) : m(this.node(), t)
            },
            property: function(t, n) {
                return 1 < arguments.length ? this.each((null == n ? function(t) {
                    return function() {
                        delete this[t]
                    }
                } : "function" == typeof n ? function(n, e) {
                    return function() {
                        var t = e.apply(this, arguments);
                        null == t ? delete this[n] : this[n] = t
                    }
                } : function(t, n) {
                    return function() {
                        this[t] = n
                    }
                })(t, n)) : this.node()[t]
            },
            classed: function(t, n) {
                var e = _(t + "");
                if (arguments.length < 2) {
                    for (var r = x(this.node()), i = -1, o = e.length; ++i < o;)
                        if (!r.contains(e[i])) return !1;
                    return !0
                }
                return this.each(("function" == typeof n ? function(t, n) {
                    return function() {
                        (n.apply(this, arguments) ? E : T)(this, t)
                    }
                } : n ? function(t) {
                    return function() {
                        E(this, t)
                    }
                } : function(t) {
                    return function() {
                        T(this, t)
                    }
                })(e, n))
            },
            text: function(t) {
                return arguments.length ? this.each(null == t ? A : ("function" == typeof t ? function(n) {
                    return function() {
                        var t = n.apply(this, arguments);
                        this.textContent = null == t ? "" : t
                    }
                } : function(t) {
                    return function() {
                        this.textContent = t
                    }
                })(t)) : this.node().textContent
            },
            html: function(t) {
                return arguments.length ? this.each(null == t ? S : ("function" == typeof t ? function(n) {
                    return function() {
                        var t = n.apply(this, arguments);
                        this.innerHTML = null == t ? "" : t
                    }
                } : function(t) {
                    return function() {
                        this.innerHTML = t
                    }
                })(t)) : this.node().innerHTML
            },
            raise: function() {
                return this.each(C)
            },
            lower: function() {
                return this.each(N)
            },
            append: function(t) {
                var n = "function" == typeof t ? t : u(t);
                return this.select(function() {
                    return this.appendChild(n.apply(this, arguments))
                })
            },
            insert: function(t, n) {
                var e = "function" == typeof t ? t : u(t),
                    r = null == n ? O : "function" == typeof n ? n : l(n);
                return this.select(function() {
                    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null)
                })
            },
            remove: function() {
                return this.each(P)
            },
            clone: function(t) {
                return this.select(t ? I : R)
            },
            datum: function(t) {
                return arguments.length ? this.property("__data__", t) : this.node().__data__
            },
            on: function(t, n, e) {
                var r, i, o = (t + "").trim().split(/^|\s+/).map(function(t) {
                        var n = "",
                            e = t.indexOf(".");
                        return 0 <= e && (n = t.slice(e + 1), t = t.slice(0, e)), {
                            type: t,
                            name: n
                        }
                    }),
                    u = o.length;
                if (!(arguments.length < 2)) {
                    for (a = n ? q : B, null == e && (e = !1), r = 0; r < u; ++r) this.each(a(o[r], n, e));
                    return this
                }
                var a = this.node().__on;
                if (a)
                    for (var c, f = 0, s = a.length; f < s; ++f)
                        for (r = 0, c = a[f]; r < u; ++r)
                            if ((i = o[r]).type === c.type && i.name === c.name) return c.value
            },
            dispatch: function(t, n) {
                return this.each(("function" == typeof n ? function(t, n) {
                    return function() {
                        return U(this, t, n.apply(this, arguments))
                    }
                } : function(t, n) {
                    return function() {
                        return U(this, t, n)
                    }
                })(t, n))
            }
        };
        var W = V,
            G = function(t) {
                return "string" == typeof t ? new Y([
                    [document.querySelector(t)]
                ], [document.documentElement]) : new Y([
                    [t]
                ], H)
            },
            X = function(t) {
                return G(u(t).call(document.documentElement))
            },
            $ = 0;

        function Z() {
            return new J
        }

        function J() {
            this._ = "@" + (++$).toString(36)
        }
        J.prototype = Z.prototype = {
            constructor: J,
            get: function(t) {
                for (var n = this._; !(n in t);)
                    if (!(t = t.parentNode)) return;
                return t[n]
            },
            set: function(t, n) {
                return t[this._] = n
            },
            remove: function(t) {
                return this._ in t && delete t[this._]
            },
            toString: function() {
                return this._
            }
        };
        var K = function() {
                for (var t, n = j; t = n.sourceEvent;) n = t;
                return n
            },
            Q = function(t, n) {
                var e = t.ownerSVGElement || t;
                if (e.createSVGPoint) {
                    var r = e.createSVGPoint();
                    return r.x = n.clientX, r.y = n.clientY, [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y]
                }
                var i = t.getBoundingClientRect();
                return [n.clientX - i.left - t.clientLeft, n.clientY - i.top - t.clientTop]
            },
            tt = function(t) {
                var n = K();
                return n.changedTouches && (n = n.changedTouches[0]), Q(t, n)
            },
            nt = function(t) {
                return "string" == typeof t ? new Y([document.querySelectorAll(t)], [document.documentElement]) : new Y([null == t ? [] : t], H)
            },
            et = function(t, n, e) {
                arguments.length < 3 && (e = n, n = K().changedTouches);
                for (var r, i = 0, o = n ? n.length : 0; i < o; ++i)
                    if ((r = n[i]).identifier === e) return Q(t, r);
                return null
            },
            rt = function(t, n) {
                null == n && (n = K().touches);
                for (var e = 0, r = n ? n.length : 0, i = new Array(r); e < r; ++e) i[e] = Q(t, n[e]);
                return i
            };
        e.d(n, "create", function() {
            return X
        }), e.d(n, "creator", function() {
            return u
        }), e.d(n, "local", function() {
            return Z
        }), e.d(n, "matcher", function() {
            return p
        }), e.d(n, "mouse", function() {
            return tt
        }), e.d(n, "namespace", function() {
            return o
        }), e.d(n, "namespaces", function() {
            return i
        }), e.d(n, "clientPoint", function() {
            return Q
        }), e.d(n, "select", function() {
            return G
        }), e.d(n, "selectAll", function() {
            return nt
        }), e.d(n, "selection", function() {
            return W
        }), e.d(n, "selector", function() {
            return l
        }), e.d(n, "selectorAll", function() {
            return s
        }), e.d(n, "style", function() {
            return m
        }), e.d(n, "touch", function() {
            return et
        }), e.d(n, "touches", function() {
            return rt
        }), e.d(n, "window", function() {
            return b
        }), e.d(n, "event", function() {
            return j
        }), e.d(n, "customEvent", function() {
            return F
        })
    }, function(t, n, e) {
        "use strict";
        var r = function(t, n, e) {
            t.prototype = n.prototype = e, e.constructor = t
        };

        function i(t, n) {
            var e = Object.create(t.prototype);
            for (var r in n) e[r] = n[r];
            return e
        }

        function f() {}
        var o = 1 / .7,
            u = "\\s*([+-]?\\d+)\\s*",
            a = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
            c = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
            s = /^#([0-9a-f]{3})$/,
            l = /^#([0-9a-f]{6})$/,
            h = new RegExp("^rgb\\(" + [u, u, u] + "\\)$"),
            d = new RegExp("^rgb\\(" + [c, c, c] + "\\)$"),
            p = new RegExp("^rgba\\(" + [u, u, u, a] + "\\)$"),
            v = new RegExp("^rgba\\(" + [c, c, c, a] + "\\)$"),
            g = new RegExp("^hsl\\(" + [a, c, c] + "\\)$"),
            y = new RegExp("^hsla\\(" + [a, c, c, a] + "\\)$"),
            b = {
                aliceblue: 15792383,
                antiquewhite: 16444375,
                aqua: 65535,
                aquamarine: 8388564,
                azure: 15794175,
                beige: 16119260,
                bisque: 16770244,
                black: 0,
                blanchedalmond: 16772045,
                blue: 255,
                blueviolet: 9055202,
                brown: 10824234,
                burlywood: 14596231,
                cadetblue: 6266528,
                chartreuse: 8388352,
                chocolate: 13789470,
                coral: 16744272,
                cornflowerblue: 6591981,
                cornsilk: 16775388,
                crimson: 14423100,
                cyan: 65535,
                darkblue: 139,
                darkcyan: 35723,
                darkgoldenrod: 12092939,
                darkgray: 11119017,
                darkgreen: 25600,
                darkgrey: 11119017,
                darkkhaki: 12433259,
                darkmagenta: 9109643,
                darkolivegreen: 5597999,
                darkorange: 16747520,
                darkorchid: 10040012,
                darkred: 9109504,
                darksalmon: 15308410,
                darkseagreen: 9419919,
                darkslateblue: 4734347,
                darkslategray: 3100495,
                darkslategrey: 3100495,
                darkturquoise: 52945,
                darkviolet: 9699539,
                deeppink: 16716947,
                deepskyblue: 49151,
                dimgray: 6908265,
                dimgrey: 6908265,
                dodgerblue: 2003199,
                firebrick: 11674146,
                floralwhite: 16775920,
                forestgreen: 2263842,
                fuchsia: 16711935,
                gainsboro: 14474460,
                ghostwhite: 16316671,
                gold: 16766720,
                goldenrod: 14329120,
                gray: 8421504,
                green: 32768,
                greenyellow: 11403055,
                grey: 8421504,
                honeydew: 15794160,
                hotpink: 16738740,
                indianred: 13458524,
                indigo: 4915330,
                ivory: 16777200,
                khaki: 15787660,
                lavender: 15132410,
                lavenderblush: 16773365,
                lawngreen: 8190976,
                lemonchiffon: 16775885,
                lightblue: 11393254,
                lightcoral: 15761536,
                lightcyan: 14745599,
                lightgoldenrodyellow: 16448210,
                lightgray: 13882323,
                lightgreen: 9498256,
                lightgrey: 13882323,
                lightpink: 16758465,
                lightsalmon: 16752762,
                lightseagreen: 2142890,
                lightskyblue: 8900346,
                lightslategray: 7833753,
                lightslategrey: 7833753,
                lightsteelblue: 11584734,
                lightyellow: 16777184,
                lime: 65280,
                limegreen: 3329330,
                linen: 16445670,
                magenta: 16711935,
                maroon: 8388608,
                mediumaquamarine: 6737322,
                mediumblue: 205,
                mediumorchid: 12211667,
                mediumpurple: 9662683,
                mediumseagreen: 3978097,
                mediumslateblue: 8087790,
                mediumspringgreen: 64154,
                mediumturquoise: 4772300,
                mediumvioletred: 13047173,
                midnightblue: 1644912,
                mintcream: 16121850,
                mistyrose: 16770273,
                moccasin: 16770229,
                navajowhite: 16768685,
                navy: 128,
                oldlace: 16643558,
                olive: 8421376,
                olivedrab: 7048739,
                orange: 16753920,
                orangered: 16729344,
                orchid: 14315734,
                palegoldenrod: 15657130,
                palegreen: 10025880,
                paleturquoise: 11529966,
                palevioletred: 14381203,
                papayawhip: 16773077,
                peachpuff: 16767673,
                peru: 13468991,
                pink: 16761035,
                plum: 14524637,
                powderblue: 11591910,
                purple: 8388736,
                rebeccapurple: 6697881,
                red: 16711680,
                rosybrown: 12357519,
                royalblue: 4286945,
                saddlebrown: 9127187,
                salmon: 16416882,
                sandybrown: 16032864,
                seagreen: 3050327,
                seashell: 16774638,
                sienna: 10506797,
                silver: 12632256,
                skyblue: 8900331,
                slateblue: 6970061,
                slategray: 7372944,
                slategrey: 7372944,
                snow: 16775930,
                springgreen: 65407,
                steelblue: 4620980,
                tan: 13808780,
                teal: 32896,
                thistle: 14204888,
                tomato: 16737095,
                turquoise: 4251856,
                violet: 15631086,
                wheat: 16113331,
                white: 16777215,
                whitesmoke: 16119285,
                yellow: 16776960,
                yellowgreen: 10145074
            };

        function m(t) {
            var n;
            return t = (t + "").trim().toLowerCase(), (n = s.exec(t)) ? new k((n = parseInt(n[1], 16)) >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1) : (n = l.exec(t)) ? _(parseInt(n[1], 16)) : (n = h.exec(t)) ? new k(n[1], n[2], n[3], 1) : (n = d.exec(t)) ? new k(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = p.exec(t)) ? x(n[1], n[2], n[3], n[4]) : (n = v.exec(t)) ? x(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = g.exec(t)) ? T(n[1], n[2] / 100, n[3] / 100, 1) : (n = y.exec(t)) ? T(n[1], n[2] / 100, n[3] / 100, n[4]) : b.hasOwnProperty(t) ? _(b[t]) : "transparent" === t ? new k(NaN, NaN, NaN, 0) : null
        }

        function _(t) {
            return new k(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
        }

        function x(t, n, e, r) {
            return r <= 0 && (t = n = e = NaN), new k(t, n, e, r)
        }

        function w(t) {
            return t instanceof f || (t = m(t)), t ? new k((t = t.rgb()).r, t.g, t.b, t.opacity) : new k
        }

        function M(t, n, e, r) {
            return 1 === arguments.length ? w(t) : new k(t, n, e, null == r ? 1 : r)
        }

        function k(t, n, e, r) {
            this.r = +t, this.g = +n, this.b = +e, this.opacity = +r
        }

        function E(t) {
            return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16)
        }

        function T(t, n, e, r) {
            return r <= 0 ? t = n = e = NaN : e <= 0 || 1 <= e ? t = n = NaN : n <= 0 && (t = NaN), new S(t, n, e, r)
        }

        function A(t, n, e, r) {
            return 1 === arguments.length ? function(t) {
                if (t instanceof S) return new S(t.h, t.s, t.l, t.opacity);
                if (t instanceof f || (t = m(t)), !t) return new S;
                if (t instanceof S) return t;
                var n = (t = t.rgb()).r / 255,
                    e = t.g / 255,
                    r = t.b / 255,
                    i = Math.min(n, e, r),
                    o = Math.max(n, e, r),
                    u = NaN,
                    a = o - i,
                    c = (o + i) / 2;
                return a ? (u = n === o ? (e - r) / a + 6 * (e < r) : e === o ? (r - n) / a + 2 : (n - e) / a + 4, a /= c < .5 ? o + i : 2 - o - i, u *= 60) : a = 0 < c && c < 1 ? 0 : u, new S(u, a, c, t.opacity)
            }(t) : new S(t, n, e, null == r ? 1 : r)
        }

        function S(t, n, e, r) {
            this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
        }

        function C(t, n, e) {
            return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n)
        }
        r(f, m, {
            displayable: function() {
                return this.rgb().displayable()
            },
            hex: function() {
                return this.rgb().hex()
            },
            toString: function() {
                return this.rgb() + ""
            }
        }), r(k, M, i(f, {
            brighter: function(t) {
                return t = null == t ? o : Math.pow(o, t), new k(this.r * t, this.g * t, this.b * t, this.opacity)
            },
            darker: function(t) {
                return t = null == t ? .7 : Math.pow(.7, t), new k(this.r * t, this.g * t, this.b * t, this.opacity)
            },
            rgb: function() {
                return this
            },
            displayable: function() {
                return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
            },
            hex: function() {
                return "#" + E(this.r) + E(this.g) + E(this.b)
            },
            toString: function() {
                var t = this.opacity;
                return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
            }
        })), r(S, A, i(f, {
            brighter: function(t) {
                return t = null == t ? o : Math.pow(o, t), new S(this.h, this.s, this.l * t, this.opacity)
            },
            darker: function(t) {
                return t = null == t ? .7 : Math.pow(.7, t), new S(this.h, this.s, this.l * t, this.opacity)
            },
            rgb: function() {
                var t = this.h % 360 + 360 * (this.h < 0),
                    n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                    e = this.l,
                    r = e + (e < .5 ? e : 1 - e) * n,
                    i = 2 * e - r;
                return new k(C(240 <= t ? t - 240 : t + 120, i, r), C(t, i, r), C(t < 120 ? t + 240 : t - 120, i, r), this.opacity)
            },
            displayable: function() {
                return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
            }
        }));
        var N = Math.PI / 180,
            O = 180 / Math.PI,
            P = .96422,
            R = 1,
            I = .82521,
            z = 4 / 29,
            j = 6 / 29,
            D = 3 * j * j,
            L = j * j * j;

        function B(t) {
            if (t instanceof U) return new U(t.l, t.a, t.b, t.opacity);
            if (t instanceof Z) {
                if (isNaN(t.h)) return new U(t.l, 0, 0, t.opacity);
                var n = t.h * N;
                return new U(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity)
            }
            t instanceof k || (t = w(t));
            var e, r, i = W(t.r),
                o = W(t.g),
                u = W(t.b),
                a = H((.2225045 * i + .7168786 * o + .0606169 * u) / R);
            return i === o && o === u ? e = r = a : (e = H((.4360747 * i + .3850649 * o + .1430804 * u) / P), r = H((.0139322 * i + .0971045 * o + .7141733 * u) / I)), new U(116 * a - 16, 500 * (e - a), 200 * (a - r), t.opacity)
        }

        function q(t, n) {
            return new U(t, 0, 0, null == n ? 1 : n)
        }

        function F(t, n, e, r) {
            return 1 === arguments.length ? B(t) : new U(t, n, e, null == r ? 1 : r)
        }

        function U(t, n, e, r) {
            this.l = +t, this.a = +n, this.b = +e, this.opacity = +r
        }

        function H(t) {
            return L < t ? Math.pow(t, 1 / 3) : t / D + z
        }

        function Y(t) {
            return j < t ? t * t * t : D * (t - z)
        }

        function V(t) {
            return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
        }

        function W(t) {
            return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
        }

        function G(t) {
            if (t instanceof Z) return new Z(t.h, t.c, t.l, t.opacity);
            if (t instanceof U || (t = B(t)), 0 === t.a && 0 === t.b) return new Z(NaN, 0, t.l, t.opacity);
            var n = Math.atan2(t.b, t.a) * O;
            return new Z(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
        }

        function X(t, n, e, r) {
            return 1 === arguments.length ? G(t) : new Z(e, n, t, null == r ? 1 : r)
        }

        function $(t, n, e, r) {
            return 1 === arguments.length ? G(t) : new Z(t, n, e, null == r ? 1 : r)
        }

        function Z(t, n, e, r) {
            this.h = +t, this.c = +n, this.l = +e, this.opacity = +r
        }
        r(U, F, i(f, {
            brighter: function(t) {
                return new U(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
            },
            darker: function(t) {
                return new U(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity)
            },
            rgb: function() {
                var t = (this.l + 16) / 116,
                    n = isNaN(this.a) ? t : t + this.a / 500,
                    e = isNaN(this.b) ? t : t - this.b / 200;
                return new k(V(3.1338561 * (n = P * Y(n)) - 1.6168667 * (t = R * Y(t)) - .4906146 * (e = I * Y(e))), V(-.9787684 * n + 1.9161415 * t + .033454 * e), V(.0719453 * n - .2289914 * t + 1.4052427 * e), this.opacity)
            }
        })), r(Z, $, i(f, {
            brighter: function(t) {
                return new Z(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity)
            },
            darker: function(t) {
                return new Z(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity)
            },
            rgb: function() {
                return B(this).rgb()
            }
        }));
        var J = 1.78277,
            K = -.29227,
            Q = -.90649,
            tt = 1.97294,
            nt = tt * Q,
            et = tt * J,
            rt = J * K - -.14861 * Q;

        function it(t, n, e, r) {
            return 1 === arguments.length ? function(t) {
                if (t instanceof ot) return new ot(t.h, t.s, t.l, t.opacity);
                t instanceof k || (t = w(t));
                var n = t.r / 255,
                    e = t.g / 255,
                    r = t.b / 255,
                    i = (rt * r + nt * n - et * e) / (rt + nt - et),
                    o = r - i,
                    u = (tt * (e - i) - K * o) / Q,
                    a = Math.sqrt(u * u + o * o) / (tt * i * (1 - i)),
                    c = a ? Math.atan2(u, o) * O - 120 : NaN;
                return new ot(c < 0 ? c + 360 : c, a, i, t.opacity)
            }(t) : new ot(t, n, e, null == r ? 1 : r)
        }

        function ot(t, n, e, r) {
            this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
        }
        r(ot, it, i(f, {
            brighter: function(t) {
                return t = null == t ? o : Math.pow(o, t), new ot(this.h, this.s, this.l * t, this.opacity)
            },
            darker: function(t) {
                return t = null == t ? .7 : Math.pow(.7, t), new ot(this.h, this.s, this.l * t, this.opacity)
            },
            rgb: function() {
                var t = isNaN(this.h) ? 0 : (this.h + 120) * N,
                    n = +this.l,
                    e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
                    r = Math.cos(t),
                    i = Math.sin(t);
                return new k(255 * (n + e * (-.14861 * r + J * i)), 255 * (n + e * (K * r + Q * i)), 255 * (n + e * (tt * r)), this.opacity)
            }
        })), e.d(n, "a", function() {
            return m
        }), e.d(n, "h", function() {
            return M
        }), e.d(n, "e", function() {
            return A
        }), e.d(n, "f", function() {
            return F
        }), e.d(n, "d", function() {
            return $
        }), e.d(n, "g", function() {
            return X
        }), e.d(n, "c", function() {
            return q
        }), e.d(n, "b", function() {
            return it
        })
    }, function(t, n, e) {
        "use strict";
        var c = e(1);

        function f(t, n, e, r, i) {
            var o = t * t,
                u = o * t;
            return ((1 - 3 * t + 3 * o - u) * n + (4 - 6 * o + 3 * u) * e + (1 + 3 * t + 3 * o - 3 * u) * r + u * i) / 6
        }
        var r = function(u) {
                var a = u.length - 1;
                return function(t) {
                    var n = t <= 0 ? t = 0 : 1 <= t ? a - (t = 1) : Math.floor(t * a),
                        e = u[n],
                        r = u[n + 1],
                        i = 0 < n ? u[n - 1] : 2 * e - r,
                        o = n < a - 1 ? u[n + 2] : 2 * r - e;
                    return f((t - n / a) * a, i, e, r, o)
                }
            },
            i = function(u) {
                var a = u.length;
                return function(t) {
                    var n = Math.floor(((t %= 1) < 0 ? ++t : t) * a),
                        e = u[(n + a - 1) % a],
                        r = u[n % a],
                        i = u[(n + 1) % a],
                        o = u[(n + 2) % a];
                    return f((t - n / a) * a, e, r, i, o)
                }
            },
            u = function(t) {
                return function() {
                    return t
                }
            };

        function o(n, e) {
            return function(t) {
                return n + t * e
            }
        }

        function a(t, n) {
            var e = n - t;
            return e ? o(t, 180 < e || e < -180 ? e - 360 * Math.round(e / 360) : e) : u(isNaN(t) ? n : t)
        }

        function s(o) {
            return 1 == (o = +o) ? l : function(t, n) {
                return n - t ? (e = t, r = n, i = o, e = Math.pow(e, i), r = Math.pow(r, i) - e, i = 1 / i, function(t) {
                    return Math.pow(e + t * r, i)
                }) : u(isNaN(t) ? n : t);
                var e, r, i
            }
        }

        function l(t, n) {
            var e = n - t;
            return e ? o(t, e) : u(isNaN(t) ? n : t)
        }
        var h = function t(n) {
            var u = s(n);

            function e(n, t) {
                var e = u((n = Object(c.h)(n)).r, (t = Object(c.h)(t)).r),
                    r = u(n.g, t.g),
                    i = u(n.b, t.b),
                    o = l(n.opacity, t.opacity);
                return function(t) {
                    return n.r = e(t), n.g = r(t), n.b = i(t), n.opacity = o(t), n + ""
                }
            }
            return e.gamma = t, e
        }(1);

        function d(a) {
            return function(t) {
                var n, e, r = t.length,
                    i = new Array(r),
                    o = new Array(r),
                    u = new Array(r);
                for (n = 0; n < r; ++n) e = Object(c.h)(t[n]), i[n] = e.r || 0, o[n] = e.g || 0, u[n] = e.b || 0;
                return i = a(i), o = a(o), u = a(u), e.opacity = 1,
                    function(t) {
                        return e.r = i(t), e.g = o(t), e.b = u(t), e + ""
                    }
            }
        }
        var p = d(r),
            v = d(i),
            g = function(t, n) {
                var e, r = n ? n.length : 0,
                    i = t ? Math.min(r, t.length) : 0,
                    o = new Array(i),
                    u = new Array(r);
                for (e = 0; e < i; ++e) o[e] = A(t[e], n[e]);
                for (; e < r; ++e) u[e] = n[e];
                return function(t) {
                    for (e = 0; e < i; ++e) u[e] = o[e](t);
                    return u
                }
            },
            y = function(n, e) {
                var r = new Date;
                return e -= n = +n,
                    function(t) {
                        return r.setTime(n + e * t), r
                    }
            },
            b = function(n, e) {
                return e -= n = +n,
                    function(t) {
                        return n + e * t
                    }
            },
            m = function(t, n) {
                var e, r = {},
                    i = {};
                for (e in null !== t && "object" == typeof t || (t = {}), null !== n && "object" == typeof n || (n = {}), n) e in t ? r[e] = A(t[e], n[e]) : i[e] = n[e];
                return function(t) {
                    for (e in r) i[e] = r[e](t);
                    return i
                }
            },
            _ = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
            x = new RegExp(_.source, "g");
        var w, M, k, E, T = function(t, r) {
                var n, e, i, o, u, a = _.lastIndex = x.lastIndex = 0,
                    c = -1,
                    f = [],
                    s = [];
                for (t += "", r += "";
                    (n = _.exec(t)) && (e = x.exec(r));)(i = e.index) > a && (i = r.slice(a, i), f[c] ? f[c] += i : f[++c] = i), (n = n[0]) === (e = e[0]) ? f[c] ? f[c] += e : f[++c] = e : (f[++c] = null, s.push({
                    i: c,
                    x: b(n, e)
                })), a = x.lastIndex;
                return a < r.length && (i = r.slice(a), f[c] ? f[c] += i : f[++c] = i), f.length < 2 ? s[0] ? (u = s[0].x, function(t) {
                    return u(t) + ""
                }) : (o = r, function() {
                    return o
                }) : (r = s.length, function(t) {
                    for (var n, e = 0; e < r; ++e) f[(n = s[e]).i] = n.x(t);
                    return f.join("")
                })
            },
            A = function(t, n) {
                var e, r = typeof n;
                return null == n || "boolean" === r ? u(n) : ("number" === r ? b : "string" === r ? (e = Object(c.a)(n)) ? (n = e, h) : T : n instanceof c.a ? h : n instanceof Date ? y : Array.isArray(n) ? g : "function" != typeof n.valueOf && "function" != typeof n.toString || isNaN(n) ? m : b)(t, n)
            },
            S = function(n, e) {
                return e -= n = +n,
                    function(t) {
                        return Math.round(n + e * t)
                    }
            },
            C = 180 / Math.PI,
            N = {
                translateX: 0,
                translateY: 0,
                rotate: 0,
                skewX: 0,
                scaleX: 1,
                scaleY: 1
            },
            O = function(t, n, e, r, i, o) {
                var u, a, c;
                return (u = Math.sqrt(t * t + n * n)) && (t /= u, n /= u), (c = t * e + n * r) && (e -= t * c, r -= n * c), (a = Math.sqrt(e * e + r * r)) && (e /= a, r /= a, c /= a), t * r < n * e && (t = -t, n = -n, c = -c, u = -u), {
                    translateX: i,
                    translateY: o,
                    rotate: Math.atan2(n, t) * C,
                    skewX: Math.atan(c) * C,
                    scaleX: u,
                    scaleY: a
                }
            };

        function P(h, d, p, v) {
            function g(t) {
                return t.length ? t.pop() + " " : ""
            }
            return function(t, n) {
                var e, r, i, o, u, a, c, f, s = [],
                    l = [];
                return t = h(t), n = h(n),
                    function(t, n, e, r, i, o) {
                        if (t !== e || n !== r) {
                            var u = i.push("translate(", null, d, null, p);
                            o.push({
                                i: u - 4,
                                x: b(t, e)
                            }, {
                                i: u - 2,
                                x: b(n, r)
                            })
                        } else(e || r) && i.push("translate(" + e + d + r + p)
                    }(t.translateX, t.translateY, n.translateX, n.translateY, s, l), e = t.rotate, r = n.rotate, i = s, o = l, e !== r ? (180 < e - r ? r += 360 : 180 < r - e && (e += 360), o.push({
                        i: i.push(g(i) + "rotate(", null, v) - 2,
                        x: b(e, r)
                    })) : r && i.push(g(i) + "rotate(" + r + v), u = t.skewX, a = n.skewX, c = s, f = l, u !== a ? f.push({
                        i: c.push(g(c) + "skewX(", null, v) - 2,
                        x: b(u, a)
                    }) : a && c.push(g(c) + "skewX(" + a + v),
                    function(t, n, e, r, i, o) {
                        if (t !== e || n !== r) {
                            var u = i.push(g(i) + "scale(", null, ",", null, ")");
                            o.push({
                                i: u - 4,
                                x: b(t, e)
                            }, {
                                i: u - 2,
                                x: b(n, r)
                            })
                        } else 1 === e && 1 === r || i.push(g(i) + "scale(" + e + "," + r + ")")
                    }(t.scaleX, t.scaleY, n.scaleX, n.scaleY, s, l), t = n = null,
                    function(t) {
                        for (var n, e = -1, r = l.length; ++e < r;) s[(n = l[e]).i] = n.x(t);
                        return s.join("")
                    }
            }
        }
        var R = P(function(t) {
                return "none" === t ? N : (w || (w = document.createElement("DIV"), M = document.documentElement, k = document.defaultView), w.style.transform = t, t = k.getComputedStyle(M.appendChild(w), null).getPropertyValue("transform"), M.removeChild(w), t = t.slice(7, -1).split(","), O(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]))
            }, "px, ", "px)", "deg)"),
            I = P(function(t) {
                return null == t ? N : (E || (E = document.createElementNS("http://www.w3.org/2000/svg", "g")), E.setAttribute("transform", t), (t = E.transform.baseVal.consolidate()) ? (t = t.matrix, O(t.a, t.b, t.c, t.d, t.e, t.f)) : N)
            }, ", ", ")", ")"),
            z = Math.SQRT2;

        function j(t) {
            return ((t = Math.exp(t)) + 1 / t) / 2
        }
        var D = function(t, n) {
            var e, u, a = t[0],
                c = t[1],
                f = t[2],
                r = n[0],
                i = n[1],
                o = n[2],
                s = r - a,
                l = i - c,
                h = s * s + l * l;
            if (h < 1e-12) u = Math.log(o / f) / z, e = function(t) {
                return [a + t * s, c + t * l, f * Math.exp(z * t * u)]
            };
            else {
                var d = Math.sqrt(h),
                    p = (o * o - f * f + 4 * h) / (2 * f * 2 * d),
                    v = (o * o - f * f - 4 * h) / (2 * o * 2 * d),
                    g = Math.log(Math.sqrt(p * p + 1) - p),
                    y = Math.log(Math.sqrt(v * v + 1) - v);
                u = (y - g) / z, e = function(t) {
                    var n, e, r = t * u,
                        i = j(g),
                        o = f / (2 * d) * (i * (e = z * r + g, ((e = Math.exp(2 * e)) - 1) / (e + 1)) - (n = g, ((n = Math.exp(n)) - 1 / n) / 2));
                    return [a + o * s, c + o * l, f * i / j(z * r + g)]
                }
            }
            return e.duration = 1e3 * u, e
        };

        function L(u) {
            return function(n, t) {
                var e = u((n = Object(c.e)(n)).h, (t = Object(c.e)(t)).h),
                    r = l(n.s, t.s),
                    i = l(n.l, t.l),
                    o = l(n.opacity, t.opacity);
                return function(t) {
                    return n.h = e(t), n.s = r(t), n.l = i(t), n.opacity = o(t), n + ""
                }
            }
        }
        var B = L(a),
            q = L(l);

        function F(n, t) {
            var e = l((n = Object(c.f)(n)).l, (t = Object(c.f)(t)).l),
                r = l(n.a, t.a),
                i = l(n.b, t.b),
                o = l(n.opacity, t.opacity);
            return function(t) {
                return n.l = e(t), n.a = r(t), n.b = i(t), n.opacity = o(t), n + ""
            }
        }

        function U(u) {
            return function(n, t) {
                var e = u((n = Object(c.d)(n)).h, (t = Object(c.d)(t)).h),
                    r = l(n.c, t.c),
                    i = l(n.l, t.l),
                    o = l(n.opacity, t.opacity);
                return function(t) {
                    return n.h = e(t), n.c = r(t), n.l = i(t), n.opacity = o(t), n + ""
                }
            }
        }
        var H = U(a),
            Y = U(l);

        function V(a) {
            return function t(u) {
                function n(n, t) {
                    var e = a((n = Object(c.b)(n)).h, (t = Object(c.b)(t)).h),
                        r = l(n.s, t.s),
                        i = l(n.l, t.l),
                        o = l(n.opacity, t.opacity);
                    return function(t) {
                        return n.h = e(t), n.s = r(t), n.l = i(Math.pow(t, u)), n.opacity = o(t), n + ""
                    }
                }
                return u = +u, n.gamma = t, n
            }(1)
        }
        var W = V(a),
            G = V(l);

        function X(t, n) {
            for (var e = 0, r = n.length - 1, i = n[0], o = new Array(r < 0 ? 0 : r); e < r;) o[e] = t(i, i = n[++e]);
            return function(t) {
                var n = Math.max(0, Math.min(r - 1, Math.floor(t *= r)));
                return o[n](t - n)
            }
        }
        var $ = function(t, n) {
            for (var e = new Array(n), r = 0; r < n; ++r) e[r] = t(r / (n - 1));
            return e
        };
        e.d(n, "a", function() {
            return A
        }), e.d(n, "b", function() {
            return g
        }), e.d(n, "c", function() {
            return r
        }), e.d(n, "d", function() {
            return i
        }), e.d(n, "g", function() {
            return y
        }), e.d(n, "m", function() {
            return b
        }), e.d(n, "n", function() {
            return m
        }), e.d(n, "r", function() {
            return S
        }), e.d(n, "s", function() {
            return T
        }), e.d(n, "t", function() {
            return R
        }), e.d(n, "u", function() {
            return I
        }), e.d(n, "v", function() {
            return D
        }), e.d(n, "o", function() {
            return h
        }), e.d(n, "p", function() {
            return p
        }), e.d(n, "q", function() {
            return v
        }), e.d(n, "j", function() {
            return B
        }), e.d(n, "k", function() {
            return q
        }), e.d(n, "l", function() {
            return F
        }), e.d(n, "h", function() {
            return H
        }), e.d(n, "i", function() {
            return Y
        }), e.d(n, "e", function() {
            return W
        }), e.d(n, "f", function() {
            return G
        }), e.d(n, "w", function() {
            return X
        }), e.d(n, "x", function() {
            return $
        })
    }, function(t, n, e) {
        "use strict";
        var o = {
            value: function() {}
        };

        function r() {
            for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
                if (!(t = arguments[n] + "") || t in r) throw new Error("illegal type: " + t);
                r[t] = []
            }
            return new i(r)
        }

        function i(t) {
            this._ = t
        }

        function c(t, n) {
            for (var e, r = 0, i = t.length; r < i; ++r)
                if ((e = t[r]).name === n) return e.value
        }

        function f(t, n, e) {
            for (var r = 0, i = t.length; r < i; ++r)
                if (t[r].name === n) {
                    t[r] = o, t = t.slice(0, r).concat(t.slice(r + 1));
                    break
                }
            return null != e && t.push({
                name: n,
                value: e
            }), t
        }
        i.prototype = r.prototype = {
            constructor: i,
            on: function(t, n) {
                var e, r, i = this._,
                    o = (r = i, (t + "").trim().split(/^|\s+/).map(function(t) {
                        var n = "",
                            e = t.indexOf(".");
                        if (0 <= e && (n = t.slice(e + 1), t = t.slice(0, e)), t && !r.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                        return {
                            type: t,
                            name: n
                        }
                    })),
                    u = -1,
                    a = o.length;
                if (!(arguments.length < 2)) {
                    if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);
                    for (; ++u < a;)
                        if (e = (t = o[u]).type) i[e] = f(i[e], t.name, n);
                        else if (null == n)
                        for (e in i) i[e] = f(i[e], t.name, null);
                    return this
                }
                for (; ++u < a;)
                    if ((e = (t = o[u]).type) && (e = c(i[e], t.name))) return e
            },
            copy: function() {
                var t = {},
                    n = this._;
                for (var e in n) t[e] = n[e].slice();
                return new i(t)
            },
            call: function(t, n) {
                if (0 < (e = arguments.length - 2))
                    for (var e, r, i = new Array(e), o = 0; o < e; ++o) i[o] = arguments[o + 2];
                if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                for (o = 0, e = (r = this._[t]).length; o < e; ++o) r[o].value.apply(n, i)
            },
            apply: function(t, n, e) {
                if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
                for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e)
            }
        };
        var u = r;
        e.d(n, "a", function() {
            return u
        })
    }, function(t, n, e) {
        "use strict";
        var i, o, r = 0,
            u = 0,
            a = 0,
            c = 1e3,
            f = 0,
            s = 0,
            l = 0,
            h = "object" == typeof performance && performance.now ? performance : Date,
            d = "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
                setTimeout(t, 17)
            };

        function p() {
            return s || (d(v), s = h.now() + l)
        }

        function v() {
            s = 0
        }

        function g() {
            this._call = this._time = this._next = null
        }

        function y(t, n, e) {
            var r = new g;
            return r.restart(t, n, e), r
        }

        function b() {
            p(), ++r;
            for (var t, n = i; n;) 0 <= (t = s - n._time) && n._call.call(null, t), n = n._next;
            --r
        }

        function m() {
            s = (f = h.now()) + l, r = u = 0;
            try {
                b()
            } finally {
                r = 0,
                    function() {
                        var t, n, e = i,
                            r = 1 / 0;
                        for (; e;) e = e._call ? (r > e._time && (r = e._time), (t = e)._next) : (n = e._next, e._next = null, t ? t._next = n : i = n);
                        o = t, x(r)
                    }(), s = 0
            }
        }

        function _() {
            var t = h.now(),
                n = t - f;
            c < n && (l -= n, f = t)
        }

        function x(t) {
            r || (u && (u = clearTimeout(u)), 24 < t - s ? (t < 1 / 0 && (u = setTimeout(m, t - h.now() - l)), a && (a = clearInterval(a))) : (a || (f = h.now(), a = setInterval(_, c)), r = 1, d(m)))
        }
        g.prototype = y.prototype = {
            constructor: g,
            restart: function(t, n, e) {
                if ("function" != typeof t) throw new TypeError("callback is not a function");
                e = (null == e ? p() : +e) + (null == n ? 0 : +n), this._next || o === this || (o ? o._next = this : i = this, o = this), this._call = t, this._time = e, x()
            },
            stop: function() {
                this._call && (this._call = null, this._time = 1 / 0, x())
            }
        };
        var w = function(n, e, t) {
                var r = new g;
                return e = null == e ? 0 : +e, r.restart(function(t) {
                    r.stop(), n(t + e)
                }, e, t), r
            },
            M = function(e, r, i) {
                var o = new g,
                    u = r;
                return null == r ? o.restart(e, r, i) : (r = +r, i = null == i ? p() : +i, o.restart(function t(n) {
                    n += u, o.restart(t, u += r, i), e(n)
                }, r, i)), o
            };
        e.d(n, "b", function() {
            return p
        }), e.d(n, "d", function() {
            return y
        }), e.d(n, "e", function() {
            return b
        }), e.d(n, "c", function() {
            return w
        }), e.d(n, "a", function() {
            return M
        })
    }, function(t, n, e) {
        "use strict";
        e.r(n);
        var r = "$";

        function a() {}

        function i(t, n) {
            var e = new a;
            if (t instanceof a) t.each(function(t, n) {
                e.set(n, t)
            });
            else if (Array.isArray(t)) {
                var r, i = -1,
                    o = t.length;
                if (null == n)
                    for (; ++i < o;) e.set(i, t[i]);
                else
                    for (; ++i < o;) e.set(n(r = t[i], i, t), r)
            } else if (t)
                for (var u in t) e.set(u, t[u]);
            return e
        }
        a.prototype = i.prototype = {
            constructor: a,
            has: function(t) {
                return r + t in this
            },
            get: function(t) {
                return this[r + t]
            },
            set: function(t, n) {
                return this[r + t] = n, this
            },
            remove: function(t) {
                var n = r + t;
                return n in this && delete this[n]
            },
            clear: function() {
                for (var t in this) t[0] === r && delete this[t]
            },
            keys: function() {
                var t = [];
                for (var n in this) n[0] === r && t.push(n.slice(1));
                return t
            },
            values: function() {
                var t = [];
                for (var n in this) n[0] === r && t.push(this[n]);
                return t
            },
            entries: function() {
                var t = [];
                for (var n in this) n[0] === r && t.push({
                    key: n.slice(1),
                    value: this[n]
                });
                return t
            },
            size: function() {
                var t = 0;
                for (var n in this) n[0] === r && ++t;
                return t
            },
            empty: function() {
                for (var t in this)
                    if (t[0] === r) return !1;
                return !0
            },
            each: function(t) {
                for (var n in this) n[0] === r && t(this[n], n.slice(1), this)
            }
        };
        var g = i,
            o = function() {
                var h, d, n, p = [],
                    u = [];

                function v(t, e, r, i) {
                    if (e >= p.length) return null != h && t.sort(h), null != d ? d(t) : t;
                    for (var n, o, u, a = -1, c = t.length, f = p[e++], s = g(), l = r(); ++a < c;)(u = s.get(n = f(o = t[a]) + "")) ? u.push(o) : s.set(n, [o]);
                    return s.each(function(t, n) {
                        i(l, n, v(t, e, r, i))
                    }), l
                }
                return n = {
                    object: function(t) {
                        return v(t, 0, c, f)
                    },
                    map: function(t) {
                        return v(t, 0, s, l)
                    },
                    entries: function(t) {
                        return function e(t, r) {
                            if (++r > p.length) return t;
                            var i, o = u[r - 1];
                            return null != d && r >= p.length ? i = t.entries() : (i = [], t.each(function(t, n) {
                                i.push({
                                    key: n,
                                    values: e(t, r)
                                })
                            })), null != o ? i.sort(function(t, n) {
                                return o(t.key, n.key)
                            }) : i
                        }(v(t, 0, s, l), 0)
                    },
                    key: function(t) {
                        return p.push(t), n
                    },
                    sortKeys: function(t) {
                        return u[p.length - 1] = t, n
                    },
                    sortValues: function(t) {
                        return h = t, n
                    },
                    rollup: function(t) {
                        return d = t, n
                    }
                }
            };

        function c() {
            return {}
        }

        function f(t, n, e) {
            t[n] = e
        }

        function s() {
            return g()
        }

        function l(t, n, e) {
            t.set(n, e)
        }

        function u() {}
        var h = g.prototype;

        function d(t, n) {
            var e = new u;
            if (t instanceof u) t.each(function(t) {
                e.add(t)
            });
            else if (t) {
                var r = -1,
                    i = t.length;
                if (null == n)
                    for (; ++r < i;) e.add(t[r]);
                else
                    for (; ++r < i;) e.add(n(t[r], r, t))
            }
            return e
        }
        u.prototype = d.prototype = {
            constructor: u,
            has: h.has,
            add: function(t) {
                return this[r + (t += "")] = t, this
            },
            remove: h.remove,
            clear: h.clear,
            values: h.keys,
            size: h.size,
            empty: h.empty,
            each: h.each
        };
        var p = d,
            v = function(t) {
                var n = [];
                for (var e in t) n.push(e);
                return n
            },
            y = function(t) {
                var n = [];
                for (var e in t) n.push(t[e]);
                return n
            },
            b = function(t) {
                var n = [];
                for (var e in t) n.push({
                    key: e,
                    value: t[e]
                });
                return n
            };
        e.d(n, "nest", function() {
            return o
        }), e.d(n, "set", function() {
            return p
        }), e.d(n, "map", function() {
            return g
        }), e.d(n, "keys", function() {
            return v
        }), e.d(n, "values", function() {
            return y
        }), e.d(n, "entries", function() {
            return b
        })
    }, function(t, n, e) {
        "use strict";
        e.r(n);
        var x = e(0),
            r = e(3),
            d = e(4),
            a = Object(r.a)("start", "end", "interrupt"),
            c = [],
            f = 0,
            p = 2,
            y = function(t, n, e, r, i, o) {
                var u = t.__transition;
                if (u) {
                    if (e in u) return
                } else t.__transition = {};
                ! function(o, u, a) {
                    var c, f = o.__transition;

                    function s(t) {
                        var n, e, r, i;
                        if (1 !== a.state) return h();
                        for (n in f)
                            if ((i = f[n]).name === a.name) {
                                if (3 === i.state) return Object(d.c)(s);
                                4 === i.state ? (i.state = 6, i.timer.stop(), i.on.call("interrupt", o, o.__data__, i.index, i.group), delete f[n]) : +n < u && (i.state = 6, i.timer.stop(), delete f[n])
                            }
                        if (Object(d.c)(function() {
                                3 === a.state && (a.state = 4, a.timer.restart(l, a.delay, a.time), l(t))
                            }), a.state = p, a.on.call("start", o, o.__data__, a.index, a.group), a.state === p) {
                            for (a.state = 3, c = new Array(r = a.tween.length), n = 0, e = -1; n < r; ++n)(i = a.tween[n].value.call(o, o.__data__, a.index, a.group)) && (c[++e] = i);
                            c.length = e + 1
                        }
                    }

                    function l(t) {
                        for (var n = t < a.duration ? a.ease.call(null, t / a.duration) : (a.timer.restart(h), a.state = 5, 1), e = -1, r = c.length; ++e < r;) c[e].call(null, n);
                        5 === a.state && (a.on.call("end", o, o.__data__, a.index, a.group), h())
                    }

                    function h() {
                        for (var t in a.state = 6, a.timer.stop(), delete f[u], f) return;
                        delete o.__transition
                    }(f[u] = a).timer = Object(d.d)(function(t) {
                        a.state = 1, a.timer.restart(s, a.delay, a.time), a.delay <= t && s(t - a.delay)
                    }, 0, a.time)
                }(t, e, {
                    name: n,
                    index: r,
                    group: i,
                    on: a,
                    tween: c,
                    time: o.time,
                    delay: o.delay,
                    duration: o.duration,
                    ease: o.ease,
                    timer: null,
                    state: f
                })
            };

        function s(t, n) {
            var e = b(t, n);
            if (e.state > f) throw new Error("too late; already scheduled");
            return e
        }

        function l(t, n) {
            var e = b(t, n);
            if (e.state > p) throw new Error("too late; already started");
            return e
        }

        function b(t, n) {
            var e = t.__transition;
            if (!e || !(e = e[n])) throw new Error("transition not found");
            return e
        }
        var i = function(t, n) {
                var e, r, i, o = t.__transition,
                    u = !0;
                if (o) {
                    for (i in n = null == n ? null : n + "", o)(e = o[i]).name === n ? (r = e.state > p && e.state < 5, e.state = 6, e.timer.stop(), r && e.on.call("interrupt", t, t.__data__, e.index, e.group), delete o[i]) : u = !1;
                    u && delete t.__transition
                }
            },
            w = e(2);

        function M(t, n, e) {
            var r = t._id;
            return t.each(function() {
                    var t = l(this, r);
                    (t.value || (t.value = {}))[n] = e.apply(this, arguments)
                }),
                function(t) {
                    return b(t, r).value[n]
                }
        }
        var o = e(1),
            k = function(t, n) {
                var e;
                return ("number" == typeof n ? w.m : n instanceof o.a ? w.o : (e = Object(o.a)(n)) ? (n = e, w.o) : w.s)(t, n)
            };
        var u = x.selection.prototype.constructor;
        var h = 0;

        function m(t, n, e, r) {
            this._groups = t, this._parents = n, this._name = e, this._id = r
        }

        function v(t) {
            return Object(x.selection)().transition(t)
        }

        function g() {
            return ++h
        }
        var _ = x.selection.prototype;
        m.prototype = v.prototype = {
            constructor: m,
            select: function(t) {
                var n = this._name,
                    e = this._id;
                "function" != typeof t && (t = Object(x.selector)(t));
                for (var r = this._groups, i = r.length, o = new Array(i), u = 0; u < i; ++u)
                    for (var a, c, f = r[u], s = f.length, l = o[u] = new Array(s), h = 0; h < s; ++h)(a = f[h]) && (c = t.call(a, a.__data__, h, f)) && ("__data__" in a && (c.__data__ = a.__data__), l[h] = c, y(l[h], n, e, h, l, b(a, e)));
                return new m(o, this._parents, n, e)
            },
            selectAll: function(t) {
                var n = this._name,
                    e = this._id;
                "function" != typeof t && (t = Object(x.selectorAll)(t));
                for (var r = this._groups, i = r.length, o = [], u = [], a = 0; a < i; ++a)
                    for (var c, f = r[a], s = f.length, l = 0; l < s; ++l)
                        if (c = f[l]) {
                            for (var h, d = t.call(c, c.__data__, l, f), p = b(c, e), v = 0, g = d.length; v < g; ++v)(h = d[v]) && y(h, n, e, v, d, p);
                            o.push(d), u.push(c)
                        }
                return new m(o, u, n, e)
            },
            filter: function(t) {
                "function" != typeof t && (t = Object(x.matcher)(t));
                for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
                    for (var o, u = n[i], a = u.length, c = r[i] = [], f = 0; f < a; ++f)(o = u[f]) && t.call(o, o.__data__, f, u) && c.push(o);
                return new m(r, this._parents, this._name, this._id)
            },
            merge: function(t) {
                if (t._id !== this._id) throw new Error;
                for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), u = new Array(r), a = 0; a < o; ++a)
                    for (var c, f = n[a], s = e[a], l = f.length, h = u[a] = new Array(l), d = 0; d < l; ++d)(c = f[d] || s[d]) && (h[d] = c);
                for (; a < r; ++a) u[a] = n[a];
                return new m(u, this._parents, this._name, this._id)
            },
            selection: function() {
                return new u(this._groups, this._parents)
            },
            transition: function() {
                for (var t = this._name, n = this._id, e = g(), r = this._groups, i = r.length, o = 0; o < i; ++o)
                    for (var u, a = r[o], c = a.length, f = 0; f < c; ++f)
                        if (u = a[f]) {
                            var s = b(u, n);
                            y(u, t, e, f, a, {
                                time: s.time + s.delay + s.duration,
                                delay: 0,
                                duration: s.duration,
                                ease: s.ease
                            })
                        }
                return new m(r, this._parents, t, e)
            },
            call: _.call,
            nodes: _.nodes,
            node: _.node,
            size: _.size,
            empty: _.empty,
            each: _.each,
            on: function(t, n) {
                var e, r, i, o, u, a, c = this._id;
                return arguments.length < 2 ? b(this.node(), c).on.on(t) : this.each((e = c, i = n, a = ((r = t) + "").trim().split(/^|\s+/).every(function(t) {
                    var n = t.indexOf(".");
                    return 0 <= n && (t = t.slice(0, n)), !t || "start" === t
                }) ? s : l, function() {
                    var t = a(this, e),
                        n = t.on;
                    n !== o && (u = (o = n).copy()).on(r, i), t.on = u
                }))
            },
            attr: function(t, n) {
                var e = Object(x.namespace)(t),
                    r = "transform" === e ? w.u : k;
                return this.attrTween(t, "function" == typeof n ? (e.local ? function(e, r, i) {
                    var o, u, a;
                    return function() {
                        var t, n = i(this);
                        if (null != n) return (t = this.getAttributeNS(e.space, e.local)) === n ? null : t === o && n === u ? a : a = r(o = t, u = n);
                        this.removeAttributeNS(e.space, e.local)
                    }
                } : function(e, r, i) {
                    var o, u, a;
                    return function() {
                        var t, n = i(this);
                        if (null != n) return (t = this.getAttribute(e)) === n ? null : t === o && n === u ? a : a = r(o = t, u = n);
                        this.removeAttribute(e)
                    }
                })(e, r, M(this, "attr." + t, n)) : null == n ? (e.local ? function(t) {
                    return function() {
                        this.removeAttributeNS(t.space, t.local)
                    }
                } : function(t) {
                    return function() {
                        this.removeAttribute(t)
                    }
                })(e) : (e.local ? function(n, e, r) {
                    var i, o;
                    return function() {
                        var t = this.getAttributeNS(n.space, n.local);
                        return t === r ? null : t === i ? o : o = e(i = t, r)
                    }
                } : function(n, e, r) {
                    var i, o;
                    return function() {
                        var t = this.getAttribute(n);
                        return t === r ? null : t === i ? o : o = e(i = t, r)
                    }
                })(e, r, n + ""))
            },
            attrTween: function(t, n) {
                var e = "attr." + t;
                if (arguments.length < 2) return (e = this.tween(e)) && e._value;
                if (null == n) return this.tween(e, null);
                if ("function" != typeof n) throw new Error;
                var r = Object(x.namespace)(t);
                return this.tween(e, (r.local ? function(r, t) {
                    function n() {
                        var n = this,
                            e = t.apply(n, arguments);
                        return e && function(t) {
                            n.setAttributeNS(r.space, r.local, e(t))
                        }
                    }
                    return n._value = t, n
                } : function(r, t) {
                    function n() {
                        var n = this,
                            e = t.apply(n, arguments);
                        return e && function(t) {
                            n.setAttribute(r, e(t))
                        }
                    }
                    return n._value = t, n
                })(r, n))
            },
            style: function(t, n, e) {
                var r, i, o, u, a, c, f, s, l, h, d, p, v, g, y, b, m, _ = "transform" == (t += "") ? w.t : k;
                return null == n ? this.styleTween(t, (v = t, g = _, function() {
                    var t = Object(x.style)(this, v),
                        n = (this.style.removeProperty(v), Object(x.style)(this, v));
                    return t === n ? null : t === y && n === b ? m : m = g(y = t, b = n)
                })).on("end.style." + t, (p = t, function() {
                    this.style.removeProperty(p)
                })) : this.styleTween(t, "function" == typeof n ? (f = _, s = M(this, "style." + (c = t), n), function() {
                    var t = Object(x.style)(this, c),
                        n = s(this);
                    return null == n && (this.style.removeProperty(c), n = Object(x.style)(this, c)), t === n ? null : t === l && n === h ? d : d = f(l = t, h = n)
                }) : (r = t, i = _, o = n + "", function() {
                    var t = Object(x.style)(this, r);
                    return t === o ? null : t === u ? a : a = i(u = t, o)
                }), e)
            },
            styleTween: function(t, n, e) {
                var r = "style." + (t += "");
                if (arguments.length < 2) return (r = this.tween(r)) && r._value;
                if (null == n) return this.tween(r, null);
                if ("function" != typeof n) throw new Error;
                return this.tween(r, function(r, t, i) {
                    function n() {
                        var n = this,
                            e = t.apply(n, arguments);
                        return e && function(t) {
                            n.style.setProperty(r, e(t), i)
                        }
                    }
                    return n._value = t, n
                }(t, n, null == e ? "" : e))
            },
            text: function(t) {
                return this.tween("text", "function" == typeof t ? (e = M(this, "text", t), function() {
                    var t = e(this);
                    this.textContent = null == t ? "" : t
                }) : (n = null == t ? "" : t + "", function() {
                    this.textContent = n
                }));
                var n, e
            },
            remove: function() {
                return this.on("end.remove", (e = this._id, function() {
                    var t = this.parentNode;
                    for (var n in this.__transition)
                        if (+n !== e) return;
                    t && t.removeChild(this)
                }));
                var e
            },
            tween: function(t, n) {
                var e = this._id;
                if (t += "", arguments.length < 2) {
                    for (var r, i = b(this.node(), e).tween, o = 0, u = i.length; o < u; ++o)
                        if ((r = i[o]).name === t) return r.value;
                    return null
                }
                return this.each((null == n ? function(i, o) {
                    var u, a;
                    return function() {
                        var t = l(this, i),
                            n = t.tween;
                        if (n !== u)
                            for (var e = 0, r = (a = u = n).length; e < r; ++e)
                                if (a[e].name === o) {
                                    (a = a.slice()).splice(e, 1);
                                    break
                                }
                        t.tween = a
                    }
                } : function(o, u, a) {
                    var c, f;
                    if ("function" != typeof a) throw new Error;
                    return function() {
                        var t = l(this, o),
                            n = t.tween;
                        if (n !== c) {
                            f = (c = n).slice();
                            for (var e = {
                                    name: u,
                                    value: a
                                }, r = 0, i = f.length; r < i; ++r)
                                if (f[r].name === u) {
                                    f[r] = e;
                                    break
                                }
                            r === i && f.push(e)
                        }
                        t.tween = f
                    }
                })(e, t, n))
            },
            delay: function(t) {
                var n = this._id;
                return arguments.length ? this.each(("function" == typeof t ? function(t, n) {
                    return function() {
                        s(this, t).delay = +n.apply(this, arguments)
                    }
                } : function(t, n) {
                    return n = +n,
                        function() {
                            s(this, t).delay = n
                        }
                })(n, t)) : b(this.node(), n).delay
            },
            duration: function(t) {
                var n = this._id;
                return arguments.length ? this.each(("function" == typeof t ? function(t, n) {
                    return function() {
                        l(this, t).duration = +n.apply(this, arguments)
                    }
                } : function(t, n) {
                    return n = +n,
                        function() {
                            l(this, t).duration = n
                        }
                })(n, t)) : b(this.node(), n).duration
            },
            ease: function(t) {
                var n = this._id;
                return arguments.length ? this.each(function(t, n) {
                    if ("function" != typeof n) throw new Error;
                    return function() {
                        l(this, t).ease = n
                    }
                }(n, t)) : b(this.node(), n).ease
            }
        };
        var E = {
            time: null,
            delay: 0,
            duration: 250,
            ease: e(7).o
        };

        function T(t, n) {
            for (var e; !(e = t.__transition) || !(e = e[n]);)
                if (!(t = t.parentNode)) return E.time = Object(d.b)(), E;
            return e
        }
        x.selection.prototype.interrupt = function(t) {
            return this.each(function() {
                i(this, t)
            })
        }, x.selection.prototype.transition = function(t) {
            var n, e;
            t = t instanceof m ? (n = t._id, t._name) : (n = g(), (e = E).time = Object(d.b)(), null == t ? null : t + "");
            for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
                for (var u, a = r[o], c = a.length, f = 0; f < c; ++f)(u = a[f]) && y(u, t, n, f, a, e || T(u, n));
            return new m(r, this._parents, t, n)
        };
        var A = [null],
            S = function(t, n) {
                var e, r, i = t.__transition;
                if (i)
                    for (r in n = null == n ? null : n + "", i)
                        if (1 < (e = i[r]).state && e.name === n) return new m([
                            [t]
                        ], A, n, +r);
                return null
            };
        e.d(n, "transition", function() {
            return v
        }), e.d(n, "active", function() {
            return S
        }), e.d(n, "interrupt", function() {
            return i
        })
    }, function(t, n, e) {
        "use strict";

        function r(t) {
            return +t
        }

        function i(t) {
            return t * t
        }

        function o(t) {
            return t * (2 - t)
        }

        function u(t) {
            return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2
        }

        function a(t) {
            return t * t * t
        }

        function c(t) {
            return --t * t * t + 1
        }

        function f(t) {
            return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
        }
        var s = function t(n) {
                function e(t) {
                    return Math.pow(t, n)
                }
                return n = +n, e.exponent = t, e
            }(3),
            l = function t(n) {
                function e(t) {
                    return 1 - Math.pow(1 - t, n)
                }
                return n = +n, e.exponent = t, e
            }(3),
            h = function t(n) {
                function e(t) {
                    return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2
                }
                return n = +n, e.exponent = t, e
            }(3),
            d = Math.PI,
            p = d / 2;

        function v(t) {
            return 1 - Math.cos(t * p)
        }

        function g(t) {
            return Math.sin(t * p)
        }

        function y(t) {
            return (1 - Math.cos(d * t)) / 2
        }

        function b(t) {
            return Math.pow(2, 10 * t - 10)
        }

        function m(t) {
            return 1 - Math.pow(2, -10 * t)
        }

        function _(t) {
            return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2
        }

        function x(t) {
            return 1 - Math.sqrt(1 - t * t)
        }

        function w(t) {
            return Math.sqrt(1 - --t * t)
        }

        function M(t) {
            return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2
        }
        var k = 4 / 11,
            E = 6 / 11,
            T = 8 / 11,
            A = .75,
            S = 9 / 11,
            C = 10 / 11,
            N = .9375,
            O = 21 / 22,
            P = 63 / 64,
            R = 1 / k / k;

        function I(t) {
            return 1 - z(1 - t)
        }

        function z(t) {
            return (t = +t) < k ? R * t * t : t < T ? R * (t -= E) * t + A : t < C ? R * (t -= S) * t + N : R * (t -= O) * t + P
        }

        function j(t) {
            return ((t *= 2) <= 1 ? 1 - z(1 - t) : z(t - 1) + 1) / 2
        }
        var D = 1.70158,
            L = function t(n) {
                function e(t) {
                    return t * t * ((n + 1) * t - n)
                }
                return n = +n, e.overshoot = t, e
            }(D),
            B = function t(n) {
                function e(t) {
                    return --t * t * ((n + 1) * t + n) + 1
                }
                return n = +n, e.overshoot = t, e
            }(D),
            q = function t(n) {
                function e(t) {
                    return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2
                }
                return n = +n, e.overshoot = t, e
            }(D),
            F = 2 * Math.PI,
            U = function n(e, r) {
                var i = Math.asin(1 / (e = Math.max(1, e))) * (r /= F);

                function t(t) {
                    return e * Math.pow(2, 10 * --t) * Math.sin((i - t) / r)
                }
                return t.amplitude = function(t) {
                    return n(t, r * F)
                }, t.period = function(t) {
                    return n(e, t)
                }, t
            }(1, .3),
            H = function n(e, r) {
                var i = Math.asin(1 / (e = Math.max(1, e))) * (r /= F);

                function t(t) {
                    return 1 - e * Math.pow(2, -10 * (t = +t)) * Math.sin((t + i) / r)
                }
                return t.amplitude = function(t) {
                    return n(t, r * F)
                }, t.period = function(t) {
                    return n(e, t)
                }, t
            }(1, .3),
            Y = function n(e, r) {
                var i = Math.asin(1 / (e = Math.max(1, e))) * (r /= F);

                function t(t) {
                    return ((t = 2 * t - 1) < 0 ? e * Math.pow(2, 10 * t) * Math.sin((i - t) / r) : 2 - e * Math.pow(2, -10 * t) * Math.sin((i + t) / r)) / 2
                }
                return t.amplitude = function(t) {
                    return n(t, r * F)
                }, t.period = function(t) {
                    return n(e, t)
                }, t
            }(1, .3);
        e.d(n, "y", function() {
            return r
        }), e.d(n, "D", function() {
            return u
        }), e.d(n, "E", function() {
            return i
        }), e.d(n, "G", function() {
            return o
        }), e.d(n, "F", function() {
            return u
        }), e.d(n, "m", function() {
            return f
        }), e.d(n, "n", function() {
            return a
        }), e.d(n, "p", function() {
            return c
        }), e.d(n, "o", function() {
            return f
        }), e.d(n, "z", function() {
            return h
        }), e.d(n, "A", function() {
            return s
        }), e.d(n, "C", function() {
            return l
        }), e.d(n, "B", function() {
            return h
        }), e.d(n, "H", function() {
            return y
        }), e.d(n, "I", function() {
            return v
        }), e.d(n, "K", function() {
            return g
        }), e.d(n, "J", function() {
            return y
        }), e.d(n, "u", function() {
            return _
        }), e.d(n, "v", function() {
            return b
        }), e.d(n, "x", function() {
            return m
        }), e.d(n, "w", function() {
            return _
        }), e.d(n, "i", function() {
            return M
        }), e.d(n, "j", function() {
            return x
        }), e.d(n, "l", function() {
            return w
        }), e.d(n, "k", function() {
            return M
        }), e.d(n, "e", function() {
            return z
        }), e.d(n, "f", function() {
            return I
        }), e.d(n, "h", function() {
            return z
        }), e.d(n, "g", function() {
            return j
        }), e.d(n, "a", function() {
            return q
        }), e.d(n, "b", function() {
            return L
        }), e.d(n, "d", function() {
            return B
        }), e.d(n, "c", function() {
            return q
        }), e.d(n, "q", function() {
            return H
        }), e.d(n, "r", function() {
            return U
        }), e.d(n, "t", function() {
            return H
        }), e.d(n, "s", function() {
            return Y
        })
    }, function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.trackNav = n.trackSocialShare = n.trackSectionRead = n.trackPageRead = n.trackEvent = n.sectionReadTime = n.pageReadTime = void 0;
        var r = e(0),
            i = n.pageReadTime = 2e4,
            o = n.sectionReadTime = 1e4,
            u = n.trackEvent = function(t) {
                var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
                    e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
                ga && ga("send", {
                    hitType: "event",
                    eventCategory: t,
                    eventAction: n,
                    eventLabel: e
                })
            };
        n.trackPageRead = function(t) {
            return setTimeout(function() {
                return u(t, "Reading")
            }, i)
        }, n.trackSectionRead = function(t, n) {
            return setTimeout(function() {
                return u(t, "Reading", n)
            }, o)
        }, n.trackSocialShare = function(t) {
            (0, r.select)(".social-share").on("mouseenter", function() {
                return u(t, "Share", "Hover")
            }).on("click", function() {
                return u(t, "Share", "Click")
            }), (0, r.select)("#share-fb").on("click", function() {
                return u(t, "Share", "Facebook")
            }), (0, r.select)("#share-lin").on("click", function() {
                return u(t, "Share", "LinkedId")
            }), (0, r.select)("#share-t").on("click", function() {
                return u(t, "Share", "Twitter")
            }), (0, r.select)("#share-p").on("click", function() {
                return u(t, "Share", "Pinterest")
            })
        }, n.trackNav = function(t) {
            (0, r.select)(".nav-left").on("click", function() {
                return u(t, "Nav link", "Intro")
            }), (0, r.select)(".nav-about").on("click", function() {
                return u(t, "Nav link", "About")
            })
        }
    }, function(t, n, e) {
        "use strict";

        function r(i, o, u, a) {
            var c, f = 0;
            return "boolean" != typeof o && (a = u, u = o, o = void 0),
                function() {
                    var t = this,
                        n = Number(new Date) - f,
                        e = arguments;

                    function r() {
                        f = Number(new Date), u.apply(t, e)
                    }
                    a && !c && r(), c && clearTimeout(c), void 0 === a && i < n ? r() : !0 !== o && (c = setTimeout(a ? function() {
                        c = void 0
                    } : r, void 0 === a ? i - n : i))
                }
        }

        function i(t, n, e) {
            return void 0 === e ? r(t, n, !1) : r(t, e, !1 !== n)
        }
        e.r(n), e.d(n, "throttle", function() {
            return r
        }), e.d(n, "debounce", function() {
            return i
        })
    }, function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.getCenterPoint = h, n.getControlPoint = u, n.getCurvePoints = a, n.getForcePoints = c, n.createPath = function(t, n) {
            var e = a(t, n),
                r = e.startPoint,
                i = e.endPoint,
                o = e.controlPoint;
            return f(r, i, o)
        }, n.createForcePath = function(t) {
            var n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                e = c(t, n),
                r = e.startPoint,
                i = e.endPoint,
                o = e.controlPoint;
            return f(r, i, o)
        }, n.getEllipseCoord = function(t) {
            var n = a(t),
                e = n.startPoint,
                r = n.controlPoint,
                i = s(e, r),
                o = Math.PI / 15,
                u = d(e, 10, i + Math.PI + o);
            return u.angle = i, u
        }, n.getCurvedPath = f, n.rad2deg = function(t) {
            return 180 * t / Math.PI
        }, n.getAngle = s, n.getPointOnAngle = l, n.getPointOnCircle = d, n.distanceTwoPoints = p, n.getWindowDimensions = r, n.isMobile = function() {
            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1024;
            return r().width < t
        }, n.elementInView = function(t) {
            var n = window.scrollY + window.innerHeight / 2,
                e = document.querySelector(t);
            if (e) {
                var r = e.offsetTop + e.offsetHeight / 2;
                return r <= n
            }
            return !1
        };
        var i = function(t) {
            {
                if (t && t.__esModule) return t;
                var n = {};
                if (null != t)
                    for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
                return n.default = t, n
            }
        }(e(11));

        function h(t, n) {
            return {
                x: (t.x + n.x) / 2,
                y: (t.y + n.y) / 2
            }
        }

        function u(t) {
            var n = t.startPoint,
                e = t.endPoint,
                r = t.d,
                i = t.side,
                o = void 0 === i ? 1 : i,
                u = t.curvature,
                a = void 0 === u ? 4 : u,
                c = h(n, e),
                f = p(n, e) / a,
                s = r && r.hasOwnProperty("controlPointRadius") ? r.controlPointRadius : f / 2,
                l = Math.atan2(e.y - n.y, e.x - n.x);
            return {
                x: o * s * Math.sin(l) + c.x,
                y: -s * Math.cos(l) + c.y
            }
        }

        function a(t) {
            var n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                e = {
                    x: t.center.x,
                    y: t.center.y
                },
                r = n ? l(t.angle, t.radius).x : t.pointCoord.x,
                i = n ? l(t.angle, t.radius).y : t.pointCoord.y,
                o = {
                    x: t.center.x + r,
                    y: t.center.y + i
                };
            return {
                startPoint: e,
                endPoint: o,
                centerPoint: h(e, o),
                controlPoint: u({
                    startPoint: e,
                    endPoint: o,
                    d: t
                })
            }
        }

        function c(t) {
            var n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                e = {
                    x: n ? t.target.x : t.source.x,
                    y: n ? t.target.y : t.source.y
                },
                r = n ? l(t.angle, t.radius).x : 0,
                i = n ? l(t.angle, t.radius).y : 0,
                o = {
                    x: t.target.x + r,
                    y: t.target.y + i
                };
            return {
                startPoint: e,
                endPoint: o,
                centerPoint: h(e, o),
                controlPoint: u({
                    startPoint: e,
                    endPoint: o,
                    d: t
                })
            }
        }

        function f(t, n, e) {
            var r = i.path();
            return r.moveTo(t.x, t.y), r.quadraticCurveTo(e.x, e.y, n.x, n.y), r.toString()
        }

        function s(t, n) {
            var e = t.x - n.x,
                r = t.y - n.y;
            return Math.atan2(r, e)
        }

        function l(t, n) {
            return {
                x: n * Math.cos(t),
                y: n * Math.sin(t)
            }
        }

        function d(t, n, e) {
            return {
                x: t.x + n * Math.cos(e),
                y: t.y + n * Math.sin(e)
            }
        }

        function p(t, n) {
            return Math.sqrt(Math.pow(t.x - n.x, 2) + Math.pow(t.y - n.y, 2))
        }

        function r() {
            var t = window;
            return {
                width: t ? t.innerWidth : 0,
                height: t ? t.innerHeight : 0
            }
        }
    }, function(t, n, e) {
        "use strict";
        e.r(n);
        var a = function(t, n) {
                return t < n ? -1 : n < t ? 1 : n <= t ? 0 : NaN
            },
            k = function(o) {
                var e;
                return 1 === o.length && (e = o, o = function(t, n) {
                    return a(e(t), n)
                }), {
                    left: function(t, n, e, r) {
                        for (null == e && (e = 0), null == r && (r = t.length); e < r;) {
                            var i = e + r >>> 1;
                            o(t[i], n) < 0 ? e = i + 1 : r = i
                        }
                        return e
                    },
                    right: function(t, n, e, r) {
                        for (null == e && (e = 0), null == r && (r = t.length); e < r;) {
                            var i = e + r >>> 1;
                            0 < o(t[i], n) ? r = i : e = i + 1
                        }
                        return e
                    }
                }
            };
        var r = k(a),
            i = r.right,
            o = r.left,
            v = i,
            u = function(t, n) {
                null == n && (n = s);
                for (var e = 0, r = t.length - 1, i = t[0], o = new Array(r < 0 ? 0 : r); e < r;) o[e] = n(i, i = t[++e]);
                return o
            };

        function s(t, n) {
            return [t, n]
        }
        var c = function(t, n, e) {
                var r, i, o, u, a = t.length,
                    c = n.length,
                    f = new Array(a * c);
                for (null == e && (e = s), r = o = 0; r < a; ++r)
                    for (u = t[r], i = 0; i < c; ++i, ++o) f[o] = e(u, n[i]);
                return f
            },
            f = function(t, n) {
                return n < t ? -1 : t < n ? 1 : t <= n ? 0 : NaN
            },
            l = function(t) {
                return null === t ? NaN : +t
            },
            h = function(t, n) {
                var e, r, i = t.length,
                    o = 0,
                    u = -1,
                    a = 0,
                    c = 0;
                if (null == n)
                    for (; ++u < i;) isNaN(e = l(t[u])) || (c += (r = e - a) * (e - (a += r / ++o)));
                else
                    for (; ++u < i;) isNaN(e = l(n(t[u], u, t))) || (c += (r = e - a) * (e - (a += r / ++o)));
                if (1 < o) return c / (o - 1)
            },
            d = function(t, n) {
                var e = h(t, n);
                return e ? Math.sqrt(e) : e
            },
            g = function(t, n) {
                var e, r, i, o = t.length,
                    u = -1;
                if (null == n) {
                    for (; ++u < o;)
                        if (null != (e = t[u]) && e <= e)
                            for (r = i = e; ++u < o;) null != (e = t[u]) && (e < r && (r = e), i < e && (i = e))
                } else
                    for (; ++u < o;)
                        if (null != (e = n(t[u], u, t)) && e <= e)
                            for (r = i = e; ++u < o;) null != (e = n(t[u], u, t)) && (e < r && (r = e), i < e && (i = e));
                return [r, i]
            },
            p = Array.prototype,
            y = p.slice,
            b = p.map,
            m = function(t) {
                return function() {
                    return t
                }
            },
            _ = function(t) {
                return t
            },
            E = function(t, n, e) {
                t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
                for (var r = -1, i = 0 | Math.max(0, Math.ceil((n - t) / e)), o = new Array(i); ++r < i;) o[r] = t + r * e;
                return o
            },
            x = Math.sqrt(50),
            w = Math.sqrt(10),
            M = Math.sqrt(2),
            T = function(t, n, e) {
                var r, i, o, u, a = -1;
                if (e = +e, (t = +t) === (n = +n) && 0 < e) return [t];
                if ((r = n < t) && (i = t, t = n, n = i), 0 === (u = A(t, n, e)) || !isFinite(u)) return [];
                if (0 < u)
                    for (t = Math.ceil(t / u), n = Math.floor(n / u), o = new Array(i = Math.ceil(n - t + 1)); ++a < i;) o[a] = (t + a) * u;
                else
                    for (t = Math.floor(t * u), n = Math.ceil(n * u), o = new Array(i = Math.ceil(t - n + 1)); ++a < i;) o[a] = (t - a) / u;
                return r && o.reverse(), o
            };

        function A(t, n, e) {
            var r = (n - t) / Math.max(0, e),
                i = Math.floor(Math.log(r) / Math.LN10),
                o = r / Math.pow(10, i);
            return 0 <= i ? (x <= o ? 10 : w <= o ? 5 : M <= o ? 2 : 1) * Math.pow(10, i) : -Math.pow(10, -i) / (x <= o ? 10 : w <= o ? 5 : M <= o ? 2 : 1)
        }

        function S(t, n, e) {
            var r = Math.abs(n - t) / Math.max(0, e),
                i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
                o = r / i;
            return x <= o ? i *= 10 : w <= o ? i *= 5 : M <= o && (i *= 2), n < t ? -i : i
        }
        var C = function(t) {
                return Math.ceil(Math.log(t.length) / Math.LN2) + 1
            },
            N = function() {
                var h = _,
                    d = g,
                    p = C;

                function n(t) {
                    var n, e, r = t.length,
                        i = new Array(r);
                    for (n = 0; n < r; ++n) i[n] = h(t[n], n, t);
                    var o = d(i),
                        u = o[0],
                        a = o[1],
                        c = p(i, u, a);
                    Array.isArray(c) || (c = S(u, a, c), c = E(Math.ceil(u / c) * c, Math.floor(a / c) * c, c));
                    for (var f = c.length; c[0] <= u;) c.shift(), --f;
                    for (; c[f - 1] > a;) c.pop(), --f;
                    var s, l = new Array(f + 1);
                    for (n = 0; n <= f; ++n)(s = l[n] = []).x0 = 0 < n ? c[n - 1] : u, s.x1 = n < f ? c[n] : a;
                    for (n = 0; n < r; ++n) u <= (e = i[n]) && e <= a && l[v(c, e, 0, f)].push(t[n]);
                    return l
                }
                return n.value = function(t) {
                    return arguments.length ? (h = "function" == typeof t ? t : m(t), n) : h
                }, n.domain = function(t) {
                    return arguments.length ? (d = "function" == typeof t ? t : m([t[0], t[1]]), n) : d
                }, n.thresholds = function(t) {
                    return arguments.length ? (p = "function" == typeof t ? t : Array.isArray(t) ? m(y.call(t)) : m(t), n) : p
                }, n
            },
            O = function(t, n, e) {
                if (null == e && (e = l), r = t.length) {
                    if ((n = +n) <= 0 || r < 2) return +e(t[0], 0, t);
                    if (1 <= n) return +e(t[r - 1], r - 1, t);
                    var r, i = (r - 1) * n,
                        o = Math.floor(i),
                        u = +e(t[o], o, t);
                    return u + (+e(t[o + 1], o + 1, t) - u) * (i - o)
                }
            },
            P = function(t, n, e) {
                return t = b.call(t, l).sort(a), Math.ceil((e - n) / (2 * (O(t, .75) - O(t, .25)) * Math.pow(t.length, -1 / 3)))
            },
            R = function(t, n, e) {
                return Math.ceil((e - n) / (3.5 * d(t) * Math.pow(t.length, -1 / 3)))
            },
            I = function(t, n) {
                var e, r, i = t.length,
                    o = -1;
                if (null == n) {
                    for (; ++o < i;)
                        if (null != (e = t[o]) && e <= e)
                            for (r = e; ++o < i;) null != (e = t[o]) && r < e && (r = e)
                } else
                    for (; ++o < i;)
                        if (null != (e = n(t[o], o, t)) && e <= e)
                            for (r = e; ++o < i;) null != (e = n(t[o], o, t)) && r < e && (r = e);
                return r
            },
            z = function(t, n) {
                var e, r = t.length,
                    i = r,
                    o = -1,
                    u = 0;
                if (null == n)
                    for (; ++o < r;) isNaN(e = l(t[o])) ? --i : u += e;
                else
                    for (; ++o < r;) isNaN(e = l(n(t[o], o, t))) ? --i : u += e;
                if (i) return u / i
            },
            j = function(t, n) {
                var e, r = t.length,
                    i = -1,
                    o = [];
                if (null == n)
                    for (; ++i < r;) isNaN(e = l(t[i])) || o.push(e);
                else
                    for (; ++i < r;) isNaN(e = l(n(t[i], i, t))) || o.push(e);
                return O(o.sort(a), .5)
            },
            D = function(t) {
                for (var n, e, r, i = t.length, o = -1, u = 0; ++o < i;) u += t[o].length;
                for (e = new Array(u); 0 <= --i;)
                    for (n = (r = t[i]).length; 0 <= --n;) e[--u] = r[n];
                return e
            },
            L = function(t, n) {
                var e, r, i = t.length,
                    o = -1;
                if (null == n) {
                    for (; ++o < i;)
                        if (null != (e = t[o]) && e <= e)
                            for (r = e; ++o < i;) null != (e = t[o]) && e < r && (r = e)
                } else
                    for (; ++o < i;)
                        if (null != (e = n(t[o], o, t)) && e <= e)
                            for (r = e; ++o < i;) null != (e = n(t[o], o, t)) && e < r && (r = e);
                return r
            },
            B = function(t, n) {
                for (var e = n.length, r = new Array(e); e--;) r[e] = t[n[e]];
                return r
            },
            q = function(t, n) {
                if (e = t.length) {
                    var e, r, i = 0,
                        o = 0,
                        u = t[o];
                    for (null == n && (n = a); ++i < e;)(n(r = t[i], u) < 0 || 0 !== n(u, u)) && (u = r, o = i);
                    return 0 === n(u, u) ? o : void 0
                }
            },
            F = function(t, n, e) {
                for (var r, i, o = (null == e ? t.length : e) - (n = null == n ? 0 : +n); o;) i = Math.random() * o-- | 0, r = t[o + n], t[o + n] = t[i + n], t[i + n] = r;
                return t
            },
            U = function(t, n) {
                var e, r = t.length,
                    i = -1,
                    o = 0;
                if (null == n)
                    for (; ++i < r;)(e = +t[i]) && (o += e);
                else
                    for (; ++i < r;)(e = +n(t[i], i, t)) && (o += e);
                return o
            },
            H = function(t) {
                if (!(i = t.length)) return [];
                for (var n = -1, e = L(t, Y), r = new Array(e); ++n < e;)
                    for (var i, o = -1, u = r[n] = new Array(i); ++o < i;) u[o] = t[o][n];
                return r
            };

        function Y(t) {
            return t.length
        }
        var V = function() {
                return H(arguments)
            },
            W = Array.prototype.slice,
            G = function(t) {
                return t
            },
            X = 1,
            $ = 2,
            Z = 3,
            J = 4,
            K = 1e-6;

        function Q(t) {
            return "translate(" + (t + .5) + ",0)"
        }

        function tt(t) {
            return "translate(0," + (t + .5) + ")"
        }

        function nt() {
            return !this.__axis
        }

        function et(v, g) {
            var y = [],
                b = null,
                m = null,
                _ = 6,
                x = 6,
                w = 3,
                M = v === X || v === J ? -1 : 1,
                k = v === J || v === $ ? "x" : "y",
                E = v === X || v === Z ? Q : tt;

            function n(t) {
                var n = null == b ? g.ticks ? g.ticks.apply(g, y) : g.domain() : b,
                    e = null == m ? g.tickFormat ? g.tickFormat.apply(g, y) : G : m,
                    r = Math.max(_, 0) + w,
                    i = g.range(),
                    o = +i[0] + .5,
                    u = +i[i.length - 1] + .5,
                    a = (g.bandwidth ? function(n) {
                        var e = Math.max(0, n.bandwidth() - 1) / 2;
                        return n.round() && (e = Math.round(e)),
                            function(t) {
                                return +n(t) + e
                            }
                    } : function(n) {
                        return function(t) {
                            return +n(t)
                        }
                    })(g.copy()),
                    c = t.selection ? t.selection() : t,
                    f = c.selectAll(".domain").data([null]),
                    s = c.selectAll(".tick").data(n, g).order(),
                    l = s.exit(),
                    h = s.enter().append("g").attr("class", "tick"),
                    d = s.select("line"),
                    p = s.select("text");
                f = f.merge(f.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "#000")), s = s.merge(h), d = d.merge(h.append("line").attr("stroke", "#000").attr(k + "2", M * _)), p = p.merge(h.append("text").attr("fill", "#000").attr(k, M * r).attr("dy", v === X ? "0em" : v === Z ? "0.71em" : "0.32em")), t !== c && (f = f.transition(t), s = s.transition(t), d = d.transition(t), p = p.transition(t), l = l.transition(t).attr("opacity", K).attr("transform", function(t) {
                    return isFinite(t = a(t)) ? E(t) : this.getAttribute("transform")
                }), h.attr("opacity", K).attr("transform", function(t) {
                    var n = this.parentNode.__axis;
                    return E(n && isFinite(n = n(t)) ? n : a(t))
                })), l.remove(), f.attr("d", v === J || v == $ ? "M" + M * x + "," + o + "H0.5V" + u + "H" + M * x : "M" + o + "," + M * x + "V0.5H" + u + "V" + M * x), s.attr("opacity", 1).attr("transform", function(t) {
                    return E(a(t))
                }), d.attr(k + "2", M * _), p.attr(k, M * r).text(e), c.filter(nt).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", v === $ ? "start" : v === J ? "end" : "middle"), c.each(function() {
                    this.__axis = a
                })
            }
            return n.scale = function(t) {
                return arguments.length ? (g = t, n) : g
            }, n.ticks = function() {
                return y = W.call(arguments), n
            }, n.tickArguments = function(t) {
                return arguments.length ? (y = null == t ? [] : W.call(t), n) : y.slice()
            }, n.tickValues = function(t) {
                return arguments.length ? (b = null == t ? null : W.call(t), n) : b && b.slice()
            }, n.tickFormat = function(t) {
                return arguments.length ? (m = t, n) : m
            }, n.tickSize = function(t) {
                return arguments.length ? (_ = x = +t, n) : _
            }, n.tickSizeInner = function(t) {
                return arguments.length ? (_ = +t, n) : _
            }, n.tickSizeOuter = function(t) {
                return arguments.length ? (x = +t, n) : x
            }, n.tickPadding = function(t) {
                return arguments.length ? (w = +t, n) : w
            }, n
        }

        function rt(t) {
            return et(X, t)
        }

        function it(t) {
            return et($, t)
        }

        function ot(t) {
            return et(Z, t)
        }

        function ut(t) {
            return et(J, t)
        }
        var at = e(3),
            ct = e(0);

        function ft() {
            ct.event.stopImmediatePropagation()
        }
        var st = function() {
                ct.event.preventDefault(), ct.event.stopImmediatePropagation()
            },
            lt = function(t) {
                var n = t.document.documentElement,
                    e = Object(ct.select)(t).on("dragstart.drag", st, !0);
                "onselectstart" in n ? e.on("selectstart.drag", st, !0) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none")
            };

        function ht(t, n) {
            var e = t.document.documentElement,
                r = Object(ct.select)(t).on("dragstart.drag", null);
            n && (r.on("click.drag", st, !0), setTimeout(function() {
                r.on("click.drag", null)
            }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect)
        }
        var dt = function(t) {
            return function() {
                return t
            }
        };

        function pt(t, n, e, r, i, o, u, a, c, f) {
            this.target = t, this.type = n, this.subject = e, this.identifier = r, this.active = i, this.x = o, this.y = u, this.dx = a, this.dy = c, this._ = f
        }

        function vt() {
            return !ct.event.button
        }

        function gt() {
            return this.parentNode
        }

        function yt(t) {
            return null == t ? {
                x: ct.event.x,
                y: ct.event.y
            } : t
        }

        function bt() {
            return "ontouchstart" in this
        }
        pt.prototype.on = function() {
            var t = this._.on.apply(this._, arguments);
            return t === this._ ? this : t
        };
        var mt = function() {
                var e, r, i, o, u = vt,
                    a = gt,
                    n = yt,
                    c = bt,
                    p = {},
                    v = Object(at.a)("start", "drag", "end"),
                    g = 0,
                    f = 0;

                function y(t) {
                    t.on("mousedown.drag", s).filter(c).on("touchstart.drag", d).on("touchmove.drag", b).on("touchend.drag touchcancel.drag", m).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
                }

                function s() {
                    if (!o && u.apply(this, arguments)) {
                        var t = _("mouse", a.apply(this, arguments), ct.mouse, this, arguments);
                        t && (Object(ct.select)(ct.event.view).on("mousemove.drag", l, !0).on("mouseup.drag", h, !0), lt(ct.event.view), ft(), i = !1, e = ct.event.clientX, r = ct.event.clientY, t("start"))
                    }
                }

                function l() {
                    if (st(), !i) {
                        var t = ct.event.clientX - e,
                            n = ct.event.clientY - r;
                        i = f < t * t + n * n
                    }
                    p.mouse("drag")
                }

                function h() {
                    Object(ct.select)(ct.event.view).on("mousemove.drag mouseup.drag", null), ht(ct.event.view, i), st(), p.mouse("end")
                }

                function d() {
                    if (u.apply(this, arguments)) {
                        var t, n, e = ct.event.changedTouches,
                            r = a.apply(this, arguments),
                            i = e.length;
                        for (t = 0; t < i; ++t)(n = _(e[t].identifier, r, ct.touch, this, arguments)) && (ft(), n("start"))
                    }
                }

                function b() {
                    var t, n, e = ct.event.changedTouches,
                        r = e.length;
                    for (t = 0; t < r; ++t)(n = p[e[t].identifier]) && (st(), n("drag"))
                }

                function m() {
                    var t, n, e = ct.event.changedTouches,
                        r = e.length;
                    for (o && clearTimeout(o), o = setTimeout(function() {
                            o = null
                        }, 500), t = 0; t < r; ++t)(n = p[e[t].identifier]) && (ft(), n("end"))
                }

                function _(i, o, u, a, c) {
                    var f, s, l, h = u(o, i),
                        d = v.copy();
                    if (Object(ct.customEvent)(new pt(y, "beforestart", f, i, g, h[0], h[1], 0, 0, d), function() {
                            return null != (ct.event.subject = f = n.apply(a, c)) && (s = f.x - h[0] || 0, l = f.y - h[1] || 0, !0)
                        })) return function t(n) {
                        var e, r = h;
                        switch (n) {
                            case "start":
                                p[i] = t, e = g++;
                                break;
                            case "end":
                                delete p[i], --g;
                            case "drag":
                                h = u(o, i), e = g
                        }
                        Object(ct.customEvent)(new pt(y, n, f, i, e, h[0] + s, h[1] + l, h[0] - r[0], h[1] - r[1], d), d.apply, d, [n, a, c])
                    }
                }
                return y.filter = function(t) {
                    return arguments.length ? (u = "function" == typeof t ? t : dt(!!t), y) : u
                }, y.container = function(t) {
                    return arguments.length ? (a = "function" == typeof t ? t : dt(t), y) : a
                }, y.subject = function(t) {
                    return arguments.length ? (n = "function" == typeof t ? t : dt(t), y) : n
                }, y.touchable = function(t) {
                    return arguments.length ? (c = "function" == typeof t ? t : dt(!!t), y) : c
                }, y.on = function() {
                    var t = v.on.apply(v, arguments);
                    return t === v ? y : t
                }, y.clickDistance = function(t) {
                    return arguments.length ? (f = (t = +t) * t, y) : Math.sqrt(f)
                }, y
            },
            _t = e(2),
            xt = e(6),
            wt = function(t) {
                return function() {
                    return t
                }
            },
            Mt = function(t, n, e) {
                this.target = t, this.type = n, this.selection = e
            };

        function kt() {
            ct.event.stopImmediatePropagation()
        }
        var Et = function() {
                ct.event.preventDefault(), ct.event.stopImmediatePropagation()
            },
            Tt = {
                name: "drag"
            },
            At = {
                name: "space"
            },
            St = {
                name: "handle"
            },
            Ct = {
                name: "center"
            },
            Nt = {
                name: "x",
                handles: ["e", "w"].map(Lt),
                input: function(t, n) {
                    return t && [
                        [t[0], n[0][1]],
                        [t[1], n[1][1]]
                    ]
                },
                output: function(t) {
                    return t && [t[0][0], t[1][0]]
                }
            },
            Ot = {
                name: "y",
                handles: ["n", "s"].map(Lt),
                input: function(t, n) {
                    return t && [
                        [n[0][0], t[0]],
                        [n[1][0], t[1]]
                    ]
                },
                output: function(t) {
                    return t && [t[0][1], t[1][1]]
                }
            },
            Pt = {
                name: "xy",
                handles: ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(Lt),
                input: function(t) {
                    return t
                },
                output: function(t) {
                    return t
                }
            },
            Rt = {
                overlay: "crosshair",
                selection: "move",
                n: "ns-resize",
                e: "ew-resize",
                s: "ns-resize",
                w: "ew-resize",
                nw: "nwse-resize",
                ne: "nesw-resize",
                se: "nwse-resize",
                sw: "nesw-resize"
            },
            It = {
                e: "w",
                w: "e",
                nw: "ne",
                ne: "nw",
                se: "sw",
                sw: "se"
            },
            zt = {
                n: "s",
                s: "n",
                nw: "sw",
                ne: "se",
                se: "ne",
                sw: "nw"
            },
            jt = {
                overlay: 1,
                selection: 1,
                n: null,
                e: 1,
                s: null,
                w: -1,
                nw: -1,
                ne: 1,
                se: 1,
                sw: -1
            },
            Dt = {
                overlay: 1,
                selection: 1,
                n: -1,
                e: null,
                s: 1,
                w: null,
                nw: -1,
                ne: -1,
                se: 1,
                sw: 1
            };

        function Lt(t) {
            return {
                type: t
            }
        }

        function Bt() {
            return !ct.event.button
        }

        function qt() {
            var t = this.ownerSVGElement || this;
            return [
                [0, 0],
                [t.width.baseVal.value, t.height.baseVal.value]
            ]
        }

        function Ft(t) {
            for (; !t.__brush;)
                if (!(t = t.parentNode)) return;
            return t.__brush
        }

        function Ut(t) {
            return t[0][0] === t[1][0] || t[0][1] === t[1][1]
        }

        function Ht(t) {
            var n = t.__brush;
            return n ? n.dim.output(n.selection) : null
        }

        function Yt() {
            return Gt(Nt)
        }

        function Vt() {
            return Gt(Ot)
        }
        var Wt = function() {
            return Gt(Pt)
        };

        function Gt(z) {
            var j, n = qt,
                D = Bt,
                e = Object(at.a)(i, "start", "brush", "end"),
                r = 6;

            function i(t) {
                var n = t.property("__brush", a).selectAll(".overlay").data([Lt("overlay")]);
                n.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", Rt.overlay).merge(n).each(function() {
                    var t = Ft(this).extent;
                    Object(ct.select)(this).attr("x", t[0][0]).attr("y", t[0][1]).attr("width", t[1][0] - t[0][0]).attr("height", t[1][1] - t[0][1])
                }), t.selectAll(".selection").data([Lt("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", Rt.selection).attr("fill", "#777").attr("fill-opacity", .3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
                var e = t.selectAll(".handle").data(z.handles, function(t) {
                    return t.type
                });
                e.exit().remove(), e.enter().append("rect").attr("class", function(t) {
                    return "handle handle--" + t.type
                }).attr("cursor", function(t) {
                    return Rt[t.type]
                }), t.each(L).attr("fill", "none").attr("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush touchstart.brush", u)
            }

            function L() {
                var t = Object(ct.select)(this),
                    n = Ft(this).selection;
                n ? (t.selectAll(".selection").style("display", null).attr("x", n[0][0]).attr("y", n[0][1]).attr("width", n[1][0] - n[0][0]).attr("height", n[1][1] - n[0][1]), t.selectAll(".handle").style("display", null).attr("x", function(t) {
                    return "e" === t.type[t.type.length - 1] ? n[1][0] - r / 2 : n[0][0] - r / 2
                }).attr("y", function(t) {
                    return "s" === t.type[0] ? n[1][1] - r / 2 : n[0][1] - r / 2
                }).attr("width", function(t) {
                    return "n" === t.type || "s" === t.type ? n[1][0] - n[0][0] + r : r
                }).attr("height", function(t) {
                    return "e" === t.type || "w" === t.type ? n[1][1] - n[0][1] + r : r
                })) : t.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null)
            }

            function B(t, n) {
                return t.__brush.emitter || new o(t, n)
            }

            function o(t, n) {
                this.that = t, this.args = n, this.state = t.__brush, this.active = 0
            }

            function u() {
                if (ct.event.touches) {
                    if (ct.event.changedTouches.length < ct.event.touches.length) return Et()
                } else if (j) return;
                if (D.apply(this, arguments)) {
                    var n, e, r, i, o, u, a, c, f, s, l, h, d, p = this,
                        v = ct.event.target.__data__.type,
                        g = "selection" === (ct.event.metaKey ? v = "overlay" : v) ? Tt : ct.event.altKey ? Ct : St,
                        y = z === Ot ? null : jt[v],
                        b = z === Nt ? null : Dt[v],
                        m = Ft(p),
                        t = m.extent,
                        _ = m.selection,
                        x = t[0][0],
                        w = t[0][1],
                        M = t[1][0],
                        k = t[1][1],
                        E = y && b && ct.event.shiftKey,
                        T = Object(ct.mouse)(p),
                        A = T,
                        S = B(p, arguments).beforestart();
                    "overlay" === v ? m.selection = _ = [
                        [n = z === Ot ? x : T[0], r = z === Nt ? w : T[1]],
                        [o = z === Ot ? M : n, a = z === Nt ? k : r]
                    ] : (n = _[0][0], r = _[0][1], o = _[1][0], a = _[1][1]), e = n, i = r, u = o, c = a;
                    var C = Object(ct.select)(p).attr("pointer-events", "none"),
                        N = C.selectAll(".overlay").attr("cursor", Rt[v]);
                    if (ct.event.touches) C.on("touchmove.brush", P, !0).on("touchend.brush touchcancel.brush", I, !0);
                    else {
                        var O = Object(ct.select)(ct.event.view).on("keydown.brush", function() {
                            switch (ct.event.keyCode) {
                                case 16:
                                    E = y && b;
                                    break;
                                case 18:
                                    g === St && (y && (o = u - f * y, n = e + f * y), b && (a = c - s * b, r = i + s * b), g = Ct, R());
                                    break;
                                case 32:
                                    g !== St && g !== Ct || (y < 0 ? o = u - f : 0 < y && (n = e - f), b < 0 ? a = c - s : 0 < b && (r = i - s), g = At, N.attr("cursor", Rt.selection), R());
                                    break;
                                default:
                                    return
                            }
                            Et()
                        }, !0).on("keyup.brush", function() {
                            switch (ct.event.keyCode) {
                                case 16:
                                    E && (h = d = E = !1, R());
                                    break;
                                case 18:
                                    g === Ct && (y < 0 ? o = u : 0 < y && (n = e), b < 0 ? a = c : 0 < b && (r = i), g = St, R());
                                    break;
                                case 32:
                                    g === At && (g = ct.event.altKey ? (y && (o = u - f * y, n = e + f * y), b && (a = c - s * b, r = i + s * b), Ct) : (y < 0 ? o = u : 0 < y && (n = e), b < 0 ? a = c : 0 < b && (r = i), St), N.attr("cursor", Rt[v]), R());
                                    break;
                                default:
                                    return
                            }
                            Et()
                        }, !0).on("mousemove.brush", P, !0).on("mouseup.brush", I, !0);
                        lt(ct.event.view)
                    }
                    kt(), Object(xt.interrupt)(p), L.call(p), S.start()
                }

                function P() {
                    var t = Object(ct.mouse)(p);
                    !E || h || d || (Math.abs(t[0] - A[0]) > Math.abs(t[1] - A[1]) ? d = !0 : h = !0), A = t, l = !0, Et(), R()
                }

                function R() {
                    var t;
                    switch (f = A[0] - T[0], s = A[1] - T[1], g) {
                        case At:
                        case Tt:
                            y && (f = Math.max(x - n, Math.min(M - o, f)), e = n + f, u = o + f), b && (s = Math.max(w - r, Math.min(k - a, s)), i = r + s, c = a + s);
                            break;
                        case St:
                            y < 0 ? (f = Math.max(x - n, Math.min(M - n, f)), e = n + f, u = o) : 0 < y && (f = Math.max(x - o, Math.min(M - o, f)), e = n, u = o + f), b < 0 ? (s = Math.max(w - r, Math.min(k - r, s)), i = r + s, c = a) : 0 < b && (s = Math.max(w - a, Math.min(k - a, s)), i = r, c = a + s);
                            break;
                        case Ct:
                            y && (e = Math.max(x, Math.min(M, n - f * y)), u = Math.max(x, Math.min(M, o + f * y))), b && (i = Math.max(w, Math.min(k, r - s * b)), c = Math.max(w, Math.min(k, a + s * b)))
                    }
                    u < e && (y *= -1, t = n, n = o, o = t, t = e, e = u, u = t, v in It && N.attr("cursor", Rt[v = It[v]])), c < i && (b *= -1, t = r, r = a, a = t, t = i, i = c, c = t, v in zt && N.attr("cursor", Rt[v = zt[v]])), m.selection && (_ = m.selection), h && (e = _[0][0], u = _[1][0]), d && (i = _[0][1], c = _[1][1]), _[0][0] === e && _[0][1] === i && _[1][0] === u && _[1][1] === c || (m.selection = [
                        [e, i],
                        [u, c]
                    ], L.call(p), S.brush())
                }

                function I() {
                    if (kt(), ct.event.touches) {
                        if (ct.event.touches.length) return;
                        j && clearTimeout(j), j = setTimeout(function() {
                            j = null
                        }, 500), C.on("touchmove.brush touchend.brush touchcancel.brush", null)
                    } else ht(ct.event.view, l), O.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
                    C.attr("pointer-events", "all"), N.attr("cursor", Rt.overlay), m.selection && (_ = m.selection), Ut(_) && (m.selection = null, L.call(p)), S.end()
                }
            }

            function a() {
                var t = this.__brush || {
                    selection: null
                };
                return t.extent = n.apply(this, arguments), t.dim = z, t
            }
            return i.move = function(t, a) {
                t.selection ? t.on("start.brush", function() {
                    B(this, arguments).beforestart().start()
                }).on("interrupt.brush end.brush", function() {
                    B(this, arguments).end()
                }).tween("brush", function() {
                    var n = this,
                        e = n.__brush,
                        r = B(n, arguments),
                        t = e.selection,
                        i = z.input("function" == typeof a ? a.apply(this, arguments) : a, e.extent),
                        o = Object(_t.a)(t, i);

                    function u(t) {
                        e.selection = 1 === t && Ut(i) ? null : o(t), L.call(n), r.brush()
                    }
                    return t && i ? u : u(1)
                }) : t.each(function() {
                    var t = this,
                        n = arguments,
                        e = t.__brush,
                        r = z.input("function" == typeof a ? a.apply(t, n) : a, e.extent),
                        i = B(t, n).beforestart();
                    Object(xt.interrupt)(t), e.selection = null == r || Ut(r) ? null : r, L.call(t), i.start().brush().end()
                })
            }, o.prototype = {
                beforestart: function() {
                    return 1 == ++this.active && ((this.state.emitter = this).starting = !0), this
                },
                start: function() {
                    return this.starting && (this.starting = !1, this.emit("start")), this
                },
                brush: function() {
                    return this.emit("brush"), this
                },
                end: function() {
                    return 0 == --this.active && (delete this.state.emitter, this.emit("end")), this
                },
                emit: function(t) {
                    Object(ct.customEvent)(new Mt(i, t, z.output(this.state.selection)), e.apply, e, [t, this.that, this.args])
                }
            }, i.extent = function(t) {
                return arguments.length ? (n = "function" == typeof t ? t : wt([
                    [+t[0][0], +t[0][1]],
                    [+t[1][0], +t[1][1]]
                ]), i) : n
            }, i.filter = function(t) {
                return arguments.length ? (D = "function" == typeof t ? t : wt(!!t), i) : D
            }, i.handleSize = function(t) {
                return arguments.length ? (r = +t, i) : r
            }, i.on = function() {
                var t = e.on.apply(e, arguments);
                return t === e ? i : t
            }, i
        }
        var Xt = Math.cos,
            $t = Math.sin,
            Zt = Math.PI,
            Jt = Zt / 2,
            Kt = 2 * Zt,
            Qt = Math.max;
        var tn = function() {
                var x = 0,
                    w = null,
                    M = null,
                    k = null;

                function n(r) {
                    var t, n, e, i, o, u, a = r.length,
                        c = [],
                        f = E(a),
                        s = [],
                        l = [],
                        h = l.groups = new Array(a),
                        d = new Array(a * a);
                    for (t = 0, o = -1; ++o < a;) {
                        for (n = 0, u = -1; ++u < a;) n += r[o][u];
                        c.push(n), s.push(E(a)), t += n
                    }
                    for (w && f.sort(function(t, n) {
                            return w(c[t], c[n])
                        }), M && s.forEach(function(t, e) {
                            t.sort(function(t, n) {
                                return M(r[e][t], r[e][n])
                            })
                        }), i = (t = Qt(0, Kt - x * a) / t) ? x : Kt / a, n = 0, o = -1; ++o < a;) {
                        for (e = n, u = -1; ++u < a;) {
                            var p = f[o],
                                v = s[p][u],
                                g = r[p][v],
                                y = n,
                                b = n += g * t;
                            d[v * a + p] = {
                                index: p,
                                subindex: v,
                                startAngle: y,
                                endAngle: b,
                                value: g
                            }
                        }
                        h[p] = {
                            index: p,
                            startAngle: e,
                            endAngle: n,
                            value: c[p]
                        }, n += i
                    }
                    for (o = -1; ++o < a;)
                        for (u = o - 1; ++u < a;) {
                            var m = d[u * a + o],
                                _ = d[o * a + u];
                            (m.value || _.value) && l.push(m.value < _.value ? {
                                source: _,
                                target: m
                            } : {
                                source: m,
                                target: _
                            })
                        }
                    return k ? l.sort(k) : l
                }
                return n.padAngle = function(t) {
                    return arguments.length ? (x = Qt(0, t), n) : x
                }, n.sortGroups = function(t) {
                    return arguments.length ? (w = t, n) : w
                }, n.sortSubgroups = function(t) {
                    return arguments.length ? (M = t, n) : M
                }, n.sortChords = function(t) {
                    return arguments.length ? (null == t ? k = null : (e = t, k = function(t, n) {
                        return e(t.source.value + t.target.value, n.source.value + n.target.value)
                    })._ = t, n) : k && k._;
                    var e
                }, n
            },
            nn = Array.prototype.slice,
            en = function(t) {
                return function() {
                    return t
                }
            },
            rn = Math.PI,
            on = 2 * rn,
            un = 1e-6,
            an = on - un;

        function cn() {
            this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = ""
        }

        function fn() {
            return new cn
        }
        cn.prototype = fn.prototype = {
            constructor: cn,
            moveTo: function(t, n) {
                this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n)
            },
            closePath: function() {
                null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z")
            },
            lineTo: function(t, n) {
                this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n)
            },
            quadraticCurveTo: function(t, n, e, r) {
                this._ += "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r)
            },
            bezierCurveTo: function(t, n, e, r, i, o) {
                this._ += "C" + +t + "," + +n + "," + +e + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +o)
            },
            arcTo: function(t, n, e, r, i) {
                t = +t, n = +n, e = +e, r = +r, i = +i;
                var o = this._x1,
                    u = this._y1,
                    a = e - t,
                    c = r - n,
                    f = o - t,
                    s = u - n,
                    l = f * f + s * s;
                if (i < 0) throw new Error("negative radius: " + i);
                if (null === this._x1) this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);
                else if (un < l)
                    if (Math.abs(s * a - c * f) > un && i) {
                        var h = e - o,
                            d = r - u,
                            p = a * a + c * c,
                            v = h * h + d * d,
                            g = Math.sqrt(p),
                            y = Math.sqrt(l),
                            b = i * Math.tan((rn - Math.acos((p + l - v) / (2 * g * y))) / 2),
                            m = b / y,
                            _ = b / g;
                        Math.abs(m - 1) > un && (this._ += "L" + (t + m * f) + "," + (n + m * s)), this._ += "A" + i + "," + i + ",0,0," + +(f * d < s * h) + "," + (this._x1 = t + _ * a) + "," + (this._y1 = n + _ * c)
                    } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n);
                else;
            },
            arc: function(t, n, e, r, i, o) {
                t = +t, n = +n;
                var u = (e = +e) * Math.cos(r),
                    a = e * Math.sin(r),
                    c = t + u,
                    f = n + a,
                    s = 1 ^ o,
                    l = o ? r - i : i - r;
                if (e < 0) throw new Error("negative radius: " + e);
                null === this._x1 ? this._ += "M" + c + "," + f : (Math.abs(this._x1 - c) > un || Math.abs(this._y1 - f) > un) && (this._ += "L" + c + "," + f), e && (l < 0 && (l = l % on + on), an < l ? this._ += "A" + e + "," + e + ",0,1," + s + "," + (t - u) + "," + (n - a) + "A" + e + "," + e + ",0,1," + s + "," + (this._x1 = c) + "," + (this._y1 = f) : un < l && (this._ += "A" + e + "," + e + ",0," + +(rn <= l) + "," + s + "," + (this._x1 = t + e * Math.cos(i)) + "," + (this._y1 = n + e * Math.sin(i))))
            },
            rect: function(t, n, e, r) {
                this._ += "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n) + "h" + +e + "v" + +r + "h" + -e + "Z"
            },
            toString: function() {
                return this._
            }
        };
        var sn = fn;

        function ln(t) {
            return t.source
        }

        function hn(t) {
            return t.target
        }

        function dn(t) {
            return t.radius
        }

        function pn(t) {
            return t.startAngle
        }

        function vn(t) {
            return t.endAngle
        }
        var gn = function() {
                var h = ln,
                    d = hn,
                    p = dn,
                    v = pn,
                    g = vn,
                    y = null;

                function n() {
                    var t, n = nn.call(arguments),
                        e = h.apply(this, n),
                        r = d.apply(this, n),
                        i = +p.apply(this, (n[0] = e, n)),
                        o = v.apply(this, n) - Jt,
                        u = g.apply(this, n) - Jt,
                        a = i * Xt(o),
                        c = i * $t(o),
                        f = +p.apply(this, (n[0] = r, n)),
                        s = v.apply(this, n) - Jt,
                        l = g.apply(this, n) - Jt;
                    if (y || (y = t = sn()), y.moveTo(a, c), y.arc(0, 0, i, o, u), o === s && u === l || (y.quadraticCurveTo(0, 0, f * Xt(s), f * $t(s)), y.arc(0, 0, f, s, l)), y.quadraticCurveTo(0, 0, a, c), y.closePath(), t) return y = null, t + "" || null
                }
                return n.radius = function(t) {
                    return arguments.length ? (p = "function" == typeof t ? t : en(+t), n) : p
                }, n.startAngle = function(t) {
                    return arguments.length ? (v = "function" == typeof t ? t : en(+t), n) : v
                }, n.endAngle = function(t) {
                    return arguments.length ? (g = "function" == typeof t ? t : en(+t), n) : g
                }, n.source = function(t) {
                    return arguments.length ? (h = t, n) : h
                }, n.target = function(t) {
                    return arguments.length ? (d = t, n) : d
                }, n.context = function(t) {
                    return arguments.length ? (y = null == t ? null : t, n) : y
                }, n
            },
            yn = e(5),
            bn = e(1),
            mn = Array.prototype.slice,
            _n = function(t, n) {
                return t - n
            },
            xn = function(t) {
                return function() {
                    return t
                }
            },
            wn = function(t, n) {
                for (var e, r = -1, i = n.length; ++r < i;)
                    if (e = Mn(t, n[r])) return e;
                return 0
            };

        function Mn(t, n) {
            for (var e, r, i, o, u, a, c, f, s, l, h = n[0], d = n[1], p = -1, v = 0, g = t.length, y = g - 1; v < g; y = v++) {
                var b = t[v],
                    m = b[0],
                    _ = b[1],
                    x = t[y],
                    w = x[0],
                    M = x[1];
                if (l = void 0, o = c = b, a = s = n, ((u = f = x)[0] - o[0]) * (a[1] - o[1]) == (a[0] - o[0]) * (u[1] - o[1]) && (e = c[l = +(c[0] === f[0])], r = s[l], i = f[l], e <= r && r <= i || i <= r && r <= e)) return 0;
                d < _ != d < M && h < (w - m) * (d - _) / (M - _) + m && (p = -p)
            }
            return p
        }
        var kn = function() {},
            En = [
                [],
                [
                    [
                        [1, 1.5],
                        [.5, 1]
                    ]
                ],
                [
                    [
                        [1.5, 1],
                        [1, 1.5]
                    ]
                ],
                [
                    [
                        [1.5, 1],
                        [.5, 1]
                    ]
                ],
                [
                    [
                        [1, .5],
                        [1.5, 1]
                    ]
                ],
                [
                    [
                        [1, 1.5],
                        [.5, 1]
                    ],
                    [
                        [1, .5],
                        [1.5, 1]
                    ]
                ],
                [
                    [
                        [1, .5],
                        [1, 1.5]
                    ]
                ],
                [
                    [
                        [1, .5],
                        [.5, 1]
                    ]
                ],
                [
                    [
                        [.5, 1],
                        [1, .5]
                    ]
                ],
                [
                    [
                        [1, 1.5],
                        [1, .5]
                    ]
                ],
                [
                    [
                        [.5, 1],
                        [1, .5]
                    ],
                    [
                        [1.5, 1],
                        [1, 1.5]
                    ]
                ],
                [
                    [
                        [1.5, 1],
                        [1, .5]
                    ]
                ],
                [
                    [
                        [.5, 1],
                        [1.5, 1]
                    ]
                ],
                [
                    [
                        [1, 1.5],
                        [1.5, 1]
                    ]
                ],
                [
                    [
                        [.5, 1],
                        [1, 1.5]
                    ]
                ],
                []
            ],
            Tn = function() {
                var h = 1,
                    d = 1,
                    o = C,
                    u = n;

                function r(n) {
                    var t = o(n);
                    if (Array.isArray(t)) t = t.slice().sort(_n);
                    else {
                        var e = g(n),
                            r = e[0],
                            i = e[1];
                        t = S(r, i, t), t = E(Math.floor(r / t) * t, Math.floor(i / t) * t, t)
                    }
                    return t.map(function(t) {
                        return a(n, t)
                    })
                }

                function a(n, e) {
                    var i = [],
                        r = [];
                    return function(t, n, a) {
                        var c, f, e, r, i, o, s = new Array,
                            l = new Array;
                        c = f = -1, r = t[0] >= n, En[r << 1].forEach(u);
                        for (; ++c < h - 1;) e = r, r = t[c + 1] >= n, En[e | r << 1].forEach(u);
                        En[r << 0].forEach(u);
                        for (; ++f < d - 1;) {
                            for (c = -1, r = t[f * h + h] >= n, i = t[f * h] >= n, En[r << 1 | i << 2].forEach(u); ++c < h - 1;) e = r, r = t[f * h + h + c + 1] >= n, o = i, i = t[f * h + c + 1] >= n, En[e | r << 1 | i << 2 | o << 3].forEach(u);
                            En[r | i << 3].forEach(u)
                        }
                        c = -1, i = t[f * h] >= n, En[i << 2].forEach(u);
                        for (; ++c < h - 1;) o = i, i = t[f * h + c + 1] >= n, En[i << 2 | o << 3].forEach(u);

                        function u(t) {
                            var n, e, r = [t[0][0] + c, t[0][1] + f],
                                i = [t[1][0] + c, t[1][1] + f],
                                o = p(r),
                                u = p(i);
                            (n = l[o]) ? (e = s[u]) ? (delete l[n.end], delete s[e.start], n === e ? (n.ring.push(i), a(n.ring)) : s[n.start] = l[e.end] = {
                                start: n.start,
                                end: e.end,
                                ring: n.ring.concat(e.ring)
                            }) : (delete l[n.end], n.ring.push(i), l[n.end = u] = n) : (n = s[u]) ? (e = l[o]) ? (delete s[n.start], delete l[e.end], n === e ? (n.ring.push(i), a(n.ring)) : s[e.start] = l[n.end] = {
                                start: e.start,
                                end: n.end,
                                ring: e.ring.concat(n.ring)
                            }) : (delete s[n.start], n.ring.unshift(r), s[n.start = o] = n) : s[o] = l[u] = {
                                start: o,
                                end: u,
                                ring: [r, i]
                            }
                        }
                        En[i << 3].forEach(u)
                    }(n, e, function(t) {
                        u(t, n, e), 0 < function(t) {
                            for (var n = 0, e = t.length, r = t[e - 1][1] * t[0][0] - t[e - 1][0] * t[0][1]; ++n < e;) r += t[n - 1][1] * t[n][0] - t[n - 1][0] * t[n][1];
                            return r
                        }(t) ? i.push([t]) : r.push(t)
                    }), r.forEach(function(t) {
                        for (var n, e = 0, r = i.length; e < r; ++e)
                            if (-1 !== wn((n = i[e])[0], t)) return void n.push(t)
                    }), {
                        type: "MultiPolygon",
                        value: e,
                        coordinates: i
                    }
                }

                function p(t) {
                    return 2 * t[0] + t[1] * (h + 1) * 4
                }

                function n(t, a, c) {
                    t.forEach(function(t) {
                        var n, e = t[0],
                            r = t[1],
                            i = 0 | e,
                            o = 0 | r,
                            u = a[o * h + i];
                        0 < e && e < h && i === e && (n = a[o * h + i - 1], t[0] = e + (c - n) / (u - n) - .5), 0 < r && r < d && o === r && (n = a[(o - 1) * h + i], t[1] = r + (c - n) / (u - n) - .5)
                    })
                }
                return r.contour = a, r.size = function(t) {
                    if (!arguments.length) return [h, d];
                    var n = Math.ceil(t[0]),
                        e = Math.ceil(t[1]);
                    if (!(0 < n && 0 < e)) throw new Error("invalid size");
                    return h = n, d = e, r
                }, r.thresholds = function(t) {
                    return arguments.length ? (o = "function" == typeof t ? t : Array.isArray(t) ? xn(mn.call(t)) : xn(t), r) : o
                }, r.smooth = function(t) {
                    return arguments.length ? (u = t ? n : kn, r) : u === n
                }, r
            };

        function An(t, n, e) {
            for (var r = t.width, i = t.height, o = 1 + (e << 1), u = 0; u < i; ++u)
                for (var a = 0, c = 0; a < r + e; ++a) a < r && (c += t.data[a + u * r]), e <= a && (o <= a && (c -= t.data[a - o + u * r]), n.data[a - e + u * r] = c / Math.min(a + 1, r - 1 + o - a, o))
        }

        function Sn(t, n, e) {
            for (var r = t.width, i = t.height, o = 1 + (e << 1), u = 0; u < r; ++u)
                for (var a = 0, c = 0; a < i + e; ++a) a < i && (c += t.data[u + a * r]), e <= a && (o <= a && (c -= t.data[u + (a - o) * r]), n.data[u + (a - e) * r] = c / Math.min(a + 1, i - 1 + o - a, o))
        }

        function Cn(t) {
            return t[0]
        }

        function Nn(t) {
            return t[1]
        }
        var On = function() {
                var u = Cn,
                    a = Nn,
                    r = 960,
                    i = 500,
                    c = 20,
                    f = 2,
                    s = 3 * c,
                    l = r + 2 * s >> f,
                    h = i + 2 * s >> f,
                    d = xn(20);

                function n(t) {
                    var o = new Float32Array(l * h),
                        n = new Float32Array(l * h);
                    t.forEach(function(t, n, e) {
                        var r = u(t, n, e) + s >> f,
                            i = a(t, n, e) + s >> f;
                        0 <= r && r < l && 0 <= i && i < h && ++o[r + i * l]
                    }), An({
                        width: l,
                        height: h,
                        data: o
                    }, {
                        width: l,
                        height: h,
                        data: n
                    }, c >> f), Sn({
                        width: l,
                        height: h,
                        data: n
                    }, {
                        width: l,
                        height: h,
                        data: o
                    }, c >> f), An({
                        width: l,
                        height: h,
                        data: o
                    }, {
                        width: l,
                        height: h,
                        data: n
                    }, c >> f), Sn({
                        width: l,
                        height: h,
                        data: n
                    }, {
                        width: l,
                        height: h,
                        data: o
                    }, c >> f), An({
                        width: l,
                        height: h,
                        data: o
                    }, {
                        width: l,
                        height: h,
                        data: n
                    }, c >> f), Sn({
                        width: l,
                        height: h,
                        data: n
                    }, {
                        width: l,
                        height: h,
                        data: o
                    }, c >> f);
                    var e = d(o);
                    if (!Array.isArray(e)) {
                        var r = I(o);
                        e = S(0, r, e), (e = E(0, Math.floor(r / e) * e, e)).shift()
                    }
                    return Tn().thresholds(e).size([l, h])(o).map(p)
                }

                function p(t) {
                    return t.value *= Math.pow(2, -2 * f), t.coordinates.forEach(e), t
                }

                function e(t) {
                    t.forEach(o)
                }

                function o(t) {
                    t.forEach(v)
                }

                function v(t) {
                    t[0] = t[0] * Math.pow(2, f) - s, t[1] = t[1] * Math.pow(2, f) - s
                }

                function g() {
                    return l = r + 2 * (s = 3 * c) >> f, h = i + 2 * s >> f, n
                }
                return n.x = function(t) {
                    return arguments.length ? (u = "function" == typeof t ? t : xn(+t), n) : u
                }, n.y = function(t) {
                    return arguments.length ? (a = "function" == typeof t ? t : xn(+t), n) : a
                }, n.size = function(t) {
                    if (!arguments.length) return [r, i];
                    var n = Math.ceil(t[0]),
                        e = Math.ceil(t[1]);
                    if (!(0 <= n || 0 <= n)) throw new Error("invalid size");
                    return r = n, i = e, g()
                }, n.cellSize = function(t) {
                    if (!arguments.length) return 1 << f;
                    if (!(1 <= (t = +t))) throw new Error("invalid cell size");
                    return f = Math.floor(Math.log(t) / Math.LN2), g()
                }, n.thresholds = function(t) {
                    return arguments.length ? (d = "function" == typeof t ? t : Array.isArray(t) ? xn(mn.call(t)) : xn(t), n) : d
                }, n.bandwidth = function(t) {
                    if (!arguments.length) return Math.sqrt(c * (c + 1));
                    if (!(0 <= (t = +t))) throw new Error("invalid bandwidth");
                    return c = Math.round((Math.sqrt(4 * t * t + 1) - 1) / 2), g()
                }, n
            },
            Pn = {},
            Rn = {};

        function In(t) {
            return new Function("d", "return {" + t.map(function(t, n) {
                return JSON.stringify(t) + ": d[" + n + "]"
            }).join(",") + "}")
        }
        var zn = function(o) {
                var n = new RegExp('["' + o + "\n\r]"),
                    l = o.charCodeAt(0);

                function e(r, t) {
                    var n, e = [],
                        i = r.length,
                        o = 0,
                        u = 0,
                        a = i <= 0,
                        c = !1;

                    function f() {
                        if (a) return Rn;
                        if (c) return c = !1, Pn;
                        var t, n, e = o;
                        if (34 === r.charCodeAt(e)) {
                            for (; o++ < i && 34 !== r.charCodeAt(o) || 34 === r.charCodeAt(++o););
                            return (t = o) >= i ? a = !0 : 10 === (n = r.charCodeAt(o++)) ? c = !0 : 13 === n && (c = !0, 10 === r.charCodeAt(o) && ++o), r.slice(e + 1, t - 1).replace(/""/g, '"')
                        }
                        for (; o < i;) {
                            if (10 === (n = r.charCodeAt(t = o++))) c = !0;
                            else if (13 === n) c = !0, 10 === r.charCodeAt(o) && ++o;
                            else if (n !== l) continue;
                            return r.slice(e, t)
                        }
                        return a = !0, r.slice(e, i)
                    }
                    for (10 === r.charCodeAt(i - 1) && --i, 13 === r.charCodeAt(i - 1) && --i;
                        (n = f()) !== Rn;) {
                        for (var s = []; n !== Pn && n !== Rn;) s.push(n), n = f();
                        t && null == (s = t(s, u++)) || e.push(s)
                    }
                    return e
                }

                function r(t) {
                    return t.map(u).join(o)
                }

                function u(t) {
                    return null == t ? "" : n.test(t += "") ? '"' + t.replace(/"/g, '""') + '"' : t
                }
                return {
                    parse: function(t, o) {
                        var u, a, n = e(t, function(t, n) {
                            if (u) return u(t, n - 1);
                            var e, r, i;
                            a = t, u = o ? (r = o, i = In(e = t), function(t, n) {
                                return r(i(t), n, e)
                            }) : In(t)
                        });
                        return n.columns = a || [], n
                    },
                    parseRows: e,
                    format: function(t, e) {
                        var n, r, i;
                        return null == e && (n = t, r = Object.create(null), i = [], n.forEach(function(t) {
                            for (var n in t) n in r || i.push(r[n] = n)
                        }), e = i), [e.map(u).join(o)].concat(t.map(function(n) {
                            return e.map(function(t) {
                                return u(n[t])
                            }).join(o)
                        })).join("\n")
                    },
                    formatRows: function(t) {
                        return t.map(r).join("\n")
                    }
                }
            },
            jn = zn(","),
            Dn = jn.parse,
            Ln = jn.parseRows,
            Bn = jn.format,
            qn = jn.formatRows,
            Fn = zn("\t"),
            Un = Fn.parse,
            Hn = Fn.parseRows,
            Yn = Fn.format,
            Vn = Fn.formatRows,
            Wn = e(7);

        function Gn(t) {
            if (!t.ok) throw new Error(t.status + " " + t.statusText);
            return t.blob()
        }
        var Xn = function(t, n) {
            return fetch(t, n).then(Gn)
        };

        function $n(t) {
            if (!t.ok) throw new Error(t.status + " " + t.statusText);
            return t.arrayBuffer()
        }
        var Zn = function(t, n) {
            return fetch(t, n).then($n)
        };

        function Jn(t) {
            if (!t.ok) throw new Error(t.status + " " + t.statusText);
            return t.text()
        }
        var Kn = function(t, n) {
            return fetch(t, n).then(Jn)
        };

        function Qn(r) {
            return function(t, n, e) {
                return 2 === arguments.length && "function" == typeof n && (e = n, n = void 0), Kn(t, n).then(function(t) {
                    return r(t, e)
                })
            }
        }

        function te(t, n, e, r) {
            3 === arguments.length && "function" == typeof e && (r = e, e = void 0);
            var i = zn(t);
            return Kn(n, e).then(function(t) {
                return i.parse(t, r)
            })
        }
        var ne = Qn(Dn),
            ee = Qn(Un),
            re = function(i, o) {
                return new Promise(function(t, n) {
                    var e = new Image;
                    for (var r in o) e[r] = o[r];
                    e.onerror = n, e.onload = function() {
                        t(e)
                    }, e.src = i
                })
            };

        function ie(t) {
            if (!t.ok) throw new Error(t.status + " " + t.statusText);
            return t.json()
        }
        var oe = function(t, n) {
            return fetch(t, n).then(ie)
        };

        function ue(e) {
            return function(t, n) {
                return Kn(t, n).then(function(t) {
                    return (new DOMParser).parseFromString(t, e)
                })
            }
        }
        var ae = ue("application/xml"),
            ce = ue("text/html"),
            fe = ue("image/svg+xml"),
            se = function(o, u) {
                var a;

                function n() {
                    var t, n, e = a.length,
                        r = 0,
                        i = 0;
                    for (t = 0; t < e; ++t) r += (n = a[t]).x, i += n.y;
                    for (r = r / e - o, i = i / e - u, t = 0; t < e; ++t)(n = a[t]).x -= r, n.y -= i
                }
                return null == o && (o = 0), null == u && (u = 0), n.initialize = function(t) {
                    a = t
                }, n.x = function(t) {
                    return arguments.length ? (o = +t, n) : o
                }, n.y = function(t) {
                    return arguments.length ? (u = +t, n) : u
                }, n
            },
            le = function(t) {
                return function() {
                    return t
                }
            },
            he = function() {
                return 1e-6 * (Math.random() - .5)
            };

        function de(t, n, e, r) {
            if (isNaN(n) || isNaN(e)) return t;
            var i, o, u, a, c, f, s, l, h, d = t._root,
                p = {
                    data: r
                },
                v = t._x0,
                g = t._y0,
                y = t._x1,
                b = t._y1;
            if (!d) return t._root = p, t;
            for (; d.length;)
                if ((f = n >= (o = (v + y) / 2)) ? v = o : y = o, (s = e >= (u = (g + b) / 2)) ? g = u : b = u, !(d = (i = d)[l = s << 1 | f])) return i[l] = p, t;
            if (a = +t._x.call(null, d.data), c = +t._y.call(null, d.data), n === a && e === c) return p.next = d, i ? i[l] = p : t._root = p, t;
            for (; i = i ? i[l] = new Array(4) : t._root = new Array(4), (f = n >= (o = (v + y) / 2)) ? v = o : y = o, (s = e >= (u = (g + b) / 2)) ? g = u : b = u, (l = s << 1 | f) == (h = (u <= c) << 1 | o <= a););
            return i[h] = d, i[l] = p, t
        }
        var pe = function(t, n, e, r, i) {
            this.node = t, this.x0 = n, this.y0 = e, this.x1 = r, this.y1 = i
        };

        function ve(t) {
            return t[0]
        }

        function ge(t) {
            return t[1]
        }

        function ye(t, n, e) {
            var r = new be(null == n ? ve : n, null == e ? ge : e, NaN, NaN, NaN, NaN);
            return null == t ? r : r.addAll(t)
        }

        function be(t, n, e, r, i, o) {
            this._x = t, this._y = n, this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this._root = void 0
        }

        function me(t) {
            for (var n = {
                    data: t.data
                }, e = n; t = t.next;) e = e.next = {
                data: t.data
            };
            return n
        }
        var _e = ye.prototype = be.prototype;

        function xe(t) {
            return t.x + t.vx
        }

        function we(t) {
            return t.y + t.vy
        }
        _e.copy = function() {
            var t, n, e = new be(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
                r = this._root;
            if (!r) return e;
            if (!r.length) return e._root = me(r), e;
            for (t = [{
                    source: r,
                    target: e._root = new Array(4)
                }]; r = t.pop();)
                for (var i = 0; i < 4; ++i)(n = r.source[i]) && (n.length ? t.push({
                    source: n,
                    target: r.target[i] = new Array(4)
                }) : r.target[i] = me(n));
            return e
        }, _e.add = function(t) {
            var n = +this._x.call(null, t),
                e = +this._y.call(null, t);
            return de(this.cover(n, e), n, e, t)
        }, _e.addAll = function(t) {
            var n, e, r, i, o = t.length,
                u = new Array(o),
                a = new Array(o),
                c = 1 / 0,
                f = 1 / 0,
                s = -1 / 0,
                l = -1 / 0;
            for (e = 0; e < o; ++e) isNaN(r = +this._x.call(null, n = t[e])) || isNaN(i = +this._y.call(null, n)) || ((u[e] = r) < c && (c = r), s < r && (s = r), (a[e] = i) < f && (f = i), l < i && (l = i));
            for (s < c && (c = this._x0, s = this._x1), l < f && (f = this._y0, l = this._y1), this.cover(c, f).cover(s, l), e = 0; e < o; ++e) de(this, u[e], a[e], t[e]);
            return this
        }, _e.cover = function(t, n) {
            if (isNaN(t = +t) || isNaN(n = +n)) return this;
            var e = this._x0,
                r = this._y0,
                i = this._x1,
                o = this._y1;
            if (isNaN(e)) i = (e = Math.floor(t)) + 1, o = (r = Math.floor(n)) + 1;
            else {
                if (!(t < e || i < t || n < r || o < n)) return this;
                var u, a, c = i - e,
                    f = this._root;
                switch (a = (n < (r + o) / 2) << 1 | t < (e + i) / 2) {
                    case 0:
                        for (;
                            (u = new Array(4))[a] = f, f = u, o = r + (c *= 2), (i = e + c) < t || o < n;);
                        break;
                    case 1:
                        for (;
                            (u = new Array(4))[a] = f, f = u, o = r + (c *= 2), t < (e = i - c) || o < n;);
                        break;
                    case 2:
                        for (;
                            (u = new Array(4))[a] = f, f = u, r = o - (c *= 2), (i = e + c) < t || n < r;);
                        break;
                    case 3:
                        for (;
                            (u = new Array(4))[a] = f, f = u, r = o - (c *= 2), t < (e = i - c) || n < r;);
                }
                this._root && this._root.length && (this._root = f)
            }
            return this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this
        }, _e.data = function() {
            var n = [];
            return this.visit(function(t) {
                if (!t.length)
                    for (; n.push(t.data), t = t.next;);
            }), n
        }, _e.extent = function(t) {
            return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [
                [this._x0, this._y0],
                [this._x1, this._y1]
            ]
        }, _e.find = function(t, n, e) {
            var r, i, o, u, a, c, f, s = this._x0,
                l = this._y0,
                h = this._x1,
                d = this._y1,
                p = [],
                v = this._root;
            for (v && p.push(new pe(v, s, l, h, d)), null == e ? e = 1 / 0 : (s = t - e, l = n - e, h = t + e, d = n + e, e *= e); c = p.pop();)
                if (!(!(v = c.node) || (i = c.x0) > h || (o = c.y0) > d || (u = c.x1) < s || (a = c.y1) < l))
                    if (v.length) {
                        var g = (i + u) / 2,
                            y = (o + a) / 2;
                        p.push(new pe(v[3], g, y, u, a), new pe(v[2], i, y, g, a), new pe(v[1], g, o, u, y), new pe(v[0], i, o, g, y)), (f = (y <= n) << 1 | g <= t) && (c = p[p.length - 1], p[p.length - 1] = p[p.length - 1 - f], p[p.length - 1 - f] = c)
                    } else {
                        var b = t - +this._x.call(null, v.data),
                            m = n - +this._y.call(null, v.data),
                            _ = b * b + m * m;
                        if (_ < e) {
                            var x = Math.sqrt(e = _);
                            s = t - x, l = n - x, h = t + x, d = n + x, r = v.data
                        }
                    }
            return r
        }, _e.remove = function(t) {
            if (isNaN(o = +this._x.call(null, t)) || isNaN(u = +this._y.call(null, t))) return this;
            var n, e, r, i, o, u, a, c, f, s, l, h, d = this._root,
                p = this._x0,
                v = this._y0,
                g = this._x1,
                y = this._y1;
            if (!d) return this;
            if (d.length)
                for (;;) {
                    if ((f = o >= (a = (p + g) / 2)) ? p = a : g = a, (s = u >= (c = (v + y) / 2)) ? v = c : y = c, !(d = (n = d)[l = s << 1 | f])) return this;
                    if (!d.length) break;
                    (n[l + 1 & 3] || n[l + 2 & 3] || n[l + 3 & 3]) && (e = n, h = l)
                }
            for (; d.data !== t;)
                if (!(d = (r = d).next)) return this;
            return (i = d.next) && delete d.next, r ? i ? r.next = i : delete r.next : n ? (i ? n[l] = i : delete n[l], (d = n[0] || n[1] || n[2] || n[3]) && d === (n[3] || n[2] || n[1] || n[0]) && !d.length && (e ? e[h] = d : this._root = d)) : this._root = i, this
        }, _e.removeAll = function(t) {
            for (var n = 0, e = t.length; n < e; ++n) this.remove(t[n]);
            return this
        }, _e.root = function() {
            return this._root
        }, _e.size = function() {
            var n = 0;
            return this.visit(function(t) {
                if (!t.length)
                    for (; ++n, t = t.next;);
            }), n
        }, _e.visit = function(t) {
            var n, e, r, i, o, u, a = [],
                c = this._root;
            for (c && a.push(new pe(c, this._x0, this._y0, this._x1, this._y1)); n = a.pop();)
                if (!t(c = n.node, r = n.x0, i = n.y0, o = n.x1, u = n.y1) && c.length) {
                    var f = (r + o) / 2,
                        s = (i + u) / 2;
                    (e = c[3]) && a.push(new pe(e, f, s, o, u)), (e = c[2]) && a.push(new pe(e, r, s, f, u)), (e = c[1]) && a.push(new pe(e, f, i, o, s)), (e = c[0]) && a.push(new pe(e, r, i, f, s))
                }
            return this
        }, _e.visitAfter = function(t) {
            var n, e = [],
                r = [];
            for (this._root && e.push(new pe(this._root, this._x0, this._y0, this._x1, this._y1)); n = e.pop();) {
                var i = n.node;
                if (i.length) {
                    var o, u = n.x0,
                        a = n.y0,
                        c = n.x1,
                        f = n.y1,
                        s = (u + c) / 2,
                        l = (a + f) / 2;
                    (o = i[0]) && e.push(new pe(o, u, a, s, l)), (o = i[1]) && e.push(new pe(o, s, a, c, l)), (o = i[2]) && e.push(new pe(o, u, l, s, f)), (o = i[3]) && e.push(new pe(o, s, l, c, f))
                }
                r.push(n)
            }
            for (; n = r.pop();) t(n.node, n.x0, n.y0, n.x1, n.y1);
            return this
        }, _e.x = function(t) {
            return arguments.length ? (this._x = t, this) : this._x
        }, _e.y = function(t) {
            return arguments.length ? (this._y = t, this) : this._y
        };
        var Me = function(r) {
            var o, u, g = 1,
                a = 1;

            function n() {
                for (var t, n, l, h, d, p, v, e = o.length, r = 0; r < a; ++r)
                    for (n = ye(o, xe, we).visitAfter(c), t = 0; t < e; ++t) l = o[t], p = u[l.index], v = p * p, h = l.x + l.vx, d = l.y + l.vy, n.visit(i);

                function i(t, n, e, r, i) {
                    var o = t.data,
                        u = t.r,
                        a = p + u;
                    if (!o) return h + a < n || r < h - a || d + a < e || i < d - a;
                    if (o.index > l.index) {
                        var c = h - o.x - o.vx,
                            f = d - o.y - o.vy,
                            s = c * c + f * f;
                        s < a * a && (0 === c && (s += (c = he()) * c), 0 === f && (s += (f = he()) * f), s = (a - (s = Math.sqrt(s))) / s * g, l.vx += (c *= s) * (a = (u *= u) / (v + u)), l.vy += (f *= s) * a, o.vx -= c * (a = 1 - a), o.vy -= f * a)
                    }
                }
            }

            function c(t) {
                if (t.data) return t.r = u[t.data.index];
                for (var n = t.r = 0; n < 4; ++n) t[n] && t[n].r > t.r && (t.r = t[n].r)
            }

            function e() {
                if (o) {
                    var t, n, e = o.length;
                    for (u = new Array(e), t = 0; t < e; ++t) n = o[t], u[n.index] = +r(n, t, o)
                }
            }
            return "function" != typeof r && (r = le(null == r ? 1 : +r)), n.initialize = function(t) {
                o = t, e()
            }, n.iterations = function(t) {
                return arguments.length ? (a = +t, n) : a
            }, n.strength = function(t) {
                return arguments.length ? (g = +t, n) : g
            }, n.radius = function(t) {
                return arguments.length ? (r = "function" == typeof t ? t : le(+t), e(), n) : r
            }, n
        };

        function ke(t) {
            return t.index
        }

        function Ee(t, n) {
            var e = t.get(n);
            if (!e) throw new Error("missing: " + n);
            return e
        }
        var Te = function(l) {
                var h, d, o, u, p, a = ke,
                    e = function(t) {
                        return 1 / Math.min(u[t.source.index], u[t.target.index])
                    },
                    r = le(30),
                    v = 1;

                function n(t) {
                    for (var n = 0, e = l.length; n < v; ++n)
                        for (var r, i, o, u, a, c, f, s = 0; s < e; ++s) i = (r = l[s]).source, u = (o = r.target).x + o.vx - i.x - i.vx || he(), a = o.y + o.vy - i.y - i.vy || he(), u *= c = ((c = Math.sqrt(u * u + a * a)) - d[s]) / c * t * h[s], a *= c, o.vx -= u * (f = p[s]), o.vy -= a * f, i.vx += u * (f = 1 - f), i.vy += a * f
                }

                function i() {
                    if (o) {
                        var t, n, e = o.length,
                            r = l.length,
                            i = Object(yn.map)(o, a);
                        for (t = 0, u = new Array(e); t < r; ++t)(n = l[t]).index = t, "object" != typeof n.source && (n.source = Ee(i, n.source)), "object" != typeof n.target && (n.target = Ee(i, n.target)), u[n.source.index] = (u[n.source.index] || 0) + 1, u[n.target.index] = (u[n.target.index] || 0) + 1;
                        for (t = 0, p = new Array(r); t < r; ++t) n = l[t], p[t] = u[n.source.index] / (u[n.source.index] + u[n.target.index]);
                        h = new Array(r), c(), d = new Array(r), f()
                    }
                }

                function c() {
                    if (o)
                        for (var t = 0, n = l.length; t < n; ++t) h[t] = +e(l[t], t, l)
                }

                function f() {
                    if (o)
                        for (var t = 0, n = l.length; t < n; ++t) d[t] = +r(l[t], t, l)
                }
                return null == l && (l = []), n.initialize = function(t) {
                    o = t, i()
                }, n.links = function(t) {
                    return arguments.length ? (l = t, i(), n) : l
                }, n.id = function(t) {
                    return arguments.length ? (a = t, n) : a
                }, n.iterations = function(t) {
                    return arguments.length ? (v = +t, n) : v
                }, n.strength = function(t) {
                    return arguments.length ? (e = "function" == typeof t ? t : le(+t), c(), n) : e
                }, n.distance = function(t) {
                    return arguments.length ? (r = "function" == typeof t ? t : le(+t), f(), n) : r
                }, n
            },
            Ae = e(4);

        function Se(t) {
            return t.x
        }

        function Ce(t) {
            return t.y
        }
        var Ne = Math.PI * (3 - Math.sqrt(5)),
            Oe = function(s) {
                var e, r = 1,
                    n = .001,
                    i = 1 - Math.pow(n, 1 / 300),
                    o = 0,
                    u = .6,
                    a = Object(yn.map)(),
                    t = Object(Ae.d)(f),
                    c = Object(at.a)("tick", "end");

                function f() {
                    l(), c.call("tick", e), r < n && (t.stop(), c.call("end", e))
                }

                function l() {
                    var t, n, e = s.length;
                    for (r += (o - r) * i, a.each(function(t) {
                            t(r)
                        }), t = 0; t < e; ++t) null == (n = s[t]).fx ? n.x += n.vx *= u : (n.x = n.fx, n.vx = 0), null == n.fy ? n.y += n.vy *= u : (n.y = n.fy, n.vy = 0)
                }

                function h() {
                    for (var t, n = 0, e = s.length; n < e; ++n) {
                        if ((t = s[n]).index = n, isNaN(t.x) || isNaN(t.y)) {
                            var r = 10 * Math.sqrt(n),
                                i = n * Ne;
                            t.x = r * Math.cos(i), t.y = r * Math.sin(i)
                        }(isNaN(t.vx) || isNaN(t.vy)) && (t.vx = t.vy = 0)
                    }
                }

                function d(t) {
                    return t.initialize && t.initialize(s), t
                }
                return null == s && (s = []), h(), e = {
                    tick: l,
                    restart: function() {
                        return t.restart(f), e
                    },
                    stop: function() {
                        return t.stop(), e
                    },
                    nodes: function(t) {
                        return arguments.length ? (s = t, h(), a.each(d), e) : s
                    },
                    alpha: function(t) {
                        return arguments.length ? (r = +t, e) : r
                    },
                    alphaMin: function(t) {
                        return arguments.length ? (n = +t, e) : n
                    },
                    alphaDecay: function(t) {
                        return arguments.length ? (i = +t, e) : +i
                    },
                    alphaTarget: function(t) {
                        return arguments.length ? (o = +t, e) : o
                    },
                    velocityDecay: function(t) {
                        return arguments.length ? (u = 1 - t, e) : 1 - u
                    },
                    force: function(t, n) {
                        return 1 < arguments.length ? (null == n ? a.remove(t) : a.set(t, d(n)), e) : a.get(t)
                    },
                    find: function(t, n, e) {
                        var r, i, o, u, a, c = 0,
                            f = s.length;
                        for (null == e ? e = 1 / 0 : e *= e, c = 0; c < f; ++c)(o = (r = t - (u = s[c]).x) * r + (i = n - u.y) * i) < e && (a = u, e = o);
                        return a
                    },
                    on: function(t, n) {
                        return 1 < arguments.length ? (c.on(t, n), e) : c.on(t)
                    }
                }
            },
            Pe = function() {
                var i, c, f, s, r = le(-30),
                    l = 1,
                    h = 1 / 0,
                    d = .81;

                function n(t) {
                    var n, e = i.length,
                        r = ye(i, Se, Ce).visitAfter(o);
                    for (f = t, n = 0; n < e; ++n) c = i[n], r.visit(u)
                }

                function e() {
                    if (i) {
                        var t, n, e = i.length;
                        for (s = new Array(e), t = 0; t < e; ++t) n = i[t], s[n.index] = +r(n, t, i)
                    }
                }

                function o(t) {
                    var n, e, r, i, o, u = 0,
                        a = 0;
                    if (t.length) {
                        for (r = i = o = 0; o < 4; ++o)(n = t[o]) && (e = Math.abs(n.value)) && (u += n.value, a += e, r += e * n.x, i += e * n.y);
                        t.x = r / a, t.y = i / a
                    } else
                        for ((n = t).x = n.data.x, n.y = n.data.y; u += s[n.data.index], n = n.next;);
                    t.value = u
                }

                function u(t, n, e, r) {
                    if (!t.value) return !0;
                    var i = t.x - c.x,
                        o = t.y - c.y,
                        u = r - n,
                        a = i * i + o * o;
                    if (u * u / d < a) return a < h && (0 === i && (a += (i = he()) * i), 0 === o && (a += (o = he()) * o), a < l && (a = Math.sqrt(l * a)), c.vx += i * t.value * f / a, c.vy += o * t.value * f / a), !0;
                    if (!(t.length || h <= a))
                        for ((t.data !== c || t.next) && (0 === i && (a += (i = he()) * i), 0 === o && (a += (o = he()) * o), a < l && (a = Math.sqrt(l * a))); t.data !== c && (u = s[t.data.index] * f / a, c.vx += i * u, c.vy += o * u), t = t.next;);
                }
                return n.initialize = function(t) {
                    i = t, e()
                }, n.strength = function(t) {
                    return arguments.length ? (r = "function" == typeof t ? t : le(+t), e(), n) : r
                }, n.distanceMin = function(t) {
                    return arguments.length ? (l = t * t, n) : Math.sqrt(l)
                }, n.distanceMax = function(t) {
                    return arguments.length ? (h = t * t, n) : Math.sqrt(h)
                }, n.theta = function(t) {
                    return arguments.length ? (d = t * t, n) : Math.sqrt(d)
                }, n
            },
            Re = function(e, c, f) {
                var s, l, h, r = le(.1);

                function n(t) {
                    for (var n = 0, e = s.length; n < e; ++n) {
                        var r = s[n],
                            i = r.x - c || 1e-6,
                            o = r.y - f || 1e-6,
                            u = Math.sqrt(i * i + o * o),
                            a = (h[n] - u) * l[n] * t / u;
                        r.vx += i * a, r.vy += o * a
                    }
                }

                function i() {
                    if (s) {
                        var t, n = s.length;
                        for (l = new Array(n), h = new Array(n), t = 0; t < n; ++t) h[t] = +e(s[t], t, s), l[t] = isNaN(h[t]) ? 0 : +r(s[t], t, s)
                    }
                }
                return "function" != typeof e && (e = le(+e)), null == c && (c = 0), null == f && (f = 0), n.initialize = function(t) {
                    s = t, i()
                }, n.strength = function(t) {
                    return arguments.length ? (r = "function" == typeof t ? t : le(+t), i(), n) : r
                }, n.radius = function(t) {
                    return arguments.length ? (e = "function" == typeof t ? t : le(+t), i(), n) : e
                }, n.x = function(t) {
                    return arguments.length ? (c = +t, n) : c
                }, n.y = function(t) {
                    return arguments.length ? (f = +t, n) : f
                }, n
            },
            Ie = function(e) {
                var i, o, u, r = le(.1);

                function n(t) {
                    for (var n, e = 0, r = i.length; e < r; ++e)(n = i[e]).vx += (u[e] - n.x) * o[e] * t
                }

                function a() {
                    if (i) {
                        var t, n = i.length;
                        for (o = new Array(n), u = new Array(n), t = 0; t < n; ++t) o[t] = isNaN(u[t] = +e(i[t], t, i)) ? 0 : +r(i[t], t, i)
                    }
                }
                return "function" != typeof e && (e = le(null == e ? 0 : +e)), n.initialize = function(t) {
                    i = t, a()
                }, n.strength = function(t) {
                    return arguments.length ? (r = "function" == typeof t ? t : le(+t), a(), n) : r
                }, n.x = function(t) {
                    return arguments.length ? (e = "function" == typeof t ? t : le(+t), a(), n) : e
                }, n
            },
            ze = function(e) {
                var i, o, u, r = le(.1);

                function n(t) {
                    for (var n, e = 0, r = i.length; e < r; ++e)(n = i[e]).vy += (u[e] - n.y) * o[e] * t
                }

                function a() {
                    if (i) {
                        var t, n = i.length;
                        for (o = new Array(n), u = new Array(n), t = 0; t < n; ++t) o[t] = isNaN(u[t] = +e(i[t], t, i)) ? 0 : +r(i[t], t, i)
                    }
                }
                return "function" != typeof e && (e = le(null == e ? 0 : +e)), n.initialize = function(t) {
                    i = t, a()
                }, n.strength = function(t) {
                    return arguments.length ? (r = "function" == typeof t ? t : le(+t), a(), n) : r
                }, n.y = function(t) {
                    return arguments.length ? (e = "function" == typeof t ? t : le(+t), a(), n) : e
                }, n
            },
            je = function(t, n) {
                if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
                var e, r = t.slice(0, e);
                return [1 < r.length ? r[0] + r.slice(2) : r, +t.slice(e + 1)]
            },
            De = function(t) {
                return (t = je(Math.abs(t))) ? t[1] : NaN
            },
            Le = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

        function Be(t) {
            return new qe(t)
        }

        function qe(t) {
            if (!(n = Le.exec(t))) throw new Error("invalid format: " + t);
            var n;
            this.fill = n[1] || " ", this.align = n[2] || ">", this.sign = n[3] || "-", this.symbol = n[4] || "", this.zero = !!n[5], this.width = n[6] && +n[6], this.comma = !!n[7], this.precision = n[8] && +n[8].slice(1), this.trim = !!n[9], this.type = n[10] || ""
        }
        Be.prototype = qe.prototype, qe.prototype.toString = function() {
            return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type
        };
        var Fe, Ue, He, Ye, Ve = function(t, n) {
                var e = je(t, n);
                if (!e) return t + "";
                var r = e[0],
                    i = e[1];
                return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0")
            },
            We = {
                "%": function(t, n) {
                    return (100 * t).toFixed(n)
                },
                b: function(t) {
                    return Math.round(t).toString(2)
                },
                c: function(t) {
                    return t + ""
                },
                d: function(t) {
                    return Math.round(t).toString(10)
                },
                e: function(t, n) {
                    return t.toExponential(n)
                },
                f: function(t, n) {
                    return t.toFixed(n)
                },
                g: function(t, n) {
                    return t.toPrecision(n)
                },
                o: function(t) {
                    return Math.round(t).toString(8)
                },
                p: function(t, n) {
                    return Ve(100 * t, n)
                },
                r: Ve,
                s: function(t, n) {
                    var e = je(t, n);
                    if (!e) return t + "";
                    var r = e[0],
                        i = e[1],
                        o = i - (Fe = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
                        u = r.length;
                    return o === u ? r : u < o ? r + new Array(o - u + 1).join("0") : 0 < o ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + je(t, Math.max(0, n + o - 1))[0]
                },
                X: function(t) {
                    return Math.round(t).toString(16).toUpperCase()
                },
                x: function(t) {
                    return Math.round(t).toString(16)
                }
            },
            Ge = function(t) {
                return t
            },
            Xe = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"],
            $e = function(t) {
                var n, a, c, w = t.grouping && t.thousands ? (a = t.grouping, c = t.thousands, function(t, n) {
                        for (var e = t.length, r = [], i = 0, o = a[0], u = 0; 0 < e && 0 < o && (n < u + o + 1 && (o = Math.max(1, n - u)), r.push(t.substring(e -= o, e + o)), !((u += o + 1) > n));) o = a[i = (i + 1) % a.length];
                        return r.reverse().join(c)
                    }) : Ge,
                    r = t.currency,
                    M = t.decimal,
                    k = t.numerals ? (n = t.numerals, function(t) {
                        return t.replace(/[0-9]/g, function(t) {
                            return n[+t]
                        })
                    }) : Ge,
                    i = t.percent || "%";

                function u(t) {
                    var f = (t = Be(t)).fill,
                        s = t.align,
                        l = t.sign,
                        n = t.symbol,
                        h = t.zero,
                        d = t.width,
                        p = t.comma,
                        v = t.precision,
                        g = t.trim,
                        y = t.type;
                    "n" === y ? (p = !0, y = "g") : We[y] || (null == v && (v = 12), g = !0, y = "g"), (h || "0" === f && "=" === s) && (h = !0, f = "0", s = "=");
                    var b = "$" === n ? r[0] : "#" === n && /[boxX]/.test(y) ? "0" + y.toLowerCase() : "",
                        m = "$" === n ? r[1] : /[%p]/.test(y) ? i : "",
                        _ = We[y],
                        x = /[defgprs%]/.test(y);

                    function e(t) {
                        var n, e, r, i = b,
                            o = m;
                        if ("c" === y) o = _(t) + o, t = "";
                        else {
                            var u = (t = +t) < 0;
                            if (t = _(Math.abs(t), v), g && (t = function(t) {
                                    t: for (var n, e = t.length, r = 1, i = -1; r < e; ++r) switch (t[r]) {
                                        case ".":
                                            i = n = r;
                                            break;
                                        case "0":
                                            0 === i && (i = r), n = r;
                                            break;
                                        default:
                                            if (0 < i) {
                                                if (!+t[r]) break t;
                                                i = 0
                                            }
                                    }
                                    return 0 < i ? t.slice(0, i) + t.slice(n + 1) : t
                                }(t)), u && 0 == +t && (u = !1), i = (u ? "(" === l ? l : "-" : "-" === l || "(" === l ? "" : l) + i, o = ("s" === y ? Xe[8 + Fe / 3] : "") + o + (u && "(" === l ? ")" : ""), x)
                                for (n = -1, e = t.length; ++n < e;)
                                    if ((r = t.charCodeAt(n)) < 48 || 57 < r) {
                                        o = (46 === r ? M + t.slice(n + 1) : t.slice(n)) + o, t = t.slice(0, n);
                                        break
                                    }
                        }
                        p && !h && (t = w(t, 1 / 0));
                        var a = i.length + t.length + o.length,
                            c = a < d ? new Array(d - a + 1).join(f) : "";
                        switch (p && h && (t = w(c + t, c.length ? d - o.length : 1 / 0), c = ""), s) {
                            case "<":
                                t = i + t + o + c;
                                break;
                            case "=":
                                t = i + c + t + o;
                                break;
                            case "^":
                                t = c.slice(0, a = c.length >> 1) + i + t + o + c.slice(a);
                                break;
                            default:
                                t = c + i + t + o
                        }
                        return k(t)
                    }
                    return v = null == v ? 6 : /[gprs]/.test(y) ? Math.max(1, Math.min(21, v)) : Math.max(0, Math.min(20, v)), e.toString = function() {
                        return t + ""
                    }, e
                }
                return {
                    format: u,
                    formatPrefix: function(t, n) {
                        var e = u(((t = Be(t)).type = "f", t)),
                            r = 3 * Math.max(-8, Math.min(8, Math.floor(De(n) / 3))),
                            i = Math.pow(10, -r),
                            o = Xe[8 + r / 3];
                        return function(t) {
                            return e(i * t) + o
                        }
                    }
                }
            };

        function Ze(t) {
            return Ue = $e(t), He = Ue.format, Ye = Ue.formatPrefix, Ue
        }
        Ze({
            decimal: ".",
            thousands: ",",
            grouping: [3],
            currency: ["$", ""]
        });
        var Je = function(t) {
                return Math.max(0, -De(Math.abs(t)))
            },
            Ke = function(t, n) {
                return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(De(n) / 3))) - De(Math.abs(t)))
            },
            Qe = function(t, n) {
                return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, De(n) - De(t)) + 1
            },
            tr = function() {
                return new nr
            };

        function nr() {
            this.reset()
        }
        nr.prototype = {
            constructor: nr,
            reset: function() {
                this.s = this.t = 0
            },
            add: function(t) {
                rr(er, t, this.t), rr(this, er.s, this.s), this.s ? this.t += er.t : this.s = er.t
            },
            valueOf: function() {
                return this.s
            }
        };
        var er = new nr;

        function rr(t, n, e) {
            var r = t.s = n + e,
                i = r - n,
                o = r - i;
            t.t = n - o + (e - i)
        }
        var ir = 1e-6,
            or = Math.PI,
            ur = or / 2,
            ar = or / 4,
            cr = 2 * or,
            fr = 180 / or,
            sr = or / 180,
            lr = Math.abs,
            hr = Math.atan,
            dr = Math.atan2,
            pr = Math.cos,
            vr = Math.ceil,
            gr = Math.exp,
            yr = (Math.floor, Math.log),
            br = Math.pow,
            mr = Math.sin,
            _r = Math.sign || function(t) {
                return 0 < t ? 1 : t < 0 ? -1 : 0
            },
            xr = Math.sqrt,
            wr = Math.tan;

        function Mr(t) {
            return 1 < t ? 0 : t < -1 ? or : Math.acos(t)
        }

        function kr(t) {
            return 1 < t ? ur : t < -1 ? -ur : Math.asin(t)
        }

        function Er(t) {
            return (t = mr(t / 2)) * t
        }

        function Tr() {}

        function Ar(t, n) {
            t && Cr.hasOwnProperty(t.type) && Cr[t.type](t, n)
        }
        var Sr = {
                Feature: function(t, n) {
                    Ar(t.geometry, n)
                },
                FeatureCollection: function(t, n) {
                    for (var e = t.features, r = -1, i = e.length; ++r < i;) Ar(e[r].geometry, n)
                }
            },
            Cr = {
                Sphere: function(t, n) {
                    n.sphere()
                },
                Point: function(t, n) {
                    t = t.coordinates, n.point(t[0], t[1], t[2])
                },
                MultiPoint: function(t, n) {
                    for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) t = e[r], n.point(t[0], t[1], t[2])
                },
                LineString: function(t, n) {
                    Nr(t.coordinates, n, 0)
                },
                MultiLineString: function(t, n) {
                    for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) Nr(e[r], n, 0)
                },
                Polygon: function(t, n) {
                    Or(t.coordinates, n)
                },
                MultiPolygon: function(t, n) {
                    for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) Or(e[r], n)
                },
                GeometryCollection: function(t, n) {
                    for (var e = t.geometries, r = -1, i = e.length; ++r < i;) Ar(e[r], n)
                }
            };

        function Nr(t, n, e) {
            var r, i = -1,
                o = t.length - e;
            for (n.lineStart(); ++i < o;) r = t[i], n.point(r[0], r[1], r[2]);
            n.lineEnd()
        }

        function Or(t, n) {
            var e = -1,
                r = t.length;
            for (n.polygonStart(); ++e < r;) Nr(t[e], n, 1);
            n.polygonEnd()
        }
        var Pr, Rr, Ir, zr, jr, Dr = function(t, n) {
                t && Sr.hasOwnProperty(t.type) ? Sr[t.type](t, n) : Ar(t, n)
            },
            Lr = tr(),
            Br = tr(),
            qr = {
                point: Tr,
                lineStart: Tr,
                lineEnd: Tr,
                polygonStart: function() {
                    Lr.reset(), qr.lineStart = Fr, qr.lineEnd = Ur
                },
                polygonEnd: function() {
                    var t = +Lr;
                    Br.add(t < 0 ? cr + t : t), this.lineStart = this.lineEnd = this.point = Tr
                },
                sphere: function() {
                    Br.add(cr)
                }
            };

        function Fr() {
            qr.point = Hr
        }

        function Ur() {
            Yr(Pr, Rr)
        }

        function Hr(t, n) {
            qr.point = Yr, Pr = t, Rr = n, Ir = t *= sr, zr = pr(n = (n *= sr) / 2 + ar), jr = mr(n)
        }

        function Yr(t, n) {
            var e = (t *= sr) - Ir,
                r = 0 <= e ? 1 : -1,
                i = r * e,
                o = pr(n = (n *= sr) / 2 + ar),
                u = mr(n),
                a = jr * u,
                c = zr * o + a * pr(i),
                f = a * r * mr(i);
            Lr.add(dr(f, c)), Ir = t, zr = o, jr = u
        }
        var Vr = function(t) {
            return Br.reset(), Dr(t, qr), 2 * Br
        };

        function Wr(t) {
            return [dr(t[1], t[0]), kr(t[2])]
        }

        function Gr(t) {
            var n = t[0],
                e = t[1],
                r = pr(e);
            return [r * pr(n), r * mr(n), mr(e)]
        }

        function Xr(t, n) {
            return t[0] * n[0] + t[1] * n[1] + t[2] * n[2]
        }

        function $r(t, n) {
            return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]]
        }

        function Zr(t, n) {
            t[0] += n[0], t[1] += n[1], t[2] += n[2]
        }

        function Jr(t, n) {
            return [t[0] * n, t[1] * n, t[2] * n]
        }

        function Kr(t) {
            var n = xr(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
            t[0] /= n, t[1] /= n, t[2] /= n
        }
        var Qr, ti, ni, ei, ri, ii, oi, ui, ai, ci, fi = tr(),
            si = {
                point: li,
                lineStart: di,
                lineEnd: pi,
                polygonStart: function() {
                    si.point = vi, si.lineStart = gi, si.lineEnd = yi, fi.reset(), qr.polygonStart()
                },
                polygonEnd: function() {
                    qr.polygonEnd(), si.point = li, si.lineStart = di, si.lineEnd = pi, Lr < 0 ? (Qr = -(ni = 180), ti = -(ei = 90)) : ir < fi ? ei = 90 : fi < -ir && (ti = -90), ci[0] = Qr, ci[1] = ni
                }
            };

        function li(t, n) {
            ai.push(ci = [Qr = t, ni = t]), n < ti && (ti = n), ei < n && (ei = n)
        }

        function hi(t, n) {
            var e = Gr([t * sr, n * sr]);
            if (ui) {
                var r = $r(ui, e),
                    i = $r([r[1], -r[0], 0], r);
                Kr(i), i = Wr(i);
                var o, u = t - ri,
                    a = 0 < u ? 1 : -1,
                    c = i[0] * fr * a,
                    f = 180 < lr(u);
                f ^ (a * ri < c && c < a * t) ? (o = i[1] * fr, ei < o && (ei = o)) : f ^ (a * ri < (c = (c + 360) % 360 - 180) && c < a * t) ? (o = -i[1] * fr) < ti && (ti = o) : (n < ti && (ti = n), ei < n && (ei = n)), f ? t < ri ? bi(Qr, t) > bi(Qr, ni) && (ni = t) : bi(t, ni) > bi(Qr, ni) && (Qr = t) : Qr <= ni ? (t < Qr && (Qr = t), ni < t && (ni = t)) : ri < t ? bi(Qr, t) > bi(Qr, ni) && (ni = t) : bi(t, ni) > bi(Qr, ni) && (Qr = t)
            } else ai.push(ci = [Qr = t, ni = t]);
            n < ti && (ti = n), ei < n && (ei = n), ui = e, ri = t
        }

        function di() {
            si.point = hi
        }

        function pi() {
            ci[0] = Qr, ci[1] = ni, si.point = li, ui = null
        }

        function vi(t, n) {
            if (ui) {
                var e = t - ri;
                fi.add(180 < lr(e) ? e + (0 < e ? 360 : -360) : e)
            } else ii = t, oi = n;
            qr.point(t, n), hi(t, n)
        }

        function gi() {
            qr.lineStart()
        }

        function yi() {
            vi(ii, oi), qr.lineEnd(), lr(fi) > ir && (Qr = -(ni = 180)), ci[0] = Qr, ci[1] = ni, ui = null
        }

        function bi(t, n) {
            return (n -= t) < 0 ? n + 360 : n
        }

        function mi(t, n) {
            return t[0] - n[0]
        }

        function _i(t, n) {
            return t[0] <= t[1] ? t[0] <= n && n <= t[1] : n < t[0] || t[1] < n
        }
        var xi, wi, Mi, ki, Ei, Ti, Ai, Si, Ci, Ni, Oi, Pi, Ri, Ii, zi, ji, Di = function(t) {
                var n, e, r, i, o, u, a;
                if (ei = ni = -(Qr = ti = 1 / 0), ai = [], Dr(t, si), e = ai.length) {
                    for (ai.sort(mi), n = 1, o = [r = ai[0]]; n < e; ++n) _i(r, (i = ai[n])[0]) || _i(r, i[1]) ? (bi(r[0], i[1]) > bi(r[0], r[1]) && (r[1] = i[1]), bi(i[0], r[1]) > bi(r[0], r[1]) && (r[0] = i[0])) : o.push(r = i);
                    for (u = -1 / 0, n = 0, r = o[e = o.length - 1]; n <= e; r = i, ++n) i = o[n], (a = bi(r[1], i[0])) > u && (u = a, Qr = i[0], ni = r[1])
                }
                return ai = ci = null, Qr === 1 / 0 || ti === 1 / 0 ? [
                    [NaN, NaN],
                    [NaN, NaN]
                ] : [
                    [Qr, ti],
                    [ni, ei]
                ]
            },
            Li = {
                sphere: Tr,
                point: Bi,
                lineStart: Fi,
                lineEnd: Yi,
                polygonStart: function() {
                    Li.lineStart = Vi, Li.lineEnd = Wi
                },
                polygonEnd: function() {
                    Li.lineStart = Fi, Li.lineEnd = Yi
                }
            };

        function Bi(t, n) {
            t *= sr;
            var e = pr(n *= sr);
            qi(e * pr(t), e * mr(t), mr(n))
        }

        function qi(t, n, e) {
            Mi += (t - Mi) / ++xi, ki += (n - ki) / xi, Ei += (e - Ei) / xi
        }

        function Fi() {
            Li.point = Ui
        }

        function Ui(t, n) {
            t *= sr;
            var e = pr(n *= sr);
            Ii = e * pr(t), zi = e * mr(t), ji = mr(n), Li.point = Hi, qi(Ii, zi, ji)
        }

        function Hi(t, n) {
            t *= sr;
            var e = pr(n *= sr),
                r = e * pr(t),
                i = e * mr(t),
                o = mr(n),
                u = dr(xr((u = zi * o - ji * i) * u + (u = ji * r - Ii * o) * u + (u = Ii * i - zi * r) * u), Ii * r + zi * i + ji * o);
            wi += u, Ti += u * (Ii + (Ii = r)), Ai += u * (zi + (zi = i)), Si += u * (ji + (ji = o)), qi(Ii, zi, ji)
        }

        function Yi() {
            Li.point = Bi
        }

        function Vi() {
            Li.point = Gi
        }

        function Wi() {
            Xi(Pi, Ri), Li.point = Bi
        }

        function Gi(t, n) {
            Pi = t, Ri = n, t *= sr, n *= sr, Li.point = Xi;
            var e = pr(n);
            Ii = e * pr(t), zi = e * mr(t), ji = mr(n), qi(Ii, zi, ji)
        }

        function Xi(t, n) {
            t *= sr;
            var e = pr(n *= sr),
                r = e * pr(t),
                i = e * mr(t),
                o = mr(n),
                u = zi * o - ji * i,
                a = ji * r - Ii * o,
                c = Ii * i - zi * r,
                f = xr(u * u + a * a + c * c),
                s = kr(f),
                l = f && -s / f;
            Ci += l * u, Ni += l * a, Oi += l * c, wi += s, Ti += s * (Ii + (Ii = r)), Ai += s * (zi + (zi = i)), Si += s * (ji + (ji = o)), qi(Ii, zi, ji)
        }
        var $i = function(t) {
                xi = wi = Mi = ki = Ei = Ti = Ai = Si = Ci = Ni = Oi = 0, Dr(t, Li);
                var n = Ci,
                    e = Ni,
                    r = Oi,
                    i = n * n + e * e + r * r;
                return i < 1e-12 && (n = Ti, e = Ai, r = Si, wi < ir && (n = Mi, e = ki, r = Ei), (i = n * n + e * e + r * r) < 1e-12) ? [NaN, NaN] : [dr(e, n) * fr, kr(r / xr(i)) * fr]
            },
            Zi = function(t) {
                return function() {
                    return t
                }
            },
            Ji = function(e, r) {
                function t(t, n) {
                    return t = e(t, n), r(t[0], t[1])
                }
                return e.invert && r.invert && (t.invert = function(t, n) {
                    return (t = r.invert(t, n)) && e.invert(t[0], t[1])
                }), t
            };

        function Ki(t, n) {
            return [or < t ? t - cr : t < -or ? t + cr : t, n]
        }

        function Qi(t, n, e) {
            return (t %= cr) ? n || e ? Ji(no(t), eo(n, e)) : no(t) : n || e ? eo(n, e) : Ki
        }

        function to(e) {
            return function(t, n) {
                return [or < (t += e) ? t - cr : t < -or ? t + cr : t, n]
            }
        }

        function no(t) {
            var n = to(t);
            return n.invert = to(-t), n
        }

        function eo(t, n) {
            var a = pr(t),
                c = mr(t),
                f = pr(n),
                s = mr(n);

            function e(t, n) {
                var e = pr(n),
                    r = pr(t) * e,
                    i = mr(t) * e,
                    o = mr(n),
                    u = o * a + r * c;
                return [dr(i * f - u * s, r * a - o * c), kr(u * f + i * s)]
            }
            return e.invert = function(t, n) {
                var e = pr(n),
                    r = pr(t) * e,
                    i = mr(t) * e,
                    o = mr(n),
                    u = o * f - i * s;
                return [dr(i * f + o * s, r * a + u * c), kr(u * a - r * c)]
            }, e
        }
        Ki.invert = Ki;
        var ro = function(n) {
            function t(t) {
                return (t = n(t[0] * sr, t[1] * sr))[0] *= fr, t[1] *= fr, t
            }
            return n = Qi(n[0] * sr, n[1] * sr, 2 < n.length ? n[2] * sr : 0), t.invert = function(t) {
                return (t = n.invert(t[0] * sr, t[1] * sr))[0] *= fr, t[1] *= fr, t
            }, t
        };

        function io(t, n, e, r, i, o) {
            if (e) {
                var u = pr(n),
                    a = mr(n),
                    c = r * e;
                null == i ? (i = n + r * cr, o = n - c / 2) : (i = oo(u, i), o = oo(u, o), (0 < r ? i < o : o < i) && (i += r * cr));
                for (var f, s = i; 0 < r ? o < s : s < o; s -= c) f = Wr([u, -a * pr(s), -a * mr(s)]), t.point(f[0], f[1])
            }
        }

        function oo(t, n) {
            (n = Gr(n))[0] -= t, Kr(n);
            var e = Mr(-n[1]);
            return ((-n[2] < 0 ? -e : e) + cr - ir) % cr
        }
        var uo = function() {
                var r, i, o = Zi([0, 0]),
                    u = Zi(90),
                    a = Zi(6),
                    c = {
                        point: function(t, n) {
                            r.push(t = i(t, n)), t[0] *= fr, t[1] *= fr
                        }
                    };

                function n() {
                    var t = o.apply(this, arguments),
                        n = u.apply(this, arguments) * sr,
                        e = a.apply(this, arguments) * sr;
                    return r = [], i = Qi(-t[0] * sr, -t[1] * sr, 0).invert, io(c, n, e, 1), t = {
                        type: "Polygon",
                        coordinates: [r]
                    }, r = i = null, t
                }
                return n.center = function(t) {
                    return arguments.length ? (o = "function" == typeof t ? t : Zi([+t[0], +t[1]]), n) : o
                }, n.radius = function(t) {
                    return arguments.length ? (u = "function" == typeof t ? t : Zi(+t), n) : u
                }, n.precision = function(t) {
                    return arguments.length ? (a = "function" == typeof t ? t : Zi(+t), n) : a
                }, n
            },
            ao = function() {
                var e, n = [];
                return {
                    point: function(t, n) {
                        e.push([t, n])
                    },
                    lineStart: function() {
                        n.push(e = [])
                    },
                    lineEnd: Tr,
                    rejoin: function() {
                        1 < n.length && n.push(n.pop().concat(n.shift()))
                    },
                    result: function() {
                        var t = n;
                        return n = [], e = null, t
                    }
                }
            },
            co = function(t, n) {
                return lr(t[0] - n[0]) < ir && lr(t[1] - n[1]) < ir
            };

        function fo(t, n, e, r) {
            this.x = t, this.z = n, this.o = e, this.e = r, this.v = !1, this.n = this.p = null
        }
        var so = function(t, n, e, r, o) {
            var u, i, a = [],
                c = [];
            if (t.forEach(function(t) {
                    if (!((n = t.length - 1) <= 0)) {
                        var n, e, r = t[0],
                            i = t[n];
                        if (co(r, i)) {
                            for (o.lineStart(), u = 0; u < n; ++u) o.point((r = t[u])[0], r[1]);
                            o.lineEnd()
                        } else a.push(e = new fo(r, t, null, !0)), c.push(e.o = new fo(r, null, e, !1)), a.push(e = new fo(i, t, null, !1)), c.push(e.o = new fo(i, null, e, !0))
                    }
                }), a.length) {
                for (c.sort(n), lo(a), lo(c), u = 0, i = c.length; u < i; ++u) c[u].e = e = !e;
                for (var f, s, l = a[0];;) {
                    for (var h = l, d = !0; h.v;)
                        if ((h = h.n) === l) return;
                    f = h.z, o.lineStart();
                    do {
                        if (h.v = h.o.v = !0, h.e) {
                            if (d)
                                for (u = 0, i = f.length; u < i; ++u) o.point((s = f[u])[0], s[1]);
                            else r(h.x, h.n.x, 1, o);
                            h = h.n
                        } else {
                            if (d)
                                for (f = h.p.z, u = f.length - 1; 0 <= u; --u) o.point((s = f[u])[0], s[1]);
                            else r(h.x, h.p.x, -1, o);
                            h = h.p
                        }
                        f = (h = h.o).z, d = !d
                    } while (!h.v);
                    o.lineEnd()
                }
            }
        };

        function lo(t) {
            if (n = t.length) {
                for (var n, e, r = 0, i = t[0]; ++r < n;) i.n = e = t[r], e.p = i, i = e;
                i.n = e = t[0], e.p = i
            }
        }
        var ho = tr(),
            po = function(t, n) {
                var e = n[0],
                    r = n[1],
                    i = mr(r),
                    o = [mr(e), -pr(e), 0],
                    u = 0,
                    a = 0;
                ho.reset(), 1 === i ? r = ur + ir : -1 === i && (r = -ur - ir);
                for (var c = 0, f = t.length; c < f; ++c)
                    if (l = (s = t[c]).length)
                        for (var s, l, h = s[l - 1], d = h[0], p = h[1] / 2 + ar, v = mr(p), g = pr(p), y = 0; y < l; ++y, d = m, v = x, g = w, h = b) {
                            var b = s[y],
                                m = b[0],
                                _ = b[1] / 2 + ar,
                                x = mr(_),
                                w = pr(_),
                                M = m - d,
                                k = 0 <= M ? 1 : -1,
                                E = k * M,
                                T = or < E,
                                A = v * x;
                            if (ho.add(dr(A * k * mr(E), g * w + A * pr(E))), u += T ? M + k * cr : M, T ^ e <= d ^ e <= m) {
                                var S = $r(Gr(h), Gr(b));
                                Kr(S);
                                var C = $r(o, S);
                                Kr(C);
                                var N = (T ^ 0 <= M ? -1 : 1) * kr(C[2]);
                                (N < r || r === N && (S[0] || S[1])) && (a += T ^ 0 <= M ? 1 : -1)
                            }
                        }
                return (u < -ir || u < ir && ho < -ir) ^ 1 & a
            },
            vo = function(g, y, b, m) {
                return function(a) {
                    var c, f, s, e = y(a),
                        l = ao(),
                        h = y(l),
                        d = !1,
                        n = {
                            point: r,
                            lineStart: i,
                            lineEnd: o,
                            polygonStart: function() {
                                n.point = p, n.lineStart = u, n.lineEnd = v, f = [], c = []
                            },
                            polygonEnd: function() {
                                n.point = r, n.lineStart = i, n.lineEnd = o, f = D(f);
                                var t = po(c, m);
                                f.length ? (d || (a.polygonStart(), d = !0), so(f, yo, t, b, a)) : t && (d || (a.polygonStart(), d = !0), a.lineStart(), b(null, null, 1, a), a.lineEnd()), d && (a.polygonEnd(), d = !1), f = c = null
                            },
                            sphere: function() {
                                a.polygonStart(), a.lineStart(), b(null, null, 1, a), a.lineEnd(), a.polygonEnd()
                            }
                        };

                    function r(t, n) {
                        g(t, n) && a.point(t, n)
                    }

                    function t(t, n) {
                        e.point(t, n)
                    }

                    function i() {
                        n.point = t, e.lineStart()
                    }

                    function o() {
                        n.point = r, e.lineEnd()
                    }

                    function p(t, n) {
                        s.push([t, n]), h.point(t, n)
                    }

                    function u() {
                        h.lineStart(), s = []
                    }

                    function v() {
                        p(s[0][0], s[0][1]), h.lineEnd();
                        var t, n, e, r, i = h.clean(),
                            o = l.result(),
                            u = o.length;
                        if (s.pop(), c.push(s), s = null, u)
                            if (1 & i) {
                                if (0 < (n = (e = o[0]).length - 1)) {
                                    for (d || (a.polygonStart(), d = !0), a.lineStart(), t = 0; t < n; ++t) a.point((r = e[t])[0], r[1]);
                                    a.lineEnd()
                                }
                            } else 1 < u && 2 & i && o.push(o.pop().concat(o.shift())), f.push(o.filter(go))
                    }
                    return n
                }
            };

        function go(t) {
            return 1 < t.length
        }

        function yo(t, n) {
            return ((t = t.x)[0] < 0 ? t[1] - ur - ir : ur - t[1]) - ((n = n.x)[0] < 0 ? n[1] - ur - ir : ur - n[1])
        }
        var bo = vo(function() {
            return !0
        }, function(l) {
            var h, d = NaN,
                p = NaN,
                v = NaN;
            return {
                lineStart: function() {
                    l.lineStart(), h = 1
                },
                point: function(t, n) {
                    var e, r, i, o, u, a, c, f = 0 < t ? or : -or,
                        s = lr(t - d);
                    lr(s - or) < ir ? (l.point(d, p = 0 < (p + n) / 2 ? ur : -ur), l.point(v, p), l.lineEnd(), l.lineStart(), l.point(f, p), l.point(t, p), h = 0) : v !== f && or <= s && (lr(d - v) < ir && (d -= v * ir), lr(t - f) < ir && (t -= f * ir), r = p, o = n, c = mr((e = d) - (i = t)), p = lr(c) > ir ? hr((mr(r) * (a = pr(o)) * mr(i) - mr(o) * (u = pr(r)) * mr(e)) / (u * a * c)) : (r + o) / 2, l.point(v, p), l.lineEnd(), l.lineStart(), l.point(f, p), h = 0), l.point(d = t, p = n), v = f
                },
                lineEnd: function() {
                    l.lineEnd(), d = p = NaN
                },
                clean: function() {
                    return 2 - h
                }
            }
        }, function(t, n, e, r) {
            var i;
            if (null == t) i = e * ur, r.point(-or, i), r.point(0, i), r.point(or, i), r.point(or, 0), r.point(or, -i), r.point(0, -i), r.point(-or, -i), r.point(-or, 0), r.point(-or, i);
            else if (lr(t[0] - n[0]) > ir) {
                var o = t[0] < n[0] ? or : -or;
                i = e * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i)
            } else r.point(n[0], n[1])
        }, [-or, -ur]);
        var mo = function(i) {
                var T = pr(i),
                    o = 6 * sr,
                    d = 0 < T,
                    p = lr(T) > ir;

                function v(t, n) {
                    return pr(t) * pr(n) > T
                }

                function g(t, n, e) {
                    var r = [1, 0, 0],
                        i = $r(Gr(t), Gr(n)),
                        o = Xr(i, i),
                        u = i[0],
                        a = o - u * u;
                    if (!a) return !e && t;
                    var c = T * o / a,
                        f = -T * u / a,
                        s = $r(r, i),
                        l = Jr(r, c);
                    Zr(l, Jr(i, f));
                    var h = s,
                        d = Xr(l, h),
                        p = Xr(h, h),
                        v = d * d - p * (Xr(l, l) - 1);
                    if (!(v < 0)) {
                        var g = xr(v),
                            y = Jr(h, (-d - g) / p);
                        if (Zr(y, l), y = Wr(y), !e) return y;
                        var b, m = t[0],
                            _ = n[0],
                            x = t[1],
                            w = n[1];
                        _ < m && (b = m, m = _, _ = b);
                        var M = _ - m,
                            k = lr(M - or) < ir;
                        if (!k && w < x && (b = x, x = w, w = b), k || M < ir ? k ? 0 < x + w ^ y[1] < (lr(y[0] - m) < ir ? x : w) : x <= y[1] && y[1] <= w : or < M ^ (m <= y[0] && y[0] <= _)) {
                            var E = Jr(h, (-d + g) / p);
                            return Zr(E, l), [y, Wr(E)]
                        }
                    }
                }

                function y(t, n) {
                    var e = d ? i : or - i,
                        r = 0;
                    return t < -e ? r |= 1 : e < t && (r |= 2), n < -e ? r |= 4 : e < n && (r |= 8), r
                }
                return vo(v, function(a) {
                    var c, f, s, l, h;
                    return {
                        lineStart: function() {
                            l = s = !1, h = 1
                        },
                        point: function(t, n) {
                            var e, r = [t, n],
                                i = v(t, n),
                                o = d ? i ? 0 : y(t, n) : i ? y(t + (t < 0 ? or : -or), n) : 0;
                            if (!c && (l = s = i) && a.lineStart(), i !== s && (!(e = g(c, r)) || co(c, e) || co(r, e)) && (r[0] += ir, r[1] += ir, i = v(r[0], r[1])), i !== s) h = 0, i ? (a.lineStart(), e = g(r, c), a.point(e[0], e[1])) : (e = g(c, r), a.point(e[0], e[1]), a.lineEnd()), c = e;
                            else if (p && c && d ^ i) {
                                var u;
                                o & f || !(u = g(r, c, !0)) || (h = 0, d ? (a.lineStart(), a.point(u[0][0], u[0][1]), a.point(u[1][0], u[1][1]), a.lineEnd()) : (a.point(u[1][0], u[1][1]), a.lineEnd(), a.lineStart(), a.point(u[0][0], u[0][1])))
                            }!i || c && co(c, r) || a.point(r[0], r[1]), c = r, s = i, f = o
                        },
                        lineEnd: function() {
                            s && a.lineEnd(), c = null
                        },
                        clean: function() {
                            return h | (l && s) << 1
                        }
                    }
                }, function(t, n, e, r) {
                    io(r, i, o, e, t, n)
                }, d ? [0, -i] : [-or, i - or])
            },
            _o = function(t, n, e, r, i, o) {
                var u, a = t[0],
                    c = t[1],
                    f = 0,
                    s = 1,
                    l = n[0] - a,
                    h = n[1] - c;
                if (u = e - a, l || !(0 < u)) {
                    if (u /= l, l < 0) {
                        if (u < f) return;
                        u < s && (s = u)
                    } else if (0 < l) {
                        if (s < u) return;
                        f < u && (f = u)
                    }
                    if (u = i - a, l || !(u < 0)) {
                        if (u /= l, l < 0) {
                            if (s < u) return;
                            f < u && (f = u)
                        } else if (0 < l) {
                            if (u < f) return;
                            u < s && (s = u)
                        }
                        if (u = r - c, h || !(0 < u)) {
                            if (u /= h, h < 0) {
                                if (u < f) return;
                                u < s && (s = u)
                            } else if (0 < h) {
                                if (s < u) return;
                                f < u && (f = u)
                            }
                            if (u = o - c, h || !(u < 0)) {
                                if (u /= h, h < 0) {
                                    if (s < u) return;
                                    f < u && (f = u)
                                } else if (0 < h) {
                                    if (u < f) return;
                                    u < s && (s = u)
                                }
                                return 0 < f && (t[0] = a + f * l, t[1] = c + f * h), s < 1 && (n[0] = a + s * l, n[1] = c + s * h), !0
                            }
                        }
                    }
                }
            },
            xo = 1e9,
            wo = -xo;

        function Mo(y, b, m, _) {
            function x(t, n) {
                return y <= t && t <= m && b <= n && n <= _
            }

            function w(t, n, e, r) {
                var i = 0,
                    o = 0;
                if (null == t || (i = u(t, e)) !== (o = u(n, e)) || a(t, n) < 0 ^ 0 < e)
                    for (; r.point(0 === i || 3 === i ? y : m, 1 < i ? _ : b), (i = (i + e + 4) % 4) !== o;);
                else r.point(n[0], n[1])
            }

            function u(t, n) {
                return lr(t[0] - y) < ir ? 0 < n ? 0 : 3 : lr(t[0] - m) < ir ? 0 < n ? 2 : 1 : lr(t[1] - b) < ir ? 0 < n ? 1 : 0 : 0 < n ? 3 : 2
            }

            function M(t, n) {
                return a(t.x, n.x)
            }

            function a(t, n) {
                var e = u(t, 1),
                    r = u(n, 1);
                return e !== r ? e - r : 0 === e ? n[1] - t[1] : 1 === e ? t[0] - n[0] : 2 === e ? t[1] - n[1] : n[0] - t[0]
            }
            return function(r) {
                var i, l, o, u, a, c, f, s, h, d, p, v = r,
                    t = ao(),
                    n = {
                        point: e,
                        lineStart: function() {
                            n.point = g, l && l.push(o = []);
                            d = !0, h = !1, f = s = NaN
                        },
                        lineEnd: function() {
                            i && (g(u, a), c && h && t.rejoin(), i.push(t.result()));
                            n.point = e, h && v.lineEnd()
                        },
                        polygonStart: function() {
                            v = t, i = [], l = [], p = !0
                        },
                        polygonEnd: function() {
                            var t = function() {
                                    for (var t = 0, n = 0, e = l.length; n < e; ++n)
                                        for (var r, i, o = l[n], u = 1, a = o.length, c = o[0], f = c[0], s = c[1]; u < a; ++u) r = f, i = s, c = o[u], f = c[0], s = c[1], i <= _ ? _ < s && (s - i) * (y - r) < (f - r) * (_ - i) && ++t : s <= _ && (f - r) * (_ - i) < (s - i) * (y - r) && --t;
                                    return t
                                }(),
                                n = p && t,
                                e = (i = D(i)).length;
                            (n || e) && (r.polygonStart(), n && (r.lineStart(), w(null, null, 1, r), r.lineEnd()), e && so(i, M, t, w, r), r.polygonEnd());
                            v = r, i = l = o = null
                        }
                    };

                function e(t, n) {
                    x(t, n) && v.point(t, n)
                }

                function g(t, n) {
                    var e = x(t, n);
                    if (l && o.push([t, n]), d) u = t, a = n, d = !1, (c = e) && (v.lineStart(), v.point(t, n));
                    else if (e && h) v.point(t, n);
                    else {
                        var r = [f = Math.max(wo, Math.min(xo, f)), s = Math.max(wo, Math.min(xo, s))],
                            i = [t = Math.max(wo, Math.min(xo, t)), n = Math.max(wo, Math.min(xo, n))];
                        _o(r, i, y, b, m, _) ? (h || (v.lineStart(), v.point(r[0], r[1])), v.point(i[0], i[1]), e || v.lineEnd(), p = !1) : e && (v.lineStart(), v.point(t, n), p = !1)
                    }
                    f = t, s = n, h = e
                }
                return n
            }
        }
        var ko, Eo, To, Ao = function() {
                var n, e, r, i = 0,
                    o = 0,
                    u = 960,
                    a = 500;
                return r = {
                    stream: function(t) {
                        return n && e === t ? n : n = Mo(i, o, u, a)(e = t)
                    },
                    extent: function(t) {
                        return arguments.length ? (i = +t[0][0], o = +t[0][1], u = +t[1][0], a = +t[1][1], n = e = null, r) : [
                            [i, o],
                            [u, a]
                        ]
                    }
                }
            },
            So = tr(),
            Co = {
                sphere: Tr,
                point: Tr,
                lineStart: function() {
                    Co.point = Oo, Co.lineEnd = No
                },
                lineEnd: Tr,
                polygonStart: Tr,
                polygonEnd: Tr
            };

        function No() {
            Co.point = Co.lineEnd = Tr
        }

        function Oo(t, n) {
            ko = t *= sr, Eo = mr(n *= sr), To = pr(n), Co.point = Po
        }

        function Po(t, n) {
            t *= sr;
            var e = mr(n *= sr),
                r = pr(n),
                i = lr(t - ko),
                o = pr(i),
                u = r * mr(i),
                a = To * e - Eo * r * o,
                c = Eo * e + To * r * o;
            So.add(dr(xr(u * u + a * a), c)), ko = t, Eo = e, To = r
        }
        var Ro = function(t) {
                return So.reset(), Dr(t, Co), +So
            },
            Io = [null, null],
            zo = {
                type: "LineString",
                coordinates: Io
            },
            jo = function(t, n) {
                return Io[0] = t, Io[1] = n, Ro(zo)
            },
            Do = {
                Feature: function(t, n) {
                    return Bo(t.geometry, n)
                },
                FeatureCollection: function(t, n) {
                    for (var e = t.features, r = -1, i = e.length; ++r < i;)
                        if (Bo(e[r].geometry, n)) return !0;
                    return !1
                }
            },
            Lo = {
                Sphere: function() {
                    return !0
                },
                Point: function(t, n) {
                    return qo(t.coordinates, n)
                },
                MultiPoint: function(t, n) {
                    for (var e = t.coordinates, r = -1, i = e.length; ++r < i;)
                        if (qo(e[r], n)) return !0;
                    return !1
                },
                LineString: function(t, n) {
                    return Fo(t.coordinates, n)
                },
                MultiLineString: function(t, n) {
                    for (var e = t.coordinates, r = -1, i = e.length; ++r < i;)
                        if (Fo(e[r], n)) return !0;
                    return !1
                },
                Polygon: function(t, n) {
                    return Uo(t.coordinates, n)
                },
                MultiPolygon: function(t, n) {
                    for (var e = t.coordinates, r = -1, i = e.length; ++r < i;)
                        if (Uo(e[r], n)) return !0;
                    return !1
                },
                GeometryCollection: function(t, n) {
                    for (var e = t.geometries, r = -1, i = e.length; ++r < i;)
                        if (Bo(e[r], n)) return !0;
                    return !1
                }
            };

        function Bo(t, n) {
            return !(!t || !Lo.hasOwnProperty(t.type)) && Lo[t.type](t, n)
        }

        function qo(t, n) {
            return 0 === jo(t, n)
        }

        function Fo(t, n) {
            var e = jo(t[0], t[1]);
            return jo(t[0], n) + jo(n, t[1]) <= e + ir
        }

        function Uo(t, n) {
            return !!po(t.map(Ho), Yo(n))
        }

        function Ho(t) {
            return (t = t.map(Yo)).pop(), t
        }

        function Yo(t) {
            return [t[0] * sr, t[1] * sr]
        }
        var Vo = function(t, n) {
            return (t && Do.hasOwnProperty(t.type) ? Do[t.type] : Bo)(t, n)
        };

        function Wo(t, n, e) {
            var r = E(t, n - ir, e).concat(n);
            return function(n) {
                return r.map(function(t) {
                    return [n, t]
                })
            }
        }

        function Go(t, n, e) {
            var r = E(t, n - ir, e).concat(n);
            return function(n) {
                return r.map(function(t) {
                    return [t, n]
                })
            }
        }

        function Xo() {
            var n, e, r, i, o, u, a, c, f, s, l, h, d = 10,
                p = d,
                v = 90,
                g = 360,
                y = 2.5;

            function b() {
                return {
                    type: "MultiLineString",
                    coordinates: t()
                }
            }

            function t() {
                return E(vr(i / v) * v, r, v).map(l).concat(E(vr(c / g) * g, a, g).map(h)).concat(E(vr(e / d) * d, n, d).filter(function(t) {
                    return lr(t % v) > ir
                }).map(f)).concat(E(vr(u / p) * p, o, p).filter(function(t) {
                    return lr(t % g) > ir
                }).map(s))
            }
            return b.lines = function() {
                return t().map(function(t) {
                    return {
                        type: "LineString",
                        coordinates: t
                    }
                })
            }, b.outline = function() {
                return {
                    type: "Polygon",
                    coordinates: [l(i).concat(h(a).slice(1), l(r).reverse().slice(1), h(c).reverse().slice(1))]
                }
            }, b.extent = function(t) {
                return arguments.length ? b.extentMajor(t).extentMinor(t) : b.extentMinor()
            }, b.extentMajor = function(t) {
                return arguments.length ? (i = +t[0][0], r = +t[1][0], c = +t[0][1], a = +t[1][1], r < i && (t = i, i = r, r = t), a < c && (t = c, c = a, a = t), b.precision(y)) : [
                    [i, c],
                    [r, a]
                ]
            }, b.extentMinor = function(t) {
                return arguments.length ? (e = +t[0][0], n = +t[1][0], u = +t[0][1], o = +t[1][1], n < e && (t = e, e = n, n = t), o < u && (t = u, u = o, o = t), b.precision(y)) : [
                    [e, u],
                    [n, o]
                ]
            }, b.step = function(t) {
                return arguments.length ? b.stepMajor(t).stepMinor(t) : b.stepMinor()
            }, b.stepMajor = function(t) {
                return arguments.length ? (v = +t[0], g = +t[1], b) : [v, g]
            }, b.stepMinor = function(t) {
                return arguments.length ? (d = +t[0], p = +t[1], b) : [d, p]
            }, b.precision = function(t) {
                return arguments.length ? (y = +t, f = Wo(u, o, 90), s = Go(e, n, y), l = Wo(c, a, 90), h = Go(i, r, y), b) : y
            }, b.extentMajor([
                [-180, -90 + ir],
                [180, 90 - ir]
            ]).extentMinor([
                [-180, -80 - ir],
                [180, 80 + ir]
            ])
        }

        function $o() {
            return Xo()()
        }
        var Zo, Jo, Ko, Qo, tu = function(t, n) {
                var e = t[0] * sr,
                    r = t[1] * sr,
                    i = n[0] * sr,
                    o = n[1] * sr,
                    u = pr(r),
                    a = mr(r),
                    c = pr(o),
                    f = mr(o),
                    s = u * pr(e),
                    l = u * mr(e),
                    h = c * pr(i),
                    d = c * mr(i),
                    p = 2 * kr(xr(Er(o - r) + u * c * Er(i - e))),
                    v = mr(p),
                    g = p ? function(t) {
                        var n = mr(t *= p) / v,
                            e = mr(p - t) / v,
                            r = e * s + n * h,
                            i = e * l + n * d,
                            o = e * a + n * f;
                        return [dr(i, r) * fr, dr(o, xr(r * r + i * i)) * fr]
                    } : function() {
                        return [e * fr, r * fr]
                    };
                return g.distance = p, g
            },
            nu = function(t) {
                return t
            },
            eu = tr(),
            ru = tr(),
            iu = {
                point: Tr,
                lineStart: Tr,
                lineEnd: Tr,
                polygonStart: function() {
                    iu.lineStart = ou, iu.lineEnd = cu
                },
                polygonEnd: function() {
                    iu.lineStart = iu.lineEnd = iu.point = Tr, eu.add(lr(ru)), ru.reset()
                },
                result: function() {
                    var t = eu / 2;
                    return eu.reset(), t
                }
            };

        function ou() {
            iu.point = uu
        }

        function uu(t, n) {
            iu.point = au, Zo = Ko = t, Jo = Qo = n
        }

        function au(t, n) {
            ru.add(Qo * t - Ko * n), Ko = t, Qo = n
        }

        function cu() {
            au(Zo, Jo)
        }
        var fu = iu,
            su = 1 / 0,
            lu = su,
            hu = -su,
            du = hu;
        var pu, vu, gu, yu, bu = {
                point: function(t, n) {
                    t < su && (su = t);
                    hu < t && (hu = t);
                    n < lu && (lu = n);
                    du < n && (du = n)
                },
                lineStart: Tr,
                lineEnd: Tr,
                polygonStart: Tr,
                polygonEnd: Tr,
                result: function() {
                    var t = [
                        [su, lu],
                        [hu, du]
                    ];
                    return hu = du = -(lu = su = 1 / 0), t
                }
            },
            mu = 0,
            _u = 0,
            xu = 0,
            wu = 0,
            Mu = 0,
            ku = 0,
            Eu = 0,
            Tu = 0,
            Au = 0,
            Su = {
                point: Cu,
                lineStart: Nu,
                lineEnd: Ru,
                polygonStart: function() {
                    Su.lineStart = Iu, Su.lineEnd = zu
                },
                polygonEnd: function() {
                    Su.point = Cu, Su.lineStart = Nu, Su.lineEnd = Ru
                },
                result: function() {
                    var t = Au ? [Eu / Au, Tu / Au] : ku ? [wu / ku, Mu / ku] : xu ? [mu / xu, _u / xu] : [NaN, NaN];
                    return mu = _u = xu = wu = Mu = ku = Eu = Tu = Au = 0, t
                }
            };

        function Cu(t, n) {
            mu += t, _u += n, ++xu
        }

        function Nu() {
            Su.point = Ou
        }

        function Ou(t, n) {
            Su.point = Pu, Cu(gu = t, yu = n)
        }

        function Pu(t, n) {
            var e = t - gu,
                r = n - yu,
                i = xr(e * e + r * r);
            wu += i * (gu + t) / 2, Mu += i * (yu + n) / 2, ku += i, Cu(gu = t, yu = n)
        }

        function Ru() {
            Su.point = Cu
        }

        function Iu() {
            Su.point = ju
        }

        function zu() {
            Du(pu, vu)
        }

        function ju(t, n) {
            Su.point = Du, Cu(pu = gu = t, vu = yu = n)
        }

        function Du(t, n) {
            var e = t - gu,
                r = n - yu,
                i = xr(e * e + r * r);
            wu += i * (gu + t) / 2, Mu += i * (yu + n) / 2, ku += i, Eu += (i = yu * t - gu * n) * (gu + t), Tu += i * (yu + n), Au += 3 * i, Cu(gu = t, yu = n)
        }
        var Lu = Su;

        function Bu(t) {
            this._context = t
        }
        Bu.prototype = {
            _radius: 4.5,
            pointRadius: function(t) {
                return this._radius = t, this
            },
            polygonStart: function() {
                this._line = 0
            },
            polygonEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._point = 0
            },
            lineEnd: function() {
                0 === this._line && this._context.closePath(), this._point = NaN
            },
            point: function(t, n) {
                switch (this._point) {
                    case 0:
                        this._context.moveTo(t, n), this._point = 1;
                        break;
                    case 1:
                        this._context.lineTo(t, n);
                        break;
                    default:
                        this._context.moveTo(t + this._radius, n), this._context.arc(t, n, this._radius, 0, cr)
                }
            },
            result: Tr
        };
        var qu, Fu, Uu, Hu, Yu, Vu = tr(),
            Wu = {
                point: Tr,
                lineStart: function() {
                    Wu.point = Gu
                },
                lineEnd: function() {
                    qu && Xu(Fu, Uu), Wu.point = Tr
                },
                polygonStart: function() {
                    qu = !0
                },
                polygonEnd: function() {
                    qu = null
                },
                result: function() {
                    var t = +Vu;
                    return Vu.reset(), t
                }
            };

        function Gu(t, n) {
            Wu.point = Xu, Fu = Hu = t, Uu = Yu = n
        }

        function Xu(t, n) {
            Hu -= t, Yu -= n, Vu.add(xr(Hu * Hu + Yu * Yu)), Hu = t, Yu = n
        }
        var $u = Wu;

        function Zu() {
            this._string = []
        }

        function Ju(t) {
            return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
        }
        Zu.prototype = {
            _radius: 4.5,
            _circle: Ju(4.5),
            pointRadius: function(t) {
                return (t = +t) !== this._radius && (this._radius = t, this._circle = null), this
            },
            polygonStart: function() {
                this._line = 0
            },
            polygonEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._point = 0
            },
            lineEnd: function() {
                0 === this._line && this._string.push("Z"), this._point = NaN
            },
            point: function(t, n) {
                switch (this._point) {
                    case 0:
                        this._string.push("M", t, ",", n), this._point = 1;
                        break;
                    case 1:
                        this._string.push("L", t, ",", n);
                        break;
                    default:
                        null == this._circle && (this._circle = Ju(this._radius)), this._string.push("M", t, ",", n, this._circle)
                }
            },
            result: function() {
                if (this._string.length) {
                    var t = this._string.join("");
                    return this._string = [], t
                }
                return null
            }
        };
        var Ku = function(n, e) {
                var r, i, o = 4.5;

                function u(t) {
                    return t && ("function" == typeof o && i.pointRadius(+o.apply(this, arguments)), Dr(t, r(i))), i.result()
                }
                return u.area = function(t) {
                    return Dr(t, r(fu)), fu.result()
                }, u.measure = function(t) {
                    return Dr(t, r($u)), $u.result()
                }, u.bounds = function(t) {
                    return Dr(t, r(bu)), bu.result()
                }, u.centroid = function(t) {
                    return Dr(t, r(Lu)), Lu.result()
                }, u.projection = function(t) {
                    return arguments.length ? (r = null == t ? (n = null, nu) : (n = t).stream, u) : n
                }, u.context = function(t) {
                    return arguments.length ? (i = null == t ? (e = null, new Zu) : new Bu(e = t), "function" != typeof o && i.pointRadius(o), u) : e
                }, u.pointRadius = function(t) {
                    return arguments.length ? (o = "function" == typeof t ? t : (i.pointRadius(+t), +t), u) : o
                }, u.projection(n).context(e)
            },
            Qu = function(t) {
                return {
                    stream: ta(t)
                }
            };

        function ta(r) {
            return function(t) {
                var n = new na;
                for (var e in r) n[e] = r[e];
                return n.stream = t, n
            }
        }

        function na() {}

        function ea(t, n, e) {
            var r = t.clipExtent && t.clipExtent();
            return t.scale(150).translate([0, 0]), null != r && t.clipExtent(null), Dr(e, t.stream(bu)), n(bu.result()), null != r && t.clipExtent(r), t
        }

        function ra(u, a, t) {
            return ea(u, function(t) {
                var n = a[1][0] - a[0][0],
                    e = a[1][1] - a[0][1],
                    r = Math.min(n / (t[1][0] - t[0][0]), e / (t[1][1] - t[0][1])),
                    i = +a[0][0] + (n - r * (t[1][0] + t[0][0])) / 2,
                    o = +a[0][1] + (e - r * (t[1][1] + t[0][1])) / 2;
                u.scale(150 * r).translate([i, o])
            }, t)
        }

        function ia(t, n, e) {
            return ra(t, [
                [0, 0], n
            ], e)
        }

        function oa(o, u, t) {
            return ea(o, function(t) {
                var n = +u,
                    e = n / (t[1][0] - t[0][0]),
                    r = (n - e * (t[1][0] + t[0][0])) / 2,
                    i = -e * t[0][1];
                o.scale(150 * e).translate([r, i])
            }, t)
        }

        function ua(o, u, t) {
            return ea(o, function(t) {
                var n = +u,
                    e = n / (t[1][1] - t[0][1]),
                    r = -e * t[0][0],
                    i = (n - e * (t[1][1] + t[0][1])) / 2;
                o.scale(150 * e).translate([r, i])
            }, t)
        }
        na.prototype = {
            constructor: na,
            point: function(t, n) {
                this.stream.point(t, n)
            },
            sphere: function() {
                this.stream.sphere()
            },
            lineStart: function() {
                this.stream.lineStart()
            },
            lineEnd: function() {
                this.stream.lineEnd()
            },
            polygonStart: function() {
                this.stream.polygonStart()
            },
            polygonEnd: function() {
                this.stream.polygonEnd()
            }
        };
        var aa = pr(30 * sr),
            ca = function(t, n) {
                return +n ? function(C, N) {
                    function O(t, n, e, r, i, o, u, a, c, f, s, l, h, d) {
                        var p = u - t,
                            v = a - n,
                            g = p * p + v * v;
                        if (4 * N < g && h--) {
                            var y = r + f,
                                b = i + s,
                                m = o + l,
                                _ = xr(y * y + b * b + m * m),
                                x = kr(m /= _),
                                w = lr(lr(m) - 1) < ir || lr(e - c) < ir ? (e + c) / 2 : dr(b, y),
                                M = C(w, x),
                                k = M[0],
                                E = M[1],
                                T = k - t,
                                A = E - n,
                                S = v * T - p * A;
                            (N < S * S / g || .3 < lr((p * T + v * A) / g - .5) || r * f + i * s + o * l < aa) && (O(t, n, e, r, i, o, k, E, w, y /= _, b /= _, m, h, d), d.point(k, E), O(k, E, w, y, b, m, u, a, c, f, s, l, h, d))
                        }
                    }
                    return function(i) {
                        var e, r, o, u, a, c, f, s, l, h, d, p, v = {
                            point: t,
                            lineStart: n,
                            lineEnd: y,
                            polygonStart: function() {
                                i.polygonStart(), v.lineStart = b
                            },
                            polygonEnd: function() {
                                i.polygonEnd(), v.lineStart = n
                            }
                        };

                        function t(t, n) {
                            t = C(t, n), i.point(t[0], t[1])
                        }

                        function n() {
                            s = NaN, v.point = g, i.lineStart()
                        }

                        function g(t, n) {
                            var e = Gr([t, n]),
                                r = C(t, n);
                            O(s, l, f, h, d, p, s = r[0], l = r[1], f = t, h = e[0], d = e[1], p = e[2], 16, i), i.point(s, l)
                        }

                        function y() {
                            v.point = t, i.lineEnd()
                        }

                        function b() {
                            n(), v.point = m, v.lineEnd = _
                        }

                        function m(t, n) {
                            g(e = t, n), r = s, o = l, u = h, a = d, c = p, v.point = g
                        }

                        function _() {
                            O(s, l, f, h, d, p, r, o, e, u, a, c, 16, i), (v.lineEnd = y)()
                        }
                        return v
                    }
                }(t, n) : (e = t, ta({
                    point: function(t, n) {
                        t = e(t, n), this.stream.point(t[0], t[1])
                    }
                }));
                var e
            };
        var fa = ta({
            point: function(t, n) {
                this.stream.point(t * sr, n * sr)
            }
        });

        function sa(t, e, r, n) {
            var i = pr(n),
                o = mr(n),
                u = i * t,
                a = o * t,
                c = i / t,
                f = o / t,
                s = (o * r - i * e) / t,
                l = (o * e + i * r) / t;

            function h(t, n) {
                return [u * t - a * n + e, r - a * t - u * n]
            }
            return h.invert = function(t, n) {
                return [c * t - f * n + s, l - f * t - c * n]
            }, h
        }

        function la(t) {
            return ha(function() {
                return t
            })()
        }

        function ha(t) {
            var e, i, n, r, o, u, a, c, f, s, l = 150,
                h = 480,
                d = 250,
                p = 0,
                v = 0,
                g = 0,
                y = 0,
                b = 0,
                m = 0,
                _ = null,
                x = bo,
                w = null,
                M = nu,
                k = .5;

            function E(t) {
                return c(t[0] * sr, t[1] * sr)
            }

            function T(t) {
                return (t = c.invert(t[0], t[1])) && [t[0] * fr, t[1] * fr]
            }

            function A() {
                var t = sa(l, 0, 0, m).apply(null, e(p, v)),
                    n = (m ? sa : function(e, r, i) {
                        function t(t, n) {
                            return [r + e * t, i - e * n]
                        }
                        return t.invert = function(t, n) {
                            return [(t - r) / e, (i - n) / e]
                        }, t
                    })(l, h - t[0], d - t[1], m);
                return i = Qi(g, y, b), a = Ji(e, n), c = Ji(i, a), u = ca(a, k), S()
            }

            function S() {
                return f = s = null, E
            }
            return E.stream = function(t) {
                    return f && s === t ? f : f = fa((r = i, ta({
                        point: function(t, n) {
                            var e = r(t, n);
                            return this.stream.point(e[0], e[1])
                        }
                    })(x(u(M(s = t))))));
                    var r
                }, E.preclip = function(t) {
                    return arguments.length ? (x = t, _ = void 0, S()) : x
                }, E.postclip = function(t) {
                    return arguments.length ? (M = t, w = n = r = o = null, S()) : M
                }, E.clipAngle = function(t) {
                    return arguments.length ? (x = +t ? mo(_ = t * sr) : (_ = null, bo), S()) : _ * fr
                }, E.clipExtent = function(t) {
                    return arguments.length ? (M = null == t ? (w = n = r = o = null, nu) : Mo(w = +t[0][0], n = +t[0][1], r = +t[1][0], o = +t[1][1]), S()) : null == w ? null : [
                        [w, n],
                        [r, o]
                    ]
                }, E.scale = function(t) {
                    return arguments.length ? (l = +t, A()) : l
                }, E.translate = function(t) {
                    return arguments.length ? (h = +t[0], d = +t[1], A()) : [h, d]
                }, E.center = function(t) {
                    return arguments.length ? (p = t[0] % 360 * sr, v = t[1] % 360 * sr, A()) : [p * fr, v * fr]
                }, E.rotate = function(t) {
                    return arguments.length ? (g = t[0] % 360 * sr, y = t[1] % 360 * sr, b = 2 < t.length ? t[2] % 360 * sr : 0, A()) : [g * fr, y * fr, b * fr]
                }, E.angle = function(t) {
                    return arguments.length ? (m = t % 360 * sr, A()) : m * fr
                }, E.precision = function(t) {
                    return arguments.length ? (u = ca(a, k = t * t), S()) : xr(k)
                }, E.fitExtent = function(t, n) {
                    return ra(E, t, n)
                }, E.fitSize = function(t, n) {
                    return ia(E, t, n)
                }, E.fitWidth = function(t, n) {
                    return oa(E, t, n)
                }, E.fitHeight = function(t, n) {
                    return ua(E, t, n)
                },
                function() {
                    return e = t.apply(this, arguments), E.invert = e.invert && T, A()
                }
        }

        function da(t) {
            var n = 0,
                e = or / 3,
                r = ha(t),
                i = r(n, e);
            return i.parallels = function(t) {
                return arguments.length ? r(n = t[0] * sr, e = t[1] * sr) : [n * fr, e * fr]
            }, i
        }

        function pa(t, n) {
            var e = mr(t),
                r = (e + mr(n)) / 2;
            if (lr(r) < ir) return function(t) {
                var e = pr(t);

                function n(t, n) {
                    return [t * e, mr(n) / e]
                }
                return n.invert = function(t, n) {
                    return [t / e, kr(n * e)]
                }, n
            }(t);
            var i = 1 + e * (2 * r - e),
                o = xr(i) / r;

            function u(t, n) {
                var e = xr(i - 2 * r * mr(n)) / r;
                return [e * mr(t *= r), o - e * pr(t)]
            }
            return u.invert = function(t, n) {
                var e = o - n;
                return [dr(t, lr(e)) / r * _r(e), kr((i - (t * t + e * e) * r * r) / (2 * r))]
            }, u
        }
        var va = function() {
                return da(pa).scale(155.424).center([0, 33.6442])
            },
            ga = function() {
                return va().parallels([29.5, 45.5]).scale(1070).translate([480, 250]).rotate([96, 0]).center([-.6, 38.7])
            };
        var ya = function() {
            var n, e, i, o, u, r, a = ga(),
                c = va().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
                f = va().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
                s = {
                    point: function(t, n) {
                        r = [t, n]
                    }
                };

            function l(t) {
                var n = t[0],
                    e = t[1];
                return r = null, i.point(n, e), r || (o.point(n, e), r) || (u.point(n, e), r)
            }

            function h() {
                return n = e = null, l
            }
            return l.invert = function(t) {
                var n = a.scale(),
                    e = a.translate(),
                    r = (t[0] - e[0]) / n,
                    i = (t[1] - e[1]) / n;
                return (.12 <= i && i < .234 && -.425 <= r && r < -.214 ? c : .166 <= i && i < .234 && -.214 <= r && r < -.115 ? f : a).invert(t)
            }, l.stream = function(t) {
                return n && e === t ? n : (r = [a.stream(e = t), c.stream(t), f.stream(t)], i = r.length, n = {
                    point: function(t, n) {
                        for (var e = -1; ++e < i;) r[e].point(t, n)
                    },
                    sphere: function() {
                        for (var t = -1; ++t < i;) r[t].sphere()
                    },
                    lineStart: function() {
                        for (var t = -1; ++t < i;) r[t].lineStart()
                    },
                    lineEnd: function() {
                        for (var t = -1; ++t < i;) r[t].lineEnd()
                    },
                    polygonStart: function() {
                        for (var t = -1; ++t < i;) r[t].polygonStart()
                    },
                    polygonEnd: function() {
                        for (var t = -1; ++t < i;) r[t].polygonEnd()
                    }
                });
                var r, i
            }, l.precision = function(t) {
                return arguments.length ? (a.precision(t), c.precision(t), f.precision(t), h()) : a.precision()
            }, l.scale = function(t) {
                return arguments.length ? (a.scale(t), c.scale(.35 * t), f.scale(t), l.translate(a.translate())) : a.scale()
            }, l.translate = function(t) {
                if (!arguments.length) return a.translate();
                var n = a.scale(),
                    e = +t[0],
                    r = +t[1];
                return i = a.translate(t).clipExtent([
                    [e - .455 * n, r - .238 * n],
                    [e + .455 * n, r + .238 * n]
                ]).stream(s), o = c.translate([e - .307 * n, r + .201 * n]).clipExtent([
                    [e - .425 * n + ir, r + .12 * n + ir],
                    [e - .214 * n - ir, r + .234 * n - ir]
                ]).stream(s), u = f.translate([e - .205 * n, r + .212 * n]).clipExtent([
                    [e - .214 * n + ir, r + .166 * n + ir],
                    [e - .115 * n - ir, r + .234 * n - ir]
                ]).stream(s), h()
            }, l.fitExtent = function(t, n) {
                return ra(l, t, n)
            }, l.fitSize = function(t, n) {
                return ia(l, t, n)
            }, l.fitWidth = function(t, n) {
                return oa(l, t, n)
            }, l.fitHeight = function(t, n) {
                return ua(l, t, n)
            }, l.scale(1070)
        };

        function ba(o) {
            return function(t, n) {
                var e = pr(t),
                    r = pr(n),
                    i = o(e * r);
                return [i * r * mr(t), i * mr(n)]
            }
        }

        function ma(u) {
            return function(t, n) {
                var e = xr(t * t + n * n),
                    r = u(e),
                    i = mr(r),
                    o = pr(r);
                return [dr(t * i, e * o), kr(e && n * i / e)]
            }
        }
        var _a = ba(function(t) {
            return xr(2 / (1 + t))
        });
        _a.invert = ma(function(t) {
            return 2 * kr(t / 2)
        });
        var xa = function() {
                return la(_a).scale(124.75).clipAngle(179.999)
            },
            wa = ba(function(t) {
                return (t = Mr(t)) && t / mr(t)
            });
        wa.invert = ma(function(t) {
            return t
        });
        var Ma = function() {
            return la(wa).scale(79.4188).clipAngle(179.999)
        };

        function ka(t, n) {
            return [t, yr(wr((ur + n) / 2))]
        }
        ka.invert = function(t, n) {
            return [t, 2 * hr(gr(n)) - ur]
        };
        var Ea = function() {
            return Ta(ka).scale(961 / cr)
        };

        function Ta(e) {
            var r, i, o, u = la(e),
                n = u.center,
                a = u.scale,
                c = u.translate,
                f = u.clipExtent,
                s = null;

            function l() {
                var t = or * a(),
                    n = u(ro(u.rotate()).invert([0, 0]));
                return f(null == s ? [
                    [n[0] - t, n[1] - t],
                    [n[0] + t, n[1] + t]
                ] : e === ka ? [
                    [Math.max(n[0] - t, s), r],
                    [Math.min(n[0] + t, i), o]
                ] : [
                    [s, Math.max(n[1] - t, r)],
                    [i, Math.min(n[1] + t, o)]
                ])
            }
            return u.scale = function(t) {
                return arguments.length ? (a(t), l()) : a()
            }, u.translate = function(t) {
                return arguments.length ? (c(t), l()) : c()
            }, u.center = function(t) {
                return arguments.length ? (n(t), l()) : n()
            }, u.clipExtent = function(t) {
                return arguments.length ? (null == t ? s = r = i = o = null : (s = +t[0][0], r = +t[0][1], i = +t[1][0], o = +t[1][1]), l()) : null == s ? null : [
                    [s, r],
                    [i, o]
                ]
            }, l()
        }

        function Aa(t) {
            return wr((ur + t) / 2)
        }

        function Sa(t, n) {
            var e = pr(t),
                i = t === n ? mr(t) : yr(e / pr(n)) / yr(Aa(n) / Aa(t)),
                o = e * br(Aa(t), i) / i;
            if (!i) return ka;

            function r(t, n) {
                0 < o ? n < -ur + ir && (n = -ur + ir) : ur - ir < n && (n = ur - ir);
                var e = o / br(Aa(n), i);
                return [e * mr(i * t), o - e * pr(i * t)]
            }
            return r.invert = function(t, n) {
                var e = o - n,
                    r = _r(i) * xr(t * t + e * e);
                return [dr(t, lr(e)) / i * _r(e), 2 * hr(br(o / r, 1 / i)) - ur]
            }, r
        }
        var Ca = function() {
            return da(Sa).scale(109.5).parallels([30, 30])
        };

        function Na(t, n) {
            return [t, n]
        }
        Na.invert = Na;
        var Oa = function() {
            return la(Na).scale(152.63)
        };

        function Pa(t, n) {
            var e = pr(t),
                i = t === n ? mr(t) : (e - pr(n)) / (n - t),
                o = e / i + t;
            if (lr(i) < ir) return Na;

            function r(t, n) {
                var e = o - n,
                    r = i * t;
                return [e * mr(r), o - e * pr(r)]
            }
            return r.invert = function(t, n) {
                var e = o - n;
                return [dr(t, lr(e)) / i * _r(e), o - _r(i) * xr(t * t + e * e)]
            }, r
        }
        var Ra = function() {
            return da(Pa).scale(131.154).center([0, 13.9389])
        };

        function Ia(t, n) {
            var e = pr(n),
                r = pr(t) * e;
            return [e * mr(t) / r, mr(n) / r]
        }
        Ia.invert = ma(hr);
        var za = function() {
            return la(Ia).scale(144.049).clipAngle(60)
        };

        function ja(e, r, i, o) {
            return 1 === e && 1 === r && 0 === i && 0 === o ? nu : ta({
                point: function(t, n) {
                    this.stream.point(t * e + i, n * r + o)
                }
            })
        }
        var Da = function() {
            var n, e, r, i, o, u, a = 1,
                c = 0,
                f = 0,
                s = 1,
                l = 1,
                h = nu,
                d = null,
                p = nu;

            function v() {
                return i = o = null, u
            }
            return u = {
                stream: function(t) {
                    return i && o === t ? i : i = h(p(o = t))
                },
                postclip: function(t) {
                    return arguments.length ? (p = t, d = n = e = r = null, v()) : p
                },
                clipExtent: function(t) {
                    return arguments.length ? (p = null == t ? (d = n = e = r = null, nu) : Mo(d = +t[0][0], n = +t[0][1], e = +t[1][0], r = +t[1][1]), v()) : null == d ? null : [
                        [d, n],
                        [e, r]
                    ]
                },
                scale: function(t) {
                    return arguments.length ? (h = ja((a = +t) * s, a * l, c, f), v()) : a
                },
                translate: function(t) {
                    return arguments.length ? (h = ja(a * s, a * l, c = +t[0], f = +t[1]), v()) : [c, f]
                },
                reflectX: function(t) {
                    return arguments.length ? (h = ja(a * (s = t ? -1 : 1), a * l, c, f), v()) : s < 0
                },
                reflectY: function(t) {
                    return arguments.length ? (h = ja(a * s, a * (l = t ? -1 : 1), c, f), v()) : l < 0
                },
                fitExtent: function(t, n) {
                    return ra(u, t, n)
                },
                fitSize: function(t, n) {
                    return ia(u, t, n)
                },
                fitWidth: function(t, n) {
                    return oa(u, t, n)
                },
                fitHeight: function(t, n) {
                    return ua(u, t, n)
                }
            }
        };

        function La(t, n) {
            var e = n * n,
                r = e * e;
            return [t * (.8707 - .131979 * e + r * (r * (.003971 * e - .001529 * r) - .013791)), n * (1.007226 + e * (.015085 + r * (.028874 * e - .044475 - .005916 * r)))]
        }
        La.invert = function(t, n) {
            var e, r = n,
                i = 25;
            do {
                var o = r * r,
                    u = o * o;
                r -= e = (r * (1.007226 + o * (.015085 + u * (.028874 * o - .044475 - .005916 * u))) - n) / (1.007226 + o * (.045255 + u * (.259866 * o - .311325 - .005916 * 11 * u)))
            } while (lr(e) > ir && 0 < --i);
            return [t / (.8707 + (o = r * r) * (o * (o * o * o * (.003971 - .001529 * o) - .013791) - .131979)), r]
        };
        var Ba = function() {
            return la(La).scale(175.295)
        };

        function qa(t, n) {
            return [pr(n) * mr(t), mr(n)]
        }
        qa.invert = ma(kr);
        var Fa = function() {
            return la(qa).scale(249.5).clipAngle(90 + ir)
        };

        function Ua(t, n) {
            var e = pr(n),
                r = 1 + pr(t) * e;
            return [e * mr(t) / r, mr(n) / r]
        }
        Ua.invert = ma(function(t) {
            return 2 * hr(t)
        });
        var Ha = function() {
            return la(Ua).scale(250).clipAngle(142)
        };

        function Ya(t, n) {
            return [yr(wr((ur + n) / 2)), -t]
        }
        Ya.invert = function(t, n) {
            return [-n, 2 * hr(gr(t)) - ur]
        };
        var Va = function() {
            var t = Ta(Ya),
                n = t.center,
                e = t.rotate;
            return t.center = function(t) {
                return arguments.length ? n([-t[1], t[0]]) : [(t = n())[1], -t[0]]
            }, t.rotate = function(t) {
                return arguments.length ? e([t[0], t[1], 2 < t.length ? t[2] + 90 : 90]) : [(t = e())[0], t[1], t[2] - 90]
            }, e([0, 0, 90]).scale(159.155)
        };

        function Wa(t, n) {
            return t.parent === n.parent ? 1 : 2
        }

        function Ga(t, n) {
            return t + n.x
        }

        function Xa(t, n) {
            return Math.max(t, n.y)
        }
        var $a = function() {
            var a = Wa,
                c = 1,
                f = 1,
                s = !1;

            function n(n) {
                var r, i = 0;
                n.eachAfter(function(t) {
                    var n, e = t.children;
                    e ? (t.x = (n = e).reduce(Ga, 0) / n.length, t.y = 1 + e.reduce(Xa, 0)) : (t.x = r ? i += a(t, r) : 0, t.y = 0, r = t)
                });
                var t = function(t) {
                        for (var n; n = t.children;) t = n[0];
                        return t
                    }(n),
                    e = function(t) {
                        for (var n; n = t.children;) t = n[n.length - 1];
                        return t
                    }(n),
                    o = t.x - a(t, e) / 2,
                    u = e.x + a(e, t) / 2;
                return n.eachAfter(s ? function(t) {
                    t.x = (t.x - n.x) * c, t.y = (n.y - t.y) * f
                } : function(t) {
                    t.x = (t.x - o) / (u - o) * c, t.y = (1 - (n.y ? t.y / n.y : 1)) * f
                })
            }
            return n.separation = function(t) {
                return arguments.length ? (a = t, n) : a
            }, n.size = function(t) {
                return arguments.length ? (s = !1, c = +t[0], f = +t[1], n) : s ? null : [c, f]
            }, n.nodeSize = function(t) {
                return arguments.length ? (s = !0, c = +t[0], f = +t[1], n) : s ? [c, f] : null
            }, n
        };

        function Za(t) {
            var n = 0,
                e = t.children,
                r = e && e.length;
            if (r)
                for (; 0 <= --r;) n += e[r].value;
            else n = 1;
            t.value = n
        }

        function Ja(t, n) {
            var e, r, i, o, u, a = new nc(t),
                c = +t.value && (a.value = t.value),
                f = [a];
            for (null == n && (n = Ka); e = f.pop();)
                if (c && (e.value = +e.data.value), (i = n(e.data)) && (u = i.length))
                    for (e.children = new Array(u), o = u - 1; 0 <= o; --o) f.push(r = e.children[o] = new nc(i[o])), r.parent = e, r.depth = e.depth + 1;
            return a.eachBefore(tc)
        }

        function Ka(t) {
            return t.children
        }

        function Qa(t) {
            t.data = t.data.data
        }

        function tc(t) {
            for (var n = 0; t.height = n, (t = t.parent) && t.height < ++n;);
        }

        function nc(t) {
            this.data = t, this.depth = this.height = 0, this.parent = null
        }
        nc.prototype = Ja.prototype = {
            constructor: nc,
            count: function() {
                return this.eachAfter(Za)
            },
            each: function(t) {
                var n, e, r, i, o = this,
                    u = [o];
                do {
                    for (n = u.reverse(), u = []; o = n.pop();)
                        if (t(o), e = o.children)
                            for (r = 0, i = e.length; r < i; ++r) u.push(e[r])
                } while (u.length);
                return this
            },
            eachAfter: function(t) {
                for (var n, e, r, i = this, o = [i], u = []; i = o.pop();)
                    if (u.push(i), n = i.children)
                        for (e = 0, r = n.length; e < r; ++e) o.push(n[e]);
                for (; i = u.pop();) t(i);
                return this
            },
            eachBefore: function(t) {
                for (var n, e, r = this, i = [r]; r = i.pop();)
                    if (t(r), n = r.children)
                        for (e = n.length - 1; 0 <= e; --e) i.push(n[e]);
                return this
            },
            sum: function(i) {
                return this.eachAfter(function(t) {
                    for (var n = +i(t.data) || 0, e = t.children, r = e && e.length; 0 <= --r;) n += e[r].value;
                    t.value = n
                })
            },
            sort: function(n) {
                return this.eachBefore(function(t) {
                    t.children && t.children.sort(n)
                })
            },
            path: function(t) {
                for (var n = this, e = function(t, n) {
                        if (t === n) return t;
                        var e = t.ancestors(),
                            r = n.ancestors(),
                            i = null;
                        for (t = e.pop(), n = r.pop(); t === n;) i = t, t = e.pop(), n = r.pop();
                        return i
                    }(n, t), r = [n]; n !== e;) n = n.parent, r.push(n);
                for (var i = r.length; t !== e;) r.splice(i, 0, t), t = t.parent;
                return r
            },
            ancestors: function() {
                for (var t = this, n = [t]; t = t.parent;) n.push(t);
                return n
            },
            descendants: function() {
                var n = [];
                return this.each(function(t) {
                    n.push(t)
                }), n
            },
            leaves: function() {
                var n = [];
                return this.eachBefore(function(t) {
                    t.children || n.push(t)
                }), n
            },
            links: function() {
                var n = this,
                    e = [];
                return n.each(function(t) {
                    t !== n && e.push({
                        source: t.parent,
                        target: t
                    })
                }), e
            },
            copy: function() {
                return Ja(this).eachBefore(Qa)
            }
        };
        var ec = Array.prototype.slice;
        var rc = function(t) {
            for (var n, e, r = 0, i = (t = function(t) {
                    for (var n, e, r = t.length; r;) e = Math.random() * r-- | 0, n = t[r], t[r] = t[e], t[e] = n;
                    return t
                }(ec.call(t))).length, o = []; r < i;) n = t[r], e && uc(e, n) ? ++r : (e = cc(o = ic(o, n)), r = 0);
            return e
        };

        function ic(t, n) {
            var e, r;
            if (ac(n, t)) return [n];
            for (e = 0; e < t.length; ++e)
                if (oc(n, t[e]) && ac(fc(t[e], n), t)) return [t[e], n];
            for (e = 0; e < t.length - 1; ++e)
                for (r = e + 1; r < t.length; ++r)
                    if (oc(fc(t[e], t[r]), n) && oc(fc(t[e], n), t[r]) && oc(fc(t[r], n), t[e]) && ac(sc(t[e], t[r], n), t)) return [t[e], t[r], n];
            throw new Error
        }

        function oc(t, n) {
            var e = t.r - n.r,
                r = n.x - t.x,
                i = n.y - t.y;
            return e < 0 || e * e < r * r + i * i
        }

        function uc(t, n) {
            var e = t.r - n.r + 1e-6,
                r = n.x - t.x,
                i = n.y - t.y;
            return 0 < e && r * r + i * i < e * e
        }

        function ac(t, n) {
            for (var e = 0; e < n.length; ++e)
                if (!uc(t, n[e])) return !1;
            return !0
        }

        function cc(t) {
            switch (t.length) {
                case 1:
                    return {
                        x: (n = t[0]).x,
                        y: n.y,
                        r: n.r
                    };
                case 2:
                    return fc(t[0], t[1]);
                case 3:
                    return sc(t[0], t[1], t[2])
            }
            var n
        }

        function fc(t, n) {
            var e = t.x,
                r = t.y,
                i = t.r,
                o = n.x,
                u = n.y,
                a = n.r,
                c = o - e,
                f = u - r,
                s = a - i,
                l = Math.sqrt(c * c + f * f);
            return {
                x: (e + o + c / l * s) / 2,
                y: (r + u + f / l * s) / 2,
                r: (l + i + a) / 2
            }
        }

        function sc(t, n, e) {
            var r = t.x,
                i = t.y,
                o = t.r,
                u = n.x,
                a = n.y,
                c = n.r,
                f = e.x,
                s = e.y,
                l = e.r,
                h = r - u,
                d = r - f,
                p = i - a,
                v = i - s,
                g = c - o,
                y = l - o,
                b = r * r + i * i - o * o,
                m = b - u * u - a * a + c * c,
                _ = b - f * f - s * s + l * l,
                x = d * p - h * v,
                w = (p * _ - v * m) / (2 * x) - r,
                M = (v * g - p * y) / x,
                k = (d * m - h * _) / (2 * x) - i,
                E = (h * y - d * g) / x,
                T = M * M + E * E - 1,
                A = 2 * (o + w * M + k * E),
                S = w * w + k * k - o * o,
                C = -(T ? (A + Math.sqrt(A * A - 4 * T * S)) / (2 * T) : S / A);
            return {
                x: r + w + M * C,
                y: i + k + E * C,
                r: C
            }
        }

        function lc(t, n, e) {
            var r, i, o, u, a = t.x - n.x,
                c = t.y - n.y,
                f = a * a + c * c;
            e.y = f ? (i = n.r + e.r, i *= i, u = t.r + e.r, (u *= u) < i ? (r = (f + u - i) / (2 * f), o = Math.sqrt(Math.max(0, u / f - r * r)), e.x = t.x - r * a - o * c, t.y - r * c + o * a) : (r = (f + i - u) / (2 * f), o = Math.sqrt(Math.max(0, i / f - r * r)), e.x = n.x + r * a - o * c, n.y + r * c + o * a)) : (e.x = n.x + e.r, n.y)
        }

        function hc(t, n) {
            var e = t.r + n.r - 1e-6,
                r = n.x - t.x,
                i = n.y - t.y;
            return 0 < e && r * r + i * i < e * e
        }

        function dc(t) {
            var n = t._,
                e = t.next._,
                r = n.r + e.r,
                i = (n.x * e.r + e.x * n.r) / r,
                o = (n.y * e.r + e.y * n.r) / r;
            return i * i + o * o
        }

        function pc(t) {
            this._ = t, this.next = null, this.previous = null
        }

        function vc(t) {
            if (!(i = t.length)) return 0;
            var n, e, r, i, o, u, a, c, f, s, l;
            if ((n = t[0]).x = 0, n.y = 0, !(1 < i)) return n.r;
            if (e = t[1], n.x = -e.r, e.x = n.r, e.y = 0, !(2 < i)) return n.r + e.r;
            lc(e, n, r = t[2]), n = new pc(n), e = new pc(e), r = new pc(r), n.next = r.previous = e, e.next = n.previous = r, r.next = e.previous = n;
            t: for (a = 3; a < i; ++a) {
                lc(n._, e._, r = t[a]), r = new pc(r), c = e.next, f = n.previous, s = e._.r, l = n._.r;
                do {
                    if (s <= l) {
                        if (hc(c._, r._)) {
                            e = c, (n.next = e).previous = n, --a;
                            continue t
                        }
                        s += c._.r, c = c.next
                    } else {
                        if (hc(f._, r._)) {
                            ((n = f).next = e).previous = n, --a;
                            continue t
                        }
                        l += f._.r, f = f.previous
                    }
                } while (c !== f.next);
                for (r.previous = n, r.next = e, n.next = e.previous = e = r, o = dc(n);
                    (r = r.next) !== e;)(u = dc(r)) < o && (n = r, o = u);
                e = n.next
            }
            for (n = [e._], r = e;
                (r = r.next) !== e;) n.push(r._);
            for (r = rc(n), a = 0; a < i; ++a)(n = t[a]).x -= r.x, n.y -= r.y;
            return r.r
        }
        var gc = function(t) {
            return vc(t), t
        };

        function yc(t) {
            if ("function" != typeof t) throw new Error;
            return t
        }

        function bc() {
            return 0
        }
        var mc = function(t) {
            return function() {
                return t
            }
        };

        function _c(t) {
            return Math.sqrt(t.value)
        }
        var xc = function() {
            var e = null,
                n = 1,
                r = 1,
                i = bc;

            function o(t) {
                return t.x = n / 2, t.y = r / 2, e ? t.eachBefore(wc(e)).eachAfter(Mc(i, .5)).eachBefore(kc(1)) : t.eachBefore(wc(_c)).eachAfter(Mc(bc, 1)).eachAfter(Mc(i, t.r / Math.min(n, r))).eachBefore(kc(Math.min(n, r) / (2 * t.r))), t
            }
            return o.radius = function(t) {
                return arguments.length ? (e = null == (n = t) ? null : yc(n), o) : e;
                var n
            }, o.size = function(t) {
                return arguments.length ? (n = +t[0], r = +t[1], o) : [n, r]
            }, o.padding = function(t) {
                return arguments.length ? (i = "function" == typeof t ? t : mc(+t), o) : i
            }, o
        };

        function wc(n) {
            return function(t) {
                t.children || (t.r = Math.max(0, +n(t) || 0))
            }
        }

        function Mc(u, a) {
            return function(t) {
                if (n = t.children) {
                    var n, e, r, i = n.length,
                        o = u(t) * a || 0;
                    if (o)
                        for (e = 0; e < i; ++e) n[e].r += o;
                    if (r = vc(n), o)
                        for (e = 0; e < i; ++e) n[e].r -= o;
                    t.r = r + o
                }
            }
        }

        function kc(e) {
            return function(t) {
                var n = t.parent;
                t.r *= e, n && (t.x = n.x + e * t.x, t.y = n.y + e * t.y)
            }
        }
        var Ec = function(t) {
                t.x0 = Math.round(t.x0), t.y0 = Math.round(t.y0), t.x1 = Math.round(t.x1), t.y1 = Math.round(t.y1)
            },
            Tc = function(t, n, e, r, i) {
                for (var o, u = t.children, a = -1, c = u.length, f = t.value && (r - n) / t.value; ++a < c;)(o = u[a]).y0 = e, o.y1 = i, o.x0 = n, o.x1 = n += o.value * f
            },
            Ac = function() {
                var e = 1,
                    r = 1,
                    a = 0,
                    i = !1;

                function n(t) {
                    var o, u, n = t.height + 1;
                    return t.x0 = t.y0 = a, t.x1 = e, t.y1 = r / n, t.eachBefore((o = r, u = n, function(t) {
                        t.children && Tc(t, t.x0, o * (t.depth + 1) / u, t.x1, o * (t.depth + 2) / u);
                        var n = t.x0,
                            e = t.y0,
                            r = t.x1 - a,
                            i = t.y1 - a;
                        r < n && (n = r = (n + r) / 2), i < e && (e = i = (e + i) / 2), t.x0 = n, t.y0 = e, t.x1 = r, t.y1 = i
                    })), i && t.eachBefore(Ec), t
                }
                return n.round = function(t) {
                    return arguments.length ? (i = !!t, n) : i
                }, n.size = function(t) {
                    return arguments.length ? (e = +t[0], r = +t[1], n) : [e, r]
                }, n.padding = function(t) {
                    return arguments.length ? (a = +t, n) : a
                }, n
            },
            Sc = {
                depth: -1
            },
            Cc = {};

        function Nc(t) {
            return t.id
        }

        function Oc(t) {
            return t.parentId
        }
        var Pc = function() {
            var l = Nc,
                h = Oc;

            function n(t) {
                var n, e, r, i, o, u, a, c = t.length,
                    f = new Array(c),
                    s = {};
                for (e = 0; e < c; ++e) n = t[e], o = f[e] = new nc(n), null != (u = l(n, e, t)) && (u += "") && (s[a = "$" + (o.id = u)] = a in s ? Cc : o);
                for (e = 0; e < c; ++e)
                    if (o = f[e], null != (u = h(t[e], e, t)) && (u += "")) {
                        if (!(i = s["$" + u])) throw new Error("missing: " + u);
                        if (i === Cc) throw new Error("ambiguous: " + u);
                        i.children ? i.children.push(o) : i.children = [o], o.parent = i
                    } else {
                        if (r) throw new Error("multiple roots");
                        r = o
                    }
                if (!r) throw new Error("no root");
                if (r.parent = Sc, r.eachBefore(function(t) {
                        t.depth = t.parent.depth + 1, --c
                    }).eachBefore(tc), r.parent = null, 0 < c) throw new Error("cycle");
                return r
            }
            return n.id = function(t) {
                return arguments.length ? (l = yc(t), n) : l
            }, n.parentId = function(t) {
                return arguments.length ? (h = yc(t), n) : h
            }, n
        };

        function Rc(t, n) {
            return t.parent === n.parent ? 1 : 2
        }

        function Ic(t) {
            var n = t.children;
            return n ? n[0] : t.t
        }

        function zc(t) {
            var n = t.children;
            return n ? n[n.length - 1] : t.t
        }

        function jc(t, n) {
            this._ = t, this.parent = null, this.children = null, this.A = null, (this.a = this).z = 0, this.m = 0, this.c = 0, this.s = 0, this.t = null, this.i = n
        }
        jc.prototype = Object.create(nc.prototype);
        var Dc = function() {
                var m = Rc,
                    f = 1,
                    s = 1,
                    l = null;

                function n(t) {
                    var n = function(t) {
                        for (var n, e, r, i, o, u = new jc(t, 0), a = [u]; n = a.pop();)
                            if (r = n._.children)
                                for (n.children = new Array(o = r.length), i = o - 1; 0 <= i; --i) a.push(e = n.children[i] = new jc(r[i], i)), e.parent = n;
                        return (u.parent = new jc(null, 0)).children = [u], u
                    }(t);
                    if (n.eachAfter(h), n.parent.m = -n.z, n.eachBefore(d), l) t.eachBefore(p);
                    else {
                        var e = t,
                            r = t,
                            i = t;
                        t.eachBefore(function(t) {
                            t.x < e.x && (e = t), t.x > r.x && (r = t), t.depth > i.depth && (i = t)
                        });
                        var o = e === r ? 1 : m(e, r) / 2,
                            u = o - e.x,
                            a = f / (r.x + o + u),
                            c = s / (i.depth || 1);
                        t.eachBefore(function(t) {
                            t.x = (t.x + u) * a, t.y = t.depth * c
                        })
                    }
                    return t
                }

                function h(t) {
                    var n = t.children,
                        e = t.parent.children,
                        r = t.i ? e[t.i - 1] : null;
                    if (n) {
                        ! function(t) {
                            for (var n, e = 0, r = 0, i = t.children, o = i.length; 0 <= --o;)(n = i[o]).z += e, n.m += e, e += n.s + (r += n.c)
                        }(t);
                        var i = (n[0].z + n[n.length - 1].z) / 2;
                        r ? (t.z = r.z + m(t._, r._), t.m = t.z - i) : t.z = i
                    } else r && (t.z = r.z + m(t._, r._));
                    t.parent.A = function(t, n, e) {
                        if (n) {
                            for (var r, i = t, o = t, u = n, a = i.parent.children[0], c = i.m, f = o.m, s = u.m, l = a.m; u = zc(u), i = Ic(i), u && i;) a = Ic(a), (o = zc(o)).a = t, 0 < (r = u.z + s - i.z - c + m(u._, i._)) && (y = t, b = e, h = (g = u).a.parent === y.parent ? g.a : b, void 0, v = (p = r) / ((d = t).i - h.i), d.c -= v, d.s += p, h.c += v, d.z += p, d.m += p, c += r, f += r), s += u.m, c += i.m, l += a.m, f += o.m;
                            u && !zc(o) && (o.t = u, o.m += s - f), i && !Ic(a) && (a.t = i, a.m += c - l, e = t)
                        }
                        var h, d, p, v;
                        var g, y, b;
                        return e
                    }(t, r, t.parent.A || e[0])
                }

                function d(t) {
                    t._.x = t.z + t.parent.m, t.m += t.parent.m
                }

                function p(t) {
                    t.x *= f, t.y = t.depth * s
                }
                return n.separation = function(t) {
                    return arguments.length ? (m = t, n) : m
                }, n.size = function(t) {
                    return arguments.length ? (l = !1, f = +t[0], s = +t[1], n) : l ? null : [f, s]
                }, n.nodeSize = function(t) {
                    return arguments.length ? (l = !0, f = +t[0], s = +t[1], n) : l ? [f, s] : null
                }, n
            },
            Lc = function(t, n, e, r, i) {
                for (var o, u = t.children, a = -1, c = u.length, f = t.value && (i - e) / t.value; ++a < c;)(o = u[a]).x0 = n, o.x1 = r, o.y0 = e, o.y1 = e += o.value * f
            },
            Bc = (1 + Math.sqrt(5)) / 2;

        function qc(t, n, e, r, i, o) {
            for (var u, a, c, f, s, l, h, d, p, v, g, y = [], b = n.children, m = 0, _ = 0, x = b.length, w = n.value; m < x;) {
                for (c = i - e, f = o - r; !(s = b[_++].value) && _ < x;);
                for (l = h = s, g = s * s * (v = Math.max(f / c, c / f) / (w * t)), p = Math.max(h / g, g / l); _ < x; ++_) {
                    if (s += a = b[_].value, a < l && (l = a), h < a && (h = a), g = s * s * v, p < (d = Math.max(h / g, g / l))) {
                        s -= a;
                        break
                    }
                    p = d
                }
                y.push(u = {
                    value: s,
                    dice: c < f,
                    children: b.slice(m, _)
                }), u.dice ? Tc(u, e, r, i, w ? r += f * s / w : o) : Lc(u, e, r, w ? e += c * s / w : i, o), w -= s, m = _
            }
            return y
        }
        var Fc = function n(o) {
                function t(t, n, e, r, i) {
                    qc(o, t, n, e, r, i)
                }
                return t.ratio = function(t) {
                    return n(1 < (t = +t) ? t : 1)
                }, t
            }(Bc),
            Uc = function() {
                var u = Fc,
                    n = !1,
                    e = 1,
                    r = 1,
                    a = [0],
                    c = bc,
                    f = bc,
                    s = bc,
                    l = bc,
                    h = bc;

                function i(t) {
                    return t.x0 = t.y0 = 0, t.x1 = e, t.y1 = r, t.eachBefore(o), a = [0], n && t.eachBefore(Ec), t
                }

                function o(t) {
                    var n = a[t.depth],
                        e = t.x0 + n,
                        r = t.y0 + n,
                        i = t.x1 - n,
                        o = t.y1 - n;
                    i < e && (e = i = (e + i) / 2), o < r && (r = o = (r + o) / 2), t.x0 = e, t.y0 = r, t.x1 = i, t.y1 = o, t.children && (n = a[t.depth + 1] = c(t) / 2, e += h(t) - n, r += f(t) - n, (i -= s(t) - n) < e && (e = i = (e + i) / 2), (o -= l(t) - n) < r && (r = o = (r + o) / 2), u(t, e, r, i, o))
                }
                return i.round = function(t) {
                    return arguments.length ? (n = !!t, i) : n
                }, i.size = function(t) {
                    return arguments.length ? (e = +t[0], r = +t[1], i) : [e, r]
                }, i.tile = function(t) {
                    return arguments.length ? (u = yc(t), i) : u
                }, i.padding = function(t) {
                    return arguments.length ? i.paddingInner(t).paddingOuter(t) : i.paddingInner()
                }, i.paddingInner = function(t) {
                    return arguments.length ? (c = "function" == typeof t ? t : mc(+t), i) : c
                }, i.paddingOuter = function(t) {
                    return arguments.length ? i.paddingTop(t).paddingRight(t).paddingBottom(t).paddingLeft(t) : i.paddingTop()
                }, i.paddingTop = function(t) {
                    return arguments.length ? (f = "function" == typeof t ? t : mc(+t), i) : f
                }, i.paddingRight = function(t) {
                    return arguments.length ? (s = "function" == typeof t ? t : mc(+t), i) : s
                }, i.paddingBottom = function(t) {
                    return arguments.length ? (l = "function" == typeof t ? t : mc(+t), i) : l
                }, i.paddingLeft = function(t) {
                    return arguments.length ? (h = "function" == typeof t ? t : mc(+t), i) : h
                }, i
            },
            Hc = function(t, n, e, r, i) {
                var o, u, b = t.children,
                    a = b.length,
                    m = new Array(a + 1);
                for (m[0] = u = o = 0; o < a; ++o) m[o + 1] = u += b[o].value;
                ! function t(n, e, r, i, o, u, a) {
                    if (e - 1 <= n) {
                        var c = b[n];
                        return c.x0 = i, c.y0 = o, c.x1 = u, void(c.y1 = a)
                    }
                    var f = m[n],
                        s = r / 2 + f,
                        l = n + 1,
                        h = e - 1;
                    for (; l < h;) {
                        var d = l + h >>> 1;
                        m[d] < s ? l = d + 1 : h = d
                    }
                    s - m[l - 1] < m[l] - s && n + 1 < l && --l;
                    var p = m[l] - f,
                        v = r - p;
                    if (a - o < u - i) {
                        var g = (i * v + u * p) / r;
                        t(n, l, p, i, o, g, a), t(l, e, v, g, o, u, a)
                    } else {
                        var y = (o * v + a * p) / r;
                        t(n, l, p, i, o, u, y), t(l, e, v, i, y, u, a)
                    }
                }(0, a, t.value, n, e, r, i)
            },
            Yc = function(t, n, e, r, i) {
                (1 & t.depth ? Lc : Tc)(t, n, e, r, i)
            },
            Vc = function n(d) {
                function t(t, n, e, r, i) {
                    if ((o = t._squarify) && o.ratio === d)
                        for (var o, u, a, c, f, s = -1, l = o.length, h = t.value; ++s < l;) {
                            for (a = (u = o[s]).children, c = u.value = 0, f = a.length; c < f; ++c) u.value += a[c].value;
                            u.dice ? Tc(u, n, e, r, e += (i - e) * u.value / h) : Lc(u, n, e, n += (r - n) * u.value / h, i), h -= u.value
                        } else t._squarify = o = qc(d, t, n, e, r, i), o.ratio = d
                }
                return t.ratio = function(t) {
                    return n(1 < (t = +t) ? t : 1)
                }, t
            }(Bc),
            Wc = function(t) {
                for (var n, e = -1, r = t.length, i = t[r - 1], o = 0; ++e < r;) n = i, i = t[e], o += n[1] * i[0] - n[0] * i[1];
                return o / 2
            },
            Gc = function(t) {
                for (var n, e, r = -1, i = t.length, o = 0, u = 0, a = t[i - 1], c = 0; ++r < i;) n = a, a = t[r], c += e = n[0] * a[1] - a[0] * n[1], o += (n[0] + a[0]) * e, u += (n[1] + a[1]) * e;
                return [o / (c *= 3), u / c]
            };

        function Xc(t, n) {
            return t[0] - n[0] || t[1] - n[1]
        }

        function $c(t) {
            for (var n, e, r, i = t.length, o = [0, 1], u = 2, a = 2; a < i; ++a) {
                for (; 1 < u && (n = t[o[u - 2]], e = t[o[u - 1]], r = t[a], (e[0] - n[0]) * (r[1] - n[1]) - (e[1] - n[1]) * (r[0] - n[0]) <= 0);) --u;
                o[u++] = a
            }
            return o.slice(0, u)
        }
        var Zc = function(t) {
                if ((e = t.length) < 3) return null;
                var n, e, r = new Array(e),
                    i = new Array(e);
                for (n = 0; n < e; ++n) r[n] = [+t[n][0], +t[n][1], n];
                for (r.sort(Xc), n = 0; n < e; ++n) i[n] = [r[n][0], -r[n][1]];
                var o = $c(r),
                    u = $c(i),
                    a = u[0] === o[0],
                    c = u[u.length - 1] === o[o.length - 1],
                    f = [];
                for (n = o.length - 1; 0 <= n; --n) f.push(t[r[o[n]][2]]);
                for (n = +a; n < u.length - c; ++n) f.push(t[r[u[n]][2]]);
                return f
            },
            Jc = function(t, n) {
                for (var e, r, i = t.length, o = t[i - 1], u = n[0], a = n[1], c = o[0], f = o[1], s = !1, l = 0; l < i; ++l) e = (o = t[l])[0], a < (r = o[1]) != a < f && u < (c - e) * (a - r) / (f - r) + e && (s = !s), c = e, f = r;
                return s
            },
            Kc = function(t) {
                for (var n, e, r = -1, i = t.length, o = t[i - 1], u = o[0], a = o[1], c = 0; ++r < i;) n = u, e = a, n -= u = (o = t[r])[0], e -= a = o[1], c += Math.sqrt(n * n + e * e);
                return c
            },
            Qc = function() {
                return Math.random()
            },
            tf = function t(e) {
                function n(t, n) {
                    return t = null == t ? 0 : +t, n = null == n ? 1 : +n, 1 === arguments.length ? (n = t, t = 0) : n -= t,
                        function() {
                            return e() * n + t
                        }
                }
                return n.source = t, n
            }(Qc),
            nf = function t(o) {
                function n(n, e) {
                    var r, i;
                    return n = null == n ? 0 : +n, e = null == e ? 1 : +e,
                        function() {
                            var t;
                            if (null != r) t = r, r = null;
                            else
                                for (; r = 2 * o() - 1, t = 2 * o() - 1, !(i = r * r + t * t) || 1 < i;);
                            return n + e * t * Math.sqrt(-2 * Math.log(i) / i)
                        }
                }
                return n.source = t, n
            }(Qc),
            ef = function t(n) {
                function e() {
                    var t = nf.source(n).apply(this, arguments);
                    return function() {
                        return Math.exp(t())
                    }
                }
                return e.source = t, e
            }(Qc),
            rf = function t(r) {
                function n(e) {
                    return function() {
                        for (var t = 0, n = 0; n < e; ++n) t += r();
                        return t
                    }
                }
                return n.source = t, n
            }(Qc),
            of = function t(e) {
                function n(t) {
                    var n = rf.source(e)(t);
                    return function() {
                        return n() / t
                    }
                }
                return n.source = t, n
            }(Qc),
            uf = function t(n) {
                function e(t) {
                    return function() {
                        return -Math.log(1 - n()) / t
                    }
                }
                return e.source = t, e
            }(Qc),
            af = Array.prototype,
            cf = af.map,
            ff = af.slice,
            sf = {
                name: "implicit"
            };

        function lf(r) {
            var o = Object(yn.map)(),
                u = [],
                i = sf;

            function a(t) {
                var n = t + "",
                    e = o.get(n);
                if (!e) {
                    if (i !== sf) return i;
                    o.set(n, e = u.push(t))
                }
                return r[(e - 1) % r.length]
            }
            return r = null == r ? [] : ff.call(r), a.domain = function(t) {
                if (!arguments.length) return u.slice();
                u = [], o = Object(yn.map)();
                for (var n, e, r = -1, i = t.length; ++r < i;) o.has(e = (n = t[r]) + "") || o.set(e, u.push(n));
                return a
            }, a.range = function(t) {
                return arguments.length ? (r = ff.call(t), a) : r.slice()
            }, a.unknown = function(t) {
                return arguments.length ? (i = t, a) : i
            }, a.copy = function() {
                return lf().domain(u).range(r).unknown(i)
            }, a
        }

        function hf() {
            var o, u, t = lf().unknown(void 0),
                a = t.domain,
                c = t.range,
                f = [0, 1],
                s = !1,
                l = 0,
                h = 0,
                d = .5;

            function n() {
                var t = a().length,
                    n = f[1] < f[0],
                    e = f[n - 0],
                    r = f[1 - n];
                o = (r - e) / Math.max(1, t - l + 2 * h), s && (o = Math.floor(o)), e += (r - e - o * (t - l)) * d, u = o * (1 - l), s && (e = Math.round(e), u = Math.round(u));
                var i = E(t).map(function(t) {
                    return e + o * t
                });
                return c(n ? i.reverse() : i)
            }
            return delete t.unknown, t.domain = function(t) {
                return arguments.length ? (a(t), n()) : a()
            }, t.range = function(t) {
                return arguments.length ? (f = [+t[0], +t[1]], n()) : f.slice()
            }, t.rangeRound = function(t) {
                return f = [+t[0], +t[1]], s = !0, n()
            }, t.bandwidth = function() {
                return u
            }, t.step = function() {
                return o
            }, t.round = function(t) {
                return arguments.length ? (s = !!t, n()) : s
            }, t.padding = function(t) {
                return arguments.length ? (l = h = Math.max(0, Math.min(1, t)), n()) : l
            }, t.paddingInner = function(t) {
                return arguments.length ? (l = Math.max(0, Math.min(1, t)), n()) : l
            }, t.paddingOuter = function(t) {
                return arguments.length ? (h = Math.max(0, Math.min(1, t)), n()) : h
            }, t.align = function(t) {
                return arguments.length ? (d = Math.max(0, Math.min(1, t)), n()) : d
            }, t.copy = function() {
                return hf().domain(a()).range(f).round(s).paddingInner(l).paddingOuter(h).align(d)
            }, n()
        }

        function df() {
            return function t(n) {
                var e = n.copy;
                return n.padding = n.paddingOuter, delete n.paddingInner, delete n.paddingOuter, n.copy = function() {
                    return t(e())
                }, n
            }(hf().paddingInner(1))
        }
        var pf = function(t) {
                return function() {
                    return t
                }
            },
            vf = function(t) {
                return +t
            },
            gf = [0, 1];

        function yf(n, e) {
            return (e -= n = +n) ? function(t) {
                return (t - n) / e
            } : pf(e)
        }

        function bf(t, n, e, r) {
            var i = t[0],
                o = t[1],
                u = n[0],
                a = n[1];
            return u = o < i ? (i = e(o, i), r(a, u)) : (i = e(i, o), r(u, a)),
                function(t) {
                    return u(i(t))
                }
        }

        function mf(e, t, n, r) {
            var i = Math.min(e.length, t.length) - 1,
                o = new Array(i),
                u = new Array(i),
                a = -1;
            for (e[i] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++a < i;) o[a] = n(e[a], e[a + 1]), u[a] = r(t[a], t[a + 1]);
            return function(t) {
                var n = v(e, t, 1, i) - 1;
                return u[n](o[n](t))
            }
        }

        function _f(t, n) {
            return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())
        }

        function xf(n, e) {
            var r, o, u, a = gf,
                c = gf,
                f = _t.a,
                s = !1;

            function i() {
                return r = 2 < Math.min(a.length, c.length) ? mf : bf, o = u = null, t
            }

            function t(t) {
                return (o || (o = r(a, c, s ? (i = n, function(n, e) {
                    var r = i(n = +n, e = +e);
                    return function(t) {
                        return t <= n ? 0 : e <= t ? 1 : r(t)
                    }
                }) : n, f)))(+t);
                var i
            }
            return t.invert = function(t) {
                return (u || (u = r(c, a, yf, s ? (i = e, function(n, e) {
                    var r = i(n = +n, e = +e);
                    return function(t) {
                        return t <= 0 ? n : 1 <= t ? e : r(t)
                    }
                }) : e)))(+t);
                var i
            }, t.domain = function(t) {
                return arguments.length ? (a = cf.call(t, vf), i()) : a.slice()
            }, t.range = function(t) {
                return arguments.length ? (c = ff.call(t), i()) : c.slice()
            }, t.rangeRound = function(t) {
                return c = ff.call(t), f = _t.r, i()
            }, t.clamp = function(t) {
                return arguments.length ? (s = !!t, i()) : s
            }, t.interpolate = function(t) {
                return arguments.length ? (f = t, i()) : f
            }, i()
        }
        var wf = function(t, n, e) {
            var r, i = t[0],
                o = t[t.length - 1],
                u = S(i, o, null == n ? 10 : n);
            switch ((e = Be(null == e ? ",f" : e)).type) {
                case "s":
                    var a = Math.max(Math.abs(i), Math.abs(o));
                    return null != e.precision || isNaN(r = Ke(u, a)) || (e.precision = r), Ye(e, a);
                case "":
                case "e":
                case "g":
                case "p":
                case "r":
                    null != e.precision || isNaN(r = Qe(u, Math.max(Math.abs(i), Math.abs(o)))) || (e.precision = r - ("e" === e.type));
                    break;
                case "f":
                case "%":
                    null != e.precision || isNaN(r = Je(u)) || (e.precision = r - 2 * ("%" === e.type))
            }
            return He(e)
        };

        function Mf(a) {
            var c = a.domain;
            return a.ticks = function(t) {
                var n = c();
                return T(n[0], n[n.length - 1], null == t ? 10 : t)
            }, a.tickFormat = function(t, n) {
                return wf(c(), t, n)
            }, a.nice = function(t) {
                null == t && (t = 10);
                var n, e = c(),
                    r = 0,
                    i = e.length - 1,
                    o = e[r],
                    u = e[i];
                return u < o && (n = o, o = u, u = n, n = r, r = i, i = n), 0 < (n = A(o, u, t)) ? n = A(o = Math.floor(o / n) * n, u = Math.ceil(u / n) * n, t) : n < 0 && (n = A(o = Math.ceil(o * n) / n, u = Math.floor(u * n) / n, t)), 0 < n ? (e[r] = Math.floor(o / n) * n, e[i] = Math.ceil(u / n) * n, c(e)) : n < 0 && (e[r] = Math.ceil(o * n) / n, e[i] = Math.floor(u * n) / n, c(e)), a
            }, a
        }

        function kf() {
            var t = xf(yf, _t.m);
            return t.copy = function() {
                return _f(t, kf())
            }, Mf(t)
        }

        function Ef() {
            var n = [0, 1];

            function e(t) {
                return +t
            }
            return (e.invert = e).domain = e.range = function(t) {
                return arguments.length ? (n = cf.call(t, vf), e) : n.slice()
            }, e.copy = function() {
                return Ef().domain(n)
            }, Mf(e)
        }
        var Tf = function(t, n) {
            var e, r = 0,
                i = (t = t.slice()).length - 1,
                o = t[r],
                u = t[i];
            return u < o && (e = r, r = i, i = e, e = o, o = u, u = e), t[r] = n.floor(o), t[i] = n.ceil(u), t
        };

        function Af(n, e) {
            return (e = Math.log(e / n)) ? function(t) {
                return Math.log(t / n) / e
            } : pf(e)
        }

        function Sf(n, e) {
            return n < 0 ? function(t) {
                return -Math.pow(-e, t) * Math.pow(-n, 1 - t)
            } : function(t) {
                return Math.pow(e, t) * Math.pow(n, 1 - t)
            }
        }

        function Cf(t) {
            return isFinite(t) ? +("1e" + t) : t < 0 ? 0 : t
        }

        function Nf(n) {
            return 10 === n ? Cf : n === Math.E ? Math.exp : function(t) {
                return Math.pow(n, t)
            }
        }

        function Of(n) {
            return n === Math.E ? Math.log : 10 === n && Math.log10 || 2 === n && Math.log2 || (n = Math.log(n), function(t) {
                return Math.log(t) / n
            })
        }

        function Pf(n) {
            return function(t) {
                return -n(-t)
            }
        }

        function Rf() {
            var n = xf(Af, Sf).domain([1, 10]),
                h = n.domain,
                d = 10,
                p = Of(10),
                v = Nf(10);

            function e() {
                return p = Of(d), v = Nf(d), h()[0] < 0 && (p = Pf(p), v = Pf(v)), n
            }
            return n.base = function(t) {
                return arguments.length ? (d = +t, e()) : d
            }, n.domain = function(t) {
                return arguments.length ? (h(t), e()) : h()
            }, n.ticks = function(t) {
                var n, e = h(),
                    r = e[0],
                    i = e[e.length - 1];
                (n = i < r) && (c = r, r = i, i = c);
                var o, u, a, c = p(r),
                    f = p(i),
                    s = null == t ? 10 : +t,
                    l = [];
                if (!(d % 1) && f - c < s) {
                    if (c = Math.round(c) - 1, f = Math.round(f) + 1, 0 < r) {
                        for (; c < f; ++c)
                            for (u = 1, o = v(c); u < d; ++u)
                                if (!((a = o * u) < r)) {
                                    if (i < a) break;
                                    l.push(a)
                                }
                    } else
                        for (; c < f; ++c)
                            for (u = d - 1, o = v(c); 1 <= u; --u)
                                if (!((a = o * u) < r)) {
                                    if (i < a) break;
                                    l.push(a)
                                }
                } else l = T(c, f, Math.min(f - c, s)).map(v);
                return n ? l.reverse() : l
            }, n.tickFormat = function(t, e) {
                if (null == e && (e = 10 === d ? ".0e" : ","), "function" != typeof e && (e = He(e)), t === 1 / 0) return e;
                null == t && (t = 10);
                var r = Math.max(1, d * t / n.ticks().length);
                return function(t) {
                    var n = t / v(Math.round(p(t)));
                    return n * d < d - .5 && (n *= d), n <= r ? e(t) : ""
                }
            }, n.nice = function() {
                return h(Tf(h(), {
                    floor: function(t) {
                        return v(Math.floor(p(t)))
                    },
                    ceil: function(t) {
                        return v(Math.ceil(p(t)))
                    }
                }))
            }, n.copy = function() {
                return _f(n, Rf().base(d))
            }, n
        }

        function If(t, n) {
            return t < 0 ? -Math.pow(-t, n) : Math.pow(t, n)
        }

        function zf() {
            var r = 1,
                t = xf(function(n, e) {
                    return (e = If(e, r) - (n = If(n, r))) ? function(t) {
                        return (If(t, r) - n) / e
                    } : pf(e)
                }, function(n, e) {
                    return e = If(e, r) - (n = If(n, r)),
                        function(t) {
                            return If(n + e * t, 1 / r)
                        }
                }),
                n = t.domain;
            return t.exponent = function(t) {
                return arguments.length ? (r = +t, n(n())) : r
            }, t.copy = function() {
                return _f(t, zf().exponent(r))
            }, Mf(t)
        }

        function jf() {
            return zf().exponent(.5)
        }

        function Df() {
            var i = [],
                e = [],
                r = [];

            function o() {
                var t = 0,
                    n = Math.max(1, e.length);
                for (r = new Array(n - 1); ++t < n;) r[t - 1] = O(i, t / n);
                return u
            }

            function u(t) {
                if (!isNaN(t = +t)) return e[v(r, t)]
            }
            return u.invertExtent = function(t) {
                var n = e.indexOf(t);
                return n < 0 ? [NaN, NaN] : [0 < n ? r[n - 1] : i[0], n < r.length ? r[n] : i[i.length - 1]]
            }, u.domain = function(t) {
                if (!arguments.length) return i.slice();
                i = [];
                for (var n, e = 0, r = t.length; e < r; ++e) null == (n = t[e]) || isNaN(n = +n) || i.push(n);
                return i.sort(a), o()
            }, u.range = function(t) {
                return arguments.length ? (e = ff.call(t), o()) : e.slice()
            }, u.quantiles = function() {
                return r.slice()
            }, u.copy = function() {
                return Df().domain(i).range(e)
            }, u
        }

        function Lf() {
            var e = 0,
                r = 1,
                i = 1,
                o = [.5],
                u = [0, 1];

            function n(t) {
                if (t <= t) return u[v(o, t, 0, i)]
            }

            function a() {
                var t = -1;
                for (o = new Array(i); ++t < i;) o[t] = ((t + 1) * r - (t - i) * e) / (i + 1);
                return n
            }
            return n.domain = function(t) {
                return arguments.length ? (e = +t[0], r = +t[1], a()) : [e, r]
            }, n.range = function(t) {
                return arguments.length ? (i = (u = ff.call(t)).length - 1, a()) : u.slice()
            }, n.invertExtent = function(t) {
                var n = u.indexOf(t);
                return n < 0 ? [NaN, NaN] : n < 1 ? [e, o[0]] : i <= n ? [o[i - 1], r] : [o[n - 1], o[n]]
            }, n.copy = function() {
                return Lf().domain([e, r]).range(u)
            }, Mf(n)
        }

        function Bf() {
            var e = [.5],
                r = [0, 1],
                n = 1;

            function i(t) {
                if (t <= t) return r[v(e, t, 0, n)]
            }
            return i.domain = function(t) {
                return arguments.length ? (e = ff.call(t), n = Math.min(e.length, r.length - 1), i) : e.slice()
            }, i.range = function(t) {
                return arguments.length ? (r = ff.call(t), n = Math.min(e.length, r.length - 1), i) : r.slice()
            }, i.invertExtent = function(t) {
                var n = r.indexOf(t);
                return [e[n - 1], e[n]]
            }, i.copy = function() {
                return Bf().domain(e).range(r)
            }, i
        }
        var qf = new Date,
            Ff = new Date;

        function Uf(o, u, e, r) {
            function a(t) {
                return o(t = new Date(+t)), t
            }
            return (a.floor = a).ceil = function(t) {
                return o(t = new Date(t - 1)), u(t, 1), o(t), t
            }, a.round = function(t) {
                var n = a(t),
                    e = a.ceil(t);
                return t - n < e - t ? n : e
            }, a.offset = function(t, n) {
                return u(t = new Date(+t), null == n ? 1 : Math.floor(n)), t
            }, a.range = function(t, n, e) {
                var r, i = [];
                if (t = a.ceil(t), e = null == e ? 1 : Math.floor(e), !(t < n && 0 < e)) return i;
                for (; i.push(r = new Date(+t)), u(t, e), o(t), r < t && t < n;);
                return i
            }, a.filter = function(e) {
                return Uf(function(t) {
                    if (t <= t)
                        for (; o(t), !e(t);) t.setTime(t - 1)
                }, function(t, n) {
                    if (t <= t)
                        if (n < 0)
                            for (; ++n <= 0;)
                                for (; u(t, -1), !e(t););
                        else
                            for (; 0 <= --n;)
                                for (; u(t, 1), !e(t););
                })
            }, e && (a.count = function(t, n) {
                return qf.setTime(+t), Ff.setTime(+n), o(qf), o(Ff), Math.floor(e(qf, Ff))
            }, a.every = function(n) {
                return n = Math.floor(n), isFinite(n) && 0 < n ? 1 < n ? a.filter(r ? function(t) {
                    return r(t) % n == 0
                } : function(t) {
                    return a.count(0, t) % n == 0
                }) : a : null
            }), a
        }
        var Hf = Uf(function() {}, function(t, n) {
            t.setTime(+t + n)
        }, function(t, n) {
            return n - t
        });
        Hf.every = function(e) {
            return e = Math.floor(e), isFinite(e) && 0 < e ? 1 < e ? Uf(function(t) {
                t.setTime(Math.floor(t / e) * e)
            }, function(t, n) {
                t.setTime(+t + n * e)
            }, function(t, n) {
                return (n - t) / e
            }) : Hf : null
        };
        var Yf = Hf,
            Vf = Hf.range,
            Wf = 6e4,
            Gf = 36e5,
            Xf = Uf(function(t) {
                t.setTime(1e3 * Math.floor(t / 1e3))
            }, function(t, n) {
                t.setTime(+t + 1e3 * n)
            }, function(t, n) {
                return (n - t) / 1e3
            }, function(t) {
                return t.getUTCSeconds()
            }),
            $f = Xf,
            Zf = Xf.range,
            Jf = Uf(function(t) {
                t.setTime(Math.floor(t / Wf) * Wf)
            }, function(t, n) {
                t.setTime(+t + n * Wf)
            }, function(t, n) {
                return (n - t) / Wf
            }, function(t) {
                return t.getMinutes()
            }),
            Kf = Jf,
            Qf = Jf.range,
            ts = Uf(function(t) {
                var n = t.getTimezoneOffset() * Wf % Gf;
                n < 0 && (n += Gf), t.setTime(Math.floor((+t - n) / Gf) * Gf + n)
            }, function(t, n) {
                t.setTime(+t + n * Gf)
            }, function(t, n) {
                return (n - t) / Gf
            }, function(t) {
                return t.getHours()
            }),
            ns = ts,
            es = ts.range,
            rs = Uf(function(t) {
                t.setHours(0, 0, 0, 0)
            }, function(t, n) {
                t.setDate(t.getDate() + n)
            }, function(t, n) {
                return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Wf) / 864e5
            }, function(t) {
                return t.getDate() - 1
            }),
            is = rs,
            os = rs.range;

        function us(n) {
            return Uf(function(t) {
                t.setDate(t.getDate() - (t.getDay() + 7 - n) % 7), t.setHours(0, 0, 0, 0)
            }, function(t, n) {
                t.setDate(t.getDate() + 7 * n)
            }, function(t, n) {
                return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Wf) / 6048e5
            })
        }
        var as = us(0),
            cs = us(1),
            fs = us(2),
            ss = us(3),
            ls = us(4),
            hs = us(5),
            ds = us(6),
            ps = as.range,
            vs = cs.range,
            gs = fs.range,
            ys = ss.range,
            bs = ls.range,
            ms = hs.range,
            _s = ds.range,
            xs = Uf(function(t) {
                t.setDate(1), t.setHours(0, 0, 0, 0)
            }, function(t, n) {
                t.setMonth(t.getMonth() + n)
            }, function(t, n) {
                return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear())
            }, function(t) {
                return t.getMonth()
            }),
            ws = xs,
            Ms = xs.range,
            ks = Uf(function(t) {
                t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
            }, function(t, n) {
                t.setFullYear(t.getFullYear() + n)
            }, function(t, n) {
                return n.getFullYear() - t.getFullYear()
            }, function(t) {
                return t.getFullYear()
            });
        ks.every = function(e) {
            return isFinite(e = Math.floor(e)) && 0 < e ? Uf(function(t) {
                t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0)
            }, function(t, n) {
                t.setFullYear(t.getFullYear() + n * e)
            }) : null
        };
        var Es = ks,
            Ts = ks.range,
            As = Uf(function(t) {
                t.setUTCSeconds(0, 0)
            }, function(t, n) {
                t.setTime(+t + n * Wf)
            }, function(t, n) {
                return (n - t) / Wf
            }, function(t) {
                return t.getUTCMinutes()
            }),
            Ss = As,
            Cs = As.range,
            Ns = Uf(function(t) {
                t.setUTCMinutes(0, 0, 0)
            }, function(t, n) {
                t.setTime(+t + n * Gf)
            }, function(t, n) {
                return (n - t) / Gf
            }, function(t) {
                return t.getUTCHours()
            }),
            Os = Ns,
            Ps = Ns.range,
            Rs = Uf(function(t) {
                t.setUTCHours(0, 0, 0, 0)
            }, function(t, n) {
                t.setUTCDate(t.getUTCDate() + n)
            }, function(t, n) {
                return (n - t) / 864e5
            }, function(t) {
                return t.getUTCDate() - 1
            }),
            Is = Rs,
            zs = Rs.range;

        function js(n) {
            return Uf(function(t) {
                t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - n) % 7), t.setUTCHours(0, 0, 0, 0)
            }, function(t, n) {
                t.setUTCDate(t.getUTCDate() + 7 * n)
            }, function(t, n) {
                return (n - t) / 6048e5
            })
        }
        var Ds = js(0),
            Ls = js(1),
            Bs = js(2),
            qs = js(3),
            Fs = js(4),
            Us = js(5),
            Hs = js(6),
            Ys = Ds.range,
            Vs = Ls.range,
            Ws = Bs.range,
            Gs = qs.range,
            Xs = Fs.range,
            $s = Us.range,
            Zs = Hs.range,
            Js = Uf(function(t) {
                t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0)
            }, function(t, n) {
                t.setUTCMonth(t.getUTCMonth() + n)
            }, function(t, n) {
                return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear())
            }, function(t) {
                return t.getUTCMonth()
            }),
            Ks = Js,
            Qs = Js.range,
            tl = Uf(function(t) {
                t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
            }, function(t, n) {
                t.setUTCFullYear(t.getUTCFullYear() + n)
            }, function(t, n) {
                return n.getUTCFullYear() - t.getUTCFullYear()
            }, function(t) {
                return t.getUTCFullYear()
            });
        tl.every = function(e) {
            return isFinite(e = Math.floor(e)) && 0 < e ? Uf(function(t) {
                t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0)
            }, function(t, n) {
                t.setUTCFullYear(t.getUTCFullYear() + n * e)
            }) : null
        };
        var nl = tl,
            el = tl.range;

        function rl(t) {
            if (0 <= t.y && t.y < 100) {
                var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
                return n.setFullYear(t.y), n
            }
            return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
        }

        function il(t) {
            if (0 <= t.y && t.y < 100) {
                var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
                return n.setUTCFullYear(t.y), n
            }
            return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
        }

        function ol(t) {
            return {
                y: t,
                m: 0,
                d: 1,
                H: 0,
                M: 0,
                S: 0,
                L: 0
            }
        }

        function ul(t) {
            var r = t.dateTime,
                i = t.date,
                o = t.time,
                n = t.periods,
                e = t.days,
                u = t.shortDays,
                a = t.months,
                c = t.shortMonths,
                f = bl(n),
                s = ml(n),
                l = bl(e),
                h = ml(e),
                d = bl(u),
                p = ml(u),
                v = bl(a),
                g = ml(a),
                y = bl(c),
                b = ml(c),
                m = {
                    a: function(t) {
                        return u[t.getDay()]
                    },
                    A: function(t) {
                        return e[t.getDay()]
                    },
                    b: function(t) {
                        return c[t.getMonth()]
                    },
                    B: function(t) {
                        return a[t.getMonth()]
                    },
                    c: null,
                    d: Bl,
                    e: Bl,
                    f: Yl,
                    H: ql,
                    I: Fl,
                    j: Ul,
                    L: Hl,
                    m: Vl,
                    M: Wl,
                    p: function(t) {
                        return n[+(12 <= t.getHours())]
                    },
                    Q: _h,
                    s: xh,
                    S: Gl,
                    u: Xl,
                    U: $l,
                    V: Zl,
                    w: Jl,
                    W: Kl,
                    x: null,
                    X: null,
                    y: Ql,
                    Y: th,
                    Z: nh,
                    "%": mh
                },
                _ = {
                    a: function(t) {
                        return u[t.getUTCDay()]
                    },
                    A: function(t) {
                        return e[t.getUTCDay()]
                    },
                    b: function(t) {
                        return c[t.getUTCMonth()]
                    },
                    B: function(t) {
                        return a[t.getUTCMonth()]
                    },
                    c: null,
                    d: eh,
                    e: eh,
                    f: ah,
                    H: rh,
                    I: ih,
                    j: oh,
                    L: uh,
                    m: ch,
                    M: fh,
                    p: function(t) {
                        return n[+(12 <= t.getUTCHours())]
                    },
                    Q: _h,
                    s: xh,
                    S: sh,
                    u: lh,
                    U: hh,
                    V: dh,
                    w: ph,
                    W: vh,
                    x: null,
                    X: null,
                    y: gh,
                    Y: yh,
                    Z: bh,
                    "%": mh
                },
                x = {
                    a: function(t, n, e) {
                        var r = d.exec(n.slice(e));
                        return r ? (t.w = p[r[0].toLowerCase()], e + r[0].length) : -1
                    },
                    A: function(t, n, e) {
                        var r = l.exec(n.slice(e));
                        return r ? (t.w = h[r[0].toLowerCase()], e + r[0].length) : -1
                    },
                    b: function(t, n, e) {
                        var r = y.exec(n.slice(e));
                        return r ? (t.m = b[r[0].toLowerCase()], e + r[0].length) : -1
                    },
                    B: function(t, n, e) {
                        var r = v.exec(n.slice(e));
                        return r ? (t.m = g[r[0].toLowerCase()], e + r[0].length) : -1
                    },
                    c: function(t, n, e) {
                        return k(t, r, n, e)
                    },
                    d: Cl,
                    e: Cl,
                    f: zl,
                    H: Ol,
                    I: Ol,
                    j: Nl,
                    L: Il,
                    m: Sl,
                    M: Pl,
                    p: function(t, n, e) {
                        var r = f.exec(n.slice(e));
                        return r ? (t.p = s[r[0].toLowerCase()], e + r[0].length) : -1
                    },
                    Q: Dl,
                    s: Ll,
                    S: Rl,
                    u: xl,
                    U: wl,
                    V: Ml,
                    w: _l,
                    W: kl,
                    x: function(t, n, e) {
                        return k(t, i, n, e)
                    },
                    X: function(t, n, e) {
                        return k(t, o, n, e)
                    },
                    y: Tl,
                    Y: El,
                    Z: Al,
                    "%": jl
                };

            function w(c, f) {
                return function(t) {
                    var n, e, r, i = [],
                        o = -1,
                        u = 0,
                        a = c.length;
                    for (t instanceof Date || (t = new Date(+t)); ++o < a;) 37 === c.charCodeAt(o) && (i.push(c.slice(u, o)), null != (e = hl[n = c.charAt(++o)]) ? n = c.charAt(++o) : e = "e" === n ? " " : "0", (r = f[n]) && (n = r(t, e)), i.push(n), u = o + 1);
                    return i.push(c.slice(u, o)), i.join("")
                }
            }

            function M(i, o) {
                return function(t) {
                    var n, e, r = ol(1900);
                    if (k(r, i, t += "", 0) != t.length) return null;
                    if ("Q" in r) return new Date(r.Q);
                    if ("p" in r && (r.H = r.H % 12 + 12 * r.p), "V" in r) {
                        if (r.V < 1 || 53 < r.V) return null;
                        "w" in r || (r.w = 1), r.d = "Z" in r ? (n = 4 < (e = (n = il(ol(r.y))).getUTCDay()) || 0 === e ? Ls.ceil(n) : Ls(n), n = Is.offset(n, 7 * (r.V - 1)), r.y = n.getUTCFullYear(), r.m = n.getUTCMonth(), n.getUTCDate() + (r.w + 6) % 7) : (n = 4 < (e = (n = o(ol(r.y))).getDay()) || 0 === e ? cs.ceil(n) : cs(n), n = is.offset(n, 7 * (r.V - 1)), r.y = n.getFullYear(), r.m = n.getMonth(), n.getDate() + (r.w + 6) % 7)
                    } else("W" in r || "U" in r) && ("w" in r || (r.w = "u" in r ? r.u % 7 : "W" in r ? 1 : 0), e = "Z" in r ? il(ol(r.y)).getUTCDay() : o(ol(r.y)).getDay(), r.m = 0, r.d = "W" in r ? (r.w + 6) % 7 + 7 * r.W - (e + 5) % 7 : r.w + 7 * r.U - (e + 6) % 7);
                    return "Z" in r ? (r.H += r.Z / 100 | 0, r.M += r.Z % 100, il(r)) : o(r)
                }
            }

            function k(t, n, e, r) {
                for (var i, o, u = 0, a = n.length, c = e.length; u < a;) {
                    if (c <= r) return -1;
                    if (37 === (i = n.charCodeAt(u++))) {
                        if (i = n.charAt(u++), !(o = x[i in hl ? n.charAt(u++) : i]) || (r = o(t, e, r)) < 0) return -1
                    } else if (i != e.charCodeAt(r++)) return -1
                }
                return r
            }
            return m.x = w(i, m), m.X = w(o, m), m.c = w(r, m), _.x = w(i, _), _.X = w(o, _), _.c = w(r, _), {
                format: function(t) {
                    var n = w(t += "", m);
                    return n.toString = function() {
                        return t
                    }, n
                },
                parse: function(t) {
                    var n = M(t += "", rl);
                    return n.toString = function() {
                        return t
                    }, n
                },
                utcFormat: function(t) {
                    var n = w(t += "", _);
                    return n.toString = function() {
                        return t
                    }, n
                },
                utcParse: function(t) {
                    var n = M(t, il);
                    return n.toString = function() {
                        return t
                    }, n
                }
            }
        }
        var al, cl, fl, sl, ll, hl = {
                "-": "",
                _: " ",
                0: "0"
            },
            dl = /^\s*\d+/,
            pl = /^%/,
            vl = /[\\^$*+?|[\]().{}]/g;

        function gl(t, n, e) {
            var r = t < 0 ? "-" : "",
                i = (r ? -t : t) + "",
                o = i.length;
            return r + (o < e ? new Array(e - o + 1).join(n) + i : i)
        }

        function yl(t) {
            return t.replace(vl, "\\$&")
        }

        function bl(t) {
            return new RegExp("^(?:" + t.map(yl).join("|") + ")", "i")
        }

        function ml(t) {
            for (var n = {}, e = -1, r = t.length; ++e < r;) n[t[e].toLowerCase()] = e;
            return n
        }

        function _l(t, n, e) {
            var r = dl.exec(n.slice(e, e + 1));
            return r ? (t.w = +r[0], e + r[0].length) : -1
        }

        function xl(t, n, e) {
            var r = dl.exec(n.slice(e, e + 1));
            return r ? (t.u = +r[0], e + r[0].length) : -1
        }

        function wl(t, n, e) {
            var r = dl.exec(n.slice(e, e + 2));
            return r ? (t.U = +r[0], e + r[0].length) : -1
        }

        function Ml(t, n, e) {
            var r = dl.exec(n.slice(e, e + 2));
            return r ? (t.V = +r[0], e + r[0].length) : -1
        }

        function kl(t, n, e) {
            var r = dl.exec(n.slice(e, e + 2));
            return r ? (t.W = +r[0], e + r[0].length) : -1
        }

        function El(t, n, e) {
            var r = dl.exec(n.slice(e, e + 4));
            return r ? (t.y = +r[0], e + r[0].length) : -1
        }

        function Tl(t, n, e) {
            var r = dl.exec(n.slice(e, e + 2));
            return r ? (t.y = +r[0] + (68 < +r[0] ? 1900 : 2e3), e + r[0].length) : -1
        }

        function Al(t, n, e) {
            var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
            return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1
        }

        function Sl(t, n, e) {
            var r = dl.exec(n.slice(e, e + 2));
            return r ? (t.m = r[0] - 1, e + r[0].length) : -1
        }

        function Cl(t, n, e) {
            var r = dl.exec(n.slice(e, e + 2));
            return r ? (t.d = +r[0], e + r[0].length) : -1
        }

        function Nl(t, n, e) {
            var r = dl.exec(n.slice(e, e + 3));
            return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1
        }

        function Ol(t, n, e) {
            var r = dl.exec(n.slice(e, e + 2));
            return r ? (t.H = +r[0], e + r[0].length) : -1
        }

        function Pl(t, n, e) {
            var r = dl.exec(n.slice(e, e + 2));
            return r ? (t.M = +r[0], e + r[0].length) : -1
        }

        function Rl(t, n, e) {
            var r = dl.exec(n.slice(e, e + 2));
            return r ? (t.S = +r[0], e + r[0].length) : -1
        }

        function Il(t, n, e) {
            var r = dl.exec(n.slice(e, e + 3));
            return r ? (t.L = +r[0], e + r[0].length) : -1
        }

        function zl(t, n, e) {
            var r = dl.exec(n.slice(e, e + 6));
            return r ? (t.L = Math.floor(r[0] / 1e3), e + r[0].length) : -1
        }

        function jl(t, n, e) {
            var r = pl.exec(n.slice(e, e + 1));
            return r ? e + r[0].length : -1
        }

        function Dl(t, n, e) {
            var r = dl.exec(n.slice(e));
            return r ? (t.Q = +r[0], e + r[0].length) : -1
        }

        function Ll(t, n, e) {
            var r = dl.exec(n.slice(e));
            return r ? (t.Q = 1e3 * +r[0], e + r[0].length) : -1
        }

        function Bl(t, n) {
            return gl(t.getDate(), n, 2)
        }

        function ql(t, n) {
            return gl(t.getHours(), n, 2)
        }

        function Fl(t, n) {
            return gl(t.getHours() % 12 || 12, n, 2)
        }

        function Ul(t, n) {
            return gl(1 + is.count(Es(t), t), n, 3)
        }

        function Hl(t, n) {
            return gl(t.getMilliseconds(), n, 3)
        }

        function Yl(t, n) {
            return Hl(t, n) + "000"
        }

        function Vl(t, n) {
            return gl(t.getMonth() + 1, n, 2)
        }

        function Wl(t, n) {
            return gl(t.getMinutes(), n, 2)
        }

        function Gl(t, n) {
            return gl(t.getSeconds(), n, 2)
        }

        function Xl(t) {
            var n = t.getDay();
            return 0 === n ? 7 : n
        }

        function $l(t, n) {
            return gl(as.count(Es(t), t), n, 2)
        }

        function Zl(t, n) {
            var e = t.getDay();
            return t = 4 <= e || 0 === e ? ls(t) : ls.ceil(t), gl(ls.count(Es(t), t) + (4 === Es(t).getDay()), n, 2)
        }

        function Jl(t) {
            return t.getDay()
        }

        function Kl(t, n) {
            return gl(cs.count(Es(t), t), n, 2)
        }

        function Ql(t, n) {
            return gl(t.getFullYear() % 100, n, 2)
        }

        function th(t, n) {
            return gl(t.getFullYear() % 1e4, n, 4)
        }

        function nh(t) {
            var n = t.getTimezoneOffset();
            return (0 < n ? "-" : (n *= -1, "+")) + gl(n / 60 | 0, "0", 2) + gl(n % 60, "0", 2)
        }

        function eh(t, n) {
            return gl(t.getUTCDate(), n, 2)
        }

        function rh(t, n) {
            return gl(t.getUTCHours(), n, 2)
        }

        function ih(t, n) {
            return gl(t.getUTCHours() % 12 || 12, n, 2)
        }

        function oh(t, n) {
            return gl(1 + Is.count(nl(t), t), n, 3)
        }

        function uh(t, n) {
            return gl(t.getUTCMilliseconds(), n, 3)
        }

        function ah(t, n) {
            return uh(t, n) + "000"
        }

        function ch(t, n) {
            return gl(t.getUTCMonth() + 1, n, 2)
        }

        function fh(t, n) {
            return gl(t.getUTCMinutes(), n, 2)
        }

        function sh(t, n) {
            return gl(t.getUTCSeconds(), n, 2)
        }

        function lh(t) {
            var n = t.getUTCDay();
            return 0 === n ? 7 : n
        }

        function hh(t, n) {
            return gl(Ds.count(nl(t), t), n, 2)
        }

        function dh(t, n) {
            var e = t.getUTCDay();
            return t = 4 <= e || 0 === e ? Fs(t) : Fs.ceil(t), gl(Fs.count(nl(t), t) + (4 === nl(t).getUTCDay()), n, 2)
        }

        function ph(t) {
            return t.getUTCDay()
        }

        function vh(t, n) {
            return gl(Ls.count(nl(t), t), n, 2)
        }

        function gh(t, n) {
            return gl(t.getUTCFullYear() % 100, n, 2)
        }

        function yh(t, n) {
            return gl(t.getUTCFullYear() % 1e4, n, 4)
        }

        function bh() {
            return "+0000"
        }

        function mh() {
            return "%"
        }

        function _h(t) {
            return +t
        }

        function xh(t) {
            return Math.floor(+t / 1e3)
        }

        function wh(t) {
            return al = ul(t), cl = al.format, fl = al.parse, sl = al.utcFormat, ll = al.utcParse, al
        }
        wh({
            dateTime: "%x, %X",
            date: "%-m/%-d/%Y",
            time: "%-I:%M:%S %p",
            periods: ["AM", "PM"],
            days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        });
        var Mh = "%Y-%m-%dT%H:%M:%S.%LZ";
        var kh = Date.prototype.toISOString ? function(t) {
            return t.toISOString()
        } : sl(Mh);
        var Eh = +new Date("2000-01-01T00:00:00.000Z") ? function(t) {
                var n = new Date(t);
                return isNaN(n) ? null : n
            } : ll(Mh),
            Th = 1e3,
            Ah = 60 * Th,
            Sh = 60 * Ah,
            Ch = 24 * Sh,
            Nh = 7 * Ch,
            Oh = 30 * Ch,
            Ph = 365 * Ch;

        function Rh(t) {
            return new Date(t)
        }

        function Ih(t) {
            return t instanceof Date ? +t : +new Date(+t)
        }

        function zh(u, n, e, r, i, o, a, c, f) {
            var s = xf(yf, _t.m),
                l = s.invert,
                h = s.domain,
                d = f(".%L"),
                p = f(":%S"),
                v = f("%I:%M"),
                g = f("%I %p"),
                y = f("%a %d"),
                b = f("%b %d"),
                m = f("%B"),
                _ = f("%Y"),
                x = [
                    [a, 1, Th],
                    [a, 5, 5 * Th],
                    [a, 15, 15 * Th],
                    [a, 30, 30 * Th],
                    [o, 1, Ah],
                    [o, 5, 5 * Ah],
                    [o, 15, 15 * Ah],
                    [o, 30, 30 * Ah],
                    [i, 1, Sh],
                    [i, 3, 3 * Sh],
                    [i, 6, 6 * Sh],
                    [i, 12, 12 * Sh],
                    [r, 1, Ch],
                    [r, 2, 2 * Ch],
                    [e, 1, Nh],
                    [n, 1, Oh],
                    [n, 3, 3 * Oh],
                    [u, 1, Ph]
                ];

            function w(t) {
                return (a(t) < t ? d : o(t) < t ? p : i(t) < t ? v : r(t) < t ? g : n(t) < t ? e(t) < t ? y : b : u(t) < t ? m : _)(t)
            }

            function M(t, n, e, r) {
                if (null == t && (t = 10), "number" == typeof t) {
                    var i = Math.abs(e - n) / t,
                        o = k(function(t) {
                            return t[2]
                        }).right(x, i);
                    t = o === x.length ? (r = S(n / Ph, e / Ph, t), u) : o ? (r = (o = x[i / x[o - 1][2] < x[o][2] / i ? o - 1 : o])[1], o[0]) : (r = Math.max(S(n, e, t), 1), c)
                }
                return null == r ? t : t.every(r)
            }
            return s.invert = function(t) {
                return new Date(l(t))
            }, s.domain = function(t) {
                return arguments.length ? h(cf.call(t, Ih)) : h().map(Rh)
            }, s.ticks = function(t, n) {
                var e, r = h(),
                    i = r[0],
                    o = r[r.length - 1],
                    u = o < i;
                return u && (e = i, i = o, o = e), e = (e = M(t, i, o, n)) ? e.range(i, o + 1) : [], u ? e.reverse() : e
            }, s.tickFormat = function(t, n) {
                return null == n ? w : f(n)
            }, s.nice = function(t, n) {
                var e = h();
                return (t = M(t, e[0], e[e.length - 1], n)) ? h(Tf(e, t)) : s
            }, s.copy = function() {
                return _f(s, zh(u, n, e, r, i, o, a, c, f))
            }, s
        }
        var jh = function() {
                return zh(Es, ws, as, is, ns, Kf, $f, Yf, cl).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)])
            },
            Dh = function() {
                return zh(nl, Ks, Ds, Is, Os, Ss, $f, Yf, sl).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)])
            };

        function Lh(e) {
            var r = 0,
                i = 1,
                o = !1;

            function n(t) {
                var n = (t - r) / (i - r);
                return e(o ? Math.max(0, Math.min(1, n)) : n)
            }
            return n.domain = function(t) {
                return arguments.length ? (r = +t[0], i = +t[1], n) : [r, i]
            }, n.clamp = function(t) {
                return arguments.length ? (o = !!t, n) : o
            }, n.interpolator = function(t) {
                return arguments.length ? (e = t, n) : e
            }, n.copy = function() {
                return Lh(e).domain([r, i]).clamp(o)
            }, Mf(n)
        }
        var Bh = function(t) {
                for (var n = t.length / 6 | 0, e = new Array(n), r = 0; r < n;) e[r] = "#" + t.slice(6 * r, 6 * ++r);
                return e
            },
            qh = Bh("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),
            Fh = Bh("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"),
            Uh = Bh("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"),
            Hh = Bh("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"),
            Yh = Bh("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"),
            Vh = Bh("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"),
            Wh = Bh("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"),
            Gh = Bh("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"),
            Xh = Bh("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"),
            $h = function(t) {
                return Object(_t.p)(t[t.length - 1])
            },
            Zh = new Array(3).concat("d8b365f5f5f55ab4ac", "a6611adfc27d80cdc1018571", "a6611adfc27df5f5f580cdc1018571", "8c510ad8b365f6e8c3c7eae55ab4ac01665e", "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e", "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e", "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e", "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30", "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30").map(Bh),
            Jh = $h(Zh),
            Kh = new Array(3).concat("af8dc3f7f7f77fbf7b", "7b3294c2a5cfa6dba0008837", "7b3294c2a5cff7f7f7a6dba0008837", "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837", "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837", "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837", "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837", "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b", "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b").map(Bh),
            Qh = $h(Kh),
            td = new Array(3).concat("e9a3c9f7f7f7a1d76a", "d01c8bf1b6dab8e1864dac26", "d01c8bf1b6daf7f7f7b8e1864dac26", "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221", "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221", "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221", "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221", "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419", "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419").map(Bh),
            nd = $h(td),
            ed = new Array(3).concat("998ec3f7f7f7f1a340", "5e3c99b2abd2fdb863e66101", "5e3c99b2abd2f7f7f7fdb863e66101", "542788998ec3d8daebfee0b6f1a340b35806", "542788998ec3d8daebf7f7f7fee0b6f1a340b35806", "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806", "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806", "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08", "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08").map(Bh),
            rd = $h(ed),
            id = new Array(3).concat("ef8a62f7f7f767a9cf", "ca0020f4a58292c5de0571b0", "ca0020f4a582f7f7f792c5de0571b0", "b2182bef8a62fddbc7d1e5f067a9cf2166ac", "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac", "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac", "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac", "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061", "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061").map(Bh),
            od = $h(id),
            ud = new Array(3).concat("ef8a62ffffff999999", "ca0020f4a582bababa404040", "ca0020f4a582ffffffbababa404040", "b2182bef8a62fddbc7e0e0e09999994d4d4d", "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d", "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d", "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d", "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a", "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a").map(Bh),
            ad = $h(ud),
            cd = new Array(3).concat("fc8d59ffffbf91bfdb", "d7191cfdae61abd9e92c7bb6", "d7191cfdae61ffffbfabd9e92c7bb6", "d73027fc8d59fee090e0f3f891bfdb4575b4", "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4", "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4", "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4", "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695", "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695").map(Bh),
            fd = $h(cd),
            sd = new Array(3).concat("fc8d59ffffbf91cf60", "d7191cfdae61a6d96a1a9641", "d7191cfdae61ffffbfa6d96a1a9641", "d73027fc8d59fee08bd9ef8b91cf601a9850", "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850", "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850", "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850", "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837", "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837").map(Bh),
            ld = $h(sd),
            hd = new Array(3).concat("fc8d59ffffbf99d594", "d7191cfdae61abdda42b83ba", "d7191cfdae61ffffbfabdda42b83ba", "d53e4ffc8d59fee08be6f59899d5943288bd", "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd", "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd", "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd", "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2", "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2").map(Bh),
            dd = $h(hd),
            pd = new Array(3).concat("e5f5f999d8c92ca25f", "edf8fbb2e2e266c2a4238b45", "edf8fbb2e2e266c2a42ca25f006d2c", "edf8fbccece699d8c966c2a42ca25f006d2c", "edf8fbccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824", "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b").map(Bh),
            vd = $h(pd),
            gd = new Array(3).concat("e0ecf49ebcda8856a7", "edf8fbb3cde38c96c688419d", "edf8fbb3cde38c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68856a7810f7c", "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b", "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b").map(Bh),
            yd = $h(gd),
            bd = new Array(3).concat("e0f3dba8ddb543a2ca", "f0f9e8bae4bc7bccc42b8cbe", "f0f9e8bae4bc7bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac", "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e", "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081").map(Bh),
            md = $h(bd),
            _d = new Array(3).concat("fee8c8fdbb84e34a33", "fef0d9fdcc8afc8d59d7301f", "fef0d9fdcc8afc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59e34a33b30000", "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000", "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000").map(Bh),
            xd = $h(_d),
            wd = new Array(3).concat("ece2f0a6bddb1c9099", "f6eff7bdc9e167a9cf02818a", "f6eff7bdc9e167a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf1c9099016c59", "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450", "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636").map(Bh),
            Md = $h(wd),
            kd = new Array(3).concat("ece7f2a6bddb2b8cbe", "f1eef6bdc9e174a9cf0570b0", "f1eef6bdc9e174a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d", "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b", "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858").map(Bh),
            Ed = $h(kd),
            Td = new Array(3).concat("e7e1efc994c7dd1c77", "f1eef6d7b5d8df65b0ce1256", "f1eef6d7b5d8df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0dd1c77980043", "f1eef6d4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f", "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f").map(Bh),
            Ad = $h(Td),
            Sd = new Array(3).concat("fde0ddfa9fb5c51b8a", "feebe2fbb4b9f768a1ae017e", "feebe2fbb4b9f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177", "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177", "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a").map(Bh),
            Cd = $h(Sd),
            Nd = new Array(3).concat("edf8b17fcdbb2c7fb8", "ffffcca1dab441b6c4225ea8", "ffffcca1dab441b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c42c7fb8253494", "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84", "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58").map(Bh),
            Od = $h(Nd),
            Pd = new Array(3).concat("f7fcb9addd8e31a354", "ffffccc2e69978c679238443", "ffffccc2e69978c67931a354006837", "ffffccd9f0a3addd8e78c67931a354006837", "ffffccd9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32", "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529").map(Bh),
            Rd = $h(Pd),
            Id = new Array(3).concat("fff7bcfec44fd95f0e", "ffffd4fed98efe9929cc4c02", "ffffd4fed98efe9929d95f0e993404", "ffffd4fee391fec44ffe9929d95f0e993404", "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04", "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506").map(Bh),
            zd = $h(Id),
            jd = new Array(3).concat("ffeda0feb24cf03b20", "ffffb2fecc5cfd8d3ce31a1c", "ffffb2fecc5cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cf03b20bd0026", "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026", "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026").map(Bh),
            Dd = $h(jd),
            Ld = new Array(3).concat("deebf79ecae13182bd", "eff3ffbdd7e76baed62171b5", "eff3ffbdd7e76baed63182bd08519c", "eff3ffc6dbef9ecae16baed63182bd08519c", "eff3ffc6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594", "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(Bh),
            Bd = $h(Ld),
            qd = new Array(3).concat("e5f5e0a1d99b31a354", "edf8e9bae4b374c476238b45", "edf8e9bae4b374c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47631a354006d2c", "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32", "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b").map(Bh),
            Fd = $h(qd),
            Ud = new Array(3).concat("f0f0f0bdbdbd636363", "f7f7f7cccccc969696525252", "f7f7f7cccccc969696636363252525", "f7f7f7d9d9d9bdbdbd969696636363252525", "f7f7f7d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525", "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000").map(Bh),
            Hd = $h(Ud),
            Yd = new Array(3).concat("efedf5bcbddc756bb1", "f2f0f7cbc9e29e9ac86a51a3", "f2f0f7cbc9e29e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8756bb154278f", "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486", "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d").map(Bh),
            Vd = $h(Yd),
            Wd = new Array(3).concat("fee0d2fc9272de2d26", "fee5d9fcae91fb6a4acb181d", "fee5d9fcae91fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4ade2d26a50f15", "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d", "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d").map(Bh),
            Gd = $h(Wd),
            Xd = new Array(3).concat("fee6cefdae6be6550d", "feeddefdbe85fd8d3cd94701", "feeddefdbe85fd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3ce6550da63603", "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04", "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704").map(Bh),
            $d = $h(Xd),
            Zd = Object(_t.f)(Object(bn.b)(300, .5, 0), Object(bn.b)(-240, .5, 1)),
            Jd = Object(_t.f)(Object(bn.b)(-100, .75, .35), Object(bn.b)(80, 1.5, .8)),
            Kd = Object(_t.f)(Object(bn.b)(260, .75, .35), Object(bn.b)(80, 1.5, .8)),
            Qd = Object(bn.b)(),
            tp = function(t) {
                (t < 0 || 1 < t) && (t -= Math.floor(t));
                var n = Math.abs(t - .5);
                return Qd.h = 360 * t - 100, Qd.s = 1.5 - 1.5 * n, Qd.l = .8 - .9 * n, Qd + ""
            },
            np = Object(bn.h)(),
            ep = Math.PI / 3,
            rp = 2 * Math.PI / 3,
            ip = function(t) {
                var n;
                return t = (.5 - t) * Math.PI, np.r = 255 * (n = Math.sin(t)) * n, np.g = 255 * (n = Math.sin(t + ep)) * n, np.b = 255 * (n = Math.sin(t + rp)) * n, np + ""
            };

        function op(n) {
            var e = n.length;
            return function(t) {
                return n[Math.max(0, Math.min(e - 1, Math.floor(t * e)))]
            }
        }
        var up = op(Bh("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),
            ap = op(Bh("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),
            cp = op(Bh("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),
            fp = op(Bh("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921")),
            sp = function(t) {
                return function() {
                    return t
                }
            },
            lp = Math.abs,
            hp = Math.atan2,
            dp = Math.cos,
            pp = Math.max,
            vp = Math.min,
            gp = Math.sin,
            yp = Math.sqrt,
            bp = 1e-12,
            mp = Math.PI,
            _p = mp / 2,
            xp = 2 * mp;

        function wp(t) {
            return 1 <= t ? _p : t <= -1 ? -_p : Math.asin(t)
        }

        function Mp(t) {
            return t.innerRadius
        }

        function kp(t) {
            return t.outerRadius
        }

        function Ep(t) {
            return t.startAngle
        }

        function Tp(t) {
            return t.endAngle
        }

        function Ap(t) {
            return t && t.padAngle
        }

        function Sp(t, n, e, r, i, o, u) {
            var a = t - e,
                c = n - r,
                f = (u ? o : -o) / yp(a * a + c * c),
                s = f * c,
                l = -f * a,
                h = t + s,
                d = n + l,
                p = e + s,
                v = r + l,
                g = (h + p) / 2,
                y = (d + v) / 2,
                b = p - h,
                m = v - d,
                _ = b * b + m * m,
                x = i - o,
                w = h * v - p * d,
                M = (m < 0 ? -1 : 1) * yp(pp(0, x * x * _ - w * w)),
                k = (w * m - b * M) / _,
                E = (-w * b - m * M) / _,
                T = (w * m + b * M) / _,
                A = (-w * b + m * M) / _,
                S = k - g,
                C = E - y,
                N = T - g,
                O = A - y;
            return N * N + O * O < S * S + C * C && (k = T, E = A), {
                cx: k,
                cy: E,
                x01: -s,
                y01: -l,
                x11: k * (i / x - 1),
                y11: E * (i / x - 1)
            }
        }
        var Cp = function() {
            var X = Mp,
                $ = kp,
                Z = sp(0),
                J = null,
                K = Ep,
                Q = Tp,
                tt = Ap,
                nt = null;

            function n() {
                var t, n, e, r, i, o, u, a, c, f, s, l, h = +X.apply(this, arguments),
                    d = +$.apply(this, arguments),
                    p = K.apply(this, arguments) - _p,
                    v = Q.apply(this, arguments) - _p,
                    g = lp(v - p),
                    y = p < v;
                if (nt || (nt = t = sn()), d < h && (n = d, d = h, h = n), bp < d)
                    if (xp - bp < g) nt.moveTo(d * dp(p), d * gp(p)), nt.arc(0, 0, d, p, v, !y), bp < h && (nt.moveTo(h * dp(v), h * gp(v)), nt.arc(0, 0, h, v, p, y));
                    else {
                        var b, m, _ = p,
                            x = v,
                            w = p,
                            M = v,
                            k = g,
                            E = g,
                            T = tt.apply(this, arguments) / 2,
                            A = bp < T && (J ? +J.apply(this, arguments) : yp(h * h + d * d)),
                            S = vp(lp(d - h) / 2, +Z.apply(this, arguments)),
                            C = S,
                            N = S;
                        if (bp < A) {
                            var O = wp(A / h * gp(T)),
                                P = wp(A / d * gp(T));
                            (k -= 2 * O) > bp ? (w += O *= y ? 1 : -1, M -= O) : (k = 0, w = M = (p + v) / 2), (E -= 2 * P) > bp ? (_ += P *= y ? 1 : -1, x -= P) : (E = 0, _ = x = (p + v) / 2)
                        }
                        var R = d * dp(_),
                            I = d * gp(_),
                            z = h * dp(M),
                            j = h * gp(M);
                        if (bp < S) {
                            var D = d * dp(x),
                                L = d * gp(x),
                                B = h * dp(w),
                                q = h * gp(w);
                            if (g < mp) {
                                var F = bp < k ? [(r = R) + (l = ((f = z - (o = D)) * ((i = I) - (u = L)) - (s = j - u) * (r - o)) / (s * (a = B - r) - f * (c = q - i))) * a, i + l * c] : [z, j],
                                    U = R - F[0],
                                    H = I - F[1],
                                    Y = D - F[0],
                                    V = L - F[1],
                                    W = 1 / gp((1 < (e = (U * Y + H * V) / (yp(U * U + H * H) * yp(Y * Y + V * V))) ? 0 : e < -1 ? mp : Math.acos(e)) / 2),
                                    G = yp(F[0] * F[0] + F[1] * F[1]);
                                C = vp(S, (h - G) / (W - 1)), N = vp(S, (d - G) / (W + 1))
                            }
                        }
                        bp < E ? bp < N ? (b = Sp(B, q, R, I, d, N, y), m = Sp(D, L, z, j, d, N, y), nt.moveTo(b.cx + b.x01, b.cy + b.y01), N < S ? nt.arc(b.cx, b.cy, N, hp(b.y01, b.x01), hp(m.y01, m.x01), !y) : (nt.arc(b.cx, b.cy, N, hp(b.y01, b.x01), hp(b.y11, b.x11), !y), nt.arc(0, 0, d, hp(b.cy + b.y11, b.cx + b.x11), hp(m.cy + m.y11, m.cx + m.x11), !y), nt.arc(m.cx, m.cy, N, hp(m.y11, m.x11), hp(m.y01, m.x01), !y))) : (nt.moveTo(R, I), nt.arc(0, 0, d, _, x, !y)) : nt.moveTo(R, I), bp < h && bp < k ? bp < C ? (b = Sp(z, j, D, L, h, -C, y), m = Sp(R, I, B, q, h, -C, y), nt.lineTo(b.cx + b.x01, b.cy + b.y01), C < S ? nt.arc(b.cx, b.cy, C, hp(b.y01, b.x01), hp(m.y01, m.x01), !y) : (nt.arc(b.cx, b.cy, C, hp(b.y01, b.x01), hp(b.y11, b.x11), !y), nt.arc(0, 0, h, hp(b.cy + b.y11, b.cx + b.x11), hp(m.cy + m.y11, m.cx + m.x11), y), nt.arc(m.cx, m.cy, C, hp(m.y11, m.x11), hp(m.y01, m.x01), !y))) : nt.arc(0, 0, h, M, w, y) : nt.lineTo(z, j)
                    }
                else nt.moveTo(0, 0);
                if (nt.closePath(), t) return nt = null, t + "" || null
            }
            return n.centroid = function() {
                var t = (+X.apply(this, arguments) + +$.apply(this, arguments)) / 2,
                    n = (+K.apply(this, arguments) + +Q.apply(this, arguments)) / 2 - mp / 2;
                return [dp(n) * t, gp(n) * t]
            }, n.innerRadius = function(t) {
                return arguments.length ? (X = "function" == typeof t ? t : sp(+t), n) : X
            }, n.outerRadius = function(t) {
                return arguments.length ? ($ = "function" == typeof t ? t : sp(+t), n) : $
            }, n.cornerRadius = function(t) {
                return arguments.length ? (Z = "function" == typeof t ? t : sp(+t), n) : Z
            }, n.padRadius = function(t) {
                return arguments.length ? (J = null == t ? null : "function" == typeof t ? t : sp(+t), n) : J
            }, n.startAngle = function(t) {
                return arguments.length ? (K = "function" == typeof t ? t : sp(+t), n) : K
            }, n.endAngle = function(t) {
                return arguments.length ? (Q = "function" == typeof t ? t : sp(+t), n) : Q
            }, n.padAngle = function(t) {
                return arguments.length ? (tt = "function" == typeof t ? t : sp(+t), n) : tt
            }, n.context = function(t) {
                return arguments.length ? (nt = null == t ? null : t, n) : nt
            }, n
        };

        function Np(t) {
            this._context = t
        }
        Np.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._point = 0
            },
            lineEnd: function() {
                (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                    case 1:
                        this._point = 2;
                    default:
                        this._context.lineTo(t, n)
                }
            }
        };
        var Op = function(t) {
            return new Np(t)
        };

        function Pp(t) {
            return t[0]
        }

        function Rp(t) {
            return t[1]
        }
        var Ip = function() {
                var u = Pp,
                    a = Rp,
                    c = sp(!0),
                    f = null,
                    s = Op,
                    l = null;

                function n(t) {
                    var n, e, r, i = t.length,
                        o = !1;
                    for (null == f && (l = s(r = sn())), n = 0; n <= i; ++n) !(n < i && c(e = t[n], n, t)) === o && ((o = !o) ? l.lineStart() : l.lineEnd()), o && l.point(+u(e, n, t), +a(e, n, t));
                    if (r) return l = null, r + "" || null
                }
                return n.x = function(t) {
                    return arguments.length ? (u = "function" == typeof t ? t : sp(+t), n) : u
                }, n.y = function(t) {
                    return arguments.length ? (a = "function" == typeof t ? t : sp(+t), n) : a
                }, n.defined = function(t) {
                    return arguments.length ? (c = "function" == typeof t ? t : sp(!!t), n) : c
                }, n.curve = function(t) {
                    return arguments.length ? (s = t, null != f && (l = s(f)), n) : s
                }, n.context = function(t) {
                    return arguments.length ? (null == t ? f = l = null : l = s(f = t), n) : f
                }, n
            },
            zp = function() {
                var s = Pp,
                    l = null,
                    h = sp(0),
                    d = Rp,
                    p = sp(!0),
                    v = null,
                    g = Op,
                    y = null;

                function n(t) {
                    var n, e, r, i, o, u = t.length,
                        a = !1,
                        c = new Array(u),
                        f = new Array(u);
                    for (null == v && (y = g(o = sn())), n = 0; n <= u; ++n) {
                        if (!(n < u && p(i = t[n], n, t)) === a)
                            if (a = !a) e = n, y.areaStart(), y.lineStart();
                            else {
                                for (y.lineEnd(), y.lineStart(), r = n - 1; e <= r; --r) y.point(c[r], f[r]);
                                y.lineEnd(), y.areaEnd()
                            }
                        a && (c[n] = +s(i, n, t), f[n] = +h(i, n, t), y.point(l ? +l(i, n, t) : c[n], d ? +d(i, n, t) : f[n]))
                    }
                    if (o) return y = null, o + "" || null
                }

                function t() {
                    return Ip().defined(p).curve(g).context(v)
                }
                return n.x = function(t) {
                    return arguments.length ? (s = "function" == typeof t ? t : sp(+t), l = null, n) : s
                }, n.x0 = function(t) {
                    return arguments.length ? (s = "function" == typeof t ? t : sp(+t), n) : s
                }, n.x1 = function(t) {
                    return arguments.length ? (l = null == t ? null : "function" == typeof t ? t : sp(+t), n) : l
                }, n.y = function(t) {
                    return arguments.length ? (h = "function" == typeof t ? t : sp(+t), d = null, n) : h
                }, n.y0 = function(t) {
                    return arguments.length ? (h = "function" == typeof t ? t : sp(+t), n) : h
                }, n.y1 = function(t) {
                    return arguments.length ? (d = null == t ? null : "function" == typeof t ? t : sp(+t), n) : d
                }, n.lineX0 = n.lineY0 = function() {
                    return t().x(s).y(h)
                }, n.lineY1 = function() {
                    return t().x(s).y(d)
                }, n.lineX1 = function() {
                    return t().x(l).y(h)
                }, n.defined = function(t) {
                    return arguments.length ? (p = "function" == typeof t ? t : sp(!!t), n) : p
                }, n.curve = function(t) {
                    return arguments.length ? (g = t, null != v && (y = g(v)), n) : g
                }, n.context = function(t) {
                    return arguments.length ? (null == t ? v = y = null : y = g(v = t), n) : v
                }, n
            },
            jp = function(t, n) {
                return n < t ? -1 : t < n ? 1 : t <= n ? 0 : NaN
            },
            Dp = function(t) {
                return t
            },
            Lp = function() {
                var p = Dp,
                    v = jp,
                    g = null,
                    y = sp(0),
                    b = sp(xp),
                    m = sp(0);

                function n(e) {
                    var t, n, r, i, o, u = e.length,
                        a = 0,
                        c = new Array(u),
                        f = new Array(u),
                        s = +y.apply(this, arguments),
                        l = Math.min(xp, Math.max(-xp, b.apply(this, arguments) - s)),
                        h = Math.min(Math.abs(l) / u, m.apply(this, arguments)),
                        d = h * (l < 0 ? -1 : 1);
                    for (t = 0; t < u; ++t) 0 < (o = f[c[t] = t] = +p(e[t], t, e)) && (a += o);
                    for (null != v ? c.sort(function(t, n) {
                            return v(f[t], f[n])
                        }) : null != g && c.sort(function(t, n) {
                            return g(e[t], e[n])
                        }), t = 0, r = a ? (l - u * d) / a : 0; t < u; ++t, s = i) n = c[t], i = s + (0 < (o = f[n]) ? o * r : 0) + d, f[n] = {
                        data: e[n],
                        index: t,
                        value: o,
                        startAngle: s,
                        endAngle: i,
                        padAngle: h
                    };
                    return f
                }
                return n.value = function(t) {
                    return arguments.length ? (p = "function" == typeof t ? t : sp(+t), n) : p
                }, n.sortValues = function(t) {
                    return arguments.length ? (v = t, g = null, n) : v
                }, n.sort = function(t) {
                    return arguments.length ? (g = t, v = null, n) : g
                }, n.startAngle = function(t) {
                    return arguments.length ? (y = "function" == typeof t ? t : sp(+t), n) : y
                }, n.endAngle = function(t) {
                    return arguments.length ? (b = "function" == typeof t ? t : sp(+t), n) : b
                }, n.padAngle = function(t) {
                    return arguments.length ? (m = "function" == typeof t ? t : sp(+t), n) : m
                }, n
            },
            Bp = Fp(Op);

        function qp(t) {
            this._curve = t
        }

        function Fp(n) {
            function t(t) {
                return new qp(n(t))
            }
            return t._curve = n, t
        }

        function Up(t) {
            var n = t.curve;
            return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t.curve = function(t) {
                return arguments.length ? n(Fp(t)) : n()._curve
            }, t
        }
        qp.prototype = {
            areaStart: function() {
                this._curve.areaStart()
            },
            areaEnd: function() {
                this._curve.areaEnd()
            },
            lineStart: function() {
                this._curve.lineStart()
            },
            lineEnd: function() {
                this._curve.lineEnd()
            },
            point: function(t, n) {
                this._curve.point(n * Math.sin(t), n * -Math.cos(t))
            }
        };
        var Hp = function() {
                return Up(Ip().curve(Bp))
            },
            Yp = function() {
                var t = zp().curve(Bp),
                    n = t.curve,
                    e = t.lineX0,
                    r = t.lineX1,
                    i = t.lineY0,
                    o = t.lineY1;
                return t.angle = t.x, delete t.x, t.startAngle = t.x0, delete t.x0, t.endAngle = t.x1, delete t.x1, t.radius = t.y, delete t.y, t.innerRadius = t.y0, delete t.y0, t.outerRadius = t.y1, delete t.y1, t.lineStartAngle = function() {
                    return Up(e())
                }, delete t.lineX0, t.lineEndAngle = function() {
                    return Up(r())
                }, delete t.lineX1, t.lineInnerRadius = function() {
                    return Up(i())
                }, delete t.lineY0, t.lineOuterRadius = function() {
                    return Up(o())
                }, delete t.lineY1, t.curve = function(t) {
                    return arguments.length ? n(Fp(t)) : n()._curve
                }, t
            },
            Vp = function(t, n) {
                return [(n = +n) * Math.cos(t -= Math.PI / 2), n * Math.sin(t)]
            },
            Wp = Array.prototype.slice;

        function Gp(t) {
            return t.source
        }

        function Xp(t) {
            return t.target
        }

        function $p(i) {
            var o = Gp,
                u = Xp,
                a = Pp,
                c = Rp,
                f = null;

            function n() {
                var t, n = Wp.call(arguments),
                    e = o.apply(this, n),
                    r = u.apply(this, n);
                if (f || (f = t = sn()), i(f, +a.apply(this, (n[0] = e, n)), +c.apply(this, n), +a.apply(this, (n[0] = r, n)), +c.apply(this, n)), t) return f = null, t + "" || null
            }
            return n.source = function(t) {
                return arguments.length ? (o = t, n) : o
            }, n.target = function(t) {
                return arguments.length ? (u = t, n) : u
            }, n.x = function(t) {
                return arguments.length ? (a = "function" == typeof t ? t : sp(+t), n) : a
            }, n.y = function(t) {
                return arguments.length ? (c = "function" == typeof t ? t : sp(+t), n) : c
            }, n.context = function(t) {
                return arguments.length ? (f = null == t ? null : t, n) : f
            }, n
        }

        function Zp(t, n, e, r, i) {
            t.moveTo(n, e), t.bezierCurveTo(n = (n + r) / 2, e, n, i, r, i)
        }

        function Jp(t, n, e, r, i) {
            t.moveTo(n, e), t.bezierCurveTo(n, e = (e + i) / 2, r, e, r, i)
        }

        function Kp(t, n, e, r, i) {
            var o = Vp(n, e),
                u = Vp(n, e = (e + i) / 2),
                a = Vp(r, e),
                c = Vp(r, i);
            t.moveTo(o[0], o[1]), t.bezierCurveTo(u[0], u[1], a[0], a[1], c[0], c[1])
        }

        function Qp() {
            return $p(Zp)
        }

        function tv() {
            return $p(Jp)
        }

        function nv() {
            var t = $p(Kp);
            return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t
        }
        var ev = {
                draw: function(t, n) {
                    var e = Math.sqrt(n / mp);
                    t.moveTo(e, 0), t.arc(0, 0, e, 0, xp)
                }
            },
            rv = {
                draw: function(t, n) {
                    var e = Math.sqrt(n / 5) / 2;
                    t.moveTo(-3 * e, -e), t.lineTo(-e, -e), t.lineTo(-e, -3 * e), t.lineTo(e, -3 * e), t.lineTo(e, -e), t.lineTo(3 * e, -e), t.lineTo(3 * e, e), t.lineTo(e, e), t.lineTo(e, 3 * e), t.lineTo(-e, 3 * e), t.lineTo(-e, e), t.lineTo(-3 * e, e), t.closePath()
                }
            },
            iv = Math.sqrt(1 / 3),
            ov = 2 * iv,
            uv = {
                draw: function(t, n) {
                    var e = Math.sqrt(n / ov),
                        r = e * iv;
                    t.moveTo(0, -e), t.lineTo(r, 0), t.lineTo(0, e), t.lineTo(-r, 0), t.closePath()
                }
            },
            av = Math.sin(mp / 10) / Math.sin(7 * mp / 10),
            cv = Math.sin(xp / 10) * av,
            fv = -Math.cos(xp / 10) * av,
            sv = {
                draw: function(t, n) {
                    var e = Math.sqrt(.8908130915292852 * n),
                        r = cv * e,
                        i = fv * e;
                    t.moveTo(0, -e), t.lineTo(r, i);
                    for (var o = 1; o < 5; ++o) {
                        var u = xp * o / 5,
                            a = Math.cos(u),
                            c = Math.sin(u);
                        t.lineTo(c * e, -a * e), t.lineTo(a * r - c * i, c * r + a * i)
                    }
                    t.closePath()
                }
            },
            lv = {
                draw: function(t, n) {
                    var e = Math.sqrt(n),
                        r = -e / 2;
                    t.rect(r, r, e, e)
                }
            },
            hv = Math.sqrt(3),
            dv = {
                draw: function(t, n) {
                    var e = -Math.sqrt(n / (3 * hv));
                    t.moveTo(0, 2 * e), t.lineTo(-hv * e, -e), t.lineTo(hv * e, -e), t.closePath()
                }
            },
            pv = -.5,
            vv = Math.sqrt(3) / 2,
            gv = 1 / Math.sqrt(12),
            yv = 3 * (gv / 2 + 1),
            bv = {
                draw: function(t, n) {
                    var e = Math.sqrt(n / yv),
                        r = e / 2,
                        i = e * gv,
                        o = r,
                        u = e * gv + e,
                        a = -o,
                        c = u;
                    t.moveTo(r, i), t.lineTo(o, u), t.lineTo(a, c), t.lineTo(pv * r - vv * i, vv * r + pv * i), t.lineTo(pv * o - vv * u, vv * o + pv * u), t.lineTo(pv * a - vv * c, vv * a + pv * c), t.lineTo(pv * r + vv * i, pv * i - vv * r), t.lineTo(pv * o + vv * u, pv * u - vv * o), t.lineTo(pv * a + vv * c, pv * c - vv * a), t.closePath()
                }
            },
            mv = [ev, rv, uv, lv, sv, dv, bv],
            _v = function() {
                var n = sp(ev),
                    e = sp(64),
                    r = null;

                function i() {
                    var t;
                    if (r || (r = t = sn()), n.apply(this, arguments).draw(r, +e.apply(this, arguments)), t) return r = null, t + "" || null
                }
                return i.type = function(t) {
                    return arguments.length ? (n = "function" == typeof t ? t : sp(t), i) : n
                }, i.size = function(t) {
                    return arguments.length ? (e = "function" == typeof t ? t : sp(+t), i) : e
                }, i.context = function(t) {
                    return arguments.length ? (r = null == t ? null : t, i) : r
                }, i
            },
            xv = function() {};

        function wv(t, n, e) {
            t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6)
        }

        function Mv(t) {
            this._context = t
        }
        Mv.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                    case 3:
                        wv(this, this._x1, this._y1);
                    case 2:
                        this._context.lineTo(this._x1, this._y1)
                }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                    default:
                        wv(this, t, n)
                }
                this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
            }
        };
        var kv = function(t) {
            return new Mv(t)
        };

        function Ev(t) {
            this._context = t
        }
        Ev.prototype = {
            areaStart: xv,
            areaEnd: xv,
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                    case 1:
                        this._context.moveTo(this._x2, this._y2), this._context.closePath();
                        break;
                    case 2:
                        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
                        break;
                    case 3:
                        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4)
                }
            },
            point: function(t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1, this._x2 = t, this._y2 = n;
                        break;
                    case 1:
                        this._point = 2, this._x3 = t, this._y3 = n;
                        break;
                    case 2:
                        this._point = 3, this._x4 = t, this._y4 = n, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6);
                        break;
                    default:
                        wv(this, t, n)
                }
                this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
            }
        };
        var Tv = function(t) {
            return new Ev(t)
        };

        function Av(t) {
            this._context = t
        }
        Av.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
            },
            lineEnd: function() {
                (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1;
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3;
                        var e = (this._x0 + 4 * this._x1 + t) / 6,
                            r = (this._y0 + 4 * this._y1 + n) / 6;
                        this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
                        break;
                    case 3:
                        this._point = 4;
                    default:
                        wv(this, t, n)
                }
                this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
            }
        };
        var Sv = function(t) {
            return new Av(t)
        };

        function Cv(t, n) {
            this._basis = new Mv(t), this._beta = n
        }
        Cv.prototype = {
            lineStart: function() {
                this._x = [], this._y = [], this._basis.lineStart()
            },
            lineEnd: function() {
                var t = this._x,
                    n = this._y,
                    e = t.length - 1;
                if (0 < e)
                    for (var r, i = t[0], o = n[0], u = t[e] - i, a = n[e] - o, c = -1; ++c <= e;) r = c / e, this._basis.point(this._beta * t[c] + (1 - this._beta) * (i + r * u), this._beta * n[c] + (1 - this._beta) * (o + r * a));
                this._x = this._y = null, this._basis.lineEnd()
            },
            point: function(t, n) {
                this._x.push(+t), this._y.push(+n)
            }
        };
        var Nv = function n(e) {
            function t(t) {
                return 1 === e ? new Mv(t) : new Cv(t, e)
            }
            return t.beta = function(t) {
                return n(+t)
            }, t
        }(.85);

        function Ov(t, n, e) {
            t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2)
        }

        function Pv(t, n) {
            this._context = t, this._k = (1 - n) / 6
        }
        Pv.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                    case 2:
                        this._context.lineTo(this._x2, this._y2);
                        break;
                    case 3:
                        Ov(this, this._x1, this._y1)
                }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                    case 1:
                        this._point = 2, this._x1 = t, this._y1 = n;
                        break;
                    case 2:
                        this._point = 3;
                    default:
                        Ov(this, t, n)
                }
                this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
            }
        };
        var Rv = function n(e) {
            function t(t) {
                return new Pv(t, e)
            }
            return t.tension = function(t) {
                return n(+t)
            }, t
        }(0);

        function Iv(t, n) {
            this._context = t, this._k = (1 - n) / 6
        }
        Iv.prototype = {
            areaStart: xv,
            areaEnd: xv,
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                    case 1:
                        this._context.moveTo(this._x3, this._y3), this._context.closePath();
                        break;
                    case 2:
                        this._context.lineTo(this._x3, this._y3), this._context.closePath();
                        break;
                    case 3:
                        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
                }
            },
            point: function(t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1, this._x3 = t, this._y3 = n;
                        break;
                    case 1:
                        this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                        break;
                    case 2:
                        this._point = 3, this._x5 = t, this._y5 = n;
                        break;
                    default:
                        Ov(this, t, n)
                }
                this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
            }
        };
        var zv = function n(e) {
            function t(t) {
                return new Iv(t, e)
            }
            return t.tension = function(t) {
                return n(+t)
            }, t
        }(0);

        function jv(t, n) {
            this._context = t, this._k = (1 - n) / 6
        }
        jv.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
            },
            lineEnd: function() {
                (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1;
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                        break;
                    case 3:
                        this._point = 4;
                    default:
                        Ov(this, t, n)
                }
                this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
            }
        };
        var Dv = function n(e) {
            function t(t) {
                return new jv(t, e)
            }
            return t.tension = function(t) {
                return n(+t)
            }, t
        }(0);

        function Lv(t, n, e) {
            var r = t._x1,
                i = t._y1,
                o = t._x2,
                u = t._y2;
            if (t._l01_a > bp) {
                var a = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
                    c = 3 * t._l01_a * (t._l01_a + t._l12_a);
                r = (r * a - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / c, i = (i * a - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / c
            }
            if (t._l23_a > bp) {
                var f = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
                    s = 3 * t._l23_a * (t._l23_a + t._l12_a);
                o = (o * f + t._x1 * t._l23_2a - n * t._l12_2a) / s, u = (u * f + t._y1 * t._l23_2a - e * t._l12_2a) / s
            }
            t._context.bezierCurveTo(r, i, o, u, t._x2, t._y2)
        }

        function Bv(t, n) {
            this._context = t, this._alpha = n
        }
        Bv.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                    case 2:
                        this._context.lineTo(this._x2, this._y2);
                        break;
                    case 3:
                        this.point(this._x2, this._y2)
                }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(t, n) {
                if (t = +t, n = +n, this._point) {
                    var e = this._x2 - t,
                        r = this._y2 - n;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
                }
                switch (this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3;
                    default:
                        Lv(this, t, n)
                }
                this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
            }
        };
        var qv = function n(e) {
            function t(t) {
                return e ? new Bv(t, e) : new Pv(t, 0)
            }
            return t.alpha = function(t) {
                return n(+t)
            }, t
        }(.5);

        function Fv(t, n) {
            this._context = t, this._alpha = n
        }
        Fv.prototype = {
            areaStart: xv,
            areaEnd: xv,
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                    case 1:
                        this._context.moveTo(this._x3, this._y3), this._context.closePath();
                        break;
                    case 2:
                        this._context.lineTo(this._x3, this._y3), this._context.closePath();
                        break;
                    case 3:
                        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
                }
            },
            point: function(t, n) {
                if (t = +t, n = +n, this._point) {
                    var e = this._x2 - t,
                        r = this._y2 - n;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
                }
                switch (this._point) {
                    case 0:
                        this._point = 1, this._x3 = t, this._y3 = n;
                        break;
                    case 1:
                        this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                        break;
                    case 2:
                        this._point = 3, this._x5 = t, this._y5 = n;
                        break;
                    default:
                        Lv(this, t, n)
                }
                this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
            }
        };
        var Uv = function n(e) {
            function t(t) {
                return e ? new Fv(t, e) : new Iv(t, 0)
            }
            return t.alpha = function(t) {
                return n(+t)
            }, t
        }(.5);

        function Hv(t, n) {
            this._context = t, this._alpha = n
        }
        Hv.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
            },
            lineEnd: function() {
                (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(t, n) {
                if (t = +t, n = +n, this._point) {
                    var e = this._x2 - t,
                        r = this._y2 - n;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
                }
                switch (this._point) {
                    case 0:
                        this._point = 1;
                        break;
                    case 1:
                        this._point = 2;
                        break;
                    case 2:
                        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                        break;
                    case 3:
                        this._point = 4;
                    default:
                        Lv(this, t, n)
                }
                this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
            }
        };
        var Yv = function n(e) {
            function t(t) {
                return e ? new Hv(t, e) : new jv(t, 0)
            }
            return t.alpha = function(t) {
                return n(+t)
            }, t
        }(.5);

        function Vv(t) {
            this._context = t
        }
        Vv.prototype = {
            areaStart: xv,
            areaEnd: xv,
            lineStart: function() {
                this._point = 0
            },
            lineEnd: function() {
                this._point && this._context.closePath()
            },
            point: function(t, n) {
                t = +t, n = +n, this._point ? this._context.lineTo(t, n) : (this._point = 1, this._context.moveTo(t, n))
            }
        };
        var Wv = function(t) {
            return new Vv(t)
        };

        function Gv(t) {
            return t < 0 ? -1 : 1
        }

        function Xv(t, n, e) {
            var r = t._x1 - t._x0,
                i = n - t._x1,
                o = (t._y1 - t._y0) / (r || i < 0 && -0),
                u = (e - t._y1) / (i || r < 0 && -0),
                a = (o * i + u * r) / (r + i);
            return (Gv(o) + Gv(u)) * Math.min(Math.abs(o), Math.abs(u), .5 * Math.abs(a)) || 0
        }

        function $v(t, n) {
            var e = t._x1 - t._x0;
            return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n
        }

        function Zv(t, n, e) {
            var r = t._x0,
                i = t._y0,
                o = t._x1,
                u = t._y1,
                a = (o - r) / 3;
            t._context.bezierCurveTo(r + a, i + a * n, o - a, u - a * e, o, u)
        }

        function Jv(t) {
            this._context = t
        }

        function Kv(t) {
            this._context = new Qv(t)
        }

        function Qv(t) {
            this._context = t
        }

        function tg(t) {
            return new Jv(t)
        }

        function ng(t) {
            return new Kv(t)
        }

        function eg(t) {
            this._context = t
        }

        function rg(t) {
            var n, e, r = t.length - 1,
                i = new Array(r),
                o = new Array(r),
                u = new Array(r);
            for (o[i[0] = 0] = 2, u[0] = t[0] + 2 * t[1], n = 1; n < r - 1; ++n) i[n] = 1, o[n] = 4, u[n] = 4 * t[n] + 2 * t[n + 1];
            for (i[r - 1] = 2, o[r - 1] = 7, u[r - 1] = 8 * t[r - 1] + t[r], n = 1; n < r; ++n) e = i[n] / o[n - 1], o[n] -= e, u[n] -= e * u[n - 1];
            for (i[r - 1] = u[r - 1] / o[r - 1], n = r - 2; 0 <= n; --n) i[n] = (u[n] - i[n + 1]) / o[n];
            for (o[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; n < r - 1; ++n) o[n] = 2 * t[n + 1] - i[n + 1];
            return [i, o]
        }
        Jv.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
            },
            lineEnd: function() {
                switch (this._point) {
                    case 2:
                        this._context.lineTo(this._x1, this._y1);
                        break;
                    case 3:
                        Zv(this, this._t0, $v(this, this._t0))
                }(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
            },
            point: function(t, n) {
                var e = NaN;
                if (n = +n, (t = +t) !== this._x1 || n !== this._y1) {
                    switch (this._point) {
                        case 0:
                            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                            break;
                        case 1:
                            this._point = 2;
                            break;
                        case 2:
                            this._point = 3, Zv(this, $v(this, e = Xv(this, t, n)), e);
                            break;
                        default:
                            Zv(this, this._t0, e = Xv(this, t, n))
                    }
                    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = e
                }
            }
        }, (Kv.prototype = Object.create(Jv.prototype)).point = function(t, n) {
            Jv.prototype.point.call(this, n, t)
        }, Qv.prototype = {
            moveTo: function(t, n) {
                this._context.moveTo(n, t)
            },
            closePath: function() {
                this._context.closePath()
            },
            lineTo: function(t, n) {
                this._context.lineTo(n, t)
            },
            bezierCurveTo: function(t, n, e, r, i, o) {
                this._context.bezierCurveTo(n, t, r, e, o, i)
            }
        }, eg.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x = [], this._y = []
            },
            lineEnd: function() {
                var t = this._x,
                    n = this._y,
                    e = t.length;
                if (e)
                    if (this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]), 2 === e) this._context.lineTo(t[1], n[1]);
                    else
                        for (var r = rg(t), i = rg(n), o = 0, u = 1; u < e; ++o, ++u) this._context.bezierCurveTo(r[0][o], i[0][o], r[1][o], i[1][o], t[u], n[u]);
                (this._line || 0 !== this._line && 1 === e) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
            },
            point: function(t, n) {
                this._x.push(+t), this._y.push(+n)
            }
        };
        var ig = function(t) {
            return new eg(t)
        };

        function og(t, n) {
            this._context = t, this._t = n
        }
        og.prototype = {
            areaStart: function() {
                this._line = 0
            },
            areaEnd: function() {
                this._line = NaN
            },
            lineStart: function() {
                this._x = this._y = NaN, this._point = 0
            },
            lineEnd: function() {
                0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), 0 <= this._line && (this._t = 1 - this._t, this._line = 1 - this._line)
            },
            point: function(t, n) {
                switch (t = +t, n = +n, this._point) {
                    case 0:
                        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                        break;
                    case 1:
                        this._point = 2;
                    default:
                        if (this._t <= 0) this._context.lineTo(this._x, n), this._context.lineTo(t, n);
                        else {
                            var e = this._x * (1 - this._t) + t * this._t;
                            this._context.lineTo(e, this._y), this._context.lineTo(e, n)
                        }
                }
                this._x = t, this._y = n
            }
        };
        var ug = function(t) {
            return new og(t, .5)
        };

        function ag(t) {
            return new og(t, 0)
        }

        function cg(t) {
            return new og(t, 1)
        }
        var fg = function(t, n) {
                if (1 < (i = t.length))
                    for (var e, r, i, o = 1, u = t[n[0]], a = u.length; o < i; ++o)
                        for (r = u, u = t[n[o]], e = 0; e < a; ++e) u[e][1] += u[e][0] = isNaN(r[e][1]) ? r[e][0] : r[e][1]
            },
            sg = function(t) {
                for (var n = t.length, e = new Array(n); 0 <= --n;) e[n] = n;
                return e
            };

        function lg(t, n) {
            return t[n]
        }
        var hg = function() {
                var l = sp([]),
                    h = sg,
                    d = fg,
                    p = lg;

                function n(t) {
                    var n, e, r = l.apply(this, arguments),
                        i = t.length,
                        o = r.length,
                        u = new Array(o);
                    for (n = 0; n < o; ++n) {
                        for (var a, c = r[n], f = u[n] = new Array(i), s = 0; s < i; ++s) f[s] = a = [0, +p(t[s], c, s, t)], a.data = t[s];
                        f.key = c
                    }
                    for (n = 0, e = h(u); n < o; ++n) u[e[n]].index = n;
                    return d(u, e), u
                }
                return n.keys = function(t) {
                    return arguments.length ? (l = "function" == typeof t ? t : sp(Wp.call(t)), n) : l
                }, n.value = function(t) {
                    return arguments.length ? (p = "function" == typeof t ? t : sp(+t), n) : p
                }, n.order = function(t) {
                    return arguments.length ? (h = null == t ? sg : "function" == typeof t ? t : sp(Wp.call(t)), n) : h
                }, n.offset = function(t) {
                    return arguments.length ? (d = null == t ? fg : t, n) : d
                }, n
            },
            dg = function(t, n) {
                if (0 < (r = t.length)) {
                    for (var e, r, i, o = 0, u = t[0].length; o < u; ++o) {
                        for (i = e = 0; e < r; ++e) i += t[e][o][1] || 0;
                        if (i)
                            for (e = 0; e < r; ++e) t[e][o][1] /= i
                    }
                    fg(t, n)
                }
            },
            pg = function(t, n) {
                if (1 < (a = t.length))
                    for (var e, r, i, o, u, a, c = 0, f = t[n[0]].length; c < f; ++c)
                        for (o = u = 0, e = 0; e < a; ++e) 0 <= (i = (r = t[n[e]][c])[1] - r[0]) ? (r[0] = o, r[1] = o += i) : r[0] = i < 0 ? (r[1] = u, u += i) : o
            },
            vg = function(t, n) {
                if (0 < (e = t.length)) {
                    for (var e, r = 0, i = t[n[0]], o = i.length; r < o; ++r) {
                        for (var u = 0, a = 0; u < e; ++u) a += t[u][r][1] || 0;
                        i[r][1] += i[r][0] = -a / 2
                    }
                    fg(t, n)
                }
            },
            gg = function(t, n) {
                if (0 < (i = t.length) && 0 < (r = (e = t[n[0]]).length)) {
                    for (var e, r, i, o = 0, u = 1; u < r; ++u) {
                        for (var a = 0, c = 0, f = 0; a < i; ++a) {
                            for (var s = t[n[a]], l = s[u][1] || 0, h = (l - (s[u - 1][1] || 0)) / 2, d = 0; d < a; ++d) {
                                var p = t[n[d]];
                                h += (p[u][1] || 0) - (p[u - 1][1] || 0)
                            }
                            c += l, f += h * l
                        }
                        e[u - 1][1] += e[u - 1][0] = o, c && (o -= f / c)
                    }
                    e[u - 1][1] += e[u - 1][0] = o, fg(t, n)
                }
            },
            yg = function(t) {
                var e = t.map(bg);
                return sg(t).sort(function(t, n) {
                    return e[t] - e[n]
                })
            };

        function bg(t) {
            for (var n, e = 0, r = -1, i = t.length; ++r < i;)(n = +t[r][1]) && (e += n);
            return e
        }
        var mg = function(t) {
                return yg(t).reverse()
            },
            _g = function(t) {
                var n, e, r = t.length,
                    i = t.map(bg),
                    o = sg(t).sort(function(t, n) {
                        return i[n] - i[t]
                    }),
                    u = 0,
                    a = 0,
                    c = [],
                    f = [];
                for (n = 0; n < r; ++n) e = o[n], u < a ? (u += i[e], c.push(e)) : (a += i[e], f.push(e));
                return f.reverse().concat(c)
            },
            xg = function(t) {
                return sg(t).reverse()
            },
            wg = function(t) {
                return function() {
                    return t
                }
            };

        function Mg(t) {
            return t[0]
        }

        function kg(t) {
            return t[1]
        }

        function Eg() {
            this._ = null
        }

        function Tg(t) {
            t.U = t.C = t.L = t.R = t.P = t.N = null
        }

        function Ag(t, n) {
            var e = n,
                r = n.R,
                i = e.U;
            i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e
        }

        function Sg(t, n) {
            var e = n,
                r = n.L,
                i = e.U;
            i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e
        }

        function Cg(t) {
            for (; t.L;) t = t.L;
            return t
        }
        Eg.prototype = {
            constructor: Eg,
            insert: function(t, n) {
                var e, r, i;
                if (t) {
                    if (n.P = t, n.N = t.N, t.N && (t.N.P = n), t.N = n, t.R) {
                        for (t = t.R; t.L;) t = t.L;
                        t.L = n
                    } else t.R = n;
                    e = t
                } else e = this._ ? (t = Cg(this._), n.P = null, (n.N = t).P = t.L = n, t) : (n.P = n.N = null, this._ = n, null);
                for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C;) e === (r = e.U).L ? (i = r.R) && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.R && (Ag(this, e), e = (t = e).U), e.C = !1, r.C = !0, Sg(this, r)) : (i = r.L) && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.L && (Sg(this, e), e = (t = e).U), e.C = !1, r.C = !0, Ag(this, r)), e = t.U;
                this._.C = !1
            },
            remove: function(t) {
                t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;
                var n, e, r, i = t.U,
                    o = t.L,
                    u = t.R;
                if (e = o ? u ? Cg(u) : o : u, i ? i.L === t ? i.L = e : i.R = e : this._ = e, o && u ? (r = e.C, e.C = t.C, ((e.L = o).U = e) !== u ? (i = e.U, e.U = t.U, t = e.R, i.L = t, (e.R = u).U = e) : (e.U = i, t = (i = e).R)) : (r = t.C, t = e), t && (t.U = i), !r)
                    if (t && t.C) t.C = !1;
                    else {
                        do {
                            if (t === this._) break;
                            if (t === i.L) {
                                if ((n = i.R).C && (n.C = !1, i.C = !0, Ag(this, i), n = i.R), n.L && n.L.C || n.R && n.R.C) {
                                    n.R && n.R.C || (n.L.C = !1, n.C = !0, Sg(this, n), n = i.R), n.C = i.C, i.C = n.R.C = !1, Ag(this, i), t = this._;
                                    break
                                }
                            } else if ((n = i.L).C && (n.C = !1, i.C = !0, Sg(this, i), n = i.L), n.L && n.L.C || n.R && n.R.C) {
                                n.L && n.L.C || (n.R.C = !1, n.C = !0, Ag(this, n), n = i.L), n.C = i.C, i.C = n.L.C = !1, Sg(this, i), t = this._;
                                break
                            }
                            n.C = !0, i = (t = i).U
                        } while (!t.C);
                        t && (t.C = !1)
                    }
            }
        };
        var Ng = Eg;

        function Og(t, n, e, r) {
            var i = [null, null],
                o = Qg.push(i) - 1;
            return i.left = t, i.right = n, e && Rg(i, t, n, e), r && Rg(i, n, t, r), Jg[t.index].halfedges.push(o), Jg[n.index].halfedges.push(o), i
        }

        function Pg(t, n, e) {
            var r = [n, e];
            return r.left = t, r
        }

        function Rg(t, n, e, r) {
            t[0] || t[1] ? t.left === e ? t[1] = r : t[0] = r : (t[0] = r, t.left = n, t.right = e)
        }

        function Ig(t, n, e, r, i) {
            var o, u = t[0],
                a = t[1],
                c = u[0],
                f = u[1],
                s = 0,
                l = 1,
                h = a[0] - c,
                d = a[1] - f;
            if (o = n - c, h || !(0 < o)) {
                if (o /= h, h < 0) {
                    if (o < s) return;
                    o < l && (l = o)
                } else if (0 < h) {
                    if (l < o) return;
                    s < o && (s = o)
                }
                if (o = r - c, h || !(o < 0)) {
                    if (o /= h, h < 0) {
                        if (l < o) return;
                        s < o && (s = o)
                    } else if (0 < h) {
                        if (o < s) return;
                        o < l && (l = o)
                    }
                    if (o = e - f, d || !(0 < o)) {
                        if (o /= d, d < 0) {
                            if (o < s) return;
                            o < l && (l = o)
                        } else if (0 < d) {
                            if (l < o) return;
                            s < o && (s = o)
                        }
                        if (o = i - f, d || !(o < 0)) {
                            if (o /= d, d < 0) {
                                if (l < o) return;
                                s < o && (s = o)
                            } else if (0 < d) {
                                if (o < s) return;
                                o < l && (l = o)
                            }
                            return (0 < s || l < 1) && (0 < s && (t[0] = [c + s * h, f + s * d]), l < 1 && (t[1] = [c + l * h, f + l * d])), !0
                        }
                    }
                }
            }
        }

        function zg(t, n, e, r, i) {
            var o = t[1];
            if (o) return !0;
            var u, a, c = t[0],
                f = t.left,
                s = t.right,
                l = f[0],
                h = f[1],
                d = s[0],
                p = s[1],
                v = (l + d) / 2,
                g = (h + p) / 2;
            if (p === h) {
                if (v < n || r <= v) return;
                if (d < l) {
                    if (c) {
                        if (c[1] >= i) return
                    } else c = [v, e];
                    o = [v, i]
                } else {
                    if (c) {
                        if (c[1] < e) return
                    } else c = [v, i];
                    o = [v, e]
                }
            } else if (a = g - (u = (l - d) / (p - h)) * v, u < -1 || 1 < u)
                if (d < l) {
                    if (c) {
                        if (c[1] >= i) return
                    } else c = [(e - a) / u, e];
                    o = [(i - a) / u, i]
                } else {
                    if (c) {
                        if (c[1] < e) return
                    } else c = [(i - a) / u, i];
                    o = [(e - a) / u, e]
                }
            else if (h < p) {
                if (c) {
                    if (c[0] >= r) return
                } else c = [n, u * n + a];
                o = [r, u * r + a]
            } else {
                if (c) {
                    if (c[0] < n) return
                } else c = [r, u * r + a];
                o = [n, u * n + a]
            }
            return t[0] = c, t[1] = o, !0
        }

        function jg(t, n) {
            return n[+(n.left !== t.site)]
        }
        var Dg, Lg = [];

        function Bg() {
            Tg(this), this.x = this.y = this.arc = this.site = this.cy = null
        }

        function qg(t) {
            var n = t.P,
                e = t.N;
            if (n && e) {
                var r = n.site,
                    i = t.site,
                    o = e.site;
                if (r !== o) {
                    var u = i[0],
                        a = i[1],
                        c = r[0] - u,
                        f = r[1] - a,
                        s = o[0] - u,
                        l = o[1] - a,
                        h = 2 * (c * l - f * s);
                    if (!(-ny <= h)) {
                        var d = c * c + f * f,
                            p = s * s + l * l,
                            v = (l * d - f * p) / h,
                            g = (c * p - s * d) / h,
                            y = Lg.pop() || new Bg;
                        y.arc = t, y.site = i, y.x = v + u, y.y = (y.cy = g + a) + Math.sqrt(v * v + g * g), t.circle = y;
                        for (var b = null, m = Kg._; m;)
                            if (y.y < m.y || y.y === m.y && y.x <= m.x) {
                                if (!m.L) {
                                    b = m.P;
                                    break
                                }
                                m = m.L
                            } else {
                                if (!m.R) {
                                    b = m;
                                    break
                                }
                                m = m.R
                            }
                        Kg.insert(b, y), b || (Dg = y)
                    }
                }
            }
        }

        function Fg(t) {
            var n = t.circle;
            n && (n.P || (Dg = n.N), Kg.remove(n), Lg.push(n), Tg(n), t.circle = null)
        }
        var Ug = [];

        function Hg() {
            Tg(this), this.edge = this.site = this.circle = null
        }

        function Yg(t) {
            var n = Ug.pop() || new Hg;
            return n.site = t, n
        }

        function Vg(t) {
            Fg(t), Zg.remove(t), Ug.push(t), Tg(t)
        }

        function Wg(t) {
            var n = t.circle,
                e = n.x,
                r = n.cy,
                i = [e, r],
                o = t.P,
                u = t.N,
                a = [t];
            Vg(t);
            for (var c = o; c.circle && Math.abs(e - c.circle.x) < ty && Math.abs(r - c.circle.cy) < ty;) o = c.P, a.unshift(c), Vg(c), c = o;
            a.unshift(c), Fg(c);
            for (var f = u; f.circle && Math.abs(e - f.circle.x) < ty && Math.abs(r - f.circle.cy) < ty;) u = f.N, a.push(f), Vg(f), f = u;
            a.push(f), Fg(f);
            var s, l = a.length;
            for (s = 1; s < l; ++s) f = a[s], c = a[s - 1], Rg(f.edge, c.site, f.site, i);
            c = a[0], (f = a[l - 1]).edge = Og(c.site, f.site, null, i), qg(c), qg(f)
        }

        function Gg(t) {
            for (var n, e, r, i, o, u = t[0], a = t[1], c = Zg._; c;)
                if (r = Xg(c, a) - u, ty < r) c = c.L;
                else {
                    if (i = u - $g(c, a), !(ty < i)) {
                        -ty < r ? (n = c.P, e = c) : -ty < i ? e = (n = c).N : n = e = c;
                        break
                    }
                    if (!c.R) {
                        n = c;
                        break
                    }
                    c = c.R
                }
            Jg[(o = t).index] = {
                site: o,
                halfedges: []
            };
            var f = Yg(t);
            if (Zg.insert(n, f), n || e) {
                if (n === e) return Fg(n), e = Yg(n.site), Zg.insert(f, e), f.edge = e.edge = Og(n.site, f.site), qg(n), void qg(e);
                if (e) {
                    Fg(n), Fg(e);
                    var s = n.site,
                        l = s[0],
                        h = s[1],
                        d = t[0] - l,
                        p = t[1] - h,
                        v = e.site,
                        g = v[0] - l,
                        y = v[1] - h,
                        b = 2 * (d * y - p * g),
                        m = d * d + p * p,
                        _ = g * g + y * y,
                        x = [(y * m - p * _) / b + l, (d * _ - g * m) / b + h];
                    Rg(e.edge, s, v, x), f.edge = Og(s, t, null, x), e.edge = Og(t, v, null, x), qg(n), qg(e)
                } else f.edge = Og(n.site, f.site)
            }
        }

        function Xg(t, n) {
            var e = t.site,
                r = e[0],
                i = e[1],
                o = i - n;
            if (!o) return r;
            var u = t.P;
            if (!u) return -1 / 0;
            var a = (e = u.site)[0],
                c = e[1],
                f = c - n;
            if (!f) return a;
            var s = a - r,
                l = 1 / o - 1 / f,
                h = s / f;
            return l ? (-h + Math.sqrt(h * h - 2 * l * (s * s / (-2 * f) - c + f / 2 + i - o / 2))) / l + r : (r + a) / 2
        }

        function $g(t, n) {
            var e = t.N;
            if (e) return Xg(e, n);
            var r = t.site;
            return r[1] === n ? r[0] : 1 / 0
        }
        var Zg, Jg, Kg, Qg, ty = 1e-6,
            ny = 1e-12;

        function ey(t, n) {
            return n[1] - t[1] || n[0] - t[0]
        }

        function ry(t, n) {
            var e, r, i, o = t.sort(ey).pop();
            for (Qg = [], Jg = new Array(t.length), Zg = new Ng, Kg = new Ng;;)
                if (i = Dg, o && (!i || o[1] < i.y || o[1] === i.y && o[0] < i.x)) o[0] === e && o[1] === r || (Gg(o), e = o[0], r = o[1]), o = t.pop();
                else {
                    if (!i) break;
                    Wg(i.arc)
                }
            if (function() {
                    for (var t, n, e, r, i = 0, o = Jg.length; i < o; ++i)
                        if ((t = Jg[i]) && (r = (n = t.halfedges).length)) {
                            var u = new Array(r),
                                a = new Array(r);
                            for (e = 0; e < r; ++e) u[e] = e, a[e] = (c = t, f = Qg[n[e]], h = l = void 0, s = c.site, l = f.left, h = f.right, s === h && (h = l, l = s), h ? Math.atan2(h[1] - l[1], h[0] - l[0]) : (h = s === l ? (l = f[1], f[0]) : (l = f[0], f[1]), Math.atan2(l[0] - h[0], h[1] - l[1])));
                            for (u.sort(function(t, n) {
                                    return a[n] - a[t]
                                }), e = 0; e < r; ++e) a[e] = n[u[e]];
                            for (e = 0; e < r; ++e) n[e] = a[e]
                        }
                    var c, f, s, l, h
                }(), n) {
                var u = +n[0][0],
                    a = +n[0][1],
                    c = +n[1][0],
                    f = +n[1][1];
                ! function(t, n, e, r) {
                    for (var i, o = Qg.length; o--;) zg(i = Qg[o], t, n, e, r) && Ig(i, t, n, e, r) && (Math.abs(i[0][0] - i[1][0]) > ty || Math.abs(i[0][1] - i[1][1]) > ty) || delete Qg[o]
                }(u, a, c, f),
                function(t, n, e, r) {
                    var i, o, u, a, c, f, s, l, h, d, p, v, g, y, b = Jg.length,
                        m = !0;
                    for (i = 0; i < b; ++i)
                        if (o = Jg[i]) {
                            for (u = o.site, a = (c = o.halfedges).length; a--;) Qg[c[a]] || c.splice(a, 1);
                            for (a = 0, f = c.length; a < f;) g = o, p = (d = (y = Qg[c[a]])[+(y.left === g.site)])[0], v = d[1], l = (s = jg(o, Qg[c[++a % f]]))[0], h = s[1], (Math.abs(p - l) > ty || Math.abs(v - h) > ty) && (c.splice(a, 0, Qg.push(Pg(u, d, Math.abs(p - t) < ty && ty < r - v ? [t, Math.abs(l - t) < ty ? h : r] : Math.abs(v - r) < ty && ty < e - p ? [Math.abs(h - r) < ty ? l : e, r] : Math.abs(p - e) < ty && ty < v - n ? [e, Math.abs(l - e) < ty ? h : n] : Math.abs(v - n) < ty && ty < p - t ? [Math.abs(h - n) < ty ? l : t, n] : null)) - 1), ++f);
                            f && (m = !1)
                        }
                    if (m) {
                        var _, x, w, M = 1 / 0;
                        for (i = 0, m = null; i < b; ++i)(o = Jg[i]) && (w = (_ = (u = o.site)[0] - t) * _ + (x = u[1] - n) * x) < M && (M = w, m = o);
                        if (m) {
                            var k = [t, n],
                                E = [t, r],
                                T = [e, r],
                                A = [e, n];
                            m.halfedges.push(Qg.push(Pg(u = m.site, k, E)) - 1, Qg.push(Pg(u, E, T)) - 1, Qg.push(Pg(u, T, A)) - 1, Qg.push(Pg(u, A, k)) - 1)
                        }
                    }
                    for (i = 0; i < b; ++i)(o = Jg[i]) && (o.halfedges.length || delete Jg[i])
                }(u, a, c, f)
            }
            this.edges = Qg, this.cells = Jg, Zg = Kg = Qg = Jg = null
        }
        ry.prototype = {
            constructor: ry,
            polygons: function() {
                var e = this.edges;
                return this.cells.map(function(n) {
                    var t = n.halfedges.map(function(t) {
                        return jg(n, e[t])
                    });
                    return t.data = n.site.data, t
                })
            },
            triangles: function() {
                var h = [],
                    d = this.edges;
                return this.cells.forEach(function(t, n) {
                    if (r = (e = t.halfedges).length)
                        for (var e, r, i, o, u, a, c = t.site, f = -1, s = d[e[r - 1]], l = s.left === c ? s.right : s.left; ++f < r;) i = l, l = (s = d[e[f]]).left === c ? s.right : s.left, i && l && n < i.index && n < l.index && (u = i, a = l, ((o = c)[0] - a[0]) * (u[1] - o[1]) - (o[0] - u[0]) * (a[1] - o[1]) < 0) && h.push([c.data, i.data, l.data])
                }), h
            },
            links: function() {
                return this.edges.filter(function(t) {
                    return t.right
                }).map(function(t) {
                    return {
                        source: t.left.data,
                        target: t.right.data
                    }
                })
            },
            find: function(u, a, t) {
                for (var n, c, f = this, s = f._found || 0, e = f.cells.length; !(c = f.cells[s]);)
                    if (++s >= e) return null;
                for (var r = u - c.site[0], i = a - c.site[1], l = r * r + i * i; c = f.cells[n = s], s = null, c.halfedges.forEach(function(t) {
                        var n = f.edges[t],
                            e = n.left;
                        if (e !== c.site && e || (e = n.right)) {
                            var r = u - e[0],
                                i = a - e[1],
                                o = r * r + i * i;
                            o < l && (l = o, s = e.index)
                        }
                    }), null !== s;);
                return f._found = n, null == t || l <= t * t ? c.site : null
            }
        };
        var iy = function() {
                var i = Mg,
                    o = kg,
                    n = null;

                function e(r) {
                    return new ry(r.map(function(t, n) {
                        var e = [Math.round(i(t, n, r) / ty) * ty, Math.round(o(t, n, r) / ty) * ty];
                        return e.index = n, e.data = t, e
                    }), n)
                }
                return e.polygons = function(t) {
                    return e(t).polygons()
                }, e.links = function(t) {
                    return e(t).links()
                }, e.triangles = function(t) {
                    return e(t).triangles()
                }, e.x = function(t) {
                    return arguments.length ? (i = "function" == typeof t ? t : wg(+t), e) : i
                }, e.y = function(t) {
                    return arguments.length ? (o = "function" == typeof t ? t : wg(+t), e) : o
                }, e.extent = function(t) {
                    return arguments.length ? (n = null == t ? null : [
                        [+t[0][0], +t[0][1]],
                        [+t[1][0], +t[1][1]]
                    ], e) : n && [
                        [n[0][0], n[0][1]],
                        [n[1][0], n[1][1]]
                    ]
                }, e.size = function(t) {
                    return arguments.length ? (n = null == t ? null : [
                        [0, 0],
                        [+t[0], +t[1]]
                    ], e) : n && [n[1][0] - n[0][0], n[1][1] - n[0][1]]
                }, e
            },
            oy = function(t) {
                return function() {
                    return t
                }
            };

        function uy(t, n, e) {
            this.target = t, this.type = n, this.transform = e
        }

        function ay(t, n, e) {
            this.k = t, this.x = n, this.y = e
        }
        ay.prototype = {
            constructor: ay,
            scale: function(t) {
                return 1 === t ? this : new ay(this.k * t, this.x, this.y)
            },
            translate: function(t, n) {
                return 0 === t & 0 === n ? this : new ay(this.k, this.x + this.k * t, this.y + this.k * n)
            },
            apply: function(t) {
                return [t[0] * this.k + this.x, t[1] * this.k + this.y]
            },
            applyX: function(t) {
                return t * this.k + this.x
            },
            applyY: function(t) {
                return t * this.k + this.y
            },
            invert: function(t) {
                return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k]
            },
            invertX: function(t) {
                return (t - this.x) / this.k
            },
            invertY: function(t) {
                return (t - this.y) / this.k
            },
            rescaleX: function(t) {
                return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t))
            },
            rescaleY: function(t) {
                return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t))
            },
            toString: function() {
                return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
            }
        };
        var cy = new ay(1, 0, 0);

        function fy(t) {
            return t.__zoom || cy
        }

        function sy() {
            ct.event.stopImmediatePropagation()
        }
        fy.prototype = ay.prototype;
        var ly = function() {
            ct.event.preventDefault(), ct.event.stopImmediatePropagation()
        };

        function hy() {
            return !ct.event.button
        }

        function dy() {
            var t, n, e = this;
            return n = e instanceof SVGElement ? (t = (e = e.ownerSVGElement || e).width.baseVal.value, e.height.baseVal.value) : (t = e.clientWidth, e.clientHeight), [
                [0, 0],
                [t, n]
            ]
        }

        function py() {
            return this.__zoom || cy
        }

        function vy() {
            return -ct.event.deltaY * (ct.event.deltaMode ? 120 : 1) / 500
        }

        function gy() {
            return "ontouchstart" in this
        }

        function yy(t, n, e) {
            var r = t.invertX(n[0][0]) - e[0][0],
                i = t.invertX(n[1][0]) - e[1][0],
                o = t.invertY(n[0][1]) - e[0][1],
                u = t.invertY(n[1][1]) - e[1][1];
            return t.translate(r < i ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), o < u ? (o + u) / 2 : Math.min(0, o) || Math.max(0, u))
        }
        var by = function() {
            var d, o, a = hy,
                s = dy,
                p = yy,
                i = vy,
                n = gy,
                u = [0, 1 / 0],
                v = [
                    [-1 / 0, -1 / 0],
                    [1 / 0, 1 / 0]
                ],
                c = 250,
                l = _t.v,
                f = [],
                e = Object(at.a)("start", "zoom", "end"),
                h = 500,
                g = 150,
                y = 0;

            function b(t) {
                t.property("__zoom", py).on("wheel.zoom", r).on("mousedown.zoom", E).on("dblclick.zoom", T).filter(n).on("touchstart.zoom", A).on("touchmove.zoom", S).on("touchend.zoom touchcancel.zoom", C).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)")
            }

            function m(t, n) {
                return (n = Math.max(u[0], Math.min(u[1], n))) === t.k ? t : new ay(n, t.x, t.y)
            }

            function _(t, n, e) {
                var r = n[0] - e[0] * t.k,
                    i = n[1] - e[1] * t.k;
                return r === t.x && i === t.y ? t : new ay(t.k, r, i)
            }

            function x(t) {
                return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2]
            }

            function w(t, c, f) {
                t.on("start.zoom", function() {
                    M(this, arguments).start()
                }).on("interrupt.zoom end.zoom", function() {
                    M(this, arguments).end()
                }).tween("zoom", function() {
                    var t = arguments,
                        r = M(this, t),
                        n = s.apply(this, t),
                        i = f || x(n),
                        o = Math.max(n[1][0] - n[0][0], n[1][1] - n[0][1]),
                        e = this.__zoom,
                        u = "function" == typeof c ? c.apply(this, t) : c,
                        a = l(e.invert(i).concat(o / e.k), u.invert(i).concat(o / u.k));
                    return function(t) {
                        if (1 === t) t = u;
                        else {
                            var n = a(t),
                                e = o / n[2];
                            t = new ay(e, i[0] - n[0] * e, i[1] - n[1] * e)
                        }
                        r.zoom(null, t)
                    }
                })
            }

            function M(t, n) {
                for (var e, r = 0, i = f.length; r < i; ++r)
                    if ((e = f[r]).that === t) return e;
                return new k(t, n)
            }

            function k(t, n) {
                this.that = t, this.args = n, this.index = -1, this.active = 0, this.extent = s.apply(t, n)
            }

            function r() {
                if (a.apply(this, arguments)) {
                    var t = M(this, arguments),
                        n = this.__zoom,
                        e = Math.max(u[0], Math.min(u[1], n.k * Math.pow(2, i.apply(this, arguments)))),
                        r = Object(ct.mouse)(this);
                    if (t.wheel) t.mouse[0][0] === r[0] && t.mouse[0][1] === r[1] || (t.mouse[1] = n.invert(t.mouse[0] = r)), clearTimeout(t.wheel);
                    else {
                        if (n.k === e) return;
                        t.mouse = [r, n.invert(r)], Object(xt.interrupt)(this), t.start()
                    }
                    ly(), t.wheel = setTimeout(function() {
                        t.wheel = null, t.end()
                    }, g), t.zoom("mouse", p(_(m(n, e), t.mouse[0], t.mouse[1]), t.extent, v))
                }
            }

            function E() {
                if (!o && a.apply(this, arguments)) {
                    var e = M(this, arguments),
                        t = Object(ct.select)(ct.event.view).on("mousemove.zoom", function() {
                            if (ly(), !e.moved) {
                                var t = ct.event.clientX - r,
                                    n = ct.event.clientY - i;
                                e.moved = y < t * t + n * n
                            }
                            e.zoom("mouse", p(_(e.that.__zoom, e.mouse[0] = Object(ct.mouse)(e.that), e.mouse[1]), e.extent, v))
                        }, !0).on("mouseup.zoom", function() {
                            t.on("mousemove.zoom mouseup.zoom", null), ht(ct.event.view, e.moved), ly(), e.end()
                        }, !0),
                        n = Object(ct.mouse)(this),
                        r = ct.event.clientX,
                        i = ct.event.clientY;
                    lt(ct.event.view), sy(), e.mouse = [n, this.__zoom.invert(n)], Object(xt.interrupt)(this), e.start()
                }
            }

            function T() {
                if (a.apply(this, arguments)) {
                    var t = this.__zoom,
                        n = Object(ct.mouse)(this),
                        e = t.invert(n),
                        r = t.k * (ct.event.shiftKey ? .5 : 2),
                        i = p(_(m(t, r), n, e), s.apply(this, arguments), v);
                    ly(), 0 < c ? Object(ct.select)(this).transition().duration(c).call(w, i, n) : Object(ct.select)(this).call(b.transform, i)
                }
            }

            function A() {
                if (a.apply(this, arguments)) {
                    var t, n, e, r, i = M(this, arguments),
                        o = ct.event.changedTouches,
                        u = o.length;
                    for (sy(), n = 0; n < u; ++n) e = o[n], r = [r = Object(ct.touch)(this, o, e.identifier), this.__zoom.invert(r), e.identifier], i.touch0 ? i.touch1 || (i.touch1 = r) : (i.touch0 = r, t = !0);
                    if (d && (d = clearTimeout(d), !i.touch1)) return i.end(), void((r = Object(ct.select)(this).on("dblclick.zoom")) && r.apply(this, arguments));
                    t && (d = setTimeout(function() {
                        d = null
                    }, h), Object(xt.interrupt)(this), i.start())
                }
            }

            function S() {
                var t, n, e, r, i = M(this, arguments),
                    o = ct.event.changedTouches,
                    u = o.length;
                for (ly(), d && (d = clearTimeout(d)), t = 0; t < u; ++t) n = o[t], e = Object(ct.touch)(this, o, n.identifier), i.touch0 && i.touch0[2] === n.identifier ? i.touch0[0] = e : i.touch1 && i.touch1[2] === n.identifier && (i.touch1[0] = e);
                if (n = i.that.__zoom, i.touch1) {
                    var a = i.touch0[0],
                        c = i.touch0[1],
                        f = i.touch1[0],
                        s = i.touch1[1],
                        l = (l = f[0] - a[0]) * l + (l = f[1] - a[1]) * l,
                        h = (h = s[0] - c[0]) * h + (h = s[1] - c[1]) * h;
                    n = m(n, Math.sqrt(l / h)), e = [(a[0] + f[0]) / 2, (a[1] + f[1]) / 2], r = [(c[0] + s[0]) / 2, (c[1] + s[1]) / 2]
                } else {
                    if (!i.touch0) return;
                    e = i.touch0[0], r = i.touch0[1]
                }
                i.zoom("touch", p(_(n, e, r), i.extent, v))
            }

            function C() {
                var t, n, e = M(this, arguments),
                    r = ct.event.changedTouches,
                    i = r.length;
                for (sy(), o && clearTimeout(o), o = setTimeout(function() {
                        o = null
                    }, h), t = 0; t < i; ++t) n = r[t], e.touch0 && e.touch0[2] === n.identifier ? delete e.touch0 : e.touch1 && e.touch1[2] === n.identifier && delete e.touch1;
                e.touch1 && !e.touch0 && (e.touch0 = e.touch1, delete e.touch1), e.touch0 ? e.touch0[1] = this.__zoom.invert(e.touch0[0]) : e.end()
            }
            return b.transform = function(t, n) {
                var e = t.selection ? t.selection() : t;
                e.property("__zoom", py), t !== e ? w(t, n) : e.interrupt().each(function() {
                    M(this, arguments).start().zoom(null, "function" == typeof n ? n.apply(this, arguments) : n).end()
                })
            }, b.scaleBy = function(t, n) {
                b.scaleTo(t, function() {
                    return this.__zoom.k * ("function" == typeof n ? n.apply(this, arguments) : n)
                })
            }, b.scaleTo = function(t, o) {
                b.transform(t, function() {
                    var t = s.apply(this, arguments),
                        n = this.__zoom,
                        e = x(t),
                        r = n.invert(e),
                        i = "function" == typeof o ? o.apply(this, arguments) : o;
                    return p(_(m(n, i), e, r), t, v)
                })
            }, b.translateBy = function(t, n, e) {
                b.transform(t, function() {
                    return p(this.__zoom.translate("function" == typeof n ? n.apply(this, arguments) : n, "function" == typeof e ? e.apply(this, arguments) : e), s.apply(this, arguments), v)
                })
            }, b.translateTo = function(t, r, i) {
                b.transform(t, function() {
                    var t = s.apply(this, arguments),
                        n = this.__zoom,
                        e = x(t);
                    return p(cy.translate(e[0], e[1]).scale(n.k).translate("function" == typeof r ? -r.apply(this, arguments) : -r, "function" == typeof i ? -i.apply(this, arguments) : -i), t, v)
                })
            }, k.prototype = {
                start: function() {
                    return 1 == ++this.active && (this.index = f.push(this) - 1, this.emit("start")), this
                },
                zoom: function(t, n) {
                    return this.mouse && "mouse" !== t && (this.mouse[1] = n.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = n.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = n.invert(this.touch1[0])), this.that.__zoom = n, this.emit("zoom"), this
                },
                end: function() {
                    return 0 == --this.active && (f.splice(this.index, 1), this.index = -1, this.emit("end")), this
                },
                emit: function(t) {
                    Object(ct.customEvent)(new uy(b, t, this.that.__zoom), e.apply, e, [t, this.that, this.args])
                }
            }, b.wheelDelta = function(t) {
                return arguments.length ? (i = "function" == typeof t ? t : oy(+t), b) : i
            }, b.filter = function(t) {
                return arguments.length ? (a = "function" == typeof t ? t : oy(!!t), b) : a
            }, b.touchable = function(t) {
                return arguments.length ? (n = "function" == typeof t ? t : oy(!!t), b) : n
            }, b.extent = function(t) {
                return arguments.length ? (s = "function" == typeof t ? t : oy([
                    [+t[0][0], +t[0][1]],
                    [+t[1][0], +t[1][1]]
                ]), b) : s
            }, b.scaleExtent = function(t) {
                return arguments.length ? (u[0] = +t[0], u[1] = +t[1], b) : [u[0], u[1]]
            }, b.translateExtent = function(t) {
                return arguments.length ? (v[0][0] = +t[0][0], v[1][0] = +t[1][0], v[0][1] = +t[0][1], v[1][1] = +t[1][1], b) : [
                    [v[0][0], v[0][1]],
                    [v[1][0], v[1][1]]
                ]
            }, b.constrain = function(t) {
                return arguments.length ? (p = t, b) : p
            }, b.duration = function(t) {
                return arguments.length ? (c = +t, b) : c
            }, b.interpolate = function(t) {
                return arguments.length ? (l = t, b) : l
            }, b.on = function() {
                var t = e.on.apply(e, arguments);
                return t === e ? b : t
            }, b.clickDistance = function(t) {
                return arguments.length ? (y = (t = +t) * t, b) : Math.sqrt(y)
            }, b
        };
        e.d(n, "version", function() {
            return "5.4.0"
        }), e.d(n, "bisect", function() {
            return v
        }), e.d(n, "bisectRight", function() {
            return i
        }), e.d(n, "bisectLeft", function() {
            return o
        }), e.d(n, "ascending", function() {
            return a
        }), e.d(n, "bisector", function() {
            return k
        }), e.d(n, "cross", function() {
            return c
        }), e.d(n, "descending", function() {
            return f
        }), e.d(n, "deviation", function() {
            return d
        }), e.d(n, "extent", function() {
            return g
        }), e.d(n, "histogram", function() {
            return N
        }), e.d(n, "thresholdFreedmanDiaconis", function() {
            return P
        }), e.d(n, "thresholdScott", function() {
            return R
        }), e.d(n, "thresholdSturges", function() {
            return C
        }), e.d(n, "max", function() {
            return I
        }), e.d(n, "mean", function() {
            return z
        }), e.d(n, "median", function() {
            return j
        }), e.d(n, "merge", function() {
            return D
        }), e.d(n, "min", function() {
            return L
        }), e.d(n, "pairs", function() {
            return u
        }), e.d(n, "permute", function() {
            return B
        }), e.d(n, "quantile", function() {
            return O
        }), e.d(n, "range", function() {
            return E
        }), e.d(n, "scan", function() {
            return q
        }), e.d(n, "shuffle", function() {
            return F
        }), e.d(n, "sum", function() {
            return U
        }), e.d(n, "ticks", function() {
            return T
        }), e.d(n, "tickIncrement", function() {
            return A
        }), e.d(n, "tickStep", function() {
            return S
        }), e.d(n, "transpose", function() {
            return H
        }), e.d(n, "variance", function() {
            return h
        }), e.d(n, "zip", function() {
            return V
        }), e.d(n, "axisTop", function() {
            return rt
        }), e.d(n, "axisRight", function() {
            return it
        }), e.d(n, "axisBottom", function() {
            return ot
        }), e.d(n, "axisLeft", function() {
            return ut
        }), e.d(n, "brush", function() {
            return Wt
        }), e.d(n, "brushX", function() {
            return Yt
        }), e.d(n, "brushY", function() {
            return Vt
        }), e.d(n, "brushSelection", function() {
            return Ht
        }), e.d(n, "chord", function() {
            return tn
        }), e.d(n, "ribbon", function() {
            return gn
        }), e.d(n, "nest", function() {
            return yn.nest
        }), e.d(n, "set", function() {
            return yn.set
        }), e.d(n, "map", function() {
            return yn.map
        }), e.d(n, "keys", function() {
            return yn.keys
        }), e.d(n, "values", function() {
            return yn.values
        }), e.d(n, "entries", function() {
            return yn.entries
        }), e.d(n, "color", function() {
            return bn.a
        }), e.d(n, "rgb", function() {
            return bn.h
        }), e.d(n, "hsl", function() {
            return bn.e
        }), e.d(n, "lab", function() {
            return bn.f
        }), e.d(n, "hcl", function() {
            return bn.d
        }), e.d(n, "lch", function() {
            return bn.g
        }), e.d(n, "gray", function() {
            return bn.c
        }), e.d(n, "cubehelix", function() {
            return bn.b
        }), e.d(n, "contours", function() {
            return Tn
        }), e.d(n, "contourDensity", function() {
            return On
        }), e.d(n, "dispatch", function() {
            return at.a
        }), e.d(n, "drag", function() {
            return mt
        }), e.d(n, "dragDisable", function() {
            return lt
        }), e.d(n, "dragEnable", function() {
            return ht
        }), e.d(n, "dsvFormat", function() {
            return zn
        }), e.d(n, "csvParse", function() {
            return Dn
        }), e.d(n, "csvParseRows", function() {
            return Ln
        }), e.d(n, "csvFormat", function() {
            return Bn
        }), e.d(n, "csvFormatRows", function() {
            return qn
        }), e.d(n, "tsvParse", function() {
            return Un
        }), e.d(n, "tsvParseRows", function() {
            return Hn
        }), e.d(n, "tsvFormat", function() {
            return Yn
        }), e.d(n, "tsvFormatRows", function() {
            return Vn
        }), e.d(n, "easeLinear", function() {
            return Wn.y
        }), e.d(n, "easeQuad", function() {
            return Wn.D
        }), e.d(n, "easeQuadIn", function() {
            return Wn.E
        }), e.d(n, "easeQuadOut", function() {
            return Wn.G
        }), e.d(n, "easeQuadInOut", function() {
            return Wn.F
        }), e.d(n, "easeCubic", function() {
            return Wn.m
        }), e.d(n, "easeCubicIn", function() {
            return Wn.n
        }), e.d(n, "easeCubicOut", function() {
            return Wn.p
        }), e.d(n, "easeCubicInOut", function() {
            return Wn.o
        }), e.d(n, "easePoly", function() {
            return Wn.z
        }), e.d(n, "easePolyIn", function() {
            return Wn.A
        }), e.d(n, "easePolyOut", function() {
            return Wn.C
        }), e.d(n, "easePolyInOut", function() {
            return Wn.B
        }), e.d(n, "easeSin", function() {
            return Wn.H
        }), e.d(n, "easeSinIn", function() {
            return Wn.I
        }), e.d(n, "easeSinOut", function() {
            return Wn.K
        }), e.d(n, "easeSinInOut", function() {
            return Wn.J
        }), e.d(n, "easeExp", function() {
            return Wn.u
        }), e.d(n, "easeExpIn", function() {
            return Wn.v
        }), e.d(n, "easeExpOut", function() {
            return Wn.x
        }), e.d(n, "easeExpInOut", function() {
            return Wn.w
        }), e.d(n, "easeCircle", function() {
            return Wn.i
        }), e.d(n, "easeCircleIn", function() {
            return Wn.j
        }), e.d(n, "easeCircleOut", function() {
            return Wn.l
        }), e.d(n, "easeCircleInOut", function() {
            return Wn.k
        }), e.d(n, "easeBounce", function() {
            return Wn.e
        }), e.d(n, "easeBounceIn", function() {
            return Wn.f
        }), e.d(n, "easeBounceOut", function() {
            return Wn.h
        }), e.d(n, "easeBounceInOut", function() {
            return Wn.g
        }), e.d(n, "easeBack", function() {
            return Wn.a
        }), e.d(n, "easeBackIn", function() {
            return Wn.b
        }), e.d(n, "easeBackOut", function() {
            return Wn.d
        }), e.d(n, "easeBackInOut", function() {
            return Wn.c
        }), e.d(n, "easeElastic", function() {
            return Wn.q
        }), e.d(n, "easeElasticIn", function() {
            return Wn.r
        }), e.d(n, "easeElasticOut", function() {
            return Wn.t
        }), e.d(n, "easeElasticInOut", function() {
            return Wn.s
        }), e.d(n, "blob", function() {
            return Xn
        }), e.d(n, "buffer", function() {
            return Zn
        }), e.d(n, "dsv", function() {
            return te
        }), e.d(n, "csv", function() {
            return ne
        }), e.d(n, "tsv", function() {
            return ee
        }), e.d(n, "image", function() {
            return re
        }), e.d(n, "json", function() {
            return oe
        }), e.d(n, "text", function() {
            return Kn
        }), e.d(n, "xml", function() {
            return ae
        }), e.d(n, "html", function() {
            return ce
        }), e.d(n, "svg", function() {
            return fe
        }), e.d(n, "forceCenter", function() {
            return se
        }), e.d(n, "forceCollide", function() {
            return Me
        }), e.d(n, "forceLink", function() {
            return Te
        }), e.d(n, "forceManyBody", function() {
            return Pe
        }), e.d(n, "forceRadial", function() {
            return Re
        }), e.d(n, "forceSimulation", function() {
            return Oe
        }), e.d(n, "forceX", function() {
            return Ie
        }), e.d(n, "forceY", function() {
            return ze
        }), e.d(n, "formatDefaultLocale", function() {
            return Ze
        }), e.d(n, "format", function() {
            return He
        }), e.d(n, "formatPrefix", function() {
            return Ye
        }), e.d(n, "formatLocale", function() {
            return $e
        }), e.d(n, "formatSpecifier", function() {
            return Be
        }), e.d(n, "precisionFixed", function() {
            return Je
        }), e.d(n, "precisionPrefix", function() {
            return Ke
        }), e.d(n, "precisionRound", function() {
            return Qe
        }), e.d(n, "geoArea", function() {
            return Vr
        }), e.d(n, "geoBounds", function() {
            return Di
        }), e.d(n, "geoCentroid", function() {
            return $i
        }), e.d(n, "geoCircle", function() {
            return uo
        }), e.d(n, "geoClipAntimeridian", function() {
            return bo
        }), e.d(n, "geoClipCircle", function() {
            return mo
        }), e.d(n, "geoClipExtent", function() {
            return Ao
        }), e.d(n, "geoClipRectangle", function() {
            return Mo
        }), e.d(n, "geoContains", function() {
            return Vo
        }), e.d(n, "geoDistance", function() {
            return jo
        }), e.d(n, "geoGraticule", function() {
            return Xo
        }), e.d(n, "geoGraticule10", function() {
            return $o
        }), e.d(n, "geoInterpolate", function() {
            return tu
        }), e.d(n, "geoLength", function() {
            return Ro
        }), e.d(n, "geoPath", function() {
            return Ku
        }), e.d(n, "geoAlbers", function() {
            return ga
        }), e.d(n, "geoAlbersUsa", function() {
            return ya
        }), e.d(n, "geoAzimuthalEqualArea", function() {
            return xa
        }), e.d(n, "geoAzimuthalEqualAreaRaw", function() {
            return _a
        }), e.d(n, "geoAzimuthalEquidistant", function() {
            return Ma
        }), e.d(n, "geoAzimuthalEquidistantRaw", function() {
            return wa
        }), e.d(n, "geoConicConformal", function() {
            return Ca
        }), e.d(n, "geoConicConformalRaw", function() {
            return Sa
        }), e.d(n, "geoConicEqualArea", function() {
            return va
        }), e.d(n, "geoConicEqualAreaRaw", function() {
            return pa
        }), e.d(n, "geoConicEquidistant", function() {
            return Ra
        }), e.d(n, "geoConicEquidistantRaw", function() {
            return Pa
        }), e.d(n, "geoEquirectangular", function() {
            return Oa
        }), e.d(n, "geoEquirectangularRaw", function() {
            return Na
        }), e.d(n, "geoGnomonic", function() {
            return za
        }), e.d(n, "geoGnomonicRaw", function() {
            return Ia
        }), e.d(n, "geoIdentity", function() {
            return Da
        }), e.d(n, "geoProjection", function() {
            return la
        }), e.d(n, "geoProjectionMutator", function() {
            return ha
        }), e.d(n, "geoMercator", function() {
            return Ea
        }), e.d(n, "geoMercatorRaw", function() {
            return ka
        }), e.d(n, "geoNaturalEarth1", function() {
            return Ba
        }), e.d(n, "geoNaturalEarth1Raw", function() {
            return La
        }), e.d(n, "geoOrthographic", function() {
            return Fa
        }), e.d(n, "geoOrthographicRaw", function() {
            return qa
        }), e.d(n, "geoStereographic", function() {
            return Ha
        }), e.d(n, "geoStereographicRaw", function() {
            return Ua
        }), e.d(n, "geoTransverseMercator", function() {
            return Va
        }), e.d(n, "geoTransverseMercatorRaw", function() {
            return Ya
        }), e.d(n, "geoRotation", function() {
            return ro
        }), e.d(n, "geoStream", function() {
            return Dr
        }), e.d(n, "geoTransform", function() {
            return Qu
        }), e.d(n, "cluster", function() {
            return $a
        }), e.d(n, "hierarchy", function() {
            return Ja
        }), e.d(n, "pack", function() {
            return xc
        }), e.d(n, "packSiblings", function() {
            return gc
        }), e.d(n, "packEnclose", function() {
            return rc
        }), e.d(n, "partition", function() {
            return Ac
        }), e.d(n, "stratify", function() {
            return Pc
        }), e.d(n, "tree", function() {
            return Dc
        }), e.d(n, "treemap", function() {
            return Uc
        }), e.d(n, "treemapBinary", function() {
            return Hc
        }), e.d(n, "treemapDice", function() {
            return Tc
        }), e.d(n, "treemapSlice", function() {
            return Lc
        }), e.d(n, "treemapSliceDice", function() {
            return Yc
        }), e.d(n, "treemapSquarify", function() {
            return Fc
        }), e.d(n, "treemapResquarify", function() {
            return Vc
        }), e.d(n, "interpolate", function() {
            return _t.a
        }), e.d(n, "interpolateArray", function() {
            return _t.b
        }), e.d(n, "interpolateBasis", function() {
            return _t.c
        }), e.d(n, "interpolateBasisClosed", function() {
            return _t.d
        }), e.d(n, "interpolateDate", function() {
            return _t.g
        }), e.d(n, "interpolateNumber", function() {
            return _t.m
        }), e.d(n, "interpolateObject", function() {
            return _t.n
        }), e.d(n, "interpolateRound", function() {
            return _t.r
        }), e.d(n, "interpolateString", function() {
            return _t.s
        }), e.d(n, "interpolateTransformCss", function() {
            return _t.t
        }), e.d(n, "interpolateTransformSvg", function() {
            return _t.u
        }), e.d(n, "interpolateZoom", function() {
            return _t.v
        }), e.d(n, "interpolateRgb", function() {
            return _t.o
        }), e.d(n, "interpolateRgbBasis", function() {
            return _t.p
        }), e.d(n, "interpolateRgbBasisClosed", function() {
            return _t.q
        }), e.d(n, "interpolateHsl", function() {
            return _t.j
        }), e.d(n, "interpolateHslLong", function() {
            return _t.k
        }), e.d(n, "interpolateLab", function() {
            return _t.l
        }), e.d(n, "interpolateHcl", function() {
            return _t.h
        }), e.d(n, "interpolateHclLong", function() {
            return _t.i
        }), e.d(n, "interpolateCubehelix", function() {
            return _t.e
        }), e.d(n, "interpolateCubehelixLong", function() {
            return _t.f
        }), e.d(n, "piecewise", function() {
            return _t.w
        }), e.d(n, "quantize", function() {
            return _t.x
        }), e.d(n, "path", function() {
            return sn
        }), e.d(n, "polygonArea", function() {
            return Wc
        }), e.d(n, "polygonCentroid", function() {
            return Gc
        }), e.d(n, "polygonHull", function() {
            return Zc
        }), e.d(n, "polygonContains", function() {
            return Jc
        }), e.d(n, "polygonLength", function() {
            return Kc
        }), e.d(n, "quadtree", function() {
            return ye
        }), e.d(n, "randomUniform", function() {
            return tf
        }), e.d(n, "randomNormal", function() {
            return nf
        }), e.d(n, "randomLogNormal", function() {
            return ef
        }), e.d(n, "randomBates", function() {
            return of
        }), e.d(n, "randomIrwinHall", function() {
            return rf
        }), e.d(n, "randomExponential", function() {
            return uf
        }), e.d(n, "scaleBand", function() {
            return hf
        }), e.d(n, "scalePoint", function() {
            return df
        }), e.d(n, "scaleIdentity", function() {
            return Ef
        }), e.d(n, "scaleLinear", function() {
            return kf
        }), e.d(n, "scaleLog", function() {
            return Rf
        }), e.d(n, "scaleOrdinal", function() {
            return lf
        }), e.d(n, "scaleImplicit", function() {
            return sf
        }), e.d(n, "scalePow", function() {
            return zf
        }), e.d(n, "scaleSqrt", function() {
            return jf
        }), e.d(n, "scaleQuantile", function() {
            return Df
        }), e.d(n, "scaleQuantize", function() {
            return Lf
        }), e.d(n, "scaleThreshold", function() {
            return Bf
        }), e.d(n, "scaleTime", function() {
            return jh
        }), e.d(n, "scaleUtc", function() {
            return Dh
        }), e.d(n, "scaleSequential", function() {
            return Lh
        }), e.d(n, "schemeCategory10", function() {
            return qh
        }), e.d(n, "schemeAccent", function() {
            return Fh
        }), e.d(n, "schemeDark2", function() {
            return Uh
        }), e.d(n, "schemePaired", function() {
            return Hh
        }), e.d(n, "schemePastel1", function() {
            return Yh
        }), e.d(n, "schemePastel2", function() {
            return Vh
        }), e.d(n, "schemeSet1", function() {
            return Wh
        }), e.d(n, "schemeSet2", function() {
            return Gh
        }), e.d(n, "schemeSet3", function() {
            return Xh
        }), e.d(n, "interpolateBrBG", function() {
            return Jh
        }), e.d(n, "schemeBrBG", function() {
            return Zh
        }), e.d(n, "interpolatePRGn", function() {
            return Qh
        }), e.d(n, "schemePRGn", function() {
            return Kh
        }), e.d(n, "interpolatePiYG", function() {
            return nd
        }), e.d(n, "schemePiYG", function() {
            return td
        }), e.d(n, "interpolatePuOr", function() {
            return rd
        }), e.d(n, "schemePuOr", function() {
            return ed
        }), e.d(n, "interpolateRdBu", function() {
            return od
        }), e.d(n, "schemeRdBu", function() {
            return id
        }), e.d(n, "interpolateRdGy", function() {
            return ad
        }), e.d(n, "schemeRdGy", function() {
            return ud
        }), e.d(n, "interpolateRdYlBu", function() {
            return fd
        }), e.d(n, "schemeRdYlBu", function() {
            return cd
        }), e.d(n, "interpolateRdYlGn", function() {
            return ld
        }), e.d(n, "schemeRdYlGn", function() {
            return sd
        }), e.d(n, "interpolateSpectral", function() {
            return dd
        }), e.d(n, "schemeSpectral", function() {
            return hd
        }), e.d(n, "interpolateBuGn", function() {
            return vd
        }), e.d(n, "schemeBuGn", function() {
            return pd
        }), e.d(n, "interpolateBuPu", function() {
            return yd
        }), e.d(n, "schemeBuPu", function() {
            return gd
        }), e.d(n, "interpolateGnBu", function() {
            return md
        }), e.d(n, "schemeGnBu", function() {
            return bd
        }), e.d(n, "interpolateOrRd", function() {
            return xd
        }), e.d(n, "schemeOrRd", function() {
            return _d
        }), e.d(n, "interpolatePuBuGn", function() {
            return Md
        }), e.d(n, "schemePuBuGn", function() {
            return wd
        }), e.d(n, "interpolatePuBu", function() {
            return Ed
        }), e.d(n, "schemePuBu", function() {
            return kd
        }), e.d(n, "interpolatePuRd", function() {
            return Ad
        }), e.d(n, "schemePuRd", function() {
            return Td
        }), e.d(n, "interpolateRdPu", function() {
            return Cd
        }), e.d(n, "schemeRdPu", function() {
            return Sd
        }), e.d(n, "interpolateYlGnBu", function() {
            return Od
        }), e.d(n, "schemeYlGnBu", function() {
            return Nd
        }), e.d(n, "interpolateYlGn", function() {
            return Rd
        }), e.d(n, "schemeYlGn", function() {
            return Pd
        }), e.d(n, "interpolateYlOrBr", function() {
            return zd
        }), e.d(n, "schemeYlOrBr", function() {
            return Id
        }), e.d(n, "interpolateYlOrRd", function() {
            return Dd
        }), e.d(n, "schemeYlOrRd", function() {
            return jd
        }), e.d(n, "interpolateBlues", function() {
            return Bd
        }), e.d(n, "schemeBlues", function() {
            return Ld
        }), e.d(n, "interpolateGreens", function() {
            return Fd
        }), e.d(n, "schemeGreens", function() {
            return qd
        }), e.d(n, "interpolateGreys", function() {
            return Hd
        }), e.d(n, "schemeGreys", function() {
            return Ud
        }), e.d(n, "interpolatePurples", function() {
            return Vd
        }), e.d(n, "schemePurples", function() {
            return Yd
        }), e.d(n, "interpolateReds", function() {
            return Gd
        }), e.d(n, "schemeReds", function() {
            return Wd
        }), e.d(n, "interpolateOranges", function() {
            return $d
        }), e.d(n, "schemeOranges", function() {
            return Xd
        }), e.d(n, "interpolateCubehelixDefault", function() {
            return Zd
        }), e.d(n, "interpolateRainbow", function() {
            return tp
        }), e.d(n, "interpolateWarm", function() {
            return Jd
        }), e.d(n, "interpolateCool", function() {
            return Kd
        }), e.d(n, "interpolateSinebow", function() {
            return ip
        }), e.d(n, "interpolateViridis", function() {
            return up
        }), e.d(n, "interpolateMagma", function() {
            return ap
        }), e.d(n, "interpolateInferno", function() {
            return cp
        }), e.d(n, "interpolatePlasma", function() {
            return fp
        }), e.d(n, "create", function() {
            return ct.create
        }), e.d(n, "creator", function() {
            return ct.creator
        }), e.d(n, "local", function() {
            return ct.local
        }), e.d(n, "matcher", function() {
            return ct.matcher
        }), e.d(n, "mouse", function() {
            return ct.mouse
        }), e.d(n, "namespace", function() {
            return ct.namespace
        }), e.d(n, "namespaces", function() {
            return ct.namespaces
        }), e.d(n, "clientPoint", function() {
            return ct.clientPoint
        }), e.d(n, "select", function() {
            return ct.select
        }), e.d(n, "selectAll", function() {
            return ct.selectAll
        }), e.d(n, "selection", function() {
            return ct.selection
        }), e.d(n, "selector", function() {
            return ct.selector
        }), e.d(n, "selectorAll", function() {
            return ct.selectorAll
        }), e.d(n, "style", function() {
            return ct.style
        }), e.d(n, "touch", function() {
            return ct.touch
        }), e.d(n, "touches", function() {
            return ct.touches
        }), e.d(n, "window", function() {
            return ct.window
        }), e.d(n, "event", function() {
            return ct.event
        }), e.d(n, "customEvent", function() {
            return ct.customEvent
        }), e.d(n, "arc", function() {
            return Cp
        }), e.d(n, "area", function() {
            return zp
        }), e.d(n, "line", function() {
            return Ip
        }), e.d(n, "pie", function() {
            return Lp
        }), e.d(n, "areaRadial", function() {
            return Yp
        }), e.d(n, "radialArea", function() {
            return Yp
        }), e.d(n, "lineRadial", function() {
            return Hp
        }), e.d(n, "radialLine", function() {
            return Hp
        }), e.d(n, "pointRadial", function() {
            return Vp
        }), e.d(n, "linkHorizontal", function() {
            return Qp
        }), e.d(n, "linkVertical", function() {
            return tv
        }), e.d(n, "linkRadial", function() {
            return nv
        }), e.d(n, "symbol", function() {
            return _v
        }), e.d(n, "symbols", function() {
            return mv
        }), e.d(n, "symbolCircle", function() {
            return ev
        }), e.d(n, "symbolCross", function() {
            return rv
        }), e.d(n, "symbolDiamond", function() {
            return uv
        }), e.d(n, "symbolSquare", function() {
            return lv
        }), e.d(n, "symbolStar", function() {
            return sv
        }), e.d(n, "symbolTriangle", function() {
            return dv
        }), e.d(n, "symbolWye", function() {
            return bv
        }), e.d(n, "curveBasisClosed", function() {
            return Tv
        }), e.d(n, "curveBasisOpen", function() {
            return Sv
        }), e.d(n, "curveBasis", function() {
            return kv
        }), e.d(n, "curveBundle", function() {
            return Nv
        }), e.d(n, "curveCardinalClosed", function() {
            return zv
        }), e.d(n, "curveCardinalOpen", function() {
            return Dv
        }), e.d(n, "curveCardinal", function() {
            return Rv
        }), e.d(n, "curveCatmullRomClosed", function() {
            return Uv
        }), e.d(n, "curveCatmullRomOpen", function() {
            return Yv
        }), e.d(n, "curveCatmullRom", function() {
            return qv
        }), e.d(n, "curveLinearClosed", function() {
            return Wv
        }), e.d(n, "curveLinear", function() {
            return Op
        }), e.d(n, "curveMonotoneX", function() {
            return tg
        }), e.d(n, "curveMonotoneY", function() {
            return ng
        }), e.d(n, "curveNatural", function() {
            return ig
        }), e.d(n, "curveStep", function() {
            return ug
        }), e.d(n, "curveStepAfter", function() {
            return cg
        }), e.d(n, "curveStepBefore", function() {
            return ag
        }), e.d(n, "stack", function() {
            return hg
        }), e.d(n, "stackOffsetExpand", function() {
            return dg
        }), e.d(n, "stackOffsetDiverging", function() {
            return pg
        }), e.d(n, "stackOffsetNone", function() {
            return fg
        }), e.d(n, "stackOffsetSilhouette", function() {
            return vg
        }), e.d(n, "stackOffsetWiggle", function() {
            return gg
        }), e.d(n, "stackOrderAscending", function() {
            return yg
        }), e.d(n, "stackOrderDescending", function() {
            return mg
        }), e.d(n, "stackOrderInsideOut", function() {
            return _g
        }), e.d(n, "stackOrderNone", function() {
            return sg
        }), e.d(n, "stackOrderReverse", function() {
            return xg
        }), e.d(n, "timeInterval", function() {
            return Uf
        }), e.d(n, "timeMillisecond", function() {
            return Yf
        }), e.d(n, "timeMilliseconds", function() {
            return Vf
        }), e.d(n, "utcMillisecond", function() {
            return Yf
        }), e.d(n, "utcMilliseconds", function() {
            return Vf
        }), e.d(n, "timeSecond", function() {
            return $f
        }), e.d(n, "timeSeconds", function() {
            return Zf
        }), e.d(n, "utcSecond", function() {
            return $f
        }), e.d(n, "utcSeconds", function() {
            return Zf
        }), e.d(n, "timeMinute", function() {
            return Kf
        }), e.d(n, "timeMinutes", function() {
            return Qf
        }), e.d(n, "timeHour", function() {
            return ns
        }), e.d(n, "timeHours", function() {
            return es
        }), e.d(n, "timeDay", function() {
            return is
        }), e.d(n, "timeDays", function() {
            return os
        }), e.d(n, "timeWeek", function() {
            return as
        }), e.d(n, "timeWeeks", function() {
            return ps
        }), e.d(n, "timeSunday", function() {
            return as
        }), e.d(n, "timeSundays", function() {
            return ps
        }), e.d(n, "timeMonday", function() {
            return cs
        }), e.d(n, "timeMondays", function() {
            return vs
        }), e.d(n, "timeTuesday", function() {
            return fs
        }), e.d(n, "timeTuesdays", function() {
            return gs
        }), e.d(n, "timeWednesday", function() {
            return ss
        }), e.d(n, "timeWednesdays", function() {
            return ys
        }), e.d(n, "timeThursday", function() {
            return ls
        }), e.d(n, "timeThursdays", function() {
            return bs
        }), e.d(n, "timeFriday", function() {
            return hs
        }), e.d(n, "timeFridays", function() {
            return ms
        }), e.d(n, "timeSaturday", function() {
            return ds
        }), e.d(n, "timeSaturdays", function() {
            return _s
        }), e.d(n, "timeMonth", function() {
            return ws
        }), e.d(n, "timeMonths", function() {
            return Ms
        }), e.d(n, "timeYear", function() {
            return Es
        }), e.d(n, "timeYears", function() {
            return Ts
        }), e.d(n, "utcMinute", function() {
            return Ss
        }), e.d(n, "utcMinutes", function() {
            return Cs
        }), e.d(n, "utcHour", function() {
            return Os
        }), e.d(n, "utcHours", function() {
            return Ps
        }), e.d(n, "utcDay", function() {
            return Is
        }), e.d(n, "utcDays", function() {
            return zs
        }), e.d(n, "utcWeek", function() {
            return Ds
        }), e.d(n, "utcWeeks", function() {
            return Ys
        }), e.d(n, "utcSunday", function() {
            return Ds
        }), e.d(n, "utcSundays", function() {
            return Ys
        }), e.d(n, "utcMonday", function() {
            return Ls
        }), e.d(n, "utcMondays", function() {
            return Vs
        }), e.d(n, "utcTuesday", function() {
            return Bs
        }), e.d(n, "utcTuesdays", function() {
            return Ws
        }), e.d(n, "utcWednesday", function() {
            return qs
        }), e.d(n, "utcWednesdays", function() {
            return Gs
        }), e.d(n, "utcThursday", function() {
            return Fs
        }), e.d(n, "utcThursdays", function() {
            return Xs
        }), e.d(n, "utcFriday", function() {
            return Us
        }), e.d(n, "utcFridays", function() {
            return $s
        }), e.d(n, "utcSaturday", function() {
            return Hs
        }), e.d(n, "utcSaturdays", function() {
            return Zs
        }), e.d(n, "utcMonth", function() {
            return Ks
        }), e.d(n, "utcMonths", function() {
            return Qs
        }), e.d(n, "utcYear", function() {
            return nl
        }), e.d(n, "utcYears", function() {
            return el
        }), e.d(n, "timeFormatDefaultLocale", function() {
            return wh
        }), e.d(n, "timeFormat", function() {
            return cl
        }), e.d(n, "timeParse", function() {
            return fl
        }), e.d(n, "utcFormat", function() {
            return sl
        }), e.d(n, "utcParse", function() {
            return ll
        }), e.d(n, "timeFormatLocale", function() {
            return ul
        }), e.d(n, "isoFormat", function() {
            return kh
        }), e.d(n, "isoParse", function() {
            return Eh
        }), e.d(n, "now", function() {
            return Ae.b
        }), e.d(n, "timer", function() {
            return Ae.d
        }), e.d(n, "timerFlush", function() {
            return Ae.e
        }), e.d(n, "timeout", function() {
            return Ae.c
        }), e.d(n, "interval", function() {
            return Ae.a
        }), e.d(n, "transition", function() {
            return xt.transition
        }), e.d(n, "active", function() {
            return xt.active
        }), e.d(n, "interrupt", function() {
            return xt.interrupt
        }), e.d(n, "voronoi", function() {
            return iy
        }), e.d(n, "zoom", function() {
            return by
        }), e.d(n, "zoomTransform", function() {
            return fy
        }), e.d(n, "zoomIdentity", function() {
            return cy
        })
    }, function(t, n, e) {
        e(13), e(20), e(21), e(22), t.exports = e(23)
    }, function(t, n, e) {
        "use strict";
        var r = u(e(14)),
            i = u(e(15)),
            o = u(e(16));

        function u(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }! function() {
            var t = window.location.pathname;
            if ("/index.html" !== t && "/" !== t || (0, r.default)(), "/about.html" === t && (0, i.default)(), "/trending.html" === t && (0, o.default)(), "/trending_log.html" === t) {
                (0, o.default)({
                    heightScaleType: "scaleLog",
                    heightRange: [220, 450],
                    flower: {
                        id: "flowerCenter",
                        stem: "#00594C",
                        center: {
                            colors: ["#004439", "#004B40", "#005246", "#00594C"],
                            radius: [35, 25, 15, 5]
                        },
                        strokeWidthScale: 100,
                        forceOffset: {
                            widthOffset: 1.77,
                            heightOffset: 1.775
                        },
                        widthOffset: 2.3,
                        heightOffset: 2.6
                    },
                    timeKey: {
                        x: 312,
                        y: 286,
                        width: 200,
                        height: 200
                    },
                    positionsFile: "seeds_positions_log.json",
                    viewBox: {
                        x: 0,
                        y: 0,
                        width: 1e3,
                        height: 1e3
                    },
                    angleRange: function(t) {
                        return [t - .1, t + 2 * Math.PI - .5]
                    }
                })
            }
        }()
    }, function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = function() {
            t = document.querySelector("#intro-video"), n = "audio-icon", (0, u.select)(".audio-icon").on("click", function() {
                t.muted = !t.muted, (0, u.select)(this).attr("class", t.muted ? n : n + " " + n + "-enabled"), (0, a.trackEvent)("Intro", "Mute Button", t.muted ? "Audio Muted" : "Audio Unmuted")
            }), (0, u.select)(".intro-link-text").on("click", function() {
                (0, a.trackEvent)("Intro", "Link", "Text")
            }), (0, u.select)(".intro-link-icon").on("click", function() {
                (0, a.trackEvent)("Intro", "Link", "Icon")
            }), (0, u.select)(".intro-content").style("opacity", 1), (0, u.select)(".animate-wrapper-0").transition(0).style("display", "block"), (0, u.selectAll)(".animate-text-0").style("opacity", 0).transition().delay(0).duration(c.duration).style("opacity", 1);
            var t, n;
            var e = function(t) {
                return c.duration + c.textDelay + c.textIncrementDelay * t
            };
            (0, u.selectAll)(".animate-text-1").style("display", "inline").style("opacity", 0).transition().delay(function(t, n) {
                return e(n)
            }).duration(c.duration).style("opacity", 1).on("end", function(t, n) {
                if (1 === n) {
                    var e = document.querySelector("#intro-video");
                    e.play()
                }
            });
            var r = e(2) + c.duration;
            (0, u.selectAll)(".animate-text-1").transition().delay(r).duration(c.duration / 2).style("opacity", 0), (0, u.select)(".animate-wrapper-0").transition(0).delay(r + c.duration / 2 + 10).style("display", "none"), (0, u.select)(".animate-wrapper-1").transition(0).delay(r + c.duration / 2 + 10).style("display", "block");
            var i = function(t) {
                return r + c.textDelay + c.textIncrementDelay * t
            };
            (0, u.selectAll)(".animate-text-2").style("display", "block").style("opacity", 0).transition().delay(function(t, n) {
                return i(n)
            }).duration(c.duration).style("opacity", 1);
            var o = i(1) + c.duration;
            (0, u.selectAll)(".animate-text-3").style("display", "block").style("opacity", 0).transition().delay(o).duration(c.duration).style("opacity", 1), (0, u.selectAll)(".animate-text-4").style("opacity", 0).transition().delay(function(t, n) {
                return o + c.textIncrementDelay
            }).duration(c.duration).style("opacity", 1)
        };
        var u = e(0);
        e(6);
        var a = e(8),
            c = {
                duration: 800,
                textDelay: 400,
                textIncrementDelay: 1e3
            };
        t.exports = n.default
    }, function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = function() {
            var t = "About";
            (0, p.trackPageRead)(t), (0, p.trackSocialShare)(t), (0, p.trackNav)(t);
            var n = !1,
                e = !1,
                r = !1,
                i = !1,
                o = !1,
                u = !1,
                a = !1;
            window.addEventListener("scroll", (0, h.debounce)(200, function() {
                !n && (0, d.elementInView)(".about-description") && (n = !0, (0, p.trackEvent)(t, "Section Enter", "About Description")), (0, d.isMobile)(880) ? (!e && (0, d.elementInView)(".about-viz-trending") && (e = !0, (0, p.trackEvent)(t, "Section Enter", "About Viz Trending")), !r && (0, d.elementInView)(".about-viz-spreading") && (r = !0, (0, p.trackEvent)(t, "Section Enter", "About Viz Spreading")), !i && (0, d.elementInView)(".about-viz-rooting") && (i = !0, (0, p.trackEvent)(t, "Section Enter", "About Viz Rooting"))) : !o && (0, d.elementInView)(".about-viz-list") && (o = !0, (0, p.trackEvent)(t, "Section Enter", "About Viz List")), !u && (0, d.elementInView)(".about-authors") && (u = !0, (0, p.trackEvent)(t, "Section Enter", "About Authors")), !a && (0, d.elementInView)(".about-data") && (a = !0, (0, p.trackEvent)(t, "Section Enter", "About Data"))
            }));
            var c = "Link - Trending";
            (0, l.select)(".link-img-trending").on("click", function() {
                return (0, p.trackEvent)(t, c, "Image")
            }), (0, l.select)(".link-icon-trending").on("click", function() {
                return (0, p.trackEvent)(t, c, "Icon")
            }), (0, l.select)(".link-text-trending").on("click", function() {
                return (0, p.trackEvent)(t, c, "Text")
            }), (0, l.select)(".link-explore-trending").on("click", function() {
                return (0, p.trackEvent)(t, c, "Explore")
            }), (0, l.select)(".link-data-trending").on("click", function() {
                return (0, p.trackEvent)(t, c, "About Data")
            });
            var f = "Link - Spreading";
            (0, l.select)(".link-img-spreading").on("click", function() {
                return (0, p.trackEvent)(t, f, "Image")
            }), (0, l.select)(".link-icon-spreading").on("click", function() {
                return (0, p.trackEvent)(t, f, "Icon")
            }), (0, l.select)(".link-text-spreading").on("click", function() {
                return (0, p.trackEvent)(t, f, "Text")
            });
            var s = "Link - Rooting";
            (0, l.select)(".link-img-rooting").on("click", function() {
                return (0, p.trackEvent)(t, s, "Image")
            }), (0, l.select)(".link-icon-rooting").on("click", function() {
                return (0, p.trackEvent)(t, s, "Icon")
            }), (0, l.select)(".link-text-rooting").on("click", function() {
                return (0, p.trackEvent)(t, s, "Text")
            }), (0, l.select)(".link-author-twitter-val").on("click", function() {
                return (0, p.trackEvent)(t, "Author - Twitter", "Valentina")
            }), (0, l.select)(".link-author-email-val").on("click", function() {
                return (0, p.trackEvent)(t, "Author - Email", "Valentina")
            }), (0, l.select)(".link-author-twitter-luc").on("click", function() {
                return (0, p.trackEvent)(t, "Author - Twitter", "Lucia")
            }), (0, l.select)(".link-author-email-luc").on("click", function() {
                return (0, p.trackEvent)(t, "Author - Email", "Lucia")
            }), (0, l.select)(".link-external-wp").on("click", function() {
                return (0, p.trackEvent)(t, "Link - Washington Post", "About Data")
            }), (0, l.select)(".link-external-erin").on("click", function() {
                return (0, p.trackEvent)(t, "Link - Erin Twitter", "Thanks")
            }), (0, l.select)(".link-external-sn").on("click", function() {
                return (0, p.trackEvent)(t, "Link - Signal Noise", "Thanks")
            }), (0, l.select)(".link-external-exhibition").on("click", function() {
                return (0, p.trackEvent)(t, "Link - Data Obscura", "Thanks")
            })
        };
        var l = e(0),
            h = e(9),
            d = e(10),
            p = e(8);
        t.exports = n.default
    }, function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = function(t) {
            t && (Z = t.heightScaleType, J = t.heightRange, Q = t.flower, $ = t.timeKey, C = t.positionsFile, V = t.viewBox, K = t.angleRange);
            var u = (0, m.default)();
            window.history.scrollRestoration = "manual", window.scrollTo(0, 0), window.addEventListener("resize", (0, _.debounce)(200, function() {
                var t = (0, B.getWindowDimensions)(),
                    n = t.width,
                    e = t.height,
                    r = M === e || 200 < Math.abs(M - e);
                if (r) {
                    D.select("#" + R).selectAll("*").remove();
                    var i = Ot();
                    Pt(i);
                    yt = Et(i.mainSvgSize, !1), gt = kt(ft, x, !1);
                    var o = parseInt(D.select(".bg-green").style("opacity"), 10);
                    1 === o && (At(!0), gt.disableAll()), n < 700 && (clearInterval(w), gt.hideTooltip())
                }
                u.resize()
            }));
            var a = void 0;
            window.addEventListener("scroll", (0, _.debounce)(200, function(t) {
                var n = document.querySelector(".step-empty"),
                    e = D.select(".bg-green"),
                    r = parseInt(e.style("opacity"), 10),
                    i = 0 < a - window.scrollY;
                if (window.scrollY < n.offsetTop && i && 1 === r) {
                    var o = D.selectAll(".overlay");
                    Ct(e, o)
                }
                window.scrollY > n.offsetTop && !i && 0 === r && St(e), a = window.scrollY
            }));
            var n = Ot();
            Pt(n), g = C, y = n.mainSvgSize, b = n.marginSide, document.querySelector("#" + R) && (yt = Et(y, b), x ? D.json(S).then(function(t) {
                var e;
                wt(at = t), e = "timestamp", at.sort(function(t, n) {
                    return t[e] - n[e]
                }), ft = Mt(at), gt = kt(ft)
            }) : xt(g)), i = document.querySelectorAll(".step")[1], D.select("#" + O).on("click", function() {
                window.scrollTo(0, i.offsetTop), Nt({
                    index: 0
                }), At(!0), (0, q.trackEvent)("Trending", "Button - Explore Timeline")
            }), D.select("#" + P).on("click", function() {
                window.scrollTo(0, 0), At(!1), (0, q.trackEvent)("Trending", "Button - Last Step Desktop - Explore")
            }), h = n.vizSize, d = n.marginSide, p = D.select(".key-overlay"), v = function(o) {
                p.transition().duration(1e3).style("opacity", o ? 1 : 0).on("start", function() {
                    if (o) {
                        p.style("display", "block");
                        var t = document.querySelector(".key-overlay-picture").offsetWidth,
                            n = V.height / h,
                            e = gt.scales.r,
                            r = e.range()[0] / n;
                        D.select(".key-overlay-followers-min").attr("cx", 15).attr("r", r);
                        var i = e.range()[1] / n;
                        D.select(".key-overlay-followers-max").attr("cx", t - 2 * i).attr("r", i)
                    }
                }).on("end", function() {
                    o || p.style("display", "none")
                });
                [".content-text", ".timekey", "footer", ".nav-right", ".key-button"].forEach(function(t) {
                    D.select(t).transition().duration(1e3).style("opacity", o ? 0 : 1)
                })
            }, D.select(".key-button").on("click", function() {
                v(!0);
                var t = (0, B.isMobile)() ? 0 : d,
                    n = (0, B.getWindowDimensions)(),
                    e = n.height,
                    r = 950 < e ? -7 : 0,
                    i = 950 < e ? -3 : 0,
                    o = 134 - r,
                    u = 254 - i,
                    a = document.querySelector(".mainStemGroup").getBBox();
                D.select(".key-overlay-time-wrapper").style("left", a.x - o + t + "px").style("top", a.y - u + "px"), (0, q.trackEvent)("Trending", "Button - Key", "Open")
            }), D.select(".key-overlay-close").on("click", function() {
                v(!1), (0, q.trackEvent)("Trending", "Button - Key", "Close")
            }), o = function(t) {
                D.select("#close-tooltip").style("display", t ? "block" : "none").transition().style("opacity", t ? 1 : 0)
            }, c = rt.tooltipPipClass + "-group", f = rt.tooltipPipClass, s = rt.tooltipPipClass + " " + rt.tooltipPipClass + "-active", l = "." + rt.tooltipPipClass, D.select("#close-tooltip").on("click", function() {
                var t;
                gt.hideTooltip(), o(!1), t = !1, D.selectAll("." + rt.tooltipPipClass).style("display", t ? "block" : "none"), (0, q.trackEvent)("Trending", "Button - Mobile Read Tweets", "Close - Section")
            }), D.selectAll(".tweet-button").on("click", function() {
                var r, i;
                r = this, i = void 0, D.selectAll(".tweet-button").select(function(t, n, e) {
                    r === this && (i = n)
                });
                var t = T[(E = i) + 1].tweets;
                gt.showTooltip(void 0, t[0], "mobile"), o(!0),
                    function(t, e) {
                        k = 0;
                        var n = D.select("." + c).selectAll(l).data(t, function(t) {
                            return t
                        });
                        n.attr("class", f), n.enter().append("div").attr("class", function(t, n) {
                            return n === k ? s : f
                        }).style("display", "block").on("click", function(t, n) {
                            gt.showTooltip(void 0, t, "mobile"), k = n, D.selectAll(l).attr("class", f), D.select(this).attr("class", s), (0, q.trackEvent)("Trending", "Mobile - Tooltip Section " + (e + 1), "Tweet ID: " + t + " | Index: " + (n + 1))
                        }), n.exit().remove()
                    }(t, E), (0, q.trackEvent)("Trending", "Button - Mobile Read Tweets", "Open - Section " + (E + 1)), (0, q.trackEvent)("Trending", "Mobile - Tooltip Section " + (E + 1), "Tweet ID: " + t[0] + " | Index: 1")
            }), D.select("#key-distance-button").on("click", function() {
                (I = !I) ? (D.select(".key-distance-name").text("Log."), gt = kt(ft, x, !1)) : (D.select(".key-distance-name").text("Lin."), ct ? gt = kt(st, x, !1) : xt(N)), (0, q.trackEvent)("Trending", "Button - Scale", I ? "Log" : "Lin")
            }), r = u, r.setup({
                step: ".content-text .step",
                progress: !0,
                debug: F,
                offset: .5
            }).onStepEnter(Nt), e = "Trending", (0, q.trackPageRead)(e), (0, q.trackNav)(e), (0, q.trackSocialShare)(e), D.select(".key-item-size").on("mouseenter", function() {
                return (0, q.trackEvent)(e, "Hover - Footer key", "Size")
            }), D.select(".key-item-distance").on("mouseenter", function() {
                return (0, q.trackEvent)(e, "Hover - Footer key", "Distance")
            }), D.select(".key-item-color").on("mouseenter", function() {
                return (0, q.trackEvent)(e, "Hover - Footer key", "Color")
            }), D.select(".key-item-pattern").on("mouseenter", function() {
                return (0, q.trackEvent)(e, "Hover - Footer key", "Pattern")
            }), D.select(".link-step-about").on("click", function() {
                return (0, q.trackEvent)(e, "Button - Last Step Mobile - About")
            });
            var e;
            var r;
            var o, c, f, s, l;
            var h, d, p, v;
            var i;
            var g, y, b
        }, e(17);
        var D = function(t) {
                {
                    if (t && t.__esModule) return t;
                    var n = {};
                    if (null != t)
                        for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (n[e] = t[e]);
                    return n.default = t, n
                }
            }(e(11)),
            L = r(e(18)),
            m = r(e(19)),
            _ = e(9),
            B = e(10),
            q = e(8);

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var F = !1,
            x = !1,
            l = void 0,
            U = void 0,
            h = !1,
            d = !1,
            p = 0,
            w = null,
            M = null,
            k = 0,
            E = void 0,
            T = [{
                timeline: [],
                tweets: []
            }, {
                timeline: [{
                    time: "Sun Oct 15 00:00:00 +0000 2017",
                    text: ["15 October 2017", "The birth of a hashtag"]
                }],
                tweets: ["919659438700670976", "920067975016624128", "938388492299702277"]
            }, {
                timeline: [{
                    time: "Thu Oct 05 00:00:00 +0000 2017",
                    text: ["5 October 2017", "The New York Times publishes a story detailing", "decades of allegations of sexual harassment", "against Harvey Weinstein"]
                }],
                tweets: ["924288840310906880", "925781274802896896", "938203751533379585", "918764030071681024", "959838034698100736"]
            }, {
                timeline: [{
                    time: "Wed Oct 25 00:00:00 +0000 2017",
                    text: ["25 October 2017", "The European Parliament hosts a debate", "on sexual violence and harassment"]
                }],
                tweets: ["925102025053937664", "940578767042310144", "932700301798277121", "951924264596328449"]
            }, {
                timeline: [{
                    time: "Tue Nov 28 00:00:00 +0000 2017",
                    text: ["28 November 2017", "#Metoonatsec Open Letter", "on Sexual Harassment", "in National Security"]
                }],
                tweets: ["920041214782726144", "948672043460984832", "928740631035437057", "957817908943470593", "956254032670150658"]
            }, {
                timeline: [{
                    time: "Wed Dec 06 00:00:00 +0000 2017",
                    text: ["06 December 2017", "Silence Breakers", "TIME Person of the Year"]
                }],
                tweets: ["938393210765922304", "938386081795502080", "919600825101705217", "935866401008562176", "952602063405371392"]
            }, {
                timeline: [{
                    time: "Mon Jan 08 00:00:00 +0000 2018",
                    text: ["08 January 2018", "Oprah Winfrey’s", "Golden Globes speech"]
                }],
                tweets: ["950209620030627840", "950208254600151043", "950207306112708609", "950223029669330944", "947864010573172736"]
            }, {
                timeline: [{
                    time: "Sun Jan 21 00:00:00 +0000 2018",
                    text: ["21 January 2018", "Women’s March"]
                }],
                tweets: ["954729081655971840", "954827321298604033", "954705976338378752"]
            }, {
                timeline: [{
                    time: "Thu Mar 08 00:00:00 +0000 2018",
                    text: ["8 March 2018", "International", "Women’s Day"]
                }],
                tweets: ["971738724970229760", "971546479486578688", "922826342890131456", "979882045374640128", "970073336012263424", "921550375739691008"]
            }, {
                timeline: [{
                    time: "Fri Jun 01 00:00:00 +0000 2018",
                    text: [""]
                }],
                tweets: []
            }, {
                timeline: [{
                    time: "Fri Jun 01 00:00:00 +0000 2018",
                    text: [""]
                }],
                tweets: []
            }],
            f = 1650,
            s = 1024,
            v = 40,
            g = 450,
            y = .3,
            A = "timeline_count.json",
            S = "tweets_top.json",
            C = "seeds_positions_log.json",
            N = "seeds_positions_lin.json",
            H = "/assets/time.svg",
            O = "timeline-button",
            P = "jump-button",
            R = "trending-viz",
            Y = "seeds",
            I = !0,
            V = {
                x: 0,
                y: 0,
                width: 1e3,
                height: 1e3
            },
            W = {
                top: 50,
                right: 0,
                bottom: 0,
                left: 0
            },
            z = 0,
            G = {
                delay: {
                    mainStem: 2e3,
                    flowerCenter: 1500,
                    flowerCenterIncrement: 200,
                    flowerElements: 2e3,
                    timeKey: 6500
                }
            },
            X = {
                opacity: .2,
                overlayGroupElementsClass: "overlayGroupElements",
                tooltipTimeout: 6e3
            },
            $ = {
                x: 312,
                y: 286,
                width: 200,
                height: 200
            },
            j = {
                id: "timeline",
                margin: {
                    right: 10,
                    left: 10,
                    bottom: 50,
                    axisOffset: 10
                },
                height: 100,
                maskHeight: 150,
                text: {
                    xOffset: 5,
                    yOffset: 10,
                    dy: 13,
                    size: 10,
                    color: "white"
                },
                dot: {
                    size: 4,
                    color: "#00594C",
                    overlayColor: "#FF5E6B",
                    overlayStrokeWidth: 1
                }
            },
            Z = "scaleLinear",
            J = [230, 600],
            K = function(t) {
                return [t + .03, t + 2 * Math.PI - .57]
            },
            u = [4, 25],
            Q = {
                id: "flowerCenter",
                stem: "#00594C",
                center: {
                    colors: ["#004439", "#004B40", "#005246", "#00594C"],
                    radius: [35, 25, 15, 5]
                },
                strokeWidthScale: 100,
                forceOffset: {
                    widthOffset: 1.77,
                    heightOffset: 1.78
                },
                widthOffset: 2.3,
                heightOffset: 2.6
            },
            tt = {
                map: function(t) {
                    return t.retweets
                },
                color: Q.stem,
                colorHighlight: "white",
                strokeWidth: 1,
                strokeWidthHighlighted: 2,
                opacity: .4,
                opacityHighlight: .4
            },
            nt = {
                map: function(t) {
                    return t.user.followers
                },
                colorMap: function(t) {
                    return t.favourites
                },
                strokeWidthHighlighted: 3,
                colors: [{
                    maxValue: 1e4,
                    color: "#B1DCC2",
                    gradient: ["#B1DCC2", "#E3F2E7"],
                    id: "nodeGradient1"
                }, {
                    maxValue: 5e4,
                    color: "#69C7BF",
                    gradient: ["#69C7BF", "#C9E6D1"],
                    id: "nodeGradient2"
                }, {
                    maxValue: 1e5,
                    color: "#FED5B0",
                    gradient: ["#FED5B0", "#D0EBE8"],
                    id: "nodeGradient3"
                }, {
                    maxValue: 1 / 0,
                    color: "#FBB679",
                    gradient: ["#FBB679", "#FED5B0"],
                    id: "nodeGradient4"
                }]
            },
            et = {
                map: function(t) {
                    return t.replies
                },
                color: "#925380",
                strokeWidth: 1,
                strokeDash: "1, 1",
                onePerReplies: 100
            },
            rt = {
                tooltipPipClass: "mobile-tooltip-pip"
            },
            o = {
                applied: !1,
                retweets: {
                    id: "retweets-threshold",
                    color: "#2e6c61",
                    max: 5e4,
                    min: 1e3,
                    value: 1e3
                },
                replies: {
                    id: "replies-threshold",
                    color: "#90537e",
                    max: 1e4,
                    min: 0,
                    value: 0
                },
                favourites: [{
                    id: "fav0",
                    range: [0, 1e4],
                    active: !0
                }, {
                    id: "fav10",
                    range: [1e4, 5e4],
                    active: !0
                }, {
                    id: "fav50",
                    range: [5e4, 1e5],
                    active: !0
                }, {
                    id: "fav100",
                    range: [1e5, 1 / 0],
                    active: !0
                }]
            },
            it = D.scaleSequential(D.interpolateViridis),
            ot = D.format(".2~s"),
            ut = D.timeFormat("%d %B %Y"),
            at = void 0,
            ct = void 0,
            ft = void 0,
            st = void 0,
            lt = void 0,
            ht = void 0,
            dt = void 0,
            pt = void 0,
            vt = void 0,
            gt = void 0,
            yt = void 0,
            bt = void 0,
            mt = void 0,
            _t = function(t) {
                var n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                    e = void 0,
                    i = nt.colorMap(t),
                    r = nt.colors.find(function(t, n) {
                        var e = 0 === n ? 0 : nt.colors[n - 1].maxValue,
                            r = t.maxValue;
                        return e < i && i <= r
                    });
                return r && (e = n ? r.id : r.color), e
            };

        function xt(t) {
            D.json(t).then(function(t) {
                wt(t), gt = I ? (at = t.filter(function(t) {
                    return t.id !== Q.id
                }), pt = t.filter(function(t) {
                    return t.id === Q.id
                }), kt(ft = Mt(at), x)) : (ct = t.filter(function(t) {
                    return t.id !== Q.id
                }), pt = t.filter(function(t) {
                    return t.id === Q.id
                }), kt(st = Mt(ct), x))
            })
        }

        function wt(t) {
            t.forEach(function(t) {
                var n = new Date(t.time);
                t.timestamp = n.getTime(), t.month = n.getMonth() + 1, t.date = ut(n)
            })
        }

        function Mt(t) {
            var i = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            return t.filter(function(e) {
                var r = !1;
                o.favourites.forEach(function(t) {
                    var n = i ? e.target.favourites : e.favourites;
                    n >= t.range[0] && n < t.range[1] && (r = t.active)
                });
                var t = i ? e.target.retweets : e.retweets,
                    n = i ? e.target.replies : e.replies;
                return t >= o.retweets.value && n >= o.replies.value && r
            })
        }

        function kt(t) {
            var n, e, r, i, o, u = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                a = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
                c = Tt(t),
                f = c.x,
                s = c.y,
                l = c.r,
                h = bt,
                d = bt,
                p = function() {
                    var t = (0, B.getWindowDimensions)().height,
                        n = yt.attr("width") - bt,
                        e = (0, B.isMobile)() ? (t - bt) / 1.5 : 0;
                    yt.select("#seedsViz").remove();
                    var r = yt.append("g").attr("id", "seedsViz").attr("transform", "translate(" + n + "," + e + ")").append("svg").attr("id", Y).attr("width", bt).attr("height", bt).attr("viewBox", V.x + " " + V.y + " " + V.width + " " + V.height).attr("preserveAspectRatio", "xMidYMid meet");
                    if (o = r, u = o.append("defs"), nt.colors.forEach(function(t) {
                            var n = u.append("radialGradient").attr("id", t.id).attr("cx", "50%").attr("cy", "50%").attr("r", "50%").attr("fx", "50%").attr("fy", "50%");
                            n.append("stop").attr("offset", "0%").attr("stop-color", t.gradient[0]), n.append("stop").attr("offset", "100%").attr("stop-color", t.gradient[1])
                        }), F) {
                        var i = [{
                            x1: 0,
                            y1: 0,
                            x2: V.width,
                            y2: 0
                        }, {
                            x1: V.width,
                            y1: 0,
                            x2: V.width,
                            y2: V.height
                        }, {
                            x1: V.width,
                            y1: V.height,
                            x2: 0,
                            y2: V.height
                        }, {
                            x1: 0,
                            y1: V.height,
                            x2: 0,
                            y2: 0
                        }];
                        i.forEach(function(t) {
                            r.append("line").attr("x1", t.x1).attr("y1", t.y1).attr("x2", t.x2).attr("y2", t.y2).attr("stroke", "rgba(0, 0, 0, 0.3)").attr("stroke-width", 10)
                        })
                    }
                    var o, u;
                    return r
                }(),
                v = p.append("g").attr("transform", "translate(" + W.left + "," + W.top + ")"),
                g = v.append("g").attr("class", "links"),
                y = v.append("g").attr("class", "mainCenterGroup"),
                b = v.append("g").attr("class", "timekey"),
                m = v.append("g").attr("class", "nodes"),
                _ = v.append("g").attr("class", "petals"),
                x = v.append("g").attr("class", "overlayGroup"),
                w = x.append("g").attr("class", X.overlayGroupElementsClass),
                M = x.append("g").attr("class", "overlayGroupCenter"),
                k = {
                    x: h / Q.forceOffset.widthOffset,
                    y: d / Q.forceOffset.heightOffset
                },
                E = void 0,
                T = void 0;
            if (u) {
                var A = v.append("g").attr("class", "flowerCentreCircle");
                E = J[0] / 1.35, T = A.append("circle").attr("cx", k.x).attr("cy", k.y).attr("r", E).attr("fill", "none").attr("stroke", "black")
            }(mt ? mt.destroy() : (n = function(t) {
                return t.x > V.width / 2
            }, e = document.querySelector(".viz"), mt = (0, L.default)().attr("class", "tooltip").rootElement(function(t) {
                return (0, B.isMobile)(700) ? document.body : e
            }).direction(function(t) {
                return n(t) ? "w" : "e"
            }).offset(function(t) {
                return [0, n(t) ? -20 : 20]
            }).html(function(t) {
                var n = ut(new Date(t.time));
                return "\n        <div class='tooltip-wrapper'>\n          <p class='tweet-date'>" + n + "</p>\n          <p class='tweet-text'>" + t.text + "</p>\n          <p class='tweet-name'>@" + (t.user && t.user.nickname) + "</p>\n          <p class='tweet-followers'>\n            <span class='tweet-followers-label'>Followers </span>\n            <span>" + ot(t.user && t.user.followers) + "</span>\n          </p>\n          <div class='tweet-feedback'>\n            <p class='tweet-retweets'>" + ot(t.retweets) + "</p>\n            <p class='tweet-favourites'>" + ot(t.favourites) + "</p>\n            <p class='tweet-replies'>" + ot(t.replies) + "</p>\n          </div>\n        </div>\n      "
            }), p.call(mt)), (0, B.getWindowDimensions)().width, u) ? (t.forEach(function(t) {
                t.center = k, t.pointCoord = (0, B.getPointOnAngle)(f(t.timestamp), s(tt.map(t))), t.petalCenter = {
                    x: t.center.x + t.pointCoord.x,
                    y: t.center.y + t.pointCoord.y
                }, t.x = t.petalCenter.x, t.y = t.petalCenter.y, t.distance = s(tt.map(t))
            }), lt = S(t), dt = lt.nodes, pt = lt.nodes.filter(function(t) {
                return t.id === Q.id
            }), vt = lt.links.filter(function(t) {
                return "x" !== t.type
            }), ht = C(lt), function(n) {
                n.nodes(lt.nodes).on("tick", function() {
                    if (u && n.alpha() < .05) {
                        var t = dt.map(function(t) {
                            var n = t.id,
                                e = t.time,
                                r = t.user,
                                i = t.retweets,
                                o = t.replies,
                                u = t.favourites,
                                a = t.text,
                                c = t.x,
                                f = t.y,
                                s = t.center,
                                l = t.petalCenter,
                                h = {};
                            return r && (h = {
                                id: r.id,
                                name: r.name,
                                nickname: r.nickname,
                                followers: r.followers
                            }), {
                                id: n,
                                time: e,
                                user: h,
                                retweets: i,
                                replies: o,
                                favourites: u,
                                text: a,
                                x: c,
                                y: f,
                                center: s,
                                petalCenter: l
                            }
                        });
                        console.log("force data - nodes for storing positions", t)
                    }
                    T.attr("cx", o.x).attr("cy", o.y), r.each(function(t) {
                        t.x = i(t, "x"), t.y = i(t, "y")
                    }), r.attr("cx", function(t) {
                        return t.x
                    }).attr("cy", function(t) {
                        return t.y
                    })
                }), n.force("link").links(lt.links);
                var e = D.scaleSequential(D.interpolateViridis).domain(D.extent(dt, function(t) {
                        return t.timestamp
                    })),
                    r = m.selectAll(".node").data(dt, function(t) {
                        return t.id
                    }).enter().append("circle").attr("id", function(t) {
                        return "node_" + t.id
                    }).attr("class", "node").attr("cx", function(t) {
                        return t.x
                    }).attr("cy", function(t) {
                        return t.y
                    }).attr("r", function(t) {
                        return t.r
                    }).attr("opacity", 1).attr("fill", function(t) {
                        return e(t.timestamp)
                    }).on("mouseover", function(t) {
                        return I(t, null, "mouse")
                    }).on("mouseout", z),
                    o = dt.find(function(t) {
                        return "flowerCenter" === t.id
                    });

                function i(t, n) {
                    var e = (0, B.distanceTwoPoints)(t, o);
                    if ("flowerCenter" === t.id) return t[n];
                    if (E <= e) return t[n];
                    var r = (0, B.getAngle)(t, o),
                        i = (0, B.getPointOnCircle)(o, E, r);
                    return i[n]
                }
            }((o = D.forceLink().id(function(t) {
                return t.id
            }).distance(function(t) {
                return "x" === t.type ? t.value : t.target.distance
            }), D.forceSimulation().force("link", o).force("collide", D.forceCollide().radius(function(t) {
                return t.r + .5
            }).iterations(2)).force("center", D.forceCenter(k.x, k.y))))) : (lt = S(t), dt = lt.nodes, vt = lt.links.filter(function(t) {
                return "x" !== t.type
            }), i = dt, vt.forEach(function(n) {
                n.source = i.find(function(t) {
                    return t.id === n.source
                }), n.target = i.find(function(t) {
                    return t.id === n.target
                })
            }), ht = C(lt), N(y, pt), O(g, vt), P(m, dt), R(_, ht), (r = b).append("image").attr("x", $.x).attr("y", $.y).attr("width", $.width).attr("height", $.height).attr("xlink:href", H), r.attr("opacity", 0).transition().delay(G.delay.timeKey).attr("opacity", 1));

            function S(r) {
                var i = r.map(function(t, n) {
                        return t.group = t.month, t.r = l(nt.map(t)), t.color = it(n / r.length), t
                    }),
                    o = {
                        id: Q.id,
                        group: 0,
                        x: pt ? pt[0].x : k.x,
                        y: pt ? pt[0].y : k.y,
                        r: Q.center.radius[0]
                    };
                i.push(o);
                var u = [];
                return i.forEach(function(n, t) {
                    if (n.id !== o.id) {
                        var e = {
                            source: o.id,
                            target: n.id,
                            value: n.distance,
                            color: it(t / r.length)
                        };
                        i.forEach(function(t) {
                            n.id !== t.id && u.push({
                                source: t.id,
                                target: n.id,
                                value: (0, B.distanceTwoPoints)(t, n),
                                type: "x"
                            })
                        }), u.push(e)
                    }
                }), {
                    nodes: i,
                    links: u
                }
            }

            function C(t) {
                var a = [];
                return t.nodes.filter(function(t) {
                    return "flowerCenter" !== t.id
                }).forEach(function(e, t) {
                    var r = e.replies / et.onePerReplies,
                        n = (0, B.getAngle)(e.center, e.petalCenter),
                        i = 10 < r ? .99 : r < 5 ? 3 : 1.5,
                        o = [n - Math.PI / i, n + Math.PI / i],
                        u = (o[1] - o[0]) / (r + 1);
                    D.range(o[0] + u, o[1], u).forEach(function(t, n) {
                        a.push({
                            id: e.id + "_" + n,
                            type: "petal",
                            target: e,
                            radius: l(nt.map(e)),
                            number: et.map(e),
                            numberOfHeadStems: r,
                            angle: Math.PI + .5 + t
                        })
                    })
                }), a
            }

            function N(i, o) {
                var u = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                Q.center.colors.forEach(function(t, n) {
                    var e = "mainFlowerCenter-" + n,
                        r = i.selectAll("." + e).data(o);
                    r.exit().attr("opacity", 0).remove(), r.attr("cx", function(t) {
                        return t.x
                    }).attr("cy", function(t) {
                        return t.y
                    }), r.enter().append("circle").attr("class", e).attr("cx", function(t) {
                        return t.x
                    }).attr("cy", function(t) {
                        return t.y
                    }).attr("r", Q.center.radius[n]).attr("fill", Q.center.colors[n]).attr("opacity", 0).transition().duration(a ? 250 : 0).delay(function() {
                        return a ? u ? 0 : G.delay.flowerCenter + n * G.delay.flowerCenterIncrement : 0
                    }).attr("opacity", 1)
                })
            }

            function O(t, n) {
                var e = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                n.sort(function(t, n) {
                    return t.target.timestamp - n.target.timestamp
                });
                var r = t.selectAll(".link").data(n, function(t) {
                    return t.target.id
                });
                r.exit().attr("opacity", 0).remove(), r.attr("d", function(t) {
                    return (0, B.createForcePath)(t)
                }).attr("stroke", e ? tt.colorHighlight : tt.color).attr("opacity", e ? tt.opacityHighlight : tt.opacity), r.enter().append("path").attr("id", function(t) {
                    return "link_" + t.target.id
                }).attr("class", "link").attr("d", function(t) {
                    return (0, B.createForcePath)(t)
                }).attr("stroke", e ? tt.colorHighlight : tt.color).attr("stroke-width", e ? tt.strokeWidthHighlighted : tt.strokeWidth).attr("fill", "none").attr("opacity", 0).transition().duration(a ? 250 : 0).delay(function(t, n) {
                    return a ? e ? 0 : G.delay.flowerElements + 3 * n : 0
                }).attr("opacity", e ? tt.opacityHighlight : tt.opacity)
            }

            function P(t, n) {
                var e = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                n.sort(function(t, n) {
                    return t.timestamp - n.timestamp
                });
                var r = t.selectAll(".node").data(n, function(t) {
                    return t.id
                });
                r.exit().attr("opacity", 0).remove(), r.attr("cx", function(t) {
                    return t.x
                }).attr("cy", function(t) {
                    return t.y
                }), r.enter().append("circle").attr("id", function(t) {
                    return "node_" + t.id
                }).attr("class", "node").attr("cx", function(t) {
                    return t.x
                }).attr("cy", function(t) {
                    return t.y
                }).attr("r", function(t) {
                    return 0
                }).attr("opacity", 1).attr("fill", function(t) {
                    var n = _t(t, !0);
                    return n ? "url(#" + n + ")" : "none"
                }).on("mouseover", function(t) {
                    return I(t, null, "mouse")
                }).on("mouseout", z).transition().duration(a ? 250 : 0).delay(function(t, n) {
                    return a ? e ? 0 : G.delay.flowerElements + 3 * n : 0
                }).attr("r", function(t) {
                    return t.r
                })
            }

            function R(t, n) {
                var e = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                n.sort(function(t, n) {
                    return t.target.timestamp - n.target.timestamp
                });
                var r = t.selectAll(".petal").data(n, function(t) {
                    return t.id
                });
                r.exit().attr("opacity", 0).remove(), r.attr("d", function(t) {
                    return (0, B.createForcePath)(t, !0)
                }), r.enter().append("path").attr("id", function(t, n) {
                    return "petal_" + n + "_" + t.id
                }).attr("class", "petal").attr("d", function(t) {
                    return (0, B.createForcePath)(t, !0)
                }).attr("stroke", et.color).attr("stroke-width", et.strokeWidth).attr("stroke-dasharray", et.strokeDash).attr("fill", "none").attr("opacity", 0).on("mouseover", function(t) {
                    return I(t, null, "mouse")
                }).on("mouseout", z).transition().duration(a ? 250 : 0).delay(function(t, n) {
                    return a ? e ? 0 : G.delay.flowerElements + n / 2 : 0
                }).attr("opacity", 1)
            }

            function I(t) {
                var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                    e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "mouse",
                    r = t || {
                        id: n
                    },
                    i = "petal" === r.type ? r.target.id : r.id,
                    o = at.find(function(t) {
                        return t.id === i
                    });
                if (o) {
                    var u = "#node_" + o.id;
                    D.selectAll(u).attr("stroke", et.color).attr("stroke-width", nt.strokeWidthHighlighted);
                    var a = document.querySelector(u);
                    if (mt.attr("class", (0, B.isMobile)(700) ? "tooltip tooltip-mobile tooltip-mobile-animate" : "tooltip animate").show(o, a), U !== i) {
                        U = i;
                        var c = o.timestamp || o.target && o.target.timestamp,
                            f = ut(new Date(c)),
                            s = o.user ? o.user.name : o.target.user.name;
                        (0, q.trackEvent)("Trending", "Tooltip - " + e, s + " - " + (c ? f : "-") + " - " + i)
                    }
                    F && console.log("node", o)
                } else F && console.log(r, " - node not found")
            }

            function z() {
                D.selectAll(".node").attr("stroke", "none"), mt.attr("class", (0, B.isMobile)(700) ? "tooltip tooltip-mobile" : "tooltip").hide()
            }

            function j(t) {
                F && console.log("toggleAll - timeline mode enabled? ", !t), g.selectAll(".link").attr("stroke", t ? tt.color : tt.colorHighlight);
                var n = t ? 1 : X.opacity,
                    e = t ? "all" : "none";
                g.attr("opacity", n).style("pointer-events", e), m.attr("opacity", n).style("pointer-events", e), _.attr("opacity", n).style("pointer-events", e), b.transition("key-transition").attr("opacity", t ? 1 : 0)
            }
            return {
                scales: {
                    x: f,
                    y: s,
                    r: l
                },
                enableAll: function() {
                    j(!0)
                },
                disableAll: function() {
                    j(!1)
                },
                redraw: function(n) {
                    var t = vt.filter(function(t) {
                            return n.includes(t.target.id)
                        }),
                        e = dt.filter(function(t) {
                            return n.includes(t.id)
                        }),
                        r = ht.filter(function(t) {
                            return n.includes(t.target.id)
                        });
                    O(w, t, !0), P(w, e, !0), R(w, r, !0), N(M, pt, !0)
                },
                update: function(t) {
                    var n = t.linksGroup,
                        e = t.linksData,
                        r = t.nodesGroup,
                        i = t.nodesData,
                        o = t.petalsGroup,
                        u = t.petalData;
                    O(n, e), P(r, i), R(o, u)
                },
                createScales: Tt,
                showTooltip: I,
                hideTooltip: z
            }
        }

        function Et(t) {
            var n, e, r = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                i = (0, B.getWindowDimensions)().height,
                o = D.select("#" + R).attr("width", t).attr("height", i);
            n = o, e = j.maskHeight, n.append("defs").append("mask").attr("id", "timeline-mask").append("rect").attr("class", "timeline-mask-rect").attr("x", -20).attr("y", 0).attr("width", 0).attr("height", e).attr("fill", "white");
            var u, a, c, f, s, l, h, d, p = o.append("g").attr("class", "mainStemGroup");
            u = p, a = t - bt, c = D.scaleLinear().domain([0, V.height]).range([0, bt]), f = (0, B.isMobile)() ? ((0, B.getWindowDimensions)().height - bt) / 1.5 : 0, s = {
                x: a + c(V.width / Q.widthOffset),
                y: f + c((V.height + 3 * W.top) / Q.heightOffset)
            }, l = {
                x: t / 10 * 8.8,
                y: i + W.top
            }, h = {
                x: t / 8 * 7,
                y: i / 2.2
            }, (d = u.selectAll(".mainFlowerStem").data([s])).exit().attr("opacity", 0).remove(), d.attr("d", function(t) {
                return (0, B.getCurvedPath)(s, l, h)
            }), d.enter().append("path").attr("class", "mainFlowerStem").attr("d", function(t) {
                return (0, B.getCurvedPath)(s, l, h)
            }).attr("stroke", Q.stem).attr("stroke-width", t / Q.strokeWidthScale).attr("fill", "none").attr("opacity", 0).transition().delay(r ? G.delay.mainStem : 0).attr("opacity", 1);
            var v, g, y, b = j.margin.left,
                m = i - j.height - j.margin.bottom,
                _ = o.append("g").attr("id", j.id).attr("transform", "translate(" + b + "," + m + ")").attr("mask", "url(#timeline-mask)");
            return v = _, g = t, y = j.height, D.json(A).then(function(t) {
                t.forEach(function(t) {
                    t.time = new Date(t.timestamp)
                });
                var n = [new Date("2017-10-05"), new Date("2018-04-01")],
                    e = g - j.margin.left - j.margin.right - (0, B.getWindowDimensions)().width * z * 2,
                    r = [new Date("2017-10-05"), new Date("2018-04-01")],
                    o = D.scaleTime().domain(r).rangeRound([0, e]),
                    i = D.extent(t, function(t) {
                        return t.topCount
                    }),
                    u = D.scaleLinear().domain([0, i[1]]).rangeRound([y, 0]),
                    a = D.line().x(function(t) {
                        return o(t.time)
                    }).y(function(t) {
                        return u(t.topCount)
                    }),
                    c = D.axisBottom(o).tickValues(n).tickFormat(D.timeFormat("%B %Y")),
                    f = y + j.margin.axisOffset;
                v.append("text").attr("class", "timeline-key-label").attr("x", e / 2).attr("dy", j.text.dy + 3).attr("transform", "translate(0," + f + ")").attr("font-size", j.text.size).attr("fill", j.text.color).text((0, B.isMobile)() ? "No. tweets over time" : "Number of tweets over time (200K tweets total)"), v.append("g").attr("class", "x-axis").attr("transform", "translate(0," + f + ")").call(c), v.append("path").datum(t).attr("fill", "#66beb5").attr("opacity", .7).attr("stroke", D.color("#66beb5").darker(.2)).attr("stroke-linejoin", "round").attr("stroke-linecap", "round").attr("stroke-width", 1).attr("d", a), T.forEach(function(t, n) {
                    t.timeline.forEach(function(t) {
                        var n = v.append("g").attr("class", "timeline_highlight"),
                            e = o(new Date(t.time));
                        n.append("circle").attr("class", "timeline-hotspot").attr("cx", e).attr("cy", y + 2 * j.dot.size).attr("r", j.dot.size).attr("fill", j.dot.color);
                        var r = n.append("g").attr("class", "overlay").attr("opacity", 0);
                        r.append("line").attr("x1", e).attr("y1", 0).attr("x2", e).attr("y2", y + j.text.yOffset).attr("stroke", j.text.color).attr("stroke-width", j.dot.overlayStrokeWidth).attr("opacity", function() {
                            return (0, B.isMobile)() ? 0 : 1
                        }), r.append("circle").attr("cx", e).attr("cy", y + 2 * j.dot.size).attr("r", j.dot.size).attr("fill", j.dot.overlayColor).attr("stroke", j.text.color).attr("stroke-width", j.dot.overlayStrokeWidth);
                        var i = r.append("text");
                        t.text.forEach(function(t, n) {
                            i.append("tspan").attr("class", "overlay-info " + (0 === n ? "overlay-time" : "")).attr("x", (0, B.isMobile)() ? 0 : e + j.text.xOffset).attr("dy", j.text.dy).attr("font-size", j.text.size).attr("fill", j.text.color).text(t)
                        })
                    })
                })
            }), At(!1), o
        }

        function Tt(t) {
            var n = 1.65 * Math.PI,
                e = K(n),
                r = D.extent(t, function(t) {
                    return t.timestamp
                }),
                i = D.extent(t, tt.map),
                o = D.extent(t, nt.map);
            return {
                x: D.scaleTime().domain(r).range(e),
                y: D[Z]().domain(i).range(J),
                r: D.scaleSqrt().domain(o).range(u)
            }
        }

        function At(t) {
            var n = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
            D.select("#" + j.id).transition("timeline-transition").duration(n ? 1e3 : 0).attr("opacity", t ? 1 : 0)
        }

        function i(t) {
            D.select(".nav-about").transition("nav-transition").style("color", t ? "white" : "black")
        }

        function St(t) {
            t.transition("bg-getting-green").duration(1e3).style("opacity", 1).on("start", function() {
                h = !0, gt && gt.disableAll(), At(!0, !1),
                    function() {
                        var t = D.select(".timeline-mask-rect");
                        if (0 === parseInt(t.attr("width"), 10)) {
                            var n = parseInt(D.select("#" + R).attr("width"), 10),
                                e = D.select(".x-axis").selectAll(".tick").attr("opacity", 0),
                                r = D.select(".timeline-key-label").attr("opacity", 0);
                            t.transition("timeline-mask-transition").duration(3e3).delay(500).attr("width", n + 100), e.transition("timeline-axis-transition").delay(function(t, n) {
                                return 2800 * n
                            }).duration(300).attr("opacity", 1), r.transition("timeline-key-label-transition").delay(4e3).attr("opacity", 1)
                        }
                    }(), i(!0)
            }).on("end", function() {
                h = !1
            })
        }

        function Ct(t, n) {
            t.transition("bg-getting-transparent").duration(1e3).style("opacity", 0).on("start", function() {
                d = !(h = !0), gt && (gt.enableAll(), clearInterval(w), gt.hideTooltip()), At(!1), i(!1), n.transition(), n.interrupt(), n.attr("opacity", 0)
            }).on("end", function() {
                h = !1
            })
        }

        function Nt(e) {
            var t, n, r = D.select(e.element),
                i = D.select(".bg-green"),
                o = D.selectAll(".overlay");
            if (0 === e.index) {
                var u = parseInt(i.style("opacity"), 10);
                i.transition(), i.interrupt(), 0 !== u || h || d ? 1 === u && !h && d && Ct(i, o) : St(i)
            } else {
                (0, B.isMobile)(700) || (t = e.index, n = -1, p === t && null !== w || (clearInterval(w), p = t, gt.hideTooltip(), w = setInterval(function() {
                    T[t].tweets.length < n + 1 ? n = 0 : n++, gt.hideTooltip(), setTimeout(function() {
                        gt.showTooltip(void 0, T[t].tweets[n], "auto")
                    }, 1e3)
                }, X.tooltipTimeout))), r.transition("text-transition").duration(300).style("opacity", 1);
                var a = o.filter(function(t, n) {
                    return n === e.index - 1
                });
                a.empty() || 0 !== parseInt(a.attr("opacity"), 10) || (o.transition(), o.interrupt(), o.attr("opacity", 0), a.transition().duration(400).attr("opacity", 1));
                var c = T[e.index].tweets;
                gt.redraw(c), d = !0, (0, q.trackEvent)("Trending", "Section Enter", e.index), clearTimeout(l), l = (0, q.trackSectionRead)("Trending", e.index)
            }
            if (F) {
                var f = e.element ? e.element.querySelector(".progress") : null;
                if (f) f.innerHTML = e.progress;
                else {
                    var s = document.createElement("div");
                    s.className = "progress", e.element && e.element.insertAdjacentElement("afterbegin", s)
                }
            }
        }

        function Ot() {
            var t = (0, B.getWindowDimensions)(),
                n = t.width,
                e = t.height,
                r = (0, B.isMobile)(s),
                i = void 0,
                o = void 0,
                u = void 0;
            if (M = e, r) i = n, o = Math.min(n, g), bt = .85 * Math.min(n, e);
            else {
                var a = (i = Math.min(n, f)) - (o = Math.min(i * y, g));
                bt = Math.min(a, e)
            }
            var c = r ? v : Math.max(v, Math.round((n - i) / 2 + n * z));
            return r ? (u = i - 1.7 * c, o -= 2 * c) : u = n <= f ? i - 3 * c : i, {
                navMargin: r ? v : c,
                marginSide: c,
                textWidth: o,
                siteWidth: i,
                width: n,
                height: e,
                vizSize: bt,
                mainSvgSize: u
            }
        }

        function Pt(t) {
            var n = t.navMargin,
                e = t.marginSide,
                r = t.textWidth,
                i = t.mainSvgSize,
                o = t.height;
            D.select(".nav-left").style("left", n + "px"), D.select(".nav-right").style("right", n + "px"), D.select(".content-text").style("width", r + "px").style("margin-left", e + "px"), D.select(".viz").style("width", i + "px").style("height", o + "px").style("margin-left", e + "px"), D.select(".key-overlay-content").style("width", r + "px").style("margin-left", n - 20 + "px"), D.select(".key-button").style("right", n + "px"), D.select("footer").style("left", (0, B.isMobile)() ? n + "px" : "")
        }
        t.exports = n.default
    }, function(t, n) {
        ! function(v, g) {
            "use strict";
            if ("IntersectionObserver" in v && "IntersectionObserverEntry" in v && "intersectionRatio" in v.IntersectionObserverEntry.prototype) "isIntersecting" in v.IntersectionObserverEntry.prototype || Object.defineProperty(v.IntersectionObserverEntry.prototype, "isIntersecting", {
                get: function() {
                    return 0 < this.intersectionRatio
                }
            });
            else {
                var n = [];
                t.prototype.THROTTLE_TIMEOUT = 100, t.prototype.POLL_INTERVAL = null, t.prototype.USE_MUTATION_OBSERVER = !0, t.prototype.observe = function(n) {
                    if (!this._observationTargets.some(function(t) {
                            return t.element == n
                        })) {
                        if (!n || 1 != n.nodeType) throw new Error("target must be an Element");
                        this._registerInstance(), this._observationTargets.push({
                            element: n,
                            entry: null
                        }), this._monitorIntersections(), this._checkForIntersections()
                    }
                }, t.prototype.unobserve = function(n) {
                    this._observationTargets = this._observationTargets.filter(function(t) {
                        return t.element != n
                    }), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
                }, t.prototype.disconnect = function() {
                    this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
                }, t.prototype.takeRecords = function() {
                    var t = this._queuedEntries.slice();
                    return this._queuedEntries = [], t
                }, t.prototype._initThresholds = function(t) {
                    var n = t || [0];
                    return Array.isArray(n) || (n = [n]), n.sort().filter(function(t, n, e) {
                        if ("number" != typeof t || isNaN(t) || t < 0 || 1 < t) throw new Error("threshold must be a number between 0 and 1 inclusively");
                        return t !== e[n - 1]
                    })
                }, t.prototype._parseRootMargin = function(t) {
                    var n = (t || "0px").split(/\s+/).map(function(t) {
                        var n = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
                        if (!n) throw new Error("rootMargin must be specified in pixels or percent");
                        return {
                            value: parseFloat(n[1]),
                            unit: n[2]
                        }
                    });
                    return n[1] = n[1] || n[0], n[2] = n[2] || n[0], n[3] = n[3] || n[1], n
                }, t.prototype._monitorIntersections = function() {
                    this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (e(v, "resize", this._checkForIntersections, !0), e(g, "scroll", this._checkForIntersections, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in v && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(g, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                    }))))
                }, t.prototype._unmonitorIntersections = function() {
                    this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, r(v, "resize", this._checkForIntersections, !0), r(g, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
                }, t.prototype._checkForIntersections = function() {
                    var a = this._rootIsInDom(),
                        c = a ? this._getRootRect() : {
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            width: 0,
                            height: 0
                        };
                    this._observationTargets.forEach(function(t) {
                        var n = t.element,
                            e = y(n),
                            r = this._rootContainsTarget(n),
                            i = t.entry,
                            o = a && r && this._computeTargetAndRootIntersection(n, c),
                            u = t.entry = new f({
                                time: v.performance && performance.now && performance.now(),
                                target: n,
                                boundingClientRect: e,
                                rootBounds: c,
                                intersectionRect: o
                            });
                        i ? a && r ? this._hasCrossedThreshold(i, u) && this._queuedEntries.push(u) : i && i.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
                    }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
                }, t.prototype._computeTargetAndRootIntersection = function(t, n) {
                    if ("none" != v.getComputedStyle(t).display) {
                        for (var e, r, i, o, u, a, c, f, s = y(t), l = b(t), h = !1; !h;) {
                            var d = null,
                                p = 1 == l.nodeType ? v.getComputedStyle(l) : {};
                            if ("none" == p.display) return;
                            if (l == this.root || l == g ? (h = !0, d = n) : l != g.body && l != g.documentElement && "visible" != p.overflow && (d = y(l)), d && (e = d, r = s, void 0, i = Math.max(e.top, r.top), o = Math.min(e.bottom, r.bottom), u = Math.max(e.left, r.left), a = Math.min(e.right, r.right), f = o - i, !(s = 0 <= (c = a - u) && 0 <= f && {
                                    top: i,
                                    bottom: o,
                                    left: u,
                                    right: a,
                                    width: c,
                                    height: f
                                }))) break;
                            l = b(l)
                        }
                        return s
                    }
                }, t.prototype._getRootRect = function() {
                    var t;
                    if (this.root) t = y(this.root);
                    else {
                        var n = g.documentElement,
                            e = g.body;
                        t = {
                            top: 0,
                            left: 0,
                            right: n.clientWidth || e.clientWidth,
                            width: n.clientWidth || e.clientWidth,
                            bottom: n.clientHeight || e.clientHeight,
                            height: n.clientHeight || e.clientHeight
                        }
                    }
                    return this._expandRectByRootMargin(t)
                }, t.prototype._expandRectByRootMargin = function(e) {
                    var t = this._rootMarginValues.map(function(t, n) {
                            return "px" == t.unit ? t.value : t.value * (n % 2 ? e.width : e.height) / 100
                        }),
                        n = {
                            top: e.top - t[0],
                            right: e.right + t[1],
                            bottom: e.bottom + t[2],
                            left: e.left - t[3]
                        };
                    return n.width = n.right - n.left, n.height = n.bottom - n.top, n
                }, t.prototype._hasCrossedThreshold = function(t, n) {
                    var e = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
                        r = n.isIntersecting ? n.intersectionRatio || 0 : -1;
                    if (e !== r)
                        for (var i = 0; i < this.thresholds.length; i++) {
                            var o = this.thresholds[i];
                            if (o == e || o == r || o < e != o < r) return !0
                        }
                }, t.prototype._rootIsInDom = function() {
                    return !this.root || i(g, this.root)
                }, t.prototype._rootContainsTarget = function(t) {
                    return i(this.root || g, t)
                }, t.prototype._registerInstance = function() {
                    n.indexOf(this) < 0 && n.push(this)
                }, t.prototype._unregisterInstance = function() {
                    var t = n.indexOf(this); - 1 != t && n.splice(t, 1)
                }, v.IntersectionObserver = t, v.IntersectionObserverEntry = f
            }

            function f(t) {
                this.time = t.time, this.target = t.target, this.rootBounds = t.rootBounds, this.boundingClientRect = t.boundingClientRect, this.intersectionRect = t.intersectionRect || {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                }, this.isIntersecting = !!t.intersectionRect;
                var n = this.boundingClientRect,
                    e = n.width * n.height,
                    r = this.intersectionRect,
                    i = r.width * r.height;
                this.intersectionRatio = e ? i / e : this.isIntersecting ? 1 : 0
            }

            function t(t, n) {
                var e, r, i, o = n || {};
                if ("function" != typeof t) throw new Error("callback must be a function");
                if (o.root && 1 != o.root.nodeType) throw new Error("root must be an Element");
                this._checkForIntersections = (e = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, i = null, function() {
                    i || (i = setTimeout(function() {
                        e(), i = null
                    }, r))
                }), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(o.rootMargin), this.thresholds = this._initThresholds(o.threshold), this.root = o.root || null, this.rootMargin = this._rootMarginValues.map(function(t) {
                    return t.value + t.unit
                }).join(" ")
            }

            function e(t, n, e, r) {
                "function" == typeof t.addEventListener ? t.addEventListener(n, e, r || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + n, e)
            }

            function r(t, n, e, r) {
                "function" == typeof t.removeEventListener ? t.removeEventListener(n, e, r || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + n, e)
            }

            function y(t) {
                var n;
                try {
                    n = t.getBoundingClientRect()
                } catch (t) {}
                return n ? (n.width && n.height || (n = {
                    top: n.top,
                    right: n.right,
                    bottom: n.bottom,
                    left: n.left,
                    width: n.right - n.left,
                    height: n.bottom - n.top
                }), n) : {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                }
            }

            function i(t, n) {
                for (var e = n; e;) {
                    if (e == t) return !0;
                    e = b(e)
                }
                return !1
            }

            function b(t) {
                var n = t.parentNode;
                return n && 11 == n.nodeType && n.host ? n.host : n
            }
        }(window, document)
    }, function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = function() {
            var f = function() {
                    return "n"
                },
                s = function() {
                    return [0, 0]
                },
                l = function() {
                    return " "
                },
                h = function() {
                    return document.body
                },
                e = t(),
                r = null,
                d = null,
                p = null;

            function v(t) {
                var n;
                n = t.node(), (r = n ? "svg" === n.tagName.toLowerCase() ? n : n.ownerSVGElement : null) && (d = r.createSVGPoint(), h().appendChild(e))
            }
            v.show = function() {
                var t = Array.prototype.slice.call(arguments);
                t[t.length - 1] instanceof SVGElement && (p = t.pop());
                var n, e = l.apply(this, t),
                    r = s.apply(this, t),
                    i = f.apply(this, t),
                    o = b(),
                    u = y.length,
                    a = h().scrollTop,
                    c = h().scrollLeft;
                for (o.html(e).style("opacity", 1).style("pointer-events", "all"); u--;) o.classed(y[u], !1);
                return n = g.get(i).apply(this), o.classed(i, !0).style("top", n.top + r[0] + a + "px").style("left", n.left + r[1] + c + "px"), v
            }, v.hide = function() {
                return b().style("opacity", 0).style("pointer-events", "none"), v
            }, v.attr = function(t, n) {
                if (arguments.length < 2 && "string" == typeof t) return b().attr(t);
                var e = Array.prototype.slice.call(arguments);
                return u.selection.prototype.attr.apply(b(), e), v
            }, v.style = function(t, n) {
                if (arguments.length < 2 && "string" == typeof t) return b().style(t);
                var e = Array.prototype.slice.call(arguments);
                return u.selection.prototype.style.apply(b(), e), v
            }, v.direction = function(t) {
                return arguments.length ? (f = null == t ? t : i(t), v) : f
            }, v.offset = function(t) {
                return arguments.length ? (s = null == t ? t : i(t), v) : s
            }, v.html = function(t) {
                return arguments.length ? (l = null == t ? t : i(t), v) : l
            }, v.rootElement = function(t) {
                return arguments.length ? (h = null == t ? t : i(t), v) : h
            }, v.destroy = function() {
                return e && (b().remove(), e = null), v
            };
            var g = (0, o.map)({
                    n: function() {
                        var t = n(this);
                        return {
                            top: t.n.y - e.offsetHeight,
                            left: t.n.x - e.offsetWidth / 2
                        }
                    },
                    s: function() {
                        var t = n(this);
                        return {
                            top: t.s.y,
                            left: t.s.x - e.offsetWidth / 2
                        }
                    },
                    e: function() {
                        var t = n(this);
                        return {
                            top: t.e.y - e.offsetHeight / 2,
                            left: t.e.x
                        }
                    },
                    w: function() {
                        var t = n(this);
                        return {
                            top: t.w.y - e.offsetHeight / 2,
                            left: t.w.x - e.offsetWidth
                        }
                    },
                    nw: function() {
                        var t = n(this);
                        return {
                            top: t.nw.y - e.offsetHeight,
                            left: t.nw.x - e.offsetWidth
                        }
                    },
                    ne: function() {
                        var t = n(this);
                        return {
                            top: t.ne.y - e.offsetHeight,
                            left: t.ne.x
                        }
                    },
                    sw: function() {
                        var t = n(this);
                        return {
                            top: t.sw.y,
                            left: t.sw.x - e.offsetWidth
                        }
                    },
                    se: function() {
                        var t = n(this);
                        return {
                            top: t.se.y,
                            left: t.se.x
                        }
                    }
                }),
                y = g.keys();

            function t() {
                var t = (0, u.select)(document.createElement("div"));
                return t.style("position", "absolute").style("top", 0).style("opacity", 0).style("pointer-events", "none").style("box-sizing", "border-box"), t.node()
            }

            function b() {
                return null == e && (e = t(), h().appendChild(e)), (0, u.select)(e)
            }

            function n(t) {
                for (var n = p || t; null == n.getScreenCTM && null != n.parentNode;) n = n.parentNode;
                var e = {},
                    r = n.getScreenCTM(),
                    i = n.getBBox(),
                    o = i.width,
                    u = i.height,
                    a = i.x,
                    c = i.y;
                return d.x = a, d.y = c, e.nw = d.matrixTransform(r), d.x += o, e.ne = d.matrixTransform(r), d.y += u, e.se = d.matrixTransform(r), d.x -= o, e.sw = d.matrixTransform(r), d.y -= u / 2, e.w = d.matrixTransform(r), d.x += o, e.e = d.matrixTransform(r), d.x -= o / 2, d.y -= u / 2, e.n = d.matrixTransform(r), d.y += u, e.s = d.matrixTransform(r), e
            }

            function i(t) {
                return "function" == typeof t ? t : function() {
                    return t
                }
            }
            return v
        };
        var o = e(5),
            u = e(0);
        t.exports = n.default
    }, function(t, n, e) {
        t.exports = function() {
            "use strict";

            function e(t) {
                for (var n = t.length, e = [], r = 0; r < n; r += 1) e.push(t[r]);
                return e
            }

            function nt(t) {
                return t instanceof Element ? t : "string" == typeof t ? document.querySelector(t) : null
            }

            function et(t, n) {
                return void 0 === n && (n = document), "string" == typeof t ? e(n.querySelectorAll(t)) : t instanceof NodeList ? e(t) : t instanceof Array ? t : []
            }

            function a(t) {
                var n = t.id;
                return "scrollama__debug-offset--" + n
            }

            function rt(t) {
                var n = t.id,
                    e = t.offsetVal,
                    r = t.stepEl,
                    i = r[0].getAttribute("class");
                ! function(t) {
                    var n = t.id,
                        e = t.offsetVal,
                        r = t.stepClass,
                        i = document.createElement("div");
                    i.setAttribute("id", a({
                        id: n
                    })), i.setAttribute("class", "scrollama__debug-offset"), i.style.position = "fixed", i.style.left = "0", i.style.width = "100%", i.style.height = "0px", i.style.borderTop = "2px dashed black", i.style.zIndex = "9999";
                    var o = document.createElement("p");
                    o.innerText = '".' + r + '" trigger: ' + e, o.style.fontSize = "12px", o.style.fontFamily = "monospace", o.style.color = "black", o.style.margin = "0", o.style.padding = "6px", i.appendChild(o), document.body.appendChild(i)
                }({
                    id: n,
                    offsetVal: e,
                    stepClass: i
                })
            }

            function it(t) {
                var n, e, r, i, o = t.id,
                    u = (t.stepOffsetHeight, t.offsetMargin);
                t.offsetVal, e = (n = {
                    id: o,
                    offsetMargin: u
                }).id, r = n.offsetMargin, n.offsetVal, i = a({
                    id: e
                }), document.querySelector("#" + i).style.top = r + "px"
            }

            function ot(t) {
                var n, e, r, i = t.id,
                    o = t.index,
                    u = t.state,
                    a = (e = (n = {
                        id: i,
                        i: o
                    }).id, r = n.i, "scrollama__debug-step--" + e + "-" + r),
                    c = document.querySelector("#" + a + "_above"),
                    f = document.querySelector("#" + a + "_below"),
                    s = "enter" === u ? "block" : "none";
                c && (c.style.display = s), f && (f.style.display = s)
            }
            return function() {
                var f = 1,
                    o = {},
                    n = {},
                    d = null,
                    p = null,
                    v = null,
                    g = null,
                    e = 0,
                    s = 0,
                    c = 0,
                    a = 0,
                    l = null,
                    h = null,
                    r = null,
                    y = !1,
                    i = !1,
                    b = !1,
                    m = !1,
                    _ = 0,
                    x = !1,
                    w = !1,
                    M = null,
                    k = null,
                    t = -1,
                    E = null,
                    u = [];

                function T(t) {
                    var n = 0;
                    if (t.offsetParent)
                        for (; n += t.offsetTop, t = t.offsetParent;);
                    return n < 0 ? 0 : n
                }

                function A(t) {
                    return +t.getAttribute("data-scrollama-index")
                }

                function S() {
                    window.pageYOffset > t ? E = "down" : window.pageYOffset < t && (E = "up"), t = window.pageYOffset
                }

                function C() {
                    var t, n;
                    c = window.innerHeight, t = document.body, n = document.documentElement, a = Math.max(t.scrollHeight, t.offsetHeight, n.clientHeight, n.scrollHeight, n.offsetHeight), r = p ? p.getBoundingClientRect() : null, s = e * c, l = v ? v.map(function(t) {
                        return t.offsetHeight
                    }) : [], h = v ? v.map(T) : [], i && y && K(), b && it({
                        id: g,
                        stepOffsetHeight: l,
                        offsetMargin: s,
                        offsetVal: e
                    })
                }

                function N(t) {
                    t && !i ? (y && K(), i = !0) : t || (n.top && n.top.disconnect(), n.bottom && n.bottom.disconnect(), n.stepAbove && n.stepAbove.forEach(function(t) {
                        return t.disconnect()
                    }), n.stepBelow && n.stepBelow.forEach(function(t) {
                        return t.disconnect()
                    }), n.stepProgress && n.stepProgress.forEach(function(t) {
                        return t.disconnect()
                    }), n.viewportAbove && n.viewportAbove.forEach(function(t) {
                        return t.disconnect()
                    }), n.viewportBelow && n.viewportBelow.forEach(function(t) {
                        return t.disconnect()
                    }), i = !1)
                }

                function O(t) {
                    for (var n = Math.ceil(t / _), e = [], r = 1 / n, i = 0; i < n; i++) e.push(i * r);
                    return e
                }

                function P(t, n) {
                    if ("above" === n)
                        for (var e = 0; e < t; e++) {
                            var r = M[e];
                            "enter" === r.state && I(v[e], "down"), "up" === r.direction && (R(v[e], "down", !1), I(v[e], "down"))
                        } else if ("below" === n)
                            for (var i = M.length - 1; t < i; i--) {
                                var o = M[i];
                                "enter" === o.state && I(v[i], "up"), "down" === o.direction && (R(v[i], "up", !1), I(v[i], "up"))
                            }
                }

                function R(t, n, e) {
                    void 0 === e && (e = !0);
                    var r = A(t),
                        i = {
                            element: t,
                            index: r,
                            direction: n
                        };
                    M[r].direction = n, M[r].state = "enter", x && e && "down" === n && P(r, "above"), x && e && "up" === n && P(r, "below"), o.stepEnter && "function" == typeof o.stepEnter && !u[r] && (o.stepEnter(i, M), b && ot({
                        id: g,
                        index: r,
                        state: "enter"
                    }), w && (u[r] = !0)), m && z(t, "down" === n ? 0 : 1)
                }

                function I(t, n) {
                    var e = A(t),
                        r = {
                            element: t,
                            index: e,
                            direction: n
                        };
                    M[e].direction = n, M[e].state = "exit", m && z(t, "down" === n ? 1 : 0), o.stepExit && "function" == typeof o.stepExit && (o.stepExit(r, M), b && ot({
                        id: g,
                        index: e,
                        state: "exit"
                    }))
                }

                function z(t, n) {
                    var e = A(t),
                        r = {
                            element: t,
                            index: e,
                            progress: n
                        };
                    o.stepProgress && "function" == typeof o.stepProgress && o.stepProgress(r)
                }

                function j() {
                    var t = {
                        direction: E
                    };
                    k.direction = E, k.state = "enter", o.containerEnter && "function" == typeof o.containerEnter && o.containerEnter(t)
                }

                function D() {
                    var t = {
                        direction: E
                    };
                    k.direction = E, k.state = "exit", o.containerExit && "function" == typeof o.containerExit && o.containerExit(t)
                }

                function L(t) {
                    S(), t.forEach(function(t) {
                        var n = t.isIntersecting,
                            e = t.boundingClientRect,
                            r = t.target,
                            i = e.bottom,
                            o = e.height,
                            u = i - s,
                            a = A(r),
                            c = M[a]; - f <= u && (n && "down" === E && "enter" !== c.state ? R(r, E) : n || "up" !== E || "enter" !== c.state ? !n && o <= u && "down" === E && "enter" === c.state && I(r, E) : I(r, E))
                    })
                }

                function B(t) {
                    S(), t.forEach(function(t) {
                        var n = t.isIntersecting,
                            e = t.boundingClientRect,
                            r = t.target,
                            i = e.bottom,
                            o = e.height,
                            u = i - s,
                            a = A(r),
                            c = M[a]; - f <= u && u < o && n && "up" === E && "enter" !== c.state ? R(r, E) : u <= f && !n && "down" === E && "enter" === c.state && I(r, E)
                    })
                }

                function q(t) {
                    S(), t.forEach(function(t) {
                        var n = t.isIntersecting,
                            e = t.target,
                            r = A(e),
                            i = M[r];
                        n && "down" === E && "enter" !== i.state && "down" !== i.direction && (R(e, "down"), I(e, "down"))
                    })
                }

                function F(t) {
                    S(), t.forEach(function(t) {
                        var n = t.isIntersecting,
                            e = t.target,
                            r = A(e),
                            i = M[r];
                        n && "up" === E && "enter" !== i.state && "up" !== i.direction && (R(e, "up"), I(e, "up"))
                    })
                }

                function U(t) {
                    S(), t.forEach(function(t) {
                        var n = t.isIntersecting,
                            e = t.intersectionRatio,
                            r = t.boundingClientRect,
                            i = t.target,
                            o = r.bottom,
                            u = o - s;
                        n && -f <= u && z(i, +e.toFixed(3))
                    })
                }

                function H(t) {
                    S();
                    var n = t[0],
                        e = n.isIntersecting,
                        r = n.boundingClientRect,
                        i = (r.top, r.bottom); - f < i && (e ? j() : "enter" === k.state && D())
                }

                function Y(t) {
                    S();
                    var n = t[0],
                        e = n.isIntersecting,
                        r = n.boundingClientRect,
                        i = r.top;
                    i < f && (e ? j() : "enter" === k.state && D())
                }

                function V() {
                    n.top && n.top.unobserve(d);
                    var t = {
                        root: null,
                        rootMargin: c + "px 0px -" + c + "px 0px",
                        threshold: 0
                    };
                    n.top = new IntersectionObserver(H, t), n.top.observe(d)
                }

                function W() {
                    n.bottom && n.bottom.unobserve(d);
                    var t = {
                        root: null,
                        rootMargin: "-" + r.height + "px 0px " + r.height + "px 0px",
                        threshold: 0
                    };
                    n.bottom = new IntersectionObserver(Y, t), n.bottom.observe(d)
                }

                function G() {
                    n.stepAbove && n.stepAbove.forEach(function(t) {
                        return t.disconnect()
                    }), n.stepAbove = v.map(function(t, n) {
                        var e = l[n],
                            r = -c + s,
                            i = e + "px 0px " + r + "px 0px",
                            o = {
                                root: null,
                                rootMargin: i,
                                threshold: 0
                            },
                            u = new IntersectionObserver(L, o);
                        return u.observe(t), u
                    })
                }

                function X() {
                    n.stepBelow && n.stepBelow.forEach(function(t) {
                        return t.disconnect()
                    }), n.stepBelow = v.map(function(t, n) {
                        var e = -s,
                            r = a - c + l[n] + s,
                            i = e + "px 0px " + r + "px 0px",
                            o = {
                                root: null,
                                rootMargin: i,
                                threshold: 0
                            },
                            u = new IntersectionObserver(B, o);
                        return u.observe(t), u
                    })
                }

                function $() {
                    n.viewportAbove && n.viewportAbove.forEach(function(t) {
                        return t.disconnect()
                    }), n.viewportAbove = v.map(function(t, n) {
                        var e = h[n],
                            r = -(c - s + l[n]),
                            i = e + "px 0px " + r + "px 0px",
                            o = {
                                root: null,
                                rootMargin: i,
                                threshold: 0
                            },
                            u = new IntersectionObserver(q, o);
                        return u.observe(t), u
                    })
                }

                function Z() {
                    n.viewportBelow && n.viewportBelow.forEach(function(t) {
                        return t.disconnect()
                    }), n.viewportBelow = v.map(function(t, n) {
                        var e = -(s + l[n]),
                            r = a - h[n] - l[n] - s,
                            i = e + "px 0px " + r + "px 0px",
                            o = {
                                root: null,
                                rootMargin: i,
                                threshold: 0
                            },
                            u = new IntersectionObserver(F, o);
                        return u.observe(t), u
                    })
                }

                function J() {
                    n.stepProgress && n.stepProgress.forEach(function(t) {
                        return t.disconnect()
                    }), n.stepProgress = v.map(function(t, n) {
                        var e = l[n] - s,
                            r = -c + s,
                            i = e + "px 0px " + r + "px 0px",
                            o = O(l[n]),
                            u = {
                                root: null,
                                rootMargin: i,
                                threshold: o
                            },
                            a = new IntersectionObserver(U, u);
                        return a.observe(t), a
                    })
                }

                function K() {
                    $(), Z(), G(), X(), m && J(), d && p && (V(), W())
                }

                function Q() {
                    b && rt({
                        id: g,
                        stepEl: v,
                        offsetVal: e
                    })
                }
                var tt = {};
                return tt.setup = function(t) {
                    var n = t.container,
                        e = t.graphic,
                        r = t.step,
                        i = t.offset;
                    void 0 === i && (i = .5);
                    var o = t.progress;
                    void 0 === o && (o = !1);
                    var u = t.threshold;
                    void 0 === u && (u = 4);
                    var a = t.debug;
                    void 0 === a && (a = !1);
                    var c = t.order;
                    void 0 === c && (c = !0);
                    var f, s, l, h = t.once;
                    return void 0 === h && (h = !1), s = (f = "abcdefghijklmnopqrstuv").length, l = (new Date).getTime(), g = "" + [0, 0, 0].map(function(t) {
                        return f[Math.floor(Math.random() * s)]
                    }).join("") + l, v = et(r), d = n ? nt(n) : null, p = e ? nt(e) : null, v.length ? (b = a, m = o, x = c, w = h, tt.offsetTrigger(i), _ = Math.max(1, +u), y = !0, Q(), v.forEach(function(t, n) {
                        return t.setAttribute("data-scrollama-index", n)
                    }), M = v.map(function() {
                        return {
                            direction: null,
                            state: null
                        }
                    }), k = {
                        direction: null,
                        state: null
                    }, C(), N(!0)) : console.error("scrollama error: no step elements"), tt
                }, tt.resize = function() {
                    return C(), tt
                }, tt.enable = function() {
                    return N(!0), tt
                }, tt.disable = function() {
                    return N(!1), tt
                }, tt.destroy = function() {
                    N(!1), Object.keys(o).forEach(function(t) {
                        return o[t] = null
                    }), Object.keys(n).forEach(function(t) {
                        return n[t] = null
                    })
                }, tt.offsetTrigger = function(t) {
                    return t && !isNaN(t) ? (e = Math.min(Math.max(0, t), 1), tt) : e
                }, tt.onStepEnter = function(t) {
                    return o.stepEnter = t, tt
                }, tt.onStepExit = function(t) {
                    return o.stepExit = t, tt
                }, tt.onStepProgress = function(t) {
                    return o.stepProgress = t, tt
                }, tt.onContainerEnter = function(t) {
                    return o.containerEnter = t, tt
                }, tt.onContainerExit = function(t) {
                    return o.containerExit = t, tt
                }, tt
            }
        }()
    }, function(t, n) {
        t.exports = "/build/global.css"
    }, function(t, n) {
        t.exports = "/build/about.css"
    }, function(t, n) {
        t.exports = "/build/trending.css"
    }, function(t, n) {
        t.exports = "/build/intro.css"
    }])
});