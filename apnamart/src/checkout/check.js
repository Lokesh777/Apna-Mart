import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export default ({ name }) => { 
  useEffect(() => {
    axios.get('https://bleexy.local/api')
      .then(console.log)
      .catch(console.error);
  }, []);

  return <h1>Hello {name}!</h1>;
}
