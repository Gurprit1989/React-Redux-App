import React from 'react';
import {connect} from 'react-redux';



const ItemDetail = (props) => {
  if(props.selectedItem === null ) {
      return <div><h2>No item selected</h2></div>
  }
  else {
      return (
        <div>
            <h2>Details of {props.selectedItem.title}</h2>
            <h3>Type: {props.selectedItem.type}</h3>
            <p>Description: {props.selectedItem.description}</p>
            <img src = {props.selectedItem.imgsrc}/>
        </div>
      ) 
  }
}


const mapStateToProps = (state) => {
    return {selectedItem: state.selectedItem};
}
export default connect(mapStateToProps)(ItemDetail);