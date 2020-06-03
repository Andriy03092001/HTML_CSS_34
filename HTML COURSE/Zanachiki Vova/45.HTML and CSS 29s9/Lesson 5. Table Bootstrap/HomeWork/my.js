window.onload=function() {
    var btnSelectAll=document.getElementById("selectAll");
    btnSelectAll.onclick = FunkSelectAll;
    document.getElementById("deselectAll").addEventListener('click', FunkDeselectAll);
    document.getElementById("deletSelectUsers").addEventListener('click', RemoveSelected);
    document.getElementById("saveUserAfterEdit").addEventListener('click', FuncSaveUserAfterEdit);
    document.getElementById("saveUserAfterAdd").addEventListener('click', FuncSaveUserAfterAdd);
}

    //ID наступної строки
    var counter=4;
    
    //Видалення одного користувача
    function FuncDeleteOne(x)
    {
        if(confirm("Are you sure?"))
        {
            var tr=x.parentNode.parentNode;
            tr.style.background='#FBC3C3';
            tr.addEventListener('transitionend', function(){
                this.parentNode.removeChild(this);
            });
        }
    }

    //Додавання нового користувача
    function FuncSaveUserAfterAdd()
    {
        var tablebody=document.querySelector("#bodyListUsers");
        var node=document.createElement("tr");
        node.style.background="green";
        var txt="";
        txt+='<td><input type="checkbox" data-id="'+counter+'"></td>';
        txt+="<td>"+document.getElementById("form-fname").value+"</td>";
        txt+="<td>"+document.getElementById("form-lname").value+"</td>";
        txt+="<td>"+document.getElementById("form-email").value+"</td>";
        txt+="<td>"+document.getElementById("form-phone").value+"</td>";
        txt+='<td><button type="button" class="btn btn-info" onclick="FuncEditOne(this)">Edit user</button></td>';
        txt+='<td><button type="button" class="btn btn-danger" onclick="FuncDeleteOne(this);">Delete user</button></td>';
        
        node.innerHTML=txt;
        tablebody.appendChild(node);
        counter++;
        setTimeout(function()
        {
            node.style.background="#fff";
        },0);
        $('#AddUser').modal('hide');        
    }

    //Редагування користувача
    function FuncEditOne(x)
    {
        row=x;
        $('#editUser').modal('show');
        document.getElementById("eform-fname").value=x.parentNode.parentNode.cells[1].textContent;
        document.getElementById("eform-lname").value=x.parentNode.parentNode.cells[2].textContent;
        document.getElementById("eform-email").value=x.parentNode.parentNode.cells[3].textContent;
        document.getElementById("eform-phone").value=x.parentNode.parentNode.cells[4].textContent;
    }

    //Збереження користувача після редагування
    function FuncSaveUserAfterEdit()
    {
        var tr=row.parentNode.parentNode;
        tr.style.background='yellow';
        row.parentNode.parentNode.cells[1].textContent=document.getElementById("eform-fname").value;
        row.parentNode.parentNode.cells[2].textContent=document.getElementById("eform-lname").value;
        row.parentNode.parentNode.cells[3].textContent=document.getElementById("eform-email").value;
        row.parentNode.parentNode.cells[4].textContent=document.getElementById("eform-phone").value;
        $('#editUser').modal('hide');

        setTimeout(function(){
            tr.style.background="#fff";
        },300);
    }

    //Виділення всіх користувачів
    function FunkSelectAll()
    {
        // alert("Click btn Select all");
        var elements=document.querySelectorAll('input[data-id]');
        for(var i=0;i<elements.length; i++)
        {
            if(!elements[i].checked) {
                elements[i].checked=true;
            }
        }
    }

    //Зняття виділення з всіх користувачів
    function FunkDeselectAll()
    {
        // alert("Click btn Select all");
        var elements=document.querySelectorAll('input[data-id]');
        for(var i=0;i<elements.length; i++)
        {
            if(elements[i].checked) {
                elements[i].checked=false;
            }
        }
    }
    
    //Видалення виділених користувачів
    function RemoveSelected()
    {
        var elements=document.querySelectorAll('input[data-id]');
        for(var i=0;i<elements.length; i++)
        {
            if(elements[i].checked) {
                var tr=elements[i].parentNode.parentNode;
                //Для анімації
                tr.style.background='#FBC3C3';
                tr.addEventListener('transitionend', function(){
                    this.parentNode.removeChild(this);
                });
            }
        }
    }

