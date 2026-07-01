from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.pdfgen import canvas
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.enums import TA_CENTER

notes = [
    ("class9-physics-motion", "Class 9 — Physics", "Chapter 1: Motion", [
        "Distance & Displacement: Distance is the total path length travelled by an object; displacement is the shortest straight-line distance between initial and final position along with direction.",
        "Speed = Distance / Time (scalar quantity). Velocity = Displacement / Time (vector quantity).",
        "Uniform Motion: Equal distances in equal intervals of time. Non-uniform motion: unequal distances in equal intervals of time.",
        "Acceleration: Rate of change of velocity. a = (v - u) / t.",
        "Equations of Motion: v = u + at, s = ut + 1/2 at^2, v^2 = u^2 + 2as.",
        "Graphs: Distance-time graph slope = speed. Velocity-time graph slope = acceleration; area under v-t graph = distance covered.",
        "Circular Motion: Motion along a circular path at constant speed is accelerated motion because direction keeps changing.",
        "Important Numerical Tip: Always convert km/h to m/s by multiplying with 5/18 before solving numericals.",
    ]),
    ("class9-physics-force", "Class 9 — Physics", "Chapter 2: Force and Laws of Motion", [
        "Newton's First Law (Law of Inertia): An object remains in its state of rest or uniform motion unless acted upon by an unbalanced external force.",
        "Inertia depends on mass — heavier objects have more inertia.",
        "Newton's Second Law: F = ma. Rate of change of momentum is directly proportional to the applied force.",
        "Momentum: p = mv. SI unit: kg m/s.",
        "Newton's Third Law: For every action there is an equal and opposite reaction. Action-reaction pairs act on different bodies.",
        "Conservation of Momentum: In absence of external force, total momentum before collision = total momentum after collision.",
        "Practical examples: rocket propulsion, recoil of gun, walking, swimming — all explained using Newton's third law.",
    ]),
    ("class9-chemistry-matter", "Class 9 — Chemistry", "Chapter 1: Matter in Our Surroundings", [
        "Matter is anything that occupies space and has mass. It is made up of tiny particles.",
        "Characteristics of particles of matter: they have space between them, they are continuously moving (kinetic energy), and they attract each other.",
        "States of Matter: Solid (definite shape & volume), Liquid (definite volume, no definite shape), Gas (no definite shape or volume).",
        "Interconversion of states: Melting (solid to liquid), Freezing (liquid to solid), Vaporisation (liquid to gas), Condensation (gas to liquid), Sublimation (solid to gas directly).",
        "Evaporation: Surface phenomenon; occurs at all temperatures below boiling point. Factors affecting rate of evaporation: temperature, surface area, humidity, wind speed.",
        "Evaporation causes cooling because particles absorb energy from surroundings to overcome force of attraction.",
        "Latent Heat: The hidden heat energy required to change state of matter without change in temperature.",
    ]),
    ("class9-maths-numbersystem", "Class 9 — Maths", "Chapter 1: Number System", [
        "Rational Numbers: Numbers of the form p/q where p, q are integers and q != 0.",
        "Irrational Numbers: Numbers that cannot be expressed as p/q, e.g. root 2, root 3, pi.",
        "Real Numbers: The collection of rational and irrational numbers together, represented on the real number line.",
        "Every real number can be represented by a unique point on the number line, and every point on the number line represents a unique real number.",
        "Laws of Exponents for Real Numbers: a^p * a^q = a^(p+q); (a^p)^q = a^(pq); a^p/a^q = a^(p-q).",
        "Rationalisation: Process of removing surds from the denominator by multiplying with the conjugate.",
        "Successive Magnification: Method used to visualise the representation of numbers on the number line up to a certain decimal place.",
    ]),
    ("class10-physics-light", "Class 10 — Physics", "Chapter 1: Light — Reflection and Refraction", [
        "Reflection of Light: Bouncing back of light when it falls on a polished/shiny surface. Laws: angle of incidence = angle of reflection; incident ray, reflected ray & normal lie in the same plane.",
        "Spherical Mirrors: Concave mirror (converging), Convex mirror (diverging). Mirror formula: 1/v + 1/u = 1/f.",
        "Magnification (mirror) m = -v/u = h'/h.",
        "Refraction of Light: Bending of light when it travels from one transparent medium to another due to change in speed.",
        "Laws of Refraction: incident ray, refracted ray & normal lie in the same plane; Snell's Law n1 sin(i) = n2 sin(r).",
        "Lens Formula: 1/v - 1/u = 1/f. Power of lens P = 1/f (in metres), unit Dioptre (D).",
        "Convex lens converges light rays and can form real or virtual images; concave lens always forms virtual, erect, diminished image.",
    ]),
    ("class10-chemistry-reactions", "Class 10 — Chemistry", "Chapter 1: Chemical Reactions and Equations", [
        "A chemical reaction involves a change in which new substances with new properties are formed.",
        "Balancing chemical equations follows the Law of Conservation of Mass — atoms are neither created nor destroyed.",
        "Types of Reactions: Combination, Decomposition, Displacement, Double Displacement, Oxidation & Reduction (Redox).",
        "Combination reaction: A + B -> AB. Example: CaO + H2O -> Ca(OH)2.",
        "Decomposition reaction: AB -> A + B, may be thermal, electrolytic or photolytic.",
        "Displacement reaction: More reactive element displaces less reactive element from its compound.",
        "Double displacement: exchange of ions between two compounds, often forms a precipitate.",
        "Oxidation is gain of oxygen/loss of hydrogen; Reduction is loss of oxygen/gain of hydrogen. Corrosion & rancidity are effects of oxidation in daily life.",
    ]),
    ("class10-maths-realnumbers", "Class 10 — Maths", "Chapter 1: Real Numbers", [
        "Euclid's Division Lemma: For any two positive integers a and b, there exist unique integers q and r such that a = bq + r, where 0 <= r < b.",
        "Euclid's Division Algorithm is used to find HCF of two positive integers.",
        "Fundamental Theorem of Arithmetic: Every composite number can be expressed as a product of primes, and this factorisation is unique apart from the order of the prime factors.",
        "HCF x LCM = Product of the two numbers (for two positive integers).",
        "Proving irrationality: Use the fundamental theorem of arithmetic and proof by contradiction to show numbers like root 2, root 3, root 5 are irrational.",
        "Decimal Expansion: A rational number p/q has a terminating decimal expansion if q = 2^m 5^n; otherwise it is non-terminating repeating.",
    ]),
    ("class11-physics-kinematics", "Class 11 — Physics", "Chapter 2: Motion in a Straight Line", [
        "Kinematics deals with the description of motion without considering the cause of motion.",
        "Position, Path length & Displacement: Displacement can be zero, positive or negative; path length is always positive.",
        "Average velocity = Total displacement / Total time. Average speed = Total path length / Total time.",
        "Instantaneous velocity = derivative of position w.r.t time (dx/dt).",
        "Acceleration = dv/dt. Uniform acceleration equations: v = u + at, x = ut + 1/2 at^2, v^2 = u^2 + 2ax.",
        "Relative velocity: velocity of one object as observed from another moving object; vAB = vA - vB.",
        "Graphs: slope of x-t graph gives velocity; slope of v-t graph gives acceleration; area under v-t graph gives displacement.",
    ]),
    ("class11-chemistry-basics", "Class 11 — Chemistry", "Chapter 1: Some Basic Concepts of Chemistry", [
        "Mole Concept: 1 mole of any substance contains 6.022 x 10^23 particles (Avogadro's number).",
        "Molar Mass: Mass of one mole of a substance expressed in grams, numerically equal to atomic/molecular mass in amu.",
        "Empirical formula shows simplest whole number ratio of atoms; Molecular formula shows actual number of atoms in a molecule.",
        "Percentage Composition: Used to determine empirical formula from experimental data.",
        "Limiting Reagent: The reactant that gets completely consumed first and limits the amount of product formed.",
        "Concentration Terms: Molarity (mol/L), Molality (mol/kg), Mole fraction, Mass percentage, ppm.",
        "Laws of Chemical Combination: Law of conservation of mass, law of definite proportions, law of multiple proportions, Gay Lussac's law, Avogadro's law.",
    ]),
    ("class11-maths-sets", "Class 11 — Maths", "Chapter 1: Sets", [
        "A set is a well-defined collection of distinct objects, denoted by capital letters; elements are denoted by small letters.",
        "Representation of Sets: Roster/Tabular form and Set-builder form.",
        "Types of Sets: Empty set, Finite set, Infinite set, Equal sets, Equivalent sets, Subset, Power set, Universal set.",
        "Venn Diagrams: Pictorial representation of sets using circles inside a rectangle (universal set).",
        "Operations on Sets: Union (A ∪ B), Intersection (A ∩ B), Difference (A - B), Complement (A').",
        "Important Laws: Commutative, Associative, Distributive laws & De Morgan's Laws: (A ∪ B)' = A' ∩ B', (A ∩ B)' = A' ∪ B'.",
        "Cardinal number of a set: number of distinct elements in a finite set, denoted n(A).",
    ]),
    ("class12-physics-electriccharges", "Class 12 — Physics", "Chapter 1: Electric Charges and Fields", [
        "Electric Charge: Fundamental property of matter; two types — positive and negative. Like charges repel, unlike charges attract.",
        "Quantisation of Charge: Charge on any object is an integral multiple of e (charge of electron), q = ne.",
        "Coulomb's Law: F = k q1 q2 / r^2, where k = 1/(4 pi epsilon0) = 9 x 10^9 Nm^2/C^2.",
        "Electric Field: Region around a charge where another charge experiences a force. E = F/q0 = kQ/r^2.",
        "Electric Field Lines: Start from positive charge and end at negative charge; never intersect each other.",
        "Electric Dipole: Pair of equal and opposite charges separated by a small distance; dipole moment p = q x 2a.",
        "Gauss's Law: Total electric flux through a closed surface = qenclosed / epsilon0. Used to find field due to symmetric charge distributions easily.",
    ]),
    ("class12-chemistry-solidstate", "Class 12 — Chemistry", "Chapter 1: The Solid State", [
        "Solids have definite mass, volume & shape; classified as Crystalline (long range order) and Amorphous (short range/no order, pseudo solids).",
        "Types of Crystalline Solids: Molecular, Ionic, Metallic, Covalent (network) solids — based on nature of constituent particles and bonding.",
        "Unit Cell: Smallest repeating unit that shows the full symmetry of the crystal structure.",
        "Types of Unit Cells: Primitive (particles only at corners) and Centred (Body-centred, Face-centred, End-centred).",
        "Packing Efficiency: Simple cubic ~52.4%, BCC ~68%, FCC/HCP (close packed) ~74%.",
        "Coordination Number: Number of nearest neighbours of a particle in the crystal lattice.",
        "Point Defects: Stoichiometric (Schottky, Frenkel) and Non-stoichiometric (metal excess, metal deficiency) defects affect electrical & mechanical properties.",
    ]),
    ("class12-maths-relations", "Class 12 — Maths", "Chapter 1: Relations and Functions", [
        "Relation: A subset of the Cartesian product A x B, i.e. a set of ordered pairs.",
        "Types of Relations: Empty, Universal, Reflexive, Symmetric, Transitive and Equivalence relation.",
        "Equivalence Relation: A relation that is reflexive, symmetric and transitive simultaneously — partitions a set into equivalence classes.",
        "Function: A special relation where every element of domain has exactly one image in codomain.",
        "Types of Functions: One-one (injective), Onto (surjective), Bijective (both one-one and onto), Many-one, Into.",
        "Composition of Functions: (fog)(x) = f(g(x)). Composition is associative but not commutative in general.",
        "Invertible Function: A function is invertible if and only if it is bijective (one-one and onto).",
    ]),
]

