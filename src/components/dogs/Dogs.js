import React from 'react'
import DogItem from './DogItem'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'


const Dogs = ({dogs,images,loading})=> {
    if(loading){
        return <Spinner/>
    }
    else{
       // console.log(dogs);

        return (
            <div style={dispStyle}>
                {dogs.map((val,index)=>(
                    <DogItem key={index} 
                    name={val} 
                    img={images[index]}/>
                )
                )}
            </div>
        )
    };
        
}

Dogs.propTypes={
    dogs:PropTypes.array.isRequired,
    images:PropTypes.array.isRequired,
    loading:PropTypes.bool.isRequired,
}

const dispStyle={
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    gridGap:'1rem'
}



export default Dogs