import React, {Suspense} from "react";

import './LoadingComponent.scss';


const LoadingComponent: React.FC = () => {
    return (
      <div className="loading-component">
          <div className="yunko">Yunko

              <div className="describe-yunko">
                  photographer yulia nerubenko
              </div>
          </div>

      </div>
    );
};


export default function WaitingComponent(Component: React.ComponentType) {
    return (props: any) => (
        <Suspense fallback={LoadingComponent(props)}>
            <Component {...props} />
        </Suspense>
    );
}