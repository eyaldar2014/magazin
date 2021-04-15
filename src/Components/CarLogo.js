import react from 'react'

const CarLogo = ({carData}) => {

    const [car, setCar] = react.useState()

    react.useEffect(() => {
        setCar(carData)
    }, [carData])

    return <>
        <div>
            {!car? null : <>
            <img src={car.imgUrl} alt={car.name} className={'carIcon'}/>
            <div>{car.name}</div>
            </>}
        </div>

    </>
}

export default CarLogo;
