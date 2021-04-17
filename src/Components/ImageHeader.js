// import react from 'react'

const ImageHeader =({name, img})=>{

    return <>
                    <div className={img}>
                        <h1 className='bgLine'><span>{name}</span></h1>
                    </div>
    </>
}

export default ImageHeader;
