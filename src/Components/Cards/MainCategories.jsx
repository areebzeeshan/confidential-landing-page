import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import { GameData } from '../Data/GameData'

const MainCategories = () => {

    const [haveImages, setHaveImages] = useState([])

    useEffect(() => {
      setHaveImages(GameData.filter((x) => x.bgImage))
    }, [])
    

    return (
        <div>
      
      {haveImages.map((x, index) => (
            <React.Fragment key={index}>
                <CategoryCard x={x} />
            </React.Fragment>)
      )}
        </div>
    )
}

export default MainCategories;
