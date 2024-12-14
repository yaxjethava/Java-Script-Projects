let main_row = document.getElementById("main-row");
let count_of_navbar = document.getElementById("card-counts");
let count_of_navbar_small = document.getElementById("card-counts-small-divice");

class CardDetails {
    constructor(img_link, model_name, price) {
        this.img = img_link,
            this.model = model_name,
            this.price = price
    }
}

let obj = [
    new CardDetails("https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/j/a/jacob-co-astronomia-art-at102-40-aa-ub-a-multiple-2.jpg", "Jacob & Co. Astronomia Art India", 67800000),
    new CardDetails("https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/j/a/jacob-co-bugatti-chiron-tb-bu200-40-aa-aa-bbrua-multiple-1.jpg", "Bugatti Chiron Tourbillon White Gold", 41600000),
    new CardDetails("https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/g/i/girard-perregaux-bridges-99295-43-001-ba6a-large.jpg", "Girard-Perregaux Quasar Light Tourbillon", 36150000),
    new CardDetails("https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/j/a/jacob-co-astronomia-regulator-ar200-40-aa-ac-abala-multiple-4.jpg", "Astronomia Tourbillon Regulator",  28800000),
    new CardDetails("https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/b/v/bvlgari-octo-103283-large_1.jpg", "BVLGARI Octo Roma Carillon Tourbillon", 23980000),
    new CardDetails("https://cdn1.ethoswatches.com/media/catalog/product/cache/6e5de5bc3d185d8179cdc7258143f41a/h/-/h-moser-cie-streamliner-6804-0401-large.jpg", "H. Moser & Cie. Streamliner Tourbillon",  17500000),
    new CardDetails("https://content.thewosgroup.com/productimage/18100282/18100282_1.jpg?impolicy=zoom", "Brilliant Skeleton Northern Lights", 9700000),
    new CardDetails("https://img.tatacliq.com/images/i18//1316Wx1468H/MP000000016577285_1316Wx1468H_202406301655542.jpeg", "IWC Schaffhausen", 2128000),
    new CardDetails("https://static.helioswatchstore.com/media/catalog/product/v/e/vevk00620_1.jpg", "Versace", 95800),
    new CardDetails("https://static.helioswatchstore.com/media/catalog/product/3/6/3600898_1.jpg", "Movado", 75800),
    new CardDetails("https://static.helioswatchstore.com/media/catalog/product/c/e/ceciwgk2116602w_3.jpg", "Cerruti", 29580),
    new CardDetails("https://www.citizenwatches.co.in/images/gal_1AR5044-03E_0_20210722013112Desktop-gallery-AR5044-03E.jpg", "Citizen", 59500),

]


document.addEventListener('DOMContentLoaded', load_page);

function load_page() {
    let counts_from_localstorage = JSON.parse(localStorage.getItem("card_data"))
    console.log(counts_from_localstorage.length);
    count_of_navbar.textContent = counts_from_localstorage.length//for changing value of card on nav
    count_of_navbar_small.textContent = counts_from_localstorage.length//for changing value of card on nav
}

function priceFormate(priceNumber) {
    const indianFormatter = new Intl.NumberFormat("en-IN");
    return indianFormatter.format(priceNumber);
}

let cardObj = []


obj.forEach(data => {
    main_row.innerHTML += `
     <div class="product-card">
            <div class="product-card__image">
                <img src=${data.img}
                    alt="Watches">
            </div>

            <div class="product-card__info">
                <h2 class="product-card__title">${data.model}</h2>
                <div class="product-card__price-row">
                    <span class="product-card__price">&#x20B9;${priceFormate(data.price)}</span>
                    <button class="product-card__btn" onclick="sendDataInArray('${data.img}','${data.model}',${data.price})">Add to Cart </button>
                </div>
            </div>
        </div>`
})

function sendDataInArray(img, title, price) {

    cardObj.push({ img, title, price });
    // console.log(cardObj)
    localStorage.setItem("card_data", JSON.stringify(cardObj))//object send to local storage
    // console.log(JSON.parse(localStorage.getItem("card_data")))
    let count = JSON.parse(localStorage.getItem("card_data"))//for getting value from local storage obj
    // window.location.reload()
    console.log(count.length)

    count_of_navbar_small.textContent = count.length//for changing value of card on nav
    count_of_navbar.textContent = count.length//for changing value of card on nav
}