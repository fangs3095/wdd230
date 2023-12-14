/*fetch("products.json")
.then(function(response){
	return response.json();
})
.then(function(products){
	let placeholder = document.querySelector("#data-output");
	let out = "";
	for(let product of products){
		out += `
			<tr>
				<td> <img src='${product.image}'> </td>
				<td>${product.name}</td>
				<td>${product.price}</td>
				<td>${product.inventory}</td>
				<td>${product.productCode}</td>
			</tr>
		`;
	}

	placeholder.innerHTML = out;
});*/

function displaytable(data){
	let row = document.createElement("tr");
		row.innerHTML = `
		<td> <img src='${data.image}'> </td>
				<td>${data.name}</td>
				<td>${data.persons}</td>
				<td>${data.price}</td>
				<td>${data.priceperday}</td>
				<td>${data.inventory}</td>
				<td>${data.productCode}</td>
		`
	document.querySelector("tbody").appendChild(row)
}

const url = "./data/products.json"
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const product = jsonObject['products'];
    product.forEach(displaytable);
  });