let data = new Array();

$.ajax({
    url: './data.json',
    async: false,
    dataType: 'json',
    success: function(response) {
        // do stuff with response.
        response.map(a => data.push(a));
    }
});

const children = ['.work', '.play', '.study', '.exercise', '.social', '.self-care']

const i = children.length - 1;

function activityDescription(index, interval = 'daily') {
    const child = document.querySelector(children[index]);
    child.querySelector('.title').innerText = data[index].title;
    child.querySelector('.current-time').innerText = data[index].timeframes[interval].current + "hrs";
    child.querySelector('.previous-time').innerText = "Last " + interval + " - " + data[index].timeframes[interval].previous + "hrs";
    const j = index - 1;
    if (j >= 0)
        activityDescription(j, interval)
}
activityDescription(i)


const daily = document.getElementById('daily');
daily.addEventListener('click', () => {
    activityDescription(i, 'daily')
});
const weekly = document.getElementById('weekly');
weekly.addEventListener('click', () => {
    activityDescription(i, 'weekly')
});
const monthly = document.getElementById('monthly');
monthly.addEventListener('click', () => {
    activityDescription(i, 'monthly')

});
