import { useState } from "react";
import Show from "./component/Show";
import Like from "./component/Like";
import Description from "./component/Description";

function App() {
  //for number 1 create project pnpm and vite
  //for number 2 inisialisasi repository
  //for number 3 clear App
  //for number 4 create const produck
  const products = [
    {
      id: 1,
      productName: "Sneakers Converse CTAS",
      productPrice: "Rp. 599.000",
      urlImage:
        "https://www.converse.id/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/0/2/02-CONVERSE-FFSSBCONA-CONA03576C-Yellow.jpg",
    },
    {
      id: 2,
      productName: "Converse Run Star Motion Canvas",
      productPrice: "Rp. 1.799.000",
      urlImage:
        "https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/C/O/CON171546C-1.jpg",
    },
    {
      id: 3,
      productName: "Converse CTAS Construct Colorblock",
      productPrice: "Rp. 1.599.000",
      urlImage:
        "https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCONA-CONA03472C-Grey.jpg",
    },
    {
      id: 4,
      productName: "Converse Chuck Taylor All Star",
      productPrice: "Rp. 899.000",
      urlImage:
        "https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCON0-CON135251C-Black.jpg",
    },
    {
      id: 5,
      productName: "Converse Unisex Chuck 70 Plus",
      productPrice: "Rp. 1.599.000",
      urlImage:
        "https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCONA-CONA02871C-Brown.jpg",
    },
  ];
  //for number 6 create render list in app
  //for number 7 create css free
  //for number 8 upload github
  return products.map((value, index) => {
    return (
      <div
        style={{
          height: 400,
          width: 400,
          backgroundColor: "green",
          borderRadius: 4,
          padding: 15,
          color: "white",
          marginBottom: 5,
          grid: "block",
          alignItems: "center",
        }}
      >
        <Show
          key={index}
          image={value.urlImage}
          produkName={value.productName}
        />
        <Description
          key={index}
          produkName={value.productName}
          produkPrice={value.productPrice}
        />
        <Like />
      </div>
    );
  });
}

export default App;
