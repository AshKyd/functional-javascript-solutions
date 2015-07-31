function getDependencies(tree, deps){
    deps = deps || [];

    if(!tree || !tree.dependencies){
        return deps;
    }

    Object.keys(tree.dependencies).forEach(function(depName){
        var thisDep = tree.dependencies[depName];
        var key = depName + '@' + thisDep.version;
        if(deps.indexOf(key) === -1){
            deps.push(key);
        }
        if(thisDep.dependencies){
            getDependencies(thisDep, deps);
        }
    });

    deps.sort();

    return deps;
}

module.exports = getDependencies;
