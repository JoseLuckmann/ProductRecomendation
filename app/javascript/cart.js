// cart.js

const cart = {
    items: [],
};
  

  const storedCart = localStorage.getItem('cart');
  if (storedCart) {
    cart.items = JSON.parse(storedCart);
  }
  
function addToCart(product, image) {
    product.image = image;
    cart.items.push(product);
    updateLocalStorage();
    document.getElementById("cart-count").textContent = getCartItemCount();
}

function removeFromCart(product_id) {
    const index = cart.items.findIndex(item => item.id === product_id);
    if (index !== -1) {
        cart.items.splice(index, 1);
        updateLocalStorage();
    }
}

function updateLocalStorage() {
    console.log(cart.items);
    localStorage.setItem('cart', JSON.stringify(cart.items));
}

function getCartItemCount() {
return cart.items.length;
}

function loadCartItems(cartItemsContainer) {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    if (cartItems.length === 0) {
      cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
      cartItemsContainer.innerHTML = ''; 
  
    cartItems.forEach(item => {
        const cartItemElement = document.createElement('div');
        console.log(item.image)
        cartItemElement.innerHTML = `
        <div class="col-md-8">
            <div class="row border-top py-3">
                <div class="col-md-3">
                    <img src="${item.image}" class="img-fluid" alt="product 01 image">
                </div>
                <div class="col-md-9">
                    <a href="#">${item.name}</a>
                    <p class="text-uppercase font-weight-bold my-0 float-right">
                        <span>${item.price}</span>
                    </p>
                    <p class="text-muted my-0">${item.category}</p>
                    <div class="d-flex flex-row mt-2">
                    <button type="button" onclick="removeFromCart(${item.id})" class="ml-2">Remover</button>
                    </div>
                </div>
            </div>
        </div>
        `;
        cartItemsContainer.appendChild(cartItemElement);
      });
    }
  }