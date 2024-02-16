import { memo, useEffect, useState } from "react"
import RobotInfo from "./types/RobotInfo";
import Ripple from './Ripple/Ripple';
type RobotProps = {
    robotInfo: RobotInfo
}

const getRobotLink = (robotInfo: RobotInfo): string => {
    return `https://robohash.org/${robotInfo.name}`
}

const Robot = ({robotInfo}: RobotProps) => {
    const robotLink = getRobotLink(robotInfo);

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(false)
    }, [robotInfo])
    return (
        <div className="flex flex-col items-center shrink-0">
            <div className="h-10">
                {
                    !loaded ? <Ripple/> : 
                        <h2 className="text-center text-white text-xl font-bold">{robotInfo.name}</h2>
                }
            </div>
            <img src={robotLink} alt='Robot' onLoad={() => setLoaded(true)} style={{visibility: loaded ? 'visible' : 'hidden'}}></img>
        </div>
    )
}

export default memo(Robot, (prevProps, nextProps) => {
    return prevProps.robotInfo.name === nextProps.robotInfo.name;
});