import React from 'react';
import './categories.css'
const Categories  = (props) => {
    let categories = props.categories
    const onChangeComboBox = (event) => {
        const selectedId = event.target.value
        props.userCurrentCategoryId(selectedId);
    }
    return(
        <React.Fragment>
            <h5 className="title">Categories </h5>
                    <select className="form-select" onChange={(event) => {onChangeComboBox(event);}} >
                            {categories.map((category) => {
                                return(
                                <option key={category.categoryId} value={category.categoryId}>{category.categoryName}</option>
                                )
                            })}
                    </select>
        </React.Fragment>
    )
}

export default Categories;