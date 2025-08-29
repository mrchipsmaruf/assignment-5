// heart button function
function addHeart(id){
    document.getElementById(id).
    addEventListener("click", function(){
    let availableHerats = parseInt(document.getElementById("available-herats").innerText);
    let totalNewAvailableHearts = availableHerats + 1;
    document.getElementById("available-herats").innerText = totalNewAvailableHearts;
});
}
addHeart("heartButton");
addHeart("heartButton2");
addHeart("heartButton3");
addHeart("heartButton4");
addHeart("heartButton5");
addHeart("heartButton6");
addHeart("heartButton7");
addHeart("heartButton8");
addHeart("heartButton9");

// call button function
function call(id, alertMessage, name, number){
    document.getElementById(id).
    addEventListener("click", function(){
        let availableCoins = parseInt(document.getElementById("available-coins").innerText);
        if(availableCoins >= 20){
            alert(alertMessage);
            document.getElementById("available-coins").innerText = availableCoins - 20;
        }
        else{
            alert("You Are Out Of Coins. You Need At Least 20 Coins For Call");
            return;
        }

        let localTime = new Date().toLocaleTimeString();

        let historyContainer = `
        <div class="flex justify-between items-center bg-[#FAFAFA] p-[10px] rounded-[8px]">
                <div>
                    <h3 class="font-bold text-xl">${name}</h3>
                <p class="text-xl">${number}</p>
                </div>
                <p class="text-xl">${localTime}</p>
            </div>
        `;
        document.getElementById("call-history").innerHTML = historyContainer + document.getElementById("call-history").innerHTML;

    });
}
call("call-button", "Calling National Emergency Number 999", "National Emergency Number", "999");
call("call-button2",  "Calling Police Helpline Number 999", "Police Helpline Number", "999");
call("call-button3", "Calling Fire Service Number 999", "Fire Service Number", "999");
call("call-button4", "Calling Ambulance Service 1994-999999", "Ambulance Service", "1994-999999");
call("call-button5", "Calling Women & Child Helpline 109", "Women & Child Helpline", "109");
call("call-button6", "Calling Anti-Corruption Helpline 106", "Anti-Corruption Helpline", "106");
call("call-button7", "Calling Electricity Helpline 16216", "Electricity Helpline", "16216");
call("call-button8", "Calling Brac Helpline 16445", "Brac Helpline", "16445");
call("call-button9", "Calling Bangladesh Railway Helpline 163", "Bangladesh Railway Helpline", "163");

// clear button function
document.getElementById("clear-button").
addEventListener("click", function(){
    document.getElementById("call-history")
    .innerHTML = "";
});

// copy button function
function addCopy(id, numberSelector, alertMessage){
    document.getElementById(id).
    addEventListener("click", function(){
    let availableCopys = parseInt(document.getElementById("available-copy").innerText);
    document.getElementById("available-copy").innerText = availableCopys + 1;
    
    let copyNumber = document.querySelector(numberSelector).textContent;
        navigator.clipboard.writeText(copyNumber).then(() => {
        alert(alertMessage);
        })
    });
}
addCopy("copy-btn", "#copy-number", "National Emergency Number Copied : 999");
addCopy("copy-btn2", "#copy-number2", "Police Helpline Number Copied : 999");
addCopy("copy-btn3", "#copy-number3", "Fire Service Number Copied : 999");
addCopy("copy-btn4", "#copy-number4", "Ambulance Service Number Copied : 1994-999999");
addCopy("copy-btn5", "#copy-number5", "Women & Child Helpline Number Copied : 109");
addCopy("copy-btn6", "#copy-number6", "Anti-Corruption Helpline Number Copied : 106");
addCopy("copy-btn7", "#copy-number7", "Electricity Helpline Number Copied : 16216");
addCopy("copy-btn8", "#copy-number8", "Brac Helpline Number Copied : 16445");
addCopy("copy-btn9", "#copy-number9", "Bangladesh Railway Helpline Number Copied : 163");
