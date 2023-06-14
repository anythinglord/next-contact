interface Props {
  isOpen: boolean,
  handleClose: () => void,
  inputChange: (e: any) => void,
  saveData: (e: any) => void,
}

const Modal = ({ isOpen, handleClose, inputChange, saveData }: Props) => {

  if (!isOpen) return null;
  return (
    <div className="fixed top-0 left-0 right-0 bg-slate-200/50 z-50 w-full p-4 overflow-x-hidden overflow-y-auto  h-[calc(100%-1rem)] max-h-full">
      <div className="w-full max-h-full flex justify-center h-[calc(100%-1rem)]">
        <div className="max-w-2xl mt-20 bg-white rounded-lg shadow dark:bg-gray-700 h-[calc(45%-1rem)]">
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              New contact
            </h3>
            <button onClick={handleClose} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-6 space-y-6">
            <form>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                    Name
                  </label>
                  <input onChange={e => inputChange(e)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="input-name" type="text" placeholder="Doe" />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                    Number
                  </label>
                  <input onChange={e => inputChange(e)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="input-number" type="text" placeholder="92 186 54" />
                </div>
                <div className="w-full md:w-1/5 px-3" style={{ paddingTop: 15 }}>
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                    Age
                  </label>
                  <input onChange={e => inputChange(e)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="input-number" type="text" placeholder="25" />
                </div>
                <div className="w-full md:w-2/5 px-3" style={{ paddingTop: 15 }}>
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                    Company
                  </label>
                  <input onChange={e => inputChange(e)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="input-number" type="text" placeholder="Apple" />
                </div>
                <div className="w-full md:w-2/5 px-3" style={{ paddingTop: 15 }}>
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                    Category
                  </label>
                  <input onChange={e => inputChange(e)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="input-number" type="text" placeholder="Manager" />
                </div>
              </div>
            </form>
          </div>
          <div className="flex items-center p-6 space-x-10 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button onClick={saveData} type="button" className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>accept</button>
            <button onClick={handleClose} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
          </div>
        </div>
      </div>
     </div>
  )
}

export default Modal;