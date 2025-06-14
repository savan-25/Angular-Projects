express = require('express');

eobj = express();

port = 5100;

eobj.listen(port,function()
{
    console.log("Server is In Listening Mode:");
})

eobj.get('/',function(req,res)
{
    res.send("Marvellous Connection is Successful");
})

function AmountDeposit(value)
{
    Balance = 1000;
    Balance += Number(value);

    return Balance;
}
function AmountWithdraw(value)
{
    Balance = 1000;
    Balance -= Number(value);

    return Balance;
}
eobj.get('/Deposit',function(req,res)
{   
    value = req.query.Amount;
     ret = AmountDeposit(value);
    res.send("Your Balance After Deposit is :"+ret);
})

eobj.get('/Withdraw',function(req,res)
{  
    value = req.query.Amount;
     ret = AmountWithdraw(value);
    res.send("Balance After Withdraw :"+ret);
})