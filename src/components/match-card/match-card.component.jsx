import { useState } from 'react';
import './match-card.styles.scss';

const MoreDetails = ({ toss_winner, toss_decision, player_of_match}) => {
  return (
    <div className='more-details'>
      <span className='toss-decision'> {toss_winner} won the toss and elected to {toss_decision} first. </span> <br/>
      <span className='player-of-the-match'>{player_of_match} was the player of the match.</span>
    </div>
  )
}

const MatchCard = ({matchDetail}) => {
  const {
    id, 
    team1, 
    team2, 
    winner, 
    win_by_runs, 
    win_by_wickets, 
    venue, 
    city, 
    date,
    toss_winner,
    toss_decision,
    player_of_match  
  } = matchDetail
  
  const [showDetails, setShowDetails] = useState(false)
  return (
    <div className='match-card-container'>
      <div className='header-container'>
        <span className='match-no'>Match no. {id}</span>
        <span className='match-data'>Date {date}</span>
      </div>
      <div className='body-container'>
        <span className='team-name'>{team1.toUpperCase()} vs {team2.toUpperCase()}</span> <br/>
        <span className='venue'>{venue}, {city}</span> <br/>
        <span className='result'>{winner} won by {win_by_runs === "0" ? `${win_by_wickets} wkts` : `${win_by_runs} runs`}</span>
      </div>
      {
        showDetails ? (
          <MoreDetails 
            toss_winner={toss_winner}
            toss_decision={toss_decision}
            player_of_match={player_of_match}
          />
        ) : (
          null
        )
      }
      <button onClick={() => setShowDetails(!showDetails)}>
        {
          showDetails ? (
            <span>Less Details &uarr;</span>
          ) : (
            <span>More Details &darr;</span>
          )
        }
        
      </button>
    </div>
  )
}

export default MatchCard