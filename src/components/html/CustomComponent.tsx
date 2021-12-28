import React from 'react';
import { Greet } from '../Greet';

// extracting props types from another component
export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return <div>{props.name}</div>;
};
