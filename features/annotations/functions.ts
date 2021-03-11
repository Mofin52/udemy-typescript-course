const add = (a: number, b: number): number => {
    return a + b;
};

const subtract = (a: number, b: number) => {
    const result = a + b;
};

function divide(a: number, b: number): number {
    return a / b;
}

const multiply = function (a: number, b: number): number {
    return a * b;
};

const forecast = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = ({ date, weather }: { date: Date; weather: string }): void => {
    console.log(date, weather);
};

logWeather(forecast);

// Specific return types
const logger = (message: string): void => {
    console.log(message);
};

const throwError = (message: string): never => {
    throw new Error(message);
};

const possiblyThrowError = (message: string): string => {
    if (!message) {
        throw new Error(message);
    }
    return message;
};
