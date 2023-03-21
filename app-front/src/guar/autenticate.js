export function isAuthenticated() {
    const cookies = document.cookie.split(';');
    const cookieName = 'authUsuarioOMG=';
    let isAuthenticated = false;
    
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        isAuthenticated = true;
        break;
      }
    }
    
    return isAuthenticated;
  }