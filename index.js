var count = 0
var num = 1
var array = []
async function change2Green(id){
//only white box when click it change to green color
    if(document.getElementById(id).style.backgroundColor=="white"){
        document.getElementById(id).style.backgroundColor = "green";
        array.push(id)// push which box bu order in array
        count = count + 1 // if all 8 boxes click then change to white color
        if(count == 8){
            await sleepNow(1000)
            change2White()  
        }
    }
  
}
async function change2White(){
    array.reverse()
    //loop change every box to white color
   for(i=0; i<array.length; i++){
    document.getElementById(array[i]).style.backgroundColor = "white";

 await sleepNow(1000)
 
}
  count = 0     
   
}
//when refresh change everyhting to white
function reset(){
    for(i=1; i<=9; i++){
        var id = "box" + i  
        document.getElementById(id).style.backgroundColor = "white";
    }
}
//sleepnow function which make it delay
const sleepNow = (delay) => new Promise((resolve) => setTimeout(resolve, delay))