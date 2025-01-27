import React, { useState } from "react";
import Button from "../../components/button/Button";
import Loader from "../../components/loader/Loader";
import BackArrowButton from "../../components/button/BackArrowButton";
import SelectStoreCard from "../../components/card/SelectStoreCard";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

function SelectStore({ handleScreen }) {
  const { logIn } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [selectedStore, setSelectedStore] = useState(1);
  const handleChange = (event) => {
    console.log(event.target.value);

    setSelectedStore(event.target.value);
  };

  const handleSelectStore = () => {
    setLoading(true);
    try {
      setTimeout(() => {
        setLoading(false);
        logIn();
        navigate("/");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <BackArrowButton backFunction={() => handleScreen(4)} />
      <center className="max-w-xs my-3 space-y-2 mx-auto ">
        <h1 className="text-3xl font-bold text-black">Select Your Store</h1>
        <p className="text-base text-black/50 font-medium">
          Your Number is connect with 2 stores.
        </p>
      </center>

      <div className="space-y-5">
        <label className="block">
          <input
            type="radio"
            value={1}
            checked={selectedStore == 1}
            onChange={handleChange}
            className="h-4 w-4"
            hidden
          />
          <SelectStoreCard
            name={"Annapoorna Hotel"}
            address={"Sitra, Coimbatore"}
            ID={12345}
            selectedStore={selectedStore == 1}
          />
        </label>
        <label className="block">
          <input
            type="radio"
            value={2}
            checked={selectedStore == 2}
            onChange={handleChange}
            className="h-4 w-4"
            hidden
          />
          <SelectStoreCard
            name={"sri krishna pure veg"}
            address={"mount road, chennai"}
            ID={678956}
            selectedStore={selectedStore == 2}
          />
        </label>
      </div>
      <div className="space-y-3 mt-auto">
        <Button
          name={loading ? <Loader /> : "Continue"}
          onclick={handleSelectStore}
          disable={loading}
        />
      </div>
    </>
  );
}

export default SelectStore;
