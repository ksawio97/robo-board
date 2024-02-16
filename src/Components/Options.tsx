import { useState } from "react";
import RobotInfo from "./types/RobotInfo";

type OptionsProps = {
    setRobotInfo: (robotInfo: RobotInfo) => void
}
const Options = ({ setRobotInfo }: OptionsProps) => {
    const [robotName, setRobotName] = useState('')
    return (
        <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-white text-left">Name: </label>

            <input type="text" id="name" onChange={(e) => {
                setRobotName(e.target.value);
            }}></input>

            <button className="bg-gray-100" onClick={() => {
                //TODO add some kind of error that user will see
                if (robotName === '')
                    return;

                setRobotInfo({
                    name: robotName,
                })
            }}>Generate</button>
        </div>
    )
}


export default Options;