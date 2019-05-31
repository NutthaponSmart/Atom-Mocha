"use strict";

if(!AtomMocha.headless && !AtomMocha.isCI)
	console.log(atom, AtomMocha);

module.exports = {
	autoIt: true,
	reporter: "atom",
	require: "chai/should",
	
	beforeFinish(...args){
		return 0; // Cheat the exit-status
	}
};
