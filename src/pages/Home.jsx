import slack from '../assets/slack.png'
import Icon from '../assets/Icon.png'
import menu from '../assets/menu.png'
import Share from '../assets/Share.png'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <img className='hidden lg:block absolute w-[40px] h-[40px] right-80 top-[52px]' src={Share} alt="" />
    <img className='lg:hidden absolute w-[40px] h-[40px] right-[16px] top-[20px]' src={menu} alt="" />
     <div className="flex flex-col justify-center items-center"> 
     <div className = "h-[88px] w-[88px] rounded-full mt-[64px]">
                <img id = 'profile__img' className= "w-full h-full rounded-full" src="https://pbs.twimg.com/profile_images/1454451132907106313/26zioaOp_400x400.jpg" alt="image-avatar"/>
            </div>
            <p id='twitter' className='mt-[24px] font-bold mb-5'>Kajotoni Kofo</p>
            <p id='slack' className='hidden'>Kofman</p>
     </div>
     <div className="flex flex-col justify-center items-center space-y-[24px]">
       <a href='https://twitter.com/Kofmancrypt' className="text-center bg-[#EAECF0] h-[68px] w-[343px] lg:w-[1152px] p-[24px] rounded-[8px]">Twitter Link</a>
       <a id='btn__zuri' href='https://training.zuri.team/' className="text-center bg-[#EAECF0] h-[68px] w-[343px] lg:w-[1152px] p-[24px] rounded-[8px]">Zuri Team</a>
       <a id='books' href='http://books.zuri.team' className="text-center bg-[#EAECF0] h-[68px] w-[343px] lg:w-[1152px] p-[24px] rounded-[8px]">Zuri Books</a>
       <a id='book__python' href='https://books.zuri.team/python-for-beginners?ref_id=kofman' className="text-center bg-[#EAECF0] h-[68px] w-[343px] lg:w-[1152px] p-[24px] rounded-[8px]">Python Books</a>
       <a id='pitch' href='https://background.zuri.team' className="text-center bg-[#EAECF0] h-[68px] w-[343px] lg:w-[1152px] p-[24px] rounded-[8px]">Background Check for coders</a>
       <a id='book__design' href='https://books.zuri.team/design-rules' className="text-center bg-[#EAECF0] h-[68px] w-[343px] lg:w-[1152px] p-[24px] rounded-[8px]">Design Books</a>
       <a id='contact' href='/contact' className="text-center bg-[#EAECF0] h-[68px] w-[343px] lg:w-[1152px] p-[24px] rounded-[8px]">Contact Me</a>
     </div>
     <div className='flex justify-center space-x-[24px] mt-12 mx-[16px]'> <img src={slack} alt="" /> <img src={Icon} alt="" /></div>
     <Footer />
    </>
  )
}

export default Home