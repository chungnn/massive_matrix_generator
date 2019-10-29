var fs = require('fs');

console.log(process.argv);

var filename = process.argv[2];
var M_size = process.argv[3];
var N_size = process.argv[4];

M_size_arr = M_size.split("x");
N_size_arr = N_size.split("x");

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor((Math.random() * (max - min + 1) + min ) * 100) / 100;
}

var i = 1;
var j = 1;

function appendToFile(){
	var file = fs.createWriteStream(filename, { 'flags': 'a' });
	file.on('error', function(err) {
		console.log(err);
	});
	if(j > M_size_arr[1]) {
		j = 1;
		//console.log('i=' + i + '\n');
		i++;
	}
	if(i > M_size_arr[0]) {
		return;
	}
	
	for(var v = j ; ((v <= j + 100000) && (v <= M_size_arr[1])); v++ ) {
		file.write('M,'+ i + ',' + v + ',' + randomIntFromInterval(0,2) + '\n');
		file.write('N,'+ i + ',' + v + ',' + randomIntFromInterval(0,2) + '\n');
	}
	j += 100000;
	
	file.end();
	setTimeout(function(){
		appendToFile();
	},0);
}

appendToFile();




/*
for(var i = 1; i <= M_size_arr[0]; i++) {
	for(var j = 1; i <= M_size_arr[1]; j++) {
		file.write('M,'+ i + ',' + j + ',' + randomIntFromInterval(0,2) + '\n');
	}
}
/*
for(var k = 1; k <= N_size_arr[0]; k++) {
	for(var l = 1; l <= M_size_arr[1]; l++) {
		file.write('N,'+ k + ',' + l + ',' + randomIntFromInterval(0,2)+ '\n');	
	}
}
/*
var j=0;
while( j < 100000) {
	file.write('M,'+ (Math.floor(Math.random() * M_size_arr[0]) + 1) + ',' + (Math.floor(Math.random() * M_size_arr[1]) + 1 ) + ',' + randomIntFromInterval(0,2) + '\n');
	file.write('N,'+ (Math.floor(Math.random() * N_size_arr[0]) + 1) + ',' + (Math.floor(Math.random() * N_size_arr[1]) + 1 ) + ',' + randomIntFromInterval(0,2)+ '\n');	
	j++;
}
*/
