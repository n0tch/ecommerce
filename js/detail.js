$(document).ready(() => {
    let productId = (new URLSearchParams(window.location.search)).get('productId');
    
    fetch("https://diwserver.vps.webdock.cloud/products/" + productId)
        .then(res=>res.json())
        .then(product => {
            
            console.log(product);
            $("#product-image").attr("src", product.image);
            $("#title").text(product.title);
            $("#description").append(product.description);
            $("#price").text("R$ " + product.price);
            $("#category").text(product.category);
            $('#season').append(product.season);
            $('#gender').append(product.gender);
            $('#rating').append(buildRating(product.rating) + `(${product.rating.count})`);
        })
});

function buildRating(rating){
    let rate = Math.floor(rating.rate)
    let rateString = "";
    for(let i =0; i< 5; i++){
        if(i<rate){
            rateString += `
            <i class="bi bi-star-fill"></i>
        `;
        }else {
            rateString += `
            <i class="bi bi-star"></i>
        `;
        }
    }
    return rateString;
}