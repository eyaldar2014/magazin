import react from 'react'

import CarLogo from "../../CarLogo";
import ImageHeader from "../../ImageHeader"

const FirstSection = ({ data, enterType }) => {

    const [cars, setData] = react.useState()


    react.useEffect(() => {
        setData(data)
    }, [data])

    // console.log(data)


    const chooseType = (e) => {
        // console.log(e.target.alt)
        let type = cars.filter(car => car.name === e.target.alt)
        enterType(type[0])
    }



    return <>

        <div className={'sectionBody'}>
            <div className='sectionPadding'>

                <ImageHeader name='Choose A Car Maker' img='mainHomeBgImg engineSectionImg engineFirstSectionImg' />

                <div className='sectionDescription'>

                    <div className={'carLogoContainer'}>
                        {!cars ? null : <>
                            {cars.map((c, index) => {
                                return <button key={index} onClick={chooseType} className='carLogo'>
                                    <CarLogo carData={c} />
                                </button>
                            })}
                        </>}

                    </div>
                </div>

            </div>
        </div>

    </>
}

export default FirstSection;
