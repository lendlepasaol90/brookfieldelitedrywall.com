/**
 * The 12 service landing pages. Each entry renders its own URL at
 * /services/<slug>/ with unique metadata, copy, FAQs and related links.
 *
 * Photos are illustrative stock photography (Envato Elements), not
 * documentation of this company's projects. Swap `photo` / `ba` values for
 * real job photos when they are available.
 */
export interface Service {
  slug: string;
  name: string;
  short: string;
  title: string;
  description: string;
  h1: string;
  lede: string;
  photo: string;
  photoAlt: string;
  intro: string[];
  what: { h: string; p: string[] };
  situations: { h: string; items: { t: string; d: string }[] };
  process: { h: string; steps: { t: string; d: string }[] };
  materials: { h: string; p: string[] };
  benefits: { h: string; items: { t: string; d: string }[] };
  local: { h: string; p: string[] };
  faqs: { q: string; a: string }[];
  related: string[];
  ba: { before: string; after: string; beforeAlt: string; afterAlt: string };
}

export const services: Service[] = [
  {
    slug: 'commercial-drywall-services',
    name: 'Commercial Drywall Services',
    short: 'Metal stud framing, board and finish for offices, retail and tenant build-outs.',
    title: 'Commercial Drywall Contractor in Brookfield, WI | Brookfield Elite Drywall',
    description:
      'Commercial drywall in Brookfield, WI: steel stud framing, fire-rated assemblies, hanging and finishing for offices, retail and tenant build-outs.',
    h1: 'Commercial drywall for Brookfield offices, shops and build-outs',
    lede: 'Partitions, ceilings and rated assemblies built to the drawings, on the schedule your other trades are counting on.',
    photo: 'commercial-crew-carrying-drywall',
    photoAlt: 'Two workers in hard hats carrying a drywall sheet through a commercial interior under construction',
    intro: [
      'Commercial work runs on a different clock than a house does. The electrician needs walls closed by Thursday, the ceiling grid crew is behind you, and the tenant has already told their staff a move-in date. Drywall sits in the middle of all of that, which means a late or sloppy board job holds up everybody after it.',
      'We frame, hang and finish interior partitions and ceilings for commercial spaces in and around Brookfield. That covers a single demising wall in a strip-center suite as readily as a full floor of offices. We read the drawings, ask about the details that are unclear before we build them, and keep the general contractor or property manager informed about where we are.',
    ],
    what: {
      h: 'What commercial drywall work involves',
      p: [
        'Most commercial interiors are framed in light-gauge steel studs rather than wood. Steel is straight, non-combustible and quick to lay out, but it has its own rules: stud gauge and spacing depend on wall height, deflection track is needed where a partition meets a structure that moves, and openings want proper headers and backing for doors, casework and wall-hung fixtures.',
        'On top of the framing, the board and finish are specified by the wall type. A corridor wall might call for one layer of 5/8-inch Type X each side, taken to the deck and sealed for a one-hour rating. An office front might only go above the ceiling grid and get a Level 4 finish for paint. We build each wall to the type shown on the plans, because an inspector will compare the two.',
      ],
    },
    situations: {
      h: 'Projects we are typically called for',
      items: [
        { t: 'Tenant improvements', d: 'Reworking a suite for a new occupant: removing some partitions, adding others, and tying new board into existing walls so the joint disappears.' },
        { t: 'Office reconfigurations', d: 'Adding private offices, conference rooms or sound-insulated walls inside an open floor plan, often while the rest of the floor stays occupied.' },
        { t: 'Retail and restaurant build-outs', d: 'Demising walls, soffits, bulkheads and back-of-house partitions, including moisture-resistant and abuse-resistant board where the use calls for it.' },
        { t: 'Repairs in occupied buildings', d: 'Damage from leaks, deliveries or move-outs in common areas and suites, usually handled after hours to stay out of the way.' },
      ],
    },
    process: {
      h: 'How a commercial job moves',
      steps: [
        { t: 'Drawings and site review', d: 'We price from the plans and walk the space to check ceiling heights, deck conditions and access for stocking material.' },
        { t: 'Layout and framing', d: 'Track is snapped and fastened, studs are set to the specified spacing, and openings are framed with backing where it is needed.' },
        { t: 'Hang after rough-in', d: 'Once in-wall inspections pass, board goes up one side at a time so insulation and inspections are never buried.' },
        { t: 'Tape, finish and sand', d: 'Joints and fasteners are finished to the level in the spec, with dust controlled so adjacent tenants are not affected.' },
        { t: 'Punch and turnover', d: 'We walk the space with the GC or manager, fix what is flagged, and leave it ready for the painter.' },
      ],
    },
    materials: {
      h: 'Materials and assemblies',
      p: [
        'We work with 25- and 20-gauge steel studs and track, 5/8-inch Type X and Type C fire-rated board, moisture- and mold-resistant panels for wet areas, abuse-resistant board for corridors and loading zones, and sound attenuation batts and acoustical sealant where an STC rating matters.',
        'Rated walls are built as tested assemblies. Fastener spacing, joint staggering and the sealant at the head of wall are part of the rating, so we follow the listed design and do not improvise on those details.',
      ],
    },
    benefits: {
      h: 'Why it matters who hangs your board',
      items: [
        { t: 'A schedule other trades can trust', d: 'When we give a date for walls closed, painters and ceiling crews can plan around it.' },
        { t: 'Fewer inspection surprises', d: 'Walls built to the listed assembly pass the first time, which keeps the certificate of occupancy on track.' },
        { t: 'Finishes that suit the lighting', d: 'Long corridors and glass-fronted offices show every joint. We set the finish level to the conditions, not the minimum.' },
        { t: 'Less disruption', d: 'Night and weekend work, protected common areas and controlled dust keep neighboring tenants operating.' },
      ],
    },
    local: {
      h: 'Commercial work around Brookfield',
      p: [
        'Brookfield carries a great deal of office and retail space for a city its size. The Bluemound Road corridor, the office parks off Calhoun and Moorland Roads and the shopping centers around Brookfield Square all turn over tenants regularly, and each turnover means walls moving. Much of that building stock dates from the 1970s through the 1990s, so new partitions often meet older construction with uneven decks and several generations of previous alterations above the ceiling.',
        'We are used to working within those conditions and within the rules a landlord sets for a multi-tenant building: delivery windows, elevator protection, quiet hours and daily clean-up.',
      ],
    },
    faqs: [
      { q: 'Do you work directly for tenants, or only for general contractors?', a: 'Both. On larger build-outs we are usually a subcontractor to the GC. For smaller jobs, such as adding two offices or repairing a damaged corridor, property managers and business owners hire us directly.' },
      { q: 'Can the work be done outside business hours?', a: 'Yes. Evening and weekend scheduling is common in occupied buildings, and we plan noisy and dusty steps for the hours that affect the fewest people.' },
      { q: 'Do you frame with steel studs as well as hang the board?', a: 'We do. Framing and drywall from one crew removes a hand-off and makes one party responsible for walls that are straight and plumb.' },
      { q: 'How do you price a commercial project?', a: 'From the drawings when they exist, and from a site measure when they do not. The estimate lists wall types, board, finish level and any exclusions so it can be compared fairly against other bids.' },
      { q: 'Will you handle the fire caulking at rated walls?', a: 'We seal our own head-of-wall and perimeter joints as the assembly requires. Penetrations made by other trades are normally sealed by those trades or a firestopping contractor, and we will note that in the estimate.' },
    ],
    related: ['drywall-installation', 'drywall-finishing', 'drywall-taping-mudding', 'drywall-repair'],
    ba: {
      before: 'commercial-metal-stud-framing',
      after: 'finished-room-smooth-ceiling',
      beforeAlt: 'Steel stud partition framing in a commercial building before drywall is installed',
      afterAlt: 'Finished white interior with smooth walls, tray ceiling and recessed lights',
    },
  },
  {
    slug: 'residential-drywall-services',
    name: 'Residential Drywall Services',
    short: 'New walls, remodels and whole-house board and finish for Brookfield homeowners.',
    title: 'Residential Drywall Services in Brookfield, WI | Brookfield Elite Drywall',
    description:
      'Drywall for Brookfield homes: additions, remodels, new construction and repairs. Careful hanging, smooth finishing and dust kept under control.',
    h1: 'Residential drywall for Brookfield homes',
    lede: 'Additions, remodels and repairs handled by people who treat your house as a home first and a job site second.',
    photo: 'finished-room-columns-recessed-lights',
    photoAlt: 'Newly finished room with smooth white walls, columns and recessed ceiling lights',
    intro: [
      'Drywall is the part of a remodel you will look at every day for the next twenty years. The framing and wiring disappear; the walls and ceilings do not. If a seam telegraphs through the paint or a corner wanders, you will notice it each time the afternoon sun comes through the window.',
      'We hang and finish drywall for homeowners and builders across Brookfield. Some weeks that is a kitchen that has been opened to the dining room. Other weeks it is every wall of a new house. Either way the aim is the same: flat walls, crisp corners, and a house that is as clean when we leave as it was when we arrived.',
    ],
    what: {
      h: 'What we do in a home',
      p: [
        'Residential drywall is three trades in one. Hanging is carpentry: measuring, cutting and fastening panels so joints fall where they are easiest to hide. Taping is closer to plastering, building up thin coats of compound over every seam and screw. Sanding and inspection is finish work, done under a raking light that shows flaws the way your own lamps eventually would.',
        'We take on each stage or all of them. Many homeowners bring us in after a carpenter or plumber has finished, to close the walls and return the room to something livable.',
      ],
    },
    situations: {
      h: 'Where homeowners usually need us',
      items: [
        { t: 'Kitchen and bath remodels', d: 'New board around cabinets, tile areas and moved plumbing, using moisture-resistant panels where water is present.' },
        { t: 'Additions and bump-outs', d: 'Tying new walls into old ones so the transition cannot be found once the room is painted.' },
        { t: 'Whole-house projects', d: 'New construction and gut renovations, stocked and hung floor by floor.' },
        { t: 'After the other trades', d: 'Access holes left by electricians, plumbers and HVAC installers, closed and blended into the surrounding wall.' },
        { t: 'Aging walls and ceilings', d: 'Recurring cracks, nail pops, sagging ceiling board and old texture that no longer suits the house.' },
      ],
    },
    process: {
      h: 'How a home project runs',
      steps: [
        { t: 'Visit and written estimate', d: 'We look at the space, talk through the finish you want and send a clear price with the scope spelled out.' },
        { t: 'Protect the house', d: 'Floors are covered, doorways sealed with plastic and returns masked before any board is cut.' },
        { t: 'Hang', d: 'Panels are fastened with screws at the right spacing, ceilings first, with joints staggered and kept away from door and window corners.' },
        { t: 'Tape and coat', d: 'Three coats over joints and fasteners, each allowed to dry fully before the next.' },
        { t: 'Sand, check and clean', d: 'Surfaces are sanded with dust extraction, checked with a light, touched up and vacuumed.' },
      ],
    },
    materials: {
      h: 'Board and finish choices',
      p: [
        'Standard walls get 1/2-inch board. Ceilings framed at 24 inches on center do better with 5/8-inch or a sag-resistant ceiling panel. Bathrooms and laundry rooms call for moisture- and mold-resistant board, and the wall between a house and its attached garage normally requires fire-rated Type X.',
        'For finish, Level 4 is the residential standard under flat paint. In rooms with large windows, long walls or glossier paint we often recommend Level 5, a full skim coat that evens out the difference in texture between paper and compound.',
      ],
    },
    benefits: {
      h: 'What careful work gets you',
      items: [
        { t: 'Walls that paint well', d: 'A properly finished surface takes primer evenly, without flashing at the joints.' },
        { t: 'Fewer cracks later', d: 'Correct fastening and joint placement reduce the seasonal cracking common in our climate.' },
        { t: 'A cleaner remodel', d: 'Containment and vacuum sanding keep fine dust out of the rest of the house.' },
        { t: 'One clear point of contact', d: 'You know who is in your home, what they are doing that day and when the room will be ready.' },
      ],
    },
    local: {
      h: 'Brookfield houses, specifically',
      p: [
        'Housing here spans a wide range. There are 1950s and 60s ranches east of Calhoun Road, two-story colonials from the 70s and 80s, and newer custom homes on larger lots toward the west side. The older houses often have a mix of original plaster or early drywall alongside later remodel work, and joining new board to those surfaces takes some judgment about thickness and texture.',
        'Our winters matter as well. Indoor air gets very dry with the furnace running, framing shrinks, and by February hairline cracks and nail pops appear in houses of every age. We build and repair with that movement in mind.',
      ],
    },
    faqs: [
      { q: 'How long will my room be out of use?', a: 'A single room is commonly five to seven working days from hanging to ready-for-paint, because each coat of compound has to dry before the next. We give you a day-by-day outline with the estimate.' },
      { q: 'Will there be dust through the whole house?', a: 'There should not be. We isolate the work area with plastic, cover floors and returns, and sand with vacuum-attached equipment. Some dust is unavoidable inside the room itself, and we clean that before leaving.' },
      { q: 'Do you paint as well?', a: 'Our scope ends at a surface that is sanded and ready for primer. If you would like painting included, say so when you request the estimate and we will tell you plainly whether we can arrange it.' },
      { q: 'Can you match the texture on my existing walls?', a: 'In most cases, yes. We make a sample on scrap board first so you can approve the match before it goes on the wall.' },
      { q: 'Is a small job worth calling about?', a: 'It is. A single patch or one cracked ceiling is ordinary work for us and we are glad to price it.' },
    ],
    related: ['drywall-installation', 'drywall-repair', 'basement-drywall-installation', 'popcorn-ceiling-removal'],
    ba: {
      before: 'taped-drywall-before-finish',
      after: 'finished-room-columns-recessed-lights',
      beforeAlt: 'Room with moisture-resistant drywall hung and joints taped, before finishing',
      afterAlt: 'Finished room with smooth painted walls and recessed lighting',
    },
  },
  {
    slug: 'popcorn-ceiling-removal',
    name: 'Popcorn Ceiling Removal',
    short: 'Dated acoustic texture taken down and the ceiling refinished smooth.',
    title: 'Popcorn Ceiling Removal in Brookfield, WI | Brookfield Elite Drywall',
    description:
      'Popcorn ceiling removal for Brookfield homes. Texture is tested where needed, scraped or covered, then skim coated and sanded to a smooth, paint-ready ceiling.',
    h1: 'Popcorn ceiling removal in Brookfield',
    lede: 'The texture comes down, the joints underneath are properly finished, and the room looks a decade newer.',
    photo: 'popcorn-ceiling-scraping',
    photoAlt: 'Gloved hand scraping popcorn texture from a ceiling with a wide blade',
    intro: [
      'Sprayed acoustic texture was a builder’s shortcut. It hid ceiling joints that were never fully finished and it went on in an afternoon. Forty years on it collects dust, yellows, sheds when touched and makes a room feel lower and darker than it is.',
      'Taking it off is straightforward in principle and messy in practice. The real work starts once the texture is gone, because what is underneath was never meant to be seen. We remove the popcorn, repair what it was hiding, and leave a flat ceiling ready for primer.',
    ],
    what: {
      h: 'What removal actually involves',
      p: [
        'Unpainted popcorn softens when misted with water and scrapes off in sheets. Painted popcorn resists water, so it either needs dry scraping with dust control or a different approach altogether. In both cases the ceiling beneath usually has visible tape lines, gouges from the scraper and fastener heads that were given a single pass of compound at most.',
        'That is why removal is only about a third of the job. The rest is drywall finishing: re-taping loose seams, coating joints and screws, and in most houses skim coating the whole ceiling so it reads as one even plane under light.',
      ],
    },
    situations: {
      h: 'When homeowners decide it is time',
      items: [
        { t: 'Before selling or after buying', d: 'Smooth ceilings are one of the more visible updates in a house from the 1960s through the 1980s.' },
        { t: 'After a leak', d: 'Water-stained popcorn cannot be patched invisibly. Removing it across the room is often the cleaner fix.' },
        { t: 'During a remodel', d: 'New recessed lighting and moved walls leave scars in the texture that are simpler to erase than to match.' },
        { t: 'Flaking or sagging texture', d: 'Old popcorn that is letting go on its own, especially in kitchens and baths.' },
      ],
    },
    process: {
      h: 'Step by step',
      steps: [
        { t: 'Check the age and test', d: 'Texture applied before the mid-1980s can contain asbestos. We ask that a sample be lab tested before any scraping, and we explain how.' },
        { t: 'Empty and seal the room', d: 'Furniture out or wrapped, floors and walls covered in plastic, vents and fixtures masked.' },
        { t: 'Remove the texture', d: 'Wet scrape where possible. Where the texture is painted or the board beneath is fragile, we discuss covering the ceiling with new 1/4-inch or 3/8-inch drywall instead.' },
        { t: 'Repair and skim', d: 'Seams are re-taped as needed and the ceiling receives two or more skim coats.' },
        { t: 'Sand, inspect, clean', d: 'Sanded with extraction, checked with a raking light, and the plastic removed with the debris inside it.' },
      ],
    },
    materials: {
      h: 'Tools and materials',
      p: [
        'We use pump sprayers for wetting, wide scrapers with rounded corners to limit gouging, paper tape and setting compound for seam repairs, and a lightweight all-purpose or topping compound for the skim coats. Sanding is done with a pole sander connected to a HEPA vacuum.',
        'If the test returns positive for asbestos, scraping is not something we will do. The options then are licensed abatement or leaving the texture undisturbed and encapsulating it behind a new layer of drywall, and we will explain the trade-offs.',
      ],
    },
    benefits: {
      h: 'What changes afterward',
      items: [
        { t: 'A brighter room', d: 'A flat white ceiling reflects light evenly instead of casting thousands of tiny shadows.' },
        { t: 'Easier upkeep', d: 'Smooth ceilings can be dusted, washed and repainted with a roller.' },
        { t: 'Simple future repairs', d: 'A later patch can be blended into a smooth ceiling. It can rarely be hidden in popcorn.' },
        { t: 'A house that feels current', d: 'Few updates remove an obvious date stamp as effectively.' },
      ],
    },
    local: {
      h: 'Popcorn ceilings in Brookfield',
      p: [
        'A large share of Brookfield was built between the late 1950s and the mid-1980s, which is exactly the period when sprayed ceilings were standard in bedrooms, hallways and living rooms. If your home is from those decades, it very likely had popcorn at some point, and many still do under several coats of paint.',
        'Because of those dates, testing before removal is the responsible first step here. It costs little, results usually come back within a few days, and it tells everyone how to proceed.',
      ],
    },
    faqs: [
      { q: 'Does my ceiling have asbestos?', a: 'It cannot be judged by eye. Asbestos was used in some ceiling textures into the 1980s. A small sample sent to an accredited lab settles the question, and we recommend doing that before any removal in a house built before about 1990.' },
      { q: 'How long does one room take?', a: 'An average bedroom is typically three to four days: one for preparation and removal, the rest for skim coats, drying and sanding.' },
      { q: 'Can I stay in the house during the work?', a: 'Yes. The room being worked on is sealed off. Doing a whole floor at once is easier if the rooms are empty, so it is often scheduled before move-in.' },
      { q: 'Is covering the ceiling with new drywall a good alternative?', a: 'Often it is. When the texture is heavily painted or the test is positive, a thin layer of new board over the top gives a perfect surface without disturbing the old one. The ceiling drops by less than half an inch.' },
      { q: 'Will the ceiling be painted when you finish?', a: 'It will be sanded and ready for primer. New skim coat must be primed before paint, and we can advise on the right primer.' },
    ],
    related: ['ceiling-drywall-repair', 'drywall-finishing', 'drywall-taping-mudding', 'residential-drywall-services'],
    ba: {
      before: 'popcorn-ceiling-texture-removal',
      after: 'tray-ceiling-finished-white-room',
      beforeAlt: 'Popcorn ceiling texture partly scraped away during removal',
      afterAlt: 'Smooth white tray ceiling in a finished room',
    },
  },
  {
    slug: 'drywall-patching',
    name: 'Drywall Patching',
    short: 'Holes from doorknobs, plumbers and accidents closed so they cannot be found.',
    title: 'Drywall Patching in Brookfield, WI | Brookfield Elite Drywall',
    description:
      'Drywall patching in Brookfield for holes of any size: doorknob damage, plumbing and electrical access cuts, anchors and dents, texture matched.',
    h1: 'Drywall patching in Brookfield',
    lede: 'A good patch is one nobody can point to afterward. That is the standard we work to, whatever the size of the hole.',
    photo: 'drywall-patch-joint-compound-trowel',
    photoAlt: 'Hand spreading joint compound over a drywall patch with a wide trowel',
    intro: [
      'Holes in drywall arrive in ordinary ways. A door swings open without a stop. A plumber needs to reach a valve. A television mount comes down and leaves four craters behind. None of it is serious, but a hole in the middle of a painted wall draws the eye every time you walk past it.',
      'Patching looks simple, and the first half is. Getting the patch to vanish is the skilled part, and it is where most do-it-yourself repairs fall short. We patch holes from the size of a screw anchor to several square feet, and we stay with each one until the wall reads as continuous.',
    ],
    what: {
      h: 'Why patches show, and how to prevent it',
      p: [
        'A patch becomes visible for three reasons. It sits proud of the wall because compound was piled over it without being feathered. It cracks around the edge because the joint was not taped or the piece was not supported from behind. Or its surface is smoother or rougher than the wall around it, so paint reflects differently there.',
        'We address all three. The opening is cut back to a clean shape, the new piece is fastened to backing or framing, joints are taped, and the compound is feathered out twelve inches or more past the repair so the build-up is too gradual to see. Then the surface texture is matched before primer.',
      ],
    },
    situations: {
      h: 'Patches we do most often',
      items: [
        { t: 'Doorknob and furniture impact', d: 'Fist-sized holes at handle height, usually in hallways and bedrooms.' },
        { t: 'Trade access openings', d: 'Rectangles cut by plumbers, electricians and HVAC technicians to reach pipes, wiring and ducts.' },
        { t: 'Removed fixtures', d: 'Old thermostats, intercoms, medicine cabinets, wall heaters and speaker cut-outs.' },
        { t: 'Anchor and screw damage', d: 'Torn paper and blown-out anchors where shelving, mounts or mirrors came off the wall.' },
        { t: 'Move-out repairs', d: 'A list of small dings and holes across a house or rental before it is painted or listed.' },
      ],
    },
    process: {
      h: 'How we patch',
      steps: [
        { t: 'Square the damage', d: 'Loose paper and broken gypsum are cut away to leave firm edges.' },
        { t: 'Add support', d: 'Small holes get a backing strip behind the wall. Larger ones are cut back to the nearest studs.' },
        { t: 'Fit and fasten new board', d: 'A piece of matching thickness is screwed in so it sits flush with the surrounding surface.' },
        { t: 'Tape and coat', d: 'Joints are taped and given three widening coats, often with setting compound so we can complete more in one visit.' },
        { t: 'Sand and match texture', d: 'Edges are feathered until they cannot be felt, and any wall texture is reproduced.' },
      ],
    },
    materials: {
      h: 'What goes into a lasting patch',
      p: [
        'For the repair piece we match the existing board thickness, usually 1/2-inch on walls and sometimes 5/8-inch on ceilings or garage walls. Paper tape is our default for flat joints because it resists cracking better than mesh under drying-type compound. Setting-type compound, which hardens chemically, is used for the first coats since it shrinks very little.',
        'Where the paper face has been torn, the exposed brown layer is sealed before any compound goes on. Skip that step and the paper blisters, which is a common cause of bubbled repairs.',
      ],
    },
    benefits: {
      h: 'The difference a proper patch makes',
      items: [
        { t: 'It disappears', d: 'Feathered wide and texture matched, the repair cannot be picked out after painting.' },
        { t: 'It stays put', d: 'Backing and tape keep the outline from cracking back through.' },
        { t: 'It is quick', d: 'Many patches are finished in one or two visits.' },
        { t: 'It protects the wall', d: 'Closed walls keep insulation, wiring and plumbing covered and drafts out.' },
      ],
    },
    local: {
      h: 'Patching in Brookfield homes',
      p: [
        'Many of the patches we see locally follow other work. Older Brookfield houses are steadily having galvanized plumbing replaced, panels upgraded and ductwork added for air conditioning, and each of those leaves openings behind. We are often the last trade in, putting walls back after the mechanical contractors have gone.',
        'Wall texture varies by era as well. Depending on when a house was built or last remodeled you may have smooth walls, a light orange peel, or a hand-troweled finish, and the patch has to match whichever it is.',
      ],
    },
    faqs: [
      { q: 'Is there a hole too small to bother you with?', a: 'No. Small jobs are welcome, and several minor repairs can usually be handled in the same visit, which is the economical way to do it.' },
      { q: 'Will I be able to see the patch after painting?', a: 'Our goal is that you cannot. Results depend on painting the whole wall corner to corner. Spot-painting only the patch tends to show as a difference in sheen even when the drywall work is perfect.' },
      { q: 'How long before the patch can be painted?', a: 'Once the final coat is dry and sanded, generally the day after we finish. It needs a coat of primer first so the paint absorbs evenly.' },
      { q: 'Why did my last patch crack around the edges?', a: 'Usually because it was not taped, or because the piece had nothing solid behind it and flexed. Both are corrected by cutting the repair out and doing it again with backing and tape.' },
      { q: 'Can you patch ceilings as well?', a: 'Yes. Ceiling patches follow the same method, with extra attention to feathering because overhead light is unforgiving.' },
    ],
    related: ['drywall-repair', 'ceiling-drywall-repair', 'water-damaged-drywall-repair', 'drywall-finishing'],
    ba: {
      before: 'drywall-patch-joint-compound-trowel',
      after: 'finished-living-room-smooth-walls',
      beforeAlt: 'Drywall patch in progress with fresh joint compound',
      afterAlt: 'Bright finished room with smooth, uniform walls',
    },
  },
  {
    slug: 'water-damaged-drywall-repair',
    name: 'Water-Damaged Drywall Repair',
    short: 'Stained, soft or sagging board cut out and rebuilt once the leak is fixed.',
    title: 'Water-Damaged Drywall Repair in Brookfield, WI | Brookfield Elite Drywall',
    description:
      'Water-damaged drywall repair in Brookfield after roof leaks, ice dams and plumbing failures. Wet board removed, framing dried, surfaces rebuilt.',
    h1: 'Water-damaged drywall repair in Brookfield',
    lede: 'Once the leak has stopped, we remove what the water ruined and rebuild the wall or ceiling so no trace of it remains.',
    photo: 'water-stained-ceiling-drywall',
    photoAlt: 'Brown water stains spreading across a white ceiling and down a wall corner',
    intro: [
      'Drywall and water do not get along. The gypsum core softens, the paper face comes loose, fasteners lose their hold, and if the board stays damp for more than a couple of days, mold can begin on the hidden side. A brown ring on the ceiling is often the mildest sign of something larger above it.',
      'We repair the drywall side of water damage: establishing how far the moisture travelled, removing board that cannot be saved, and rebuilding the surface. If the source has not been found yet we will say so, since new drywall under an active leak is money wasted.',
    ],
    what: {
      h: 'Deciding what stays and what goes',
      p: [
        'Not every stain means replacement. Board that got wet once, dried quickly and is still hard and flat can often be sealed with a stain-blocking primer and repainted. Board that is soft, swollen, crumbling, sagging between joists or smells musty has to come out.',
        'We check with a moisture meter as well as by hand, because drywall can feel dry on the room side while the back and the insulation behind it are still wet. The cut line is set where readings return to normal, not where the stain happens to end.',
      ],
    },
    situations: {
      h: 'Common causes we repair after',
      items: [
        { t: 'Roof leaks and ice dams', d: 'Ceiling stains near exterior walls after heavy snow followed by a thaw.' },
        { t: 'Plumbing failures', d: 'Burst supply lines, leaking drains and failed wax rings showing on the ceiling below a bathroom.' },
        { t: 'Appliance leaks', d: 'Dishwashers, ice-maker lines, washing machines and water heaters soaking the base of adjacent walls.' },
        { t: 'Basement water', d: 'Seepage or sump failure wicking up the bottom foot or two of finished basement walls.' },
        { t: 'Bathroom moisture', d: 'Peeling, softened board around tubs and showers where standard drywall was used in a wet area.' },
      ],
    },
    process: {
      h: 'How the repair is done',
      steps: [
        { t: 'Confirm the source is fixed', d: 'We ask what caused it and whether a roofer or plumber has dealt with it.' },
        { t: 'Map the moisture', d: 'Meter readings mark how far the damage extends beyond the visible stain.' },
        { t: 'Remove wet material', d: 'Damaged board and wet insulation are cut out to clean lines on framing.' },
        { t: 'Dry and inspect the cavity', d: 'Framing is given time and airflow to dry. If we find mold beyond a small surface area, we stop and recommend a remediation specialist.' },
        { t: 'Rebuild and finish', d: 'New insulation and board go in, joints are taped and finished, and the texture is matched.' },
      ],
    },
    materials: {
      h: 'Materials suited to the location',
      p: [
        'We replace like with like on thickness, then improve where it makes sense. Bathrooms and laundry areas get moisture- and mold-resistant board. In basements we hold new board slightly off the slab so it cannot wick water from the floor again.',
        'Stains near the repair are sealed with a solvent- or shellac-based stain blocker. Ordinary latex primer will not hold back a water stain, which will otherwise bleed through new paint within weeks.',
      ],
    },
    benefits: {
      h: 'Why it should be done properly',
      items: [
        { t: 'No hidden moisture', d: 'Opening the cavity means wet insulation and framing are dealt with instead of sealed in.' },
        { t: 'A sound ceiling', d: 'Water-weakened ceiling board can sag or let go. Replacement removes the risk.' },
        { t: 'Stains that stay gone', d: 'Correct sealing prevents the mark from reappearing through the paint.' },
        { t: 'Paperwork for your insurer', d: 'On request, the estimate is itemized so it can be submitted with a claim.' },
      ],
    },
    local: {
      h: 'Water and Wisconsin houses',
      p: [
        'Our weather creates its own pattern of damage. Ice dams are the familiar one. Snow on the roof melts from attic heat, refreezes at the eaves, and the water backs up under the shingles and into ceilings along outside walls. We see the results every late winter in Brookfield, particularly in ranches and Cape Cods with limited attic insulation.',
        'Spring is the other season. Heavy rain on thawing ground tests sump pumps and foundation drainage, and finished basements take the damage along the bottom of the walls. Frozen pipes in exterior walls and above garages complete the list.',
      ],
    },
    faqs: [
      { q: 'Does stained drywall always need replacing?', a: 'No. If it is firm, flat and fully dry, sealing and repainting is often enough. If it is soft, swollen, sagging or smells of mildew, it should be replaced.' },
      { q: 'How soon after a leak can you begin?', a: 'We can remove wet material right away, and sooner is better. New board waits until the framing has dried, typically several days with fans and a dehumidifier running.' },
      { q: 'Do you handle mold?', a: 'Minor surface growth found during a repair can be cleaned and treated. Extensive mold is a job for a remediation company, and we will tell you if that is what we find.' },
      { q: 'Will you work with my insurance company?', a: 'We provide a detailed written estimate and photographs of the damage for your claim. Dealings with the insurer remain between you and your adjuster.' },
      { q: 'Can you fix the leak too?', a: 'We repair drywall, not roofs or plumbing. The cause needs to be resolved by the right trade first, and we are glad to schedule around them.' },
    ],
    related: ['ceiling-drywall-repair', 'drywall-repair', 'basement-drywall-installation', 'drywall-patching'],
    ba: {
      before: 'water-stained-ceiling-drywall',
      after: 'finished-room-smooth-ceiling',
      beforeAlt: 'Ceiling with brown water staining after a leak',
      afterAlt: 'Clean white ceiling with recessed lights after refinishing',
    },
  },
  {
    slug: 'garage-drywall-installation',
    name: 'Garage Drywall Installation',
    short: 'Fire-rated board, taped and finished to the level your garage needs.',
    title: 'Garage Drywall Installation in Brookfield, WI | Brookfield Elite Drywall',
    description:
      'Garage drywall installation in Brookfield: fire-rated Type X board, insulated walls and a finish from basic fire-tape to smooth and paint-ready.',
    h1: 'Garage drywall installation in Brookfield',
    lede: 'Bare studs turned into a clean, bright, code-compliant garage that is easier to heat, organize and keep.',
    photo: 'garage-interior-finished-walls',
    photoAlt: 'Clean, empty garage interior with finished white walls and ceiling',
    intro: [
      'Plenty of garages in the area were left unfinished by the builder: open studs, exposed insulation, perhaps board on the one wall the code required. That is adequate for parking a car. It is less so if you want storage systems on the walls, a workbench, some heat in January, or simply a space that does not look half built.',
      'We hang and finish drywall in attached and detached garages. The work is simple in concept but has a few garage-specific requirements, and getting those right is what separates a job that passes inspection and lasts from one that sags and cracks within two winters.',
    ],
    what: {
      h: 'What is different about a garage',
      p: [
        'The first difference is fire separation. Building codes generally require the wall between an attached garage and the house, and the garage ceiling when there is living space above, to be covered in fire-rated gypsum board, typically 5/8-inch Type X, with joints at least taped. We confirm the specific requirement for your project with the local building department.',
        'The second is the environment. Garages go through wide swings in temperature and humidity, see road salt and meltwater on the floor, and take knocks from car doors, bikes and ladders. Board selection, fastening and the gap left at the slab all take that into account.',
      ],
    },
    situations: {
      h: 'Typical garage projects',
      items: [
        { t: 'Finishing a builder-basic garage', d: 'Insulating and boarding open stud walls and the ceiling in a newer home.' },
        { t: 'Workshop or gym conversions', d: 'A cleaner finish, extra backing for cabinets and racks, and walls ready for paint.' },
        { t: 'Heated garages', d: 'Insulation and vapor control behind the board so a heater has a chance of keeping up.' },
        { t: 'Repairs to existing board', d: 'Impact holes, water damage along the bottom edge and ceilings sagging from undersized panels.' },
        { t: 'New detached garages', d: 'Full board and finish in a freshly framed building.' },
      ],
    },
    process: {
      h: 'How we finish a garage',
      steps: [
        { t: 'Assess and plan', d: 'We check framing spacing, wiring, insulation and what the fire separation requires.' },
        { t: 'Insulate and back', d: 'Batts are installed where wanted, and blocking is added for anything heavy you plan to hang.' },
        { t: 'Hang ceiling, then walls', d: '5/8-inch board is lifted to the ceiling and screwed off, followed by the walls, held about half an inch above the slab.' },
        { t: 'Tape and finish', d: 'From a basic fire-tape coat up to a full Level 4, according to how you will use the space.' },
        { t: 'Clean out', d: 'Scrap and dust are removed so you can prime, paint or move straight back in.' },
      ],
    },
    materials: {
      h: 'Board and finish options',
      p: [
        'We normally recommend 5/8-inch Type X throughout a garage, including where the code does not demand it. It resists impact better, spans ceiling joists without sagging, and costs only slightly more than 1/2-inch. For the lowest part of walls that see splash, moisture-resistant or abuse-resistant panels are a sensible upgrade.',
        'Finish is your decision. Level 1 or 2, with tape and one coat, satisfies fire-separation requirements and suits pure storage. If you plan to paint and spend time in the space, Level 4 makes the garage feel like part of the house.',
      ],
    },
    benefits: {
      h: 'What a finished garage offers',
      items: [
        { t: 'Fire separation', d: 'Rated board between garage and living space is there for safety and is checked at resale.' },
        { t: 'Warmer and quieter', d: 'Insulated, boarded walls keep the heat in and soften the noise of doors and tools.' },
        { t: 'Walls you can use', d: 'Solid surfaces and planned backing accept cabinets, slat wall and racks.' },
        { t: 'Cleaner and brighter', d: 'Painted board reflects light and does not harbor dust and cobwebs the way open framing does.' },
      ],
    },
    local: {
      h: 'Garages in Brookfield',
      p: [
        'Two- and three-car attached garages are standard on Brookfield homes, and for five months of the year they do hard duty: wet cars, salt, snow blowers and everything that will not fit in the basement. Many homeowners here heat the garage at least part of the time, which makes insulation and well-sealed board worth doing properly.',
        'If a permit is involved, the City of Brookfield’s inspection staff will look at the fire separation in particular. We build so that visit is uneventful.',
      ],
    },
    faqs: [
      { q: 'Is drywall required in my garage?', a: 'For attached garages, codes generally require fire-rated board on walls and ceilings shared with the house. The other walls are usually optional. We check your exact situation before pricing.' },
      { q: 'Should I insulate before the drywall goes up?', a: 'If you ever intend to heat the garage, yes. It is far cheaper while the studs are open. We can install it as part of the job.' },
      { q: 'What finish level do most people choose?', a: 'It divides fairly evenly. Storage-only garages often stop at a taped fire coat. Anyone planning to paint typically chooses Level 4.' },
      { q: 'Do I need to empty the garage?', a: 'The walls and ceiling need to be accessible. Contents can often be moved to the center and covered, though an empty garage is quicker and therefore costs less.' },
      { q: 'Can drywall be installed in a garage during winter?', a: 'Hanging can be done in the cold. Joint compound needs temperatures above roughly 50°F to cure, so we bring temporary heat for the finishing stage or schedule that part for milder weather.' },
    ],
    related: ['drywall-installation', 'drywall-taping-mudding', 'residential-drywall-services', 'drywall-repair'],
    ba: {
      before: 'hanging-drywall-sheet',
      after: 'garage-interior-finished-walls',
      beforeAlt: 'Installer positioning a drywall sheet against framed walls',
      afterAlt: 'Garage with finished white walls and ceiling',
    },
  },
  {
    slug: 'basement-drywall-installation',
    name: 'Basement Drywall Installation',
    short: 'Lower levels boarded with moisture in mind and finished like the rooms upstairs.',
    title: 'Basement Drywall Installation in Brookfield, WI | Brookfield Elite Drywall',
    description:
      'Basement drywall installation in Brookfield. Moisture-resistant board, straight soffits around ductwork, access panels and a smooth finish.',
    h1: 'Basement drywall installation in Brookfield',
    lede: 'The lower level should feel like the rest of the house, with level ceilings, straight soffits and walls that hold up below grade.',
    photo: 'basement-drywall-taped-joints',
    photoAlt: 'Unfinished basement with new drywall on the ceiling and joints freshly taped',
    intro: [
      'A finished basement is the least expensive square footage you can add to a house, because the walls, floor and roof already exist. What turns a concrete box into a family room is mostly drywall, and basements are harder to board well than any other floor.',
      'Ceilings are low and crowded with ducts, beams and drain lines. Walls sit against concrete that is cool and sometimes damp. Access has to be preserved to shut-offs and cleanouts. We hang and finish basements with those constraints planned for from the start.',
    ],
    what: {
      h: 'What makes basement drywall different',
      p: [
        'Moisture comes first. Concrete foundation walls release water vapor for the life of the house, and the bottom of any basement wall is the first place to get wet if the floor ever takes water. The framing and insulation approach behind the board, and the gap between board and slab, decide whether the finish lasts.',
        'The ceiling comes second. Every duct trunk, beam and pipe that hangs below the joists needs a framed soffit, and those soffits either look deliberate and straight or they look like afterthoughts. Laying them out so they line up, and holding as much headroom as possible, is where experience shows.',
      ],
    },
    situations: {
      h: 'Basement projects we take on',
      items: [
        { t: 'Full basement finishing', d: 'Board and finish for rec rooms, bedrooms, offices and baths once framing and rough-ins are complete.' },
        { t: 'Partial finishing', d: 'One finished room, with the mechanical and storage areas left open.' },
        { t: 'Re-doing an older finish', d: 'Replacing 1970s paneling or water-damaged board with a current, smooth finish.' },
        { t: 'Ceiling conversions', d: 'Replacing a suspended tile ceiling with drywall to gain height and a cleaner look.' },
        { t: 'After waterproofing work', d: 'Rebuilding the lower walls once drain tile or crack repairs have been completed.' },
      ],
    },
    process: {
      h: 'How a basement comes together',
      steps: [
        { t: 'Review framing and rough-ins', d: 'We check that walls are straight, soffits are framed and inspections are signed off before boarding.' },
        { t: 'Plan access', d: 'Valves, cleanouts and junction boxes that must stay reachable are marked for access panels.' },
        { t: 'Hang ceilings and soffits', d: 'Board is run to minimize butt joints across low ceilings, with corner bead on every soffit edge.' },
        { t: 'Hang walls off the floor', d: 'Wall board is kept about half an inch above the slab so it cannot draw up moisture.' },
        { t: 'Finish and sand', d: 'Three coats to Level 4, or Level 5 where recessed lights will rake across the ceiling.' },
      ],
    },
    materials: {
      h: 'Materials for below grade',
      p: [
        'We favor mold- and moisture-resistant board for basement walls, particularly exterior ones, and always for bathrooms. Ceilings usually get 1/2-inch lightweight or 5/8-inch board depending on joist spacing. Soffit and wall corners are wrapped in paper-faced metal or vinyl bead, which tolerates the bumps a basement gets better than bare metal.',
        'If you want less noise travelling upstairs from a theater or playroom, we can add resilient channel, sound-damping board or a second layer. It is much easier to include at this stage than to add later.',
      ],
    },
    benefits: {
      h: 'What a well-boarded basement gives you',
      items: [
        { t: 'Rooms that belong to the house', d: 'Smooth walls and level ceilings rather than paneling and drop tile.' },
        { t: 'Resistance to dampness', d: 'Suitable board and a gap at the floor guard against the usual basement failures.' },
        { t: 'Serviceable mechanicals', d: 'Planned access panels mean a plumber never has to cut into a finished wall.' },
        { t: 'More headroom', d: 'Tight soffits and a drywall ceiling recover inches that a suspended grid gives away.' },
      ],
    },
    local: {
      h: 'Basements in Brookfield',
      p: [
        'Nearly every house in Brookfield has a full basement, and a great many are finished or will be. They also share some features: poured concrete walls, a sump crock in one corner, a steel beam down the middle, and ceiling heights ranging from generous in newer homes to about seven feet in mid-century ranches.',
        'Soil in parts of Waukesha County holds water, so sump pumps here work hard each spring. We suggest that any drainage or seepage concerns be settled before finishing, and we build the lower edge of walls to tolerate an occasional damp floor.',
      ],
    },
    faqs: [
      { q: 'Should basement walls use moisture-resistant drywall?', a: 'We recommend it for exterior walls and require it in bathrooms. The added cost is modest and it gives a margin of safety in a space that is naturally more humid.' },
      { q: 'Drywall ceiling or drop ceiling?', a: 'Drywall looks better and saves headroom. A drop ceiling gives unlimited access. Most homeowners choose drywall with a few well-placed access panels, which offers most of both.' },
      { q: 'Do you do the framing and electrical as well?', a: 'Our work begins once framing, wiring, plumbing and insulation are in place and inspected. If you are at an earlier stage, tell us and we will explain what needs to be ready.' },
      { q: 'How long does drywall take in a typical basement?', a: 'For a basement of around 800 to 1,000 square feet, plan on roughly two weeks from first sheet to final sanding, most of it drying time between coats.' },
      { q: 'My basement has been wet before. Can it still be finished?', a: 'Often yes, once the cause is corrected. We would rather discuss that openly beforehand than board over a problem that will return.' },
    ],
    related: ['drywall-installation', 'water-damaged-drywall-repair', 'drywall-finishing', 'residential-drywall-services'],
    ba: {
      before: 'basement-drywall-taped-joints',
      after: 'finished-basement-recessed-lighting',
      beforeAlt: 'Basement with drywall hung and joints taped, before finishing',
      afterAlt: 'Finished basement with smooth walls, soffits and recessed lighting',
    },
  },
  {
    slug: 'ceiling-drywall-repair',
    name: 'Ceiling Drywall Repair',
    short: 'Cracks, sags, stains and failed tape overhead put right.',
    title: 'Ceiling Drywall Repair in Brookfield, WI | Brookfield Elite Drywall',
    description:
      'Ceiling drywall repair in Brookfield: cracks, sagging board, nail pops, peeling tape and stains re-fastened, re-taped and blended under any light.',
    h1: 'Ceiling drywall repair in Brookfield',
    lede: 'Ceilings show their faults more than any wall. We fix the cause as well as the mark, then blend the repair so the light finds nothing.',
    photo: 'ceiling-drywall-repair-compound',
    photoAlt: 'Worker reaching up to apply joint compound to a ceiling repair beside a work light',
    intro: [
      'A ceiling is the largest unbroken surface in most rooms, and light strikes it at a shallow angle from every window and fixture. A flaw that would go unnoticed on a wall stands out overhead. A crack running the length of the living room or a row of small bumps over the bed is hard to ignore once you have seen it.',
      'We repair ceilings so that the fix cannot be seen. That means working out why the damage occurred, correcting it mechanically where needed, and then finishing wide enough that the repair blends into the surrounding plane.',
    ],
    what: {
      h: 'What goes wrong with ceilings',
      p: [
        'Ceiling board fights gravity for its entire life. If it was hung with too few fasteners, with nails instead of screws, or with 1/2-inch board across joists spaced 24 inches apart, it eventually sags or the fasteners work loose. Seasonal movement of roof trusses adds stress along the joints and where ceilings meet interior walls.',
        'Covering a ceiling crack with compound alone achieves nothing lasting, and the line returns within a season. The board has to be secured again, the old tape removed where it has let go, and the joint rebuilt with fresh tape.',
      ],
    },
    situations: {
      h: 'Ceiling problems we fix',
      items: [
        { t: 'Straight cracks along seams', d: 'Tape that has split or lifted, often running the full length of a room.' },
        { t: 'Nail and screw pops', d: 'Small round bumps or crescents where fasteners have pushed through the finish.' },
        { t: 'Sagging between joists', d: 'A wavy or pillowed look from undersized board or past moisture.' },
        { t: 'Cracks where wall meets ceiling', d: 'Corners that open in winter and close in summer, a mark of truss uplift.' },
        { t: 'Stains and soft spots', d: 'Damage from roof, plumbing or attic condensation.' },
        { t: 'Holes from fixtures', d: 'Relocated lights, removed fans and old speaker cut-outs.' },
      ],
    },
    process: {
      h: 'How we repair a ceiling',
      steps: [
        { t: 'Diagnose', d: 'We establish whether the cause is loose board, failed tape, structural movement or moisture.' },
        { t: 'Protect the room', d: 'Floors and furniture are covered, since everything from a ceiling falls straight down.' },
        { t: 'Re-secure', d: 'Loose board is screwed back to the joists and old nails are set or pulled.' },
        { t: 'Cut out and re-tape', d: 'Failed tape is removed and the joint rebuilt. Badly damaged sections are replaced.' },
        { t: 'Feather and match', d: 'Coats are spread well beyond the repair and the existing texture is reproduced.' },
      ],
    },
    materials: {
      h: 'Methods that hold overhead',
      p: [
        'Setting-type compound goes on first for ceiling repairs because it bonds hard and resists re-cracking. Paper tape is used on flat seams. Where a ceiling meets interior walls under roof trusses, we can fasten the board so the corner is allowed to flex instead of tearing each winter.',
        'Texture matching is half the job on many ceilings. Knockdown, orange peel, stipple and swirl patterns each require their own tool and technique, and we test on scrap before touching the ceiling.',
      ],
    },
    benefits: {
      h: 'What a proper ceiling repair delivers',
      items: [
        { t: 'A crack that stays closed', d: 'Fixing the fastening and the tape, not only the surface, prevents it from returning.' },
        { t: 'An even surface under light', d: 'Wide feathering stops the repair from showing as a ridge or a flat spot.' },
        { t: 'Reassurance', d: 'A sagging ceiling that has been properly re-secured is no longer a worry.' },
        { t: 'Ready for paint', d: 'The repair is sanded and prepared for primer.' },
      ],
    },
    local: {
      h: 'Why Brookfield ceilings crack',
      p: [
        'Truss uplift is a regular winter visitor in this region. When it is very cold, the bottom chord of a roof truss, buried in attic insulation, stays warm and dry while the top chords take on moisture and lengthen. The truss bows upward by a fraction of an inch and lifts the ceiling off the interior walls. A crack appears at the corner in January and has closed again by June.',
        'Along with heated, dry indoor air and humid summers, this means ceilings here move more than in milder climates. Repairs that allow for the movement are the ones that last.',
      ],
    },
    faqs: [
      { q: 'Why does the same ceiling crack keep returning?', a: 'Because compound alone has no strength. Unless loose board is re-fastened and the joint re-taped, the crack reopens with the next change of season.' },
      { q: 'Is a sagging ceiling dangerous?', a: 'Slight sagging between joists is normally cosmetic. Pronounced sagging, particularly after a leak, should be looked at promptly because wet drywall can come away from its fasteners.' },
      { q: 'Does the whole ceiling need repainting after a repair?', a: 'In most cases, yes. Ceiling paint is very difficult to touch up without visible edges, so painting the full ceiling gives a uniform result.' },
      { q: 'Can textured ceilings be repaired?', a: 'Yes. We repair the board, then re-apply texture to match. Very old or unusual textures may not match perfectly, and we will be candid about what to expect.' },
      { q: 'What are the small round bumps on my ceiling?', a: 'Fastener pops. The nail or screw has worked loose and pushed its covering of compound outward. We drive a new screw beside it, set the old one and refinish the spot.' },
    ],
    related: ['popcorn-ceiling-removal', 'water-damaged-drywall-repair', 'drywall-repair', 'drywall-patching'],
    ba: {
      before: 'ceiling-crack-taping-knife',
      after: 'tray-ceiling-finished-white-room',
      beforeAlt: 'Taping knife applying compound along a cracked ceiling joint',
      afterAlt: 'Smooth, evenly finished white ceiling',
    },
  },
  {
    slug: 'drywall-taping-mudding',
    name: 'Drywall Taping & Mudding',
    short: 'Joints embedded, coated and feathered. The stage where walls become seamless.',
    title: 'Drywall Taping & Mudding in Brookfield, WI | Brookfield Elite Drywall',
    description:
      'Drywall taping and mudding in Brookfield. Paper tape set in compound and three feathered coats on joints, corners and fasteners. Any hung board.',
    h1: 'Drywall taping and mudding in Brookfield',
    lede: 'Hanging gets the board on the wall. Taping decides whether anyone can tell where one sheet ends and the next begins.',
    photo: 'taping-knife-drywall-joint',
    photoAlt: 'Finisher drawing a wide taping knife along a drywall joint',
    intro: [
      'Ask anyone who has hung their own drywall which part they would hand off next time, and the answer is nearly always taping. It looks effortless in the hands of someone who does it daily. For everyone else it means ridges, bubbles, sanding dust in every room and joints that still show through two coats of paint.',
      'We tape and mud drywall as a service on its own. If you or your contractor have hung the board and want it finished properly, we will pick it up from there. We will also say so frankly if the hanging needs correcting first, because no amount of compound hides a badly hung sheet.',
    ],
    what: {
      h: 'What taping and mudding means',
      p: [
        'Each joint between sheets is a weak line. Tape bridges it and compound, the “mud”, beds the tape and builds a wide, shallow covering that hides it. Flat seams, inside corners, outside corners and every screw head receive the same sequence of coats, each wider and thinner than the one before.',
        'The skill lies in pressure and angle. Too much compound and you spend hours sanding. Too little under the tape and it blisters. The edges of every coat must feather to nothing, or they will show as lines once light crosses the painted wall.',
      ],
    },
    situations: {
      h: 'When taping is hired separately',
      items: [
        { t: 'DIY-hung rooms', d: 'Homeowners who have boarded a basement or addition themselves and want a professional finish.' },
        { t: 'Contractor hand-offs', d: 'Remodelers and builders who hang with their own crew and subcontract the finishing.' },
        { t: 'Unfinished garages and additions', d: 'Board that has been in place for years with bare joints.' },
        { t: 'Failed taping', d: 'Blistered, cracked or visible seams from an earlier attempt that needs redoing.' },
      ],
    },
    process: {
      h: 'The coats, in order',
      steps: [
        { t: 'Check and pre-fill', d: 'Screws are set to the correct depth, damaged edges trimmed and wide gaps filled with setting compound.' },
        { t: 'Tape coat', d: 'Paper tape is embedded in compound on all flats and inside corners. Corner bead goes on the outside corners.' },
        { t: 'Fill coat', d: 'A wider coat covers the tape and levels the joint. Fasteners get their second pass.' },
        { t: 'Finish coat', d: 'A thin, wide skim feathers each joint ten to twelve inches or more.' },
        { t: 'Sand and inspect', d: 'A light sanding with dust extraction and a pass with a raking light to catch what remains.' },
      ],
    },
    materials: {
      h: 'Tape and compound',
      p: [
        'We tape with paper on flats and inside corners. Bedded in compound, it is stronger and less inclined to crack than self-adhesive mesh. Mesh is useful in specific places, always under setting-type compound. Outside corners receive paper-faced metal or vinyl bead, which resists edge-cracking better than nailed-on bare metal.',
        'For compound, we use an all-purpose or taping mud for bedding because of its bond, a lightweight product for fill and finish coats because it sands cleanly, and setting-type compound for pre-fill and anywhere an early start on the next coat is needed.',
      ],
    },
    benefits: {
      h: 'Why professional taping is worth it',
      items: [
        { t: 'Joints you cannot find', d: 'Properly feathered seams vanish under primer and paint.' },
        { t: 'Much less sanding dust', d: 'Clean knife work leaves little to sand, so the house stays cleaner.' },
        { t: 'Strength at the seams', d: 'Well-bedded paper tape holds through the seasonal movement our climate brings.' },
        { t: 'Time saved', d: 'A crew finishes in days what can take a homeowner weeks of evenings.' },
      ],
    },
    local: {
      h: 'Taping through a Wisconsin year',
      p: [
        'Compound dries by evaporation, so the season affects the schedule. In a humid July, coats can take a day and a half to dry unless air is moving. In January, an unheated addition or garage is too cold for compound to cure at all. We plan for both with fans, dehumidifiers, temporary heat and setting compounds where conditions call for them.',
        'Brookfield homes also swing between very dry indoor air in winter and humidity in summer, which is hard on joints. It is a good reason to insist on paper tape and full bedding.',
      ],
    },
    faqs: [
      { q: 'Will you tape drywall that somebody else hung?', a: 'Yes, regularly. We look at the hanging first. If there are problems that would show through the finish, such as proud screws, wide gaps or unsupported edges, we point them out and can correct them.' },
      { q: 'How many coats do you apply?', a: 'Three over tape and fasteners is standard for a paint-ready Level 4 finish: a tape coat, a fill coat and a finish coat. A Level 5 finish adds a skim over the entire surface.' },
      { q: 'Paper tape or mesh?', a: 'Paper for nearly everything. It makes a stronger joint with standard compounds. Mesh has its uses, mostly in repairs with setting compound.' },
      { q: 'How long does taping take?', a: 'Usually four to five days for a room or a basement, since each coat needs to dry. The hands-on time each day is short and the waiting is what takes up the calendar.' },
      { q: 'Can I paint as soon as you finish?', a: 'Once the surface has been sanded and dusted, it is ready for a drywall primer and then your finish coats.' },
    ],
    related: ['drywall-finishing', 'drywall-installation', 'garage-drywall-installation', 'basement-drywall-installation'],
    ba: {
      before: 'taped-drywall-before-finish',
      after: 'finished-room-smooth-ceiling',
      beforeAlt: 'Room with drywall joints taped and first coats of compound visible',
      afterAlt: 'Finished room with seamless white walls and ceiling',
    },
  },
  {
    slug: 'drywall-finishing',
    name: 'Drywall Finishing',
    short: 'Level 4 and Level 5 surfaces, skim coats and texture, checked under raking light.',
    title: 'Drywall Finishing in Brookfield, WI | Brookfield Elite Drywall',
    description:
      'Drywall finishing in Brookfield: Level 4 for standard rooms, Level 5 skim coat for critical light and glossy paint, plus texture application.',
    h1: 'Drywall finishing in Brookfield',
    lede: 'The last sixteenth of an inch is what you actually see. We finish to the level your room, your lighting and your paint require.',
    photo: 'finishing-ceiling-under-work-light',
    photoAlt: 'Finisher smoothing a skim-coated ceiling under a bright work light',
    intro: [
      'Two rooms can be boarded identically and look nothing alike once painted. One has walls like a sheet of paper. The other shows a faint grid of joints whenever a lamp is switched on. The difference is finishing: how many coats were applied, how wide they were feathered, and whether anybody checked the surface under hard light before the painter arrived.',
      'Finishing is the part of drywall we care about most, and it is the reason clients with demanding spaces call us. We finish new board, bring older walls up to a higher standard, and apply skim coats and textures.',
    ],
    what: {
      h: 'Finish levels, in plain terms',
      p: [
        'The industry describes finish quality in levels from 0 to 5. Level 1 is tape set in compound and nothing more, used above ceilings and in concealed spaces. Level 2 adds a thin coat and suits garages and surfaces that will be tiled. Level 3 adds another coat for walls that will receive heavy texture. Level 4, with three coats over joints and fasteners sanded smooth, is the standard for flat and matte paint in most rooms.',
        'Level 5 takes one further step: a thin skim of compound across the entire surface, board paper included. It removes the slight difference in texture and porosity between paper and joints, which is what causes “joint photographing” under gloss paints or low-angle light.',
      ],
    },
    situations: {
      h: 'When a higher finish is worth it',
      items: [
        { t: 'Long walls with windows at one end', d: 'Daylight raking along the wall makes every joint cast a shadow.' },
        { t: 'Satin, semi-gloss or dark paint', d: 'Sheen and deep colors exaggerate surface variation.' },
        { t: 'Ceilings with recessed or cove lighting', d: 'Fixtures that wash light across the ceiling expose the seams.' },
        { t: 'Skim coating older walls', d: 'Resurfacing rough, repaired or previously textured walls to a smooth finish.' },
        { t: 'Stairwells and two-story foyers', d: 'Tall, bright surfaces seen from several angles.' },
      ],
    },
    process: {
      h: 'How we finish',
      steps: [
        { t: 'Agree the level', d: 'We look at the lighting and your paint plans and recommend a finish level for each area.' },
        { t: 'Complete the coats', d: 'Joints, corners and fasteners are brought up through each coat with full drying in between.' },
        { t: 'Skim where specified', d: 'For Level 5, a thin coat is rolled or troweled over the whole surface and wiped tight.' },
        { t: 'Sand with a light', d: 'Sanding is done with a work light held close to the wall so flaws show as shadows.' },
        { t: 'Final check', d: 'We walk the room, mark anything that catches the light, and touch it up before calling it finished.' },
      ],
    },
    materials: {
      h: 'Compounds, tools and texture',
      p: [
        'Finish coats are applied with lightweight topping or all-purpose compound, thinned slightly so it flows off the knife. Skim coats may be rolled on and smoothed with a wide blade, or applied with a hawk and trowel. Sanding moves from 150 to 220 grit on vacuum-attached sanders.',
        'If you would like texture, we apply orange peel, knockdown and hand-troweled finishes, and always produce a sample board for approval first. For smooth walls we recommend a high-build drywall primer as the first coat, which evens out porosity.',
      ],
    },
    benefits: {
      h: 'What a better finish buys',
      items: [
        { t: 'Paint that looks expensive', d: 'Good paint only looks as good as the surface beneath it.' },
        { t: 'No seams at sunset', d: 'Walls remain uniform when low sun or lamplight crosses them.' },
        { t: 'Freedom with color and sheen', d: 'Level 5 allows darker or glossier paints without regret.' },
        { t: 'A finished feel', d: 'Crisp corners and flat planes are much of what makes a room feel well built.' },
      ],
    },
    local: {
      h: 'Finishing for Brookfield homes',
      p: [
        'Many of the newer and remodeled homes here are designed around daylight: great rooms with tall windows, open stairwells and kitchens lined with recessed cans. Those are the conditions that punish a basic finish. A wall that would look fine in a hallway will show its joints in a two-story room that faces west.',
        'We bring this up at the estimate stage, not after the paint is on. Moving the important rooms to Level 5 is a small share of a remodel budget and saves a great deal of disappointment later.',
      ],
    },
    faqs: [
      { q: 'Do I really need Level 5?', a: 'Not everywhere. Level 4 is right for most bedrooms and halls with flat paint. We recommend Level 5 where there is strong side lighting, where the paint has sheen, or where walls are long and uninterrupted.' },
      { q: 'Can you skim coat walls that are already painted?', a: 'Yes. Sound painted walls can be cleaned, primed with a bonding primer where needed and skim coated to remove texture or old repair marks.' },
      { q: 'What is joint photographing?', a: 'It is when joints remain visible through the paint as slightly different bands, because compound and drywall paper absorb paint differently. A skim coat and a good primer prevent it.' },
      { q: 'Will you finish board that another crew hung and taped?', a: 'We can take over at any stage, though we will inspect the earlier work first. If the base coats are poor, more work is needed to reach a proper finish, and we will explain that in the estimate.' },
      { q: 'Smooth or textured: which should I choose?', a: 'Smooth looks cleaner and is easier to repair invisibly, but takes more labor. Light textures are more forgiving of minor flaws. We can show you samples of each.' },
    ],
    related: ['drywall-taping-mudding', 'drywall-installation', 'popcorn-ceiling-removal', 'residential-drywall-services'],
    ba: {
      before: 'skim-coat-trowel-wall',
      after: 'finished-living-room-smooth-walls',
      beforeAlt: 'Trowel smoothing a skim coat across a textured wall',
      afterAlt: 'Finished living space with smooth, even walls in daylight',
    },
  },
  {
    slug: 'drywall-repair',
    name: 'Drywall Repair',
    short: 'Cracks, nail pops, dents and corner damage fixed at the cause.',
    title: 'Drywall Repair in Brookfield, WI | Brookfield Elite Drywall',
    description:
      'Drywall repair in Brookfield for cracks, nail pops, loose tape, damaged corners and holes. Cause corrected, surface refinished, texture matched.',
    h1: 'Drywall repair in Brookfield',
    lede: 'Cracks, pops, dents and crushed corners, corrected at the source and blended into the wall around them.',
    photo: 'applying-compound-overhead',
    photoAlt: 'Tradesman applying joint compound with a wide knife during a drywall repair',
    intro: [
      'Walls record a house’s history. The crack above the bedroom door that opens each winter. A line of small bumps where nails have backed out. The outside corner in the hall that has met the vacuum cleaner once too often. None of it is structural, but together it makes a well-kept house look tired.',
      'Repair is the work we are called for most, and it runs from a single pop to a list covering the whole house. Our approach is the same at every scale. We find out why the damage happened, correct that, and then refinish the surface so it cannot be seen.',
    ],
    what: {
      h: 'Fixing causes, not just surfaces',
      p: [
        'Most drywall damage is a symptom of something else. A crack follows a joint because the tape has failed or the framing behind it moves. A nail pop appears because the lumber shrank and the fastener stayed where it was. A blister means there was never enough compound under the tape. Filler over any of these will look fine for a few months and then the fault returns.',
        'We secure loose board with screws, cut out and replace failed tape, rebuild crushed corners with new bead, and only then apply finish coats. It takes somewhat longer than a quick fill, and it does not need doing twice.',
      ],
    },
    situations: {
      h: 'Repairs we see every week',
      items: [
        { t: 'Cracks at doors and windows', d: 'Diagonal cracks from the corners of openings, where stress in the wall concentrates.' },
        { t: 'Nail and screw pops', d: 'Raised circles on walls and ceilings, common in the first years of a house and after dry winters.' },
        { t: 'Loose or bubbled tape', d: 'Seams lifting or blistering, often in corners and along ceilings.' },
        { t: 'Damaged outside corners', d: 'Dented or cracked corner bead in hallways, stairwells and around openings.' },
        { t: 'Holes and gouges', d: 'From moving furniture, door handles, removed fixtures and other trades.' },
        { t: 'Earlier repairs that show', d: 'Patches that were never feathered or textured to match.' },
      ],
    },
    process: {
      h: 'How a repair visit goes',
      steps: [
        { t: 'Walk the house together', d: 'You show us what bothers you, we mark each spot and often find a few more.' },
        { t: 'Cover and contain', d: 'Floors and furniture near each repair are protected.' },
        { t: 'Correct the cause', d: 'Board is re-fastened, bad tape removed, corners re-beaded and damaged sections replaced.' },
        { t: 'Refinish', d: 'Each repair gets tape and coats as required, feathered wide.' },
        { t: 'Match and clean', d: 'Texture is matched, repairs sanded and the area vacuumed and ready for primer.' },
      ],
    },
    materials: {
      h: 'Materials we rely on',
      p: [
        'Coarse-thread drywall screws for re-fastening to wood framing. Paper tape and setting compound for structural repairs. Paper-faced metal or vinyl corner bead to replace damaged corners. Lightweight compound for finish coats. A sealer for torn paper and a stain blocker wherever water has been involved.',
        'For cracks at stress points that keep coming back, we may use a flexible or fiber-reinforced approach, or advise on an underlying framing issue if we believe one exists.',
      ],
    },
    benefits: {
      h: 'Why homeowners have it done properly',
      items: [
        { t: 'Repairs that last', d: 'Dealing with the cause prevents the same crack returning next winter.' },
        { t: 'Walls ready for paint', d: 'It is the best preparation before repainting a room or the whole house.' },
        { t: 'One visit, many fixes', d: 'Grouping repairs across the house is efficient and economical.' },
        { t: 'A better-presented home', d: 'Clean walls matter for a sale and for your own satisfaction.' },
      ],
    },
    local: {
      h: 'Drywall wear in Brookfield',
      p: [
        'Our seasons do much of the damage. Winter furnace heat dries framing lumber and it shrinks; summer humidity swells it again. Each cycle works on the fasteners and joints. By the tenth or fifteenth winter most houses have gathered a set of pops and hairline cracks, and that is entirely normal for southeastern Wisconsin.',
        'Homeowners here often call us ahead of a repaint, before listing a house, or after buying one with an inspection report in hand. In each case a single thorough repair visit resets the walls.',
      ],
    },
    faqs: [
      { q: 'Are cracks in my drywall a sign of structural trouble?', a: 'Usually not. Thin cracks at joints and at the corners of doors and windows are typical seasonal movement. Wide, growing or stair-stepped cracks, or doors that begin to stick, deserve a look from a structural professional, and we will say so if we see signs of it.' },
      { q: 'Why do nail pops keep appearing?', a: 'Framing lumber shrinks as it dries and leaves the fastener head proud. The remedy is a screw driven beside the pop to hold the board tight, then refinishing. Simply hammering the nail back in does not hold.' },
      { q: 'Can everything be repaired in one visit?', a: 'The repairs themselves are done together, but compound needs drying time between coats, so most jobs involve two or three short visits on consecutive days.' },
      { q: 'Do you match wall texture?', a: 'Yes. We match smooth, orange peel, knockdown and most hand textures and test the match before applying it.' },
      { q: 'Repair or replace: how do you decide?', a: 'If the board is sound, we repair it. If it is crumbling, water-damaged or broken over a large area, replacing that section is quicker and gives a better result.' },
    ],
    related: ['drywall-patching', 'ceiling-drywall-repair', 'water-damaged-drywall-repair', 'drywall-finishing'],
    ba: {
      before: 'applying-compound-overhead',
      after: 'finished-room-columns-recessed-lights',
      beforeAlt: 'Drywall repair in progress with compound being applied',
      afterAlt: 'Finished room with unblemished white walls',
    },
  },
  {
    slug: 'drywall-installation',
    name: 'Drywall Installation',
    short: 'Board measured, cut and hung so the finishing has the best possible start.',
    title: 'Drywall Installation in Brookfield, WI | Brookfield Elite Drywall',
    description:
      'Drywall installation in Brookfield for new builds, additions and remodels. The right board in each room, proper fastening and smart joint layout.',
    h1: 'Drywall installation in Brookfield',
    lede: 'Good hanging is quiet work that makes everything after it easier: fewer joints, flat planes and screws set exactly where they should be.',
    photo: 'hanging-drywall-sheet',
    photoAlt: 'Installer in work gear positioning a full drywall sheet against a framed wall',
    intro: [
      'There is a saying among finishers that a good hanger makes a taper look brilliant. It is true. When sheets are planned so the joints are few and fall in the right places, when edges meet on framing and screws sit just below the paper, the finish comes together quickly and stays flat for decades.',
      'We install drywall in new homes, additions, remodels and commercial interiors around Brookfield. Because we also finish what we hang, we install with the final surface in mind and take no shortcuts that someone else will have to hide.',
    ],
    what: {
      h: 'What proper installation looks like',
      p: [
        'It starts before a sheet is lifted. Framing is checked for studs that bow or sit out of plane, since drywall follows whatever it is fastened to. Blocking is confirmed at corners and edges. Sheets are then laid out to reduce butt joints, the hard-to-hide seams where two untapered ends meet, and to keep any joint away from the corners of doors and windows where cracks begin.',
        'Ceilings go up first, then walls, usually horizontally with the upper sheet tight to the ceiling. Screws are spaced to code and driven to dimple the paper without tearing it. Openings for boxes, lights and vents are cut close so cover plates and trims hide the edge.',
      ],
    },
    situations: {
      h: 'Projects we hang',
      items: [
        { t: 'New homes', d: 'Whole-house installation scheduled with the builder after insulation inspection.' },
        { t: 'Additions and second stories', d: 'New rooms tied into the existing house.' },
        { t: 'Remodels down to the studs', d: 'Kitchens, baths and whole floors that have been stripped and rewired.' },
        { t: 'Basements and garages', d: 'Spaces being finished for the first time.' },
        { t: 'Commercial interiors', d: 'Partitions and ceilings on steel or wood framing.' },
        { t: 'Single walls and ceilings', d: 'A new partition, a closed-off doorway or a replaced ceiling.' },
      ],
    },
    process: {
      h: 'How installation proceeds',
      steps: [
        { t: 'Measure and order', d: 'We take off quantities by room and choose sheet lengths that reduce joints, 12-footers where they can be carried in.' },
        { t: 'Stock the job', d: 'Board is delivered and distributed to each room, stacked flat and off the floor.' },
        { t: 'Check the framing', d: 'Problem studs are planed or shimmed and missing backing is added before boarding.' },
        { t: 'Hang ceilings, then walls', d: 'Sheets are lifted, positioned and screwed off, with cut-outs made as we go.' },
        { t: 'Scrap out', d: 'Off-cuts are removed and the floor swept so the tapers start on a clean site.' },
      ],
    },
    materials: {
      h: 'Choosing the right board',
      p: [
        'Drywall is not one product. We use 1/2-inch regular or lightweight board for most walls, 5/8-inch or sag-resistant 1/2-inch for ceilings, 5/8-inch Type X where a fire rating is required, moisture- and mold-resistant board for baths, laundries and basements, and cement or foam backer in place of drywall inside showers.',
        'Fastening is with drywall screws throughout. Adhesive is added on wood studs where it helps limit pops. For sound control between rooms we can install insulation, resilient channel or sound-damping panels.',
      ],
    },
    benefits: {
      h: 'Why installation quality matters',
      items: [
        { t: 'Flatter walls', d: 'Checking the framing first keeps bows and humps out of the finished surface.' },
        { t: 'Fewer future cracks', d: 'Sensible joint placement keeps seams out of high-stress areas.' },
        { t: 'A better finish for less', d: 'Fewer, tighter joints mean less compound, less sanding and a cleaner result.' },
        { t: 'The correct board in each room', d: 'Fire, moisture and sag are handled by material choice, not hope.' },
      ],
    },
    local: {
      h: 'Installing in Brookfield',
      p: [
        'New construction and large remodels in Brookfield are permitted and inspected, and drywall cannot begin until the framing, mechanical and insulation inspections have passed. We coordinate with builders and homeowners so the board arrives when the building is ready, not before.',
        'Season matters to the schedule. In winter the building must be heated before board and compound go in, as cold, damp framing leads to trouble later. A good deal of remodeling here is timed for the colder months when people are indoors anyway, so we are accustomed to working in occupied, heated homes with care for floors and furnishings.',
      ],
    },
    faqs: [
      { q: 'Do you supply the drywall or do I?', a: 'We normally supply and deliver all board, fasteners and compound, and include it in the estimate. If your builder is providing material, we can quote labor only.' },
      { q: 'Should board be hung horizontally or vertically?', a: 'On most residential walls, horizontally. It gives fewer linear feet of joint and places the seam at a comfortable height to finish. Tall commercial walls on steel studs are often hung vertically.' },
      { q: 'How long does hanging take?', a: 'Hanging is the quick part. A typical room takes a day, and an average house a few days with a full crew. Finishing afterward takes longer because of drying time.' },
      { q: 'What has to be done before you arrive?', a: 'Framing, electrical, plumbing and HVAC rough-ins complete and inspected, insulation and vapor barrier in place, and the space weather-tight and heated in cold months.' },
      { q: 'Can you hang only and leave the finishing to someone else?', a: 'We can, though most clients have us do both. One crew responsible for the whole wall generally produces the better result.' },
    ],
    related: ['drywall-taping-mudding', 'drywall-finishing', 'basement-drywall-installation', 'garage-drywall-installation'],
    ba: {
      before: 'crew-installing-ceiling-drywall',
      after: 'finished-living-room-smooth-walls',
      beforeAlt: 'Crew on scaffolding fastening drywall to a ceiling in an unfinished room',
      afterAlt: 'Completed bright room with smooth walls and ceiling',
    },
  },
];

export const serviceBySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
