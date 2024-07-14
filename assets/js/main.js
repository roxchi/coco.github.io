(function ($) {
    "use strict";
    var windowOn = $(window);
    windowOn.on("load", function () {
        $("#loading")
            .delay(1000)
            .fadeOut(300);
    });
    $('#mobile-menu')
        .meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "991",
            meanExpand: ['<i class="fal fa-plus"></i>'],
        });

    function tp_settings_append($x) {
        var settings = $("body");
        let dark;
        $x == true ? (dark = "d-block") : (dark = "d-none");
        var settings_html = `<div class="tp-theme-settings-area transition-3">
		<div class="tp-theme-wrapper">
		   <div class="tp-theme-header text-center">
			  <h4 class="tp-theme-header-title">Theme Settings</h4>
		   </div>

		   <!-- THEME TOGGLER -->
		   <div class="tp-theme-toggle mb-20 ${dark}" style="display:none">
			  <label class="tp-theme-toggle-main" for="tp-theme-toggler">
				 <span class="tp-theme-toggle-dark"><i class="fa-light fa-moon"></i> Dark</span>
					<input type="checkbox" id="tp-theme-toggler">
					<i class="tp-theme-toggle-slide"></i>
				 <span class="tp-theme-toggle-light active"><i class="fa-light fa-sun-bright"></i> Light</span>
			  </label>
		   </div>

		   <!--  RTL SETTINGS -->
		   <div class="tp-theme-dir mb-20">
			  <label class="tp-theme-dir-main" for="tp-dir-toggler">
				 <span class="tp-theme-dir-rtl"> RTL</span>
					<input type="checkbox" id="tp-dir-toggler">
					<i class="tp-theme-dir-slide"></i>
				 <span class="tp-theme-dir-ltr active"> LTR</span>
			  </label>
		   </div>

		   <!-- COLOR SETTINGS -->
		   <div class="tp-theme-settings">
			  <div class="tp-theme-settings-wrapper">
				 <div class="tp-theme-settings-open">
					<button class="tp-theme-settings-open-btn">
					   <span class="tp-theme-settings-gear">
						  <i class="fal fa-cog"></i>
					   </span>
					   <span class="tp-theme-settings-close">
						  <i class="fal fa-times"></i>
					   </span>
					</button>
				 </div>
				 <div class="row row-cols-4 gy-2 gx-2">
					<div class="col">
					   <div class="tp-theme-color-item tp-color-active">
             <button class="tp-theme-color-btn tp-color-settings-btn d-none" data-color-default="#00BBAE" type="button" data-color="#00BBAE"></button>
						  <button class="tp-theme-color-btn tp-color-settings-btn" type="button" data-color="#00BBAE"></button>
					   </div>
					</div>
					<div class="col">
					   <div class="tp-theme-color-item tp-color-active">
						  <button class="tp-theme-color-btn tp-color-settings-btn" type="button" data-color="#FF9B24"></button>
					   </div>
					</div>
					<div class="col">
					   <div class="tp-theme-color-item tp-color-active">
						  <button class="tp-theme-color-btn tp-color-settings-btn" type="button" data-color="#FF577B"></button>
					   </div>
					</div>
					<div class="col">
					   <div class="tp-theme-color-item tp-color-active">
						  <button class="tp-theme-color-btn tp-color-settings-btn" type="button" data-color="#7C81FF"></button>
					   </div>
					</div>
				 </div>
			  </div>
			  <div class="tp-theme-color-input">
				 <h6>Choose Custom Color</h6>
				 <input type="color" id="tp-color-setings-input" value="#0b3d2c">
				 <label id="tp-theme-color-label" for="tp-color-setings-input"></label>
			  </div>
		   </div>
		</div>
	 </div>`;
        settings.append(settings_html);
    }
    tp_settings_append(false);
    $(".tp-theme-settings-open-btn")
        .on("click", function () {
            $(".tp-theme-settings-area")
                .toggleClass("settings-opened");
        });
    $(".slider-drag")
        .on("mouseenter", function () {
            $(".mouseCursor")
                .addClass("cursor-big");
        });
    $(".slider-drag")
        .on("mouseleave", function () {
            $(".mouseCursor")
                .removeClass("cursor-big");
        });
    $("a,.sub-menu")
        .on("mouseenter", function () {
            $(".mouseCursor")
                .addClass("d-none");
        });
    $("a,.sub-menu")
        .on("mouseleave", function () {
            $(".mouseCursor")
                .removeClass("d-none");
        });

    function itCursor() {
        var myCursor = jQuery(".mouseCursor");
        if (myCursor.length) {
            if ($("body")) {
                const e = document.querySelector(".cursor-inner"),
                    t = document.querySelector(".cursor-outer");
                let n, i = 0,
                    o = !1;
                (window.onmousemove = function (s) {
                    o || (t.style.transform = "translate(" +
                        s.clientX +
                        "px, " +
                        s.clientY +
                        "px)"), (e.style.transform = "translate(" +
                            s.clientX +
                            "px, " +
                            s.clientY +
                            "px)"), (n = s.clientY), (i = s.clientX);
                }), $("body")
                    .on("mouseenter", "button, a, .cursor-pointer", function () {
                        e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
                    }), $("body")
                        .on("mouseleave", "button, a, .cursor-pointer", function () {
                            ($(this)
                                .is("a", "button") && $(this)
                                    .closest(".cursor-pointer")
                                    .length) || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"));
                        }), (e.style.visibility = "visible"), (t.style.visibility = "visible");
            }
        }
    }
    itCursor();

    function tp_rtl_settings() {
        $("#tp-dir-toggler")
            .on("change", function () {
                toggle_rtl();
                window.location.reload();
            });

        function tp_set_scheme(tp_dir) {
            localStorage.setItem("tp_dir", tp_dir);
            document.documentElement.setAttribute("dir", tp_dir);
            if (tp_dir === "rtl") {
                var list = $("[href='assets/css/bootstrap.min.css']");
                $(list)
                    .attr("href", "assets/css/bootstrap.rtl.css");
            } else {
                var list = $("[href='assets/css/bootstrap.min.css']");
                $(list)
                    .attr("href", "assets/css/bootstrap.min.css");
            }
        }

        function toggle_rtl() {
            if (localStorage.getItem("tp_dir") === "rtl") {
                tp_set_scheme("ltr");
                var list = $("[href='assets/css/bootstrap.rtl.css']");
                $(list)
                    .attr("href", "assets/css/bootstrap.min.css");
            } else {
                tp_set_scheme("rtl");
                var list = $("[href='assets/css/bootstrap.min.css']");
                $(list)
                    .attr("href", "assets/css/bootstrap.rtl.css");
            }
        }

        function tp_init_dir() {
            if (localStorage.getItem("tp_dir") === "rtl") {
                tp_set_scheme("rtl");
                var list = $("[href='assets/css/bootstrap.min.css']");
                $(list)
                    .attr("href", "assets/css/bootstrap.rtl.css");
                document.getElementById("tp-dir-toggler")
                    .checked = true;
            } else {
                tp_set_scheme("ltr");
                document.getElementById("tp-dir-toggler")
                    .checked = false;
                var list = $("[href='assets/css/bootstrap.min.css']");
                $(list)
                    .attr("href", "assets/css/bootstrap.min.css");
            }
        }
        tp_init_dir();
    }
    if ($("#tp-dir-toggler")
        .length > 0) {
        tp_rtl_settings();
    }
    var tp_rtl = localStorage.getItem("tp_dir");
    let rtl_setting = tp_rtl == "rtl" ? true : false;

    function tp_theme_toggler() {
        $("#tp-theme-toggler")
            .on("change", function () {
                toggleTheme();
            });

        function tp_set_scheme(tp_theme) {
            localStorage.setItem("kd_theme_scheme", tp_theme);
            document.documentElement.setAttribute("tp-theme", tp_theme);
        }

        function toggleTheme() {
            if (localStorage.getItem("kd_theme_scheme") === "tp-theme-dark") {
                tp_set_scheme("tp-theme-light");
            } else {
                tp_set_scheme("tp-theme-dark");
            }
        }

        function tp_init_theme() {
            if (localStorage.getItem("kd_theme_scheme") === "tp-theme-dark") {
                tp_set_scheme("tp-theme-dark");
                document.getElementById("tp-theme-toggler")
                    .checked = true;
            } else {
                tp_set_scheme("tp-theme-light");
                document.getElementById("tp-theme-toggler")
                    .checked = false;
            }
        }
        tp_init_theme();
    }
    if ($("#tp-theme-toggler")
        .length > 0) {
        tp_theme_toggler();
    }

    function tp_color_settings() {
        function tp_set_color(kd_color_scheme) {
            localStorage.setItem("kd_color_scheme", kd_color_scheme);
            document.querySelector(":root")
                .style.setProperty("--bd-theme-1", kd_color_scheme);
            document.getElementById("tp-color-setings-input")
                .value = kd_color_scheme;
            document.getElementById("tp-theme-color-label")
                .style.backgroundColor = kd_color_scheme;
        }

        function tp_set_input() {
            var color = localStorage.getItem("kd_color_scheme");
            document.getElementById("tp-color-setings-input")
                .value = color;
            document.getElementById("tp-theme-color-label")
                .style.backgroundColor = color;
        }
        tp_set_input();

        function tp_init_color() {
            var defaultColor = $(".tp-color-settings-btn")
                .attr("data-color-default");
            var setColor = localStorage.getItem("kd_color_scheme");
            if (setColor != null) { } else {
                setColor = defaultColor;
            }
            if (defaultColor !== setColor) {
                document.querySelector(":root")
                    .style.setProperty("--bd-theme-1", setColor);
                document.getElementById("tp-color-setings-input")
                    .value = setColor;
                document.getElementById("tp-theme-color-label")
                    .style.backgroundColor = setColor;
                tp_set_color(setColor);
            } else {
                document.querySelector(":root")
                    .style.setProperty("--bd-theme-1", defaultColor);
                document.getElementById("tp-color-setings-input")
                    .value = defaultColor;
                document.getElementById("tp-theme-color-label")
                    .style.backgroundColor = defaultColor;
                tp_set_color(defaultColor);
            }
        }
        tp_init_color();
        let themeButtons = document.querySelectorAll(".tp-color-settings-btn");
        themeButtons.forEach((color) => {
            color.addEventListener("click", () => {
                let datacolor = color.getAttribute("data-color");
                document.querySelector(":root")
                    .style.setProperty("--bd-theme-1", datacolor);
                document.getElementById("tp-theme-color-label")
                    .style.backgroundColor = datacolor;
                tp_set_color(datacolor);
            });
        });
        const colorInput = document.querySelector("#tp-color-setings-input");
        const colorVariable = "--bd-theme-1";
        colorInput.addEventListener("change", function (e) {
            var clr = e.target.value;
            document.documentElement.style.setProperty(colorVariable, clr);
            tp_set_color(clr);
            tp_set_check(clr);
        });

        function tp_set_check(clr) {
            const arr = Array.from(document.querySelectorAll("[data-color]"));
            var a = localStorage.getItem("kd_color_scheme");
            let test = arr.map((color) => {
                let datacolor = color.getAttribute("data-color");
                return datacolor;
            })
                .filter((color) => color == a);
            var arrLength = test.length;
            if (arrLength == 0) {
                $(".tp-color-active")
                    .removeClass("active");
            } else {
                $(".tp-color-active")
                    .addClass("active");
            }
        }

        function tp_check_color() {
            var a = localStorage.getItem("kd_color_scheme");
            var list = $(`[data-color="${a}"]`);
            list.parent()
                .addClass("active")
                .parent()
                .siblings()
                .find(".tp-color-active")
                .removeClass("active");
        }
        tp_check_color();
        $(".tp-color-active")
            .on("click", function () {
                $(this)
                    .addClass("active")
                    .parent()
                    .siblings()
                    .find(".tp-color-active")
                    .removeClass("active");
            });
    }
    if ($(".tp-color-settings-btn")
        .length > 0 && $("#tp-color-setings-input")
            .length > 0 && $("#tp-theme-color-label")
                .length > 0) {
        tp_color_settings();
    }
    $(".offcanvas-open-btn")
        .on("click", function () {
            $(".offcanvas__area")
                .addClass("offcanvas-opened");
            $(".body-overlay")
                .addClass("opened");
        });
    $(".offcanvas__close-btn")
        .on("click", function () {
            $(".offcanvas__area")
                .removeClass("offcanvas-opened");
            $(".body-overlay")
                .removeClass("opened");
        });
    $(".body-overlay")
        .on("click", function () {
            $(".offcanvas__area")
                .removeClass("offcanvas-opened");
            $(".body-overlay")
                .removeClass("opened");
        });
    $(".bd-search-open-btn")
        .on("click", function () {
            $(".bd-search-popup-area")
                .addClass("bd-search-opened");
            $(".bd-search-overlay")
                .addClass("bd-search-opened");
        });
    $(".bd-search-close-btn")
        .on("click", function () {
            $(".bd-search-popup-area")
                .removeClass("bd-search-opened");
            $(".bd-search-overlay")
                .removeClass("bd-search-opened");
        });
    $(".bd-search-overlay")
        .on("click", function () {
            $(".bd-search-popup-area")
                .removeClass("bd-search-opened");
            $(".bd-search-overlay")
                .removeClass("bd-search-opened");
        });
    windowOn.on('scroll', function () {
        var scroll = $(window)
            .scrollTop();
        if (scroll < 100) {
            $("#header-sticky")
                .removeClass("header-sticky");
        } else {
            $("#header-sticky")
                .addClass("header-sticky");
        }
    });
    $('.wp-menu nav > ul > li')
        .slice(-4)
        .addClass('menu-last');
    $("[data-background")
        .each(function () {
            $(this)
                .css("background-image", "url( " + $(this)
                    .attr("data-background") + "  )");
        });
    $("[data-width]")
        .each(function () {
            $(this)
                .css("width", $(this)
                    .attr("data-width"));
        });
    $("[data-bg-color]")
        .each(function () {
            $(this)
                .css("background-color", $(this)
                    .attr("data-bg-color"));
        });
    $('.bd-nice-select')
        .niceSelect();

    function bdOnLoadAnim(triggerClass, addClass, offsetNumber) {
        let target_element = document.getElementsByClassName(triggerClass);
        if (target_element.length) {
            return new Waypoint({
                element: target_element,
                handler: function (direction) {
                    $(this[0, 'element'])
                        .addClass(addClass);
                },
                offset: offsetNumber,
            })
        }
    }
    bdOnLoadAnim('bd-promotion-area', 'active-anim', '30%');
    bdOnLoadAnim('bd-promotion-area-2', 'active-anim', '30%');
    bdOnLoadAnim('bd-joining-area', 'active-anim', '35%');
    bdOnLoadAnim('bd-faq-area', 'active-anim', '35%');

    function smoothSctollTop() {
        $('.smooth a')
            .on('click', function (event) {
                var target = $(this.getAttribute('href'));
                if (target.length) {
                    event.preventDefault();
                    $('html, body')
                        .stop()
                        .animate({
                            scrollTop: target.offset()
                                .top - 120
                        }, 1500);
                }
            });
    }
    smoothSctollTop();

    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function (e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child')
                .find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]')
                .find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: true,
            autoplaySpeed: 4000,
            dots: false,
            rtl: rtl_setting,
            fade: true,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
            responsive: [{
                breakpoint: 767,
                settings: {
                    dots: false,
                    arrows: false
                }
            }]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType)
                    .one(animationEndEvents, function () {
                        $this.removeClass($animationType);
                    });
            });
        }
    }
    mainSlider();
    if (jQuery(".bd-hero-active")
        .length > 0) {
        let sliderActive1 = ".bd-hero-active";
        let sliderInit1 = new Swiper(sliderActive1, {
            slidesPerView: 1,
            slidesPerColumn: 1,
            paginationClickable: true,
            loop: true,
            rtl: rtl_setting,
            observeParents: true,
            observer: true,
            effect: 'fade',
            autoplay: {
                delay: 5000,
            },
            pagination: {
                el: ".main-slider-dot",
                dynamicBullets: false,
                clickable: true,
            },
            navigation: {
                nextEl: ".bd-hero-next",
                prevEl: ".bd-hero-prev",
            },
            a11y: false,
        });

        function animated_swiper(selector, init) {
            let animated = function animated() {
                $(selector + " [data-animation]")
                    .each(function () {
                        let anim = $(this)
                            .data("animation");
                        let delay = $(this)
                            .data("delay");
                        let duration = $(this)
                            .data("duration");
                        $(this)
                            .removeClass("anim" + anim)
                            .addClass(anim + " animated")
                            .css({
                                webkitAnimationDelay: delay,
                                animationDelay: delay,
                                webkitAnimationDuration: duration,
                                animationDuration: duration,
                            })
                            .one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                                $(this)
                                    .removeClass(anim + " animated");
                            });
                    });
            };
            animated();
            init.on("slideChange", function () {
                $(sliderActive1 + " [data-animation]")
                    .removeClass("animated");
            });
            init.on("slideChange", animated);
        }
        animated_swiper(sliderActive1, sliderInit1);
    }
    var ClassSlider = new Swiper('.bd-class-active', {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        rtl: rtl_setting,
        observeParents: true,
        observer: true,
        pagination: {
            el: '.bd-class-pagination',
            clickable: true,
        },
        breakpoints: {
            '1200': {
                slidesPerView: 3,
            },
            '992': {
                slidesPerView: 2,
            },
            '768': {
                slidesPerView: 2,
            },
            '576': {
                slidesPerView: 1,
            },
        },
    });
    var ClassSlider = new Swiper('.bd-class-active-2', {
        slidesPerView: 1,
        spaceBetween: 24,
        rtl: rtl_setting,
        observeParents: true,
        observer: true,
        loop: true,
        pagination: {
            el: '.bd-class-pagination',
            clickable: true,
        },
        breakpoints: {
            '1200': {
                slidesPerView: 2,
            },
            '992': {
                slidesPerView: 2,
            },
            '768': {
                slidesPerView: 2,
            },
            '576': {
                slidesPerView: 1,
            },
        },
    });
    var teacherSlider = new Swiper('.bd-teacher-active', {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        rtl: rtl_setting,
        observeParents: true,
        observer: true,
        pagination: {
            el: '.bd-teacher-pagination',
            clickable: true,
        },
        breakpoints: {
            '1200': {
                slidesPerView: 4,
            },
            '992': {
                slidesPerView: 3,
            },
            '768': {
                slidesPerView: 2,
            },
            '576': {
                slidesPerView: 2,
            },
        },
    });
    var teacherSlider = new Swiper('.bd-program-active', {
        slidesPerView: 1,
        spaceBetween: 24,
        rtl: rtl_setting,
        observeParents: true,
        observer: true,
        loop: true,
        pagination: {
            el: '.bd-program-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: ".bd-program-next",
            prevEl: ".bd-program-prev",
        },
        breakpoints: {
            '1200': {
                slidesPerView: 3,
            },
            '992': {
                slidesPerView: 2,
            },
            '768': {
                slidesPerView: 2,
            },
            '576': {
                slidesPerView: 1,
            },
        },
    });
    var teacherSlider = new Swiper('.bd-program-details-active', {
        slidesPerView: 1,
        spaceBetween: 24,
        rtl: rtl_setting,
        observeParents: true,
        observer: true,
        loop: true,
        navigation: {
            nextEl: ".bd-program-details-next",
            prevEl: ".bd-program-details-prev",
        },
    });
    var testimonialSlider = new Swiper('.bd-testimonial-active', {
        slidesPerView: 1,
        spaceBetween: 30,
        rtl: rtl_setting,
        observeParents: true,
        observer: true,
        loop: true,
        pagination: {
            el: '.bd-testimonial-pagination',
            clickable: true,
        },
        breakpoints: {
            '1200': {
                slidesPerView: 1,
            },
            '992': {
                slidesPerView: 1,
            },
            '768': {
                slidesPerView: 1,
            },
            '576': {
                slidesPerView: 1,
            },
        },
    });
    var testimonialSlider = new Swiper('.bd-testimonial-active-2', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        rtl: rtl_setting,
        observeParents: true,
        observer: true,
        pagination: {
            el: '.bd-testimonial-pagination-2',
            clickable: true,
        },
        breakpoints: {
            '1200': {
                slidesPerView: 2,
            },
            '992': {
                slidesPerView: 2,
            },
            '768': {
                slidesPerView: 1,
            },
            '576': {
                slidesPerView: 1,
            },
        },
    });
    var blogSlider = new Swiper('.bd-blog-active', {
        slidesPerView: 1,
        spaceBetween: 24,
        rtl: rtl_setting,
        observeParents: true,
        observer: true,
        loop: true,
        pagination: {
            el: '.bd-blog-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: ".bd-blog-next",
            prevEl: ".bd-blog-prev",
        },
        breakpoints: {
            '1200': {
                slidesPerView: 3,
            },
            '992': {
                slidesPerView: 2,
            },
            '768': {
                slidesPerView: 2,
            },
            '576': {
                slidesPerView: 1,
            },
        },
    });
    var gallerySlider = new Swiper('.bd-gallery-active', {
        slidesPerView: 1,
        spaceBetween: 24,
        rtl: rtl_setting,
        observeParents: true,
        observer: true,
        loop: true,
        pagination: {
            el: '.bd-gallery-pagination',
            clickable: true,
        },
        breakpoints: {
            '1200': {
                slidesPerView: 4,
            },
            '992': {
                slidesPerView: 3,
            },
            '768': {
                slidesPerView: 2,
            },
            '576': {
                slidesPerView: 1,
            },
        },
    });
    var productSlider1 = new Swiper('.bd-product-thumb-active', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        rtl: rtl_setting,
        observeParents: true,
        observer: true,
        pagination: {
            el: '.bd-product-thumb-pagination',
            clickable: true,
        },
    });
    var productSlider2 = new Swiper('.bd-product-thumb-active-2', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        rtl: rtl_setting,
        observeParents: true,
        observer: true,
        pagination: {
            el: '.bd-product-thumb-pagination-2',
            clickable: true,
        },
    });
    var productSlider3 = new Swiper('.bd-product-thumb-active-3', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        rtl: rtl_setting,
        observeParents: true,
        observer: true,
        pagination: {
            el: '.bd-product-thumb-pagination-3',
            clickable: true,
        },
    });
    var productSlider4 = new Swiper('.bd-product-thumb-active-4', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        rtl: rtl_setting,
        observeParents: true,
        observer: true,
        pagination: {
            el: '.bd-product-thumb-pagination-4',
            clickable: true,
        },
    });
    var productSlider5 = new Swiper('.bd-product-thumb-active-5', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        rtl: rtl_setting,
        observeParents: true,
        observer: true,
        pagination: {
            el: '.bd-product-thumb-pagination-5',
            clickable: true,
        },
    });
    var productSlider6 = new Swiper('.bd-product-thumb-active-6', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        rtl: rtl_setting,
        observeParents: true,
        observer: true,
        pagination: {
            el: '.bd-product-thumb-pagination-6',
            clickable: true,
        },
    });
    var productSlider7 = new Swiper('.bd-product-thumb-active-7', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        rtl: rtl_setting,
        observeParents: true,
        observer: true,
        pagination: {
            el: '.bd-product-thumb-pagination-7',
            clickable: true,
        },
    });
    var productSlider8 = new Swiper('.bd-product-thumb-active-8', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        rtl: rtl_setting,
        observeParents: true,
        observer: true,
        pagination: {
            el: '.bd-product-thumb-pagination-8',
            clickable: true,
        },
    });
    var productSlider9 = new Swiper('.bd-product-thumb-active-9', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        rtl: rtl_setting,
        observeParents: true,
        observer: true,
        pagination: {
            el: '.bd-product-thumb-pagination-9',
            clickable: true,
        },
    });
    $('.grid')
        .imagesLoaded(function () {
            var $grid = $('.grid')
                .isotope({
                    itemSelector: '.grid-item',
                    percentPosition: true,
                    masonry: {
                        columnWidth: '.grid-item',
                    }
                });
            $('.bd-filter-btn')
                .on('click', 'button', function () {
                    var filterValue = $(this)
                        .attr('data-filter');
                    $grid.isotope({
                        filter: filterValue
                    });
                });
            $('.bd-filter-btn button')
                .on('click', function (event) {
                    $(this)
                        .siblings('.active')
                        .removeClass('active');
                    $(this)
                        .addClass('active');
                    event.preventDefault();
                });
        });
    $('.popup-image')
        .magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
            }
        });
    $(".popup-video")
        .magnificPopup({
            type: "iframe",
        });
    new WOW()
        .init();
    $('.cart-minus')
        .on('click', function () {
            var $input = $(this)
                .parent()
                .find('input');
            var count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        });
    $('.cart-plus')
        .on('click', function () {
            var $input = $(this)
                .parent()
                .find('input');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
        });
    $('#showlogin')
        .on('click', function () {
            $('#checkout-login')
                .slideToggle(900);
        });
    $('#showcoupon')
        .on('click', function () {
            $('#checkout_coupon')
                .slideToggle(900);
        });
    $('#cbox')
        .on('click', function () {
            $('#cbox_info')
                .slideToggle(900);
        });
    $('#ship-box')
        .on('click', function () {
            $('#ship-box-info')
                .slideToggle(1000);
        });
    jQuery('.odometer')
        .appear(function (e) {
            var odo = jQuery(".odometer");
            odo.each(function () {
                var countNumber = jQuery(this)
                    .attr("data-count");
                jQuery(this)
                    .html(countNumber);
            });
        });
    var scene = document.getElementById('scene');
    scene && new Parallax(scene);
    var scene2 = document.getElementById('scene2');
    scene2 && new Parallax(scene2);
    $('.hover__active')
        .on('mouseenter', function () {
            $(this)
                .addClass('active')
                .parent()
                .siblings()
                .find('.hover__active')
                .removeClass('active');
        });
})(jQuery);