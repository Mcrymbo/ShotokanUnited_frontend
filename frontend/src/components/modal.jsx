import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ id, title, children, name, styles }) => {

  const closeModal = () => {
    document.getElementById(id).checked = false;
  };

  return (
    <>
      { /* The button to open modal */ }
      <label htmlFor={id} className={`${styles} cursor-pointer`}> {name} </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal modal-right" role="dialog">
        <div className="modal-box">
          <div className='flex justify-between'>
            <div></div>
            <label htmlFor={id} className="w-[30px] modal-action cursor-pointer py-2 px-4">X</label> 
          </div>        
          <h3 className="text-lg font-bold">{title}</h3>
          <div className="py-4">{React.cloneElement(children, { closeModal })}</div>
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
  name: PropTypes.string.isRequired,
  styles: PropTypes.string,
};

export default Modal;