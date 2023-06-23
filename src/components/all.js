

//Synchronous function programming
// const Study = () => {
//   return `hello my name is ${name}`;
// }
// const name = "Pankaj";
// const greeting= Study(name)
// console.log(greeting)


// //asynchronous function programming

// setTimeout(()=>{
//     console.log("Hello my frined")
// },3000)

// console.log("Hello marktine")

// export default Study


const Study = () => {
    //   var Promise1 = new Promise((resolve, reject)=>{
    //     // console.log("yes Promised Callled");
    //     // let student={
    //     //     name:"Pankaj",
    //     //     age:22,
    //     //     address:"bihra"
    //     // }
    //     // resolve(student)
    //     reject('something went wrong')
    //   })

    //   Promise1.then((value)=>{
    //     console.log(value)
    //   })

    //    .catch(err=>{
    //     console.log("error"+ err)
    //    })

//     let Promise1 = new Promise((reslove, reject) => {
//         console.log("Promise is called");
//         let student;
//         setTimeout(() => {
//             student = {
//                 name: "Pankaj",
//                 age: 22,
//                 address: "bihra"
//             }
//             reslove(student)
//              reject(new Error("something went wrong in Promis1") )
//         }, 2000)
//     }
//     )
// //------------------------------------------------
//     let Promise2 = new Promise((resolve, reject)=>{
//         let student = {
//             name:"Ravi",
//             age:24
//         }
//         // resolve(student)
//         reject(new Error("something went wrong Promise2") )
//     })
//     //------------------------------------------------
//     let Promise3 = new Promise((resolve, reject)=>{
//         let student = {
//             name:"nishant",
//             age:24
//         }
//         resolve(student)
//     })
// //   Promise.all([
// //     Promise1.catch((err)=>err),
// //      Promise2.catch((err)=>err),
// //       Promise3.catch((err)=>err)
// // ]).then((value)=>
// // {
// //     console.log(value)
// //     // console.log(value[0])
// //     // console.log(value[1])
// //     // console.log(value[2])
// // })

// //allSeteld

// Promise.allSettled([Promise1,Promise2,Promise3]).then((val)=>console.log(val))



//Promise.rach()
// let x = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//        let student = {
//             name:"Pankaj",
//             age:22,
//             address:"Bihar"
//         }
//         resolve(student)
//         reject(new Error("Wroong in X"))
//     },5000)
// })

// let y = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//        let student = {
//             name:"Nishat",
//             age:22,
//             address:"Bihar"
//         }
//          resolve(student)
//         reject(new Error("Wroong in X"))
//     },3000)
// })

// let z = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//        let student = {
//             name:"Ravi",
//             age:22,
//             address:"Bihar"
//         }
//         resolve(student)
//         reject(new Error("Wroong in X"))
//     },7000)
// })
// Promise.race([x,y,z]).catch((err)=>err).then((val)=>console.log(val))


// await async

// function getApiData(){
//     let userInfo={
//         userId:12,
//         userName:"Pankaj",
//         userAge: 22
//     }
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(userInfo)
//             reject(new Error("some error"))
//         },5000)
//     })
// }

  
// async function homePage(){
//     let apiData = await getApiData().catch((err)=>{console.log(err)})
//     console.log(apiData );
//     console.log("Home Page")
//   }
//   homePage()


// GET 

// var  apiUrl = "https://api.zippopotam.us/us/33162";
// // var x = JSON.parse(apiUrl)
// fetch(apiUrl)
//     .then(response=> response.json())
    
//     .then(response=>{
//         console.log(response)
//     })

//   .catch((err)=>console.log("api failed",err))  



// //asyan await Get

//  async function getData(){
//     console.log("first console")
//     var  apiUrl = "https://api.zippopotam.us/us/33162";
//     let response =await fetch(apiUrl);
//     response = response.json();
//     return new Promise((resolve, reject)=>{
//         resolve(response);
//         reject(new Error("something went wrong"))
//     })
// }

// async function getHomeData(){
//     console.log("home Pgae");
//     let apiData = await getData().catch((err)=>err);
//     console.log(apiData);
// }
// getHomeData();



// //asyan await Post

 async function postData(){
    console.log("first console")
    var  apiUrl = "https://api.zippopotam.us/us/33162";
    let options={
        method:'POST',
        Headers:{},
        body:JSON.stringify({
          name:"pankaj",
          contact:286863863
        })
    }
     let response =await fetch(apiUrl, options);
    response = response.json();
    return new Promise((resolve, reject)=>{
        resolve(response);
        // reject(new Error("something went wrong"))
    })
}

async function getHomeData(){
    console.log("home Pgae");
    let apiData = await postData();
    console.log(apiData);
}
getHomeData();


}


export default Study



