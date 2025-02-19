import { createContext, useContext, useState, ReactNode } from 'react';


export type Theme = 'default' | 'mcdonals' | "chiviri4ta";

interface ThemeContextType {
    themeCustom: Theme;
    setThemeCustom: (theme: Theme) => void;
}
/**
 * Custom theme context used to toggle between light and dark mode
 */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Hook to access the theme context
 */
export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme debe utilizarse dentro de un ThemeProvider');
    }
    return context;
}

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
    const defaultTheme = process.env.REACT_APP_DEFAULT_THEME || 'default';

    const [themeCustom, setThemeCustom] = useState<Theme>(defaultTheme as Theme);

  
    return (
        <ThemeContext.Provider value={{ themeCustom, setThemeCustom }}>
            {children}
        </ThemeContext.Provider>
    );
}
