export default {
  trips: [{
    leavingFrom: 1,
    goingTo: 2,
    travelDate: '2019-11-18',
    returnDate: '2019-11-18',
    reason: 'visit our agents',
    hotelId: 5,
    type: 'return',
    rooms: [1]
  },
  {
    leavingFrom: 1,
    goingTo: 2,
    travelDate: '2019-11-18',
    returnDate: '2019-11-18',
    reason: 'visit our agents',
    hotelId: 5,
    type: 'return',
    rooms: [1]
  }, {
    leavingFrom: 3,
    goingTo: 4,
    travelDate: '2019-11-18',
    returnDate: '2019-11-18',
    reason: 'visit our new country office',
    hotelId: 5,
    type: 'return',
    rooms: [2]
  },
  {
    leavingFrom: 1,
    goingTo: 2,
    travelDate: '2019-11-18',
    reason: 'visit our agents',
    hotelId: 5,
    type: 'one way',
    rooms: [1],
  }, {
    leavingFrom: 3,
    goingTo: 4,
    travelDate: '2019-11-18',
    returnDate: '2019-11-18',
    reason: 'visit our new country office',
    hotelId: 5,
    type: 'return',
    rooms: [2, 'play']
  },
  {
    leavingFrom: 5,
    goingTo: 6,
    travelDate: '2019-11-18',
    returnDate: '2019-11-18',
    reason: 'visit our new country office',
    hotelId: 5,
    type: 'return',
    rooms: [2]
  },
  {
    leavingFrom: 1,
    goingTo: 2,
    travelDate: '2019-11-18',
    reason: 'visit our agents',
    hotelId: 5,
    type: 'one way',
    rooms: [3],
  }],
  rooms: [{
    id: 1,
    hotelId: 5,
    name: 'Muhabura',
    type: 'return',
    description: 'The best room ever',
    image: 'room.png',
    cost: 5000,
    status: 'available',
  },
  {
    id: 2,
    hotelId: 5,
    name: 'Muhabura',
    type: 'return',
    description: 'The best room ever',
    image: 'room.png',
    cost: 5000,
    status: 'reserved'
  },
  {
    id: 3,
    hotelId: 5,
    name: 'Muhabura',
    type: 'return',
    description: 'The best room ever',
    image: 'room.png',
    cost: 5000,
    status: 'available',
  }],
  bookings: [{
    userId: 1,
    hotelId: 5,
    roomId: 1
  }],
  hotels: [{
    id: 5,
    locationId: 1,
    name: 'Marriot',
    image: 'image.png',
    description: 'hello world',
    services: 'Catering'
  }],
};
