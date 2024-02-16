type RobotVariant = undefined | "set2" | "set3" | "set4";

const convertToRobotVariant = (value: any): RobotVariant => {
    if (["set2", "set3", "set4"].includes(value))
        return value as RobotVariant;
    return undefined;
}

export default RobotVariant;
export { convertToRobotVariant };