export interface UserProfile {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
  createDate?: string;
  updateDate?: string;
}