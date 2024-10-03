let balance = document.getElementById('balanceAmt')
let income = document.getElementById('incomeAmt')
let expense = document.getElementById('expenceAmt')



let Amount = document.getElementById('Amount')
let Remark = document.getElementById('Remark')
let Table = document.getElementById('History')

let remarkArray =[]
// JSON.parse(localStorage.getItem("remark history"))
let TimeTdArray=[]
// JSON.parse(localStorage.getItem("time history"))
let AmountArray =[]
// JSON.parse(localStorage.getItem("amount history"))

function Income(){
    if(!Amount.value == "" && !Remark.value == ""){
        income.innerHTML = Number(income.innerHTML) + Number(Amount.value)
        balance.innerHTML = Number(income.innerHTML) - Number(expense.innerHTML)
        
        localStorage.setItem("Income",income.innerHTML)
        localStorage.setItem("Balance",balance.innerHTML)
        
        let date = new Date
        
        let dd = date.getDate()
        let mm = date.getMonth() + 1
        let yyyy = date.getFullYear()
        
        let hh = date.getHours()
        let min = date.getMinutes()
        let sec = date.getSeconds()
        
        let PP = (hh>0 && hh<12)? " am":" pm"

        let mytime = hh+":"+min+":"+sec+PP+", "+ dd+"-"+mm+"-"+yyyy
        console.log(PP)

        let RemarkTd = document.createElement('td')
        let TimeTd = document.createElement('td')
        let AmtTd = document.createElement('td')

        RemarkTd.innerHTML = Remark.value
        TimeTd.innerHTML = mytime
        AmtTd.innerHTML = "+"+Amount.value
        AmtTd.style.borderRight="5px solid green"
        AmtTd.style.textAlign="right"
        let tr = document.createElement('tr')
        tr.appendChild(RemarkTd)
        tr.appendChild(TimeTd)
        tr.appendChild(AmtTd)
        tr.style.background="lightgreen"
        Table.appendChild(tr)
    
        remarkArray.push(RemarkTd.innerHTML)
        TimeTdArray.push(mytime)
        AmountArray.push("+"+Amount.value)
        localStorage.setItem("remark history",JSON.stringify(remarkArray))
        localStorage.setItem("time history",JSON.stringify(TimeTdArray))
        localStorage.setItem("amount history",JSON.stringify(AmountArray))


    }
    
}



function Expense(){

    if(!Amount.value == "" && !Remark.value == ""){
    expense.innerHTML = Number(expense.innerHTML) + Number(Amount.value)
    balance.innerHTML = Number(income.innerHTML) - Number(expense.innerHTML)
   
    localStorage.setItem("Expense",expense.innerHTML)
    localStorage.setItem("Balance",balance.innerHTML)

    let date = new Date
        
    let dd = date.getDate()
    let mm = date.getMonth() + 1
    let yyyy = date.getFullYear()
    
    let hh = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    
    let PP = (hh>0 && hh<12)? " am":" pm"

    let mytime = hh+":"+min+":"+sec+PP+", "+ dd+"-"+mm+"-"+yyyy
    console.log(PP)

    let RemarkTd = document.createElement('td')
    let TimeTd = document.createElement('td')
    let AmtTd = document.createElement('td')

    RemarkTd.innerHTML = Remark.value
    TimeTd.innerHTML = mytime
    AmtTd.innerHTML = "-"+Amount.value
    AmtTd.style.borderRight="5px solid red"
    AmtTd.style.textAlign="right"
    let tr = document.createElement('tr')
    tr.appendChild(RemarkTd)
    tr.appendChild(TimeTd)
    tr.appendChild(AmtTd)
    tr.style.backgroundColor="#ffa4a4"
    Table.appendChild(tr)

    remarkArray.push(RemarkTd.innerHTML)
    TimeTdArray.push(mytime)
    AmountArray.push("-"+Amount.value)
    localStorage.setItem("remark history",JSON.stringify(remarkArray))
    localStorage.setItem("time history",JSON.stringify(TimeTdArray))
    localStorage.setItem("amount history",JSON.stringify(AmountArray))

    }
}



function Refresh(){
    let storeBalance = localStorage.getItem("Balance") 
    balance.innerHTML = storeBalance

    let storeIncome = localStorage.getItem("Income") 
    income.innerHTML = storeIncome

    let storeExpense = localStorage.getItem("Expense") 
    expense.innerHTML = storeExpense

    let remarkhistory =  JSON.parse(localStorage.getItem("remark history"))
    let  timehistory =    JSON.parse(localStorage.getItem("time history"))
    let  amounthistory = JSON.parse(localStorage.getItem("amount history"))
    for(let i=0 ; i<remarkhistory.length ; i++){
        let tr = document.createElement('tr')
        let RemarkTd = document.createElement('td')
        let TimeTd = document.createElement('td')
        let AmtTd = document.createElement('td')
    
        RemarkTd.innerHTML = remarkhistory[i]
        TimeTd.innerHTML = timehistory[i]
        AmtTd.innerHTML = amounthistory[i]

        if(amounthistory[i]>0){
            tr.style.backgroundColor = "lightgreen"
            AmtTd.style.borderRight="5px solid green"
            AmtTd.style.textAlign="right"
        }
        else{
            tr.style.backgroundColor = "#ffa4a4"
            AmtTd.style.borderRight="5px solid red"
            AmtTd.style.textAlign="right"
        }
        tr.appendChild(RemarkTd)
        tr.appendChild(TimeTd)
        tr.appendChild(AmtTd)
        
        Table.appendChild(tr)
    }


}