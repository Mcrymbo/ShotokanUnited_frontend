const Modal = ({ id, title, children, name }) => (
  <>
    {/* The button to open modal */}
    <label htmlFor={id} className="btn">{name}</label>

    {/* Put this part before </body> tag */}
    <input type="checkbox" id={id} className="modal-toggle" />
    <div className="modal" role="dialog">
      <div className="modal-box">
        <div className='flex justify-between items-center'>
          <h3 className="text-lg font-bold">{title}</h3>
          <label htmlFor={id} className="modal-action btn">X</label>
        </div>
        <div className="py-4">{children}</div>
      </div>
    </div>
  </>
);

export default Modal;