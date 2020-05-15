type User = {
    name: string,
    age: number,
}

const user: User = {
    name: 'PPS',
    age: 35
}

function logUser(user: User): void {
    console.log(user.name + ' ' + user.age);
}

logUser(user);
