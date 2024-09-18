import { deleteCookie, getCookie, setCookie } from 'cookies-next';

interface CookieOptions {
  maxAge?: number;
  expires?: Date;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: 'strict' | 'lax' | 'none';
}

interface SetCookieParams {
  key: string;
  value: any;
  remember?: boolean;
  options?: CookieOptions;
}

interface GetCookieParams {
  key: string;
  options?: CookieOptions;
}

class Cookies {
  static setCookie = ({ key, value, remember = true, options = {} }: SetCookieParams): void => {
    if (remember) options.maxAge = 10 * 365 * 24 * 60 * 60;
    setCookie(key, value, options);
  };

  static getCookie = ({ key, options = {} }: GetCookieParams): any => {
    const data = getCookie(key, options);
    let result: any = null;
    try {
      if (data) result = JSON.parse(data as string);
    } catch {
      result = null;
    }
    return result;
  };

  static getStringCookie = ({ key, options = {} }: GetCookieParams): string => {
    const data = getCookie(key, options);
    if (data) return data as string;
    return '';
  };

  static removeCookie = ({ key, options = {} }: GetCookieParams): void => {
    deleteCookie(key, options);
  };
}

export default Cookies;
