import React from 'react';
// import Slider from "react-slick";


const CustomerReview = () => {
  return (
    <div className="hero" style={{ backgroundImage: "url(https://img.freepik.com/free-photo/abstract-luxury-plain-blur-grey-black-gradient-used-as-background-studio-wall-display-your-p_1258-103995.jpg)", height: '420px', width: '100%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <div class="carousel w-full">
        <div id="item1" class="carousel-item w-full flex flex-col justify-center ">
          <div className="p-10 rounden dark:text-slate-200 text-black">
            <div className='h-40 w-40 m-auto'>
              <img src="https://esmarts.qodeinteractive.com/wp-content/uploads/2017/10/h1-t6.png?" />
            </div>
            <div>
              <h1 className="text-center text-xl font-bold">Anniy Page </h1>
              <h2 className='text-center'>Student</h2>
              <p className="text-sm  my-4 text-center">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore edolore magna aliquyam erat, sed diam voluptua.
              </p>
            </div>
          </div>
        </div>
        <div id="item2" class="carousel-item w-full flex flex-col justify-center ">
          <div className="p-10 rounden dark:text-slate-200 text-black">
            <div className='h-40 w-40 m-auto'>
              <img src="https://esmarts.qodeinteractive.com/wp-content/uploads/2017/10/h1-t5-150x150.png?" />
            </div>
            <div>
              <h1 className="text-center text-xl font-bold">John Evan</h1>
              <h2 className='text-center'>Student</h2>
              <p className="text-sm  my-4 text-center">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore edolore magna aliquyam erat, sed diam voluptua.
              </p>
            </div>
          </div>
        </div>
        <div id="item3" class="carousel-item w-full flex flex-col justify-center ">
          <div className="p-10 rounden dark:text-slate-200 text-black">
            <div className='h-40 w-40 m-auto'>
              <img src="https://esmarts.qodeinteractive.com/wp-content/uploads/2017/10/h1-t4-150x150.png?" />
            </div>
            <div>
              <h1 className="text-center text-xl font-bold">Barbara Mori</h1>
              <h2 className='text-center'>Student</h2>
              <p className="text-sm  my-4 text-center">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore edolore magna aliquyam erat, sed diam voluptua.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center w-full py-2 gap-2 mt-96">
        <a href="#item1" class="btn btn-circle bg-white h-[50]"></a>
        <a href="#item2" class="btn btn-circle bg-white"></a>
        <a href="#item3" class="btn btn-circle bg-white"></a>
      </div>
    </div>
  );
};

export default CustomerReview;