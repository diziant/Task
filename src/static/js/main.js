$(document).ready(function(){

    $('.owl-carousel').owlCarousel();


    $(".list").click(function (){
			$(".gallery").addClass("gallery-list");
            $(".gallery").removeClass("gallery-table");

            $(".list").addClass("list_active");
            $(".table").removeClass("table_active");
		});

    $(".table").click(function (){
            $(".gallery").addClass("gallery-table");
			$(".gallery").removeClass("gallery-list");

            $(".table").addClass("table_active");
            $(".list").removeClass("list_active");
		});

    $(".button_active").click(function (){
            $(".notification").addClass("notification_active");
		});
    $(".collections").click(function (){
            $(".notification").removeClass("notification_active");
		});

    body = $("body");
	$(".nav__button").click(function (){

		body.addClass("fullscreen-menu");
		body.addClass("modal-open");

	});

	$(".menu-close").click(function (){

		body.removeClass("fullscreen-menu");
		body.removeClass("modal-open");

	});

		$(".mobile-menu__link").click(function (){

			body.removeClass("fullscreen-menu");
			body.removeClass("modal-open");

		});
});