styles = getSampleStyleSheet()
title_style = ParagraphStyle('TitleCWA', parent=styles['Title'], fontSize=20, textColor=colors.HexColor('#4f46e5'), spaceAfter=4, alignment=TA_CENTER)
sub_style = ParagraphStyle('SubCWA', parent=styles['Normal'], fontSize=11, textColor=colors.HexColor('#64748b'), alignment=TA_CENTER, spaceAfter=14)
chap_style = ParagraphStyle('ChapCWA', parent=styles['Heading2'], fontSize=15, textColor=colors.HexColor('#0f172a'), spaceBefore=6, spaceAfter=12)
body_style = ParagraphStyle('BodyCWA', parent=styles['Normal'], fontSize=10.5, leading=16, spaceAfter=10, textColor=colors.HexColor('#1e293b'))
footer_style = ParagraphStyle('FootCWA', parent=styles['Normal'], fontSize=8.5, textColor=colors.HexColor('#94a3b8'), alignment=TA_CENTER)

import os
os.makedirs('/home/user/webapp/assets/pdf', exist_ok=True)

for fname, cls, chapter, points in notes:
    path = f'/home/user/webapp/assets/pdf/{fname}.pdf'
    doc = SimpleDocTemplate(path, pagesize=A4, topMargin=28*mm, bottomMargin=20*mm, leftMargin=20*mm, rightMargin=20*mm)
    story = []
    story.append(Paragraph("CWA SCIENCE CLASSES", title_style))
    story.append(Paragraph("Concept With Abhishek &nbsp;|&nbsp; " + cls, sub_style))
    story.append(HRFlowable(width="100%", thickness=1.4, color=colors.HexColor('#e0e7ff'), spaceAfter=16))
    story.append(Paragraph(chapter, chap_style))
    for i, pt in enumerate(points, 1):
        story.append(Paragraph(f"<b>{i}.</b> {pt}", body_style))
    story.append(Spacer(1, 20))
    story.append(HRFlowable(width="100%", thickness=0.8, color=colors.HexColor('#e2e8f0'), spaceAfter=8))
    story.append(Paragraph("Prepared by Abhishek Garg Sir &nbsp;•&nbsp; CWA Science Classes, Maheshkhunt, Khagaria (Bihar) &nbsp;•&nbsp; Admission Helpline: +91 6207434940", footer_style))
    doc.build(story)
    print("Created", path)
