const textareaEl = document.getElementById('textarea');
const totalCountEl = document.getElementById('total-count');
const remainingEl = document.getElementById('remaining-count');

textareaEl.addEventListener("keyup", () => {
    updateCounter();
});

function updateCounter() {
    totalCountEl.innerHTML = textareaEl.value.length;
    remainingEl.innerHTML = textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}