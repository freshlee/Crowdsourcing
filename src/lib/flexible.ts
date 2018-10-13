export default () => {
    ((doc, win) => {
        const docEl: typeof win.document.documentElement = win.document.documentElement;
        const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
         const refreshRem =  () => {
          const clientWidth = win.innerWidth
                            || (doc.documentElement && doc.documentElement.clientWidth)
                            || doc.body.clientWidth;
          if (!clientWidth) { return; }
          let fz;
          const width = clientWidth;
          fz = 16 * width / 375;
          docEl!.style!.fontSize = fz + 'px';   
        };
      
        if (!doc.addEventListener) { return; }
        win.addEventListener(resizeEvt, refreshRem, false);
        doc.addEventListener('DOMContentLoaded', refreshRem, false);
        refreshRem();
      
      })(document, window);
}