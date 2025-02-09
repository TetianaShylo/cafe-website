
var app = new Vue({
    el: '#app',
    data: {
        reserveForm: false,
        optionArray: [
            {
                title: "Coffee",
                product: [
                    { value: "latte", text: "Latte" },
                    { value: "espresso", text: "Espresso" },
                    { value: "americano", text: "Americano" },
                    { value: "cappuccino", text: "Cappuccino" },
                    { value: "gingerbreadlatte", text: "Gingerbread Latte" },
                    { value: "saltedcaramellatte", text: "Salted Caramel Latte" },
                    { value: "coconatmatchalatte", text: "Coconat Matcha Latte" },
                    { value: "macadamiahazelnutlatte", text: "Macadamia Hazelnut Latte" }
                ]
            },
            {
                title: "Drinks",
                product: [
                    { value: "lemonade", text: "Lemonade" },
                    { value: "milkshake", text: "Milkshake" },
                    { value: "pina-colada", text: "Pina Colada" },
                    { value: "blue-hawaiian", text: "Blue Hawaiian" },
                    { value: "matcha-bubble-tea", text: "Matcha Bubble Tea" },
                    { value: "coconut-lime-soda", text: "Coconut Lime Soda" },
                    { value: "white-chocolate-mocha", text: "White Chocolate Mocha" },
                    { value: "kiwi-lime-italian-soda", text: "Kiwi Lime Italian Soda" }
                ]
            },
            {
                title: "Other",
                product: [
                    { value: "sandwich", text: "Sandwich" },
                    { value: "salad", text: "Salad" },
                    { value: "french-fries", text: "French Fries" },
                    { value: "desserts", text: "Desserts" },
                    { value: "sandwich", text: "Sandwich" },
                    { value: "salad", text: "Salad" },
                    { value: "french-fries", text: "French Fries" },
                    { value: "desserts", text: "Desserts" }
                ]
            }
        ],
        menuArray: [
            {
                title: "Coffee",
                image: "images/C.jpg",
                product: [
                    "Latte",
                    "Espresso",
                    "Americano",
                    "Cappuccino",
                    "Gingerbread Latte",
                    "Salted Caramel Latte",
                    "Coconat Matcha Latte",
                    "Macadamia Hazelnut Latte"
                ]
            },
            {
                title: "Drinks",
                image: "images/DR.jpg",
                product: [
                    "Lemonade",
                    "Milkshake",
                    "Pina Colada",
                    "Blue Hawaiian",
                    "Match Bubble Tea",
                    "Coconut Lime Soda",
                    "White Chocolate Mocha",
                    "Kiwi Lime Italian Soda"
                ]
            },
            {
                title: "Desserts",
                image: "images/D.jpg",
                product: [
                    "Croissant",
                    "Cupcace",
                    "Tiramisu",
                    "Macaroons",
                    "Croissant",
                    "Cupcace",
                    "Tiramisu",
                    "Macaroons"
                ]
            },
        ]
    },

    methods: {

        reserveOpen() {
            this.$set(this, "reserveForm", true);
        },

        reserveClose() {
            this.$set(this, "reserveForm", false);
        },

    },

    computed: {

    },

    mounted() {

    },

    updated: function () {

    },

    created: function () {

    }

});


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