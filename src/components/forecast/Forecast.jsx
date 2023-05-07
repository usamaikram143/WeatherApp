import React from 'react'
import './forecast.css'
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion'

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {

  const today = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(today, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, today));


  return (
    <>
      <label className='title'>Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (

          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className='dailyItem'>
                  <img src={`/icons/${item.weather[0].icon}.png`} alt="weather" className='iconSmall' />
                  <label className='day'>{forecastDays[idx]}</label>
                  <label className='description'>{item.weather[0].description}</label>
                  <label className='minMax'>
                    {Math.round(item.main.temp_min)}°F |{" "}
                    {Math.round(item.main.temp_max)}°F
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="dailyDetailsGrid">
                <div className="dailyDetailsGridItem">
                  <label>Pressure</label>
                  <label>{item.main.pressure} hpa</label>
                </div>
                <div className="dailyDetailsGridItem">
                  <label>Humidity</label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div className="dailyDetailsGridItem">
                  <label>Clouds</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="dailyDetailsGridItem">
                  <label>Wind Speed</label>
                  <label>{item.wind.speed} MPH</label>
                </div>
                <div className="dailyDetailsGridItem">
                  <label>Sea Level</label>
                  <label>{item.main.sea_level} hpa</label>
                </div>
                <div className="dailyDetailsGridItem">
                  <label>Feels Like</label>
                  <label>{Math.round(item.main.feels_like)}°F</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>

        ))}

      </Accordion>
    </>
  )

}

export default Forecast