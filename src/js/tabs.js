const TabsBtn = document.querySelectorAll('.tabs-btn');
const TabsItems = document.querySelectorAll('.tabs-item');

TabsBtn.forEach(function(item) {
    item.addEventListener("click", function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);


        TabsBtn.forEach(function(item) {
            item.classList.remove('active');
        });

        TabsItems.forEach(function(item) {
            item.classList.remove('active');
        })

        currentBtn.classList.add('active');
        currentTab.classList.add('active');
        
    })
});
