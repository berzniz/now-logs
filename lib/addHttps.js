module.exports = function addHttps(url) {
    if (url.indexOf('https://') !== 0 && url.indexOf('http://') !== 0) {
        url = 'https://' + url;
    }
    return url;
};
