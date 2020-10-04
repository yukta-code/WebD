var url="http://numbersapi.com/42"


// fetch("http://dummy.restapiexample.com/api/v1/employees")
// Refer to list of github apis to make your own project- in resources.txt

fetch(url).then((data)=>{
    if(data.status!=200){
        return
    }else{
        return data.text()
    }
}).then((textdata)=>{
    console.log(textdata)
    // p=document.getElementById("para")
    // p.innerHTML=textdata
})