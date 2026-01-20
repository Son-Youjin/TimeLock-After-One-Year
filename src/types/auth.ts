export interface Auth {
  isAuth: boolean;
  accessToken?: string;
}

export type AuthProvider = "naver" | "kakao";
