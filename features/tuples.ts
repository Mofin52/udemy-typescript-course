const drink = { color: 'brown', carbonated: true, sugar: 40 };

// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['drink', true, 40];
const tea: Drink = ['brown', false, 0];

// If possible, prefer objects instead of tuples. They're more descriptive
const carSpecs: [number, number] = [400, 3354];

const carStats = {
    horsepower: 400,
    weight: 3354
};
