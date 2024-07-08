var navBtn= document.querySelector('nav button');
var navList= document.querySelector('nav nav-list');

navBtn.addEventListener('click', displayNavList);

function displayNavList() {
    var navList= document.getElementById('nav-list');
      if (navList.style.display == 'none') {
        navList.style.display = 'block';
    } 
    else {
        navList.style.display = 'none';
    }
  }