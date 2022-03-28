// const toggleActive = (event) => {
//   console.log("ToggleActive");
//   event.target.classList.add("selected");
// }

// document.querySelectorAll(".skill-tree-icon").forEach(item => {
//   item.addEventListener('click', toggleActive(event));
// });

document.querySelectorAll(".skill-tree-icon").forEach(item => {
  item.addEventListener('click', (event) => {
    event.target.classList.toggle("selected");
  });
});