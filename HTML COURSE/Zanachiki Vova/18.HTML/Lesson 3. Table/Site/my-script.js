window.onload=function() {
    console.log("---", "Дом готовий");
    
    InitTableUsers();
    document.getElementById('showdialog').onclick=AddNewRow;
}
function InitTableUsers()
{
    var btnsDel=document.getElementsByClassName('btn-delete');
    console.log("count btnsDel",btnsDel.length);
    for(var i=0;i<btnsDel.length; i++)
    {
        btnsDel[i].onclick=deleteRow;
    }
}
function deleteRow() {
    var el = this;
    while (el.parentElement.nodeName != "TBODY") {
        el = el.parentElement;
    }
    el.remove();
    //this.innerHTML="Del";
    console.log("click delete");
}
function AddNewRow()
{
    var row=document.createElement('tr');
    var name="Hello peter";
    row.innerHTML = `
                        <td>1</td>
                        <td>${name}</td>
                        <td>st. Generala Bezruchka h.9</td>
                        <td>webaspirin@gmail.com</td>
                        <td>
                            <div class="tablebutton">
                                <a href="#">EDIT</a>
                                <a href="#" class="btn-delete">DELETE</a>
                            </div>
                        </td>
    `;
    var table = document.getElementById("dataUsers");
    table.appendChild(row);
    InitTableUsers();
}