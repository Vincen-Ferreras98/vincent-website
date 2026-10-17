// 1. Verse of the day list (King James Version)
const verses = [
  { text: "Let no man despise thy youth; but be thou an example of the believers.", ref: "1 Timothy 4:12" },
  { text: "I can do all things through Christ which strengtheneth me.", ref: "Philippians 4:13" },
  { text: "Trust in the LORD with all thine heart; and lean not unto thine own understanding.", ref: "Proverbs 3:5" },
  { text: "For where two or three are gathered together in my name, there am I in the midst of them.", ref: "Matthew 18:20" },
  { text: "Be strong and of a good courage; be not afraid, neither be thou dismayed.", ref: "Joshua 1:9" },
  { text: "The LORD is my shepherd; I shall not want.", ref: "Psalm 23:1" },
  { text: "Fear thou not; for I am with thee: be not dismayed; for I am thy God.", ref: "Isaiah 41:10" },
  { text: "Thy word is a lamp unto my feet, and a light unto my path.", ref: "Psalm 119:105" },
  { text: "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.", ref: "Matthew 6:33" },
  { text: "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.", ref: "Romans 8:28" }
];

// 2. Gospel steps
const steps = [
  { title: "We are all sinners", ref: "Romans 3:23", text: "For all have sinned, and come short of the glory of God;", note: "Every person has sinned. No matter how good we may appear, none of us is perfect before a holy God, so we all need a Saviour." },
  { title: "Sin has a penalty", ref: "Romans 6:23", text: "For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.", note: "Because of our sin we deserve God's judgment. We cannot ignore our sin or work our way out of its penalty, but God did not leave us without hope." },
  { title: "Jesus Christ paid the penalty for our sin", ref: "Romans 5:8", text: "But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.", note: "Jesus died, was buried, and rose again the third day (1 Corinthians 15:3-4). This is the Gospel." },
  { title: "Believe on the Lord Jesus Christ", ref: "Acts 16:31", text: "Believe on the Lord Jesus Christ, and thou shalt be saved…", note: "We are saved by God's grace through faith, not by good works (Ephesians 2:8-9). Your good works, religion and baptism cannot save you. Jesus Christ is the Saviour." },
  { title: "Receive Jesus Christ", ref: "John 1:12", text: "But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name:", note: "To receive Christ means to place your faith and trust in Him alone, not in yourself, your goodness or religious works." },
  { title: "Call upon the Lord", ref: "Romans 10:13", text: "For whosoever shall call upon the name of the Lord shall be saved.", note: "Notice the word whosoever. God's invitation is for everyone who understands they are a sinner, believes Jesus died and rose again for them, and puts their faith in Him." }
];

