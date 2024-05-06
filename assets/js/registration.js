const courseData = [
	{
		name: 'Գրաֆիկ դիզայն դասընթաց',
		schedules: ["14:00", "16:00", "18:00"]
	},
	{
		name: 'Social Media Marketing (SMM) դասընթաց',
		schedules: ["16:00", "18:00", "10:00"]
	},
	{
		name: 'UI/UX դիզայն դասընթաց',
		schedules: ["08:00", "10:00", "12:00"]
	},
	{
		name: 'Motion դիզայն դասընթաց',
		schedules: ["12:00", "16:00", "20:00"]
	},
	{
		name: 'Interior դիզայն դասընթաց',
		schedules: ["16:00", "20:00", "22:00"]
	},
	{
		name: 'Վեբ ծրագրավորում դասընթաց',
		schedules: ["18:00", "20:00", "22:00"]
	},
]

$(document).ready(function() {
	$("#select-course").change(function () {
        // Get the selected option
        var selectedOption = $(this).val();

        // Fetch the schedule data from a JSON object
        var scheduleData = getScheduleData(selectedOption);

        // Clear the current schedule elements
        $('.schedules-container').empty();

        // Create and add the new schedule elements
        $.each(scheduleData, function(index, schedule) {
			var scheduleEl = $('<label></label>').addClass('schedule__el')
			var checkbox = $('<input />', { type: 'checkbox', name: 'schedule', value: schedule });
			var p = $('<p></p>').addClass('border-gradient').text(schedule);
			scheduleEl.append(checkbox);
			scheduleEl.append(p);
   
            $('.schedules-container').append(scheduleEl);
        });
    });

	$('#registration-form').on('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission

        // Show the confirmation modal
        $('#confirmation-modal').modal('show');
    });
});

function getScheduleData(courseName) {
    var course = courseData.find(function(course) {
        return course.name === courseName;
    });

    // If the course was found, return its schedule data
    if (course) {
        return course.schedules;
    }

    // If the course was not found, return an empty array
    return [];
}

// var checkedSchedules = [];
// $('input[name="schedule"]:checked').each(function () {
// 	checkedSchedules.push($(this).val());
// });

// console.log(checkedSchedules);