import React from 'react';
import {Link} from 'react-router-dom';


const App: React.FC = () => {
  return (
    <div className="App">
        <Link to="/">main</Link><Link to="/admin/main">admin</Link>
      app main
    </div>
  );
};

export default App;
