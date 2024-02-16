import Robot from "./Robot";
import Options from "./Options";
import { useState } from "react";
import RobotInfo from "./types/RobotInfo";


const DashBoard = () => {
    const [robotInfo, setRobotInfo] = useState<RobotInfo>()
    return (
        <div className="grid">
            <div className="flex bg-gray-600 p-12 flex-row justify-center max-w-fit place-self-center">
                <div className="p-5">
                {
                    robotInfo === undefined ? <></> :
                    <Robot robotInfo={robotInfo}/>
                }  
                </div>

                <Options setRobotInfo={setRobotInfo}/>
            </div>     
        </div>
    )
}

export default DashBoard;