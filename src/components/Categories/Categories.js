//====== import hooks from react-redux for the components to read state ======//
import { useSelector, useDispatch } from 'react-redux';

import { Breadcrumbs, Link, Typography } from '@material-ui/core';


function CategoryList() {

  //====== add hooks to function
  const categories = useSelector(state => state.store.categories);
  const dispatch = useDispatch();

  const setCategory = (category) => {
    dispatch({
      type: 'ACTIVATE',
      payload: category,
    });
  }
  return (
    <Breadcrumbs elevation={3}>
      {/* ==== display each category with map()=== */}
      {categories.map(category => {
        return (
          <Link onClick={() => setCategory(category.normalizedName)}>
            <Typography component="h2"> {category.displayName} </Typography>
            
          </Link>
        )
      })}
    </Breadcrumbs>
  )

}

export default CategoryList;
