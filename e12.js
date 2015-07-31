function Spy(target, method){
    var oldMethod = target[method];
    var context = {
        count: 0
    };

    target[method] = function(){
        context.count++;
        return oldMethod.apply(this, arguments);
    };

    return context;
}

module.exports = Spy;
