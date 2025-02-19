const navbar = document.getElementById('navbar');
const banner = document.getElementById('banner');
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// Navbar scroll behavior
window.addEventListener('scroll', () => {
    if (window.scrollY < banner.clientHeight) {
        navbar.classList.add('bg-black/30', 'backdrop-blur-md');
        navbar.classList.remove('bg-black', 'text-white');
    } else {
        navbar.classList.add('bg-black', 'text-white');
        navbar.classList.remove('bg-black/30', 'backdrop-blur-md');
    }
});

// Mobile Menu Toggle
menuBtn.addEventListener('click', () => {
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('flex');

        setTimeout(() => {
            mobileMenu.classList.add('translate-y-0', 'opacity-100');
            mobileMenu.classList.remove('-translate-y-full', 'opacity-0');
        }, 10);
    } else {
        mobileMenu.classList.add('-translate-y-full', 'opacity-0');
        mobileMenu.classList.remove('translate-y-0', 'opacity-100');

        setTimeout(() => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
        }, 300);
    }
});

document.addEventListener("DOMContentLoaded", () => {
	const sliders = document.querySelectorAll(".emotions-slider");

	if (!sliders.length) return;

	const list = [];

	sliders.forEach((element) => {
		const [slider, prevEl, nextEl, pagination] = [
			element.querySelector(".swiper"),
			element.querySelector(".slider-nav__item_prev"),
			element.querySelector(".slider-nav__item_next"),
			element.querySelector(".slider-pagination")
		];

		list.push(
			new Swiper(slider, {
				slidesPerView: "auto",
				spaceBetween: 20,
				speed: 600,
				observer: true,
				watchOverflow: true,
				watchSlidesProgress: true,
				centeredSlides: true,
				initialSlide: 1,
				loop: true, 
				loopedSlides: 8, // Creates duplicate slides for a smooth loop (set according to your number of slides)
				autoplay: {
					delay: 3000, // Adjust the auto-slide speed
					disableOnInteraction: true, // Keeps autoplay running after user interaction
				},
				navigation: { nextEl, prevEl, disabledClass: "disabled" },
				pagination: {
					el: pagination,
					type: "bullets",
					modifierClass: "slider-pagination",
					bulletClass: "slider-pagination__item",
					bulletActiveClass: "active",
					clickable: true
				},
				breakpoints: {
					768: { spaceBetween: 40 }
				}
			})
		);
	});
});

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".scrollanimation");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.3 });

    cards.forEach((scrollanimation) => observer.observe(scrollanimation));
});