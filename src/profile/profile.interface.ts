export interface IProfileData {
  username: string;
  bio: string;
  profilePhoto?: string;
  following?: boolean;
}

export interface IProfileRO {
  profile: IProfileData;
}
