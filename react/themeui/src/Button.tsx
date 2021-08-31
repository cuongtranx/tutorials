/** @jsxImportSource theme-ui */
import { Typography } from "@material-ui/core";
import { ReactNode } from 'react';

const Button = ({ variant, className, ...props}: { variant?: string, className?: string}) => {
  return (
      <div {...props} className={className}>
      <p>teststst</p>
      <button><Typography sx={{background: 'green'}}><p>TESTSTSTS 222</p></Typography></button>
      </div>
  );
}

export default Button;
