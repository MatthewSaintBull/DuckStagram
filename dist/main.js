/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\r\n\r\nlet image = null\r\n\r\nlet applied_filter = \"\"\r\n\r\nlet loaded_filters = []\r\n\r\nconst filters_to_load = 3\r\n\r\nlet filters = filters_list;\r\n\r\nArray.prototype.ontop = function (val) {\r\n    return new Promise((resolve, reject) => {\r\n        this.splice(1,0,val)\r\n        resolve()\r\n    })\r\n}\r\n\r\nconst checkBrowser = () => new Promise((resolve, reject) => {\r\n    let browser = navigator.userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\\/))\\/?\\s*(\\d+)/i) || []\r\n    browser[1] === \"Chrome\" && browser[2] >= 52 && resolve(browser[1])\r\n    browser[1] === \"Firefox\" && Browser[2] >= 49 && resolve(browser[1])\r\n    reject(\"It seems that your browser doesn't support the canvas filter function, so you can only see the filter applied to the photos but you can't still download them\")\r\n})\r\n\r\nconst errorPage = (error) => {\r\n    document.getElementById(\"download\").innerHTML = `\r\n        <div class=\"alert alert-danger\">\r\n            <strong>Please, Change Browser!</strong> ${error}\r\n        </div>\r\n    `\r\n}\r\n\r\nconst loadFilters = () => {\r\n    let new_f = _.take(filters, filters_to_load)\r\n    filters = _.xor(filters, new_f)\r\n    loaded_filters.ontop(new_f).then(loaded_filters = _.flattenDeep(loaded_filters))\r\n    mapImages()\r\n    filters.length || (document.getElementById(\"load-filters\").style.display = \"none\")\r\n}\r\n\r\nconst checkExtension = file => new Promise((resolve, reject) => {\r\n    file = file.split(\";\")\r\n    const acceptedImageTypes = ['data:image/jpeg', 'data:image/png']\r\n    acceptedImageTypes.includes(file[0]) ? resolve() : reject(\"Filetype not valid\")\r\n})\r\n\r\ndocument.getElementById(\"add-image\").onchange = function () {\r\n    applied_filter && document.getElementById('image').classList.remove(applied_filter)\r\n    var reader = new FileReader()\r\n    reader.onload = function (e) {\r\n        checkExtension(e.target.result).then(res => {\r\n            document.getElementById(\"image\").src = e.target.result\r\n            document.getElementById(\"image\").style.display = \"flex\"\r\n            document.getElementById(\"carousel-filters\").style.display = \"block\"\r\n            console.log(\"set\")\r\n            image = event.target.result\r\n            mapImages()\r\n        })\r\n            .catch(err => { return err })\r\n    }\r\n    reader.readAsDataURL(this.files[0]);\r\n\r\n}\r\n\r\nconst applyFilter = (filter) => new Promise((resolve, reject) => {\r\n    var img = new Image();\r\n    console.log(\"filter\", filter)\r\n    img.crossOrigin = '';\r\n    img.src = document.getElementById('image').src;\r\n\r\n    img.onload = function () {\r\n        var canvas = document.getElementById('imageCtx'),\r\n            ctx = canvas.getContext('2d');\r\n        canvas.width = document.getElementById(\"image\").naturalWidth\r\n        canvas.height = document.getElementById(\"image\").naturalHeight\r\n        if (typeof ctx.filter !== 'undefined') {\r\n            ctx.filter = filter.filter\r\n            ctx.drawImage(this, 0, 0);\r\n            resolve()\r\n        } else {\r\n            ctx.drawImage(this, 0, 0);\r\n            resolve()\r\n        }\r\n        reject(\"error applying filter, please make sure the format is correct\")\r\n    }\r\n})\r\n\r\nconst handleSelectionFilter = (filterValue) => {\r\n    const filter = _.find(loaded_filters, f => { return f.value === filterValue })\r\n    applied_filter && document.getElementById('image').classList.remove(applied_filter)\r\n    applyFilter(filter).then(res => {\r\n        document.getElementById('image').classList.add(filter.value)\r\n        document.getElementById('download').style.display = \"flex\"\r\n        applied_filter = filter.value\r\n\r\n    })\r\n        .catch(err => console.log(err))\r\n}\r\n\r\n\r\nconst download = () => {\r\n    saveAs(document.getElementById('imageCtx').toDataURL(\"image/jpeg\"), \"duckstagrammed.jpg\")\r\n}\r\n\r\ndocument.onload = checkBrowser()\r\n    .then(loadFilters())\r\n    .catch(err => errorPage(err))\r\n\n\n//# sourceURL=webpack://duckstagram/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;