$(document).ready(function () {
  $.getJSON("assets/js/products.json", function (products) {
    var cardsContainer = $("#cards-container");
    cardsContainer.addClass('d-flex flex-wrap justify-content-between');
    
    products.forEach(product => {
      const card = `
        <div class="item w-mb-25 px-2 py-2 col-lg-3 col-md-4 col-sm-6 col-12">
          <div class="card-container">
            <div class="img-container">
              <img class="card-img" src="${product.image}" alt="">
            </div>
            <div class="description2">
              <a style="color: ${product.color}; font-weight: bold;" href="#">${product.title}</a>
              <p>${product.description}</p>
            </div>
            <div class="addToCartBtn bottom-card2">
              <div class="text-justify text-center">
                <p>ADD TO CART</p>
              </div>
              <p style="color: #d2440d;">${product.price}</p>
            </div>
          </div>
        </div>
      `;
      cardsContainer.append(card);
    });

    var cartCount = document.getElementById("cartCount");
     var count = 0; 
     document.querySelectorAll(".addToCartBtn").forEach(button => { button.addEventListener('click', function () { count++; cartCount.innerText = count; }); }); }); });
