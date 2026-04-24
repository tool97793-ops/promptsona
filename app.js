const TYPES = {
  A: {
    hook: "Ah?",
    name: "啊？型选手",
    image: "./assets/generated/type-a-ah.webp",
    keywords: "慢半拍 / 真诚卡顿 / 在线懵圈",
    quote: "世界在 2 倍速狂奔，你还在问刚才那句啥意思。",
    desc: "别人聊天靠反应，你聊天靠刷新。上一句刚理解，下一句已经过期，群聊对你来说像高铁站广播，听见了，但没完全听懂。优点是很少装懂，疑惑写在脸上，真诚得像刚通网。副作用是信息一多，大脑立刻弹出“当前页面无响应”。",
    ai: "让 AI 把复杂话翻译成人话，别上来就让它输出万字长文，你俩都会累。",
    aiPick: "ChatGPT。适合你这种需要“把人话再翻译成人话”的用户，能一步一步解释，也比较能接住追问。",
    friends: ["P 汇报型人格", "Q 十万个为什么", "S 社交显眼包"],
    lovers: ["B 班味老板", "V 精致讲究人", "W 天选打工人"],
    chemistry: ["J 互联网判官", "U 上头冲锋队", "Z 能量清零者"],
  },
  B: {
    hook: "Boss",
    name: "班味老板",
    image: "./assets/generated/type-b-boss.webp",
    keywords: "安排 / 闭环 / 我补充两点",
    quote: "人还没升职，班味已经提前转正。",
    desc: "你身上有股提前上岸的管理层气质。饭还没吃，分工已经排完；电影还没看，观后复盘模板已经在心里打开。优点是关键时刻能控场，混乱局面里自带会议纪要。副作用是生活到你手里容易变成项目，朋友聚会被你开成低配季度会。",
    ai: "让 AI 拆任务、写通知、做流程。少让它帮你给朋友排 OKR，友情经不起这个。",
    aiPick: "Notion AI 或飞书妙记。你适合能整理文档、拆任务、沉淀流程的 AI，毕竟你的灵魂离不开“同步一下进展”。",
    friends: ["P 汇报型人格", "H 招兵买马人", "W 天选打工人"],
    lovers: ["O 都行都可以", "A 啊？型选手", "Z 能量清零者"],
    chemistry: ["F 摸鱼圣体", "U 上头冲锋队", "J 互联网判官"],
  },
  C: {
    hook: "Copy",
    name: "复制粘贴侠",
    image: "./assets/generated/type-c-copy.webp",
    keywords: "复用 / 模板 / 交差美学",
    quote: "人类文明进步靠传承，你的工作进度靠复制。",
    desc: "你的创作流程很环保：旧瓶装新酒，旧文改新名，旧方案换个封面继续发光。原创也行，主要看截止时间给不给脸。优点是效率高，知道“完成”比“完美”更能救命。副作用是复制得太丝滑，偶尔会把上一家公司的名字也带上。",
    ai: "让 AI 改写、润色、套格式、生成初稿。记得检查称呼，别把“尊敬的张总”发给李总。",
    aiPick: "Kimi 或通义千问。长文总结、改写、套模板比较顺手，适合你把旧材料洗成“看起来刚出炉”。",
    friends: ["F 摸鱼圣体", "W 天选打工人", "P 汇报型人格"],
    lovers: ["V 精致讲究人", "O 都行都可以", "M 搞钱脑袋"],
    chemistry: ["Q 十万个为什么", "J 互联网判官", "I 脑洞批发商"],
  },
  D: {
    hook: "Drama",
    name: "加戏大师",
    image: "./assets/generated/type-d-drama.webp",
    keywords: "脑补 / 戏多 / 内心剧场",
    quote: "现实给你一粒米，你能脑补一锅粥。",
    desc: "别人发一句“在吗”，你脑内直接上线 12 集都市悬疑。对方可能只是问个文件，你已经把关系走向、语气变化、最终结局全盘演完。优点是感受力强，细节雷达灵得吓人。副作用是证据还没来，剧本已经写到大结局。",
    ai: "让 AI 帮你把事实、猜测、情绪分三栏放好。先别急着给自己颁最佳编剧。",
    aiPick: "Claude。适合整理复杂情绪和长段上下文，能陪你把脑内连续剧剪成事实版短片。",
    friends: ["E 半夜破防人", "S 社交显眼包", "G 吃瓜群众"],
    lovers: ["Q 十万个为什么", "V 精致讲究人", "O 都行都可以"],
    chemistry: ["J 互联网判官", "B 班味老板", "R 人生重开党"],
  },
  E: {
    hook: "Emo",
    name: "半夜破防人",
    image: "./assets/generated/type-e-emo.webp",
    keywords: "白天营业 / 夜晚裂开 / 情绪复盘",
    quote: "白天情绪稳定，晚上精神拆迁。",
    desc: "白天笑得像没事人，晚上手机一放，人生错题本自动翻页。从三年前一句话，到今天一个表情包，全能拿出来重新审判。优点是细腻、敏感，能从空气湿度里读出情绪变化。副作用是反思能力过强，容易把自己审到无期。",
    ai: "让 AI 帮你梳理情绪可以，别半夜让它陪你复盘人生，越盘越精神。",
    aiPick: "Pi 或 ChatGPT 语音模式。你需要的是低压陪聊和温和梳理，不是半夜把人生开成审判大会。",
    friends: ["D 加戏大师", "Z 能量清零者", "O 都行都可以"],
    lovers: ["W 天选打工人", "V 精致讲究人", "Q 十万个为什么"],
    chemistry: ["T 嘴强王者", "J 互联网判官", "U 上头冲锋队"],
  },
  F: {
    hook: "Fish",
    name: "摸鱼圣体",
    image: "./assets/generated/type-f-fish.webp",
    keywords: "低功耗 / 假装在线 / 精神省电",
    quote: "人在工位，心在免打扰。",
    desc: "别人上班燃烧自己，你上班研究怎么减少损耗。电脑亮着，表情稳着，灵魂已经在后台挂起。优点是很会判断什么事值得用力，什么事只配应付。副作用是鱼摸久了，连鱼都开始喊你前辈。",
    ai: "让 AI 写周报、总结会议、润色废话、把三句话扩成一页纸。",
    aiPick: "豆包或文心一言。上手快、改写快、日常办公够用，适合你用最少脑力制造“我很在线”的证据。",
    friends: ["C 复制粘贴侠", "L 懒得动星人", "Z 能量清零者"],
    lovers: ["W 天选打工人", "O 都行都可以", "V 精致讲究人"],
    chemistry: ["B 班味老板", "K 指标背锅侠", "M 搞钱脑袋"],
  },
  G: {
    hook: "Gua",
    name: "吃瓜群众",
    image: "./assets/generated/type-g-gua.webp",
    keywords: "围观 / 雷达 / 已读不回但全知道",
    quote: "你没参战，但战报是你整理的。",
    desc: "你对热闹有天然定位系统。群里刚飘过一句“我说个事”，你已经端好小板凳。嘴上不参与，截图比谁都完整。优点是信息灵，嗅觉准，能在碎片里拼出完整八卦链。副作用是主线任务没动，支线剧情全通关。",
    ai: "让 AI 梳理时间线、总结争议点、提炼各方观点。吃瓜也要吃得有结构。",
    aiPick: "Perplexity 或秘塔 AI 搜索。适合查来源、补背景、理时间线，让你吃瓜吃出信息差。",
    friends: ["J 互联网判官", "D 加戏大师", "S 社交显眼包"],
    lovers: ["H 招兵买马人", "N 随机路人甲", "P 汇报型人格"],
    chemistry: ["Q 十万个为什么", "Y 好好好机器", "E 半夜破防人"],
  },
  H: {
    hook: "HR",
    name: "招兵买马人",
    image: "./assets/generated/type-h-hr.webp",
    keywords: "识人 / 组局 / 人脉盘点",
    quote: "你看谁都像隐藏简历。",
    desc: "你看人自带岗位匹配系统。这个能控场，那个会写稿，还有一个适合救火，先拉群再说。优点是会组队，会协调，能把散兵游勇凑成临时正规军。副作用是朋友聚会到你手里，容易变成人才储备会。",
    ai: "让 AI 写 JD、设计话术、拆角色、做沟通方案。别让它帮你给朋友打绩效。",
    aiPick: "ChatGPT 或飞书智能助手。适合写 JD、面试问题、沟通话术，也能帮你把“找人干活”包装成“团队协作”。",
    friends: ["B 班味老板", "G 吃瓜群众", "P 汇报型人格"],
    lovers: ["S 社交显眼包", "M 搞钱脑袋", "A 啊？型选手"],
    chemistry: ["N 随机路人甲", "F 摸鱼圣体", "J 互联网判官"],
  },
  I: {
    hook: "Idea",
    name: "脑洞批发商",
    image: "./assets/generated/type-i-idea.webp",
    keywords: "想法爆仓 / 开题很快 / 落地看缘分",
    quote: "脑洞很忙，双手失业。",
    desc: "你的脑子像义乌小商品市场，什么点子都有，质量参差但数量管够。上午想做账号，下午想做品牌，晚上已经给咖啡馆起好名。优点是不怕空白，灵感来得像弹窗广告。副作用是执行力常年被点子挤到墙角。",
    ai: "让 AI 帮你筛想法、排优先级、砍掉 80% 看起来很香但根本没空做的东西。",
    aiPick: "ChatGPT 或 Midjourney。一个帮你发散和筛选，一个把脑洞变视觉，适合你这种灵感库存爆仓的人。",
    friends: ["U 上头冲锋队", "S 社交显眼包", "M 搞钱脑袋"],
    lovers: ["P 汇报型人格", "V 精致讲究人", "R 人生重开党"],
    chemistry: ["C 复制粘贴侠", "B 班味老板", "L 懒得动星人"],
  },
  J: {
    hook: "Judge",
    name: "互联网判官",
    image: "./assets/generated/type-j-judge.webp",
    keywords: "锐评 / 审判 / 心里有弹幕",
    quote: "嘴上没说话，心里已开庭。",
    desc: "你发言不一定多，心里判得很快。这个标题用力过猛，那个观点站不住脚，这人一开口就有股熟悉的味儿。优点是判断快，抓问题准，雷达专扫离谱。副作用是看什么都能看出毛病，快乐被你亲手打了八折。",
    ai: "让 AI 做对比、找漏洞、查证、优化表达。你负责开麦，它负责递证据。",
    aiPick: "Perplexity 或 ChatGPT。一个负责查证，一个负责对比推理，适合你把锐评从“我感觉”升级成“我有依据”。",
    friends: ["G 吃瓜群众", "Q 十万个为什么", "V 精致讲究人"],
    lovers: ["E 半夜破防人", "O 都行都可以", "W 天选打工人"],
    chemistry: ["D 加戏大师", "B 班味老板", "Y 好好好机器"],
  },
  K: {
    hook: "KPI",
    name: "指标背锅侠",
    image: "./assets/generated/type-k-kpi.webp",
    keywords: "KPI / 任务 / 锅来得很准",
    quote: "锅从天上来，KPI 从背后追。",
    desc: "你经常站在一种微妙位置：活大家都干了点，锅精准落你头上。会议里你只是点了个头，复盘时已经像项目总导演。优点是抗压，能兜底，关键时刻不掉链子。副作用是太能扛，别人就会把你当公共承重墙。",
    ai: "让 AI 写进度说明、风险提示、复盘报告，以及体面表达“这锅不全熟在我锅里”。",
    aiPick: "Microsoft Copilot 或飞书智能助手。适合写汇报、整理会议、追踪任务，帮你把背锅现场改造成可交付材料。",
    friends: ["W 天选打工人", "P 汇报型人格", "B 班味老板"],
    lovers: ["F 摸鱼圣体", "O 都行都可以", "Z 能量清零者"],
    chemistry: ["M 搞钱脑袋", "J 互联网判官", "Y 好好好机器"],
  },
  L: {
    hook: "Lazy",
    name: "懒得动星人",
    image: "./assets/generated/type-l-lazy.webp",
    keywords: "启动困难 / 节能 / 躺着想很多",
    quote: "脑子已经开会，身体还没签到。",
    desc: "你的能力没问题，问题出在启动键位置偏远。别人说干就干，你需要酝酿、预热、心理建设，再顺手躺五分钟。优点是一旦启动，效率并不差。副作用是人生最难的任务，永远是打开那个文档。",
    ai: "让 AI 先写开头、列第一步、把任务拆到小到不好意思拖。",
    aiPick: "豆包或 ChatGPT。适合帮你开头、拆第一步、降低启动阻力。你的问题常常卡在“开始”两个字。",
    friends: ["F 摸鱼圣体", "Z 能量清零者", "N 随机路人甲"],
    lovers: ["U 上头冲锋队", "W 天选打工人", "O 都行都可以"],
    chemistry: ["B 班味老板", "P 汇报型人格", "V 精致讲究人"],
  },
  M: {
    hook: "Money",
    name: "搞钱脑袋",
    image: "./assets/generated/type-m-money.webp",
    keywords: "变现 / 成本 / 有没有搞头",
    quote: "万物皆可变现，连情绪都想挂小黄车。",
    desc: "你看什么都能拐到钱。别人看热点，你看流量；别人搞爱好，你看转化；别人发疯，你想这能不能做成账号。优点是现实、敏锐，会算账，商业嗅觉比外卖定位还准。副作用是太会算，快乐到你手里都要先过 ROI。",
    ai: "让 AI 做竞品、定价、商业点子、营销文案。少问它“这个人脉值多少钱”，容易显得很冷。",
    aiPick: "ChatGPT 或 Perplexity。适合做竞品分析、商业拆解、营销文案和信息搜索，让你的搞钱雷达少点玄学多点证据。",
    friends: ["I 脑洞批发商", "H 招兵买马人", "B 班味老板"],
    lovers: ["V 精致讲究人", "C 复制粘贴侠", "W 天选打工人"],
    chemistry: ["X 玄学许愿家", "F 摸鱼圣体", "E 半夜破防人"],
  },
  N: {
    hook: "NPC",
    name: "随机路人甲",
    image: "./assets/generated/type-n-npc.webp",
    keywords: "随缘 / 低存在感 / 主线漂移",
    quote: "主线任务没开，地图倒是跑挺远。",
    desc: "你的人生像开放世界随机刷新。今天想努力，明天想消失，后天突然出现在一个八竿子打不着的新兴趣里。优点是自由，灵活，很难被固定剧本困住。副作用是太随缘，连自己都等不到下一集预告。",
    ai: "让 AI 帮你整理目标、记录想法、把一地碎片捡成清单。",
    aiPick: "Notion AI 或 Obsidian + AI 插件。适合把你随机刷新的想法收起来，不然你的灵感像开盲盒，开完就丢。",
    friends: ["L 懒得动星人", "G 吃瓜群众", "O 都行都可以"],
    lovers: ["H 招兵买马人", "S 社交显眼包", "R 人生重开党"],
    chemistry: ["B 班味老板", "P 汇报型人格", "Q 十万个为什么"],
  },
  O: {
    hook: "OK",
    name: "都行都可以",
    image: "./assets/generated/type-o-ok.webp",
    keywords: "随和 / 选择困难 / 内心扣分",
    quote: "嘴上都行，心里已扣三分。",
    desc: "你嘴上“都行”，心里有一套比高考志愿还复杂的偏好系统。别人真选了雷区，你表面微笑，内心默默记一笔。优点是包容，好相处，不爱制造冲突。副作用是需求不说，委屈全靠自己内存硬扛。",
    ai: "让 AI 列利弊、做选择、把你那句“都可以”翻译成真实偏好。",
    aiPick: "ChatGPT。适合做选择题、列利弊、反问偏好，帮你把“都行”翻译成“其实我想要这个”。",
    friends: ["A 啊？型选手", "F 摸鱼圣体", "N 随机路人甲"],
    lovers: ["B 班味老板", "J 互联网判官", "E 半夜破防人"],
    chemistry: ["Q 十万个为什么", "V 精致讲究人", "Y 好好好机器"],
  },
  P: {
    hook: "PPT",
    name: "汇报型人格",
    image: "./assets/generated/type-p-ppt.webp",
    keywords: "结构 / 重点 / 首先其次最后",
    quote: "灵魂里住着一个目录页。",
    desc: "你连吐槽都带目录。别人讲八卦讲情绪，你讲背景、现状、影响、解决方案，最后补一句“以上”。优点是逻辑清楚，能把乱麻说成流程图。副作用是朋友只是想听瓜，你交了一份口头 PPT。",
    ai: "让 AI 搭框架、写汇报、压缩重点、把废话整理成领导爱看的废话。",
    aiPick: "Gamma 或 WPS AI。适合生成 PPT、汇报结构、演示大纲，你的表达天赋终于有了合法载体。",
    friends: ["B 班味老板", "Q 十万个为什么", "W 天选打工人"],
    lovers: ["I 脑洞批发商", "A 啊？型选手", "V 精致讲究人"],
    chemistry: ["L 懒得动星人", "D 加戏大师", "S 社交显眼包"],
  },
  Q: {
    hook: "Question",
    name: "十万个为什么",
    image: "./assets/generated/type-q-question.webp",
    keywords: "追问 / 好奇 / 对敷衍过敏",
    quote: "一句话没说圆，你能追出族谱。",
    desc: "只要哪里没讲清楚，你立刻弹出：为什么？凭什么？然后呢？别人只是随口一说，你已经把现场推进答辩环节。优点是能挖深，能抓漏洞，适合研究复杂问题。副作用是问太细，聊天对象会开始怀疑自己在被面试。",
    ai: "让 AI 多轮解释、举例、反驳自己、补来源。你问，它逃不掉。",
    aiPick: "Perplexity 或 Gemini。适合搜索、追问、交叉验证，能陪你把一句话挖到地下三层。",
    friends: ["J 互联网判官", "P 汇报型人格", "G 吃瓜群众"],
    lovers: ["D 加戏大师", "E 半夜破防人", "V 精致讲究人"],
    chemistry: ["C 复制粘贴侠", "O 都行都可以", "N 随机路人甲"],
  },
  R: {
    hook: "Retry",
    name: "人生重开党",
    image: "./assets/generated/type-r-retry.webp",
    keywords: "撤回 / 读档 / 再来一版",
    quote: "人生没有撤回键，你很不满意。",
    desc: "遇到问题，你先看有没有撤回键。消息想撤，方案想改，人生最好支持 Ctrl+Z，最好还能保存多个版本。优点是有修正意识，不怕推倒重来。副作用是重开太多，第一章都快被你盘包浆了。",
    ai: "让 AI 改稿、复盘、模拟选择、生成 B 方案 C 方案和第 18 个备选。",
    aiPick: "Claude 或 ChatGPT。适合长文改稿、多版本迭代、模拟不同选择，能满足你对“再来一版”的执念。",
    friends: ["I 脑洞批发商", "N 随机路人甲", "E 半夜破防人"],
    lovers: ["V 精致讲究人", "D 加戏大师", "W 天选打工人"],
    chemistry: ["B 班味老板", "P 汇报型人格", "U 上头冲锋队"],
  },
  S: {
    hook: "Social",
    name: "社交显眼包",
    image: "./assets/generated/type-s-social.webp",
    keywords: "接话 / 救场 / 存在感报警",
    quote: "场子一冷，你就自动开机。",
    desc: "群里一冷场，你浑身难受；朋友一尴尬，你立刻补位。空气安静三秒，你就想给它插上电。优点是能带气氛，会救场，让人放松。副作用是太爱补位，容易把自己活成移动暖场机。",
    ai: "让 AI 写开场白、评论回复、活动话术、破冰问题。少让它教你“如何低调”，用不上。",
    aiPick: "豆包或 ChatGPT 语音模式。适合写评论、接梗、破冰、模拟聊天，给你的社交电台补点词库。",
    friends: ["G 吃瓜群众", "I 脑洞批发商", "D 加戏大师"],
    lovers: ["H 招兵买马人", "N 随机路人甲", "A 啊？型选手"],
    chemistry: ["Z 能量清零者", "J 互联网判官", "P 汇报型人格"],
  },
  T: {
    hook: "Talk",
    name: "嘴强王者",
    image: "./assets/generated/type-t-talk.webp",
    keywords: "会说 / 懂王 / 行动排队中",
    quote: "嘴已经通关，手还在新手村。",
    desc: "你讲道理像开发布会，规划人生像写白皮书。真到开干，大脑激情演讲，身体原地旁听。优点是表达强，能把事情说得很有道理。副作用是说太爽，会产生“我已经推进了”的幻觉。",
    ai: "让 AI 把你的宏伟发言压成三步行动，第一步最好小到没法赖账。",
    aiPick: "ChatGPT。适合把你的长篇发言压缩成行动清单，专治“脑子已经通关，手还没上线”。",
    friends: ["J 互联网判官", "I 脑洞批发商", "Q 十万个为什么"],
    lovers: ["W 天选打工人", "O 都行都可以", "S 社交显眼包"],
    chemistry: ["L 懒得动星人", "M 搞钱脑袋", "E 半夜破防人"],
  },
  U: {
    hook: "Up",
    name: "上头冲锋队",
    image: "./assets/generated/type-u-up.webp",
    keywords: "热血 / 开冲 / 三分钟烈火",
    quote: "上头时像火箭，冷却后像截图纪念。",
    desc: "你一上头，世界都拦不住。新项目先起名，新爱好先下单，新计划先建群，至于坚持，明天再议。优点是启动快，有感染力，能把冷场点成火场。副作用是退烧也快，留下半柜装备和一堆“新建文件夹 3”。",
    ai: "让 AI 做冷静评估、节奏规划、阶段目标。先问一句：这事三天后还香吗？",
    aiPick: "Trello/Notion AI 或 ChatGPT。适合把上头拆成阶段计划，帮你在热度退烧前至少留下点成果。",
    friends: ["I 脑洞批发商", "S 社交显眼包", "X 玄学许愿家"],
    lovers: ["L 懒得动星人", "P 汇报型人格", "R 人生重开党"],
    chemistry: ["B 班味老板", "J 互联网判官", "Z 能量清零者"],
  },
  V: {
    hook: "VIP",
    name: "精致讲究人",
    image: "./assets/generated/type-v-vip.webp",
    keywords: "审美 / 细节 / 眼睛有脾气",
    quote: "可以将就，但眼睛不同意。",
    desc: "别人说差不多，你说差很多。功能能用还不够，排版、质感、配色、氛围，一个都别想糊弄过去。优点是标准高，能把普通东西收拾得像样。副作用是太讲究，买个杯子都能研究到凌晨两点。",
    ai: "让 AI 改风格、调语气、给方案、出版本。最后一刀还得你亲自审美。",
    aiPick: "Midjourney 或 Canva AI。适合视觉参考、风格探索、排版灵感，毕竟你的眼睛真的不好糊弄。",
    friends: ["J 互联网判官", "P 汇报型人格", "M 搞钱脑袋"],
    lovers: ["C 复制粘贴侠", "E 半夜破防人", "R 人生重开党"],
    chemistry: ["L 懒得动星人", "O 都行都可以", "F 摸鱼圣体"],
  },
  W: {
    hook: "Work",
    name: "天选打工人",
    image: "./assets/generated/type-w-work.webp",
    keywords: "嘴上离职 / 手上交付 / 命里有班",
    quote: "嘴上不干了，手上又保存了。",
    desc: "你每天都想跑路，文件每天都准时发。嘴上骂骂咧咧，手上改得整整齐齐，精神反抗很激烈，实际交付很稳定。优点是靠谱，能扛事，截止日期前自带求生本能。副作用是太靠谱，老板会误判你还有 30% 余量。",
    ai: "让 AI 写邮件、做总结、拆需求、改材料。少让它分析职场意义，容易越想越亏。",
    aiPick: "Microsoft Copilot、WPS AI 或飞书智能助手。适合处理邮件、文档、表格和会议纪要，给打工人的命续上外接电源。",
    friends: ["K 指标背锅侠", "P 汇报型人格", "C 复制粘贴侠"],
    lovers: ["E 半夜破防人", "M 搞钱脑袋", "T 嘴强王者"],
    chemistry: ["F 摸鱼圣体", "Y 好好好机器", "B 班味老板"],
  },
  X: {
    hook: "Xuan",
    name: "玄学许愿家",
    image: "./assets/generated/type-x-xuan.webp",
    keywords: "转运 / 许愿 / 求求了文学",
    quote: "命运负责玄学，你负责催单。",
    desc: "你努力归努力，玄学也要顺手安排。该投简历投简历，该转锦鲤转锦鲤，主打一个人类努力和宇宙外包双线并行。优点是心态弹性大，总能给自己找点希望。副作用是许愿太多，执行容易坐在旁边等通知。",
    ai: "让 AI 把愿望拆成计划，把“求求了”翻译成“今天先干啥”。",
    aiPick: "ChatGPT 或豆包。适合把愿望拆成计划，把玄学口号改成可执行步骤，给宇宙减点客服压力。",
    friends: ["U 上头冲锋队", "G 吃瓜群众", "E 半夜破防人"],
    lovers: ["M 搞钱脑袋", "O 都行都可以", "I 脑洞批发商"],
    chemistry: ["J 互联网判官", "Q 十万个为什么", "W 天选打工人"],
  },
  Y: {
    hook: "Yes",
    name: "好好好机器",
    image: "./assets/generated/type-y-yes.webp",
    keywords: "答应 / 配合 / 灵魂离线",
    quote: "嘴上好好好，灵魂已下线。",
    desc: "“好好好”“可以可以”“没问题”是你的自动回复三件套。表面配合度拉满，内心小人已经开始无声尖叫。优点是好协作，情绪稳定，场面上很给人面子。副作用是答应太快，最后发现自己接了一车别人倒出来的事。",
    ai: "让 AI 写拒绝话术、边界表达、任务优先级。你的第一课：少说好，多说我看看。",
    aiPick: "ChatGPT。适合帮你写拒绝话术、边界表达和委婉回复，别再把人生过成自动接单系统。",
    friends: ["O 都行都可以", "W 天选打工人", "K 指标背锅侠"],
    lovers: ["J 互联网判官", "S 社交显眼包", "B 班味老板"],
    chemistry: ["Q 十万个为什么", "G 吃瓜群众", "F 摸鱼圣体"],
  },
  Z: {
    hook: "Zero",
    name: "能量清零者",
    image: "./assets/generated/type-z-zero.webp",
    keywords: "低电量 / 红色预警 / 亮屏困难",
    quote: "当前电量 1%，请停止社交并立即充电。",
    desc: "你的电量像用了五年的旧手机。出门 80%，见两个人 30%，回几条消息直接红色预警，晚上只想原地关机。优点是知道自己需要休息，很少硬装无限续航。副作用是电量太低时，连快乐递到手边都懒得拆包装。",
    ai: "让 AI 减少决策、压缩任务、安排轻量计划。先别急着逆天改命，今天能成功开机就算赢。",
    aiPick: "Pi、豆包或 ChatGPT 语音模式。适合轻量陪伴、减少决策、帮你把一天拆到能活着完成。",
    friends: ["F 摸鱼圣体", "L 懒得动星人", "E 半夜破防人"],
    lovers: ["W 天选打工人", "B 班味老板", "A 啊？型选手"],
    chemistry: ["S 社交显眼包", "U 上头冲锋队", "M 搞钱脑袋"],
  },
};

