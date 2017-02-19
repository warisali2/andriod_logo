var head = document.getElementById("head");
var buckle = document.getElementById("buckle");
var rArm = document.getElementById("r_arm");
var lLowerArm = document.getElementById("lower_arm");
var lUpperArm = document.getElementById("upper_arm");

var banner = document.getElementById('banner');
var period = banner.getAttribute('data-period');
var textToType = [ 'Press the buckle.', 'Hover over arms.', 'Hover over head.'];

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


var TypeText = function(el, toRotate, period)
{
  this.toRotate = toRotate;
  this.el = el;
  this.period = parseInt(period, 10) || 2000;
  this.loopNum = 0;
  this.txt = '';
  this.isDeleting = false;
  this.tick();
}

TypeText.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if(this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  }
  else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if(this.isDeleting) { delta /= 2; }

  if(!this.isDeleting && this.txt === fullTxt)
  {
    delta = this.period;
    this.isDeleting = true;
  }
  else if(this.isDeleting && this.txt === '')
  {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() { that.tick(); }, delta);
};

window.onload = function() {
  if(textToType)
  {
    new TypeText(banner, textToType, period);
  }

  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = "#banner > .wrap { border-right: 0.08em solid #ECF0F1; }";
  document.body.appendChild(css);
}
