import { THEME_TOGGLE } from "../actionTypes/actionTypes"

const initialState ={
    theme:false
}

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case THEME_TOGGLE:
            const theme = !state.theme
            return {theme}
            
    
        default:
            return state
    }
}

export default themeReducer