/*function getTempCallback (location, callback) {
  callback(undefined, 78);
  callback('City not found');
}

getTempCallback('Oxford', function (err,temp) {
  if (err) {
    console.log('error', err);
  } else {
    console.log('sucsess', temp);
  }
});

function getTempPrommise (location) {
  return new Promise(function(resolve, reject){
    setTimeout(function() {
      resolve(79);
      reject('City not found');
    }, 1000);

  });
}

getTempPrommise('Oxford').then(function (temp){
  console.log('Success', temp );
}, function (err){
    console.log('error', err);
});

*/

// Chaange Area

function addPromise (a,b) {
    return new Promise(function(resolve, reject){
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('A and B need to be a numbers');
      }
    });
}


addPromise(2, 3).then(function(sum) {
  console.log('succes', sum);
}, function(err) {
  console.log('error', err);
});


addPromise('arty', 5).then(function(sum) {
  console.log('this should not show up', sum);
}, function(err) {
  console.log('This should appear', err);
});
