$(document).ready(function() {
  // global var input box
  var inputPrompt = $('#add-items');

  $('#add-items').keydown( function(event) {
    if (event.keyCode == 13) {
      prependListItem();
      inputPrompt.val('');
      console.log(event)
    };
  });

  $(document).on('click', '.trash', function() {
    var item = $(this);
    deleteListItem(item);
    // console.log(item);
  });

  $(document).on('click', '.finished', function() {
    $(this).closest('p').addClass("fin");
    console.log('here')
  })

  function createTodoHTML() {
    var newItem = inputPrompt.val();
      if (newItem != false) {
        return ('<p><button class="trash btn btn-warning btn-lg">TRASH</button>' + newItem + '<button class="finished btn btn-success btn-lg">DONE!</button></p>');
      };
  };

  function prependListItem() {
    $('.list-drop-down').prepend(createTodoHTML())
        $('.list-drop-down p:first-child')
        .css('opacity', "0")
        .css("margin-top", "20px")
        .animate(
            { opacity: "1" },
            { queue: true, duration: 'slow' }
        )
        .animate(
            {marginTop: "0px"},
            { queue: false, duration: 'slow' }
        );;
  };

  function deleteListItem(item) {
    $(item).closest('p').fadeOut(400);
  };

  function saveListItem(item) {
    // $(item).

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
