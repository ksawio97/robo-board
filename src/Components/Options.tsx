import { useState } from "react";
import RobotInfo from "../utils/RobotInfo";
import { convertToBackground } from "../SharedTypes/Background";
import { convertToRobotVariant } from "../SharedTypes/RobotVariant";

type OptionsProps = {
    setRobotInfo: React.Dispatch<React.SetStateAction<RobotInfo | undefined>>
}
const Options = ({ setRobotInfo }: OptionsProps) => {
    const [localRobotInfo, setLocalRobotInfo] = useState<RobotInfo>(new RobotInfo(""));

    return (
        <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-white text-left">Name: </label>
            <input type="text" id="name" onChange={(e) => {
                setLocalRobotInfo((prev) => {
                    const next = prev.copy();
                    next.name = e.target.value;
                    return next;
                });
            }}></input>


            <label htmlFor="robotVariant" className="text-white text-left">Robot Variant: </label>
            <select id="robotVariant" onChange={(e) => {
                setLocalRobotInfo((prev) => {
                    const next = prev.copy();
                    next.robotVariant = convertToRobotVariant(e.target.value);
                    next.background = next.robotVariant !== undefined ? undefined : next.background;
                    return next;
                });
            }}>
                <option value="">Robot</option>
                <option value="set2">Monster</option>
                <option value="set3">Robot head</option>
                <option value="set4">Kitten</option>
            </select>
            {
                localRobotInfo.robotVariant === undefined ?
                (<>
                <label htmlFor="background" className="text-white text-left">Background: </label>
                <select id="background" onChange={(e) => {
                        setLocalRobotInfo((prev) => {
                            const next = prev.copy();
                            next.background = convertToBackground(e.target.value);
                            return next;
                        });
                    }}>
                    <option value="">None</option>
                    <option value="bg1">Set 1</option>
                    <option value="bg2">Set 2</option>
                </select></>) : <></>
            }
            

            <button className="bg-gray-100" onClick={() => {
                //TODO add some kind of error that user will see
                if (localRobotInfo.name === "")
                    return;
                setRobotInfo(localRobotInfo.copy());
            }}>Generate</button>
        </div>
    )
}


export default Options;