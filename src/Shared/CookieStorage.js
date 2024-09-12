

export const storeCookies = () => {
  let expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + 2 * 60 * 60 * 1000); // 2 hours in milliseconds
  // expirationDate.setTime(expirationDate.getTime() + 60*1000); // 2 hours in milliseconds
  document.cookie = `token=anandtoken; expires=${expirationDate.toUTCString()}; path=/`;
};

export function checkTokenValidity() {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].split('=');
      if (cookie[0] === 'token') {
        const tokenExpiration = new Date(cookie[1]);
        if (tokenExpiration < new Date()) {
          // Token has expired
          return false;
        }
        return true;
      }
    }
    // Token not found
    return false;
  }
  
