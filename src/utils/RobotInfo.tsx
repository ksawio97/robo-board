import Background from "../SharedTypes/Background";
import RobotVariant from "../SharedTypes/RobotVariant";

export default class RobotInfo {
    name: string
    background: Background
    robotVariant: RobotVariant

    constructor(name: string, background?: Background, robotVariant?: RobotVariant) {
        this.name = name;
        this.background = background;
        this.robotVariant = robotVariant;
    }

    getRobotLink = (): string => {
        const link = [`https://robohash.org/${this.name}`];
        if (this.background !== undefined && this.robotVariant === undefined)
            link.push(`?bgset=${this.background}`);
        if (this.robotVariant !== undefined)
            link.push(`?set=${this.robotVariant}`);
        console.log(link);
        return link.join('');
    }

    copy = (): RobotInfo => {
        return new RobotInfo(this.name, this.background, this.robotVariant);
    }

    isEqual = (other: RobotInfo): boolean => {
        return this.name === other.name && 
            this.background === other.background && 
            this.robotVariant === other.robotVariant;
    }
}