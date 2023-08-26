const group_container = document.getElementById('group_container');
    const Shuffle = document.getElementById('shuffleButton');

    const girlsNames = [
         'Priti Wanjari', 'Renuka Pohokar', 'Jagruti Patle', 'Payal Dhok', 'shweta Darwai', 'Vishakha Malewar','Bhavna Kothe',
         'Snehal Kanhekar','Sanjana Gadekar', 'Ekta Adhau ', 'Krutika Tatte' ,'Samiksha Nevare','Gunjan Rokde','Chakuli Pote','Gayatri Mankar',
         'Priya Sadar','Vaishnavi Bhamburkar','Prachi Aghadate','Gayatri kadu','Radha chaudhari','Pratiksha Dhaskat','Pratiksha Shapane',
         'Janhvi Shende', 'Chaitali Dhoke ','Pratima Akolkar','Megha sarve','Tejashri Aware','Sarika Kale','Mayuri Kadaw','Dhanshri Raut']

    const bedNames = ['A','B','C']    

    function shuffleArray(array) 
    {
      for (let i = array.length-1; i>0; i--) 
      {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    function shuffleRooms() 
    {
      const shuffledNames = [...girlsNames];
      shuffleArray(shuffledNames);

      group_container.innerHTML = '';

      for (let roomNumber = 1; roomNumber <= 10; roomNumber++) 
      {
        const room = document.createElement('div');
        room.className = 'room';
        room.innerHTML = `<h2>Room ${roomNumber}</h2>`;

        for (let i = 0; i < 3; i++) 
        {
          const girlIndex = (roomNumber - 1) * 3 + i;
          const girlName = shuffledNames[girlIndex];
          const p = document.createElement('p');
          p.textContent = girlName;
          room.appendChild(p);
        }

        group_container.appendChild(room);
      }
    }
    
    ShuffleButton.addEventListener('click', shuffleRooms);