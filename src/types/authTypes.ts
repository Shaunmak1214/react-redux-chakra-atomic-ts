export interface authInitialState {
  user: {
    campaingsRegistered: any[];
    email: string;
    favouriteCampaings: any[];
    id: string;
    isEmailVerified: boolean;
    name: string;
    paymentDetails: any[];
    role: string;
    vehicleDetails: any[];
  } | null;
  isAuthenticated: boolean;
  accessToken: string;
  refreshToken: string;
}
