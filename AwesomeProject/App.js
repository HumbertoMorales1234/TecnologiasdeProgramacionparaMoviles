import { NavigationHolder } from './NavigationHolder';
import { AppContextProvider } from './src/context/AppContext';

export default function App() {  
  return (
    <AppContextProvider>
        <NavigationHolder/>
    </AppContextProvider>
  )
}