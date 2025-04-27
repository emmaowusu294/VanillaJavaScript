let getListOfProductsElement = document.querySelector('.list-of-products');


function renderProducts(getProducts) {
  getListOfProductsElement.innerHTML = getProducts
    .map((singleProductItem) => `<p>${singleProductItem.title}</p><img src = "${singleProductItem.images}">`
  ).join(' ');
}


async function fetchListOfProducts() {
  try {
    const apiResponse = await fetch('https://dummyjson.com/products',{
      method : 'GET'
    } );

    const result = await apiResponse.json();


    console.log(result);

    if(result?.products?.length > 0) renderProducts(result.products);
  } catch (e) {
    console.log(e);
  };
};


fetchListOfProducts();