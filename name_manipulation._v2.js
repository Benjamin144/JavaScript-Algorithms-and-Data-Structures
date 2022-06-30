function {
    var x = prompt('What is your name?');
    var y = x.slice(0,1);
    var z = x.slice(1, x.length);
    alert('Hello ' + y.toUpperCase() + z.toLocaleLowerCase() + ' ' + surname + ' Your age is ' + age + '. You live in ' + address); 

}