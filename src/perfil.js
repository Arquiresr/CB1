import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_AUTH_DOMAIN",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_STORAGE_BUCKET",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "SEU_APP_ID",
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const UserInfo = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(true);
      if (currentUser) {
        setUser(currentUser);
        try {
          const userDocRef = doc(db, "users", currentUser.uid);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            setUserData(userDoc.data());
          } else {
            console.error("Documento não encontrado no Firestore.");
          }
        } catch (error) {
          console.error("Erro ao buscar dados no Firestore:", error);
        }
      } else {
        setUser(null);
        setUserData(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!user) {
    return <div>Nenhum usuário autenticado. Faça login.</div>;
  }

  return (
    <div className="borda">
      <div className="borda2">
        <h2>Bem-vindo, {user.displayName || userData?.nome || "Usuário"}</h2>
        <div className="font1">Nome: {userData?.nome || "Não disponível"}</div>
        <div className="font2">Email: {userData?.email || user.email}</div>
        <div className="font3">CPF: {userData?.cpf || "Não disponível"}</div>
      </div>
    </div>
  );
};

export default UserInfo;
