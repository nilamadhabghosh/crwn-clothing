import React from 'react';

import Spinner from '../spinner/spinner.component';

const withSpinner = (WrappedComponent) =>
  ({ isLoading, ...otherprops }) => {
    return isLoading ? (
      <Spinner />
    ) : (
        <WrappedComponent {...otherprops} />
      );
  };

export default withSpinner;
