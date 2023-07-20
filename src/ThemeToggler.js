import ThemeContext from "./themeContext";
import { useContext, useState } from "react";
import { DARK, LIGHT } from "./themeReducer";
const ThemeToggler = () => {
    const [showLight, setShowLight] = useState(true);
    const [themeState, themeSetter] = useContext(ThemeContext);
    const dispatchDarkTheme = () => themeSetter(DARK);
    const dispatchLightTheme = () => themeSetter(LIGHT);
    const toggleTheme = () => {
        showLight ? dispatchDarkTheme() : dispatchLightTheme();
        setShowLight(!showLight);
    };
    console.log(themeState);
    return (
        <div>
            <button onClick={toggleTheme}>
                {showLight ? "Change to Dark Theme" : "Change to Light Theme"}
            </button>
        </div>
    );
};
export default ThemeToggler;