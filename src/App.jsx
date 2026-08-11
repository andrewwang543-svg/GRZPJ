import { useEffect, useRef } from "react";
import { ArrowUpRight, Heart, Mail, MessageCircle, Menu, Play, Send, Star } from "lucide-react";

const navItems = ["首页", "作品", "关于", "联系"];

const yuHeweiFeatureUrl =
  "https://www.bilibili.com/video/BV14p4y177hc/?sharesource_=copy_web&vdsource=6b882d51afbb66a358ab8821904dda_08";

const standardEditingRoles = [
  { label: "拍摄" },
  { label: "策划", highlighted: true },
  { label: "剪辑", highlighted: true },
  { label: "包装" },
];

const interviewEditingRoles = [
  { label: "拍摄", highlighted: true },
  { label: "采访", highlighted: true },
  { label: "策划", highlighted: true },
  { label: "剪辑", highlighted: true },
  { label: "包装" },
];

const workSections = [
  {
    title: "工作剪辑作品",
    label: "Editing Reel",
    description: "影像编辑、采访剪辑、短片包装与跨平台传播项目。",
    works: [
      {
        title: "电影《坚如磐石》于和伟角色特辑",
        type: "视频剪辑 / 电影特辑",
        href: yuHeweiFeatureUrl,
        cover: "/images/under-the-light-yu-hewei.png",
        roles: standardEditingRoles,
      },
      {
        title: "《坚如磐石》雷佳音角色特辑",
        type: "视频剪辑 / 电影特辑",
        href: "https://www.bilibili.com/video/BV1Pj41127Gr/?share_source=copy_web&vd_source=6b882d51afbb66a358ab8821904dda08",
        cover: "/images/under-the-light-lei-jiayin.png",
        roles: standardEditingRoles,
      },
      {
        title: "《深海》配乐幕后故事",
        type: "视频剪辑 / 电影特辑",
        href: "https://www.bilibili.com/video/BV1Sv4y1C7T8/?share_source=copy_web&vd_source=6b882d51afbb66a358ab8821904dda08",
        cover: "/images/deep-sea-music-story.png",
        roles: standardEditingRoles,
      },
      {
        title: "《茶阿二中》配音幕后故事",
        type: "视频剪辑 / 电影特辑",
        href: "https://www.bilibili.com/video/BV1mW4y1S74Z/?share_source=copy_web&vd_source=6b882d51afbb66a358ab8821904dda08",
        cover: "/images/changan-voice-story.png",
        roles: interviewEditingRoles,
      },
      {
        title: "《茶阿二中》导演故事",
        type: "视频剪辑 / 电影特辑",
        href: "https://www.bilibili.com/video/BV1ij411d7tc/?share_source=copy_web&vd_source=6b882d51afbb66a358ab8821904dda08",
        cover: "/images/changan-director-story.png",
        roles: interviewEditingRoles,
      },
      {
        title: "《扫黑·决不放弃》故事特辑",
        type: "视频剪辑 / 电影特辑",
        href: "https://www.bilibili.com/video/BV1Ww4m1Q7J6/?share_source=copy_web&vd_source=6b882d51afbb66a358ab8821904dda08",
        cover: "/images/walk-the-line-story-feature.png",
        roles: standardEditingRoles,
      },
      {
        title: "《扫黑·决不放弃》今日说“黑”特辑",
        type: "视频剪辑 / 电影特辑",
        href: "https://www.bilibili.com/video/BV19J4m1M7jm/?share_source=copy_web&vd_source=6b882d51afbb66a358ab8821904dda08",
        cover: "/images/walk-the-line-hei-feature.png",
        roles: standardEditingRoles,
      },
    ],
  },
  {
    title: "个人自媒体",
    label: "Personal Media",
    description: "个人选题、社媒内容和栏目化表达，展示持续创作能力。",
    account: {
      name: "抽象科普",
      avatar: "/images/abstract-science-logo.png",
      href: "https://v.douyin.com/xh54heTzm_k/",
      stats: [
        { label: "运营时长", value: "1.5年" },
        { label: "粉丝", value: "120万+" },
        { label: "发布作品", value: "82条" },
        { label: "播放破千万作品", value: "8条" },
      ],
      note: "所有数据统计截止2026.8",
    },
    works: [
      {
        title: "抽象科普作品：四季变化",
        href: "https://v.douyin.com/_6uwPPZGOIk/",
        cover: "/images/abstract-science-protein.jpg",
        coverMode: "fill",
        metrics: [
          { label: "点赞", value: "372.2万", kind: "like" },
          { label: "评论", value: "11.7万", kind: "comment" },
          { label: "收藏", value: "39.4万", kind: "save" },
        ],
      },
      {
        title: "抽象科普作品：潮汐现象",
        href: "https://v.douyin.com/bWXIpN1MdTY/",
        cover: "/images/abstract-science-tide.jpg",
        coverMode: "fill",
        metrics: [
          { label: "点赞", value: "36.2万", kind: "like" },
          { label: "评论", value: "5038", kind: "comment" },
          { label: "收藏", value: "9.0万", kind: "save" },
        ],
      },
      {
        title: "抽象科普作品：橡皮和尺子",
        href: "https://v.douyin.com/8-6av8HNV7U/",
        cover: "/images/abstract-science-rubber-ruler.png",
        coverMode: "fill",
        metrics: [
          { label: "点赞", value: "31.9万", kind: "like" },
          { label: "评论", value: "5680", kind: "comment" },
          { label: "收藏", value: "3.9万", kind: "save" },
        ],
      },
      {
        title: "抽象科普作品：煤炭",
        href: "https://v.douyin.com/G1ezjU8f0sE/",
        cover: "/images/abstract-science-coal.jpg",
        coverMode: "fill",
        metrics: [
          { label: "点赞", value: "18.1万", kind: "like" },
          { label: "评论", value: "2043", kind: "comment" },
          { label: "收藏", value: "3.7万", kind: "save" },
        ],
      },
      {
        title: "抽象科普作品：驱动蛋白",
        href: "https://v.douyin.com/FTf8-aDuu1c/",
        cover: "/images/abstract-science-seasons.jpg",
        coverMode: "fill",
        metrics: [
          { label: "点赞", value: "16.3万", kind: "like" },
          { label: "评论", value: "3170", kind: "comment" },
          { label: "收藏", value: "4.0万", kind: "save" },
        ],
      },
    ],
  },
  {
    title: "数据新闻作品",
    label: "Data Journalism",
    description: "以数据采集、清洗、可视化和叙事结构为核心的报道作品。",
    display: "links",
    works: [
      {
        title: "《墓地销售；我只是卖产品的人》",
        href: "https://readymag.website/u3495143389/cemetery-salespeople/",
      },
      {
        title: "《人类开始与病毒相伴的那一年——全球疫情下人们的行动与感受》",
        href: "https://m.thepaper.cn/newsDetail_forward_16776175",
      },
      {
        title: "《新冠肺炎周年记 | 阴霾下的机翼：航空业的自救与等待》",
        href: "https://mp.weixin.qq.com/s/Og5mmzgiSK-FxtRiSM_tPQ",
      },
    ],
  },
];

