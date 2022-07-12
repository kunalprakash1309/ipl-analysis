import logo from '../../assests/logo.svg'

import './navigation.styles.scss'

const NavigationBar = ({season, setSeason}) => {
  return (
    <div className='navigation-bar'>
      <div 
        className='logo-container'
      >
        <img className='logo' alt='logo' src={logo}/>
      </div>
      <div className='heading'>
        <h1>IPL ANALYSIS</h1>
      </div>
      <div className='links-container'>
        <select value={season} onChange={(e) => setSeason(e.currentTarget.value)} >
          <option value="2008" >2008</option>
          <option value="2009">2009</option>
          <option value="2010">2010</option>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
        </select>
      </div>
    </div>
  )
}

export default NavigationBar;