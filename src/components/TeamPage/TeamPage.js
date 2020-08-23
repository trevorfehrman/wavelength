import React, { useState } from 'react';


function TeamPage() {
  const [teams, setTeams] = useState([{name: "Team One", members: ["Trevor", "Daneil"]}, {name: "Team Two", members: ["Trajche", "Evgeny"]}])
	
	return (
		<div className="teamPage">
			<div className="teamPage__teams">
        {teams.map(team => <Team team={team} key={team.name}/>)}
			</div>
		</div>
  );
}

export default TeamPage;