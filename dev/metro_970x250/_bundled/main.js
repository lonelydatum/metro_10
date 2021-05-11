(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power3.easeOut;

var w = size.w;
var h = size.h;

function init() {

	var tl = new TimelineMax({ onComplete: function onComplete() {} });

	tl.set(".frame1", { opacity: 1 });

	return tl;
}

exports.size = size;
exports.init = init;

},{}],2:[function(require,module,exports){
"use strict";

var _commonJs = require('./common.js');

function start() {
	var time = arguments.length <= 0 || arguments[0] === undefined ? .4 : arguments[0];

	TweenLite.defaultEase = Power3.easeOut;
	var w = _commonJs.size.w;
	var h = _commonJs.size.h;

	TweenLite.set(".t2", { x: -w });
	TweenLite.set(".t3", { x: -w * 2 });
	TweenLite.set(".t4", { x: -w * 3 });
	TweenLite.set(".end", { x: -w * 4, width: w, height: h });
	TweenLite.set(".holder", { x: 0 });
	var tl = (0, _commonJs.init)();
	tl.to(".holder", time, { x: w }, "+=3.2");
	tl.to(".holder", time, { x: w * 2 }, "+=2");
	tl.to(".holder", time, { x: w * 3 }, "+=2");
	tl.add("last", "+=2");
	tl.to(".holder", time, { x: w * 4 }, "last");
	tl.to(".border-start", time, { x: "+=" + w }, "last");
	tl.add("end", "+=.5");
	tl.from(".end_txt", time, { opacity: 0 }, "end");
	// tl.from(, .3, {opacity:0}, "+=.3")
	tl.from([".end_copy", ".end_cta", ".end_logo"], .5, { opacity: 0 }, "+=.4");
}

// tl.gotoAndPlay("end")

module.exports = { start: start };

},{"./common.js":1}],3:[function(require,module,exports){
'use strict';

var _commonJsMetroJs = require('../../_common/js/metro.js');

(0, _commonJsMetroJs.start)(.65);
module.exports = {};

},{"../../_common/js/metro.js":2}]},{},[3])


//# sourceMappingURL=main.js.map
