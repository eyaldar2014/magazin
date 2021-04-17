// import react from 'react'

const Description = ({ place, title, text, spanColor, img }) => {


  return <>
    <div className={place}>
      <div className={'Description ' + img} >
        <h2>{title}</h2>
        <span className={spanColor}>{text}</span>

      </div>
    </div>
  </>
}

export default Description;
