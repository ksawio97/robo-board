import Robot from "./Robot";
import Options from "./Options";
import { useState } from "react";
import RobotInfo from "../utils/RobotInfo";


const DashBoard = () => {
    const [robotInfo, setRobotInfo] = useState<RobotInfo | undefined>()
    return (
        <div className="grid">
            <div className="flex bg-gray-600 p-12 flex-row max-w-fit place-self-center">
                
                {
                    robotInfo === undefined ? <></> :
                    <div className="p-5">
                        <Robot robotInfo={robotInfo}/>
                    </div>
                }
                

                <Options setRobotInfo={setRobotInfo}/>
            </div>     
        </div>
    )
}

export default DashBoard;