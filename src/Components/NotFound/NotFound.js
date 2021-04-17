import react from 'react'
import { Redirect } from "react-router-dom";

const NotFound = (props) => {

  const [load, setLoad] = react.useState(true)

  react.useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 2000)
  }, []);

  return <>
    {load ? <>
      <div className={'notFound'}>
        Error : NotFound<br/>
         redirect home...
        </div>
    </> : <>
      <div className={'notFound'}>
        <Redirect to="/home" />
      </div>
    </>}


  </>
}

export default NotFound;
