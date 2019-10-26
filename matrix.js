var fs = require('fs');

console.log(process.argv);

var filename = process.argv[2];
var M_size = process.argv[3];
var N_size = process.argv[4];

M_size_arr = M_size.split("x");
N_size_arr = N_size.split("x");

var file = fs.createWriteStream(filename, { 'flags': 'a' });
file.on('error', function(err) {
	console.log(err);
});

/*
for(var i = 1; i <= M_size_arr[0]; i++) {
	for(var j = 1; i <= M_size_arr[1]; j++) {
		file.write('"M,'+ i + ',' + j + '" "' + (Math.random().toFixed(2)) + '"\n');
	}
}

for(var k = 1; i <= N_size_arr[0]; k++) {
	for(var l = 1; i <= M_size_arr[1]; l++) {
		file.write('"N,'+ k + ',' + l + '" "' + (Math.random().toFixed(2)) + '"\n');
	}
}
*/
var j=0;
while( j < 20000) {
	file.write('M,'+ (Math.floor(Math.random() * M_size_arr[0]) + 1) + ',' + (Math.floor(Math.random() * M_size_arr[1]) + 1 ) + ',' + (Math.random().toFixed(2)) + '\n');
	file.write('N,'+ (Math.floor(Math.random() * N_size_arr[0]) + 1) + ',' + (Math.floor(Math.random() * N_size_arr[1]) + 1 ) + ',' + (Math.random().toFixed(2)) + '\n');	
	j++;
}
file.end();