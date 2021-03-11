// Annotate if initialize array as empty one
const carMakers: string[] = [];

// In other cases inference will do the job
const phoneMakers = ['apple', 'samsung', 'xiaomi'];
const dates = [new Date(), new Date()];
const carsByMake = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting values
const phone = phoneMakers[0];
const myPhone = carMakers.pop();

// Prevent incompatible values
phoneMakers.push(100);

// Help with map
phoneMakers.map((car: string): string => {
    return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push('2030-10-10');
importantDates.push(new Date());
