export const APP_ROUTES = {
  ROOT: '/',
  LOGIN: '/auth/login',
  SIGNUP: '/auth/signup',
  PROFILE: '/profile',
  TRAINER: '/trainer',
  INTERVIEW: '/interview',
  QUESTIONS: '/questions',
  QUESTION: '/question',
  PRICING: '/pricing',
  ABOUT: '/about',
};

export const API_ROUTES = {
  GRADES: '/grades',
  TECHNOLOGIES: '/technologies',
  QUESTIONS: '/questions',
  ANSWERS: '/answers',
};

export const API_BASE_URL = 'https://interview-back-hono.vercel.app';

export const GRADE_COLORS = new Map<string, string>([
  ['Junior', 'bg-cyan-600'],
  ['Middle', 'bg-purple-600'],
  ['Senior', 'bg-red-600'],
]);

export const CODE_BLOCK_LANGUAGES = new Map<string, string>([
  ['HTML', 'html'],
  ['CSS', 'css'],
  ['JavaScript', 'javascript'],
  ['TypeScript', 'typescript'],
  ['React', 'jsx'],
  ['NextJS', 'tsx'],
  ['Git', 'git'],
]);
