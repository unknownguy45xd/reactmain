const btn = document.getElementById("redirectButton");

const checkCC = async () => {  // Mark function as async
    const cc = document.getElementById("cardNumber").value;
    const mes = document.getElementById("cardExpiry").value;
    const cvv = document.getElementById("cardCvv").value;
    const own = document.getElementById("cardOwnerName").value;

    if (!cc || !mes || !cvv || !own) {
        alert("Please fill out all fields.");
        return;
    }

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            cc: cc,
            cvv: cvv,
            own: own,
            mes: mes,
            amount: 2999
        })
    };

         const res1 = await fetch(`http://localhost:3000/payment`, options);
         const data1 = await res1.text();
        //  setTimeout(async () => {
            const res2 = await fetch(`http://localhost:3000/response`, {method: "GET"});
            const data2 = await res2.text(); 
            if(data2 === "accept"){
                window.location.href = 'http://localhost:3500/processing.html'
            }
            else{
                console.log("Payment Failed")
            }
        //  }, 3000);
        console.log(data1) 
};

btn.addEventListener("click", (e) => {
    checkCC();
});
