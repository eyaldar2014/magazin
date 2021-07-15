import symbols from './Components/ModelSymbols'


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



function App() {

    const [load, setLoad] = react.useState(true)
    const [apiData, setData] = react.useState()

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
            symbols.Symbols.forEach((s) => {
                if (s.name === m.name) {
                    // console.log(s.name)
                    return temp.imgUrl = s.symbolUrl
                }
            })
            return temp
        })
        newArray = newArray.filter(c => c.id)
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
            const result2 = await axios.get('https://private-anon-65f39ae8d4-carsapi1.apiary-mock.com/manufacturers')
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

    react.useEffect(() => {

        callApi()

        setTimeout(() => {
            setLoad(false)
        }, 2000)
    }, []);


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
