document.addEventListener("DOMContentLoaded", function(){
  const can = document.getElementById("mycanvas");
  can.width = 1000;
  can.height = 1000;

  // const cnt = can.getContext("2d");
  // cnt.fillStyle = "blue";
  // cnt.fillRect(110, 200, 500, 390);
  // cnt.beginPath();
  // cnt.arc(100, 100, 50, 0, 2*Math.PI, true);
  // cnt.strokeStyle = "green";
  // cnt.lineWidth = 15;
  // cnt.stroke();
  // cnt.fillStyle = "orange";
  // cnt.fill();

  const cnt = can.getContext("2d");
  cnt.fillStyle = "blue";
  cnt.lineWidth = 10;
  cnt.strokeRect(10, 10, 500, 390);
  cnt.beginPath();
    cnt.arc(175, 75, 50, 0, Math.PI * 2, true);
    cnt.moveTo(210, 75);
    cnt.arc(175, 75, 35, 0, Math.PI, false);
    cnt.moveTo(165, 65);
    cnt.arc(160, 65, 5, 0, Math.PI * 2, true);
    cnt.moveTo(195, 65);
    cnt.arc(190, 65, 5, 0, Math.PI * 2, true);
    cnt.moveTo(270, 230);
    cnt.arc(175, 230, 100, 0, Math.PI * 2, true);
    // cnt.moveTo(175, 500);
    cnt.stroke();
    cnt.fillStyle = "orange";
    cnt.fill();

    cnt.beginPath();
    cnt.arc(160, 65, 5, 0, Math.PI * 2, true);
    cnt.stroke();


        cnt.beginPath();
        cnt.arc(190, 65, 5, 0, Math.PI * 2, true);
        cnt.stroke();

        cnt.beginPath();
        cnt.arc(175+50, 350, 25, 0, Math.PI * 2, true);
        cnt.stroke();
        cnt.fillStyle = "brown";
        cnt.fill();

        cnt.beginPath();
        cnt.arc(175-50, 350, 25, 0, Math.PI * 2, true);
        cnt.stroke();
        cnt.fillStyle = "brown";
        cnt.fill();

        cnt.beginPath();
        cnt.arc(175+70, 200, 25, 0, Math.PI * 2, true);
        cnt.stroke();
        cnt.fillStyle = "brown";
        cnt.fill();

        cnt.beginPath();
        cnt.arc(175-70, 200, 25, 0, Math.PI * 2, true);
        cnt.stroke();
        cnt.fillStyle = "brown";
        cnt.fill();



});
