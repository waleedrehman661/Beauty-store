$(document).ready(function () {
    $.getJSON("assets/js/products.json", function (products) {
      var cardsContainer = $("#cards-container");
      
      // Ensure the parent is d-flex and flex-wrap is added
      cardsContainer.addClass('d-flex flex-wrap justify-content-between');
  
      products.forEach(product => {
        const card = `
          <div class="item px-2 py-5 col-lg-3 col-md-4 col-sm-6 col-12">
            <div class="card-container">
              <div class="img-container">
                <img class="card-img" src="${product.image}" alt="">
              </div>
              <div class="description2">
                <a style="color: ${product.color}; font-weight: bold;" href="#">${product.title}</a>
                <p>${product.description}</p>
              </div>
              <div class="bottom-card2">
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
    });
  });
  
  