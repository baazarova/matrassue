import { Switch } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./buyurtmalar.css";

export const Buyurtmalar = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    localStorage.getItem("token") &&
      axios
        .get("http://localhost:1212/admin/orders/1", {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc1MzU2MTUwfQ.TSJs3Yomp3woiYfoUUwK2azBR0tBBE-Rwtaco33pfP0",
          },
        })
        .then((res) => setUser(res.data.data))
        .catch((err) => console.log(err));
  }, []);

  return (
    <div className="buyurtmalar">
      <table>
        <thead>
          <tr className="head-row">
            <th>ID</th>
            <th>Ismi</th>
            <th>Telefon Raqami</th>
            <th>Mahsulot Nomlari</th>
            <th>Miqdor</th>
            <th>Qayta Aloqa</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item, index) => (
            <tr className="body-row" key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.number}</td>
              <td>{item.product_name}</td>
              <td>4</td>
              <td>
                <Switch />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
