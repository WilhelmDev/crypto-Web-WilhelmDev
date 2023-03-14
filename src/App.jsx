import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import Cotized from './components/Cotized';
import Form from './components/Form';
import Spinner from './components/Spinner';
import useSelectCoin from './hooks/useSelectCoin';
import CriptoImage from './img/imagen-criptos.png';


const ContainerMain = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  //tablets y pc
  @media (min-width: 501px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10px;
  }
  //phones
  @media (max-width: 500px ) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
const ImageRef = styled.img`
  max-width: 420px;
  width: 90%;
  //delete margin for mobiles
  @media (min-width: 501px) {
    margin: 100px auto 0 auto;
  }
`
const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: white;
  text-align: center;
  font-weight: 700;
  
  margin-bottom: 50px;
  font-size: 34px;
  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
    border-radius: 6px;
  }
  @media (min-width: 501px) {
    margin-top: 80px;
  }
`

  function App() {
  const [search, setSearch] = useState({})
  const [cotized, setCotized] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    
    if (Object.keys(search).length > 0) {
      
      
      
      const cotization = async () => {
        setLoading(true); setCotized({})
        
        const {coin, cryptoSelected} = search
        const urlCall = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoSelected}&tsyms=${coin}`
        const respuesta = await fetch(urlCall)
        const resultCot = await respuesta.json()
        setCotized(resultCot.DISPLAY[cryptoSelected][coin])

        setLoading(false)
      }
      cotization()
      
    }

  },[search])
  

    return (
      <>
        <ContainerMain>
          <ImageRef src={CriptoImage} />

          <div>
            <Heading> Cotiza tus criptomonedas <span> aqui </span> </Heading>
            <Form setSearch={setSearch} />
            {loading && <Spinner />}
            {cotized.PRICE && <Cotized cotized={cotized} />}
          </div>
        </ContainerMain>
      </>
    )
  }

export default App
