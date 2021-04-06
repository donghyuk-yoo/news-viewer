import React, { useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';

function App() {
  const [data, setData] = useState(null);
  // const onClick = () => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/todos/1')
  //     .then((response) => {
  //       setData(response.data);
  //     });
  // };
  // apikey : a6e45e8981e440c7801593247aeba766
  // async, await 사용, try,catch 사용하여 에러 처리
  const onClick = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&category=entertainment&apiKey=a6e45e8981e440c7801593247aeba766',
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <NewsList />
    // <div>
    //   <div>
    //     <button onClick={onClick}>불러오기</button>
    //   </div>
    //   {data && (
    //     <textarea
    //       rows={7}
    //       value={JSON.stringify(data, null, 2)}
    //       readOnly={true}
    //     />
    //   )}
    // </div>
  );
}

export default App;
