import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorite from './components/Favorite/Favorite';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

//const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
//const API_KEY = 'f51300c93904.70306ed14b992074ec7c';

const email = 'paula@gmail.com';
const password = '123asd';

function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState ([]);
   const [access, setAccess] = useState(false);

   const login =(userData) => {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`)
      .then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }

   useEffect(() => {
      !access && navigate('/')
   }, [access, navigate])

   const onSearch = (id) => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character => character.id !== (id))
         setCharacters(charactersFiltered) 
   }

   return (
      <div className='App'>
         {
            location.pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess}  />
         }

         <Routes>
            <Route path='/' element={<Form login={login}/>} />
            <Route path='/home' element= { <Cards characters={characters} onClose={onClose}/> }/>
            <Route path='/about' element= {<About/>} />
            <Route path= '/Detail/:id' element= {<Detail/>} />
            <Route path= '/favorites' element= {<Favorite/>} />
         </Routes>
         
      </div>
   );
}

export default App;
