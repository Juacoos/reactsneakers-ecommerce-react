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
      id: 1,
      title: "Zapatillas Adidas",
      img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7b85bada2e2d4329bdd4aa3100c072a6_9366/Zapatillas_Energyfalcon_Negro_EE9843_01_standard.jpg",
      price: 45,
      detail: "Zapatillas Adidas Running",
      stock: 10,
      category: "deportivo",
      offer: true
    },
    {
      id: 2,
      title: "Nike Air Force 1",
      img: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwfb2d9764/products/NI_314193-009/NI_314193-009-1.JPG",
      price: 65,
      detail: "Zapatillas Nike Air Force 1 Black",
      stock: 9,
      category: "urbano",
      offer: true
    }, */
    {
      id: 3,
      title: "Nike Air Force 1",
      img: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw8abed4db/products/NI_315115-112/NI_315115-112-1.JPG",
      price: 95,
      detail: "Nike Air Force 1 '07 SN",
      stock: 3,
      category: "urbano"
    },
    {
      id: 4,
      title: "Nike Dunk High",
      img: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw775e51c1/products/NI_DH9751-001/NI_DH9751-001-1.JPG",
      price: 139,
      detail: "Nike Dunk High Retro",
      stock: 10,
      category: "urbano"
    },
    {
      id: 5,
      title: "Nike Air Max Plus",
      img: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwb9359f39/products/NI_DH4776-100/NI_DH4776-100-1.JPG",
      price: 129,
      detail: "Nike Air Max Plus",
      stock: 10,
      category: "urbano"
    },
    {
      id: 6,
      title: "Zapatillas Forum Low",
      img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/09c5ea6df1bd4be6baaaac5e003e7047_9366/Zapatillas_Forum_Low_Blanco_FY7756_01_standard.jpg",
      price: 110,
      detail: "Adidas Forum Low",
      stock: 10,
      category: "urbano"
    },
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