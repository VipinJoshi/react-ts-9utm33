import React, { useState, useEffect, useMemo, useContext } from 'react';

import LanguageContext from '../LanguageContext';

const CovidList = () => {
  const [covidData, setCovidData] = useState(null);
  const [button1, setButton1] = useState(null);
  const [button2, setButton2] = useState(null);
  const { selectedLanguage, name } = useContext(LanguageContext);
  useEffect(() => {
    /*fetch('https://data.covid19india.org/data.json')
      .then((response) => response.json())
      .then((resp) => setCovidData(resp.statewise));
      */
    console.log('initial Load');
  }, []);

  useEffect(() => {
    console.log('button1 is called', button1);
  }, [button1]);

  useMemo(() => {
    /**get me count of employee for particular department  */
  }, []);

  const handleOnClick = () => {
    setButton1('update me');
    console.log('1 clicked');
  };

  const handleButton2Click = () => {
    setButton2('update  2nd button me');
    console.log('2 clicked');
    setButton1('update me 2');
  };

  return (
    <React.Fragment>
      {`I am ${name} and my selected language  ${selectedLanguage}`}
      <br />
      <button onClick={handleOnClick}> Button 1 </button>
      <button onClick={handleButton2Click}> Button 2 </button>
      <h2> Covid Data</h2>
      <table>
        {covidData &&
          covidData.map((object) => {
            return (
              <tr key={object.statecode}>
                <td>
                  {object.statecode} has {object.active} cases{' '}
                </td>
              </tr>
            );
          })}
      </table>
    </React.Fragment>
  );
};

export default CovidList;
