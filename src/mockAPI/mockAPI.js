const data = [
  {
    id: 1,
    title: "Zapatillas Adidas",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7b85bada2e2d4329bdd4aa3100c072a6_9366/Zapatillas_Energyfalcon_Negro_EE9843_01_standard.jpg",
    price: 45,
    detail: "Zapatillas Adidas Running",
    stock: 10,
    category: "running"
  },
  {
    id: 2,
    title: "Nike Air Force 1",
    img: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwfb2d9764/products/NI_314193-009/NI_314193-009-1.JPG",
    price: 65,
    detail: "Zapatillas Nike Air Force 1 Black",
    stock: 9,
    category: "street"
  },
  {
    id: 3,
    title: "Nike Air Force 1",
    img: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw8abed4db/products/NI_315115-112/NI_315115-112-1.JPG",
    price: 95,
    detail: "Nike Air Force 1 '07 SN",
    stock: 3,
    category: "street"
  },
  {
    id: 4,
    title: "Nike Dunk High",
    img: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw775e51c1/products/NI_DH9751-001/NI_DH9751-001-1.JPG",
    price: 139,
    detail: "Nike Dunk High Retro",
    stock: 10,
    category: "sb"
  },
  {
    id: 5,
    title: "Nike Air Max Plus",
    img: "https://www.moov.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwb9359f39/products/NI_DH4776-100/NI_DH4776-100-1.JPG",
    price: 129,
    detail: "Nike Air Max Plus",
    stock: 10,
    category: "air"
  },
  {
    id: 6,
    title: "Zapatillas Forum Low",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/09c5ea6df1bd4be6baaaac5e003e7047_9366/Zapatillas_Forum_Low_Blanco_FY7756_01_standard.jpg",
    price: 110,
    detail: "Adidas Forum Low",
    stock: 10,
    category: "casual"
  },
]

export function getData(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, 2000);
  })
}