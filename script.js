var curr = moment().add(1, 'hours').hour();

// current day displayed at the top of the calendar
$('#today').text(moment().format('LLL'));
// timeblocks for 9am - 5pm <- done in HTML

//color coded blocks for past present future
$('.time-block').each(function() {
    var hour = $(this).data('hour');
    var message = localStorage.getItem(hour);
    $(this).find('.description').text(message);
    $(this).addClass(hour > curr ? 'future' : hour < curr ? 'past' : 'present');
})
// enter event into timeblock


// save button will save to local storage
// Only saving one item wtf
$('.time-block').on('click', '.saveBtn', function() {
    var result = $(this).parent().find('.description').val();
    localStorage.setItem($(this).parent().data('hour'), result);
})


//saved events persist







