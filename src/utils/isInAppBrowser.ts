export function isInAppBrowser() {
  const ua = navigator.userAgent;

  return (
    /KAKAOTALK/i.test(ua) ||
    /Instagram/i.test(ua) ||
    /FBAN|FBAV/i.test(ua) ||
    /NAVER/i.test(ua)
  );
}
