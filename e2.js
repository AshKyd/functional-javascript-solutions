module.exports = function(fn, num){
    if(isNaN(num) || num < 0){
        throw 'invalid count';
    }
    for(var i=0; i<num; i++){
        fn();
    }
};
