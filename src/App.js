import Counter from "./components/Counter";
import {First, Second} from "./components/FirstComponents";
import Register from "./components/StudentRegister";
import { STUDENTS } from './constants/index';

function App() {
  return (
    <div>
      <First
      id={1} 
      title={'New component'}
      name={'John'}
      age={25}
      subject={['React', 'Angular', 'Vue']}
      location={{city:'New York', country:'USA'}}
      isStudent = {false}
       />
      <Second/>
      <Register
      batch={'2075'}
      faculty = {'Computer Engineering'}
      college = {'Kantipur Engineering College'}
      students = {STUDENTS}
      />
      <Counter/>
    </div>
  );
}

export default App;
