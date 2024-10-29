/*
    2024-10-28
    Auteur: Mikael Rousseau
*/


class WaterTank {

	constructor(settings) {
		this.tank = document.getElementById(settings.tank);
		this.width = settings.width;
		this.height = settings.height;
		this.color1 = settings.color1;
		this.color2 = settings.color2;
		this.level1 = settings.level1;
		this.level2 = settings.level2;

		let colorBg = 'rgb(200, 200, 200)';
		let colorTop = 'rgba(255, 255, 255, 0.5)';
		
		$(this.tank).css({
			width: this.width,
			height: this.height + this.width/2,
			position: 'relative',
		});

		this.container = $('<div/>').appendTo(this.tank);
		$(this.container).css({
			height: '100%',
			width: '100%',
			position: 'relative',
			borderRadius: '100% / 50px',
			border: '1px solid ' + 'black',
			borderTop: 'none',
			background: colorBg,
		}).addClass('_container');

		this.containerTop = $('<div/>').appendTo(this.container);
		$(this.containerTop).css({
			height: this.width / 2,
			width: '100%',
			borderRadius: '50%',
			position: 'absolute',
			background: colorTop,
			border: '1px solid ' + 'black',
			opacity: 0.5,
			zIndex: 10,
		}).addClass('_containerTop');
		
		this.water1 = $('<div/>').appendTo(this.container);
		$(this.water1).css({
			height: this.height / 100 * this.level1 + this.width/2,
			width: '100%',
			position: 'absolute',
			'border-radius': '100% / 50px',
			bottom: 0,
			background: 'color-mix(in srgb, '+this.color1+' 50%, transparent)',
			zIndex: 1,
		}).addClass('_water1');

		this.water1Top = $('<div/>').appendTo(this.water1);
		$(this.water1Top).css({
			height: this.width / 2,
			width: '100%',
			borderRadius: '50%',
			position: 'absolute',
			top: 0,
			background: 'color-mix(in srgb, '+this.color1+' 50%, transparent)',
			zIndex: 3,
		}).addClass('_water1Top');
		
		this.water1Bottom = $('<div/>').appendTo(this.container);
		$(this.water1Bottom).css({
			height: this.width / 2,
			width: '100%',
			borderRadius: '50%',
			position: 'absolute',
			bottom: 0,
			background: 'color-mix(in srgb, '+this.color1+' 50%, transparent)',
			zIndex: 2,
		}).addClass('_water1Bottom');

		this.line = $('<div/>').appendTo(this.container);
		$(this.line).css({
			height: this.width / 2,
			width: '100%',
			borderRadius: '50%',
			position: 'absolute',
			bottom: this.height / 100 * this.level2,
			border: '2px solid ' + this.color2,
			borderBottom: 'none',
			zIndex: 0,
		}).addClass('_water2');

		this.lineFront = $('<div/>').appendTo(this.container);
		$(this.lineFront).css({
			height: this.width / 4,
			width: '100%',
			borderRadius: this.width/2+'px / 100%',
			borderTopRightRadius: 0,
			borderTopLeftRadius: 0,
			position: 'absolute',
			bottom: this.height / 100 * this.level2,
			border: '2px solid ' + this.color2,
			borderTop: 'none',
			zIndex: 3,
		}).addClass('_water2Front');

	}

	setLevel1(level) {
		this.level1 = level;
		$(this.water1).stop().animate({
			height: this.height / 100 * level + this.width/2,
		}, {
		duration: 1000,
		easing: '_easeOutQuint'
		});
	}

	setLevel2(level) {
		$(this.line).stop().animate({
			bottom: this.height / 100 * level,
		}, {
			duration: 100,
			easing: '_easeOutQuint'
		});
		$(this.lineFront).stop().animate({
			bottom: this.height / 100 * level,
		}, {
			duration: 100,
			easing: '_easeOutQuint'
		});
	}
}

jQuery.extend( jQuery.easing, { _easeOutQuint: function (t) { return 1+(--t)*t*t*t*t } });
