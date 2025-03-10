import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState,useRef  } from "react";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile , GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import img1 from './ae.png';
import p from './a.png';
import ReactDOM from "react-dom/client";
import { auth, db ,signOut } from "./firebase"; 
import MyImage from './procurar.png';
import MyImage1 from './aas.png';
import { getFirestore,query, doc, getDoc,collection, getDocs,setDoc,addDoc,where } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { Card, CardContent } from "./components/ui/card";
import InputMask from 'react-input-mask';

const UploadImagem = () => {
  const [imagem, setImagem] = useState(null);
  const [preview, setPreview] = useState(null);
  const [status, setStatus] = useState("");

  const handleImagemChange = (e) => {
    const arquivo = e.target.files[0];
    if (arquivo) {
      setImagem(arquivo);

      // Gerar um preview da imagem
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(arquivo);
    }
  };

  const handleUpload = async () => {
    if (!imagem) {
      alert("Selecione uma imagem antes de fazer o upload!");
      return;
    }

    setStatus("Enviando imagem...");

    try {
      // Configurar Firebase Storage
      const storage = getStorage();
      const storageRef = ref(storage, `empresa/${imagem.name}`);

      // Upload da imagem para o Firebase Storage
      await uploadBytes(storageRef, imagem);

      // Obter a URL de download da imagem
      const downloadURL = await getDownloadURL(storageRef);

      // Salvar os dados da imagem no Firestore
      const empresaRef = doc(collection(db, "Empresa")); // Cria um novo documento na coleção "Empresa"
      await setDoc(empresaRef, {
        nome: imagem.name,
        url: downloadURL,
        criadoEm: new Date().toISOString(),
      });

      setStatus("Upload realizado com sucesso!");
      alert("Imagem enviada e salva com sucesso na coleção Empresa!");

      // Limpar os estados
      setImagem(null);
      setPreview(null);
    } catch (error) {
      console.error("Erro ao fazer upload:", error);
      setStatus("Erro ao fazer upload!");
      alert("Erro ao fazer upload!");
    }
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      
      <input type="file" accept="image/*" onChange={handleImagemChange} />
      {preview && (
        <div>
        
          <img
            src={preview}
            alt="Preview"
            style={{ maxWidth: "100px", marginTop: "10px" }}
          />
        </div>
      )}
      <aaaaa
        onClick={handleUpload}
       
      >
        Gravar
      </aaaaa>
      {status && <p>{status}</p>}
    </div>
  );
};


 

// Componente Perfil
const Perfil = ({ onNavigate }) => {
   const [userData, setUserData] = useState({
    nome: "",
    email: "",
    cpf: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const usersCollection = collection(db, "Empresa"); // Nome da coleção no Firestore
        const snapshot = await getDocs(usersCollection);

        // Supondo que você pega o primeiro documento como exemplo
        const firstUser = snapshot.docs[0]?.data();

        setUserData({
          nome: firstUser?.nome || "Não disponível",
          email: firstUser?.email || "Não disponível",
          cpf: firstUser?.cpf || "Não disponível",
        });
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchUserData();
  }, []);


  return (
    <div>
      <MyButton onNavigate={onNavigate} />
         <div className="borda">
		 <div className="font1">
          Nome: {userData.nome || "Não disponível"}<br />
          </div>
         <div className="font2">
          Email: {userData.email || "Não disponível"}<br />
          </div>
         <div className="font3">
          CPF: {userData.cpf || "Não disponível"}<br />
         </div>
          <div className="borda2">
         <div className ="font6">
		 Imagem do usuario
		 
		 </div>
	     <UploadImagem />
         </div>
    

        </div>
      <FavoriteColor />
    </div>
  );
};

// Componente Título
const Titulo = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen">
    
      <header className="bg-orange-500 text-white p-4 w-full fixed top-0 left-0 z-50">
        <MyButton onNavigate={onNavigate} />
      </header>

      {/* Espaço para evitar sobreposição do cabeçalho */}
      <div className="mt-20"></div>

      {/* Conteúdo principal cresce para empurrar o rodapé para baixo */}
      <main className="flex-grow p-6 bg-gray-100">
        <Das />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="borda1">
            <img 
              src={p} 
              alt="Logo" 
              width="300px" 
              height="300px" 
              className="p-4 border rounded shadow-lg bg-white" 
            />
          </div>
        </div>
      </main>
      
      {/* Rodapé sempre no final da tela */}
      <footer className="main bg-gray-1000 text-white p-7  fixed bottom-100 left-100">
        <FavoriteColor />
      </footer>
    </div>
  );
};

