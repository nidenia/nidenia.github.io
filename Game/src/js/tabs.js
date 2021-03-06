let tabs = document.querySelectorAll("._tabs");
for (let i = 0; i < tabs.length; i++) {
  let tab = tabs[i];
  let tabs_items = tab.querySelectorAll("._tabs-item");
  let tabs_blocks = tab.querySelectorAll("._tabs-block");
  
  for (let i = 0; i < tabs_items.length; i++) {
    let tabs_item = tabs_items[i];
    tabs_item.addEventListener("click", function (e) {
      for (let i = 0; i < tabs_items.length; i++) {
        let tabs_item = tabs_items[i];
        tabs_item.classList.remove('_active');
        tabs_blocks[i].classList.remove('_active');
      }
      tabs_item.classList.add('_active');
      tabs_blocks[i].classList.add('_active');
      e.preventDefault();
    });
  }
}