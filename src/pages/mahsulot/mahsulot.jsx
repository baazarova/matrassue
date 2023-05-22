import { Switch } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
// import './mahsulot.css';

export const Mahsulot = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1212/admin/products", {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc1MzU2MTUwfQ.TSJs3Yomp3woiYfoUUwK2azBR0tBBE-Rwtaco33pfP0",
        },
      })
      .then((res) => setData(res.data.categories))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:1212/admin/products", {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc1MzU2MTUwfQ.TSJs3Yomp3woiYfoUUwK2azBR0tBBE-Rwtaco33pfP0",
        },
      })
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  return (
    <div className="customers">
      <table>
        <thead>
          <tr className="head-row">
            <th>Mahsulot Nomlari</th>
            <th>Toifalar</th>
            <th>Narxi</th>
            <th>Yuklama</th>
            <th>Razmeri</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, id) => (
            <tr className="body-row" key={id}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.cost}</td>
              <td>{item.weight}</td>
              <td>{item.size}</td>
              <td>{item.status ? <Switch defaultChecked/> : <Switch/>}</td>
              <td className="btn-wrapper">
                <button className="edit">
                  <MdModeEdit
                    style={{
                      width: "20px",
                      height: "20px",
                      textAlign: "center",
                    }}
                  />
                </button>
                <button className="delete">
                  <MdDelete
                    style={{
                      width: "20px",
                      height: "20px",
                      textAlign: "center",
                    }}
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add__btn">Qo'shish</button>

    </div>
  );
};
