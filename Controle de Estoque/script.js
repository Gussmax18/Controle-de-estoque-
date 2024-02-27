document.getElementById("addItemForm").addEventListener("submit", function(event) {
    event.preventDefault();
 
    var itemName = document.getElementById("itemName").value;
    var itemBrand = document.getElementById("itemBrand").value;
    var itemQuantity = parseInt(document.getElementById("itemQuantity").value);
    var itemPrice = parseFloat(document.getElementById("itemPrice").value);
 
    if (itemName === "" || itemBrand === "" || isNaN(itemQuantity) || isNaN(itemPrice)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }
 
    addItem(itemName, itemBrand, itemQuantity, itemPrice);
    clearFormFields();
});
 
function addItem(name, brand, quantity, price) {
    var itemList = document.getElementById("itemList");
    var card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <h3>${name}</h3>
        <p><span>Marca:</span> ${brand}</p>
        <p><span>Quantidade:</span> ${quantity}</p>
        <p><span>Preço:</span> R$ ${price.toFixed(2)}</p>
    `;
    itemList.appendChild(card);
    console.log(`Novo item adicionado: ${name}, Marca: ${brand}, Quantidade: ${quantity}, Preço: R$ ${price.toFixed(2)}`);
}
 
function clearFormFields() {
    document.getElementById("itemName").value = "";
    document.getElementById("itemBrand").value = "";
    document.getElementById("itemQuantity").value = "";
    document.getElementById("itemPrice").value = "";
}