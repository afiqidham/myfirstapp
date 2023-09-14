// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Clock from './components/Clock';
import Blog from './components/Blog';
import Post from './components/Post';

function App() {
  const [flag, setFlag] = useState(true);
  const handleOnClick = () => {
      setFlag(true);
    };
    const handleOffClick = () => {
      setFlag(false);
    };
  const user = {
    firstname: "Afiq", 
    lastname: "Idham",
  };

  const posts = [
    {
      id: 71,
      title: "et iusto veniam et illum aut fuga",
      body: "occaecati a doloribus\niste saepe consectetur placeat eum voluptate dolorem et\nqui quo quia voluptas\nrerum ut id enim velit est perferendis"
    },
    {
      "id": 72,
      "title": "sint hic doloribus consequatur eos non id",
      "body": "quam occaecati qui deleniti consectetur\nconsequatur aut facere quas exercitationem aliquam hic voluptas\nneque id sunt ut aut accusamus\nsunt consectetur expedita inventore velit"
    },
    {
      "id": 73,
      "title": "consequuntur deleniti eos quia temporibus ab aliquid at",
      "body": "voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicabo\naut eum minima consequatur\ntempore cumque quae est et\net in consequuntur voluptatem voluptates aut"
    },
    {
      "id": 74,
      "title": "enim unde ratione doloribus quas enim ut sit sapiente",
      "body": "odit qui et et necessitatibus sint veniam\nmollitia amet doloremque molestiae commodi similique magnam et quam\nblanditiis est itaque\nquo et tenetur ratione occaecati molestiae tempora"
    },
    {
      "id": 75,
      "title": "dignissimos eum dolor ut enim et delectus in",
      "body": "commodi non non omnis et voluptas sit\nautem aut nobis magnam et sapiente voluptatem\net laborum repellat qui delectus facilis temporibus\nrerum amet et nemo voluptate expedita adipisci error dolorem"
    },
    {
      "id": 76,
      "title": "doloremque officiis ad et non perferendis",
      "body": "ut animi facere\ntotam iusto tempore\nmolestiae eum aut et dolorem aperiam\nquaerat recusandae totam odio"
    },
    {
      "id": 77,
      "title": "necessitatibus quasi exercitationem odio",
      "body": "modi ut in nulla repudiandae dolorum nostrum eos\naut consequatur omnis\nut incidunt est omnis iste et quam\nvoluptates sapiente aliquam asperiores nobis amet corrupti repudiandae provident"
    },
    {
      "id": 78,
      "title": "quam voluptatibus rerum veritatis",
      "body": "nobis facilis odit tempore cupiditate quia\nassumenda doloribus rerum qui ea\nillum et qui totam\naut veniam repellendus"
    },
    {
      "id": 79,
      "title": "pariatur consequatur quia magnam autem omnis non amet",
      "body": "libero accusantium et et facere incidunt sit dolorem\nnon excepturi qui quia sed laudantium\nquisquam molestiae ducimus est\nofficiis esse molestiae iste et quos"
    },
    {
      "id": 80,
      "title": "labore in ex et explicabo corporis aut quas",
      "body": "ex quod dolorem ea eum iure qui provident amet\nquia qui facere excepturi et repudiandae\nasperiores molestias provident\nminus incidunt vero fugit rerum sint sunt excepturi provident"
    }
  ]

// let button;
// if(flag) {
//   button = <OnButton onClick = {handleOnClick}></OnButton>

// } else {
//   button = <OffButton onClick = {handleOffClick}></OffButton>
// }

  return <div>
    {/* <h1>Time Now:</h1>
    <h2>{flag ? <Clock/> : "No Clock Showed"}</h2>
    <button onClick={() => setFlag(!flag)}>{button}</button> */}
    <Blog posts = {posts}/>
    </div>;

}

// function OnButton(props) {
//   return (
//     <button onClick={props.OnButton}>Clock On</button>
//   )
// }

// function OffButton(props) {
//   return (
//   <button onClick = {props.OffButton}>Clock Off</button>
//   )
// }


export default App;
