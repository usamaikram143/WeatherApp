import React from 'react'
import './CurrentWeather.css'

const CurrentWeather = ({ data }) => {
    return (
        <div className="weather">
            <div className="top">
                <div>
                    <p className='city'>{data.city}</p>
                    <p className='weatherDescription'>{data.weather[0].description}</p>
                </div>
                <img src={`icons/${data.weather[0].icon}.png`} alt="weather" className='weatherIcon' />
            </div>
            <div className="bottom">
                <p className='temp'>{Math.round(data.main.temp)}°F</p>
                <div className="details">
                    <div className="parameterRow">
                        <span className='parameterLabel'>Details</span>
                    </div>
                    <div className="parameterRow">
                        <span className='parameterLabel'>Feels like</span>
                        <span className='parameterValue'>{Math.round(data.main.feels_like)}°F</span>
                    </div>
                    <div className="parameterRow">
                        <span className='parameterLabel'>Wind</span>
                        <span className='parameterValue'>{data.wind.speed} MPH</span>
                    </div>
                    <div className="parameterRow">
                        <span className='parameterLabel'>Humidity</span>
                        <span className='parameterValue'>{data.main.humidity}%</span>
                    </div>
                    <div className="parameterRow">
                        <span className='parameterLabel'>Pressure</span>
                        <span className='parameterValue'>{data.main.pressure} hpa</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWeather