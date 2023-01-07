(self["webpackChunkpokedex"] = self["webpackChunkpokedex"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --font-poppins: 'Poppins', sans-serif;\r\n  --font-bold: 600;\r\n  --font-regular: 400;\r\n  --grass: rgba(95, 189, 88, 1);\r\n  --bug: rgba(146, 188, 44, 1);\r\n  --dark: rgba(89, 87, 97, 1);\r\n  --dragon: rgba(12, 105, 200, 1);\r\n  --electric: rgba(242, 217, 78, 1);\r\n  --fairy: rgba(238, 144, 230, 1);\r\n  --fighting: rgba(211, 66, 95, 1);\r\n  --fire: rgba(220, 135, 47, 1);\r\n  --flying: rgba(161, 187, 236, 1);\r\n  --ghost: rgba(95, 109, 188, 1);\r\n  --ground: rgba(218, 124, 77, 1);\r\n  --psychic: rgba(117, 208, 193, 1);\r\n  --steel: rgba(86, 149, 163, 1);\r\n  --water: rgba(83, 157, 223, 1);\r\n  --poison: rgba(183, 99, 207, 1);\r\n  --normal: rgba(160, 162, 159, 1);\r\n  --rock: rgba(163, 140, 33, 1);\r\n  --ice: rgba(117, 208, 193, 1);\r\n  --text-dark: #1d293f;\r\n  --text-light: #99a3ad;\r\n  --bg-red: #c82e19;\r\n  --bg-dark: #0d131a;\r\n  --white: #fff;\r\n  --box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);\r\n  --radius-20: 1.25rem;\r\n  --radius-8: 0.5rem;\r\n  --radius-4: 0.25rem;\r\n  --space-8: 0.5rem;\r\n  --space-16: 1rem;\r\n  --space-24: 1.5rem;\r\n  --space-32: 2rem;\r\n  --width-grid: 86vw;\r\n  --gap: 1rem;\r\n  --poke-card-width: var(--width-grid);\r\n  --poke-card-height: calc(var(--poke-card-width) * 40 / 32);\r\n  --poke-card-width2: calc((var(--width-grid) - var(--gap)) / 2);\r\n  --poke-card-height2: calc(var(--poke-card-width2) * 40 / 32);\r\n  --poke-card-width3: calc((var(--width-grid) - 2 * var(--gap)) / 3);\r\n  --poke-card-height3: calc(var(--poke-card-width3) * 40 / 32);\r\n  --poke-card-padding: 1rem;\r\n  --poke-show-width: calc(var(--poke-card-width));\r\n  --poke-show-height: calc(var(--poke-show-width) * 18 / 30);\r\n  --poke-show-width2: calc(var(--poke-card-width2));\r\n  --poke-show-height2: calc(var(--poke-show-width2) * 18 / 30);\r\n  --poke-show-width3: calc(var(--poke-card-width3));\r\n  --poke-show-height3: calc(var(--poke-show-width3) * 18 / 30);\r\n  --poke-card-rem: calc(var(--poke-show-height) / 18);\r\n  --poke-card-rem2: calc(var(--poke-show-height2) / 18);\r\n  --poke-card-rem3: calc(var(--poke-show-height3) / 18);\r\n}\r\n\r\n/* basic styles  */\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: var(--font-poppins);\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  min-height: 100vh;\r\n}\r\n\r\n.container {\r\n  width: 86vw;\r\n  margin: 0 auto;\r\n}\r\n\r\n/* header  */\r\n.header {\r\n  margin: 2rem 0;\r\n}\r\n\r\n.nav-bar {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.nav-item {\r\n  text-decoration: none;\r\n  list-style: none;\r\n}\r\n\r\n.title {\r\n  font-family: var(--font-poppins);\r\n  color: var(--text-dark);\r\n}\r\n\r\n.nav-logo {\r\n  display: block;\r\n  text-align: center;\r\n}\r\n\r\n.nav-link {\r\n  text-decoration: none;\r\n  color: var(--text-dark);\r\n  font-weight: var(--font-bold);\r\n}\r\n\r\n.home-logo {\r\n  height: 5rem;\r\n  width: 5rem;\r\n}\r\n\r\n/* main-cont */\r\n.poke-cards-cont {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  justify-items: center;\r\n  width: 100%;\r\n  margin: 2rem 0 4rem 0;\r\n  column-gap: 2rem;\r\n  row-gap: 2rem;\r\n}\r\n\r\n.poke-card {\r\n  width: var(--poke-card-width);\r\n  height: var(--poke-card-height);\r\n  border-radius: var(--radius-8);\r\n  background: white;\r\n  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.1), 0 10.125px 8.71875px rgba(0, 0, 0, 0.0675), 0 4px 3.25px rgba(0, 0, 0, 0.05), 0 0.875px 1.15625px rgba(0, 0, 0, 0.0325);\r\n}\r\n\r\n.poke-card:hover {\r\n  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\r\n}\r\n\r\n@keyframes shake {\r\n  10%,\r\n  90% {\r\n    transform: translate3d(-1px, 0, 0);\r\n  }\r\n\r\n  20%,\r\n  80% {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  30%,\r\n  50%,\r\n  70% {\r\n    transform: translate3d(-1px, 0, 0);\r\n  }\r\n\r\n  40%,\r\n  60% {\r\n    transform: translate3d(1px, 0, 0);\r\n  }\r\n}\r\n\r\n.poke-show {\r\n  position: relative;\r\n  text-align: center;\r\n  width: var(--poke-show-width);\r\n  height: var(--poke-show-height);\r\n  font-size: var(--poke-card-rem);\r\n  background-size: cover;\r\n  border-radius: var(--radius-8) var(--radius-8) 0 0;\r\n}\r\n\r\n.poke-show-oval {\r\n  position: absolute;\r\n  bottom: -8%;\r\n  left: 5%;\r\n  width: 90%;\r\n  height: 90%;\r\n}\r\n\r\n.poke-id {\r\n  position: absolute;\r\n  top: 0.5em;\r\n  left: 0.5em;\r\n  font-size: 2em;\r\n  font-weight: var(--font-bold);\r\n  color: var(--text-dark);\r\n}\r\n\r\n.poke-id::before {\r\n  content: '#';\r\n}\r\n\r\n.poke-img {\r\n  z-index: 5;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -40%) scale(1);\r\n  height: 70%;\r\n  animation: jump 4s ease-in-out infinite;\r\n}\r\n\r\n@keyframes jump {\r\n  0% {\r\n    transform: translate(-50%, -40%) scale(1);\r\n  }\r\n\r\n  50% {\r\n    transform: translate(-50%, -60%) scale(1.2);\r\n  }\r\n\r\n  100% {\r\n    transform: translate(-50%, -40%) scale(1);\r\n  }\r\n}\r\n\r\n.poke-dets {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: var(--poke-card-rem) 0;\r\n  padding: 0 var(--poke-card-padding);\r\n}\r\n\r\n.poke-name {\r\n  text-transform: capitalize;\r\n  font-weight: var(--font-bold);\r\n  font-size: calc(1.5 * var(--poke-card-rem));\r\n}\r\n\r\n.poke-types {\r\n  font-size: 0.75rem;\r\n}\r\n\r\n.poke-likes {\r\n  text-align: right;\r\n}\r\n\r\n.heart-icon-cont {\r\n  display: block;\r\n  background-color: #f7f7f7;\r\n  background-image: linear-gradient(0deg, #f7f7f7, #e7e7e7);\r\n  position: relative;\r\n  text-align: center;\r\n  margin-left: auto;\r\n  width: calc(3 * var(--poke-card-rem));\r\n  height: calc(3 * var(--poke-card-rem));\r\n  border: solid 1px transparent;\r\n  border-radius: 50%;\r\n  box-shadow: 0 3px 8px #aaa, inset 0 2px 3px #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n.heart-icon-cont::before {\r\n  content: '';\r\n  display: block;\r\n  background: #fff;\r\n  border-top: 2px solid #ddd;\r\n  position: absolute;\r\n  top: -3px;\r\n  left: -3px;\r\n  bottom: -3px;\r\n  right: -3px;\r\n  z-index: -1;\r\n  border-radius: 50%;\r\n  box-shadow: inset 0 2px 2px #ddd;\r\n}\r\n\r\n.like-icon {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  height: 50%;\r\n}\r\n\r\n.heart-icon-cont:hover {\r\n  color: #555;\r\n  background: #f5f5f5;\r\n}\r\n\r\n.heart-icon-cont:active {\r\n  box-shadow: 0 3px 4px #aaa inset, 0 2px 3px #fff;\r\n}\r\n\r\n.likes-count {\r\n  font-weight: var(--font-bold);\r\n  font-size: 1rem;\r\n  color: var(--text-dark);\r\n  margin-top: 0.3rem;\r\n}\r\n\r\n.poke-btns {\r\n  padding: 0 var(--poke-card-padding);\r\n}\r\n\r\n.poke-btn {\r\n  transition: all 0.5s;\r\n  cursor: pointer;\r\n}\r\n\r\n.poke-btn:active {\r\n  filter: invert(25%);\r\n}\r\n\r\n.poke-btn span {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  position: relative;\r\n  transition: 0.5s;\r\n}\r\n\r\n.poke-btn span::after {\r\n  content: '\\00bb';\r\n  font-size: 2rem;\r\n  line-height: 100%;\r\n  position: absolute;\r\n  opacity: 0;\r\n  top: -0.5rem;\r\n  right: -2rem;\r\n  transition: 0.5s;\r\n}\r\n\r\n.poke-btn:hover span {\r\n  padding-right: 25px;\r\n}\r\n\r\n.poke-btn:hover span::after {\r\n  opacity: 1;\r\n  right: 0;\r\n}\r\n\r\n.com-btn,\r\n.res-btn {\r\n  display: block;\r\n  width: 100%;\r\n  height: calc(5 * var(--poke-card-rem));\r\n  border: none;\r\n  border-radius: var(--radius-4);\r\n  font-size: 1rem;\r\n  font-weight: var(--font-bold);\r\n  letter-spacing: 0.15rem;\r\n  color: white;\r\n}\r\n\r\n.com-btn {\r\n  background: var(--bg-red);\r\n}\r\n\r\n.res-btn {\r\n  margin-top: 0.5rem;\r\n  background: var(--bg-dark);\r\n}\r\n\r\n/* footer */\r\n.footer {\r\n  height: 5rem;\r\n  border-top: 1px solid var(--dark);\r\n  border-bottom: 1px solid var(--dark);\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.footer p {\r\n  color: var(--dark);\r\n}\r\n\r\n.button {\r\n  font-size: 1em;\r\n  padding: 10px;\r\n  color: #fff;\r\n  border-radius: 20px/50px;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  background: #000;\r\n}\r\n\r\n.popup {\r\n  position: fixed;\r\n  display: none;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background: rgba(0, 0, 0, 0.7);\r\n  transition: display 500ms;\r\n  z-index: 50;\r\n  padding: 1rem;\r\n}\r\n\r\n.popup:target {\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n\r\n.popup__container {\r\n  margin: 0 auto;\r\n  background: #fff;\r\n  border-radius: 5px;\r\n  position: relative;\r\n  transition: all 0.5s ease-in-out;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  overflow-y: scroll;\r\n  max-height: 100%;\r\n  max-width: 800px;\r\n}\r\n\r\n.popup__container .pokemon-id {\r\n  position: absolute;\r\n  top: 0.5rem;\r\n  left: 1rem;\r\n  font-size: 3.2rem;\r\n  font-weight: var(--font-bold);\r\n  color: var(--text-dark);\r\n  z-index: 10;\r\n}\r\n\r\n.popup__container h2 {\r\n  margin-top: 0;\r\n  color: #333;\r\n  font-family: Tahoma, Arial, sans-serif;\r\n}\r\n\r\n.popup__container .close {\r\n  position: absolute;\r\n  top: 20px;\r\n  right: 30px;\r\n  transition: all 200ms;\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n  text-decoration: none;\r\n  color: var(--white);\r\n  z-index: 1000;\r\n  border: none;\r\n  background: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.popup__container .close:hover {\r\n  color: var(--bg-dark);\r\n}\r\n\r\n.popup__container .content {\r\n  max-height: 30%;\r\n  overflow: auto;\r\n}\r\n\r\n.title-secondary {\r\n  color: var(--text-dark);\r\n  text-transform: capitalize;\r\n}\r\n\r\n.popup__img-container {\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 1rem 1rem 0;\r\n}\r\n\r\n.popup__img {\r\n  width: auto;\r\n  height: 256px;\r\n  position: relative;\r\n  z-index: 100;\r\n}\r\n\r\n.popup__img-bg {\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  z-index: 99;\r\n}\r\n\r\n.popup__content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  padding: 1rem;\r\n  color: var(--dark);\r\n}\r\n\r\n.popup__content-top {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.types {\r\n  display: flex;\r\n  gap: 1rem;\r\n}\r\n\r\n.type-img {\r\n  margin-right: var(--poke-card-rem);\r\n  height: calc(3 * var(--poke-card-rem));\r\n}\r\n\r\n.details-container {\r\n  display: flex;\r\n  gap: 1rem;\r\n}\r\n\r\n.details-container > * {\r\n  width: 48%;\r\n}\r\n\r\n.title-4 {\r\n  color: var(--text-dark);\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.abilities {\r\n  margin-top: 1rem;\r\n}\r\n\r\n.ability {\r\n  text-transform: capitalize;\r\n}\r\n\r\n[tooltip] {\r\n  position: relative;\r\n}\r\n\r\n[tooltip]::before,\r\n[tooltip]::after {\r\n  text-transform: none;\r\n  font-size: 0.9em;\r\n  line-height: 1;\r\n  user-select: none;\r\n  pointer-events: none;\r\n  position: absolute;\r\n  display: none;\r\n  opacity: 0;\r\n  left: 50%;\r\n  transform: translate(-50%, 0.5em);\r\n}\r\n\r\n[tooltip]::before {\r\n  content: '';\r\n  border: 5px solid transparent;\r\n  z-index: 121;\r\n  top: 100%;\r\n  border-top-width: 0;\r\n  border-bottom-color: #333;\r\n}\r\n\r\n[tooltip]::after {\r\n  content: attr(tooltip);\r\n  text-align: center;\r\n  min-width: 3em;\r\n  max-width: 21em;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  padding: 1ch 1.5ch;\r\n  border-radius: 0.3ch;\r\n  box-shadow: 0 1em 2em -0.5em rgba(0, 0, 0, 0.35);\r\n  background: #333;\r\n  color: #fff;\r\n  top: calc(100% + 5px);\r\n  z-index: 120;\r\n}\r\n\r\n[tooltip]:hover::before,\r\n[tooltip]:hover::after {\r\n  display: block;\r\n  animation: tooltips-1 300ms ease-out forwards;\r\n}\r\n\r\n[tooltip='']::before,\r\n[tooltip='']::after {\r\n  display: none !important;\r\n}\r\n\r\n.progress {\r\n  width: 100%;\r\n  margin-bottom: 20px;\r\n  align-items: center;\r\n}\r\n\r\n.progress__bar-container {\r\n  position: relative;\r\n  width: 100%;\r\n  background-color: #eee;\r\n}\r\n\r\n.progress__bar {\r\n  display: block;\r\n  float: none;\r\n  width: 0%;\r\n  height: 4px;\r\n  background: var(--bg-red);\r\n  box-shadow: inset 0 -1px 2px rgba(0, 0, 0, 0.1);\r\n  transition: width 0.8s ease-in-out;\r\n}\r\n\r\n/* key frames  */\r\n@keyframes tooltips-1 {\r\n  to {\r\n    opacity: 0.9;\r\n    transform: translate(-50%, 0);\r\n  }\r\n}\r\n\r\n@keyframes tooltips-2 {\r\n  to {\r\n    opacity: 0.9;\r\n    transform: translate(0, -50%);\r\n  }\r\n}\r\n\r\n.comments {\r\n  margin: 1rem 0;\r\n}\r\n\r\n.comments__list {\r\n  list-style: none;\r\n  margin-top: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.comments__item {\r\n  display: flex;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.comment__item-user {\r\n  font-weight: 500;\r\n}\r\n\r\n.add-comments__form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.add-comments__input {\r\n  padding: 0.5rem;\r\n}\r\n\r\n.add-comments__input--hidden {\r\n  display: none;\r\n}\r\n\r\n.text--center {\r\n  text-align: center;\r\n}\r\n\r\n.add-comments__btn:hover {\r\n  background: var(--fighting);\r\n}\r\n\r\n/* This applies from 768px onwards */\r\n@media (min-width: 48rem) and (max-width: 69rem) {\r\n  .poke-cards-cont {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n\r\n  .nav-bar {\r\n    flex-direction: row;\r\n    gap: 2.5rem;\r\n  }\r\n\r\n  .poke-card {\r\n    width: var(--poke-card-width2);\r\n    height: var(--poke-card-height2);\r\n  }\r\n\r\n  .poke-show {\r\n    width: var(--poke-show-width2);\r\n    height: var(--poke-show-height2);\r\n    font-size: var(--poke-card-rem2);\r\n  }\r\n\r\n  .poke-dets {\r\n    margin: var(--poke-card-rem2) 0;\r\n  }\r\n\r\n  .poke-name {\r\n    font-size: calc(1.5 * var(--poke-card-rem2));\r\n  }\r\n\r\n  .type-img {\r\n    margin-right: var(--poke-card-rem2);\r\n    height: calc(3 * var(--poke-card-rem2));\r\n  }\r\n\r\n  .heart-icon-cont {\r\n    width: calc(3 * var(--poke-card-rem2));\r\n    height: calc(3 * var(--poke-card-rem2));\r\n  }\r\n\r\n  .com-btn,\r\n  .res-btn {\r\n    height: calc(5 * var(--poke-card-rem2));\r\n    font-size: var(--poke-card-rem2);\r\n    letter-spacing: calc(0.15 * var(--poke-card-rem2));\r\n  }\r\n}\r\n\r\n/* This applies from 1101px onwards */\r\n@media (min-width: 69rem) {\r\n  .poke-cards-cont {\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n\r\n  .nav-bar {\r\n    flex-direction: row;\r\n    gap: 2.5rem;\r\n  }\r\n\r\n  .poke-card {\r\n    width: var(--poke-card-width3);\r\n    height: var(--poke-card-height3);\r\n  }\r\n\r\n  .poke-show {\r\n    width: var(--poke-show-width3);\r\n    height: var(--poke-show-height3);\r\n    font-size: var(--poke-card-rem3);\r\n  }\r\n\r\n  .poke-dets {\r\n    margin: var(--poke-card-rem3) 0;\r\n  }\r\n\r\n  .poke-name {\r\n    font-size: calc(1.5 * var(--poke-card-rem3));\r\n  }\r\n\r\n  .type-img {\r\n    margin-right: var(--poke-card-rem3);\r\n    height: calc(3 * var(--poke-card-rem3));\r\n  }\r\n\r\n  .heart-icon-cont {\r\n    width: calc(3 * var(--poke-card-rem3));\r\n    height: calc(3 * var(--poke-card-rem3));\r\n  }\r\n\r\n  .com-btn,\r\n  .res-btn {\r\n    height: calc(5 * var(--poke-card-rem3));\r\n    font-size: var(--poke-card-rem3);\r\n    letter-spacing: calc(0.15 * var(--poke-card-rem3));\r\n  }\r\n}\r\n\r\n.container--progress .progress,\r\n.measerments .measurement,\r\n.abilities .ability,\r\n.comments__item {\r\n  padding-left: 1rem;\r\n}\r\n\r\n@media (max-width: 36em) {\r\n  .details-container {\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n  }\r\n\r\n  .details-container > * {\r\n    width: 100%;\r\n  }\r\n\r\n  .comments__item {\r\n    flex-direction: column;\r\n    border: 1px solid var(--bg-dark);\r\n    padding-top: 0.5rem;\r\n    padding-bottom: 0.5rem;\r\n    border-radius: 0.5rem;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');\r\n\r\n:root {\r\n  --font-poppins: 'Poppins', sans-serif;\r\n  --font-bold: 600;\r\n  --font-regular: 400;\r\n  --grass: rgba(95, 189, 88, 1);\r\n  --bug: rgba(146, 188, 44, 1);\r\n  --dark: rgba(89, 87, 97, 1);\r\n  --dragon: rgba(12, 105, 200, 1);\r\n  --electric: rgba(242, 217, 78, 1);\r\n  --fairy: rgba(238, 144, 230, 1);\r\n  --fighting: rgba(211, 66, 95, 1);\r\n  --fire: rgba(220, 135, 47, 1);\r\n  --flying: rgba(161, 187, 236, 1);\r\n  --ghost: rgba(95, 109, 188, 1);\r\n  --ground: rgba(218, 124, 77, 1);\r\n  --psychic: rgba(117, 208, 193, 1);\r\n  --steel: rgba(86, 149, 163, 1);\r\n  --water: rgba(83, 157, 223, 1);\r\n  --poison: rgba(183, 99, 207, 1);\r\n  --normal: rgba(160, 162, 159, 1);\r\n  --rock: rgba(163, 140, 33, 1);\r\n  --ice: rgba(117, 208, 193, 1);\r\n  --text-dark: #1d293f;\r\n  --text-light: #99a3ad;\r\n  --bg-red: #c82e19;\r\n  --bg-dark: #0d131a;\r\n  --white: #fff;\r\n  --box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);\r\n  --radius-20: 1.25rem;\r\n  --radius-8: 0.5rem;\r\n  --radius-4: 0.25rem;\r\n  --space-8: 0.5rem;\r\n  --space-16: 1rem;\r\n  --space-24: 1.5rem;\r\n  --space-32: 2rem;\r\n  --width-grid: 86vw;\r\n  --gap: 1rem;\r\n  --poke-card-width: var(--width-grid);\r\n  --poke-card-height: calc(var(--poke-card-width) * 40 / 32);\r\n  --poke-card-width2: calc((var(--width-grid) - var(--gap)) / 2);\r\n  --poke-card-height2: calc(var(--poke-card-width2) * 40 / 32);\r\n  --poke-card-width3: calc((var(--width-grid) - 2 * var(--gap)) / 3);\r\n  --poke-card-height3: calc(var(--poke-card-width3) * 40 / 32);\r\n  --poke-card-padding: 1rem;\r\n  --poke-show-width: calc(var(--poke-card-width));\r\n  --poke-show-height: calc(var(--poke-show-width) * 18 / 30);\r\n  --poke-show-width2: calc(var(--poke-card-width2));\r\n  --poke-show-height2: calc(var(--poke-show-width2) * 18 / 30);\r\n  --poke-show-width3: calc(var(--poke-card-width3));\r\n  --poke-show-height3: calc(var(--poke-show-width3) * 18 / 30);\r\n  --poke-card-rem: calc(var(--poke-show-height) / 18);\r\n  --poke-card-rem2: calc(var(--poke-show-height2) / 18);\r\n  --poke-card-rem3: calc(var(--poke-show-height3) / 18);\r\n}\r\n\r\n/* basic styles  */\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: var(--font-poppins);\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  min-height: 100vh;\r\n}\r\n\r\n.container {\r\n  width: 86vw;\r\n  margin: 0 auto;\r\n}\r\n\r\n/* header  */\r\n.header {\r\n  margin: 2rem 0;\r\n}\r\n\r\n.nav-bar {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.nav-item {\r\n  text-decoration: none;\r\n  list-style: none;\r\n}\r\n\r\n.title {\r\n  font-family: var(--font-poppins);\r\n  color: var(--text-dark);\r\n}\r\n\r\n.nav-logo {\r\n  display: block;\r\n  text-align: center;\r\n}\r\n\r\n.nav-link {\r\n  text-decoration: none;\r\n  color: var(--text-dark);\r\n  font-weight: var(--font-bold);\r\n}\r\n\r\n.home-logo {\r\n  height: 5rem;\r\n  width: 5rem;\r\n}\r\n\r\n/* main-cont */\r\n.poke-cards-cont {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  justify-items: center;\r\n  width: 100%;\r\n  margin: 2rem 0 4rem 0;\r\n  column-gap: 2rem;\r\n  row-gap: 2rem;\r\n}\r\n\r\n.poke-card {\r\n  width: var(--poke-card-width);\r\n  height: var(--poke-card-height);\r\n  border-radius: var(--radius-8);\r\n  background: white;\r\n  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.1), 0 10.125px 8.71875px rgba(0, 0, 0, 0.0675), 0 4px 3.25px rgba(0, 0, 0, 0.05), 0 0.875px 1.15625px rgba(0, 0, 0, 0.0325);\r\n}\r\n\r\n.poke-card:hover {\r\n  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\r\n}\r\n\r\n@keyframes shake {\r\n  10%,\r\n  90% {\r\n    transform: translate3d(-1px, 0, 0);\r\n  }\r\n\r\n  20%,\r\n  80% {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  30%,\r\n  50%,\r\n  70% {\r\n    transform: translate3d(-1px, 0, 0);\r\n  }\r\n\r\n  40%,\r\n  60% {\r\n    transform: translate3d(1px, 0, 0);\r\n  }\r\n}\r\n\r\n.poke-show {\r\n  position: relative;\r\n  text-align: center;\r\n  width: var(--poke-show-width);\r\n  height: var(--poke-show-height);\r\n  font-size: var(--poke-card-rem);\r\n  background-size: cover;\r\n  border-radius: var(--radius-8) var(--radius-8) 0 0;\r\n}\r\n\r\n.poke-show-oval {\r\n  position: absolute;\r\n  bottom: -8%;\r\n  left: 5%;\r\n  width: 90%;\r\n  height: 90%;\r\n}\r\n\r\n.poke-id {\r\n  position: absolute;\r\n  top: 0.5em;\r\n  left: 0.5em;\r\n  font-size: 2em;\r\n  font-weight: var(--font-bold);\r\n  color: var(--text-dark);\r\n}\r\n\r\n.poke-id::before {\r\n  content: '#';\r\n}\r\n\r\n.poke-img {\r\n  z-index: 5;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -40%) scale(1);\r\n  height: 70%;\r\n  animation: jump 4s ease-in-out infinite;\r\n}\r\n\r\n@keyframes jump {\r\n  0% {\r\n    transform: translate(-50%, -40%) scale(1);\r\n  }\r\n\r\n  50% {\r\n    transform: translate(-50%, -60%) scale(1.2);\r\n  }\r\n\r\n  100% {\r\n    transform: translate(-50%, -40%) scale(1);\r\n  }\r\n}\r\n\r\n.poke-dets {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: var(--poke-card-rem) 0;\r\n  padding: 0 var(--poke-card-padding);\r\n}\r\n\r\n.poke-name {\r\n  text-transform: capitalize;\r\n  font-weight: var(--font-bold);\r\n  font-size: calc(1.5 * var(--poke-card-rem));\r\n}\r\n\r\n.poke-types {\r\n  font-size: 0.75rem;\r\n}\r\n\r\n.poke-likes {\r\n  text-align: right;\r\n}\r\n\r\n.heart-icon-cont {\r\n  display: block;\r\n  background-color: #f7f7f7;\r\n  background-image: linear-gradient(0deg, #f7f7f7, #e7e7e7);\r\n  position: relative;\r\n  text-align: center;\r\n  margin-left: auto;\r\n  width: calc(3 * var(--poke-card-rem));\r\n  height: calc(3 * var(--poke-card-rem));\r\n  border: solid 1px transparent;\r\n  border-radius: 50%;\r\n  box-shadow: 0 3px 8px #aaa, inset 0 2px 3px #fff;\r\n  cursor: pointer;\r\n}\r\n\r\n.heart-icon-cont::before {\r\n  content: '';\r\n  display: block;\r\n  background: #fff;\r\n  border-top: 2px solid #ddd;\r\n  position: absolute;\r\n  top: -3px;\r\n  left: -3px;\r\n  bottom: -3px;\r\n  right: -3px;\r\n  z-index: -1;\r\n  border-radius: 50%;\r\n  box-shadow: inset 0 2px 2px #ddd;\r\n}\r\n\r\n.like-icon {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  height: 50%;\r\n}\r\n\r\n.heart-icon-cont:hover {\r\n  color: #555;\r\n  background: #f5f5f5;\r\n}\r\n\r\n.heart-icon-cont:active {\r\n  box-shadow: 0 3px 4px #aaa inset, 0 2px 3px #fff;\r\n}\r\n\r\n.likes-count {\r\n  font-weight: var(--font-bold);\r\n  font-size: 1rem;\r\n  color: var(--text-dark);\r\n  margin-top: 0.3rem;\r\n}\r\n\r\n.poke-btns {\r\n  padding: 0 var(--poke-card-padding);\r\n}\r\n\r\n.poke-btn {\r\n  transition: all 0.5s;\r\n  cursor: pointer;\r\n}\r\n\r\n.poke-btn:active {\r\n  filter: invert(25%);\r\n}\r\n\r\n.poke-btn span {\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  position: relative;\r\n  transition: 0.5s;\r\n}\r\n\r\n.poke-btn span::after {\r\n  content: '\\00bb';\r\n  font-size: 2rem;\r\n  line-height: 100%;\r\n  position: absolute;\r\n  opacity: 0;\r\n  top: -0.5rem;\r\n  right: -2rem;\r\n  transition: 0.5s;\r\n}\r\n\r\n.poke-btn:hover span {\r\n  padding-right: 25px;\r\n}\r\n\r\n.poke-btn:hover span::after {\r\n  opacity: 1;\r\n  right: 0;\r\n}\r\n\r\n.com-btn,\r\n.res-btn {\r\n  display: block;\r\n  width: 100%;\r\n  height: calc(5 * var(--poke-card-rem));\r\n  border: none;\r\n  border-radius: var(--radius-4);\r\n  font-size: 1rem;\r\n  font-weight: var(--font-bold);\r\n  letter-spacing: 0.15rem;\r\n  color: white;\r\n}\r\n\r\n.com-btn {\r\n  background: var(--bg-red);\r\n}\r\n\r\n.res-btn {\r\n  margin-top: 0.5rem;\r\n  background: var(--bg-dark);\r\n}\r\n\r\n/* footer */\r\n.footer {\r\n  height: 5rem;\r\n  border-top: 1px solid var(--dark);\r\n  border-bottom: 1px solid var(--dark);\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.footer p {\r\n  color: var(--dark);\r\n}\r\n\r\n.button {\r\n  font-size: 1em;\r\n  padding: 10px;\r\n  color: #fff;\r\n  border-radius: 20px/50px;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  background: #000;\r\n}\r\n\r\n.popup {\r\n  position: fixed;\r\n  display: none;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background: rgba(0, 0, 0, 0.7);\r\n  transition: display 500ms;\r\n  z-index: 50;\r\n  padding: 1rem;\r\n}\r\n\r\n.popup:target {\r\n  visibility: visible;\r\n  opacity: 1;\r\n}\r\n\r\n.popup__container {\r\n  margin: 0 auto;\r\n  background: #fff;\r\n  border-radius: 5px;\r\n  position: relative;\r\n  transition: all 0.5s ease-in-out;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  overflow-y: scroll;\r\n  max-height: 100%;\r\n  max-width: 800px;\r\n}\r\n\r\n.popup__container .pokemon-id {\r\n  position: absolute;\r\n  top: 0.5rem;\r\n  left: 1rem;\r\n  font-size: 3.2rem;\r\n  font-weight: var(--font-bold);\r\n  color: var(--text-dark);\r\n  z-index: 10;\r\n}\r\n\r\n.popup__container h2 {\r\n  margin-top: 0;\r\n  color: #333;\r\n  font-family: Tahoma, Arial, sans-serif;\r\n}\r\n\r\n.popup__container .close {\r\n  position: absolute;\r\n  top: 20px;\r\n  right: 30px;\r\n  transition: all 200ms;\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n  text-decoration: none;\r\n  color: var(--white);\r\n  z-index: 1000;\r\n  border: none;\r\n  background: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.popup__container .close:hover {\r\n  color: var(--bg-dark);\r\n}\r\n\r\n.popup__container .content {\r\n  max-height: 30%;\r\n  overflow: auto;\r\n}\r\n\r\n.title-secondary {\r\n  color: var(--text-dark);\r\n  text-transform: capitalize;\r\n}\r\n\r\n.popup__img-container {\r\n  position: relative;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 1rem 1rem 0;\r\n}\r\n\r\n.popup__img {\r\n  width: auto;\r\n  height: 256px;\r\n  position: relative;\r\n  z-index: 100;\r\n}\r\n\r\n.popup__img-bg {\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  z-index: 99;\r\n}\r\n\r\n.popup__content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  padding: 1rem;\r\n  color: var(--dark);\r\n}\r\n\r\n.popup__content-top {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.types {\r\n  display: flex;\r\n  gap: 1rem;\r\n}\r\n\r\n.type-img {\r\n  margin-right: var(--poke-card-rem);\r\n  height: calc(3 * var(--poke-card-rem));\r\n}\r\n\r\n.details-container {\r\n  display: flex;\r\n  gap: 1rem;\r\n}\r\n\r\n.details-container > * {\r\n  width: 48%;\r\n}\r\n\r\n.title-4 {\r\n  color: var(--text-dark);\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.abilities {\r\n  margin-top: 1rem;\r\n}\r\n\r\n.ability {\r\n  text-transform: capitalize;\r\n}\r\n\r\n[tooltip] {\r\n  position: relative;\r\n}\r\n\r\n[tooltip]::before,\r\n[tooltip]::after {\r\n  text-transform: none;\r\n  font-size: 0.9em;\r\n  line-height: 1;\r\n  user-select: none;\r\n  pointer-events: none;\r\n  position: absolute;\r\n  display: none;\r\n  opacity: 0;\r\n  left: 50%;\r\n  transform: translate(-50%, 0.5em);\r\n}\r\n\r\n[tooltip]::before {\r\n  content: '';\r\n  border: 5px solid transparent;\r\n  z-index: 121;\r\n  top: 100%;\r\n  border-top-width: 0;\r\n  border-bottom-color: #333;\r\n}\r\n\r\n[tooltip]::after {\r\n  content: attr(tooltip);\r\n  text-align: center;\r\n  min-width: 3em;\r\n  max-width: 21em;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  padding: 1ch 1.5ch;\r\n  border-radius: 0.3ch;\r\n  box-shadow: 0 1em 2em -0.5em rgba(0, 0, 0, 0.35);\r\n  background: #333;\r\n  color: #fff;\r\n  top: calc(100% + 5px);\r\n  z-index: 120;\r\n}\r\n\r\n[tooltip]:hover::before,\r\n[tooltip]:hover::after {\r\n  display: block;\r\n  animation: tooltips-1 300ms ease-out forwards;\r\n}\r\n\r\n[tooltip='']::before,\r\n[tooltip='']::after {\r\n  display: none !important;\r\n}\r\n\r\n.progress {\r\n  width: 100%;\r\n  margin-bottom: 20px;\r\n  align-items: center;\r\n}\r\n\r\n.progress__bar-container {\r\n  position: relative;\r\n  width: 100%;\r\n  background-color: #eee;\r\n}\r\n\r\n.progress__bar {\r\n  display: block;\r\n  float: none;\r\n  width: 0%;\r\n  height: 4px;\r\n  background: var(--bg-red);\r\n  box-shadow: inset 0 -1px 2px rgba(0, 0, 0, 0.1);\r\n  transition: width 0.8s ease-in-out;\r\n}\r\n\r\n/* key frames  */\r\n@keyframes tooltips-1 {\r\n  to {\r\n    opacity: 0.9;\r\n    transform: translate(-50%, 0);\r\n  }\r\n}\r\n\r\n@keyframes tooltips-2 {\r\n  to {\r\n    opacity: 0.9;\r\n    transform: translate(0, -50%);\r\n  }\r\n}\r\n\r\n.comments {\r\n  margin: 1rem 0;\r\n}\r\n\r\n.comments__list {\r\n  list-style: none;\r\n  margin-top: 1rem;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\n.comments__item {\r\n  display: flex;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.comment__item-user {\r\n  font-weight: 500;\r\n}\r\n\r\n.add-comments__form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n  margin-top: 1rem;\r\n}\r\n\r\n.add-comments__input {\r\n  padding: 0.5rem;\r\n}\r\n\r\n.add-comments__input--hidden {\r\n  display: none;\r\n}\r\n\r\n.text--center {\r\n  text-align: center;\r\n}\r\n\r\n.add-comments__btn:hover {\r\n  background: var(--fighting);\r\n}\r\n\r\n/* This applies from 768px onwards */\r\n@media (min-width: 48rem) and (max-width: 69rem) {\r\n  .poke-cards-cont {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n\r\n  .nav-bar {\r\n    flex-direction: row;\r\n    gap: 2.5rem;\r\n  }\r\n\r\n  .poke-card {\r\n    width: var(--poke-card-width2);\r\n    height: var(--poke-card-height2);\r\n  }\r\n\r\n  .poke-show {\r\n    width: var(--poke-show-width2);\r\n    height: var(--poke-show-height2);\r\n    font-size: var(--poke-card-rem2);\r\n  }\r\n\r\n  .poke-dets {\r\n    margin: var(--poke-card-rem2) 0;\r\n  }\r\n\r\n  .poke-name {\r\n    font-size: calc(1.5 * var(--poke-card-rem2));\r\n  }\r\n\r\n  .type-img {\r\n    margin-right: var(--poke-card-rem2);\r\n    height: calc(3 * var(--poke-card-rem2));\r\n  }\r\n\r\n  .heart-icon-cont {\r\n    width: calc(3 * var(--poke-card-rem2));\r\n    height: calc(3 * var(--poke-card-rem2));\r\n  }\r\n\r\n  .com-btn,\r\n  .res-btn {\r\n    height: calc(5 * var(--poke-card-rem2));\r\n    font-size: var(--poke-card-rem2);\r\n    letter-spacing: calc(0.15 * var(--poke-card-rem2));\r\n  }\r\n}\r\n\r\n/* This applies from 1101px onwards */\r\n@media (min-width: 69rem) {\r\n  .poke-cards-cont {\r\n    grid-template-columns: repeat(3, 1fr);\r\n  }\r\n\r\n  .nav-bar {\r\n    flex-direction: row;\r\n    gap: 2.5rem;\r\n  }\r\n\r\n  .poke-card {\r\n    width: var(--poke-card-width3);\r\n    height: var(--poke-card-height3);\r\n  }\r\n\r\n  .poke-show {\r\n    width: var(--poke-show-width3);\r\n    height: var(--poke-show-height3);\r\n    font-size: var(--poke-card-rem3);\r\n  }\r\n\r\n  .poke-dets {\r\n    margin: var(--poke-card-rem3) 0;\r\n  }\r\n\r\n  .poke-name {\r\n    font-size: calc(1.5 * var(--poke-card-rem3));\r\n  }\r\n\r\n  .type-img {\r\n    margin-right: var(--poke-card-rem3);\r\n    height: calc(3 * var(--poke-card-rem3));\r\n  }\r\n\r\n  .heart-icon-cont {\r\n    width: calc(3 * var(--poke-card-rem3));\r\n    height: calc(3 * var(--poke-card-rem3));\r\n  }\r\n\r\n  .com-btn,\r\n  .res-btn {\r\n    height: calc(5 * var(--poke-card-rem3));\r\n    font-size: var(--poke-card-rem3);\r\n    letter-spacing: calc(0.15 * var(--poke-card-rem3));\r\n  }\r\n}\r\n\r\n.container--progress .progress,\r\n.measerments .measurement,\r\n.abilities .ability,\r\n.comments__item {\r\n  padding-left: 1rem;\r\n}\r\n\r\n@media (max-width: 36em) {\r\n  .details-container {\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n  }\r\n\r\n  .details-container > * {\r\n    width: 100%;\r\n  }\r\n\r\n  .comments__item {\r\n    flex-direction: column;\r\n    border: 1px solid var(--bg-dark);\r\n    padding-top: 0.5rem;\r\n    padding-bottom: 0.5rem;\r\n    border-radius: 0.5rem;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/main.css");
/* harmony import */ var _modules_start_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/start.js */ "./src/modules/start.js");
/* harmony import */ var _assets_icon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/icon.png */ "./src/assets/icon.png");
/* harmony import */ var _assets_oval_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/oval.svg */ "./src/assets/oval.svg");
/* harmony import */ var _assets_bug_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/bug.svg */ "./src/assets/bug.svg");
/* harmony import */ var _assets_dark_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/dark.svg */ "./src/assets/dark.svg");
/* harmony import */ var _assets_dragon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/dragon.svg */ "./src/assets/dragon.svg");
/* harmony import */ var _assets_electric_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/electric.svg */ "./src/assets/electric.svg");
/* harmony import */ var _assets_fairy_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/fairy.svg */ "./src/assets/fairy.svg");
/* harmony import */ var _assets_fighting_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/fighting.svg */ "./src/assets/fighting.svg");
/* harmony import */ var _assets_fire_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/fire.svg */ "./src/assets/fire.svg");
/* harmony import */ var _assets_flying_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/flying.svg */ "./src/assets/flying.svg");
/* harmony import */ var _assets_ghost_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/ghost.svg */ "./src/assets/ghost.svg");
/* harmony import */ var _assets_grass_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/grass.svg */ "./src/assets/grass.svg");
/* harmony import */ var _assets_ground_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/ground.svg */ "./src/assets/ground.svg");
/* harmony import */ var _assets_ice_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/ice.svg */ "./src/assets/ice.svg");
/* harmony import */ var _assets_normal_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/normal.svg */ "./src/assets/normal.svg");
/* harmony import */ var _assets_poison_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/poison.svg */ "./src/assets/poison.svg");
/* harmony import */ var _assets_psychic_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/psychic.svg */ "./src/assets/psychic.svg");
/* harmony import */ var _assets_rock_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/rock.svg */ "./src/assets/rock.svg");
/* harmony import */ var _assets_steel_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assets/steel.svg */ "./src/assets/steel.svg");
/* harmony import */ var _assets_water_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assets/water.svg */ "./src/assets/water.svg");
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./assets/logo.svg */ "./src/assets/logo.svg");
























