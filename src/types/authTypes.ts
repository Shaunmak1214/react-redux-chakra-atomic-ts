export interface authInitialState {
  user: {
    cust_email: string;
    cust_full_name: string;
    cust_phone: number;
    cust_intro: string;
    cust_dob: Date;
    cust_address: string;
    cust_profile_pic: string;
    cust_gender: string;
    cust_rating: number;
    cust_review: string;
    cust_citizenship: string;
  } | null;
  isAuthenticated: boolean;
  accessToken: string;
  refreshToken: string;
}
