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
            <span className="dot" /> CRUX / 용수
          </div>
          <div className="topnav">
            <span>영웅</span>
            <span>전설</span>
            <span>신화</span>
            <span>예약</span>
          </div>
          <div className="session-tag">
            <span className="live" /> 티켓팅 · 이미 내 몫이 먼저임
          </div>
        </div>

        <div className="marquee">
          <div className="marquee-track">
            <span>볼더링의 조상</span>
            <span className="sep">◆</span>
            <s>초크 한 번에 월세 한달치</s>
            <span className="sep">◆</span>
            <b>떨어져도 무적</b>
            <span className="sep">◆</span>
            <span>더클라임 사당</span>
            <span className="sep">◆</span>
            <s>자존심 OFF · 실력 OFF · 텐션 ON</s>
            <span className="sep">◆</span>
            <b>4 / 22 · 19:00 · 지각하면 V0 강등</b>
            <span className="sep">◆</span>
            <span>볼더링의 조상</span>
            <span className="sep">◆</span>
            <s>초크 한 번에 월세 한달치</s>
            <span className="sep">◆</span>
            <b>떨어져도 무적</b>
            <span className="sep">◆</span>
            <span>더클라임 사당</span>
            <span className="sep">◆</span>
            <s>자존심 OFF · 실력 OFF · 텐션 ON</s>
            <span className="sep">◆</span>
            <b>4 / 22 · 19:00 · 지각하면 V0 강등</b>
            <span className="sep">◆</span>
          </div>
        </div>

        <div className="hero">
          <div className="hero-left">
            <div className="tape-vert">파일 / 용수옹-001 / 기밀 아님</div>
            <div className="eyebrow">
              용수옹 백서 <span className="bar" /> 제 001호
            </div>
            <h1 className="h1">
              <span className="outline">KIM</span>
              <br />
              <span className="accent">YONG</span>&nbsp;<span>SU</span>
              <span className="kr">김 · 용 · 수</span>
            </h1>
            <p className="lede">
              벽 앞에서 5초 고민하다 &ldquo;어, 몰라 일단 올라가&rdquo;로 인생을
              살아온 전설의 클라이머. 홀드를 잡는 순간 뇌가 포맷되며, 착지할
              때쯤 다시 부팅됩니다. 오늘도 V5 앞에서 깊은 사색에 잠긴 채, 결국
              V3만 열 번 깨고 집에 가는 실전파.
            </p>

            <div className="stats">
              <div className="stat accent">
                <div className="k">공식 등급 · 본인 주장</div>
                <div className="v">
                  V5<span className="u">+</span>
                </div>
                <div className="note">완등한 적 있는지 아무도 못 봄</div>
              </div>
              <div className="stat">
                <div className="k">주간 암장 체류 시간</div>
                <div className="v">
                  18<span className="u">HRS</span>
                </div>
                <div className="note">그 중 12시간은 매트에서 누워있음</div>
              </div>
              <div className="stat lime">
                <div className="k">입문자 멘탈 붕괴 유발</div>
                <div className="v">
                  120<span className="u">+</span>
                </div>
                <div className="note">
                  &ldquo;형 이거 진짜 V0 맞아요?&rdquo;
                </div>
              </div>
              <div className="stat">
                <div className="k">주요 서식지</div>
                <div className="v">
                  SDG<span className="u">.01</span>
                </div>
                <div className="note">더클라임 사당 · 매트 전문가</div>
              </div>
            </div>
          </div>

          <div className="coach-card">
            <div className="coach-meta-top">
              <span>ID · 용수-0422</span>
              <span className="code">◉ 생포 · 사당</span>
              <span>품종 / 볼더옹</span>
            </div>

            <div className="coach-img-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/coach.png" alt="김용수 — 자칭 볼더링 전설" />
              <div className="frame-stickers">
                <span className="sticker s1">일단 올라가 👍</span>
                <span className="sticker s2">초크 범벅</span>
                <span className="sticker s3">사당 토박이</span>
              </div>
            </div>

            <div className="coach-id">
              <div>
                <div className="role">
                  자칭 수석 코치 · 실제로는 매트 관리인
                </div>
                <div className="name-en">KIM YONG&nbsp;SU</div>
                <div className="name-kr">김용수옹</div>
              </div>
              <div />
              <div className="grade">V5+</div>
            </div>
          </div>
        </div>

        <section className="block">
          <div className="block-head">
            <h2>
              <span className="num">02</span> 파일 / 서사시
            </h2>
            <div className="hint">본인 검증 · 2026.04</div>
          </div>

          <div className="split">
            <div className="bio">
              <p>
                김용수옹은 볼더링을 &ldquo;문제&rdquo;가 아니라 &ldquo;인생
                상담&rdquo;이라고 설명합니다. 벽에 매달려 있으면 월세, 카드값,
                내일 점심 메뉴까지 한 번에 정리된다고 주장하지만, 정작 본인은
                아직 V6 근처도 못 가봤습니다.
              </p>
              <p>
                2025년 TCBC에 스태프로 참여해 티켓팅에 &ldquo;성공&rdquo;한
                이력을 자랑으로 꼽고, 2026년 TCBC 신림 남자 보라 부문에서는
                뒤에서 4등이라는 쾌거를 이룩. 숫자보단 분위기로 승부하는
                타입이라, 세션마다 새 별명이 하나씩 생깁니다.
              </p>
              <div className="quote">
                “손에 힘 빼.
                <br />
                발은 더 빼.”
                <span className="kr">결국 그냥 떨어지라는 뜻</span>
              </div>
            </div>

            <div className="resume">
              <div className="row">
                <div className="yr">&lsquo;26</div>
                <div className="title">
                  TCBC 신림 · 남자 보라(Purple) 부문 뒤에서 4등
                  <span className="sub">본인은 앞에서 세는 걸 선호함</span>
                </div>
                <div className="badge hot">FINALIST?</div>
              </div>
              <div className="row">
                <div className="yr">&lsquo;25</div>
                <div className="title">
                  TCBC 티켓팅 성공 (세계 신기록)
                  <span className="sub">
                    클릭 0.3초 · 본인 생애 최고 반응속도
                  </span>
                </div>
                <div className="badge">STAFF?</div>
              </div>
              <div className="row">
                <div className="yr">&lsquo;25</div>
                <div className="title">
                  더클라임 더레벨 티켓팅 성공
                  <span className="sub">집 계약보다 빠르게 예약에 성공</span>
                </div>
                <div className="badge">LEGEND</div>
              </div>
              <div className="row">
                <div className="yr">&lsquo;24</div>
                <div className="title">
                  퐁파이더 3대 회장 선출 (무투표 당선)
                  <span className="sub">
                    경쟁자 0명 · 본인 추대 · 본인 재가
                  </span>
                </div>
                <div className="badge">PRESIDENT</div>
              </div>
            </div>
          </div>
        </section>

        <section className="block">
          <div className="block-head">
            <h2>
              <span className="num">03</span> 다음 출몰 / 강습 아님
            </h2>
            <div className="hint">선착순 · 8자리 · 현장 난입 환영</div>
          </div>

          <div className="session">
            <div className="head">
              <span className="tag">● 볼더링 · 인생레벨 01</span>
              <h3>
                일단
                <br />
                <span className="accent">올라가</span>
                <br />
                떨어지자.
                <span className="kr">입문 강습 · 낙법이 본체</span>
              </h3>
              <p className="desc">
                신발 신는 법은 유튜브에서 배워오시고, 매트 위에서 폼나게
                떨어지는 법을 알려드립니다. 90분 안에 손가락 한 마디, 자존심 두
                마디를 잃고 갑니다. 준비물은 양말, 체육복, 그리고 &ldquo;나 오늘
                왜 왔지&rdquo;라는 질문을 참을 인내심.
              </p>

              <div className="cta-row">
                <button className="btn primary">
                  일단 예약 <span className="arr">→</span>
                </button>
                <button className="btn">후기 구경</button>
              </div>
            </div>

            <div className="session-meta">
              <div className="meta-grid">
                <div className="meta-cell big hl">
                  <div className="k">Date · 일시</div>
                  <div className="v">
                    04 / 22 · WED{" "}
                    <span className="kr">19:00 · 늦으면 버림</span>
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
                    <span className="kr">입문 · 인내심 필수</span>
                  </div>
                </div>
                <div className="meta-cell">
                  <div className="k">Duration</div>
                  <div className="v">
                    90분<span className="kr"> (체감 3시간)</span>
                  </div>
                </div>
                <div className="meta-cell">
                  <div className="k">Capacity</div>
                  <div className="v">
                    08 PAX<span className="kr"> · 손절 포함</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <span>CRUX · 용수옹 백서 제 001호</span>
          <span>김용수옹 / 일단올라가 101 / 더클라임 사당</span>
          <span>인쇄일 2026.04.21 · 유통기한 없음</span>
        </footer>
      </div>
    </>
  );
}
