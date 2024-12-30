import logo from './logo.svg';
import './App.css';
 import { useState } from "react";

import ReactDOM from "react-dom/client";
 import MyImage from './procurar.png';
 import MyImage1 from './aa.png';
 import { Route, BrowserRouter } from "react-router-dom";

im
 
 function Principal() {
function aa(){
	const backToTopButton = document.querySelector('.back-to-top')

const backToTop = () => {
 if (window.scrollY >= 1) {
backToTopButton.classList.add('show')
 } else {
backToTopButton.classList.remove('show')
 }
}

window.addEventListener('scroll', function () {
 backToTop()
})
	return(
	<a class="back-to-top" onclick="scrollToTop()">Topo</a>
	);
}

function FavoriteColor() {
	return(
 <div class = "Rodape">
 <div class = "fg"><img src = {MyImage1} width="190px" height="50px"/> </div>
<div class = "f1">Empresa<br / > Quem somos?<br /> Por que cine?<br /> Trabalhe  com nosco</div>
 <div class = "f2">Candidato<br / > Blog<br /> Vagas<br /> Ajúudas</div>
<div class = "f11">Veiculo de comunicação<br /><img src ="https://cdn-icons-png.flaticon.com/512/1936/1936319.png"width="40px" height="40px"/><img src = "https://cdn-icons-png.flaticon.com/256/124/124010.png" width="40px" height="40px"/>
</div>
 </div>
 
  );
}

function Das(){
	return(
	<borda>d</borda>
	);
}
function Titulo(){
	
	return  (  <div>
	<div class="fab"  ontouchstart="">
  <button class="main" >
  </button>

</div>

	<MyButton />
	<aa />
	<div class = "tr">
	<Das />
	
	<borda1>Lorem ipsum dolor sit amet, 
	consectetur adipiscing elit. Sed in
	mattis metus. Quisque mi dolor, blandit 
	at ultrices vel, consequat vitae sem. Nulla
	venenatis augue leo, at ornare ante vulputate 
	vel. Quisque turpis urna, tempus eget nisi 
	dignissim, fermentum facilisis leo. Class aptent taciti 
	sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </borda1>
<borda2><img src = {MyImage1} width="80px" height="20px"/></borda2>
<br />
<btn4>Login</btn4></div>
<div class = "ty"><faa> <p>Estudantes</p>Lorem ipsum dolor sit amet, 
consectetur adipiscing elit. Sed in mattis metus.
 Quisque mi dolor, blandit at ultrices vel, 
 consequat vitae sem. Nulla venenatis augue leo, at ornare ante vulputate vel. 
 Quisque turpis urna, tempus eget nisi dignissim, fermentum facilisis leo. 
 Class aptent taciti sociosqu ad litora torquent 
per conubia nostra, per inceptos himenaeos. </faa><fa><p>profesor</p>Lorem ipsum dolor sit amet, 
consectetur adipiscing elit. Sed in mattis metus.
 Quisque mi dolor, blandit at ultrices vel, 
 consequat vitae sem. Nulla venenatis augue leo, at ornare ante vulputate vel. 
 Quisque turpis urna, tempus eget nisi dignissim, fermentum facilisis leo. 
 Class aptent taciti sociosqu ad litora torquent 
per conubia nostra, per inceptos himenaeos.</fa>
</div>
<div class = "Bor"><p>Sobre</p><borda6>Lorem ipsum dolor 
 amet, consectetur adipiscing elit. Sed in mattis metus. Quisque
 mi dolor, blandit at ultrices vel, consequat vitae sem. Nulla
 venenatis augue leo, at ornare ante vulputate vel. 
 turpis urna, tempus eget nisi dignissim, fermentum facilisis leo
 Class aptent taciti sociosqu ad litora torquent per conubia nostra,
 per inceptos himenaeos. Mauris mollis diam non elit tristique sagittis.
 Mauris placerat urna sit amet velit hendrerit auctor.
 Cras ullamcorper tellus leo, volutpat semper nunc suscipit ultricies. 
 Quisque at lacus malesuada, vehicula dui ac, vestibulum eros. 
 Donec ac bibendum nisl. Duis accumsan
tellus at tincidunt laoreet. In convallis laoreet ligula a lobortis.</borda6><borda34>a</borda34></div>
	<div class = "for"><p>Colaboradores</p>
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in mattis metus.
	<div class="round3"></div><div class="round2"></div></div>
	<FavoriteColor />
<div class = "Roda"><div class="fi">@2024 GCine</div></div>
</div>

);

}

function MyButton() {
		

  
  return (
<div class = "menu-bar">



   
      <div class = "Menu">
    <ul>
  <li><a class="active" href="Cam.js">Login</a></li>
  <li><a href="#Cam.html">Aluno</a></li>
  <li><a href="#Motoa.js">Media</a></li>
  <li><a href="#about">Onibus</a></li>
</ul>
	 </div>
<div class = "position"><a href = "App.js">
<img src = {MyImage1} width="80px" height="20px"/></a></div>

</div>


  );
}



 
 function o(){
return(
<borda2>d</borda2>
);
 }	 
  


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Titulo />);

 }          

export default Principal;
