import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ProductBanner from '../Components/UI/ProductBanner'
import { GameData } from '../Components/Data/GameData'

const Products = () => {

    const { name } = useParams()

    const oneProduct = GameData.find((x) => x.name === name);

    return (
        <div>
            <Navbar />
            <ProductBanner item={oneProduct} />
            <Footer />
        </div>
    )
}

export default Products
