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
            <i data-bs-toggle="modal" data-bs-target="#searcModal" style="font-size:24px;" class="ri-search-line"></i>
<!-- Modal -->
 <div class="modal fade top-modal" id="searcModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <form class=: d-flex;>
            <input type="text" class="modal-search-input" placeholder="Type to search...">
            <i id="searchbtn-submit" class="bi bi-search"></i>
          </form>
        </div>
      </div>
    </div>
  </div>
            <img src="assets/images/box.png" alt="">
        </div>
        <div class="box2-logo">
        <a href="index.html">
            <img class="logo" src="assets/images/logo.png" alt="">
        </a>
        </div>
        <div class="box3">
               <i id="searchIcon" class="ri-search-line text-dark search-i" data-bs-toggle="modal" data-bs-target="#searchModal"></i>
             <a style="color: black;" href="signin.html"><i class="ri-user-line"></i></a>
           <span data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" class="position-relative">
  <i class="ri-shopping-cart-line"></i> 
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark" id="cartCount">
    0
  </span>
</span>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    
  </div>
</div>

        </div>
    </div>
      <div class="modal fade top-modal" id="searchModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <form>
            <input type="text" class="form-control" placeholder="Type to search...">
          </form>
        </div>
      </div>
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
            <a href="hertribe.html"><button>HER Tribe</button></a>
            <button>Her Story</button>
        </div>
    </div>
  </div>
</nav>
<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div class="list-group">
      <a href="shop-all.html" class="list-group-item list-group-item-action">Shop All</a>
      <a href="#" class="list-group-item list-group-item-action">Shop By Category</a>
      <a href="#" class="list-group-item list-group-item-action">Shop By Skin Concern</a>
      <a href="#" class="list-group-item list-group-item-action">Shop By Ingredient</a>
      <a href="#" class="list-group-item list-group-item-action">Value Sets</a>
      <a href="favorite.html" class="list-group-item list-group-item-action">HER Favorites</a>
    </div>
    <div class="off-btn">
       <a href="herjournal.html" class="btn btn-outline-secondary btn-block">HER Journal</a>
            <a href="quiz.html" class="btn btn-outline-secondary btn-block">Skin Quiz</a>
            <a href="hertribe.html" class="btn btn-outline-secondary btn-block">HER Tribe</a>
            <a href="herstory.html" class="btn btn-outline-secondary btn-block">HER Story</a>
    </div>
    <div class="offcanvas-logos">
        <div>
            <a href="signin.html"> <i class="fas fa-user"></i>
        <p>Login</p> </a>
        </div>
   <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 256 256"><path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"/><path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="url(#skillIconsInstagram0)" rx="60"/><rect width="256" height="256" fill="url(#skillIconsInstagram1)" rx="60"/><path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"/><defs><radialGradient id="skillIconsInstagram0" cx="0" cy="0" r="1" gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse"><stop stop-color="#fd5"/><stop offset=".1" stop-color="#fd5"/><stop offset=".5" stop-color="#ff543e"/><stop offset="1" stop-color="#c837ab"/></radialGradient><radialGradient id="skillIconsInstagram1" cx="0" cy="0" r="1" gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse"><stop stop-color="#3771c8"/><stop offset=".128" stop-color="#3771c8"/><stop offset="1" stop-color="#60f" stop-opacity="0"/></radialGradient></defs></g></svg>
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
document.querySelector("footer").innerHTML +=
`
  <div class="footer-container">
    <div class="newsletter">
      <h3>Subscribe to our Newsletter</h3>
      <form>
        <div class="form">
          <input type="email" placeholder="Enter your Email" required />
        <button type="submit">SIGN ME UP!</button>
        </div>
      </form>
    </div>
    <div class="footer-sections">
      <div class="footer-section logo-section">
        <img src="assets/images/her (1).png" alt="">
        <div class="social-icons">
          <a href="#"><i class="fa-brands fa-facebook"></i></a>
          <a href="#"><i class="fa-brands fa-instagram"></i></a> <!-- Instagram icon -->
        </div>
        
      </div>
      <div class="footer-section">
        <h3 class="dropdown-header">Information</h3>
        <ul class="dropdown-content">
          <li><a href="#">HER Story</a></li>
          <li><a href="#">Track your Order</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Address</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3 class="dropdown-header">Policies</h3>
        <ul class="dropdown-content">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Shipping Policy</a></li>
          <li><a href="#">Exchange & Replacement</a></li>
          <li><a href="#">Payment on Card</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3 class="dropdown-header">Customer Care</h3>
        <ul class="dropdown-content">
          <li>HERBeauty (Pvt) Limited</li>
          <li>Call or WhatsApp at <a href="tel:03000341191">03000341191</a></li>
          <li>
            Write to us at <a href="mailto:hello@joinherbeauty.com">hello@joinherbeauty.com</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
`
