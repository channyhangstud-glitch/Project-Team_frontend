import Users from '../../../data/Users';

const USERS_KEY = 'shop_users';
const CURRENT_USER_KEY = 'shop_current_user';

function getStoredUsers() {
  const stored = localStorage.getItem(USERS_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  localStorage.setItem(USERS_KEY, JSON.stringify(Users));
  return [...Users];
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function login(email, password) {
  const users = getStoredUsers();
  const user = users.find(
    (u) => u.email === email && u.password === password
  );
  if (user) {
    const { password: _, ...safeUser } = user;
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(safeUser));
    return safeUser;
  }
  return null;
}

export function register(userData) {
  const users = getStoredUsers();
  const exists = users.some((u) => u.email === userData.email);
  if (exists) {
    return { success: false, message: 'Email already registered' };
  }
  const newUser = {
    id: users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1,
    name: userData.name,
    email: userData.email,
    password: userData.password,
    role: 'user',
  };
  users.push(newUser);
  saveUsers(users);
  const { password: _, ...safeUser } = newUser;
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(safeUser));
  return { success: true, user: safeUser };
}

export function logout() {
  localStorage.removeItem(CURRENT_USER_KEY);
}

export function getCurrentUser() {
  const stored = localStorage.getItem(CURRENT_USER_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  return null;
}

export function isAuthenticated() {
  return getCurrentUser() !== null;
}
