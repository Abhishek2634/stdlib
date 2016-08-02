'use strict';

// MODULES //

var stdlib = require( './stdlib.js' );
var isObject = require( stdlib+'@stdlib/utils/is-object' ); // TODO: plain object
var isString = require( stdlib+'@stdlib/utils/is-string' ).isPrimitive;


// VALIDATE //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {string} [options.dir] - root directory from which to search for modules
* @returns {(Error|null)} error object or null
*
* @example
* var opts = {};
* var options = {
*     'dir': '/path/to/lib/node_modules/@stdlib/math'
* };
*
* var err = validate( opts, options );
* if ( err ) {
*    throw err;
* }
*/
function validate( opts, options ) {
	if ( !isObject( options ) ) {
		return new TypeError( 'invalid input argument. Options argument must be an object. Value: `' + options +
			'`.' );
	}
	if ( options.hasOwnProperty( 'dir' ) ) {
		opts.dir = options.dir;
		if ( !isString( opts.dir ) ) {
			return new TypeError( 'invalid option. `dir` option must be a primitive string. Option: `' + opts.dir + '`.' );
		}
	}
	return null;
} // end FUNCTION validate()


// EXPORTS //

module.exports = validate;
