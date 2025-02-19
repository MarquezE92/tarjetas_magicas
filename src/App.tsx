
import { CustomThemeProvider } from './app/context/ThemeContext';
import { Layout } from "./layout/Layout";


const App = () => {

  return (
    <CustomThemeProvider>
      <Layout/>
    </CustomThemeProvider>

  )
}

export default App;
