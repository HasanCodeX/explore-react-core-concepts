import { useState } from "react";

export default function Team() {
  // List of players to display
  const players = ["Player 1", "Player 2", "Player 3"];

  // State for team size
  const [team, setTeam] = useState(11);

  // Function to add a member to the team
  const handleAdd = () => {
    const newTeam = team + 1;
    setTeam(newTeam);
  };

  // Function to remove a member from the team
  const handleRemove = () => {
    if (team > 0) {
      const newTeam = team - 1;
      setTeam(newTeam);
    } else {
      alert("Team size cannot be less than zero."); // Alert when trying to go below zero
    }
  };

  // Team style
  const teamStyle = {
    border: '2px solid purple',
    margin: '15px',
    padding: '15px',
    borderRadius: '15px', // Corrected capitalization
  };

  return (
    <div style={teamStyle}>
      <h3>Players:</h3>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player}</li> // Using key with map for list rendering
        ))}
      </ul>
      <p>Team Size: {team}</p> {/* Display the current team size */}
      <button onClick={handleAdd}>Add Player</button> {/* Button to add a player */}
      <button onClick={handleRemove}>Remove Player</button> {/* Button to remove a player */}
    </div>
  );
}
