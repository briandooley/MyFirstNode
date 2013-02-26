exports.myFunction = function(params, callback) {
  var num = params.num;
  if(num > 10){
    return callback({err: 'Num too large'}, {result: num});
  }
  callback(undefined, {result: num});
};

exports.greenFunction = function(params, callback) {
  //var num = params.num;
  //callback(undefined, {result: num});
  return callback(undefined, {result: 'green button'});
};

exports.redFunction = function(params, callback) {
    //return callback({err: 'Num too large'}, {result: num});
  return callback({err: 'Num too large'}, {result: num});
};
