document.querySelectorAll('.product-img-item').forEach(e => {
    e.addEventListener('click', () => {
        let img = e.querySelector('img').getAttribute('src')
        document.querySelector('#product-img > img').setAttribute('src', img)
    })
})

document.querySelector('#view-all-description').addEventListener('click', () => {
    let content = document.querySelector('.product-detail-description-content')
    content.classList.toggle('active')
    document.querySelector('#view-all-description').innerHTML = content.classList.contains('active') ? 'view less' : 'view all'
})

let products = [
    {
        name: 'Nike Air 345i',
        image1: './Nike1.jpeg',
        image2: './Nike2.jpeg',
        old_price: '179.99',
        curr_price: '99.99'
    },
    {
        name: 'Nike Spy',
        image1: './nike4.jpeg',
        image2: './nike5.jpeg',
        old_price: '229.99',
        curr_price: '119.99'
    },
    {
        name: 'Adidas Bounce 3',
        image1: './adidas1.jpeg',
        image2: './adidas3.jpeg',
        old_price: '169.99',
        curr_price: '89.99'
    },
    {
        name: 'Adidas Grand 3.0',
        image1: './adidas4.jpeg',
        image2: './adidas5.jpeg',
        old_price: '189.99',
        curr_price: '79.99'
    },
    {
        name: 'New Balance Ventr V1',
        image1: './NB3.jpeg',
        image2: './NB2.jpeg',
        old_price: '259.99',
        curr_price: '169.99'
    },
    {
        name: 'Fila 1911',
        image1: './fila1.jpeg',
        image2: './fila2.jpeg',
        old_price: '299.99',
        curr_price: '199.99'
    },
]

let product_list = document.querySelector('#related-products')

renderProducts = (products) => {
    products.forEach(e => {
        let prod = `
            <div class="col-4 col-md-6 col-sm-12">
                <div class="product-card">
                    <div class="product-card-img">
                        <img src="${e.image1}" alt="">
                        <img src="${e.image2}" alt="">
                    </div>
                    <div class="product-card-info">
                        <div class="product-btn">
                            <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">shop now</a>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-cart-add'></i>
                            </button>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-heart'></i>
                            </button>
                        </div>
                        <div class="product-card-name">
                            ${e.name}
                        </div>
                        <div class="product-card-price">
                            <span><del>${e.old_price}</del></span>
                            <span class="curr-price">${e.curr_price}</span>
                        </div>
                    </div>
                </div>
            </div>
        `
        product_list.insertAdjacentHTML("beforeend", prod)
    })
}

renderProducts(products)