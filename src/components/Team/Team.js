import React from 'react';
import Teammate from '../Teammate/Teammate';

function Team({team}) {
  return (
    <div>
      <div>
        <div>{team.name}</div>
        {team.members.map(teammate => <Teammate teammate={teammate} key={teammate} />)}
      </div>
      <button onClick={() => joinTeam()}>Join Team</button>
    </div>
  );
}

export default Team;