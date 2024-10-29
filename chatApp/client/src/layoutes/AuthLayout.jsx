import headerLogo from '../assets/header-logo.png'
export default function AuthLayout({children}) {
    return (
        <>
            <div className='flex bg-white h-[80px]  shadow-md'>
                <img src={headerLogo} alt="headerLogo"  className='bg-red-500'/>
            </div>
            {children}
        </>
  )
}
