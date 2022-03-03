const tabs = [
    { name: 'Your Bets', href: '#', current: true },
    { name: 'Your Feed', href: '#', current: false },
    { name: 'Universal Feed', href: '#', current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Tabs() {
    return (
      <div className="pb-5 border-b border-gray-200 sm:pb-0">
        <h3 className="text-lg leading-6 font-medium text-neutral-50">Bets</h3>
        <div className="mt-3 sm:mt-4">
          <div className="sm:hidden">
            <label htmlFor="current-tab" className="sr-only">
              Select a tab
            </label>
            <select
              id="current-tab"
              name="current-tab"
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              defaultValue={tabs.find((tab) => tab.current).name}
            >
              {tabs.map((tab) => (
                <option key={tab.name}>{tab.name}</option>
              ))}
            </select>
          </div>
          <div className="hidden sm:block">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  className={classNames(
                    tab.current
                      ? 'border-red-600 text-red-600'
                      : 'border-transparent text-slate-50 hover:text-gray-700 hover:border-gray-300',
                    'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm'
                  )}
                  aria-current={tab.current ? 'page' : undefined}
                >
                  {tab.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    )
  }