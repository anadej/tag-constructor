import type { TaglineData } from '@/types/tagline.ts';

const API_URL = 'http://api/tagline';

export const saveTagline = (data: TaglineData): void => {
  console.log('POST', API_URL, data);
};
