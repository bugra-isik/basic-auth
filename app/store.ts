import { CurrentUser, Store } from "@/types";
import { create } from "zustand";

const currentUserStore = create<CurrentUser>()((set) => ({
  current: null,
  setCurrent: (e) => set(() => ({ current: e })),
}));

const useStore = create<Store>()((set) => ({
  passwordVisibility: false,
  setPasswordVisibility: (e) =>
    set((store) => ({ passwordVisibility: e ?? !store.passwordVisibility })),
  checkbox: false,
  setCheckbox: () => set((state) => ({ checkbox: !state.checkbox })),
  body: "login",
  setBody: (e) => set(() => ({ body: e })),
  emailInput: "",
  setEmailInput: (e) => set(() => ({ emailInput: e })),
  passwordInput: "",
  setPasswordInput: (e) => set(() => ({ passwordInput: e })),
  emailValidation: true,
  setEmailValidation: (e) => set(() => ({ emailValidation: e })),
  registerUser: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },
  setRegisterUser: (arg1, arg2, arg3, arg4) =>
    set(() => ({
      registerUser: {
        firstName: arg1,
        lastName: arg2,
        email: arg3,
        password: arg4,
      },
    })),
}));

export { useStore, currentUserStore };
