"use strict";
/**
 * Created by nazar on 01.02.17.
 */
class Realtime {
    callback(func, response, callback) {
        if (typeof response == 'string')
            response = this.parseJson(response);
        if (typeof func == 'function') {
            return func(response);
        }
        try {
            eval(func);
            return callback(response);
        }
        catch (err) {
            try {
                if (response != undefined) {
                    if (Realtime[func](response)) {
                        return callback(response);
                    }
                }
                else {
                    if (Realtime[func](response)) {
                        return callback(response);
                    }
                }
            }
            catch (err) {
                console.log(err);
            }
        }
    }
    ;
    parseJson(json) {
        try {
            return JSON && JSON.parse(json);
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }
}
exports.Realtime = Realtime;
