(function(global) {
  var months = ['Jan', 'Feb', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var traces = Array();
  var averages = {
    y: Array(),
    x: Array(),
    name: "Yearly Mean",
    type: 'scatter',
    line: {
      width: 1,
      color: 'rgba(8, 81, 156, .75)',
    },
    mode: 'lines'
  };

  traces.push({
    y: [null],
    x: [null],
    legendgroup: 'group',
    name: 'Monthly Means',
    marker: {
      size: 2,
      color: 'rgba(79, 90, 117, 0.5)'
    },
    type: 'box'
  })

  for (year in global_means) {
    var trace = {
      y: Array(),
      type: 'box',
      name: year,
      showlegend: false,
      legendgroup: 'group',
      whiskerwidth: 0.1,
      fillcolor: 'cls',
      hoverinfo: 'x',
      marker: {
        size: 2,
        color: 'rgba(79, 90, 117, 0.5)'
      }
    }
  
    averages.x.push(year);
    averages.y.push(global_means[year]["J-D"]*1.8);
  
    trace.y = Array();
    for (var i = 0; i < months.length; i++) {
      var mon = months[i];
      trace.y.push(global_means[year][mon]*1.8);
    }
    traces.push(trace);
  }

  traces.push(averages);
  
  var layout = {
    title: "<b>Global Land-Ocean Temperature Index</b> (base period: 1951-1980)",
    xaxis: {
      title: "<b>Year</b>",
      fixedrange: true,
      tickmode: 'linear',
      tick0: 0,
      dtick: 5,
      ticks: 'outside',
      tickangle: 45,
      showline: true
    },
    yaxis: {
      title: "<b>Mean Temperature</b><sup><br>(degrees Fahrenheit relative to base period)</sup>",
      fixedrange: true,
      tickmode: 'linear',
      dtick: .5,
      ticks: 'outside',
      showline: true,
      zeroline: false
    },
    legend: {
      orientation: "h",
      y: 1,
      yanchor: 'bottom',
      x: 1,
      xanchor: 'right'
    }
  }
  
  Plotly.newPlot('target', traces, layout, {displayModeBar: false});
})(window);