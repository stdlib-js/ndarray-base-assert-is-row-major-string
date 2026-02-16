/** @license Apache-2.0 */

'use strict';

/**
* Test whether an input value is the string representing row-major order.
*
* @module @stdlib/ndarray-base-assert-is-row-major-string
*
* @example
* var isRowMajorString = require( '@stdlib/ndarray-base-assert-is-row-major-string' );
*
* var bool = isRowMajorString( 'row-major' );
* // returns true
*
* bool = isRowMajorString( 'column-major' );
* // returns false
*
* bool = isRowMajorString( 'foo' );
* // returns false
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
