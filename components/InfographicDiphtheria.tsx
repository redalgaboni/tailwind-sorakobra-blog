'use client'

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from 'react'

const POSTER_W = 1080
const POSTER_H = 1920

const css = `
@import url('/hexaxim/assets/fonts/fonts.css');
*{margin:0;padding:0;box-sizing:border-box}
.en{direction:ltr;unicode-bidi:isolate}
.tj{font-family:'Tajawal',sans-serif}
.poster{
  width:1080px;height:1920px;overflow:hidden;position:relative;
  font-family:'Cairo',sans-serif;color:#16324f;
  background:
    radial-gradient(900px 500px at 100% -5%, #E3F3F1 0%, rgba(227,243,241,0) 60%),
    radial-gradient(700px 500px at -10% 30%, #EAEFF8 0%, rgba(234,239,248,0) 60%),
    linear-gradient(180deg,#F8FBFD 0%,#EFF4F9 100%);
  padding:24px 40px 16px;display:flex;flex-direction:column;gap:8px;
}

/* ---------- header ---------- */
header{
  position:relative;border-radius:30px;overflow:hidden;color:#fff;
  background:linear-gradient(125deg,#0F2C57 0%,#164073 55%,#0E6E77 100%);
  padding:16px 28px;display:flex;align-items:center;justify-content:space-between;gap:18px;
  box-shadow:0 14px 34px rgba(15,44,87,.22);
}
header::after{content:"";position:absolute;left:-70px;bottom:-90px;width:250px;height:250px;border-radius:50%;background:rgba(255,255,255,.06)}
.eyebrow{display:inline-flex;align-items:center;gap:9px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.28);
  padding:7px 16px;border-radius:999px;font-size:20px;font-weight:700;letter-spacing:.2px}
.eyebrow .dot{width:11px;height:11px;border-radius:50%;background:#37D6C0;box-shadow:0 0 0 4px rgba(55,214,192,.28)}
.poster h1{font-family:'Tajawal',sans-serif;font-weight:800;font-size:42px;line-height:1.16;margin-top:8px}
.sub{margin-top:12px;font-size:22px;font-weight:600;color:#BFE3E6;max-width:500px;line-height:1.5}
.illus{flex:0 0 auto;position:relative;z-index:2}

/* ---------- section frame ---------- */
.sec{
  background:#fff;border:1px solid #E4ECF4;border-radius:26px;
  padding:12px 20px 12px;box-shadow:0 10px 26px rgba(15,44,87,.07);position:relative;
}
.sec-title{display:flex;align-items:center;gap:12px;margin-bottom:10px}
.sec-num{width:38px;height:38px;border-radius:12px;background:#0E9B94;color:#fff;display:flex;align-items:center;
  justify-content:center;font-family:'Tajawal';font-weight:800;font-size:22px;direction:ltr;flex:0 0 auto}
.sec-title h2{font-family:'Tajawal';font-weight:800;font-size:30px;color:#0F2C57;line-height:1.2}
.sec-title .hint{margin-inline-start:auto;font-size:18px;font-weight:700;color:#6C8099;background:#F1F5FA;
  border:1px solid #E1E9F2;padding:6px 14px;border-radius:999px;white-space:nowrap}

/* ---------- connectors ---------- */
.conn{display:flex;flex-direction:column;align-items:center;gap:0;flex:0 0 auto}
.conn .line{width:3px;height:8px;background:#B9CADB}
.conn .arrow{width:0;height:0;border-inline:11px solid transparent;border-top:12px solid #0E9B94}
.conn .lbl{margin-top:6px;background:#0F2C57;color:#fff;font-size:18px;font-weight:700;padding:3px 14px;border-radius:999px;
  font-family:'Tajawal'}

/* ---------- flow: sanofi -> marbio ---------- */
.flow{display:grid;grid-template-columns:1fr 176px 1fr;align-items:stretch;gap:10px}
.node{border:1px solid #E2EAF3;border-radius:20px;background:#FAFCFE;padding:14px 14px 12px;display:flex;
  flex-direction:column;align-items:center;gap:8px;text-align:center}
.node .logobox{height:46px;display:flex;align-items:center;justify-content:center}
.node .logobox img{max-height:44px;max-width:200px;object-fit:contain}
.badge{font-size:19px;font-weight:800;padding:7px 14px;border-radius:999px;line-height:1.3}
.badge.owner{background:#E8F1FF;color:#1B4FA0;border:1px solid #CBDDF9}
.badge.distr{background:#E4F7F2;color:#0B7A66;border:1px solid #BCE9DE}
.node .cap{font-size:18px;font-weight:600;color:#5B7288;line-height:1.45}
.node .cap b{color:#0F2C57;font-weight:800}
.flowarrow{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px}
.flowarrow .shaft{display:flex;align-items:center;width:100%}
.flowarrow .shaft .bar{height:4px;flex:1;background:linear-gradient(90deg,#9FB6CE,#0E9B94)}
.flowarrow .shaft .head{width:0;height:0;border-inline-start:16px solid #0E9B94;border-block:11px solid transparent}
.flowarrow .tag{background:#0E9B94;color:#fff;font-size:18px;font-weight:800;padding:6px 11px;border-radius:12px;
  font-family:'Tajawal';text-align:center;line-height:1.35;max-width:180px}

/* ---------- sanofi ownership ---------- */
.own{display:flex;flex-direction:column;align-items:center}
.own .root{display:flex;align-items:center;gap:12px;background:#0F2C57;color:#fff;border-radius:999px;
  padding:8px 24px;font-family:'Tajawal';font-weight:800;font-size:24px}
.own .root img{height:28px}
.stem{width:3px;height:14px;background:#B9CADB}
.chips{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;width:100%;position:relative;padding-top:16px}
.chips::before{content:"";position:absolute;top:0;left:12.5%;right:12.5%;height:3px;background:#B9CADB}
.chip{position:relative;background:#FAFCFE;border:1px solid #E2EAF3;border-radius:18px;padding:9px 8px 9px;
  display:flex;flex-direction:column;align-items:center;gap:9px;text-align:center}
.chip::before{content:"";position:absolute;top:-16px;left:50%;width:3px;height:20px;background:#B9CADB}
.chip .lb{height:40px;display:flex;align-items:center;justify-content:center}
.chip .lb img{max-height:38px;max-width:150px;object-fit:contain}
.chip .pct{font-family:'Tajawal';font-weight:800;font-size:27px;color:#0E9B94;direction:ltr}
.chip .nm{font-size:17px;font-weight:700;color:#41566E;direction:ltr;line-height:1.3}
.own .note{margin-top:6px;font-size:17px;font-weight:600;color:#6C8099;text-align:center}
.own .note b{color:#0F2C57}

/* ---------- timeline ---------- */
.tl{position:relative;padding-top:2px}
.tl .rail{position:absolute;top:37px;left:6%;right:6%;height:4px;background:linear-gradient(90deg,#0E9B94,#1B4FA0);border-radius:2px}
.tl .steps{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;position:relative}
.step{display:flex;flex-direction:column;align-items:center;text-align:center;gap:7px}
.step .ico{width:56px;height:56px;border-radius:50%;background:#fff;border:4px solid #0E9B94;display:flex;align-items:center;
  justify-content:center;box-shadow:0 6px 16px rgba(15,44,87,.12);z-index:2}
.step:nth-child(2) .ico{border-color:#1B4FA0}
.step:nth-child(3) .ico{border-color:#C1272D}
.step .date{font-family:'Tajawal';font-weight:800;font-size:21px;color:#0F2C57;background:#EEF4FA;border:1px solid #DCE7F2;
  padding:5px 16px;border-radius:999px}
.step .txt{font-size:19px;font-weight:700;color:#33475E;line-height:1.5;max-width:270px}
.step .txt .en{font-weight:800;color:#0F2C57}
.step .small{font-size:17px;font-weight:600;color:#6C8099}
.former{margin-top:14px;background:#FFF6E9;border:1px dashed #E8B872;border-radius:14px;padding:6px 12px;text-align:center;
  font-size:19px;font-weight:700;color:#8A5A16}
.former .en{font-weight:800;color:#6E4409}

/* ---------- marbio shareholders ---------- */
.tree{display:flex;flex-direction:column;align-items:center}
.tree .me{display:flex;align-items:center;gap:12px;border:2px solid #0F2C57;border-radius:999px;padding:8px 22px;background:#fff}
.tree .me img{height:32px}
.tree .me span{font-family:'Tajawal';font-weight:800;font-size:21px;color:#0F2C57}
.trunk{width:3px;height:16px;background:#B9CADB}
.branches{position:relative;display:grid;grid-template-columns:repeat(3,1fr);gap:16px;width:100%;padding-top:18px}
.branches::before{content:"";position:absolute;top:0;left:16.66%;right:16.66%;height:3px;background:#B9CADB}
.branch{position:relative;display:flex;flex-direction:column;gap:10px}
.branch::before{content:"";position:absolute;top:-18px;left:50%;width:3px;height:18px;background:#B9CADB}
.bhead{border-radius:16px 16px 0 0;padding:7px 10px;text-align:center;font-family:'Tajawal';font-weight:800;font-size:21px;color:#fff}
.b1 .bhead{background:#0F2C57}
.b2 .bhead{background:#0B7A66}
.b3 .bhead{background:#1B4FA0}
.b3 .banks{flex:1}
.b3 .bank{min-height:120px}
.b3 .bank img{max-height:74px;max-width:210px}
.bbody{border:1px solid #E2EAF3;border-top:none;border-radius:0 0 16px 16px;background:#FAFCFE;padding:8px 10px;
  display:flex;flex-direction:column;align-items:center;gap:8px;min-height:76px;justify-content:center}
.bbody .cap{font-size:18.5px;font-weight:600;color:#5B7288;text-align:center;line-height:1.45}
.bbody .cap b{color:#0F2C57;font-weight:800}
.banks{display:grid;grid-template-columns:1fr;gap:8px;width:100%}
.bank{background:#fff;border:1px solid #E6EDF5;border-radius:12px;display:flex;flex-direction:column;align-items:center;
  justify-content:center;gap:4px;padding:5px 6px;min-height:54px}
.bank img{max-height:28px;max-width:170px;object-fit:contain}
.bank .ow{display:flex;align-items:center;justify-content:center;gap:6px;line-height:1.2;white-space:nowrap}
.bank .ow .tg{font-size:11.5px;font-weight:700;color:#0B7A66;background:#E4F7F2;border:1px solid #BCE9DE;padding:1px 7px;border-radius:999px}
.bank .ow .en{font-size:12.5px;font-weight:700;color:#41566E}
.fundbadge{display:flex;flex-direction:column;align-items:center;gap:6px;text-align:center}
.fundbadge .fundlogo{max-height:132px;max-width:250px;object-fit:contain}
.fundbadge .seal{width:50px;height:50px;border-radius:50%;background:linear-gradient(135deg,#0F2C57,#0E6E77);color:#fff;
  display:flex;align-items:center;justify-content:center;font-family:'Tajawal';font-weight:800;font-size:21px}
.fundbadge .l1{font-size:20px;font-weight:800;color:#0F2C57;line-height:1.4}
.fundbadge .l2{font-size:20px;font-weight:700;color:#0B7A66;line-height:1.4}

/* ---------- watermark ---------- */
.wm{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:6;pointer-events:none}
.wm a{pointer-events:auto;text-decoration:none;display:inline-block}
.wm span{font-family:'Tajawal',sans-serif;font-weight:800;font-size:50px;letter-spacing:3px;
  color:rgba(29,161,242,.20);direction:ltr;white-space:nowrap;display:inline-block;
  transform:rotate(45deg);text-shadow:0 2px 0 rgba(255,255,255,.55)}
/* ---------- footer ---------- */
.poster footer{margin-top:auto;display:flex;align-items:center;justify-content:space-between;gap:16px;
  border-top:2px dashed #D3DFEB;padding-top:8px;font-size:16.5px;font-weight:600;color:#6C8099;white-space:nowrap}
.poster footer .brand{display:flex;align-items:center;gap:10px;font-family:'Tajawal';font-weight:800;color:#0F1419;font-size:20px}
.poster footer .brand .sq{width:14px;height:14px;border-radius:4px;background:#1DA1F2}
.poster footer .brand a{color:#1DA1F2;font-weight:800;text-decoration:none;border-bottom:2px solid rgba(29,161,242,.45);
  display:inline-flex;align-items:center;gap:6px}
.poster footer .brand .xlogo{width:19px;height:19px;flex:0 0 auto}
`

