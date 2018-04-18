(function(global) {

var
  canvas = document.getElementById('target'),
  context = canvas.getContext("2d"),
  // width = global.innerWidth - 100,
  // height = global.innerHeight - 100
  width = 928,
  height = 468
;

console.log(width, height);

var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id; }))
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter())
;

d3.json("data/network-data.json", function(error, graph) {
  if (error) throw error;

  simulation
      .nodes(graph.nodes)
      .on("tick", ticked);
  ;

  simulation.force("link")
      .links(graph.links);

  function ticked() {
    context.clearRect(0, 0, width, height);
    context.save();
    context.translate(width / 2, height / 2 + 40);

    context.beginPath();
    graph.links.forEach(drawLink);
    context.strokeStyle = "#aaa";
    context.stroke();

    context.beginPath();
    graph.nodes.forEach(drawNode);
    context.fill();
    context.strokeStyle = "#fff";
    context.stroke();

    context.restore();
  }
});

function drawLink(d) {
  context.moveTo(d.source.x, d.source.y);
  context.lineTo(d.target.x, d.target.y);
}

function drawNode(d) {
  context.moveTo(d.x + 3, d.y);
  context.arc(d.x, d.y, 3, 0, 2 * Math.PI);
}

})(window);
