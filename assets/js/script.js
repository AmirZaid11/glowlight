window.addEventListener('scroll', () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    document.querySelector('.scroll-progress')
        .style.width = progress + '%';

});

const glow =
    document.querySelector('.cursor-glow');

document.addEventListener('mousemove', e => {

    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';

});

window.addEventListener('load', () => {

    const loader =
        document.querySelector('.loader-wrapper');

    setTimeout(() => {

        loader.classList.add('loader-hidden');

    }, 1800);

});

const counters =
    document.querySelectorAll('.counter');

const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const updateCounter = () => {

                const target =
                    +counter.getAttribute('data-target');

                const count =
                    +counter.innerText.replace('+', '');

                const increment =
                    target / 100;

                if (count < target) {

                    counter.innerText =
                        Math.ceil(count + increment);

                    setTimeout(updateCounter, 20);

                } else {

                    counter.innerText = target + '+';

                }

            };

            updateCounter();
            observer.unobserve(counter);

        }

    });

}, { threshold: 0.5 });

counters.forEach(counter => {

    observer.observe(counter);

});

const magneticButtons =
    document.querySelectorAll('.ultra-btn-primary');

magneticButtons.forEach(btn => {

    btn.classList.add('magnetic');

    btn.addEventListener('mousemove', e => {

        const rect =
            btn.getBoundingClientRect();

        const x =
            e.clientX - rect.left - rect.width / 2;

        const y =
            e.clientY - rect.top - rect.height / 2;

        btn.style.transform =
            `translate(${x * 0.2}px, ${y * 0.2}px)`;

    });

    btn.addEventListener('mouseleave', () => {

        btn.style.transform =
            'translate(0,0)';

    });

});

window.addEventListener('scroll', () => {

    const scrolled =
        window.pageYOffset;

    const hero =
        document.querySelector('.ultra-hero');

    if (hero) {
        hero.style.backgroundPositionY =
            scrolled * 0.5 + 'px';
    }

});

const cursor =
    document.querySelector('.custom-cursor');

const dot =
    document.querySelector('.cursor-dot');

document.addEventListener('mousemove', e => {

    cursor.style.left =
        e.clientX + 'px';

    cursor.style.top =
        e.clientY + 'px';

    dot.style.left =
        e.clientX + 'px';

    dot.style.top =
        e.clientY + 'px';

});

const spotlight =
    document.querySelector('.spotlight');

document.addEventListener('mousemove', e => {

    spotlight.style.left =
        e.clientX + 'px';

    spotlight.style.top =
        e.clientY + 'px';

});

const reveals =
    document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {

    reveals.forEach(reveal => {

        const windowHeight =
            window.innerHeight;

        const revealTop =
            reveal.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            reveal.classList.add('active');

        }

    });

});

// FILTER BUTTONS

const filterButtons =
    document.querySelectorAll('.filter-btn');

const products =
    document.querySelectorAll('.product-item');

filterButtons.forEach(button => {

    button.addEventListener('click', () => {

        // REMOVE ACTIVE

        filterButtons.forEach(btn =>
            btn.classList.remove('active-filter')
        );

        button.classList.add('active-filter');

        const filter =
            button.getAttribute('data-filter');

        products.forEach(product => {

            if (filter === 'all') {

                product.style.display = 'block';

            } else {

                if (product.dataset.category === filter) {

                    product.style.display = 'block';

                } else {

                    product.style.display = 'none';

                }

            }

        });

    });

});

// LIVE SEARCH

const searchInput =
    document.getElementById('productSearch');

if (searchInput) {
    searchInput.addEventListener('keyup', () => {

        const searchValue =
            searchInput.value.toLowerCase();

        products.forEach(product => {

            const productText =
                product.innerText.toLowerCase();

            if (productText.includes(searchValue)) {

                product.style.display = 'block';

            } else {

                product.style.display = 'none';

            }

        });

    });
}

// PRODUCT MODAL

const modal =
    document.getElementById('productModal');

const modalImg =
    document.getElementById('modalImg');

const modalTitle =
    document.getElementById('modalTitle');

const modalDesc =
    document.getElementById('modalDesc');

const modalPrice =
    document.getElementById('modalPrice');

const whatsappBtn =
    document.getElementById('whatsappBtn');

const closeModal =
    document.getElementById('closeModal');

const viewButtons =
    document.querySelectorAll('.view-btn');

// OPEN MODAL

