let obj = {};
for (let i = 0; i < 4; i++) {
    obj['key' + i] = i;
}
console.log(obj);

let profile = 'chloe:30';
let person = {
    [profile] : true,
    [profile.split(':')[0]]: profile.split(':')[1]
};
console.log(person);