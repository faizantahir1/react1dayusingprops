import React from "react";
import  ReactDOM  from "react-dom";
import './style.css'
const BookList = () => {
  return(
  <>
  <div className="container">
  <Book image='https://images-na.ssl-images-amazon.com/images/I/91jbHTNpy6L._AC_UL254_SR254,254_.jpg' title='Book1' price={55}/>
  <Book image='https://images-na.ssl-images-amazon.com/images/I/81V-RZ93DpL._AC_UL254_SR254,254_.jpg' title='Book2' price={65}/>
  <Book image='https://images-na.ssl-images-amazon.com/images/I/91fRT+cJNzL._AC_UL127_SR127,127_.jpg' title='Book3' price={21}/>
  <Book image='https://images-na.ssl-images-amazon.com/images/I/611X8GI7hpL._AC_UL127_SR127,127_.jpg' title='Book4' price={95}/>
  
  </div>
  </>
 )
}



const Book= (props) =>{
  return(
    <>
    <div className="book">

    <img src={props.image} alt="" />
    <h5>{props.title}</h5>
    <p>${props.price}</p>
    </div>
    </>
  )
}


ReactDOM.render(<BookList/>,document.getElementById('root'))
