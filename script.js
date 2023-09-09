function viewM() {
    document.getElementById('view').style.display="none";
    document.getElementById('hide').style.display="inline-block";
    document.getElementById('nav').style.right="0%";
}
function hideM() {
    document.getElementById('hide').style.display="none";
    document.getElementById('view').style.display="inline-block";
    document.getElementById('nav').style.right="-100%";
}