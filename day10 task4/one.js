


// --------------------Code for all products------------------------

var head = "<h1>For All Products</h1>";
var html = "<table border='1px' width='100%'>";
html += `<tr>`;
html += `<th>Category</th>`;
html += `<th>Sub - Category</th>`;
html += `<th>Id</th>`;
html += `<th>Name</th>`;
html += `<th>Brand</th>`;
html += `</tr>`;
for (i in products) {

    for (j in products[i]) {

        for (z in products[i][j]) {
            
            html += `<tr>`;
            html += `<td>${i}</td>`;
            html += `<td>${j}</td>`;
            html += `<td>${products[i][j][z].id}</td>`;
            html += `<td>${products[i][j][z].name}</td>`;
            html += `<td>${products[i][j][z].brand}</td>`;
            html += `</tr>`;
        }
    }

}
html += "</table>";
document.write(head);
document.write(html);

// -------------------------Code for Mobiles------------------------


var head = "<h1>For Mobiles</h1>";
var html = "<table border='1px' width='100%'>";
html += `<tr>`;
html += `<th>Category</th>`;
html += `<th>Sub - Category</th>`;
html += `<th>Id</th>`;
html += `<th>Name</th>`;
html += `<th>Brand</th>`;
html += `</tr>`;
for (i in products) {

    for (j in products[i]) {

        for (z in products[i][j]) {
            if (j == "Mobile") {
                html += `<tr>`;
                html += `<td>${i}</td>`;
                html += `<td>${j}</td>`;
                html += `<td>${products[i][j][z].id}</td>`;
                html += `<td>${products[i][j][z].name}</td>`;
                html += `<td>${products[i][j][z].brand}</td>`;
                html += `</tr>`;
            }

        }
    }

}
html += "</table>";
document.write(head);
document.write("<br>" + html);

// -----------------------------_Code for only Samsung products------------------

var head = "<h1>For Samsung products</h1>";

var html = "<table border='1px' width='100%'>";

for (i in products) {

    for (j in products[i]) {

        for (z in products[i][j]) {
            if (products[i][j][z].brand == "Samsung") {
                html += `<tr>`;
                html += `<td>${'Product Id'}</td>`;
                html += `<td>${products[i][j][z].id}</td>`;
                html += `</tr>`;
                html += `<tr>`;
                html += `<td>${'Product Name'}</td>`;
                html += `<td>${products[i][j][z].name}</td>`;
                html += `</tr>`;
                html += `<tr>`;
                html += `<td>${'Sub-Category'}</td>`;
                html += `<td>${j}</td>`;
                html += `</tr>`;
                html += `<tr>`;
                html += `<td>${'Category'}</td>`;
                html += `<td>${i}</td>`;
                html += `</tr>`;
            }

        }
    }

}
html += "</table>";
document.write(head);
document.write(html);


// ---------------------------Code for Deleting the products------------------

var head = "<h1>Deleted Products</h1>";
var html = "<table border='1px' width='100%'>";
html += `<tr>`;
html += `<th>Category</th>`;
html += `<th>Sub - Category</th>`;
html += `<th>Id</th>`;
html += `<th>Name</th>`;
html += `<th>Brand</th>`;
html += `</tr>`;
for (i in products) {

    for (j in products[i]) {

        for (z in products[i][j]) {
            if(products[i][j][z].id == "PR003"){
                  continue;
            }else{
                html += `<tr>`;
                html += `<td>${i}</td>`;
                html += `<td>${j}</td>`;
                html += `<td>${products[i][j][z].id}</td>`;
                html += `<td>${products[i][j][z].name}</td>`;
                html += `<td>${products[i][j][z].brand}</td>`;
                html += `</tr>`;
            }
            
        }
    }

}
html += "</table>";
document.write(head);
document.write(html);

// -----------------------------Code for updateing NAme ------------------

var head = "<h1>Updated product table</h1>";
var html = "<table border='1px' width='100%'>";
html += `<tr>`;
html += `<th>Category</th>`;
html += `<th>Sub - Category</th>`;
html += `<th>Id</th>`;
html += `<th>Name</th>`;
html += `<th>Brand</th>`;
html += `</tr>`;
for (i in products) {

    for (j in products[i]) {

        for (z in products[i][j]) {
            if(products[i][j][z].id == "PR002"){
                html += `<tr>`;
                html += `<td>${i}</td>`;
                html += `<td>${j}</td>`;
                html += `<td>${products[i][j][z].id}</td>`;
                html += `<td>${'BIG-555'}</td>`;
                html += `<td>${products[i][j][z].brand}</td>`;
                html += `</tr>`;
            }else{
                html += `<tr>`;
                html += `<td>${i}</td>`;
                html += `<td>${j}</td>`;
                html += `<td>${products[i][j][z].id}</td>`;
                html += `<td>${products[i][j][z].name}</td>`;
                html += `<td>${products[i][j][z].brand}</td>`;
                html += `</tr>`;
            }
            
        }
    }

}
html += "</table>";
document.write(head);
document.write(html);

