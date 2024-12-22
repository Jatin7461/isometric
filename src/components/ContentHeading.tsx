
type Props = {
    contentText: string,
    contentHeading: string,
    headingName: string,
    containerClass: string,
    number: string,
    color: string,
    showButtons: string
}

const ContentHeading = ({ contentText, contentHeading, headingName, containerClass, number, color, showButtons }: Props) => {
    return <div className={`bglogo ${containerClass}`}>

        <h1 className="heading">
            <span className="block1" style={{ borderColor: color }}></span>
            <span className="block2" style={{ borderColor: color }}></span>
            <span className="block3" style={{ backgroundColor: color }}></span>
            <span className="headingName" style={{ color: color }}>{headingName}</span>
        </h1>

        <p className="number" style={{ color: color }}>{number}</p>
        <div className="lineSeparator" style={{ borderColor: color }}></div>
        <div className="content">
            <h2 className="contentHeading">{contentHeading}</h2>
            <p className="contentText">{contentText}</p>

            <p></p>
        </div>
        <div className={`display-none ${showButtons}`}>

            <div className="socialLinks">
                <a href="https://www.linkedin.com/in/jatin-gandhi-3a5141241/" target="_blank">
                    <div className="btn linkedin">
                        Linkedin
                    </div>
                </a>
                <a href="https://www.instagram.com/jatin.005" target="_blank">
                    <div className="btn insta">
                        Instagram
                    </div>
                </a>
                <a href="https://www.x.com" target="_blank">
                    <div className="btn x">

                        Twitter
                    </div>
                </a>

            </div>
        </div>
    </div>
}

export default ContentHeading


