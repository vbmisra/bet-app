  import React from 'react';
  import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid'
  import { CurrencyDollarIcon, StarIcon, ClockIcon } from '@heroicons/react/outline'
  
  
  const stats = [
    { id: 1, name: 'Balance', stat: '$0', icon: CurrencyDollarIcon },
    { id: 2, name: 'Earnings', stat: '$59', icon: StarIcon, change: '5.4%', changeType: 'increase' },
    { id: 3, name: 'Next Event', stat: 'Oscars in 30 Days', icon: ClockIcon },
  ]
  
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Overview() {
    return (
      <div>
        <h3 className="text-lg leading-6 font-medium text-neutral-50">Overview</h3>
  
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.id}
              className="relative backdrop-blur-sm bg-black/30 pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
            >
              <dt>
                <div className="absolute bg-red-600 rounded-md p-3">
                  <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <p className="ml-16 text-sm font-medium text-gray-500 truncate">{item.name}</p>
              </dt>
              <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                <p className="text-2xl font-semibold text-neutral-50">{item.stat}</p>
                <p
                  className={classNames(
                    item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
                    'ml-2 flex items-baseline text-sm font-semibold'
                  )}
                >
                  {item.changeType === 'increase' ? (
                    <ArrowSmUpIcon className="self-center flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                  ) : (
                    <ArrowSmDownIcon className="self-center flex-shrink-0 h-5 w-5 text-red-500" aria-hidden="true" />
                  )}
  
                  <span className="sr-only">{item.changeType === 'increase' ? 'Increased' : 'Decreased'} by</span>
                  {item.change}
                </p>
                <div className="absolute bottom-0 inset-x-0 bg-neutral-900 px-4 py-4 sm:px-6">
                  <div className="text-sm">
                    <a href="#" className="font-medium text-neutral-50 hover:text-red-600">
                      {' '}
                      View all<span className="sr-only"> {item.name} stats</span>
                    </a>
                  </div>
                </div>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    )
  }


  

