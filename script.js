var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

function openContent(obj, idContentContainer){
  var i, x, tablinks;
  // Ganti tab
  x=document.getElementsByClassName("tabs");
  for(i=0; i<x.length; i++){
    x[i].style.display="none";
  }
  document.getElementById(idContentContainer).style.display="block";
}

function hamburger() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

$(document).ready(function()  
       {  
            var aboutus = "<div class='w3-container'> <h1 class='w3-center'>Tentang Kami</h1> <br><br><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. DAAA aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> </div>";  
            var home = "<div class='carousel-container'><span class='w3-display-left w3-red'><h1 style='padding-left: 50px; padding-right: 20px;'>HOT NOW!</h1></span><img class='mySlides' src='asset/carousel/gambar1.png' style='width: 100%'><img class='mySlides' src='asset/carousel/gambar2.png' style='width: 100%'><img class='mySlides' src='asset/carousel/gambar4.png' style='width: 100%'></div><h1 class='w3-center'>Channel TV Indonesia</h1><div class='w3-container w3-quarter' style='margin-top: 10px;'><div class=' w3-center w3-margin'><img id='' class='images-channel w3-hover-shadow w3-round-large' src='asset/channel/rcti.png'><footer>RCTI Stream</footer></div><div class=' w3-center w3-margin'><img class='images-channel w3-hover-shadow w3-round-large' src='asset/channel/sctv.png'><footer>SCTV Stream</footer></div><div class=' w3-center w3-margin'><img class='images-channel w3-hover-shadow w3-round-large' src='asset/channel/net.png'><footer>NET TV Stream</footer>				</div>					</div>			<div class='w3-container w3-quarter' style='margin-top: 10px;'>				<div class=' w3-center w3-margin'>			<img class='images-channel w3-hover-shadow w3-round-large' src='asset/channel/kompas.png'>					<footer>KOMPAS TV Stream</footer>				</div>				<div class=' w3-center w3-margin'>					<img class='images-channel w3-hover-shadow w3-round-large' src='asset/channel/metro.png'>					<footer>Metro TV Stream</footer>				</div>				<div class=' w3-center w3-margin'>				<img class='images-channel w3-hover-shadow w3-round-large' src='asset/channel/rtv.png'>					<footer>Rajawali TV Stream</footer>				</div>					</div>			<div class='w3-container w3-quarter' style='margin-top: 10px;'>				<div class=' w3-center w3-margin'>					<img class='images-channel w3-hover-shadow w3-round-large' src='asset/channel/transtv.png'>					<footer>Trans TV Stream</footer>				</div>				<div class=' w3-center w3-margin'>					<img class='images-channel w3-hover-shadow w3-round-large' src='asset/channel/trans7.png'>					<footer>Trans7 Stream</footer>				</div>				<div class=' w3-center w3-margin'>					<img class='images-channel w3-hover-shadow w3-round-large' src='asset/channel/tvri.png'>					<footer>TVRI Stream</footer>				</div>					</div>			<div class='w3-container w3-quarter' style='margin-top: 10px;'>				<div class=' w3-center w3-margin'>					<img class='images-channel w3-hover-shadow w3-round-large' src='asset/channel/tvone.png'>					<footer>TVOne Stream</footer>				</div>				<div class=' w3-center w3-margin'>					<img class='images-channel w3-hover-shadow w3-round-large' src='asset/channel/oshop.png'>					<footer>OShop Stream</footer>				</div>				<div class=' w3-center w3-margin'>					<img class='images-channel w3-hover-shadow w3-round-large' src='asset/channel/ochannel.png'>					<footer>OChannel Stream</footer>				</div>					</div>carousel();";  
            var contactus = "<div class='w3-center w3-container'><br><br><h1 class='w3-center'>Form Kontak</h1><br><br><form class='w3-container'><label>Nama Lengkap</label><input class='w3-input' type='text'><label>Alamat e-Mail</label><input class='w3-input' type='text'><label>No. Telp</label><input class='w3-input' type='text'><label>Pesan</label><input class='w3-input' type='textfield'><br><br><button class='w3-button w3-center w3-black'>Send</button></div></form>";  
            $("#tab-aboutus").click(function()  
            {  
                $("#container").html(aboutus);
            carousel();

            });

            $("#home").click(function() {  
                $("#container").html(home);  
            carousel();

            });

            $("#contactus").click(function() {  
                $("#container").html(contactus); 
            carousel();

            });  
        });