typeof REQUIRECONFIG === 'object' && require.config(REQUIRECONFIG);

require(["footwork"],
  function(fw) {
    fw.start();
  }
);
