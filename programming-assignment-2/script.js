(function(global) {

  // create a network
  var container = document.getElementById('target');

  var options = {
    width: "100%",
    edges: {
      color: {
        color: "#CCC"
      }
    },
    nodes: {
        shape: 'dot',
        size: 8,
    },
    physics: {
      enabled: false
    },
    interaction:{
      zoomView: false
    }
  };
  var network = new vis.Network(container, data, options);

})(window);