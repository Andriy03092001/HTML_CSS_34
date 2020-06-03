window.addEventListener('load', function() {
    var listRows=document.getElementsByClassName("deleteRow");

    for(let i=0; i<listRows.length; i++){
        listRows[i].onclick=delRowTable;
    }
    function delRowTable() {
        let parent= this.parentNode;
        console.log('---Parent Row---', parent);
        console.log('---Parent nodeName Row---', parent.nodeName);
        while(parent.nodeName!=='TR')
            parent=parent.parentNode;
        console.log('---Parent while Row---', parent);

        parent.remove();
        console.log('---Delete Row---', this);
    }
});