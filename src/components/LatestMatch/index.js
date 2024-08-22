// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchData

  return (
    <div className="latest-match-container">
      <h1 className="match-heading">Latest Matches</h1>
      <div className="match-card">
        <div className="match-details-logo-container">
          <div className="match-details-1">
            <p className="match-team-name">{competingTeam}</p>
            <p className="match-date">{date}</p>
            <p className="match-details">{venue}</p>
            <p className="match-details">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            className="match-team-logo"
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <hr className="separator" />
        <div className="match-details-2">
          <p className="match-details-label">First Innings</p>
          <p className="match-details-value">{firstInnings}</p>
          <p className="match-details-label">Second Innings</p>
          <p className="match-details-value">{secondInnings}</p>
          <p className="match-details-label">Man Of The Match</p>
          <p className="match-details-value">{manOfTheMatch}</p>
          <p className="match-details-label">Umpires</p>
          <p className="match-details-value">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
