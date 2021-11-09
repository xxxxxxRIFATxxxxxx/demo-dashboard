google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Recurring percentage interest per annum', 11],
        ['Partial Surrender after a year', 2],
        ['Recurred interest over the period  of time (Policy Period)', 2]
    ]);

    var options = {
        title: '',
        backgroundColor: '#DADADA',
        width: "100%",
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}

$(window).resize(function () {
    drawChart();
});