(0,_modules_start_js__WEBPACK_IMPORTED_MODULE_1__["default"])();


/***/ }),

/***/ "./src/modules/AllPokesCounter.js":
/*!****************************************!*\
  !*** ./src/modules/AllPokesCounter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function AllPokesCounter() {
  const pokeCount = document.getElementsByClassName('poke-card').length;
  const pokeCountText = document.getElementById('poke-counter');
  pokeCountText.innerHTML = `(${pokeCount})`;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllPokesCounter);

/***/ }),

/***/ "./src/modules/InvolvementApiService.js":
/*!**********************************************!*\
  !*** ./src/modules/InvolvementApiService.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class InvolvementApiService {
  #baseLikesUrl;

  static #likesUrl;

  static {
    this.#likesUrl = new URL('/capstoneApi/apps/uVghFZUXyAONTeUqAIXl/likes',
      'https://us-central1-involvement-api.cloudfunctions.net');
  }

  constructor() {
    const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net';
    this.#baseLikesUrl = new URL('/capstoneApi/apps/uVghFZUXyAONTeUqAIXl/likes', baseUrl);
  }

  static postLikeById = async (pokeId) => {
    const response = await fetch(this.#likesUrl, {
      method: 'POST',
      body: JSON.stringify({
        item_id: pokeId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response;
  }

  static getLikesById = async (pokeId) => {
    const allLikes = await this.getAllLikes();
    const likes = allLikes.find((item) => item.item_id === pokeId);

    return (likes !== undefined) ? likes.likes : 0;
  }

  static getAllLikes = async () => fetch(this.#likesUrl)
    .then((response) => response.json());
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InvolvementApiService);

/***/ }),

