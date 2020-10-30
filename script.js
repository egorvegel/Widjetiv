$(function () {
	// Кнопка  меню
	let menu = $('header .menu');
	$('.link_click').on('click', function (evt) {
		$(menu).slideToggle(300);
	});

	$('.menu .link').on('click', function (evt) {
		evt.preventDefault();
		if (isMobile() == true) {
			$(menu).slideUp(300);
		}
	});
	$(window).resize(function () {
		if ($(this).width() > 1100) {
			menu.css('display', 'block');
		}
	});

	// Определяем мобильное устройтсво
	function isMobile() {
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			return true;
		}
		return false;
	}

	// Кнопка вверх
	let btnUp = $('.row');
	let Checkbth = function () {
		if ($(this).scrollTop() > 830) {
			btnUp.removeClass('unOpacity');
		} else {
			btnUp.addClass('unOpacity');
		}
	};
	Checkbth();
	$(window).scroll(function () {
		Checkbth();
	});

	btnUp.on("click", function (evt) {
		evt.preventDefault();
		$('html').animate({
			scrollTop: 0,
		}, 1500)
	})

	// Меняем описание команды
	let workers = $('.team .worker');
	let descWorkers = $('.team .review .text');
	let nameWorkers = $('.team .review .suptext');
	let textWorkers = [
		'Уважение к окружающим, проявляемое даже в ситуациях, не предполагающих учтивости. К слову, такое качество сильно раздражает плохих индивидов. Ведь они хотят вывести на конфликт, а вежливый собеседник выстраивает барьер, отсекающий возможность ссоры.',
		'Хорошая сторона человека, обозначающая отсутствие стремлений получать выгоду от своих поступков. Искренней личности не так важна «нажива». Она помогает другим и не требует ничего взамен.',
		'Это забота в отношении благ независимо от того, кому они принадлежат. Здесь речь идет не только об имуществе или других материальных предметах, но и душевном состоянии, человеческой энергии.',
		'Такой индивид умеет соблюдать требования и придерживаться определенного распорядка. Он знает, как грамотно распорядиться собственным временем, чтобы успевать сделать все дела.']
	$(workers).on('click', function () {
		let checkWorker = $(this).attr('data-name');
		$(nameWorkers).text(checkWorker);
		if (checkWorker == 'О Михаиле') {
			$(descWorkers).text(textWorkers[0]);
		} else if (checkWorker == 'О Рамиле') {
			$(descWorkers).text(textWorkers[1]);
		} else if (checkWorker == 'Об Адели') {
			$(descWorkers).text(textWorkers[2]);
		} else if (checkWorker == 'О Романе') {
			$(descWorkers).text(textWorkers[3]);
		}
		$('.team .review').css('display', 'none').fadeIn(1000);
	})

	// Нажатие на ссылку в меню
	let links = $('.menu .link:not(.link_click), .begin .link, .pricing .link');
	let linkAttr, linkOffSet;
	links.on('click', function (evt) {
		evt.preventDefault();
		linkAttr = $(this).attr('href');
		linkOffSet = $(linkAttr).offset().top;

		$('html').animate({
			scrollTop: linkOffSet,
		}, 1500);
	})

	//Слайдер
	$('.slick').slick({
		arrows: false,
		dots: true,
		autoplay: 3,
	});

	// Валидация рассылки
	$('.subscribe form').submit(function (evt) {
		if ($(this.email).val() === '') {
			evt.preventDefault();
		}
	})

	// Валидация формы
	let inputsAll = $('.contacts input[type=text], .contacts input[type=email], .contacts textarea');
	inputsAll.on('change', function () {
		for (let i = 0; i < inputsAll.length; i++) {
			if ($(inputsAll[i]).val() == '') {
				$(this).addClass('true').removeClass('false');
			} else {
				$(this).addClass('false').removeClass('true');
			}
		}
	})

	$('.contacts form').submit(function (evt) {
		for (let i = 0; i < inputsAll.length; i++) {
			if ($(inputsAll[i]).val() === '') {
				evt.preventDefault();
				$(inputsAll[i]).addClass('false').removeClass('true');
			} else {
				$(inputsAll[i]).addClass('true').removeClass('false');
			}
		}
	})



	const animItems = $('.anim_item');
	if (animItems.length > 0) {
		$(window).on('scroll', animOnScroll);
		function animOnScroll() {
			for (let index = 0; index < animItems.length; index++) {
				const animItem = animItems[index];
				const animItemHeight = $(animItem).height();
				const animItemOffset = $(animItem).offset().top;
				const animStart = 4;

				let animItemPoint = window.innerHeight - animItemHeight / animStart;
				if (animItemHeight > window.innerHeight) {
					animItemPoint = window.innerHeight - window.innerHeight / animStart;
				}
				if ((pageYOffset > animItemOffset - animItemPoint) && (pageYOffset < animItemOffset + animItemHeight)) {
					$(animItem).addClass('active');
				} else {
					$(animItem).addClass('remove');
				}
			}
		}
	}
	animOnScroll();
});