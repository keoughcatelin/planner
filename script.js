$(function () {
// display current day
const currentDay = dayjs().format("D MMMM, YYYY");
  $('#currentDay').text(currentDay);

// iterate over each time block
  $('timeBlock').each(function() {
    // get the hour of the time block
    const blockHour = parseInt($(this).attr('id').split('-')[1]);
    // get the current hour
    const currentHour = dayjs().hour();

// add appropriate class based on the comparison of blockHour and currentHour
    if (blockHour < currentHour) {
      $(this).addClass('past');
    } else if (blockHour === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
  }

// Get saved event from local storage and set the value of the description field
  const savedEvent = localStorage.getItem('hour-' + blockHour);
  if (savedEvent) {
    $(this).find('.description').val(savedEvent);
  }
});

// save button click event
$('.saveBtn').on('click', function() {
  const block = $(this).parent();
  const blockHour = block.attr('id').split('-')[1];
  const eventText = block.find('.description').val();

  // Save the event text to local storage
  localStorage.setItem('hour-' + blockHour, eventText);
});
});

