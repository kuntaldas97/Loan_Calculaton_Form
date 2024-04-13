function validation(){

//validation for name
   const nameInput=document.getElementById("name");
   const nameError = document.getElementById("nameError");
   const name = nameInput.value.trim();
   var nameRegex=/^[a-zA-Z ]{3,30}$/;
   
    if(!nameRegex.test(name)){
    nameError.innerHTML="*Enter a valid name.";
    nameInput.style.border="1px solid red";
    nameError.style.color="red";
   }
   else{
    nameError.innerHTML="";
    nameInput.style.border="none";
   }

// validation for email
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const email = emailInput.value.trim();
    var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
        emailError.innerHTML = '*Enter valid email.';
        emailInput.style.border="1px solid red";
        emailError.style.color="red";
        } else {
        emailError.innerHTML = ""; 
        emailInput.style.border="none";

    }   

//validation for phone number
    const mobileInput = document.getElementById('mobile');
    const mobileError = document.getElementById('msg');
    const mobile = mobileInput.value.split(" ").join('');
    let mobileRegex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
    if (!mobileRegex.test(mobile)) {
        mobileError.innerHTML = '*Enter valid mobile number.';
        mobileInput.style.border="1px solid red";
        mobileError.style.color="red"; 
    } else {
        mobileError.innerHTML = ''; 
        mobileInput.style.border="none"; 
    }
//validation for date of birth
    const dateInput=document.getElementById("dateOfBirth");
    const dateError=document.getElementById("dateError");
    let date=Number(dateInput.value.slice(0,4));
    // console.log(date);
    let sysDate= new Date();
    // console.log(sysDate.getFullYear())
    if(date>sysDate.getFullYear()){
        // console.log("error")
        dateError.innerHTML="*Enter Date exceeds current Date";
        dateInput.style.border="1px solid red";
        dateError.style.color="red"; 
    }
    else {
        dateError.innerHTML = ''; 
        dateInput.style.border="none"; 
    }

//validation for age
    const ageInput=document.getElementById("age");
    const ageError=document.getElementById("ageError");
    let age=Number(ageInput.value);
    // // console.log(typeof(age));
    // console.log(sysDate.getFullYear()-date)

    if(age!=sysDate.getFullYear()-date){
        ageError.innerHTML="*Age is not matching with DOB.";
        ageInput.style.border="1px solid red"
        ageError.style.color="red";
    }
    else if(age<18 || age>55){
        ageError.innerHTML="*Not eligible to get the loan.";
        ageInput.style.border="1px solid red"
        ageError.style.color="red";
    }
    else {
        ageError.innerHTML = ''; 
        ageInput.style.border="none"; 
    }

// valodation for adhaar
    const adhaarInput=document.getElementById("adhaar");
    const adhaarError=document.getElementById("adhaarError");
    var adhaar=adhaarInput.value;
    let adhaarRegex= /^\d{12}$/;

    if(!adhaarRegex.test(adhaar)){
        adhaarError.innerHTML = '*Enter valid adhaar number.';
        adhaarInput.style.border="1px solid red";
        adhaarError.style.color="red"; 
    } else {
        adhaarError.innerHTML = ''; 
        adhaarInput.style.border="none"; 
    }
