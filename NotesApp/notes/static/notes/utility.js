let HEADERS = {
  'Accept': 'application/json, text/plain, */*',
  'Content-Type': 'application/json',
  'X-CSRFToken': getCookie('csrftoken')
}

function getCookie(name) {
    if (!document.cookie) {
      console.log("No cookie.");
      return null;
    }

    if (document.cookie == "") {
      console.log("Cookie empty.");
      return null;
    }

    var cookies = document.cookie.split(';');

    for (const cookie of cookies) {
      const cookieName = cookie.substring(0, name.length);
      const cookieValue = cookie.substring(name.length + 1);
      if (cookieName == name) {
        return decodeURIComponent(cookieValue);
      }
    }
  }
