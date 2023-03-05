import Details from "../components/About/Details"
const About = ({ theme }) => {
    return (
        <div className="mb-10">
            <Details theme={theme} />
            <div className="circle -z-[99999]"></div>
            <div className="circle -z-[99999] c2"></div>
            <div className="circle -z-[99999] c3"></div>
            {/* <Notice /> */}

        </div>
    )
}

export default About