document.addEventListener('DOMContentLoaded', function() {
    // Обробник події для форми
    document.getElementById("reservation-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Зупиняємо стандартне відправлення форми

        const name = document.getElementById("name").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const dish = document.getElementById("dish").value;

        console.log(`Reservation submitted: ${name}, ${date}, ${time}, ${dish}`); // Лог для перевірки
        alert(`Thank you, ${name}, for your reservation on ${date} at ${time}. You've chosen ${dish}.`);
    });

    // Логіка для каруселі
    let currentSlide = 0;

    function moveSlide(direction) {
        const slides = document.querySelectorAll('.carousel-images img');
        const totalSlides = slides.length;

        console.log(`Moving slide in direction: ${direction}`); // Лог для перевірки

        // Переміщуємо на наступний або попередній слайд
        currentSlide += direction;

        // Якщо ми досягли кінця або початку, повертаємося на іншу сторону
        if (currentSlide >= totalSlides) {
            currentSlide = 0;
        } else if (currentSlide < 0) {
            currentSlide = totalSlides - 1;
        }

        // Зміщуємо зображення
        document.querySelector('.carousel-images').style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    // Додаємо слухачів подій для кнопок каруселі
    document.querySelector('.prev').addEventListener('click', () => {
        console.log('Previous button clicked'); // Лог для перевірки
        moveSlide(-1);
    });
    document.querySelector('.next').addEventListener('click', () => {
        console.log('Next button clicked'); // Лог для перевірки
        moveSlide(1);
    });

    // Логіка для віконечок Sign In та Register
    const signInBtn = document.getElementById("sign-in-btn");
    const registerBtn = document.getElementById("register-btn");
    const signInBox = document.getElementById("sign-in-box");
    const registerBox = document.getElementById("register-box");

    // Функція для показу віконця
    function showPopup(box) {
        console.log(`Showing popup: ${box.id}`); // Лог для перевірки
        box.style.display = "block";
    }

    // Функція для приховування віконця
    function hidePopup(box) {
        console.log(`Hiding popup: ${box.id}`); // Лог для перевірки
        box.style.display = "none";
    }

    // Події для Sign In
    signInBtn.addEventListener("mouseenter", () => {
        console.log('Mouse entered Sign In button'); // Лог для перевірки
        showPopup(signInBox);
    });
    signInBtn.addEventListener("mouseleave", () => {
        console.log('Mouse left Sign In button'); // Лог для перевірки
        hidePopup(signInBox);
    });
    signInBox.addEventListener("mouseenter", () => {
        console.log('Mouse entered Sign In box'); // Лог для перевірки
        showPopup(signInBox);
    });
    signInBox.addEventListener("mouseleave", () => {
        console.log('Mouse left Sign In box'); // Лог для перевірки
        hidePopup(signInBox);
    });

    // Події для Register
    registerBtn.addEventListener("mouseenter", () => {
        console.log('Mouse entered Register button'); // Лог для перевірки
        showPopup(registerBox);
    });
    registerBtn.addEventListener("mouseleave", () => {
        console.log('Mouse left Register button'); // Лог для перевірки
        hidePopup(registerBox);
    });
    registerBox.addEventListener("mouseenter", () => {
        console.log('Mouse entered Register box'); // Лог для перевірки
        showPopup(registerBox);
    });
    registerBox.addEventListener("mouseleave", () => {
        console.log('Mouse left Register box'); // Лог для перевірки
        hidePopup(registerBox);
    });
});