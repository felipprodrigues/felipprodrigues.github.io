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

        // REMOVE SELECTED CLASS FROM TABS
        tabs.querySelectorAll(`.breadcrumbs__tabs`).forEach(item => {
          item.classList.remove(`is-selected`);
        });

        // REMOVE WORK SPACE FROM CONTENT
        tabsContainer.querySelectorAll(`.work-space__holder`).forEach(content => {
          content.classList.remove('work-space__holder--active');
        })

        // ADD SELECTED CLASS TO CLICKED TAB
        event.classList.add(`is-selected`);

        // SELECTS THE RELATIVE WORK-SPACE CONTENT
        tabToActivate.classList.add("work-space__holder--active");
      });
    });
  };

  function sidebar() {
    document.querySelectorAll('.aside__button').forEach(e => {
      e.addEventListener('click', () => {
        const thisButton = e
        const sideList = e.parentElement;
        const sideListParent = sideList.closest('aside');
        const sideListSibling = sideListParent.nextElementSibling;
        const sideListNextSibling = sideListSibling.nextElementSibling;

        // REMOVE WORKSPACE CONTENT
        sideListNextSibling.querySelectorAll('.work-space__holder').forEach(event => {
          event.classList.remove('work-space__holder--active');
        });

        // ADD RELATIVE WORKSPACE
        const buttonValue = e.dataset.aside;
        const workSpaceToActive = sideListNextSibling.querySelector(`.work-space__holder[data-panel="${buttonValue}"]`);

        workSpaceToActive.classList.add("work-space__holder--active");

        // ADD STYLE TO CLICKED BUTTON
        function styleClick(){
          thisButton.classList.add('aside__button--selected');
          thisButton.stopPropagation;
        }
        // REMOVE STYLE FROM SIBLING BUTTONS
        styleClick()

      });
    });
  };


  document.addEventListener("DOMContentLoaded", () => {
    setupTabs();
    sidebar()
  })

})();

