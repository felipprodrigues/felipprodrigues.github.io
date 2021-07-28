(function() {

    // COLOR THEME FUNCTION
    const btn = document.querySelector('.switch');
    // Listen for a click on the button
    btn.addEventListener('click', function() {
      // Then toggle (add/remove) the .dark-theme class to the body
      document.body.classList.toggle('dark-theme');
    });

  function setupTabs() {
    document.querySelectorAll(".breadcrumbs__tabs").forEach(parameter => {
      parameter.addEventListener("click", () => {
        const breadcrumbs = parameter.parentElement;
        const breadcrumbsContainer = breadcrumbs.nextSibling;
        const tabNumber = parameter.dataset.trigger;
        const tabToActivate = breadcrumbsContainer.querySelector(`.work-space__holder[data-preview="${tabNumber}"]`);

        breadcrumbs.querySelectorAll(`.breadcrumbs__tabs`).forEach(item => {
          item.classList.remove(`is-selected`);
        });
        parameter.classList.add(`is-selected`);

        breadcrumbsContainer.querySelectorAll(`.work-space__holder`).forEach(content => {
          console.log(content.classList.toggle('is-shown'));
        })

        tabToActivate.classList.toggle("is-hidden");



        // console.log(breadcrumbs);
        console.log(breadcrumbsContainer);
        console.log(tabNumber);
        console.log(tabToActivate);




        // FIX
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupTabs();
  })

})();

