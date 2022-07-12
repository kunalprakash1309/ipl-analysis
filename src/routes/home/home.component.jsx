import MatchCard from "../../components/match-card/match-card.component"
import './home.styles.scss'


const Home = ({matchData, season}) => {
  return (
    <div className="home-container">
      <h2 className="home-heading">{season}</h2>
      <div className="season-details-container">

        {/* checking if matchData is present or not.
            If present the run map on desired season of datas.
         */}
        {
          matchData 
          ? 
          matchData[season].map((match) => (
            <MatchCard key={match.id} matchDetail={match}/>
          ))
          :
          null
        }
      </div>
    </div>
  )
}

export default Home