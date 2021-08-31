import React from 'react'

interface IProps {}

const SvgComponent:React.FC<IProps>= (props) => {
  return (
    <>
    <svg width="200" height="200">
      <circle cx="200" cy="200" r="200" fill="#f00" stroke="none"></circle>
    </svg>
    <svg>
      <rect width="100" height="100" fill="#eee" stroke="#3ce719"></rect>
    </svg>
    <svg width="200" height="200" viewBox="0 0 400 400">
      <circle cx="200" cy="200" r="200" fill="#f00" stroke="none"></circle>
    </svg>
    <svg width="200" height="400" viewBox="0 0 400 400" preserveAspectRatio="xMinYMin">
      <circle cx="200" cy="200" r="200" fill="#0077ff" stroke="none"></circle>
    </svg>
    <svg>
      <polygon points="200,10 250,190 160,210" fill="#587704" stroke="#0c0c0c"></polygon>
    </svg>
    <svg width="200" height="200">
      <polygon points="100,10 40,198 190,78 10,78 160,198" fill="#f00" fillRule="nonzero"></polygon>
    </svg>
    <svg>
      <polyline points="0,40 40,40 40,80 80,80 80,120 120,120 120,160" fill="#fff" stroke="#f00" strokeWidth="4"/>
    </svg>
    <svg>
      <polyline points="0,0 30,60 60,0 " fill="#dd0f98" stroke="#f00" />
    </svg>
    <svg>
      <line x1="10" y1="100" x2="100" y2="20" stroke="red" stroke-width="3px"></line>
    </svg>
    <svg>
      <path d="M10 80 Q 95 10 180 80 T 340 80" stroke="black" fill="transparent"/>
    </svg>
    <svg>
      <polyline points="10 10 60 50 110 10" fill="none" stroke-width="7" stroke="red" stroke-linecap="butt"></polyline>
      <polyline points="130 10 180 50 230 10" fill="none" stroke-width="7" stroke="red" stroke-linecap="square"></polyline>
      <polyline points="250 10 300 50 350 10" fill="none" stroke-width="7" stroke="red" stroke-linecap="round"></polyline>
      <polyline points="10 70 60 110 110 70" fill="none" stroke-width="7" stroke="red" stroke-linejoin="miter"></polyline>
      <polyline points="130 70 180 110 230 70" fill="none" stroke-width="7" stroke="red" stroke-linejoin="round"></polyline>
      <polyline points="250 70 300 110 350 70" fill="none" stroke-width="7" stroke="red" stroke-linejoin="bevel"></polyline>
    </svg>
    <svg width="300" height="500">
      <defs>
        <linearGradient id="test">
            <stop offset="5%" stop-color="#12c2e9" />
            <stop offset="85%" stop-color="#c471ed" />
        </linearGradient>
      </defs>
      <rect fill="url(#test)" x="10" y="10" width="200" height="100"></rect>
    </svg>
    </>
  )
}

export default SvgComponent