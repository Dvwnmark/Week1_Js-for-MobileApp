

let markWeight = 78;
let markHeight = 1.69;


let johnWeight = 92;
let johnHeight = 1.95;

let johnBMI = johnWeight/(johnHeight ** 2);
let markBMI = markWeight/(markHeight ** 2);


let markWeight1 = 95;
let markHeight1 = 1.88;

let johnWeight1 = 85;
let johnHeight1 = 1.76;
let markBMI1 =markWeight1/(markHeight1 ** 2);
let johnBMI1 = johnWeight1/(johnHeight1 ** 2);
console.log('Data1:');
console.log(markBMI, johnBMI);
console.log(markBMI>johnBMI);
    if(markBMI > johnBMI){
        console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
    }else{
        console.log(`John's BMI (${johnBMI}) is higher than Mark's(${markBMI}) ! `);
    }


console.log("Data2:");
console.log(markBMI1,johnBMI1);
    console.log(markBMI1>johnBMI1);
    if (markBMI1 < johnBMI1) {
        console.log(`Mark 's BMI (${markBMI1}) is higher than John's (${johnBMI1})!`);
    }else{
        console.log(`John's BMI (${johnBMI1})is higher than Mark's (${markBMI1})!`);
    }