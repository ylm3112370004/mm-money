import React from 'react';

function importAll (r: __WebpackModuleApi.RequireContext) {
  r.keys().forEach(r);
}

importAll(require.context('./icons/', true, /\.svg$/));

type Props = {
  name: string
}

const Icon = (props: Props) => {
  return (
    <svg className="icon">
      <use xlinkHref={'#' + props.name} />
    </svg>
  )
}

export default Icon