viewButtons.forEach(button => {

    button.addEventListener('click', () => {

        const product =
            button.closest('.elite-product');

        const title =
            product.dataset.title;

        const description =
            product.dataset.description;

        const price =
            product.dataset.price;

        const image =
            product.dataset.image;

        // SET CONTENT

        modalImg.src = image;

        modalTitle.innerText = title;

        modalDesc.innerText = description;

        modalPrice.innerText = price;

        // WHATSAPP

        whatsappBtn.href =
            `https://wa.me/254715264486?text=Hello,%20I%20am%20interested%20in%20${title}`;

        // SHOW

        modal.classList.add('show');

    });

});

// CLOSE

if (closeModal) {
    closeModal.addEventListener('click', () => {

        modal.classList.remove('show');

    });
}

// CLOSE OUTSIDE

if (modal) {
    window.addEventListener('click', e => {

        if (e.target === modal) {

            modal.classList.remove('show');

        }

    });
}

// PORTFOLIO FILTER

const portfolioBtns =
    document.querySelectorAll('.portfolio-btn');

const portfolioItems =
    document.querySelectorAll('.portfolio-item');

portfolioBtns.forEach(button => {

    button.addEventListener('click', () => {

        portfolioBtns.forEach(btn =>
            btn.classList.remove('active-portfolio')
        );

        button.classList.add('active-portfolio');

        const filter =
            button.dataset.filter;

        portfolioItems.forEach(item => {

            if (filter === 'all') {

                item.style.display = 'block';

            } else {

                if (item.dataset.category === filter) {

                    item.style.display = 'block';

                } else {

                    item.style.display = 'none';

                }

            }

        });

    });

});

// MODAL

const portfolioModal =
    document.getElementById('portfolioModal');

const portfolioModalImg =
    document.getElementById('portfolioModalImg');

const portfolioModalTitle =
    document.getElementById('portfolioModalTitle');

const portfolioModalDesc =
    document.getElementById('portfolioModalDesc');

const portfolioClose =
    document.getElementById('portfolioClose');

const portfolioViewBtns =
    document.querySelectorAll('.portfolio-view-btn');

portfolioViewBtns.forEach(button => {

    button.addEventListener('click', () => {

        portfolioModal.classList.add('show');

        portfolioModalImg.src =
            button.dataset.image;

        portfolioModalTitle.innerText =
            button.dataset.title;

        portfolioModalDesc.innerText =
            button.dataset.description;

    });

});

// CLOSE

if (portfolioClose) {
    portfolioClose.addEventListener('click', () => {

        portfolioModal.classList.remove('show');

    });
}

// OUTSIDE CLOSE

if (portfolioModal) {
    window.addEventListener('click', e => {

        if (e.target === portfolioModal) {

            portfolioModal.classList.remove('show');

        }

    });
}

// FAQ

const faqQuestions =
    document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {

    question.addEventListener('click', () => {

        const answer =
            question.nextElementSibling;

        if (answer.style.display === 'block') {

            answer.style.display = 'none';

        } else {

            answer.style.display = 'block';

        }

    });

});

// CONTACT FORM

const contactForm =
    document.getElementById('contactForm');

const successMessage =
    document.getElementById('successMessage');

if (contactForm) {
    contactForm.addEventListener('submit', e => {

        e.preventDefault();

        emailjs.send("service_gkt3eeb",
            "template_05ntc2q",
            {
                from_name:
                    document.getElementById('name').value,

                from_email:
                    document.getElementById('email').value,

                subject:
                    document.getElementById('subject').value,

                message:
                    document.getElementById('message').value

            }, {
            publicKey: "jupTJcQwazKHTt0nW"
        })

            .then(() => {

                // RESET FORM

                contactForm.reset();

                // SHOW OVERLAY

                const successOverlay =
                    document.getElementById('successOverlay');

                if (successOverlay) {
                    successOverlay.classList.add('show');
                }

                // REDIRECT

                setTimeout(() => {

                    window.location.href = "/";

                }, 3200);

            });

    });
}
// EMAILJS INIT

emailjs.init({
    publicKey: "jupTJcQwazKHTt0nW"
});

// SCROLL TOP

const scrollTopBtn =
    document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {

    if (scrollTopBtn) {
        if (window.scrollY > 300) {

            scrollTopBtn.classList.add('show');

        } else {

            scrollTopBtn.classList.remove('show');

        }
    }

});

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {

        window.scrollTo({

            top: 0,
            behavior: 'smooth'

        });

    });
}

// ACTIVE NAV

const navLinks =
    document.querySelectorAll('.nav-link');

navLinks.forEach(link => {

    if (link.href === window.location.href) {

        link.classList.add('active-nav');

    }

});

// PAGE LOADER

window.addEventListener('load', () => {

    const loader =
        document.getElementById('pageLoader');

    loader.classList.add('hide');

});