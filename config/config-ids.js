const android = "com.gotv.nflgamecenter.us.lite.stage";
const iOS = "com.nfl.mobile4.enterprise";

exports.getAppID = function getAppID() {
    if (browser.isAndroid) {
        return android;
    }
    if (browser.isIOS) {
        return iOS;
    }
};

exports.getBundleId = function getBundleId(platform) {
    if (platform == 1) {
        return android;
    }
    if (platform == 2) {
        return iOS;
    }
};
