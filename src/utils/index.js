import { GOOGLE_CLIENT_ID } from './Constants';

export const customLog = (message, type) => {
  switch (type) {
    case 'WS':
      console.log(`%c ${message}`, 'color: orange'); // eslint-disable-line
      break;
    case 'E':
      console.log(`%c ${message}`, 'color: red'); // eslint-disable-line
      break;
    case 'I':
      console.log(`%c ${message}`, 'color: blue'); // eslint-disable-line
      break;
    default:
      console.log(`%c ${message}`, 'color: green'); // eslint-disable-line
  }
};

// Build Header auth
export const buildAuthtorization = (state) => {
  const {
    auth: { data },
  } = state;
  return { headers: { Authorization: `Token ${data.token}` } };
};

window.isGoogleReady = false;
// TESTING OAUTH
export const initGoogleOauth = () => {
  window.gapi.load('auth2', () => {
    window.gapi.auth2.init({
      client_id: GOOGLE_CLIENT_ID,
    });
    window.isGoogleReady = true;
  });
};

window.initGoogleOauth = initGoogleOauth;

const gogoleLogout = (resolve, reject) => {
  try {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2
      .signOut()
      .then(() => {
        resolve('Logout from gapi');
      })
      .catch((error) => {
        reject(error);
      });
  } catch (error) {
    reject(error);
  }
};

export const signOutGoogleOauth = () =>
  new Promise((resolve, reject) => {
    if (window.isGoogleReady) {
      const checkGoogleReady = setInterval(() => {
        gogoleLogout(resolve, reject);
        clearInterval(checkGoogleReady);
      }, 500);
    } else {
      window.gapi.load('auth2', () => {
        window.gapi.auth2.init({
          client_id: GOOGLE_CLIENT_ID,
        });
        gogoleLogout(resolve, reject);
      });
    }
  });

export const getUserInfo = (data) => {
  let username = null;
  let email = '';
  let avatar = null;
  const usermessage = '...add your message';
  if (data.w3) {
    username = data.w3.ig;
    email = data.w3.U3;
    avatar = data.w3.Paa;
  } else {
    username = data.email;
    avatar = 'https://placeimg.com/150/150/any/sepia';
  }
  return {
    username,
    email,
    avatar,
    usermessage,
  };
};
