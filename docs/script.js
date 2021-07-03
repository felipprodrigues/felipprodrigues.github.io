(function(){
  
  // COLOR THEME FUNCTION
  const btn = document.querySelector('.switch');
  // Listen for a click on the button
  btn.addEventListener('click', function() {
    // Then toggle (add/remove) the .dark-theme class to the body
    document.body.classList.toggle('dark-theme'); 
  }); 

  

})();

