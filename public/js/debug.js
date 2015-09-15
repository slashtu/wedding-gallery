if (!window["debugUtil"]) {
	if (!window["debugLevel"])
		window.debugLevel = 0;

	function DebugUtil() {
		var debugUtil = {
			log: function() {
				if (window.debugLevel > 0 && window['console'] && typeof window['console'].log == "function") {
					console.log.apply(console, arguments);
				}
			}
		};
		return debugUtil;
	};
	
	window.debugUtil = new DebugUtil();
}