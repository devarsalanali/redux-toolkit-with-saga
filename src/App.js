import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCatsFetch } from './app/slices/catSlice';

function App() {
  const cats = useSelector((state) => state.cat.cats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);

  console.log(cats);

  return (
    <div className='App'>
      <h1>Cats Gallery</h1>
      <p>cats gallery of different cats breed</p>
      <hr />
      <div className='Gallery'>
        {cats.map((cat) => (
          <div key={cat._id} className='row'>
            <div className='column column-left'>
              <img
                alt=''
                src={`https://cataas.com/cat/${cat._id}`}
                width='200'
                height='200'
              />
            </div>
            <div className='column column-right'>
              {cat.tags.map((tag, index) => (
                <h5 key={index}>{tag}</h5>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
