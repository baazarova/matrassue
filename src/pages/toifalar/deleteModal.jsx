import "./modal.css";

const DeleteModal = ({ openDel,setDelOpen, data, setData, children }) => {
  const deleteRow = (id) => {
    const newData = [...data].filter((item) => item.id !== id);
    setData(newData);
    setDelOpen(false)
  };
  return (
    <div className="modal" onClick={()=>setDelOpen(false)}>
      {openDel && (
        <div className="modal__wrapper">
          <h1 className="modal__title">Haqiqatdan ham o'chirmoqchimisiz?</h1>
          <div className="modal__btns">
            <button className="yoq__btn" onClick={()=>setDelOpen(false)}>
              YO'Q
            </button>
            <button className="ha__btn" onClick={() => deleteRow(children)}>
              HA
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteModal;
