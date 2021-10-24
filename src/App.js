import './App.css';

import react from 'react'
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from './Components/Landing/Landing'
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Engine from './Components/Engine/Engine'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import NotFound from './Components/NotFound/NotFound'
import Form from './Components/Form/Form'

const { symbols } = require('./Components/ModelSymbols')


function App() {

    const [load, setLoad] = react.useState(true)
    const [apiData, setData] = react.useState()

    react.useEffect(() => {

        callApi()

        setTimeout(() => {
            setLoad(false)
        }, 2000)
    }, []);


    const processData = (data) => {
        // console.log(data)
        let newArray = data[1].map((m) => {
            let temp = {}
            temp.name = m.name
            temp.avgPrice = m.avg_price

            data[0].forEach((x) => {
                if (x.Make_Name.toLowerCase() === m.name) {
                    // console.log(x.Make_Name.toLowerCase())
                    return temp.id = x.Make_ID
                }
            })
            symbols.forEach((s) => {
                if (s.name === m.name) {
                    return temp.imgUrl = s.symbolUrl
                }
            })
            // console.log(temp)
            return temp
        })

        // delete items with no 'id', meaning there is no match between the two api(s)
        newArray.forEach((x, i) => {
            if (!x.id) newArray.splice(i, 1)
        })


        const idMemory = []
        newArray = newArray.filter(c => {
            if (!idMemory.includes(c.id)) {
                idMemory.push(c.id)
                return c
            }
            return null
        })

        newArray.sort((a, b) => {
            return a.avgPrice - b.avgPrice
        })
        //priceCategory
        newArray.forEach((c, i) => {
            c.priceRank = i
        })
        // console.log(newArray)
        setData(newArray)
    }

    const callApi = async () => {
        try {
            const result = await axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json')

            // json backup for this api exists in fixtures folder
            let result2 = await axios.get('https://private-anon-aa07c7b287-carsapi1.apiary-mock.com/manufacturers')

            let temp = []
            temp.push(result.data.Results)
            temp.push(result2.data)
            // console.log(temp)
            // setData(temp)
            processData(temp)
        } catch (error) {
            console.error(error)
        }
    }


    return <>
        <BrowserRouter>
            <Navbar />
            {load ? <Landing /> : <>

                <Switch>
                    {/*{this.state.data.map(item=>(*/}
                    {/*    <Route path={"/products/" + item.id}>*/}
                    {/*      <ProductDetail name={item.id}/>*/}
                    {/*    </Route>*/}
                    {/*))}*/}
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/engine">
                        <Engine data={apiData} />
                    </Route>
                    <Route exact path="/form">
                        <Form />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/">
                        <NotFound />
                    </Route>
                </Switch>

            </>}

            <Footer />

        </BrowserRouter>
    </>

}

export default App;
