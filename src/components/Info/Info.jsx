import React from 'react'
import './Info.css'
import Male from '../../assets/Male.svg.png'
import Female from '../../assets/Female.svg.png'

const Info = () => {
  return (
    <div className="Info" id="info">
        <div className="right-i">
            <span>GENERAL INFORMATION</span>
        <div className='details-i'>
            <div>
                <span>HEIGHT: </span>
                <form action='' className='height-container'>
                    <input type="height" name="user_height" placeholder='Enter current height' />
                </form>
                <span>in</span>
            </div>
            <div>
                <span>WEIGHT:</span>
                <form action='' className='weight-container'>
                    <input type="weight" name="user_weight" placeholder='Enter current weight' />
                </form>
                <span>lbs</span>
            </div>
            <div>
                <span>AGE: </span>
                <form action='' className='age-container'>
                    <input type="age" name="user_age" placeholder='Enter age' />
                </form>
                <span>yrs</span>
            </div>
            <div className="gender">
                <span>GENDER: </span>
                <button className="btn btn-male">
                    <img src={Male} alt=""></img>
                </button>
                <button className="btn btn-fem">
                    <img src={Female} alt="" ></img>
                </button>
            </div>
            <div>
                <span>GOAL: </span>
                <span></span>
                <span></span>
                <button className="btn btn-cut">CUT</button>
                <button className="btn btn-main">MAINTAIN</button>
                <button className="btn btn-bulk">BULK</button>
            </div>
        </div>
        <div className="join-i">
            <div>
                <button className="btn btn-join">GET MY FlexPLANS</button>
            </div>
        </div>
        </div>
        <div className="macrocenter" >
            <span className='macros'>
                macro center (daily)
            </span>
            <span className='cpc'>
                <span>calories:</span>
                <span className="cal">
                    5000
                </span>
                <span className="kcal">
                    cal
                </span>
            </span>
            <span className='cpc'>
                <span>protein:</span>
                <span className="protein" >
                    250
                </span>
                <span className="kcal">
                    g
                </span>
            </span>
            <span className='cpc'>
                <span>carbs:</span>
                <span className="carbs" >
                    200
                </span>
                <span className="kcal">
                    g
                </span>
            </span>
            <span className='cpc'>
                <span>fats:</span>
                <span className="fats" >
                    75
                </span>
                <span className="kcal">
                    g
                </span>
            </span>
        </div>
        <div className="end">
            <span className='macros'>
                important nutrients
            </span>
            <span className='cpc'>
                <span>fiber:</span>
                <span className="fiber">
                    35
                </span>
                <span className="kcal">
                    g
                </span>
            </span>
            <span className='cpc'>
                <span>fat:</span>
                <span className="fat">
                    85
                </span>
                <span className="kcal">
                    g
                </span>
            </span>
            <span className='cpc'>
                <span>sodium:</span>
                <span className="sodium">
                    2300
                </span>
                <span className="kcal">
                    mg
                </span>
            </span>
            <span className='cpc'>
                <span>potassium:</span>
                <span className="potassium">
                    2300
                </span>
                <span className="kcal">
                    mg
                </span>
            </span>
        </div>
    </div>
  )
}

export default Info