const QUESTIONS = [
  {
    text: "领导突然发你一句“有空吗？”",
    options: [
      { text: "先别回，脑子里过一遍最近有没有出事。", scores: { E: 1, D: 1 } },
      { text: "秒回“有的”，回完开始后悔。", scores: { Y: 2, W: 1 } },
      { text: "问清楚什么事，最好别打哑谜。", scores: { Q: 2, J: 1 } },
      { text: "直接想：这活能不能让 AI 先垫一版。", scores: { C: 1, F: 1 } },
    ],
  },
  {
    text: "群聊突然 99+，你的第一反应是？",
    options: [
      { text: "快速爬楼，谁吵谁赢先搞明白。", scores: { G: 2, J: 1 } },
      { text: "不看，反正重要的会有人单独找我。", scores: { F: 2, Z: 1 } },
      { text: "先问一句“发生了什么”。", scores: { A: 2, N: 1 } },
      { text: "总结一下发群里，防止大家继续乱。", scores: { P: 2, B: 1 } },
    ],
  },
  {
    text: "你用 AI 写东西时，最常见的操作是？",
    options: [
      { text: "先让它出一版，能用就改改交了。", scores: { C: 2, W: 1 } },
      { text: "连续追问十轮，直到它说人话。", scores: { Q: 1, T: 1 } },
      { text: "让它给 20 个方向，先爽一下再说。", scores: { I: 2, U: 1 } },
      { text: "让它把话说得体面一点，别像刚学会上班。", scores: { V: 1, P: 1 } },
    ],
  },
  {
    text: "朋友问“晚上吃啥？”",
    options: [
      { text: "都行，你们定。", scores: { O: 2, Y: 1 } },
      { text: "先列预算、距离、排队时间、口味偏好。", scores: { B: 1, T: 1 } },
      { text: "看哪家能拍照，环境不能太寒酸。", scores: { V: 2, S: 1 } },
      { text: "随便，能坐下就行，主要不想动。", scores: { L: 2, F: 1 } },
    ],
  },
  {
    text: "看到一个热点争议，你会？",
    options: [
      { text: "先别站队，等反转。", scores: { J: 2, G: 1 } },
      { text: "火速围观，评论区比正文精彩。", scores: { G: 2, S: 1 } },
      { text: "查来源、看时间线、找原文。", scores: { Q: 2, P: 1 } },
      { text: "想想这个选题能不能做内容。", scores: { M: 1, I: 1 } },
    ],
  },
  {
    text: "你突然有了一个新想法。",
    options: [
      { text: "先起名字，名字好听项目就成功一半。", scores: { I: 1, T: 1 } },
      { text: "先算成本、流量、变现路径。", scores: { M: 2, B: 1 } },
      { text: "先建个文档，但文档可能只活一天。", scores: { R: 1, N: 1 } },
      { text: "先找几个人聊聊，看谁能一起干。", scores: { H: 2, S: 1 } },
    ],
  },
  {
    text: "半夜睡不着，你的大脑通常在干嘛？",
    options: [
      { text: "复盘白天哪句话说得不够好。", scores: { E: 1, D: 1 } },
      { text: "突然觉得人生需要一个大计划。", scores: { U: 1, P: 1 } },
      { text: "想着明天又要上班，电量提前见底。", scores: { Z: 2, W: 1 } },
      { text: "刷到一个瓜，顺手研究完整事件链。", scores: { G: 1, J: 1 } },
    ],
  },
  {
    text: "工作里出现一个烂摊子，你一般是？",
    options: [
      { text: "先把锅的边界画清楚。", scores: { J: 1, K: 1 } },
      { text: "算了，我先补上，别炸就行。", scores: { K: 2, W: 1 } },
      { text: "拉个表，拆问题，排优先级。", scores: { P: 2, B: 1 } },
      { text: "问问能不能推倒重来。", scores: { R: 2, Q: 1 } },
    ],
  },
  {
    text: "你最受不了哪种表达？",
    options: [
      { text: "说了半天没有重点。", scores: { P: 2, J: 1 } },
      { text: "模棱两可，问就是“差不多”。", scores: { Q: 2, V: 1 } },
      { text: "语气怪怪的，但又说不出哪里怪。", scores: { D: 2, E: 1 } },
      { text: "一上来就安排我干活。", scores: { F: 1, L: 1 } },
    ],
  },
  {
    text: "你参加一个陌生聚会。",
    options: [
      { text: "先观察，看看谁是场上核心人物。", scores: { H: 1, G: 1 } },
      { text: "只要没人 cue 我，我可以低调到像背景板。", scores: { N: 2, Z: 1 } },
      { text: "冷场太难受，忍不住接话。", scores: { S: 2, Y: 1 } },
      { text: "负责把话题往有意思的方向拐。", scores: { I: 1, S: 1 } },
    ],
  },
  {
    text: "你收到一份很乱的资料。",
    options: [
      { text: "先让 AI 总结，再看值不值得细读。", scores: { C: 1, F: 1 } },
      { text: "先整理结构，不然看着头疼。", scores: { P: 2, V: 1 } },
      { text: "先找漏洞和矛盾点。", scores: { J: 2, Q: 1 } },
      { text: "先放着，等它自己变紧急。", scores: { L: 2, N: 1 } },
    ],
  },
  {
    text: "你对“计划”的态度是？",
    options: [
      { text: "没计划会焦虑，有计划会安心。", scores: { B: 1, A: 1 } },
      { text: "计划赶不上变化，先活着。", scores: { N: 2, O: 1 } },
      { text: "计划可以有，但最好支持撤回。", scores: { R: 1, D: 1 } },
      { text: "计划是用来上头的，执行是另一回事。", scores: { U: 1, T: 2 } },
    ],
  },
  {
    text: "别人找你帮忙，你最可能？",
    options: [
      { text: "嘴比脑子快，先答应再说。", scores: { Y: 2, K: 1 } },
      { text: "问清楚范围，别给我无限加戏。", scores: { Q: 1, J: 1 } },
      { text: "能帮就帮，顺便把流程安排了。", scores: { B: 1, H: 1 } },
      { text: "想帮，但电量真的不支持。", scores: { Z: 2, L: 1 } },
    ],
  },
  {
    text: "你最像哪种收藏夹状态？",
    options: [
      { text: "干货很多，但从来不看。", scores: { I: 1, L: 1 } },
      { text: "模板很多，随时拿来改。", scores: { C: 2, P: 1 } },
      { text: "玄学、教程、转运、搞钱混在一起。", scores: { X: 2, M: 1 } },
      { text: "分类很细，细到自己都怕。", scores: { V: 2, B: 1 } },
    ],
  },
  {
    text: "当你被迫做选择时？",
    options: [
      { text: "列利弊，最好有表格。", scores: { P: 2, Q: 1 } },
      { text: "问朋友，问 AI，问宇宙，最后看心情。", scores: { X: 3, O: 1 } },
      { text: "随便选一个，错了再重开。", scores: { R: 2, N: 1 } },
      { text: "先看哪个最划算。", scores: { M: 2, J: 1 } },
    ],
  },
  {
    text: "你发朋友圈/动态前通常？",
    options: [
      { text: "想发就发，存在感也是一种生产力。", scores: { S: 2, U: 1 } },
      { text: "反复检查语气、配图、标点。", scores: { V: 2, E: 1 } },
      { text: "写完删，删完又觉得可惜。", scores: { R: 1, D: 1 } },
      { text: "基本不发，人生以潜水为主。", scores: { N: 2, Z: 1 } },
    ],
  },
  {
    text: "你面对一个新工具时？",
    options: [
      { text: "先看有没有模板和快捷用法。", scores: { C: 1, F: 1 } },
      { text: "先试一圈，试着试着就上头。", scores: { U: 2, I: 1 } },
      { text: "先研究原理和边界，不想被糊弄。", scores: { Q: 2, J: 1 } },
      { text: "先看能不能帮我赚钱或省时间。", scores: { M: 1, W: 1 } },
    ],
  },
  {
    text: "你最常见的精神状态是？",
    options: [
      { text: "人在现场，灵魂加载中。", scores: { A: 2, Z: 1 } },
      { text: "表面平静，内心弹幕刷屏。", scores: { D: 1, T: 1 } },
      { text: "刚燃起来，又灭了。", scores: { U: 1, L: 1 } },
      { text: "看似随和，其实已经默默记账。", scores: { O: 1, Y: 1 } },
    ],
  },
  {
    text: "如果人生能装一个功能，你选？",
    options: [
      { text: "撤回键。", scores: { R: 1, A: 1 } },
      { text: "自动生成周报。", scores: { F: 2, W: 1 } },
      { text: "人际关系雷达。", scores: { H: 2, G: 1 } },
      { text: "一键变现按钮。", scores: { M: 2, I: 1 } },
    ],
  },
  {
    text: "你希望别人怎么评价你？",
    options: [
      { text: "靠谱，交给我能收尾。", scores: { W: 2, K: 1 } },
      { text: "有趣，跟我待着不无聊。", scores: { S: 1, I: 1 } },
      { text: "清醒，看问题很准。", scores: { J: 1, T: 1 } },
      { text: "有品，别拿糊弄人的东西给我。", scores: { V: 2, P: 1 } },
    ],
  },
];

