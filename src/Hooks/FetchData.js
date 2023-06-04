import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

export const FetchData = () => {
  const [documento, setDocumento] = useState(null);

  useEffect(() => {
    getDocs(collection(db, "proyects")).then( (data) => {
      setDocumento(data)
    }); 
  }, []);

  return documento;
}

export const FetchMainData = () => {
  const [mainData, setMainData] = useState(null);

  useEffect(() => {
    getDocs(collection(db, "mainData")).then( (data) => {
      setMainData(data)
    }); 
  }, []);

  return mainData;
}

export const FetchTecnologias = () => {
  const [tecnologias, setTecnologias] = useState(null);

  useEffect(() => {
    getDocs(collection(db, "tecnologias")).then( (data) => {
      setTecnologias(data)
    }); 
  }, []);

  return tecnologias;
}