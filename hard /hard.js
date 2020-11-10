//john and mark variables
  const massTom = 8;
 const heightTom = 9;
  const massJerry = 10;
  const heightJerry = 45;

  //Caculation
  const BMITom = massTom / heightTom **2;
  const BMIJerry = massJerry / (heightJerry * heightJerry);
  const TomHigherBMI = BMITom > BMIJerry;
 console.log(BMITom , BMIJerry);

 if (BMITom > BMIJerry){
     console.log(`Toms's BMI (${BMITom}) is higher than Jerry's (${BMIJerry})!`)
 } else {
     console.log(`Toms's BMI (${BMITom}) is not higher than Jerrys (${BMIJerry})!`)
 } 
