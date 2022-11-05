import './App.scss';
import Header from './component/Header/Header';
import MyList from './component/MyList/MyList';
import data from './data';

function App() {
  return (
    <main>
      <Header />
      <MyList dataForList={data} />
    </main>
  );
}

export default App;
