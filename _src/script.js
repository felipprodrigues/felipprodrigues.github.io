(function() {

    // COLOR THEME FUNCTION
    const btn = document.querySelector('.switch');
    // Listen for a click on the button
    btn.addEventListener('click', function() {
      // Then toggle (add/remove) the .dark-theme class to the body
      document.body.classList.toggle('dark-theme');
    });


  //! FIX SETUPTABS FUNCTION TO INCLUDE INNER SPACE-HOLDERS
  function setupTabs() {
    document.querySelectorAll(".breadcrumbs__tabs").forEach(event => {
      event.addEventListener("click", () => {
        const tabs = event.parentElement;
        const tabsContainer = tabs.nextSibling;
        const tabNumber = event.dataset.trigger;
        const tabToActivate = tabsContainer.querySelector(`.work-space__holder--inner[data-preview="${tabNumber}"]`);

        // REMOVE SELECTED CLASS FROM TABS
        tabs.querySelectorAll(`.breadcrumbs__tabs`).forEach(item => {
          item.classList.remove(`is-selected`);
        });

        // REMOVE WORK SPACE FROM CONTENT
        tabsContainer.querySelectorAll(`.work-space__holder--iner`).forEach(content => {
          content.classList.remove('work-space__holder--active');
        })

        // ADD SELECTED CLASS TO CLICKED TAB
        event.classList.add(`is-selected`);

        // SELECTS THE RELATIVE WORK-SPACE CONTENT
        tabToActivate.classList.add('work-space__holder--active');
      });
    });
  };

  //! REVIEW THIS FUNCTION
  // REMOVE BREADCRUMBS
  function removeBradcrumbs() {
    // ADD CLICK ON SIDELIST BUTTONS
    document.querySelectorAll('.aside__elements').forEach(event => {
      event.addEventListener('click', () => {
        const buttonClick = event.parentElement
        const asideSibling = event.closest('aside').nextElementSibling;
        const dataAtt = event.dataset.aside
        const buttonActivate = event.querySelectorAll(`[data-aside="${dataAtt}"]`);

        // console.log(event)
        event.querySelectorAll('.aside__button').forEach(button => {
          if( button.dataset !== 'files' ) {
            asideSibling.classList.add('is-hidden')
          }
        })

        // console.log(asideSibling)
        // console.log(buttonActivate)


      });
    });
    // ADD BREADCRUMBS WHEN ATT. ASIDE-FILES
  }

  function sidebar() {
    document.querySelectorAll('.aside__button').forEach(e => {
      e.addEventListener('click', () => {
        const asideElements = e.parentElement;
        const asideList = asideElements.parentElement;
        const asideComponent = asideElements.closest('aside');
        const asideFirstSibling = asideComponent.nextElementSibling;
        const asideSecondSibling = asideFirstSibling.nextElementSibling;
        const buttonValue = e.dataset.aside;
        // ADD RELATIVE WORKSPACE
        const workSpaceToActive = asideSecondSibling.querySelector(`.work-space__holder[data-panel="${buttonValue}"]`);

        // REMOVE WORKSPACE CONTENT
        asideSecondSibling.querySelectorAll('.work-space__holder').forEach(event => {
          event.classList.remove('work-space__holder--active');
        });

        // REMOVE STYLE FROM SIBLING BUTTONS
        asideList.querySelectorAll('.aside__button').forEach(event => {
          event.classList.remove('aside__button--selected')
        });

        // ADD STYLE TO CLICKED BUTTON
        e.classList.add('aside__button--selected');

        // ADD WORKSPACE CONTENT
        workSpaceToActive.classList.add("work-space__holder--active");

        // REMOVE BORDER FROM SELECTED BUTTON SIBLINGS
        asideList.querySelectorAll('.aside__elements').forEach(event => {
          event.classList.remove('aside__elements--active')
        });

        // ADD BORDER TO SELECTED BUTTON
        asideElements.classList.add('aside__elements--active');
      });
    });
  };


  document.addEventListener("DOMContentLoaded", () => {
    setupTabs();
    removeBradcrumbs();
    sidebar();
  })

})();

