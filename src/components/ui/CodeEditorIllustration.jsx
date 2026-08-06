const CodeEditorIllustration = () => (
  <div className='ide-hero w-full h-full bg-[#0b0e13] font-mono text-[11px] sm:text-[13px] leading-6 sm:leading-7 text-white overflow-hidden'>
    <div className='flex items-center gap-3 sm:gap-5 border-b border-white/10 px-4 sm:px-5 py-3 sm:py-4'>
      <div className='flex gap-1.5'>
        <span className='size-2 sm:size-2.5 rounded-full bg-[#ff5f57]' />
        <span className='size-2 sm:size-2.5 rounded-full bg-[#febc2e]' />
        <span className='size-2 sm:size-2.5 rounded-full bg-[#28c840]' />
      </div>
      <div className='flex gap-3 sm:gap-4 text-[10px] sm:text-xs'>
        <span className='border-b-2 border-primary pb-1 text-white/90'>developer.tsx</span>
        <span className='text-white/35'>about.ts</span>
        <span className='text-white/35'>stack.json</span>
      </div>
    </div>
    <div className='flex gap-3 sm:gap-4 px-4 sm:px-5 py-5 sm:py-6'>
      <div className='select-none text-white/20 text-right'>
        {Array.from({ length: 15 }, (_, index) => <div key={index}>{index + 1}</div>)}
      </div>
      <div className='text-white/85 whitespace-nowrap'>
        <div><span className='text-primary'>const</span> developer = {'{'}</div>
        <div className='pl-3 sm:pl-4'>name: <span className='text-white/55'>"Muhammad Aamir"</span>,</div>
        <div className='pl-3 sm:pl-4'>role: <span className='text-white/55'>"Frontend Developer"</span>,</div>
        <div className='pl-3 sm:pl-4'>stack: [<span className='text-white/55'>"React"</span>, <span className='text-white/55'>"Next.js"</span>],</div>
        <div className='pl-3 sm:pl-4'>experience: <span className='text-white/55'>"1 year"</span>,</div>
        <div className='pl-3 sm:pl-4'>available: <span className='text-primary'>true</span>,</div>
        <div>{'}'};</div>
        <div>&nbsp;</div>
        <div><span className='text-primary'>export default function</span> buildSomethingGreat() {'{'}</div>
        <div className='pl-3 sm:pl-4'><span className='text-primary'>return</span> &lt;<span className='text-primary'>Excellence</span> /&gt;;</div>
        <div>{'}'}</div>
        <span className='inline-block h-4 w-[7px] translate-y-0.5 animate-pulse bg-primary' />
      </div>
    </div>
  </div>
);

export default CodeEditorIllustration;
