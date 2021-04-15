import react from 'react';
// import axios from "axios";

import FirstSection from './MainSections/FirstSection'
import SecondSection from './MainSections/SecondSection'
import ThirdSection from './MainSections/ThirdSection'



const Engine =({data})=>{

    const [apiData, setData] = react.useState()
    const [type, setType] = react.useState()

    const getType = (type) =>{
        // console.log(type)
        setType(type)
    }

    react.useEffect(()=>{
        setData((data))
    }, [data])
    // console.log(data)

    return <>

        <FirstSection data={apiData} enterType={getType}/>
        <SecondSection type={type}/>
        <ThirdSection type={type} data={apiData}  enterType={getType}/>

    </>
}

export default Engine;
