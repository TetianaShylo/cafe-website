// Обробник події для форми
document.getElementById("reservation-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Зупиняємо стандартне відправлення форми

    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const dish = document.getElementById("dish").value;

    alert(`Thank you, ${name}, for your reservation on ${date} at ${time}. You've chosen ${dish}.`);
});

// Логіка для каруселі
let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;

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

// Додаємо слухачів подій для кнопок
document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));