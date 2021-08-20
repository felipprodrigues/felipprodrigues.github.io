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

  // REMOVE BREADCRUMBS
  function removeBradcrumbs() {
    document.querySelectorAll('.aside__button').forEach(button => {
      button.addEventListener('click', () => {
        const buttonValue = button.dataset.aside;
        const buttonParent = button.closest('aside')
        const parentSibling = buttonParent.nextSibling

        if(buttonValue !== 'files' ){
          parentSibling.classList.add('is-hidden')
        } else {
          parentSibling.classList.remove('is-hidden')
        }
      });
    });
  };

  function activeElements() {
    const overallList = document.querySelector('.aside__list');
    const firstChild = overallList.firstElementChild;
    const attFiles = document.querySelector('[data-aside="files"]');
    const workspace = document.querySelector('.work-space');
    const workspaceFirstChild = workspace.firstElementChild;

    // SETS THE ELEMENT AS ACTIVE
    firstChild.classList.add('aside__elements--active');
    // SETS THE BUTTON AS ACTIVE
    attFiles.classList.add('aside__button--selected');
    // SETS THE WORK-SPACE AS ACTIVE
    workspaceFirstChild.classList.add('work-space__holder--active');
  }

  document.addEventListener("DOMContentLoaded", () => {
    lightDark();
    setupTabs();
    sidebar();
    removeBradcrumbs();
    activeElements();
  })
}());

