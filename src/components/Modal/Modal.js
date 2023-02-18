import './Modal.css'

function Modal({display}) {
  console.log('Modalga kelgani ' + display);
  return (
    <div className={`${display ? "" : "visually-hidden"}`}>
      <h4>Select status</h4>
      <div className='flex'>
        <button>Urgent</button>
        <button>New</button>
        <button>Default</button>
      </div>
    </div>
  )
}

export default Modal