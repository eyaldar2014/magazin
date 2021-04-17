// import react from 'react'

const Description = ({ place, title, text }) => {


  return <>
    <div className={place}>
      <div className='Description' >
        <h2>{title}</h2>
        <span>{text}</span>

      </div>
    </div>
  </>
}

export default Description;
