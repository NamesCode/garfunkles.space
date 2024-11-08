export const langData = [
  {
    lang: "Python",
    info:
      "I can't imagine actually using this without Nix, virtual envs are actual hell",
  },
  {
    lang: "JS",
    info: "Pretty fun, amazing to use with sveltekit o(>ω)",
  },
  {
    lang: "Swift",
    info: "May aswell if I'm going to be a soyboy macOS user",
  },
  {
    lang: "Java",
    info: "Having a job in the future sure sounds real nice",
  },
  {
    lang: "SQL",
    info: "technically not a language but (also its pronounced ESS-QUE-ELL)",
  },
];

export const stuffIWantToDo = [
  {
    thing: "Graphics programming",
    info: "I just think it'd be fun to do",
  },
  {
    thing: "ML",
    info:
      "It's just pretty cool. Also theres an NPU in apple silicon so I may aswell take advantage that.",
  },
  {
    thing: "Make a custom keyboard",
    info:
      "It'd be fun and interesting to design and build a keyboard from the ground up.",
  },
  {
    thing: "DevOPs",
    info:
      "It's pretty useful and it seems fun. FOLLOW UP FROM LATER DATE: After having done some DevOPs for this site I can comfortably say it's   p a i n. Althought, it is quite fun",
  },
];

export const socials = [
  {
    type: "Email",
    name: "lasagna@garfunkles.space",
    href: "mailto:lasagna@garfunkles.space",
  },
  {
    type: "Github",
    name: "NamesCode",
    href: "https://github.com/NamesCode",
  },
  {
    type: "Discord",
    name: "garfunklemd",
    href: "https://discord.com/users/972304699149676564",
  },
  {
    type: "Fedi",
    name: "@Name@labyrinth.zone",
    href: "https://labyrinth.zone/Name",
  },
];

export const finishedProjects = [
  {
    project: "Garfunkles.space",
    description:
      "<p>This awful website has taken me far to long to make and go live, with many hiccups along the way. It's meant to have an early internet vibe but I don't really think I pulled it off. This website still isn't finished and any feedback on how I could improve it would be greatly appreciated!</p>",
  },
  {
    project: "Simple app for kaemojis",
    description:
      "<p>I personally prefer emoticons to emojis and find it annoying to open a browser just to go to <a href='https://kaomoji.ru/en/'>http://kaomoji.ru/</a> so I thought of making a simple app for it using egui which can be opened with a single key press.<br><sub>of course once I start this the website goes down (￣ ￣|||)</sub></p>",
  },
];

export const projects = [
  {
    project: "Linelapse",
    description:
      "<p>I find screen recording for code timelapses to be an overly cumbersome process so I've started building a tool that takes in a text input and renders it to a timelapse video. The main usage of this would be to feed it the results of <code>$ diff -u file1 file2</code> and have it produce a timelapse of all the file changes as an mp4. I've already started working on this project and I plan on releasing it under a Common clause BSD 3.0 license.</p>",
  },
  {
    project: "Vel / Velox",
    description:
      "<p>Whilst I love Svelte syntax, I find myself wanting to use it without the JS bloat and within my Rust backends. Because of this I've started work on a Svelte-like templating engine in Rust. C-FFI will be introduced eventually.</p>",
  },
  {
    project: "TUI based game engine (Name undecided)",
    description:
      "<p>I'm unaware of any simple game engines (This is more of a framework) for creating games for the terminal so I think it'd be fun to make something to do so. I want it to provide templates for output, easy to use bindings for audio playback and the ability to display images to the terminal either as text or using new image api's. I'll probably write a core framework for use in Rust and library interfacing then make a full app using egui or iced which provides node based editing for scenes and scripting with Lua.</p>",
  },
  {
    project: "pins-and-badges.com",
    description:
      "<p>I run a small custom pin manufacturing thing and I'm planning on creating a website for it so that I can ship globally ^^. The website will be like your average ecommerce with an area where you can browse premade pins, wholesale enamel pins and design a custom 25mm badge. Pins will hopefully be shipped world wide with payments handled by stripe. We will not hold any user data besides records of purchases and custom badge order ids, these invoices and designs will be stored anonymously with the user having to remember their order id. We already have the domain for it! <a href='http://pins-and-badges.com'>http://pins-and-badges.com</a></p>",
  },
  {
    project: "The wired (Name undecided, sadly can't use the wired lmao)",
    description:
      "<p>Since Big Zuc and the rest of big tech are pushing for VR, I thought it'd be funny to make an FOSS way to view the <hover-info>unlikely metaverse<hover-info-text>I doubt this will ever be a thing but it gets hype so hey who knows lmao</hover-info-text></hover-info> in a style similar to webbrowsers. I'm going to design it so that the wired engine will implement some basic functionality like movement jumping and collisions and the server will send the models (ideally low poly as that'd be awful to work with bulky ones) and wasm code that interacts with the browser but it's just an idea.</p>",
  },
];

export const navData = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  // {
  //   title: "Gitea",
  //   href: "https://git.garfunkles.space",
  // },
  {
    title: "Email",
    href: "mailto:lasagna@garfunkles.space",
  },
];
