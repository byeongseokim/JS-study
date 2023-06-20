function promiseForHomework(mustDo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('doing homework');
            if(mustDo) {
                resolve({
                    result: 'homework-result'
                });
            } else {
                reject(new Error('Too lazy!'));
            }
        }, 3000);
    });
};

const PromiseA = promiseForHomework(true);
console.log('promiseA created');

const promiseB = promiseForHomework();
console.log('promiseB created');

PromiseA.then(v => console.log(v));
promiseB
    .then(v => console.log(v))
    .catch(e => console.error(e));