import React, { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import axios from "axios";
import { navigate } from "@reach/router";
const Update =  (props) => {
  const [people, setPeople] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const { id } = props;

  useEffect(() => {
    axios.get("http://localhost:8000/api/product/" + id).then((res) => {
      setPeople(res.data);
      setLoaded(true)
    });
  }, [loaded, id]);

  const updatePerson = (product) => {
    axios
      .put("http://localhost:8000/api/product/" + id, product)
      .then((res) => {
        navigate("http://localhost:3000//product/"+id)
      });
  };

  return (
    <div>
      {loaded && (
        <ProductForm
          loaded={setLoaded}
          onsubmit={updatePerson}
          initialTitle={people.Title}
          intialDesc={people.Desc}
          initialPrice={people.Price}
        />
      )}
    </div>
  );
};

export default Update