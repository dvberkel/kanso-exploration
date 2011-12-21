exports.fibonacci = function(n){
	var a0 = 0, a1 = 1;
	for (var index = 0; index < n; index++) {
		var tmp = a0;
		a0 = a1;
		a1 = tmp + a0;
	}
	return a0;
}
