// btn.addEventListener('click',function(e){
//     alert("Hello World-1!!!")
// })
// btn.addEventListener('click',function(e){
//     alert("Hello World-2!!!")
// })

// ===============================

let x = function(e) {
    alert("Hello World-1")
}
let y = function(e) {
    alert("Hello World-2")
}

btn.addEventListener('click',x)
btn.addEventListener('click',y)

let a = prompt("Enter a number")
if (a == 2){       // here we can also give condition also like (a >= 10)
    btn.removeEventListener('click',y)
}

// ================================

