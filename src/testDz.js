var a = [];
a[0] = 1;
a[2] = 2;
a.push(30)
console.log(a);

a.map(function (item,i) {
    return ++item;
    console.log(i);
})

