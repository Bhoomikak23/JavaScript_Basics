async function weather() {
    let delhiWeather = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("27 Deg")
        }, 5000)
    }) 

    let bangloreWeather = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("21 Deg")
        },10000)
    })

    delhiWeather.then(alert)
    bangloreWeather.then(alert)

let delhiW = await delhiWeather
let bangloreW = await bangloreWeather
return[delhiW,bangloreW]

}
console.log("Welcome to Weather control room")
let a = weather()
console.log(a)

// =========================================================================

// async function weather() {
//     let delhiWeather = new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve("27 Deg")
//         }, 5000)
//     }) 

//     let bangloreWeather = new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve("21 Deg")
//         },10000)
//     })
//     console.log("Fetching Delhi Weather Please Wait.....")
//     let delhiW = await delhiWeather
//     // console.log("Fetching Delhi Weather:" +delhiW)

//     console.log("Fetching banglore Weather Please Wait.....")
//     let bangloreW = await bangloreWeather
//     // console.log("Fetching banglore Weather:" +bangloreW)  
    
//     return[delhiW,bangloreW]
// }
// console.log("Welcome to Weather control room")
// let a = weather()
// a.then((value) => {
//     console.log(value)
// })
