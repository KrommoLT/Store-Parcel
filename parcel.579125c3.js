const $app = document.getElementById("app");
const API = "https://api.escuelajs.co/api/v1/products?offfset=0&limit=10";
const main = async ()=>{
    const response = await fetch(API);
    const products = await response.json();
    const ouput = products?.map((product)=>{
        return `
    <article class="Card">
    <img src="${product.images[0]}">
    <h2>
    ${product.title}<small>Precio $ ${product.price}</small>
    </h2>
    </article>
    `;
    }).join(""); //quita las comillas
    let newItem = document.createElement("section");
    newItem.classList.add("Items");
    newItem.innerHTML = output;
    $app.appendChild(newItem);
};
main();

//# sourceMappingURL=parcel.579125c3.js.map
