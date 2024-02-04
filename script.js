  const navbarItems = [
      {text: 'Home', link: 'index.html'},
      {text: 'Quiz', link: 'quiz.html'},
      {
        text: 'Search',
        submenu: [
          {text: 'Search Map', link: 'maps.html'},
          {text: 'Search Event', link: 'events.html'},
          {text: 'Search Org', link: 'organs.html'}
        ]
      },
      {text: 'Post Event', link: 'postevent.html'},
      {text: 'Sign Up', link: 'signup.html'},
      {text: 'Log In', link: 'login.html'}
    ];

    function createNavbar() {
      const navbar = document.getElementById('navbar');

      navbarItems.forEach(item => {
        const link = document.createElement('a');
        link.textContent = item.text;

        if (item.submenu) {
          link.classList.add('dropdown-toggle');

          const dropdownContent = document.createElement('div');
          dropdownContent.classList.add('dropdown-content');

          item.submenu.forEach(subitem => {
            const sublink = document.createElement('a');
            sublink.textContent = subitem.text;
            sublink.href = subitem.link;
            dropdownContent.appendChild(sublink);
          });
          link.appendChild(dropdownContent);
        } else {
          link.href = item.link;
        }
        navbar.appendChild(link);
      });
    }
document.addEventListener('DOMContentLoaded', createNavbar);

