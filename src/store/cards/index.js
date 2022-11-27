const INITIAL_STATE = [{
  backlog : [
    {
      title: "peças azuis",
      description: "asdasd asdfas asdfdf afsdfads asdfasdfasd dfdffddffd asdfgasdf asdddsafvvcas asdqoir troguf cbnfart oitgah jklbnmaebtocfd asdfqe tree",
    },
    {
      title: "peças vermelhas",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    }
  ],
  doing : [
    {
      title: "peças pretas",
      description: "Lorem ipsum dolor sit amet, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    }
  ],
  analize : [
    {
      title: "peças brancas",
      description: "Duis aute irure dolor in reprehenderit sunt in culpa qui officia deserunt mollit anim id est laborum",
    }
  ],
  did : [
    {
      title: "tabuleiro",
      description: "Lorem ipsum dolor sit amet, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      title: "dados",
      description: "Lorem ipsum dolor sit amet, consectetur  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      title: "cartas",
      description: "Lorem ipsum dolor sit amet, c ullamco laboris nisi ut aliquip ex ea commodo consequat",
    }
  ]
}];

export default function reducer(state = INITIAL_STATE, action) {
  return state;
}