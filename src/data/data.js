const data = {
  education: {
    header: 'Utbildning',
    merits: [
      {
        subtitle: 'Kandidatexamen, Systemvetenskap inriktning Systemutveckling',
        employer: 'Linköpings Universitet',
        date: '2019-2020',
      },
    ],
  },
  work: {
    header: 'Arbetslivserfarenhet',
    merits: [
      {
        subtitle: 'Leveransassistent',
        employer: 'Skobes Bil AB',
        date: '2016-2018, 2019, 2020',
        content: 'Min roll som leveransassistent på Skobes Bil innebar mestadels'
          + 'administrativt arbete gällande försäljning av begagnade och nya bilar.'
          + 'Under min tid på Skobes Bil lärde jag mig dels mycket om att arbeta'
          + 'tillsammans i team och vara en lagspelare men även att arbeta'
          + 'självständigt och självgående. Jag arbetade heltid under två år för att'
          + 'sedan göra en längre resa följt av studier.',
      },
      {
        subtitle: 'Kassörska',
        employer: 'Plantagen',
        date: '2020',
        content: 'På Plantagen arbetade jag mestadels som kassörska vid sidan av mina'
          + 'studier under våren och tidig sommar 2020. Här lärde jag mig mycket om'
          + 'kundbemötande och fick öva på min kommunikativa förmåga mot kund'
          + 'samt att hantera stressiga situationer. ',
      },
      {
        subtitle: 'Vårdbiträde',
        employer: 'Tranås Kommun',
        date: '2015-2016',
      },
      {
        subtitle: 'Kassörska',
        employer: 'Biograf Royal',
        date: '2014-2018',
      },
      {
        subtitle: 'Kallskänka/kassörska',
        employer: 'Café Gotteriet',
        date: '2013-2016',
      },
    ],
  },
  other: {
    header: 'Övrig Erfarenhet',
    merits: [
      {
        subtitle: 'Aktivitetsansvasrig',
        employer: 'Systerskapet',
        date: '2019 - 2020',
        content: 'Aktivitetsansvarig för programmets förening som arbetar för ökad jämlikhet på programmen.'
          + ' Arbetet innebar planerade och det övergripande ansvaret för genomförandet av alla aktiviteter'
          + ' och event som anordnades.',
      },
      {
        subtitle: 'Värd', employer: 'Larm', date: '2019', content: 'Värd på karriärmässan LARM I Linköping 2019.',
      },
    ],
  },
  skills: [
    { skill: 'C++', skillLevel: 50 },
    { skill: 'Java', skillLevel: 70 },
    { skill: 'React', skillLevel: 80 },
    { skill: 'CSS', skillLevel: 70 },
    { skill: 'JavaScript', skillLevel: 40 },
    { skill: 'HTML', skillLevel: 40 },
    { skill: 'SQL', skillLevel: 60 },
    { skill: 'GIT', skillLevel: 40 },
    { skill: 'AXURE', skillLevel: 90 },
    { skill: 'ADA', skillLevel: 30 },
    { skill: 'B-KÖRKORT', skillLevel: 20 },
    { skill: 'ENGELSKA', skillLevel: 70 },
    { skill: 'SVENSKA (modersmol)', skillLevel: 60 },
  ],
  profile: {
    header: 'Profil',
    merits: [{
      content: 'Jag är en glad och ambitiös problemlösare som motiveras av möjligheten att lära mig nya saker. '
        + 'Jag är en driven person med stor kommunikativ förmåga'
        + ' och ett stort intresse för gränssnittdesign och användbarhet.'
        + ' Jag är särskilt intresserad av att arbeta nära mina kunder med UX design och se kundbehov.',
    }],
  },
};

export default data;
