const a = [
    { source: 5, target: 13, value: 1 },
    { source: 13, target: 49, value: 1 },
    { source: 49, target: 68, value: 1 },
    { source: 68, target: 98, value: 1 },
];

const b = [].concat.apply([], [a]);
const c = [];
// for (let i = 0; i < a.length; i++) {
//     if (a[i].target === a[i + 1].source) {
//         c.push(a[i].target);
//     } else console.log('There is no link');
// }

console.log('hello');
