import {First, Second} from "./components/FirstComponents";

function App() {
  return (
    <div>
      <First 
      title={'New component'}
      name={'John'}
      age={25}
      subject={['React', 'Angular', 'Vue']}
      location={{city:'New York', country:'USA'}}
      isStudent = {false}
       />
      <Second/>
    </div>
  );
}

export default App;
