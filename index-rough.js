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

window.addEventListener("load", () => {

    // for sizes 
    var sizeOption = document.getElementById("size-card");
    sizeArr.map((size) => {return(
        sizeOption.innerHTML += `<button id="submit-button" href="#" ><strong>${size.value}</strong></button>`
    )});








    
//     // for product


//     var divCard = document.createElement('div');
//     divCard.classList.add('product-1');

//     let productContainer = document.getElementsByClassName('product-listing')[0];
//     let productContent = `
//     <img src=${product.imgSrc} alt="" width="190" height="250">
//     <div><p><b>${product.brand}</b></p><p>-</p><p>${`$`+ product.price }</p></div>
//     <button type="button"><strong>Add to Cart</strong></button>
// `
//    divCard.innerHTML = productContent;

//    productContainer.appendChild(divCard);



    var productOption = document.getElementById("product-card");
    productArr.map((product) => {return (
    productOption.innerHTML += `<div class="product-1" href="#">
        <img src=${product.imgSrc} alt="" width="190" height="250">
        <div><p><b>${product.brand}</b></p><p>-</p><p>${`$`+ product.price }</p></div>
        <button type="button"><strong>Add to Cart</strong></button>
        </div>`
      )});

      const button = document.createElement('button');
      button.classList.add('something')
      button.textContent='Add To Cart'
      <button type="button"><strong>Add to Cart</strong></button>








    // for no. of products
    var foundItems = document.getElementById("found");
    foundItems.innerHTML += `${productArr.length}`+` `+`products found`;

   


})
