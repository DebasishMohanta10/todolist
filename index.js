$(document).ready(function () {
    // YOUR CODE HERE!
    // Retrieve values from local storage and shows it on the page
    $("#list-items").html(localStorage.getItem("listItems"));
    $(".add-items").submit(function(e){
        e.preventDefault();
        var item = $("#todo-list-item").val();

        if(item.trim() != ""){
            if(item.trim().includes("dance")){
                $("#list-items").append(`<li><input type="checkbox" class="checkbox">${item} 💃💃💃<a class="remove">x</a><hr></li>`);
                localStorage.setItem("listItems",$("#list-items").html());
            }else if(item.trim().includes("game")){
                $("#list-items").append(`<li><input type="checkbox" class="checkbox">${item} 🖥️ 🎲 🎮<a class="remove">x</a><hr></li>`);
                localStorage.setItem("listItems",$("#list-items").html());
            }else if(item.trim().includes("study")){
                $("#list-items").append(`<li><input type="checkbox" class="checkbox">${item} 📕 📚 📖<a class="remove">x</a><hr></li>`);
                localStorage.setItem("listItems",$("#list-items").html());
            }else if(item.trim().includes("coding")){
                $("#list-items").append(`<li><input type="checkbox" class="checkbox">${item} 💻 💻 💻<a class="remove">x</a><hr></li>`);
                localStorage.setItem("listItems",$("#list-items").html());
            }else{
                $("#list-items").append(`<li><input type="checkbox" class="checkbox">${item}<a class="remove">x</a><hr></li>`);
                localStorage.setItem("listItems",$("#list-items").html());
            }
            $('#todo-list-item').val("");
        }else{
            $('#todo-list-item').val("");
        }
    });
    // The Checkbox is created dynamically
    $(document).on("change",".checkbox",function(){
        if($(this).attr("checked")){
            $(this).removeAttr("checked");
        }else{
            $(this).attr("checked","checked");
        }
        $(this).parent().toggleClass("completed");
        localStorage.setItem("listItems",$("#list-items").html());
    })

    $(document).on('click','.remove',function(){
        $(this).parent().fadeOut("fast",function(){
            // Callback Function
            $(this).remove();
            localStorage.setItem("listItems",$("#list-items").html());
        })
    })
});
