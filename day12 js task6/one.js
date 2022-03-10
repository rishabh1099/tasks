counter = 0;
var a = ["cold coreal", "Ice Cream", "Honey", "Olive Oil"];
for(i=0; i<a.length; i++){
    var ul = document.getElementById('list');
    var item = document.createElement('li');
    item.setAttribute("id", "item"+counter);
    item.setAttribute("class","food");
    item.innerHTML=a[i];
    ul.appendChild(item);
    counter ++;
   
}
console.log("length"+a.length)

remover = counter-1;
// console.log("Counter"+counter);
var adder = 1;
function myfun(){
   
    if(adder == 1){
        
        var new_item = document.getElementById('list');
        var item5 = document.createElement('li');
        item5.setAttribute("id", "item"+counter);
        item5.setAttribute("class","food");
        item5.innerHTML = "Air Freshner";
        new_item.appendChild(item5);
        adder++;
        counter++;
        remover++;
    }
}



// console.log("remover"+remover);
function fun(){
    
    
     if(remover>=0){
        var n = document.getElementById(`item${remover}`).id;
        document.getElementById(n).remove();
        console.log(n);
        remover--;
        counter--;
        console.log(remover);
     }
     
   
}
