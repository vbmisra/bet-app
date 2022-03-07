import React from "react";
import { Link } from "react-router-dom";


export default function BestAdaptedScreenplay() {
  // const [showModal, setShowModal] = React.useState(false);
  const nominees = [
    { id: 1, name: 'CODA', info:'"screenplay by Siân Heder"' },
    { id: 2, name: 'Drive My Car', info:'"screenplay by Ryusuke Hamaguchi, Takamasa Oe"' },
    { id: 3, name: 'Dune', info:'"screenplay by Jon Spaihts and Denis Villeneuve and Eric Roth"' },
    { id: 4, name: 'The Lost Daughter', info:' "written by Maggie Gyllenhaal"' },
    { id: 5, name: 'The Power of the Dog', info:' "written by Jane Campion"' }
  ]
  
  return (
    <>
      
      <div class="container text-center mx-auto px-4">
          {/*content*/}
          <div className="border-1 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="justify-center flex items-start p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semi-bold justify-center">

              Best Adapted Screenplay:
              
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
            <button className="btn btn-ghost normal-case text-xl"><Link to="/bestAnimatedFeature">Place your next bet! </Link></button>
          </div>
  </div>
    </>
  );
}
