import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  getDocs,  
  doc, 
  getDoc, 
  query, 
  where, 
  addDoc, 
  writeBatch, 
  documentId } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXsEb6AnYdWvx6r10AS1ZO0xrx3yjGpCw",
  authDomain: "react-sneakers-one.firebaseapp.com",
  projectId: "react-sneakers-one",
  storageBucket: "react-sneakers-one.appspot.com",
  messagingSenderId: "517925917379",
  appId: "1:517925917379:web:49b4816aa86c92f68b4876"
};


const FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(FirebaseApp);

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

export async function getOfferProduct(){
  const collectionRef = collection(db, "productos");
  const queryCat = query(collectionRef, where("offer", "==", true));
  let results = await getDocs(queryCat);
  let dataProductos = results.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  })
  return dataProductos;
}

export async function createBuyOrder(orderData){
  
  const batch = writeBatch(db);
  const collectionRef = collection(db,"orders");
  
  const collectionItemsRef = collection(db, "productos");
  const arrayIds = orderData.cart.map((item) => item.id);
  const q = query(collectionItemsRef, where(documentId(),"in", arrayIds))
  let itemsToUpdate = await getDocs(q);
  itemsToUpdate.docs.forEach( doc => {
    let itemInCart = orderData.cart.find(item => item.id === doc.id)
    batch.update(doc.ref, {
      stock: doc.data().stock - itemInCart.count
    })
  })
  batch.commit();
  let respuesta = await addDoc(collectionRef, orderData);
  return respuesta.id;
}

export async function sendDataToFireBase(){
  const data = [
    /* {
      id: 7,
      title: "Air Max Pre-Day Se",
      img: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwa5506dfc/products/NI_DH4642-001/NI_DH4642-001-1.JPG",
      price: 95,
      detail: "Zapatillas Nike Air Max Pre-Day Se",
      stock: 50,
      category: "urbano",
      offer: true
    } */
  ];
  let collectionRef = collection(db, "productos");

  for(let producto of data){
    delete(producto.id);
    let newDoc = await addDoc(collectionRef, producto)
    console.log("Doc creado", newDoc.id)
  }
}

export async function getOrder(idParam){
  try {
    const docRef = doc(db, "orders", idParam);
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


export default FirebaseApp;