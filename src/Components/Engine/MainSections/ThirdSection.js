import react from 'react'
import CarLogo from "../../CarLogo";

const ThirdSection = ({type, data, enterType}) => {

    const [cars, setCars] = react.useState()
    const [car, setCar] = react.useState()
    const [cheaperCar, setCheaperCar] = react.useState()
    const [minusCar, setMinusCar] = react.useState()
    const [plusCar, setPlusCar] = react.useState()
    const [stylishCar, setStylishCar] = react.useState()

    react.useEffect(() => {
        // console.log(type)
        setCars(data)
        setCar(type)
        if (car && cars) {
            setCheaperCarFunc()
            samePlus()
            setStylishCarFunc()
        }
    }, [type, data, car, cars, cheaperCar, minusCar, plusCar, stylishCar])



    const setStylishCarFunc=()=>{
        if (car.priceRank < 34) {
            if(car.priceRank + 4 < 34){
                setStylishCar(cars[car.priceRank + 4])
            }
            else {
                setStylishCar(cars[34])
            }
        } else {
            setStylishCar(null)
        }
    }


    const samePlus = () => {
        if (car.priceRank < 34) {
            setPlusCar(cars[car.priceRank + 1])
        } else {
            setPlusCar(null)
        }
    }

    const setCheaperCarFunc = () => {
        // console.log('here')
        if (car.priceRank > 0) {
            setCheaperCar(cars[Math.floor(car.priceRank / 2)])
            setMinusCar(cars[car.priceRank - 1])
        } else {
            setCheaperCar(null)
            setMinusCar(null)
        }
    }

    const chooseType = (e) => {
        // console.log(e.target.alt)
        let type = cars.filter(car => car.name === e.target.alt)
        enterType(type[0])
    }

    return <>
        <div className={'sectionBody'}>
            {!car ? null : <>
                <CarLogo carData={car}/>
                priceRank: {car.priceRank}
                <br/>
                your cars maker average price is : {car.avgPrice}
                <br/>
            </>}
            <br/>
            options : similar(different manufacturer but similar level) / newer(cheaper manufacturer) / moreStyle(and
            older)
            <br/><br/>
            1 : get newer car on the same price by choosing a cheaper manufacturer (if exists). set manufacturer:
            {!cheaperCar ? null : <button onClick={chooseType}><CarLogo carData={cheaperCar}/></button>}


            <br/>
            2 : change your car with a similar manufacturer on the same price range:
            a little cheaper - {!cheaperCar ? null :
            <button onClick={chooseType}><CarLogo carData={minusCar}/></button>}
            <br/>
            a little more expensive - {!plusCar ? null :
            <button onClick={chooseType}><CarLogo carData={plusCar}/></button>}
            <br/>


            <br/>
            3 : get a more stylish car, hopefully on the same price (but few years older..)
            {!plusCar ? null :
            <button onClick={chooseType}><CarLogo carData={stylishCar}/></button>}

            <br/><br/><br/>
            Modify year and model on the previous section !

        </div>

    </>
}

export default ThirdSection;
