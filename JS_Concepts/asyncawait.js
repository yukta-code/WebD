// Previous use

// var button=document.getElementById("abc")
// button.addEventListener("click",()=>{
//     //this is infact a callback

// })


// Example


async function simple(){
    await firstfunc()
    await secondfunc()
    await thirdfunc()
    await fourthfunc()
}

function firstfunc(name){
    console.log("in first func")
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("in set timeout of func1")
            res()
        },2000)
    })
    
}

function secondfunc(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("in set timeout of func2")
            res()
        },1000)
    }) 
}

function thirdfunc(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("in set timeout of func3")
            res()
        },1000)
    })
}

function fourthfunc(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("in set timeout of func4")
            res()
        },1000)
    })
}

simple()