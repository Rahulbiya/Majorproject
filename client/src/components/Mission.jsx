import React from 'react'
import './Mission.css'

const Mission = () => {
  return (
    <section className='bg-gradient-to-bl from-black to-black'>
        <div className='container flex-col w-layout text-center padding-x-l padding-x-m-tab'>
      <h3 className='h2 text-white'>Join the mission</h3>
      <h4 className='h5 margin-bottom-m fw-500 color-silver text-white mt-7'>Flight for a safer and more liquid web3</h4>
      <div className="column-wrapper max-width-30rem-mob margin-x-auto-mob">
        <div className="target column third flex-column padding-x-xs margin-y-l-mob">
            <div className='padding-x-s margin-bottom-xs padding-x-m-mob'>
                <img src="https://assets-global.website-files.com/645a5e62baf4b2054b2bf9d8/653a9b558566579fbe1e5bbb_horn-p-500.webp" />
            </div>
            <div className='SubOne text-white'>
        Pioneer creative decentralized technologies that hold true to the original vision.
    </div>
        <a href="" target='_blank' className='button secondary margin-top-auto margin-x-auto w-button text-white hover:text-white'>Learn More</a>
        </div>
        <div className="target column third flex-column padding-x-xs margin-y-l-mob">
             <div className='padding-x-s margin-bottom-xs padding-x-m-mob'>
                <img src="https://assets-global.website-files.com/645a5e62baf4b2054b2bf9d8/6526dd850453cc6ed8da04b2_hammer-p-500.webp"  />
            </div>
            <div className='SubOne text-white'>
            Join a worldwide community of builders working on P2P protocols and products.
        </div>
        <a href="" target='_blank' className='button secondary margin-top-auto margin-x-auto w-button text-white hover:text-white'>Say Hello</a>
        </div>
        <div className="target column third flex-column padding-x-xs margin-y-l-mob">
                <div className='padding-x-s margin-bottom-xs padding-x-m-mob'>
                <img src="https://assets-global.website-files.com/645a5e62baf4b2054b2bf9d8/6526dd85b2c715cd6f3e3944_staff-p-500.webp"  />
            </div>
            <div className='SubOne text-white'>
            Connect to our permissionless network and start providing liquidity immediately.
        </div>
        <a href="" target='_blank' className='button secondary margin-top-auto margin-x-auto w-button text-white hover:text-white'>Launch Maker</a>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Mission