import { jwtDecode } from "jwt-decode";
import { create } from "zustand";

type AuthState = {
  token: string | null;
  authUser: null | any;
  isAuthenticated: boolean;
};

type AuthAction = {
  setCredentials: (token: string) => Promise<void>;
  clearCredentials: () => Promise<void>;
  loadAccessToken: () => Promise<void>;
};

type AuthStore = AuthState & AuthAction;

const initialState: AuthState = {
  token: null,
  authUser: null,
  isAuthenticated: false,
};

const authStore = create<AuthStore>()((set) => ({
  ...initialState,
  setCredentials: async (token: string) => {
    const { name: authUser } = jwtDecode<{ name: string }>(token);

    set({
      isAuthenticated: true,
      token,
      authUser,
    });
  },
  clearCredentials: async () => {
    set({ ...initialState });
  },
  loadAccessToken: async () => {},
}));

export default authStore;
