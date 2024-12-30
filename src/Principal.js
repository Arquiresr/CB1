import React from "react";
import ReactDOM from "react-dom/client";
import './App.css';
import img1 from './a.png'
import MyImage1 from './aas.png'; // Certifique-se de que o caminho da imagem está correto

// Componente Principal
function Principal() {
  return (
    <div>
 <Titulo />
 <div class = "borda1">
	<img src={img1} alt="Logo" width="300px" height="300px" />
	</div>
	</div> 
  );
}

// Componente Título
function Titulo() {
  return (
    <div>
     <MyButton />
	  <Das />
	  <FavoriteColor />
    </div>
  );
}

// Componente MyButton
function MyButton() {
  return (
    <div className="menu-bar">
      <div className="Menu">
        <ul>
          <li>
            <a className="active" href="#login">
              Perfil
            </a>
          </li>
          <li>
            <a href="#aluno">Criar serviço</a>
          </li>
          <li>
            <a href="#media">serviço</a>
          </li>
          <li>
            <a href="#onibus">Historico</a>
          </li>
		  <li>
            <a href="#onibus">Sair</a>
          </li>
        </ul>
      </div>
      <div className="position">
        <a href="#home">
          <img src={MyImage1} alt="Logo" width="40px" height="40px" />
        </a>
      </div>
    </div>
  );
}

// Componente Das
function Das() {
  return(
  <div class = "borda6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in mattis
          metus. Quisque mi dolor, blandit at ultrices vel, consequat vitae
          sem. Nulla venenatis augue leo, at ornare ante vulputate vel. Quisque
          turpis urna, tempus eget nisi dignissim, fermentum facilisis leo.
    </div>
	
		);
}

// Componente FavoriteColor (Rodapé)
function FavoriteColor() {
  return (
    <div class = "Rodape">
 <div class = "fg"><img src = {MyImage1} width="120px" height="120px"/> </div>
<div class = "f1">Empresa<br / > Quem somos?<br /> Por que cine?<br /> Trabalhe  com nosco</div>
 <div class = "f2">Candidato<br / > Blog<br /> Vagas<br /> Ajúudas</div>
<div class = "f11">Veiculo de comunicação<br /><img src ="https://cdn-icons-png.flaticon.com/512/1936/1936319.png"width="40px" height="40px"/><img src = "https://cdn-icons-png.flaticon.com/256/124/124010.png" width="40px" height="40px"/>
</div>
 </div>
  );
}

// Renderizando o Componente Principal
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Principal />);

export default Principal;