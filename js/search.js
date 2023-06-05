import { buildRating } from './rating.js';

$(document).ready( ()=>{
    let searchText = (new URLSearchParams(window.location.search)).get('search');
    $("#search-title").append("Busca de produtos \"" + searchText + "\"");

    fetch("https://diwserver.vps.webdock.cloud/products/search?query=" + searchText)
        .then(res=>res.json())
        .then(json => {
            if($.isEmptyObject(json)){
                $('#error-container').append(buildEmptyProduct());
                return;
            }
            $.each(json, (_, data) => {
                $('#products').append(
                    `<div class="col-lg-4 col-md-6 col-sm-6 col-12">${buildCardProduct(data)}</div>`
                );
            });
        })
})

function buildCardProduct(product){
    let url = `/detail.html?productId=${product.id}`;
    return `
    <div class="card m-2">
        <img src="${product.image}" class="card-img-top product-image mx-auto d-block" alt="...">
        <div class="card-body">
            <h5 class="card-title product-title">${product.title}</h5>
            <a href="#"><span class="badge text-bg-secondary">${product.category}</span></a>
            <p>${buildRating(product.rating)}</p>
            <p class="card-text">${product.description}</p>
            <p class="card-text">R$ ${product.price}</p>
            <a href="${url}" class="btn btn-primary product-detail">Detail</a>
        </div>
    </div>`;
}

function buildEmptyProduct(){
    return `
    <div class="row">
        <div class="col-md-12 text-center">
            <i class="bi bi-x-circle-fill" style="font-size: 3rem"></i>
            <p class="fs-4">Nenum Produto encontrado para a pequisa feita 🫤</p>
        </div>
    </div>
    `;
}