// Componente MyButton
function MyButton({ onNavigate }) {
	

 
  return (
    <div className="menu-bar">
      <div className="Menu">
        <ul>
          <li>
            <button className="active" onClick={() => onNavigate('perfil')}>
              Perfil
            </button>
          </li>
          <li>
            <button className="active" onClick={() => onNavigate('criar')}>
			Criar serviço
			</button>
          </li>
          <li>
            <button className="active" onClick={() => onNavigate('Meu_servico')}>Serviços	</button>
          </li>
          <li>
            <button >Sair
         </button>
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
  return (
    <div className="borda6">
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
    <div className="Rodape">
      <div className="fg">
        <img src={img1} width="120px" height="120px" alt="Footer Logo" />
      </div>
      <div className="f1">
        Empresa<br /> Quem somos?<br /> Por que cine?<br /> Trabalhe com nosco
      </div>
      <div className="f2">
        Candidato<br /> Blog<br /> Vagas<br /> Ajuda
      </div>
      <div className="f11">
        Veículo de comunicação<br />
        <img
          src="https://cdn-icons-png.flaticon.com/512/1936/1936319.png"
          width="40px"
          height="40px"
          alt="Social Media"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/256/124/124010.png"
          width="40px"
          height="40px"
          alt="Social Media"
        />
      </div>
    </div>
  );
}
const Meu_servico= ({ onNavigate }) =>{
	 const [user, setUser] = useState(null);
  const [data, setData] = useState([]);
  const db = getFirestore();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        await fetchUserData(user.uid);
      } else {
        setUser(null);
        setData([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchUserData = async (uid) => {
    const q = query(collection(db, "Servico"), where ("criadoPor", "==", uid));
    const querySnapshot = await getDocs(q);

    const items = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setData(items);
  };
	return(
	<div>
	    <MyButton onNavigate={onNavigate} />
      <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Minhas Informações</h2>
      {data.length === 0 ? (
        <p>Nenhum dado encontrado.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((item) => (
            <Card key={item.id} className="p-4 shadow-lg">
              <CardContent>
                <h3 className="text-lg font-bold">{item.Nome}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
                <p className="text-xs text-gray-400">
                  Criado em: {new Date(item.criadoEm.seconds * 1000).toLocaleString()}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
      <FavoriteColor />
    </div>
  );
	
}
const Cliar_tarefa= ({ onNavigate }) => {
	const [formData, setFormData] = useState({
    servico: "",
    data: "",
    preco: "",
    descr: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "Servico"), {
        servico: formData.servico,
        data: formData.data,
        preco: formData.preco,
        descr: formData.descr,
      });

      alert("Serviço cadastrado com sucesso!");
      setFormData({ servico: "", data: "", preco: "", descr: "" }); // Limpa o formulário
    } catch (error) {
      console.error("Erro ao cadastrar usuário: ", error.message);
      alert("Erro ao cadastrar usuário: " + error.message);
    }
  };

  return (
    <div>
      <MyButton onNavigate={onNavigate} />
      <fieldset>
        <legend>Cadastro de Serviço</legend>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="servico">Nome do serviço:</label>
            <input
              type="text"
              id="servico"
              value={formData.servico}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="data">Data:</label>
            <input
              type="date"
              id="data"
              value={formData.data}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="descr">Descrição:</label>
            <textarea
              id="descr"
              value={formData.descr}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="preco">Preço:</label>
            <input
              type="number"
              id="preco"
              value={formData.preco}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Cadastrar serviço</button>
        </form>
      </fieldset>
	      <FavoriteColor />
		  </div>
	);
}

// Componente Principal
const Principal = () => {
  const [currentScreen, setCurrentScreen] = useState('titulo');

  const renderScreen = () => {
    if (currentScreen === 'titulo') {
      return <Titulo onNavigate={setCurrentScreen} />;
    }
    if (currentScreen === 'perfil') {
      return <Perfil onNavigate={setCurrentScreen} />;
    }
	 if (currentScreen === 'criar') {
      return <Cliar_tarefa onNavigate={setCurrentScreen} />;
    }
	 if (currentScreen === 'Meu_servico') {
      return <Meu_servico onNavigate={setCurrentScreen} />;
    }
  };

  return <div className="principal-container">{renderScreen()}</div>;
};
const updateUserName = async (name) => {
  try {
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, { displayName: name });
      console.log("Nome atualizado com sucesso!");
    }
  } catch (error) {
    console.error("Erro ao atualizar nome:", error.message);
  }
};
const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("Usuário autenticado:", result.user);
  } catch (error) {
    console.error("Erro ao autenticar com Google:", error.message);
  }
};


// Renderizando o Componente Principal
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Principal />);

export default Principal;