function lightDark() {
  const lightSwitch = document.querySelector('.switch');
  lightSwitch.addEventListener('click', function(e) {
    // Toggle the .dark-theme class to the body
    document.body.classList.toggle('dark-theme');
  });

    // FIX BUTTON ON REFRESH TO RECKON MACHINE COLOR STATE - TO BE REVIEWED

  // const body = document.querySelector('body')

  // if(body.classList !== 'dark-theme'){
  //   localStorage.setItem("theme", "light");
  //   body.classList.remove('dark-theme');
  //   console.log(localStorage.theme)
  // } else {
  //   localStorage.setItem("theme", "dark-theme");
  //   body.classList.add('dark-theme');
  //   console.log(localStorage.theme)
  // }

  // if (localStorage.getItem("theme") === "dark-theme") {
  //   body.classList.add('dark-theme');
  // }
}

function setupTabs() {
  document.querySelectorAll(".tabs__holder").forEach(event => {
    event.addEventListener("click", () => {
      const tabs = event.closest('.tabs');
      const workSpaceContainer = tabs.nextSibling;
      const tabNumber = event.dataset.trigger;
      const tabToActivate = workSpaceContainer.querySelector(`[data-preview="${tabNumber}"]`);

      //= REMOVE SELECTED CLASS FROM TABS
      tabs.querySelectorAll(`.tabs__holder`).forEach(item => {
        item.classList.remove(`is-selected`);
      });

      //= REMOVE WORK SPACE FROM CONTENT
      workSpaceContainer.querySelectorAll(`.card__holder--within`).forEach(content => {
        content.classList.remove('is-active');
      })

      //* ADD SELECTED CLASS TO CLICKED TAB
      event.classList.add(`is-selected`);

      //* SELECTS THE RELATIVE card CONTENT
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
      const workSpaceToActive = asideSecondSibling.querySelector(`.card__holder[data-panel="${buttonValue}"]`);

      // REMOVE WORKSPACE CONTENT
      asideSecondSibling.querySelectorAll('.card__holder').forEach(event => {
        event.classList.remove('card__holder--active');
      });

      // REMOVE STYLE FROM SIBLING BUTTONS
      asideList.querySelectorAll('.aside__button').forEach(event => {
        event.classList.remove('aside__button--selected')
      });

      // ADD STYLE TO CLICKED BUTTON
      e.classList.add('aside__button--selected');

      // ADD WORKSPACE CONTENT
      workSpaceToActive.classList.add("card__holder--active");

      // REMOVE BORDER FROM SELECTED BUTTON SIBLINGS
      asideList.querySelectorAll('.aside__elements').forEach(event => {
        event.classList.remove('aside__elements--active')
      });

      // ADD BORDER TO SELECTED BUTTON
      asideElements.classList.add('aside__elements--active');
    });
  });
};

// REMOVE tabs
function removeTabs() {
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
  const workspace = document.querySelector('.card');
  const workspaceFirstChild = workspace.firstElementChild;
  const tabsItems = document.querySelector('.list__items');
  const tabsItemFirstChild = tabsItems.firstElementChild;
  const cardList = document.querySelector('.card__holder');
  const cardListFirstChild = cardList.firstElementChild;

  // SETS THE ASIDE ELEMENT AS ACTIVE
  firstChild.classList.add('aside__elements--active');
  // SETS THE BUTTON AS SELECTED
  attFiles.classList.add('aside__button--selected');
  // SETS THE card AS ACTIVE
  workspaceFirstChild.classList.add('card__holder--active');
  // SETS THE FIRST TAB ELEMENT AS ACTIVE
  tabsItemFirstChild.classList.add('is-selected');
  // SETS THE FIRST TAB ELEMENT AS ACTIVE
  cardListFirstChild.classList.add('is-active')
};

function modal() {
  const openModal = document.getElementById('buttonPreview');
  const modalOverlay = document.querySelector('.modal');
  const modalContent = document.querySelector('.modal__button');
  const modalByKey = window;

  openModal.addEventListener('click', function (){
    modalOverlay.classList.add('is-open');
  });

  function closeModal() {
    modalOverlay.classList.remove('is-open');
  }

  // CLOSING FUNCTIONS
  modalContent.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', function(event){
    const outsideClick = event.target.closest('.modal--inner');
    if( !outsideClick ) {
      closeModal()
    }
  });
  modalByKey.addEventListener('keydown', event => {
    if( event.key === 'Escape' ) {
      closeModal();
    }
  })
};

document.addEventListener("DOMContentLoaded", () => {
  lightDark();
  setupTabs();
  sidebar();
  removeTabs();
  activeElements();
  modal();
})

