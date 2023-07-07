import React from 'react';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const ShareButton = ({ imageUrl, deployedUrl }) => {
  const shareUrl = window.location.href;

  return (
    <div>
      <h3>Share this image via--</h3>
      <FacebookShareButton url={deployedUrl}>
          <FacebookIcon/>
      </FacebookShareButton>
      <TwitterShareButton url={deployedUrl}>
        <TwitterIcon/>
      </TwitterShareButton>
      <WhatsappShareButton url={deployedUrl} separator=": ">
        <WhatsAppIcon/>
      </WhatsappShareButton>
      {/* <img src={imageUrl} alt="Share Preview" /> */}
    </div>
  );
};

export default ShareButton;
