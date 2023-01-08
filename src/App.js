import { useState } from 'react';
import Banner from './components/Banner/Banner.js';
import Formulario from './components/Formulario/Formulario.js';

function App() {

  const [colaboradores, setColaboradores] = useState([])
  console.log(colaboradores)

  return (
    <div className="App">
      <Banner />
        <Formulario adicionarColaboradorCadastrado={colaborador => setColaboradores([...colaboradores, colaborador])} />
    </div>
  );
}

export default App;
