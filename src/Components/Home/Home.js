import react from 'react'

import { Redirect } from "react-router-dom";

import ImageHeader from '.././ImageHeader'
import Button from '.././Button'
import Description from '../Description';

const Home = (props) => {

    const [magazine, setMagazine] = react.useState(true)
    const goToMagazine = () => { return setMagazine(false) }
    const [engine, setEngine] = react.useState(true)
    const goToEngine = () => { return setEngine(false) }
    const [about, setAbout] = react.useState(true)
    const goToAbout = () => { return setAbout(false) }
    const [contact, setContact] = react.useState(true)
    const goToContact = () => { return setContact(false) }

    return <>
        {engine ? null : <Redirect to="/engine" />}
        {magazine ? null : <Redirect to="/magazine" />}
        {contact ? null : <Redirect to="/contact" />}
        {about ? null : <Redirect to="/about" />}

        <div className='homeSection'>
            <div className={'homePadding'}>
                <ImageHeader name='Engine' img='mainHomeBgImg engineHomeBgImg' />
                <Description place='homeMainDescription' title='Choose Your Favorite Models' spanColor='darkGrey' text='All the manufacturers. All the models. Find the most suitable car for you.' />
                <Button place="homeEngineButton" name='Enter =>' myFunc={goToEngine} color='darkOrange' />
            </div>
            <hr />
        </div>

        <div className='homeSection'>
            <div className={'homePadding'}>
                <ImageHeader name='Magazine' img='mainHomeBgImg magazineHomeBgImg' />
                <Description place='homeMainDescription' title='Everything About Cars' spanColor='grey' text='All the information, pictures and new of the amazing world of carmobiles.' />
                <Button place="homeMagazineButton" name='Enter =>' myFunc={goToMagazine} color='darkOrange' />
            </div>
            <hr />
        </div>

        <div className='homeSection'>
            <div className={'homePadding'}>
                <ImageHeader name='Who Are We' img='' />

                <Description img='contactImageHome' place='homeLeftDescription' title='Contact Us' spanColor='lightGrey' text='get in touch' />
                <Button place="homeLeftBtn" name='Connect =>' myFunc={goToContact} color='darkOrange' />

                <Description img='aboutImageHome' place='homeRightDescription' title='About Us' spanColor='black' text='creation description' />
                <Button place="homeRightBtn" name='Read =>' myFunc={goToAbout} color='darkOrange' />
            </div>
        </div>
        <div className='homeEnd'></div>

    </>
}

export default Home;
