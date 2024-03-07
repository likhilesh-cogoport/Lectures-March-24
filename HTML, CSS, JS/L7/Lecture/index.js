import {createOrder} from './intern.js'


function proceedTOPayment(orderID){
    // Processing ...
    console.log(orderID);
    let paymentLink = 'https:///razorpay.com/payments/id='+orderID;
    console.log('processing...');
    setTimeout(()=>window.open(paymentLink), 2000);
}

// // inversion of control
// createOrder(proceedTOPayment);

const res = createOrder();
console.log(res);

res
    .then((id)=>{
        proceedTOPayment(id);
    })
    .catch((err)=>{
        console.log("Error occurred:", err);
    })




// promise