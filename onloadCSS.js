/*!
onloadCSS: adds onload support for asynchronous stylesheets loaded with loadCSS.
[c]2014 @zachleat, Filament Group, Inc.
Licensed MIT
*/

/* global navigator */

/* exported onloadCSS */
function onloadCSS( ss, callback ) {
	if( "addEventListener" in window ){
		ss.addEventListener( "load", callback );
	}

	// This code is for browsers that don’t support onload, any browser that
	// supports onload should use that instead.
	// No support for onload:
	//	* Android 4.3 (Samsung Galaxy S4, Browserstack)
	//	* Android 4.2 Browser (Samsung Galaxy SIII Mini GT-I8200L)
	//	* Android 2.3 (Pantech Burst P9070)

	// Weak inference targets Android < 4.4
	if( "isApplicationInstalled" in navigator && "onloadcssdefined" in ss ) {
		ss.onloadcssdefined( callback );
	}
}
