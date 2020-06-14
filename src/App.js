import React, {useState} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario'
import Resumen from './components/Resumen'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'

import styled from '@emotion/styled';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFFFFF;
  padding: 3rem;
`;

function App() {

  /* Datos que van a pasar al formulario, los va a tomar y se van a guardaren el resumen  */
  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  const [cargando, guardarCargando] = useState(false);

  /* Extraccion de datos */
  const {cotizacion, datos} = resumen;

  /**
   * En el curso habia un problema en el ultimo paso... No escondia el componente de resumen
   * asi que le agregue el ternario y problema solucionado
   */

  return (
    <Contenedor>
      <Header
        titulo="Cotizador de seguros"
      />

      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />

        {cargando ? <Spinner/> : null}
        

        {!cargando ?
        <Resumen
          datos={datos}
        />:null
        }

        {!cargando ?
        <Resultado
        cotizacion={cotizacion}
       /> : null
        }
      </ContenedorFormulario>

    </Contenedor>


  );
}

export default App;
