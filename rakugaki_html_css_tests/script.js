window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("slideshow").style.height = "50vh";
    document.getElementById("slideshow").style.width = "80%";
    document.getElementById("slideshow").style.marginTop = "5%"
    document.getElementById("title_inside").style.display = 'none'
  } else {
    document.getElementById("slideshow").style.height = "100vh";
    document.getElementById("slideshow").style.width = "100%";
    document.getElementById("slideshow").style.marginTop = "0%"
    document.getElementById("title_inside").style.display = 'block'
  }
}