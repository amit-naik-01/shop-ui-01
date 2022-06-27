var productArr = [
    {
        "id":1,
        "type":"shirt",
        "price":"9.99",
        "brand":"Levi's",
        "imgSrc":"assets/purple-t-shirt.jpg",
        "rating":"4",
        "sizes":"L"
    },
    {
        "id":2,
        "type":"shirt",
        "price":"9.99",
        "brand":"U.S.P.A",
        "imgSrc":"assets/purple-t-shirt.jpg",
        "rating":"4",
        "sizes":"M"
    
    },
    {
        "id":3,
        "type":"shirt",
        "price":"9.99",
        "brand":"Peter England",
        "imgSrc":"assets/purple-t-shirt.jpg",
        "rating":"4"
    },
    {
        "id":4,
        "type":"shirt",
        "price":"9.99",
        "brand":"John Player",
        "imgSrc":"assets/purple-t-shirt.jpg",
        "rating":"4",
        "sizes":"L"
    },
    {
        "id":5,
        "type":"shirt",
        "price":"9.99",
        "brand":"H&M",
        "imgSrc":"assets/purple-t-shirt.jpg",
        "rating":"4",
        "sizes":"L"
    },
    {
        "id":6,
        "type":"shirt",
        "price":"9.99",
        "brand":"Roadster",
        "imgSrc":"assets/purple-t-shirt.jpg",
        "rating":"4",
        "sizes":"L"
    },
    {
        "id":7,
        "type":"shirt",
        "price":"9.99",
        "brand":"Max",
        "imgSrc":"assets/purple-t-shirt.jpg",
        "rating":"4",
        "sizes":"L"
    },
    {
        "id":8,
        "type":"shirt",
        "price":"9.99",
        "brand":"Peter England",
        "imgSrc":"assets/purple-t-shirt.jpg",
        "rating":"4",
        "sizes":"L"
    },
    {
        "id":9,
        "type":"shirt",
        "price":"9.99",
        "brand":"Levi's",
        "imgSrc":"assets/purple-t-shirt.jpg",
        "rating":"4",
        "sizes":"L"
    },
    {
        "id":10,
        "type":"shirt",
        "price":"9.99",
        "brand":"John Player",
        "imgSrc":"assets/purple-t-shirt.jpg",
        "rating":"4",
        "sizes":"L"
    },
    {
        "id":11,
        "type":"shirt",
        "price":"9.99",
        "brand":"Raymond's",
        "imgSrc":"assets/purple-t-shirt.jpg",
        "rating":"4",
        "sizes":"L"
    },
    {
        "id":12,
        "type":"shirt",
        "price":"9.99",
        "brand":"Max",
        "imgSrc":"assets/purple-t-shirt.jpg",
        "rating":"4",
        "sizes":"L"
    }
];


const productList = document.getElementById('product-card');   /**html okay*/



eventListeners();

// all event listeners
function eventListeners(){
    window.addEventListener('load', () => {
        loadJSON();
    });

    window.addEventListener("click", (e) => {
        if(e.target.id == 'add-to-cart'){
            console.log('clicked');
            /**function for add to cart */
        }
    })


}




// load product items content form JSON file
function loadJSON(){
    html="";
    // const button = document.createElement('button');
    //   button.classList.add('something')
    //   button.textContent='Add To Cart';
    productArr.forEach((product) => {
        // html += `<div class="product-1" href="#">
        // <img src=${product.imgSrc} alt="" width="190" height="250">
        // <div><p><b>${product.brand}</b></p><p>-</p><p>${`$`+ product.price }</p></div>
        // <button type="button"><strong>Add to Cart</strong></button>
        // </div>`
        html += `<div class="product-1" href="#">
    <img src=${product.imgSrc} alt="" width="190" height="250">
    <div><p><b>${product.brand}</b></p><p>-</p><p>${`$`+ product.price }</p></div>
    <button type="button" id="add-to-cart"><strong id="add-to-cart">Add to Cart</strong></button>
    </div>`;
         productList.innerHTML = html;
    //   const button = document.createElement('button');
    //   button.classList.add('something')
    //   button.textContent='Add To Cart';
    //   productList.appendChild(button)

      

    });
    

}

// <button type="button"><strong>Add to Cart</strong></button>


// productList.addEventListener("click", function(e) {
//     if(e.target.id == 'something'){
//         console.log('clicked');
//     }
    

// })


// products.forEach(item => {   // 1
// 	item.addEventListener('click', (e) => {
// 		if (e.target.classList.contains('addToCart')) {
// 			const productID = e.target.dataset.productId;
// 			const productName = item.querySelector('.productName').innerHTML;
// 			const productPrice = item.querySelector('.priceValue').innerHTML;
// 			const productImage = item.querySelector('img').src;
// 			let product = {
// 				name: productName,
// 				image: productImage,
// 				id: productID,
// 				count: 1,
// 				price: +productPrice,
// 				basePrice: +productPrice,
// 			}
// 			updateProductsInCart(product);
// 			updateShoppingCartHTML();
// 		}
// 	});
// });