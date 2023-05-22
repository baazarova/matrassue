import axios from "axios";
import React, { useEffect, useState } from "react";
import "./manzil.css";
import { MdLocationOn } from "react-icons/md";
import { MdModeEdit, MdDelete } from "react-icons/md";

export const Manzil = () => {
  const [loc, setLoc] = useState([]);

  useEffect(() => {
    localStorage.getItem("token") &&
      axios
        .get("http://localhost:1212/admin/address", {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc1MzU2MTUwfQ.TSJs3Yomp3woiYfoUUwK2azBR0tBBE-Rwtaco33pfP0",
          },
        })
        .then((res) => setLoc(res.data))
        .catch((err) => console.log(err));
  }, []);

  console.log(loc);
  return (
    <div className="manzil">
      <table>
        <thead>
          <tr className="head-row">
            <th>Manzil</th>
            <th>Matn</th>
            <th>Location</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {loc.map((item, id) => (
            <tr className="body-row" key={id}>
              <td>{item.location}</td>
              <td>{item.destination}</td>
              <td>
                <MdLocationOn />
              </td>
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
