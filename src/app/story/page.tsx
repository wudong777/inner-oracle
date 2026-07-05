"use client";

import { motion } from "framer-motion";


const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.65, 0, 0.35, 1] as [number, number, number, number] },
  }),
};

export default function StoryPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-pad flex min-h-[90vh] items-center">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p
            className="mb-6 text-xs tracking-[0.3em] text-ink/40 uppercase"
            variants={fadeIn}
            custom={0}
          >
            品牌文化 · BRAND STORY
          </motion.p>
          <motion.h1
            className="font-display text-4xl leading-snug md:text-6xl lg:text-7xl"
            variants={fadeIn}
            custom={1}
          >
            你曾经是知道
            <br />
            怎么等一个人的。
          </motion.h1>
          <motion.p
            className="mt-8 max-w-xl mx-auto text-base md:text-lg text-ink/60 leading-relaxed"
            variants={fadeIn}
            custom={2}
          >
            你曾经不用把自己熬到筋疲力尽，就能闭上眼睛。
            <br />
            你曾经可以把一个念头从头想到尾，不被手机震碎。
          </motion.p>
        </motion.div>
      </section>

      {/* Chapter 1: The Problem */}
      <section className="section-pad flex min-h-[80vh] items-center border-t hairline">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.3fr_1fr]">
          <motion.p
            className="text-xs tracking-[0.28em] text-ink/40"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={0}
          >
            第一章
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="font-display text-3xl md:text-5xl leading-tight mb-8"
              variants={fadeIn}
              custom={1}
            >
              世界跑得太快了，
              <br />
              你跟到气喘。
            </motion.h2>
            <motion.div
              className="max-w-2xl space-y-5 text-base md:text-lg text-ink/60 leading-relaxed"
              variants={fadeIn}
              custom={2}
            >
              <p>
                现在连十分钟的视频都觉得长，要快进，要看评论，要同时刷另一个屏。
                你已经好几年没有认认真真看一团火了。
                你已经好几年没有让一段沉默说完它想说的话。
              </p>
              <p>
                你的大脑没有坏。它只是适应了——适应了一个奖励速度、惩罚停顿的世界。
                但适应是有代价的。那个代价叫做<span className="text-ink/80 font-semibold">认知性急躁</span>。
              </p>
              <p>
                它让你明明很累就是睡不着。它让你半夜脑子里跑马灯一样重播五年前的一次对话。
                它让你伸手去摸手机的时候，自己都不知道想摸什么。
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Chapter 2: The Philosophy */}
      <section className="section-pad flex min-h-[80vh] items-center border-t hairline">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.3fr_1fr]">
          <motion.p
            className="text-xs tracking-[0.28em] text-ink/40"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={0}
          >
            第二章
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="font-display text-3xl md:text-5xl leading-tight mb-8"
              variants={fadeIn}
              custom={1}
            >
              你不缺更好的答案。
              <br />
              你缺一个好觉。
            </motion.h2>
            <motion.div
              className="max-w-2xl space-y-5 text-base md:text-lg text-ink/60 leading-relaxed"
              variants={fadeIn}
              custom={2}
            >
              <p>
                我们不谈&ldquo;治愈&rdquo;。不替代心理咨询。不承诺修复你。
              </p>
              <p>
                INNER ORACLE 只做一件事，并且小心地做：
                在你和你的想法之间，站六个小时的岗，
                让你的大脑去做它本来就会做的事——愈合、休息、重启。
              </p>
              <p className="text-xl md:text-2xl text-ink/80 font-serif-sc leading-relaxed pt-4">
                「火焰是你花钱请来的守夜人。」
              </p>
              <p className="text-xs text-ink/30">—— 老吴，INNER ORACLE 创始人</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Chapter 3: The Seven Weights */}
      <section className="section-pad flex min-h-[80vh] items-center border-t hairline">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.3fr_1fr]">
          <motion.p
            className="text-xs tracking-[0.28em] text-ink/40"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={0}
          >
            第三章
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="font-display text-3xl md:text-5xl leading-tight mb-8"
              variants={fadeIn}
              custom={1}
            >
              说出来，
              <br />
              什么东西很重。
            </motion.h2>
            <motion.p
              className="text-base md:text-lg text-ink/60 mb-10 max-w-2xl leading-relaxed"
              variants={fadeIn}
              custom={2}
            >
              七根蜡烛。七种沉重。每个人都在扛着其中至少一种。
              你不用一次解决所有——今晚，只选一根。
            </motion.p>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl"
              variants={fadeIn}
              custom={3}
            >
              {[
                { emoji: "❤️", key: "爱", desc: "放不下的那个人" },
                { emoji: "💰", key: "丰盛", desc: "害怕不会来的转机" },
                { emoji: "🌿", key: "疗愈", desc: "还在疼的旧伤口" },
                { emoji: "✨", key: "清晰", desc: "看不透的选择" },
                { emoji: "🛡️", key: "守护", desc: "让你觉得不安全的事" },
                { emoji: "🌟", key: "显化", desc: "想要却不敢相信自己配得上" },
                { emoji: "🕊️", key: "平静", desc: "追了很久一直追不到的状态" },
              ].map((item) => (
                <motion.div
                  key={item.key}
                  className="border hairline rounded-xl p-5 hover:bg-ink/[0.02] transition-colors"
                  variants={fadeIn}
                >
                  <p className="text-2xl mb-2">{item.emoji}</p>
                  <p className="font-semibold text-base text-ink/80">{item.key}</p>
                  <p className="text-sm text-ink/40 mt-1">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Chapter 4: The Ritual */}
      <section className="section-pad flex min-h-[80vh] items-center border-t hairline">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.3fr_1fr]">
          <motion.p
            className="text-xs tracking-[0.28em] text-ink/40"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={0}
          >
            第四章
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="font-display text-3xl md:text-5xl leading-tight mb-8"
              variants={fadeIn}
              custom={1}
            >
              7 天仪式
            </motion.h2>
            <motion.div
              className="max-w-2xl space-y-6"
              variants={fadeIn}
              custom={2}
            >
              {[
                { step: "01", text: "写下让你沉重的那件事。选那根蜡烛。" },
                { step: "02", text: "点燃它。对着火焰说出你的问题。" },
                { step: "03", text: "听到那声&ldquo;叮&rdquo;。守夜人上班了。" },
                { step: "04", text: "安心睡。蜡烛替你醒着——六小时，一个完整的夜。" },
                { step: "05", text: "醒来。把卡片捂在掌心。看它慢慢浮现。" },
                { step: "06", text: "阅读。感受。呼吸。" },
                { step: "07", text: "你把昨晚扛过去了。这就是答案。" },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  className="flex gap-6 items-start border-b hairline pb-6"
                  variants={fadeIn}
                  custom={i}
                >
                  <span className="font-display text-2xl text-ink/30 tabular-nums min-w-[2.5rem]">
                    {item.step}
                  </span>
                  <p className="text-base md:text-lg text-ink/70 leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Chapter 5: The Belief */}
      <section className="section-pad flex min-h-[80vh] items-center border-t hairline">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.3fr_1fr]">
          <motion.p
            className="text-xs tracking-[0.28em] text-ink/40"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={0}
          >
            第五章
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="font-display text-3xl md:text-5xl leading-tight mb-8"
              variants={fadeIn}
              custom={1}
            >
              我们相信什么
            </motion.h2>
            <motion.div
              className="max-w-2xl space-y-5 text-base md:text-lg text-ink/60 leading-relaxed"
              variants={fadeIn}
              custom={2}
            >
              <div className="space-y-4 pt-2">
                {[
                  "商业不应该是催促。应该是信任，让用户自己走到门口。",
                  "最好的产品不替你做决定——它给你一个安全的空间，让你自己做决定。",
                  "六小时的完整睡眠，比任何冥想App都更能改变你看世界的方式。",
                  "仪式感不是营销话术。是对时间和注意力最起码的尊重。",
                  "一根蜡烛不够改变人生。但七个夜晚的完整睡眠，可能够。",
                ].map((belief, i) => (
                  <motion.div
                    key={i}
                    className="flex gap-4 items-start"
                    variants={fadeIn}
                    custom={2 + i * 0.1}
                  >
                    <span className="text-ink/25 mt-1">—</span>
                    <p>{belief}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Closing */}
      <section className="section-pad flex min-h-[60vh] items-center border-t hairline">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            className="font-display text-2xl md:text-4xl leading-relaxed text-ink/70"
            variants={fadeIn}
            custom={0}
          >
            一个夜晚。一团火焰。一个问题。
          </motion.p>
          <motion.p
            className="font-display text-2xl md:text-4xl leading-relaxed text-ink/70 mt-4"
            variants={fadeIn}
            custom={1}
          >
            七根蜡烛。七个夜晚。
          </motion.p>
          <motion.p
            className="font-display text-2xl md:text-4xl leading-relaxed text-ink/70 mt-4"
            variants={fadeIn}
            custom={2}
          >
            用一生的时间，
            <br />
            重新学习相信沉默。
          </motion.p>
          <motion.p
            className="mt-12 text-xs tracking-[0.3em] text-ink/30 uppercase"
            variants={fadeIn}
            custom={3}
          >
            INNER ORACLE · 内在神谕
          </motion.p>
        </motion.div>
      </section>
    </main>
  );
}
