import Vector from '../assets/Vector.png'
import zuri from '../assets/zuri.png'

const Footer = () => {
  return (
      <>
    <hr className='mb-10 mt-20 mx-[16px] lg:mx-[48px]'/>
     <div className='ml-[16px] lg:flex justify-between items-center mb-8 lg:mx-[48px]'>
      <img className='mt-3' src={Vector} alt="" />
      <p className='mt-3'>HNG Internship 9 Frontend Task</p>
      <img className='mt-3' src={zuri} alt="" />
     </div>
     </>
  )
}

export default Footer