window.onload=function() {
    var btn=document.getElementById("btnShowDialog");
    var dlg=document.getElementById("dialogDelete");
    btn.onclick=function() {
        
        dlg.style.display="block";
    }

    var btnClose=document.getElementById("dialogClose");
    btnClose.onclick=function() {
        document.getElementById('name').value='';
        document.getElementById('adress').value='';
        document.getElementById('email').value='';
        dlg.style.display="none";

        
    }

    var btnAdd=document.getElementById("add");
    btnAdd.onclick=function()
    {

        var name=document.getElementById('name').value;
        var adress=document.getElementById('adress').value;
        var email=document.getElementById('email').value;
        if(name=='' || adress=='' || email=='' || !validateEmail(email))
            return
            

        var table=document.getElementById('t01');
        var lastRowIndex = table.rows.length-1;
        var num=table.rows[lastRowIndex].cells[0].innerHTML;



        var newRow = document.all("t01").insertRow();

        var oCell1 = newRow.insertCell();
        if(lastRowIndex==0)
            oCell1.innerHTML=1;
        else
            oCell1.innerHTML=+num+1;

        var oCell2 = newRow.insertCell();
        oCell2.innerHTML=name;
        var oCell3 = newRow.insertCell();
        oCell3.innerHTML=adress;
        var oCell4 = newRow.insertCell();
        oCell4.innerHTML=email;   
        var oCell5 = newRow.insertCell();
        oCell5.innerHTML="<div class=\"tablebutton\"><a href=\"#\">EDIT</a><a href=\"#\">DELETE</a></div>";


        document.getElementById('name').value='';
        document.getElementById('adress').value='';
        document.getElementById('email').value='';
    } 
    
    
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
}