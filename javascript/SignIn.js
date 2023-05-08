const HBtn = document.getElementById('homeBtn')

HBtn.addEventListener('click', (w) => {
    w.preventDefault();
    window.open('/index.html', '_top')
    console.log('Button Pushed');
})