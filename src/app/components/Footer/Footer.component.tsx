import React from 'react'
import LinkNavigation from '../LinkNavigation/LinkNavigation.component';


const Footer = () => {
  return (
    <footer className="bottom-0 flex h-fit w-full flex-col items-center justify-between bg-white pt-8 opacity-65 
    md:divide-y-0 divide-y-2
    ">
      <div className="flex 
      flex-row *:flex *:items-center *:justify-center *:px-6 
      md:flex-nowrap flex-wrap 
      md:gap-y-0 gap-y-2
      md:pb-0 pb-2
      *:before:content-[attr(data-attr)'：'] *:before:text-nowrap *:text-nowrap" >
        <div data-attr="電話">0422010520</div>
        <div data-attr="信箱">service@musense.tw</div>
        <div data-attr="地址">403518臺中市西區英才路530號23樓之5</div>
      </div>
      <div className="
        flex 
        md:flex-row flex-col
        md:divide-x-2 divide-x-0
        md:gap-y-0 gap-y-2
        py-2
        justify-center
        md:items-center items-baseline
         w-full
        *:flex 
        *:items-center 
        *:justify-center 
        *:px-6 
        ">
        <LinkNavigation />
      </div>
      <div className="flex h-8 w-full flex-row items-center justify-center bg-orange-500 *:text-xs *:text-white">
        <span>Copyright © 陌聲行銷有限公司</span>
      </div>
    </footer>
  );
};

export default Footer