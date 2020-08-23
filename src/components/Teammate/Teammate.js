import React from 'react';
import { render } from '@testing-library/react';

function Teammate({teammate}) {
  return (
  <div className="teammate">{teammate}</div>
  );
}

export default Teammate;