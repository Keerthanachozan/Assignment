import './App.css';
import { WhatsappShareButton,WhatsappIcon, FacebookShareButton, FacebookIcon,TwitterShareButton,TwitterIcon,LinkedinShareButton,LinkedinIcon,EmailShareButton,EmailIcon } from 'react-share';

function App() {
  const whatsappUrl = "whatsapp.com"
  const facebookUrl = "facebook.com"
  const twitterUrl = "twitter.com"
  const linkedinUrl = "linkedin.com"
  const emailUrl = "email.com"

  return (
    <div className='share-this-page'>

      <WhatsappShareButton 
      url={whatsappUrl}>
        <WhatsappIcon/>
      </WhatsappShareButton>
      <br></br>

      <FacebookShareButton
      url= {facebookUrl}>
        <FacebookIcon/>
      </FacebookShareButton>
      <br></br>

      <TwitterShareButton
      url= {twitterUrl}>
        <TwitterIcon/>
      </TwitterShareButton>
      <br></br>

      <LinkedinShareButton
      url= {linkedinUrl}>
        <LinkedinIcon/>
      </LinkedinShareButton>
      <br></br>

      <EmailShareButton
      url= {emailUrl}>
        <EmailIcon/>
      </EmailShareButton>

    </div>
  );
}

export default App;
