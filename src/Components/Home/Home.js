import react from 'react'

import { Redirect } from "react-router-dom";

import ImageHeader from '.././ImageHeader'
import Button from '.././Button'
import Description from '../Description';

const Home = (props) => {

    const [magazine, setMagazine] = react.useState(true)
    const goToMagazine = () => { return setMagazine(false) }

    return <>

        {magazine ? null : <Redirect to="/magazine" />}

        {/* <div className={'home'}> */}
        <div className='homeSection'>
            <div className={'contact'}>

                <ImageHeader name='CONTACT US' img='contactBgImg' />
            </div>
        </div>


        <hr />
        <div className='homeSection'>
            <div className={'contact'}>
                <ImageHeader name='Magazine' img='magazineHomeBgImg' />
                <Description place='homeMagazineDescription' title='Everything About Cars' text='all the information, pictures and new of the amazing world of carmobiles'/>
                <Button place="homeMagazineButton" name='Enter =>' myFunc={goToMagazine} />
            </div>
        </div>
        <hr />




        <div className='homeSection'>
            <div className={'contact'}>
                <ImageHeader name='CONTACT US' img='contactBgImg' />
            </div>
        </div>

        {/* enginee.... */}

        {/* magazine... */}

        {/* about & contact... */}
        {/* </div> */}

    </>
}

export default Home;
