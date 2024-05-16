import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://100.26.21.37:3001/Getusers');
      setUsers(response.data);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
  };

  const addUser = async () => {
    try {
      const response = await axios.post('http://100.26.21.37:3001/users', { name, email });
      setUsers([...users, response.data]);
      setName('');
      setEmail('');
    } catch (error) {
      console.error('Erro ao adicionar usuário:', error);
    }
  };

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>

      <h2>Adicionar Usuário</h2>
      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button onClick={addUser}>Adicionar</button>
    </div>
  );
};

export default App;
