import './App.css';
import Contact from './example/contact';
import { Linea } from './example/linea';
// import TaskListComponent from './components/container/task_list';


function App() {
  const defaultLinea = new Linea("Jonatan","Ochoa", "jona00ochoa@gmail.com", true);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {/* <TaskListComponent /> */}
          <Contact linea={defaultLinea} />
        </div>
      </header>
    </div>
  );
}

export default App;
