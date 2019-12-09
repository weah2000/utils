var DomainList = [
  "https://www.baidu.com/img/bd_logo1.png",
  "https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
];
function checkIfDomainGFW() {
  DomainList.some(function (v, i) {
    console.log(v);
    var img = new Image();
    img.src = v  + Math.random();
    img.onload = function () {
      console.log(v, '太棒了,没有被墙');
      window.location.href = v;
      return true;
    }
    if (i === DomainList.length - 1) {
      img.onerror = function () {
        console.log(v, '被墙了,换个试试');
      }
    }
  })
}