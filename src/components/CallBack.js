//------------------------------------------------------------------------
// const  add=()=>{
//     let name = "pankaj"
//     console.log(name);
// }
// const sub=(a=4, b=6)=>{
//     console.log(a-b);
// }
// const CallBack = (a,b, callBacks1, callBacks2) => {
//      console.log(a+b);
//      callBacks1();
//     callBacks2();
// }
// CallBack(3,5,add, sub)

// export default CallBack


//------------------------------------------------------------------------
// const CallBack=(call_Back2)=>{
//      console.log("callBack1 and call the CallBaxk2")
//      setTimeout(()=>{
//     call_Back2();
// },3000)
// console.log("extra")
// }

// const callBacks2=()=>{
//    console.log("I am callBack2")
// }
//  CallBack(callBacks2)


// export default CallBack;
//------------------------------------------------------------------------



//------------------------------------------------------------------------
// CallBack Hell
let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

const CallBack = (Fruits_name, production_fruit) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[Fruits_name]} was selected`)
        production_fruit();
    }, 2000);
}

const production = () => {
    setTimeout(() => {
        console.log("Production is staered")

        setTimeout(() => {
            console.log("food has been chopped")

            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was  add`)

                setTimeout(() => {
                    console.log("Start the machine")

                    setTimeout(() => {
                        console.log(`selcte container ${stocks.holder[0]}, ${stocks.holder[1]}, ${stocks.holder[2]}`)

                        setTimeout(() => {
                            console.log(`Select Topping ${stocks.toppings[0]}, ${stocks.toppings[1]}`)
                            setTimeout(() => {
                                console.log("Serve Ice Cream")
                            }, 2000)
                        }, 3000)
                    }, 2000)
                }, 1000)
            }, 1000)
        }, 2000)

    }, 0);
}

CallBack(0, production)

export default CallBack;
