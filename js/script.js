$('document').ready(function() {
  // global var
  var inputPrompt = $('#add-items');

  $('#add-items').keydown(function(event) {
    if (event.keyCode == 13) {
      createItem();
      inputPrompt.val('');
      console.log(event)
    };
  });


   function createTodoHTML() {
    var newItem = $('#add-items').val();
    if (newItem != false) {
      return ('<p><button class="trash btn btn-warning btn-lg">TRASH</button>' + newItem + '<button class="finished btn btn-success btn-lg">DONE!</button></p>');
    }

    };

  function createItem() {
    $('.list-drop-down').prepend(createTodoHTML());
  };

});




// function generateTodoHTML(title, text) {
//     return (
//         '<div>' +
//             '<h1>' + title + '</h2>' +
//             '<p>' + text + '</p>' +
//         '</div>'
//     );
// }

// $('todo-list').append(
//     generateTodoHTML('My Todo', 'do something')
// );
