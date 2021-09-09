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
    //Logic Function
    function calculateMortgage() {       
        let totalCost = [];
        let totalInterest = [];
        //count through the months taken from term.
        for (let index = 1; index < term; index++) {
            //calculate balance.
            let balance = loan - TMP;
            //calulate the interest            
            let interest = balance * (rate/1200);
            //push both into an array.
            totalInterest.push(interest);


            
        }
        return totalInterest;
        console.log(totalInterest);
        
    }
    //fill the table, total principal, total interest, monthly payments and total cost areas with the data. 
    function displayNumbers() {
        document.getElementById("principal-tot").innerHTML = loan;

    }
}


