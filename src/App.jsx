import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Heart, MessageCircle, Star } from "lucide-react";

const navItems = ["首页", "作品"];

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
    featuredWorks: [
      {
        title: "《坚如磐石》于和伟角色特辑",
        type: "视频剪辑 / 电影特辑",
        href: yuHeweiFeatureUrl,
        cover: "/images/under-the-light-yu-hewei-new.png",
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
    ],
    works: [
      {
        title: "《坚如磐石》雷佳音角色特辑",
        type: "视频剪辑 / 电影特辑",
        href: "https://www.bilibili.com/video/BV1Pj41127Gr/?share_source=copy_web&vd_source=6b882d51afbb66a358ab8821904dda08",
        cover: "/images/under-the-light-lei-jiayin.png",
        roles: standardEditingRoles,
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
    account: {
      name: "抽象科普",
      avatar: "/images/abstract-science-logo.png",
      href: "https://v.douyin.com/xh54heTzm_k/",
      stats: [
        { label: "粉丝", value: "120万+" },
        { label: "播放破千万作品", value: "8条" },
        { label: "运营时长", value: "1.5年" },
        { label: "发布作品", value: "82条" },
      ],
      type: "AI科普自媒体",
      note: "所有数据统计截止2026.8",
    },
    works: [
      {
        title: "抽象科普作品：四季变化",
        href: "https://v.douyin.com/FTf8-aDuu1c/",
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
        href: "https://v.douyin.com/_6uwPPZGOIk/",
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
      <nav className="nav-links">
        {navItems.map((item) => (
          <a key={item} href={item === "作品" ? "#works" : "#top"}>
            {item}
          </a>
        ))}
      </nav>
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
      gradient.addColorStop(0, "#160f0d");
      gradient.addColorStop(0.46, "#75402b");
      gradient.addColorStop(1, "#120e0d");
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

      for (let glow = 0; glow < 5; glow += 1) {
        const glowX = width * (0.14 + glow * 0.2) + Math.sin(time * (0.18 + glow * 0.03) + glow) * 90;
        const glowY = height * (0.16 + (glow % 3) * 0.28) + Math.cos(time * 0.22 + glow) * 46;
        const radius = 130 + glow * 48;
        const bokeh = context.createRadialGradient(glowX, glowY, 0, glowX, glowY, radius);
        bokeh.addColorStop(0, glow % 2 ? "rgba(232, 159, 75, 0.09)" : "rgba(185, 54, 37, 0.07)");
        bokeh.addColorStop(1, "rgba(0, 0, 0, 0)");
        context.fillStyle = bokeh;
        context.fillRect(glowX - radius, glowY - radius, radius * 2, radius * 2);
      }

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

      context.fillStyle = "rgba(255, 234, 204, 0.045)";
      for (let grain = 0; grain < 150; grain += 1) {
        const grainX = (Math.sin(grain * 35.7 + time * 0.08) * 0.5 + 0.5) * width;
        const grainY = (Math.sin(grain * 79.3 + time * 0.05) * 0.5 + 0.5) * height;
        context.fillRect(grainX, grainY, 1, 1);
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

function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -24px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function Hero() {
  const videoRef = useGeneratedHeroVideo();

  return (
    <section className="hero" id="top">
      <video ref={videoRef} className="hero-video" autoPlay muted loop playsInline poster="/hero-poster.svg" />
      <div className="hero-shade" />
      <Header />
      <div className="hero-inner">
        <p className="hero-signature">Andrew Wang</p>
        <h1>作品集</h1>
        <div className="hero-lower">
          <p>您好，我是Andrew。这里收录了我过往在工作和实践中积累的一些作品，帮助您快速了解我的能力。</p>
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

function ProjectRoles({ roles }) {
  if (!roles) return null;

  return (
    <div className="project-roles" aria-label="参与工作">
      <span className="role-caption">参与工作</span>
      <div className="role-list">
        {roles.map((role) => (
          <span className={role.highlighted ? "role-chip highlighted" : "role-chip"} key={role.label}>
            {role.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function WorkCard({ work, index, compact = false }) {
  return (
    <article
      className={`${work.metrics ? "project-card metric-card" : "project-card"} reveal${compact ? " compact-card" : ""}`}
      style={{ "--reveal-delay": `${index * 70}ms` }}
    >
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
        <ProjectRoles roles={work.roles} />
      </div>
      <a className="project-link" href={work.href} target="_blank" rel="noreferrer">
        <span>查看作品</span>
        <ArrowUpRight size={18} />
      </a>
    </article>
  );
}

function FeaturedRail({ works }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveFromWheel = (event) => {
    if (Math.abs(event.deltaX) < 4 && Math.abs(event.deltaY) < 4) return;
    event.preventDefault();
    const direction = event.deltaX || event.deltaY;
    setActiveIndex((currentIndex) => (direction > 0 ? (currentIndex + 1) % works.length : (currentIndex - 1 + works.length) % works.length));
  };

  return (
    <div className="featured-rail reveal" onWheel={updateActiveFromWheel} aria-label="主推工作剪辑作品">
      {works.map((work, index) => {
        const isActive = activeIndex === index;

        return (
          <article
            className={`featured-panel${isActive ? " is-active" : ""}`}
            key={work.title}
            onMouseEnter={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
          >
            <img src={work.cover} alt={`${work.title}封面`} />
            <div className="featured-panel-shade" />
            <div className="featured-copy">
              <p>{work.type}</p>
              <h4>{work.title}</h4>
              <ProjectRoles roles={work.roles} />
              <a className="featured-link" href={work.href} target="_blank" rel="noreferrer">
                <span>查看作品</span>
                <ArrowUpRight size={18} />
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function Works() {
  return (
    <main className="works" id="works">
      <div className="section-heading reveal">
        <p className="eyebrow">Selected Work</p>
        <h2>主要作品</h2>
      </div>
      <div className="work-sections">
        {workSections.map((section, sectionIndex) => (
          <section className="work-category reveal" key={section.title} aria-labelledby={`work-title-${sectionIndex}`}>
            <div className="category-heading">
              <div>
                <p className="card-label">{section.label}</p>
                <h3 id={`work-title-${sectionIndex}`}>{section.title}</h3>
              </div>
            </div>
            {section.account ? (
              <a className="account-card" href={section.account.href} target="_blank" rel="noreferrer">
                <img src={section.account.avatar} alt={`${section.account.name}账号头像`} />
                <div className="account-copy">
                  <p className="account-label">{section.account.type}</p>
                  <h4>{section.account.name}</h4>
                  <dl>
                    {section.account.stats.map((stat, statIndex) => (
                      <div className={statIndex < 2 ? "account-stat primary-stat" : "account-stat"} key={stat.label}>
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
            {section.featuredWorks ? (
              <>
                <FeaturedRail works={section.featuredWorks} />
                <div className="project-grid editing-secondary-grid">
                  {section.works.map((work, workIndex) => (
                    <WorkCard work={work} index={workIndex} key={`${section.title}-${work.title}`} compact />
                  ))}
                </div>
              </>
            ) : section.display === "links" ? (
              <div className="data-link-list">
                {section.works.map((work, workIndex) => (
                  <a
                    className="data-link-item reveal"
                    href={work.href}
                    target="_blank"
                    rel="noreferrer"
                    key={work.title}
                    style={{ "--reveal-delay": `${workIndex * 70}ms` }}
                  >
                    <span>{String(workIndex + 1).padStart(2, "0")}</span>
                    <strong>{work.title}</strong>
                    <ArrowUpRight size={22} />
                  </a>
                ))}
              </div>
            ) : (
              <div className={section.account ? "project-grid media-project-grid" : "project-grid"}>
                {section.works.map((work, workIndex) => (
                  <WorkCard work={work} index={workIndex} key={`${section.title}-${work.title}`} />
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}

export default function App() {
  useScrollReveal();

  return (
    <>
      <Hero />
      <Works />
    </>
  );
}
