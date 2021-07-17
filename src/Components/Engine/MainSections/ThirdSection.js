import react from 'react'
import CarLogo from "../../CarLogo";
import ImageHeader from "../../ImageHeader";

const ThirdSection = ({ type, data, enterType }) => {

    const [cars, setCars] = react.useState()
    const [car, setCar] = react.useState()
    const [cheaperCar, setCheaperCar] = react.useState()
    const [minusCar, setMinusCar] = react.useState()
    const [plusCar, setPlusCar] = react.useState()
    const [stylishCar, setStylishCar] = react.useState()

    react.useEffect(() => {
        setCars(data)
        setCar(type)
        if (car && cars) {
            setCheaperCarFunc()
            samePlus()
            setStylishCarFunc()
        }
    }, [type, data, car, cars, cheaperCar, minusCar, plusCar, stylishCar])



    const setStylishCarFunc = () => {
        if (car.priceRank < 35) {
            if (car.priceRank + 4 < 35) {
                setStylishCar(cars[car.priceRank + 4])
            }
            else {
                setStylishCar(cars[35])
            }
        } else {
            setStylishCar(null)
        }
    }


    const samePlus = () => {
        if (car.priceRank < 35) {
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
            <div className='sectionPadding'>
                <ImageHeader name='A penny for your thoughts' img='mainHomeBgImg engineSectionImg engineThirdSectionImg' />
                <div className='sectionDescription'>
                    <div className={'sectionThreeContent'}>

                        {!car ? <><h3 className="waitForType">Choose A Car Maker First</h3></> : <>
                            <CarLogo carData={car} />
                            <h5>priceRank: {car.priceRank}</h5>
                            <h4>car's maker average price is : {car.avgPrice}$</h4>
                            
                            <div className="carOptionsContainer">
                                <div>
                                    <h4>much cheaper</h4>
                                    {!cheaperCar ? null :
                                        <button className='carLogo' onClick={chooseType}><CarLogo carData={cheaperCar} /></button>}
                                </div>
                                <div>
                                <h4>a little cheaper</h4>
                                    {!cheaperCar ? null :
                                        <button className='carLogo' onClick={chooseType}><CarLogo carData={minusCar} /></button>}
                                </div>
                                <div>
                                <h4>more expensive</h4>
                                    {!plusCar ? null :
                                        <button className='carLogo' onClick={chooseType}><CarLogo carData={plusCar} /></button>}
                                </div>
                                <div>
                                <h4>much more expensive</h4>
                                    {!plusCar ? null :
                                        <button className='carLogo' onClick={chooseType}><CarLogo carData={stylishCar} /></button>}
                                </div>
                            </div>
                        </>}
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default ThirdSection;
