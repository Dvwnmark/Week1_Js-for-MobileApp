//Data 1 

let MarkHeights= 1.69;
let MarkWeights =78;
let MarkBMI = MarkWeights/(MarkHeights**2);

let JohnHeights = 1.95;
let JohnWeights = 92;

let JohnBMI = JohnWeights/(JohnHeights  **2);

markHeigherBMI = MarkBMI > JohnBMI;
console.log("data 1 :");
console.log("BMI OF MARK:", MarkBMI);
console.log("BMI OF JOHN:", JohnBMI);
console.log("MarkBMI higher than JohnBMI:");
console.log(markHeigherBMI);

//Data 2

console.log("data 2 :");
let MarkHeights1 = 1.88;
let MarkWeights1 =95;
let JohnHeights1 = 1.76;
let JohnWeights1= 85;
let MarkBMI1 = MarkWeights1/(MarkHeights1**2);
let JohnBMI1 = JohnWeights1/(JohnHeights1**2);

markHeigherBMI1 = MarkBMI1 > JohnBMI1;
console.log("bmi of mark: ",MarkBMI1);
console.log("bmi of john: ",JohnBMI1);
console.log("MarkBMI higher than JohnBMI:");
console.log(markHeigherBMI1);