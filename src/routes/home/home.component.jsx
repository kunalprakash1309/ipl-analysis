import { useEffect, useState } from "react"
import MatchCard from "../../components/match-card/match-card.component"
import './home.styles.scss'

const Home = ({matchData, season}) => {
  const [matches, setMatches] = useState([])
  useEffect(() => {
    const data = matchData.filter((match) => {
      return match.season === season
    })
    setMatches(data)
  }, [season, matchData])

  return (
    <div className="home-container">
      <h2 className="home-heading">{season}</h2>
      <div className="season-details-container">
        {
          matches?.map((match) => (
            <MatchCard key={match.id} matchDetail={match}/>
          ))
        }
      </div>
    </div>
    // <Routes>
    //   <Route path=":year" element={<}>
    // </Routes>
  )
}

export default Home