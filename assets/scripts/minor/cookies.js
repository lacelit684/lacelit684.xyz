function getCookie(cname) { // yes, this function is stolen 👍
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

if (getCookie("cookieallowed") == "true") {return}

if (confirm("Can I store cookies other than necessary in your browser? (set to 'no' to deny)","yes") != "no") {
    document.cookie = "cookieallowed=true"
}