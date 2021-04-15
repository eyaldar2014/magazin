import react from 'react'

import CarLogo from "../../CarLogo";
import axios from "axios";

const SecondSection = ({type}) => {

    const [models, setModels] = react.useState()
    const [currentModels, setCurrentModels] = react.useState()
    const [car, setCar] = react.useState()
    const [search, setSearch] = react.useState("")
    const [year, setYear] = react.useState(2000)
    const [yearForModel, setYearForModel] = react.useState()
    const [chosenModel, setChosenModel] = react.useState()

    const callApi = async () => {
        try {
            const result = await axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/' + car.id + '/modelyear/' + year + '?format=json')
            // console.log(result.data.Results[0].Model_Name)
            setModels(result.data.Results)
            setCurrentModels(result.data.Results)
            // console.log(result.data.Results)
        } catch (error) {
            console.error(error)
        }
    }

    react.useEffect(() => {
        // console.log(type)
        setCar(type)
        setYearForModel(null)
        setCurrentModels(null)
        setSearch('')
    }, [type])


    const filterModels = (data) => {
        let relevant = models.filter(m => m.Model_Name.toLowerCase().includes(data))
        setCurrentModels(relevant)
    }

    const searchHandler = (e) => {
        setSearch(e.target.value)
        return !models ? null : filterModels(e.target.value)
    }

    const yearHandler = (e) => {
            setYear(e.target.value)

    }

    const chooseYear = (e) => {
        if (year > 1999 && year < 2021) {
            setYearForModel(year)
            setSearch('')
            if (type) {
                callApi()
            }
        }
        else {
            setYear(2000)
            setYearForModel(null)
            setSearch('')
        }
    }

    const chooseModel = (e) => {
        console.log(chosenModel)
    }

    const selectedModel = (e) => {
        // console.log(e.target.value)
        setChosenModel(e.target.value)
    }

    return <>

        <div className={'sectionBody'}>

            {!car ? null : <CarLogo carData={car}/>}
            <label htmlFor="year-select">Choose a Year between 2000 to 2020: </label>
            <input type='number' id={'year-select'} onChange={yearHandler} value={year} placeholder={'2000-2020'}
                   min={2000} max={2020}/>
            <input type='button' onClick={chooseYear} value={'click'}/>
            <br/>

            {!yearForModel ? null : <>

                <label htmlFor="model-select">Choose a Model: </label>
                <input type='search' onChange={searchHandler} value={search} placeholder={'search model'}/>

                <select id="model-select" onChange={selectedModel}>
                    <option value="non">--Please choose an option--</option>
                    {!currentModels ? null : <>
                        {currentModels.map((m, index) => {
                            return <option key={index}
                                           value={m.Model_Name.toLowerCase()}>{m.Model_Name.toLowerCase()}</option>
                        })}
                    </>}
                </select>

                <input type='button' onClick={chooseModel} value={'choose this!'}/>
            </>}

        </div>

    </>
}

export default SecondSection;
