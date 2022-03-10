var products = [
    {
        "name": "shirt",
        "img": "x.png",
        "price": "1000/-"
    },
    {
        "name": "T-shirt",
        "img": "z.png",
        "price": "3000/-"
    },
    {
        "name": "Formals",
        "img": "y.png",
        "price": "2000/-"
    }
];

var n = 1;
var div = '<div id="container">';
div += `<div id="heading">`;
div += `<h1>${'Shopping Site'}</h1><br>`;
div += `</div><br>`;
div += `<div id="items">`;
for (i in products) {

    div += `<div id="item${+n}">`;
    div += ` <h3 id="name${+n}">${products[i].name}</h3> <img src="${products[i].img}">`;
    div += `<div id="content"><p>${products[i].price}</p> <button onclick="cart(${i})">${'Add to Cart'}</button></div>`;
    div += `</div>`;
    n++;
}
div += `</div>`;
div += '</div>';
document.write(div);
//  ------------------------------_Add To cart Here---------------------------

var main = [];
var it = [];    // it store all items added in Cart
var total = [];  // for removal of items from cart
function cart(i) {
    counter = 1;
    if (main.includes(i) == true) {
        counter++;
        it.push(i);
       var z = check(it, i);
       // check(it, i);
        document.getElementById('quantity' + i).textContent = z;
        addprice(i, z);
    } else {
        main.push(i);
        it.push(i);
        var n = check(it, i); // for quantity of products
        
        document.getElementById('myCart').style.display = 'block';
        document.getElementById('totalPrice').style.visibility = 'visible';
        div = `<div id='container${i}' class='product-container'>`;
        div += `<div id="left">`;
        div += ` <img src="${products[i].img}" id="left_img">`;
        // div += `<input type="number" id="quantity${i}" value='${n}'>`;
        div += `<div id="left-footer">`;
         //div += `<input type="number" onkeydown="checked(${i})" id="quantity${i}" value='${n}'>`;
         div += `<span id="number">Qunatity- <p id="quantity${i}">${n}</p></span>`;
         div += `<span onclick="checked(${i})" class="sp"><button>+</button></span><span onclick="removequantity(${i})" class="sp"><button>-</button></span>`;
        div += `</div>`;
        div += `</div>`;
        div += `<div id="right">`;
        div += `<h2>Products Details</h2><br>`;
        div += `<h3>Name - ${products[i].name}</h3>`;
        div += `<h1>Price - ${products[i].price}</h1>`;
        div += `<h3 id="salePrice${i}">Sale Price - </h3>`;
        div += `<button onclick="remove(${i})">Remove</button>`;
        div += `</div>`;
        div += `</div>`;

        document.getElementById('add').innerHTML += div;
        
        addprice(i, n);
    }
}
// ------------ to check the number of quantity------------------
function check(it, i) {
     // alert('caller');

    count = 0;
    // console.log(count);console.log(it),console.log(i);
    for (x = 0; x < it.length; x++) {
        if (it[x] == i)
            count++;
    }
    return count;
    

}

function checked(i){
     count = 0;
    it.push(i);
    for (x = 0; x < it.length; x++) {
        if (it[x] == i)
            count++;
    }
    document.getElementById('quantity' + i).textContent = count;
        addprice(i, count);

}
// ---------------------to remove item from cart----------------
function remove(i) {
    for (x = 0; x < it.length;) {
        if (it[x] == i) {
            it.splice(x, 1);
        } else {
            x++;
        }
    }
      for (x = 0; x < main.length;) {
        if (main[x] == i) {
            main.splice(x, 1);
        } else {
            x++;
        }
    }
    document.getElementById('container' + i).remove();
    totall(i);
    if (it.length == 0){
        document.getElementById('myCart').style.display = 'none';
        document.getElementById('totalPrice').style.visibility = 'hidden';
    }
}
// ------------------------ decrement Quantity-----------------------


function removequantity(i) {
    var n = document.getElementById('quantity' + i).innerText;
    p = parseInt(n);
    if (p > 1) {
        p = p - 1;
        document.getElementById('quantity' + i).innerText = p;

        addprice(i, p);
    } else {
        document.getElementById('quantity' + i).innerText = p;
        addprice(i, p);
    }

}
// ----------------------for price as per quantity-----------
function addprice(i, p) {
    var item_price = products[i].price;
    item_price = parseInt(item_price);
    var res = item_price * p
    document.getElementById('salePrice' + i).textContent = res;
    sum(i);
}
// ----------------------total price of all items-------------
function sum(i) {
    if (total.includes(i) == false) {
        total.push(i);
    }
   
    var result = 0;
    if (total.length > 0) {
        for (x = 0; x < total.length; x++) {
            var res = document.getElementById('salePrice' + total[x]).textContent;
            var n = parseInt(res);
            result = result + n;
        }
    }
    document.getElementById('sum-price').textContent = result;
    
}
function totall(i) {
    for (x = 0; x < total.length;) {
        if (total[x] == i) {
            total.splice(x, 1);
        } else {
            x++;
        }
    }
  
    var result = 0;
    if (total.length > 0) {
        for (x = 0; x < total.length; x++) {
            var res = document.getElementById('salePrice' + total[x]).textContent;
            var n = parseInt(res);
            result = result + n;
        }
    }
    document.getElementById('sum-price').textContent = result;
}


// ------------------------after clicking purchase button----------------------

function purchase(){
    if(main.length > 0){
        alert('Thanks for purchasing');
        for(i=0; i<main.length; i++){
            document.getElementById('container' + it[i]).remove();
            document.getElementById('sum-price').textContent = "0";
            document.getElementById('myCart').style.display = 'none';
            document.getElementById('totalPrice').style.visibility = 'hidden';
        }
        it = []; // to remove all item from cart
        total = [];
        main = [];
    }else{
        alert('Your cart is empty');
    }
    
}