/***/ "./src/modules/PokeApiService.js":
/*!***************************************!*\
  !*** ./src/modules/PokeApiService.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PokePresenter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PokePresenter.js */ "./src/modules/PokePresenter.js");


class PokeApiService {
  #baseUrl;

  constructor() {
    this.#baseUrl = new URL('/api/v2/pokemon/', 'https://pokeapi.co');
  }

  getSomePokemonData = async (start, numItems) => {
    const pokemons = [];

    for (let id = 0; id < numItems; id += 1) {
      pokemons.push(this.getPokemonData(start + id));
    }

    return Promise.all(pokemons);
  }

  getPokemonData = async (pokeId) => {
    const pokedata = await fetch(this.#baseUrl + pokeId)
      .then((response) => response.json());
    const {
      id, name, sprites, types,
    } = pokedata;
    const pokeTypes = [];
    types.forEach((element) => {
      pokeTypes.push(element.type.name);
    });
    return new _PokePresenter_js__WEBPACK_IMPORTED_MODULE_0__["default"](id, name, sprites.other.dream_world.front_default, pokeTypes);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PokeApiService);

/***/ }),

/***/ "./src/modules/PokeListPresenter.js":
/*!******************************************!*\
  !*** ./src/modules/PokeListPresenter.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PokeApiService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PokeApiService.js */ "./src/modules/PokeApiService.js");
/* harmony import */ var _InvolvementApiService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InvolvementApiService.js */ "./src/modules/InvolvementApiService.js");
/* harmony import */ var _PokeListView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PokeListView.js */ "./src/modules/PokeListView.js");




class PokeListPresenter {
  #model;

  #view;

  constructor() {
    this.#model = new _PokeApiService_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.#view = new _PokeListView_js__WEBPACK_IMPORTED_MODULE_2__["default"](this);
  }

  get view() {
    return this.#view;
  }

  get cardsUi() {
    return (async () => {
      const likes = await _InvolvementApiService_js__WEBPACK_IMPORTED_MODULE_1__["default"].getAllLikes();
      const cards = [];
      const pokeData = await this.#model.getSomePokemonData(15, 18);

      let lik;
      pokeData.forEach((element) => {
        lik = likes.find((item) => item.item_id === element.id);
        element.likes = (lik !== undefined) ? lik.likes : 0;
        cards.push(element.view.ui);
      });

      return cards;
    })();
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PokeListPresenter);

/***/ }),

/***/ "./src/modules/PokeListView.js":
/*!*************************************!*\
  !*** ./src/modules/PokeListView.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class PokeListView {
  #presenter;

  #ui;

  constructor(presenter) {
    this.#presenter = presenter;
    this.#ui = this.#createDOMElements();
  }

  get ui() {
    return this.#ui;
  }

  #createDOMElements = async () => {
    const pokeList = document.createElement('div');
    pokeList.setAttribute('class', 'poke-cards-cont');
    const list = await this.#presenter.cardsUi;

    list.forEach((cardUi) => {
      pokeList.appendChild(cardUi);
    });

    return pokeList;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PokeListView);

/***/ }),

/***/ "./src/modules/PokeModel.js":
/*!**********************************!*\
  !*** ./src/modules/PokeModel.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class PokeModel {
  constructor(id, name, imgLink, types) {
    this.id = id;
    this.name = name;
    this.imgLink = imgLink;
    this.types = types;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PokeModel);

/***/ }),

/***/ "./src/modules/PokePresenter.js":
/*!**************************************!*\
  !*** ./src/modules/PokePresenter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InvolvementApiService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InvolvementApiService.js */ "./src/modules/InvolvementApiService.js");
/* harmony import */ var _PokeModel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PokeModel.js */ "./src/modules/PokeModel.js");
/* harmony import */ var _PokeView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PokeView.js */ "./src/modules/PokeView.js");




class PokePresenter {
  #model;

  #view;

  #likes;

  constructor(id, name, imgLink, types) {
    this.#model = new _PokeModel_js__WEBPACK_IMPORTED_MODULE_1__["default"](id, name, imgLink, types);
    this.#view = new _PokeView_js__WEBPACK_IMPORTED_MODULE_2__["default"](this);
    this.#likes = 0;
  }

  get view() {
    return this.#view;
  }

  get id() {
    return this.#model.id;
  }

  get imgLink() {
    return this.#model.imgLink;
  }

  get name() {
    return this.#model.name;
  }

  get types() {
    return this.#model.types;
  }

  get likes() {
    return this.#likes;
  }

  set likes(count) {
    this.#likes = count;
    this.#view.updateLikes(count);
  }

  addLike = async () => {
    const response = await _InvolvementApiService_js__WEBPACK_IMPORTED_MODULE_0__["default"].postLikeById(this.#model.id);

    if (response.status === 201) {
      this.#likes += 1;
      this.#view.updateLikes(this.#likes);
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PokePresenter);

/***/ }),

/***/ "./src/modules/PokeView.js":
/*!*********************************!*\
  !*** ./src/modules/PokeView.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_heart_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/heart-icon.svg */ "./src/assets/heart-icon.svg");
/* harmony import */ var _assets_oval_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/oval.svg */ "./src/assets/oval.svg");
/* harmony import */ var _generatePokemon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generatePokemon.js */ "./src/modules/generatePokemon.js");




class PokeView {
  #presenter;

  #ui;

  #likes;

  #colors = {
    grass: '#5fbd58',
    bug: '#92bc2c',
    dark: '#595761',
    dragon: '#0c69c8',
    electric: '#f2d94e',
    fairy: '#ee90e6',
    fighting: '#d3425f',
    fire: '#dc872f',
    flying: '#a1bbec',
    ground: '#da7c4d',
    ghost: '#5f6dbc',
    psychic: '#75d0c1',
    steel: '#5695a3',
    water: '#539ddf',
    poison: '#b763cf',
    normal: '#a0a29f',
    rock: '#a38c21',
    ice: '#75d0c1',
  }

  constructor(presenter) {
    this.#presenter = presenter;
    this.#ui = this.#createDOMElements();
    this.updateLikes();
  }

  get ui() {
    return this.#ui;
  }

  updateLikes = (newCount) => {
    this.#likes.innerText = `${newCount} likes`;
  }

  getBgColor = () => {
    let startColor = '';
    let endColor = '';

    if (this.#presenter.types.length === 2) {
      startColor = this.#colors[this.#presenter.types[0]];

      endColor = this.#colors[this.#presenter.types[1]];
    } else if (this.#presenter.types.length === 1) {
      startColor = this.#colors[this.#presenter.types[0]];
      endColor = startColor;
    } else {
      startColor = '#fff';
      endColor = '#fff';
    }
    return `background-image: linear-gradient(${startColor}, ${endColor})`;
  }

  #createDOMElements = () => {
    const pokeCard = document.createElement('div');
    pokeCard.setAttribute('class', 'poke-card');

    let div = document.createElement('div');
    div.setAttribute('class', 'poke-show');
    div.style = this.getBgColor();

    let img = document.createElement('img');
    img.setAttribute('class', 'poke-img');
    img.setAttribute('loading', 'lazy');
    img.src = this.#presenter.imgLink;
    div.appendChild(img);

    img = document.createElement('img');
    img.setAttribute('class', 'poke-show-oval');
    img.setAttribute('loading', 'lazy');
    img.src = _assets_oval_svg__WEBPACK_IMPORTED_MODULE_1__;
    div.appendChild(img);

    let p = document.createElement('p');
    p.setAttribute('class', 'poke-id');
    p.innerText = this.#presenter.id;
    div.appendChild(p);
    pokeCard.appendChild(div);

    // Pokemon details
    div = document.createElement('div');
    div.setAttribute('class', 'poke-dets');
    let div2 = document.createElement('div');
    div2.setAttribute('class', 'poke-data');

    p = document.createElement('p');
    p.setAttribute('class', 'poke-name');
    p.innerText = this.#presenter.name;
    div2.appendChild(p);

    let typeIcon;
    const typeIcons = document.createElement('div');
    typeIcons.setAttribute('class', 'poke-types');
    this.#presenter.types.forEach((type) => {
      typeIcon = document.createElement('img');
      typeIcon.setAttribute('class', 'type-img');
      typeIcon.setAttribute('title', `${type}`);
      typeIcon.src = `./assets/${type}.svg`;
      div2.appendChild(typeIcon);
    });
    div.appendChild(div2);
    pokeCard.appendChild(div);

    div2 = document.createElement('div');
    div2.setAttribute('class', 'poke-likes');
    const iconCont = document.createElement('button');
    iconCont.setAttribute('class', 'heart-icon-cont');
    iconCont.setAttribute('type', 'button');

    img = document.createElement('img');
    img.setAttribute('class', 'like-icon');
    img.src = _assets_heart_icon_svg__WEBPACK_IMPORTED_MODULE_0__;
    img.addEventListener('click', this.#presenter.addLike);
    iconCont.appendChild(img);
    div2.appendChild(iconCont);

    this.#likes = document.createElement('p');
    this.#likes.setAttribute('class', 'likes-count');
    this.#likes.innerText = '0 likes';
    div2.appendChild(this.#likes);
    div.appendChild(div2);
    pokeCard.appendChild(div);

    // Buttons
    div = document.createElement('div');
    div.setAttribute('class', 'poke-btns');
    let btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    btn.setAttribute('class', 'com-btn poke-btn');
    let span = document.createElement('span');
    span.innerText = 'COMMENTS';
    btn.appendChild(span);
    btn.addEventListener('click', async () => {
      await (0,_generatePokemon_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.#presenter.id);
    });
    div.appendChild(btn);
    btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    btn.setAttribute('class', 'res-btn poke-btn');
    span = document.createElement('span');
    span.innerText = 'RESERVATIONS';
    btn.appendChild(span);
    btn.addEventListener('click', this.#presenter.openReservations);
    div.appendChild(btn);
    pokeCard.appendChild(div);

    return pokeCard;
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PokeView);


/***/ }),

/***/ "./src/modules/commentsCounter.js":
/*!****************************************!*\
  !*** ./src/modules/commentsCounter.js ***!
  \****************************************/
/***/ ((module) => {

const commentsCounter = (commentList) => {
  let counter = 0;

  if (!commentList.error) {
    commentList.forEach((comment, index) => {
      counter = index + 1;
    });
  }
  return counter;
};

module.exports = commentsCounter;


/***/ }),

/***/ "./src/modules/generateComments.js":
/*!*****************************************!*\
  !*** ./src/modules/generateComments.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _commentsCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentsCounter.js */ "./src/modules/commentsCounter.js");
/* harmony import */ var _commentsCounter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_commentsCounter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getPokemonComments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getPokemonComments.js */ "./src/modules/getPokemonComments.js");



const generateComments = async (pokiId) => {
  const result = await (0,_getPokemonComments_js__WEBPACK_IMPORTED_MODULE_1__["default"])(pokiId);
  let generateHtml = '';

  const totalComments = await _commentsCounter_js__WEBPACK_IMPORTED_MODULE_0___default()(result);

  if (!result.error && result.length > 0) {
    await result.forEach(async (comment, id) => {
      generateHtml += `<li class="comments__item" id=${id}>
          <span class="comment__item-date">${comment.creation_date}</span>
          <span class="comment__item-user">${comment.username}:</span>
          <span class="comment__item-text">${comment.comment}</span>
        </li>`;
    });
  } else {
    generateHtml
      += '<li class="comments__item"><span class="comment__item-user">No comments.</span></li>';
  }
  generateHtml = `<h2 class="title-secondary">Comments (${totalComments})</h2>
  <ul class="comments__list">
   ${generateHtml}
  </ul>`;
  return generateHtml;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateComments);


/***/ }),

/***/ "./src/modules/generatePokeBg.js":
/*!***************************************!*\
  !*** ./src/modules/generatePokeBg.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const generateColor = async (type) => {
  let color;
  switch (type) {
    case 'grass':
      color = '#5fbd58';
      break;
    case 'bug':
      color = '#92bc2c';
      break;
    case 'dark':
      color = '#595761';
      break;
    case 'dragon':
      color = '#0c69c8';
      break;
    case 'electric':
      color = '#f2d94e';
      break;
    case 'fairy':
      color = '#ee90e6';
      break;
    case 'fighting':
      color = '#d3425f';
      break;
    case 'fire':
      color = '#dc872f';
      break;
    case 'flying':
      color = '#a1bbec';
      break;
    case 'ground':
      color = '#da7c4d';
      break;
    case 'ghost':
      color = '#5f6dbc';
      break;
    case 'psychic':
      color = '#75d0c1';
      break;
    case 'steel':
      color = '#5695a3';
      break;
    case 'water':
      color = '#539ddf';
      break;
    case 'poison':
      color = '#b763cf';
      break;
    case 'normal':
      color = '#a0a29f';
      break;
    case 'rock':
      color = '#a38c21';
      break;
    case 'ice':
      color = '#75d0c1';
      break;

    default:
      color = '#fff';
      break;
  }
  return color;
};

const generatePokeBg = async (types) => {
  let startColor = '';
  let endColor = '';
  if (types.length === 2) {
    startColor = await generateColor(types[0].type.name);
    endColor = await generateColor(types[1].type.name);
  } else if (types.length === 1) {
    startColor = await generateColor(types[0].type.name);
    endColor = startColor;
  } else {
    startColor = '#fff';
    endColor = '#fff';
  }
  const result = await `background: linear-gradient(${startColor}, ${endColor})`;
  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generatePokeBg);


/***/ }),

/***/ "./src/modules/generatePokemon.js":
/*!****************************************!*\
  !*** ./src/modules/generatePokemon.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _generatePokeBg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generatePokeBg.js */ "./src/modules/generatePokeBg.js");
/* harmony import */ var _getPokemonData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getPokemonData.js */ "./src/modules/getPokemonData.js");
/* harmony import */ var _generateComments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generateComments.js */ "./src/modules/generateComments.js");
/* harmony import */ var _postComments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./postComments.js */ "./src/modules/postComments.js");





const pokiPopup = document.querySelector('#pokiPopup');

const generateTypesHtml = async (types) => {
  let generateHtml = '';

  if (types.length > 0) {
    await types.forEach(async (type) => {
      generateHtml += `<div tooltip="${type.type.name}">
    <img class="type-img" src="./assets/${type.type.name}.svg" alt="${type.type.name}" />
  </div>`;
    });
  }

  return generateHtml;
};

const generateStatsHtml = (stats) => {
  let generateHtml = '';
  if (stats.length > 0) {
    stats.forEach((stat, id) => {
      generateHtml += `<div class="progress" id="${id}">
      <div class="progress__title">${stat.stat.name}</div>
      <div class="progress__bar-container">
        <div
          tooltip="${stat.base_stat}%"
          class="progress__bar"
          data-percent="${stat.base_stat}"
          style="width: ${stat.base_stat}%"
        ></div>
      </div>
    </div>`;
    });
  }
  return generateHtml;
};

const generateAbilitiesHtml = (abilities) => {
  let generateHtml = '';
  if (abilities.length > 0) {
    abilities.forEach((ability) => {
      generateHtml += `<p class="ability">${ability.ability.name}</p>`;
    });
  }
  return generateHtml;
};

