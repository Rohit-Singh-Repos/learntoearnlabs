import React from 'react'
import { CommonCard, Div, Paragraph, SubHeading, Image } from "components"
import { HOME_PAGE_IMAGES } from 'assets/images'

export const UpskillKnowledge = React.memo(() => {
  return (
    <Div divClass='container mb-5 mt-5'>
      <Div divClass='row'>
        <SubHeading subheadingClass="fw-bold text-primary">Upskill your knowledge</SubHeading>
        <SubHeading subheadingClass="fw-bold">Marketing / Management Courses</SubHeading>
      </Div>
        <Div divClass='row mt-5'>
            <Div divClass="col-lg-4 col-md-6 col-sm-12 mb-2">
                <CommonCard cardClass="card d-flex align-items-center rounded-0">
                <Image width="200" height="200" imagePath={HOME_PAGE_IMAGES.wordpressAndBloggingImage} imageClass="img-fluid" imageAltText=""/>
                    <Paragraph paragraphClass="text-dark fw-bold text-center pt-2 mb-2 text-15">Wordpress & Blogging</Paragraph>
                </CommonCard>
            </Div>
            <Div divClass="col-lg-4 col-md-6 col-sm-12 mb-2">
                <CommonCard cardClass="card d-flex align-items-center rounded-0">
                <Image width="200" height="200" imagePath={HOME_PAGE_IMAGES.googleAdsImage} imageClass="img-fluid" imageAltText=""/>
                    <Paragraph paragraphClass="text-dark fw-bold text-center pt-2 mb-2 text-15">Google Ads</Paragraph>
                </CommonCard>
            </Div>
            <Div divClass="col-lg-4 col-md-6 col-sm-12 mb-2">
                <CommonCard cardClass="card d-flex align-items-center rounded-0">
                <Image width="200" height="200" imagePath={HOME_PAGE_IMAGES.socialMediaMarketingImage} imageClass="img-fluid" imageAltText=""/>
                    <Paragraph paragraphClass="text-dark fw-bold text-center pt-2 mb-2 text-15">Social Media Marketing</Paragraph>
                </CommonCard>
            </Div>    
            <Div divClass="col-lg-4 col-md-6 col-sm-12 mb-2">
                <CommonCard cardClass="card d-flex align-items-center rounded-0">
                <Image width="200" height="200" imagePath={HOME_PAGE_IMAGES.searchEngineOptimization} imageClass="img-fluid" imageAltText=""/>
                    <Paragraph paragraphClass="text-dark fw-bold text-center pt-2 mb-2 text-15">Search Engine Optimization</Paragraph>
                </CommonCard>
            </Div>    
            <Div divClass="col-lg-4 col-md-6 col-sm-12 mb-2">
                <CommonCard cardClass="card d-flex align-items-center rounded-0">
                <Image width="200" height="200" imagePath={HOME_PAGE_IMAGES.contentMarketingImage} imageClass="img-fluid" imageAltText=""/>
                    <Paragraph paragraphClass="text-dark fw-bold text-center pt-2 mb-2 text-15">Content Marketing</Paragraph>
                </CommonCard>
            </Div>    
            <Div divClass="col-lg-4 col-md-6 col-sm-12 mb-2">
                <CommonCard cardClass="card d-flex align-items-center rounded-0">
                <Image width="200" height="200" imagePath={HOME_PAGE_IMAGES.affiliateMarketingImage} imageClass="img-fluid" imageAltText=""/>
                    <Paragraph paragraphClass="text-dark fw-bold text-center pt-2 mb-2 text-15">Affiliate Marketing</Paragraph>
                </CommonCard>
            </Div>    
        </Div>
    </Div>
  )
})
