var curHour = moment().hour();

// current day displayed at the top of the calendar
$('#today').text(moment().format('LLL'));
$('.fullDay').hide();


$('.time-block').each(function() {
    var hour = $(this).data('hour');
    var eventMsg = localStorage.getItem(hour);
    $(this).find('.description').text(eventMsg);
    $(this).addClass(hour > curHour ? 'future' : hour < curHour ? 'past' : 'present');
})

//when save button is clicked, it is saved to local storage for that hour
$('.time-block').on('click', '.saveBtn', function() {
    var eventText = $(this).parent().find('.description').val();
    localStorage.setItem($(this).parent().data('hour'), eventText);
})

// if show 24 hours is checked, project can be tested after 5pm
$('#checkbox').on('click', function() {
    if ($('#checkbox').is(':checked')) {
        console.log('box is checked!');
        $('.fullDay').show();
    }
    else {
        console.log('box is unchecked!');
        $('.fullDay').hide();
    }
});

