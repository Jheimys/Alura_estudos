
import './App.css'
import Pirata from './components/pirata'
import Recompensa from './components/recompesa'

function App() {

  return (
    <>
      <Pirata 
        nome="Chopper" 
        cargo="Médico" 
        imagem="https://i.pinimg.com/564x/ec/5b/57/ec5b57209323835ff8513238a48811eb.jpg" 
      />

      <Recompensa valorRecompensa={10} />
    </>
  )
}

export default App
