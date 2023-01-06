'use strict';



// const QRCode = require("./qrcode.min");

var app = {

	chars: [
			'',
			'日月牵衣袖',
			'春秋抚眉头',
			'用一个冬天',
			'十里飞雪',
			'鹅毛咏絮',
			'来歇你舟车',
			'敬你半生风波苦',
			'敬你一路而来', 
			'移山趟水',
			'跨海挥川',
			'衣袂带霜',
			'始终胸襟坦荡荡',
			'',
			'',
			'',
			'手掬星辰',
			'口衔柔波',
			'用一首清诗',
			'两袖词赋',
			'三章五文',
			'敬你年少写意傥风流',
			'世故几载',
			'大口吃愁',
			'快意飞马',
			'侠气纵横',
			'缘来不拒',
			'情走不留',
			'',
			'',
			'',
			'',
			'一杯清晨',
			'书声于口',
			'用一轮皎洁',
			'满地银霜',
			'浩瀚鲸空',
			'敬你闻鸡起',
			'夜半挑灯',
			'不梳几载', 
			'也有星辰青云梦一场',
			'愿你平生尽得意',      
			'',
			'',
			'',
			'',
			'最后虚构一个树深小窝',
			'柴门日照',
			'用一场火暖',
			'软橘猫',
			'及她脉脉柔情',
			'敬你眼窝深陷',
			'粲若天上星', 
			'溅起一次相逢',
			'终遇佳人话不休',
			'自你心间',
			'两行脚印',
			'走出雪地白头',
			'',
			'',
			'',
			'',
			'最后 道一声',
			'某某某 新年快乐',
			'祝您',
			'身体健康',
			'阖家欢乐',
			'万事如意'
	],

	

  init: function () {
	app.charIndex = -1;

	app.zIndexTop = 999;
	app.zIndexBottom = 0;
	
	// app.qrcodeImg = null;
	
	app.pageStart = document.getElementById('div-start');
	app.pageStart.style.zIndex = app.zIndexTop;

	app.pageShare = document.getElementById('div-share');
	app.pageShare.style.zIndex = app.zIndexBottom;

	app.pageDonate = document.getElementById('div-donate');
	app.pageDonate.style.zIndex = app.zIndexBottom;

	app.pageBtns = document.getElementById('div-btns');
	app.pageBtns.style.zIndex = app.zIndexBottom;


	app.btnStart = document.getElementById('btn-start');
	app.btnStart.addEventListener('click', app.onBtnStart);

	app.btnAgain = document.getElementById('btn-again');
	app.btnAgain.addEventListener('click', app.onBtnAgain);

	app.btnShare = document.getElementById('btn-share');
	app.btnShare.addEventListener('click', app.onBtnShare);

	app.btnDonate = document.getElementById('btn-donate');
	app.btnDonate.addEventListener('click', app.onBtnDonate);

	app.btnCloseDonate = document.getElementById('btn-Close-Donate');
	app.btnCloseDonate.addEventListener('click', app.onBtnCloseDonate);

	app.btnGenQRCode = document.getElementById('btn-Gen-QRCode');
	app.btnGenQRCode.addEventListener('click', app.onBtnGenQRCode);

	app.btnReGenQRCode = document.getElementById('btn-ReGen-QRCode');
	app.btnReGenQRCode.addEventListener('click', app.onBtnCloseSharePage);

	app.qrOutput = document.getElementById('output');

	app.inputFrom = document.getElementById('input-from');
	app.inputTo = document.getElementById('input-to');

	//app.inputFrom.addEventListener('keyup',app.onInputKeyup);

	app.popwindow = document.getElementById('popupwindow');

	app.qrcode = new QRCode(app.qrOutput,{
		colorDark:"#000000",
		colorLight:"#ffffff",
		correctLevel:QRCode.CorrectLevel.H
	});




	// btnStart.onclick =function(){
	// 	console.log('showMainScene');
	// }
	//btnStart.onclick = showMainScene;
    // app.container = document.createElement('div');
    // app.container.className = 'animation-container';
    // document.body.appendChild(app.container);
    // window.setInterval(app.add, 2000);
  },

  	onBtnStart:function () {
		console.log('onBtnStart');
		//var divStart = document.getElementById('div-start');
		app.pageStart.classList.add('out');

		app.pageStart.style.zIndex = app.zIndexBottom;

		app.pageBtns.style.zIndex = app.zIndexTop;

		app.container = document.createElement('div');
		app.container.className = 'animation-container';
		document.body.appendChild(app.container);
		window.setInterval(app.add, 2000);

	},

	onBtnAgain:function () {
		console.log('onBtnAgain');
		
		// app.popwindow.classList.toggle('pop-up');
		// app.popwindow.classList.toggle('away');
		// window.setTimeout(function(){
		// 	app.popwindow.classList.toggle('out');
		// },250);
	},

	onBtnShare:function () {
		console.log('onBtnShare');

		app.pageShare.classList.toggle('pop-up');
		app.pageShare.classList.toggle('away');
		window.setTimeout(function(){
			app.pageShare.classList.toggle('out');
		},250);

		app.pageShare.style.zIndex = app.zIndexTop;

		app.pageBtns.style.zIndex = app.zIndexBottom;
	},

	onBtnDonate:function () {
		console.log('onBtnDonate');

		app.pageDonate.classList.toggle('pop-up');
		app.pageDonate.classList.toggle('away');
		window.setTimeout(function(){
			app.pageDonate.classList.toggle('out');
		},250);

		app.pageDonate.style.zIndex = app.zIndexTop;
		app.pageBtns.style.zIndex = app.zIndexBottom;
	},

	onBtnCloseDonate:function () {
		console.log('onBtnCloseDonate');

		app.pageDonate.classList.toggle('pop-up');
		app.pageDonate.classList.toggle('away');
		window.setTimeout(function(){
			app.pageDonate.classList.toggle('out');
		},250);

		app.pageDonate.style.zIndex = app.zIndexBottom;
		app.pageBtns.style.zIndex = app.zIndexTop;
	},

	onBtnGenQRCode:function(){
		console.log('onBtnGenQRCode');

		app.qrcode.clear();

		let txtFrom = app.inputFrom.value;
		let txtTo = app.inputTo.value;
		let urlTxt = "https://www.baidu.com?from="+txtFrom+"&to="+txtTo;
		// let qrcode = new QRCode("output",{
		// 	colorDark:"#000000",
		// 	colorLight:"#ffffff",
		// 	correctLevel:QRCode.CorrectLevel.H
		// });

		app.qrcode.makeCode(urlTxt);
		app.qrOutput.style.opacity = 1;
	},

	onBtnCloseSharePage:function(){
		console.log('onBtnCloseSharePage');

		app.qrcode.clear();
		app.inputFrom.value = '';
		app.inputTo.value = '';

		app.qrOutput.style.opacity = 0;

		app.pageShare.classList.toggle('pop-up');
		app.pageShare.classList.toggle('away');
		window.setTimeout(function(){
			app.pageShare.classList.toggle('out');
		},250);

		app.pageShare.style.zIndex = app.zIndexBottom;

		app.pageBtns.style.zIndex = app.zIndexTop;
		
			
	},

	// onInputKeyup:function(e)
	// {
	// 	console.log("onInputKeyup");
	// 	var value = e.target.value;
	// 	console.log("value = ",value);

	// 	app.changeInputLabelStyle(e.target,value);
	// },

	// changeInputLabelStyle:function(ele,val){
	// 	var label = ele.previousElementSibling;
	// 	//console.log("label = ",label);
		
		
	// },
	


  add: function () {
    var element = document.createElement('span');
    app.container.appendChild(element);
    app.animate(element);
  },

	animate: function (element) {
		app.charIndex = app.charIndex + 1;
	  	if(app.charIndex>=app.chars.length)
	  	{
			app.charIndex = app.chars.length - 1;
		  	return;
	  	}
    //var character = app.chars[Math.floor(Math.random() * app.chars.length)];
	var character = app.chars[app.charIndex];
    //var duration = Math.floor(Math.random() * 15) + 1;
	var duration = 16;
    var offset = Math.floor(Math.random() * (50 - duration * 2)) + 3;
    //var size = 10 + (15 - duration);
	var size = 30;
    element.style.cssText = 'color: #c9a063;text-shadow: 0 0 8px rgba(255, 255, 255, 0.3);right:'+offset+'vw; font-size:'+size+'px;animation-duration:'+duration+'s';
	//element.style.cssText = 'color: #fee;text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #ff4444, 0 0 0.5em #ff4444, 0 0 0.1em #ff4444, 0 10px 3px #000;right:'+offset+'vw; font-size:'+size+'px;animation-duration:'+duration+'s';
    
	element.innerHTML = character;
    window.setTimeout(app.remove, duration * 1000, element);
  },

  remove: function (element) {
    element.parentNode.removeChild(element);
  },

};

document.addEventListener('DOMContentLoaded', app.init);