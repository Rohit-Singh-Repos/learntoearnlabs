import React from "react";
import { Div, SliderComponent, SubHeading } from "components";
import { HOME_PAGE_IMAGES } from "assets/images";

export const StudentReviews = React.memo(() => {
  const sliderData = [
    {id:1,imagePath:HOME_PAGE_IMAGES.aditiImage,altText:"",imageDescription:"I learned Java from Learn2Earn labs and my trainer was good and friendly person and I had very good learning experience.",imageName:"Aditi Khandelwal"},
    {id:2,imagePath:HOME_PAGE_IMAGES.amishaImahe,altText:"",imageDescription:"I have done BA in history & I joined digital marketing training from Learn2Earn Labs. Earlier, I was so confused about everything but Learn2Earn Labs gave me a path to discover myself & my talent. During my training, I have gone through many new things. Trainers are so extra supportive & the atmosphere is amazing.",imageName:"Amisha Singh"},
    {id:3,imagePath:HOME_PAGE_IMAGES.faisalImage,altText:"",imageDescription:"What I experienced here is that they give you full practical knowledge with live examples, knowledge about modern technologies. With experienced teacher this institute is most amazing institute you can learn from.",imageName:"Faisal Iqbal"},
    {id:4,imagePath:HOME_PAGE_IMAGES.latikaImage,altText:"",imageDescription:"I gained lots of practical knowledge, it was an amazing experience for me after joining this institution and I got lots of career advice.",imageName:"Latika Sharma"},
    {id:5,imagePath:HOME_PAGE_IMAGES.mansiImage,altText:"",imageDescription:"Here I'm glad to say that Learn2Earn Labs have manifold option for the student career. I have a great Experience over here and got lot to know.",imageName:"Mansi Tomar"},
    {id:6,imagePath:HOME_PAGE_IMAGES.mohitImage,altText:"",imageDescription:"I joined Learn2Earn labs to learn digital marketing. I learnt many new concepts and many more amazing things like how we can use normal applications in creative ways. I leant how to work in a professional way. The environment is very good and teachers are very supportive and concerned about the student’s performance.",imageName:"Mohit Gulati"},
    {id:7,imagePath:HOME_PAGE_IMAGES.mukulImage,altText:"",imageDescription:"I have undergone on courses of web technology and java in learn2earn labs under 9 pages. I have experienced a good learning here and the courses are designed according to market demand.",imageName:"Mukul Gupta"},
    {id:8,imagePath:HOME_PAGE_IMAGES.prachiImage,altText:"",imageDescription:"I have done MBA from Lucknow University and I am learning an Advance Digital Marketing course from Learn2Earn Labs. During my training, I came to know about many new things in the digital world which will be very helpful for my career and very interesting. The environment makes me feel so easy to understand my queries.",imageName:"Prachi Singhal"},
    {id:9,imagePath:HOME_PAGE_IMAGES.rajatImage,altText:"",imageDescription:"Best institution to be master in Coding & Technical. Latest & Advanced classes with updated technology. Whatever I'm in Coding or I will be because of this lab .",imageName:"Rajat Sharma"},
    {id:10,imagePath:HOME_PAGE_IMAGES.ridhimaImage,altText:"",imageDescription:"Best institute I have ever attended. The faculty is very good and the material provided by them was very useful. I have joined an online course in digital marketing. They helped me to start my online earning.",imageName:"Riddhima Barsaiya"},
    {id:11,imagePath:HOME_PAGE_IMAGES.rohitImage,altText:"",imageDescription:"I learned so many new things like how to make a website on word press, how we can audit SEO with the help of a screaming frog, social media marketing and so many new things. My overall experience was excellent with learn2earn labs because the way of teaching is fabulous and they always clear doubts on the very same day.",imageName:"Rohit Sikarwar"},
    {id:12,imagePath:HOME_PAGE_IMAGES.shanuImage,altText:"",imageDescription:"Excellent platform for beginners or anyone looking for the perfect opportunity to join great companies. Amazing experience in soft skills and soothing environment.",imageName:"Shanu Pareek"},
    {id:13,imagePath:HOME_PAGE_IMAGES.shivangiImage,altText:"",imageDescription:"I was working as an HR & Marketing Professional. After some time I wanted to switch my career to core marketing segments then I joined the Digital Marketing course from learn2earn labs to enhance my skills. I learned a lot about Digital Marketing, Social Media Marketing, SEO, content design, SEO Auditing and many more.",imageName:"Shivangi Gupta"},
    {id:14,imagePath:HOME_PAGE_IMAGES.tanyaImage,altText:"",imageDescription:"Learn2earn Labs is a place where one can learn new things. The way of teaching is very good and the teachers are very helpful in every way. They provide guidance even after your course is over and guide you well to prepare for interviews.",imageName:"Tanya Jain"},
  ]
  return (
    <Div divClass="container mt-5">
      <Div divClass="row">
        <SubHeading subheadingClass="fw-bold text-center">
          Student Reviews
        </SubHeading>
      </Div>
      <Div divClass="row mt-5">
      <Div divClass="col-lg-12 col-md-12 col-sm-12 mt-5 ">
          <SliderComponent 
            sliderData={sliderData}
            contentClass="card h-100"
            imgClass="img-fluid"
            imgHeight={250}
            imgWidth={300}
          />
        </Div>
      </Div>
    </Div>
  );
});
