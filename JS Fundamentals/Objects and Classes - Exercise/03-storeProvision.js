function storeProvision(arr1, arr2) {

    let finalProductList = [];

    for (let i = 0; i < arr1.length; i += 2) {
        let product = arr1[i];
        let productQty = Number(arr1[i + 1]);
        let productObj = { name: product, qty: productQty};
        finalProductList.push(productObj);
    }
    for (let i = 0; i < arr2.length; i += 2) {
        let product = arr2[i];
        let productQty = Number(arr2[i + 1]);

        let productIsInList = finalProductList.find(p => p.name === product);
        if (productIsInList) {
            productIsInList.qty += productQty;
        } else {
            let productObj = { name: product, qty: productQty};
            finalProductList.push(productObj);
        }   
    }
    for (let curProduct of finalProductList) {
        console.log(`${curProduct.name} -> ${curProduct.qty}`);
    }
}

// storeProvision(
//   ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
//   ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
// );
storeProvision(
  ["Salt", "2", "Fanta", "4", "Apple", "14", "Water", "4", "Juice", "5"],
  ["Sugar", "44", "Oil", "12", "Apple", "7", "Tomatoes", "7", "Bananas", "30"]
);