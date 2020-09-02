import React from 'react';

function importAll (r: __WebpackModuleApi.RequireContext) {
  r.keys().forEach(r);
}

importAll(require.context('./icons/', true, /\.svg$/));

type Props = {
  name?: string
} & React.SVGAttributes<SVGElement>

const Icon = (props: Props) => {
  const { name, children, ...rest } = props
  return (
    <svg className="icon" {...rest}>
      {props.name && <use xlinkHref={'#' + props.name} />}
    </svg>
  )
}

export default Icon