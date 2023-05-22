import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdModeEdit, MdDelete } from "react-icons/md";
import DeleteModal from "./deleteModal";
import { Qoshish } from "./qoshish";
import "./toifalar.css";

export const Toifalar = (props) => {
  const [data, setData] = useState([]);
  const [openDel, setDelOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);


 

  useEffect(() => {
    axios
      .get("http://localhost:1212/admin/categories", {
        headers: {
          "Content-Type":"application/json",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc1MzU2MTUwfQ.TSJs3Yomp3woiYfoUUwK2azBR0tBBE-Rwtaco33pfP0",
        },
      })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [data]);

  console.log(data);
  return (
    <div className="toifalar">
      <table>
        <thead>
          <tr className="head-row">
            <th>Toifalar</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, id) => (
            <tr className="body-row">
              <td>{item.category}</td>
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
                <button className="delete" onClick={()=> setDelOpen(true)}>
                  <MdDelete
                    style={{
                      width: "20px",
                      height: "20px",
                      textAlign: "center",
                    }}
                  />
                </button>
                {openDel && 
                <DeleteModal
                open={openDel}
                setDelOpen={setDelOpen}
                data={data}
                setData={setData}
              >
                {item.id}
              </DeleteModal>}
              </td>
            </tr>
            
          ))}
        </tbody>
      </table>
      <button onClick={()=> setOpenAdd(true)} className="add__btn">Qo'shish</button>
      {openAdd && <Qoshish setOpenAdd={setOpenAdd} />}
    </div>
  );

};