const PRIORITY = ["F", "E", "J", "W", "Y", "Z", "P", "M"];
const state = {
  current: 0,
  answers: Array(QUESTIONS.length).fill(null),
};

const $ = (id) => document.getElementById(id);

function showScreen(screen) {
  ["start-screen", "quiz-screen", "result-screen"].forEach((id) => {
    $(id).classList.toggle("hidden", id !== screen);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  const question = QUESTIONS[state.current];
  $("question-count").textContent = `Q${state.current + 1} / ${QUESTIONS.length}`;
  $("question-title").textContent = question.text;
  $("progress-bar").style.width = `${((state.current + 1) / QUESTIONS.length) * 100}%`;
  $("back-btn").disabled = state.current === 0;

  $("options").innerHTML = "";
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `option-btn ${state.answers[state.current] === index ? "selected" : ""}`;
    button.textContent = option.text;
    button.addEventListener("click", () => chooseOption(index));
    $("options").appendChild(button);
  });
}

function chooseOption(index) {
  state.answers[state.current] = index;
  if (state.current < QUESTIONS.length - 1) {
    state.current += 1;
    renderQuestion();
    return;
  }
  renderResult();
}

function calculateScores() {
  const scores = Object.fromEntries(Object.keys(TYPES).map((key) => [key, 0]));
  const lateScores = Object.fromEntries(Object.keys(TYPES).map((key) => [key, 0]));

  state.answers.forEach((answerIndex, questionIndex) => {
    if (answerIndex === null) return;
    const option = QUESTIONS[questionIndex].options[answerIndex];
    Object.entries(option.scores).forEach(([key, value]) => {
      scores[key] += value;
      if (questionIndex >= QUESTIONS.length - 5) lateScores[key] += value;
    });
  });

  return { scores, lateScores };
}