const generatePokemon = async (pokiId) => {
  const result = await (0,_getPokemonData_js__WEBPACK_IMPORTED_MODULE_1__["default"])(pokiId);
  const {
    abilities, height, weight, id, name, stats, types, sprites,
  } = result;
  const img = sprites.other.dream_world.front_default;
  const typesHtml = await generateTypesHtml(types);
  const generatedPokeBg = await (0,_generatePokeBg_js__WEBPACK_IMPORTED_MODULE_0__["default"])(types);
  const abilitiesHtml = await generateAbilitiesHtml(abilities);
  const statsHtml = await generateStatsHtml(stats);
  const comments = await (0,_generateComments_js__WEBPACK_IMPORTED_MODULE_2__["default"])(pokiId);

  const generatedPokemonHtml = await `<div class="popup__container" id= ${id}>
    <p class="pokemon-id">#${pokiId}</p>
    <button class="close">&times;</button>
    <div class="popup__img-container" style="${generatedPokeBg}">
      <img class="popup__img" src="${img}" alt="${name}" />
      <img src="./assets/oval.svg" alt="" class="popup__img-bg" />
    </div>
    <div class="popup__content">
      <div class="popup__content-top">
        <h2 class="title-secondary">${name}</h2>
      </div>
      <div class="types">
        ${typesHtml}
      </div>
      <div class="details-container">
        <div class="container--progress">
          <h4 class="title-4">Base status:</h4>
          ${statsHtml}
        </div>
        <div class="details-right">
          <div class="measerments">
            <h4 class="title-4">Measurements:</h4>
            <p class="measurement">
              <span class="measurement__title">Height : </span> ${height} M
            </p>
            <p class="measurement">
              <span class="measurement__title">weight : </span> ${weight} kg
            </p>
          </div>
          <div class="abilities">
            <h4 class="title-4">Abilities:</h4>
            ${abilitiesHtml}
          </div>
        </div>
      </div>
      <div class="comments">
      ${comments}
    </div>
    <div class="add-comments">
      <h2 class="title-secondary text--center">Add comment</h2>
      <form method="post" class="add-comments__form" id="addNewComment">
        <input
          value="${id}"
          type="text"
          name="item_id"
          class="add-comments__input--hidden"
        />
        <input
          name="username"
          type="text"
          class="add-comments__input"
          placeholder="Your name"
        />
        <textarea
          placeholder="Your insights"
          name="comment"
          cols="2"
          rows="2"
          class="add-comments__input"
        ></textarea>
        <button class="add-comments__btn com-btn poke-btn">Comment</button>
      </form>
    </div>
    </div>
  </div>`;
  pokiPopup.innerHTML = generatedPokemonHtml;
  pokiPopup.style.display = 'block';
  const closeModal = () => {
    pokiPopup.style.display = 'none';
  };

  const newComment = document.querySelector('#addNewComment');
  newComment.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const itemId = data.get('item_id');
    const username = data.get('username');
    const comment = data.get('comment');
    if (itemId && username && comment) {
      const result = await (0,_postComments_js__WEBPACK_IMPORTED_MODULE_3__["default"])({
        item_id: itemId,
        username,
        comment,
      });

      if (result === 201) {
        const generatedCommentsHtml = await (0,_generateComments_js__WEBPACK_IMPORTED_MODULE_2__["default"])(itemId);
        document.querySelector('.comments').innerHTML = generatedCommentsHtml;
        newComment.reset();
      }
    }
  });

  document.querySelector('.close').addEventListener('click', closeModal);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generatePokemon);


/***/ }),

/***/ "./src/modules/getPokemonComments.js":
/*!*******************************************!*\
  !*** ./src/modules/getPokemonComments.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getCommentsData = async (pokiId = 0) => {
  const endpoint = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/uVghFZUXyAONTeUqAIXl/comments?item_id=${pokiId}`;
  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    return response.json();
  } catch (err) {
    throw new Error(
      `There was the following problem: ${err} while fetching ${endpoint}`,
    );
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCommentsData);


/***/ }),

/***/ "./src/modules/getPokemonData.js":
/*!***************************************!*\
  !*** ./src/modules/getPokemonData.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getPokemonData = async (pokiId) => {
  const endpoint = `https://pokeapi.co/api/v2/pokemon/${pokiId}`;
  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error(response.statusText);
    return response.json();
  } catch (err) {
    throw new Error(
      `There was the following problem: ${err} while fetching ${endpoint}`,
    );
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPokemonData);


/***/ }),

/***/ "./src/modules/postComments.js":
/*!*************************************!*\
  !*** ./src/modules/postComments.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const postComment = async (data) => {
  const endpoint = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/uVghFZUXyAONTeUqAIXl/comments';
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.status;
  } catch (err) {
    throw new Error(
      `There was the following problem: ${err} while fetching ${endpoint}`,
    );
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postComment);


/***/ }),

/***/ "./src/modules/start.js":
/*!******************************!*\
  !*** ./src/modules/start.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AllPokesCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllPokesCounter.js */ "./src/modules/AllPokesCounter.js");
/* harmony import */ var _PokeListPresenter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PokeListPresenter.js */ "./src/modules/PokeListPresenter.js");



async function start() {
  const cont = document.getElementById('cont');
  const presenter = new _PokeListPresenter_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  cont.appendChild(await presenter.view.ui);
  (0,_AllPokesCounter_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (start);


/***/ }),

/***/ "./src/assets/bug.svg":
/*!****************************!*\
  !*** ./src/assets/bug.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/bug.svg";

/***/ }),

/***/ "./src/assets/dark.svg":
/*!*****************************!*\
  !*** ./src/assets/dark.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/dark.svg";

/***/ }),

/***/ "./src/assets/dragon.svg":
/*!*******************************!*\
  !*** ./src/assets/dragon.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/dragon.svg";

/***/ }),

/***/ "./src/assets/electric.svg":
/*!*********************************!*\
  !*** ./src/assets/electric.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/electric.svg";

/***/ }),

/***/ "./src/assets/fairy.svg":
/*!******************************!*\
  !*** ./src/assets/fairy.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/fairy.svg";

/***/ }),

/***/ "./src/assets/fighting.svg":
/*!*********************************!*\
  !*** ./src/assets/fighting.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/fighting.svg";

/***/ }),

/***/ "./src/assets/fire.svg":
/*!*****************************!*\
  !*** ./src/assets/fire.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/fire.svg";

/***/ }),

/***/ "./src/assets/flying.svg":
/*!*******************************!*\
  !*** ./src/assets/flying.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/flying.svg";

/***/ }),

/***/ "./src/assets/ghost.svg":
/*!******************************!*\
  !*** ./src/assets/ghost.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/ghost.svg";

/***/ }),

/***/ "./src/assets/grass.svg":
/*!******************************!*\
  !*** ./src/assets/grass.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/grass.svg";

/***/ }),

/***/ "./src/assets/ground.svg":
/*!*******************************!*\
  !*** ./src/assets/ground.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/ground.svg";

/***/ }),

/***/ "./src/assets/heart-icon.svg":
/*!***********************************!*\
  !*** ./src/assets/heart-icon.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/heart-icon.svg";

/***/ }),

/***/ "./src/assets/ice.svg":
/*!****************************!*\
  !*** ./src/assets/ice.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/ice.svg";

/***/ }),

/***/ "./src/assets/icon.png":
/*!*****************************!*\
  !*** ./src/assets/icon.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/icon.png";

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/logo.svg";

/***/ }),

/***/ "./src/assets/normal.svg":
/*!*******************************!*\
  !*** ./src/assets/normal.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/normal.svg";

/***/ }),

/***/ "./src/assets/oval.svg":
/*!*****************************!*\
  !*** ./src/assets/oval.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/oval.svg";

/***/ }),

/***/ "./src/assets/poison.svg":
/*!*******************************!*\
  !*** ./src/assets/poison.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/poison.svg";

/***/ }),

/***/ "./src/assets/psychic.svg":
/*!********************************!*\
  !*** ./src/assets/psychic.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/psychic.svg";

/***/ }),

/***/ "./src/assets/rock.svg":
/*!*****************************!*\
  !*** ./src/assets/rock.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/rock.svg";

/***/ }),

/***/ "./src/assets/steel.svg":
/*!******************************!*\
  !*** ./src/assets/steel.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/steel.svg";

/***/ }),

