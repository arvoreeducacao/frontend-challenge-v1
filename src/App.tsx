import { useEffect, useMemo, useState } from "react";
import Home from "./view/Home";
import Search from "./view/Search";

const useSimpleRouter = () => {
  const [route, setRoute] = useState<'home' | 'search'>('home');

  useEffect(() => {
    const { location } = window;
    
    window.onhashchange = () => {
      if(!location.hash) setRoute('home');
      else if(location.hash === '#search') setRoute('search');
    };
    
  }, [route]);
  
  return useMemo(() => {
    switch(route) {
      case 'search': return <Search />;
      default: return <Home />;
    }
  }, [route]);
};

function App() {
  const Page = useSimpleRouter();
  return <>{Page}</>;
}

export default App;