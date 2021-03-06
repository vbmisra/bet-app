import React from "react";

const nominees = [
  { id: null, name: 'None' },
  { id: 1, name: 'Will Smith' },
  { id: 2, name: 'Meryl Streep' },
  { id: 3, name: 'Seth Rogan' },
  { id: 4, name: 'Leslie Mann' },
  { id: 5, name: 'Paul Rudd' },
]

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button> */}
      {/* {showModal ? (
        <> */}
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    QUESTION GOES HERE
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                <fieldset>
      <legend className="text-lg font-medium text-gray-900">nominees</legend>
      <div className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
        {nominees.map((nominees, nomineesIdx) => (
          <div key={nomineesIdx} className="relative flex items-start py-4">
            <div className="min-w-0 flex-1 text-sm">
              <label htmlFor={`nominees-${nominees.id}`} className="font-medium text-gray-700 select-none">
                {nominees.name}
              </label>
            </div>
            <div className="ml-3 flex items-center h-5">
              <input
                id={`nominees-${nominees.id}`}
                name="plan"
                type="radio"
                defaultChecked={nominees.id === null}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
            </div>
          </div>
        ))}
      </div>
    </fieldset>
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    {/* nominees */}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button> 
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      // ) : null}
    // </>
  );
}
