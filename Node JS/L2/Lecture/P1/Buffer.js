// Buffer is data type

const b = new Buffer.from('abcdABCD');

console.log(b.toString());

b.write("XYZxyzmnopqr");

console.log(b.toString());
