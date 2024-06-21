// let p = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("I am a promise and i am fullfilled")
//     }, 5000)
// })


// ======================================================================

// let p1 = new Promise((resolve,reject)=>{
//     console.log("Promise is pending")
//     setTimeout(()=>{
//         console.log("I am a promise and i am fullfilled")
//         resolve(80)
//     }, 5000)
// })

// let p2 = new Promise((resolve,reject)=>{
//     console.log("Promise is pending")
//     setTimeout(()=>{
//         console.log("I am a promise and i am rejected")
//         reject(new Error("I am an error"))
//     }, 3000)
// })
// console.log(p1,p2)

// =========================================================================

// let p3 = new Promise((resolve,reject)=>{
//         console.log("Promise is pending")
//         setTimeout(()=>{
//             console.log("I am a promise and i am fullfilled")
//             resolve(true)
//         }, 5000)
//     })
    
//     let p4 = new Promise((resolve,reject)=>{
//         console.log("Promise is pending")
//         setTimeout(()=>{
//             console.log("I am a promise and i am rejected")
//             reject(new Error("I am an error"))
//         }, 5000)
//     })

//     p3.then((value) => {
//         console.log(value)
//     })

//     p4.catch((error) => {
//         console.lsole.log(value)
    //         let b = new Promise((resolve, reject) => {
    //             setTimeout(() => {
    //                 resoog("some error occured in p4")
//     })

    // ========================================================================

    // Promise chaining

    // let a = new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             console.log("Resolve after 3 secs")
    //             resolve(100)
    //         }, 5000)
    //     })
    //     a.then((value) => {
    //         conlve("Promise 2")
    //             }, 3000)
    //         })
    //         return b
    //     }).then((value) => {
    //         console.log("We are done")
    //         return 2
    //     }).then(() => {
    //         console.log("Done")
    //     })

    // ================================================================

    // const loadscript = (src) => {
    //     return new Promise((resolve, reject) => {
    //         let script = document.createElement("script")
    //         script.type = "text/javascript"
    //         script.src = src
    //         document.body.appendChild(script)
    //         script.onload = (script) => {
    //             resolve("Script has been loaded")
    //         }
    //         script.onerror = () => { reject(0)}
    //     })
    // }
    // let x = loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
    // x.then((value) => {
    //     console.log(value)
    // }).catch((error) => {
    //     console.log("We are sorry but we are having problems loading this script")
    // })

    // =======================================================================

    // Promise API - application program interface

    // let a1 = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve("value 1")
    //     },10000)
    // })

    // let a2 = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve("value 2")
    //     }, 2000);
    // })

    // let a3 = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve("value 3")
    //     }, 1000);
    // })

    // a1.then((value) => {
    //     console.log(value)
    // })

    // a2.then((value) => {
    //     console.log(value)
    // })

    // a3.then((value) => {
    //     console.log(value)
    // })

    // ==================================================================

    // API Methods
    // 1-promise.all

    // let promise_all = Promise.all([a1,a2,a3])
    // promise_all.then((value) => {
    //     console.log(value)
    // })

    // ======================================================================

    // 2-Promise.allSettled
    // it gives output with value and status of promise

    // let a4 = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve("value 1")
    //     }, 1000);
    // })
    // let a5 = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         reject(new Error("Error"))
    //     },2000)
    // })
    // let a6 = new Promise((resolve,reject) => {
    //     setTimeout(() => {
    //         resolve("value 3")
    //     }, 3000);
    // })

    // let all_settle = Promise.allSettled([a4,a5,a6])
    // all_settle.then((value) => {
    //     console.log(value)
    // })

    // =========================================================================

    // 3-promise.race
    // it gives an output which is resolved first including errors 

    // let a4 = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve("value 1")
    //         }, 2000);
    //     })
    //     let a5 = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             reject(new Error("Error"))
    //         },1000)
    //     })
    //     let a6 = new Promise((resolve,reject) => {
    //         setTimeout(() => {
    //             resolve("value 3")
    //         }, 3000);
    //     })

    //     let promise_all = Promise.race([a4,a5,a6])
    //     promise_all.then((value) => {
    //         console.log(value)
    //     })

    // ==============================================================================

    // 4-promise.any
    // it gives an output which is resolved first excluding errors 

    // let a4 = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve("value 1")
    //         }, 2000);
    //     })
    //     let a5 = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             reject(new Error("Error"))
    //         },1000)
    //     })
    //     let a6 = new Promise((resolve,reject) => {
    //         setTimeout(() => {
    //             resolve("value 2")
    //         }, 3000);
    //     })
    // let promise_all = Promise.any([a4,a5,a6])
    // promise_all.then((value) => {
    //     console.log(value)
    // })

    // ===============================================================