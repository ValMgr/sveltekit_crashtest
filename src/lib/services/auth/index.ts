import { writable } from "svelte/store";
import type { User } from "@/lib/types";


export const session = writable<User | null>(null);

export const checkAuthentification = async ( username: string, password: string ) => {
  const getUsers = await fetch('/data/Auth.json')
  const users = await getUsers.json()
  const user = users.find((user: User) => user.username === username && user.password === password)

  return user ? user : null;
}