const gardenLocations = [
  { name: "11 BC Serenity Garden", address: "626 East 11th Street", latitude: 40.727124, longitude: -73.978677, zip: "10009" },
  { name: "110th Street Block Association", address: "1651 Madison Avenue", latitude: 40.796295, longitude: -73.947533, zip: "10029" },
  { name: "117th Street Community Garden", address: "172 E 117th Street", latitude: 40.798976, longitude: -73.940376, zip: "10035" },
  { name: "11th Street Community Garden", address: "422 East 11th Street", latitude: 40.729079, longitude: -73.983327, zip: "10009" },
  { name: "2120 Mapes Avenue HDFC", address: "2124 Mapes Avenue", latitude: 40.847216, longitude: -73.885018, zip: "10460" },
  { name: "400 Montauk Avenue Block Association (Ismael Vega y Amigos)", address: "New Lots Avenue", latitude: 40.679057, longitude: -73.881527, zip: "11207" },
  { name: "5th Street Slope Garden Club", address: "626-27 East 5th Street", latitude: 40.723433, longitude: -73.980995, zip: "10009" },
  { name: "6/15 Green", address: "274 15th Street", latitude: 40.664706, longitude: -73.987554, zip: "11215" },
  { name: "6BC Botanical Garden", address: "624-628 E 6th Street", latitude: 40.724036, longitude: -73.980569, zip: "10009" },
  { name: "6th Street & Avenue B Garden", address: "78-92 Avenue B", latitude: 40.724031, longitude: -73.981986, zip: "10009" },
  { name: "700 Decatur Street Block Association", address: "700 Decatur Street", latitude: 40.683541, longitude: -73.915121, zip: "11233" },
  { name: "811 Family and Friends Association", address: "809 Courtlandt Avenue", latitude: 40.823065, longitude: -73.91645, zip: "10451" },
  { name: "97th Street Block Association", address: "33-28 97th Street", latitude: 40.756409, longitude: -73.87122, zip: "11368" },
  { name: "9th Street Community Garden & Park", address: "703 East 9th Street", latitude: 40.725211, longitude: -73.977776, zip: "10009" },
  { name: "A. Badillo Community Rose Garden", address: "924 Melrose Avenue", latitude: 40.82513, longitude: -73.913329, zip: "10451" },
  { name: "Abib Newborn", address: "495 Osborn Street", latitude: 40.659528, longitude: -73.906203, zip: 11212 },
  { name: "Alberts Garden", address: "16-18 East 2nd Street", latitude: 40.725347, longitude: -73.99132, zip: 10003 },
  { name: "All People's Church of the Apostolic Faith Community Garden", address: "149 Tompkins Avenue", latitude: 40.694344, longitude: -73.946088, zip: 11206 },
  { name: "All Peoples Garden, Inc.", address: "293-295 East 3rd Street", latitude: 40.721396, longitude: -73.979916, zip: 10009 },
  { name: "Amazing Garden", address: "261-265 Columbia Street", latitude: 40.683251, longitude: -74.003548, zip: 11231 },
  { name: "Amboy St. Garden", address: "199 Amboy Street", latitude: 40.665633, longitude: -73.913605, zip: 11212 },
  { name: "American Heart", address: "122 Hart Street", latitude: 40.693378, longitude: -73.946915, zip: 11206 },
  { name: "Angie Lee-Gonzalez & Luis Gonzalez Garden", address: "1768 Bryant Avenue", latitude: 40.83652, longitude: -73.885069, zip: 10460 },
  { name: "Anthony Avenue Garden", address: "2078 Anthony Avenue", latitude: 40.852889, longitude: -73.901885, zip: 10457 },
  { name: "Atkins Gardeners", address: "213 Atkins Avenue", latitude: 40.673772, longitude: -73.878795, zip: 11208 },
  { name: "Auxiliary Services for High Schools @ P.S. 91", address: "198 Forsyth Street", latitude: 40.72252, longitude: -73.990728, zip: 10002 },
  { name: "Avenue B Community Garden Association", address: "200 Avenue B", latitude: 40.728307, longitude: -73.978864, zip: 10009 },
  { name: "B.C.C.A. Mini-Park and Garden", address: "150-14 115th Drive", latitude: 40.683535, longitude: -73.792211, zip: 11434 },
  { name: "Back To Eden", address: "144-29 Lakewood Avenue", latitude: 40.689588, longitude: -73.803594, zip: 11435 },
  { name: "Backyard Garden", address: "61-73 Hamilton Avenue", latitude: 40.682842, longitude: -74.006259, zip: 11231 },
  { name: "Bainbridge Avenue Garden", address: "2974-2980 Bainbridge Avenue", latitude: 40.870996, longitude: -73.884326, zip: 10458 },
  { name: "Bathgate Garden", address: "1836 Bathgate Avenue", latitude: 40.84506, longitude: -73.898018, zip: 10457 },
  { name: "Beach Channel High School", address: "100-00 Beach Channel Drive", latitude: 40.586066, longitude: -73.822624, zip: 11694 },
  { name: "Bed-Stuy Farm", address: "404 Decatur Street", latitude: 40.682166, longitude: -73.927115, zip: 11233 },
  { name: "Belmont Little Farmers", address: "2483 Belmont Avenue", latitude: 40.856921, longitude: -73.884462, zip: 10458 },
  { name: "Berry Street Garden", address: "301-303 Berry Street", latitude: 40.713449, longitude: -73.963827, zip: 11249 },
  { name: "Big Red Garden", address: "436 Van Siclen Avenue", latitude: 40.669128, longitude: -73.889416, zip: 11207 },
  { name: "Black Veterans For Social Justice", address: "22 East 119th Street", latitude: 40.802263, longitude: -73.944274, zip: 10035 },
  { name: "Brisas Del Caribe", address: "237 E 3rd Street", latitude: 40.722296, longitude: -73.982048, zip: 10009 },
  { name: "Brook Park", address: "494 East 141st Street", latitude: 40.809829, longitude: -73.918667, zip: 10454 },
  { name: "Brooklyn Bears/Carlton Avenue Garden", address: "397-401 Carlton Avenue", latitude: 40.685731, longitude: -73.971356, zip: 11238 },
  { name: "Brooklyn Bears/Rockwell Place Garden", address: "65-73 Flatbush Avenue", latitude: 40.687133, longitude: -73.979674, zip: 11217 },
  { name: "Brooklyn's Finest Garden", address: "48 Lefferts Place", latitude: 40.681526, longitude: -73.961901, zip: 11238 },
  { name: "Bryant Hill Community Garden", address: "899-999 Bryant Avenue", latitude: 40.819878, longitude: -73.886951, zip: 10474 },
  { name: "C.A.U.S.A. Festival Garden", address: "790 Blake Avenue", latitude: 40.668623, longitude: -73.889471, zip: 11207 },
  { name: "C.E.S. 109 - The Angelo Sanchez Inspirational Garden", address: "1771 Popham Avenue", latitude: 40.851414, longitude: -73.918533, zip: 10453 },
  { name: "C.E.S. 126 - Literacy Garden", address: "175 W 166th Street", latitude: 40.835784, longitude: -73.928324, zip: 10452 },
  { name: "C.E.S. 55", address: "450 St. Pauls Place", latitude: 40.836404, longitude: -73.905014, zip: 10456 },
  { name: "C.E.S. 73", address: "1020 Anderson Avenue", latitude: 40.832706, longitude: -73.926838, zip: 10452 },
  { name: "C.S. 134X - Community Improvement Garden", address: "1313-1311 Bristow Street", latitude: 40.831035, longitude: -73.89477, zip: 10459 },
  { name: "C.S. 154 - Our Children's Garden", address: "250 W 127th Street", latitude: 40.810928, longitude: -73.948938, zip: 10027 },
  { name: "C.S. 46 - Tappan School Garden of Heroes", address: "2987 Frederick Douglass Boulevard", latitude: 40.824746, longitude: -73.943971, zip: 10039 },
  { name: "C.S. 57 - Garden of Hope", address: "2111 Crotona Avenue", latitude: 40.848472, longitude: -73.888561, zip: 10457 },
  { name: "C.S. 6 - West Farms School Garden", address: "1000 East Tremont Avenue", latitude: 40.840755, longitude: -73.881707, zip: 10460 },
  { name: "C.S. 61 - The Francisco Oller School", address: "1550 Crotona Park East", latitude: 40.836575, longitude: -73.892817, zip: 10460 },
  { name: "CAMPOS", address: "640-644 East 12th Street", latitude: 40.727318, longitude: -73.977194, zip: 10009 }
];

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.7128, lng: -74.0060 },
    zoom: 10
  });

  gardenLocations.forEach(function(garden) {
    const marker = new google.maps.Marker({
        position: { lat: garden.latitude, lng: garden.longitude },
        map: map,
        title: garden.name
    });
  }); // <- Add a closing parenthesis here
}


// creation of markers didn't work
//   fetch('green.csv')
//     .then(response => response.text())
//     .then(csvData => {   
//       const lines = csvData.split('\n');

//       lines.forEach(line => {
//         const [name, address, latt, long, zip] = line.split(';');
//         zip.trim()
//         const marker = new google.maps.Marker({
//           position: {lat: parseFloat(latt.replace(',', '.')), lng: parseFloat(long.replace(',', '.'))},
//           map: map,
//           title: name
//         });

//       });

//     })
