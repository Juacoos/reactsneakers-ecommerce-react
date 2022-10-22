import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs,  doc, getDoc, query, where  } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXsEb6AnYdWvx6r10AS1ZO0xrx3yjGpCw",
  authDomain: "react-sneakers-one.firebaseapp.com",
  projectId: "react-sneakers-one",
  storageBucket: "react-sneakers-one.appspot.com",
  messagingSenderId: "517925917379",
  appId: "1:517925917379:web:49b4816aa86c92f68b4876"
};

export async function getData(){
  const collectionRef = collection(db, "productos");
  //getDocs(collectionRef).then(respuesta => console.log(respuesta))
  let results = await getDocs(collectionRef);
  let dataProductos = results.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  })
  return dataProductos;
}
export async function getProducto(idParam){
  try {
    const docRef = doc(db, "productos", idParam);
    const docResult = await getDoc(docRef);
    if(docResult.exists()){
      return {id: docResult.id, ...docResult.data() };
    } 
    else {
      throw new Error("El item no se encontró :(")
    }
  }
  catch(errorMsg){
    console.log(errorMsg)
  }
}
export async function getProductByCategory(categoryIDParam){
  const collectionRef = collection(db, "productos");
  const queryCat = query(collectionRef, where("category", "==", categoryIDParam));
  let results = await getDocs(queryCat);
  let dataProductos = results.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  })
  return dataProductos;
}

const FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(FirebaseApp);

export default FirebaseApp;