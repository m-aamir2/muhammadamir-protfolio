const WhatsAppButton = () => (
  <a
    href='https://wa.me/923008715456'
    target='_blank'
    rel='noopener noreferrer'
    className='fixed bottom-6 right-5 sm:right-6 z-[1001] grid w-16 h-16 place-items-center transition-all duration-300 hover:-translate-y-1 hover:scale-110 focus-visible:-translate-y-1 focus-visible:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]'
    aria-label='Chat on WhatsApp'
    title='Chat on WhatsApp'
  >
    <img
      src='https://shahnawazz-portfolio.vercel.app/whatsapp.png'
      alt=''
      className='w-14 h-14 object-contain'
    />
    <span className='sr-only'>Chat on WhatsApp</span>
  </a>
);

export default WhatsAppButton;
