import { buildRating } from './rating.js';
import { buildbreadcrumb } from './breadcrumb.js';

$(document).ready(() => {
    let productId = (new URLSearchParams(window.location.search)).get('productId');
    
    fetch("https://diwserver.vps.webdock.cloud/products/" + productId)
        .then(res=>res.json())
        .then(product => {
            
            console.log(product);
            $("#product-image").attr("src", product.image).addClass("mx-auto d-block");
            $("#title").text(product.title).addClass("fs-2");
            $("#description").append(product.description);
            $("#price").text("R$ " + product.price);
            $("#category").text(product.category);
            $('#season').append(product.season);
            $('#gender').append(product.gender);
            $('#rating').append(buildRating(product.rating));

            $('#breadcrumb').append(buildbreadcrumb());
        })
});
