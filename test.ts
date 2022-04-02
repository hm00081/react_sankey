//@ts-nocheck

//@ts-ignore
console.log('hello');

const a = {};

const testArray = [a];

if (testArray.find((element) => element === a)) {
    console.log(true);
}
