import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Confirmation from "./Confirmation";
function OrderConfirmScreen() {
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
            label="Confirmation(6)"
          />
          <Tab
            className={`!text-base !capitalize !font-medium ${
              value === 1
                ? "!font-semibold !text-black"
                : "!font-light !text-gray-300"
            }`}
            label="Preparing"
          />
          <Tab
            className={`!text-base !capitalize !font-medium ${
              value === 2
                ? "!font-semibold !text-black"
                : "!font-light !text-gray-300"
            }`}
            label="Packed Order"
          />
        </Tabs>
        <Box sx={{ mt: 2 }}>
          {value === 0 && (
            <>
              <Confirmation />
            </>
          )}
          {value === 1 && <h2 className="text-center">No order found!</h2>}
          {value === 2 && <h2 className="text-center">No order found!</h2>}
        </Box>
      </Box>
    </>
  );
}

export default OrderConfirmScreen;
