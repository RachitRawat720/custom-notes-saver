import React from 'react'
import "tailwindcss"
import{
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
} from 'react-share';

const Share = () => {
    const shareUrl = window.location.href;
    const title = 'check out my awesome React website';

    return (
        <div className='flex gap-2'>
            <FacebookShareButton url={shareUrl} hashtag='#React'>
                <FacebookIcon size={40} round />
            </FacebookShareButton>

            <TwitterShareButton url={shareUrl} hashtag='#React'>
                <TwitterIcon size={40} round />
            </TwitterShareButton>
        
            <WhatsappShareButton url={shareUrl} hashtag='#React'>
                <WhatsappIcon size={40} round />
            </WhatsappShareButton>
        </div>
    )
}

export default Share;