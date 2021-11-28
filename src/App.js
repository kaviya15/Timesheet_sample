
import './App.css';
import Top from './components/Top'
import Sidebar from './components/Sidebar'
import Timesheet from './components/Timesheet';
import Report from './components/Report'
import Screenshots from './components/Screenshots'
import Todolist from './components/Todolist'
function App() {
  return (
    <div className="row mr-2 App">
      <div className="col-lg-2 col-md-2 side-bar">   
        <Sidebar/> 
      </div>
   
      <div className = "col-lg-10 col-md-10 main-menu">
        <Top/>
        <div className="row">
        <Timesheet/>
        <Report/>
        </div>
        <div className="row">
          
          <Screenshots/>
          <Todolist/>
        </div>
      </div>
     
    </div>
  );
}

export default App;
