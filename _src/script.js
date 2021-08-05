(function() {

    // COLOR THEME FUNCTION
    const btn = document.querySelector('.switch');
    // Listen for a click on the button
    btn.addEventListener('click', function() {
      // Then toggle (add/remove) the .dark-theme class to the body
      document.body.classList.toggle('dark-theme');
    });

  function setupTabs() {
    document.querySelectorAll(".breadcrumbs__tabs").forEach(event => {
      event.addEventListener("click", () => {
        const tabs = event.parentElement;
        const tabsContainer = tabs.nextSibling;
        const tabNumber = event.dataset.trigger;
        const tabToActivate = tabsContainer.querySelector(`.work-space__holder[data-preview="${tabNumber}"]`);

        tabs.querySelectorAll(`.breadcrumbs__tabs`).forEach(item => {
          item.classList.remove(`is-selected`);
        });

        tabsContainer.querySelectorAll(`.work-space__holder`).forEach(content => {
          content.classList.remove('work-space__holder--active');
        })

        event.classList.add(`is-selected`);
        tabToActivate.classList.add("work-space__holder--active");

        // console.log(tabs);
        console.log(tabsContainer);
        console.log(tabNumber);
        console.log(tabToActivate);
      });
    });
  };

  function sidebar() {
    document.querySelectorAll('.button').forEach(e => {
      e.addEventListener('click', () => {
        const sideList = e.parentElement;
        const sideListParent = sideList.parentElement;
        const sideListGrandParent = sideListParent.parentElement;
        const tabsLeap = sideListGrandParent.nextElementSibling;
        const tabsLeapChild = tabsLeap.nextElementSibling;

        tabsLeapChild.querySelectorAll('.work-space__holder').forEach(event => {
          event.classList.remove('work-space__holder--active');
        });

      });
    });
  };


  document.addEventListener("DOMContentLoaded", () => {
    setupTabs();
    sidebar()
  })

})();

