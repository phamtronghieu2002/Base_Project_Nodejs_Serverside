"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [435],
  {
    6946: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var i = n(7437),
        o = n(6300),
        r = n(7138),
        a = n(6463);
      function s() {
        let e = (0, a.usePathname)();
        return (0, i.jsx)("div", {
          className: "navbar-wrap main-menu",
          children: (0, i.jsx)("ul", {
            className: "navigation",
            children:
              null === o.Z || void 0 === o.Z
                ? void 0
                : o.Z.map((t, n) =>
                    (0, i.jsxs)(
                      "li",
                      {
                        className: t.dropdown ? "menu-item-has-children " : "",
                        children: [
                          t.dropdown
                            ? (0, i.jsx)(r.default, {
                                className: t.dropdown.some((t) => t.url === e)
                                  ? "ui-active-parent-1"
                                  : "",
                                href: "#",
                                onClick: (e) => e.preventDefault(),
                                children: t.name,
                              })
                            : (0, i.jsx)(r.default, {
                                className:
                                  e === t.url ? "ui-active-parent-1" : "",
                                href: t.url,
                                children: t.name,
                              }),
                          t.dropdown &&
                            (0, i.jsxs)(i.Fragment, {
                              children: [
                                (0, i.jsx)("ul", {
                                  className: "sub-menu",
                                  children: t.dropdown.map((t, n) =>
                                    (0, i.jsx)(
                                      "li",
                                      {
                                        children: (0, i.jsx)(r.default, {
                                          href: t.url,
                                          className:
                                            e === t.url ? "ui-active-1" : "",
                                          children: t.name,
                                        }),
                                      },
                                      n
                                    )
                                  ),
                                }),
                                (0, i.jsx)("div", {
                                  className: "dropdown-btn",
                                  children: (0, i.jsx)("span", {
                                    className: "fas fa-angle-down",
                                  }),
                                }),
                              ],
                            }),
                        ],
                      },
                      n
                    )
                  ),
          }),
        });
      }
    },
    2736: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = n(7437),
        o = n(7138);
      let r = [
        {
          icon: "flaticon-maps-and-flags",
          name: "Jones Street, New York, USA",
        },
        {
          icon: "flaticon-gmail-logo",
          name: "Info@example.com",
          url: "mailto:yourmail@email.com",
        },
        {
          icon: "flaticon-call",
          name: "+70 264 566 579",
          url: "tel:123456789",
        },
      ];
      function a() {
        return (0, i.jsxs)("div", {
          className: "main-header-one__top",
          children: [
            (0, i.jsx)("div", { className: "main-header-one__top-pattern" }),
            (0, i.jsxs)("div", {
              className: "main-header-one__top-inner",
              children: [
                (0, i.jsx)("div", {
                  className: "main-header-one__top-left",
                  children: (0, i.jsx)("div", {
                    className: "header-contact-info",
                    children: (0, i.jsx)("ul", {
                      children:
                        null == r
                          ? void 0
                          : r.map((e, t) =>
                              (0, i.jsxs)(
                                "li",
                                {
                                  children: [
                                    (0, i.jsx)("div", {
                                      className: "icon-box",
                                      children: (0, i.jsx)("i", {
                                        className: e.icon,
                                      }),
                                    }),
                                    e.url
                                      ? (0, i.jsx)("p", {
                                          children: (0, i.jsx)(o.default, {
                                            href: e.url,
                                            children: e.name,
                                          }),
                                        })
                                      : (0, i.jsx)("p", { children: e.name }),
                                  ],
                                },
                                t
                              )
                            ),
                    }),
                  }),
                }),
                (0, i.jsx)("div", {
                  className: "main-header-one__top-right",
                  children: (0, i.jsx)("div", {
                    className: "inner",
                    children: (0, i.jsx)("div", {
                      className: "header-social-links",
                      children: (0, i.jsxs)("ul", {
                        children: [
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)(o.default, {
                              href: "/",
                              children: (0, i.jsx)("i", {
                                className: "fa-brands fa-facebook-f",
                              }),
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)(o.default, {
                              href: "/",
                              children: (0, i.jsx)("i", {
                                className: "fa-brands fa-linkedin-in",
                              }),
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)(o.default, {
                              href: "/",
                              children: (0, i.jsx)("i", {
                                className: "fa-brands fa-twitter",
                              }),
                            }),
                          }),
                          (0, i.jsx)("li", {
                            children: (0, i.jsx)(o.default, {
                              href: "/",
                              children: (0, i.jsx)("i", {
                                className: "fa-brands fa-instagram",
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    5754: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var i = n(7437),
        o = n(2888);
      function r(e) {
        let { collapsed: t, handler: n, index: r, data: a } = e;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)("h4", {
              onClick: () => n(r),
              className: "accordion-title ".concat(t === r ? "open" : ""),
              children: a.title,
            }),
            (0, i.jsx)(o.Collapse, {
              isOpened: t === r,
              children: (0, i.jsx)("div", {
                className: "accordion-content",
                children: (0, i.jsx)("p", { children: a.description }),
              }),
            }),
          ],
        });
      }
    },
    6300: function (e, t) {
      t.Z = [
        {
          name: "Home",
          dropdown: [
            { name: "Home One", url: "/" },
            { name: "Home Two", url: "/home-2" },
            { name: "Home Three", url: "/home-3" },
          ],
        },
        { name: "About", url: "/about" },
        {
          name: "Services",
          dropdown: [
            { name: "Services", url: "/services" },
            { name: "Service Details", url: "/service-details" },
          ],
        },
        {
          name: "Pages",
          dropdown: [
            { name: "Team", url: "/team" },
            { name: "Team Details", url: "/team-details" },
            { name: "Projects", url: "/projects" },
            { name: "Project Details", url: "/project-details" },
            { name: "Testimonials", url: "/testimonials" },
            { name: "Price Plan", url: "/price-plan" },
            { name: "FAQ", url: "/faqs" },
            { name: "404", url: "/404" },
          ],
        },
        {
          name: "Blog",
          dropdown: [
            { name: "Blog", url: "/blog" },
            { name: "Blog Details", url: "/blog-details" },
          ],
        },
        { name: "Contact", url: "/contact" },
      ];
    },
    6686: function (e, t, n) {
      n.d(t, {
        TT: function () {
          return s;
        },
        fo: function () {
          return l;
        },
        pb: function () {
          return r;
        },
        q: function () {
          return i;
        },
        sb: function () {
          return c;
        },
        tN: function () {
          return o;
        },
        w6: function () {
          return a;
        },
      });
      let i = [
          {
            imgUrl: "/assets/images/project/project1.png",
            title: "Project Development",
            category: "It Management",
          },
          {
            imgUrl: "/assets/images/project/project2.png",
            title: "Project Development",
            category: "It Management",
          },
          {
            imgUrl: "/assets/images/project/project3.png",
            title: "Project Development",
            category: "It Management",
          },
          {
            imgUrl: "/assets/images/project/project1.png",
            title: "Project Development",
            category: "It Management",
          },
          {
            imgUrl: "/assets/images/project/project2.png",
            title: "Project Development",
            category: "It Management",
          },
          {
            imgUrl: "/assets/images/project/project3.png",
            title: "Project Development",
            category: "It Management",
          },
        ],
        o = [
          {
            imgUrl: "/assets/images/project/project4.png",
            title: "Data processing",
            category: "Portfolio Home - Futuristic",
          },
          {
            imgUrl: "/assets/images/project/project07.png",
            title: "Web Analysis",
            category: "Portfolio Home - Futuristic",
          },
          {
            imgUrl: "/assets/images/project/project08.png",
            title: "Digital Marketing",
            category: "Portfolio Home - Futuristic",
          },
          {
            imgUrl: "/assets/images/project/project09.png",
            title: "Software Development",
            category: "Portfolio Home - Futuristic",
          },
          {
            imgUrl: "/assets/images/project/project4.png",
            title: "Data processing",
            category: "Portfolio Home - Futuristic",
          },
          {
            imgUrl: "/assets/images/project/project07.png",
            title: "Web Analysis",
            category: "Portfolio Home - Futuristic",
          },
          {
            imgUrl: "/assets/images/project/project08.png",
            title: "Digital Marketing",
            category: "Portfolio Home - Futuristic",
          },
          {
            imgUrl: "/assets/images/project/project09.png",
            title: "Software Development",
            category: "Portfolio Home - Futuristic",
          },
        ],
        r = [
          {
            name: "Joshua Liddell",
            title: "Company Owner",
            imgUrl: "/assets/images/testimonial/tc1.png",
          },
          {
            name: "Arush Aggarwal",
            title: "Senior Manager",
            imgUrl: "/assets/images/testimonial/tc2.png",
          },
          {
            name: "Rosy Flower Gaggero",
            title: "Ceo And Founder",
            imgUrl: "/assets/images/testimonial/tc3.png",
          },
          {
            name: "Joshua Liddell",
            title: "Company Owner",
            imgUrl: "/assets/images/testimonial/tc1.png",
          },
          {
            name: "Arush Aggarwal",
            title: "Senior Manager",
            imgUrl: "/assets/images/testimonial/tc2.png",
          },
          {
            name: "Rosy Flower Gaggero",
            title: "Ceo And Founder",
            imgUrl: "/assets/images/testimonial/tc3.png",
          },
        ],
        a = [
          {
            description:
              "“Iqbal is fantastic, he understood our requirements in no time and delivered results right on our expectations. He was supportive all through the engagement.”",
            name: "Joshua Liddell",
            title: "Company Owner",
            imgUrl: "/assets/images/testimonial/tc1.png",
          },
          {
            description:
              "“Iqbal is fantastic, he understood our\n        requirements in no time and delivered\n        results right on our expectations. He\n        was supportive all through the\n        engagement.”",
            name: "Arush Aggarwal",
            title: "Senior Manager",
            imgUrl: "/assets/images/testimonial/tc2.png",
          },
          {
            description:
              "“Iqbal is fantastic, he understood our\n        requirements in no time and delivered\n        results right on our expectations. He\n        was supportive all through the\n        engagement.”",
            name: "Rosy Gaggero",
            title: "Ceo And Founder",
            imgUrl: "/assets/images/testimonial/tc3.png",
          },
        ],
        s = [
          {
            imgUrl: "/assets/images/testimonial/tcst1.png",
            name: "Brian Dee",
            title: "Owner & Ceo",
            description:
              "“I requested a UI update gig and received job excellent from Maria! talented young UI/UX designer who will beat your Great experience and quick feedback.”",
          },
          {
            imgUrl: "/assets/images/testimonial/tcst2.png",
            name: "Joshua Liddell",
            title: "Company Owner",
            description:
              "“I requested a UI update gig and received job excellent from Maria! talented young UI/UX designer who will beat your Great experience and quick feedback.”",
          },
          {
            imgUrl: "/assets/images/testimonial/tcst1.png",
            name: "Brian Dee",
            title: "Owner & Ceo",
            description:
              "“I requested a UI update gig and received job excellent from Maria! talented young UI/UX designer who will beat your Great experience and quick feedback.”",
          },
          {
            imgUrl: "/assets/images/testimonial/tcst2.png",
            name: "Joshua Liddell",
            title: "Company Owner",
            description:
              "“I requested a UI update gig and received job excellent from Maria! talented young UI/UX designer who will beat your Great experience and quick feedback.”",
          },
          {
            imgUrl: "/assets/images/testimonial/tcst1.png",
            name: "Brian Dee",
            title: "Owner & Ceo",
            description:
              "“I requested a UI update gig and received job excellent from Maria! talented young UI/UX designer who will beat your Great experience and quick feedback.”",
          },
          {
            imgUrl: "/assets/images/testimonial/tcst2.png",
            name: "Joshua Liddell",
            title: "Company Owner",
            description:
              "“I requested a UI update gig and received job excellent from Maria! talented young UI/UX designer who will beat your Great experience and quick feedback.”",
          },
        ],
        l = [
          {
            title: "Edoardo Romussi",
            category: "Ui/Ux Designer",
            imgUrl: "/assets/images/team/team1.png",
          },
          {
            title: "Jessica James",
            category: "Marketing Coordinator",
            imgUrl: "/assets/images/team/team2.png",
          },
          {
            title: "Adrian Williams",
            category: "Web Designer",
            imgUrl: "/assets/images/team/team3.png",
          },
          {
            title: "Laci Pletcher",
            category: "Process Analyst",
            imgUrl: "/assets/images/team/team4.png",
          },
          {
            title: "Alex Brown",
            category: "Co-Founder",
            imgUrl: "/assets/images/team/team5.png",
          },
          {
            title: "Rebecca Davis",
            category: "Web Developer",
            imgUrl: "/assets/images/team/team6.png",
          },
        ],
        c = [
          {
            title: "What Does Having Managed Your Services Provider?",
            description:
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation.",
          },
          {
            title: "What You About Say Your Business Palnning ?",
            description:
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation.",
          },
          {
            title: "You Have a Unique Way Of The Working in IT?",
            description:
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation.",
          },
          {
            title: "What Types Of Systems Do You Support ?",
            description:
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation.",
          },
        ];
    },
    9627: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(2265);
      function o() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : 100,
          [t, n] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            {
              let t = () => {
                window.scrollY > e ? n(!0) : n(!1);
              };
              return (
                window.addEventListener("scroll", t),
                () => {
                  window.removeEventListener("scroll", t);
                }
              );
            }
          }, []),
          t
        );
      }
    },
    8374: function (e, t, n) {
      function i(e) {
        return (i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Collapse = void 0);
      var o,
        r = (o = n(2265)) && o.__esModule ? o : { default: o };
      function a(e, t) {
        return (a =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function s(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function l(e) {
        return (l = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function c(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var u = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && a(e, t);
        })(u, e);
        var t,
          n,
          o =
            ((t = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                n = l(u);
              return (
                (e = t
                  ? Reflect.construct(n, arguments, l(this).constructor)
                  : n.apply(this, arguments)),
                (function (e, t) {
                  if (t && ("object" === i(t) || "function" == typeof t))
                    return t;
                  if (void 0 !== t)
                    throw TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return s(e);
                })(this, e)
              );
            });
        function u(e) {
          var t;
          return (
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, u),
            c(s((t = o.call(this, e))), "timeout", void 0),
            c(s(t), "container", void 0),
            c(s(t), "content", void 0),
            c(s(t), "onResize", function () {
              if ((clearTimeout(t.timeout), t.container && t.content)) {
                var e = t.props,
                  n = e.isOpened,
                  i = e.checkTimeout,
                  o = Math.floor(t.container.clientHeight),
                  r = Math.floor(t.content.clientHeight),
                  a = n && 1 >= Math.abs(r - o),
                  s = !n && 1 >= Math.abs(o);
                a || s
                  ? t.onRest({
                      isFullyOpened: a,
                      isFullyClosed: s,
                      isOpened: n,
                      containerHeight: o,
                      contentHeight: r,
                    })
                  : (t.onWork({
                      isFullyOpened: a,
                      isFullyClosed: s,
                      isOpened: n,
                      containerHeight: o,
                      contentHeight: r,
                    }),
                    (t.timeout = setTimeout(function () {
                      return t.onResize();
                    }, i)));
              }
            }),
            c(s(t), "onRest", function (e) {
              var n = e.isFullyOpened,
                i = e.isFullyClosed,
                o = e.isOpened,
                r = e.containerHeight,
                a = e.contentHeight;
              if (t.container && t.content) {
                var s = o && t.container.style.height === "".concat(a, "px"),
                  l = !o && "0px" === t.container.style.height;
                if (s || l) {
                  (t.container.style.overflow = o ? "initial" : "hidden"),
                    (t.container.style.height = o ? "auto" : "0px");
                  var c = t.props.onRest;
                  c &&
                    c({
                      isFullyOpened: n,
                      isFullyClosed: i,
                      isOpened: o,
                      containerHeight: r,
                      contentHeight: a,
                    });
                }
              }
            }),
            c(s(t), "onWork", function (e) {
              var n = e.isFullyOpened,
                i = e.isFullyClosed,
                o = e.isOpened,
                r = e.containerHeight,
                a = e.contentHeight;
              if (t.container && t.content) {
                var s = o && t.container.style.height === "".concat(a, "px"),
                  l = !o && "0px" === t.container.style.height;
                if (!s && !l) {
                  (t.container.style.overflow = "hidden"),
                    (t.container.style.height = o ? "".concat(a, "px") : "0px");
                  var c = t.props.onWork;
                  c &&
                    c({
                      isFullyOpened: n,
                      isFullyClosed: i,
                      isOpened: o,
                      containerHeight: r,
                      contentHeight: a,
                    });
                }
              }
            }),
            c(s(t), "onRefContainer", function (e) {
              t.container = e;
            }),
            c(s(t), "onRefContent", function (e) {
              t.content = e;
            }),
            e.initialStyle
              ? (t.initialStyle = e.initialStyle)
              : (t.initialStyle = e.isOpened
                  ? { height: "auto", overflow: "initial" }
                  : { height: "0px", overflow: "hidden" }),
            t
          );
        }
        return (
          (n = [
            {
              key: "componentDidMount",
              value: function () {
                this.onResize();
              },
            },
            {
              key: "shouldComponentUpdate",
              value: function (e) {
                var t = this.props,
                  n = t.theme,
                  i = t.isOpened;
                return (
                  t.children !== e.children ||
                  i !== e.isOpened ||
                  Object.keys(n).some(function (t) {
                    return n[t] !== e.theme[t];
                  })
                );
              },
            },
            {
              key: "getSnapshotBeforeUpdate",
              value: function () {
                if (!this.container || !this.content) return null;
                if ("auto" === this.container.style.height) {
                  var e = this.content.clientHeight;
                  this.container.style.height = "".concat(e, "px");
                }
                return null;
              },
            },
            {
              key: "componentDidUpdate",
              value: function () {
                this.onResize();
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                clearTimeout(this.timeout);
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.theme,
                  n = e.children,
                  i = e.isOpened;
                return r.default.createElement(
                  "div",
                  {
                    ref: this.onRefContainer,
                    className: t.collapse,
                    style: this.initialStyle,
                    "aria-hidden": !i,
                  },
                  r.default.createElement(
                    "div",
                    { ref: this.onRefContent, className: t.content },
                    n
                  )
                );
              },
            },
          ]),
          (function (e, t) {
            for (var n = 0; n < t.length; n++) {
              var i = t[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
            }
          })(u.prototype, n),
          u
        );
      })(r.default.Component);
      (t.Collapse = u),
        c(u, "defaultProps", {
          theme: {
            collapse: "ReactCollapse--collapse",
            content: "ReactCollapse--content",
          },
          initialStyle: void 0,
          onRest: void 0,
          onWork: void 0,
          checkTimeout: 50,
        });
    },
    7264: function (e, t, n) {
      function i(e) {
        return (i =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.UnmountClosed = void 0);
      var o,
        r = (o = n(2265)) && o.__esModule ? o : { default: o },
        a = n(8374),
        s = ["isOpened"],
        l = ["isOpened"];
      function c() {
        return (c =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          }).apply(this, arguments);
      }
      function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? u(Object(n), !0).forEach(function (t) {
                h(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function m(e, t) {
        if (null == e) return {};
        var n,
          i,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              i,
              o = {},
              r = Object.keys(e);
            for (i = 0; i < r.length; i++)
              (n = r[i]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (i = 0; i < r.length; i++)
            (n = r[i]),
              !(t.indexOf(n) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(e, n) &&
                (o[n] = e[n]);
        }
        return o;
      }
      function p(e, t) {
        return (p =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function f(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function g(e) {
        return (g = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function h(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var y = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t)
            throw TypeError(
              "Super expression must either be null or a function"
            );
          (e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            t && p(e, t);
        })(u, e);
        var t,
          n,
          o =
            ((t = (function () {
              if (
                "undefined" == typeof Reflect ||
                !Reflect.construct ||
                Reflect.construct.sham
              )
                return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            })()),
            function () {
              var e,
                n = g(u);
              return (
                (e = t
                  ? Reflect.construct(n, arguments, g(this).constructor)
                  : n.apply(this, arguments)),
                (function (e, t) {
                  if (t && ("object" === i(t) || "function" == typeof t))
                    return t;
                  if (void 0 !== t)
                    throw TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return f(e);
                })(this, e)
              );
            });
        function u(e) {
          var t;
          return (
            !(function (e, t) {
              if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function");
            })(this, u),
            h(f((t = o.call(this, e))), "onWork", function (e) {
              var n = e.isOpened,
                i = m(e, s);
              t.setState({ isResting: !1, isOpened: n });
              var o = t.props.onWork;
              o && o(d({ isOpened: n }, i));
            }),
            h(f(t), "onRest", function (e) {
              var n = e.isOpened,
                i = m(e, l);
              t.setState({ isResting: !0, isOpened: n, isInitialRender: !1 });
              var o = t.props.onRest;
              o && o(d({ isOpened: n }, i));
            }),
            h(f(t), "getInitialStyle", function () {
              var e = t.state,
                n = e.isOpened;
              return e.isInitialRender && n
                ? { height: "auto", overflow: "initial" }
                : { height: "0px", overflow: "hidden" };
            }),
            (t.state = {
              isResting: !0,
              isOpened: e.isOpened,
              isInitialRender: !0,
            }),
            t
          );
        }
        return (
          (n = [
            {
              key: "componentDidUpdate",
              value: function (e) {
                var t = this.props.isOpened;
                e.isOpened !== t &&
                  this.setState({
                    isResting: !1,
                    isOpened: t,
                    isInitialRender: !1,
                  });
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.state,
                  t = e.isResting,
                  n = e.isOpened;
                return t && !n
                  ? null
                  : r.default.createElement(
                      a.Collapse,
                      c({}, this.props, {
                        initialStyle: this.getInitialStyle(),
                        onWork: this.onWork,
                        onRest: this.onRest,
                      })
                    );
              },
            },
          ]),
          (function (e, t) {
            for (var n = 0; n < t.length; n++) {
              var i = t[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
            }
          })(u.prototype, n),
          u
        );
      })(r.default.PureComponent);
      (t.UnmountClosed = y),
        h(y, "defaultProps", { onWork: void 0, onRest: void 0 });
    },
    2888: function (e, t, n) {
      var i = n(8374).Collapse,
        o = n(7264).UnmountClosed;
      (e.exports = o), (o.Collapse = i), (o.UnmountClosed = o);
    },
  },
]);
