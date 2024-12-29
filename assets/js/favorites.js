$(document).ready(function () {
    $.getJSON("assets/js/favorite.json", function (favorites) {
        var cardsfav = $("#favorites");

        // Loop through each favorite item
        favorites.forEach(product => {
            const card = `
                <div class="item px-2 justify-content-between py-2 col-lg-3 col-md-4 col-sm-6 col-10 col-mb-4 lg-col-4-py-4">
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
            cardsfav.append(card);
        });
    });
});
