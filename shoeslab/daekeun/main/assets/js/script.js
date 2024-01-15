document.addEventListener('DOMContentLoaded', function () {
    const productContainer = document.getElementById('productContainer');
    let currentIndex = 0;

    function showNextProduct() {
        currentIndex++;
        if (currentIndex >= productContainer.children.length) {
            currentIndex = 0;
        }
        updateSlider();
    }

    function showPreviousProduct() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = productContainer.children.length - 1;
        }
        updateSlider();
    }

    function updateSlider() {
        const translateValue = -currentIndex * 100 + '%';
        productContainer.style.transform = 'translateX(' + translateValue + ')';
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowRight') {
            showNextProduct();
        } else if (event.key === 'ArrowLeft') {
            showPreviousProduct();
        }
    });
});