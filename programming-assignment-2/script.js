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
        size: 20
    },
    physics:{
      // barnesHut:{
      //   avoidOverlap: 1,
      //   gravitationalConstant: -50000,
      //   springLength: 20,
      //   centralGravity: 3,
      //   springConstant: 0.04,
      // },
      forceAtlas2Based: {
        avoidOverlap: 1,
        // gravitationalConstant: -150,
        springLength: 75,
        // springConstant: .08,
        // centralGravity: .1
      },
      solver: "forceAtlas2Based",
      stabilization: {
        enabled: true,
        iterations: 1000
      },
      timestep: .3
    },
    // smoothCurves: {dynamic:false},
    // hideEdgesOnDrag: true,
    // stabilize: true,
    // stabilizationIterations: 1000,
    // zoomExtentOnStabilize: false,
    // navigation: true,
    // keyboard: true,
  };
  var network = new vis.Network(container, data, options);

})(window);