$( "#create-button" ).on('click', function(e){
    e.preventDefault();
    var text = $("#item-text").val();
    var container = $("#items-container")
    container.append(`<li>
    <p>${text}</p>
    <button class="checar">Check</button>
    <button class="del">Delete</button>
  </li>`)
})

$("#items-container").on('click', '.checar', function(){
    var textContainer = $(this).siblings("p");
    textContainer.css('text-decoration', 'line-through');
})

$("#items-container").on('click', '.del', function(){
    var parent = $(this).parent();
    parent.remove();
})