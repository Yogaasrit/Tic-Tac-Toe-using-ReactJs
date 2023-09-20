import React from "react";
// import Button from "../Button/Button";
const Box = () => {
  const handleClick = (buttonNumber) => {
    console.log(buttonNumber);
  }
  return (
    <div>
      <div className="container border">
        <div className="row my-0 mx-5">
          <div className="col gx-0">
            <button className='btn btn-outline' onClick = {handleClick.bind(this,1)}></button>
          </div>
          <div className="col gx-0">
            <button className='btn btn-outline' onClick = {handleClick.bind(this,2)}></button>
          </div>
          <div className="col gx-0">
            <button className='btn btn-outline' onClick = {handleClick.bind(this,3)}></button>
          </div>
        </div>
        <div className="row my-0 mx-5">
          <div className="col gx-0">
            <button className='btn btn-outline' onClick = {handleClick.bind(this,4)}></button>
          </div>
          <div className="col gx-0">
            <button className='btn btn-outline' onClick = {handleClick.bind(this,5)}></button>
          </div>
          <div className="col gx-0">
            <button className='btn btn-outline' onClick = {handleClick.bind(this,6)}></button>
          </div>
        </div>
        <div className="row my-0 mx-5">
          <div className="col gx-0">
            <button className='btn btn-outline' onClick = {handleClick.bind(this,7)}></button>
          </div>
          <div className="col gx-0">
            <button className='btn btn-outline' onClick = {handleClick.bind(this,8)}></button>
          </div>
          <div className="col gx-0">
            <button className='btn btn-outline' onClick = {handleClick.bind(this,9)}></button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Box;
