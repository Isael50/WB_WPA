const CookMjs = document.getElementById("CookM");
const cookB1Mjs = document.getElementById("cookB1M");

cookB1Mjs.onclick = function() {
	CookMjs.style.visibility = "hidden";
}


// Tablet <= 1920px   /*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*
if (matchMedia) {
	const WBtablet = window.matchMedia("(min-width: 1920px) and (max-width: 2559px)");
	WBtablet.addListener(changeWidthT);
	changeWidthT(WBtablet);
}

// cambio de estado del media query
function changeWidthT(WBtablet) {
	if (WBtablet.matches) {
		//   document.body.style.background = "green"
		$('.Side_WebM').hover(function() {
			$('.img_web').css({'visibility':'visible','left':'-510px','transition':'all 1.5s ease .1s'})
			$('.img_bots').css({'visibility':'visible','right':'-480px','transition':'all 1.5s ease .1s'})
			$('.Side_BotsM').css({'width':'30vw','z-index':'10','transition':'all 1.5s'})
			$('.Side_WebM').css({'width':'70vw','z-index':'10','transition':'all 1.5s'})
			$('.Side_Bots').css({'width':'30vw','z-index':'3','transition':'all 1.5s'})
			$('.Side_Web').css({'width':'70vw','z-index':'3','transition':'all 1.5s'})
			$('.border_bots').css({'width':'15vw','z-index':'4','transition':'all 1.5s'})
			$('.border_web').css({'width':'55vw','z-index':'4','transition':'all 1.5s'})
			$('.titleBH2').css({'visibility':'hidden','transition':'all .1s'})
			$('.titleWH2').css({'visibility':'visible','z-index':'5','transition':'all 1.5s ease .6s'})
			$('.phrase_bots').css({'visibility':'hidden','transition':'all .1s'})
			$('.phrase_web').css({'visibility':'visible','z-index':'5','transition':'all 1.5s ease .8s'})
			$('.access_bots').css({'visibility':'hidden','transition':'all .1s'})
			$('.access_web').css({'visibility':'visible','z-index':'10','transition':'all 1.5s ease 1s'})
			$('.logo_web').css({'z-index':'4','transition':'all 1.5s'})
			$('.logo_bots').css({'z-index':'4','transition':'all 1.5s'})
			$('.titleMain').css({'z-index':'5','transition':'all 1.5s'})
			$('.img_web').css({'left':'0px','transition':'all 1.5s ease .1s'})
		}, function() {
			$('.img_web').css({'visibility':'visible','left':'0px','transition':'all 1.5s ease .1s'})
			$('.img_bots').css({'visibility':'visible','right':'-480px','z-index':'4','transition':'all 1.5s ease .1s'})
			$('.Side_BotsM').css({'width':'50vw','transition':'all 1.5s'})
			$('.Side_WebM').css({'width':'50vw','transition':'all 1.5s'})
			$('.Side_Bots').css({'width':'50vw','transition':'all 1.5s'})
			$('.Side_Web').css({'width':'50vw','transition':'all 1.5s'})
			$('.border_bots').css({'width':'35vw','transition':'all 1.5s'})
			$('.border_web').css({'width':'35vw','transition':'all 1.5s'})
			$('.titleBH2').css({'visibility':'hidden','transition':'all .1s'})
			$('.titleWH2').css({'visibility':'hidden','transition':'all .1s 3.5s'})
			$('.phrase_bots').css({'visibility':'hidden','transition':'all .1s'})
			$('.phrase_web').css({'visibility':'hidden','transition':'all .1s 3.5s'})
			$('.access_bots').css({'visibility':'hidden','transition':'all .1s'})
			$('.access_web').css({'visibility':'hidden','transition':'all .1s 3.5s'})
			$('.img_web').css({'visibility':'visible','left':'-510px','transition':'all 1.5s ease .1s'})
		})
		$('.Side_BotsM').hover(function() {
			$('.img_bots').css({'visibility':'visible','right':'-480px','transition':'all 1.5s ease .1s'})
			$('.img_web').css({'visibility':'visible','left':'-510px','transition':'all 1.5s ease .1s'})
			$('.Side_BotsM').css({'width':'70vw','z-index':'10','transition':'all 1.5s'})
			$('.Side_WebM').css({'width':'30vw','z-index':'10','transition':'all 1.5s'})
			$('.Side_Bots').css({'width':'70vw','z-index':'3','transition':'all 1.5s'})
			$('.Side_Web').css({'width':'30vw','z-index':'3','transition':'all 1.5s'})
			$('.border_bots').css({'width':'55vw','z-index':'4','transition':'all 1.5s'})
			$('.border_web').css({'width':'15vw','z-index':'4','transition':'all 1.5s'})
			$('.titlewH2').css({'visibility':'hidden','transition':'all .1s'})
			$('.titleBH2').css({'visibility':'visible','z-index':'5','transition':'all 1.5s ease .6s'})
			$('.phrase_web').css({'visibility':'hidden','transition':'all .1s'})
			$('.phrase_bots').css({'visibility':'visible','z-index':'5','transition':'all 1.5s ease .8s'})
			$('.access_web').css({'visibility':'hidden','transition':'all .1s'})
			$('.access_bots').css({'visibility':'visible','z-index':'10','transition':'all 1.5s ease 1s'})
			$('.logo_web').css({'z-index':'4','transition':'all 1.5s'})
			$('.logo_bots').css({'z-index':'4','transition':'all 1.5s'})
			$('.titleMain').css({'z-index':'5','transition':'all 1.5s'})
			$('.img_bots').css({'right':'0px','transition':'all 1.5s ease .1s'})
		}, function() {
			$('.img_bots').css({'visibility':'visible','right':'-480px','z-index':'4','transition':'all 1.5s ease .1s'})
			$('.img_web').css({'visibility':'visible','left':'-510px','transition':'all 1.5s ease .1s'})
			$('.Side_Botsm').css({'width':'50vw','transition':'all 1.5s'})
			$('.Side_Webm').css({'width':'50vw','transition':'all 1.5s'})
			$('.Side_Bots').css({'width':'50vw','transition':'all 1.5s'})
			$('.Side_Web').css({'width':'50vw','transition':'all 1.5s'})
			$('.border_bots').css({'width':'35vw','transition':'all 1.5s'})
			$('.border_web').css({'width':'35vw','transition':'all 1.5s'})
			$('.titleBH2').css({'visibility':'hidden','transition':'all .1s'})
			$('.titlewH2').css({'visibility':'hidden','transition':'all .1s 3.5s'})
			$('.phrase_bots').css({'visibility':'hidden','transition':'all .1s'})
			$('.phrase_web').css({'visibility':'hidden','transition':'all .1s 3.5s'})
			$('.access_bots').css({'visibility':'hidden','transition':'all .1s'})
			$('.access_web').css({'visibility':'hidden','transition':'all .1s 3.5s'})
		})
	} //else {
	  // la anchura del documento es menos 500px
	  // document.body.style.background = "green"
	//
}


