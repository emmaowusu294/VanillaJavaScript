import {cart, addToCart} from '../data/cart.js';
import {products} from '../data/products.js'
import { formatCurrency } from './utils/money.js';


updateCartQuantity();
// Show stored cart quantity on initial load
document.querySelector('.js-cart-quantity')
  .innerHTML = localStorage.getItem('cartQuantity') || 0;

let productsHTML = ``;

products.forEach((product) => {
    productsHTML += `<div class="product-container">
          <div class="product-image-container">
            <img class="product-image" 
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="${product.gerStarsUrl()}">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            ${product.getPrice()}
          </div>

          <div class="product-quantity-container">
            <select class="js-quantity-selector-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart js-added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <div class="toast js-toast">Item added to cart ✅</div>


          <button class="add-to-cart-button button-primary 
          js-add-to-cart" data-product-id = "${product.id}">
            Add to Cart
          </button>
        </div>`;
})

// console.log(productsHTML);

document.querySelector('.js-products-grid')
    .innerHTML = productsHTML;


 
    
export function updateCartQuantity() {
  let cartQuantity =  0;
  
    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });

    localStorage.setItem('cartQuantity', cartQuantity);
    
  document.querySelector('.js-cart-quantity')
    .innerHTML = cartQuantity;

    // console.log(cartQuantity);
};




function showAdded(productId) {
 
  
    const addedMessages = document.querySelector(`.js-added-to-cart-${productId}`);
    addedMessages.classList.add('added-visible'); // ✅ Use quotes for the class name

    

    
    
    setTimeout(() => {
        addedMessages.classList.remove('added-visible');
    }, 2000)
};


export function showToast(message) {
  const toast = document.querySelector('.js-toast');
  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2000); // hides after 2 secs
};


   
document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
        button.addEventListener('click',() => {
            const productId = button.dataset.productId;
            addToCart(productId);
            updateCartQuantity();
            showAdded(productId);
            showToast("Added to Cart");
          });
        });
    

