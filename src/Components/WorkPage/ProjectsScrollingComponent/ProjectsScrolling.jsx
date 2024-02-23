import React, { useState } from 'react';
import "./ProjectsScrolling.css"
import { Container, Row } from 'react-bootstrap';

const CreativeDesignProjects = [
    { image: require("../../../assets/WorkPage/purple patels.png"), ProjectName: "Purple Petals", projectInfo: `We've wrapped up the "Purple Petals" logo project, delivering a striking and unique design that perfectly represents the brand's elegance and beauty.`, ProjectType: "Creative Design / Branding / Logo" },
    { image: require("../../../assets/WorkPage/maxxwin_mockup.png"), ProjectName: "Maxwell", projectInfo: "We designed a series of eye-catching ad banners in various sizes. Our designs effectively promote the company's message ensuring a strong and consistent online presence..", ProjectType: "Creative Design / Banner Ads" },
    { image: require("../../../assets/WorkPage/hospital logo.png"), ProjectName: "Sri Chaitanya Hospital Logo", projectInfo: "We designed a series of eye-catching ad banners in various sizes. Our designs effectively promote.", ProjectType: "Creative Design / Branding / Logo" },
    { image: require("../../../assets/WorkPage/Business Cards.png"), ProjectName: "Business Card", projectInfo: "We designed a series of eye-catching ad banners in various sizes. Our designs effectively promote.", ProjectType: "Creative Design / Branding / Business Card" }
]
const DevelopmentProjects = [
    { image: require("../../../assets/WorkPage/inno wise.png"), ProjectName: "InnoWise LLC", projectInfo: `We've wrapped up the "Purple Petals" logo project, delivering a striking and unique design that perfectly represents the brand's elegance and beauty.`, ProjectType: "Web Development / Dashboard" },
    { image: require("../../../assets/WorkPage/Business Cards.png"), ProjectName: "Business Card", projectInfo: "We designed a series of eye-catching ad banners in various sizes. Our designs effectively promote.", ProjectType: "Creative Design / Branding / Business Card" },
    { image: require("../../../assets/WorkPage/maxxwin_mockup.png"), ProjectName: "Maxwell", projectInfo: "We designed a series of eye-catching ad banners in various sizes. Our designs effectively promote the company's message ensuring a strong and consistent online presence..", ProjectType: "Creative Design / Banner Ads" },
    { image: require("../../../assets/WorkPage/maxxwin_mockup.png"), ProjectName: "Maxwell", projectInfo: "We designed a series of eye-catching ad banners in various sizes. Our designs effectively promote the company's message ensuring a strong and consistent online presence..", ProjectType: "Creative Design / Banner Ads" },
]
const AnalysisProjects = [
    { image: require("../../../assets/WorkPage/hospital logo.png"), ProjectName: "Sri Chaitanya Hospital Logo", projectInfo: "We designed a series of eye-catching ad banners in various sizes. Our designs effectively promote.", ProjectType: "Creative Design / Branding / Logo" },
    { image: require("../../../assets/WorkPage/Business Cards.png"), ProjectName: "Business Card", projectInfo: "We designed a series of eye-catching ad banners in various sizes. Our designs effectively promote.", ProjectType: "Creative Design / Branding / Business Card" },
    { image: require("../../../assets/WorkPage/maxxwin_mockup.png"), ProjectName: "Maxwell", projectInfo: "We designed a series of eye-catching ad banners in various sizes. Our designs effectively promote the company's message ensuring a strong and consistent online presence..", ProjectType: "Creative Design / Banner Ads" },
    { image: require("../../../assets/WorkPage/Business Cards.png"), ProjectName: "Business Card", projectInfo: "We designed a series of eye-catching ad banners in various sizes. Our designs effectively promote.", ProjectType: "Creative Design / Branding / Business Card" },
]
const MarketingProjects = [
    { image: require("../../../assets/WorkPage/Dashboard.png"), ProjectName: `Marketing Analysis Dashboard`, projectInfo: `We've wrapped up the "Purple Petals" logo project, delivering a striking and unique design that perfectly represents the brand's elegance and beauty.`, ProjectType: "Marketing Analysis / Custom Dashboard" },
    { image: require("../../../assets/WorkPage/inno wise.png"), ProjectName: "InnoWise LLC", projectInfo: `We've wrapped up the "Purple Petals" logo project, delivering a striking and unique design that perfectly represents the brand's elegance and beauty.`, ProjectType: "Web Development / Dashboard" },
    { image: require("../../../assets/WorkPage/Business Cards.png"), ProjectName: "Business Card", projectInfo: "We designed a series of eye-catching ad banners in various sizes. Our designs effectively promote.", ProjectType: "Creative Design / Branding / Business Card" },
    { image: require("../../../assets/WorkPage/maxxwin_mockup.png"), ProjectName: "Maxwell", projectInfo: "We designed a series of eye-catching ad banners in various sizes. Our designs effectively promote the company's message ensuring a strong and consistent online presence..", ProjectType: "Creative Design / Banner Ads" },

]
const UI_UxProjects = [
    { image: require("../../../assets/WorkPage/hospital logo.png"), ProjectName: "Sri Chaitanya Hospital Logo", projectInfo: "We designed a series of eye-catching ad banners in various sizes. Our designs effectively promote.", ProjectType: "Creative Design / Branding / Logo" },
    { image: require("../../../assets/WorkPage/Business Cards.png"), ProjectName: "Business Card", projectInfo: "We designed a series of eye-catching ad banners in various sizes. Our designs effectively promote.", ProjectType: "Creative Design / Branding / Business Card" },
    { image: require("../../../assets/WorkPage/maxxwin_mockup.png"), ProjectName: "Maxwell", projectInfo: "We designed a series of eye-catching ad banners in various sizes. Our designs effectively promote the company's message ensuring a strong and consistent online presence..", ProjectType: "Creative Design / Banner Ads" },
    { image: require("../../../assets/WorkPage/maxxwin_mockup.png"), ProjectName: "Maxwell", projectInfo: "We designed a series of eye-catching ad banners in various sizes. Our designs effectively promote the company's message ensuring a strong and consistent online presence..", ProjectType: "Creative Design / Banner Ads" },
]
const AllProjects = [...CreativeDesignProjects, ...DevelopmentProjects, ...AnalysisProjects, ...MarketingProjects, ...UI_UxProjects];
function ProjectsScrolling(props) {

    const [ProjectTeamClicks, setProjectTeamClisks] = useState([1, 0, 0, 0, 0]);
    const [Projects, setProjects] = useState(AllProjects);


    const handlClicks = (index) => {
        var temp = [0, 0, 0, 0, 0];
        temp[index] = 1;
        setProjectTeamClisks([...temp]);
        switch (index) {
            case 0: setProjects(AllProjects); console.log(Projects); break;
            case 1: setProjects(CreativeDesignProjects); console.log(Projects); break;
            case 2: setProjects(DevelopmentProjects); console.log(Projects); break;
            case 3: setProjects(AnalysisProjects); console.log(Projects); break;
            case 4: setProjects(MarketingProjects); console.log(Projects); break;
            case 5: setProjects(UI_UxProjects); console.log(Projects); break;
            default: ;
        }

    }
    return (
        <Container fluid className='ProjectsScrolling-container'>
            <div className='ProjectsScrolling-container-row'>
                <div className='ProjectsScrolling-container-row-col' onClick={() => { handlClicks(0) }}>
                    <div className={"ProjectsScrolling-teamName " + (ProjectTeamClicks[0] && ' ProjectsScrolling-teamName-active')} >All Projects</div>
                </div>
                <div className='ProjectsScrolling-container-row-col' onClick={() => { handlClicks(1) }}>
                    <div className={'ProjectsScrolling-teamName ' + (ProjectTeamClicks[1] && 'ProjectsScrolling-teamName-active')} >Creative Design</div>
                </div>
                <div className='ProjectsScrolling-container-row-col' onClick={() => { handlClicks(2) }}>
                    <div className={'ProjectsScrolling-teamName ' + (ProjectTeamClicks[2] && 'ProjectsScrolling-teamName-active')}>Development</div>
                </div>
                <div className='ProjectsScrolling-container-row-col' onClick={() => { handlClicks(3) }}>
                    <div className={'ProjectsScrolling-teamName ' + (ProjectTeamClicks[3] && 'ProjectsScrolling-teamName-active')} >Analysis</div>
                </div>
                <div className='ProjectsScrolling-container-row-col ' onClick={() => { handlClicks(4) }}>
                    <div className={'ProjectsScrolling-teamName ' + (ProjectTeamClicks[4] && 'ProjectsScrolling-teamName-active')}>Marketing</div>
                </div>
                <div className='ProjectsScrolling-container-row-col' onClick={() => { handlClicks(5) }}>
                    <div className={'ProjectsScrolling-teamName ' + (ProjectTeamClicks[5] && 'ProjectsScrolling-teamName-active')} >UI/UX</div>
                </div>
            </div>
            <Row>
                {
                    Projects.map((project, index) => {
                        if (project) {
                            return (
                                <div className='ProjectsScrolling-card-container' key={"projects" + index}>
                                    <div className='ProjectsScrolling-card-image'>
                                        <img src={project.image} alt="project " className='ProjectsScrolling-images' />
                                    </div>
                                    <div >
                                        <h5 className='ProjectsScrolling-card-ProjectName'>{project.ProjectName}</h5>
                                    </div>
                                    <div >
                                        <p className='ProjectsScrolling-card-ProjectInfo'>{project.projectInfo}</p>
                                    </div>
                                    <div >
                                        <p className='ProjectsScrolling-card-ProjectType'>{project.ProjectType}</p>
                                    </div>
                                </div>
                            )
                        }
                        else {
                            return (<></>)
                        }
                    })
                }

            </Row>
        </Container>
    );
}

export default ProjectsScrolling;