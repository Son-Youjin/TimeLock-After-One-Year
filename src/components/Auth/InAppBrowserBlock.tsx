export default function InAppBrowserBlock() {
  return (
    <div>
      <h2>외부 브라우저에서 열어주세요</h2>

      <p>
        인앱 브라우저에서는 Google 로그인이 제한됩니다.
        <br />
        Safari 또는 Chrome에서 열어주세요.
      </p>

      <div style={{ marginTop: 20 }}>
        <p>Safari에서 여는 방법</p>
        <p>1. 오른쪽 상단 ⋮ 클릭</p>
        <p>2. Safari에서 열기</p>
      </div>
    </div>
  );
}
