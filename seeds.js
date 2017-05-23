use football;

db.teams.insert([
  {
    name: "Heart of Midlothian",
    coach: "Ian Cathro",
    year_founded: 1874,
    stadium: {
      name: "Tynecastle Park",
      capacity: 17420 
    },
    players: [
      {
        name: "Jack Hamilton",
        dob: "13/03/1994",
        position: "Goalkeeper"
      },
      {
       name: "Callum Paterson",
       dob: "13/10/1994",
       position: "Right Back" 
      }]
  },
  {
    name: "Aberdeen",
    coach: "Derek McInnes",
    year_founded: 1903,
    stadium: {
      name: "Pittodrie",
      capacity: 20866 
    },
    players: [
      {
        name: "Joe Lewis",
        dob: "06/10/1987",
        position: "Goalkeeper"
      },
      {
       name: "Shay Logan",
       dob: "29/01/1988",
       position: "Right Back" 
      }]
  }

  ]
)