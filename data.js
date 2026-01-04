const ICON_SETS = {
    'Meal': [
        'assets/meals/goulash.png',
        'assets/meals/rice.png',
        'assets/meals/wrap.png',
        'assets/meals/stew2.png',
        'assets/meals/padthai.png',
        'assets/meals/soup.png',
        'assets/meals/pasta.png',
        'assets/meals/sandwich.png',
        'assets/meals/stew.png',
        'assets/meals/sausage.png',
        'assets/meals/pumpkin.png',
        'assets/meals/lasagna.png',
        'assets/meals/batate.png'
    ],
    'Prep': [
        'assets/meals/goulash.png',
        'assets/meals/rice.png',
        'assets/meals/wrap.png',
        'assets/meals/stew2.png',
        'assets/meals/soup.png',
        'assets/meals/pasta.png',
        'assets/meals/sandwich.png',
        'assets/meals/stew.png',
        'assets/meals/batate.png'
    ],
    'Salad': [
        'assets/salads/salad.png',
        'assets/salads/spinach.png',
        'assets/salads/tomato.png',
        'assets/salads/radish.png'
    ],
    'Baking': [
        'assets/baking/cinnamon.png',
        'assets/baking/pie.png',
        'assets/baking/cake.png',
        'assets/baking/bread.png'
    ],
    'Snack': [
        'assets/snacks/cookie.png',
        'assets/snacks/popcorn.png',
        'assets/snacks/yoghurt.png',
        'assets/snacks/chocolate.png',
        'assets/snacks/apple.png'
    ]
};

// Helper to get an icon URL safely
function getIconUrl(category, index) {
    const set = ICON_SETS[category] || ICON_SETS['Meal'];
    // Use modulo to loop around if index is higher than array length
    return set[index % set.length];
}