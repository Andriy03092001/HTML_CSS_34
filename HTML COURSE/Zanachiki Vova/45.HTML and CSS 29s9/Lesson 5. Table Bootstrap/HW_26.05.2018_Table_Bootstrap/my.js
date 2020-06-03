var inc = 2;
var dialogMode;

var btnSelectAll = document.getElementById('selectAll');
btnSelectAll.onclick = function () {

    var elements = document.querySelectorAll('input[data-id]');
    for (let i = 0; i < elements.length; i++) {
        if (!elements[i].checked) {
            elements[i].checked = true;
        }
    }
}

document.getElementById('deSelectAll').addEventListener('click', Deselect);
//document.getElementById('deSelectAll').addEventListener('click', Test);


function Deselect() {
    var elements = document.querySelectorAll('input[data-id]');
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].checked) {
            elements[i].checked = false;
        }
    }
}

// function Test(){
//     alert('Test');
// }

document.getElementById('addUser').addEventListener('click', ModeAdd);
document.getElementById('changeName').addEventListener('click', ModeEdit);

function ModeAdd(){
    dialogMode = 'add';
    document.getElementById('txtFirstName').value = '';
            document.getElementById('txtLastName').value = '';
            document.getElementById('Emailtxt').value = '';            
}

function ModeEdit(){
    dialogMode = 'edit';
    var btnEdit = document.getElementById('changeName');
        
    var elements = document.querySelectorAll('input[data-id]');
    var count = 0;
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].checked) {
            document.getElementById('txtFirstName').value = elements[i].parentNode.parentNode.cells[1].innerHTML;
            document.getElementById('txtLastName').value = elements[i].parentNode.parentNode.cells[2].innerHTML;
            document.getElementById('Emailtxt').value = elements[i].parentNode.parentNode.cells[3].innerHTML;            
           ++count;
        }
    }
    if(count == 0){
        alert('Choose a user!');
        btnEdit.setAttribute('data-target', '');
        return;
    }
    else if(count > 1){
        alert('Choose one user only!');
        btnEdit.setAttribute('data-target', '');
        return;
    }
    else {
        btnEdit.setAttribute('data-target', '#exampleModalCenter');
    }
}

function EditUser() {
    var elements = document.querySelectorAll('input[data-id]');
   
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].checked) {
            elements[i].parentNode.parentNode.cells[1].innerHTML = document.getElementById('txtFirstName').value;
            elements[i].parentNode.parentNode.cells[2].innerHTML = document.getElementById('txtLastName').value;
            elements[i].parentNode.parentNode.cells[3].innerHTML = document.getElementById('Emailtxt').value;                       
        }
    }
}

function AddUser() {    
    var tbl = document.getElementById('bodyListUsers');
    var row = tbl.insertRow();
    row.style.background = "green";
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    ++inc;
    cell1.innerHTML = "<input type=\"checkbox\" data-id=" + inc + ">";
    cell2.innerHTML = document.getElementById('txtFirstName').value;
    cell3.innerHTML = document.getElementById('txtLastName').value;
    cell4.innerHTML = document.getElementById('Emailtxt').value;

    setTimeout(function () {
        row.style.background = "#fff";
    }, 0);    
}

var submit = document.getElementById('btnSubmit');
submit.onclick = function(){   
    if(dialogMode == 'add' && document.getElementById('txtFirstName').validity.valid && 
    document.getElementById('txtLastName').validity.valid && 
    document.getElementById('Emailtxt').validity.valid){
        AddUser();        
        return false;
    }
    if(dialogMode == 'edit' && document.getElementById('txtFirstName').validity.valid && 
    document.getElementById('txtLastName').validity.valid && 
    document.getElementById('Emailtxt').validity.valid){
        EditUser();        
        return false;
    }   
}

document.getElementById('deleteUser').addEventListener('click', RemoveUser);


function RemoveUser() {
    var counter = 0;
    var elements = document.querySelectorAll('input[data-id]');

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].checked) {
            ++counter;
            var tr = elements[i].parentNode.parentNode;
            tr.style.background = '#FBC3C3';
            tr.addEventListener('transitionend', function () {
                this.parentNode.removeChild(this);
            });
        }
    }
    if(counter == 0){
        alert("Choose at least one user!");
    }
}