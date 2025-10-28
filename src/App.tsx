import { useEffect } from "react";
// import logoSociiz from './assets/logo-sociiz.png'
import backgroundSociiz from "./assets/mulher-olhando-para-o-horizonte.f3df96c9088f21b1.jpg";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://main.d36fuu7zqj3xw9.amplifyapp.com/widget.js";
    script.async = true;
    script.setAttribute("clientKey", import.meta.env.VITE_CLIENT_KEY as string);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="relative w-full min-h-screen overflow-y-auto">
      <img
        src={import.meta.env.VITE_BACKGROUND_IMAGE || backgroundSociiz}
        alt="Background"
        className="w-full h-auto object-cover block"
      />
      {/* <img
        src={logoSociiz}
        alt="Logo Sociiz"
        className="absolute top-6 left-6 w-40 h-auto"
      /> */}
    </div>
  );
}

export default App;
