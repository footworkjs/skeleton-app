REQUIRECONFIG.paths.footwork = "../../public/bower_components/footwork/dist/footwork-all";
require.config(REQUIRECONFIG);

require([ "footwork" ],
  function( fw ) {
    window.fw = fw;
    console.info(fw);

    if(typeof mochaPhantomJS !== 'undefined') {
      mochaPhantomJS.run();
    } else {
      mocha.run();
    }
  }
);
