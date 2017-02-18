var head = document.getElementById("head");
var buckle = document.getElementById("buckle");
var rArm = document.getElementById("r_arm");
var lLowerArm = document.getElementById("lower_arm");
var lUpperArm = document.getElementById("upper_arm");

head.style.animationFillMode="forwards";

var isPlayingAnimation = false;

var headAnimation = "laugh";

buckle.onclick = function() {
  if(isPlayingAnimation === false)
  {
    head.style.animation = headAnimation + " .2s ease-in-out 0s infinite alternate";

    rArm.style.transformOrigin = "top center";
    rArm.style.transform = "rotate(-110deg) translate(0, -20px)";

    lUpperArm.style.transformOrigin = "top center";
    lUpperArm.style.transform = "rotate(50deg) translate(20px, -5px)";

    lLowerArm.style.transformOrigin = "bottom center";
    lLowerArm.style.transform = "rotate(-50deg) translate(-5px, 20px)";

    isPlayingAnimation = !isPlayingAnimation;
  }
  else {
    head.style.animationIterationCount = "1";

    rArm.style.transformOrigin = "50% 50%";
    rArm.style.transform = "";

    lUpperArm.style.transformOrigin = "50% 50%";
    lUpperArm.style.transform = "";

    lLowerArm.style.transformOrigin = "50% 50%";
    lLowerArm.style.transform = "";

    isPlayingAnimation = !isPlayingAnimation;
  }
}
