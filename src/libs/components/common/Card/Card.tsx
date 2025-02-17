import * as React from 'react';

interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
    <div className={'bg-white shadow-md p-4 rounded-md'}>
      {children}
    </div>
  )
}