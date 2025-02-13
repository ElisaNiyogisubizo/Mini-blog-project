import { ComponentType, useEffect } from "react";

const withLogger = <P extends object>(WrappedComponent: ComponentType<P>) => {
  return (props: P) => {
    useEffect(() => {
      console.log(`${WrappedComponent.name} component mounted`);
      return () => console.log(`${WrappedComponent.name} component unmounted`);
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withLogger;
