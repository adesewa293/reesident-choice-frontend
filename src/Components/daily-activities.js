const activities = [
    { day: 'Sunday', activity: 'Yoga Class' },
    { day: 'Monday', activity: 'Art and Crafts' },
    { day: 'Tuesday', activity: 'Gardening' },
    { day: 'Wednesday', activity: 'Movie Time' },
    { day: 'Thursday', activity: 'Memory Games' },
    { day: 'Friday', activity: 'Music Therapy' },
    { day: 'Saturday', activity: 'Bingo' },
];

function populateCalendar() {
    const calendarDays = document.querySelectorAll('.day');
    for (let i = 0; i < calendarDays.length; i++) {
        const dayName = calendarDays[i].textContent;
        const activity = getActivityForDay(dayName);
        calendarDays[i].textContent = `${dayName}\n${activity}`;
    }
}

function getActivityForDay(dayName) {
    const activityObj = activities.find(activity => activity.day === dayName);
    return activityObj ? activityObj.activity : 'No activity planned';
}

populateCalendar();
