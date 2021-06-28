function tinhCanhHuyen() {
    var edge1 = document.getElementById("edge1").value;
    var edge2 = document.getElementById("edge2").value;
  
    var edge3 = Math.sqrt ((edge1 * edge1) + (edge2 * edge2))
  
  
    var ketQuaEl = document.getElementById("ketQua");
    ketQuaEl.innerHTML = ""
    
    var dodaiCanhHuyen = document.createElement("p");
    dodaiCanhHuyen.innerHTML = "Do dai canh huyen: " + edge3;
  
    ketQuaEl.appendChild(dodaiCanhHuyen);
  }
  