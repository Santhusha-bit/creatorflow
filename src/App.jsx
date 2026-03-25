import { useState, useRef, useCallback } from 'react'
import './index.css'

// ─────────────────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────────────────
export const IgIcon = ({ s = 16, c = 'currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1.3" fill={c} stroke="none" />
  </svg>
)

export const YtIcon = ({ s = 16, c = 'currentColor' }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill={c}>
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.8 15.5V8.5l6.3 3.5-6.3 3.5z" />
  </svg>
)

export const BoltIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
)

export const ArrRight = ({ s = 14 }) => (
  <svg width={s} height={s} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
)

export const ChkIcon = ({ s = 10 }) => (
  <svg width={s} height={s} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="2,6 5,9 10,3" />
  </svg>
)

export const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" />
  </svg>
)

export const PersonIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
  </svg>
)

export const ShopIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 01-8 0" />
  </svg>
)

export const BackIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 4L6 8l4 4" />
  </svg>
)

// ─────────────────────────────────────────────────────────────────────────────
// PIPELINE DATA — PERSONAL BRAND
// ─────────────────────────────────────────────────────────────────────────────
export const BRAND_STEPS = [
  {
    id: 1, slug: 'identity', label: 'Identity', emoji: '🪞',
    title: 'Brand Identity Builder',
    subtitle: 'Define your niche, voice, values, and the unique angle that sets you apart from every other creator',
    fields: [
      { key: 'name',      label: 'Your name',                   placeholder: 'e.g. Maya Chen' },
      { key: 'niche',     label: 'Your content niche',          placeholder: 'e.g. minimalist living, career growth, finance' },
      { key: 'expertise', label: 'Your unique expertise/story', placeholder: 'e.g. went from burnout to 4-day week in 18 months' },
      { key: 'audience',  label: 'Who you\'re building for',    placeholder: 'e.g. ambitious women in their 30s feeling stuck' },
    ],
    prompts: {
      instagram: f => `I'm building a personal brand on Instagram. My name is ${f.name}. My content niche is ${f.niche}. My unique expertise or story is: ${f.expertise}. My target audience is: ${f.audience}. Help me define: (1) My brand positioning statement (1 sentence capturing who I am, who I help, and how I'm different), (2) My 3 core content pillars with 5 sub-topics each, (3) My brand voice and tone in 5 adjectives with examples, (4) My unique creator angle — what makes my take on ${f.niche} different from everyone else's, (5) 3 content series ideas that would run consistently on Instagram. Be specific to my story. No generic creator advice.`,
      youtube:   f => `I'm building a personal brand on YouTube. My name is ${f.name}. My content niche is ${f.niche}. My unique expertise or story is: ${f.expertise}. My target audience is: ${f.audience}. Help me define: (1) My channel positioning statement — what's my YouTube promise to viewers, (2) My 3 core content pillars with 5 video topic ideas each, (3) My on-camera voice and style in 5 words with examples of creators who share that vibe, (4) My unique YouTube angle in this niche — what gap I fill that no one else is filling, (5) 3 recurring video series ideas with format descriptions. Be specific to my story. No generic YouTube advice.`,
    },
  },
  {
    id: 2, slug: 'profile', label: 'Profile', emoji: '✨',
    title: 'Profile & Bio Optimizer',
    subtitle: 'Craft bios, taglines, and channel descriptions that make people instantly hit Follow',
    fields: [
      { key: 'name',           label: 'Your name',                  placeholder: 'e.g. Maya Chen' },
      { key: 'niche',          label: 'Content niche',              placeholder: 'e.g. minimalist career growth' },
      { key: 'audience',       label: 'Your audience',              placeholder: 'e.g. burnt-out corporate women in their 30s' },
      { key: 'transformation', label: 'What you help them achieve', placeholder: 'e.g. design a slower, more intentional career' },
    ],
    prompts: {
      instagram: f => `Write me 5 Instagram bio options for ${f.name}, a personal brand creator in the ${f.niche} space. My audience is ${f.audience} and I help them ${f.transformation}. Each bio must: be under 150 characters, communicate who I am + who I help + what they get + a reason to follow, and sound like a real person talking — not a marketing pitch. Vary the style: one bold/punchy, one warm/friendly, one data-driven/credibility-first, one storytelling, one question-based. No buzzwords.`,
      youtube:   f => `Write for ${f.name} in the ${f.niche} space: (1) 3 YouTube channel tagline options — under 8 words each, memorable and searchable, (2) 3 YouTube channel description options — each under 280 characters, include who the channel is for, what they'll gain from subscribing, and a reason to watch. My audience is ${f.audience} and I help them ${f.transformation}. Make all copy feel warm, real, and specific to my niche. No templates. No buzzwords.`,
    },
  },
  {
    id: 3, slug: 'content', label: 'Content Plan', emoji: '📅',
    title: 'Content Strategy Planner',
    subtitle: 'Build a 30-day content calendar with hooks, formats, and post ideas tailored to your niche',
    fields: [
      { key: 'niche',    label: 'Content niche',             placeholder: 'e.g. minimalist career growth' },
      { key: 'audience', label: 'Your audience',             placeholder: 'e.g. burnt-out corporate women' },
      { key: 'goals',    label: 'Your goals for this month', placeholder: 'e.g. grow from 2k to 5k followers, build email list' },
      { key: 'formats',  label: 'Content formats you enjoy', placeholder: 'e.g. talking head videos, carousel posts, stories' },
    ],
    prompts: {
      instagram: f => `Create a 30-day Instagram content plan for a personal brand creator in the ${f.niche} niche. My audience is ${f.audience}. My goals this month: ${f.goals}. I enjoy creating: ${f.formats}. Give me: (1) A weekly content rhythm (how many posts per week, what types), (2) 30 specific post ideas with: the hook line, content format, emotional angle (curiosity/relatability/inspiration/education), and which audience pain point it addresses, (3) 5 carousel post titles with their exact first slide text, (4) 3 post ideas designed specifically to drive follows. Make every idea feel authentic to the niche and non-generic.`,
      youtube:   f => `Create a 30-day YouTube content plan for a personal brand creator in the ${f.niche} niche. My audience is ${f.audience}. My goals this month: ${f.goals}. I prefer creating: ${f.formats}. Give me: (1) A realistic upload cadence recommendation, (2) 12 specific video ideas with: the full title (optimized for search + clicks), the hook (first 30 seconds), the core angle, and a description of who would share it and why, (3) 3 Shorts ideas that would drive subscribers to my long-form, (4) 2 video ideas designed specifically to rank on search. Prioritize ideas that build authority in the niche.`,
    },
  },
  {
    id: 4, slug: 'hooks', label: 'Hooks & Copy', emoji: '✍️',
    title: 'Hook & Caption Writer',
    subtitle: 'Write scroll-stopping hooks, captions, and titles that earn attention in your niche',
    fields: [
      { key: 'niche',    label: 'Content niche',               placeholder: 'e.g. minimalist career growth' },
      { key: 'audience', label: 'Your audience',               placeholder: 'e.g. burnt-out corporate women' },
      { key: 'topic',    label: 'Specific topic or post idea', placeholder: 'e.g. why I quit my 6-figure job' },
      { key: 'angle',    label: 'Your personal angle on it',   placeholder: 'e.g. it wasn\'t about money, it was about time' },
    ],
    prompts: {
      instagram: f => `Write for a ${f.niche} personal brand creator. My audience is ${f.audience}. I want to create a post about: ${f.topic}. My unique angle: ${f.angle}. Write: (1) 8 different opening hook lines — vary the styles (controversial statement, question, data point, personal confession, hot take, relatable frustration, bold claim, story opener), (2) 3 full Instagram captions using the best hooks — each with a different structure (storytelling, list-based, and question-driven), (3) 5 carousel first-slide text options for this topic. All copy should feel like a real creator speaking, not a brand. Warm, opinionated, specific.`,
      youtube:   f => `Write for a ${f.niche} personal brand creator. My audience is ${f.audience}. I want to create a video about: ${f.topic}. My unique angle: ${f.angle}. Write: (1) 8 video title options — vary the formats (how-to, story, list, controversy, day-in-my-life, search-optimized, emotion-first, outcome-first), (2) 3 YouTube video hook scripts for the first 60 seconds — each with a different opening style (bold statement, story, question), (3) 5 thumbnail text options (max 5 words each, emotionally punchy). Titles must balance searchability with click-through appeal.`,
    },
  },
  {
    id: 5, slug: 'reel', label: 'Video Scripts', emoji: '🎬',
    title: 'Video & Reel Scriptwriter',
    subtitle: 'Get full Reel, Short, and long-form video scripts written in your authentic voice',
    fields: [
      { key: 'name',         label: 'Your name',                     placeholder: 'e.g. Maya Chen' },
      { key: 'niche',        label: 'Content niche',                 placeholder: 'e.g. minimalist career growth' },
      { key: 'topic',        label: 'Video topic',                   placeholder: 'e.g. my morning routine as a solopreneur' },
      { key: 'personalNote', label: 'Something personal to include', placeholder: 'e.g. I used to hate mornings before I quit my 9-5' },
    ],
    prompts: {
      instagram: f => `Write a 60-second Instagram Reel script for ${f.name}, a ${f.niche} creator. Video topic: ${f.topic}. Personal detail to weave in: ${f.personalNote}. Script structure: (1) HOOK (0-3 sec): one sentence that stops the scroll — bold, visual, or provocative, (2) CONTEXT (3-12 sec): quick relatable setup — why this matters to the viewer, (3) VALUE (12-50 sec): the actual content — 3-4 specific, actionable points with ${f.name}'s personal spin, (4) CTA (50-60 sec): soft, non-pushy — invite them to follow, save, or comment. Write in a warm, direct, first-person voice. Include: text-on-screen suggestions in [brackets], pacing notes, and B-roll ideas.`,
      youtube:   f => `Write two scripts for ${f.name}, a ${f.niche} creator. Video topic: ${f.topic}. Personal detail: ${f.personalNote}. SCRIPT 1 — YouTube Short (60 seconds max): Hook → problem/insight → solution reveal → soft subscribe CTA. Include text-on-screen notes and B-roll suggestions. SCRIPT 2 — Long-form intro hook (first 2 minutes): Open with a pattern interrupt, establish the problem, tease the value, introduce ${f.name} authentically, and set up what viewers will learn. Both scripts should feel like ${f.name} talking to a friend, not performing for a camera.`,
    },
  },
  {
    id: 6, slug: 'community', label: 'Community', emoji: '💬',
    title: 'Community & Engagement Engine',
    subtitle: 'Build genuine community with reply templates, DM strategies, and engagement sequences',
    fields: [
      { key: 'niche',    label: 'Content niche',               placeholder: 'e.g. minimalist career growth' },
      { key: 'audience', label: 'Your audience',               placeholder: 'e.g. burnt-out corporate women' },
      { key: 'goal',     label: 'Community-building goal',     placeholder: 'e.g. get people to join my free newsletter' },
      { key: 'platform', label: 'Where most engagement happens', placeholder: 'e.g. mainly Instagram DMs and comments' },
    ],
    prompts: {
      instagram: f => `I'm a ${f.niche} personal brand creator. My audience is ${f.audience}. Community goal: ${f.goal}. Write: (1) 5 Instagram story question prompts that spark genuine replies — specific to the niche, not generic, (2) A DM welcome sequence for new followers (3 messages over 72 hours): Message 1 — warm intro + free resource offer. Message 2 (24h later) — curious question about their situation. Message 3 (48h later) — genuine connection + soft CTA to ${f.goal}. (3) 5 comment-reply templates that deepen connection and don't feel copy-pasted. All copy should feel like the audience is hearing from a real friend, not an influencer.`,
      youtube:   f => `I'm a ${f.niche} personal brand creator. My audience is ${f.audience}. Community goal: ${f.goal}. Write: (1) A pinned comment template for new videos that drives conversation — specific question related to the video topic, (2) 5 YouTube community post ideas that spark comments: include the full post text, the question to ask, and why this type of post works, (3) A community post sequence for new subscribers (3 posts over the first week): Welcome → value-add → invitation to ${f.goal}. Make all copy feel warm, specific to ${f.niche}, and like a real creator talking — not a marketing playbook.`,
    },
  },
  {
    id: 7, slug: 'monetize', label: 'Monetize', emoji: '💰',
    title: 'Monetization Roadmap',
    subtitle: 'Discover the income streams that fit your audience size, niche, and creator style',
    fields: [
      { key: 'name',        label: 'Your name',              placeholder: 'e.g. Maya Chen' },
      { key: 'niche',       label: 'Content niche',          placeholder: 'e.g. minimalist career growth' },
      { key: 'audience',    label: 'Your audience',          placeholder: 'e.g. burnt-out corporate women in their 30s' },
      { key: 'currentSize', label: 'Current following size', placeholder: 'e.g. 1,200 Instagram followers, 0 YouTube subscribers' },
    ],
    prompts: {
      instagram: f => `I'm ${f.name}, a ${f.niche} personal brand creator on Instagram. My audience is ${f.audience}. My current size: ${f.currentSize}. Give me a realistic monetization roadmap with: (1) The 3 best income streams for my niche and audience size right now — explain why each fits, (2) For each income stream: what exactly to offer, how to price it, how to promote it without being pushy, and what milestone I need to hit first, (3) A 90-day monetization action plan: what to build in month 1, what to launch in month 2, what to scale in month 3, (4) 3 specific brand partnership pitch angles for ${f.niche} — what types of brands would pay me and what my unique value prop is. Be realistic about what works at ${f.currentSize}.`,
      youtube:   f => `I'm ${f.name}, a ${f.niche} personal brand creator on YouTube. My audience is ${f.audience}. My current size: ${f.currentSize}. Give me a realistic monetization roadmap with: (1) The 3 best income streams for my niche and audience size right now — rank by how soon I can earn from each, (2) For each stream: what to offer, how to price it, which video types best sell it without feeling salesy, and what milestone triggers each opportunity, (3) A 90-day YouTube monetization plan: content in month 1, what to build in month 2, what to launch in month 3, (4) 3 types of YouTube sponsorships realistic for ${f.niche} at ${f.currentSize} — what to charge and how to pitch. No generic advice.`,
    },
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// PIPELINE DATA — SELL A PRODUCT
// ─────────────────────────────────────────────────────────────────────────────
export const PRODUCT_STEPS = [
  {
    id: 1, slug: 'ideas', label: 'Ideas', emoji: '💡',
    title: 'Product Idea Generator',
    subtitle: 'Discover your 5 most profitable digital product ideas, ranked by income potential and ease of creation',
    fields: [
      { key: 'niche',    label: 'Your niche',            placeholder: 'e.g. sustainable living, personal finance, fitness' },
      { key: 'skills',   label: 'Skills & experience',   placeholder: 'e.g. 5 years in corporate finance, MBA' },
      { key: 'audience', label: 'Target audience',       placeholder: 'e.g. millennial women ages 25–35' },
      { key: 'problem',  label: 'Their biggest problem', placeholder: 'e.g. can\'t stick to a budget month after month' },
    ],
    prompts: {
      instagram: f => `I want to create a digital product to sell on Instagram. My niche is ${f.niche}. My skills and experience are ${f.skills}. My target audience is ${f.audience} and their biggest problem is ${f.problem}. Give me the top 5 most profitable digital product ideas for this audience, ranked by ease of creation and income potential. For each tell me: what to name it, what to include, what price point and why, and which format works best (ebook, template, course, guide, checklist). Be specific. No generic advice.`,
      youtube:   f => `I'm building a YouTube channel to sell a digital product. My niche is ${f.niche}. My skills and experience are ${f.skills}. My target audience is ${f.audience} and their biggest problem is ${f.problem}. Give me the top 5 YouTube video ideas to pre-sell a digital product in this niche. For each: click-worthy title, core hook angle, what the video teaches, how it leads naturally to a product sale. Rank by viral potential and conversion power. Be specific. No generic advice.`,
    },
  },
  {
    id: 2, slug: 'outline', label: 'Outline', emoji: '📋',
    title: 'Product Outline Builder',
    subtitle: 'Build a complete, premium-feeling product outline that justifies its price point',
    fields: [
      { key: 'productType', label: 'Product type',    placeholder: 'e.g. ebook, template, mini-course' },
      { key: 'topic',       label: 'Topic',           placeholder: 'e.g. zero-based budgeting for beginners' },
      { key: 'audience',    label: 'Target audience', placeholder: 'e.g. first-time budgeters in their 20s' },
      { key: 'price',       label: 'Price point',     placeholder: 'e.g. $27' },
    ],
    prompts: {
      instagram: f => `I want to create a ${f.productType} about ${f.topic} for ${f.audience}. Build a complete outline with: (1) compelling product name that sells, (2) subtitle clearly explaining the transformation, (3) table of contents with 5-7 chapters, (4) 3-5 bullet points per section of what they'll learn, (5) a quick win they get in the first 10 minutes. Make it feel premium and worth ${f.price}.`,
      youtube:   f => `I want to create a YouTube video about ${f.topic} for ${f.audience} leading into my ${f.productType} priced at ${f.price}. Build a complete video outline: (1) viral video title, (2) 30-second hook script, (3) 5-7 sections with what to cover, (4) 3-5 talking points per section, (5) natural soft pitch transition to the product. Make it feel worth watching for someone who'd buy a ${f.price} product.`,
    },
  },
  {
    id: 3, slug: 'profile', label: 'Profile', emoji: '✨',
    title: 'Seller Profile Optimizer',
    subtitle: 'Write bios and channel descriptions that prime visitors to buy before they even click your link',
    fields: [
      { key: 'productName',    label: 'Product name',       placeholder: 'e.g. The Budget Blueprint' },
      { key: 'audience',       label: 'Who you help',       placeholder: 'e.g. overwhelmed millennials' },
      { key: 'transformation', label: 'Transformation',     placeholder: 'e.g. take control of finances in 30 days' },
      { key: 'name',           label: 'Your name',          placeholder: 'e.g. Sarah' },
    ],
    prompts: {
      instagram: f => `Write 5 Instagram bio options that sell my product ${f.productName} without being pushy. It helps ${f.audience} to ${f.transformation}. My name is ${f.name}. Include: who I help, the result they get, CTA to click link in bio. Each under 150 chars. Human, warm, authentic. Not corporate. Not salesy.`,
      youtube:   f => `Write 3 YouTube channel description options and 3 tagline options for selling my product ${f.productName}. It helps ${f.audience} to ${f.transformation}. My name is ${f.name}. Descriptions: under 300 characters, who the channel is for, what they'll learn, and a CTA. Taglines: punchy, memorable, under 10 words. Human, warm, authentic.`,
    },
  },
  {
    id: 4, slug: 'content', label: 'Content', emoji: '🎯',
    title: 'Sales Content Machine',
    subtitle: 'Generate carousel scripts and video scripts that sell your product without feeling salesy',
    fields: [
      { key: 'productName', label: 'Product name', placeholder: 'e.g. The Budget Blueprint' },
      { key: 'audience',    label: 'Audience',     placeholder: 'e.g. millennials drowning in debt' },
      { key: 'result',      label: 'Key result',   placeholder: 'e.g. pay off debt in 6 months' },
      { key: 'keyword',     label: 'CTA keyword',  placeholder: 'e.g. BUDGET' },
    ],
    prompts: {
      instagram: f => `Create a 9-slide Instagram carousel selling my product ${f.productName} without feeling like an ad. It helps ${f.audience} achieve ${f.result}. Slide 1: viral hook using real news or celebrity quote. Slides 2-6: pure value teaching one thing my product solves. Slide 7: myth my product disproves. Slide 8: social proof or transformation story. Slide 9: soft CTA to comment ${f.keyword}. Tone: warm, real, conversational.`,
      youtube:   f => `Write a full YouTube video script for my product ${f.productName} without feeling like an ad. It helps ${f.audience} achieve ${f.result}. Structure: (1) Hook — 30 sec bold pattern interrupt. (2) Problem — paint the pain vividly. (3) Value — teach 3-5 things leading naturally to the product. (4) Proof — one real transformation story. (5) Soft pitch — mention ${f.keyword} naturally. Include timestamps. Tone: warm, conversational.`,
    },
  },
  {
    id: 5, slug: 'copy', label: 'Copy', emoji: '✍️',
    title: 'Sales Copy Writer',
    subtitle: 'Craft captions, titles, and descriptions that stop the scroll and drive real purchases',
    fields: [
      { key: 'productName', label: 'Product name',                placeholder: 'e.g. The Budget Blueprint' },
      { key: 'story',       label: 'Your story (1–2 sentences)', placeholder: 'e.g. I was $20k in debt at 26…' },
      { key: 'keyword',     label: 'CTA keyword',                placeholder: 'e.g. BUDGET' },
    ],
    prompts: {
      instagram: f => `Write an Instagram caption selling my product ${f.productName} without sounding salesy. Scroll-stopping hook first. Personal story: ${f.story}. List 3 things the buyer can do after purchasing. One line of social proof. Soft CTA to comment ${f.keyword}. Under 300 words. Tone: genuine, big sister energy, warm. No buzzwords. No hype.`,
      youtube:   f => `Write 5 YouTube title options and 3 thumbnail text options for a video about ${f.productName}. Context: ${f.story}. CTA keyword: ${f.keyword}. Titles: under 60 chars, SEO-optimized, curiosity-gap driven. Thumbnail text: 1-5 words, emotionally charged. Then a YouTube description under 200 words: hook, what they'll learn, product mention, 5 SEO hashtags.`,
    },
  },
  {
    id: 6, slug: 'script', label: 'Scripts', emoji: '🎬',
    title: 'Story Selling Script',
    subtitle: 'Write Reel and Shorts scripts that convert through authentic storytelling',
    fields: [
      { key: 'productName',  label: 'Product name',        placeholder: 'e.g. The Budget Blueprint' },
      { key: 'problem',      label: 'Daily relatable pain', placeholder: 'e.g. checking your bank account feeling sick' },
      { key: 'turningPoint', label: 'Your turning point',  placeholder: 'e.g. the month I almost missed rent' },
      { key: 'keyword',      label: 'CTA keyword',         placeholder: 'e.g. BUDGET' },
    ],
    prompts: {
      instagram: f => `Write a 60-second Instagram Reel script selling my product ${f.productName} through storytelling. Structure: (1) Open with: ${f.problem}. (2) My turning point: ${f.turningPoint}. (3) Reveal the solution. (4) One specific result. (5) CTA to comment ${f.keyword}. No hard selling. Real person voice. Include text-on-screen suggestions.`,
      youtube:   f => `Write a YouTube Shorts script (60 sec) AND a long-form intro hook (90 sec) for ${f.productName}. Both open with: ${f.problem}. Turning point: ${f.turningPoint}. Shorts: hook→problem→solution→CTA ${f.keyword}. Long-form: pattern interrupt→problem→tease solution→promise→subscribe CTA. Real person voice. On-screen text suggestions for the Short.`,
    },
  },
  {
    id: 7, slug: 'engage', label: 'Engage', emoji: '💬',
    title: 'Buyer Engagement Sequence',
    subtitle: 'Automated DM flows and community posts that warm leads and convert them to buyers',
    fields: [
      { key: 'keyword',     label: 'Trigger keyword',  placeholder: 'e.g. BUDGET' },
      { key: 'topic',       label: 'Post/video topic', placeholder: 'e.g. paying off debt on a low income' },
      { key: 'productName', label: 'Product name',     placeholder: 'e.g. The Budget Blueprint' },
      { key: 'audience',    label: 'Audience',         placeholder: 'e.g. millennials in debt' },
      { key: 'result',      label: 'Key result',       placeholder: 'e.g. build a 6-month debt payoff plan' },
    ],
    prompts: {
      instagram: f => `Write a 3-message Instagram DM sequence for someone who commented ${f.keyword} on my post about ${f.topic}. Product: ${f.productName} helps ${f.audience} achieve ${f.result}. Msg 1: deliver freebie warmly, make them feel seen. Msg 2 (24h later): transformation story. Msg 3 (48h later): soft urgency purchase invite. Tone: warm, genuine, friend-energy. No pressure.`,
      youtube:   f => `Write a YouTube community engagement sequence for someone who commented on my video about ${f.topic}. Product: ${f.productName} helps ${f.audience} achieve ${f.result}. Write: (1) pinned comment reply delivering free resource, (2) community post 48h later with transformation story + soft sell, (3) community post 5 days later with poll + CTA for ${f.keyword}. Warm, genuine tone.`,
    },
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// STREAM HELPER
// ─────────────────────────────────────────────────────────────────────────────
export async function streamGenerate({ prompt, onChunk, signal }) {
  const res = await fetch('/api/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-5',
      max_tokens: 1400,
      stream: true,
      messages: [{ role: 'user', content: prompt }],
    }),
    signal,
  })

  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err?.error?.message || `API error ${res.status}`)
  }

  const reader = res.body.getReader()
  const dec = new TextDecoder()
  let buf = ''

  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    buf += dec.decode(value, { stream: true })
    const lines = buf.split('\n')
    buf = lines.pop()
    for (const line of lines) {
      if (!line.startsWith('data: ')) continue
      const raw = line.slice(6).trim()
      if (raw === '[DONE]') return
      try {
        const p = JSON.parse(raw)
        if (p.type === 'content_block_delta' && p.delta?.type === 'text_delta') {
          onChunk(p.delta.text)
        }
      } catch {}
    }
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// ROOT ROUTER  (imports sub-pages)
// ─────────────────────────────────────────────────────────────────────────────
import Landing from './pages/Landing'
import ModeSelector from './pages/ModeSelector'
import Pipeline from './pages/Pipeline'

export default function App() {
  const [page, setPage] = useState('landing') // 'landing' | 'mode' | 'app'
  const [mode, setMode] = useState(null)      // 'brand' | 'product'

  const handleStart  = () => setPage('mode')
  const handleSelect = (m) => { setMode(m); setPage('app') }
  const handleBack   = () => setPage('mode')
  const handleSwitch = () => setPage('mode')

  return (
    <>
      {page === 'landing' && <Landing onStart={handleStart} />}
      {page === 'mode'    && <ModeSelector onSelect={handleSelect} />}
      {page === 'app'     && <Pipeline mode={mode} onBack={handleBack} onSwitchMode={handleSwitch} />}
    </>
  )
}
