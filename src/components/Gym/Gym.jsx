import React from 'react'
import './Gym.css'
import {motion} from 'framer-motion'

const Gym = () => {
  const transition = {type: 'spring', duration:3}
  return (
    <div className="gym-container" id="gym">
        <div className="blur gym-blur-1"></div>
        <div className="blur gym-blur-2"></div>
        <div className="gym-header" style={{gap: '1rem'}}>
            <span className="stroke-text">GYM</span>
            <span>Workout Plan</span>
        </div>
        <div className="workouts">
            <div className="lift">
                <div className="hd">Push</div>
                <span className="workoutheader">Chest</span>
                <span>- Incline Press 3x8-10</span>
                <span>- Chest Press 3x8-10</span>
                <span className="workoutheader">Triceps</span>
                <span>- Weighted Dips 3xF</span>
                <span className="workoutheader">Shoulders</span>
                <span>- Lat Raises 3xF</span>
                <span>- Shoulder Press 2xF</span>
            </div>
            <div className="lift">
                <div className="hd">Pull</div>
                <span className="workoutheader">Back</span>
                <span>- Wide Lat PD 3x8</span>
                <span>- Close Lat PD 3x8</span>
                <span className="workoutheader">Biceps</span>
                <span>- Incline DB Curls 2x8</span>
                <span>- Hammer Curls 2x8</span>
                <span className="workoutheader">Cardio</span>
                <span>- Burn 300 calories</span>
            </div>
            <div className="lift">
                <div className="hd">Legs</div>
                <span className="workoutheader">Compound</span>
                <span>- Squat 4x6-10</span>
                <span className="workoutheader">Quads</span>
                <span>- Leg Extensions 3x8</span>
                <span className="workoutheader">Hamstrings</span>
                <span>- Hamstring Curls 3x8</span>
                <span className="workoutheader">Abdominal</span>
                <span>- Crunches 5xF</span>
            </div>
            <div className="lift">
                <div className="hd">CBS</div>
                <span className="workoutheader">Chest</span>
                <span>- Pec Deck 3x8-10</span>
                <span className="workoutheader">Back</span>
                <span>- Cable Rows 3x8</span>
                <span className="workoutheader">Shoulders</span>
                <span>- Rev Pec Deck 3x10</span>
                <span className="workoutheader">Cardio</span>
                <span>- Burn 150 calories</span>
            </div>
            <div className="lift">
                <div className="hd">Arms</div>
                <span className="workoutheader">Triceps</span>
                <span>- Cable PD 3x10</span>
                <span>- OH Extensions 3x10</span>
                <span className="workoutheader">Biceps</span>
                <span>- DB Curls 3x10-12</span>
                <span>- Preacher Curls 3xF</span>
                <span className="workoutheader">Cardio</span>
                <span>- Burn 300 calories</span>
            </div>
        </div>
    </div>
  )
}

export default Gym