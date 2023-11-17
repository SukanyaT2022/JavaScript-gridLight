var count = 0
var num = 1
var array = []
function change2Green(id){

    if(document.getElementById(id).style.backgroundColor=="white"){
        document.getElementById(id).style.backgroundColor = "green";
        array.push(id)
        count = count + 1
        if(count == 8){
          
            change2White()  
        }
    }
  
}
function change2White(){
    array.reverse()
   for(i=0; i<array.length; i++){
    document.getElementById(array[i]).style.backgroundColor = "white";
   wait(1000)
}
       
   
}
function reset(){
    for(i=1; i<=9; i++){
        var id = "box" + i  
        document.getElementById(id).style.backgroundColor = "white";
    }
}