let $app=document.getElementById("app"),API="https://api.escuelajs.co/api/v1/products?offfset=0&limit=10",main=async()=>{let t=await fetch("https://api.escuelajs.co/api/v1/products?offfset=0&limit=10"),e=await t.json();e?.map(t=>`
    <article class="Card">
    <img src="${t.images[0]}">
    <h2>
    ${t.title}<small>Precio $ ${t.price}</small>
    </h2>
    </article>
    `).join("");let a=document.createElement("section");a.classList.add("Items"),a.innerHTML=output,$app.appendChild(a)};main();
//# sourceMappingURL=parcel.b4396aa3.js.map
