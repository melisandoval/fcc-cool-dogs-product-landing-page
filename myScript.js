let prevScrollpos = window.pageYOffset;

window.onscroll = () => {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
    document.getElementById("main").style.paddingTop = "200px";
  } else {
    document.getElementById("header").style.top = "-151px";
    document.getElementById("main").style.paddingTop = "100px";
  }
  prevScrollpos = currentScrollPos;
};
