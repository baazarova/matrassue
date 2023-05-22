import { Box, IconButton, Stack, Switch, TextField, Typography, Button } from "@mui/material";
import React from "react";
import "./modal.css";
import { AiOutlineClose } from "react-icons/ai";

export const Qoshish = ({ setOpenAdd }) => {
  return (
    <>
      <div className="modal">
        <div className="addmodal__wrapper">
          <Box sx={{ display: "flex", justifyContent: "space-between ",mb:"30px" }}>
            <Typography sx={{ fontSize: "18px", fontWeight: "600", fontFamily:"Montserrat"}}>
              Qo'shish
            </Typography>
            <Button onClick={() => setOpenAdd(false)}>
              <AiOutlineClose />
            </Button>
          </Box>
          <Box sx={{mb:"25px"}}>
            <Typography sx={{fontSize:"14px", fontWeight:"400", fontFamily:"Montserrat", mb:"10px"}}>Kategoriya Nomi</Typography>
            <TextField sx={{width:"100%", fontFamily:"Montserrat", fontSize:"12px", fontWeight:"500", borderRadius:"5px"}} placeholder="masalan : Model B" />
          </Box>

          <Box sx={{display:"flex", alighItems:"center", justifyContent:"space-between", mb:"40px"}}>
            <Typography sx={{fontSize:"14px", fontWeight:"400", fontFamily:"Montserrat", mb:"10px"}}>Holat</Typography>
            <Switch defaultChecked />
          </Box>
          <Button variant="contained" sx={{bgcolor:"#01384D", color:"white", fontFamily:"Montserrat", fontSize:"14px", width:"100%", padding:"14px", ":hover": {bgColor:"#01384D", color:"white"}}}>Qo'shish</Button>
        </div>
      </div>
    </>
  );
};
