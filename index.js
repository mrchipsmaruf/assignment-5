// login button function
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
