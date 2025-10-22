import logoSociiz from './assets/logo-sociiz.png'
import backgroundSociiz from './assets/mulher-olhando-para-o-horizonte.f3df96c9088f21b1.jpg'

function App() {
  return (
    <div
      className="relative w-screen h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${backgroundSociiz})` }}
    >
      <img
        src={logoSociiz}
        alt="Logo Sociiz"
        className="absolute top-6 left-6 w-40 h-auto"
      />

      <h2 className="text-2xl md:text-4xl font-mono text-center drop-shadow-lg">
        JUNTOS, PENSANDO NO FUTURO.
      </h2>
    </div>
  )
}

export default App