function Header() {
  return (
    <header className="site-header" aria-label="主导航">
      <a className="brand" href="#top" aria-label="返回首页">
        <span className="brand-mark">AW</span>
        <span className="brand-name">Portfolio</span>
      </a>
      <nav className="nav-links">
        {navItems.map((item) => (
          <a key={item} href={item === "联系" ? "#contact" : item === "作品" ? "#works" : "#top"}>
            {item}
          </a>
        ))}
      </nav>
      <a className="contact-button" href="mailto:hello@example.com">
        <Mail size={18} />
        联系我
      </a>
      <button className="menu-button" aria-label="打开菜单">
        <Menu size={22} />
      </button>
    </header>
  );
}

function useGeneratedHeroVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !window.MediaRecorder || !HTMLCanvasElement.prototype.captureStream) {
      return;
    }

    let animationFrame = 0;
    let objectUrl = "";
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = 1280;
    canvas.height = 720;

    const drawFrame = (frame = 0) => {
      if (!context) return;

      const width = canvas.width;
      const height = canvas.height;
      const time = frame / 60;
      const gradient = context.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#281812");
      gradient.addColorStop(0.42, "#8f5238");
      gradient.addColorStop(1, "#18120f");
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      const light = context.createRadialGradient(
        width * (0.66 + Math.sin(time * 0.42) * 0.04),
        height * (0.35 + Math.cos(time * 0.36) * 0.05),
        0,
        width * 0.65,
        height * 0.38,
        width * 0.72
      );
      light.addColorStop(0, "rgba(242, 173, 103, 0.62)");
      light.addColorStop(0.46, "rgba(172, 94, 58, 0.23)");
      light.addColorStop(1, "rgba(36, 23, 17, 0)");
      context.fillStyle = light;
      context.fillRect(0, 0, width, height);

      context.lineCap = "round";
      for (let line = 0; line < 7; line += 1) {
        context.beginPath();
        context.strokeStyle = `rgba(255, 220, 178, ${0.07 + line * 0.012})`;
        context.lineWidth = 16 + line * 5;
        const y = height * (0.2 + line * 0.105);
        context.moveTo(-100, y);
        for (let x = -100; x <= width + 140; x += 80) {
          const wave = Math.sin(x * 0.006 + time * 0.9 + line) * (34 + line * 3);
          context.lineTo(x, y + wave + Math.cos(time * 0.4 + line) * 18);
        }
        context.stroke();
      }

      animationFrame = requestAnimationFrame(() => drawFrame(frame + 1));
    };

    drawFrame();

    const stream = canvas.captureStream(30);
    const mimeType = MediaRecorder.isTypeSupported("video/webm;codecs=vp9")
      ? "video/webm;codecs=vp9"
      : "video/webm";
    const recorder = new MediaRecorder(stream, { mimeType });
    const chunks = [];

    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        chunks.push(event.data);
      }
    };

    recorder.onstop = () => {
      objectUrl = URL.createObjectURL(new Blob(chunks, { type: mimeType }));
      video.src = objectUrl;
      video.play().catch(() => {});
      cancelAnimationFrame(animationFrame);
    };

    recorder.start();
    const stopTimer = window.setTimeout(() => recorder.stop(), 3600);

    return () => {
      window.clearTimeout(stopTimer);
      cancelAnimationFrame(animationFrame);
      stream.getTracks().forEach((track) => track.stop());
      if (recorder.state !== "inactive") {
        recorder.stop();
      }
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, []);

  return videoRef;
}

