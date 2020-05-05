import { useState } from 'react';

const useDashboard = () => {
  const [play, togglePlay] = useState(false);
  // surely more will go here.
  return { play, togglePlay };
};

export default useDashboard;
