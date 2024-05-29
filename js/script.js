function newItem() {
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  
  if (inputValue === '') {
    alert('You must write something!');
  } else {
    $('#list').append(li);
  }

  //2. Crossing out an item from the list of items:
  li.on('dblclick', function() {
    li.toggleClass("strike");
  });

  //3(i). Adding the delete button 'X': 
  let crossOutButton = $('<crossOutButton>X</crossOutButton>');
  li.append(crossOutButton);
  crossOutButton.on('click', function() {
    li.addClass('delete');
  })

  // 4. Reordering the items: 
  $('#list').sortable();
}