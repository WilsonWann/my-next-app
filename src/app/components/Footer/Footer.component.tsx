import React from 'react'
import LinkNavigation from '../LinkNavigation/LinkNavigation.component';
import { scheherazade } from '@/app/fonts';


const Footer = () => {
  return (
    <footer className={`${scheherazade.className} 
      relative bottom-0 h-fit w-full flex flex-col items-center justify-between bg-transparent pt-8 opacity-65 
    md:divide-y-0 divide-y-2
    md:gap-y-8
    `}>
      <div className="flex 
      flex-row *:flex *:items-start *:justify-center *:px-6 
      md:flex-nowrap flex-wrap 
      md:gap-y-0 gap-y-2
      md:pb-0 pb-2
      *:before:content-[attr(data-attr)'：'] *:before:text-nowrap " >
        <div data-attr="電話">0422010520</div>
        <div data-attr="信箱">service@musense.tw</div>
        <div data-attr="地址">403518臺中市西區英才路530號23樓之5</div>
      </div>
      <div className="
        flex 
        md:flex-row flex-col
        md:divide-x divide-x-0
        divide-primary
        md:gap-y-0 gap-y-2
        md:p-0 py-2
        justify-center
        md:items-center items-baseline
         w-full
        *:flex 
        *:items-center 
        *:justify-center 
        *:px-6 
        ">
        <LinkNavigation
          listClassName={`md:h-7`}
          linkClassName={`md:h-full md:translate-y-[2px]`}
        />
      </div>
      <div className="flex h-8 w-full flex-row items-center justify-center bg-primary-foreground *:text-xs *:text-black font-bold">
        <span>Copyright © 陌聲行銷有限公司</span>
      </div>
    </footer>
  );
};

export default Footer