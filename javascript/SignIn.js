const HBtn = document.getElementById('homeBtn')

HBtn.addEventListener('click', (w) => {
    w.preventDefault();
    window.open('http://127.0.0.1:5502/', '_top')
    console.log('Button Pushed');
})