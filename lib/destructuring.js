// 解构赋值
// ES6允许按照一定的模式从数组或者对象中提取值，然后对变量进行赋值，这个过程被称作解构

// 模式匹配，只要等号两端的模式相同，左边的变量会被赋予对应的值
let [a, b, c] = [1, 2, 3];
let [fit, [[sed], thd]] = [1, [[2], 3]];
// 有时候会出现不全匹配的情况
let [ , , third] = ["foo", "bar", "baz"];
let [head, ...tail] = [1, 2, 3, 4]
console.log("head = " + head + ", tail = " + tail);
// 如果模式匹配不成功，那么变量的值就是undefined，比如没有值，或者匹配数量不对，即值少于变量

// 但是还是有区别的，如果数组中的值是大于变量的话，那么结构仍然可以成功,称之为不完全解构。如果等号右边的不是数组之类可遍历的解构，那么解构依然会报错
let [x, y] = [1, 2, 3]
//  error
// let [foo] = false;// 1, NaN, undefinded, null, {}
// 这些报错的原因就是等号右边是值 或者转为对象之后没有iterator接口，或者本身就不具备Iterator接口{}

// 实际上，只要数据结构具有Iterator接口，都可以采用数组形式的解构赋值
function* fib() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}
let [first, second, third1, fourth, fifth, sixth] = fib();
console.log("sixth in fib() = " + sixth);

// 同时，解构赋值允许指定默认值，，如果一个数组成员严格等于undefined就会使用默认值，反过来说，如果一个数组成员不严格等于undefined，那么默认值不生效
let [x1 = 1] = [undefined] //x1=1,使用默认值
let [x2 = 1] = [null] // x2=null，解构赋值
// 默认值是惰性求值的，只有在用到时候才会求值
// 默认值可以引用解构赋值的其他变量，但是变量必须已经声明，其他原则按照之前数组的赋值原则
let [x3 = 1, y3 = x3] = []; //使用默认值，y3引用x3， x3=1，y3=1
let [x4 = 1, y4 = x4] = [2]; //默认值无效，y4引用x4， x4=2，y4=2
let [x5 = 1, y5 = x5] = [1,2]; //默认值均无效，y5引用x5无效， x5=1，y5=2，这里的y5不是1

// 对象的解构赋值
// 数组的解构赋值来自于数组元素的默认次序，变量的取值来源于其位置，对象的属性是没有顺序的，变量必须与属性同名才能取到正确的值

// 字符串的解构赋值

// 数值和布尔值的解构赋值

// 函数参数的解构赋值

// 圆括号的问题


