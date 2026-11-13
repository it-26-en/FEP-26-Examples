console.log("init greeting");

// Internal business logic
function createGreeting(phrase, name) {
    return `${phrase} ${name}!`;
}

// Public exports that can be imported elsewhere
export function hello(name) {
    return createGreeting('Hello', 'Fredrik');
}

export function hi(name) {
    return createGreeting('Hi', 'Fredrik');
}