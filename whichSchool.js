const whichSchool = function (age){
  let school = "";
  if(age < 13){
    school = "Elementary School";
  }
  else if (age >= 13 && age <= 18){
    school = "Secondary School";
  }
  else if (age >= 19 && age < 100){
    school = "Lighthouse Labs";
  }
  return school;
}
console.log(whichSchool(2));

