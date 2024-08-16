import { TeaBrewData, TeaBrewMethodName } from "./TeaBrewdata";

type StopReason = "annul" | "reset" | undefined;

class Timer {
    private TICK_TIME = 500;
    private tick: () => void;
    brewData = {}
    private currentBrewType: string;
    private currentBrewTemp: number;
    private currentBrewMethod: TeaBrewMethodName;
    private currentBrewData: TeaBrewData;
    private currentBrews: number;
    private startTime: Date;
    private stopTime: Date;
    private isRunning: boolean;
    private shouldStop: boolean;
    private stopReason: StopReason;
    private startButton: HTMLButtonElement;
    private textBox: HTMLInputElement;
    private background: HTMLBodyElement;
    private stats: HTMLDivElement;

    constructor(brewData: TeaBrewData, brewMethod: TeaBrewMethodName, startButton: HTMLButtonElement, textBox: HTMLInputElement, background: HTMLBodyElement, stats: HTMLDivElement) {
        this.currentBrewType = brewData.teaType;
        this.currentBrewTemp = brewData.tempCels;
        this.currentBrewMethod = brewMethod;
        this.currentBrewData = brewData;
        this.currentBrews = 0;
        this.startTime = new Date();
        this.stopTime = new Date(this.startTime.getTime() + (this.currentBrewData[this.currentBrewMethod].infusions.first * 1000));
        this.shouldStop = false;
        this.stopReason = undefined;
        this.startButton = startButton;
        this.startButton.addEventListener("click", () => this.start());
        this.textBox = textBox;
        this.background = background;
        this.background.style.background = this.currentBrewType;
        this.stats = stats;
        this.stats.innerText = this.currentStats;

        this.tick = () => {
            if (this.isRunning && this.shouldStop) {
                switch (this.stopReason) {
                    case "annul":
                        this.isRunning = false;
                        this.shouldStop = false;
                        this.startButton.innerText = this.currentBrews == 0 ? "Start" : "Next";
                        this.startTime = new Date();
                        this.stopTime = this.nextStopTime;
                        this.textBox.value = this.currentTime;
                        break;
                
                    default:
                        throw Error("Unimplemented stopReason.");
                        break;
                }
                return;
            }
            // This value is what to draw on the timer
            this.textBox.value = this.currentTime;
    
            if (new Date().getTime() > this.stopTime.getTime()) {
                this.isRunning = false;
                this.shouldStop = false;
                this.pulse();
                this.textBox.value = "0";
                this.currentBrews += 1;
                this.startButton.innerText = "Next";
                this.stats.innerText = this.currentStats;

                setTimeout(()=>{
                    this.startTime = new Date()
                    this.stopTime = this.nextStopTime
                    this.textBox.value = this.currentTime;
                }, 1000);
                return;
            }
            setTimeout(this.tick, this.TICK_TIME);
        }
    }

    public start(): void {
        if (this.isRunning) {
            this.shouldStop = true;
            this.stopReason = "annul";
            return;
        }
        this.shouldStop = false;
        this.isRunning = true;
        this.stopReason = undefined;
        this.startTime = new Date();
        this.stopTime = this.nextStopTime;
        this.startButton.innerText = "Annul";
        setTimeout(this.tick, this.TICK_TIME);
    };

    public pulse(): void {
        // Apply the green background with a transition
        this.background.style.transition = "background-color 0.5s ease-in-out";
        this.background.style.backgroundColor = "white";

        // After 0.5 seconds (half of the pulse duration), revert to white
        setTimeout(() => {
            this.background.style.backgroundColor = this.currentBrewType;
        }, 500);
    }

    public annul(): void {
        this.shouldStop = true;
        this.stopReason = "annul";
    };
    public reset(): void {
        throw Error("Unimplemented function reset()")
    };

    get currentStats(): string {
        return `Tea type: ${this.currentBrewType}, Brews: ${this.currentBrews}, Temp: ${this.currentBrewTemp}, Method: ${this.currentBrewMethod}`;
    }

    get nextStopTime(): Date {
        return new Date(this.startTime.getTime() + (this.currentBrewData[this.currentBrewMethod].infusions.first * 1000) + ((this.currentBrews * this.currentBrewData[this.currentBrewMethod].infusions.next) * 1000));
    }

    get currentTime(): string {
        return ((this.stopTime.getTime() - new Date().getTime())/1000).toFixed(0);
    };
}

export default Timer