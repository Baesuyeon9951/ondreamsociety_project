console.clear();

// 탑바 스크롤 구현
function topBar__init() {
	$(window).scroll(function(){
		let $this = $(this);
		let scrollTop = $this.scrollTop();

		if(scrollTop > 200){
			$('#top-bar').addClass('scroll');
		}
		else{
			$('#top-bar').removeClass('scroll');
		}
	})
}
topBar__init();

// 탑바 로고 구현

function logo(){
	$('.pc-menu').mouseenter(function(){
		$('.logo').addClass('active');
	})
	$('.pc-menu').mouseleave(function(){
		$('.logo').removeClass('active');
	})
}

logo();


function menu(){
	$('.pc-menu .menu-list,.pc-menu .depth2').mouseenter(function(){
		$('.top-bar__bg,.pc-menu .menu-list>li,.pc-menu .depth2').addClass('active');
	})
	$('.menu-list,.depth2').mouseleave(function(){
		$('.top-bar__bg,.pc-menu .menu-list>li,.pc-menu .depth2').removeClass('active');
	})
}
menu();

// 메인섹션 스크롤트리거

function ScrollTrigger__init(){

	$(window).width(function(){ 

		if(window.innerWidth > 1000){

			gsap.to("#content", {
				scrollTrigger: {
					trigger: ".main-visual",
					start: "top+=65% center", 
					end: "bottom+=40% center",
					toggleClass: 
					{ targets: ".main-visual__content-2 > *", className: "js-opacity" },
					// markers: true 
				}
			});

		}
		else if (window.innerWidth > 760 && window.innerWidth < 1000) { 

			gsap.to("#content", {
				scrollTrigger: {
					trigger: ".main-visual",
					start: "top+=60% center", 
					end: "bottom+=35% center",
					toggleClass: 
					{ targets: ".main-visual__content-2 > *", className: "js-opacity" },
					// markers: true
				}
			});

		} 
		else{

			gsap.to("#content", {
				scrollTrigger: {
					trigger: ".main-visual",
					start: "top+=50% center", 
					end: "bottom+=40% center",
					toggleClass: 
					{ targets: ".main-visual__content-2 > *", className: "js-opacity" },
					// markers: true 
				}
			});
		}
	})
}

ScrollTrigger__init();

// 모바일 메뉴 구현

function mobileBtn__init(){
	$('.btn-menu').click(function(){

		if($('.btn-menu').hasClass('active')){
			
			$('.mo-menu .depth2-list').slideUp();
			$('.mo-menu .active').removeClass('active');
			
			$('.btn-menu').removeClass('active');
			$('.mo-menu').removeClass('active');
			$('.logo').removeClass('active');
		}
		else{
			$('.btn-menu').addClass('active');
			$('.mo-menu').addClass('active');
			$('.logo').addClass('active');
		}
	})
}
mobileBtn__init();

function mobileMenu__init(){

	$('.mo-menu .depth2-list').slideUp();

	$('.mo-menu .menu-list > li').click(function(){

		let $this = $(this);

		$this.siblings('.active').find('> .depth2-list').stop().slideUp(500);

		if($this.hasClass('active')){

			$this.removeClass('active');
			$this.find('> .depth2-list').stop().slideUp(500);
		}
		else{

			$this.addClass('active');
			$this.find('> .depth2-list').stop().slideDown(500);
		}
	})
}
mobileMenu__init();