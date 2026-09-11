import Logo from '../assets/logo-text.png'
const Nav = () => {
    return (
        <>
        <nav className='bg-[#F1F5F9] sticky top-0 z-50'>  
        <div className='container mx-auto '>
            <div className='flex justify-between py-2 items-center'>
                <img src={Logo} alt="nav-logo" />
                <ul className='flex gap-5'>
                    <li className='hover:text-[#D91B7E]'><a href="#">Home</a></li>
                    <li className='hover:text-[#D91B7E]'><a href="#">Technologies</a></li>
                    <li className='hover:text-[#D91B7E]'><a href="#">Project</a></li>
                    <li className='hover:text-[#D91B7E]'><a href="#">About</a></li>
                    <li className='hover:text-[#D91B7E]'><a href="#">Contact</a></li>
                </ul>
                <div>
                 <button className='px-2 py-1'>Sign In</button>
                <button className='bg-[#D91B7E] px-3 py-1 rounded-2xl text-white'>Sign Up</button>
                </div>
                
            </div>
            
        </div>
        </nav>
        </>
    );
};

export default Nav;