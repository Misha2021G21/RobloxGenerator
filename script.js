let robux = 0;
document.getElementById("generate").addEventListener("click", function() {
    let amount = Math.floor(Math.random() * 100) + 1;
    robux += amount;
    document.getElementById("robux-display").textContent = "Robux: " + robux;
});