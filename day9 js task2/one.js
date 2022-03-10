const details = {
	name: "Taj",
	room_rate :240.00,
	discount_percent: 15+"%",
	discounted_rate : function(){
		var n = parseInt(this.discount_percent);
		var a=  this.room_rate*n/100;
		return this.room_rate-a;
	}
};

document.getElementById('name').innerText = details.name;
document.getElementById('rate').innerText  = "Rs." + details.room_rate;
document.getElementById('discount').innerText  = "Discounted Rate= Rs." +details.discounted_rate();

let days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let date = new Date();

let valid_date = new Date(date);
valid_date.setDate(valid_date.getDate()+7);
let d = valid_date.getDate();
let y = valid_date.getFullYear();
let m = valid_date.toLocaleString('en-us', {month : 'long'});
document.getElementById('valid').innerText = "("+d+" "+m+" "+y+")";
document.getElementById('sp').innerText="Offer Expirses next "+ days[valid_date.getDay()]; 

