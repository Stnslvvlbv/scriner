import React from 'react';
import {useContext} from 'react';

import { ThemeComtext } from '../context';

import { ButtonSwitch } from '../components/UI/ButtonSwitch'

const Settings = (props) => {
  const {darkTheme, setDarkTheme} = useContext(ThemeComtext);

  const ChangeTheme = () => {
    setDarkTheme((prev) => !prev)
  }
  return(
    <div className='settings'>
      <div className='header2'>
        <h1>Settings</h1>
      </div>
      <div className="settingsList">
        <div className="settingList__element">
          <div className="SettingList__nameElement">
            <h1>Dark theme</h1>
          </div>
          <div className="SettingList__valueElement">
            <ButtonSwitch setChange={setDarkTheme}
              flag={darkTheme}
              key={darkTheme}
            />

          </div>
        </div>
      </div>
    </div>
  )
}

export  {Settings}
