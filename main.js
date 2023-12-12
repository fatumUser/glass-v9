function burgerMenu() {
  document.getElementById("header__nav").classList.toggle("header__nav-show");
}
function fullImgShow() {
  document.getElementById("full-img").classList.add("full-img-show");
  document.getElementById("body").classList.add("body-no-scroll");
}
function fullImgClose() {
  document.getElementById("full-img").classList.remove("full-img-show");
  document.getElementById("body").classList.remove("body-no-scroll");
}
function fullImgDeliveryShow() {
  document.getElementById("full-img-delivery").classList.add("full-img-show");
  document.getElementById("body").classList.add("body-no-scroll");
}
function fullImgDeliveryClose() {
  document
    .getElementById("full-img-delivery")
    .classList.remove("full-img-show");
  document.getElementById("body").classList.remove("body-no-scroll");
}
setTimeout(screenSaver, 3800);
setTimeout(screenSaverZindex, 4800);
setTimeout(screenSaverLogo1Transform, 1000);
setTimeout(screenSaverLogo2Show, 1300);
function screenSaver() {
  document.getElementById("screen-saver").classList.add("hidden-screen-saver");
}
function screenSaverZindex() {
    document.getElementById("screen-saver").classList.add("z-index-screen-saver");
  }
  function screenSaverLogo1Transform() {
    document.getElementById("logo-1").classList.add("screen-saver-logo-1-hidden");
    document.getElementById("logo-2").classList.add("screen-saver-logo-2-transform");
  }
  function screenSaverLogo2Show() {
    document.getElementById("logo-2").classList.add("screen-saver-logo-2-show");
  }



  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-scroll-show');
      }
    });
  }
  let options = { threshold: [0.2] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements =
  document.querySelectorAll(
    '.el-scroll-hidden'); /*''*/
  for (let elm of elements) {
    observer.observe(elm);
  }