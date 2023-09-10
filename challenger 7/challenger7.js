const mark = {
    fullName : 'Mark Miller',
    mass : 78,
    height : 1.69,
    calcBMI: function(){
        this.bmi = this .mass / this.height **2;
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass : 92,
    height : 1.95,
    calcBMI : function(){
        this.bmi = this. mass / this .height **2;
        return this.bmi;

    }
}
console.log('BMI OF MARK:');
mark.calcBMI();
console.log(mark.bmi);

console.log('BMI OF JOHN:');
john.calcBMI();
console.log(john.bmi);
    if(mark.bmi > john.bmi){
        console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher ${john.fullName} 's BMI (${john.bmi})`)
    }else if(john.bmi > mark.bmi){
        console.log(`${john.fullName}'s BMI (${john.bmi}) is higher ${mark.fullName} 's BMI (${mark.bmi})`);
    }
    