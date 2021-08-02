import React, { useState, useEffect } from "react";

const ProductForm =  (props) => {
  //keep track of what is being typed via useState hook
  const { initialTitle, initialPrice, intialDesc, onsubmit } = props;
  const [Title, setTitle] = useState(initialTitle);
  const [Desc, setDesc] = useState(intialDesc);
  const [Price, setPrice] = useState(initialPrice);
  console.log(props)
  //handler when the form is submitted
  const onSubmitHandler = (e) => {
    //prevent default behavior of the submit
    e.preventDefault();
    onsubmit({ Title, Price, Desc });
  };
  return (
    <form >
     
      <p>
        <label>Title</label>
        <br />
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={Title}
        />
      </p>
      <p>
        <label>Price</label>
        <br />
        <input type="text"  value={Price} onChange={(e) => setPrice(e.target.value)} />
      </p>
      <p>
        <label>Description</label>
        <br />
        <input type="text" value={Desc} onChange={(e) => setDesc(e.target.value)} />
      </p>
      <button onClick={e =>{  onSubmitHandler(e)}}>SUbmit</button>
    </form>
  );
};

export default ProductForm