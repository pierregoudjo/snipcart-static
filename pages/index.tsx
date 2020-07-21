import Header from "../components/Header"
import ProductList from "../components/ProductList"
import { IProduct } from "../components/Product"
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import Head from "next/head"

import "../styles.scss"

interface IIndexProps {
  products: IProduct[]
}

const Index = (props: IIndexProps) => {
  return (
    <div className="app">
      <Head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="https://cdn.snipcart.com/themes/v3.0.17/default/snipcart.js"></script>
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.17/default/snipcart.css" />
      </Head>
      <Header />
      <div hidden id="snipcart" data-api-key="MzkzZjA5ZjUtMzE2OC00OTliLTllZDEtZTIwMDg4MmIyYTJjNjM3MzAyMTIzMDI1NjY0Mzk0" data-currency="eur"></div>
      <main className="main">
        <div className="promotional-message">
          <h3>Cosmetics</h3>
          <h2>Otiti</h2>
          <p>Collection <strong>exclusive</strong> de cosmetiques disponible pour tout le monde.</p>
        </div>
        <ProductList products={props.products} />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

Index.getInitialProps = async () => {
  return {
    products: [
      {id: "black_soap", name: "Savon noir pour tout teint", price: 25.00, image: "../static/black_soap.JPG", description: "Le savon noir de toilette est un produit phare du rituel du hammam . Il est composé d’huile et d’olives noires broyées, ce qui explique sa couleur sombre. En cosmétique, il est très prisé pour ses propriétés exfoliantes, nettoyantes et purifiantes pour la peau. Vous pouvez ainsi réaliser des soins du corps et du visage avec du savon noir"} as IProduct,
      {id: "firming_products", name: "Gamme raffermissante", price: 35, image: "../static/firming_products.JPG",description: "L'entretien du corps est une des préoccupations majeures des femmes, et ce depuis la nuit des temps. Cléopâtre ne se baignait-elle pas dans du lait d'ânesse pour freiner le vieillissement de sa peau ? Protéger et hydrater son épiderme est essentiel, mais sachez que c'est le derme qu'il vous faut chouchouter."} as IProduct,
      {id: "honey_mask", name: "Soin visage au miel", price: 7.50, image: "../static/honey_mask.JPG", description: "Le miel est un ingrédient beauté présent dans de nombreux soins : ses vertus pour la peau sont innombrables, il permet de soigner tous les types de peaux. Le miel a des vertus hydratante, nourrissante, adoucissante, et apaisante qui conviennent très bien aux peaux sèches et aux peaux sensibles. Riche en antioxydants, il a également un fort pouvoir régénérant intéressant pour les peaux matures."} as IProduct,
      {id: "soap_scrub", name: "Savon gommant", price: 5.00, image: "../static/soap_scrub.JPG", description: "Faire un gommage consiste à nettoyer sa peau avec un produit permettant d’éliminer les cellules mortes accumulées à sa surface. On parle aussi d’exfoliation, de gommage avec un exfoliant etc. Le gommage activant la microcirculation sanguine, les cellules de la peau sont mieux oxygénées, mieux nourries"} as IProduct,
    ]
  }
}

export default Index