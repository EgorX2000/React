$(document).ready(function () {
	$('.nav a[href^="#"]').click(function () {
		var offset = $('.header').innerHeight();
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top - offset
		}, 800);
		$('.nav a[href^="#"]').removeClass('active');
		$(this).addClass('active');
		return false;
	});
});

$(document).ready(function () {
	$('.header__logo a[href^="#"]').click(function () {
		var offset = $('.header').innerHeight();
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top - offset
		}, 800);
		$('.header__logo a[href^="#"]').removeClass('active');
		$(this).addClass('active');
		return false;
	});
});