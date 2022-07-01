import {SocialMediaIconsReact} from 'social-media-icons-react';

const Footer = () => {
    return(
        <div>   
            <SocialMediaIconsReact className="social-icon" borderColor="rgba(0,0,0,0.25)" borderWidth="3" borderStyle="solid" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(117,123,127,0.89)" iconSize="5" roundness="50%" url="https://some-website.com/my-social-media-url" size="35" />
            <SocialMediaIconsReact className="social-icon" borderColor="rgba(0,0,0,0.25)" borderWidth="3" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(117,123,127,0.89)" iconSize="5" roundness="50%" url="https://www.linkedin.com/in/avasteimle/" size="35" />
            <SocialMediaIconsReact className="social-icon" borderColor="rgba(0,0,0,0.25)" borderWidth="3" borderStyle="solid" icon="mail" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(117,123,127,0.89)" iconSize="5" roundness="50%"url="mailto: avamsteimle@gmail.com?subject=Meal prep inquiry" size="35" />
            <p>Please email for new inquiries (:</p><br />
        </div>
    );
}
export default Footer;