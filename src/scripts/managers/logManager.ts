export class LogManager {
    instanceName: string;

    constructor(instance: any) {
        this.instanceName = instance.constructor.name;
    }

    public error(msg: string): void {
        console.error(this.logFormat('💥', msg), "color:red;");
    }

    public info(msg: string): void {
        console.info(this.logFormat('👁️‍🗨️', msg), "color:black;");
    }

    public warn(msg: string): void {
        console.warn(this.logFormat('⚠️', msg), "color:orange;");
    }

    public debug(msg: string): void {
        console.debug(this.logFormat('🚧', msg), "color:green;");
    }

    private logFormat(icon: string, msg: string): string {
        return `${icon}:${this.instanceName} - %c${msg}`;
    }
}
