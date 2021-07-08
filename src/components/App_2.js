import React, {useState, useReducer, useEffect} from 'react';

const App=()=> {
  const [lists, setLists]=useState([]);
  const [num, setNum]=useState(0);
  const initialState={};

  const reducer=(state, action)=>{
    switch(action){
      case 'やま':
        return state={
          name:'やま',
          age: 25,
          from:'愛知県'
        };
      case 'カズ':
        return state={
          name:'カズ',
          age: 24,
          from:'大阪府'
        };
      case 'トシ':
        return state={
          name:'トシ',
          age: 24,
          from:'大阪府'
        };
      case '吉本さん':
        return state={
          name:'吉本さん',
          age: 23,
          from:'熊本県'
        };
        default:
          return state=initialState;
    }
  };
  const [human, dispatch]=useReducer(reducer, initialState);

  const pushList=(name)=>{
    lists.push(human);
    console.log(lists)
    dispatch(name);
    // lists.shift();
  }
  // 初めの０番目の配列を消したい。
  // クリックした時点で、h1には表示されるけど、liタグには更新されない。次のクリックのタミングで前回のものが出力されるようになってる。
  // 目的としては、一つ目のinitialStateをなくして配列を作りたい。
  // shiftもおかしくなる。
  
  // 

  const deleteBtn=()=>{
    setLists([]);
    dispatch('');
  } 

  return (
    <>
      <h1>私の名前は{human.name}です、年齢は{human.age}で、出身は{human.from}です。</h1>
      <button onClick={()=>pushList('やま')}>やまちゃん</button>
      <button onClick={()=>pushList('カズ')}>カズ</button>
      <button onClick={()=>pushList('トシ')}>トシ</button>
      <button onClick={()=>pushList('吉本さん')}>吉本さん</button>
      <button onClick={()=>deleteBtn()}>AllDelete</button>
      <p>{num}</p>
      <button onClick={()=>setNum((prevState)=>prevState+1)}>+</button>
      <ul>
        {lists.map((list, index)=>(
          <li key={index}>{list.name}です。年齢は{list.age}出身は{list.from}です。</li>
        ))}
      </ul>
    </>
  )
}

export default App;
