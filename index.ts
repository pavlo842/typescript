// objects

type User = {
    name: string,
    age: number,
    getJobs: () => string[],
    jobs: string[],
    logName?: () => void // ? - указать для того чтобы небыло ошибки в объекте в котором нету данной функции
}

let user: User = {
    name: 'PPS',
    age: 35,
    jobs: ['a', 'b'],
    logName(): void {
        console.log(this.name);
    },
    getJobs(): string[] {
        return this.jobs;
    }
};

let user2: User = {
    name: 'Max',
    age: 30,
    jobs: ['2'],
    getJobs(): string[] {
        return this.jobs;
    }
}