function pickWinner(scores, lateScores) {
  const highest = Math.max(...Object.values(scores));
  let candidates = Object.keys(scores).filter((key) => scores[key] === highest);

  if (candidates.length > 1) {
    const lateHighest = Math.max(...candidates.map((key) => lateScores[key]));
    candidates = candidates.filter((key) => lateScores[key] === lateHighest);
  }

  if (candidates.length > 1) {
    const priorityPick = PRIORITY.find((key) => candidates.includes(key));
    if (priorityPick) return priorityPick;
  }

  return candidates[0];
}

function renderResult(forcedType) {
  const { scores, lateScores } = calculateScores();
  const winner = forcedType || pickWinner(scores, lateScores);
  const type = TYPES[winner];
  const fullName = `${winner} 型 ${type.hook}：${type.name}`;

  $("result-letter").textContent = winner;
  $("result-name").textContent = type.name;
  $("result-full-title").textContent = fullName;
  $("result-keywords").textContent = type.keywords;
  $("result-quote").textContent = type.quote;
  if (type.image) {
    $("result-image").src = type.image;
    $("result-image").alt = `${fullName} 插图`;
    $("result-figure").classList.remove("hidden");
  } else {
    $("result-image").removeAttribute("src");
    $("result-image").alt = "";
    $("result-figure").classList.add("hidden");
  }
  $("result-desc").textContent = type.desc;
  $("result-ai").textContent = type.ai;
  $("result-ai-pick").textContent = type.aiPick;
  $("friend-types").textContent = type.friends.join("、");
  $("lover-types").textContent = type.lovers.join("、");
  $("chemistry-types").textContent = type.chemistry.join("、");

  const sorted = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
  $("score-list").innerHTML = sorted
    .map(([key, score]) => `<li>${key} 型 ${TYPES[key].hook}：${TYPES[key].name}，${score} 分</li>`)
    .join("");

  $("copy-btn").dataset.result = `我是 ${fullName}\n${type.quote}\n\n${type.desc}\n\n适合我的 AI：${type.aiPick}\n\n关系网：\n朋友：${type.friends.join("、")}\n情侣：${type.lovers.join("、")}\n高能化学反应：${type.chemistry.join("、")}`;
  showScreen("result-screen");
}

function resetQuiz() {
  state.current = 0;
  state.answers = Array(QUESTIONS.length).fill(null);
  renderQuestion();
  showScreen("quiz-screen");
}

$("start-btn").addEventListener("click", resetQuiz);
$("again-btn").addEventListener("click", resetQuiz);
$("restart-btn").addEventListener("click", resetQuiz);
$("back-btn").addEventListener("click", () => {
  if (state.current > 0) {
    state.current -= 1;
    renderQuestion();
  }
});

$("random-btn").addEventListener("click", () => {
  const keys = Object.keys(TYPES);
  renderResult(keys[Math.floor(Math.random() * keys.length)]);
});

$("copy-btn").addEventListener("click", async () => {
  const text = $("copy-btn").dataset.result;
  try {
    await navigator.clipboard.writeText(text);
    $("copy-btn").textContent = "已复制";
    setTimeout(() => {
      $("copy-btn").textContent = "复制结果文案";
    }, 1400);
  } catch {
    window.prompt("复制下面这段结果：", text);
  }
});
