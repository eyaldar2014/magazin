// import react from 'react'

const Button = ({ name, myFunc, place, color }) => {


  const btnFunc = () => {
    return myFunc()
  }

  return <>
    <div className={place}>
        <button className={'btn ' + color} onClick={btnFunc}>{name}</button>
    </div>
  </>
}

export default Button;
