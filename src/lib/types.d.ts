export type Person = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  gender: 'Female' | 'Male';
  country: string;
  formation: string;
  year: string;
  internship: string;
}

export type User = {
  id: number;
  email: string;
  username: string;
  password: string;
}
