import React from "react";
import { Link } from "react-router-dom";


export default function BestPicture() {
  const [showModal, setShowModal] = React.useState(false);
  const nominees = [
    { id: 1, name: 'Belfast', info:'(Laura Berwick, Kenneth Branagh, Becca Kovacik and Tamar Thomas, Producers)' },
    { id: 2, name: 'CODA', info:'(Philippe Rousselet, Fabrice Gianfermi and Patrick Wachsberger, Producers)' },
    { id: 3, name: 'Don’t Look Up', info:'(Adam McKay and Kevin Messick, Producers)' },
    { id: 4, name: 'Drive My Car', info:'(Teruhisa Yamamoto, Producer)' },
    { id: 5, name: 'Dune', info:' (Mary Parent, Denis Villeneuve and Cale Boyter, Producers)' },
    { id: 6, name: 'King Richard', info:' (Tim White, Trevor White and Will Smith, Producers)' },
    { id: 7, name: 'Licorice Pizza', info:' (Sara Murphy, Adam Somner and Paul Thomas Anderson, Producers)' },
    { id: 8, name: 'Nightmare Alley', info:' (Guillermo del Toro, J. Miles Dale and Bradley Cooper, Producers)' },
    { id: 9, name: 'The Power of the Dog', info:' (Jane Campion, Tanya Seghatchian, Emile' },
    { id: 10, name: 'Sherman, Iain Canning and Roger Frappier, Producers)' },
    { id: 11, name: 'West Side Story', info:' (Steven Spielberg and Kristie Macosko Krieger, Producers)' }
  ]
  
  return (
    <>
      
      <div class="container text-center mx-auto px-4">
          {/*content*/}
          <div className="border-1 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="justify-center flex items-start p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semi-bold justify-center">

              Best Picture:
              
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

            <button className="btn btn-ghost normal-case text-xl"><Link to="/bestProductDesign">Place your next bet! </Link></button>
          </div>
  </div>
    </>
  );
}
