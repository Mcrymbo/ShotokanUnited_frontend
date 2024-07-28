import React from 'react';


const Modal = ({ id, title, children, name, styles }) => {

  const closeModal = () => {
    document.getElementById(id).checked = false;
  };

  return (
    <>
      {/* The button to open modal */}
      <label htmlFor={id} className={styles}>{name}</label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal modal-right" role="dialog">
        <div className="modal-box">
          <div className='flex justify-between'>
            <div></div>
            <label htmlFor={id} className="w-[30px] modal-action py-2 px-4">X</label> 
          </div>        
          <h3 className="text-lg font-bold">{title}</h3>
          <div className="py-4">{React.cloneElement(children, { closeModal })}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;