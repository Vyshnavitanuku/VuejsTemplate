import Vue from 'vue'

export function vueGet(url, headers) {

  return Vue.http.get(url, headers).then(response => response.body).catch(error => error)
}
export function vuePost(url, body, headers) {
  return new Promise((resolve, reject) => {
  Vue.http.post(url, body, headers).then((response) => {
    resolve(response.body)
  }).catch(error => {
    reject(error.body)
  });
  });
}
export function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*60000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
export function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
export function deleteCookie(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}