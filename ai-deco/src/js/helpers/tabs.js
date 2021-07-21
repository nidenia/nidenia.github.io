let tabs = document.querySelectorAll('._tabs');
for (let i = 0; i < tabs.length; i++) {
  let tab = tabs[i];
  let tabsItems = tab.querySelectorAll('._tabs-item');
  let tabsBlocks = tab.querySelectorAll('._tabs-block');
  
  for (let i = 0; i < tabsItems.length; i++) {
    let tabsItem = tabsItems[i];
    tabsItem.addEventListener('click', () => {
      for (let i = 0; i < tabsItems.length; i++) {
        let tabsItem = tabsItems[i];
        tabsItem.classList.remove('_active');
        tabsBlocks[i].classList.remove('_active');
      }
      tabsItem.classList.add('_active');
      tabsBlocks[i].classList.add('_active');
    });
  }
}