// 3. Encouraging verses (King James Version)
// Format: [category, when, reference, text, note]
// category: hard = hard times, good = good times, guide = guidance
// The first nine are mixed so "All" shows variety.
const seasons = [
  ["hard", "When I am afraid", "Isaiah 41:10", "Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness.", "Fear is real, but you are not facing it alone. God promises His presence, His strength and His help."],
  ["good", "When life is good", "Psalm 118:24", "This is the day which the LORD hath made; we will rejoice and be glad in it.", "Enjoy the good days and give God the glory. Gladness is a gift from Him."],
  ["guide", "When I need direction", "Proverbs 3:5-6", "Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.", "Before you make a big choice, pray and seek God first. He promises to direct the paths of those who trust Him."],
  ["hard", "When I am anxious", "1 Peter 5:7", "Casting all your care upon him; for he careth for you.", "You do not have to carry every worry by yourself. Bring them to God in prayer, because He cares about you."],
  ["good", "When I am thankful", "1 Thessalonians 5:18", "In every thing give thanks: for this is the will of God in Christ Jesus concerning you.", "A thankful heart notices God's goodness in every season, in small things and in big things."],
  ["guide", "When I need courage", "Joshua 1:9", "Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.", "Courage is not the absence of fear. It is going forward because God is with you."],
  ["hard", "When I am tired", "Matthew 11:28", "Come unto me, all ye that labour and are heavy laden, and I will give you rest.", "Jesus invites you to come to Him with every burden, and He gives rest to your soul."],
  ["good", "When I have been blessed", "James 1:17", "Every good gift and every perfect gift is from above, and cometh down from the Father of lights, with whom is no variableness, neither shadow of turning.", "Every blessing comes from God, and He never changes. Share what He gives you with others."],
  ["guide", "When I am tempted", "1 Corinthians 10:13", "There hath no temptation taken you but such as is common to man: but God is faithful, who will not suffer you to be tempted above that ye are able; but will with the temptation also make a way to escape, that ye may be able to bear it.", "You are not the only one who struggles. God is faithful and always provides a way out."],

  // Hard times
  ["hard", "When I am grieving", "Psalm 34:18", "The LORD is nigh unto them that are of a broken heart; and saveth such as be of a contrite spirit.", "God does not stay far from your pain. He draws near to the brokenhearted."],
  ["hard", "When I feel lonely", "Hebrews 13:5", "…he hath said, I will never leave thee, nor forsake thee.", "Even when no one else seems near, God has promised that He will never leave you."],
  ["hard", "When I have failed", "1 John 1:9", "If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness.", "Failure is not the end. Come back to God honestly and He forgives and cleanses."],
  ["hard", "When I feel weak", "2 Corinthians 12:9", "And he said unto me, My grace is sufficient for thee: for my strength is made perfect in weakness.", "Your weakness does not stop God. His grace is enough for you today."],
  ["hard", "When nothing makes sense", "Romans 8:28", "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.", "You may not understand it now, but God is at work for the good of those who love Him."],
  ["hard", "When someone hurts me", "Ephesians 4:32", "And be ye kind one to another, tenderhearted, forgiving one another, even as God for Christ's sake hath forgiven you.", "Forgiving is hard, but we forgive because God first forgave us in Christ."],
  ["hard", "When I feel worthless", "Psalm 139:14", "I will praise thee; for I am fearfully and wonderfully made: marvellous are thy works; and that my soul knoweth right well.", "God made you on purpose and with great care. Your worth comes from Him, not from your performance."],
  ["hard", "When I am discouraged", "Psalm 42:11", "Why art thou cast down, O my soul? and why art thou disquieted in me? hope thou in God: for I shall yet praise him for the help of his countenance.", "When your heart is low, speak to your soul and put your hope in God. Better days of praise will come."],
  ["hard", "When I need hope", "Jeremiah 29:11", "For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.", "God's plans for His people are plans of peace, with a hopeful future in His hands."],
  ["hard", "When I am in trouble", "Psalm 46:1", "God is our refuge and strength, a very present help in trouble.", "God is not far away in your trouble. He is a refuge you can run to right now."],
  ["hard", "When I feel overwhelmed", "Psalm 61:2", "From the end of the earth will I cry unto thee, when my heart is overwhelmed: lead me to the rock that is higher than I.", "When you are overwhelmed, cry out to God. He is a rock higher than any problem."],
  ["hard", "When I cannot sleep", "Psalm 4:8", "I will both lay me down in peace, and sleep: for thou, LORD, only makest me dwell in safety.", "You can lay your worries down tonight. God keeps you safe, so you can rest."],
  ["hard", "When I need peace", "John 14:27", "Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid.", "Jesus gives a peace the world cannot give. Let His peace calm a troubled heart."],
  ["hard", "When I am suffering", "Romans 8:18", "For I reckon that the sufferings of this present time are not worthy to be compared with the glory which shall be revealed in us.", "Pain is real now, but God's coming glory is greater than anything you are going through."],
  ["hard", "When I am sick", "Psalm 41:3", "The LORD will strengthen him upon the bed of languishing: thou wilt make all his bed in his sickness.", "In sickness you are not forgotten. The LORD strengthens and cares for those who are weak."],
  ["hard", "When I feel rejected", "Psalm 27:10", "When my father and my mother forsake me, then the LORD will take me up.", "Even if people turn away from you, God receives you and takes you up as His own."],
  ["hard", "When I am treated unfairly", "Romans 12:21", "Be not overcome of evil, but overcome evil with good.", "Do not let wrong done to you turn you bitter. Answer evil with good, and trust God with justice."],
  ["hard", "When I am mocked for my faith", "Matthew 5:10", "Blessed are they which are persecuted for righteousness' sake: for theirs is the kingdom of heaven.", "Suffering for doing right is not wasted. Jesus says the kingdom of heaven belongs to you."],
  ["hard", "When I am in need", "Philippians 4:19", "But my God shall supply all your need according to his riches in glory by Christ Jesus.", "God knows what you need. He promises to supply it according to His riches in Christ."],
  ["hard", "When I worry about tomorrow", "Matthew 6:34", "Take therefore no thought for the morrow: for the morrow shall take thought for the things of itself. Sufficient unto the day is the evil thereof.", "Take today one step at a time. Tomorrow's worries can wait, and God will be there too."],
  ["hard", "When I feel guilty", "Romans 8:1", "There is therefore now no condemnation to them which are in Christ Jesus, who walk not after the flesh, but after the Spirit.", "If you are in Christ, you are not under condemnation. Jesus has already paid for your sin."],
  ["hard", "When I doubt", "Mark 9:24", "And straightway the father of the child cried out, and said with tears, Lord, I believe; help thou mine unbelief.", "It is honest to ask God for help with doubt. He meets us even when our faith is small."],
  ["hard", "When I need a new start", "2 Corinthians 5:17", "Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.", "In Christ you are made new. Your past does not define you anymore."],
  ["hard", "When I lose someone I love", "John 11:25", "Jesus said unto her, I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live:", "Death is not the end for those who believe in Jesus. He is the resurrection and the life."],
  ["hard", "When I fear death", "Psalm 23:4", "Yea, though I walk through the valley of the shadow of death, I will fear no evil: for thou art with me; thy rod and thy staff they comfort me.", "Even in the darkest valley, the Good Shepherd is with you and comforts you."],
  ["hard", "When I am angry", "Ephesians 4:26", "Be ye angry, and sin not: let not the sun go down upon your wrath:", "Anger itself is not always sin, but do not let it control you or stay with you overnight."],
  ["hard", "When my burden is heavy", "Psalm 55:22", "Cast thy burden upon the LORD, and he shall sustain thee: he shall never suffer the righteous to be moved.", "Hand your burden over to God. He will hold you up and not let you fall."],
  ["hard", "When I feel like giving up", "Galatians 6:9", "And let us not be weary in well doing: for in due season we shall reap, if we faint not.", "Keep doing good, even when it is tiring. In God's time you will see the harvest."],
  ["hard", "When I feel forgotten", "Isaiah 49:15", "Can a woman forget her sucking child, that she should not have compassion on the son of her womb? yea, they may forget, yet will I not forget thee.", "God says He will never forget you. You are always on His heart."],
  ["hard", "When trials come", "James 1:2-3", "My brethren, count it all joy when ye fall into divers temptations; Knowing this, that the trying of your faith worketh patience.", "Trials are hard, but God uses them to build patience and a stronger faith in you."],
  ["hard", "When I am in a storm", "Isaiah 43:2", "When thou passest through the waters, I will be with thee; and through the rivers, they shall not overflow thee: when thou walkest through the fire, thou shalt not be burned; neither shall the flame kindle upon thee.", "You will go through hard places, but God promises to be with you in every one."],
  ["hard", "When I feel unloved", "Jeremiah 31:3", "The LORD hath appeared of old unto me, saying, Yea, I have loved thee with an everlasting love: therefore with lovingkindness have I drawn thee.", "You are loved with an everlasting love. God's love for you does not run out."],
  ["hard", "When I fear the future", "Psalm 112:7", "He shall not be afraid of evil tidings: his heart is fixed, trusting in the LORD.", "A heart that trusts the LORD stands firm and is not shaken by bad news."],
  ["hard", "When I am tired of serving", "1 Corinthians 15:58", "Therefore, my beloved brethren, be ye stedfast, unmoveable, always abounding in the work of the Lord, forasmuch as ye know that your labour is not in vain in the Lord.", "Keep serving with strength from God. Your labor for the Lord is never in vain."],

  // Good times
  ["good", "When I want to praise God", "Psalm 100:4", "Enter into his gates with thanksgiving, and into his courts with praise: be thankful unto him, and bless his name.", "Come to God with thanks and praise. Gratitude opens the door to His presence."],
  ["good", "When I am joyful", "Psalm 16:11", "Thou wilt shew me the path of life: in thy presence is fulness of joy; at thy right hand there are pleasures for evermore.", "True joy is found in God's presence. He shows us the path of life."],
  ["good", "When I remember God's goodness", "Psalm 107:1", "O give thanks unto the LORD, for he is good: for his mercy endureth for ever.", "God is good and His mercy lasts forever. Say thank you for His kindness today."],
  ["good", "When I celebrate", "Psalm 126:3", "The LORD hath done great things for us; whereof we are glad.", "Take time to remember what God has done for you, and be glad."],
  ["good", "When God answers my prayer", "Psalm 34:4", "I sought the LORD, and he heard me, and delivered me from all my fears.", "God hears when we seek Him. Thank Him for every prayer He has answered."],
  ["good", "When I feel loved", "Zephaniah 3:17", "The LORD thy God in the midst of thee is mighty; he will save, he will rejoice over thee with joy; he will rest in his love, he will joy over thee with singing.", "God rejoices over His people with singing. You are loved and delighted in."],
  ["good", "When I am at peace", "Isaiah 26:3", "Thou wilt keep him in perfect peace, whose mind is stayed on thee: because he trusteth in thee.", "A mind fixed on God is kept in perfect peace. Enjoy that rest and keep trusting Him."],
  ["good", "When I worship", "Psalm 95:1", "O come, let us sing unto the LORD: let us make a joyful noise to the rock of our salvation.", "Lift your voice to God. Singing and worship are a joyful way to thank Him."],
  ["good", "When I enjoy family and friends", "Psalm 133:1", "Behold, how good and how pleasant it is for brethren to dwell together in unity!", "Unity is a blessing. Thank God for the people who walk with you."],
  ["good", "When I succeed", "1 Corinthians 10:31", "Whether therefore ye eat, or drink, or whatsoever ye do, do all to the glory of God.", "When things go well, give God the credit. Do everything for His glory."],
  ["good", "When I know I am forgiven", "Psalm 32:1", "Blessed is he whose transgression is forgiven, whose sin is covered.", "There is great joy in being forgiven. Thank God that your sin is covered."],
  ["good", "When I am content", "Philippians 4:11", "Not that I speak in respect of want: for I have learned, in whatsoever state I am, therewith to be content.", "Contentment can be learned in any season. Be thankful for what you have today."],
  ["good", "When I see God's creation", "Psalm 19:1", "The heavens declare the glory of God; and the firmament sheweth his handywork.", "Look at the sky and remember who made it. Creation tells of God's glory."],
  ["good", "When a new day begins", "Lamentations 3:22-23", "It is of the LORD'S mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness.", "God's mercies are new every morning. Every day is a fresh start with Him."],
  ["good", "When I am full of hope", "Romans 15:13", "Now the God of hope fill you with all joy and peace in believing, that ye may abound in hope, through the power of the Holy Ghost.", "May God fill you with joy, peace and hope as you trust in Him."],
  ["good", "When I can help others", "Galatians 6:10", "As we have therefore opportunity, let us do good unto all men, especially unto them who are of the household of faith.", "When you are blessed, share it. Look for chances to do good to others."],

  // Guidance
  ["guide", "When I am waiting", "Isaiah 40:31", "But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.", "Waiting on God is never wasted time. He renews the strength of those who trust Him."],
  ["guide", "When I need wisdom", "James 1:5", "If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him.", "You do not have to figure everything out alone. Ask God for wisdom and He gives it generously."],
  ["guide", "When I make plans", "Proverbs 16:3", "Commit thy works unto the LORD, and thy thoughts shall be established.", "Give your plans to the LORD in prayer, and He will establish them."],
  ["guide", "When I study and work", "Colossians 3:23", "And whatsoever ye do, do it heartily, as to the Lord, and not unto men;", "Study and work as if you are doing it for the Lord, not just for people."],
  ["guide", "When I lead others", "Mark 10:45", "For even the Son of man came not to be ministered unto, but to minister, and to give his life a ransom for many.", "True leadership serves. Jesus came to serve, and we lead by following His example."],
  ["guide", "When I share the Gospel", "Romans 1:16", "For I am not ashamed of the gospel of Christ: for it is the power of God unto salvation to every one that believeth; to the Jew first, and also to the Greek.", "Do not be ashamed to share Jesus. The gospel is God's power to save."],
  ["guide", "When I choose my friends", "Proverbs 13:20", "He that walketh with wise men shall be wise: but a companion of fools shall be destroyed.", "Your friends shape you. Walk with wise people and you will grow wise."],
  ["guide", "When I am young", "Ecclesiastes 12:1", "Remember now thy Creator in the days of thy youth, while the evil days come not, nor the years draw nigh, when thou shalt say, I have no pleasure in them;", "Do not wait until you are older to serve God. Give Him your youth now."],
  ["guide", "When I guard my heart", "Proverbs 4:23", "Keep thy heart with all diligence; for out of it are the issues of life.", "Be careful about what you let into your heart, because your life flows from it."],
  ["guide", "When I want to grow", "2 Peter 3:18", "But grow in grace, and in the knowledge of our Lord and Saviour Jesus Christ. To him be glory both now and for ever. Amen.", "Keep growing every day in grace and in knowing Jesus better."],
  ["guide", "When I read the Bible", "2 Timothy 3:16", "All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness:", "God's Word teaches, corrects and trains you. Make time to read it daily."],
  ["guide", "When I pray", "Jeremiah 33:3", "Call unto me, and I will answer thee, and shew thee great and mighty things, which thou knowest not.", "God invites you to call on Him. He answers and shows things you do not yet know."],
  ["guide", "When I want to be humble", "Micah 6:8", "He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?", "Do right, show mercy and stay humble before God. That is what He asks."],
  ["guide", "When I resist sin", "James 4:7", "Submit yourselves therefore to God. Resist the devil, and he will flee from you.", "Give yourself to God first. When you resist the devil, he must flee."],
  ["guide", "When I make decisions", "Psalm 32:8", "I will instruct thee and teach thee in the way which thou shalt go: I will guide thee with mine eye.", "God promises to teach you and guide you in the way you should go."],
  ["guide", "When I speak to others", "Proverbs 15:1", "A soft answer turneth away wrath: but grievous words stir up anger.", "Kind words calm a conflict. Choose gentle answers when others are angry."]
];

