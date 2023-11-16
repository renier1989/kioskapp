const products = [
    {
        name: "Caramel Chocolate Coffee",
        price: 59.9,
        image: "cafe_01",
        categoryId: 1
    },
    {
        name: "Cold Chocolate Grande Coffee",
        price: 49.9,
        image: "cafe_02",
        categoryId: 1
    },
    {
        name: "Cold Grande Latte with Chocolate",
        price: 54.9,
        image: "cafe_03",
        categoryId: 1
    },
    {
        name: "Cold Grande Latte with Chocolate",
        price: 54.9,
        image: "cafe_04",
        categoryId: 1
    },
    {
        name: "Cold Chocolate Grande Shake",
        price: 54.9,
        image: "cafe_05",
        categoryId: 1
    },
    {
        name: "Small Hot Mocha Coffee",
        price: 39.9,
        image: "cafe_06",
        categoryId: 1
    },
    {
        name: "Large Hot Mocha Coffee with Chocolate",
        price: 59.9,
        image: "cafe_07",
        categoryId: 1
    },
    {
        name: "Large Hot Cappuccino Coffee",
        price: 59.9,
        image: "cafe_08",
        categoryId: 1
    },
    {
        name: "Hot Mocha Coffee Medium",
        price: 49.9,
        image: "cafe_09",
        categoryId: 1
    },
    {
        name: "Cold Mocha Coffee with Medium Caramel",
        price: 49.9,
        image: "cafe_10",
        categoryId: 1
    },
    {
        name: "Cold Mocha Coffee with Medium Chocolate",
        price: 49.9,
        image: "cafe_11",
        categoryId: 1
    },
    {
        name: "Espresso Coffee",
        price: 29.9,
        image: "cafe_12",
        categoryId: 1
    },
    {
        name: "Large Cappuccino Coffee with Caramel",
        price: 59.9,
        image: "cafe_13",
        categoryId: 1
    },
    {
        name: "Large Caramel Coffee",
        price: 59.9,
        image: "cafe_14",
        categoryId: 1
    },
    {
        name: "Pack of 3 Chocolate Donuts",
        price: 39.9,
        image: "donas_01",
        categoryId: 4
    },
    {
        name: "Pack of 3 Glazed Donuts",
        price: 39.9,
        image: "donas_02",
        categoryId: 4
    },
    {
        name: "Strawberry Donut",
        price: 19.9,
        image: "donas_03",
        categoryId: 4
    },
    {
        name: "Chocolate Cookie Donut",
        price: 19.9,
        image: "donas_04",
        categoryId: 4
    },
    {
        name: "Strawberry Flavor Sprinkles Donut",
        price: 19.9,
        image: "donas_05",
        categoryId: 4
    },
    {
        name: "Chocolate Sprinkles Donut",
        price: 19.9,
        image: "donas_06",
        categoryId: 4
    },
    {
        name: "Chocolate on Chocolate Donut",
        price: 19.9,
        image: "donas_07",
        categoryId: 4
    },
    {
        name: "Pack of 3 Chocolate Donuts",
        price: 39.9,
        image: "donas_08",
        categoryId: 4
    },
    {
        name: "Pack of 3 Vanilla and Chocolate Donuts",
        price: 39.9,
        image: "donas_09",
        categoryId: 4
    },
    {
        name: "Pack of 6 Donuts",
        price: 69.9,
        image: "donas_10",
        categoryId: 4
    },
    {
        name: "Pack of 3 Assorted Donuts",
        price: 39.9,
        image: "donas_11",
        categoryId: 4
    },
    {
        name: "Natural Chocolate Donut",
        price: 19.9,
        image: "donas_12",
        categoryId: 4
    },
    {
        name: "Pack of 3 Chocolate Sprinkle Donuts",
        price: 39.9,
        image: "donas_13",
        categoryId: 4
    },
    {
        name: "Chocolate and Coconut Donut",
        price: 19.9,
        image: "donas_14",
        categoryId: 4
    },
    {
        name: "Pack of Chocolate Cookies",
        price: 29.9,
        image: "galletas_01",
        categoryId: 6
    },
    {
        name: "Pack of Chocolate and Oat Cookies",
        price: 39.9,
        image: "galletas_02",
        categoryId: 6
    },
    {
        name: "Pack of Vanilla Muffins",
        price: 39.9,
        image: "galletas_03",
        categoryId: 6
    },
    {
        name: "Pack of 4 Oat Cookies",
        price: 24.9,
        image: "galletas_04",
        categoryId: 6
    },
    {
        name: "Assorted Butter Cookies",
        price: 39.9,
        image: "galletas_05",
        categoryId: 6
    },
    {
        name: "Fruity Flavored Cookies",
        price: 39.9,
        image: "galletas_06",
        categoryId: 6
    },
    {
        name: "Single Burger",
        price: 59.9,
        image: "hamburguesas_01",
        categoryId: 2
    },
    {
        name: "Chicken Burger",
        price: 59.9,
        image: "hamburguesas_02",
        categoryId: 2
    },
    {
        name: "Chicken and Chili Burger",
        price: 59.9,
        image: "hamburguesas_03",
        categoryId: 2
    },
    {
        name: "Cheese and Cucumber Burger",
        price: 59.9,
        image: "hamburguesas_04",
        categoryId: 2
    },
    {
        name: "Quarter Pound Burger",
        price: 59.9,
        image: "hamburguesas_05",
        categoryId: 2
    },
    {
        name: "Double Cheese Burger",
        price: 69.9,
        image: "hamburguesas_06",
        categoryId: 2
    },
    {
        name: "Special Hot Dog",
        price: 49.9,
        image: "hamburguesas_07",
        categoryId: 2
    },
    {
        name: "Pack of 2 Hot Dogs",
        price: 69.9,
        image: "hamburguesas_08",
        categoryId: 2
    },
    {
        name: "4 Slices of Cheese Pie",
        price: 69.9,
        image: "pastel_01",
        categoryId: 5
    },
    {
        name: "Special Waffle",
        price: 49.9,
        image: "pastel_02",
        categoryId: 5
    },
    {
        name: "House Croissants",
        price: 39.9,
        image: "pastel_03",
        categoryId: 5
    },
    {
        name: "Cheese Pie",
        price: 19.9,
        image: "pastel_04",
        categoryId: 5
    },
    {
        name: "Chocolate Cake",
        price: 29.9,
        image: "pastel_05",
        categoryId: 5
    },
    {
        name: "Slice of Chocolate Cake",
        price: 29.9,
        image: "pastel_06",
        categoryId: 5
    },
    {
        name: "Spicy Double Cheese Pizza",
        price: 69.9,
        image: "pizzas_01",
        categoryId: 3
    },
    {
        name: "Ham and Cheese Pizza",
        price: 69.9,
        image: "pizzas_02",
        categoryId: 3
    },
    {
        name: "Double Cheese Pizza",
        price: 69.9,
        image: "pizzas_03",
        categoryId: 3
    },
    {
        name: "House Special Pizza",
        price: 69.9,
        image: "pizzas_04",
        categoryId: 3
    },
    {
        name: "Chorizo Pizza",
        price: 69.9,
        image: "pizzas_05",
        categoryId: 3
    },
    {
        name: "Hawaiian Pizza",
        price: 69.9,
        image: "pizzas_06",
        categoryId: 3
    },
    {
        name: "Bacon Pizza",
        price: 69.9,
        image: "pizzas_07",
        categoryId: 3
    },
    {
        name: "Vegetable and Cheese Pizza",
        price: 69.9,
        image: "pizzas_08",
        categoryId: 3
    },
    {
        name: "Pepperoni and Cheese Pizza",
        price: 69.9,
        image: "pizzas_09",
        categoryId: 3
    },
    {
        name: "Olives and Cheese Pizza",
        price: 69.9,
        image: "pizzas_10",
        categoryId: 3
    },
    {
        name: "Cheese, Ham, and Mushroom Pizza",
        price: 69.9,
        image: "pizzas_11",
        categoryId: 3
    }
]

export {
    products
}
