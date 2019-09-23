module.exports = {
  preExisting(){
    return  [
      { label: '', value: '' },
      { label: 'Bloated', value: 'Bloated' },
      { label: 'Drowzey', value: 'Drowzey' },
      { label: 'Heart Burn', value: 'Heart Burn' },
      { label: 'Gas', value: 'Gas' },
      { label: 'Vomiting', value: 'Vomiting' },
      { label: 'Nausea', value: 'Nausea' },
      { label: 'Diarrhea', value: 'Diarrhea' },
    ];
  },
  getUserEvents(){
    return {
      username:'testUser',
      display_name:'Jim Carey',
      events: 
        [
          {
            name:'Lunch',
            type: 'meal', 
            items: [
              {
                name: 'hamburger',
                ingredients: ['wheat', 'beef', 'salt', 'spices']
              },
              {
                name: 'fries',
                ingredients: ['palm oil', 'potato', 'salt']
              }
            ],
            time: 2134234
          }, 
          {
            type: 'symptom', 
            name: 'bloating', 
            severity: 'HIGH', 
            time: Date.now()
          }
        ],
        symptoms: ['bloating', 'headaches']
    }
  }

}