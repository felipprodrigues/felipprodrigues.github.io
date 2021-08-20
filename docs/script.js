(function() {

  function lightDark() {
    const lightSwitch = document.querySelector('.switch');
    lightSwitch.addEventListener('click', function() {
      // Toggle the .dark-theme class to the body
      document.body.classList.toggle('dark-theme');
    });
  }

  function setupTabs() {
    document.querySelectorAll(".breadcrumbs__tabs").forEach(event => {
      event.addEventListener("click", () => {
        const tabs = event.parentElement;
        const workSpaceContainer = tabs.nextSibling;
        const tabNumber = event.dataset.trigger;
        const tabToActivate = workSpaceContainer.querySelector(`[data-preview="${tabNumber}"]`);

        //= REMOVE SELECTED CLASS FROM TABS
        tabs.querySelectorAll(`.breadcrumbs__tabs`).forEach(item => {
          item.classList.remove(`is-selected`);
        });

        //= REMOVE WORK SPACE FROM CONTENT
        workSpaceContainer.querySelectorAll(`.work-space__holder--within`).forEach(content => {
          content.classList.remove('is-active');
        })

        //* ADD SELECTED CLASS TO CLICKED TAB
        event.classList.add(`is-selected`);

        //* SELECTS THE RELATIVE WORK-SPACE CONTENT
        tabToActivate.classList.add('is-active');

      });
    });
  };

  //! REVIEW THIS FUNCTION
  // REMOVE BREADCRUMBS
  function removeBradcrumbs() {
    document.querySelectorAll('.aside__elements').forEach(button => {
      button.addEventListener('click', () => {
        const buttonClick = button.parentElement;
        const buttonValue = button.querySelector(`[data-aside]`);
        const asideSibling = button.closest('aside').nextElementSibling;
        const buttonActivate = buttonValue.querySelectorAll(`[data-panel="${buttonValue}"]`);

        console.log(buttonValue)
        console.log(buttonClick)
        console.log(asideSibling)
        console.log(buttonActivate)


        // console.log(event)
        // event.querySelectorAll('.aside__button').forEach(button => {
        //   if( dataAtt !== 'files' ) {
        //     asideSibling.classList.add('is-hidden')
        //   } else if( dataAtt === 'files' ){
        //     asideSibling.classList.remove('is-hidden')
        //   }


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
    lightDark();
    setupTabs();
    removeBradcrumbs();
    sidebar();
  })
})();

