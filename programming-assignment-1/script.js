var box_whisker_data = Object();


var months = ['Jan', 'Feb', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var traces = Array();

for (year in global_means) {
  var trace = {
    y: Array(),
    type: 'box',
    name: year,
    whiskerwidth: 0.1,
    fillcolor: 'cls',
    hoverinfo: 'x',
    marker: {
      size: 2,
      color: 'rgba(79, 90, 117, 0.5)'
    }
  }
  trace.y = Array();
  for (var i = 0; i < months.length; i++) {
    var mon = months[i];
    trace.y.push(global_means[year][mon]*1.8);
  }
  traces.push(trace);
}

var layout = {
  title: "Global Land-Ocean Temperature Index (base period: 1951-1980)",
  showlegend: false,
  xaxis: {
    title: "Year",
    fixedrange: true,
    tickmode: 'linear',
    tick0: 0,
    dtick: 5,
    ticks: 'outside',
    tickangle: 45,
    showline: true
  },
  yaxis: {
    title: "Mean Temperature (degrees Fahrenheit)<br> Relative to Base Period",
    fixedrange: true,
    tickmode: 'linear',
    dtick: .5,
    ticks: 'outside',
    showline: true,
    zeroline: false
  }
}

Plotly.newPlot('target', traces, layout, {displayModeBar: false});

// var graphDiv = document.getElementById('target');
// graphDiv.on('plotly_hover', function(data){
//   console.log(data);
// });