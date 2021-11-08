import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  variant: string;
};

const Button = ({ children, onClick, variant }: ButtonProps) => {
  return (
    <button type="button" className={`base ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
