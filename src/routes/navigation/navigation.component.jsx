import { Fragment } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import logo from '../../assests/logo.svg'

import './navigation.styles.scss'

const NavigationBar = ({season, setSeason}) => {
  const navigate = useNavigate()
  return (
    <Fragment>
      <div className='navigation-bar'>
        <div 
          className='logo-container'
          onClick={() => navigate('/')}
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
          {/* <span 
            className='link'
            onClick={() => navigate('/watchlist')}
          >
            WatchList 
          </span> */}
        </div>
      </div>

      <Outlet />
    </Fragment>
  )
}

export default NavigationBar;