var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope) {

        var keys_collections = null


         //AJAX request is used here to call on the local JSON file.

    $.ajax({
        type: "GET",
        url: "json/keys.json",
        success: function(result)
        {

          //console.log(result.keys[0]);
          // for(var i = 0;i<result.keys.length;i++){
          //
          //   if(result.keys[i].keyType==("Tambour Unit")){
          //     console.log(result.keys[i])
          //          $scope.keys = result.keys[i];
          //
          //   }
          //
          // }

           $scope.products = [{ id: 1, product: 'Sugar', quality: 'Good', quantity: '200 packs' }, { id: 2, product: 'Wheat', quality: 'Super', quantity: '100 bags' }, { id: 3, product: 'Rice', quality: 'Fine', quantity: '50 packs' }];



            }
        })

    })





// function searchFieldFunction() {
//     var input, filter, ul, li, a, i;
//     input = document.getElementById("searchField");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myTR");
//     li = ul.getElementsByTagName("li");
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }

// <tr>
//   <th scope="row">1</th>
//   <td>Mark</td>
//   <td>Otto</td>
//   <td>@mdo</td>
// </tr>
