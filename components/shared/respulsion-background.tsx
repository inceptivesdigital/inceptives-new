import React from 'react'


interface RespulsionBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  mousePosition: {x: number, y: number}
  src:string
}

const RespulsionBackground = ({mousePosition,src,...props}: RespulsionBackgroundProps) => {
  return (
    <div 
    className="absolute inset-0 z-10 transition-transform duration-300 ease-out"
    style={{
      backgroundImage: `url(${src})`,
      backgroundSize: "cover",
      transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
      backgroundPosition: "center",
      // width: '110vw',
      // height: '100vh',
     
    }}
    {...props}
  />
  )
}

export default RespulsionBackground