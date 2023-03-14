import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import { coins } from '../data/coins'
import useSelectCoin from '../hooks/useSelectCoin'
import Error from './Error'


const InputSubmit = styled.input`
    border: none;
    background-color: #2e63c5;
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 15px;
    border-radius: 6px;
    padding: 10px;
    color: white;
    text-transform: uppercase;
    font-size: 20px;
    transition: background-color .3s ease;
    &:hover{
        cursor: pointer;
        background-color: #245eca;
    }
`
const Firm = styled.h5`
    text-align: center;
    font-family: 'lato', sans-serif;
    color: white;
    margin-top: 2px;
    margin-bottom: 0;
    opacity: 0.60;
`

const Form = ({setSearch}) => {
    const [crypto, setCrypto] = useState([])
    const [error, setError] = useState(false)

    const [ coin, SelectCoin ] = useSelectCoin('Elige tu moneda', coins)
    const [ cryptoSelected, SelectCrypto ] = useSelectCoin('Elige tu criptomoneda', crypto)
    
    useEffect(() => {
        const apiRequest = async () => {
            const urlCoins = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD"
            const response = await fetch(urlCoins)
            const result = await response.json()
            
            const coinsArray = result.Data.map( (y) => {
                const object = {
                    id: y.CoinInfo.Name,
                    name: y.CoinInfo.FullName
                }
                return object
            } )
            setCrypto(coinsArray)
        }
        apiRequest();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if ([coin, cryptoSelected].includes('')) {
            setError(true)
            return
        }
        setError(false)
        setSearch({coin, cryptoSelected})
    }

        return (
            <>
                {error && <Error> Todos los campos son obligatorios </Error> }
                <form action="" onSubmit={handleSubmit}>
                    <SelectCoin />
                    <SelectCrypto />
                    <Firm> Coded by WilhelmDev </Firm>
                    <InputSubmit type="submit" value="Cotizar"/>
                </form>
            </>
        )
}

export default Form