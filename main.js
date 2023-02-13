// Toggle animation on click
document.querySelector(".envelope").addEventListener("click", function () {
  // Check if the envelope has the class "fold"
  let hasFold = document.querySelector(".envelope").classList.contains("fold");

  // Scale the paper up or down | Toggle the class "grow" after 1 second if the envelope has the class "fold" or immediately if it doesn't
  setTimeout(
    function () {
      document.querySelector(".envelope").classList.toggle("grow");
    },
    hasFold ? 1000 : 0
  );

  // Open or closed the envelope | Toggle the class "fold" immediately if the envelope has the class "fold" or after 1.5 seconds if it doesn't
  setTimeout(
    function () {
      document.querySelector(".envelope").classList.toggle("fold");
    },
    hasFold ? 0 : 1500
  );
});

// Animates the envelope folding on page load
setTimeout(function () {
  document.querySelector(".envelope").classList.remove("fold");
}, 500);

// Animates the paper scale on page load
setTimeout(function () {
  document.querySelector(".envelope").classList.add("grow");
}, 1000);
