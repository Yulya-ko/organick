import { useDispatch, useSelector } from "react-redux"
import { filterCategory, getSelectedCategory } from "../../redux/foodSlice"
import { Box, Typography } from "@mui/material";

const Filter = ({category}) => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory);

    return (
        <Box>
            <Typography onClick={() => {dispatch(filterCategory(category))}} className={selectedCategory === category ? 'categoryButtonSelected categoryButton' : 'categoryButton'}>
                {category}
            </Typography>
        </Box>
    )
}

export default Filter