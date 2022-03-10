function myfun(){
    var text = document.getElementById('textdiv').value;
       text = text.trim();
      if(text.length > 0){
        document.getElementById('sp').innerText = text;
     }else{
        document.getElementById('sp').innerText = "User";
     }
    
}