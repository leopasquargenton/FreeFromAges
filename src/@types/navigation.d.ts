export interface StepParams{
  step:number;
}
export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      OnBoarding: undefined;
      Login: {userType: string;}; 
      SignUp:{step: number};
      UserProfile:undefined;
      RestaurantProfile:undefined;
      UserEditProfile:undefined;
      RestaurantEditProfile:undefined;
      RestaurantEditProfileAddress:undefined;
      RestaurantEditProfilePasswordAndEmail:undefined;
      TabRoutes:{
        screen: string;
      }
    }
  }
}
