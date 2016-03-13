export const Year = 31557600,
            Day = 86400,
            Hour = 3600,
            Minute = 60;


export class Duration {
    constructor(p, q){
        this.Start = Math.max(p, q);
        this.End = Math.min(p, q);
        this.delta = Math.abs(this.End - this.Start) / 1000;
    }

    get Years(){
        if(!this.years){
            this.years =  Math.floor(this.delta / Year);
            this.delta -= this.years * Year;
        }

        return this.years;
    }

    get Days(){
        this.years || this.Years;
        if(!this.days){
            this.days =  Math.floor(this.delta / Day);
            this.delta -= this.days * Day;
        }

        return this.days;
    }

    get Hours(){
        this.days || this.Days;
        if(!this.hours){
            this.hours =  Math.floor(this.delta / Hour) % 24;
            this.delta -= this.hours * Hour;
        }

        return this.hours;
    }

    get Minutes(){
        this.hours || this.Hours;
        if(!this.minutes){
            this.minutes =  Math.floor(this.delta / Minute) % 60;
            this.delta -= this.minutes * Minute;
        }

        return this.minutes
    }

    get Seconds(){
        this.minutes || this.Minutes;
        return this.seconds ? this.seconds : this.seconds = Math.floor(this.delta) % 60;
    }
}
