
       var app = angular.module('myApp', []);
       app.controller('customersCtrl', function($scope) {



//  $scope.products = [{ id: 1, product: 'Sugar', quality: 'Good', quantity: '200 packs' }];
    $.ajax({
        type: "GET",
        url: "json/keys.json",
        success: function(result)
        {
             var results=[]
           for(var i = 0;i<result.keys.length;i++){

            if(result.keys[i].keyType==("Tambour Unit")){
              results.push(result.keys[i]);
            }

          }


            }


        })

        $scope.result = results
     console.log($scope.result)

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
