var uniqueInOrder = function(iterable){
    if (iterable.length === 0){
        return [];
    }
    var toIterate = typeof(iterable) === 'string' ? iterable.split('') : iterable;
    var retval = [];
    retval.push(toIterate[0])
    for (var i = 1; i < toIterate.length; i++){
        if (retval[retval.length - 1] === toIterate[i]){
            continue;
        }
        retval.push(toIterate[i]);
    }
    
    return retval;
}


console.log(uniqueInOrder('AAAABBBCCDAABBB'))