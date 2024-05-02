import React, { useState } from 'react';

const Footer = () => {
    const faqs = [
        { question: 'how can i make Donation?', answer: 'You can Simply go to Donation page where you can donate Nomously or Anonymously' },
        { question: 'How do I install React?', answer: 'You can install React using npm or yarn.' },
        { question: 'What are the key features of React?', answer: 'Key features of React include virtual DOM, JSX, and component-based architecture.' },
        { question: 'Can I use React with other libraries?', answer: 'Yes, React can be used with other libraries and frameworks such as Redux, React Router, and more.' },
        { question: 'Is React a framework or a library?', answer: 'React is a library, not a framework.' }
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq ">
           
            <div className='pt-8' >
                <h1 className='font-bold pb-4 text-[26px] md:text-[35px]'>Frequently Asked Questions ?</h1>
            </div>
            {faqs.map((faq, index) => (
                <div key={index} className="faq-item" onClick={() => toggleAnswer(index)}>
                    <div className="question font-semibold p-2 cursor-pointer text-gray-500 text-[13px] md:text-[20px]">{faq.question}</div>
                    {activeIndex === index && (
                        <div className="answer pb-2 cursor-pointer text-black font-semibold text-[10px] md:text-[18px] ">
                            {faq.answer}
                            <hr className='border border-gray-400 border-spacing-1 ' />
                        </div>
                    )}
                </div>
            ))}

            <div className='mt-6 max-w-screen bg-[#90CAF9] font-itim md:px-8'>
                <div className='flex flex-col md:flex-row md:justify-between  '>
                    <div className='md:items-center justify-center flex'><img src="./images/logo.png" alt="logo" className='w-36 md:w-32 p-1 mt-2 md:p-2 md:py-8' /></div>
                    
                    <div className='py-4'>
                        <h1 className='font-bold py-2'>Donate</h1>
                        <div className='flex flex-col md:flex-row gap-0 md:gap-2 text-white '>
                            <h3>Home</h3>
                            <h3>Transactions</h3>
                        </div>
                        <div className='flex flex-col md:flex-row  gap-0 md:gap-2 text-white'>
                            <h3>worls</h3>
                            <h3>Angels</h3>
                        </div>
                    </div>
                    
                    <div className='py-4'>
                        <h1 className='font-bold py-2'>Help</h1>
                        <div className='flex flex-col md:flex-row gap-0 md:gap-2 text-white'>
                            <h3>FAQ</h3>
                            <h3>Privacy policy</h3>
                        </div>
                        <div className='flex flex-col md:flex-row gap-0 md:gap-2 text-white'>
                            <h3>Acess</h3>
                            <h3>Contact US</h3>
                        </div>
                    </div>
                    
                    <div className='py-4'>
                        <h1 className='font-bold py-2'>Trust</h1>
                        <div className='flex flex-col md:flex-row gap-0 md:gap-2 text-white'>
                            <h3>About US</h3>
                            <h3>Careers</h3>
                        </div>
                        <div className='flex flex-col md:flex-row gap-0 md:gap-2 text-white'>
                            <h3>Services</h3>
                            <h3>Volunteers</h3>
                        </div>
                    </div>
                    <hr className='border border-black border-spacing-1 '/>
                </div>
            </div>
        </div>
    );
};

export default Footer;
