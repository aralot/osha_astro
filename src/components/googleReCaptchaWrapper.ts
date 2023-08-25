import {asyncLoadScript} from "./asyncLoadScript";

export const KEY = '6LdK_RclAAAAADApWB10Y1ClEYT6KEL0XkCLNZRv';

let loadScriptPromise = null;

export const loadReCaptchaSource = async () => {
  if (!loadScriptPromise) {
    loadScriptPromise = new Promise(
      async (resolve) => {
        await asyncLoadScript('https://www.google.com/recaptcha/api.js?render=' + KEY);
        window.grecaptcha.ready(resolve);
      }
    );
  }

  return loadScriptPromise;
}
