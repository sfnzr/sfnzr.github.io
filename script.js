const emailElement = document.querySelector('.email');
  let revertTimeout;

  emailElement.addEventListener('mouseenter', () => {
    // Clear any pending revert action
    if (revertTimeout) {
      clearTimeout(revertTimeout);
      revertTimeout = null;
    }
    // Only change if not already showing the email
    if (emailElement.textContent.trim() !== "safiyahnazir@gmail.com") {
      // Fade out, change text, then fade in
      emailElement.style.opacity = '0';
      setTimeout(() => {
        emailElement.textContent = "safiyahnazir@gmail.com";
        emailElement.style.opacity = '1';
      }, 300); // 300ms matches the CSS transition duration
    }
  });

  emailElement.addEventListener('mouseleave', () => {
    // Wait 2 seconds before reverting to allow copying
    revertTimeout = setTimeout(() => {
      emailElement.style.opacity = '0';
      setTimeout(() => {
        emailElement.textContent = "EMAIL";
        emailElement.style.opacity = '1';
      }, 300);
    }, 2000);
  });

  window.addEventListener('resize', function() {
    document.body.classList.add('resize-active');
    clearTimeout(window.resizedFinished);
    window.resizedFinished = setTimeout(function(){
        document.body.classList.remove('resize-active');
    }, 200);
});