// Eloquent Javascript "Robot" Project





const roads = [
  "Alice's House-Bob's House",   "Alice's House-Cabin",
  "Alice's House-Post Office",   "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop",          "Marketplace-Farm",
  "Marketplace-Post Office",     "Marketplace-Shop",
  "Marketplace-Town Hall",       "Shop-Town Hall"
];


// Graph object tells you where you can directly reach from a given node on the map.
function buildGraph(edges) {
  const graph = {};

  for (const road of edges) {

    const [from, to] = road.split("-");

    if (!graph[from]) {

      graph[from] = {
        name: from,
        edges: [to]
      };
    } else {
      graph[from].edges.push(to);
    }
    
    if (!graph[to]) {
      graph[to] = {
        name: to,
        edges: [from]
      };
    } else {
      graph[to].edges.push(from);
    }
  }

  return graph;
}

// Build the graph from the roads and store the returned graph object.
const graph = buildGraph(roads);



// State object represents the current state of the robot and its parcels.
class State {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  // Move the robot by manipulating the state.
  move(destination) {
    this.place = destination;
    
    // Perform logic to determine what the parcels states are.
    
  }
}

// Create a State instance using the State class.
const state = new State("Alice's House", [
  {
    place: "Alice's House",
    address: "Town Hall"
  },
  {
    place: "Daria's House",
    address: "Shop"
  },
  {
    place: "Marketplace",
    address: "Bob's House"
  },
  {
    place: "Farm",
    address: "Shop"
  }
]);


