var s = '';

for(var i = 10; i > 0; i--){
    for(var x = 0; x < i; x++){
        s += '*';
    }
    s += '\n';
}

console.log(s);