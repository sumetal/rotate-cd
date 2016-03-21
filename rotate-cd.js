function CD(speed,$dom) {
	this.speed = speed;
	this.interval = null;
	this.play = function() {
		this.interval = setInterval(function() {
							if ($dom.css('transform') == 'none') {
								$dom.css('transform','rotate(1deg)')
							} else {
								currentMatrix = $dom.css('transform')
								var values = currentMatrix.split('(')[1],
							    values = values.split(')')[0],
							    values = values.split(',');

							    if (values[0] > 0 && values[1] > 0) {
							    	var angle = Math.round(Math.acos(values[0]) * (180/Math.PI));
							    } else if (values[0] < 0 && values[1] > 0) {
							    	var angle = Math.round(Math.acos(values[0]) * (180/Math.PI));
							    } else if (values[0] < 0 && values[1] < 0) {
							    	var angle = Math.round(Math.asin(Math.abs(values[1])) * (180/Math.PI));
							    	angle = angle + 180
							    } else if (values[0] > 0 && values[1] < 0) {
							    	var angle = Math.round(Math.asin(Math.abs(values[0])) * (180/Math.PI));
							    	angle = angle + 270
							    }
								$dom.css('transform','rotate(' + (angle+1) + 'deg)')
							}
						},50)
	};
	this.pause = function() {
		clearInterval(this.interval)
	};
	this.stop = function() {
		clearInterval(this.interval)
		$dom.css('transform','none')
	}
}