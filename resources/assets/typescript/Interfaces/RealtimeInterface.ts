/**
 * Created by nazar on 01.02.17.
 */

export interface RealtimeInterface {
    callback(func, response : string, callback) : void;
    parseJson(json);
}