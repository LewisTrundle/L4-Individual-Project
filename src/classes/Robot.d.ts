import { DeviceController } from "@espruino-tools/core";
export declare class Robot extends DeviceController {
    #private;
    isConnected: boolean;
    constructor();
    getConnected: () => boolean;
    setConnected: (isConnected: boolean) => void;
    getMotorDir: () => number[];
    setMotorDir: (left: number, right: number) => void;
    popFromBuffer: () => number[][];
    pushToBuffer: (speed: any) => void;
    setSendCodeSpeed(speed: number): void;
    getSendCodeSpeed(): number;
    getMaxForce: () => number;
    setMaxForce: (maxForce: number) => void;
    getMapping: () => number;
    setMapping(mapping: any): void;
    connectRobot: () => void;
    disconnectRobot: () => void;
    diagnostic: (angle?: number) => Promise<void>;
    getBatteryLevel: () => void;
    start: () => Promise<void>;
    stop: () => void;
    continue: () => void;
    moveRobot: (angle: number, force: number, reverseDirection?: boolean) => Promise<void>;
    switchDirections(l_speed: any, r_speed: any): void;
    sendCode(): void;
}
