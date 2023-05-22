import { Switch } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import "./customers.css";

export const Customers = () => {
  const [data, setData] = useState([]);
  const [openDelete, setOpenDelete] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:1212/admin/contact/1", {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc1MzU2MTUwfQ.TSJs3Yomp3woiYfoUUwK2azBR0tBBE-Rwtaco33pfP0",
        },
      })
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="customers">
      <table>
        <thead>
          <tr className="head-row">
            <th>ID</th>
            <th>Sana</th>
            <th>Telefon Raqami</th>
            <th>Qayta aloqa</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, id) => (
            <tr className="body-row" key={id}>
              <td>{item.id}</td>
              <td>{item.time}</td>
              <td>{item.number}</td>
              <td>{item.contacted ? <Switch defaultChecked/> : <Switch/>}</td>
              <td className="btn-wrapper">
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
    </div>
  );
};
