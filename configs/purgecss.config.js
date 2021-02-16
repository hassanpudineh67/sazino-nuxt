const components_white_list = [
      // components
      ...[/preloader/, /preloader-v1/, /preloader-v2/, /skeleton-preloader/],
      ...[/modal/],
      ...[/btn-main/],

      // transitions
      ...[/custom-transition/],


      ...[/^toaster/],
      ...[/g-recaptcha/],
      ...[/^tooltip-wrapper/],

];

const purgecss_style_extensions = ['.css', '.scss'];
const purgecss_whitelist = ['example'];
const purgecss_pattern_whitelist = [...components_white_list, /example/];

const purgecss_config = {
      enabled: true,
      styleExtensions: purgecss_style_extensions,
      whitelist: purgecss_whitelist,
      whitelistPatternsChildren: purgecss_pattern_whitelist
};
export default purgecss_config;