// 4. Roles
const roles = [
  { title: "President", where: "Baptist Youth Sowers for Christ (B.Y.S.C.)", years: "2025 - Present", cat: "org" },
  { title: "2nd Year Batch Representative", where: "Computer Science Society, City College of Calamba", years: "Current", cat: "org" },
  { title: "Member", where: "Alliance of Students with Great Responsibilities for Development (ASGRD)", years: "Current", cat: "org", link: "https://www.facebook.com/ASGRDCCC" },
  { title: "Member", where: "Soul Link - CCC Chapter", years: "Current", cat: "org" },
  { title: "Project Leader", where: "National Service Training Program, City College of Calamba", years: "2025 - 2026", cat: "school" },
  { title: "Class Representative, 1-CS3", where: "City College of Calamba", years: "S.Y. 2025 - 2026", cat: "school" },
  { title: "Choir Minister", where: "Christian Bible Baptist Church", years: "2014 - Present", cat: "church" },
  { title: "Transport Minister", where: "Christian Bible Baptist Church", years: "2020 - Present", cat: "church" },
  { title: "Multi-Media Minister", where: "Christian Bible Baptist Church", years: "2020 - Present", cat: "church" },
  { title: "Bible Study Leader", where: "Christian Bible Baptist Church", years: "2022 - Present", cat: "church" },
  { title: "Group Leader", where: "Baptist Youth Fundamentalist", years: "2023 - 2025", cat: "church" },
  { title: "Head Committee Member, Camping", where: "Christian Bible Baptist Academy", years: "2024 - 2025", cat: "school" },
  { title: "Group Leader, Camping", where: "Christian Bible Baptist Academy", years: "2022 - 2023", cat: "school" }
];