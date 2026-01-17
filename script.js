$(document).ready(function () {
  // Check if heart was already clicked (stored in localStorage)
  const heartClicked = localStorage.getItem('heartClicked') === 'true';
  const isPage2 = window.location.pathname.includes('page2.html');

  // Check if we're on gallery page
  const isGallery = window.location.pathname.includes('gallery.html');

  // If heart was clicked before OR we're on page2/gallery, skip heart animation
  if (heartClicked || isPage2 || isGallery) {
    $('.ico').remove(); // Remove heart immediately
    $('.images').removeClass('d-none'); // Show images
    $('.nav-btn').removeClass('d-none'); // Show navigation buttons
    $('.bottom-buttons').removeClass('d-none'); // Show bottom buttons
  } else {
    // Heart button click handler (only on first visit to index)
    $('.ico').click(function () {
      const $heart = $(this);

      // Save to localStorage that heart was clicked
      localStorage.setItem('heartClicked', 'true');

      // Add the scaling animation
      $heart.addClass('open');

      // Ensure the heart disappears after the animation
      setTimeout(() => {
        $heart.remove(); // Remove the heart completely
        $('.images').removeClass('d-none'); // Show images
        $('.nav-btn').removeClass('d-none'); // Show navigation buttons
        $('.bottom-buttons').removeClass('d-none'); // Show bottom buttons
      }, 800); // Matches the animation duration
    });
  }

  // Function to handle page transition with fade effect
  function navigateWithFade(url) {
    const $container = $('.container-fluid');
    const $transition = $('#pageTransition');
    
    // Disable buttons during transition
    $('.nav-btn').css('pointer-events', 'none');
    
    // Add fade out effect to container
    $container.addClass('fade-out');
    
    // Show transition overlay
    $transition.addClass('active');
    
    // Navigate after fade out completes
    setTimeout(() => {
      window.location.href = url;
    }, 500); // Match CSS transition duration
  }

  // Navigation button handlers with fade effect
  $('#navRight').click(function() {
    let targetUrl = '';
    if (window.location.pathname.includes('page2.html')) {
      // Loop back to index from page2
      targetUrl = 'index.html';
    } else if (window.location.pathname.includes('gallery.html')) {
      // From gallery, go to page2
      targetUrl = 'page2.html';
    } else {
      // Go to page2 from index
      targetUrl = 'page2.html';
    }
    navigateWithFade(targetUrl);
  });

  $('#navLeft').click(function() {
    let targetUrl = '';
    if (window.location.pathname.includes('page2.html')) {
      // Go back to index from page2
      targetUrl = 'index.html';
    } else if (window.location.pathname.includes('gallery.html')) {
      // From gallery, go back to index
      targetUrl = 'index.html';
    } else {
      // Loop to page2 from index
      targetUrl = 'page2.html';
    }
    navigateWithFade(targetUrl);
  });

  // Bottom action button handlers
  $('#galaxyBtn').click(function() {
    window.open('https://love.tsonit.com/dillakanitha', '_blank');
  });

  $('#galleryBtn').click(function() {
    // Only navigate to gallery if not already on gallery page
    if (!window.location.pathname.includes('gallery.html')) {
      navigateWithFade('gallery.html');
    }
  });

  // Remove transition overlay on page load (fade in effect)
  setTimeout(() => {
    $('#pageTransition').removeClass('active');
  }, 100);
});
