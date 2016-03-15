export const Year = 31557600,
            Day = 86400,
            Hour = 3600,
            Minute = 60;


export class Duration {
    constructor(p, q){
        this.Start = Math.max(p, q);
        this.End = Math.min(p, q);
        this.delta = Math.abs(this.End - this.Start) / 1000;
        this.Calculate();

        Object.freeze(this);
    }

    Calculate(){
        this.Years =  Math.floor(this.delta / Year);
        this.delta -= this.Years * Year;

        this.Days =  Math.floor(this.delta / Day);
        this.delta -= this.Days * Day;

        this.Hours =  Math.floor(this.delta / Hour) % 24;
        this.delta -= this.Hours * Hour;

        this.Minutes =  Math.floor(this.delta / Minute) % 60;
        this.delta -= this.Minutes * Minute;

        this.Seconds = Math.floor(this.delta) % 60;
    }
}