/***/ "./src/assets/water.svg":
/*!******************************!*\
  !*** ./src/assets/water.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/water.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxVQUFVLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxPQUFPLFlBQVksT0FBTyxNQUFNLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUss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Ozs7Ozs7Ozs7Ozs7O0FDaEI5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG9DQUFvQztBQUNyRDtBQUNBLEtBQUs7QUFDTDtBQUNBLElBQUk7QUFDSjtBQUNBLDBDQUEwQyxLQUFLLGlCQUFpQixTQUFTO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQndCO0FBQ0k7O0FBRXZEO0FBQ0E7QUFDQSx3QkFBd0IsNkRBQWlCO0FBQ3pDO0FBQ0EsRUFBRSwrREFBZTtBQUNqQjtBQUNBLGlFQUFlLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Bva2VkZXgvLi9zcmMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vcG9rZWRleC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcG9rZWRleC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Bva2VkZXgvLi9zcmMvbWFpbi5jc3M/ZGRkMyIsIndlYnBhY2s6Ly9wb2tlZGV4Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Bva2VkZXgvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Bva2VkZXgvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcG9rZWRleC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wb2tlZGV4Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcG9rZWRleC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Bva2VkZXgvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcG9rZWRleC8uL3NyYy9tb2R1bGVzL0FsbFBva2VzQ291bnRlci5qcyIsIndlYnBhY2s6Ly9wb2tlZGV4Ly4vc3JjL21vZHVsZXMvSW52b2x2ZW1lbnRBcGlTZXJ2aWNlLmpzIiwid2VicGFjazovL3Bva2VkZXgvLi9zcmMvbW9kdWxlcy9Qb2tlQXBpU2VydmljZS5qcyIsIndlYnBhY2s6Ly9wb2tlZGV4Ly4vc3JjL21vZHVsZXMvUG9rZUxpc3RQcmVzZW50ZXIuanMiLCJ3ZWJwYWNrOi8vcG9rZWRleC8uL3NyYy9tb2R1bGVzL1Bva2VMaXN0Vmlldy5qcyIsIndlYnBhY2s6Ly9wb2tlZGV4Ly4vc3JjL21vZHVsZXMvUG9rZU1vZGVsLmpzIiwid2VicGFjazovL3Bva2VkZXgvLi9zcmMvbW9kdWxlcy9Qb2tlUHJlc2VudGVyLmpzIiwid2VicGFjazovL3Bva2VkZXgvLi9zcmMvbW9kdWxlcy9Qb2tlVmlldy5qcyIsIndlYnBhY2s6Ly9wb2tlZGV4Ly4vc3JjL21vZHVsZXMvY29tbWVudHNDb3VudGVyLmpzIiwid2VicGFjazovL3Bva2VkZXgvLi9zcmMvbW9kdWxlcy9nZW5lcmF0ZUNvbW1lbnRzLmpzIiwid2VicGFjazovL3Bva2VkZXgvLi9zcmMvbW9kdWxlcy9nZW5lcmF0ZVBva2VCZy5qcyIsIndlYnBhY2s6Ly9wb2tlZGV4Ly4vc3JjL21vZHVsZXMvZ2VuZXJhdGVQb2tlbW9uLmpzIiwid2VicGFjazovL3Bva2VkZXgvLi9zcmMvbW9kdWxlcy9nZXRQb2tlbW9uQ29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vcG9rZWRleC8uL3NyYy9tb2R1bGVzL2dldFBva2Vtb25EYXRhLmpzIiwid2VicGFjazovL3Bva2VkZXgvLi9zcmMvbW9kdWxlcy9wb3N0Q29tbWVudHMuanMiLCJ3ZWJwYWNrOi8vcG9rZWRleC8uL3NyYy9tb2R1bGVzL3N0YXJ0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAtLWZvbnQtcG9wcGluczogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgLS1mb250LWJvbGQ6IDYwMDtcXHJcXG4gIC0tZm9udC1yZWd1bGFyOiA0MDA7XFxyXFxuICAtLWdyYXNzOiByZ2JhKDk1LCAxODksIDg4LCAxKTtcXHJcXG4gIC0tYnVnOiByZ2JhKDE0NiwgMTg4LCA0NCwgMSk7XFxyXFxuICAtLWRhcms6IHJnYmEoODksIDg3LCA5NywgMSk7XFxyXFxuICAtLWRyYWdvbjogcmdiYSgxMiwgMTA1LCAyMDAsIDEpO1xcclxcbiAgLS1lbGVjdHJpYzogcmdiYSgyNDIsIDIxNywgNzgsIDEpO1xcclxcbiAgLS1mYWlyeTogcmdiYSgyMzgsIDE0NCwgMjMwLCAxKTtcXHJcXG4gIC0tZmlnaHRpbmc6IHJnYmEoMjExLCA2NiwgOTUsIDEpO1xcclxcbiAgLS1maXJlOiByZ2JhKDIyMCwgMTM1LCA0NywgMSk7XFxyXFxuICAtLWZseWluZzogcmdiYSgxNjEsIDE4NywgMjM2LCAxKTtcXHJcXG4gIC0tZ2hvc3Q6IHJnYmEoOTUsIDEwOSwgMTg4LCAxKTtcXHJcXG4gIC0tZ3JvdW5kOiByZ2JhKDIxOCwgMTI0LCA3NywgMSk7XFxyXFxuICAtLXBzeWNoaWM6IHJnYmEoMTE3LCAyMDgsIDE5MywgMSk7XFxyXFxuICAtLXN0ZWVsOiByZ2JhKDg2LCAxNDksIDE2MywgMSk7XFxyXFxuICAtLXdhdGVyOiByZ2JhKDgzLCAxNTcsIDIyMywgMSk7XFxyXFxuICAtLXBvaXNvbjogcmdiYSgxODMsIDk5LCAyMDcsIDEpO1xcclxcbiAgLS1ub3JtYWw6IHJnYmEoMTYwLCAxNjIsIDE1OSwgMSk7XFxyXFxuICAtLXJvY2s6IHJnYmEoMTYzLCAxNDAsIDMzLCAxKTtcXHJcXG4gIC0taWNlOiByZ2JhKDExNywgMjA4LCAxOTMsIDEpO1xcclxcbiAgLS10ZXh0LWRhcms6ICMxZDI5M2Y7XFxyXFxuICAtLXRleHQtbGlnaHQ6ICM5OWEzYWQ7XFxyXFxuICAtLWJnLXJlZDogI2M4MmUxOTtcXHJcXG4gIC0tYmctZGFyazogIzBkMTMxYTtcXHJcXG4gIC0td2hpdGU6ICNmZmY7XFxyXFxuICAtLWJveC1zaGFkb3c6IDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcclxcbiAgLS1yYWRpdXMtMjA6IDEuMjVyZW07XFxyXFxuICAtLXJhZGl1cy04OiAwLjVyZW07XFxyXFxuICAtLXJhZGl1cy00OiAwLjI1cmVtO1xcclxcbiAgLS1zcGFjZS04OiAwLjVyZW07XFxyXFxuICAtLXNwYWNlLTE2OiAxcmVtO1xcclxcbiAgLS1zcGFjZS0yNDogMS41cmVtO1xcclxcbiAgLS1zcGFjZS0zMjogMnJlbTtcXHJcXG4gIC0td2lkdGgtZ3JpZDogODZ2dztcXHJcXG4gIC0tZ2FwOiAxcmVtO1xcclxcbiAgLS1wb2tlLWNhcmQtd2lkdGg6IHZhcigtLXdpZHRoLWdyaWQpO1xcclxcbiAgLS1wb2tlLWNhcmQtaGVpZ2h0OiBjYWxjKHZhcigtLXBva2UtY2FyZC13aWR0aCkgKiA0MCAvIDMyKTtcXHJcXG4gIC0tcG9rZS1jYXJkLXdpZHRoMjogY2FsYygodmFyKC0td2lkdGgtZ3JpZCkgLSB2YXIoLS1nYXApKSAvIDIpO1xcclxcbiAgLS1wb2tlLWNhcmQtaGVpZ2h0MjogY2FsYyh2YXIoLS1wb2tlLWNhcmQtd2lkdGgyKSAqIDQwIC8gMzIpO1xcclxcbiAgLS1wb2tlLWNhcmQtd2lkdGgzOiBjYWxjKCh2YXIoLS13aWR0aC1ncmlkKSAtIDIgKiB2YXIoLS1nYXApKSAvIDMpO1xcclxcbiAgLS1wb2tlLWNhcmQtaGVpZ2h0MzogY2FsYyh2YXIoLS1wb2tlLWNhcmQtd2lkdGgzKSAqIDQwIC8gMzIpO1xcclxcbiAgLS1wb2tlLWNhcmQtcGFkZGluZzogMXJlbTtcXHJcXG4gIC0tcG9rZS1zaG93LXdpZHRoOiBjYWxjKHZhcigtLXBva2UtY2FyZC13aWR0aCkpO1xcclxcbiAgLS1wb2tlLXNob3ctaGVpZ2h0OiBjYWxjKHZhcigtLXBva2Utc2hvdy13aWR0aCkgKiAxOCAvIDMwKTtcXHJcXG4gIC0tcG9rZS1zaG93LXdpZHRoMjogY2FsYyh2YXIoLS1wb2tlLWNhcmQtd2lkdGgyKSk7XFxyXFxuICAtLXBva2Utc2hvdy1oZWlnaHQyOiBjYWxjKHZhcigtLXBva2Utc2hvdy13aWR0aDIpICogMTggLyAzMCk7XFxyXFxuICAtLXBva2Utc2hvdy13aWR0aDM6IGNhbGModmFyKC0tcG9rZS1jYXJkLXdpZHRoMykpO1xcclxcbiAgLS1wb2tlLXNob3ctaGVpZ2h0MzogY2FsYyh2YXIoLS1wb2tlLXNob3ctd2lkdGgzKSAqIDE4IC8gMzApO1xcclxcbiAgLS1wb2tlLWNhcmQtcmVtOiBjYWxjKHZhcigtLXBva2Utc2hvdy1oZWlnaHQpIC8gMTgpO1xcclxcbiAgLS1wb2tlLWNhcmQtcmVtMjogY2FsYyh2YXIoLS1wb2tlLXNob3ctaGVpZ2h0MikgLyAxOCk7XFxyXFxuICAtLXBva2UtY2FyZC1yZW0zOiBjYWxjKHZhcigtLXBva2Utc2hvdy1oZWlnaHQzKSAvIDE4KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogYmFzaWMgc3R5bGVzICAqL1xcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXBvcHBpbnMpO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA4NnZ3O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qIGhlYWRlciAgKi9cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIG1hcmdpbjogMnJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWJhciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaXRlbSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtcG9wcGlucyk7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1sb2dvIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmsge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XFxyXFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC1ib2xkKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtbG9nbyB7XFxyXFxuICBoZWlnaHQ6IDVyZW07XFxyXFxuICB3aWR0aDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogbWFpbi1jb250ICovXFxyXFxuLnBva2UtY2FyZHMtY29udCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMnJlbSAwIDRyZW0gMDtcXHJcXG4gIGNvbHVtbi1nYXA6IDJyZW07XFxyXFxuICByb3ctZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZS1jYXJkIHtcXHJcXG4gIHdpZHRoOiB2YXIoLS1wb2tlLWNhcmQtd2lkdGgpO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1wb2tlLWNhcmQtaGVpZ2h0KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy04KTtcXHJcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgYm94LXNoYWRvdzogMCAyMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDEwLjEyNXB4IDguNzE4NzVweCByZ2JhKDAsIDAsIDAsIDAuMDY3NSksIDAgNHB4IDMuMjVweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCAwIDAuODc1cHggMS4xNTYyNXB4IHJnYmEoMCwgMCwgMCwgMC4wMzI1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnBva2UtY2FyZDpob3ZlciB7XFxyXFxuICBhbmltYXRpb246IHNoYWtlIDAuODJzIGN1YmljLWJlemllcigwLjM2LCAwLjA3LCAwLjE5LCAwLjk3KSBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcXHJcXG4gIDEwJSxcXHJcXG4gIDkwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTFweCwgMCwgMCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAyMCUsXFxyXFxuICA4MCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcclxcbiAgfVxcclxcblxcclxcbiAgMzAlLFxcclxcbiAgNTAlLFxcclxcbiAgNzAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMXB4LCAwLCAwKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDQwJSxcXHJcXG4gIDYwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMXB4LCAwLCAwKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnBva2Utc2hvdyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogdmFyKC0tcG9rZS1zaG93LXdpZHRoKTtcXHJcXG4gIGhlaWdodDogdmFyKC0tcG9rZS1zaG93LWhlaWdodCk7XFxyXFxuICBmb250LXNpemU6IHZhcigtLXBva2UtY2FyZC1yZW0pO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy04KSB2YXIoLS1yYWRpdXMtOCkgMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZS1zaG93LW92YWwge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAtOCU7XFxyXFxuICBsZWZ0OiA1JTtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBoZWlnaHQ6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnBva2UtaWQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwLjVlbTtcXHJcXG4gIGxlZnQ6IDAuNWVtO1xcclxcbiAgZm9udC1zaXplOiAyZW07XFxyXFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC1ib2xkKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZS1pZDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICcjJztcXHJcXG59XFxyXFxuXFxyXFxuLnBva2UtaW1nIHtcXHJcXG4gIHotaW5kZXg6IDU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC00MCUpIHNjYWxlKDEpO1xcclxcbiAgaGVpZ2h0OiA3MCU7XFxyXFxuICBhbmltYXRpb246IGp1bXAgNHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMganVtcCB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC00MCUpIHNjYWxlKDEpO1xcclxcbiAgfVxcclxcblxcclxcbiAgNTAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTYwJSkgc2NhbGUoMS4yKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNDAlKSBzY2FsZSgxKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnBva2UtZGV0cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogdmFyKC0tcG9rZS1jYXJkLXJlbSkgMDtcXHJcXG4gIHBhZGRpbmc6IDAgdmFyKC0tcG9rZS1jYXJkLXBhZGRpbmcpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZS1uYW1lIHtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtYm9sZCk7XFxyXFxuICBmb250LXNpemU6IGNhbGMoMS41ICogdmFyKC0tcG9rZS1jYXJkLXJlbSkpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZS10eXBlcyB7XFxyXFxuICBmb250LXNpemU6IDAuNzVyZW07XFxyXFxufVxcclxcblxcclxcbi5wb2tlLWxpa2VzIHtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhcnQtaWNvbi1jb250IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjZjdmN2Y3LCAjZTdlN2U3KTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgd2lkdGg6IGNhbGMoMyAqIHZhcigtLXBva2UtY2FyZC1yZW0pKTtcXHJcXG4gIGhlaWdodDogY2FsYygzICogdmFyKC0tcG9rZS1jYXJkLXJlbSkpO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBib3gtc2hhZG93OiAwIDNweCA4cHggI2FhYSwgaW5zZXQgMCAycHggM3B4ICNmZmY7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFydC1pY29uLWNvbnQ6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZGRkO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAtM3B4O1xcclxcbiAgbGVmdDogLTNweDtcXHJcXG4gIGJvdHRvbTogLTNweDtcXHJcXG4gIHJpZ2h0OiAtM3B4O1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDJweCAycHggI2RkZDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtaWNvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgaGVpZ2h0OiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5oZWFydC1pY29uLWNvbnQ6aG92ZXIge1xcclxcbiAgY29sb3I6ICM1NTU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhcnQtaWNvbi1jb250OmFjdGl2ZSB7XFxyXFxuICBib3gtc2hhZG93OiAwIDNweCA0cHggI2FhYSBpbnNldCwgMCAycHggM3B4ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5saWtlcy1jb3VudCB7XFxyXFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC1ib2xkKTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xcclxcbiAgbWFyZ2luLXRvcDogMC4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZS1idG5zIHtcXHJcXG4gIHBhZGRpbmc6IDAgdmFyKC0tcG9rZS1jYXJkLXBhZGRpbmcpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZS1idG4ge1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb2tlLWJ0bjphY3RpdmUge1xcclxcbiAgZmlsdGVyOiBpbnZlcnQoMjUlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBva2UtYnRuIHNwYW4ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdHJhbnNpdGlvbjogMC41cztcXHJcXG59XFxyXFxuXFxyXFxuLnBva2UtYnRuIHNwYW46OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6ICdcXFxcMDBiYic7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB0b3A6IC0wLjVyZW07XFxyXFxuICByaWdodDogLTJyZW07XFxyXFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZS1idG46aG92ZXIgc3BhbiB7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZS1idG46aG92ZXIgc3Bhbjo6YWZ0ZXIge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tLWJ0bixcXHJcXG4ucmVzLWJ0biB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBjYWxjKDUgKiB2YXIoLS1wb2tlLWNhcmQtcmVtKSk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtNCk7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC1ib2xkKTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjE1cmVtO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tLWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1yZWQpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzLWJ0biB7XFxyXFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1kYXJrKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogZm9vdGVyICovXFxyXFxuLmZvb3RlciB7XFxyXFxuICBoZWlnaHQ6IDVyZW07XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZGFyayk7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGFyayk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciBwIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1kYXJrKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbiB7XFxyXFxuICBmb250LXNpemU6IDFlbTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHgvNTBweDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xcclxcbiAgdHJhbnNpdGlvbjogZGlzcGxheSA1MDBtcztcXHJcXG4gIHotaW5kZXg6IDUwO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwOnRhcmdldCB7XFxyXFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwX19jb250YWluZXIge1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBfX2NvbnRhaW5lciAucG9rZW1vbi1pZCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDAuNXJlbTtcXHJcXG4gIGxlZnQ6IDFyZW07XFxyXFxuICBmb250LXNpemU6IDMuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LWJvbGQpO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwX19jb250YWluZXIgaDIge1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbiAgZm9udC1mYW1pbHk6IFRhaG9tYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cF9fY29udGFpbmVyIC5jbG9zZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDIwcHg7XFxyXFxuICByaWdodDogMzBweDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcztcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gIHotaW5kZXg6IDEwMDA7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBfX2NvbnRhaW5lciAuY2xvc2U6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLWJnLWRhcmspO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBfX2NvbnRhaW5lciAuY29udGVudCB7XFxyXFxuICBtYXgtaGVpZ2h0OiAzMCU7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLXNlY29uZGFyeSB7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBfX2ltZy1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBfX2ltZyB7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIGhlaWdodDogMjU2cHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cF9faW1nLWJnIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgei1pbmRleDogOTk7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cF9fY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tZGFyayk7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cF9fY29udGVudC10b3Age1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi50eXBlcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udHlwZS1pbWcge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1wb2tlLWNhcmQtcmVtKTtcXHJcXG4gIGhlaWdodDogY2FsYygzICogdmFyKC0tcG9rZS1jYXJkLXJlbSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtY29udGFpbmVyID4gKiB7XFxyXFxuICB3aWR0aDogNDglO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtNCB7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5hYmlsaXRpZXMge1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFiaWxpdHkge1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxufVxcclxcblxcclxcblt0b29sdGlwXSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcblt0b29sdGlwXTo6YmVmb3JlLFxcclxcblt0b29sdGlwXTo6YWZ0ZXIge1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDAuOWVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwLjVlbSk7XFxyXFxufVxcclxcblxcclxcblt0b29sdGlwXTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICB6LWluZGV4OiAxMjE7XFxyXFxuICB0b3A6IDEwMCU7XFxyXFxuICBib3JkZXItdG9wLXdpZHRoOiAwO1xcclxcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuW3Rvb2x0aXBdOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBhdHRyKHRvb2x0aXApO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWluLXdpZHRoOiAzZW07XFxyXFxuICBtYXgtd2lkdGg6IDIxZW07XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgcGFkZGluZzogMWNoIDEuNWNoO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4zY2g7XFxyXFxuICBib3gtc2hhZG93OiAwIDFlbSAyZW0gLTAuNWVtIHJnYmEoMCwgMCwgMCwgMC4zNSk7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMzMzO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICB0b3A6IGNhbGMoMTAwJSArIDVweCk7XFxyXFxuICB6LWluZGV4OiAxMjA7XFxyXFxufVxcclxcblxcclxcblt0b29sdGlwXTpob3Zlcjo6YmVmb3JlLFxcclxcblt0b29sdGlwXTpob3Zlcjo6YWZ0ZXIge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBhbmltYXRpb246IHRvb2x0aXBzLTEgMzAwbXMgZWFzZS1vdXQgZm9yd2FyZHM7XFxyXFxufVxcclxcblxcclxcblt0b29sdGlwPScnXTo6YmVmb3JlLFxcclxcblt0b29sdGlwPScnXTo6YWZ0ZXIge1xcclxcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZ3Jlc3Mge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2dyZXNzX19iYXItY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2dyZXNzX19iYXIge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBmbG9hdDogbm9uZTtcXHJcXG4gIHdpZHRoOiAwJTtcXHJcXG4gIGhlaWdodDogNHB4O1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctcmVkKTtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgdHJhbnNpdGlvbjogd2lkdGggMC44cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLyoga2V5IGZyYW1lcyAgKi9cXHJcXG5Aa2V5ZnJhbWVzIHRvb2x0aXBzLTEge1xcclxcbiAgdG8ge1xcclxcbiAgICBvcGFjaXR5OiAwLjk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHRvb2x0aXBzLTIge1xcclxcbiAgdG8ge1xcclxcbiAgICBvcGFjaXR5OiAwLjk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMge1xcclxcbiAgbWFyZ2luOiAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50c19fbGlzdCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHNfX2l0ZW0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudF9faXRlbS11c2VyIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY29tbWVudHNfX2Zvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWNvbW1lbnRzX19pbnB1dCB7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGQtY29tbWVudHNfX2lucHV0LS1oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtLWNlbnRlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY29tbWVudHNfX2J0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1maWdodGluZyk7XFxyXFxufVxcclxcblxcclxcbi8qIFRoaXMgYXBwbGllcyBmcm9tIDc2OHB4IG9ud2FyZHMgKi9cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNDhyZW0pIGFuZCAobWF4LXdpZHRoOiA2OXJlbSkge1xcclxcbiAgLnBva2UtY2FyZHMtY29udCB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LWJhciB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGdhcDogMi41cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBva2UtY2FyZCB7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1wb2tlLWNhcmQtd2lkdGgyKTtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1wb2tlLWNhcmQtaGVpZ2h0Mik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9rZS1zaG93IHtcXHJcXG4gICAgd2lkdGg6IHZhcigtLXBva2Utc2hvdy13aWR0aDIpO1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLXBva2Utc2hvdy1oZWlnaHQyKTtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1wb2tlLWNhcmQtcmVtMik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9rZS1kZXRzIHtcXHJcXG4gICAgbWFyZ2luOiB2YXIoLS1wb2tlLWNhcmQtcmVtMikgMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb2tlLW5hbWUge1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoMS41ICogdmFyKC0tcG9rZS1jYXJkLXJlbTIpKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50eXBlLWltZyB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogdmFyKC0tcG9rZS1jYXJkLXJlbTIpO1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMyAqIHZhcigtLXBva2UtY2FyZC1yZW0yKSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhcnQtaWNvbi1jb250IHtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMyAqIHZhcigtLXBva2UtY2FyZC1yZW0yKSk7XFxyXFxuICAgIGhlaWdodDogY2FsYygzICogdmFyKC0tcG9rZS1jYXJkLXJlbTIpKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb20tYnRuLFxcclxcbiAgLnJlcy1idG4ge1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoNSAqIHZhcigtLXBva2UtY2FyZC1yZW0yKSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tcG9rZS1jYXJkLXJlbTIpO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogY2FsYygwLjE1ICogdmFyKC0tcG9rZS1jYXJkLXJlbTIpKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogVGhpcyBhcHBsaWVzIGZyb20gMTEwMXB4IG9ud2FyZHMgKi9cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNjlyZW0pIHtcXHJcXG4gIC5wb2tlLWNhcmRzLWNvbnQge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1iYXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBnYXA6IDIuNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb2tlLWNhcmQge1xcclxcbiAgICB3aWR0aDogdmFyKC0tcG9rZS1jYXJkLXdpZHRoMyk7XFxyXFxuICAgIGhlaWdodDogdmFyKC0tcG9rZS1jYXJkLWhlaWdodDMpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBva2Utc2hvdyB7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1wb2tlLXNob3ctd2lkdGgzKTtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1wb2tlLXNob3ctaGVpZ2h0Myk7XFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tcG9rZS1jYXJkLXJlbTMpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBva2UtZGV0cyB7XFxyXFxuICAgIG1hcmdpbjogdmFyKC0tcG9rZS1jYXJkLXJlbTMpIDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9rZS1uYW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDEuNSAqIHZhcigtLXBva2UtY2FyZC1yZW0zKSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudHlwZS1pbWcge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLXBva2UtY2FyZC1yZW0zKTtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDMgKiB2YXIoLS1wb2tlLWNhcmQtcmVtMykpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYXJ0LWljb24tY29udCB7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDMgKiB2YXIoLS1wb2tlLWNhcmQtcmVtMykpO1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMyAqIHZhcigtLXBva2UtY2FyZC1yZW0zKSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tLWJ0bixcXHJcXG4gIC5yZXMtYnRuIHtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDUgKiB2YXIoLS1wb2tlLWNhcmQtcmVtMykpO1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLXBva2UtY2FyZC1yZW0zKTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IGNhbGMoMC4xNSAqIHZhcigtLXBva2UtY2FyZC1yZW0zKSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItLXByb2dyZXNzIC5wcm9ncmVzcyxcXHJcXG4ubWVhc2VybWVudHMgLm1lYXN1cmVtZW50LFxcclxcbi5hYmlsaXRpZXMgLmFiaWxpdHksXFxyXFxuLmNvbW1lbnRzX19pdGVtIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDM2ZW0pIHtcXHJcXG4gIC5kZXRhaWxzLWNvbnRhaW5lciB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmRldGFpbHMtY29udGFpbmVyID4gKiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnRzX19pdGVtIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmctZGFyayk7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsK0JBQStCO0VBQy9CLGlDQUFpQztFQUNqQywrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQixpQ0FBaUM7RUFDakMsOEJBQThCO0VBQzlCLDhCQUE4QjtFQUM5QiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0Isb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiwyQ0FBMkM7RUFDM0Msb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLDBEQUEwRDtFQUMxRCw4REFBOEQ7RUFDOUQsNERBQTREO0VBQzVELGtFQUFrRTtFQUNsRSw0REFB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QUFnQztFQUNsQzs7RUFFQTtJQUNFLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLDRDQUE0QztFQUM5Qzs7RUFFQTtJQUNFLG1DQUFtQztJQUNuQyx1Q0FBdUM7RUFDekM7O0VBRUE7SUFDRSxzQ0FBc0M7SUFDdEMsdUNBQXVDO0VBQ3pDOztFQUVBOztJQUVFLHVDQUF1QztJQUN2QyxnQ0FBZ0M7SUFDaEMsa0RBQWtEO0VBQ3BEO0FBQ0Y7O0FBRUE7Ozs7RUFJRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtJQUN0Qix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIscUJBQXFCO0VBQ3ZCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLWZvbnQtcG9wcGluczogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgLS1mb250LWJvbGQ6IDYwMDtcXHJcXG4gIC0tZm9udC1yZWd1bGFyOiA0MDA7XFxyXFxuICAtLWdyYXNzOiByZ2JhKDk1LCAxODksIDg4LCAxKTtcXHJcXG4gIC0tYnVnOiByZ2JhKDE0NiwgMTg4LCA0NCwgMSk7XFxyXFxuICAtLWRhcms6IHJnYmEoODksIDg3LCA5NywgMSk7XFxyXFxuICAtLWRyYWdvbjogcmdiYSgxMiwgMTA1LCAyMDAsIDEpO1xcclxcbiAgLS1lbGVjdHJpYzogcmdiYSgyNDIsIDIxNywgNzgsIDEpO1xcclxcbiAgLS1mYWlyeTogcmdiYSgyMzgsIDE0NCwgMjMwLCAxKTtcXHJcXG4gIC0tZmlnaHRpbmc6IHJnYmEoMjExLCA2NiwgOTUsIDEpO1xcclxcbiAgLS1maXJlOiByZ2JhKDIyMCwgMTM1LCA0NywgMSk7XFxyXFxuICAtLWZseWluZzogcmdiYSgxNjEsIDE4NywgMjM2LCAxKTtcXHJcXG4gIC0tZ2hvc3Q6IHJnYmEoOTUsIDEwOSwgMTg4LCAxKTtcXHJcXG4gIC0tZ3JvdW5kOiByZ2JhKDIxOCwgMTI0LCA3NywgMSk7XFxyXFxuICAtLXBzeWNoaWM6IHJnYmEoMTE3LCAyMDgsIDE5MywgMSk7XFxyXFxuICAtLXN0ZWVsOiByZ2JhKDg2LCAxNDksIDE2MywgMSk7XFxyXFxuICAtLXdhdGVyOiByZ2JhKDgzLCAxNTcsIDIyMywgMSk7XFxyXFxuICAtLXBvaXNvbjogcmdiYSgxODMsIDk5LCAyMDcsIDEpO1xcclxcbiAgLS1ub3JtYWw6IHJnYmEoMTYwLCAxNjIsIDE1OSwgMSk7XFxyXFxuICAtLXJvY2s6IHJnYmEoMTYzLCAxNDAsIDMzLCAxKTtcXHJcXG4gIC0taWNlOiByZ2JhKDExNywgMjA4LCAxOTMsIDEpO1xcclxcbiAgLS10ZXh0LWRhcms6ICMxZDI5M2Y7XFxyXFxuICAtLXRleHQtbGlnaHQ6ICM5OWEzYWQ7XFxyXFxuICAtLWJnLXJlZDogI2M4MmUxOTtcXHJcXG4gIC0tYmctZGFyazogIzBkMTMxYTtcXHJcXG4gIC0td2hpdGU6ICNmZmY7XFxyXFxuICAtLWJveC1zaGFkb3c6IDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcclxcbiAgLS1yYWRpdXMtMjA6IDEuMjVyZW07XFxyXFxuICAtLXJhZGl1cy04OiAwLjVyZW07XFxyXFxuICAtLXJhZGl1cy00OiAwLjI1cmVtO1xcclxcbiAgLS1zcGFjZS04OiAwLjVyZW07XFxyXFxuICAtLXNwYWNlLTE2OiAxcmVtO1xcclxcbiAgLS1zcGFjZS0yNDogMS41cmVtO1xcclxcbiAgLS1zcGFjZS0zMjogMnJlbTtcXHJcXG4gIC0td2lkdGgtZ3JpZDogODZ2dztcXHJcXG4gIC0tZ2FwOiAxcmVtO1xcclxcbiAgLS1wb2tlLWNhcmQtd2lkdGg6IHZhcigtLXdpZHRoLWdyaWQpO1xcclxcbiAgLS1wb2tlLWNhcmQtaGVpZ2h0OiBjYWxjKHZhcigtLXBva2UtY2FyZC13aWR0aCkgKiA0MCAvIDMyKTtcXHJcXG4gIC0tcG9rZS1jYXJkLXdpZHRoMjogY2FsYygodmFyKC0td2lkdGgtZ3JpZCkgLSB2YXIoLS1nYXApKSAvIDIpO1xcclxcbiAgLS1wb2tlLWNhcmQtaGVpZ2h0MjogY2FsYyh2YXIoLS1wb2tlLWNhcmQtd2lkdGgyKSAqIDQwIC8gMzIpO1xcclxcbiAgLS1wb2tlLWNhcmQtd2lkdGgzOiBjYWxjKCh2YXIoLS13aWR0aC1ncmlkKSAtIDIgKiB2YXIoLS1nYXApKSAvIDMpO1xcclxcbiAgLS1wb2tlLWNhcmQtaGVpZ2h0MzogY2FsYyh2YXIoLS1wb2tlLWNhcmQtd2lkdGgzKSAqIDQwIC8gMzIpO1xcclxcbiAgLS1wb2tlLWNhcmQtcGFkZGluZzogMXJlbTtcXHJcXG4gIC0tcG9rZS1zaG93LXdpZHRoOiBjYWxjKHZhcigtLXBva2UtY2FyZC13aWR0aCkpO1xcclxcbiAgLS1wb2tlLXNob3ctaGVpZ2h0OiBjYWxjKHZhcigtLXBva2Utc2hvdy13aWR0aCkgKiAxOCAvIDMwKTtcXHJcXG4gIC0tcG9rZS1zaG93LXdpZHRoMjogY2FsYyh2YXIoLS1wb2tlLWNhcmQtd2lkdGgyKSk7XFxyXFxuICAtLXBva2Utc2hvdy1oZWlnaHQyOiBjYWxjKHZhcigtLXBva2Utc2hvdy13aWR0aDIpICogMTggLyAzMCk7XFxyXFxuICAtLXBva2Utc2hvdy13aWR0aDM6IGNhbGModmFyKC0tcG9rZS1jYXJkLXdpZHRoMykpO1xcclxcbiAgLS1wb2tlLXNob3ctaGVpZ2h0MzogY2FsYyh2YXIoLS1wb2tlLXNob3ctd2lkdGgzKSAqIDE4IC8gMzApO1xcclxcbiAgLS1wb2tlLWNhcmQtcmVtOiBjYWxjKHZhcigtLXBva2Utc2hvdy1oZWlnaHQpIC8gMTgpO1xcclxcbiAgLS1wb2tlLWNhcmQtcmVtMjogY2FsYyh2YXIoLS1wb2tlLXNob3ctaGVpZ2h0MikgLyAxOCk7XFxyXFxuICAtLXBva2UtY2FyZC1yZW0zOiBjYWxjKHZhcigtLXBva2Utc2hvdy1oZWlnaHQzKSAvIDE4KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogYmFzaWMgc3R5bGVzICAqL1xcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXBvcHBpbnMpO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA4NnZ3O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qIGhlYWRlciAgKi9cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIG1hcmdpbjogMnJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWJhciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaXRlbSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtcG9wcGlucyk7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1sb2dvIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmsge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XFxyXFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC1ib2xkKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWUtbG9nbyB7XFxyXFxuICBoZWlnaHQ6IDVyZW07XFxyXFxuICB3aWR0aDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogbWFpbi1jb250ICovXFxyXFxuLnBva2UtY2FyZHMtY29udCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMnJlbSAwIDRyZW0gMDtcXHJcXG4gIGNvbHVtbi1nYXA6IDJyZW07XFxyXFxuICByb3ctZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZS1jYXJkIHtcXHJcXG4gIHdpZHRoOiB2YXIoLS1wb2tlLWNhcmQtd2lkdGgpO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1wb2tlLWNhcmQtaGVpZ2h0KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy04KTtcXHJcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgYm94LXNoYWRvdzogMCAyMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDEwLjEyNXB4IDguNzE4NzVweCByZ2JhKDAsIDAsIDAsIDAuMDY3NSksIDAgNHB4IDMuMjVweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCAwIDAuODc1cHggMS4xNTYyNXB4IHJnYmEoMCwgMCwgMCwgMC4wMzI1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnBva2UtY2FyZDpob3ZlciB7XFxyXFxuICBhbmltYXRpb246IHNoYWtlIDAuODJzIGN1YmljLWJlemllcigwLjM2LCAwLjA3LCAwLjE5LCAwLjk3KSBib3RoO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcXHJcXG4gIDEwJSxcXHJcXG4gIDkwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTFweCwgMCwgMCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAyMCUsXFxyXFxuICA4MCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcclxcbiAgfVxcclxcblxcclxcbiAgMzAlLFxcclxcbiAgNTAlLFxcclxcbiAgNzAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMXB4LCAwLCAwKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDQwJSxcXHJcXG4gIDYwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMXB4LCAwLCAwKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnBva2Utc2hvdyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogdmFyKC0tcG9rZS1zaG93LXdpZHRoKTtcXHJcXG4gIGhlaWdodDogdmFyKC0tcG9rZS1zaG93LWhlaWdodCk7XFxyXFxuICBmb250LXNpemU6IHZhcigtLXBva2UtY2FyZC1yZW0pO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy04KSB2YXIoLS1yYWRpdXMtOCkgMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZS1zaG93LW92YWwge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm90dG9tOiAtOCU7XFxyXFxuICBsZWZ0OiA1JTtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBoZWlnaHQ6IDkwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnBva2UtaWQge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwLjVlbTtcXHJcXG4gIGxlZnQ6IDAuNWVtO1xcclxcbiAgZm9udC1zaXplOiAyZW07XFxyXFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC1ib2xkKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZS1pZDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICcjJztcXHJcXG59XFxyXFxuXFxyXFxuLnBva2UtaW1nIHtcXHJcXG4gIHotaW5kZXg6IDU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC00MCUpIHNjYWxlKDEpO1xcclxcbiAgaGVpZ2h0OiA3MCU7XFxyXFxuICBhbmltYXRpb246IGp1bXAgNHMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMganVtcCB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC00MCUpIHNjYWxlKDEpO1xcclxcbiAgfVxcclxcblxcclxcbiAgNTAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTYwJSkgc2NhbGUoMS4yKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNDAlKSBzY2FsZSgxKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnBva2UtZGV0cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogdmFyKC0tcG9rZS1jYXJkLXJlbSkgMDtcXHJcXG4gIHBhZGRpbmc6IDAgdmFyKC0tcG9rZS1jYXJkLXBhZGRpbmcpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZS1uYW1lIHtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtYm9sZCk7XFxyXFxuICBmb250LXNpemU6IGNhbGMoMS41ICogdmFyKC0tcG9rZS1jYXJkLXJlbSkpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZS10eXBlcyB7XFxyXFxuICBmb250LXNpemU6IDAuNzVyZW07XFxyXFxufVxcclxcblxcclxcbi5wb2tlLWxpa2VzIHtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhcnQtaWNvbi1jb250IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjZjdmN2Y3LCAjZTdlN2U3KTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgd2lkdGg6IGNhbGMoMyAqIHZhcigtLXBva2UtY2FyZC1yZW0pKTtcXHJcXG4gIGhlaWdodDogY2FsYygzICogdmFyKC0tcG9rZS1jYXJkLXJlbSkpO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAxcHggdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBib3gtc2hhZG93OiAwIDNweCA4cHggI2FhYSwgaW5zZXQgMCAycHggM3B4ICNmZmY7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZWFydC1pY29uLWNvbnQ6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiAnJztcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZGRkO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAtM3B4O1xcclxcbiAgbGVmdDogLTNweDtcXHJcXG4gIGJvdHRvbTogLTNweDtcXHJcXG4gIHJpZ2h0OiAtM3B4O1xcclxcbiAgei1pbmRleDogLTE7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBib3gtc2hhZG93OiBpbnNldCAwIDJweCAycHggI2RkZDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpa2UtaWNvbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgaGVpZ2h0OiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5oZWFydC1pY29uLWNvbnQ6aG92ZXIge1xcclxcbiAgY29sb3I6ICM1NTU7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhcnQtaWNvbi1jb250OmFjdGl2ZSB7XFxyXFxuICBib3gtc2hhZG93OiAwIDNweCA0cHggI2FhYSBpbnNldCwgMCAycHggM3B4ICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5saWtlcy1jb3VudCB7XFxyXFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC1ib2xkKTtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xcclxcbiAgbWFyZ2luLXRvcDogMC4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZS1idG5zIHtcXHJcXG4gIHBhZGRpbmc6IDAgdmFyKC0tcG9rZS1jYXJkLXBhZGRpbmcpO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZS1idG4ge1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wb2tlLWJ0bjphY3RpdmUge1xcclxcbiAgZmlsdGVyOiBpbnZlcnQoMjUlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBva2UtYnRuIHNwYW4ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdHJhbnNpdGlvbjogMC41cztcXHJcXG59XFxyXFxuXFxyXFxuLnBva2UtYnRuIHNwYW46OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6ICdcXFxcMDBiYic7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB0b3A6IC0wLjVyZW07XFxyXFxuICByaWdodDogLTJyZW07XFxyXFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZS1idG46aG92ZXIgc3BhbiB7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9rZS1idG46aG92ZXIgc3Bhbjo6YWZ0ZXIge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tLWJ0bixcXHJcXG4ucmVzLWJ0biB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBjYWxjKDUgKiB2YXIoLS1wb2tlLWNhcmQtcmVtKSk7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtNCk7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC1ib2xkKTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjE1cmVtO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tLWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1yZWQpO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzLWJ0biB7XFxyXFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1kYXJrKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogZm9vdGVyICovXFxyXFxuLmZvb3RlciB7XFxyXFxuICBoZWlnaHQ6IDVyZW07XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tZGFyayk7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGFyayk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciBwIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1kYXJrKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbiB7XFxyXFxuICBmb250LXNpemU6IDFlbTtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHgvNTBweDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cCB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xcclxcbiAgdHJhbnNpdGlvbjogZGlzcGxheSA1MDBtcztcXHJcXG4gIHotaW5kZXg6IDUwO1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwOnRhcmdldCB7XFxyXFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwX19jb250YWluZXIge1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBfX2NvbnRhaW5lciAucG9rZW1vbi1pZCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDAuNXJlbTtcXHJcXG4gIGxlZnQ6IDFyZW07XFxyXFxuICBmb250LXNpemU6IDMuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LWJvbGQpO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwX19jb250YWluZXIgaDIge1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbiAgZm9udC1mYW1pbHk6IFRhaG9tYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cF9fY29udGFpbmVyIC5jbG9zZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDIwcHg7XFxyXFxuICByaWdodDogMzBweDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcztcXHJcXG4gIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXHJcXG4gIHotaW5kZXg6IDEwMDA7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBfX2NvbnRhaW5lciAuY2xvc2U6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLWJnLWRhcmspO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBfX2NvbnRhaW5lciAuY29udGVudCB7XFxyXFxuICBtYXgtaGVpZ2h0OiAzMCU7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlLXNlY29uZGFyeSB7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBfX2ltZy1jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXBfX2ltZyB7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIGhlaWdodDogMjU2cHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cF9faW1nLWJnIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgei1pbmRleDogOTk7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cF9fY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tZGFyayk7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cF9fY29udGVudC10b3Age1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi50eXBlcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udHlwZS1pbWcge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1wb2tlLWNhcmQtcmVtKTtcXHJcXG4gIGhlaWdodDogY2FsYygzICogdmFyKC0tcG9rZS1jYXJkLXJlbSkpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlscy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMtY29udGFpbmVyID4gKiB7XFxyXFxuICB3aWR0aDogNDglO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUtNCB7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5hYmlsaXRpZXMge1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFiaWxpdHkge1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxufVxcclxcblxcclxcblt0b29sdGlwXSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcblt0b29sdGlwXTo6YmVmb3JlLFxcclxcblt0b29sdGlwXTo6YWZ0ZXIge1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDAuOWVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwLjVlbSk7XFxyXFxufVxcclxcblxcclxcblt0b29sdGlwXTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgYm9yZGVyOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICB6LWluZGV4OiAxMjE7XFxyXFxuICB0b3A6IDEwMCU7XFxyXFxuICBib3JkZXItdG9wLXdpZHRoOiAwO1xcclxcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuW3Rvb2x0aXBdOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBhdHRyKHRvb2x0aXApO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWluLXdpZHRoOiAzZW07XFxyXFxuICBtYXgtd2lkdGg6IDIxZW07XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgcGFkZGluZzogMWNoIDEuNWNoO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMC4zY2g7XFxyXFxuICBib3gtc2hhZG93OiAwIDFlbSAyZW0gLTAuNWVtIHJnYmEoMCwgMCwgMCwgMC4zNSk7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMzMzO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICB0b3A6IGNhbGMoMTAwJSArIDVweCk7XFxyXFxuICB6LWluZGV4OiAxMjA7XFxyXFxufVxcclxcblxcclxcblt0b29sdGlwXTpob3Zlcjo6YmVmb3JlLFxcclxcblt0b29sdGlwXTpob3Zlcjo6YWZ0ZXIge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBhbmltYXRpb246IHRvb2x0aXBzLTEgMzAwbXMgZWFzZS1vdXQgZm9yd2FyZHM7XFxyXFxufVxcclxcblxcclxcblt0b29sdGlwPScnXTo6YmVmb3JlLFxcclxcblt0b29sdGlwPScnXTo6YWZ0ZXIge1xcclxcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvZ3Jlc3Mge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2dyZXNzX19iYXItY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2dyZXNzX19iYXIge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBmbG9hdDogbm9uZTtcXHJcXG4gIHdpZHRoOiAwJTtcXHJcXG4gIGhlaWdodDogNHB4O1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctcmVkKTtcXHJcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgdHJhbnNpdGlvbjogd2lkdGggMC44cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLyoga2V5IGZyYW1lcyAgKi9cXHJcXG5Aa2V5ZnJhbWVzIHRvb2x0aXBzLTEge1xcclxcbiAgdG8ge1xcclxcbiAgICBvcGFjaXR5OiAwLjk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHRvb2x0aXBzLTIge1xcclxcbiAgdG8ge1xcclxcbiAgICBvcGFjaXR5OiAwLjk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHMge1xcclxcbiAgbWFyZ2luOiAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50c19fbGlzdCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudHNfX2l0ZW0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudF9faXRlbS11c2VyIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY29tbWVudHNfX2Zvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWNvbW1lbnRzX19pbnB1dCB7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGQtY29tbWVudHNfX2lucHV0LS1oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQtLWNlbnRlciB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY29tbWVudHNfX2J0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1maWdodGluZyk7XFxyXFxufVxcclxcblxcclxcbi8qIFRoaXMgYXBwbGllcyBmcm9tIDc2OHB4IG9ud2FyZHMgKi9cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNDhyZW0pIGFuZCAobWF4LXdpZHRoOiA2OXJlbSkge1xcclxcbiAgLnBva2UtY2FyZHMtY29udCB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LWJhciB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGdhcDogMi41cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBva2UtY2FyZCB7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1wb2tlLWNhcmQtd2lkdGgyKTtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1wb2tlLWNhcmQtaGVpZ2h0Mik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9rZS1zaG93IHtcXHJcXG4gICAgd2lkdGg6IHZhcigtLXBva2Utc2hvdy13aWR0aDIpO1xcclxcbiAgICBoZWlnaHQ6IHZhcigtLXBva2Utc2hvdy1oZWlnaHQyKTtcXHJcXG4gICAgZm9udC1zaXplOiB2YXIoLS1wb2tlLWNhcmQtcmVtMik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9rZS1kZXRzIHtcXHJcXG4gICAgbWFyZ2luOiB2YXIoLS1wb2tlLWNhcmQtcmVtMikgMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb2tlLW5hbWUge1xcclxcbiAgICBmb250LXNpemU6IGNhbGMoMS41ICogdmFyKC0tcG9rZS1jYXJkLXJlbTIpKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50eXBlLWltZyB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogdmFyKC0tcG9rZS1jYXJkLXJlbTIpO1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMyAqIHZhcigtLXBva2UtY2FyZC1yZW0yKSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhcnQtaWNvbi1jb250IHtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMyAqIHZhcigtLXBva2UtY2FyZC1yZW0yKSk7XFxyXFxuICAgIGhlaWdodDogY2FsYygzICogdmFyKC0tcG9rZS1jYXJkLXJlbTIpKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb20tYnRuLFxcclxcbiAgLnJlcy1idG4ge1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoNSAqIHZhcigtLXBva2UtY2FyZC1yZW0yKSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tcG9rZS1jYXJkLXJlbTIpO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogY2FsYygwLjE1ICogdmFyKC0tcG9rZS1jYXJkLXJlbTIpKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogVGhpcyBhcHBsaWVzIGZyb20gMTEwMXB4IG9ud2FyZHMgKi9cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNjlyZW0pIHtcXHJcXG4gIC5wb2tlLWNhcmRzLWNvbnQge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi1iYXIge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBnYXA6IDIuNXJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5wb2tlLWNhcmQge1xcclxcbiAgICB3aWR0aDogdmFyKC0tcG9rZS1jYXJkLXdpZHRoMyk7XFxyXFxuICAgIGhlaWdodDogdmFyKC0tcG9rZS1jYXJkLWhlaWdodDMpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBva2Utc2hvdyB7XFxyXFxuICAgIHdpZHRoOiB2YXIoLS1wb2tlLXNob3ctd2lkdGgzKTtcXHJcXG4gICAgaGVpZ2h0OiB2YXIoLS1wb2tlLXNob3ctaGVpZ2h0Myk7XFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tcG9rZS1jYXJkLXJlbTMpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnBva2UtZGV0cyB7XFxyXFxuICAgIG1hcmdpbjogdmFyKC0tcG9rZS1jYXJkLXJlbTMpIDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAucG9rZS1uYW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiBjYWxjKDEuNSAqIHZhcigtLXBva2UtY2FyZC1yZW0zKSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudHlwZS1pbWcge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLXBva2UtY2FyZC1yZW0zKTtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDMgKiB2YXIoLS1wb2tlLWNhcmQtcmVtMykpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmhlYXJ0LWljb24tY29udCB7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDMgKiB2YXIoLS1wb2tlLWNhcmQtcmVtMykpO1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMyAqIHZhcigtLXBva2UtY2FyZC1yZW0zKSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29tLWJ0bixcXHJcXG4gIC5yZXMtYnRuIHtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDUgKiB2YXIoLS1wb2tlLWNhcmQtcmVtMykpO1xcclxcbiAgICBmb250LXNpemU6IHZhcigtLXBva2UtY2FyZC1yZW0zKTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IGNhbGMoMC4xNSAqIHZhcigtLXBva2UtY2FyZC1yZW0zKSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItLXByb2dyZXNzIC5wcm9ncmVzcyxcXHJcXG4ubWVhc2VybWVudHMgLm1lYXN1cmVtZW50LFxcclxcbi5hYmlsaXRpZXMgLmFiaWxpdHksXFxyXFxuLmNvbW1lbnRzX19pdGVtIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDM2ZW0pIHtcXHJcXG4gIC5kZXRhaWxzLWNvbnRhaW5lciB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLmRldGFpbHMtY29udGFpbmVyID4gKiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnRzX19pdGVtIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmctZGFyayk7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9tYWluLmNzcyc7XG5pbXBvcnQgc3RhcnQgZnJvbSAnLi9tb2R1bGVzL3N0YXJ0LmpzJztcbmltcG9ydCAnLi9hc3NldHMvaWNvbi5wbmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9vdmFsLnN2Zyc7XG5pbXBvcnQgJy4vYXNzZXRzL2J1Zy5zdmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9kYXJrLnN2Zyc7XG5pbXBvcnQgJy4vYXNzZXRzL2RyYWdvbi5zdmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9lbGVjdHJpYy5zdmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9mYWlyeS5zdmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9maWdodGluZy5zdmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9maXJlLnN2Zyc7XG5pbXBvcnQgJy4vYXNzZXRzL2ZseWluZy5zdmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9naG9zdC5zdmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9ncmFzcy5zdmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9ncm91bmQuc3ZnJztcbmltcG9ydCAnLi9hc3NldHMvaWNlLnN2Zyc7XG5pbXBvcnQgJy4vYXNzZXRzL25vcm1hbC5zdmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9wb2lzb24uc3ZnJztcbmltcG9ydCAnLi9hc3NldHMvcHN5Y2hpYy5zdmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9yb2NrLnN2Zyc7XG5pbXBvcnQgJy4vYXNzZXRzL3N0ZWVsLnN2Zyc7XG5pbXBvcnQgJy4vYXNzZXRzL3dhdGVyLnN2Zyc7XG5pbXBvcnQgJy4vYXNzZXRzL2xvZ28uc3ZnJztcblxuc3RhcnQoKTtcbiIsImZ1bmN0aW9uIEFsbFBva2VzQ291bnRlcigpIHtcclxuICBjb25zdCBwb2tlQ291bnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwb2tlLWNhcmQnKS5sZW5ndGg7XHJcbiAgY29uc3QgcG9rZUNvdW50VGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb2tlLWNvdW50ZXInKTtcclxuICBwb2tlQ291bnRUZXh0LmlubmVySFRNTCA9IGAoJHtwb2tlQ291bnR9KWA7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQWxsUG9rZXNDb3VudGVyOyIsImNsYXNzIEludm9sdmVtZW50QXBpU2VydmljZSB7XG4gICNiYXNlTGlrZXNVcmw7XG5cbiAgc3RhdGljICNsaWtlc1VybDtcblxuICBzdGF0aWMge1xuICAgIHRoaXMuI2xpa2VzVXJsID0gbmV3IFVSTCgnL2NhcHN0b25lQXBpL2FwcHMvdVZnaEZaVVh5QU9OVGVVcUFJWGwvbGlrZXMnLFxuICAgICAgJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldCcpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc3QgYmFzZVVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQnO1xuICAgIHRoaXMuI2Jhc2VMaWtlc1VybCA9IG5ldyBVUkwoJy9jYXBzdG9uZUFwaS9hcHBzL3VWZ2hGWlVYeUFPTlRlVXFBSVhsL2xpa2VzJywgYmFzZVVybCk7XG4gIH1cblxuICBzdGF0aWMgcG9zdExpa2VCeUlkID0gYXN5bmMgKHBva2VJZCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godGhpcy4jbGlrZXNVcmwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBpdGVtX2lkOiBwb2tlSWQsXG4gICAgICB9KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBzdGF0aWMgZ2V0TGlrZXNCeUlkID0gYXN5bmMgKHBva2VJZCkgPT4ge1xuICAgIGNvbnN0IGFsbExpa2VzID0gYXdhaXQgdGhpcy5nZXRBbGxMaWtlcygpO1xuICAgIGNvbnN0IGxpa2VzID0gYWxsTGlrZXMuZmluZCgoaXRlbSkgPT4gaXRlbS5pdGVtX2lkID09PSBwb2tlSWQpO1xuXG4gICAgcmV0dXJuIChsaWtlcyAhPT0gdW5kZWZpbmVkKSA/IGxpa2VzLmxpa2VzIDogMDtcbiAgfVxuXG4gIHN0YXRpYyBnZXRBbGxMaWtlcyA9IGFzeW5jICgpID0+IGZldGNoKHRoaXMuI2xpa2VzVXJsKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcbn1cbmV4cG9ydCBkZWZhdWx0IEludm9sdmVtZW50QXBpU2VydmljZTsiLCJpbXBvcnQgUG9rZVByZXNlbnRlciBmcm9tICcuL1Bva2VQcmVzZW50ZXIuanMnO1xuXG5jbGFzcyBQb2tlQXBpU2VydmljZSB7XG4gICNiYXNlVXJsO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuI2Jhc2VVcmwgPSBuZXcgVVJMKCcvYXBpL3YyL3Bva2Vtb24vJywgJ2h0dHBzOi8vcG9rZWFwaS5jbycpO1xuICB9XG5cbiAgZ2V0U29tZVBva2Vtb25EYXRhID0gYXN5bmMgKHN0YXJ0LCBudW1JdGVtcykgPT4ge1xuICAgIGNvbnN0IHBva2Vtb25zID0gW107XG5cbiAgICBmb3IgKGxldCBpZCA9IDA7IGlkIDwgbnVtSXRlbXM7IGlkICs9IDEpIHtcbiAgICAgIHBva2Vtb25zLnB1c2godGhpcy5nZXRQb2tlbW9uRGF0YShzdGFydCArIGlkKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHBva2Vtb25zKTtcbiAgfVxuXG4gIGdldFBva2Vtb25EYXRhID0gYXN5bmMgKHBva2VJZCkgPT4ge1xuICAgIGNvbnN0IHBva2VkYXRhID0gYXdhaXQgZmV0Y2godGhpcy4jYmFzZVVybCArIHBva2VJZClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcbiAgICBjb25zdCB7XG4gICAgICBpZCwgbmFtZSwgc3ByaXRlcywgdHlwZXMsXG4gICAgfSA9IHBva2VkYXRhO1xuICAgIGNvbnN0IHBva2VUeXBlcyA9IFtdO1xuICAgIHR5cGVzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIHBva2VUeXBlcy5wdXNoKGVsZW1lbnQudHlwZS5uYW1lKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbmV3IFBva2VQcmVzZW50ZXIoaWQsIG5hbWUsIHNwcml0ZXMub3RoZXIuZHJlYW1fd29ybGQuZnJvbnRfZGVmYXVsdCwgcG9rZVR5cGVzKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUG9rZUFwaVNlcnZpY2U7IiwiaW1wb3J0IFBva2VBcGlTZXJ2aWNlIGZyb20gJy4vUG9rZUFwaVNlcnZpY2UuanMnO1xyXG5pbXBvcnQgSW52b2x2ZW1lbnRBcGlTZXJ2aWNlIGZyb20gJy4vSW52b2x2ZW1lbnRBcGlTZXJ2aWNlLmpzJztcclxuaW1wb3J0IFBva2VMaXN0VmlldyBmcm9tICcuL1Bva2VMaXN0Vmlldy5qcyc7XHJcblxyXG5jbGFzcyBQb2tlTGlzdFByZXNlbnRlciB7XHJcbiAgI21vZGVsO1xyXG5cclxuICAjdmlldztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLiNtb2RlbCA9IG5ldyBQb2tlQXBpU2VydmljZSgpO1xyXG4gICAgdGhpcy4jdmlldyA9IG5ldyBQb2tlTGlzdFZpZXcodGhpcyk7XHJcbiAgfVxyXG5cclxuICBnZXQgdmlldygpIHtcclxuICAgIHJldHVybiB0aGlzLiN2aWV3O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNhcmRzVWkoKSB7XHJcbiAgICByZXR1cm4gKGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgbGlrZXMgPSBhd2FpdCBJbnZvbHZlbWVudEFwaVNlcnZpY2UuZ2V0QWxsTGlrZXMoKTtcclxuICAgICAgY29uc3QgY2FyZHMgPSBbXTtcclxuICAgICAgY29uc3QgcG9rZURhdGEgPSBhd2FpdCB0aGlzLiNtb2RlbC5nZXRTb21lUG9rZW1vbkRhdGEoMTUsIDE4KTtcclxuXHJcbiAgICAgIGxldCBsaWs7XHJcbiAgICAgIHBva2VEYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICBsaWsgPSBsaWtlcy5maW5kKChpdGVtKSA9PiBpdGVtLml0ZW1faWQgPT09IGVsZW1lbnQuaWQpO1xyXG4gICAgICAgIGVsZW1lbnQubGlrZXMgPSAobGlrICE9PSB1bmRlZmluZWQpID8gbGlrLmxpa2VzIDogMDtcclxuICAgICAgICBjYXJkcy5wdXNoKGVsZW1lbnQudmlldy51aSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIGNhcmRzO1xyXG4gICAgfSkoKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUG9rZUxpc3RQcmVzZW50ZXI7IiwiY2xhc3MgUG9rZUxpc3RWaWV3IHtcbiAgI3ByZXNlbnRlcjtcblxuICAjdWk7XG5cbiAgY29uc3RydWN0b3IocHJlc2VudGVyKSB7XG4gICAgdGhpcy4jcHJlc2VudGVyID0gcHJlc2VudGVyO1xuICAgIHRoaXMuI3VpID0gdGhpcy4jY3JlYXRlRE9NRWxlbWVudHMoKTtcbiAgfVxuXG4gIGdldCB1aSgpIHtcbiAgICByZXR1cm4gdGhpcy4jdWk7XG4gIH1cblxuICAjY3JlYXRlRE9NRWxlbWVudHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcG9rZUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb2tlTGlzdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Bva2UtY2FyZHMtY29udCcpO1xuICAgIGNvbnN0IGxpc3QgPSBhd2FpdCB0aGlzLiNwcmVzZW50ZXIuY2FyZHNVaTtcblxuICAgIGxpc3QuZm9yRWFjaCgoY2FyZFVpKSA9PiB7XG4gICAgICBwb2tlTGlzdC5hcHBlbmRDaGlsZChjYXJkVWkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBva2VMaXN0O1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBQb2tlTGlzdFZpZXc7IiwiY2xhc3MgUG9rZU1vZGVsIHtcbiAgY29uc3RydWN0b3IoaWQsIG5hbWUsIGltZ0xpbmssIHR5cGVzKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pbWdMaW5rID0gaW1nTGluaztcbiAgICB0aGlzLnR5cGVzID0gdHlwZXM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9rZU1vZGVsOyIsImltcG9ydCBJbnZvbHZlbWVudEFwaVNlcnZpY2UgZnJvbSAnLi9JbnZvbHZlbWVudEFwaVNlcnZpY2UuanMnO1xuaW1wb3J0IFBva2VNb2RlbCBmcm9tICcuL1Bva2VNb2RlbC5qcyc7XG5pbXBvcnQgUG9rZVZpZXcgZnJvbSAnLi9Qb2tlVmlldy5qcyc7XG5cbmNsYXNzIFBva2VQcmVzZW50ZXIge1xuICAjbW9kZWw7XG5cbiAgI3ZpZXc7XG5cbiAgI2xpa2VzO1xuXG4gIGNvbnN0cnVjdG9yKGlkLCBuYW1lLCBpbWdMaW5rLCB0eXBlcykge1xuICAgIHRoaXMuI21vZGVsID0gbmV3IFBva2VNb2RlbChpZCwgbmFtZSwgaW1nTGluaywgdHlwZXMpO1xuICAgIHRoaXMuI3ZpZXcgPSBuZXcgUG9rZVZpZXcodGhpcyk7XG4gICAgdGhpcy4jbGlrZXMgPSAwO1xuICB9XG5cbiAgZ2V0IHZpZXcoKSB7XG4gICAgcmV0dXJuIHRoaXMuI3ZpZXc7XG4gIH1cblxuICBnZXQgaWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuI21vZGVsLmlkO1xuICB9XG5cbiAgZ2V0IGltZ0xpbmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuI21vZGVsLmltZ0xpbms7XG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy4jbW9kZWwubmFtZTtcbiAgfVxuXG4gIGdldCB0eXBlcygpIHtcbiAgICByZXR1cm4gdGhpcy4jbW9kZWwudHlwZXM7XG4gIH1cblxuICBnZXQgbGlrZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2xpa2VzO1xuICB9XG5cbiAgc2V0IGxpa2VzKGNvdW50KSB7XG4gICAgdGhpcy4jbGlrZXMgPSBjb3VudDtcbiAgICB0aGlzLiN2aWV3LnVwZGF0ZUxpa2VzKGNvdW50KTtcbiAgfVxuXG4gIGFkZExpa2UgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBJbnZvbHZlbWVudEFwaVNlcnZpY2UucG9zdExpa2VCeUlkKHRoaXMuI21vZGVsLmlkKTtcblxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xuICAgICAgdGhpcy4jbGlrZXMgKz0gMTtcbiAgICAgIHRoaXMuI3ZpZXcudXBkYXRlTGlrZXModGhpcy4jbGlrZXMpO1xuICAgIH1cbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUG9rZVByZXNlbnRlcjsiLCJpbXBvcnQgaGVhcnRJY29uIGZyb20gJy4uL2Fzc2V0cy9oZWFydC1pY29uLnN2Zyc7XG5pbXBvcnQgb3ZhbEJnIGZyb20gJy4uL2Fzc2V0cy9vdmFsLnN2Zyc7XG5pbXBvcnQgZ2VuZXJhdGVQb2tlbW9uIGZyb20gJy4vZ2VuZXJhdGVQb2tlbW9uLmpzJztcblxuY2xhc3MgUG9rZVZpZXcge1xuICAjcHJlc2VudGVyO1xuXG4gICN1aTtcblxuICAjbGlrZXM7XG5cbiAgI2NvbG9ycyA9IHtcbiAgICBncmFzczogJyM1ZmJkNTgnLFxuICAgIGJ1ZzogJyM5MmJjMmMnLFxuICAgIGRhcms6ICcjNTk1NzYxJyxcbiAgICBkcmFnb246ICcjMGM2OWM4JyxcbiAgICBlbGVjdHJpYzogJyNmMmQ5NGUnLFxuICAgIGZhaXJ5OiAnI2VlOTBlNicsXG4gICAgZmlnaHRpbmc6ICcjZDM0MjVmJyxcbiAgICBmaXJlOiAnI2RjODcyZicsXG4gICAgZmx5aW5nOiAnI2ExYmJlYycsXG4gICAgZ3JvdW5kOiAnI2RhN2M0ZCcsXG4gICAgZ2hvc3Q6ICcjNWY2ZGJjJyxcbiAgICBwc3ljaGljOiAnIzc1ZDBjMScsXG4gICAgc3RlZWw6ICcjNTY5NWEzJyxcbiAgICB3YXRlcjogJyM1MzlkZGYnLFxuICAgIHBvaXNvbjogJyNiNzYzY2YnLFxuICAgIG5vcm1hbDogJyNhMGEyOWYnLFxuICAgIHJvY2s6ICcjYTM4YzIxJyxcbiAgICBpY2U6ICcjNzVkMGMxJyxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByZXNlbnRlcikge1xuICAgIHRoaXMuI3ByZXNlbnRlciA9IHByZXNlbnRlcjtcbiAgICB0aGlzLiN1aSA9IHRoaXMuI2NyZWF0ZURPTUVsZW1lbnRzKCk7XG4gICAgdGhpcy51cGRhdGVMaWtlcygpO1xuICB9XG5cbiAgZ2V0IHVpKCkge1xuICAgIHJldHVybiB0aGlzLiN1aTtcbiAgfVxuXG4gIHVwZGF0ZUxpa2VzID0gKG5ld0NvdW50KSA9PiB7XG4gICAgdGhpcy4jbGlrZXMuaW5uZXJUZXh0ID0gYCR7bmV3Q291bnR9IGxpa2VzYDtcbiAgfVxuXG4gIGdldEJnQ29sb3IgPSAoKSA9PiB7XG4gICAgbGV0IHN0YXJ0Q29sb3IgPSAnJztcbiAgICBsZXQgZW5kQ29sb3IgPSAnJztcblxuICAgIGlmICh0aGlzLiNwcmVzZW50ZXIudHlwZXMubGVuZ3RoID09PSAyKSB7XG4gICAgICBzdGFydENvbG9yID0gdGhpcy4jY29sb3JzW3RoaXMuI3ByZXNlbnRlci50eXBlc1swXV07XG5cbiAgICAgIGVuZENvbG9yID0gdGhpcy4jY29sb3JzW3RoaXMuI3ByZXNlbnRlci50eXBlc1sxXV07XG4gICAgfSBlbHNlIGlmICh0aGlzLiNwcmVzZW50ZXIudHlwZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICBzdGFydENvbG9yID0gdGhpcy4jY29sb3JzW3RoaXMuI3ByZXNlbnRlci50eXBlc1swXV07XG4gICAgICBlbmRDb2xvciA9IHN0YXJ0Q29sb3I7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0Q29sb3IgPSAnI2ZmZic7XG4gICAgICBlbmRDb2xvciA9ICcjZmZmJztcbiAgICB9XG4gICAgcmV0dXJuIGBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJHtzdGFydENvbG9yfSwgJHtlbmRDb2xvcn0pYDtcbiAgfVxuXG4gICNjcmVhdGVET01FbGVtZW50cyA9ICgpID0+IHtcbiAgICBjb25zdCBwb2tlQ2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBva2VDYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncG9rZS1jYXJkJyk7XG5cbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncG9rZS1zaG93Jyk7XG4gICAgZGl2LnN0eWxlID0gdGhpcy5nZXRCZ0NvbG9yKCk7XG5cbiAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncG9rZS1pbWcnKTtcbiAgICBpbWcuc2V0QXR0cmlidXRlKCdsb2FkaW5nJywgJ2xhenknKTtcbiAgICBpbWcuc3JjID0gdGhpcy4jcHJlc2VudGVyLmltZ0xpbms7XG4gICAgZGl2LmFwcGVuZENoaWxkKGltZyk7XG5cbiAgICBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwb2tlLXNob3ctb3ZhbCcpO1xuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ2xvYWRpbmcnLCAnbGF6eScpO1xuICAgIGltZy5zcmMgPSBvdmFsQmc7XG4gICAgZGl2LmFwcGVuZENoaWxkKGltZyk7XG5cbiAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncG9rZS1pZCcpO1xuICAgIHAuaW5uZXJUZXh0ID0gdGhpcy4jcHJlc2VudGVyLmlkO1xuICAgIGRpdi5hcHBlbmRDaGlsZChwKTtcbiAgICBwb2tlQ2FyZC5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgLy8gUG9rZW1vbiBkZXRhaWxzXG4gICAgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncG9rZS1kZXRzJyk7XG4gICAgbGV0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncG9rZS1kYXRhJyk7XG5cbiAgICBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwb2tlLW5hbWUnKTtcbiAgICBwLmlubmVyVGV4dCA9IHRoaXMuI3ByZXNlbnRlci5uYW1lO1xuICAgIGRpdjIuYXBwZW5kQ2hpbGQocCk7XG5cbiAgICBsZXQgdHlwZUljb247XG4gICAgY29uc3QgdHlwZUljb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdHlwZUljb25zLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncG9rZS10eXBlcycpO1xuICAgIHRoaXMuI3ByZXNlbnRlci50eXBlcy5mb3JFYWNoKCh0eXBlKSA9PiB7XG4gICAgICB0eXBlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgdHlwZUljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsICd0eXBlLWltZycpO1xuICAgICAgdHlwZUljb24uc2V0QXR0cmlidXRlKCd0aXRsZScsIGAke3R5cGV9YCk7XG4gICAgICB0eXBlSWNvbi5zcmMgPSBgLi9hc3NldHMvJHt0eXBlfS5zdmdgO1xuICAgICAgZGl2Mi5hcHBlbmRDaGlsZCh0eXBlSWNvbik7XG4gICAgfSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGRpdjIpO1xuICAgIHBva2VDYXJkLmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2Mi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Bva2UtbGlrZXMnKTtcbiAgICBjb25zdCBpY29uQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGljb25Db250LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaGVhcnQtaWNvbi1jb250Jyk7XG4gICAgaWNvbkNvbnQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuXG4gICAgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGlrZS1pY29uJyk7XG4gICAgaW1nLnNyYyA9IGhlYXJ0SWNvbjtcbiAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLiNwcmVzZW50ZXIuYWRkTGlrZSk7XG4gICAgaWNvbkNvbnQuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICBkaXYyLmFwcGVuZENoaWxkKGljb25Db250KTtcblxuICAgIHRoaXMuI2xpa2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRoaXMuI2xpa2VzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbGlrZXMtY291bnQnKTtcbiAgICB0aGlzLiNsaWtlcy5pbm5lclRleHQgPSAnMCBsaWtlcyc7XG4gICAgZGl2Mi5hcHBlbmRDaGlsZCh0aGlzLiNsaWtlcyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGRpdjIpO1xuICAgIHBva2VDYXJkLmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICAvLyBCdXR0b25zXG4gICAgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncG9rZS1idG5zJyk7XG4gICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgYnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY29tLWJ0biBwb2tlLWJ0bicpO1xuICAgIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwYW4uaW5uZXJUZXh0ID0gJ0NPTU1FTlRTJztcbiAgICBidG4uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgZ2VuZXJhdGVQb2tlbW9uKHRoaXMuI3ByZXNlbnRlci5pZCk7XG4gICAgfSk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJ0bik7XG4gICAgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBidG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdyZXMtYnRuIHBva2UtYnRuJyk7XG4gICAgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuLmlubmVyVGV4dCA9ICdSRVNFUlZBVElPTlMnO1xuICAgIGJ0bi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLiNwcmVzZW50ZXIub3BlblJlc2VydmF0aW9ucyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGJ0bik7XG4gICAgcG9rZUNhcmQuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgIHJldHVybiBwb2tlQ2FyZDtcbiAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IFBva2VWaWV3O1xuIiwiY29uc3QgY29tbWVudHNDb3VudGVyID0gKGNvbW1lbnRMaXN0KSA9PiB7XHJcbiAgbGV0IGNvdW50ZXIgPSAwO1xyXG5cclxuICBpZiAoIWNvbW1lbnRMaXN0LmVycm9yKSB7XHJcbiAgICBjb21tZW50TGlzdC5mb3JFYWNoKChjb21tZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICBjb3VudGVyID0gaW5kZXggKyAxO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiBjb3VudGVyO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBjb21tZW50c0NvdW50ZXI7XHJcbiIsImltcG9ydCBjb21tZW50c0NvdW50ZXIgZnJvbSAnLi9jb21tZW50c0NvdW50ZXIuanMnO1xuaW1wb3J0IGdldENvbW1lbnRzRGF0YSBmcm9tICcuL2dldFBva2Vtb25Db21tZW50cy5qcyc7XG5cbmNvbnN0IGdlbmVyYXRlQ29tbWVudHMgPSBhc3luYyAocG9raUlkKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldENvbW1lbnRzRGF0YShwb2tpSWQpO1xuICBsZXQgZ2VuZXJhdGVIdG1sID0gJyc7XG5cbiAgY29uc3QgdG90YWxDb21tZW50cyA9IGF3YWl0IGNvbW1lbnRzQ291bnRlcihyZXN1bHQpO1xuXG4gIGlmICghcmVzdWx0LmVycm9yICYmIHJlc3VsdC5sZW5ndGggPiAwKSB7XG4gICAgYXdhaXQgcmVzdWx0LmZvckVhY2goYXN5bmMgKGNvbW1lbnQsIGlkKSA9PiB7XG4gICAgICBnZW5lcmF0ZUh0bWwgKz0gYDxsaSBjbGFzcz1cImNvbW1lbnRzX19pdGVtXCIgaWQ9JHtpZH0+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb21tZW50X19pdGVtLWRhdGVcIj4ke2NvbW1lbnQuY3JlYXRpb25fZGF0ZX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb21tZW50X19pdGVtLXVzZXJcIj4ke2NvbW1lbnQudXNlcm5hbWV9Ojwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNvbW1lbnRfX2l0ZW0tdGV4dFwiPiR7Y29tbWVudC5jb21tZW50fTwvc3Bhbj5cbiAgICAgICAgPC9saT5gO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGdlbmVyYXRlSHRtbFxuICAgICAgKz0gJzxsaSBjbGFzcz1cImNvbW1lbnRzX19pdGVtXCI+PHNwYW4gY2xhc3M9XCJjb21tZW50X19pdGVtLXVzZXJcIj5ObyBjb21tZW50cy48L3NwYW4+PC9saT4nO1xuICB9XG4gIGdlbmVyYXRlSHRtbCA9IGA8aDIgY2xhc3M9XCJ0aXRsZS1zZWNvbmRhcnlcIj5Db21tZW50cyAoJHt0b3RhbENvbW1lbnRzfSk8L2gyPlxuICA8dWwgY2xhc3M9XCJjb21tZW50c19fbGlzdFwiPlxuICAgJHtnZW5lcmF0ZUh0bWx9XG4gIDwvdWw+YDtcbiAgcmV0dXJuIGdlbmVyYXRlSHRtbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlQ29tbWVudHM7XG4iLCJjb25zdCBnZW5lcmF0ZUNvbG9yID0gYXN5bmMgKHR5cGUpID0+IHtcbiAgbGV0IGNvbG9yO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdncmFzcyc6XG4gICAgICBjb2xvciA9ICcjNWZiZDU4JztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2J1Zyc6XG4gICAgICBjb2xvciA9ICcjOTJiYzJjJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2RhcmsnOlxuICAgICAgY29sb3IgPSAnIzU5NTc2MSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdkcmFnb24nOlxuICAgICAgY29sb3IgPSAnIzBjNjljOCc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdlbGVjdHJpYyc6XG4gICAgICBjb2xvciA9ICcjZjJkOTRlJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2ZhaXJ5JzpcbiAgICAgIGNvbG9yID0gJyNlZTkwZTYnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZmlnaHRpbmcnOlxuICAgICAgY29sb3IgPSAnI2QzNDI1Zic7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdmaXJlJzpcbiAgICAgIGNvbG9yID0gJyNkYzg3MmYnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZmx5aW5nJzpcbiAgICAgIGNvbG9yID0gJyNhMWJiZWMnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZ3JvdW5kJzpcbiAgICAgIGNvbG9yID0gJyNkYTdjNGQnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZ2hvc3QnOlxuICAgICAgY29sb3IgPSAnIzVmNmRiYyc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwc3ljaGljJzpcbiAgICAgIGNvbG9yID0gJyM3NWQwYzEnO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc3RlZWwnOlxuICAgICAgY29sb3IgPSAnIzU2OTVhMyc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd3YXRlcic6XG4gICAgICBjb2xvciA9ICcjNTM5ZGRmJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3BvaXNvbic6XG4gICAgICBjb2xvciA9ICcjYjc2M2NmJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ25vcm1hbCc6XG4gICAgICBjb2xvciA9ICcjYTBhMjlmJztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3JvY2snOlxuICAgICAgY29sb3IgPSAnI2EzOGMyMSc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdpY2UnOlxuICAgICAgY29sb3IgPSAnIzc1ZDBjMSc7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBjb2xvciA9ICcjZmZmJztcbiAgICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiBjb2xvcjtcbn07XG5cbmNvbnN0IGdlbmVyYXRlUG9rZUJnID0gYXN5bmMgKHR5cGVzKSA9PiB7XG4gIGxldCBzdGFydENvbG9yID0gJyc7XG4gIGxldCBlbmRDb2xvciA9ICcnO1xuICBpZiAodHlwZXMubGVuZ3RoID09PSAyKSB7XG4gICAgc3RhcnRDb2xvciA9IGF3YWl0IGdlbmVyYXRlQ29sb3IodHlwZXNbMF0udHlwZS5uYW1lKTtcbiAgICBlbmRDb2xvciA9IGF3YWl0IGdlbmVyYXRlQ29sb3IodHlwZXNbMV0udHlwZS5uYW1lKTtcbiAgfSBlbHNlIGlmICh0eXBlcy5sZW5ndGggPT09IDEpIHtcbiAgICBzdGFydENvbG9yID0gYXdhaXQgZ2VuZXJhdGVDb2xvcih0eXBlc1swXS50eXBlLm5hbWUpO1xuICAgIGVuZENvbG9yID0gc3RhcnRDb2xvcjtcbiAgfSBlbHNlIHtcbiAgICBzdGFydENvbG9yID0gJyNmZmYnO1xuICAgIGVuZENvbG9yID0gJyNmZmYnO1xuICB9XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJHtzdGFydENvbG9yfSwgJHtlbmRDb2xvcn0pYDtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlUG9rZUJnO1xuIiwiaW1wb3J0IGdlbmVyYXRlUG9rZUJnIGZyb20gJy4vZ2VuZXJhdGVQb2tlQmcuanMnO1xuaW1wb3J0IGdldFBva2Vtb25EYXRhIGZyb20gJy4vZ2V0UG9rZW1vbkRhdGEuanMnO1xuaW1wb3J0IGdlbmVyYXRlQ29tbWVudHMgZnJvbSAnLi9nZW5lcmF0ZUNvbW1lbnRzLmpzJztcbmltcG9ydCBwb3N0Q29tbWVudCBmcm9tICcuL3Bvc3RDb21tZW50cy5qcyc7XG5cbmNvbnN0IHBva2lQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb2tpUG9wdXAnKTtcblxuY29uc3QgZ2VuZXJhdGVUeXBlc0h0bWwgPSBhc3luYyAodHlwZXMpID0+IHtcbiAgbGV0IGdlbmVyYXRlSHRtbCA9ICcnO1xuXG4gIGlmICh0eXBlcy5sZW5ndGggPiAwKSB7XG4gICAgYXdhaXQgdHlwZXMuZm9yRWFjaChhc3luYyAodHlwZSkgPT4ge1xuICAgICAgZ2VuZXJhdGVIdG1sICs9IGA8ZGl2IHRvb2x0aXA9XCIke3R5cGUudHlwZS5uYW1lfVwiPlxuICAgIDxpbWcgY2xhc3M9XCJ0eXBlLWltZ1wiIHNyYz1cIi4vYXNzZXRzLyR7dHlwZS50eXBlLm5hbWV9LnN2Z1wiIGFsdD1cIiR7dHlwZS50eXBlLm5hbWV9XCIgLz5cbiAgPC9kaXY+YDtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBnZW5lcmF0ZUh0bWw7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVN0YXRzSHRtbCA9IChzdGF0cykgPT4ge1xuICBsZXQgZ2VuZXJhdGVIdG1sID0gJyc7XG4gIGlmIChzdGF0cy5sZW5ndGggPiAwKSB7XG4gICAgc3RhdHMuZm9yRWFjaCgoc3RhdCwgaWQpID0+IHtcbiAgICAgIGdlbmVyYXRlSHRtbCArPSBgPGRpdiBjbGFzcz1cInByb2dyZXNzXCIgaWQ9XCIke2lkfVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInByb2dyZXNzX190aXRsZVwiPiR7c3RhdC5zdGF0Lm5hbWV9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NfX2Jhci1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHRvb2x0aXA9XCIke3N0YXQuYmFzZV9zdGF0fSVcIlxuICAgICAgICAgIGNsYXNzPVwicHJvZ3Jlc3NfX2JhclwiXG4gICAgICAgICAgZGF0YS1wZXJjZW50PVwiJHtzdGF0LmJhc2Vfc3RhdH1cIlxuICAgICAgICAgIHN0eWxlPVwid2lkdGg6ICR7c3RhdC5iYXNlX3N0YXR9JVwiXG4gICAgICAgID48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmA7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGdlbmVyYXRlSHRtbDtcbn07XG5cbmNvbnN0IGdlbmVyYXRlQWJpbGl0aWVzSHRtbCA9IChhYmlsaXRpZXMpID0+IHtcbiAgbGV0IGdlbmVyYXRlSHRtbCA9ICcnO1xuICBpZiAoYWJpbGl0aWVzLmxlbmd0aCA+IDApIHtcbiAgICBhYmlsaXRpZXMuZm9yRWFjaCgoYWJpbGl0eSkgPT4ge1xuICAgICAgZ2VuZXJhdGVIdG1sICs9IGA8cCBjbGFzcz1cImFiaWxpdHlcIj4ke2FiaWxpdHkuYWJpbGl0eS5uYW1lfTwvcD5gO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBnZW5lcmF0ZUh0bWw7XG59O1xuXG5jb25zdCBnZW5lcmF0ZVBva2Vtb24gPSBhc3luYyAocG9raUlkKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldFBva2Vtb25EYXRhKHBva2lJZCk7XG4gIGNvbnN0IHtcbiAgICBhYmlsaXRpZXMsIGhlaWdodCwgd2VpZ2h0LCBpZCwgbmFtZSwgc3RhdHMsIHR5cGVzLCBzcHJpdGVzLFxuICB9ID0gcmVzdWx0O1xuICBjb25zdCBpbWcgPSBzcHJpdGVzLm90aGVyLmRyZWFtX3dvcmxkLmZyb250X2RlZmF1bHQ7XG4gIGNvbnN0IHR5cGVzSHRtbCA9IGF3YWl0IGdlbmVyYXRlVHlwZXNIdG1sKHR5cGVzKTtcbiAgY29uc3QgZ2VuZXJhdGVkUG9rZUJnID0gYXdhaXQgZ2VuZXJhdGVQb2tlQmcodHlwZXMpO1xuICBjb25zdCBhYmlsaXRpZXNIdG1sID0gYXdhaXQgZ2VuZXJhdGVBYmlsaXRpZXNIdG1sKGFiaWxpdGllcyk7XG4gIGNvbnN0IHN0YXRzSHRtbCA9IGF3YWl0IGdlbmVyYXRlU3RhdHNIdG1sKHN0YXRzKTtcbiAgY29uc3QgY29tbWVudHMgPSBhd2FpdCBnZW5lcmF0ZUNvbW1lbnRzKHBva2lJZCk7XG5cbiAgY29uc3QgZ2VuZXJhdGVkUG9rZW1vbkh0bWwgPSBhd2FpdCBgPGRpdiBjbGFzcz1cInBvcHVwX19jb250YWluZXJcIiBpZD0gJHtpZH0+XG4gICAgPHAgY2xhc3M9XCJwb2tlbW9uLWlkXCI+IyR7cG9raUlkfTwvcD5cbiAgICA8YnV0dG9uIGNsYXNzPVwiY2xvc2VcIj4mdGltZXM7PC9idXR0b24+XG4gICAgPGRpdiBjbGFzcz1cInBvcHVwX19pbWctY29udGFpbmVyXCIgc3R5bGU9XCIke2dlbmVyYXRlZFBva2VCZ31cIj5cbiAgICAgIDxpbWcgY2xhc3M9XCJwb3B1cF9faW1nXCIgc3JjPVwiJHtpbWd9XCIgYWx0PVwiJHtuYW1lfVwiIC8+XG4gICAgICA8aW1nIHNyYz1cIi4vYXNzZXRzL292YWwuc3ZnXCIgYWx0PVwiXCIgY2xhc3M9XCJwb3B1cF9faW1nLWJnXCIgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicG9wdXBfX2NvbnRlbnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cF9fY29udGVudC10b3BcIj5cbiAgICAgICAgPGgyIGNsYXNzPVwidGl0bGUtc2Vjb25kYXJ5XCI+JHtuYW1lfTwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0eXBlc1wiPlxuICAgICAgICAke3R5cGVzSHRtbH1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImRldGFpbHMtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItLXByb2dyZXNzXCI+XG4gICAgICAgICAgPGg0IGNsYXNzPVwidGl0bGUtNFwiPkJhc2Ugc3RhdHVzOjwvaDQ+XG4gICAgICAgICAgJHtzdGF0c0h0bWx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlscy1yaWdodFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFzZXJtZW50c1wiPlxuICAgICAgICAgICAgPGg0IGNsYXNzPVwidGl0bGUtNFwiPk1lYXN1cmVtZW50czo8L2g0PlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJtZWFzdXJlbWVudFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1lYXN1cmVtZW50X190aXRsZVwiPkhlaWdodCA6IDwvc3Bhbj4gJHtoZWlnaHR9IE1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwibWVhc3VyZW1lbnRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZWFzdXJlbWVudF9fdGl0bGVcIj53ZWlnaHQgOiA8L3NwYW4+ICR7d2VpZ2h0fSBrZ1xuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhYmlsaXRpZXNcIj5cbiAgICAgICAgICAgIDxoNCBjbGFzcz1cInRpdGxlLTRcIj5BYmlsaXRpZXM6PC9oND5cbiAgICAgICAgICAgICR7YWJpbGl0aWVzSHRtbH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50c1wiPlxuICAgICAgJHtjb21tZW50c31cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYWRkLWNvbW1lbnRzXCI+XG4gICAgICA8aDIgY2xhc3M9XCJ0aXRsZS1zZWNvbmRhcnkgdGV4dC0tY2VudGVyXCI+QWRkIGNvbW1lbnQ8L2gyPlxuICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiIGNsYXNzPVwiYWRkLWNvbW1lbnRzX19mb3JtXCIgaWQ9XCJhZGROZXdDb21tZW50XCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHZhbHVlPVwiJHtpZH1cIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPVwiaXRlbV9pZFwiXG4gICAgICAgICAgY2xhc3M9XCJhZGQtY29tbWVudHNfX2lucHV0LS1oaWRkZW5cIlxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBjbGFzcz1cImFkZC1jb21tZW50c19faW5wdXRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCJcbiAgICAgICAgLz5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIGluc2lnaHRzXCJcbiAgICAgICAgICBuYW1lPVwiY29tbWVudFwiXG4gICAgICAgICAgY29scz1cIjJcIlxuICAgICAgICAgIHJvd3M9XCIyXCJcbiAgICAgICAgICBjbGFzcz1cImFkZC1jb21tZW50c19faW5wdXRcIlxuICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFkZC1jb21tZW50c19fYnRuIGNvbS1idG4gcG9rZS1idG5cIj5Db21tZW50PC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PmA7XG4gIHBva2lQb3B1cC5pbm5lckhUTUwgPSBnZW5lcmF0ZWRQb2tlbW9uSHRtbDtcbiAgcG9raVBvcHVwLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBjb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgIHBva2lQb3B1cC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9O1xuXG4gIGNvbnN0IG5ld0NvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkTmV3Q29tbWVudCcpO1xuICBuZXdDb21tZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoZS50YXJnZXQpO1xuICAgIGNvbnN0IGl0ZW1JZCA9IGRhdGEuZ2V0KCdpdGVtX2lkJyk7XG4gICAgY29uc3QgdXNlcm5hbWUgPSBkYXRhLmdldCgndXNlcm5hbWUnKTtcbiAgICBjb25zdCBjb21tZW50ID0gZGF0YS5nZXQoJ2NvbW1lbnQnKTtcbiAgICBpZiAoaXRlbUlkICYmIHVzZXJuYW1lICYmIGNvbW1lbnQpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBvc3RDb21tZW50KHtcbiAgICAgICAgaXRlbV9pZDogaXRlbUlkLFxuICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgY29tbWVudCxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocmVzdWx0ID09PSAyMDEpIHtcbiAgICAgICAgY29uc3QgZ2VuZXJhdGVkQ29tbWVudHNIdG1sID0gYXdhaXQgZ2VuZXJhdGVDb21tZW50cyhpdGVtSWQpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudHMnKS5pbm5lckhUTUwgPSBnZW5lcmF0ZWRDb21tZW50c0h0bWw7XG4gICAgICAgIG5ld0NvbW1lbnQucmVzZXQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZVBva2Vtb247XG4iLCJjb25zdCBnZXRDb21tZW50c0RhdGEgPSBhc3luYyAocG9raUlkID0gMCkgPT4ge1xyXG4gIGNvbnN0IGVuZHBvaW50ID0gYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3VWZ2hGWlVYeUFPTlRlVXFBSVhsL2NvbW1lbnRzP2l0ZW1faWQ9JHtwb2tpSWR9YDtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChlbmRwb2ludCwge1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgYFRoZXJlIHdhcyB0aGUgZm9sbG93aW5nIHByb2JsZW06ICR7ZXJyfSB3aGlsZSBmZXRjaGluZyAke2VuZHBvaW50fWAsXHJcbiAgICApO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldENvbW1lbnRzRGF0YTtcclxuIiwiY29uc3QgZ2V0UG9rZW1vbkRhdGEgPSBhc3luYyAocG9raUlkKSA9PiB7XG4gIGNvbnN0IGVuZHBvaW50ID0gYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8ke3Bva2lJZH1gO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICB9KTtcbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYFRoZXJlIHdhcyB0aGUgZm9sbG93aW5nIHByb2JsZW06ICR7ZXJyfSB3aGlsZSBmZXRjaGluZyAke2VuZHBvaW50fWAsXG4gICAgKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0UG9rZW1vbkRhdGE7XG4iLCJjb25zdCBwb3N0Q29tbWVudCA9IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgY29uc3QgZW5kcG9pbnQgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvdVZnaEZaVVh5QU9OVGVVcUFJWGwvY29tbWVudHMnO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGVuZHBvaW50LCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXNwb25zZS5zdGF0dXM7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgIGBUaGVyZSB3YXMgdGhlIGZvbGxvd2luZyBwcm9ibGVtOiAke2Vycn0gd2hpbGUgZmV0Y2hpbmcgJHtlbmRwb2ludH1gLFxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwb3N0Q29tbWVudDtcclxuIiwiaW1wb3J0IEFsbFBva2VzQ291bnRlciBmcm9tICcuL0FsbFBva2VzQ291bnRlci5qcyc7XG5pbXBvcnQgUG9rZUxpc3RQcmVzZW50ZXIgZnJvbSAnLi9Qb2tlTGlzdFByZXNlbnRlci5qcyc7XG5cbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICBjb25zdCBjb250ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnQnKTtcbiAgY29uc3QgcHJlc2VudGVyID0gbmV3IFBva2VMaXN0UHJlc2VudGVyKCk7XG4gIGNvbnQuYXBwZW5kQ2hpbGQoYXdhaXQgcHJlc2VudGVyLnZpZXcudWkpO1xuICBBbGxQb2tlc0NvdW50ZXIoKTtcbn1cbmV4cG9ydCBkZWZhdWx0IHN0YXJ0O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9