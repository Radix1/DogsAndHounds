import React from 'react'
import PropTypes from 'prop-types'

 const DogItem = ({name,img}) =>{
     

        return (
            <div className="card text-center">
              <h3>
              <img 
                src={img} alt="A hound"
                 className="round-img"
                style={{width: '200px'}}></img>
               </h3> 
                
               <h3>
                 <div className="card text-center"
                 >
                 {name}
                 </div> 
              </h3>
                
            </div>
        )
}

DogItem.propTypes={
    name:PropTypes.string.isRequired,
    img:PropTypes.string.isRequired
}

export default DogItem
