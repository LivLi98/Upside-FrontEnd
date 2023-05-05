const hamburger = document.getElementById('hamburger');
const dropdown = document.getElementById('dropdown');

const midContainer = document.querySelector('#middle-container')
const existUserBtn = document.querySelector('#UserBtn')
const getHelpBtn = document.querySelector('#HelpBtn')



hamburger.addEventListener('click', function() {
  dropdown.classList.toggle('active');
});

getHelpBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Help button pressed')
  midContainer.innerHTML = '';
  midContainer.insertAdjacentHTML('afterbegin', `
      <div>
      <form action="">
        <div class="info-container">
          <label for="name"></label>
          <input type="text" name="Name" placeholder="Name"/>
          <form>
      <label for="search-text"></label>
    <input type="text" id="search-text" list="search-options" placeholder="I'm Looking For Help With:">
    <datalist id="search-options">
    <option value="Forgiveness"></option>
    <option value="Traumatic Issues"></option>
    <option value="Social Anxiety"></option>
    <option value="Loss or Grief"></option>
    <option value="Other"></option>
    </datalist>
    </form>
          <div>
            <button>Search</button>
          </div>
        </div>
      </form>
    </div>
  `)

});

existUserBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Existing user button pressed');
})