// validation for adderess
    const addressInput=document.getElementById("address");
    const addressError=document.getElementById("addressError");
    var address=addressInput.value;
    let addressRegex=/[A-Za-z0-9'\.\-\s\,]/;

    if(!addressRegex.test(address)){
        addressError.innerHTML="*Enter address in proper format.";
        addressInput.style.border="1px solid red";
        addressError.style.color="red";
    }
    else{
        addressError.innerHTML="";
        addressInput.style.border="none";
    }
// validation for company name
    const companyNameInput=document.getElementById("companyName");
    const companyNameError=document.getElementById("companyNameError");
    const companyName=companyNameInput.value.trim();
    var companyNameRegex=/^[a-zA-Z ]{5,30}$/;

    if(!companyNameRegex.test(companyName)){
        companyNameError.innerHTML="*Enter a valid name.";
        companyNameInput.style.border="1px solid red";
        companyNameError.style.color="red";
       }
       else{
        companyNameError.innerHTML="";
        companyNameInput.style.border="none";
       }
// validation for total year of experience
    const totalWorkExperienceInput=document.getElementById("totalWorkExperience");
    const totalWorkExperienceError=document.getElementById("totalWorkExperienceError");
    const totalWorkExperience=totalWorkExperienceInput.value;

    if(totalWorkExperience<2 || totalWorkExperience>age-18){
        totalWorkExperienceError.innerHTML="*Not eligible to get the loan";
        totalWorkExperienceInput.style.border="1px solid red";
        totalWorkExperienceError.style.color="red";
    }
    else{
        totalWorkExperienceError.innerHTML="";
        totalWorkExperienceInput.style.border="none";
    }
// validation for anual salary
    const annualSalaryInput=document.getElementById("annualSalary");
    const annualSalaryError=document.getElementById("annualSalaryError");
    const annualSalary=annualSalaryInput.value;
    

    if(annualSalary<50000){
        annualSalaryError.innerHTML="*Not eligible to get the Loan";
        annualSalaryError.style.color="red";
        annualSalaryInput.style.border="1px solid red";
    }
    else{
        annualSalaryError.innerHTML="";
        annualSalaryInput.style.border="none";
    }
// validation for loan amount
   const loanAmountInput=document.getElementById("loanAmount");
   const loanAmountError=document.getElementById("loanAmountError");
   const loanAmount=loanAmountInput.value;

   if(loanAmount<50000){
    loanAmountError.innerHTML="*Minumum loan amount should be 50000";
    loanAmountError.style.color="red";
    loanAmountInput.style.border="1px solid red";
   }
   else if(loanAmount>annualSalary*8){
    loanAmountError.innerHTML="*Required loan is too high according to annual salary";
    loanAmountError.style.color="red";
    loanAmountInput.style.border="1px solid red";
   }
   else{
    loanAmountError.innerHTML="";
    loanAmountInput.style.border="none";
   }
//validation for area of the property
   const propertySqftInput=document.getElementById("propertySqft");
   const propertySqft=propertySqftInput.value;
   const propertySqftError=document.getElementById("propertySqftError");

   if(propertySqft<500){
    propertySqftError.innerHTML="*Area is too less to eligible for the loan";
    propertySqftError.style.color="red";
    propertySqftInput.style.border="1px solid red";
   }
   else{
    propertySqftError.innerHTML="";
    propertySqftInput.style.border="none";
   }
//validation for the name of the builder
const builderNameInput=document.getElementById("builderName")
const builderName=builderNameInput.value.trim();
const builderNameError=document.getElementById("builderNameError");

if(!nameRegex.test(builderName)){
    builderNameError.innerHTML="*Enter a valid name";
    builderNameError.style.color="red";
    builderNameInput.style.border="1px solid red";
}
else{
    builderNameError.innerHTML="";
    builderNameInput.style.border="none";
}

//validation for the value of the property
const propertyValueInput=document.getElementById("propertyValue");
const propertyValue=propertyValueInput.value;
const propertyValueError=document.getElementById("propertyValueError");

if(propertyValue<100000){
    propertyValueError.innerHTML="*Value should be more than 100000";
    propertyValueError.style.color="red";
    propertyValueInput.style.border="1px solid red";
    }
else{
    propertyValueError.innerHTML="";
    propertyValueInput.style.border="none";
}

}

function showLoanInfoFields() {
    const loanType = document.getElementById('loanType').value;

    document.getElementById('personalLoanFields').style.display = 'none';
    document.getElementById('homeLoanFields').style.display = 'none';

    if (loanType === 'personalLoan') {
        document.getElementById('personalLoanFields').style.display = 'block';
    } else if (loanType === 'homeLoan') {
        document.getElementById('homeLoanFields').style.display = 'block';
    }
}
function calculateEMI() {
    const loanType = document.getElementById('loanType').value;
    const loanAmount = parseFloat(document.getElementById(loanType === 'personalLoan' ? 'loanAmount' : 'loanAmountHome').value);
    const duration = parseInt(document.getElementById(loanType === 'personalLoan' ? 'loanDuration' : 'loanDurationHome').value);

    const interestRate = 0.01;

    const monthlyInterestRate = interestRate / 12;
    const numberOfPayments = duration;
    
    const denominator = Math.pow((1 + monthlyInterestRate), numberOfPayments) - 1;
    const emi = (loanAmount * monthlyInterestRate) / denominator;

    document.getElementById('result').innerHTML = `Your EMI: ${emi.toFixed(2)} per month`;
}
