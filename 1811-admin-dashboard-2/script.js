// MenuToggle
const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
const main = document.querySelector('.main');

toggle.onclick = function () {
  navigation.classList.toggle('active');
  main.classList.toggle('active');
};

// add hovered class in selected list item
const list = document.querySelectorAll('.navigation li');

function activeLink() {
  list.forEach((item) => {
    item.classList.remove('hovered');
    this.classList.add('hovered');
  });
}

list.forEach((item) => {
  item.addEventListener('mouseover', activeLink);
});
