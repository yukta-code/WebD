// Previous use

// var button=document.getElementById("abc")
// button.addEventListener("click",()=>{
//     //this is infact a callback

// })


// Example

firstfunc("suhani",function(){
    console.log("callback of first func")
    secondfunc(()=>{
        console.log("callback of the second func")
        thirdfunc(()=>{
            console.log("callback of thrid func")
            fourthfunc(()=>{
                console.log("finallyyy here")
                ///
            })
        })
    })
})

function firstfunc(name,callback){
    console.log("in first func")
    setTimeout(()=>{
        console.log("in set timeout of func1")
        callback()
    },2000)
}

function secondfunc(callback){
    setTimeout(()=>{
        console.log("in set timeout of func2")
        callback()
    },1000)
}

function thirdfunc(callback){
    setTimeout(()=>{
        console.log("in set timeout of func3")
        callback()
    },1000)
}

function fourthfunc(callback){
    setTimeout(()=>{
        console.log("in set timeout of func4")
        callback()
    },1000)
}