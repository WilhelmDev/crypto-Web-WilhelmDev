import styled from "@emotion/styled"

const Cotizacion = styled.div`
    color: white;
    font-family: 'lato', sans-serif;
    margin-left: 5%;
    margin-right: 5%;

    @media (min-width: 501px) {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    @media (max-width: 500px) {
        display: flex;
        align-items: center;
        flex-direction: column-reverse;
    }

`
const Texto = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }

`
const Precio = styled.p`
    
    span {
        font-weight: 700;
    }
    //PC y Tablet
    @media (min-width: 501px) {
        font-size: 28px;
    }
    //TLF
    @media (max-width: 500px) {
        font-size: 32px;
        text-align: center;
    }
`
const Img = styled.img`
    @media (min-width: 501px) {
        width: 150px;
    }
    @media (max-width: 500px) {
        width: 200px;
    }
`

const Cotized = ({cotized}) => {
    const {PRICE, HIGHDAY, LOWDAY, LASTUPDATE, CHANGEPCT24HOUR, IMAGEURL, TOSYMBOL} = cotized
    return (
        <Cotizacion>
            <Img src={`https://cryptocompare.com/${IMAGEURL}`} alt="CriptoImg"/>
            <div>
                <Precio> El precio actual es: <br/> <span> {PRICE}</span></Precio>
                <Texto> El precio mas alto del dia es: {''}<span> {HIGHDAY}</span></Texto>
                <Texto> El precio mas bajo del dia es: {''}<span> {LOWDAY}</span></Texto>
                <Texto> El cambio en las ultimas 24H fue: {''} <span>{CHANGEPCT24HOUR} {TOSYMBOL}</span></Texto>
                <Texto> La ultima actualizacion fue: {''} <span>{LASTUPDATE}</span></Texto>
            </div>
        </Cotizacion>
    )
}

export default Cotized