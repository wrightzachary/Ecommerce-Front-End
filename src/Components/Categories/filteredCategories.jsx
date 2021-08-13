import React, {useEffect, useState} from 'react';
import { Container } from 'react-bootstrap';

const FilteredCategories  = (props) => {
    let categories = props.categories
    let allProducts = props.allProducts
    const [filteredProducts, setFilteredProducts] = useState(allProducts)
    let setFilteredCategories = props.setFilteredCategories
    let tempfilteredProducts = [];
    const onChangeComboBox = (event) => {
        const id = event.target.value
        let intSelectedId = Number(`${id}`)
        console.log(filteredProducts)
        filteredProducts.filter((product) => {
            if(product.categoryId === intSelectedId) {
                tempfilteredProducts.push(product);
            } 
        })
        
        setFilteredProducts(tempfilteredProducts)
        setFilteredCategories(tempfilteredProducts)
    }
    useEffect (() => {

    },[filteredProducts])
    return(
        <React.Fragment>
                <Container>Categories
                    <select className="custom-select" onChange={(event) => {onChangeComboBox(event);}} >
                        <option key={categories.length} value={categories.length + 1}>All</option>
                            {categories.map((category) => {
                                return(
                                <option key={category.categoryId} value={category.categoryId} >{category.categoryName}</option>
                                )
                            })}
                    </select>
                    </Container>
        </React.Fragment>
    )
}

export default FilteredCategories;