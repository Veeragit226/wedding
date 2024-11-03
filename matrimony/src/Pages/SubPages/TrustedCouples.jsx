import React from 'react'
// import ReactCardSlider from 'react-card-slider-component'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Button
  } from "@material-tailwind/react";

  import servector1 from '../../assets/images/ourservices/vector1.png'
  import servector2 from '../../assets/images/ourservices/vector5.png'
  import servector3 from '../../assets/images/ourservices/vector4.png'
  import servector4 from '../../assets/images/ourservices/vector1.png'
  import servector5 from '../../assets/images/ourservices/vector5.png'
  import servector6 from '../../assets/images/ourservices/vector4.png'
  import servector7 from '../../assets/images/ourservices/vector1.png'
  import servector8 from '../../assets/images/ourservices/vector5.png'

function TrustedCouples() {


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 800, min: 557 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 557, min: 0 },
          items: 1
        }
      };

  return (
    <div className=' bg-[#fcfcfc]'>
        <div className=" mx-auto  justify-center items-center  text-center  justify-between py-20 ">
          <h1 className='text-[#c48c46] text-balance text-xl font-semibold tracking-wide pb-5  sm:text-2xl'>Trusted Brand</h1>
          <h1 className='text-[#66451c] text-balance text-4xl font-semibold tracking-wide pb-5  sm:text-5xl'>Recent Couple</h1>

         



          
        
          <Carousel className='py-5 ' swipeable={false}
            draggable={false}
            // showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType
            dotListClass="custom-dot-list-style"

            itemClass="carousel-item-padding-40-px">





            <Card
              shadow={false}
              className="relative grid h-[65vh] w-full max-w-[30rem]  items-center justify-center  overflow-hidden text-center"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full  rounded-none    our-ser-bg"

              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full " />
              </CardHeader>
              <CardBody className="relative py-14 px-8 md:px-12">
               
               


              </CardBody>
            </Card>


            <Card
              shadow={false}
              className="relative grid h-[65vh] w-full max-w-[30rem] items-center justify-center  overflow-hidden text-center"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full  rounded-none  our-ser-bg0"

              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full " />
              </CardHeader>
              <CardBody className="relative py-14 px-8 md:px-12">
                


              </CardBody>
            </Card>



            <Card
              shadow={false}
              className="relative grid h-[65vh] w-full max-w-[30rem]  items-center justify-center  overflow-hidden text-center"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none our-ser-bg1"

              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full " />
              </CardHeader>
              <CardBody className="relative py-14 px-8 md:px-12">
               


              </CardBody>
            </Card>



            <Card
              shadow={false}
              className="relative grid h-[65vh] w-full max-w-[30rem]  items-center justify-center  overflow-hidden text-center"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none our-ser-bg2"

              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full " />
              </CardHeader>
              <CardBody className="relative py-14 px-8 md:px-12">
               


              </CardBody>
            </Card>


            <Card
              shadow={false}
              className="relative grid h-[65vh] w-full max-w-[30rem]  items-center justify-center  overflow-hidden text-center"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none our-ser-bg3"

              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full " />
              </CardHeader>
              <CardBody className="relative py-14 px-8 md:px-12">
                

              </CardBody>
            </Card>


            <Card
              shadow={false}
              className="relative grid h-[65vh] w-full max-w-[30rem]  items-center justify-center  overflow-hidden text-center"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none our-ser-bg4"

              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full " />
              </CardHeader>
              <CardBody className="relative py-14 px-8 md:px-12">
               


              </CardBody>
            </Card>


            <Card
              shadow={false}
              className="relative grid h-[65vh] w-full max-w-[30rem]  items-center justify-center  overflow-hidden text-center"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none our-ser-bg5"

              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full " />
              </CardHeader>
              <CardBody className="relative py-14 px-8 md:px-12">
              


              </CardBody>
            </Card>


            <Card
              shadow={false}
              className="relative grid h-[65vh] w-full max-w-[30rem]  items-center justify-center  overflow-hidden text-center"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none our-ser-bg6"

              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full " />
              </CardHeader>
              <CardBody className="relative py-14 px-8 md:px-12">
               


              </CardBody>
            </Card>


            <Card
              shadow={false}
              className="relative grid h-[65vh] w-full max-w-[30rem]  items-center justify-center  overflow-hidden text-center"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none our-ser-bg7"

              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full " />
              </CardHeader>
              <CardBody className="relative py-14 px-8 md:px-12">
              


              </CardBody>
            </Card>













          </Carousel>
        





  
          

          
        </div>

      </div>
  )
}

export default TrustedCouples