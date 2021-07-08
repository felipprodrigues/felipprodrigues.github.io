(function(){
  
  // COLOR THEME FUNCTION
  const btn = document.querySelector('.switch');
  // Listen for a click on the button
  btn.addEventListener('click', function() {
    // Then toggle (add/remove) the .dark-theme class to the body
    document.body.classList.toggle('dark-theme'); 
  }); 

  function setupTabs() {
    document.querySelectorAll(".breadcrumbs__tabs").forEach(a => {
      a.addEventListener("click", () => {
        const breadcrumbs = a.parentElement;
        const breadcrumbsContainer = breadcrumbs.nextSibling;
        const tabNumber = a.dataset.trigger;
        const tabToActivate = breadcrumbsContainer.querySelector(`work-space__holder[data-preview="${tabNumber}"]`);

        // FIX FINAL 
        breadcrumbs.querySelectorAll(".breadcrumbs__tabs").forEach(a => {
          a.classList.remove("is-selected");
        });

        breadcrumbsContainer.querySelectorAll('.work-space').forEach(a => {
          a.classList.remove(".is-hidden");
        });

        // FIX FINAL 
        a.classList.add("is-selected");
        tabToActivate.classList.remove("is-hidden").add("is-shown")
        



      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupTabs();
  })

})();

