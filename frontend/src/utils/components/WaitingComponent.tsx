import React, {Suspense} from "react";


const LoadingComponent = () => {
    return (
      <div>Loading...</div>
    );
};


export default function WaitingComponent(Component: React.ComponentType) {
    return (props: any) => (
        <Suspense fallback={LoadingComponent()}>
            <Component {...props} />
        </Suspense>
    );
}