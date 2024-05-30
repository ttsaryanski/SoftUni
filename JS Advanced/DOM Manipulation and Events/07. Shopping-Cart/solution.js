function solve() {

    let productsDataRef = document.querySelectorAll('div[class=product]');
    let resultRef = document.querySelector('textarea');

    let resultObj = {};
    for (const productData of productsDataRef) {
        let productName = productData.querySelector('div[class=product-title]');
        let productPrice = productData.querySelector('div[class=product-line-price]');
        let productButton = productData.querySelector('button[class=add-product]');

        productButton.addEventListener('click', (event) => {
            let name = productName.textContent;
            let price = Number(productPrice.textContent);
            resultRef.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
            if (!resultObj.hasOwnProperty(name)) {
                resultObj[name] = price;
            } else {
                resultObj[name] += price;
            }
        });
    }

    let checkoutButton = document.querySelector('button[class=checkout]')
    checkoutButton.addEventListener('click', (event) => {
        let list = Object.keys(resultObj);
        let sum = Object.values(resultObj).reduce((sum, price) => sum + price, 0);
        resultRef.value += `You bought ${list.join(', ')} for ${sum.toFixed(2)}.`;
        for (const productData of productsDataRef) {
            let productButton = productData.querySelector('button[class=add-product]');
            productButton.setAttribute('disabled', 'disabled');
        }
        checkoutButton.setAttribute('disabled', 'disabled');
    });


}