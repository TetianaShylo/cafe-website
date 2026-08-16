const { createApp, ref, computed } = Vue;

createApp({
    setup() {
        const selectedCategory = ref('all');
        const isCartOpen = ref(false);
        const cart = ref([]);
        const reservationSuccess = ref(false);

        const reservation = ref({
            name: '',
            phone: '',
            dish: '',
            guests: 2
        });

        const menuData = ref([
            {
                title: "Coffee & Drinks",
                product: [
                    { id: 1, name: "Flat White", price: 95, icon: "☕", category: "Coffee & Drinks", description: "Double shot of espresso with velvety steamed microfoam." },
                    { id: 2, name: "Almond Milk Cappuccino", price: 110, icon: "🥛", category: "Coffee & Drinks", description: "Smooth espresso paired with creamy plant-based almond milk." },
                    { id: 3, name: "Matcha Latte", price: 125, icon: "🍵", category: "Coffee & Drinks", description: "Ceremonial grade Japanese green tea whisked with silky milk." }
                ]
            },
            {
                title: "Bakery & Desserts",
                product: [
                    { id: 4, name: "Almond Croissant", price: 120, icon: "🥐", category: "Bakery & Desserts", description: "Flaky Parisian pastry filled with sweet frangipane cream." },
                    { id: 5, name: "Basque Cheesecake", price: 145, icon: "🍰", category: "Bakery & Desserts", description: "Caramelized crust with a rich, melt-in-your-mouth creamy center." }
                ]
            },
            {
                title: "Breakfast & Brunch",
                product: [
                    { id: 6, name: "Avocado Sourdough Toast", price: 210, icon: "🥑", category: "Breakfast & Brunch", description: "Artisan sourdough, poached egg, cream cheese, and ripe avocado." },
                    { id: 7, name: "Cottage Cheese Pancakes (Syrnyky)", price: 180, icon: "🥞", category: "Breakfast & Brunch", description: "Traditional Ukrainian syrnyky served with fresh berries and sour cream." }
                ]
            }
        ]);

        const categories = computed(() => menuData.value.map(item => item.title));

        const allProducts = computed(() => {
            return menuData.value.flatMap(group => group.product);
        });

        const filteredMenu = computed(() => {
            if (selectedCategory.value === 'all') {
                return allProducts.value;
            }
            return allProducts.value.filter(item => item.category === selectedCategory.value);
        });

        const toggleCart = () => {
            isCartOpen.value = !isCartOpen.value;
        };

        const addToCart = (product) => {
            cart.value.push(product);
        };

        const removeFromCart = (index) => {
            cart.value.splice(index, 1);
        };

        const cartTotal = computed(() => {
            return cart.value.reduce((sum, item) => sum + item.price, 0);
        });

        const checkout = () => {
            alert(`Thank you! Your order total is ${cartTotal.value} ₴.`);
            cart.value = [];
            isCartOpen.value = false;
        };

        const submitReservation = () => {
            reservationSuccess.value = true;
            setTimeout(() => {
                reservationSuccess.value = false;
                reservation.value = { name: '', phone: '', dish: '', guests: 2 };
            }, 4000);
        };

        return {
            menuData,
            categories,
            selectedCategory,
            filteredMenu,
            cart,
            isCartOpen,
            toggleCart,
            addToCart,
            removeFromCart,
            cartTotal,
            checkout,
            reservation,
            submitReservation,
            reservationSuccess
        };
    }
}).mount('#app');