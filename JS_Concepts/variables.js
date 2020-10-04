//let const var

//scopes- diff between let and var/const
//let has a block scope {}
//var and const have a functions scope


//redeclaration-diff between var const
//var,let can be redeclared, const cannot be redecalred


//initialization-diff between const
//const variables need to be initialized
//var and let may or may not be initialized

function abc(){
   var a=5
   if(a==5){
       let b=10
       console.log(b)
       //b can be used only in if block
   }
   console.log(b) //will give error
}


abc()