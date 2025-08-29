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
