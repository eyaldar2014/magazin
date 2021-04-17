// import react from 'react'

const Button = ({ name, myFunc, place }) => {


  const btnFunc = () => {
    return myFunc()
  }

  return <>
    <div className={place}>
        <button className={'btn'} onClick={btnFunc}>{name}</button>
    </div>
  </>
}

export default Button;
