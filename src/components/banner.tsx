
import BannerImg from '../assets/banner-stack.png'
const Banner = () => {
    return (
        <div className='container mx-auto'>
            <section className='flex justify-between'>
                <div className='mt-28'>
                    <h1 className='text-5xl font-bold'>Build Your Ideal<br></br>
                     <span className='bg-linear-to-r from-[#F97316] to-[#EC4899] bg-clip-text text-transparent'>Development Stack</span></h1>
                        <p className='mt-6 text-gray-400'>Explore frontend, backend, database, and tooling options,<br></br>
                        compare them side by side, and put together the stack that fits your<br></br>
                        next project.</p>
                        <div className='mt-10'>
                    <button className='px-7 py-2 rounded-lg bg-linear-to-r from-[#F97316] to-[#EC4899]'>Explore Technologies</button>
                    <button className='px-7 py-2 ml-3 bg-[#E5E7EB] rounded-md'>Learn More</button>
                        </div>
                </div>
                <div>
                    <img src={BannerImg} alt="bannerimg" />
                </div>
            </section>
            
        </div>
    );
};

export default Banner;