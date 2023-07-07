import React from 'react'
import { Helmet } from 'react-helmet';
const Helper = ({imageUrl}) => {
  return (
    <div>
      <Helmet>
        <meta name="description" content="A simple React app that displays a random image." />
        <meta property="og:title" content="Random Image App" />
        <meta property="og:description" content="A simple React app that displays a random image." />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content="https://bucolic-belekoy-ee8b23.netlify.app/" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
      </Helmet>
    </div>
  )
}

export default Helper
