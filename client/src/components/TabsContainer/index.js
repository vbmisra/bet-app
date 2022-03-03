import Tabs from "../Tabs"
import YourBets from "../YourBets";


export default function TabsContainer() {
    return <div className="backdrop-blur-sm bg-black/30 p-4 rounded-lg max-w-7xl mx-auto sm:px-6 lg:px-8">
        
    <Tabs />
    <YourBets />
        
    </div>
  }