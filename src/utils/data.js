const data = [
  {
    id: 1,
    type: "training",
    content:
      "hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam",
    title: "Florrie Hindmoor",
  },
  {
    id: 2,
    type: "training",
    content:
      "sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc",
    title: "Hamlin Marchand",
  },
  {
    id: 3,
    type: "training",
    content:
      "in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl",
    title: "Karlan Jancy",
  },
  {
    id: 4,
    type: "training",
    content:
      "quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis",
    title: "Codi Dicky",
  },
  {
    id: 5,
    type: "training",
    content:
      "odio cras mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum",
    title: "Avril Dyerson",
  },
  {
    id: 6,
    type: "training",
    content:
      "posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut",
    title: "Joletta Watmore",
  },
  {
    id: 7,
    type: "training",
    content:
      "quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla",
    title: "Cornelle Etchell",
  },
  {
    id: 8,
    type: "training",
    content:
      "curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum",
    title: "Brannon Brumpton",
  },
  {
    id: 9,
    type: "training",
    content:
      "sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a",
    title: "Gayleen Eagleston",
  },
  {
    id: 10,
    type: "training",
    content:
      "odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed",
    title: "Adelice Danelutti",
  },
  {
    id: 11,
    type: "consultation",
    content:
      "integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra",
    title: "Madelin Kingsnorth",
  },
  {
    id: 12,
    type: "consultation",
    content:
      "nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo",
    title: "Rudolf Bruneau",
  },
  {
    id: 13,
    type: "consultation",
    content:
      "et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros",
    title: "Abelard Everex",
  },
  {
    id: 14,
    type: "consultation",
    content: "eget eleifend luctus ultricies eu nibh quisque id justo sit",
    title: "Ezechiel Speck",
  },
  {
    id: 15,
    type: "consultation",
    content:
      "morbi quis tortor id nulla ultrices aliquet maecenas leo odio condimentum",
    title: "Gris Sparrowhawk",
  },
  {
    id: 16,
    type: "consultation",
    content:
      "pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus",
    title: "Marybelle Birts",
  },
  {
    id: 17,
    type: "Flamingo, greater",
    content:
      "aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla",
    title: "Devin Pottage",
  },
  {
    id: 18,
    type: "consultation",
    content:
      "in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet",
    title: "Maximilien Menico",
  },
  {
    id: 19,
    type: "consultation",
    content:
      "orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor",
    title: "Darcee Andress",
  },
  {
    id: 20,
    type: "consultation",
    content: "nam dui proin leo odio porttitor id consequat in consequat ut",
    title: "Randy Skouling",
  },
  {
    id: 21,
    type: "consultation",
    content:
      "parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque",
    title: "Johna Kimblen",
  },
  {
    id: 22,
    type: "consultation",
    content:
      "velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec",
    title: "Tobi Chappelle",
  },
  {
    id: 23,
    type: "consultation",
    content:
      "in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis",
    title: "Griffy Cakes",
  },
  {
    id: 24,
    type: "consultation",
    content:
      "pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel",
    title: "Mathias Woolens",
  },
  {
    id: 25,
    type: "consultation",
    content:
      "eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in",
    title: "Cello Surpliss",
  },
  {
    id: 26,
    type: "consultation",
    content:
      "hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer",
    title: "Harper Lubman",
  },
  {
    id: 27,
    type: "consultation",
    content:
      "tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero",
    title: "Dosi Samwayes",
  },
  {
    id: 28,
    type: "consultation",
    content:
      "in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut",
    title: "Monro Salleir",
  },
  {
    id: 29,
    type: "consultation",
    content:
      "ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla",
    title: "Daisi Priddis",
  },
  {
    id: 30,
    type: "consultation",
    content:
      "sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id",
    title: "Sheffy Tulip",
  },
  {
    id: 31,
    type: "consultation",
    content:
      "id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in",
    title: "Kirstin O'Fogerty",
  },
  {
    id: 32,
    type: "consultation",
    content:
      "nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere",
    title: "Alanna Gentiry",
  },
  {
    id: 33,
    type: "consultation",
    content:
      "gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo",
    title: "Lynea Artois",
  },
  {
    id: 34,
    type: "regular",
    content:
      "sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi",
    title: "Danni DeSousa",
  },
  {
    id: 35,
    type: "regular",
    content:
      "tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh",
    title: "Joell Capner",
  },
  {
    id: 36,
    type: "regular",
    content:
      "accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi",
    title: "Chaddie Slucock",
  },
  {
    id: 37,
    type: "regular",
    content:
      "tempus sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim",
    title: "Bobbee Feragh",
  },
  {
    id: 38,
    type: "regular",
    content:
      "est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam",
    title: "Rosemonde Brouncker",
  },
  {
    id: 39,
    type: "regular",
    content:
      "pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet",
    title: "Brinna Andreev",
  },
  {
    id: 40,
    type: "regular",
    content:
      "vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu",
    title: "Devin Bilton",
  },
  {
    id: 41,
    type: "regular",
    content:
      "tellus nisi eu orci mauris lacinia sapien quis libero nullam sit amet",
    title: "Fielding Gouley",
  },
  {
    id: 42,
    type: "regular",
    content:
      "aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus",
    title: "Brittani Lougheed",
  },
  {
    id: 43,
    type: "regular",
    content:
      "pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis",
    title: "Roseline Golder",
  },
  {
    id: 44,
    type: "regular",
    content:
      "quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc commodo",
    title: "Chancey Trebble",
  },
  {
    id: 45,
    type: "regular",
    content:
      "leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique",
    title: "Kendra Main",
  },
  {
    id: 46,
    type: "regular",
    content:
      "dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit",
    title: "Yorgo Mosey",
  },
  {
    id: 47,
    type: "regular",
    content:
      "primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum",
    title: "Ivor Glen",
  },
  {
    id: 48,
    type: "regular",
    content:
      "eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat",
    title: "Codee Fleming",
  },
  {
    id: 49,
    type: "regular",
    content:
      "praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus",
    title: "Charlena Kinde",
  },
  {
    id: 50,
    type: "regular",
    content:
      "sit amet sem fusce consequat nulla nisl nunc nisl duis bibendum felis",
    title: "Lolita Hernik",
  },
];

export default data;
