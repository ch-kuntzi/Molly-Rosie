/**
 * Molly & Rosie — A Story of Messy Hair & Big Dreams
 * Interactive Storybook
 */

document.addEventListener('DOMContentLoaded', () => {

    const book = document.getElementById('book');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const progressBar = document.getElementById('progress-bar');

    // ========================================
    // LINE ART SVGs — delicate pen-and-ink style
    // ========================================
    const lineArtSVGs = {
        baby: `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" color="#5a4030">
            <circle cx="40" cy="28" r="12"/>
            <path d="M28 38 Q30 55, 40 58 Q50 55, 52 38"/>
            <path d="M36 25 l0 2"/><path d="M44 25 l0 2"/>
            <path d="M37 31 Q40 34, 43 31"/>
            <path d="M22 60 Q30 52, 40 58 Q50 52, 58 60"/>
        </svg>`,
        star: `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" color="#5a4030">
            <path d="M40 10 L44 30 L60 30 L48 42 L52 60 L40 50 L28 60 L32 42 L20 30 L36 30Z"/>
        </svg>`,
        dog: `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" color="#5a4030">
            <path d="M25 30 Q20 15, 28 20 L35 28"/>
            <path d="M55 30 Q60 15, 52 20 L45 28"/>
            <ellipse cx="40" cy="38" rx="18" ry="14"/>
            <circle cx="35" cy="35" r="2"/><circle cx="45" cy="35" r="2"/>
            <ellipse cx="40" cy="42" rx="4" ry="3"/>
            <path d="M40 45 L40 48"/>
            <path d="M25 52 Q30 60, 40 62 Q50 60, 55 52"/>
        </svg>`,
        sparkle: `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" color="#5a4030">
            <path d="M40 15 L42 35 L60 40 L42 45 L40 65 L38 45 L20 40 L38 35Z"/>
            <circle cx="22" cy="20" r="2"/><circle cx="58" cy="60" r="2"/>
            <circle cx="60" cy="22" r="1.5"/>
        </svg>`,
        shoe: `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" color="#5a4030">
            <path d="M20 50 Q22 35, 35 30 Q45 28, 50 32 L55 38 Q65 40, 68 48 L68 52 Q60 55, 20 55Z"/>
            <path d="M25 50 L65 50"/>
            <path d="M30 42 L33 38"/><path d="M38 40 L41 36"/><path d="M46 40 L49 37"/>
        </svg>`,
        trophy: `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" color="#5a4030">
            <path d="M28 20 L52 20 L50 42 Q48 50, 40 52 Q32 50, 30 42Z"/>
            <path d="M28 24 Q18 26, 18 34 Q18 40, 28 38"/>
            <path d="M52 24 Q62 26, 62 34 Q62 40, 52 38"/>
            <path d="M40 52 L40 58"/>
            <path d="M30 60 L50 60"/><path d="M32 62 L48 62"/>
        </svg>`,
        gymnast: `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" color="#5a4030">
            <circle cx="40" cy="18" r="6"/>
            <path d="M40 24 L40 45"/>
            <path d="M40 30 L25 22"/><path d="M40 30 L55 22"/>
            <path d="M40 45 L28 60"/><path d="M40 45 L52 60"/>
            <path d="M15 65 L65 65" stroke-width="2"/>
        </svg>`,
        medal: `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" color="#5a4030">
            <path d="M32 15 L40 30 L48 15"/>
            <circle cx="40" cy="42" r="14"/>
            <circle cx="40" cy="42" r="9"/>
            <path d="M36 42 L39 45 L45 38"/>
        </svg>`,
        husky: `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" color="#5a4030">
            <path d="M22 35 L18 15 L30 28"/>
            <path d="M58 35 L62 15 L50 28"/>
            <ellipse cx="40" cy="40" rx="22" ry="18"/>
            <circle cx="33" cy="36" r="2.5"/><circle cx="47" cy="36" r="2.5"/>
            <path d="M37 44 L40 47 L43 44"/>
            <path d="M40 47 L40 50"/>
        </svg>`,
        clipboard: `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" color="#5a4030">
            <rect x="22" y="18" width="36" height="48" rx="3"/>
            <path d="M34 18 L34 12 Q34 10, 36 10 L44 10 Q46 10, 46 12 L46 18"/>
            <path d="M30 30 L50 30"/><path d="M30 38 L50 38"/><path d="M30 46 L42 46"/>
        </svg>`,
        bracelet: `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" color="#5a4030">
            <circle cx="40" cy="40" r="20"/>
            <circle cx="40" cy="40" r="14"/>
            <circle cx="40" cy="20" r="3"/><circle cx="56" cy="32" r="3"/>
            <circle cx="56" cy="48" r="3"/><circle cx="40" cy="60" r="3"/>
            <circle cx="24" cy="48" r="3"/><circle cx="24" cy="32" r="3"/>
        </svg>`,
        jar: `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" color="#5a4030">
            <path d="M28 25 L28 65 Q28 68, 32 68 L48 68 Q52 68, 52 65 L52 25"/>
            <path d="M26 22 L54 22 L54 25 L26 25Z"/>
            <path d="M30 55 Q35 50, 40 55 Q45 50, 50 55"/>
            <path d="M33 45 Q38 40, 43 45"/>
        </svg>`,
        car: `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" color="#5a4030">
            <path d="M15 45 L20 32 Q25 25, 35 25 L50 25 Q58 25, 62 32 L67 45"/>
            <path d="M12 45 L68 45 L68 55 Q68 58, 65 58 L15 58 Q12 58, 12 55Z"/>
            <circle cx="25" cy="58" r="5"/><circle cx="55" cy="58" r="5"/>
            <path d="M35 35 L45 35"/>
        </svg>`,
        heart: `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" color="#5a4030">
            <path d="M40 65 Q15 45, 15 30 Q15 18, 27 18 Q35 18, 40 28 Q45 18, 53 18 Q65 18, 65 30 Q65 45, 40 65Z"/>
        </svg>`,
        sunset: `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" color="#5a4030">
            <circle cx="40" cy="40" r="12"/>
            <path d="M40 20 L40 15"/><path d="M40 65 L40 60"/>
            <path d="M20 40 L15 40"/><path d="M65 40 L60 40"/>
            <path d="M26 26 L22 22"/><path d="M58 58 L54 54"/>
            <path d="M54 26 L58 22"/><path d="M22 58 L26 54"/>
            <path d="M10 55 Q25 48, 40 55 Q55 48, 70 55"/>
        </svg>`,
        paw: `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" color="#5a4030">
            <ellipse cx="40" cy="48" rx="14" ry="10"/>
            <ellipse cx="28" cy="32" rx="6" ry="7"/>
            <ellipse cx="40" cy="28" rx="5" ry="6"/>
            <ellipse cx="52" cy="32" rx="6" ry="7"/>
        </svg>`,
        bandage: `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" color="#5a4030">
            <path d="M18 50 Q15 38, 25 30 L55 50 Q65 58, 62 68 Q58 78, 48 72Z"/>
            <path d="M25 30 Q28 20, 38 22 L68 42 Q65 58, 55 50Z"/>
            <circle cx="42" cy="44" r="2"/><circle cx="48" cy="48" r="2"/>
            <circle cx="42" cy="52" r="2"/><circle cx="36" cy="48" r="2"/>
        </svg>`,
        muscle: `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" color="#5a4030">
            <path d="M25 55 L25 38 Q25 22, 40 22 Q55 22, 55 38 L55 55"/>
            <path d="M32 38 Q32 30, 40 30 Q48 30, 48 38"/>
            <path d="M55 35 Q62 32, 65 38 Q68 44, 62 46"/>
        </svg>`,
        leaf: `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" color="#5a4030">
            <path d="M40 65 Q20 50, 20 30 Q20 15, 40 15 Q60 15, 60 30 Q60 50, 40 65Z"/>
            <path d="M40 65 L40 25"/>
            <path d="M40 35 L30 28"/><path d="M40 42 L50 35"/><path d="M40 50 L32 44"/>
        </svg>`,
        book: `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" color="#5a4030">
            <path d="M15 20 L40 25 L65 20 L65 60 L40 55 L15 60Z"/>
            <path d="M40 25 L40 55"/>
            <path d="M22 28 L35 31"/><path d="M22 35 L35 38"/><path d="M22 42 L35 45"/>
        </svg>`,
        worm: `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" color="#5a4030">
            <path d="M15 50 Q20 35, 30 40 Q40 45, 45 35 Q50 25, 60 30 Q70 35, 65 45"/>
            <circle cx="65" cy="43" r="3"/>
            <circle cx="64" cy="42" r="0.8"/><circle cx="67" cy="42" r="0.8"/>
            <path d="M25 55 Q30 60, 35 55"/>
            <path d="M40 50 Q45 55, 50 50"/>
        </svg>`,
        dare: `<svg viewBox="0 0 80 80" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" color="#5a4030">
            <circle cx="40" cy="30" r="15"/>
            <path d="M35 26 L35 30"/><path d="M45 26 L45 30"/>
            <path d="M35 36 Q40 42, 45 36"/>
            <path d="M40 45 L40 55"/>
            <path d="M30 50 L50 50"/>
            <path d="M33 60 L47 60"/>
            <path d="M25 18 L22 10"/><path d="M55 18 L58 10"/>
        </svg>`
    };

    // Map: each chapter gets [topRight, bottomLeft] line art keys
    const chapterArt = [
        ['baby', 'star'],
        ['dog', 'sparkle'],
        ['worm', 'dare'],
        ['shoe', 'trophy'],
        ['gymnast', 'medal'],
        ['husky', 'clipboard'],
        ['bracelet', 'jar'],
        ['car', 'heart'],
        ['sunset', 'paw'],
        ['bandage', 'muscle'],
        ['leaf', 'book']
    ];

    // ========================================
    // THE STORY — Light, Funny, Inspiring
    // ========================================
    const storyChapters = [
        {
            title: "The Girl Who Arrived Backwards",
            text: "Some babies take their time. Molly did not. She arrived on a cold February afternoon in a hospital in Illinois, feet-first and in a hurry\u2014a breech baby who apparently wanted to see where she\u2019d been before she bothered looking where she was going. Her father held her while the Daytona 500 played softly on a small TV in the corner. It was the last quiet moment either of them would have for the next twenty-one years.",
            image: "assets/newborn.png"
        },
        {
            title: "Google Eyes & Gravity",
            text: "By the time Molly was three, her parents had invented a name for it: \u2018Google Eyes.\u2019 It was that look she got\u2014wide, electric, and alarmingly focused\u2014right before she did something spectacular. Like the time she launched herself over the back of the living room couch in a full front flip, stuck the landing on the carpet, and turned around to bow. She was a tornado of energy, a girl who refused to let gravity tell her what she could or couldn\u2019t do.",
            image: "assets/google_eyes_improved.png"
        },
        {
            title: "The Worm Dare",
            text: "Molly had already earned a reputation on the block. So when the neighbor John said \u2018I dare you to eat a worm,\u2019 he really should have known better. Molly didn\u2019t hesitate. She marched straight to the yard, found one, held it high like a trophy, and ate it\u2014slowly, deliberately, maintaining eye contact with John the entire time. His daughters and Molly\u2019s younger sister stood frozen behind them, wide-eyed with fear and disgust, clutching each other like they\u2019d just witnessed a crime.",
            image: "assets/worms.png",
            imgClass: "shift-up"
        },
        {
            title: "Faster Than the Boys",
            text: "At seven, recess was war\u2014and Molly was undefeated. The boys at school made the mistake of challenging her to a race exactly once. She lined up with her messy pigtails flying like victory flags, and when the teacher said \"Go,\" she was already three steps ahead. She crossed the finish line laughing while four boys tried to figure out what had just happened. She never slowed down to explain.",
            image: "assets/racing.png"
        },
        {
            title: "The Blue Mat",
            text: "Gymnastics found Molly the way lightning finds a rod. She stepped onto the blue mat at seven and discovered a world where being wild was an advantage. Every backflip was a question mark she\u2019d answer in midair. Every beam walk was a dare she\u2019d win with her chin up. She racked up state championships the way other kids collected Pok\u00e9mon cards\u2014relentlessly, joyfully, and with chalk dust in her hair.",
            image: "assets/gymnastics.png"
        },
        {
            title: "The Grand Plan",
            text: "At ten years old, Molly fell in love. Not with a boy\u2014don\u2019t be ridiculous. With a photograph. She saw a picture of a Siberian Husky with ice-blue eyes and a silver coat, and that was it. She would lie in bed at night, dreaming of high-speed sled runs across the tundra, her mind already halfway to the Arctic. The decision was made. She would have a Husky. Problem was, Huskies aren\u2019t free, and the Husky Fund mason jar on her dresser was looking suspiciously light.",
            image: "assets/husky_dreaming.png"
        },
        {
            title: "The Bracelet Empire",
            text: "Molly\u2019s bedroom became a factory. Spools of parachute cord in every color lined her shelves. Buckles and clasps cluttered her desk. She braided and knotted and wove until her fingers were stiff and rainbow-stained. She sold bracelets at school, at gymnastics meets, at the neighbor\u2019s garage sale, and to anyone who made the mistake of making eye contact with her while she was in \u2018sales mode.\u2019 Every dollar went into a mason jar labeled, in her best handwriting: HUSKY FUND.",
            image: "assets/bracelets.png"
        },
        {
            title: "The Change in Plan",
            text: "The car ride was the longest hour of her life. She sat in the backseat with her savings envelope, her knees bouncing, her Google Eyes at maximum intensity. She was on her way to see a puppy. She had the Husky name picked out. She had the plan. And then a tiny black-and-white puppy with floppy ears and spots like a work of abstract art waddled toward her on clumsy paws\u2014and Molly forgot every plan she\u2019d ever made. She dropped to her knees and the puppy crashed into her face. The Husky dream evaporated in an instant.",
            image: "assets/puppy_meeting.png"
        },
        {
            title: "Rosie & The Dock",
            text: "There is a photograph\u2014and if you\u2019ve seen it, you know it. Molly and Rosie, sitting on a wooden dock at sunset. The lake is gold. The sky is on fire. Molly has her arm around Rosie, and Rosie is leaning into her the way only your best friend can\u2014all weight and trust and warm fur. Black ears, spotted coat, blue collar glinting in the last light. They are both looking at the horizon. Neither of them is in a hurry to go anywhere at all. It\u2019s the only photo where Molly is completely still.",
            image: "assets/dock.png"
        },
        {
            title: "The Broken Wing",
            text: "High school was a fortress she built brick by brick: near-perfect grades, state gymnastics, self-taught nail art that was annoyingly flawless. Then, without warning, the mat fought back. An elbow shattered. Surgery followed. The gym went quiet. For the first time in her life, Molly had to sit still\u2014really still\u2014and she hated every second of it. Rosie, who had never been a particularly patient dog herself, somehow understood. She curled up next to Molly every single day of recovery, her spotted side rising and falling like a metronome.",
            image: "assets/broken_wing.png"
        },
        {
            title: "Reaching New Heights",
            text: "Now twenty-one, Molly doesn\u2019t just walk toward her future\u2014she runs at it. Her mind is on the next big milestones: her CRNA graduation and the day Adrien returns from army training. Whether she\u2019s mastering color-coded nursing notes or pushing for a new personal best at CrossFit, Molly brings a relentless drive for excellence to everything she touches. She is a girl built of goals and grit, always looking forward to the next challenge.",
            image: "assets/crna.png",
            imgClass: "shift-up"
        }
    ];

    // ========================================
    // HELPER: GENERATE CHAPTER HTML
    // ========================================
    function getChapterHTML(chapter, index, isBackFace = false) {
        if (!chapter) return '';

        // Polaroid photo with tape
        const rotations = [-1.8, 1.2, -0.7, 1.6, -1.3, 0.9, -1.1, 1.4, -0.5, 1.8, -1.0];
        const rot = rotations[index % rotations.length];
        const illustrationHTML = chapter.image
            ? `<div class="page-illustration ${chapter.imgClass || ''}" style="transform: rotate(${rot}deg)">
                <div class="photo-tape tape-tl"></div>
                <div class="photo-tape tape-tr"></div>
                <div class="photo-tape tape-bl"></div>
                <div class="photo-tape tape-br"></div>
                <div class="polaroid-frame">
                    <img src="${chapter.image}" alt="${chapter.title}">
                </div>
               </div>`
            : '';

        // Line art decorations
        const arts = chapterArt[index] || ['paw', 'leaf'];
        const topArt = lineArtSVGs[arts[0]] || '';
        const bottomArt = lineArtSVGs[arts[1]] || '';

        const lineArtHTML = `
            <div class="line-art top-right">${topArt}</div>
            <div class="line-art bottom-left">${bottomArt}</div>
        `;

        return `
            ${lineArtHTML}
            <div class="chapter-title">${chapter.title}</div>
            <div class="chapter-divider"></div>
            <div class="story-text drop-cap">${chapter.text}</div>
            ${illustrationHTML}
            <div class="page-number">${index + 1}</div>
        `;
    }

    // ========================================
    // DYNAMIC PAGE GENERATION (No Blank Pages)
    // ========================================
    // Distribute chapters across front/back faces
    for (let i = 0; i < storyChapters.length; i += 2) {
        const pageDiv = document.createElement('div');
        pageDiv.className = 'page';
        pageDiv.id = `p_sheet_${i / 2}`;

        const chFront = storyChapters[i];
        const chBack = storyChapters[i + 1];

        // If this is the last chapter and it's on a front face (odd total chapters),
        // we'll put the Author Page on the back of it.
        let backContentHTML = '';
        if (chBack) {
            backContentHTML = getChapterHTML(chBack, i + 1, true);
        } else {
            // No more chapters, put Author Page here
            backContentHTML = `
                <div class="back-cover-inner" style="box-shadow: none; background: transparent; padding: 20px;">
                    <div class="author-section">
                        <div class="author-photo-frame">
                            <img src="assets/author_dock_final.png" alt="Molly & Rosie">
                        </div>
                        <h2 class="author-heading">About the Author</h2>
                        <div class="chapter-divider" style="margin: 12px auto 18px;"></div>
                        <p class="author-bio">
                            <strong>Molly</strong> arrived in the world backwards, in a hurry, and hasn\u2019t slowed down since. She grew up in the Midwest with chalk-dusted hands, a jar full of bracelet money, and a dog who understood her better than most people.
                        </p>
                        <p class="author-bio">
                            A former state gymnast turned nursing student, Molly is currently pursuing her dream of becoming a Certified Registered Nurse Anesthetist (CRNA). When she\u2019s not buried in textbooks, she\u2019s tending her indoor jungle, mastering color-coded notes, or sitting on a dock somewhere with Rosie\u2014the spotted, floppy-eared best friend she never planned for but couldn\u2019t live without.
                        </p>
                        <p class="author-bio" style="font-style: italic; opacity: 0.8; margin-top: 18px; line-height: 1.6;">
                            Living with plan, purpose, and being in the moment.
                        </p>
                    </div>
                </div>
            `;
        }

        pageDiv.innerHTML = `
            <div class="page-face page-front">
                ${getChapterHTML(chFront, i)}
            </div>
            <div class="page-face page-back">
                ${backContentHTML}
            </div>
        `;
        book.appendChild(pageDiv);
    }

    // If we had an even number of chapters, we still need an Author Page sheet
    if (storyChapters.length % 2 === 0) {
        const authorSheet = document.createElement('div');
        authorSheet.className = 'page';
        authorSheet.innerHTML = `
            <div class="page-face page-front">
                <div class="back-cover-inner" style="box-shadow: none; background: transparent; padding: 20px;">
                    <div class="author-section">
                        <div class="author-photo-frame">
                            <img src="assets/author_dock_final.png" alt="Molly & Rosie">
                        </div>
                        <h2 class="author-heading">About the Author</h2>
                        <div class="chapter-divider" style="margin: 12px auto 18px;"></div>
                        <p class="author-bio">
                            <strong>Molly</strong> arrived in the world backwards, in a hurry, and hasn\u2019t slowed down since. She grew up in the Midwest with chalk-dusted hands, a jar full of bracelet money, and a dog who understood her better than most people.
                        </p>
                        <p class="author-bio">
                            A former state gymnast turned nursing student, Molly is currently pursuing her dream of becoming a Certified Registered Nurse Anesthetist (CRNA). When she\u2019s not buried in textbooks, she\u2019s tending her indoor jungle, mastering color-coded notes, or sitting on a dock somewhere with Rosie\u2014the spotted, floppy-eared best friend she never planned for but couldn\u2019t live without.
                        </p>
                        <p class="author-bio" style="font-style: italic; opacity: 0.8; margin-top: 18px; line-height: 1.6;">
                            Living with plan, purpose, and being in the moment.
                        </p>
                    </div>
                </div>
            </div>
            <div class="page-face page-back"></div>
        `;
        book.appendChild(authorSheet);
    }

    // Final Back Cover (External)
    const finalBackCover = document.createElement('div');
    finalBackCover.className = 'page cover-page';
    finalBackCover.innerHTML = `
        <div class="page-face page-front"></div>
        <div class="page-face page-back cover-back">
            <div class="cover-border"></div>
        </div>
    `;
    book.appendChild(finalBackCover);

    // ========================================
    // PAGE NAVIGATION
    // ========================================
    let allPages = document.querySelectorAll('.page');
    let currentPage = 0;

    function updateZIndex() {
        allPages.forEach((p, i) => {
            if (p.classList.contains('flipped')) {
                // Flipped pages (left side): later pages on top so their back face is visible
                p.style.zIndex = i + 1;
            } else {
                // Unflipped pages (right side): earlier pages on top so their front face is visible
                p.style.zIndex = allPages.length - i;
            }
        });
    }

    function goNext() {
        if (currentPage < allPages.length) {
            const page = allPages[currentPage];

            // Fix Bleed-through: Bring the moving page to the very top during transition
            page.style.zIndex = 1000;

            requestAnimationFrame(() => {
                page.classList.add('flipped');

                // Wait for transition to finish before settling z-index (0.8s = 800ms)
                setTimeout(() => {
                    currentPage++;
                    updateZIndex();
                    updateProgress();
                }, 800);
            });
        }
    }

    function goPrev() {
        if (currentPage > 0) {
            const page = allPages[currentPage - 1];

            // Fix Bleed-through: Bring the moving page to the very top during transition
            page.style.zIndex = 1000;

            requestAnimationFrame(() => {
                page.classList.remove('flipped');

                // Wait for transition to finish before settling z-index
                setTimeout(() => {
                    currentPage--;
                    updateZIndex();
                    updateProgress();
                }, 800);
            });
        }
    }

    function goToPage(idx) {
        allPages.forEach(p => p.classList.remove('flipped'));
        currentPage = 0;
        for (let i = 0; i < idx; i++) {
            allPages[i].classList.add('flipped');
            currentPage = i + 1;
        }
        updateZIndex();
        updateProgress();
    }

    function updateProgress() {
        const pct = (currentPage / allPages.length) * 100;
        progressBar.style.width = `${pct}%`;

        // Hide page-edges when all pages are flipped (book is fully read)
        const pageEdges = document.querySelector('.page-edges');
        if (pageEdges) {
            // Only hide edges if we are truly at the end
            pageEdges.style.opacity = (currentPage >= allPages.length) ? '0' : '1';
            pageEdges.style.transition = 'opacity 0.4s ease';
        }
    }

    // ========================================
    // EVENT LISTENERS
    // ========================================
    nextBtn.addEventListener('click', goNext);
    prevBtn.addEventListener('click', goPrev);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); goNext(); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); goPrev(); }
    });

    // ========================================
    // DYNAMIC RESIZING (Fixes Mobile Rotation)
    // ========================================
    function resizeBook() {
        const basePageWidth = 500;
        const baseHeight = 660;
        // The book when open is 2 pages wide + some margin for the spine/shadows
        const totalBaseWidth = (basePageWidth * 2) + 40;

        // Available viewport size (with safety margin)
        const padding = 20;
        const availWidth = window.innerWidth - padding;
        const availHeight = window.innerHeight - padding;

        // Calculate scale needed to fit width and height
        const scaleW = availWidth / totalBaseWidth;
        const scaleH = availHeight / baseHeight;

        // Use the smaller scale factor to ensure it fits entirely
        let scale = Math.min(scaleW, scaleH);

        // Cap the scale at 1.0 (don't enlarge on desktops) to preserve sharpness
        if (scale > 1) scale = 1;

        // Apply scale
        book.parentElement.style.transform = `scale(${scale})`;

        // Adjust nav controls position for very small screens if needed
        const nav = document.querySelector('.nav-controls');
        if (scale < 0.5) {
            nav.style.bottom = '10px';
            nav.style.gap = '10px';
        } else {
            nav.style.bottom = '28px';
            nav.style.gap = '18px';
        }
    }

    // Initialize resize logic with debouncing and multiple triggers
    window.addEventListener('resize', () => {
        requestAnimationFrame(resizeBook);
    });

    window.addEventListener('orientationchange', () => {
        // Fire immediately
        resizeBook();
        // Fire again after layout settles
        setTimeout(resizeBook, 100);
        setTimeout(resizeBook, 300);
        setTimeout(resizeBook, 500);
    });

    // Initial call
    setTimeout(resizeBook, 0);
    setTimeout(resizeBook, 100);

    // ========================================
    // INITIALIZE
    // ========================================
    updateZIndex();
    updateProgress();
});
