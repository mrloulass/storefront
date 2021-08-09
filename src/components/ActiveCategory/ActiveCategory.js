import { useSelector} from "react-redux";
import {Typography} from '@material-ui/core';

function ActiveCategory() {
 
  const activeCategory = useSelector(state => state.categories.activeCategory);
  
  return (
    <Typography variant="h4" >{activeCategory}</Typography>
  );
}

export default ActiveCategory;
