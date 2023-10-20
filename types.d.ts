export type NewUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type CurrentUser = {
  current?: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
  setCurrent: (e) => void;
};

export type Store = {
  passwordVisibility: boolean;
  setPasswordVisibility: (e: boolean | null | undefined) => void;
  checkbox: boolean;
  setCheckbox: () => void;
  body: "login" | "register";
  setBody: (body: "login" | "register") => void;
  emailInput: string;
  setEmailInput: (e: string) => void;
  passwordInput: string;
  setPasswordInput: (e: string) => void;
  emailValidation: boolean;
  setEmailValidation: (e: boolean) => void;
  registerUser: NewUser;
  setRegisterUser: (
    arg1: string,
    arg2: string,
    arg3: string,
    arg4: string,
  ) => void;
};
