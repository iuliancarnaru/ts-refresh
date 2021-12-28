import { useState } from 'react';

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  // const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({ name: 'Iulian', email: 'test@test.com' });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <p>User name is {user?.name}</p>
      <p>User email is {user?.email}</p>

      {/* <p>User name is {user.name}</p>
      <p>User email is {user.email}</p> */}
    </div>
  );
};
