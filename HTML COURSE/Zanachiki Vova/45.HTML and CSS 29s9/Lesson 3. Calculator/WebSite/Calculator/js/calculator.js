(function()
{
    var txtInput=document.getElementById("txtInput");
    var btnDigital=document.getElementsByClassName('btn-digital');
    
    for(var i = 0; i<btnDigital.length;i++)
    {
        btnDigital[i].onclick=clickDigital;
    }
    function clickDigital()
    {
        var data = this.innerText;
        if(txtInput.value==="0")
        {
            txtInput.value=data;
        }
        else
        {
            txtInput.value+=data;
        }
        
        console.log(data);
    }
})();