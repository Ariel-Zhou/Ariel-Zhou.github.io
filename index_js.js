/*移动出现菜单*/
window.onload = function () {
    var a = document.getElementById("1");
    var b = document.getElementById("2");
    a.onmouseover = function () {
        b.style.display = "block";
    }
    a.onmouseout = function () {
        b.style.display = "none";
    }
}


window.onload = function () {
    var c = document.getElementById("11");
    var d = document.getElementById("22");
    c.onmouseover = function () {
        d.style.display = "block";
    }
    c.onmouseout = function () {
        d.style.display = "none";
    }
}