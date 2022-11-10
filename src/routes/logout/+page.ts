import type { PageLoad } from './$types';
import { logout } from '@/lib/services/auth';
import { redirect } from '@sveltejs/kit';


export const load: PageLoad = async () => {
  logout();
  throw redirect(302, '/');
};
