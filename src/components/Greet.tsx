import React from 'react';

type GreetProps = {
  name: string;
  // optional prop messageCount
  messageCount?: number;
  isLoggedIn: boolean;
};

export const Greet = ({ name, messageCount = 0, isLoggedIn }: GreetProps) => {
  // if not messageCount not provided will default to 0
  return (
    <div>
      <h2>
        {isLoggedIn
          ? `Hi ${name}! You have ${messageCount} unread messages.`
          : `Welcome Guest!`}
      </h2>
    </div>
  );
};
