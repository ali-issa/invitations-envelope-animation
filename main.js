document.querySelector(".envelope").addEventListener("click", function () {
  let hasFold = document.querySelector(".envelope").classList.contains("fold");

  setTimeout(
    function () {
      document.querySelector(".envelope").classList.toggle("grow");
    },
    hasFold ? 1000 : 0
  );

  setTimeout(
    function () {
      document.querySelector(".envelope").classList.toggle("fold");
    },
    hasFold ? 0 : 1500
  );
});

setTimeout(function () {
  document.querySelector(".envelope").classList.remove("fold");
}, 500);

setTimeout(function () {
  document.querySelector(".envelope").classList.add("grow");
}, 1000);
