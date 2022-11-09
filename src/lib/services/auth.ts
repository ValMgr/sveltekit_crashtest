import type { User } from '@/lib/types';
import { writable } from 'svelte/store';

export const session = writable<User | null>(null);

export const authenticate = async (email: string, password: string): Promise<boolean> => {
	const getUsers = await fetch('/src/data/Auth.json');
	const users = await getUsers.json();
	const user = users.find((user: User) => user.email === email && user.password === password);

	if (user) {
		session.set(user);
		return true;
	}

	return false;
};

export const isAuth = (): boolean => {
	let user_session: null | User = null;
	session.subscribe((user) => {
		user_session = user;
	});

	if (user_session) {
		return true;
	}

	return false;
};
