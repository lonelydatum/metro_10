


import {init, size} from './common.js'
function start(time=.4) {
	TweenLite.defaultEase = Power3.easeOut
	const {w, h} = size
	TweenLite.set(".t2", {x:-w})
	TweenLite.set(".t3", {x:-w*2})
	TweenLite.set(".t4", {x:-w*3})
	TweenLite.set(".end", {x:-w*4, width:w, height:h})
	TweenLite.set(".holder", {x:0})
	const tl = init()
	tl.to(".holder", time, {x:w}, "+=3")
	tl.to(".holder", time, {x:w*2}, "+=1.7")
	tl.to(".holder", time, {x:w*3}, "+=1.7")
	tl.add("last", "+=1.7")
	tl.to(".holder", time, {x:w*4}, "last")
	tl.to(".border-start", time, {x:`+=${w}`}, "last")
	tl.add("end", "+=.5")
	// tl.from(".end_txt", time, {opacity:0}, "end")
	// tl.from(, .3, {opacity:0}, "+=.3")
	tl.from([".end_copy"], .5, {opacity:0}, "+=.3")
	tl.from([".end_logo", ".end_cta"], .3, {opacity:0}, "+=.2")
	// tl.from([".end_logo"], .3, {opacity:0}, "+=.2")
	

	// tl.gotoAndPlay("end")

}



module.exports = {start};

