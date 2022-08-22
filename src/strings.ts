(() => {

  let productTitle = 'My amazing product';
  productTitle = 'My amazing product changed';
  console.log(`product title: ${productTitle}`);
  const productDescription = 'this is the description of the product'
  console.log(`product description: ${productDescription}`);

  let productPrice = 100;
  let isNew: boolean = false;
  //back tick
  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;
  console.log(summary);
})();











