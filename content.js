/* ============================================================
   THE BIFROST SCHOOL - SITE CONTENT
   >>> EDIT THIS FILE TO UPDATE THE TEXT ON THE SITE <<<

   Almost every word and number shown on the site lives here.
   Change a value, save the file, refresh the page to preview,
   then commit and push to publish.

   Tips:
   - Keep the quotes around text values and the comma at the
     end of each entry.
   - Money amounts are plain numbers: no $ sign, no commas.
   - Things wrapped in [ ... ] are lists; each { ... } inside
     is one card/row on the page. You can add or remove items.
   - A few strings are edited directly in index.html instead:
     the page headings for "Our Philosophy" and "What Makes Us
     Different", the founder bio, and the advisor cards.
   ============================================================ */

window.BIFROST_CONTENT = {

  /* ---------- General ---------- */
  schoolName: "The Bifrost School",
  donorPassword: "bifrost2026!",   // passphrase for the Development tab
  donateUrl: "#",                  // "#" sends visitors to the contact form; replace with a real donation link when ready

  /* ---------- Hero (opening screen) ---------- */
  heroLede: "We partner with schools to turn their curriculum into epic quests.",
  heroSubLede: "The magic makes it real.",
  missionQuote: "Sometimes you have to forget the real world to remember what’s real.",

  /* ---------- For Schools (partnership pitch) ---------- */
  forSchoolsEyebrow: "What We Do",
  forSchoolsTitle: "Bring Bifrost to Your School",
  forSchoolsBody: "The Bifrost School works with schools as an embedded creative partner. We take the lessons your students are already learning, build an original RPG adventure world around them, and run the sessions ourselves, in person or online.",
  forSchoolsSteps: [
    { title: "Integrate", body: "We work with your teachers to map the units, lessons, and skills your students are studying." },
    { title: "Design", body: "We build a custom adventure world where your curriculum becomes the magic, the monsters, and the quests." },
    { title: "Run", body: "We run the weekly sessions ourselves, bringing the world to life while your students learn inside it." }
  ],
  forSchoolsCta: "Start a Partnership",

  /* ---------- What Makes Us Different (cards) ---------- */
  wmudCards: [
    {
      title: "Role-playing is immersive",
      body: "Small groups of 4–6 students huddle around a table, creating and roleplaying fantasy characters that go on epic quests."
    },
    {
      title: "Learning is driven by a quest",
      body: "Traditional education presents learning as tasks with no context. At The Bifrost School, learning is driven by a quest."
    },
    {
      title: "Academics are seamlessly integrated",
      body: "Understanding ecology might be integral to helping a group of Druids; knowledge of political systems might help students form the government of a new fantasy city. <br><br>It’s so seamless, they won’t realize it’s “school.”"
    },
    {
      title: "Learning content is the magic",
      body: "<ul class=\"wmud-list\"><li><strong>Language:</strong> Writing “Apple” with the appropriate magical ink might conjure one.</li><li><strong>Math:</strong> A multiplication spell might turn that apple into many.</li><li><strong>Music:</strong> Rhythmic movement, as an animating force, might lift it into the air.</li></ul>"
    }
  ],

  /* ---------- Development tab: funding need ---------- */
  fundingEyebrow: "Current Funding Need",
  fundingTitle: "Development & Pilot Year",
  fundingSub: "12-month development & pilot goal",
  fundingGoal: 254000,
  amountRaised: 0,                 // update this as donations come in
  fundingBlurb: "This funding covers the development, pilots, and first school partnerships.",
  milestonesLabel: "Development Milestones",
  milestones: [
    { num: "1", strong: "Build the narrative world.", body: "Contract writers and game designers to develop the RPG setting, characters, and story systems that any school's curriculum can be built into." },
    { num: "2", strong: "Build the integration method.", body: "Work with experienced educators to develop the process that turns a school's existing units and standards into quests, so every partnership starts from a proven playbook instead of a blank page." },
    { num: "3", strong: "Run pilot partnerships.", body: "Partner with our first schools to run live sessions, gather feedback from their teachers and students, and refine the model before we take on more." },
    { num: "4", strong: "Hire and train the creative team.", body: "Recruit and onboard the writers, game designers, and session leaders who build each school's world and run the table, and develop the training that defines how we do it." },
    { num: "5", strong: "Build for scale.", body: "Finalize the platform, marketing, and curriculum sales infrastructure so we can take on more partner schools from Year 1 onward." }
  ],

  /* ---------- Budget modal ("See full plan") ---------- */
  budgetTitle: "12-Month Development Plan",
  budgetSub: "Pilot Year Budget Breakdown",
  budgetTotal: 254000,
  budgetCategories: [
    { label: "People", desc: "Executive Director, narrative and game design, and educator contractors", amount: 200200 },
    { label: "Formation & Legal", desc: "Registration, legal agreements, and fiscal sponsor fee", amount: 24620 },
    { label: "Operations", desc: "Insurance, materials, online platform, and marketing", amount: 7660 },
    { label: "Contingency", desc: "Reserve of roughly 10% on pre-fee costs", amount: 21520 }
  ],
  budgetNote: "Contractor hours are front-loaded during the build phase then taper. Educator engages once pilots launch. Fiscal sponsor fee at 8% of total raise (Fractured Atlas).",

  /* ---------- Revenue streams ---------- */
  streamsEyebrow: "Revenue Streams",
  streamsTitle: "Three Ways the School Sustains Itself",
  streamsBody: "The Bifrost School is designed with overlapping revenue streams, each reinforcing the others. School partnerships anchor the model. Products extend the mission and generate income with minimal additional cost.",
  streams: [
    { cls: "s1", label: "School Partnerships", body: "Schools hire The Bifrost School to design a custom RPG learning experience built around their curriculum, and to run the sessions, in person or online. Each partnership is a year-long engagement." },
    { cls: "s2", label: "Audio Adventures", body: "Story-driven audio content that extends the curriculum beyond the classroom. Narrated and produced in-house, sold as standalone digital products and subscriptions." },
    { cls: "s3", label: "Curriculum Sales", body: "Other tutors, micro-schools, and homeschool co-ops purchase the Bifrost curriculum as one-time packages." }
  ],

  /* ---------- Five-year roadmap ---------- */
  roadmapEyebrow: "The Roadmap",
  roadmapTitle: "Five Years to Full Capacity",
  roadmapIntro: "Once the development year is complete, here is how The Bifrost School grows from its first partner schools to a self-sustaining operation.",
  /* One entry per year. sch = partner schools, audioT = audio titles
     for sale, audioU = units sold per title, lic = curriculum packages
     sold that year (one-time sales). */
  yearRamps: [
    { sch: 1, audioT: 1, audioU: 20, lic: 0, label: "Launch", note: "Our first partner school. Donations remain essential as the program proves itself and builds its reputation." },
    { sch: 3, audioT: 3, audioU: 35, lic: 2, label: "Traction", note: "Three school partnerships. First curriculum sales. Donation need declining." },
    { sch: 5, audioT: 5, audioU: 60, lic: 6, label: "Growth", note: "Five partner schools. Curriculum and audio sales becoming meaningful." },
    { sch: 7, audioT: 8, audioU: 90, lic: 12, label: "Scale", note: "Seven partner schools. Product revenue growing. Donation need closing significantly." },
    { sch: 9, audioT: 10, audioU: 120, lic: 18, label: "Capacity", note: "Nine partner schools. Three revenue streams working together. The school reaches self-sufficiency." }
  ],

  /* ---------- Financial model assumptions ----------
     Used to calculate revenue, costs, and donation need per year. */
  weeks: 48,             // program weeks per year at each partner school
  facilitatorRate: 28,   // hourly rate for session facilitation staff
  payroll: 18,           // payroll tax + overhead, percent
  platform: 80,          // software/platform cost per month
  marketing: 200,        // marketing budget per month
  audioPrice: 12,        // price per audio adventure unit
  curriculumPrice: 500,  // one-time price per curriculum package
  /* PLACEHOLDER: what a partner school pays per year for a full
     engagement (curriculum integration + world design + weekly
     facilitation). Adjust to your real pricing. The model assumes
     each partner school takes about 3 facilitation hours per week
     at facilitatorRate to serve. */
  partnershipFee: 24000,

  /* ---------- Revenue chart ---------- */
  chartEyebrow: "Revenue Projection",
  chartTitle: "Donations Needed Each Year",
  chartBody: "As program and partnership revenue grow year over year, the donation need declines. By Year 5, the school becomes self-sustaining.",

  /* ---------- Donate tab ---------- */
  ctaEyebrow: "Join the Quest",
  ctaTitle: "Support The Bifrost School",
  ctaGoalLabel: "Current Funding Goal",
  ctaBody: "Every gift brings a child closer to a classroom where learning feels like an adventure. Your support bridges the gap between development and a self-sustaining school.",
  donateBtnText: "Donate",
  fiscalNote: "Fiscally sponsored under IRC §501(c)(3)",
  fiscalNote2: "Donations are tax-deductible",
  devPlanNote: "Want to see the full development plan and budget? Reach out and we'll share the password.",

  /* ---------- About tab ---------- */
  aboutStoryTitle: "How The Bifrost School Came to Be",
  aboutStory: [
    "In 2021, after leaving my job at Netflix disillusioned and burnt out, I wrote a series of letters from the future: a writing exercise where I wrote stories of imaginary people that my future self had impacted. They were OK… but one story jumped out as markedly different.",
    "I told a story of Evan, a middle-schooler in San Francisco, who felt disenchanted with school, with his culture, and with his life. He was a fantasy nerd through and through who spent his afternoons dreaming of how it would feel to ride on the back of Aslan and ignoring his math homework.",
    "He needed something.",
    "Then he saw a poster covered in beautiful fantasy artwork: “Do you love fantasy? Would you rather be in a book than at school? Step into a magical world of adventure at The Bifrost School of Fantasy.” When he arrived at the beautiful Victorian home with an ornate wooden sign that read, “The Bifrost School: The Magic Makes it Real,” he found what he was looking for.",
    "In that moment, the Bifrost School was born.",
    "The Bifrost School is a place for nerds and weirdos: kids who know somewhere inside themselves that school (and life) can be more. And it’s a place where their love of story can dance with their learning in a way they’ll never experience in traditional school.",
    "As a culture, we’ve always had a fascination with magical schools. Whether it be Harry Potter, the Nevermore Academy, the School of Roke, the Long Price Quartet, or My Hero Academia, there’s just something about a school that feels… magical. I think we keep inventing magical schools because we want our own schools to be better.",
    "So join me, and help make the Bifrost School a reality."
  ],
  aboutFounderTitle: "Jesse Livingston",
  aboutFounderRole: "Founder",

  /* ---------- Contact tab ---------- */
  contactTitle: "Contact Us",
  contactBody: "Whether you’re a school interested in partnering, an educator interested in the curriculum, or a prospective donor, we’d love to hear from you.",
  formNameLabel: "Your Name",
  formEmailLabel: "Email Address",
  formInterestLabel: "I’m interested as a…",
  formMessageLabel: "Message",
  formSubmitText: "Send Message",
  formSuccessText: "Thank you! We’ll be in touch soon."

};
