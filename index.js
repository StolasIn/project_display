var str = "code"

function print(){
	let n = document.getElementById('see').value;
	alert('welcome ' + n);
	document.getElementById('love').innerText='ina ina ina~~~';
}

function insert_tako(){
	var img = document.createElement("img");
	img.src="pic/ina/long tako2.jpg";
	img.setAttribute("width","100%");
	var myDiv = document.getElementById('long_tako_insert');
	myDiv.appendChild(img);
}

function reset_tako(){
	document.getElementById('long_tako_insert').innerHTML="";
}

function sett(){
	var code = document.createElement("code");
	var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "code/spilt.txt", false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}


var nav = document.querySelector("nav");
var navAnchor = document.querySelectorAll("nav ul li a");
window.addEventListener("scroll", () => {
	if(window.pageYOffset > 100){
		nav.style.backgroundColor = "#663399";
	}
	else{
		nav.style.backgroundColor = "";
		navAnchor.forEach(a => {
			a.style.color = "";
		});
	}
});