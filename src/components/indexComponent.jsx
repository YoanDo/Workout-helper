import React from 'react';
import { addLocaleData, FormattedMessage } from 'react-intl';
import locale_en from 'react-intl/locale-data/en';
import locale_fr from 'react-intl/locale-data/fr';
import Display from './display';
import Control from './control';
import Runner from './runner';

addLocaleData([...locale_en, ...locale_fr]);

export default () => (
  <div className="flex-column helper-container">
    <Display />
    <span className="intro"><FormattedMessage id="intro" /></span>
    <div className="flex-row ctrl-board">
      <Control min={5} max={120} label="time" />
      <Control min={1} max={30} label="serie" />
      <Control min={1} max={20} label="loop" />
      <Control min={5} max={360} label="rest" />
    </div>
    <Runner />
  </div>
);
