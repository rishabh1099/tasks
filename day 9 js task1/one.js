function myfun(){
	 let firstname = "Gaurav";
	 let lastname = "Mandhyan";
     document.getElementById('name').innerText = firstname + " " + lastname;
     document.getElementById('head').innerText = firstname;
     let name = document.getElementById('name').innerText;
     var num = name.length;
     var subtotal = num * 5;
     var shipping = 7;
     var total = subtotal+shipping;

    document.getElementById('total_letters').innerText = num;
   document.getElementById('subtotal').innerText = "$"+subtotal;
   document.getElementById('shipping').innerText = "$"+shipping;
   document.getElementById('total').innerText = "$"+total;

}