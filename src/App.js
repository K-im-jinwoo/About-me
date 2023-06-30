//component
import Header from './components/Header';

//page
import Main from './pages/Main';
import About from './pages/About'

// css
import './styles/typography.css'
import './styles/reset.css'


function App() {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <About></About>
    </>
  );
}

export default App;
