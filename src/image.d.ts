declare module '*.jpg' {
    const value: string;
    export default value;
  }
  
  declare module '*.png' {
    const value: string;
    export default value;
  }
  
  declare module '*.svg' {
    import * as React from 'react';
    const value: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export default value;
  }
  