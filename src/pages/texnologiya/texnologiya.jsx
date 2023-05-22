import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdModeEdit, MdDelete } from "react-icons/md";

export const Texnologiya = () => {
  const [tech, setTech] = useState([]);

  useEffect(() => {
    localStorage.getItem("token") &&
      axios
        .get("http://localhost:1212/admin/technology", {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc1MzU2MTUwfQ.TSJs3Yomp3woiYfoUUwK2azBR0tBBE-Rwtaco33pfP0",
          },
        })
        .then((res) => setTech(res.data))
        .catch((err) => console.log(err));
  }, []);
  console.log(tech);

  return (
    <div className="customers">
      <table>
        <thead>
          <tr className="head-row">
            <th>Nomlari</th>
            <th>Matn</th>
            <th>Video</th>

            <th></th>
          </tr>
        </thead>
        <tbody>
          {tech.map((item, id) => (
            <tr className="body-row" key={id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.link}</td>

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
