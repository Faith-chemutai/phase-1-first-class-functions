
function receivesAFunction(daima){
  daima();
}


const returnsANamedFunction = () =>receivesAFunction


function returnsAnAnonymousFunction(){
  return function(){
      
  }
}