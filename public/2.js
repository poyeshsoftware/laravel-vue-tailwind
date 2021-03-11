(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileUploader.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileUploader.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  name: "FileUploader",
  props: {
    fromSrc: String,
    name: String,
    accept: String,
    maxSize: Number,
    isMultiple: Boolean
  },
  data: function data() {
    var _this = this;

    return {
      files: undefined,
      progress: 0,
      message: "",
      rules: [function (value) {
        return !value || !_this.files.some(function (file) {
          return file.size > _this.maxSize * 1024;
        }) || 'Maximum file size exceeded !';
      }]
    };
  },
  methods: {
    selectFile: function selectFile(file) {
      this.progress = 0;
      this.files = file;
      this.upload();
    },
    upload: function upload() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (_this2.files) {
                  _context.next = 3;
                  break;
                }

                _this2.message = "Please select a file!";
                return _context.abrupt("return");

              case 3:
                _this2.message = "";

                _this2.uploadFile(_this2.name, _this2.fromSrc, _this2.files, function (event) {
                  _this2.progress = Math.round(100 * event.loaded / event.total);
                }).then(function (response) {
                  _this2.message = response.data.message;

                  _this2.$emit('uploadFinished', response.data.data);

                  _this2.files = undefined;
                  _this2.progress = 0;
                  _this2.message = "";
                })["catch"](function () {
                  _this2.progress = 0;
                  _this2.message = "Could not upload the file!";
                  _this2.files = undefined;
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    uploadFile: function uploadFile(name, src, file, onUploadProgress) {
      var formData = new FormData();

      if (this.accept === "image/*") {
        for (var i = 0; i < this.files.length; i++) {
          formData.append("image[" + i + "]", this.files[i]);
        }

        formData.append("name", name);
        formData.append("from", src);
        return axios.post("/api/files/image/file-upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          },
          onUploadProgress: onUploadProgress
        });
      }
    },
    label: function label() {
      if (this.accept === "image/*") {
        if (this.isMultiple === false) {
          return "Choose Image";
        } else {
          return "Choose Images";
        }
      } else {
        if (this.isMultiple === false) {
          return "Choose File";
        } else {
          return "Choose Files";
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/books/Books.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/books/Books.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_FileUploader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/FileUploader */ "./resources/js/components/FileUploader.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  name: "books",
  components: {
    FileUploader: _components_FileUploader__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      apiUrl: '',
      search: '',
      resortItems: [],
      dialog: false,
      dialogDelete: false,
      headers: [{
        text: 'Image',
        value: 'image'
      }, {
        text: 'Name',
        value: 'name'
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false
      }],
      editedIndex: -1,
      editedItem: {
        id: 0,
        name: '',
        image: '',
        order_num: 0
      },
      defaultItem: {
        id: 0,
        name: '',
        image: '',
        order_num: 0
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    books: 'books',
    customErrorsMsg: 'customErrorsMsg'
  })), {}, {
    formTitle: function formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
    }
  }),
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    },
    dialogDelete: function dialogDelete(val) {
      val || this.closeDelete();
    }
  },
  created: function created() {
    this.getBooks();
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])({
    getAllBooks: 'getAllBooks',
    setSortBooks: 'setSortBooks',
    RemoveBook: 'RemoveBook',
    AddNewBook: 'AddNewBook',
    UpdateBook: 'UpdateBook'
  })), {}, {
    getBooks: function getBooks() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.getAllBooks();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    editItem: function editItem(item) {
      this.editedIndex = this.books.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem: function deleteItem(item) {
      this.editedIndex = this.books.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    deleteItemConfirm: function deleteItemConfirm() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this2.RemoveBook(_this2.editedItem);

              case 2:
                _this2.closeDelete();

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    close: function close() {
      var _this3 = this;

      this.dialog = false;
      this.$nextTick(function () {
        _this3.editedItem = Object.assign({}, _this3.defaultItem);
        _this3.editedIndex = -1;
      });
    },
    closeDelete: function closeDelete() {
      var _this4 = this;

      this.dialogDelete = false;
      this.$nextTick(function () {
        _this4.editedItem = Object.assign({}, _this4.defaultItem);
        _this4.editedIndex = -1;
      });
    },
    save: function save() {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(_this5.editedIndex === -1)) {
                  _context3.next = 5;
                  break;
                }

                _context3.next = 3;
                return _this5.AddNewBook(_this5.editedItem);

              case 3:
                _context3.next = 7;
                break;

              case 5:
                _context3.next = 7;
                return _this5.UpdateBook(_this5.editedItem);

              case 7:
                _this5.close();

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    // sorting methods
    move: function move(array, element, delta) {
      var _this6 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var index, newIndex, indexes;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this6.resortItems = [];
                index = array.indexOf(element);
                newIndex = index + delta;

                if (!(newIndex < 0 || newIndex == array.length)) {
                  _context4.next = 5;
                  break;
                }

                return _context4.abrupt("return");

              case 5:
                //Already at the top or bottom.
                indexes = [index, newIndex].sort();
                array.splice(indexes[0], 2, array[indexes[1]], array[indexes[0]]); //Replace from lowest index, two elements, reverting the order
                // save items

                _this6.books.forEach(function (value, index) {
                  var order_num = index + 1;

                  _this6.resortItems.push({
                    id: value.id,
                    order_num: order_num
                  });
                });

                _context4.next = 10;
                return _this6.setSortBooks(_this6.resortItems);

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    moveUp: function moveUp(item) {
      this.move(this.books, item, -1);
    },
    moveDown: function moveDown(item) {
      this.move(this.books, item, 1);
    },
    uploadFinished: function uploadFinished(data) {
      this.editedItem.image = data[0].src;
    }
  }),
  mounted: function mounted() {
    this.apiUrl = document.head.querySelector('meta[name="api-base-url"]').content;
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileUploader.vue?vue&type=template&id=4ce61af5&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileUploader.vue?vue&type=template&id=4ce61af5& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    { staticStyle: { width: "100%" } },
    [
      _vm.files
        ? _c("div", { staticStyle: { width: "100%" } }, [
            _c(
              "div",
              { staticStyle: { width: "100%" } },
              [
                _c(
                  "v-progress-linear",
                  {
                    attrs: { color: "light-blue", height: "25", reactive: "" },
                    model: {
                      value: _vm.progress,
                      callback: function($$v) {
                        _vm.progress = $$v
                      },
                      expression: "progress"
                    }
                  },
                  [_c("strong", [_vm._v(_vm._s(_vm.progress) + " %")])]
                )
              ],
              1
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-row",
        { attrs: { "no-gutters": "", justify: "center", align: "center" } },
        [
          _c(
            "v-col",
            { attrs: { cols: "8" } },
            [
              _c("v-file-input", {
                attrs: {
                  disabled: this.name == "",
                  rules: _vm.rules,
                  accept: this.accept,
                  counter: "",
                  multiple: _vm.isMultiple,
                  "prepend-icon": "mdi-camera",
                  label: this.label()
                },
                on: { change: _vm.selectFile },
                model: {
                  value: _vm.files,
                  callback: function($$v) {
                    _vm.files = $$v
                  },
                  expression: "files"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { staticClass: "pl-2", attrs: { cols: "4" } },
            [
              _c(
                "v-btn",
                {
                  attrs: { large: "", depressed: "", color: "primary" },
                  on: { click: _vm.upload }
                },
                [
                  _vm._v("\n                Upload\n                "),
                  _c("v-icon", { attrs: { right: "", dark: "" } }, [
                    _vm._v("mdi-cloud-upload")
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.message
        ? _c(
            "v-alert",
            { attrs: { border: "left", color: "blue-grey", dark: "" } },
            [_vm._v("\n        " + _vm._s(_vm.message) + "\n    ")]
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/books/Books.vue?vue&type=template&id=7d416036&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/books/Books.vue?vue&type=template&id=7d416036& ***!
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
      staticClass:
        "tw-px-3 sm:tw-px-4 xl:tw-px-6 xxl:tw-px-8 tw-pt-1 tw-mx-auto md:tw-overflow-y-scroll md:tw-h-screen tw-pb-24 tw-custom-scrollbar"
    },
    [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "tw-flex tw-flex-wrap tw-border-b tw-border-gray-200 tw-py-6"
        },
        [
          _c("v-data-table", {
            staticClass: "tw-w-full",
            attrs: {
              headers: _vm.headers,
              items: _vm.books,
              "hide-default-footer": "",
              search: _vm.search,
              "disable-pagination": true,
              "disable-sort": true
            },
            scopedSlots: _vm._u([
              {
                key: "top",
                fn: function() {
                  return [
                    _c(
                      "v-toolbar",
                      { attrs: { flat: "" } },
                      [
                        _c("v-text-field", {
                          staticClass: "tw-mr-2 tw-ml-2",
                          attrs: {
                            "append-icon": "mdi-magnify",
                            label: "Search",
                            "single-line": "",
                            "hide-details": ""
                          },
                          model: {
                            value: _vm.search,
                            callback: function($$v) {
                              _vm.search = $$v
                            },
                            expression: "search"
                          }
                        }),
                        _vm._v(" "),
                        _c("v-spacer"),
                        _vm._v(" "),
                        _c(
                          "v-dialog",
                          {
                            attrs: { "max-width": "800px" },
                            scopedSlots: _vm._u([
                              {
                                key: "activator",
                                fn: function(ref) {
                                  var on = ref.on
                                  var attrs = ref.attrs
                                  return [
                                    _c(
                                      "v-btn",
                                      _vm._g(
                                        _vm._b(
                                          {
                                            staticClass: "mb-2",
                                            attrs: {
                                              color: "primary",
                                              dark: ""
                                            }
                                          },
                                          "v-btn",
                                          attrs,
                                          false
                                        ),
                                        on
                                      ),
                                      [
                                        _vm._v(
                                          "\n                                New Item\n                            "
                                        )
                                      ]
                                    )
                                  ]
                                }
                              }
                            ]),
                            model: {
                              value: _vm.dialog,
                              callback: function($$v) {
                                _vm.dialog = $$v
                              },
                              expression: "dialog"
                            }
                          },
                          [
                            _vm._v(" "),
                            _c(
                              "v-card",
                              [
                                _c("v-card-title", [
                                  _c("span", { staticClass: "headline" }, [
                                    _vm._v(_vm._s(_vm.formTitle))
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "v-card-text",
                                  [
                                    _c(
                                      "v-container",
                                      [
                                        _c(
                                          "v-row",
                                          [
                                            _c(
                                              "v-col",
                                              { attrs: { cols: "12" } },
                                              [
                                                _c("v-text-field", {
                                                  attrs: { label: "Name" },
                                                  model: {
                                                    value: _vm.editedItem.name,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.editedItem,
                                                        "name",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "editedItem.name"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _vm.editedItem.image != ""
                                          ? _c(
                                              "v-row",
                                              [
                                                _c("v-img", {
                                                  attrs: {
                                                    "max-height": "150",
                                                    "max-width": "250",
                                                    src:
                                                      _vm.apiUrl +
                                                      "/storage/" +
                                                      _vm.editedItem.image
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.editedItem.image == ""
                                          ? _c(
                                              "v-row",
                                              [
                                                _c(
                                                  "v-col",
                                                  { attrs: { cols: "12" } },
                                                  [
                                                    _c("file-uploader", {
                                                      attrs: {
                                                        "from-src": "books",
                                                        accept: "image/*",
                                                        "is-multiple": false,
                                                        maxSize: 1024,
                                                        name:
                                                          _vm.editedItem.name
                                                      },
                                                      on: {
                                                        uploadFinished:
                                                          _vm.uploadFinished
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            )
                                          : _vm._e()
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-card-actions",
                                  [
                                    _c("v-spacer"),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          color: "blue darken-1",
                                          text: ""
                                        },
                                        on: { click: _vm.close }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                    Cancel\n                                "
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          color: "blue darken-1",
                                          text: ""
                                        },
                                        on: { click: _vm.save }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                    Save\n                                "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "v-dialog",
                          {
                            attrs: { "max-width": "500px" },
                            model: {
                              value: _vm.dialogDelete,
                              callback: function($$v) {
                                _vm.dialogDelete = $$v
                              },
                              expression: "dialogDelete"
                            }
                          },
                          [
                            _c(
                              "v-card",
                              [
                                _c(
                                  "v-card-title",
                                  { staticClass: "headline" },
                                  [
                                    _vm._v(
                                      "Are you sure you want to delete this item?\n                            "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-card-actions",
                                  [
                                    _c("v-spacer"),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          color: "blue darken-1",
                                          text: ""
                                        },
                                        on: { click: _vm.closeDelete }
                                      },
                                      [_vm._v("Cancel")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        attrs: {
                                          color: "blue darken-1",
                                          text: ""
                                        },
                                        on: { click: _vm.deleteItemConfirm }
                                      },
                                      [_vm._v("OK")]
                                    ),
                                    _vm._v(" "),
                                    _c("v-spacer")
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]
                },
                proxy: true
              },
              {
                key: "item.actions",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c(
                      "div",
                      { staticClass: "tw-flex tw-flex-row-reverse tw-p-2" },
                      [
                        _vm.books
                          .map(function(x) {
                            return x.id
                          })
                          .indexOf(item.id) > 0
                          ? _c("font-awesome-icon", {
                              staticClass: "tw-text-xl md:tw-text-2xl tw-mr-4",
                              staticStyle: { cursor: "pointer" },
                              attrs: { icon: "arrow-up" },
                              on: {
                                click: function($event) {
                                  return _vm.moveUp(item)
                                }
                              }
                            })
                          : _c("font-awesome-icon", {
                              staticClass: "tw-text-xl md:tw-text-2xl tw-mr-4",
                              staticStyle: { opacity: "0" },
                              attrs: { icon: "arrow-up" }
                            }),
                        _vm._v(" "),
                        _vm.books
                          .map(function(x) {
                            return x.id
                          })
                          .indexOf(item.id) <
                        _vm.books.length - 1
                          ? _c("font-awesome-icon", {
                              staticClass: "tw-text-2xl tw-mr-4",
                              staticStyle: { cursor: "pointer" },
                              attrs: { icon: "arrow-down" },
                              on: {
                                click: function($event) {
                                  return _vm.moveDown(item)
                                }
                              }
                            })
                          : _c("font-awesome-icon", {
                              staticClass: "tw-text-2xl tw-mr-4",
                              staticStyle: { opacity: "0" },
                              attrs: { icon: "arrow-down" }
                            }),
                        _vm._v(" "),
                        _c("font-awesome-icon", {
                          staticClass: "mr-2 tw-text-xl md:tw-text-2xl tw-mr-4",
                          staticStyle: { cursor: "pointer" },
                          attrs: { icon: "edit" },
                          on: {
                            click: function($event) {
                              return _vm.editItem(item)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("font-awesome-icon", {
                          staticClass: "tw-text-xl md:tw-text-2xl tw-mr-4",
                          staticStyle: { cursor: "pointer" },
                          attrs: { icon: "trash" },
                          on: {
                            click: function($event) {
                              return _vm.deleteItem(item)
                            }
                          }
                        })
                      ],
                      1
                    )
                  ]
                }
              },
              {
                key: "item.name",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c("span", { staticClass: "tw-p-2 tw-text-xl" }, [
                      _vm._v(_vm._s(item.name))
                    ])
                  ]
                }
              },
              {
                key: "item.image",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c("v-img", {
                      staticClass: "tw-p-5",
                      attrs: {
                        contain: "",
                        src: _vm.apiUrl + "/storage/" + item.image,
                        "lazy-src": _vm.apiUrl + "/storage/" + item.image,
                        "max-height": "150",
                        "max-width": "150"
                      }
                    })
                  ]
                }
              }
            ])
          })
        ],
        1
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "header",
      {
        staticClass:
          "tw-flex tw-justify-between tw-items-center md:tw-items-end tw-mb-4 md:tw-h-12 tw-pt-2 md:tw-pt-0"
      },
      [
        _c("div", { staticClass: "tw-flex" }, [
          _c("h1", { staticClass: "tw-text-xl tw-font-medium tw-mb-1" }, [
            _vm._v("Books")
          ])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/FileUploader.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/FileUploader.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileUploader_vue_vue_type_template_id_4ce61af5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileUploader.vue?vue&type=template&id=4ce61af5& */ "./resources/js/components/FileUploader.vue?vue&type=template&id=4ce61af5&");
/* harmony import */ var _FileUploader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileUploader.vue?vue&type=script&lang=js& */ "./resources/js/components/FileUploader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FileUploader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileUploader_vue_vue_type_template_id_4ce61af5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FileUploader_vue_vue_type_template_id_4ce61af5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FileUploader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FileUploader.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/FileUploader.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUploader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FileUploader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileUploader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUploader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FileUploader.vue?vue&type=template&id=4ce61af5&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/FileUploader.vue?vue&type=template&id=4ce61af5& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUploader_vue_vue_type_template_id_4ce61af5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FileUploader.vue?vue&type=template&id=4ce61af5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileUploader.vue?vue&type=template&id=4ce61af5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUploader_vue_vue_type_template_id_4ce61af5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUploader_vue_vue_type_template_id_4ce61af5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/books/Books.vue":
/*!********************************************!*\
  !*** ./resources/js/views/books/Books.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Books_vue_vue_type_template_id_7d416036___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Books.vue?vue&type=template&id=7d416036& */ "./resources/js/views/books/Books.vue?vue&type=template&id=7d416036&");
/* harmony import */ var _Books_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Books.vue?vue&type=script&lang=js& */ "./resources/js/views/books/Books.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Books_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Books_vue_vue_type_template_id_7d416036___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Books_vue_vue_type_template_id_7d416036___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/books/Books.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/books/Books.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/books/Books.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Books.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/books/Books.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/books/Books.vue?vue&type=template&id=7d416036&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/books/Books.vue?vue&type=template&id=7d416036& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_template_id_7d416036___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Books.vue?vue&type=template&id=7d416036& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/books/Books.vue?vue&type=template&id=7d416036&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_template_id_7d416036___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Books_vue_vue_type_template_id_7d416036___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);