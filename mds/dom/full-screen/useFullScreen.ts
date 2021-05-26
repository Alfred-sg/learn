import { useState, useCallback, useMemo, useEffect } from 'react';


export default (
  onFullscreenChange: undefined | ((event: Event) => void) = (event: Event) => null,
) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const fullscreenEnabled = useMemo(() => {
    return (
      document.fullscreenEnabled
      || document.webkitFullscreenEnabled
      || document.mozFullScreenEnabled
      || document.msFullscreenEnabled
    );
  }, []);

  const requestFullscreen = useCallback((elm: HTMLElement) => {
    if (!fullscreenEnabled) return Promise.reject();

    if (elm.requestFullscreen) {
      return elm.requestFullscreen();
    } else if (elm.webkitRequestFullscreen) {
      return elm.webkitRequestFullscreen();
    } else if (elm.mozRequestFullScreen) {
      return elm.mozRequestFullScreen();
    } else if (elm.msRequestFullscreen) {
      return elm.msRequestFullscreen();
    };
  }, [fullscreenEnabled]);

  const exitFullscreen = useCallback(() => {
    if (!fullscreenEnabled) return Promise.reject();

    if (document.exitFullscreen) {
      return document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      return document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      return document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      return document.msExitFullscreen();
    };
  }, [fullscreenEnabled]);

  const getFullscreenElement = useCallback(() => {
    return (
      document.fullscreenElement
      || document.webkitFullscreenElement
      || document.mozFullScreenElement
      || document.msFullscreenElement
    );
  }, []);

  const toggleFullscreen = useCallback((elm: HTMLElement) => {
    if (getFullscreenElement()){
      exitFullscreen();
    } else {
      requestFullscreen(elm);
    }
  }, [getFullscreenElement, exitFullscreen, requestFullscreen]);

  const handleFullscreenChange = useCallback((event) => {
    if (getFullscreenElement()){
      setIsFullscreen(true);
    } else {
      setIsFullscreen(false);
    };
    
    if (onFullscreenChange) onFullscreenChange(event);
  }, [onFullscreenChange]);

  useEffect(() => {
    if (fullscreenEnabled && handleFullscreenChange){
      document.addEventListener('fullscreenchange', handleFullscreenChange);
      document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.addEventListener('mozfullscreenchange', handleFullscreenChange);
      document.addEventListener('MSFullscreenChange', handleFullscreenChange);
  
      return () => {
        document.removeEventListener('fullscreenchange', handleFullscreenChange);
        document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
        document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
      };
    };
  }, [fullscreenEnabled, handleFullscreenChange])

  return {
    fullscreenEnabled,
    requestFullscreen,
    exitFullscreen,
    toggleFullscreen,
    isFullscreen,
    getFullscreenElement,
  }
}