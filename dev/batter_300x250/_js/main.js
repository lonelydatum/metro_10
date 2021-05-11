


import {init} from '../../_common/js/common.js'
TweenLite.defaultEase = Power3.easeOut
const tl = init()
tl.to(".holder", .3, {x:-300}, "+=3.2")
tl.to(".holder", .3, {x:-600}, "+=2")
tl.to(".holder", .3, {x:-900}, "+=2")
tl.to(".holder", .3, {x:-1200}, "+=2")
tl.add("end", "+=.5")
tl.from(".end_txt", .3, {opacity:0}, "end")
tl.from(".end_copy", .3, {opacity:0}, "+=.3")
tl.from([".end_cta", ".end_logo"], .3, {opacity:0}, "+=.5")

// tl.gotoAndPlay("end")

module.exports = {};

