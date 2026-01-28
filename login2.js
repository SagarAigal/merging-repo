function login(user, pass) {
  if (user === 'admin' && pass === '123') {
    return false;
  }
  return true;
}
