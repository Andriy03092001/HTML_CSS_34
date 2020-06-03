(function() {
    var b="Salo";
    // window.onload= function()
    // {
    
    // }
    var btn=document.getElementById("myBtnPluss");

        btn.onclick=btnPluss;
    function btnPluss() {
        alert("btnPluss " +b);
        b = 5554;
    }
})();