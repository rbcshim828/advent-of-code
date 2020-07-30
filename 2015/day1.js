const fs = require('fs');

fs.readFile('./floor.txt', (err, data) => {
  console.time('funchallenge');
  if(err){
    console.log(err);
  }

  let temp = data.toString();
  console.log("temp", temp);

  let up = temp.match(/\(/g || []).length;
  console.log("up", up);
  //
  let down = temp.match(/\)/g || []).length;
  console.log("down", down);

  let floor = up - down ;
  console.log("floor", floor);
  console.timeEnd('funchallenge');

  
})
