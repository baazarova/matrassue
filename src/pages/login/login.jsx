import { Button, FormControl, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");

  const handleSubmit = async (e) => {
    
    console.log(user);
    axios
      .post("http://localhost:1212/admin/login", {
        userName: user,
        password: pwd,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <FormControl
        onSubmit={handleSubmit()}
        sx={{
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          marginTop: "15%",
          padding: "30px",
          border: "1px solid #01384D",
          borderRadius: "10px",
          width: "330px",
          ml: "auto",
          mr: "auto",
        }}
      >
        <Typography sx={{ mb: "40px", fontSize: "20px", fontWeight: "700" }}>
          KIRISH
        </Typography>
        <TextField
          value={user}
          onChange={(e) => setUser(e.target.value)}
          sx={{ mb: "13px", width: "100%" }}
          placeholder="login"
        />
        <TextField
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          sx={{ width: "100%", mb: "35px" }}
          placeholder="parol"
        />
        <Button
          type="submit"
          sx={{ width: "100%", bgcolor: "#01384D", color: "white", p: "15px" }}
          variant="contained"
        >
          Kirish
        </Button>
      </FormControl>
    </div>
  );
};