export default function InfographicDiphtheria() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const update = () => {
      const w = el.clientWidth || POSTER_W
      setScale(Math.min(1, w / POSTER_W))
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <div
      ref={wrapRef}
      className="overflow-hidden shadow-md rounded-2xl dark:shadow-none dark:ring-1 dark:ring-gray-800"
      style={{ height: scale ? POSTER_H * scale : undefined }}
    >
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div
        className="poster"
        dir="rtl"
        style={{ transform: `scale(${scale || 1})`, transformOrigin: 'top right' }}
      >
        <div className="wm">
          <a href="https://x.com/reda_lgaboni" target="_blank" rel="noopener">
            <span>x.com/reda_lgaboni</span>
          </a>
        </div>

        {/* ============ HEADER ============ */}
        <header>
          <div>
            <div className="eyebrow">
              <span className="dot"></span> معلومة صحية · لقاح الدفتيريا
            </div>
            <h1>
              مَن يُصنّع اللقاح؟<br />ومَن يوزّعه في المغرب؟
            </h1>
            <div className="sub">الترخيص التسويقي · التوزيع الوطني · هيكل الملكية</div>
          </div>
          <div className="illus">
            <svg width="300" height="176" viewBox="0 0 300 176" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* syringe */}
              <g transform="rotate(-18 150 90)">
                <rect x="118" y="46" width="112" height="34" rx="8" fill="#EAF4FF" stroke="#0F2C57" strokeWidth="4" />
                <rect x="126" y="52" width="62" height="22" rx="5" fill="#7BE0D0" />
                <rect x="96" y="52" width="24" height="22" rx="5" fill="#CFE1F5" stroke="#0F2C57" strokeWidth="4" />
                <rect x="74" y="58" width="22" height="10" rx="4" fill="#0F2C57" />
                <rect x="60" y="54" width="12" height="18" rx="4" fill="#164073" />
                <rect x="230" y="56" width="34" height="14" rx="4" fill="#CFE1F5" stroke="#0F2C57" strokeWidth="4" />
                <path d="M264 63 H292" stroke="#0F2C57" strokeWidth="4" strokeLinecap="round" />
                <path d="M140 46 v34 M156 46 v34 M172 46 v34" stroke="#0F2C57" strokeWidth="3" opacity=".45" />
              </g>
              {/* vial */}
              <g>
                <rect x="26" y="52" width="74" height="104" rx="14" fill="#EAF4FF" stroke="#0F2C57" strokeWidth="4" />
                <path
                  d="M30 96 h66 v56 a14 14 0 0 1 -14 14 h-38 a14 14 0 0 1 -14 -14 z"
                  fill="#7BE0D0"
                />
                <rect x="34" y="104" width="58" height="34" rx="7" fill="#FFFFFF" />
                <path d="M56 112 h14 v8 h8 v14 h-8 v8 h-14 v-8 h-8 v-14 h8 z" fill="#C1272D" />
                <rect x="40" y="34" width="46" height="22" rx="7" fill="#164073" />
                <rect x="34" y="24" width="58" height="14" rx="6" fill="#0E9B94" />
              </g>
            </svg>
          </div>
        </header>

        {/* ============ 1 · LICENSE → DISTRIBUTION ============ */}
        <section className="sec">
          <div className="sec-title">
            <div className="sec-num">1</div>
            <h2>الترخيص التسويقي والتوزيع في المغرب</h2>
            <div className="hint">من يملك؟ مَن يوزّع؟</div>
          </div>
          <div className="flow">
            <div className="node">
              <div className="logobox">
                <img src="/hexaxim/assets/logos/sanofi.svg" alt="Sanofi" />
              </div>
              <div className="badge owner">صاحب الترخيص التسويقي (AMM)</div>
              <div className="cap">
                <b className="en">Sanofi</b> — شركة أدوية ولقاحات فرنسية
              </div>
            </div>
            <div className="flowarrow">
              <div className="tag">
                الموزّع الرسمي<br />في المغرب
              </div>
              <div className="shaft">
                <div className="bar"></div>
                <div className="head"></div>
              </div>
            </div>
            <div className="node">
              <div className="logobox">
                <img src="/hexaxim/assets/logos/marbio.webp" alt="MarBio" />
              </div>
              <div className="badge distr">التوزيع والتصنيع المحلي</div>
              <div className="cap">
                <b className="en">MarBio</b> — شريك Sanofi الصناعي والموزّع
              </div>
            </div>
          </div>
        </section>

        <div className="conn">
          <div className="line"></div>
          <div className="arrow"></div>
          <div className="lbl">
            مَن يملك <span className="en">MarBio</span>؟
          </div>
        </div>

        <section className="sec">
          <div className="sec-title">
            <div className="sec-num">2</div>
            <h2>
              مساهمو <span className="en" style={{ fontSize: '34px' }}>MarBio</span>
            </h2>
            <div className="hint">شراكة عمومية–خاصة</div>
          </div>
          <div className="tree">
            <div className="me">
              <img src="/hexaxim/assets/logos/marbio.webp" alt="MarBio" />
            </div>
            <div className="trunk"></div>
            <div className="branches">
              <div className="branch b1">
                <div className="bhead">الدولة المغربية</div>
                <div className="bbody">
                  <div className="fundbadge">
                    <img
                      className="fundlogo"
                      src="/hexaxim/assets/logos/fm6i_logo.png"
                      alt="صندوق محمد السادس للاستثمار"
                    />
                    <div className="l2">مساهم رئيسي · طرف عمومي</div>
                  </div>
                </div>
              </div>

              <div className="branch b2">
                <div className="bhead">
                  <span className="en">BAB Banking Consortium</span>
                </div>
                <div className="bbody">
                  <div className="banks">
                    <div className="bank">
                      <img src="/hexaxim/assets/logos/boa.png" alt="Bank of Africa" />
                      <div className="ow">
                        <span className="tg">المالك</span>
                        <span className="en" dir="ltr">
                          Othmane Benjelloun
                        </span>
                      </div>
                    </div>
                    <div className="bank">
                      <img src="/hexaxim/assets/logos/attijariwafa.png" alt="Attijariwafa Bank" />
                      <div className="ow">
                        <span className="tg">المالك</span>
                        <span className="en" dir="ltr">
                          Al Mada
                        </span>
                      </div>
                    </div>
                    <div className="bank">
                      <img src="/hexaxim/assets/logos/bcp.svg" alt="Banque Centrale Populaire" />
                      <div className="ow">
                        <span className="tg">المالك</span>
                        <span className="en" dir="ltr">
                          CIMR · MCMA · MAMDA · RCAR
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="branch b3">
                <div className="bhead">
                  <span className="en">Recipharm</span>
                </div>
                <div className="bbody">
                  <div className="banks">
                    <div className="bank">
                      <img src="/hexaxim/assets/logos/recipharm.png" alt="Recipharm" />
                    </div>
                  </div>
                  <div className="cap">
                    <b>شركة سويدية</b>
                    <br />
                    للتصنيع الدوائي واللقاحات <span className="en">(CDMO)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="conn">
          <div className="line"></div>
          <div className="arrow"></div>
          <div className="lbl">
            من هي <span className="en">MarBio</span>؟
          </div>
        </div>

        <section className="sec">
          <div className="sec-title">
            <div className="sec-num">3</div>
            <h2>
              مسار <span className="en" style={{ fontSize: '34px' }}>MarBio</span>
            </h2>
            <div className="hint">الاسم السابق ومصنع بنسليمان</div>
          </div>
          <div className="tl">
            <div className="rail"></div>
            <div className="steps">
              <div className="step">
                <div className="ico">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0E9B94"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="5" width="18" height="16" rx="3" />
                    <path d="M8 3v4M16 3v4M3 10h18" />
                  </svg>
                </div>
                <div className="date">يوليو 2021</div>
                <div className="txt">
                  التأسيس باسم <span className="en">Sensyo Pharmatech</span>
                </div>
              </div>
              <div className="step">
                <div className="ico">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1B4FA0"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 7h11l-3-3M20 17H9l3 3" />
                    <path d="M4 7v3M20 17v-3" />
                  </svg>
                </div>
                <div className="date">ماي 2023</div>
                <div className="txt">
                  تغيير الاسم إلى <span className="en">MarBio</span>
                </div>
              </div>
              <div className="step">
                <div className="ico">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C1272D"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21V10l6 4V10l6 4V4h6v17z" />
                    <path d="M7 21v-4M13 21v-4M19 21v-4" />
                  </svg>
                </div>
                <div className="date">Benslimane</div>
                <div className="txt">
                  مصنع اللقاحات بنسليمان
                  <br />
                  <span className="small">
                    يُدار ويُشغَّل من طرف <span className="en">MarBio</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="former">
              الاسم السابق: <span className="en">Sensyo Pharmatech</span> — تغيّر إلى{' '}
              <span className="en">MarBio</span> في ماي 2023
            </div>
          </div>
        </section>

        <div className="conn">
          <div className="line"></div>
          <div className="arrow"></div>
          <div className="lbl">
            بنية ملكية <span className="en">Sanofi</span>؟
          </div>
        </div>

        <section className="sec">
          <div className="sec-title">
            <div className="sec-num">4</div>
            <h2>
              بنية ملكية <span className="en" style={{ fontSize: '34px' }}>Sanofi</span>
            </h2>
            <div className="hint">أكبر المساهمين (أرقام تقريبية)</div>
          </div>
          <div className="own">
            <div className="root">
              <img src="/hexaxim/assets/logos/sanofi.svg" alt="" />
              &nbsp;
              <span className="en">Sanofi</span>
            </div>
            <div className="stem"></div>
            <div className="chips">
              <div className="chip">
                <div className="lb">
                  <img src="/hexaxim/assets/logos/blackrock.svg" alt="BlackRock" />
                </div>
                <div className="pct">≈ 7%</div>
                <div className="nm">BlackRock</div>
              </div>
              <div className="chip">
                <div className="lb">
                  <img src="/hexaxim/assets/logos/loreal.svg" alt="L'Oréal" />
                </div>
                <div className="pct">≈ 7%</div>
                <div className="nm">L&apos;Oréal</div>
              </div>
              <div className="chip">
                <div className="lb">
                  <img src="/hexaxim/assets/logos/vanguard.svg" alt="Vanguard" />
                </div>
                <div className="pct">≈ 3%</div>
                <div className="nm">Vanguard</div>
              </div>
              <div className="chip">
                <div className="lb">
                  <img src="/hexaxim/assets/logos/amundi_wordmark.svg" alt="Amundi" />
                </div>
                <div className="pct">≈ 3%</div>
                <div className="nm">Amundi</div>
              </div>
            </div>
            <div className="note">
              أكبر المساهمين المؤسسيين في <b className="en">Sanofi</b> — حسب آخر بيانات الملكية المعلنة
            </div>
          </div>
        </section>

        <footer>
          <div>
            المصادر: <span className="en" dir="ltr">Sanofi · MarBio · Mohammed VI Investment Fund</span> —
            أرقام تقريبية · رسم توضيحي
          </div>
          <div className="brand" dir="ltr">
            <span className="sq"></span>
            <a
              className="en"
              href="https://x.com/reda_lgaboni"
              target="_blank"
              rel="noopener"
            >
              <svg className="xlogo" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              @reda_lgaboni
            </a>
            <span>Made by</span>
          </div>
        </footer>
      </div>
    </div>
  )
}
