export default class ChromeStore {
    constructor(){

    }

    static GetBirthday(cb){
        chrome.storage.sync.get('Birthday', (bd) => {
            if(bd && bd.Birthday){
                cb(new Date(bd.Birthday));
            } else {
                cb();
            }
        })
    }

    static SetBirthday(birthday, cb){
        chrome.storage.sync.set({'Birthday': birthday.toJSON()}, cb);
    }

    static ClearBirthday(cb){
        chrome.storage.sync.clear(cb);
    }
}
