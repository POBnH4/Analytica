
    (function() {
    $.ajax({
        type: "GET",
        url: "json/keys.json",
        success: function(result)
        {
            console.log(result.keys);

                //do json stuff;
            }
        }


    })();



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
