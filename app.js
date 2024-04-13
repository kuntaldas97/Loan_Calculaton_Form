function validation(){
    
    // let name = document.getElementById("name").value;

    // if(name.length==0 || name.length<3 || name.length>20){
    //     document.getElementById("name").innerHTML="*firstName should be in between 3-20 words";
    //     document.getElementById("name").style.border="1px solid red";
    //     return false;
    // }
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    const name = nameInput.value.trim();
    if (name.length < 3 || name.length > 20) {
        nameError.innerHTML = 'Name should have 3 to 20 letters only';
        nameInput.classList.add('error-input'); // Add a class for styling
    } else {
        nameError.innerHTML = ''; // Clear the error message
        nameInput.classList.remove('error-input'); // Remove the error styling
    }

    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const email = emailInput.value.trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.innerHTML = 'enter valid email';
        emailInput.classList.add('error-input'); // Add a class for styling
    } else {
        emailError.innerHTML = ''; // Clear the error message
        emailInput.classList.remove('error-input'); // Remove the error styling
    }

    // const mobileInput = document.getElementById('mobile');
    // const mobileError = document.getElementById('mobileError');
    // const mobile = mobileInput.value.trim();
    // let mobileRegex = /^\d{10}$/;
    // if (!mobileRegex.test(mobile)) {
    //     mobileError.innerHTML = 'enter valid mobile number with 10 digits';
    //     mobileInput.classList.add('error-input'); // Add a class for styling
    // } else {
    //     mobileError.innerHTML = ''; // Clear the error message
    //     mobileInput.classList.remove('error-input'); // Remove the error styling
    // }

    let res=document.getElementById("mobile").value;
    // let resError=document.getElementById("msg");
    // resError.innerHTML="";
    // document.getElementById("fn").style.border = "1px solid #ccc";
    if(res.length==0){
        document.getElementById("msg").innerHTML="*phone no is empty";
        document.getElementById("mobile").style.border="1px solid red";
        document.getElementById("msg").style.color="red";
        return false;
    }
    if(res.length!=10){
        document.getElementById("msg").innerHTML="*phone no field should not be less then 10 digits";
        document.getElementById("mobile").style.border="1px solid red";
        document.getElementById("msg").style.color="red";
        return false;
    }
    // if(res.length>10){
    //     document.getElementById("msg").innerHTML="*phone no field should not be greter then 10 digits";
    //     document.getElementById("mobile").style.border="1px solid red";
    //     document.getElementById("msg").style.color="red";
    //     return false;
    // }  
    if(res.charAt(0)<=5){
        document.getElementById("msg").innerHTML="*phone no  should be start from 6";
        document.getElementById("mobile").style.border="1px solid red";
        document.getElementById("msg").style.color="red";
        return false;
    }
//    return true;
    else{
        document.getElementById("msg").innerHTML = ""; // Clear the error message
       res.classList.remove('error-input'); // Remove the error styling
       location.reload(true)
       return true;
    }


    // const adharInput = document.getElementById('adhar');
    // const adharError = document.getElementById('adharError');
    // const adhar = mobileInput.value.trim();
    // let adharRegex = /^\d{12}$/;
    // if (adharRegex.test(adhar)) {
    //     adharError.innerHTML = 'enter valid adhar number with 12 digits';
    //     adharInput.classList.add('error-input'); // Add a class for styling
    // } else {
    //     adharError.innerHTML = ''; // Clear the error message
    //     adharInput.classList.remove('error-input'); // Remove the error styling
    // }
    
//     var dobInput = document.getElementById('dob');
//     var ageInput = document.getElementById('age');
//     var errorContainer = document.getElementById('error-message');

//     var dob = new Date(dobInput.value);
//     var age = parseInt(ageInput.value, 10);

//     if (isNaN(dob.getTime())) {
//       showError("Invalid Date of Birth");
//       return;
//     }

//     if (isNaN(age) || age <= 0) {
//       showError("Invalid Age");
//       return;
//     }

//     // Calculate age from date of birth
//     var today = new Date();
//     var birthYear = dob.getFullYear();
//     var currentYear = today.getFullYear();
//     var calculatedAge = currentYear - birthYear;

//     if (calculatedAge !== age) {
//       showError("Age does not match Date of Birth");
//       return;
//     }

//     // If everything is valid, clear any previous error message
//     errorContainer.textContent = "";

}
function showError(message) {
    var errorContainer = document.getElementById('error-message');
    errorContainer.textContent = message;
  }

function showLoanInfoFields() {
    const loanType = document.getElementById('loanType').value;

    // Hide all loan info fields
    document.getElementById('personalLoanFields').style.display = 'none';
    document.getElementById('homeLoanFields').style.display = 'none';

    // Show fields based on selected loan type
    if (loanType === 'personalLoan') {
        document.getElementById('personalLoanFields').style.display = 'block';
    } else if (loanType === 'homeLoan') {
        document.getElementById('homeLoanFields').style.display = 'block';
    }
}
function calculateEMI() {
    const loanType = document.getElementById('loanType').value;
    validation();
    // Fetch form values
    const loanAmount = parseFloat(document.getElementById(loanType === 'personalLoan' ? 'loanAmount' : 'loanAmountHome').value);
    const duration = parseInt(document.getElementById(loanType === 'personalLoan' ? 'loanDuration' : 'loanDurationHome').value);

    // Add any additional validations or checks as needed

    // Your EMI calculation logic
    const interestRate = 0.01; // Assuming a fixed interest rate of 1%

    const monthlyInterestRate = interestRate / 12;
    const numberOfPayments = duration;
    
    const denominator = Math.pow((1 + monthlyInterestRate), numberOfPayments) - 1;
    const emi = (loanAmount * monthlyInterestRate) / denominator;

    // Display the result
    document.getElementById('result').innerHTML = `Your EMI: ${emi.toFixed(2)} per month`;
    console.log(emi);
    
}