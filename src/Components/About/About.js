import react from 'react'

const About = (props) => {



    return <>
        <div className={'aboutContainer'}>
            <div className={'about'}>
                <h1>About</h1>
                <br /><br />
            this is my first react project, It focuses on a subject I love - cars.
            <br /><br />
            This project contains few elements: well prepared site that reflects some functions for car owners and
            lovers, with full developed react structure including: smart components, roots, api uses, data save&handling,
            images&videos, form submit, controlled inputs, contact methods, awesome landing page with spinner, and smart
            "algorithm" as the site core - the purpose of this site.
            <br /><br />
            This smart algorithm helps car owners understanding car costs and choose options like saving money, getting
            different car on equal price, and see proportions of different car companies. Also it shows one a path to
            pocess his/hers dream car by making priorities.
            <br /><br />
            In the future, this site can easily add well targeted shop, using users info and activity, with exact
            products for their specific car, preferation, need, and budget. as well as subscription for personal relevant
            information per user based on their car declaration as car owner and/or fan.
            </div>

            <div className='aboutImg'></div>

        </div>
    </>
}

export default About;
