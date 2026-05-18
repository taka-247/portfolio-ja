export function MainVisual() {
  return (
    <div className="mv">
      <div className="mv__intro">
        <div className="mv__wrap" style={{ textAlign: 'center' }}>
          <h1 className="mv__name">仁科 崇弘</h1>
          <p className="mv__text">
            はじめまして！<br />
            技術と思いやりで、使う人の毎日をちょっと豊かにしたい。
            <br className="u-break-pc" />
            そんな<span>Web・Mobileエンジニア</span>を目指しています！
          </p>
        </div>
        <img
          src={`${import.meta.env.BASE_URL}assets/img/mv/img-01.jpg`}
          alt=""
          width={120}
          height={120}
        />
      </div>
    </div>
  );
}
