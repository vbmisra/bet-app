import React from "react";
import { Link } from "react-router-dom";


export default function BestDocumentaryFeature() {
//   const [showModal, setShowModal] = React.useState(false);
  const nominees = [
    { id: 1, name: 'Ascension', info:'"Jessica Kingdon, Kira Simon-Kennedy and Nathan Truesdell"' },
    { id: 2, name: 'Attica', info:'"Stanley Nelson and Traci A. Curry"' },
    { id: 3, name: 'Flee', info:'"Jonas Poher Rasmussen, Monica Hellström, Signe Byrge Sorensen and Charlotte De La Gournerie"' },
    { id: 4, name: 'Summer of Soul', info:' "Ahmir “Questlove” Thompson, Joseph Patel, Robert Fyvolent and David Dinerstein"' },
    { id: 5, name: 'Writing With Fire', info:' "Rintu Thomas and Sushmit Ghosh"' }
  ]
  
  return (
    <>
      
      <div class="container text-center mx-auto px-4">
          {/*content*/}
          <div className="border-1 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="justify-center flex items-start p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semi-bold justify-center">

              Best Documentary Feature:
              
              </h3>
            </div>
            <div className="justify-center flex items-start p-5 border-blueGray-200 rounded-t">
            <fieldset>
      <legend className="sr-only">Plan</legend>
      <div className="space-y-5">
        {nominees.map((nominee) => (
          <div key={nominee.id} className="relative flex justify-center">
            <div className="flex items-center h-5">
              <input
                id={nominee.id}
                aria-described-by={`${nominee.id}-description`}
                name="nominee"
                type="radio"
                defaultChecked={nominee.id === 'small'}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor={nominee.id} className="font-medium text-gray-700">
                {nominee.name}
              </label>
              <p id={`${nominee.id}-description`} className="text-gray-500 text-sm">
                {nominee.info}
              </p>
            </div>
          </div>
        ))}
      </div>
    </fieldset>
    </div>
            <button className="btn btn-ghost normal-case text-xl"><Link to="/bestDocumentaryShort">Place your next bet! </Link></button>
          </div>
  </div>
    </>
  );
}
