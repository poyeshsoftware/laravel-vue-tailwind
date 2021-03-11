(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TopHeader.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TopHeader.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "TopHeader",
  data: function data() {
    return {
      mobileMenuOpen: false
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sidebar/SideBar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sidebar/SideBar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sidebarItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebarItems.js */ "./resources/js/components/sidebar/sidebarItems.js");
/* harmony import */ var _SidebarItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarItem */ "./resources/js/components/sidebar/SidebarItem.vue");
/* harmony import */ var _SidebarGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SidebarGroup */ "./resources/js/components/sidebar/SidebarGroup.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SideBar",
  components: {
    SidebarGroup: _SidebarGroup__WEBPACK_IMPORTED_MODULE_2__["default"],
    SidebarItem: _SidebarItem__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      sidebarOpen: true,
      sidebarItems: _sidebarItems_js__WEBPACK_IMPORTED_MODULE_0__["default"]
    };
  },
  computed: {},
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])({
    signOut: 'auth/signOut'
  })), {}, {
    logOut: function logOut() {
      var _this = this;

      this.signOut().then(function () {
        _this.$router.replace({
          name: 'pageLogin'
        });
      })["catch"](function () {
        console.log('sign out failed');
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sidebar/SidebarGroup.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sidebar/SidebarGroup.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SidebarItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SidebarItem */ "./resources/js/components/sidebar/SidebarItem.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SidebarGroup',
  components: {
    SideBarListItem: _SidebarItem__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    group: {
      type: Object
    },
    groupIndex: {
      type: Number
    }
  },
  data: function data() {
    return {
      openItems: false
    };
  },
  computed: {
    isGroupActive: function isGroupActive() {
      var _this = this;

      return function (sidebarItem) {
        var path = _this.$route.fullPath;
        var open = false;

        var func = function func(sidebarItem) {
          if (sidebarItem.submenu) {
            sidebarItem.submenu.forEach(function (item) {
              if (path == item.url) {
                open = true;
              } else if (item.submenu) {
                func(item);
              }
            });
          }
        };

        func(sidebarItem);
        return open;
      };
    }
  },
  watch: {},
  methods: {
    clickGroup: function clickGroup() {
      this.openItems = !this.openItems;
    },
    mouseover: function mouseover() {},
    mouseout: function mouseout() {}
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sidebar/SidebarItem.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sidebar/SidebarItem.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SidebarItem',
  props: {
    icon: {
      "default": "",
      type: String
    },
    href: {
      "default": '#',
      type: String
    },
    to: {
      "default": null,
      type: String
    },
    slug: {
      "default": null,
      type: String
    },
    index: {
      "default": null,
      type: [String, Number]
    },
    target: {
      "default": '_self',
      type: String
    },
    isDisabled: {
      "default": false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      activeLink: false
    };
  },
  watch: {
    '$route': function $route() {
      this.CheckIsActive();
    }
  },
  methods: {
    CheckIsActive: function CheckIsActive() {
      if (this.to) {
        if (this.to == this.$route.path) {
          this.activeLink = true;
        } else {
          this.activeLink = false;
        } // if (this.$route.path.slice(1).includes(this.to.slice(1)) && this.to.slice(1)) this.activeLink = true
        // else this.activeLink = false

      }
    }
  },
  updated: function updated() {
    this.CheckIsActive();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/main/Main.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/main/Main.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_sidebar_SideBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/sidebar/SideBar */ "./resources/js/components/sidebar/SideBar.vue");
/* harmony import */ var _components_TopHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/TopHeader */ "./resources/js/components/TopHeader.vue");
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    TopHeader: _components_TopHeader__WEBPACK_IMPORTED_MODULE_1__["default"],
    SideBar: _components_sidebar_SideBar__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TopHeader.vue?vue&type=template&id=b0419532&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/TopHeader.vue?vue&type=template&id=b0419532& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "tw-relative tw-bg-white" }, [
    _c("div", { staticClass: "tw-max-w-7xl tw-mx-auto tw-px-4 sm:tw-px-6" }, [
      _c(
        "div",
        {
          staticClass:
            "tw-flex tw-justify-between tw-items-center tw-border-b-2 tw-border-gray-100 tw-py-6 md:tw-justify-start md:tw-space-x-10"
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "-tw-mr-2 -tw-my-2 md:tw-hidden" }, [
            _c(
              "button",
              {
                staticClass:
                  "tw-inline-flex tw-items-center tw-justify-center tw-p-2 tw-rounded-md tw-text-gray-400 hover:tw-text-gray-500 hover:tw-bg-gray-100 focus:tw-outline-none focus:tw-bg-gray-100 focus:tw-text-gray-500 tw-transition tw-duration-150 tw-ease-in-out",
                attrs: { type: "button" }
              },
              [
                _c(
                  "svg",
                  {
                    staticClass: "tw-h-6 tw-w-6",
                    attrs: {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-width": "2",
                        d: "M4 6h16M4 12h16M4 18h16"
                      }
                    })
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _vm._m(2)
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass:
          "tw-absolute top-0 tw-inset-x-0 p-2 tw-transition tw-transform tw-origin-top-right md:tw-hidden"
      },
      [
        _c("div", { staticClass: "tw-rounded-lg tw-shadow-lg" }, [
          _c(
            "div",
            {
              staticClass:
                "tw-rounded-lg tw-shadow-xs tw-bg-white tw-divide-y-2 tw-divide-gray-50"
            },
            [
              _c(
                "div",
                { staticClass: "tw-pt-5 tw-pb-6 tw-px-5 tw-space-y-6" },
                [
                  _c(
                    "div",
                    {
                      staticClass: "tw-flex tw-items-center tw-justify-between"
                    },
                    [
                      _vm._m(3),
                      _vm._v(" "),
                      _c("div", { staticClass: "-tw-mr-2" }, [
                        _c(
                          "button",
                          {
                            staticClass:
                              "tw-inline-flex tw-items-center tw-justify-center tw-p-2 tw-rounded-md tw-text-gray-400 hover:tw-text-gray-500 hover:tw-bg-gray-100 focus:tw-outline-none focus:tw-bg-gray-100 focus:tw-text-gray-500 tw-transition tw-duration-150 tw-ease-in-out",
                            attrs: { type: "button" }
                          },
                          [
                            _c(
                              "svg",
                              {
                                staticClass: "tw-h-6 tw-w-6",
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor"
                                }
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    d: "M6 18L18 6M6 6l12 12"
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", [
                    _c("nav", { staticClass: "tw-grid tw-gap-y-8" }, [
                      _c(
                        "a",
                        {
                          staticClass:
                            "-tw-m-3 tw-p-3 tw-flex tw-items-center tw-space-x-3 tw-rounded-md hover:tw-bg-gray-50 tw-transition tw-ease-in-out tw-duration-150",
                          attrs: { href: "#" }
                        },
                        [
                          _c(
                            "svg",
                            {
                              staticClass:
                                "tw-flex-shrink-0 tw-h-6 tw-w-6 tw-text-indigo-600",
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }
                            },
                            [
                              _c("path", {
                                attrs: {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d:
                                    "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "tw-text-base tw-leading-6 tw-font-medium tw-text-gray-900"
                            },
                            [
                              _vm._v(
                                "\n                                    Menu 1\n                                "
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass:
                            "-tw-m-3 tw-p-3 tw-flex tw-items-center tw-space-x-3 tw-rounded-md hover:tw-bg-gray-50 tw-transition tw-ease-in-out tw-duration-150",
                          attrs: { href: "#" }
                        },
                        [
                          _c(
                            "svg",
                            {
                              staticClass:
                                "tw-flex-shrink-0 tw-h-6 tw-w-6 tw-text-indigo-600",
                              attrs: {
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor"
                              }
                            },
                            [
                              _c("path", {
                                attrs: {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d:
                                    "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "tw-text-base tw-leading-6 tw-font-medium tw-text-gray-900"
                            },
                            [
                              _vm._v(
                                "\n                                    Menu 2\n                                "
                              )
                            ]
                          )
                        ]
                      )
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _vm._m(4)
            ]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "lg:tw-w-0 lg:tw-flex-1" }, [
      _c("a", { staticClass: "tw-flex", attrs: { href: "#" } }, [
        _c("img", {
          staticClass: "tw-h-8 tw-w-auto sm:tw-h-10",
          attrs: {
            src: "https://tailwindui.com/img/logos/workflow-mark-on-white.svg",
            alt: "Workflow"
          }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "tw-hidden md:tw-flex tw-space-x-10" }, [
      _c(
        "a",
        {
          staticClass:
            "tw-text-base tw-leading-6 tw-font-medium tw-text-gray-500 hover:tw-text-gray-900 focus:tw-outline-none focus:tw-text-gray-900 tw-transition tw-ease-in-out tw-duration-150",
          attrs: { href: "#" }
        },
        [_vm._v("\n                    Menu 1\n                ")]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass:
            "tw-text-base tw-leading-6 tw-font-medium tw-text-gray-500 hover:tw-text-gray-900 focus:tw-outline-none focus:tw-text-gray-900 tw-transition tw-ease-in-out tw-duration-150",
          attrs: { href: "#" }
        },
        [_vm._v("\n                    Menu 2\n                ")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "tw-hidden md:tw-flex tw-items-center tw-justify-end tw-space-x-8 md:tw-flex-1 lg:tw-w-0"
      },
      [
        _c(
          "a",
          {
            staticClass:
              "tw-whitespace-no-wrap tw-text-base tw-leading-6 tw-font-medium tw-text-gray-500 hover:tw-text-gray-900 focus:tw-outline-none focus:tw-text-gray-900",
            attrs: { href: "#" }
          },
          [_vm._v("\n                    Sign in\n                ")]
        ),
        _vm._v(" "),
        _c(
          "span",
          { staticClass: "tw-inline-flex tw-rounded-md tw-shadow-sm" },
          [
            _c(
              "a",
              {
                staticClass:
                  "tw-whitespace-no-wrap tw-inline-flex tw-items-center tw-justify-center tw-px-4 tw-py-2 tw-border tw-border-transparent tw-text-base tw-leading-6 tw-font-medium tw-rounded-md tw-text-white tw-bg-indigo-600 hover:tw-bg-indigo-500 focus:tw-outline-none focus:tw-border-indigo-700 focus:tw-shadow-outline-indigo active:tw-bg-indigo-700 tw-transition tw-ease-in-out tw-duration-150",
                attrs: { href: "#" }
              },
              [
                _vm._v(
                  "\n                        Sign up\n                    "
                )
              ]
            )
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("img", {
        staticClass: "tw-h-8 tw-w-auto",
        attrs: {
          src: "https://tailwindui.com/img/logos/workflow-mark-on-white.svg",
          alt: "Workflow"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "tw-py-6 tw-px-5 tw-space-y-6" }, [
      _c(
        "div",
        { staticClass: "tw-grid tw-grid-cols-2 tw-gap-y-4 tw-gap-x-8" },
        [
          _c(
            "a",
            {
              staticClass:
                "tw-text-base tw-leading-6 tw-font-medium tw-text-gray-900 hover:tw-text-gray-700 tw-transition tw-ease-in-out tw-duration-150",
              attrs: { href: "#" }
            },
            [
              _vm._v(
                "\n                            Other Menu 1\n                        "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass:
                "tw-text-base tw-leading-6 tw-font-medium tw-text-gray-900 hover:tw-text-gray-700 tw-transition tw-ease-in-out tw-duration-150",
              attrs: { href: "#" }
            },
            [
              _vm._v(
                "\n                            Other Menu 2\n                        "
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "space-y-6" }, [
        _c(
          "span",
          { staticClass: "tw-w-full tw-flex tw-rounded-md tw-shadow-sm" },
          [
            _c(
              "a",
              {
                staticClass:
                  "tw-w-full tw-flex tw-items-center tw-justify-center tw-px-4 tw-py-2 tw-border tw-border-transparent tw-text-base tw-leading-6 tw-font-medium tw-rounded-md tw-text-white tw-bg-indigo-600 hover:tw-bg-indigo-500 focus:tw-outline-none focus:tw-border-indigo-700 focus:tw-shadow-outline-indigo active:tw-bg-indigo-700 tw-transition tw-ease-in-out tw-duration-150",
                attrs: { href: "#" }
              },
              [
                _vm._v(
                  "\n                                Sign up\n                            "
                )
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "p",
          {
            staticClass:
              "tw-text-center tw-text-base leading-6 tw-font-medium tw-text-gray-500"
          },
          [
            _vm._v(
              "\n                            Existing customer?\n                            "
            ),
            _c(
              "a",
              {
                staticClass:
                  "tw-text-indigo-600 hover:tw-text-indigo-500 tw-transition tw-ease-in-out tw-duration-150",
                attrs: { href: "#" }
              },
              [
                _vm._v(
                  "\n                                Sign in\n                            "
                )
              ]
            )
          ]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sidebar/SideBar.vue?vue&type=template&id=322cbf6e&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sidebar/SideBar.vue?vue&type=template&id=322cbf6e& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "aside",
    {
      staticClass:
        "tw-w-full lg:tw-w-56 xl:tw-w-64 xxl:tw-w-2/12 tw-bg-gray-100 tw-border-r tw-border-gray-300 lg:tw-overflow-hidden"
    },
    [
      _c("div", { staticClass: "lg:tw-flex tw-flex-col lg:tw-h-screen" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "nav",
          {
            staticClass:
              "lg:tw-h-0  tw-mx-auto tw-w-full tw-py-8 tw-px-6  tw-flex-1 md:tw-overflow-y-auto tw-custom-scrollbar tw-hidden lg:tw-block"
          },
          [
            _c(
              "span",
              {
                staticClass:
                  "tw-uppercase tw-text-gray-500 tw-font-medium tw-text-xs tw-tracking-widest tw-block tw-mb-4"
              },
              [_vm._v("Main\n                navigation")]
            ),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "tw-mb-10 tw-text-sm xxl:tw-text-base" },
              [
                _vm._l(_vm.sidebarItems, function(sidebarItem, index) {
                  return [
                    !sidebarItem.submenu
                      ? _c(
                          "sidebar-item",
                          {
                            key: "sidebarItem-" + index,
                            ref: "sidebarLink",
                            refInFor: true,
                            staticClass: "tw-mb-4",
                            attrs: {
                              index: index,
                              to:
                                sidebarItem.slug != "external"
                                  ? sidebarItem.url
                                  : "",
                              href:
                                sidebarItem.slug == "external"
                                  ? sidebarItem.url
                                  : "",
                              icon: sidebarItem.icon,
                              target: sidebarItem.target,
                              isDisabled: sidebarItem.isDisabled,
                              slug: sidebarItem.slug
                            }
                          },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(sidebarItem.name) +
                                "\n                    "
                            )
                          ]
                        )
                      : [
                          _c("sidebar-group", {
                            key: "group-" + index,
                            ref: "sidebarGroup",
                            refInFor: true,
                            attrs: { group: sidebarItem, groupIndex: index }
                          })
                        ]
                  ]
                }),
                _vm._v(" "),
                _c("li", { staticClass: "tw-mb-4" }, [
                  _c(
                    "button",
                    {
                      staticClass:
                        "tw-text-gray-500 tw-flex tw-items-center hover:tw-text-gray-800",
                      on: { click: _vm.logOut }
                    },
                    [
                      _c(
                        "span",
                        {
                          staticClass:
                            "tw-w-6 tw-block tw-text-sm xxl:tw-text-base"
                        },
                        [
                          _c("font-awesome-icon", {
                            attrs: { icon: "sign-out-alt" }
                          })
                        ],
                        1
                      ),
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.$t("Logout")) +
                          "\n                    "
                      )
                    ]
                  )
                ])
              ],
              2
            )
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "tw-bg-gray-700 tw-shadow tw-relative tw-py-2 tw-pl-3 lg:tw-px-6 tw-h-12 tw-flex tw-items-center tw-justify-between"
      },
      [
        _c(
          "a",
          {
            staticClass:
              "tw-text-gray-200 tw-block tw-w-32 tw-relative tw-z-30",
            attrs: { href: "#" }
          },
          [_vm._v("Book Store")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass:
              "tw-rounded tw-outline-none tw-px-3 tw-py-2 tw-leading-none tw-text-white tw-shadow tw-bg-gray-800 tw-font-medium tw-mx-3 tw-text-sm xxl:tw-text-base hover:tw-bg-white hover:tw-text-yellow-100 lg:tw-hidden",
            attrs: { type: "button" }
          },
          [
            _c("span", { staticClass: "tw-block" }, [_vm._v("Menu ")]),
            _vm._v(" "),
            _c("span", { staticClass: "tw-hidden" }, [_vm._v("Close ")])
          ]
        )
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sidebar/SidebarGroup.vue?vue&type=template&id=afa0b37e&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sidebar/SidebarGroup.vue?vue&type=template&id=afa0b37e& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      staticClass: "tw-mb-6",
      on: { mouseover: _vm.mouseover, mouseout: _vm.mouseout }
    },
    [
      _c(
        "a",
        {
          staticClass:
            "tw-text-gray-500 tw-flex tw-items-center tw-justify-between hover:text-gray-800 tw-cursor-pointer",
          on: { click: _vm.clickGroup }
        },
        [
          _c("span", { staticClass: "tw-flex tw-items-center" }, [
            _c(
              "span",
              { staticClass: "tw-w-6 tw-block tw-text-sm xxl:tw-text-base" },
              [
                _vm.group.icon != ""
                  ? _c("font-awesome-icon", { attrs: { icon: _vm.group.icon } })
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.group.name))])
          ]),
          _vm._v(" "),
          _vm.isGroupActive(_vm.group) || _vm.openItems
            ? _c(
                "span",
                [_c("font-awesome-icon", { attrs: { icon: "angle-down" } })],
                1
              )
            : _c(
                "span",
                [_c("font-awesome-icon", { attrs: { icon: "angle-up" } })],
                1
              )
        ]
      ),
      _vm._v(" "),
      _vm.isGroupActive(_vm.group) || _vm.openItems
        ? _c(
            "ul",
            { staticClass: "tw-pl-6 tw-text-sm xxl:tw-text-base tw-block" },
            [
              _vm._l(_vm.group.submenu, function(groupItem, index) {
                return [
                  _c(
                    "side-bar-list-item",
                    {
                      key: _vm.groupIndex + "-sidebarItem-" + index,
                      staticClass: "tw-mt-3 tw-ml-5",
                      attrs: {
                        index: _vm.groupIndex + "-sidebarItem-" + index,
                        to: groupItem.slug != "external" ? groupItem.url : "",
                        href: groupItem.slug == "external" ? groupItem.url : "",
                        target: groupItem.target,
                        isDisabled: groupItem.isDisabled,
                        slug: groupItem.slug
                      }
                    },
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(groupItem.name) +
                          "\n            "
                      )
                    ]
                  )
                ]
              })
            ],
            2
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sidebar/SidebarItem.vue?vue&type=template&id=5af24b7e&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/sidebar/SidebarItem.vue?vue&type=template&id=5af24b7e& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    [
      _vm.to
        ? _c(
            "router-link",
            {
              staticClass:
                "tw-text-gray-500 tw-flex tw-items-center hover:tw-text-gray-800",
              class: [
                { "tw-text-gray-800 router-link-active": _vm.activeLink }
              ],
              attrs: { to: _vm.to, target: _vm.target, exact: "" }
            },
            [
              _vm.icon != ""
                ? _c(
                    "span",
                    {
                      staticClass: "tw-w-6 tw-block tw-text-sm xxl:tw-text-base"
                    },
                    [
                      _vm.icon
                        ? _c("font-awesome-icon", { attrs: { icon: _vm.icon } })
                        : _vm._e()
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm._t("default")
            ],
            2
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/main/Main.vue?vue&type=template&id=0aa7995b&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/main/Main.vue?vue&type=template&id=0aa7995b& ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "tw-bg-gray-100 tw-flex-1 tw-flex tw-flex-col lg:tw-flex-row"
    },
    [
      _c("side-bar"),
      _vm._v(" "),
      _c(
        "main",
        { staticClass: "tw-flex-1 tw-overflow-hidden" },
        [_c("router-view")],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/TopHeader.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/TopHeader.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopHeader_vue_vue_type_template_id_b0419532___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopHeader.vue?vue&type=template&id=b0419532& */ "./resources/js/components/TopHeader.vue?vue&type=template&id=b0419532&");
/* harmony import */ var _TopHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopHeader.vue?vue&type=script&lang=js& */ "./resources/js/components/TopHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TopHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopHeader_vue_vue_type_template_id_b0419532___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TopHeader_vue_vue_type_template_id_b0419532___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TopHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/TopHeader.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/TopHeader.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./TopHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TopHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TopHeader.vue?vue&type=template&id=b0419532&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/TopHeader.vue?vue&type=template&id=b0419532& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopHeader_vue_vue_type_template_id_b0419532___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./TopHeader.vue?vue&type=template&id=b0419532& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/TopHeader.vue?vue&type=template&id=b0419532&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopHeader_vue_vue_type_template_id_b0419532___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopHeader_vue_vue_type_template_id_b0419532___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/sidebar/SideBar.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/sidebar/SideBar.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SideBar_vue_vue_type_template_id_322cbf6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideBar.vue?vue&type=template&id=322cbf6e& */ "./resources/js/components/sidebar/SideBar.vue?vue&type=template&id=322cbf6e&");
/* harmony import */ var _SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideBar.vue?vue&type=script&lang=js& */ "./resources/js/components/sidebar/SideBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SideBar_vue_vue_type_template_id_322cbf6e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SideBar_vue_vue_type_template_id_322cbf6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/sidebar/SideBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/sidebar/SideBar.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/sidebar/SideBar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SideBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sidebar/SideBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/sidebar/SideBar.vue?vue&type=template&id=322cbf6e&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/sidebar/SideBar.vue?vue&type=template&id=322cbf6e& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_template_id_322cbf6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SideBar.vue?vue&type=template&id=322cbf6e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sidebar/SideBar.vue?vue&type=template&id=322cbf6e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_template_id_322cbf6e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_template_id_322cbf6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/sidebar/SidebarGroup.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/sidebar/SidebarGroup.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SidebarGroup_vue_vue_type_template_id_afa0b37e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SidebarGroup.vue?vue&type=template&id=afa0b37e& */ "./resources/js/components/sidebar/SidebarGroup.vue?vue&type=template&id=afa0b37e&");
/* harmony import */ var _SidebarGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarGroup.vue?vue&type=script&lang=js& */ "./resources/js/components/sidebar/SidebarGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SidebarGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SidebarGroup_vue_vue_type_template_id_afa0b37e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SidebarGroup_vue_vue_type_template_id_afa0b37e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/sidebar/SidebarGroup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/sidebar/SidebarGroup.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/sidebar/SidebarGroup.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SidebarGroup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sidebar/SidebarGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/sidebar/SidebarGroup.vue?vue&type=template&id=afa0b37e&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/sidebar/SidebarGroup.vue?vue&type=template&id=afa0b37e& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarGroup_vue_vue_type_template_id_afa0b37e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SidebarGroup.vue?vue&type=template&id=afa0b37e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sidebar/SidebarGroup.vue?vue&type=template&id=afa0b37e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarGroup_vue_vue_type_template_id_afa0b37e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarGroup_vue_vue_type_template_id_afa0b37e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/sidebar/SidebarItem.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/sidebar/SidebarItem.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SidebarItem_vue_vue_type_template_id_5af24b7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SidebarItem.vue?vue&type=template&id=5af24b7e& */ "./resources/js/components/sidebar/SidebarItem.vue?vue&type=template&id=5af24b7e&");
/* harmony import */ var _SidebarItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarItem.vue?vue&type=script&lang=js& */ "./resources/js/components/sidebar/SidebarItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SidebarItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SidebarItem_vue_vue_type_template_id_5af24b7e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SidebarItem_vue_vue_type_template_id_5af24b7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/sidebar/SidebarItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/sidebar/SidebarItem.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/sidebar/SidebarItem.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SidebarItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sidebar/SidebarItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/sidebar/SidebarItem.vue?vue&type=template&id=5af24b7e&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/sidebar/SidebarItem.vue?vue&type=template&id=5af24b7e& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarItem_vue_vue_type_template_id_5af24b7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SidebarItem.vue?vue&type=template&id=5af24b7e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/sidebar/SidebarItem.vue?vue&type=template&id=5af24b7e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarItem_vue_vue_type_template_id_5af24b7e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarItem_vue_vue_type_template_id_5af24b7e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/sidebar/sidebarItems.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/sidebar/sidebarItems.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Structure:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
==========================================================================================*/
/* harmony default export */ __webpack_exports__["default"] = ([{
  url: '/',
  name: "Dashboard",
  slug: "dashboard",
  icon: "home"
}, // {
//   header: "Exercises & Category",
// },
{
  url: null,
  name: "Manage Documents",
  icon: "list",
  submenu: [{
    url: '/categories',
    slug: "categories",
    name: "Categories"
  }, {
    url: '/books',
    slug: "books",
    name: "Books"
  }]
}]);

/***/ }),

/***/ "./resources/js/layouts/main/Main.vue":
/*!********************************************!*\
  !*** ./resources/js/layouts/main/Main.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main_vue_vue_type_template_id_0aa7995b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.vue?vue&type=template&id=0aa7995b& */ "./resources/js/layouts/main/Main.vue?vue&type=template&id=0aa7995b&");
/* harmony import */ var _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.vue?vue&type=script&lang=js& */ "./resources/js/layouts/main/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Main_vue_vue_type_template_id_0aa7995b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Main_vue_vue_type_template_id_0aa7995b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/main/Main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/main/Main.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/layouts/main/Main.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/main/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/main/Main.vue?vue&type=template&id=0aa7995b&":
/*!***************************************************************************!*\
  !*** ./resources/js/layouts/main/Main.vue?vue&type=template&id=0aa7995b& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_0aa7995b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=template&id=0aa7995b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/main/Main.vue?vue&type=template&id=0aa7995b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_0aa7995b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_0aa7995b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);