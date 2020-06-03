//Старий спосіб
var btnSelectAll=document.getElementById("selectAll");
btnSelectAll.onclick=FunkSAll;



//Новий спосіб

document.getElementById("deselectAll").addEventListener('click', FunkDSAll);

document.getElementById('addUser').addEventListener('click',FunkAdd);

document.getElementById('editUserbtn').addEventListener('click',SaveEdit);

document.getElementById('remUser').addEventListener('click',FuncDelSelect);



function FuncDelOne(x)
{
    if(confirm("Are you sure?"))
    {
    var tr=x.parentNode.parentNode;
            tr.style.background='#FBC3C3';           
            tr.addEventListener('transitionend', function()
        {
            this.parentNode.removeChild(this);
        });
    }
}




function FunkSAll()
{
    //alert("HELLO");
    var elements=document.querySelectorAll('input[data-id]');
    elements.forEach(element => {
        if(!element.checked)
            element.checked=true;
    });
}

function FunkDSAll()
{
    //alert("HELLO");
    var elements=document.querySelectorAll('input[data-id]');
    elements.forEach(element => {
        if(element.checked)
            element.checked=false;
    });
}
var num=1;
function FunkAdd()
{
    var table=document.getElementById("userTable");
    var newRow = table.insertRow();
    newRow.style.background="green";
    var lastRowIndex = table.rows.length;
    if(lastRowIndex==0)
    lastRowIndex=1;


    
    
    var Cell1=newRow.insertCell();
    Cell1.innerHTML="<input type=\"checkbox\" data-id="+lastRowIndex+">";
    var Cell2=newRow.insertCell();
    Cell2.innerHTML=document.getElementById("form-fname").value;
    var Cell3=newRow.insertCell();
    Cell3.innerHTML=document.getElementById("form-lname").value;
    var Cell4=newRow.insertCell();
    Cell4.innerHTML=document.getElementById("form-email").value;
    var Cell5=newRow.insertCell();
    Cell5.innerHTML=document.getElementById("form-phone").value;
    var Cell6=newRow.insertCell();
    Cell6.innerHTML="<button type=\"button\" id=\"btndeleteone\" class=\"btn btn-danger\" onclick=\"FuncDelOne(this)\">Delete</button> <button type=\"button\" onclick=\"FuncShowEdit(this)\"  class=\"btn btn-info\">Edit</button>";

    setTimeout(function(){
        newRow.style.background="#fff";
    },0);
    ++num;

    $('#exampleModalCenter').modal('hide');

}

var row;
function SaveEdit()
{
    if(confirm("Are you sure?"))
    {
        var tr=row.parentNode.parentNode;
        tr.style.background="yellow";
    row.parentNode.parentNode.cells[1].textContent=document.getElementById("eform-fname").value;
    row.parentNode.parentNode.cells[2].textContent=document.getElementById("eform-lname").value;
    row.parentNode.parentNode.cells[3].textContent=document.getElementById("eform-email").value;
    row.parentNode.parentNode.cells[4].textContent=document.getElementById("eform-phone").value;  
          
    $('#editUser').modal('hide');
        
    }   
    setTimeout(function(){
        tr.style.background="#fff";
    },500);
   

}



function FuncShowEdit(x)
{
    row=x;
    $('#editUser').modal('show');    
    document.getElementById("eform-fname").value=x.parentNode.parentNode.cells[1].textContent;
    document.getElementById("eform-lname").value=x.parentNode.parentNode.cells[2].textContent;
    document.getElementById("eform-email").value=x.parentNode.parentNode.cells[3].textContent;
    document.getElementById("eform-phone").value=x.parentNode.parentNode.cells[4].textContent;
}

function FuncDelSelect()
{
    if(confirm("Are you sure?"))
    {
    var elements=document.querySelectorAll('input[data-id]');

   
    for (i=0;i<elements.length;++i)
    {
        if(elements[i].checked)
        {
            var tr=elements[i].parentNode.parentNode;
            tr.style.background='#FBC3C3';           
            tr.addEventListener('transitionend', function()
        {
            this.parentNode.removeChild(this);
        });

                 
        }
    }
}
}