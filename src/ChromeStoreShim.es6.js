export default class ChromeStore {
    constructor(){
        this.bd;
    }

    static GetBirthday(cb){
        if(this.bd){
            cb(new Date(this.bd));
        } else {
            cb();
        }
    }

    static SetBirthday(birthday, cb){
        this.bd = birthday.toJSON();
        cb();
    }

    static ClearBirthday(cb){
        chrome.storage.sync.clear(cb);
    }
}
