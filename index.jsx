
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Tabela from './Tabela';
import Cards from './Cards';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/tabela">
            <Tabela />
          </Route>
          <Route path="/cards">
            <Cards />
          </Route>
          <Route path="">
            {}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

async function carregarCards() {
    try {
        const response = await fetch('http://localhost:5173/detalhes.html');
        const data = await response.json();
        
        data.slice(0, 8).forEach(({ id, title, body }) => {
    
            const card = document.createElement('div');
            card.classList.add('card');
            
            const link = document.createElement('a');
            link.href = `http://localhost:5173/detalhes.html${id}`; 
            link.classList.add('');
            link.innerHTML = `
                <h4><b>${Detalhes}</b></h4>
                <p>${body}</p>
            `;
            
            card.appendChild(link);
            
            document.body.appendChild(card);
        });
    } catch (error) {
        console.error('Erro ao carregar os jogadores:', error);
    }
}

document.addEventListener('DOMContentLoaded', carregarCards);
