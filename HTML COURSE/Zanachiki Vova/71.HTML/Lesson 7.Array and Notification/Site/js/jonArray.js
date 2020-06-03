window.addEventListener('load', function () {
   //alert(2);
   let array = new Array(10);
   for (let i = 0; i < array.length; i++) {
      array[i] = {
         name: 'Оксана'+i,
         age: 18,
         image: 'https://secure.gravatar.com/blavatar/a50f3ef3c7558e7ab2749f3efea3c5b5?s=50&d=https%3A%2F%2Fs2.wp.com%2Fi%2Flogo%2Fwpcom-gray-white.png',
         phone: '+38(098)123-34-56'
      };
   }

   let btnShowGirls = document.getElementById('btnShowGirls');
   let tableBodyJon = this.document.getElementById('tableBodyJon');
   btnShowGirls.addEventListener('click', (e) => {
      e.preventDefault();
      //btnShowGirls.innerText='Hello';
      for (let i = 0; i < array.length; i++) {
         let tr = document.createElement('TR');
         tr.innerHTML = `
       <td>
           <input class="form-control" type="checkbox">
       </td>
       <td><img
               src="${array[i].image}">
       </td>
       <td>${array[i].name}</td>
       <td>${array[i].phone}</td>
       <td>
           <button class="btn btn-warning">Редагувати</button>
           <button class="btn btn-danger deleteRow">Видалити</button>
       </td>
   `;
         //this.console.log('----tableBodyJon-----')
         tableBodyJon.appendChild(tr);
      }
   });
});

 //Выполнятся оба обработчика
