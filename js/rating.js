export function buildRating(rating){
    let rate = Math.floor(rating.rate)
    let rateString = ""
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