export interface SignUpData {
  name: string;
  email: string;
  password: string;
  passwordCheck: string;
  status: 'STUDENT' | 'GUEST' | 'EMPLOYEE';
  diet: 'NO_MEAT' | 'VEGETARIAN' | 'VEGAN';
  indigestibilities: string[];
}
