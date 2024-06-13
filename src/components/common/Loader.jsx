import React from 'react';

function Loader() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-6 w-6 animate-spin rounded-full border-4 border-white border-t-primary"></div>
    </div>
  );
}

export default Loader;
