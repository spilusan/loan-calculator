var sum = 0; 
let balanceArray = [];     
let interestArray = [];
let ppArray = [];
let cumulative = [];
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
    //✓ I need to calculate the total interest and print that. 
    // I need to print the total cost
    // I need to print the amotization table. 


    //Rounding function taken from Mozilla Developer Documentary. This resolves the errors I was getting. 
    function round(x) {
        return Number.parseFloat(x).toFixed(2);
      }
    //Logic Function
    function calculateMortgage() {       
        //BEGIN GATHERING THE REMAINING BALANCE TOTALS
        //define variables I need for the for loop:
        let balance = loan;        
        let interestCumulative = 0;
        //Okay lets count from month 1 to the last month:
        for (let index = 0; index < term; index++) {

            //and while we're counting from month 1 to the end we need to calculate the interest and balance. 
            let interest = balance * (rate/1200);
            let pp = TMP - interest;
            balance = balance - pp;
            let interestTotal = (balance + interest) - balance;
            
            
            
            //push the balance to an array.            
            balanceArray.push(balance);
            //Total interest                      
            interestArray.push(interestTotal);
            
            //round then push principal payments
            ppArray.push(pp);
            


                                 
        }
        for (let index = 0; index < term; index++) {
            interestCumulative += interestArray[index];
            //push to interestCumulative
            cumulative.push(interestCumulative);
            
        }
        //This code adds together things to give us the sum.        
        sum = interestArray.reduce(add, 0);
        function add(accumulator, a) {
            return accumulator + a;
        }
        displayNumbers();              
        //These are to make sure things are adding up properly please ignore, remember to comment them out when done!
        console.log(balanceArray);
        console.log(interestArray);
        console.log(sum);
        console.log(ppArray);
        console.log(cumulative);

        cumulative = cumulative.map(function(each_element){
            return Number(each_element.toFixed(2));
        });
        interestArray = interestArray.map(function(each_element){
            return Number(each_element.toFixed(2));
        });
        balanceArray = balanceArray.map(function(each_element){
            return Number(each_element.toFixed(2));
        });
        ppArray = ppArray.map(function(each_element){
            return Number(each_element.toFixed(2));
        });
        
        
    }
    
    //fill the table, total principal, total interest, monthly payments and total cost areas with the data. 
    function displayNumbers() {
        //Display the principal:
        let principal = document.getElementById("loan").value;
        document.getElementById("principal-tot").innerHTML = principal;
        //display the total interest:
        sum = round(sum);
        document.getElementById("interest-tot").innerHTML = sum;
        //display total cost
        document.getElementById("cost-tot").innerHTML = +principal + +sum;
        //Display amortization table. 
        TMP = round(TMP);
        let table = "";
        let b = 1;
        for (let i = 0; i < term; i++) {
            table += `<tr>`;
            table += `<td>${b++}</td><td>${TMP}</td><td>${ppArray[i]}</td><td>${interestArray[i]}</td><td>${cumulative[i]}</td><td>${balanceArray[i]}</td>`;
            table += `</tr>`
            
        }
        document.getElementById("results").innerHTML = table;

    }
}


