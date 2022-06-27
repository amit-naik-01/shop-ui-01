var sizeArr = [
    {
        "id":"1",
        "label":"XS",
        "value":"XS"
    },
    {
        "id":"2",
        "label":"S",
        "value":"S"
    },
    {
        "id":"3",
        "label":"M",
        "value":"M"
    },
    {
        "id":"4",
        "label":"ML",
        "value":"ML"
    },
    {
        "id":"5",
        "label":"L",
        "value":"L"
    },
    {
        "id":"6",
        "label":"XL",
        "value":"XL"
    },
    {
        "id":"7",
        "label":"XXL",
        "value":"XXL"
    }
 
 ];
 
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
var sizeOption = document.getElementById("size-card");
var foundItems = document.getElementById("found");

/** for cart */
var cartIcon = document.getElementById("#cart-icon");
var cart = document.querySelector(".cart");
var closeCart = document.querySelector("#close-cart");


eventListeners();

// all event listeners
function eventListeners(){
    window.addEventListener('load', () => {
        loadJSON();
        loadSizes();
    });

    window.addEventListener("click", (e) => {
        if(e.target.id == 'add-to-cart'){
            console.log('clicked');
            /**function for add to cart */
        }
    });

    window.addEventListener("click", (e) => {
        if(e.target.id == 'submit-button'){
            console.log('clicked');
            /**function for filter products */
        }
    });

}


foundItems.innerHTML += `${productArr.length}`+` `+`products found`;




// load product items content form JSON file
function loadJSON(){
    html="";
    productArr.forEach((product) => {
        html += `<div class="product-1" href="#">
                 <img src=${product.imgSrc} alt="" width="190" height="250">
                 <div><p><b>${product.brand}</b></p><p><b>-</b></p><p><b>${`$`+ product.price }</b></p></div>
                 <button type="button" id="add-to-cart"><strong id="add-to-cart">Add to Cart</strong></button>
                 </div>
                 `;
         productList.innerHTML = html;
    });
}


function loadSizes(){
    // for sizes 
    sizeArr.map((size) => {return(
        sizeOption.innerHTML += `<button id="submit-button" href="#" ><strong id="submit-button">${size.value}</strong></button>`
    )});

}









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



//users = users.filter(x => x.size == 'L')




// cartIcon.onclick = () =>  {
//     cart.classList.add("active");
//     /**function for cart icon */
// };