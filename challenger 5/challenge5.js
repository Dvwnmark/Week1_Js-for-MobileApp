const calcAverage = (a,b,c) =>(a+b+c)/3;
console.log(calcAverage( 3,4,5));

console.log('DATA 1:');
//DATA1
let scoreDolphins = calcAverage(44,23,71);
let scoreKoalas =calcAverage(65,54,79);
console.log('Average of scoreDolphins and scoreKoalas:');
console.log(scoreDolphins,scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas){
    if(avgDolphins>=2 *avgKoalas){
        console.log(`Dolphins wins the trophy(${avgDolphins} vs.${avgKoalas})`);
    }else if (avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas wins the trophy(${avgKoalas} vs.${avgDolphins})`);
    }else{
        console.log("No team wins in the game !");
    }

}
checkWinner(scoreDolphins, scoreKoalas);
checkWinner(999,9);

//DATA2
console.log('DATA 2:');
scoreDolphins1 = calcAverage(85,41,54);
scoreKoalas1 = calcAverage(23,34,27);
console.log(scoreDolphins1,scoreKoalas1);
checkWinner(scoreDolphins1, scoreKoalas1);

