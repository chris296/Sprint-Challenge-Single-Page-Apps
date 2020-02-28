import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage.js";
import {Button} from 'reactstrap';
import SearchForm from "./components/SearchForm.js";


export default function App() {
  return (
    <main>
      <Header />
      <Route component={WelcomePage}/>
      <Route component={CharacterList} />
    </main>
  );
}