// Tablet <= 2560px   /*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*/*
if (matchMedia) {
	const WBtablet = window.matchMedia("(min-width: 2560px) and (max-width: 3000px)");
	WBtablet.addListener(changeWidthT);
	changeWidthT(WBtablet);
}

// cambio de estado del media query
function changeWidthT(WBtablet) {
	if (WBtablet.matches) {
		$
		//   document.body.style.background = "green"
		$('.Side_WebM').hover(function() {
			$('.img_web').css({'visibility':'visible','left':'-690px','transition':'all 1.5s ease .1s'})
			$('.img_bots').css({'visibility':'visible','right':'-650px','transition':'all 1.5s ease .1s'})
			$('.Side_BotsM').css({'width':'30vw','z-index':'10','transition':'all 1.5s'})
			$('.Side_WebM').css({'width':'70vw','z-index':'10','transition':'all 1.5s'})
			$('.Side_Bots').css({'width':'30vw','z-index':'3','transition':'all 1.5s'})
			$('.Side_Web').css({'width':'70vw','z-index':'3','transition':'all 1.5s'})
			$('.border_bots').css({'width':'15vw','z-index':'4','transition':'all 1.5s'})
			$('.border_web').css({'width':'55vw','z-index':'4','transition':'all 1.5s'})
			$('.titleBH2').css({'visibility':'hidden','transition':'all .1s'})
			$('.titleWH2').css({'visibility':'visible','z-index':'5','transition':'all 1.5s ease .6s'})
			$('.phrase_bots').css({'visibility':'hidden','transition':'all .1s'})
			$('.phrase_web').css({'visibility':'visible','z-index':'5','transition':'all 1.5s ease .8s'})
			$('.access_bots').css({'visibility':'hidden','transition':'all .1s'})
			$('.access_web').css({'visibility':'visible','z-index':'11','transition':'all 1.5s ease 1s'})
			$('.logo_web').css({'z-index':'4','transition':'all 1.5s'})
			$('.logo_bots').css({'z-index':'4','transition':'all 1.5s'})
			$('.titleMain').css({'z-index':'5','transition':'all 1.5s'})
			$('.img_web').css({'left':'0px','transition':'all 1.5s ease .1s'})
		}, function() {
			$('.img_web').css({'visibility':'visible','left':'0px','transition':'all 1.5s ease .1s'})
			$('.img_bots').css({'visibility':'visible','right':'-650px','z-index':'4','transition':'all 1.5s ease .1s'})
			$('.Side_BotsM').css({'width':'50vw','transition':'all 1.5s'})
			$('.Side_WebM').css({'width':'50vw','transition':'all 1.5s'})
			$('.Side_Bots').css({'width':'50vw','transition':'all 1.5s'})
			$('.Side_Web').css({'width':'50vw','transition':'all 1.5s'})
			$('.border_bots').css({'width':'35vw','transition':'all 1.5s'})
			$('.border_web').css({'width':'35vw','transition':'all 1.5s'})
			$('.titleBH2').css({'visibility':'hidden','transition':'all .1s'})
			$('.titleWH2').css({'visibility':'hidden','transition':'all .1s 2.5s'})
			$('.phrase_bots').css({'visibility':'hidden','transition':'all .1s'})
			$('.phrase_web').css({'visibility':'hidden','transition':'all .1s 2.5s'})
			$('.access_bots').css({'visibility':'hidden','transition':'all .1s'})
			$('.access_web').css({'visibility':'hidden','transition':'all .1s 2.5s'})
			$('.img_web').css({'visibility':'visible','left':'-690px','transition':'all 1.5s ease .1s'})
		})
		$('.Side_BotsM').hover(function() {
			$('.img_bots').css({'visibility':'visible','right':'-650px','transition':'all 1.5s ease .1s'})
			$('.img_web').css({'visibility':'visible','left':'-690px','transition':'all 1.5s ease .1s'})
			$('.Side_BotsM').css({'width':'70vw','z-index':'10','transition':'all 1.5s'})
			$('.Side_WebM').css({'width':'30vw','z-index':'10','transition':'all 1.5s'})
			$('.Side_Bots').css({'width':'70vw','z-index':'3','transition':'all 1.5s'})
			$('.Side_Web').css({'width':'30vw','z-index':'3','transition':'all 1.5s'})
			$('.border_bots').css({'width':'55vw','z-index':'4','transition':'all 1.5s'})
			$('.border_web').css({'width':'15vw','z-index':'4','transition':'all 1.5s'})
			$('.titleWH2').css({'visibility':'hidden','transition':'all .1s'})
			$('.titleBH2').css({'visibility':'visible','z-index':'11','transition':'all 1.5s ease .6s'})
			$('.phrase_web').css({'visibility':'hidden','transition':'all .1s'})
			$('.phrase_bots').css({'visibility':'visible','z-index':'5','transition':'all 1.5s ease .8s'})
			$('.access_web').css({'visibility':'hidden','transition':'all .1s'})
			$('.access_bots').css({'visibility':'visible','z-index':'11','transition':'all 1.5s ease 1s'})
			$('.logo_web').css({'z-index':'4','transition':'all 1.5s'})
			$('.logo_bots').css({'z-index':'4','transition':'all 1.5s'})
			$('.titleMain').css({'z-index':'5','transition':'all 1.5s'})
			$('.img_bots').css({'right':'0px','transition':'all 1.5s ease .1s'})
		}, function() {
			$('.img_bots').css({'visibility':'visible','right':'-650px','z-index':'4','transition':'all 1.5s ease .1s'})
			$('.img_web').css({'visibility':'visible','left':'-690px','transition':'all 1.5s ease .1s'})
			$('.Side_BotsM').css({'width':'50vw','transition':'all 1.5s'})
			$('.Side_WebM').css({'width':'50vw','transition':'all 1.5s'})
			$('.Side_Bots').css({'width':'50vw','transition':'all 1.5s'})
			$('.Side_Web').css({'width':'50vw','transition':'all 1.5s'})
			$('.border_bots').css({'width':'35vw','transition':'all 1.5s'})
			$('.border_web').css({'width':'35vw','transition':'all 1.5s'})
			$('.titleBH2').css({'visibility':'hidden','transition':'all .1s 2.5s'})
			$('.titleWH2').css({'visibility':'hidden','transition':'all .1s'})
			$('.phrase_bots').css({'visibility':'hidden','transition':'all .1s 2.5s'})
			$('.phrase_web').css({'visibility':'hidden','transition':'all .1s'})
			$('.access_bots').css({'visibility':'hidden','transition':'all .1s 2.5s'})
			$('.access_web').css({'visibility':'hidden','transition':'all .1s'})
		})
	} //else {
  // la anchura del documento es menos 500px
  // document.body.style.background = "green"
//
}