<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
// Load Products from JSON
function loadProducts() {
    fetch("products.json")
        .then(response => response.json())
        .then(data => {
            let container = document.getElementById("product-container");
            let content = `<section class="section-products">
                <div class="container">
                    <div class="row justify-content-center text-center">
                        <div class="col-md-8 col-lg-6">
                            <div class="header">
                                <h3>Featured Course</h3>
                                <h2>Popular Courses</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">`;

            data.forEach((product, index) => {
                content += `
                    <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                        <div id="product-${index + 1}" class="single-product">
                            <div class="part-1" style="background-image: url('${product.image}');">
                                <ul>
                                    <li><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
                                    <li><a href="#"><i class="fas fa-heart"></i></a></li>
                                    <li><a href="#"><i class="fas fa-plus"></i></a></li>
                                    <li><a href="#"><i class="fas fa-expand"></i></a></li>
                                </ul>
                            </div>
                            <div class="part-2">
                                <h3 class="product-title">${product.title}</h3>
                                ${product.oldPrice ? `<h4 class="product-old-price">$${product.oldPrice}</h4>` : ''}
                                <h4 class="product-price">$${product.price}</h4>
                            </div>
                        </div>
                    </div>`;
            });

            content += `</div></div></section>`;
            container.innerHTML = content;
        })
        .catch(error => console.error("Error loading JSON:", error));
}
