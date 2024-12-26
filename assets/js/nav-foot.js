document.querySelector("header").innerHTML +=
`
<nav>
    <div class="top-nav">
        <div>
            <p class="text-center">End the year on a glowy note ✨ Don't let your skincare run low grabe FLAT 30% OFF today!</p>
        </div>
    </div>
    <div>
      <div>
    <div class="sec-nav">
        <div class="box1"> 
            <i class="ri-menu-2-line" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" style="font-size: 30px; cursor: pointer;"></i>
            <i class="ri-search-line"></i>
            <img src="assets/images/box.png" alt="">
        </div>
        <div class="box2-logo">
        <a href="index.html">
            <img class="logo" src="assets/images/logo.png" alt="">
        </a>
        </div>
        <div class="box3">
            <a style="color: black;" href="signin.html"><i id="search-i" class="ri-search-line"></i></a>
             <a style="color: black;" href="signin.html"><i class="ri-user-line"></i></a>
            <i class="ri-shopping-cart-line"></i>
        </div>
    </div>
    <div class="third-nav">
        <div class="navbtn1">
            <a href="shop-all.html"> <button>Shop All</button> </a>
            <a href="favorite.html"> <button>Her Favorites</button> </a>
            
        </div>
        <div class="navbtn2">
            <a href=""><button>HER Journal</button></a>
            <a href="quiz.html"><button>Skin Quiz</button></a>
            <button>HER Tribe</button>
            <button>Her Story</button>
        </div>
    </div>
  </div>
</nav>
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas Menu</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <h3>Welcome to the Offcanvas!</h3>
    <p>This is a sample offcanvas sidebar. You can place text, images, and links inside it. Here are a few features:</p>
    
    <ul>
      <li>Easy to toggle visibility</li>
      <li>Responsive design</li>
      <li>Perfect for mobile navigation</li>
    </ul>
    
    <div class="dropdown mt-3">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
        Dropdown button
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
</div>

`