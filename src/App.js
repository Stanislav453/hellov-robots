import { useState } from 'react';
import './App.scss';
import Header from './component/Header/Header';
import MyList from './component/MyList/MyList';
import data from './data';

const onlyCategory = ["All", ...new Set(data.map((item) => item.category))];

function App() {

  const [ dataitems, setDataItems ] = useState(data);
  const [ MyCategories, setMyCategories] = useState(onlyCategory);

  const filterCategory = ( categories ) => {

    if(categories === "All") {
      return setDataItems(data)
    }

    const newCategory = data.filter( (item) =>  item.category === categories )

    setDataItems(newCategory)
  }


  return (
    <main>
      <Header headerOnlyCategory={onlyCategory} myfunctionHeader={filterCategory} />
      <MyList dataForList={dataitems} />
    </main>
  );
}

export default App;
