function jumVolumeDuaKubus(a, b) {
    var total;
    var volumeA;
    var volumeB;

    volumeA = a*a*a;
    volumeB = b*b*b;

    total = volumeA + volumeB

    return total;
}

console.log(jumVolumeDuaKubus(8,3));
alert(jumVolumeDuaKubus(10,4));