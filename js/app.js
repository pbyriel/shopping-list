var count = 1;

$(document).ready(function () {
    $("#count").text("No. items: " + count);
    
    $("#item").keydown(function (event) {
        var uinput = $("#item").val();
        if (event.keyCode == 13) {
            if (uinput == "") {
                alert("Please enter an item");
            } else {
                $("ul").prepend("<li class='todo'>" + uinput + "</li>");
                $("#item").val("");
                count += 1;
                $("#count").text("No. items: " + count);
        }
        }
    });

    $("ul").on("click", "li", function () {
        if ($(this).hasClass("todo")) {
            $(this).removeClass("todo").addClass("done");
            count -= 1;
            $("#count").text("No. items: " + count);
            $(this).appendTo("ul");
        } else {
            $(this).remove();
        }
    });
    
    
});