import React from 'react'
import Image from 'next/image';

const Header = () => {
  return (
    <header >
      <div className='container-header header_label'>
        <Image className='header_icon' src="/image/hizurun.png" alt='ロゴ' width={130} height={130}/>
        <h1 className='header_title'>Zoo management</h1>
        <form className='item_center' action="#">
          <input className='search' type="text" value='検索' />
        </form>
      </div>
    </header>
  );
};

export default Header;
