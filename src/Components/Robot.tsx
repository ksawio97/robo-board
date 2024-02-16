import { memo, useEffect, useState } from "react";
import Ripple from './Ripple/Ripple';
import RobotInfo from '../utils/RobotInfo';

type RobotProps = {
    robotInfo: RobotInfo
}

const Robot = ({robotInfo}: RobotProps) => {
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
            <img className='transition-opacity duration-500' src={robotInfo.getRobotLink()} alt='Robot' onLoad={() => setLoaded(true)} style={{opacity: Number(loaded)}}></img>
        </div>
    )
}

export default memo(Robot, (prevProps, nextProps) => {
    return prevProps.robotInfo.isEqual(nextProps.robotInfo);
});