// objects
var user = {
    name: 'PPS',
    age: 35,
    jobs: ['a', 'b'],
    logName: function () {
        console.log(this.name);
    },
    getJobs: function () {
        return this.jobs;
    }
};
var user2 = {
    name: 'Max',
    age: 30,
    jobs: ['2'],
    getJobs: function () {
        return this.jobs;
    }
};
