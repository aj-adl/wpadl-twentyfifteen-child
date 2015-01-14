// Fire as soon as it loads, later we know = more repaints :(

if( !Modernizr.svg ){ document.documentElement.className += " no-svg";}

// Standard No Conflict wrappers. 
jQuery(document).ready(function($) {

	// Scroll Reveal Configuration 

	var srConfig = {
		vFactor: 0.15,
	};

	// Initialize Scroll Reveal
	window.sr = new scrollReveal( srConfig );


	//  $$$$$$$\  $$\ $$\ $$\ $$\                           $$$$$$$\            $$\ $$\                               
	//  $$  __$$\ \__|$$ |$$ |\__|                          $$  __$$\           $$ |$$ |                              
	//  $$ |  $$ |$$\ $$ |$$ |$$\  $$$$$$\  $$$$$$$\        $$ |  $$ | $$$$$$\  $$ |$$ | $$$$$$\   $$$$$$\   $$$$$$$\ 
	//  $$$$$$$\ |$$ |$$ |$$ |$$ |$$  __$$\ $$  __$$\       $$ |  $$ |$$  __$$\ $$ |$$ | \____$$\ $$  __$$\ $$  _____|
	//  $$  __$$\ $$ |$$ |$$ |$$ |$$ /  $$ |$$ |  $$ |      $$ |  $$ |$$ /  $$ |$$ |$$ | $$$$$$$ |$$ |  \__|\$$$$$$\  
	//  $$ |  $$ |$$ |$$ |$$ |$$ |$$ |  $$ |$$ |  $$ |      $$ |  $$ |$$ |  $$ |$$ |$$ |$$  __$$ |$$ |       \____$$\ 
	//  $$$$$$$  |$$ |$$ |$$ |$$ |\$$$$$$  |$$ |  $$ |      $$$$$$$  |\$$$$$$  |$$ |$$ |\$$$$$$$ |$$ |      $$$$$$$  |
	//  \_______/ \__|\__|\__|\__| \______/ \__|  \__|      \_______/  \______/ \__|\__| \_______|\__|      \_______/ 

	// Super Not Performance Big Header Such Wow Very Remove Minify Yes

	// All Hook events triggered by this JS are on #page

	// All click events are namespaced with 'billz'

	// Using an object for better code organisation rather than a couple large, messy functions

	var billz = {

		running: false,
		numberOf: 500,
		setup: function() {

			// Bind the click event of the button
			$('#billions').on('click.billz', billz.create);

			// In Case someone wants to hook in (WTF WHY??)
			$('#page').trigger("billsAfterSetup");


		},
		randRange: function(minNum, maxNum) {

			// function to generate a random number range.
			return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);

		},
		create: function() {

			//Stop Multiple Instances
			if (billz.running) {
				return;
			}

			// Status
			billz.running = true;

			// Create Container Div (now as document fragment)
			var $bills = $('<div></div>', {'class':'bills'});

			$('#page').trigger('billsBeforeCreate');
			// Loop to create money
			for( i=1;i<billz.numberOf;i++) {

				// Random numbers can be adjusted to cater for screen size,
				var billLeft = billz.randRange(0,1800) + 'px';

				var billDelay = billz.randRange(0, 7000)+'ms';
				var atts = 'left: ' + billLeft + '; top: -60px; animation-delay: ' + billDelay + '; -moz-animation-delay:' + billDelay + '; -webkit-animation-delay: ' + billDelay + ';';
				var thisBill = {
					id: 'bill'+i,
					'class': 'bill',
					style: atts,
					text: '$'
				};
				// Append $$$$$ 
				$('<div></div>', thisBill ).appendTo( $bills );
			}

			$bills.appendTo('#page');

			// Hook in after creation, maybe play some sweet tunes yo. 
			$('#page').trigger('billsAfterCreate');

			billz.makeStopButton();

		},
		makeStopButton: function() {

			// Append Stop Button
			$('#page').append('<button class="stop-button" id="stop-button">STOP</button>');
			// Bind Stop Events
			$('.stop-button').on( 'click.billz', billz.playtimeOver );

		},
		playtimeOver: function() {
			// Hook in before we destroy everything
			$('#page').trigger('billsBeforeRemove');

			// HULK SMASH
			$( '.bills' ).children().stop().remove();
			$('.stop-button').remove();
			billz.running = false;

			$('#page').trigger('billsAfterRemove');

		}

	};

	// Run at $.ready() to kick things off
	billz.setup();

	// End of BILLZ / Billion Dollars Script

});