//Get the user inputted Loan Amout, Term, and Interest Rates. 
function getInput() {
    //user inputted loan amount get
    let loan = document.getElementById("loan").value;
    //user inputted term get
    let term = document.getElementById("term").value;
    //user inputted interest rate amount get
    let rate = document.getElementById("rate").value;
    //Lets make sure they're integers.
    loan = parseFloat(loan);
    term = parseFloat(term);
    rate = parseFloat(rate);
    console.log(loan);
    console.log(term);
    console.log(rate);
    //math
    let TMP = loan *  (rate / 1200) / (1 - (1 + rate/1200)**(-term));
    console.log(TMP);
    calculateMortgage();
    displayNumbers();

    //Okay we have the numbers now I need to do several things;
    //✓ I need to print the TMP to the id "payment"
    //✓ I need to calculate and print the principal ammount to the principal-tot id. this is literally just the loan amount so use that.
    //I need to calculate the total interest and print that. 
    //Specifically I need to 1. Use the interest payment formula on the remaining balance and calculate it month by month.
    //2. I need to add up all of the interest payments.
    //3. Then I need to display it at the interest-tot id
    //Logic Function
    function calculateMortgage() {       
        //BEGIN GATHERING THE REMAINING BALANCE TOTALS
        //define variables I need for the for loop:
        let balance = loan;
        
        let balanceArray = [];     
        let interestArray = [];
        //Okay lets count from month 1 to the last month:
        for (let index = 1; index < term; index++) {

            //and while we're counting from month 1 to the end we need to calculate the interest and balance. 
            let interest = balance * (rate/1200);
            balance = balance - interest;
            let interestTotal = balance - (balance + interest);
            //push the balance to an array.
            balanceArray.push(balance);
            //after storing the balance we need  
            interestArray.push(interestTotal);
                                 
        }



        //USE THIS CODE LATER RIGHT NOW ITS USING THE WRONG ARRAY.
        //CHANGE THIS TO THE ARRAY THAT HOLDS SOMETHING THAT NEEDS TO BE ADDED
        //const sum = balanceArray.reduce(add, 0);
        //function add(accumulator, a) {
        //    return accumulator + a;
        //}
        
        
        console.log(balanceArray);
        //console.log(sum);
        
        
        
    }
    
}

//fill the table, total principal, total interest, monthly payments and total cost areas with the data. 
function displayNumbers() {
    //Display the principal:
    let principal = document.getElementById("loan").value;
    document.getElementById("principal-tot").innerHTML = principal;

}