function Hero() {
  const videoRef = useGeneratedHeroVideo();

  return (
    <section className="hero" id="top">
      <video ref={videoRef} className="hero-video" autoPlay muted loop playsInline poster="/hero-poster.svg" />
      <div className="hero-shade" />
      <Header />
      <div className="hero-inner">
        <p className="eyebrow">Journalism / Editing / Independent Media</p>
        <h1>
          用清晰的叙事，让复杂信息<span className="nowrap">被看见。</span>
        </h1>
        <div className="hero-lower">
          <p>
            我关注数据、影像与内容传播之间的连接。这里收录我的数据新闻、工作剪辑与个人自媒体作品，
            帮助雇主快速了解我的选题能力、执行质量和视觉表达。
          </p>
          <a className="primary-link" href="#works">
            <Play size={18} />
            查看作品
          </a>
        </div>
      </div>
    </section>
  );
}

function MetricIcon({ kind }) {
  if (kind === "like") {
    return <Heart size={17} fill="currentColor" strokeWidth={2.5} />;
  }

  if (kind === "comment") {
    return <MessageCircle size={17} fill="currentColor" strokeWidth={2.5} />;
  }

  return <Star size={17} fill="currentColor" strokeWidth={2.5} />;
}

function Works() {
  return (
    <main className="works" id="works">
      <div className="section-heading">
        <p className="eyebrow">Selected Work</p>
        <h2>主要作品</h2>
      </div>
      <div className="work-sections">
        {workSections.map((section, sectionIndex) => (
          <section className="work-category" key={section.title} aria-labelledby={`work-title-${sectionIndex}`}>
            <div className="category-heading">
              <div>
                <p className="card-label">{section.label}</p>
                <h3 id={`work-title-${sectionIndex}`}>{section.title}</h3>
              </div>
              <p>{section.description}</p>
            </div>
            {section.account ? (
              <a className="account-card" href={section.account.href} target="_blank" rel="noreferrer">
                <img src={section.account.avatar} alt={`${section.account.name}账号头像`} />
                <div className="account-copy">
                  <p className="account-label">Creator Account</p>
                  <h4>{section.account.name}</h4>
                  <dl>
                    {section.account.stats.map((stat) => (
                      <div key={stat.label}>
                        <dt>{stat.label}</dt>
                        <dd>{stat.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <small>{section.account.note}</small>
                </div>
                <span className="account-action" aria-label="打开账号主页">
                  <ArrowUpRight size={22} />
                </span>
              </a>
            ) : null}
            {section.account ? <h4 className="featured-title">代表作品</h4> : null}
            {section.display === "links" ? (
              <div className="data-link-list">
                {section.works.map((work, workIndex) => (
                  <a className="data-link-item" href={work.href} target="_blank" rel="noreferrer" key={work.title}>
                    <span>{String(workIndex + 1).padStart(2, "0")}</span>
                    <strong>{work.title}</strong>
                    <ArrowUpRight size={22} />
                  </a>
                ))}
              </div>
            ) : (
              <div className={section.account ? "project-grid media-project-grid" : "project-grid"}>
                {section.works.map((work, workIndex) => (
                  <article className={work.metrics ? "project-card metric-card" : "project-card"} key={`${section.title}-${workIndex}`}>
                    <div
                      className={[
                        "project-cover",
                        work.cover ? "has-image" : "",
                        work.coverMode === "contain" ? "contain-image" : "",
                        work.coverMode === "fill" ? "fill-image" : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      aria-label={`${work.title}封面`}
                    >
                      {work.cover ? <img src={work.cover} alt={`${work.title}封面`} /> : null}
                      {work.coverMode === "contain" || work.coverMode === "fill" ? null : (
                        <span>{String(workIndex + 1).padStart(2, "0")}</span>
                      )}
                    </div>
                    <div className="project-copy">
                      {work.type ? <p>{work.type}</p> : null}
                      {work.metrics ? (
                        <dl className="project-metrics" aria-label={`${work.title}作品数据`}>
                          {work.metrics.map((metric) => (
                            <div className={`metric-item ${metric.kind}`} key={metric.label}>
                              <dt>
                                <MetricIcon kind={metric.kind} />
                                <span>{metric.label}</span>
                              </dt>
                              <dd>{metric.value}</dd>
                            </div>
                          ))}
                        </dl>
                      ) : (
                        <h4>{work.title}</h4>
                      )}
                      {work.roles ? (
                        <div className="project-roles" aria-label="参与工作">
                          <span className="role-caption">参与工作</span>
                          <div className="role-list">
                            {work.roles.map((role) => (
                              <span className={role.highlighted ? "role-chip highlighted" : "role-chip"} key={role.label}>
                                {role.label}
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </div>
                    <a
                      className="project-link"
                      href={work.href}
                      target={work.href.startsWith("http") ? "_blank" : undefined}
                      rel={work.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      <span>查看作品</span>
                      <ArrowUpRight size={18} />
                    </a>
                  </article>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <p className="eyebrow">Contact</p>
        <h2>如果我的作品与你的团队需求契合，欢迎联系我。</h2>
        <div className="contact-actions">
          <a className="primary-link dark" href="mailto:hello@example.com">
            <Send size={18} />
            hello@example.com
          </a>
          <a className="text-link" href="tel:+8613800000000">
            +86 138 0000 0000
          </a>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Hero />
      <Works />
      <Contact />
    </>
  );
}
