import logo from './logo.svg';
import './App.css';
import FeedbackForm from './FeedbackForm';

function App() {
  const handleSubmit = () => {
    console.log("Form submitted");
  }

  return (
    <div className="App">
      <FeedbackForm onSubmit={handleSubmit}></FeedbackForm>
    </div>
  );
}

export default App;
