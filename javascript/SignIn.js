const submitBtn = document.getElementById('UserBtn')


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href('http://127.0.0.1:5502/SignIn.html','_top')
    console.log('Existing user button pressed');
})