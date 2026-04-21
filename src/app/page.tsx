export default function Home() {
  return (
    <>
      <div className="corner tl" />
      <div className="corner tr" />
      <div className="corner bl" />
      <div className="corner br" />

      <div className="shell">
        <div className="topbar">
          <div className="brand">
            <span className="dot" /> CRUX / COACH DOSSIER
          </div>
          <div className="topnav">
            <span>COACH</span>
            <span>SESSIONS</span>
            <span>GYM</span>
            <span>BOOK</span>
          </div>
          <div className="session-tag">
            <span className="live" /> SESSION · OPEN FOR SIGN-UP
          </div>
        </div>

        <div className="marquee">
          <div className="marquee-track">
            <span>BOULDERING 101</span>
            <span className="sep">◆</span>
            <s>CHALK UP.</s>
            <span className="sep">◆</span>
            <b>SEND IT.</b>
            <span className="sep">◆</span>
            <span>THE CLIMB · SADANG</span>
            <span className="sep">◆</span>
            <s>NO EGO. ONLY BETA.</s>
            <span className="sep">◆</span>
            <b>4 / 22 · 19:00</b>
            <span className="sep">◆</span>
            <span>BOULDERING 101</span>
            <span className="sep">◆</span>
            <s>CHALK UP.</s>
            <span className="sep">◆</span>
            <b>SEND IT.</b>
            <span className="sep">◆</span>
            <span>THE CLIMB · SADANG</span>
            <span className="sep">◆</span>
            <s>NO EGO. ONLY BETA.</s>
            <span className="sep">◆</span>
            <b>4 / 22 · 19:00</b>
            <span className="sep">◆</span>
          </div>
        </div>

        <div className="hero">
          <div className="hero-left">
            <div className="tape-vert">FILE / COACH-001 / KR</div>
            <div className="eyebrow">
              Coach Dossier <span className="bar" /> No. 001
            </div>
            <h1 className="h1">
              <span className="outline">KIM</span>
              <br />
              <span className="accent">YONG</span>&nbsp;<span>SU</span>
              <span className="kr">김 · 용 · 수</span>
            </h1>
            <p className="lede">
              홀드 위에서 망설이지 않는 코치. 처음 벽 앞에 선 당신에게 가장 먼저
              필요한 건 기술이 아니라 &ldquo;한 번만 더&rdquo;라는 감각입니다.
              매트 깔고, 초크 털고, 발끝부터 머리까지 — 오늘 밤, 당신의 첫
              문제를 같이 풀어봅시다.
            </p>

            <div className="stats">
              <div className="stat accent">
                <div className="k">Grade · Bouldering</div>
                <div className="v">
                  V5<span className="u">+</span>
                </div>
                <div className="note">현재 프로젝팅 · 퍼플 볼륨</div>
              </div>
              <div className="stat">
                <div className="k">Climb Hours / Week</div>
                <div className="v">
                  18<span className="u">HRS</span>
                </div>
                <div className="note">세션 기준 평균</div>
              </div>
              <div className="stat lime">
                <div className="k">Coached Beginners</div>
                <div className="v">
                  120<span className="u">+</span>
                </div>
                <div className="note">첫 볼더링 완등까지</div>
              </div>
              <div className="stat">
                <div className="k">Home Gym</div>
                <div className="v">
                  SDG<span className="u">.01</span>
                </div>
                <div className="note">더클라임 사당</div>
              </div>
            </div>
          </div>

          <div className="coach-card">
            <div className="coach-meta-top">
              <span>ID · KYS-0422</span>
              <span className="code">◉ LIVE · BOULDER</span>
              <span>SADANG / KR</span>
            </div>

            <div className="coach-img-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/coach.png" alt="Kim Yongsu — coach portrait" />
              <div className="frame-stickers">
                <span className="sticker s1">SEND IT 👍</span>
                <span className="sticker s2">CHALK ON</span>
                <span className="sticker s3">THE CLIMB · SADANG</span>
              </div>
            </div>

            <div className="coach-id">
              <div>
                <div className="role">Head Coach · Bouldering 101</div>
                <div className="name-en">KIM YONG&nbsp;SU</div>
                <div className="name-kr">김용수</div>
              </div>
              <div />
              <div className="grade">V5+</div>
            </div>
          </div>
        </div>

        <section className="block">
          <div className="block-head">
            <h2>
              <span className="num">02</span> THE FILE / 이력
            </h2>
            <div className="hint">Verified · 2026.04</div>
          </div>

          <div className="split">
            <div className="bio">
              <p>
                김용수 코치는 볼더링을 &ldquo;문제&rdquo;가 아니라
                &ldquo;대화&rdquo;로 설명합니다. 벽과 몸 사이에서 가장 솔직한
                움직임이 나온다고 믿고, 입문자에게 첫 홀드를 잡게 하는 순간을
                가장 좋아한다고 말합니다.
              </p>
              <p>
                2025년 TCBC(더클라임 바운더링 컴피티션)에 스태프로 참여하며 대회
                운영을 경험했고, 2026년 TCBC 신림 — 남자부 보라(Purple) 부문에서
                4등(뒤에서)을 기록. 숫자로 자기를 증명하기보단, 매 세션마다
                &ldquo;오늘 조금 더 낫게&rdquo;를 실천합니다.
              </p>
              <div className="quote">
                “Don&rsquo;t grip harder.
                <br />
                Trust your feet.”
                <span className="kr">손에 힘 빼세요. 발을 믿으세요.</span>
              </div>
            </div>

            <div className="resume">
              <div className="row">
                <div className="yr">&lsquo;26</div>
                <div className="title">
                  TCBC 신림 · 남자 보라(Purple) 부문 4등 (뒤에서)
                  <span className="sub">
                    The Climb Bouldering Competition / Sillim
                  </span>
                </div>
                <div className="badge hot">FINALIST</div>
              </div>
              <div className="row">
                <div className="yr">&lsquo;25</div>
                <div className="title">
                  TCBC 티켓팅 성공
                  <span className="sub">
                    The Climb Bouldering Competition / Ops
                  </span>
                </div>
                <div className="badge">STAFF</div>
              </div>
              <div className="row">
                <div className="yr">&lsquo;25</div>
                <div className="title">
                  더클라임 더레벨 티켓팅 성공
                  <span className="sub">The Climb Level · Ticket Success</span>
                </div>
                <div className="badge">LEAD</div>
              </div>
              <div className="row">
                <div className="yr">&lsquo;24</div>
                <div className="title">
                  퐁파이더 3대 회장 선출
                  <span className="sub">Pongpider 3rd President Election</span>
                </div>
                <div className="badge">SEND</div>
              </div>
            </div>
          </div>
        </section>

        <section className="block">
          <div className="block-head">
            <h2>
              <span className="num">03</span> NEXT SESSION / 다가오는 강습
            </h2>
            <div className="hint">Limited · 8 Spots</div>
          </div>

          <div className="session">
            <div className="head">
              <span className="tag">● BOULDERING · LEVEL 01</span>
              <h3>
                Climb
                <br />
                <span className="accent">like you</span>
                <br />
                mean it.
                <span className="kr">클라이밍 입문 강습 · 첫 문제를 풀다</span>
              </h3>
              <p className="desc">
                신발 신는 법부터, 매트 위 낙법, 발 딛기, 첫 V0 완등까지. 90분
                안에 당신의 몸이 벽을 어떻게 읽는지 알게 됩니다. 체육복, 양말,
                그리고 &ldquo;한 번만 더&rdquo;의 마음만 챙겨오세요. 나머진
                코치가 챙깁니다.
              </p>

              <div className="cta-row">
                <button className="btn primary">
                  RESERVE A SPOT <span className="arr">→</span>
                </button>
                <button className="btn">VIEW BETA</button>
              </div>
            </div>

            <div className="session-meta">
              <div className="meta-grid">
                <div className="meta-cell big hl">
                  <div className="k">Date · 일시</div>
                  <div className="v">
                    04 / 22 · WED <span className="kr">19:00 KST</span>
                  </div>
                </div>
                <div className="meta-cell">
                  <div className="k">Venue · 장소</div>
                  <div className="v">
                    THE CLIMB
                    <br />
                    <span className="kr">사당점</span>
                  </div>
                </div>
                <div className="meta-cell">
                  <div className="k">Level</div>
                  <div className="v">
                    BEGINNER
                    <br />
                    <span className="kr">입문 · 첫 클라이밍</span>
                  </div>
                </div>
                <div className="meta-cell">
                  <div className="k">Duration</div>
                  <div className="v">90 MIN</div>
                </div>
                <div className="meta-cell">
                  <div className="k">Capacity</div>
                  <div className="v">08 PAX</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <span>CRUX · COACH DOSSIER No. 001</span>
          <span>KIM YONGSU / BOULDERING 101 / THE CLIMB SADANG</span>
          <span>PRINTED 2026.04.21</span>
        </footer>
      </div>
    </>
  );
}
