const navigateExternalLink = (url: string): void => {
  if(window){
    window.open(url, '_blank');
  }
};

export default navigateExternalLink;
