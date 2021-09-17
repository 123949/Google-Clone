const searchInputForJS = document.querySelector("#searchInputForJS");
searchInputForJS.addEventListener("keydown", function(event) {
    if (event.code == "Enter") {
        Search();
    }
});
document.getElementById("GoogleSearchBtn1").onclick = function() {
    Search();
}
document.getElementById("LuckyBtn2").onclick = function() {
    window.location.href = "https://www.google.com/doodles";
}

function Search() {
    const input = searchInputForJS.value;
    window.location.href = "https://www.google.com/search?q=" + input + "&oq=" + input + "&aqs=chrome..69i57.2410j0j1&sourceid=chrome&ie=UTF-8"
}