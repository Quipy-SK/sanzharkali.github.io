// projects.js


window.PROJECTS = [
  // SOFTWARE
  {
    id: "livestock-monitoring",
    category: "software",
    title: "Livestock Monitoring (Geofencing)",
    tagline: "GPS-based monitoring with a mobile-friendly interface.",
    tech: ["Python", "C", "Raspberry Pi", "Arduino", "GPS"],
    highlights: [
      "Developed a Raspberry Pi + Arduino system with GPS based geofencing logic.",
      "Built a mobile accessible web interface for real time monitoring and fence configuration.",
      "Designed the system for practical deployment and iterative tuning."
    ],
    details: {
      problem: "Track livestock position and notify/configure boundary behavior in real time with a simple, mobile friendly interface.",
      architecture: [
        "GPS module feeds location updates to Raspberry Pi.",
        "Geofencing logic evaluates boundary conditions.",
        "Web UI exposes monitoring + configuration controls.",
        "Arduino handles peripheral I/O (as needed)."
      ],
      whatILearned: [
        "Designing around noisy sensor data (GPS drift).",
        "Keeping the UI simple for non technical users.",
        "Building systems that are easy to iterate and debug."
      ]
    },
    links: {
      github: "", 
      demo: ""
    },
  },
  {
    id: "campus-navigation",
    category: "software",
    title: "Campus Navigation (Dijkstra)",
    tagline: "Shortest-path CLI tool using graph modeling.",
    tech: ["C++", "Graphs", "Algorithms"],
    highlights: [
      "Modeled UIC campus as a weighted graph and implemented Dijkstra’s algorithm.",
      "Built a CLI tool to parse map data and compute shortest paths.",
      "Returned distance outputs and usable routes."
    ],
    details: {
      problem: "Compute shortest routes across a campus map represented as weighted nodes and edges.",
      architecture: [
        "Map data parsed into graph representation.",
        "Dijkstra computes shortest path from source to target.",
        "CLI prints route + distance."
      ],
      whatILearned: [
        "Data structure design for graphs.",
        "Edge cases in parsing and route reconstruction."
      ]
    },
    links: { github: "", demo: "" },
    
  },
  {
    id: "course-seat-bot",
    category: "software",
    title: "Course Seat Monitoring & Auto-Registration",
    tagline: "Telegram bot that monitors seat availability and registers automatically.",
    tech: ["Python", "Telegram Bot", "Auth Sessions", "Automation"],
    highlights: [
      "Built a Telegram bot to monitor course seat availability in real time.",
      "Implemented authenticated session handling to automate registration.",
      "Designed event-driven logic to trigger enrollment and notifications with minimal latency."
    ],
    details: {
      problem: "Seats open unpredictably; the system detects openings and registers immediately.",
      architecture: [
        "Polling/monitoring checks seat availability.",
        "Session-auth maintains login state.",
        "Trigger registers course and notifies user."
      ],
      whatILearned: [
        "Reliable automation under time pressure.",
        "Session handling and error recovery."
      ]
    },
    links: { github: "", demo: "" },
   
  },

  // HARDWARE
  {
    id: "artificial-neuron",
    category: "hardware",
    title: "Artificial Neuron (CMOS Thresholding)",
    tagline: "Transistor-level circuits modeling neuron-like behavior.",
    tech: ["CMOS", "LTspice", "Waveform Analysis"],
    highlights: [
      "Designed transistor-level CMOS circuits modeling neuron thresholding behavior.",
      "Simulated and validated weighted signal integration using LTspice.",
      "Verified behavior through waveform analysis."
    ],
    details: {
      problem: "Create a circuit that integrates inputs and triggers when a threshold is reached (neuron-like).",
      architecture: [
        "Input integration block (weighted summation / equivalent).",
        "Thresholding element (inverter / comparator-like behavior).",
        "Output pulse/transition behavior validated by simulation."
      ],
      whatILearned: [
        "Small-signal vs switching behavior in practice.",
        "Simulation iteration: assumptions, corner cases, waveform debugging."
      ]
    },
    links: { github: "", demo: "" },
  
  },
  {
    id: "fsm-vlsi",
    category: "hardware",
    title: "FSM & RTL Verification",
    tagline: "FSM design + RTL verification workflow.",
    tech: ["Verilog", "Digital Logic", "Circuit Design"],
    highlights: [
      "Designed FSMs using flip-flops and combinational logic.",
      "Verified RTL functionality in Verilog.",
      "Mapped designs to physical IC hardware (workflow-level)."
    ],
    details: {
      problem: "Implement a correct state machine with robust verification.",
      architecture: [
        "Define states + transitions.",
        "Implement with FFs + combinational logic.",
        "Verify with testbench / simulation."
      ],
      whatILearned: [
        "Importance of verification discipline.",
        "Clean partitioning between datapath/control."
      ]
    },
    links: { github: "", demo: "" },
   
  },
  {
    id: "custom-8bit-cpu",
    category: "hardware",
    title: "Custom 8-bit Processor Subsystem",
    tagline: "ALU + registers + control logic at transistor level.",
    tech: ["Cadence Virtuoso", "CMOS", "Computer Architecture"],
    highlights: [
      "Designed core components: ALU, register blocks, and control logic at transistor level.",
      "Simulated CMOS logic in Cadence Virtuoso to validate correctness and timing.",
      "Analyzed signal integrity, propagation delay, and switching behavior."
    ],
    details: {
      problem: "Build and validate a small CPU subsystem with correct logic and reasonable timing.",
      architecture: [
        "Datapath: ALU + register file / registers.",
        "Control: decode + control signals.",
        "Validation: simulation for function + timing behavior."
      ],
      whatILearned: [
        "Timing-aware design thinking.",
        "Tradeoffs between complexity and verification effort."
      ]
    },
    links: { github: "", demo: "" },
  
  }
];
