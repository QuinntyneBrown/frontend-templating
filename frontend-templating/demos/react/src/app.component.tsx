import * as React from 'react';

interface IAppProps extends React.Props<any> {
  onClick?: () => void;
  type?: string;
  className?: string;
  id?: string;
};

export default function AppComponent({
  onClick = () => alert("works"),
  type = 'app',
  className = '',
  id = '',
  children = null
}: IAppProps) {
  return (
    <div
      id={ id }
      onClick={ onClick }>
          <h1>Works</h1>
    </div>
  );
}
