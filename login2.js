function login(username, pass) {
  if (username === 'admin' && pass === '123') {
    return false;
  }
  return true;
}
