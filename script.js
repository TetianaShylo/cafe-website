const { createApp } = Vue;

createApp({
  data() {
    return {
      signinbox: false,
      registerbox: false,
      reserveForm: false,
      signInLogin: "",
      signInPass: "",
      registerUsername: "",
      registerEmail: "",
      registerPass: "",
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
        }
      ],
    };
  },
  methods: {
    signinboxOpen() {
      this.signinbox = !this.signinbox;
      this.registerbox = false;
    },
    registerboxOpen() {
      this.registerbox = !this.registerbox;
      this.signinbox = false;
    },
    reserveOpen() {
      this.reserveForm = true;
    },
    reserveClose() {
      this.reserveForm = false;
    },
    submitSignIn() {
      alert("Sign In form submitted!" + this.signInLogin + " " + this.signInPass);
      this.signinbox = false;
    },
    submitRegister() {
      alert("Register form submitted!" + this.registerUsername + " " + this.registerEmail + " " + this.registerPass);
      this.registerbox = false;
    }
  },
  computed: {},
  mounted() {},
  updated() {},
  created() {}
}).mount('#app');