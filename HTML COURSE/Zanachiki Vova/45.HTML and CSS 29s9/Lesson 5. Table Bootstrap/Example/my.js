// alert("Hello");
// console.log("console hello");
window.onload=function() {
    var btnSelectAll=document.getElementById("selectAll");
    btnSelectAll.onclick = FunkSelectAll;
    document.getElementById("deselectAll").addEventListener('click', FunkDeselectAll);
    document.getElementById("addNewUser").addEventListener('click', AddNewRow);
    document.getElementById("deletSelectUsers").addEventListener('click', RemoveSelected);
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
    var counter=3;
    function AddNewRow()
    {
        var tablebody=document.querySelector("#bodyListUsers");
        var node=document.createElement("tr");
        node.style.background="green";
        var txt="";
        txt+='<td><input type="checkbox" data-id="'+counter+'"></td>';
        for(var i=0; i<3; i++)
        {
            txt+="<td>"+"Sometext"+"</td>";
        }
        node.innerHTML=txt;
        tablebody.appendChild(node);
        counter++;
        setTimeout(function(){
            node.style.background="#fff";
        },0);
        //
    }
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
                //var tbody=tr.parentNode;
                //tbody.removeChild(tr);
                //elements[i].parentNode.parentNode.parentNode.removeChild(elements[i].parentNode.parentNode);
            }
        }
    }
}
