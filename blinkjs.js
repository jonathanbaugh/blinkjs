var blinkjs = {
	_els: document.getElementsByTagName('blink'),
	init: function() {
		setInterval(blinkjs.toggle, 1000);
	},
	toggle: function() {
		var e = 0;

		if( !blinkjs._els.length ) {
			return;
		}

		for( e=0; e<blinkjs._els.length; e++ ) {
			blinkjs._els[e].style.visibility = blinkjs._els[e].style.visibility === "visible" ? "hidden" : "visible";
		}
	}
};

blinkjs.init();
