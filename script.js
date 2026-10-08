setTimeout(function() {

    document.querySelector(".loading").style.display = "none";
    document.querySelector(".loader").style.display = "none";

    document.getElementById("prank").classList.remove("hidden");

}, 2500);


function laugh() {

    document.getElementById("result").innerHTML =
        "😂 HAHAHA! NICE TRY! STILL NO WIFI! 📵";

}