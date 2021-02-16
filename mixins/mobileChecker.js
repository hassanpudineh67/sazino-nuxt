export default {
      methods: {
            isMobile(){
                  let isMobile = false; //initiate as false
                  // device detection
                  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                        isMobile = true;
                  }
                  if (isMobile) return 'mobile'
                  else return 'desktop';
            }
      }
}