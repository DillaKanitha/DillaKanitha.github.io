$(document).ready(function () {
  $('.ico').click(function () {
    const $heart = $(this);

    // Add the scaling animation
    $heart.addClass('open');

    // Ensure the heart disappears after the animation
    setTimeout(() => {
      $heart.remove(); // Remove the heart completely
      $('.images').removeClass('d-none'); // Show images
    }, 800); // Matches the animation duration
  });
});
