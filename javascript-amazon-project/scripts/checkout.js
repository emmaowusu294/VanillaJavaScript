import { renderOrderSummary } from "./checkoutt/orderSummary.js";
import { renderPaymentSummary } from "./checkoutt/paymentSummary.js";
import { loadProducts } from "../data/products.js";
// import '../data/cart-class.js'
// import '../data/backend-practice.js';

loadProducts(() => {
    renderOrderSummary();
    renderPaymentSummary();
})
