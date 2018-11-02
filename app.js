/*
listen for click event (edit)
update text in local storage (with key)
update display with new text value
 */

$(document).ready(function() {
  console.log(window.localStorage);

var tasks = getLocal('things');
var index;
pageLoad(tasks);
console.log(tasks);
console.log('things');

// add a task
  $('#add-task-btn').on('click', function() {
    var task = $('#input').val();
    tasks.push(task);
    $('#input').val('');
    pageLoad(tasks);
    toLocal('things', tasks);
  });

// attach enter key to add-task-btn
  $('#input').keypress(function(e){
      if (e.which === 13){
          $("#add-task-btn").click();
      }
  });

// delete a task
  $('ul').on('click', 'span', function(e) {
    e.stopPropagation();
    index = $('span').index(this);
    $('li').eq(index).remove();
    tasks.splice(index, 1);
    toLocal('things', tasks);
    // localStorage['things'] = JSON.stringify(tasks);
  });

// edit a task
  $('ul').on('click', 'li', function() {
    // $('#edit-input').focus();
    index = $('li').index(this);
    var change = tasks[index];
    $('#edit-input').val(change);
  });

  $('#edit-button').on('click', function() {
    tasks[index] = $('#edit-input').val();
    pageLoad(tasks);
    toLocal("things", tasks);
  });

// attach enter key to edit-button
  $('#edit-input').keypress(function(e) {
      if (e.which === 13) {
        $('#edit-button').click();
      }
    });

// autofocus editModal input textbox
  $('#editModal').on('shown.bs.modal', function() {
    $('#edit-input').focus();
  });

// clear
  $('.clear-cache-btn').on('click', function() {
    tasks = [];
    $('.task-display').empty();
    localStorage.clear();
    pageLoad(tasks);
  });

// helper functions

function pageLoad(tasks) {
    $('li').remove();
    if(tasks.length > 0) {
      for(var i = 0; i < tasks.length; i++) {
        $('ul').append('<li class= "task-display-item" data-toggle="modal" data-target="#editModal">' + tasks[i] + '<span class="glyphicon glyphicon-remove"></span</li>');
      }
    }
  };

function toLocal(key, tasks) {
  localStorage[key] = JSON.stringify(tasks);
};

function getLocal(key) {
  if (localStorage[key]) {
    return JSON.parse(localStorage[key]);
  } 
    return [];
};
});


// add item
  // $('.add-text-btn').on('click', function(){

  //   // $('.show-text').empty();
  //   curKeyID += 1; // change to dynamic key?
  //   console.log(curKeyID)
  //   var curText = $('#theKey').val(); // reading from <input>
  //   localStorage.setItem(curKeyID, curText);
  //   $('.show-text').append(curText);
  // })