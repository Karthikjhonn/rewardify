import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TransactionCard from "../../../components/card/TransactionCard";
import SettlementsCard from "../../../components/card/SettlementsCard";

const data = Array.from({ length: 15 }, (_, index) => index + 1);
function TransitionScreen() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: "100%" }} className="mt-1">
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: { height: "2px" },
          }}
          sx={{
            "& .MuiTabs-indicator": {
              background: "linear-gradient(90deg, #668D12 0%, #ACC43F 113.61%)",
            },
          }}
        >
          <Tab
            className={`!text-base !capitalize !font-medium ${
              value === 0
                ? "!font-semibold !text-black !border-b-2 !border-accent-600"
                : "!font-light !text-gray-300"
            }`}
            label="All Transaction"
          />
          <Tab
            className={`!text-base !capitalize !font-medium ${
              value === 1
                ? "!font-semibold !text-black"
                : "!font-light !text-gray-300"
            }`}
            label="settlements"
          />
        </Tabs>
        <Box sx={{ mt: 2 }}>
          {value === 0 && (
            <>
              {data?.map((data) => (
                <TransactionCard />
              ))}
            </>
          )}
          {value === 1 && (
            <>
              {data?.map((data) => (
                <SettlementsCard />
              ))}
            </>
          )}
        </Box>
      </Box>
    </>
  );
}

export default TransitionScreen;
