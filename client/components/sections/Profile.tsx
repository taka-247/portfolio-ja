export function Profile() {
  return (
    <div className="profile">
      <h2 className="tab__hdg">PROFILE</h2>
      <p className="tab__lead">プロフィール</p>

      <div className="profile__wrap">
        <div className="profile__content">
          <div className="profile__textArea">
            <em className="profile__lead">経験とスキル</em>
            <p className="profile__text">
              5年以上にわたる開発業務の中で、コーポレートサイト、LP、SPA、CMS構築、予約システムや社内外業務支援ソフトウェアといった多種多様な開発・保守運用に携わり、ときにはCMS構築による顧客側の保守運用の最適化、既存コーポレートサイトやアプリのリニューアル開発、それに伴うデータ、システムの移行作業といった複雑な要件の多いプロジェクトにも参画。直近3年は主にフルスタックでの開発を担当し、アーキテクチャ設計やクラウドサービスの選定といった上流工程も含めて、より総括的なアプリケーション開発を行ってきました。
            </p>
            <p className="profile__text">
              プログラミング言語はReact、TypeScript、Node.jsを組み合わせた開発を多くこなしてきましたが、エンジニアとしてのスタートとしてはHTML5、CSS3、JavaScriptによるフレームワークなしでの開発であり、適切なマークアップによるパフォーマンスやアクセシビリティの向上といったWebサービスの品質にもこだわった開発が可能です。また案件によってはPHPやVue.js、それに伴うLaravelやNext.jsといったフレームワークでの開発も経験しており、現在はFlutterによるモバイルアプリ開発の学習に注力しています。
            </p>
            <p className="profile__text">
              クラウドサービスはAzureやFirebase、Supabase、MongoDB x Herokuを使用。案件によって使用するサービスを選定しています。
            </p>
            <ul className="profile__noteList">
              <li>スキルの詳細につきましては、上部の「Skill」タブをご覧ください。</li>
            </ul>
          </div>

          <div className="profile__textArea">
            <em className="profile__lead">開発における哲学</em>
            <p className="profile__text">
              私の開発哲学は使いやすいWebサービスを作ることです。
            </p>
            <p className="profile__text">
              当たり前のことであり、他にも開発において大切な要素はたくさんありますが、あえて使いやすさの追求を第一にあげているのは、Webサービスは最終的には使う人のためのものであるべきという考えに基づいています。
            </p>
            <p className="profile__text">
              使いやすさを図る指針は、ユーザビリティ、パフォーマンス、アクセシビリティ、デザインと様々で、これらのうち1つでも実装が疎かになった場合、使う人にとっては使いがっての悪いサービスという評価になってしまいます。そのため私は自身の技術力を常に磨き、各方面から使いやすさを追求しながら開発を行っていきたいと考えています。
            </p>
          </div>

          <div className="profile__img">
            <img
              src={`${import.meta.env.BASE_URL}assets/img/profile/img-01.jpg`}
              alt=""
              width={384}
              height={288}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
