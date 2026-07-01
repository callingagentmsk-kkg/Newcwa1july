/* ============================================================
   CWA SCIENCE CLASSES — Batch / Chapter Content Data
   videoId = YouTube video ID for embed (free reference lectures
   curated for CWA students; replace with Abhishek Sir's own
   recordings as they are produced).
   pdf = link to notes PDF (placeholder generated notes included
   in /assets/pdf/, replace with real scanned notes any time).
   ============================================================ */

const CWA_BATCHES = {
  "class-9": {
    label: "Class 9",
    board: "Bihar Board",
    color: "physics",
    subjects: {
      physics: {
        title: "Physics",
        icon: "icon-physics",
        chapters: [
          { no: 1, title: "Motion", desc: "Distance, displacement, speed, velocity & graphs", videoId: "jC6MW9KOQvU", pdf: "assets/pdf/class9-physics-motion.pdf", locked:false },
          { no: 2, title: "Force & Laws of Motion", desc: "Newton's laws, momentum & conservation", videoId: "CfxfW64P04s", pdf: "assets/pdf/class9-physics-force.pdf", locked:false },
          { no: 3, title: "Gravitation", desc: "Universal law, free fall, weight & mass", videoId: "", pdf: "", locked:true },
          { no: 4, title: "Work & Energy", desc: "Work done, kinetic & potential energy", videoId: "", pdf: "", locked:true }
        ]
      },
      chemistry: {
        title: "Chemistry",
        icon: "icon-chemistry",
        chapters: [
          { no: 1, title: "Matter in Our Surroundings", desc: "States of matter, evaporation & interconversion", videoId: "bmzDsWMSCTk", pdf: "assets/pdf/class9-chemistry-matter.pdf", locked:false },
          { no: 2, title: "Is Matter Around Us Pure", desc: "Mixtures, solutions, colloids & separation", videoId: "", pdf: "", locked:true },
          { no: 3, title: "Atoms & Molecules", desc: "Laws of chemical combination, mole concept basics", videoId: "", pdf: "", locked:true }
        ]
      },
      maths: {
        title: "Maths",
        icon: "icon-maths",
        chapters: [
          { no: 1, title: "Number System", desc: "Rational, irrational numbers & real number line", videoId: "9Z1xEW3-T14", pdf: "assets/pdf/class9-maths-numbersystem.pdf", locked:false },
          { no: 2, title: "Polynomials", desc: "Zeroes, factorisation & remainder theorem", videoId: "", pdf: "", locked:true },
          { no: 3, title: "Coordinate Geometry", desc: "Cartesian plane & plotting points", videoId: "", pdf: "", locked:true }
        ]
      }
    }
  },
  "class-10": {
    label: "Class 10",
    board: "Bihar Board",
    color: "chemistry",
    subjects: {
      physics: {
        title: "Physics",
        icon: "icon-physics",
        chapters: [
          { no: 1, title: "Light — Reflection & Refraction", desc: "Mirrors, lenses, image formation & numericals", videoId: "8Rwv2hvdZFo", pdf: "assets/pdf/class10-physics-light.pdf", locked:false },
          { no: 2, title: "The Human Eye & Colourful World", desc: "Defects of vision, dispersion & scattering", videoId: "", pdf: "", locked:true },
          { no: 3, title: "Electricity", desc: "Ohm's law, resistance, series-parallel circuits", videoId: "", pdf: "", locked:true }
        ]
      },
      chemistry: {
        title: "Chemistry",
        icon: "icon-chemistry",
        chapters: [
          { no: 1, title: "Chemical Reactions & Equations", desc: "Types of reactions, balancing equations", videoId: "UahTkaU2A2A", pdf: "assets/pdf/class10-chemistry-reactions.pdf", locked:false },
          { no: 2, title: "Acids, Bases & Salts", desc: "pH scale, indicators & important salts", videoId: "", pdf: "", locked:true },
          { no: 3, title: "Metals & Non-Metals", desc: "Reactivity series, extraction & corrosion", videoId: "", pdf: "", locked:true }
        ]
      },
      maths: {
        title: "Maths",
        icon: "icon-maths",
        chapters: [
          { no: 1, title: "Real Numbers", desc: "Euclid's division lemma, HCF-LCM, irrational proofs", videoId: "MX1iSpb4tRE", pdf: "assets/pdf/class10-maths-realnumbers.pdf", locked:false },
          { no: 2, title: "Polynomials", desc: "Zeroes & relationship with coefficients", videoId: "", pdf: "", locked:true },
          { no: 3, title: "Pair of Linear Equations", desc: "Graphical & algebraic methods of solving", videoId: "", pdf: "", locked:true }
        ]
      }
    }
  },
  "class-11": {
    label: "Class 11",
    board: "Bihar Board",
    color: "maths",
    subjects: {
      physics: {
        title: "Physics",
        icon: "icon-physics",
        chapters: [
          { no: 1, title: "Motion in a Straight Line", desc: "Kinematics equations, graphs & relative motion", videoId: "HYQdPGN3ZXQ", pdf: "assets/pdf/class11-physics-kinematics.pdf", locked:false },
          { no: 2, title: "Motion in a Plane", desc: "Vectors, projectile & circular motion", videoId: "", pdf: "", locked:true },
          { no: 3, title: "Laws of Motion", desc: "Newton's laws, friction & circular dynamics", videoId: "", pdf: "", locked:true }
        ]
      },
      chemistry: {
        title: "Chemistry",
        icon: "icon-chemistry",
        chapters: [
          { no: 1, title: "Some Basic Concepts of Chemistry", desc: "Mole concept, stoichiometry & concentration terms", videoId: "BB43j3fu1E4", pdf: "assets/pdf/class11-chemistry-basics.pdf", locked:false },
          { no: 2, title: "Structure of Atom", desc: "Bohr model, quantum numbers & orbitals", videoId: "", pdf: "", locked:true },
          { no: 3, title: "Classification of Elements", desc: "Periodic trends & periodicity", videoId: "", pdf: "", locked:true }
        ]
      },
      maths: {
        title: "Maths",
        icon: "icon-maths",
        chapters: [
          { no: 1, title: "Sets", desc: "Types of sets, operations & Venn diagrams", videoId: "F_7WUK7htRg", pdf: "assets/pdf/class11-maths-sets.pdf", locked:false },
          { no: 2, title: "Relations & Functions", desc: "Cartesian product, domain, range & types", videoId: "", pdf: "", locked:true },
          { no: 3, title: "Trigonometric Functions", desc: "Identities, graphs & compound angles", videoId: "", pdf: "", locked:true }
        ]
      }
    }
  },
  "class-12": {
    label: "Class 12",
    board: "Bihar Board",
    color: "trophy",
    subjects: {
      physics: {
        title: "Physics",
        icon: "icon-physics",
        chapters: [
          { no: 1, title: "Electric Charges & Fields", desc: "Coulomb's law, electric field & Gauss's law", videoId: "oROKtbRr8R0", pdf: "assets/pdf/class12-physics-electriccharges.pdf", locked:false },
          { no: 2, title: "Electrostatic Potential & Capacitance", desc: "Potential, capacitors & energy stored", videoId: "", pdf: "", locked:true },
          { no: 3, title: "Current Electricity", desc: "Ohm's law, resistivity & circuits", videoId: "", pdf: "", locked:true }
        ]
      },
      chemistry: {
        title: "Chemistry",
        icon: "icon-chemistry",
        chapters: [
          { no: 1, title: "Solid State", desc: "Crystal lattices, unit cells & packing efficiency", videoId: "pECJYaazHMo", pdf: "assets/pdf/class12-chemistry-solidstate.pdf", locked:false },
          { no: 2, title: "Solutions", desc: "Concentration terms, colligative properties", videoId: "", pdf: "", locked:true },
          { no: 3, title: "Electrochemistry", desc: "Cells, EMF, Nernst equation & conductance", videoId: "", pdf: "", locked:true }
        ]
      },
      maths: {
        title: "Maths",
        icon: "icon-maths",
        chapters: [
          { no: 1, title: "Relations & Functions", desc: "Types of relations, functions & composition", videoId: "9EtqGSJ4bCM", pdf: "assets/pdf/class12-maths-relations.pdf", locked:false },
          { no: 2, title: "Inverse Trigonometric Functions", desc: "Domain, range & properties", videoId: "", pdf: "", locked:true },
          { no: 3, title: "Matrices", desc: "Types, operations & elementary transformations", videoId: "", pdf: "", locked:true }
        ]
      }
    }
  }
};
