import {BsSearch} from 'react-icons/bs'

import './index.css'

const FiltersGroup = props => {
  const {categoryOptions, ratingsList, onChangeCategory} = props
  const changeCategory = id => {
    onChangeCategory(id)
  }

  return (
    <div className="filters-group-container">
      <div className="input-con">
        <input type="search" className="input" placeholder="Search" />
        <BsSearch />
      </div>
      <h1 className="filter-head">Category</h1>
      <div className="category-con">
        {categoryOptions.map(eachCat => (
          <button
            type="button"
            className="cat-btn"
            onClick={changeCategory(eachCat.categoryId)}
          >
            {eachCat.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export default FiltersGroup
