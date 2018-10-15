var keysArray;

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "json/keys.json",
        success: function(result)
        {
            console.log(result.keys);
            var keys = result.keys;
            for (var i = 0; i < keys.length; i++) {
                //do json stuff;
            }
        }
    })
})

function searchFieldFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("searchField");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
