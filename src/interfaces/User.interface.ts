export default interface User {
  login: string;
  avatar_url: string;
  bio?: string;
  isAuthenticated?: boolean;
  id: number;
}
