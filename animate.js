const boxes = document.querySelectorAll('.box');

// Debounce function to improve performance
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(checkBoxes, 50);
});

// Run on load
checkBoxes();

function checkBoxes() {
    const triggerThreshold = (window.innerHeight / 5) * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerThreshold) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}
