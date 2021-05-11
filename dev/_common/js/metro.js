


import {init, size} from './common.js'
function start() {
	TweenLite.defaultEase = Power3.easeOut
	const {w, h} = size
	TweenLite.set(".t2", {x:-w})
	TweenLite.set(".t3", {x:-w*2})
	TweenLite.set(".t4", {x:-w*3})
	TweenLite.set(".end", {x:-w*4, width:w, height:h})
	TweenLite.set(".holder", {x:0})
	const tl = init()
	tl.to(".holder", .3, {x:w}, "+=3.2")
	tl.to(".holder", .3, {x:w*2}, "+=2")
	tl.to(".holder", .3, {x:w*3}, "+=2")
	tl.to(".holder", .3, {x:w*4}, "+=2")
	tl.add("end", "+=.5")
	tl.from(".end_txt", .4, {opacity:0}, "end")
	// tl.from(, .3, {opacity:0}, "+=.3")
	tl.from([".end_copy", ".end_cta", ".end_logo"], .5, {opacity:0}, "+=.4")

}

// tl.gotoAndPlay("end")

module.exports = {start};
