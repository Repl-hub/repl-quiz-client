import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import { Button, Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import * as fiIcon from 'react-icons/fi'
import { FacebookShareButton, WhatsappShareButton, LinkedinShareButton, TelegramShareButton, TwitterShareButton, FacebookIcon, WhatsappIcon, LinkedinIcon, TelegramIcon, TwitterIcon } from 'react-share'
import { Alert } from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <fiIcon.FiX />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function ShareLink({ open, handleClose, dailogTitle }) {
  const [shareUrl, setShareUrl] = useState('')
  const [copied, setCopied] = useState(false);
  const { id, title } = dailogTitle

  useEffect(() => {
    const vLink = encodeURI(`${window.location.origin}/${id}/${title}`)
    setShareUrl(vLink)
  }, [id, title])

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        {title}
      </BootstrapDialogTitle>

      <DialogContent dividers>
        <FacebookShareButton
          url={shareUrl}
          quote={title}
          hashtag={'#repldevs'}
          className="mx-2"
        >
          <FacebookIcon size={40} round={true} />
          <p>Facebook</p>
        </FacebookShareButton>

        <TwitterShareButton
          url={shareUrl}
          quote={title}
          hashtag={' #repldevs'}
          className="mx-2"
        >
          <TwitterIcon size={40} round={true} />
          <p>Twitter</p>
        </TwitterShareButton>

        <LinkedinShareButton
          url={shareUrl}
          quote={title}
          hashtag={' #repldevs'}
          className="mx-2"
        >
          <LinkedinIcon size={40} round={true} />
          <p>LinkedIn</p>
        </LinkedinShareButton>

        <TelegramShareButton
          url={shareUrl}
          title={title}
          hashtag={' #repldevs'}
          className="mx-2"
        >
          <TelegramIcon size={40} round={true} />
          <p>Telegram</p>
        </TelegramShareButton>

        <WhatsappShareButton
          url={shareUrl}
          title={title}
          hashtag={' #repldevs'}
          className="mx-2"
        >
          <WhatsappIcon size={40} round={true} />
          <p>Whatsapp</p>
        </WhatsappShareButton>

      </DialogContent>
      <Alert key={id} variant={!copied ? "secondary" : "success"} className="d-flex justify-content-center align-items-center">
        <p className="m-0 text-truncate">{shareUrl}</p>
        <CopyToClipboard
          text={shareUrl}
          onCopy={() => setCopied(!copied)}>
          <Button
            color={!copied ? "primary" : "success"}
            variant="outlined"
            endIcon={!copied ? <fiIcon.FiCircle /> : <fiIcon.FiCheckCircle />}
          >
            {!copied ? "Copy" : "Copied"}
          </Button>
        </CopyToClipboard>
      </Alert>
    </BootstrapDialog>
  );
}
export default ShareLink;