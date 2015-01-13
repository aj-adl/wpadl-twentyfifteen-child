// Standard No Conflict wrappers. 
jQuery(document).ready(function($) {

	// Scroll Reveal Configuration 

	var srConfig = {
		vFactor: 0.15,
	};

	// Initialize Scroll Reveal
	window.sr = new scrollReveal( srConfig );


	// All Hook events triggered by this JS are on #page

	// All click events are namespaced with 'billz'

	// Using an object for better code organisation rather than a couple large, messy functions

	var billz = {


		numberOf: 500,
		setup: function() {

			// Bind the click event of the button
			$('#billions').on('click.billz', billz.create);
			
		},
		randRange: function(minNum, maxNum) {

			// function to generate a random number range.
			return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);

		},
		create: function() {

			// Append Container Div
			$('#page').append('<div class="bills"></div>');

			// Loop to create money
			for( i=1;i<billz.numberOf;i++) {

				// Random numbers can be adjusted to cater for screen size,
				var billLeft = billz.randRange(0,1800);
				var billTop = billz.randRange(-1500,1600);

				// Append $$$$$ 
				$('.bills').append('<div class="bill" id="bill'+i+'">$</div>');
				$('#bill'+i).css('left',billLeft);
				$('#bill'+i).css('top',billTop);
			}

		}

	};

	// Run at $.ready() to kick things off
	billz.setup();

	// End of BILLZ / Billion Dollars Script

});