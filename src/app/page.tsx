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
            <span>프로필</span>
            <span>업적</span>
            <span>출몰지</span>
            <span>예약</span>
          </div>
          <div className="session-tag">
            <span className="live" /> SESSION · 본인 자리 이미 확보 완료
          </div>
        </div>

        <div className="marquee">
          <div className="marquee-track">
            <span>BOULDERING DOCTRINE</span>
            <span className="sep">◆</span>
            <s>CHALK FIRST. THINK LATER.</s>
            <span className="sep">◆</span>
            <b>떨어지는 것도 운동이다</b>
            <span className="sep">◆</span>
            <span>THE CLIMB · SADANG</span>
            <span className="sep">◆</span>
            <s>자존심은 사물함에 두고 오세요</s>
            <span className="sep">◆</span>
            <b>4 / 22 · 19:00 · 지각은 기록에 남습니다</b>
            <span className="sep">◆</span>
            <span>BOULDERING DOCTRINE</span>
            <span className="sep">◆</span>
            <s>CHALK FIRST. THINK LATER.</s>
            <span className="sep">◆</span>
            <b>떨어지는 것도 운동이다</b>
            <span className="sep">◆</span>
            <span>THE CLIMB · SADANG</span>
            <span className="sep">◆</span>
            <s>자존심은 사물함에 두고 오세요</s>
            <span className="sep">◆</span>
            <b>4 / 22 · 19:00 · 지각은 기록에 남습니다</b>
            <span className="sep">◆</span>
          </div>
        </div>

        <div className="hero">
          <div className="hero-left">
            <div className="tape-vert">FILE / COACH-001 / 기밀 해제</div>
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
              벽 앞에서 평균 5.2초간 사색한 뒤 올라가는 것으로 알려져 있습니다.
              홀드를 잡는 순간 단기 기억이 일시 정지되며, 매트에 닿는 순간
              정상화되는 현상이 여러 차례 관찰된 바 있습니다. 공식 기록상
              프로젝팅 등급은 V5+이나, 본인 외 목격자는 아직 확보되지 않았습니다.
            </p>

            <div className="stats">
              <div className="stat accent">
                <div className="k">공식 등급 · 자기 신고</div>
                <div className="v">
                  V5<span className="u">+</span>
                </div>
                <div className="note">3자 검증 절차 진행 중</div>
              </div>
              <div className="stat">
                <div className="k">주간 체육관 체류 시간</div>
                <div className="v">
                  18<span className="u">HRS</span>
                </div>
                <div className="note">이 중 6.5시간은 대화 및 물 마시기</div>
              </div>
              <div className="stat lime">
                <div className="k">입문자 지도 누적</div>
                <div className="v">
                  120<span className="u">+</span>
                </div>
                <div className="note">만족도 조사 결과는 비공개</div>
              </div>
              <div className="stat">
                <div className="k">주 출몰 지역</div>
                <div className="v">
                  SDG<span className="u">.01</span>
                </div>
                <div className="note">더클라임 사당 · 포착률 89%</div>
              </div>
            </div>
          </div>

          <div className="coach-card">
            <div className="coach-meta-top">
              <span>ID · KYS-0422</span>
              <span className="code">◉ CONFIRMED · SADANG</span>
              <span>STATUS / ACTIVE</span>
            </div>

            <div className="coach-img-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/coach.png" alt="김용수 코치 초상" />
              <div className="frame-stickers">
                <span className="sticker s1">일단 올라감 👍</span>
                <span className="sticker s2">CHALK ON</span>
                <span className="sticker s3">THE CLIMB · SADANG</span>
              </div>
            </div>

            <div className="coach-id">
              <div>
                <div className="role">HEAD COACH · 자칭 · 반박 대기 중</div>
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
            <div className="hint">본인 진술 기반 · 2026.04</div>
          </div>

          <div className="split">
            <div className="bio">
              <p>
                김용수 코치는 볼더링을 &ldquo;문제 해결&rdquo;이 아닌 &ldquo;장기
                대화&rdquo;로 정의합니다. 벽과 몸 사이에서 가장 정직한 움직임이
                나온다고 믿으며, 이 철학은 지금까지 그의 프로젝팅 완등률과
                유의미한 상관관계를 보이지 않았습니다.
              </p>
              <p>
                2025년 TCBC 스태프로 참여하여 티켓팅 예매에 성공했고, 2026년
                동일 대회 신림 예선에서는 남자 보라(Purple) 부문 후순위 4위라는
                기록을 수립했습니다. 당사자는 이를 &ldquo;통계적으로는 상위
                100%&rdquo;라 설명합니다.
              </p>
              <div className="quote">
                “손에 힘 빼고,
                <br />
                발은 더 빼세요.”
                <span className="kr">— 본인, 떨어지기 직전</span>
              </div>
            </div>

            <div className="resume">
              <div className="row">
                <div className="yr">&lsquo;26</div>
                <div className="title">
                  TCBC 신림 · 남자 보라(Purple) 부문 4위 (총 4인 참가)
                  <span className="sub">
                    THE CLIMB BOULDERING COMPETITION / SILLIM
                  </span>
                </div>
                <div className="badge hot">FINALIST</div>
              </div>
              <div className="row">
                <div className="yr">&lsquo;25</div>
                <div className="title">
                  TCBC 티켓팅 성공 (세계 신기록, 자체 공인)
                  <span className="sub">
                    예매 0.3초 · 본인 인생 최고 반응속도로 기록
                  </span>
                </div>
                <div className="badge">STAFF</div>
              </div>
              <div className="row">
                <div className="yr">&lsquo;25</div>
                <div className="title">
                  더클라임 더레벨 티켓팅 성공
                  <span className="sub">
                    전세 계약보다 빠른 결단력이 유일한 근거
                  </span>
                </div>
                <div className="badge">LEAD</div>
              </div>
              <div className="row">
                <div className="yr">&lsquo;24</div>
                <div className="title">
                  퐁파이더 3대 회장 선출 · 무투표 당선
                  <span className="sub">
                    재적 1인 · 찬성 1 · 반대 0 · 기권 0
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
              <span className="num">03</span> NEXT SESSION / 다가오는 강습
            </h2>
            <div className="hint">한정 · 8석 · 환불 규정 협의 예정</div>
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
                <span className="kr">클라이밍 입문 강습 · 첫 낙하를 경험하다</span>
              </h3>
              <p className="desc">
                신발 신는 법부터 매트 위 낙법, 첫 V0 완등까지. 90분 안에 몸이
                벽을 어떻게 읽는지, 그리고 바닥이 얼마나 가까운지 동시에 학습하게
                됩니다. 체육복, 양말, 그리고 이후 2일간의 전신 근육통을 견딜
                여유만 챙겨오세요. 나머지는 코치가 책임집니다 (법적 책임은 제외).
              </p>

              <div className="cta-row">
                <button className="btn primary">
                  예약하기 <span className="arr">→</span>
                </button>
                <button className="btn">베타 확인</button>
              </div>
            </div>

            <div className="session-meta">
              <div className="meta-grid">
                <div className="meta-cell big hl">
                  <div className="k">Date · 일시</div>
                  <div className="v">
                    04 / 22 · WED <span className="kr">19:00 · 지각 시 명단 제외</span>
                  </div>
                </div>
                <div className="meta-cell">
                  <div className="k">Venue · 장소</div>
                  <div className="v">
                    THE CLIMB
                    <br />
                    <span className="kr">사당점 · 주요 서식지</span>
                  </div>
                </div>
                <div className="meta-cell">
                  <div className="k">Level</div>
                  <div className="v">
                    BEGINNER
                    <br />
                    <span className="kr">입문 · 자존감 내구도 필수</span>
                  </div>
                </div>
                <div className="meta-cell">
                  <div className="k">Duration</div>
                  <div className="v">
                    90 MIN<span className="kr"> · 체감 180분</span>
                  </div>
                </div>
                <div className="meta-cell">
                  <div className="k">Capacity</div>
                  <div className="v">
                    08 PAX<span className="kr"> · 중도 이탈자 포함</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <span>CRUX · COACH DOSSIER No. 001</span>
          <span>KIM YONGSU / BOULDERING 101 / THE CLIMB SADANG</span>
          <span>PRINTED 2026.04.21 · 본 문서는 본인 감수를 거쳤음</span>
        </footer>
      </div>
    </>
  );
}
