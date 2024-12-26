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
document.addEventListener("DOMContentLoaded", function () {
  const watsappLogoContainer = document.querySelector("#watsapp-logo");
  if (watsappLogoContainer) {
      watsappLogoContainer.innerHTML = `
          <svg class="watsapp-logo" xmlns="http://www.w3.org/2000/svg" 
               width="50" height="50" viewBox="0 0 24 24" 
               style="background-color: green; border-radius: 50%; padding: 10px;">
              <path fill="#fff" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"/>
          </svg>
      `;
  }
});
