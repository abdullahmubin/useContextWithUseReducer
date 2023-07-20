import Colors from "./colors";
export const LIGHT = "LIGHT";
export const DARK = "DARK";
const themeReducer = (state, action) => {
    switch (action.type) {
        case LIGHT:
            return {
                ...Colors.light
            };
        case DARK:
            return {
                ...Colors.dark
            };
        default:
            return state;
    }
};
export default themeReducer;