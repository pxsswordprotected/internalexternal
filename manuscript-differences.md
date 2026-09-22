# Manuscript differences: `new_version.html` vs `src/content`

## How to read this report

- **HTML-only** means the text exists in `new_version.html` but not in the current `src/content` manuscript at the aligned location.
- **Current-only** means the text exists in `src/content` but not in `new_version.html` at the aligned location.
- A change containing both blocks is a replacement or rewrite.
- The detailed section is exhaustive after semantic normalization: YAML frontmatter, Markdown link URLs, image URLs, emphasis markers, heading markers, blockquote markers, HTML tags/entities, and whitespace-only differences are ignored. Visible link text and prose remain compared.
- Titles and section presence are compared separately. Other YAML metadata cannot be compared because `new_version.html` contains no equivalent metadata.

## Structural differences

- Every numbered section in `new_version.html` has a section with the same number in `src/content`.
- `src/content/sections/notes.md` exists only in the current manuscript; `new_version.html` has no Notes section.
- The current manuscript contains body text in the top-level section files 2, 3, 4, 5, 6, and 7; those top-level headings have no body text in `new_version.html`.
- The current Introduction has three opening paragraphs before the Wittgenstein quotation; `new_version.html` begins directly with the quotation.

### Renamed headings

| Section | `new_version.html` | Current `src/content` |
|---|---|---|
| 2.2 | Somatics | Embodiment and Somatic Stabilization |
| 3.2 | Intuition | Intuition {check whole for ai} |
| 4.1 | Conditions of Emergence | Emergence and Failed Gestalts |
| 4.2 | Structural Thresholds in Search Spaces | Creativity and Structural Thresholds |
| 5 | Emotions, Conflict & Suffering | Conflict, Control, and Suffering |
| 6 | Reality Construction | Transparency |

## Change-volume overview

Word counts are normalized visible-text counts. Similarity is case-sensitive token overlap; 100% means no visible-text difference after normalization.

| Section | HTML words | Current words | Similarity | Change spans | HTML-only/replaced tokens | Current-only/replaced tokens |
|---|---:|---:|---:|---:|---:|---:|
| Introduction | 354 | 706 | 67.1% | 3 | 1 | 397 |
| 1 The Structural Ontology | 0 | 0 | 100.0% | 0 | 0 | 0 |
| 1.1 The Compression Gradient | 1138 | 1165 | 93.4% | 14 | 70 | 102 |
| 1.2 The Field | 5072 | 4804 | 92.8% | 92 | 578 | 244 |
| 1.3 Chunking, Gestalts, and Attractors | 1670 | 1504 | 92.1% | 25 | 235 | 44 |
| 1.4 Thoughts & Memories | 4947 | 4956 | 95.6% | 238 | 252 | 248 |
| 1.5 Bow Tie Architecture | 6297 | 6372 | 94.5% | 290 | 355 | 444 |
| 2 The Dynamics of Fit | 0 | 17 | 0.0% | 1 | 0 | 20 |
| 2.1 The Energetic Triad | 3330 | 3315 | 99.0% | 32 | 51 | 23 |
| 2.2 Embodiment and Somatic Stabilization | 2015 | 1908 | 93.6% | 16 | 196 | 86 |
| 2.3 Slack | 1284 | 1959 | 76.9% | 41 | 43 | 801 |
| 2.4 Language | 1901 | 2110 | 94.3% | 5 | 2 | 260 |
| 3 Learning and Expertise | 0 | 4 | 0.0% | 1 | 0 | 7 |
| 3.1 Metaphors | 862 | 859 | 99.8% | 1 | 3 | 0 |
| 3.2 Intuition {check whole for ai} | 682 | 682 | 100.0% | 0 | 0 | 0 |
| 3.3 Mathematics | 1296 | 1296 | 100.0% | 0 | 0 | 0 |
| 3.4 Resonance & Friction | 2839 | 2839 | 99.9% | 3 | 3 | 3 |
| 3.5 The Loop of Refinement | 3497 | 3510 | 98.9% | 30 | 38 | 51 |
| 3.6 Real-making vs Truth-making | 1047 | 1044 | 98.0% | 27 | 27 | 21 |
| 3.7 Training Data | 1245 | 1228 | 97.6% | 11 | 41 | 25 |
| 4 Emergence, Thresholds, and Creativity | 0 | 4 | 0.0% | 1 | 0 | 7 |
| 4.1 Emergence and Failed Gestalts | 1035 | 1035 | 99.6% | 6 | 5 | 5 |
| 4.2 Creativity and Structural Thresholds | 1515 | 1518 | 98.7% | 17 | 21 | 24 |
| 5 Conflict, Control, and Suffering | 0 | 4 | 0.0% | 1 | 0 | 7 |
| 5.1 Emotions | 2132 | 2145 | 96.7% | 62 | 72 | 86 |
| 5.2 Field Dissonance | 1423 | 1404 | 98.3% | 21 | 41 | 11 |
| 5.3 The Suffering Loop | 3953 | 3953 | 98.1% | 85 | 90 | 81 |
| 6 Transparency | 0 | 4 | 0.0% | 1 | 0 | 7 |
| 6.1 Emptiness & Ontological Authority | 2297 | 2296 | 99.3% | 20 | 18 | 16 |
| 6.2 Transparency | 3713 | 3712 | 98.5% | 67 | 72 | 49 |
| 7 Sanity, Wisdom, and Practice | 0 | 4 | 0.0% | 1 | 0 | 7 |
| 7.1 Sanity & Wisdom | 2426 | 2544 | 95.8% | 35 | 44 | 190 |
| 7.2 Practice | 2909 | 2908 | 98.2% | 63 | 60 | 56 |
| Notes | 0 | 841 | 0.0% | 1 | 0 | 962 |

## Largest directional differences

These are navigation aids; the exhaustive spans follow.

### Substantial current-only material

- **Introduction:** a new opening about humanity, specificity, creativity, and the essay’s aims.
- **2.3 Slack:** a long new passage proposing proxy measurements for slack and distinguishing it from a catch-all explanation.
- **2.4 Language:** a new passage about emotional vulnerability in first versus second languages.
- **7.1 Sanity & Wisdom:** a new long quotation/passage about research and scholarship.
- **Notes:** the entire unnumbered Notes document is current-only.
- **1.5 Bow Tie Architecture:** current-only diagram notes and drafting notes.
- **1.1 and 1.2:** multiple current-only authoring notes and transition notes.

### Substantial HTML-only material

- **1.3 Chunking, Gestalts, and Attractors:** the full annealing passage is present only in `new_version.html`.
- **1.2 The Field:** several claims identifying the field with the instantiated object of consciousness and discussing formal mathematical/structural properties are absent or substantially rewritten in the current manuscript.
- **2.2:** parts of the older vasocomputation, vascular-tone, and sticky-prior explanation are absent or substantially rewritten in the current manuscript.

## Exhaustive normalized text differences

## Introduction

### Change 1 — Current-only

**Context:** … ⟦change⟧ “ There is indeed the inexpressible. This shows itself…

**Current-only text:**

```text
Humanity's story, or rather that of a “ universal ” story, is characterized by increasing specificity. As things march along the ever - so - progressive process of entropic evolution, what naturally arises is a sense of increase in complexity. More and more things start to connect and depend on each other, creating systems that have feedback loops and downstream effects, eventually becoming incredibly chaotic. But through this process is a demarcation of specificity, the act of things becoming more pointy. The human story very obviously outlines this: we’ve gone from primitive living in caves to developing and living in chaotic cities with vast interconnected economic systems and advanced architecture, something a human from even a few thousand years ago could literally never imagine. It is clear the action and adjective of creativity is of upmost importance here, as without it, the human species would be doomed to a state of static repetition, something seen in even our closest relatives, chimpanzees, who cannot innovate tools across generations. But what makes human specificity special? Specifically, why does our biology and downstream phenomenology allow for such impactful things? I want to try to answer this in my own terms using my own reasoning, working with years of experience studying human perception, psychology, and behavior as an amateur. In this piece, I attempt to sketch out a working ontology explaining what we are doing in perception that is so important, and how this affects what we do and the systems we participate in. I do posit some riskable predictions that have their own consequences, but most of this work is a synthesis of past work done by many others. After all, this is the human story right? Drawing on current knowledge and taking steps to go into a specific direction is one way we are special as a species. I do not claim to have solved anything, or that my work is 100% correct in all areas, or I am an expert so you should take my word for it, but I do think my generative reframing of certain problems is valuable and has practical implications.
```


### Change 2 — Replacement

**Context:** …capture it cannot preserve the full richness of what it ⟦change⟧ . Knowledge (which I am defining here as information…

**HTML-only text:**

```text
represents
```

**Current-only text:**

```text
proceeds
```


### Change 3 — Current-only

**Context:** …as a book, a television show, a conversation ⟦change⟧ . But these are all expressions of something deeper.…

**Current-only text:**

```text
, or a diagram
```


## 1 The Structural Ontology

No visible-text differences after normalization.

## 1.1 The Compression Gradient

### Change 1 — Current-only

**Context:** …glimmering in the dark, unaltered. ― Maurice Maeterlinck ⟦change⟧ To externalize deeper layers of knowledge is to compress them…

**Current-only text:**

```text
note – make clear these are 3 forms of knowledge. compression gradient still valid as you can have varying levels of compression within each layer, but the boundaries are clear as to what belongs to what.
```


### Change 2 — Replacement

**Context:** …things we cannot put into words, only show. ⟦change⟧ knowledge, like writing, is only the top of…

**HTML-only text:**

```text
Legible
```

**Current-only text:**

```text
So the obvious layer of
```


### Change 3 — HTML-only

**Context:** …the obvious layer of knowledge, like writing, is ⟦change⟧ only the top of a stack that looks like this…

**HTML-only text:**

```text
therefore
```


### Change 4 — HTML-only

**Context:** …obvious layer of knowledge, like writing, is only ⟦change⟧ the top of a stack that looks like this:…

**HTML-only text:**

```text
a part of
```


### Change 5 — HTML-only

**Context:** …, like writing, is only the top of a ⟦change⟧ stack that looks like this: {diagram} At…

**HTML-only text:**

```text
three - layer
```


### Change 6 — Replacement

**Context:** …like writing, is only the top of a stack ⟦change⟧ At the bottom of the stack is the embodied layer…

**HTML-only text:**

```text
. The three layers are named the notational, representational, and embodied. These are meant to represent the different mediums human knowledge can “ grip onto ” and reside in. Understanding the mechanics and structure of these three layers is one key move to reach towards a theory of the human story.
```

**Current-only text:**

```text
that looks like this: {diagram}
```


### Change 7 — Replacement

**Context:** …the stack is the representational layer. In this layer ⟦change⟧ images, simulations, metaphors, concepts, and models…

**HTML-only text:**

```text
sit
```

**Current-only text:**

```text
sits
```


### Change 8 — Current-only

**Context:** …notational layer which holds external forms, such as writing ⟦change⟧ , equations, and labels, that can be stabilized…

**Current-only text:**

```text
, diagrams
```


### Change 9 — Replacement

**Context:** …we are compressing knowledge into more legible forms which naturally ⟦change⟧ out richness the bottom layers contain. For example,…

**HTML-only text:**

```text
leave
```

**Current-only text:**

```text
leaves
```


### Change 10 — Replacement

**Context:** …reconstructing a richer representation or embodied understanding from a compressed ⟦change⟧ expression. To move from the embodied to the notational…

**HTML-only text:**

```text
notational
```

**Current-only text:**

```text
notional
```


### Change 11 — Replacement

**Context:** …can traverse the stack while still just being one belief ⟦change⟧ it is simply expressed differently. Importantly, compression and…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 12 — Replacement

**Context:** …differently. Importantly, compression and decompression within the stack ⟦change⟧ bidirectional. An embodied state can give way to a…

**HTML-only text:**

```text
are
```

**Current-only text:**

```text
is
```


### Change 13 — Replacement

**Context:** …the embodied layer). Similarly, notation like an ⟦change⟧ sentence can change the modeled metaphor you currently hold and…

**HTML-only text:**

```text
English
```

**Current-only text:**

```text
english
```


### Change 14 — Current-only

**Context:** …of understanding, while language becomes a connecting interface. ⟦change⟧ …

**Current-only text:**

```text
note: add transition end to transition into the field section to explain compression and saying that the three layers are decompressing out of compression. The field is the thing in the middle. " what comes before? " transition
```


## 1.2 The Field

### Change 1 — Current-only

**Context:** … ⟦change⟧ The field of experience is the active, moment -…

**Current-only text:**

```text
note – clearly state that input is vast, eg sensory totality, decompression then occurs to organize experience, then this ties back into the comprerssion gradient by stating that we decompression the middle point into knowledge, which then is held up through memory. (This section deals a lot with predictive processing. If you are unfamiliar with the theory, it would held to know the basics)
```


### Change 2 — HTML-only

**Context:** …that model is instantiated in a moment of time. ⟦change⟧ The field’s properties, like variables and constraints, are…

**HTML-only text:**

```text
"
```


### Change 3 — Replacement

**Context:** …model is instantiated in a moment of time. The ⟦change⟧ properties, like variables and constraints, are the active…

**HTML-only text:**

```text
‘ field ’ labels the momentary instantiation, while the priors, dependency tree (expanded on later), and their weights are the substrate the field is instantiated from. Its
```

**Current-only text:**

```text
field’s
```


### Change 4 — Replacement

**Context:** …emerging from interactions with active priors, state and context ⟦change⟧ the field is embedded in: this framework assumes priors…

**HTML-only text:**

```text
. First off, it must be made clear what type of thing
```

**Current-only text:**

```text
A quick note on the substrate in which
```


### Change 5 — Replacement

**Context:** …quick note on the substrate in which the field is ⟦change⟧ in: this framework assumes priors are held in some…

**HTML-only text:**

```text
. I treat the field as the instantiated object of consciousness itself, the moment - to - moment configuration of current experience that could be formally modeled through a mathematical object (using qualia formalism as a borrowed assumption). In this representation, phenomenal properties (subjective experiences) correspond to the object’s structural properties. In the Symmetry Theory of Valence (STV), symmetry is one property of the structure of the mathematical representation of consciousness, corresponding to how pleasant an experience is. My claim is that the object whose symmetry the STV measures is The Field
```

**Current-only text:**

```text
embedded
```


### Change 6 — Current-only

**Context:** …on the substrate in which the field is embedded in ⟦change⟧ this framework assumes priors are held in some persistent substrate…

**Current-only text:**

```text
:
```


### Change 7 — Replacement

**Context:** …in which the field is embedded in: this framework ⟦change⟧ are held in some persistent substrate, but does not…

**HTML-only text:**

```text
, and it has many structural properties mapping to phenomenological experiences. I believe there
```

**Current-only text:**

```text
assumes priors
```


### Change 8 — Replacement

**Context:** …field is embedded in: this framework assumes priors are ⟦change⟧ in some persistent substrate, but does not claim to…

**HTML-only text:**

```text
two sets of properties at play here: those that are practically useful
```

**Current-only text:**

```text
held
```


### Change 9 — Replacement

**Context:** …embedded in: this framework assumes priors are held in ⟦change⟧ , but does not claim to know what exactly that…

**HTML-only text:**

```text
describing how the field functions as an inference process, such as constraints, variables and valence, and those that are formally modeled and found in mathematical structure such as symmetry, coherence, and integration. These formal properties are not extra objects
```

**Current-only text:**

```text
some persistent substrate
```


### Change 10 — Replacement

**Context:** …assumes priors are held in some persistent substrate, but ⟦change⟧ the nervous system, but work and research like Michael…

**HTML-only text:**

```text
structural markers you could in principle read off
```

**Current-only text:**

```text
does not claim to know what exactly that is or where it is located. One possibility is
```


### Change 11 — Replacement

**Context:** …or where it is located. One possibility is the ⟦change⟧ , but work and research like Michael Levin’s on bioelectric…

**HTML-only text:**

```text
instantiated mathematical configuration. I believe there exists many other formal properties to be found outside of symmetry that correspond to phenomenological experiences, such as coherence, how unified the configuration is, the degree of common organization among content
```

**Current-only text:**

```text
nervous system
```


### Change 12 — Replacement

**Context:** …located. One possibility is the nervous system, but ⟦change⟧ and research like Michael Levin’s on bioelectric pattern memory suggests…

**HTML-only text:**

```text
I’m going to opt out of explaining any technical reasoning for now. For this piece, it is simply important to know the field, even if you want to take it as just a metaphor, is the moment - to - moment instantiated object of consciousness,
```

**Current-only text:**

```text
work
```


### Change 13 — Replacement

**Context:** …One possibility is the nervous system, but work and ⟦change⟧ on bioelectric pattern memory suggests that biological information storage and…

**HTML-only text:**

```text
it has many practical properties, which are pointed to throughout this framework (instead of formal properties). To quickly speak
```

**Current-only text:**

```text
research like Michael Levin’s
```


### Change 14 — HTML-only

**Context:** …system, but work and research like Michael Levin’s on ⟦change⟧ bioelectric pattern memory suggests that biological information storage and regulation…

**HTML-only text:**

```text
the substrate the of the field, this framework takes a substrate - realist approach, assuming there is some sort of underlying structure giving way consciousness experience, thus the field. This simply means things like neuaral patterns,
```


### Change 15 — Current-only

**Context:** …work and research like Michael Levin’s on bioelectric pattern memory ⟦change⟧ , which would provide a more full picture than just…

**Current-only text:**

```text
suggests that biological information storage and regulation may be distributed across non neural cells and tissues in ways we do not yet fully understand
```


### Change 16 — Replacement

**Context:** …tissues in ways we do not yet fully understand, ⟦change⟧ the nervous system. Later it is proposed that deep…

**HTML-only text:**

```text
and patterns of synaptic connectivity all work together to give way to
```

**Current-only text:**

```text
which would provide a more full picture than just
```


### Change 17 — Replacement

**Context:** …which would provide a more full picture than just the ⟦change⟧ . Later it is proposed that deep priors are stabilized…

**HTML-only text:**

```text
human experience
```

**Current-only text:**

```text
nervous system
```


### Change 18 — Replacement

**Context:** …a more full picture than just the nervous system. ⟦change⟧ are stabilized in the body as contraction, but this…

**HTML-only text:**

```text
Whether these things
```

**Current-only text:**

```text
Later it is proposed that deep priors
```


### Change 19 — Replacement

**Context:** …system. Later it is proposed that deep priors are ⟦change⟧ , but this is just one partial explanation. The…

**HTML-only text:**

```text
required or not for consciousness is not something I attempt to answer
```

**Current-only text:**

```text
stabilized in the body as contraction
```


### Change 20 — Replacement

**Context:** …priors are stabilized in the body as contraction, but ⟦change⟧ is just one partial explanation. The main claim being…

**HTML-only text:**

```text
rather these things can influence phenomenological experience, therefore they should be recognized as the field’s physical substrate. This
```

**Current-only text:**

```text
this
```


### Change 21 — Replacement

**Context:** …stabilized in the body as contraction, but this is ⟦change⟧ . The main claim being made is that priors persist…

**HTML-only text:**

```text
expanded on in section 1. 5
```

**Current-only text:**

```text
just one partial explanation
```


### Change 22 — HTML-only

**Context:** …just one partial explanation. The main claim being made ⟦change⟧ is that priors persist and are reliably regenerated context -…

**HTML-only text:**

```text
here
```


### Change 23 — HTML-only

**Context:** …explanation. The main claim being made is that priors ⟦change⟧ persist and are reliably regenerated context - to - context…

**HTML-only text:**

```text
, which is what the field instantiates from,
```


### Change 24 — Replacement

**Context:** …a sliding window through which to experience things, whether ⟦change⟧ or explicitly. At any given moment, the field…

**HTML-only text:**

```text
implicitly
```

**Current-only text:**

```text
implicity
```


### Change 25 — Current-only

**Context:** …moment, the field uses a subset of properties, ⟦change⟧ which are downstream of deeper factors like active priors and…

**Current-only text:**

```text
like
```


### Change 26 — Replacement

**Context:** …distance. These are properties specifically in place to test ⟦change⟧ fit within the field. Variables are the parts that…

**HTML-only text:**

```text
input’s
```

**Current-only text:**

```text
input's
```


### Change 27 — Replacement

**Context:** …helping the field is precision weighting. This is essentially ⟦change⟧ the estimated reliability or confidence assigned to priors or sensory…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 28 — Replacement

**Context:** …evidence, which then determines their influence on updating. ⟦change⟧ It dictates how much attention and trust is given to…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 29 — Current-only

**Context:** …There are many specific directions precision can take such as ⟦change⟧ precision of sensory evidence, precision of preferences or targets…

**Current-only text:**

```text
:
```


### Change 30 — Replacement

**Context:** …also shift rapidly in the moment as input and context ⟦change⟧ . When a threat is detected, the system heavily…

**HTML-only text:**

```text
change
```

**Current-only text:**

```text
changes
```


### Change 31 — HTML-only

**Context:** …without needing to build an entirely new one from scratch ⟦change⟧ which is a result of precision reweighting, which includes…

**HTML-only text:**

```text
,
```


### Change 32 — HTML-only

**Context:** …includes sensory precision, the confidence assigned to sensory input ⟦change⟧ Another key job of precision weighting is that it can…

**HTML-only text:**

```text
.
```


### Change 33 — Replacement

**Context:** …” if the survival target is fulfilled, and the ⟦change⟧ targets still have the ability to influence things. The…

**HTML-only text:**

```text
leftover
```

**Current-only text:**

```text
left over
```


### Change 34 — Replacement

**Context:** …prior preferences determines which target currently dominates, while how ⟦change⟧ that target is held is target precision. This means…

**HTML-only text:**

```text
rigidly
```

**Current-only text:**

```text
rigid
```


### Change 35 — HTML-only

**Context:** …and our nervous system can pursue different targets at once ⟦change⟧ which is why target relevance matters. This is something…

**HTML-only text:**

```text
,
```


### Change 36 — Replacement

**Context:** …is why target relevance matters. This is something like ⟦change⟧ multiscale competency architecture. Target relevance here refers to the…

**HTML-only text:**

```text
Levin’s
```

**Current-only text:**

```text
Levin's
```


### Change 37 — Replacement

**Context:** …of this to say, typically this framework just uses ⟦change⟧ precision " as a whole, since all of these…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 38 — Replacement

**Context:** …to say, typically this framework just uses " precision ⟦change⟧ as a whole, since all of these point to…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 39 — Replacement

**Context:** …process of giving weight to factors within the field. ⟦change⟧ important to understand all the different ways our system weights…

**HTML-only text:**

```text
It’s
```

**Current-only text:**

```text
It's
```


### Change 40 — Replacement

**Context:** …weights and commits to certain interpretations and actions, but ⟦change⟧ best not to get lost in detail that is overbearing…

**HTML-only text:**

```text
it’s
```

**Current-only text:**

```text
it's
```


### Change 41 — Replacement

**Context:** …not to get lost in detail that is overbearing. ⟦change⟧ important to know is that precision is a core mechanic…

**HTML-only text:**

```text
What’s
```

**Current-only text:**

```text
What's
```


### Change 42 — Replacement

**Context:** …, and knowing how precision works can give us insight ⟦change⟧ how we live, act, and believe things.…

**HTML-only text:**

```text
into
```

**Current-only text:**

```text
to
```


### Change 43 — Replacement

**Context:** …tree is a structural position, so nothing about the ⟦change⟧ hierarchy is changed. Carhart - Harris and Friston write…

**HTML-only text:**

```text
literature’s
```

**Current-only text:**

```text
literature's
```


### Change 44 — Replacement

**Context:** …changed. Carhart - Harris and Friston write that psychedelics ⟦change⟧ relax the precision of high - level priors, "…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 45 — Replacement

**Context:** …" relax the precision of high - level priors, ⟦change⟧ and match the effect to " the highest or deepest…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 46 — Replacement

**Context:** …- level priors, " and match the effect to ⟦change⟧ the highest or deepest level of the brain's functional architecture…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 47 — Replacement

**Context:** …effect to " the highest or deepest level of the ⟦change⟧ functional architecture. " In other words, psychedelics affect…

**HTML-only text:**

```text
brain’s
```

**Current-only text:**

```text
brain's
```


### Change 48 — Replacement

**Context:** …highest or deepest level of the brain's functional architecture. ⟦change⟧ In other words, psychedelics affect deep priors that make…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 49 — Replacement

**Context:** …like “ resource for survival, ” each of which ⟦change⟧ on different dependencies. There are also deep bodily priors…

**HTML-only text:**

```text
rests
```

**Current-only text:**

```text
rest
```


### Change 50 — Replacement

**Context:** …functions and actions. Because they track survival directly, ⟦change⟧ them and can be difficult to override. These priors…

**HTML-only text:**

```text
th
```

**Current-only text:**

```text
the system gives them very high precision, so they carry strong organizational authority over depends on
```


### Change 51 — Replacement

**Context:** …at a biological level. Pushing this further, the ⟦change⟧ current energy budget influences what an input is and what…

**HTML-only text:**

```text
body’s
```

**Current-only text:**

```text
body's
```


### Change 52 — Replacement

**Context:** …when you feel depleted and gets thrown away when you ⟦change⟧ need its resources. The sensory signals are the same…

**HTML-only text:**

```text
don’t
```

**Current-only text:**

```text
don't
```


### Change 53 — Replacement

**Context:** …resources. The sensory signals are the same, but ⟦change⟧ interpretation influenced by energetic capacity changes which branches are committed…

**HTML-only text:**

```text
their
```

**Current-only text:**

```text
its
```


### Change 54 — HTML-only

**Context:** …The sensory signals are the same, but its interpretation ⟦change⟧ influenced by energetic capacity changes which branches are committed too…

**HTML-only text:**

```text
is
```


### Change 55 — HTML-only

**Context:** …the same, but its interpretation influenced by energetic capacity ⟦change⟧ changes which branches are committed too. Dependent on these…

**HTML-only text:**

```text
, which
```


### Change 56 — Replacement

**Context:** …interpretation influenced by energetic capacity changes which branches are committed ⟦change⟧ . Dependent on these priors is what researchers Micah Allen…

**HTML-only text:**

```text
to
```

**Current-only text:**

```text
too
```


### Change 57 — Replacement

**Context:** …on which everything else depends, so it cannot be ⟦change⟧ bypassed " easily. In a way, the default…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 58 — Replacement

**Context:** …everything else depends, so it cannot be " bypassed ⟦change⟧ easily. In a way, the default lives in…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 59 — Replacement

**Context:** …. If I am talking to a friend one moment ⟦change⟧ then switch to using my phone in the middle of…

**HTML-only text:**

```text
and
```

**Current-only text:**

```text
,
```


### Change 60 — Current-only

**Context:** …expected to move it toward its preferred state. But ⟦change⟧ this selection is not purely pragmatic. Epistemic value exists…

**Current-only text:**

```text
,
```


### Change 61 — HTML-only

**Context:** …, which feel worth doing, not intrinsically painful. ⟦change⟧ Through active inference, it minimizes prediction error, the…

**HTML-only text:**

```text
a simplified singular prediction tree
```


### Change 62 — Replacement

**Context:** …preferred outcomes (seconds to years, depending on the ⟦change⟧ horizon). Because the system cannot effectively explore every…

**HTML-only text:**

```text
target’s
```

**Current-only text:**

```text
target's
```


### Change 63 — Current-only

**Context:** …almost any branching or action possible at all. Branching ⟦change⟧ mostly happens further out, where multiple interpretations are in…

**Current-only text:**

```text
happens
```


### Change 64 — HTML-only

**Context:** …a massive threat to the system as a whole. ⟦change⟧ A short list of deep / foundational priors that make…

**HTML-only text:**

```text
a simplified dependency tree
```


### Change 65 — Current-only

**Context:** …of the dependency tree includes things like causality, time ⟦change⟧ , anthropomorphism, status and hierarchy, reputation, conformity…

**Current-only text:**

```text
, tribal belonging
```


### Change 66 — HTML-only

**Context:** …are all made up of even more foundational priors like ⟦change⟧ thing - ness and agency. All of these are…

**HTML-only text:**

```text
object - hood,
```


### Change 67 — HTML-only

**Context:** …foundational in the way the average human structures experience. ⟦change⟧ An internal representation, such as an image or metaphor…

**HTML-only text:**

```text
And it may be that all humans possess a shared set of deep priors like keeping the body a certain temperature or an innate need for safety, as to achieve the organism - level target of “ survival. ”
```


### Change 68 — Replacement

**Context:** …satisfy the survival - related properties of the field ( ⟦change⟧ generated unpleasant images of falling off the building causes you…

**HTML-only text:**

```text
i. e.,
```

**Current-only text:**

```text
ie
```


### Change 69 — Replacement

**Context:** …(ie generated unpleasant images of falling off the building ⟦change⟧ you to avoid such a thing); this is…

**HTML-only text:**

```text
cause
```

**Current-only text:**

```text
causes
```


### Change 70 — Replacement

**Context:** …representations do not only model present reality or intellectual knowledge ⟦change⟧ they can also preserve or simulate the properties of a…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 71 — HTML-only

**Context:** …still a model, something that cannot be experienced directly ⟦change⟧ so any mention of it is theoretical. However,…

**HTML-only text:**

```text
,
```


### Change 72 — Replacement

**Context:** …outside of normal structure can still occur. The first ⟦change⟧ the entropic brain hypothesis by Carhart - Harris & Friston…

**HTML-only text:**

```text
is
```

**Current-only text:**

```text
being
```


### Change 73 — HTML-only

**Context:** …can “ disconnect ” the relay from cortex. Information ⟦change⟧ theoretic estimates put human behavioral throughput at about “ 10…

**HTML-only text:**

```text
-
```


### Change 74 — Replacement

**Context:** …” against sensory inflow of “ no less than 1 ⟦change⟧ / s. ” And lastly, meditation progress seemingly…

**HTML-only text:**

```text
gigabit
```

**Current-only text:**

```text
gigabits
```


### Change 75 — Replacement

**Context:** …to the phenomenology of this reduction in compressing sensory totality ⟦change⟧ Laukkonen & Slagter points out that meditation acts as something…

**HTML-only text:**

```text
. As
```

**Current-only text:**

```text
as
```


### Change 76 — Replacement

**Context:** …this reduction in compressing sensory totality as Laukkonen & Slagter ⟦change⟧ out that meditation acts as something like predictive deconstruction:…

**HTML-only text:**

```text
point
```

**Current-only text:**

```text
points
```


### Change 77 — Replacement

**Context:** …in compressing sensory totality as Laukkonen & Slagter points out ⟦change⟧ meditation acts as something like predictive deconstruction: “ deconstructive…

**HTML-only text:**

```text
,
```

**Current-only text:**

```text
that
```


### Change 78 — HTML-only

**Context:** …. ” So even though sensory totality in itself as ⟦change⟧ whole cannot be directly pointed to, there is evidence…

**HTML-only text:**

```text
a
```


### Change 79 — Current-only

**Context:** …of attention should be addressed. Attention is a process ⟦change⟧ that directs precision across the field, which includes the…

**Current-only text:**

```text
of
```


### Change 80 — Replacement

**Context:** …is a process of that directs precision across the field ⟦change⟧ the dependency tree, whether done automatic or manually.…

**HTML-only text:**

```text
and
```

**Current-only text:**

```text
, which includes
```


### Change 81 — Replacement

**Context:** …directs precision across the field, which includes the dependency ⟦change⟧ , whether done automatic or manually. It is the…

**HTML-only text:**

```text
structure it is instantiated from
```

**Current-only text:**

```text
tree
```


### Change 82 — Replacement

**Context:** …field, which includes the dependency tree, whether done ⟦change⟧ or manually. It is the control mechanism that determines…

**HTML-only text:**

```text
“ automatically ”
```

**Current-only text:**

```text
automatic
```


### Change 83 — HTML-only

**Context:** …which includes the dependency tree, whether done automatic or ⟦change⟧ manually. It is the control mechanism that determines which…

**HTML-only text:**

```text
“
```


### Change 84 — HTML-only

**Context:** …the dependency tree, whether done automatic or manually. ⟦change⟧ It is the control mechanism that determines which properties are…

**HTML-only text:**

```text
”
```


### Change 85 — Replacement

**Context:** …parameter learning occurring across repetitions, and structure learning happening ⟦change⟧ offline. " These different roles matter because attention is…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 86 — Replacement

**Context:** …across repetitions, and structure learning happening " offline. ⟦change⟧ These different roles matter because attention is one of the…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 87 — Replacement

**Context:** …and most of the time we use it like it ⟦change⟧ matter. What it changes depends on its temporal variation…

**HTML-only text:**

```text
doesn’t
```

**Current-only text:**

```text
doesn't
```


### Change 88 — Replacement

**Context:** …. Insight alone is clearly not enough, since practices ⟦change⟧ all three levels of attention. It’s important to note…

**HTML-only text:**

```text
hit
```

**Current-only text:**

```text
hits
```


### Change 89 — Replacement

**Context:** …map, we can have an explicit “ lens ” ⟦change⟧ which we view experience through, on another level there…

**HTML-only text:**

```text
through
```

**Current-only text:**

```text
in
```


### Change 90 — Replacement

**Context:** …an explicit “ lens ” in which we view experience ⟦change⟧ on another level there is amodal perception which is the…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
through,
```


### Change 91 — HTML-only

**Context:** …present moment is therefore not instantiated in one fixed form ⟦change⟧ but rather, the system can move between diffuse embodied…

**HTML-only text:**

```text
,
```


### Change 92 — Current-only

**Context:** …is therefore not instantiated in one fixed form but rather ⟦change⟧ the system can move between diffuse embodied richness and highly…

**Current-only text:**

```text
,
```


## 1.3 Chunking, Gestalts, and Attractors

### Change 1 — HTML-only

**Context:** …or search cost. The mechanism of precision helps here ⟦change⟧ in which we can prune many branches of the dependency…

**HTML-only text:**

```text
,
```


### Change 2 — Replacement

**Context:** …search cost. The mechanism of precision helps here in ⟦change⟧ we can prune many branches of the dependency tree into…

**HTML-only text:**

```text
that
```

**Current-only text:**

```text
which
```


### Change 3 — HTML-only

**Context:** …a gestalt even though you have never seen it before ⟦change⟧ which requires existing structure, like priors. Similarly,…

**HTML-only text:**

```text
,
```


### Change 4 — Replacement

**Context:** …are chunked like shape and usage that interact together successfully ⟦change⟧ Repetition builds the priors that let a bundle of parts…

**HTML-only text:**

```text
.
```

**Current-only text:**

```text
,
```


### Change 5 — Current-only

**Context:** …their components when the current gestalt stops serving you. ⟦change⟧ Repetition of field configurations and their reinforcing loops produces attractors…

**Current-only text:**

```text
{rewrite all below}
```


### Change 6 — Replacement

**Context:** …one another, whether or not the system consciously prefers ⟦change⟧ . The dependency tree explains which structures support a given…

**HTML-only text:**

```text
them
```

**Current-only text:**

```text
it
```


### Change 7 — Replacement

**Context:** …is also not one singular prior. It is a ⟦change⟧ field configuration produced by interacting priors, precision weights,…

**HTML-only text:**

```text
region or basin of underlying structure that repeatedly reinstantiates a similar
```

**Current-only text:**

```text
recurrently stabilized
```


### Change 8 — Current-only

**Context:** …singular prior. It is a recurrently stabilized field configuration ⟦change⟧ . Attractors then have their own attractor basins which are…

**Current-only text:**

```text
produced by interacting priors, precision weights, bodily states, attention patterns, environmental cues, and policies
```


### Change 9 — HTML-only

**Context:** …each other, like bodily arousal and threat signals from ⟦change⟧ environment, they can pull the rest of the field…

**HTML-only text:**

```text
the
```


### Change 10 — Replacement

**Context:** …can show up: collapsing many possibilities into one is ⟦change⟧ cheap " in effort because many paths lead to one…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 11 — Replacement

**Context:** …up: collapsing many possibilities into one is " cheap ⟦change⟧ in effort because many paths lead to one collapse,…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 12 — Replacement

**Context:** …or information that was left out of the collapse is ⟦change⟧ expensive " because you must rebuild many out of one…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 13 — Replacement

**Context:** …that was left out of the collapse is " expensive ⟦change⟧ because you must rebuild many out of one. Another…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 14 — HTML-only

**Context:** …embodied layer to notation, since compression is less time ⟦change⟧ consuming and " cheaper. " Putting an embodied feeling…

**HTML-only text:**

```text
-
```


### Change 15 — Replacement

**Context:** …to notation, since compression is less time consuming and ⟦change⟧ cheaper. " Putting an embodied feeling into language is…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 16 — Replacement

**Context:** …since compression is less time consuming and " cheaper. ⟦change⟧ Putting an embodied feeling into language is quick; taking…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 17 — Replacement

**Context:** …an embodied feeling into language is quick; taking language ⟦change⟧ never seen before and moving it to the embodied layer…

**HTML-only text:**

```text
you’ve
```

**Current-only text:**

```text
you've
```


### Change 18 — Replacement

**Context:** …a viable path to the attractor exists under the field’s ⟦change⟧ available actions. Two attractors could have the same width…

**HTML-only text:**

```text
currently
```

**Current-only text:**

```text
current
```


### Change 19 — Replacement

**Context:** …configurations because changing it means changing what actions are available ⟦change⟧ the system to move from one state to another.…

**HTML-only text:**

```text
to
```

**Current-only text:**

```text
by
```


### Change 20 — Replacement

**Context:** …might mean you can act on the same thing. ⟦change⟧ where I need to do something versus actually doing the…

**HTML-only text:**

```text
Recognizing
```

**Current-only text:**

```text
Can I recognize
```


### Change 21 — Replacement

**Context:** …. Can I recognize where I need to do something ⟦change⟧ actually doing the thing are are two different sets of…

**HTML-only text:**

```text
and
```

**Current-only text:**

```text
versus
```


### Change 22 — Current-only

**Context:** …I need to do something versus actually doing the thing ⟦change⟧ are two different sets of possibilities. Reachability of a…

**Current-only text:**

```text
are
```


### Change 23 — HTML-only

**Context:** …is more than likely going to be much higher than ⟦change⟧ a state that allows you to actually act on that…

**HTML-only text:**

```text
that of
```


### Change 24 — Replacement

**Context:** …in an effective manner. Because our perception and actions ⟦change⟧ on the priors and chunks currently available, it is…

**HTML-only text:**

```text
depend
```

**Current-only text:**

```text
depends
```


### Change 25 — HTML-only

**Context:** …precision. More on the importance of this later. ⟦change⟧ …

**HTML-only text:**

```text
Lastly, a useful addition here is the idea of annealing. If a field configuration is a ball resting in some basin, then annealing is temporarily adding energy to the system, the configuration’s substrate, so the ball can climb out of a basin it is stuck in and attempt to find another resting spot through exploration. The system then “ cools ” into and integrates the new configuration. This is the same principle as annealing in metallurgy, where heating a metal lets its atoms rearrange into a more ordered, lower - energy structure as it cools. Michael Edward Johnson applies this to the mind as neural annealing. High - energy states, like coming from breathwork or psychedelics, can “ loosen ” the field, by messing with its substrate, for it to leave a strong attractor and resettle into a more symmetric, less internally - conflicted one — which something like the symmetry theory of valence would predict as being higher - valence. The added energy provides the slack and capacity needed to overcome an attractor's exit barrier (its hysteresis) and makes new states reachable.
```


## 1.4 Thoughts & Memories

### Change 1 — Replacement

**Context:** …entirely different things with no relations. What they name ⟦change⟧ gestalts, of the pin - point construction of things…

**HTML-only text:**

```text
are
```

**Current-only text:**

```text
is that of
```


### Change 2 — Current-only

**Context:** …relations. What they name is that of gestalts, ⟦change⟧ pin - point construction of things that have differing properties…

**Current-only text:**

```text
of the
```


### Change 3 — Replacement

**Context:** …is that of gestalts, of the pin - point ⟦change⟧ of things that have differing properties. It seems as…

**HTML-only text:**

```text
constructions
```

**Current-only text:**

```text
construction
```


### Change 4 — Replacement

**Context:** …things that have differing properties. It seems as though ⟦change⟧ thought " and " memory " are two interpretations of…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 5 — Replacement

**Context:** …have differing properties. It seems as though " thought ⟦change⟧ and " memory " are two interpretations of similar constructions…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 6 — Replacement

**Context:** …properties. It seems as though " thought " and ⟦change⟧ memory " are two interpretations of similar constructions, both…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 7 — Replacement

**Context:** …It seems as though " thought " and " memory ⟦change⟧ are two interpretations of similar constructions, both sharing mechanics…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 8 — Replacement

**Context:** …their final form and characteristics. As mentioned, emotions ⟦change⟧ similar in this aspect, but this will be touched…

**HTML-only text:**

```text
are
```

**Current-only text:**

```text
is
```


### Change 9 — Replacement

**Context:** …will be touched upon later. First we must answer ⟦change⟧ what is thought? This being a matter of definitional…

**HTML-only text:**

```text
:
```

**Current-only text:**

```text
,
```


### Change 10 — Replacement

**Context:** …object, that is decoupled from present input, and ⟦change⟧ the semantics of what is compressed. Taking the example…

**HTML-only text:**

```text
that carries
```

**Current-only text:**

```text
carrying
```


### Change 11 — Replacement

**Context:** …, and carrying the semantics of what is compressed. ⟦change⟧ the example of a thought about a blue dog,…

**HTML-only text:**

```text
In
```

**Current-only text:**

```text
Taking
```


### Change 12 — Replacement

**Context:** …the example of a thought about a blue dog, ⟦change⟧ thought is a discrete object (a thing),…

**HTML-only text:**

```text
the
```

**Current-only text:**

```text
this
```


### Change 13 — Replacement

**Context:** …a thing), decoupled from what is going on ⟦change⟧ that is, physical reality does not represent this thought…

**HTML-only text:**

```text
—
```

**Current-only text:**

```text
,
```


### Change 14 — Replacement

**Context:** …that is, physical reality does not represent this thought ⟦change⟧ and it carries the semantics of " blue " and…

**HTML-only text:**

```text
—
```

**Current-only text:**

```text
,
```


### Change 15 — Replacement

**Context:** …represent this thought, and it carries the semantics of ⟦change⟧ blue " and " dog " through language and associative…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 16 — Replacement

**Context:** …thought, and it carries the semantics of " blue ⟦change⟧ and " dog " through language and associative images.…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 17 — Replacement

**Context:** …and it carries the semantics of " blue " and ⟦change⟧ dog " through language and associative images. When "…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 18 — Replacement

**Context:** …carries the semantics of " blue " and " dog ⟦change⟧ through language and associative images. When " decoupled from…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 19 — Replacement

**Context:** …" dog " through language and associative images. When ⟦change⟧ decoupled from present input " is spoken of, it…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 20 — Replacement

**Context:** …and associative images. When " decoupled from present input ⟦change⟧ is spoken of, it is not meant to negate…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 21 — Current-only

**Context:** …properties and influence over the field. Thoughts are still ⟦change⟧ organizing gestalts that can take hold of the field which…

**Current-only text:**

```text
an
```


### Change 22 — Replacement

**Context:** …. However, the system itself does not interpret this ⟦change⟧ decoupling " as a hard boundary, as a binary…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 23 — Replacement

**Context:** …, the system itself does not interpret this " decoupling ⟦change⟧ as a hard boundary, as a binary. This…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 24 — Replacement

**Context:** …inference treats this gestalt as it would input from the ⟦change⟧ physical world. " It is important to mention the…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 25 — Replacement

**Context:** …as it would input from the " physical world. ⟦change⟧ It is important to mention the boundaries of this decoupling…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 26 — HTML-only

**Context:** …" physical world. " It is important to mention ⟦change⟧ the boundaries of this decoupling from physical reality can become…

**HTML-only text:**

```text
that
```


### Change 27 — Replacement

**Context:** …semantics about what is being compressed, the sense of ⟦change⟧ aboutness " of a thing comes from compression itself,…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 28 — Replacement

**Context:** …what is being compressed, the sense of " aboutness ⟦change⟧ of a thing comes from compression itself, since a…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 29 — Replacement

**Context:** …gestalt points to what is being compressed through organization. ⟦change⟧ Water bottle " is about bottles because it organizes bottle…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 30 — Replacement

**Context:** …what is being compressed through organization. " Water bottle ⟦change⟧ is about bottles because it organizes bottle relations and associative…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 31 — Replacement

**Context:** …extremely difficult to notice. Due to this, most ⟦change⟧ products " of cognitive processes do not become thoughts because…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 32 — Replacement

**Context:** …to notice. Due to this, most " products ⟦change⟧ of cognitive processes do not become thoughts because they are…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 33 — Replacement

**Context:** …not coming from an outside privileged point of view. ⟦change⟧ just that when we think we have noticed a thought…

**HTML-only text:**

```text
It’s
```

**Current-only text:**

```text
It's
```


### Change 34 — Replacement

**Context:** …of the thing itself. Self - awareness about thoughts ⟦change⟧ precisely because the inference move activates priors dealing with selfhood…

**HTML-only text:**

```text
exists
```

**Current-only text:**

```text
exist
```


### Change 35 — Replacement

**Context:** …the doer, is another gestalt, the same kind ⟦change⟧ the thoughts themselves. How could it be anything else…

**HTML-only text:**

```text
as
```

**Current-only text:**

```text
of
```


### Change 36 — Replacement

**Context:** …the moment you actively start participating in them. Hence ⟦change⟧ rumination and overthinking are thought - loops reinstating clusters of…

**HTML-only text:**

```text
,
```

**Current-only text:**

```text
why
```


### Change 37 — Replacement

**Context:** …the associated state. As Michael Levin puts it, ⟦change⟧ I think we are massive, self - persistent thought…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 38 — Replacement

**Context:** …, self - persistent thought patterns (in metabolic, ⟦change⟧ , behavioral, and other media). We spawn…

**HTML-only text:**

```text
anatomical
```

**Current-only text:**

```text
anatomial
```


### Change 39 — HTML-only

**Context:** …spawn off smaller ones, and host others (some ⟦change⟧ which have agendas and different degrees of competency).…

**HTML-only text:**

```text
of
```


### Change 40 — Replacement

**Context:** …which have agendas and different degrees of competency). ⟦change⟧ thoughts all the way down (and up).…

**HTML-only text:**

```text
It’s
```

**Current-only text:**

```text
It's
```


### Change 41 — Replacement

**Context:** …). The distinction between patterns in excitable media and ⟦change⟧ real things ", between data and machine, between…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 42 — Replacement

**Context:** …distinction between patterns in excitable media and " real things ⟦change⟧ , between data and machine, between thought and thinker…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 43 — Replacement

**Context:** …dichotomy - just names for parts of a spectrum. ⟦change⟧ In this way, Levin positions thoughts as a sort…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 44 — Replacement

**Context:** …be more animated than others, in the sense that ⟦change⟧ more responses from all three layers of the compression gradient…

**HTML-only text:**

```text
they draw
```

**Current-only text:**

```text
it draws
```


### Change 45 — Replacement

**Context:** …of thoughts as a marker that the thought is more ⟦change⟧ real " than if it did not have an embodied…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 46 — Replacement

**Context:** …as a marker that the thought is more " real ⟦change⟧ than if it did not have an embodied response,…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 47 — Replacement

**Context:** …image, which sits shallow and far out in the ⟦change⟧ branches, vs. the background ongoing sense of being…

**HTML-only text:**

```text
tree’s
```

**Current-only text:**

```text
tree's
```


### Change 48 — Replacement

**Context:** …sits shallow and far out in the tree's branches, ⟦change⟧ the background ongoing sense of being a person, a…

**HTML-only text:**

```text
contrasts with
```

**Current-only text:**

```text
vs.
```


### Change 49 — Replacement

**Context:** …properties of things. This room is shaped this way ⟦change⟧ this sound is like this, this sensation in my…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 50 — Replacement

**Context:** …is shaped this way, this sound is like this ⟦change⟧ this sensation in my foot feels like this. Reweighting…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 51 — Replacement

**Context:** …sensation in my foot feels like this. Reweighting these ⟦change⟧ fast " properties in every moment changes our thoughts by…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 52 — Replacement

**Context:** …my foot feels like this. Reweighting these " fast ⟦change⟧ properties in every moment changes our thoughts by effecting the…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 53 — Replacement

**Context:** …fast " properties in every moment changes our thoughts by ⟦change⟧ the field, not thought content directly. Then you…

**HTML-only text:**

```text
affecting
```

**Current-only text:**

```text
effecting
```


### Change 54 — Replacement

**Context:** …associative field configurations deep into the embodied layer, like ⟦change⟧ thinking the same things which makes those thoughts more available…

**HTML-only text:**

```text
repeatedly
```

**Current-only text:**

```text
repeatdly
```


### Change 55 — Replacement

**Context:** …occurring, like fantasy or thoughts of the future. ⟦change⟧ never seen a blue dog in real life, but…

**HTML-only text:**

```text
You’ve
```

**Current-only text:**

```text
You've
```


### Change 56 — Replacement

**Context:** …and context, not infinitely random. Equally as important ⟦change⟧ the implications this has about memory. Getting into memory…

**HTML-only text:**

```text
are
```

**Current-only text:**

```text
is
```


### Change 57 — Current-only

**Context:** …that change what the system can reproduce, such as ⟦change⟧ bodily actions to ride a bide. This reproduction or…

**Current-only text:**

```text
as
```


### Change 58 — Replacement

**Context:** …reproduce, such as as bodily actions to ride a ⟦change⟧ . This reproduction or recall is a dynamic act of…

**HTML-only text:**

```text
bike
```

**Current-only text:**

```text
bide
```


### Change 59 — HTML-only

**Context:** …or recall is a dynamic act of decompression, meaning ⟦change⟧ through generation, structure, which changes over time,…

**HTML-only text:**

```text
that
```


### Change 60 — Replacement

**Context:** …and language that is associated with a temporal marker of ⟦change⟧ this morning. " It can be said then that…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 61 — Replacement

**Context:** …associated with a temporal marker of " this morning. ⟦change⟧ It can be said then that the essence of a…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 62 — Replacement

**Context:** …Déjà vu, an interesting case here, carries the ⟦change⟧ familiar " bodily markers, that of embodied signals,…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 63 — Replacement

**Context:** …, an interesting case here, carries the " familiar ⟦change⟧ bodily markers, that of embodied signals, but it…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 64 — Replacement

**Context:** …case here, carries the " familiar " bodily markers ⟦change⟧ embodied signals, but it does not match the temporal…

**HTML-only text:**

```text
—
```

**Current-only text:**

```text
, that of
```


### Change 65 — Replacement

**Context:** …" familiar " bodily markers, that of embodied signals ⟦change⟧ but it does not match the temporal content of what…

**HTML-only text:**

```text
—
```

**Current-only text:**

```text
,
```


### Change 66 — Replacement

**Context:** …a memory. An objection that might come up is ⟦change⟧ is clearly persistent though, what is it? "…

**HTML-only text:**

```text
“ Something
```

**Current-only text:**

```text
" something
```


### Change 67 — Current-only

**Context:** …that might come up is " something is clearly persistent ⟦change⟧ , what is it? " What persists in what…

**Current-only text:**

```text
though
```


### Change 68 — Replacement

**Context:** …come up is " something is clearly persistent though, ⟦change⟧ is it? " What persists in what we call…

**HTML-only text:**

```text
though. What
```

**Current-only text:**

```text
what
```


### Change 69 — Replacement

**Context:** …something is clearly persistent though, what is it? ⟦change⟧ What persists in what we call memory is a disposition…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 70 — Replacement

**Context:** …What persists in what we call memory is a disposition ⟦change⟧ holds towards the regeneration of the configuration dealing with the…

**HTML-only text:**

```text
structure
```

**Current-only text:**

```text
the field
```


### Change 71 — HTML-only

**Context:** …a disposition the field holds towards the regeneration of the ⟦change⟧ configuration dealing with the memory, not content itself.…

**HTML-only text:**

```text
field
```


### Change 72 — Replacement

**Context:** …bodily actions in humans is that of adult moths preserving ⟦change⟧ memories " of their " caterpillar self " in order…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 73 — Replacement

**Context:** …in humans is that of adult moths preserving " memories ⟦change⟧ of their " caterpillar self " in order to retain…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 74 — Replacement

**Context:** …that of adult moths preserving " memories " of their ⟦change⟧ caterpillar self " in order to retain learned behavioral patterns…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 75 — Replacement

**Context:** …moths preserving " memories " of their " caterpillar self ⟦change⟧ in order to retain learned behavioral patterns after metamorphosis,…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 76 — Replacement

**Context:** …in which the physical substrate changes and something is still ⟦change⟧ remembered " and transferred over. To speak of memories…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 77 — Replacement

**Context:** …the physical substrate changes and something is still " remembered ⟦change⟧ and transferred over. To speak of memories is to…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 78 — Replacement

**Context:** …what? Here, this persistence is memory, meaning ⟦change⟧ landscapes, not specific states. Basins, field configurations…

**HTML-only text:**

```text
that
```

**Current-only text:**

```text
, the medium by which things travel is through
```


### Change 79 — HTML-only

**Context:** …which things travel is through landscapes, not specific states ⟦change⟧ . Basins, field configurations, are a consequence of…

**HTML-only text:**

```text
, are the medium through which things travel
```


### Change 80 — Replacement

**Context:** …instead of rubber bands, it uses reverberating strings that ⟦change⟧ to weight. This tower has levels which represents the…

**HTML-only text:**

```text
respond
```

**Current-only text:**

```text
responds
```


### Change 81 — Replacement

**Context:** …that responds to weight. This tower has levels which ⟦change⟧ the hierarchical model of priors that structure experience, in…

**HTML-only text:**

```text
represent
```

**Current-only text:**

```text
represents
```


### Change 82 — Replacement

**Context:** …the tower, first being processed through deep priors like ⟦change⟧ thing - ness "). Now, anytime a…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 83 — Replacement

**Context:** …being processed through deep priors like " thing - ness ⟦change⟧ ). Now, anytime a string is pulled back…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 84 — Replacement

**Context:** …produces certain outputs. These outputs are not stored anywhere ⟦change⟧ inside " of the strings themselves, rather, the…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 85 — Replacement

**Context:** …outputs. These outputs are not stored anywhere " inside ⟦change⟧ of the strings themselves, rather, the outputs are…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 86 — Replacement

**Context:** …not stored anywhere " inside " of the strings themselves ⟦change⟧ rather, the outputs are a result of the properties…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 87 — Replacement

**Context:** …as input, it is crucial to recognize that the ⟦change⟧ traversal through the system has the ability to change the…

**HTML-only text:**

```text
ball’s
```

**Current-only text:**

```text
ball's
```


### Change 88 — Replacement

**Context:** …well. The tower retunes itself as it is used ⟦change⟧ it not only is changed through external factors. One…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 89 — HTML-only

**Context:** …alters the impacted string, is the tower changing itself ⟦change⟧ for instance. To make clear what the role exactly…

**HTML-only text:**

```text
,
```


### Change 90 — Replacement

**Context:** …What is being stored then is better thought of as ⟦change⟧ data structures " and " algorithms " that can record…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 91 — Replacement

**Context:** …stored then is better thought of as " data structures ⟦change⟧ and " algorithms " that can record durable changes.…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 92 — Replacement

**Context:** …is better thought of as " data structures " and ⟦change⟧ algorithms " that can record durable changes. Synapses,…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 93 — Replacement

**Context:** …thought of as " data structures " and " algorithms ⟦change⟧ that can record durable changes. Synapses, connectivity,…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 94 — Replacement

**Context:** …- construction, as we are decompressing content generated from ⟦change⟧ past " structure which is compressed itself from the field…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 95 — Replacement

**Context:** …, as we are decompressing content generated from " past ⟦change⟧ structure which is compressed itself from the field, to…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 96 — HTML-only

**Context:** …, but knowledge that is a part of the three ⟦change⟧ layer stack: notational, representational, or embodied.…

**HTML-only text:**

```text
-
```


### Change 97 — Replacement

**Context:** …pulled from. The three layers describe how knowledge takes ⟦change⟧ when it is decompressed from memory as it is processed…

**HTML-only text:**

```text
form
```

**Current-only text:**

```text
from
```


### Change 98 — Current-only

**Context:** …the point of maximum compression that all input must pass ⟦change⟧ through. If we were to view memory through a…

**Current-only text:**

```text
pass
```


### Change 99 — Replacement

**Context:** …through. If we were to view memory through a ⟦change⟧ pulling from isolated storage " lens (a common,…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 100 — Replacement

**Context:** …to view memory through a " pulling from isolated storage ⟦change⟧ lens (a common, incorrect model of memory)…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 101 — Replacement

**Context:** …scale with memory itself as it grows, like more ⟦change⟧ storage slots " increasing. The view would also predict…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 102 — Replacement

**Context:** …itself as it grows, like more " storage slots ⟦change⟧ increasing. The view would also predict that new memories…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 103 — Replacement

**Context:** …increasing. The view would also predict that new memories ⟦change⟧ crowd out " old ones, making them proportionally less…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 104 — Replacement

**Context:** …view would also predict that new memories " crowd out ⟦change⟧ old ones, making them proportionally less in impact than…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 105 — Replacement

**Context:** …blue dog: a stored lookup table cannot produce that ⟦change⟧ rules and structure can, constrained by the field.…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 106 — Current-only

**Context:** …running through current structure rather than storing the memory as ⟦change⟧ it originally occurred actually serves a crucial function: fidelity…

**Current-only text:**

```text
how
```


### Change 107 — Replacement

**Context:** …serves a crucial function: fidelity is not the important ⟦change⟧ here, salience is. Unpacking knowledge through recall is…

**HTML-only text:**

```text
measurement
```

**Current-only text:**

```text
measurment
```


### Change 108 — Replacement

**Context:** …crucial function: fidelity is not the important measurment here ⟦change⟧ salience is. Unpacking knowledge through recall is an act…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 109 — Replacement

**Context:** …act of saving biological resources, not an act of ⟦change⟧ . Metabolic limits force you to leave out details of…

**HTML-only text:**

```text
degradation
```

**Current-only text:**

```text
degredation
```


### Change 110 — Replacement

**Context:** …details of memory, since it would be impossible for ⟦change⟧ if we had to maintain and recall the richness of…

**HTML-only text:**

```text
survival
```

**Current-only text:**

```text
suvival
```


### Change 111 — Current-only

**Context:** …moment. The way it picks out what matters is ⟦change⟧ through the field, meaning perception bends recall. Bending…

**Current-only text:**

```text
done so
```


### Change 112 — HTML-only

**Context:** …the traditional sense, but rather it is meant to ⟦change⟧ distorted for salience. The case of the caterpillar's memory…

**HTML-only text:**

```text
be
```


### Change 113 — Replacement

**Context:** …meant to distorted for salience. The case of the ⟦change⟧ memory being preserved within the moth makes this clear:…

**HTML-only text:**

```text
caterpillar’s
```

**Current-only text:**

```text
caterpillar's
```


### Change 114 — Replacement

**Context:** …within the moth makes this clear: most of the ⟦change⟧ detailed memories are useless for the moth, since the…

**HTML-only text:**

```text
caterpillar’s
```

**Current-only text:**

```text
catepillar's
```


### Change 115 — Replacement

**Context:** …say 3 years, that thing is no longer salient ⟦change⟧ therefore it is marked as okay to be " removed…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 116 — Replacement

**Context:** …salient, therefore it is marked as okay to be ⟦change⟧ removed " by reducing reachability and slowly degrading underlying structure…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 117 — Replacement

**Context:** …therefore it is marked as okay to be " removed ⟦change⟧ by reducing reachability and slowly degrading underlying structure. And…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 118 — Replacement

**Context:** …structure moves towards, such as a memory becoming more ⟦change⟧ happy " due to the system re - interpreting things…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 119 — Replacement

**Context:** …towards, such as a memory becoming more " happy ⟦change⟧ due to the system re - interpreting things differently from…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 120 — Replacement

**Context:** …Storage here explains continuity, the sense that something is ⟦change⟧ across time, while recall and active memory explain why…

**HTML-only text:**

```text
persistent
```

**Current-only text:**

```text
persistant
```


### Change 121 — Replacement

**Context:** …. This is what Michael Levin means when he says ⟦change⟧ you don't have access to the past. What you…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 122 — Replacement

**Context:** …is what Michael Levin means when he says " you ⟦change⟧ have access to the past. What you have access…

**HTML-only text:**

```text
don’t
```

**Current-only text:**

```text
don't
```


### Change 123 — Replacement

**Context:** …, your brain and body... and now ⟦change⟧ up to you to reinterpret it. And you might…

**HTML-only text:**

```text
it’s
```

**Current-only text:**

```text
it's
```


### Change 124 — Replacement

**Context:** …same way, but you might not. And you ⟦change⟧ have to — you don't have any allegiance to that…

**HTML-only text:**

```text
don’t
```

**Current-only text:**

```text
don't
```


### Change 125 — Replacement

**Context:** …might not. And you don't have to — you ⟦change⟧ have any allegiance to that. " You might reinterpret…

**HTML-only text:**

```text
don’t
```

**Current-only text:**

```text
don't
```


### Change 126 — Replacement

**Context:** …to — you don't have any allegiance to that. ⟦change⟧ You might reinterpret the traces differently due to the structure…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 127 — Replacement

**Context:** …reach, given the input and cue of the notation ⟦change⟧ 3x6. " It reinstates a configuration, the structure…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 128 — Replacement

**Context:** …the input and cue of the notation " 3x6. ⟦change⟧ It reinstates a configuration, the structure we use to…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 129 — Current-only

**Context:** …met easily. If storage was static and entered into ⟦change⟧ lookup tables as records, reproducing " 3x6 " would…

**Current-only text:**

```text
a
```


### Change 130 — Replacement

**Context:** …and entered into a lookup tables as records, reproducing ⟦change⟧ 3x6 " would be just as easy as " 7x8…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 131 — Replacement

**Context:** …into a lookup tables as records, reproducing " 3x6 ⟦change⟧ would be just as easy as " 7x8, "…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 132 — Replacement

**Context:** …reproducing " 3x6 " would be just as easy as ⟦change⟧ 7x8, " which is not the case. This…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 133 — Replacement

**Context:** …" would be just as easy as " 7x8, ⟦change⟧ which is not the case. This also predicts errors…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 134 — HTML-only

**Context:** …it would be an answer like 24, rather than ⟦change⟧ say, 156. The same thing shows up when…

**HTML-only text:**

```text
,
```


### Change 135 — Replacement

**Context:** …do not mistake the memory for something fantastical that clearly ⟦change⟧ not represent real - life constraints; the mistakes we…

**HTML-only text:**

```text
does
```

**Current-only text:**

```text
do
```


### Change 136 — Replacement

**Context:** …cluster around the same structures. Mistakes in recall are ⟦change⟧ in related regions of strings in the spider tower,…

**HTML-only text:**

```text
made
```

**Current-only text:**

```text
missed
```


### Change 137 — Current-only

**Context:** …spider tower, branches of the dependency tree, not ⟦change⟧ in trying to access static, isolated storage. Relatedly…

**Current-only text:**

```text
a mistake
```


### Change 138 — Replacement

**Context:** …static storage system cannot reproduce this mechanism. Just as ⟦change⟧ any sufficiently advanced technology is indistinguishable from magic, "…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 139 — Replacement

**Context:** …" any sufficiently advanced technology is indistinguishable from magic, ⟦change⟧ any sufficiently advanced generative process of gestalts is indistinguishable from…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 140 — Replacement

**Context:** …, while still being difficult to reach. When you ⟦change⟧ forget " a memory, or a cluster of inter…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 141 — Replacement

**Context:** …still being difficult to reach. When you " forget ⟦change⟧ a memory, or a cluster of inter - connected…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 142 — Replacement

**Context:** …a language, you are not forgetting its specific qualities ⟦change⟧ those are still " in you " inside generative structure…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 143 — Replacement

**Context:** …are not forgetting its specific qualities, those are still ⟦change⟧ in you " inside generative structure. What is lost…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 144 — Replacement

**Context:** …its specific qualities, those are still " in you ⟦change⟧ inside generative structure. What is lost is your ability…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 145 — Replacement

**Context:** …back and reach that structure; you cannot get to ⟦change⟧ there " from where you currently are. This is…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 146 — Replacement

**Context:** …reach that structure; you cannot get to " there ⟦change⟧ from where you currently are. This is preceisly why…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 147 — Replacement

**Context:** …there " from where you currently are. This is ⟦change⟧ why spaced repeition is effective: reaching something when it…

**HTML-only text:**

```text
precisely
```

**Current-only text:**

```text
preceisly
```


### Change 148 — Replacement

**Context:** …where you currently are. This is preceisly why spaced ⟦change⟧ is effective: reaching something when it is hard changes…

**HTML-only text:**

```text
repetition
```

**Current-only text:**

```text
repeition
```


### Change 149 — Replacement

**Context:** …the memory. Reaching the memory when it is easy ⟦change⟧ move the system due to low variability; the system…

**HTML-only text:**

```text
doesn’t
```

**Current-only text:**

```text
doesn't
```


### Change 150 — Replacement

**Context:** …. Difficulty of recall can be due to low reachability ⟦change⟧ means retuning of the structure is occuring, which is…

**HTML-only text:**

```text
which
```

**Current-only text:**

```text
when
```


### Change 151 — Replacement

**Context:** …to low reachability when means retuning of the structure is ⟦change⟧ , which is not a bad thing. Hence why…

**HTML-only text:**

```text
occurring
```

**Current-only text:**

```text
occuring
```


### Change 152 — Replacement

**Context:** …is not kept in line. All of this works ⟦change⟧ because memory is not just pulling from isolated storage;…

**HTML-only text:**

```text
precisely
```

**Current-only text:**

```text
precicely
```


### Change 153 — Replacement

**Context:** …our view of memory cannot be separated from culture and ⟦change⟧ . This has the ability to change the structure of…

**HTML-only text:**

```text
environment
```

**Current-only text:**

```text
enviornment
```


### Change 154 — Replacement

**Context:** …the ability to change the structure of memory itself, ⟦change⟧ changing what we attend to and how we organize information…

**HTML-only text:**

```text
by
```

**Current-only text:**

```text
but
```


### Change 155 — HTML-only

**Context:** …. The practice of writing about memory leaves out details ⟦change⟧ for instance, as laid out in the compression gradient…

**HTML-only text:**

```text
,
```


### Change 156 — Replacement

**Context:** …like photography, a practice that can be seen as ⟦change⟧ freezing " a memory in time through image, influence…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 157 — Replacement

**Context:** …, a practice that can be seen as " freezing ⟦change⟧ a memory in time through image, influence how we…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 158 — Replacement

**Context:** …" freezing " a memory in time through image, ⟦change⟧ how we envision things. These different practices highlight certain…

**HTML-only text:**

```text
influences
```

**Current-only text:**

```text
influence
```


### Change 159 — Replacement

**Context:** …, but it has the ability to reshape organization and ⟦change⟧ of what is remembered, which then feeds back into…

**HTML-only text:**

```text
interpretation
```

**Current-only text:**

```text
intepretation
```


### Change 160 — Current-only

**Context:** …compression gradient. What is meant by this is that ⟦change⟧ often times the way we evaluate memory is through a…

**Current-only text:**

```text
,
```


### Change 161 — HTML-only

**Context:** …to our bank of memory. As laid out above ⟦change⟧ this is not the case, and instead what is…

**HTML-only text:**

```text
,
```


### Change 162 — Replacement

**Context:** …means to memorize something, because memorizing something means an ⟦change⟧ across all three layers of the compression gradient. The…

**HTML-only text:**

```text
effect
```

**Current-only text:**

```text
affect
```


### Change 163 — Replacement

**Context:** …instance, in the embodied layer, patterns of vocal ⟦change⟧ movements are now produced from the structure, an internal…

**HTML-only text:**

```text
cord
```

**Current-only text:**

```text
chord
```


### Change 164 — Replacement

**Context:** …sit in the same layer as it comes from. ⟦change⟧ 3x5 " is perceived as notation, which then reverabtes…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 165 — Replacement

**Context:** …the same layer as it comes from. " 3x5 ⟦change⟧ is perceived as notation, which then reverabtes across the…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 166 — Replacement

**Context:** …" 3x5 " is perceived as notation, which then ⟦change⟧ across the layers and the field, but part of…

**HTML-only text:**

```text
reverberates
```

**Current-only text:**

```text
reverabtes
```


### Change 167 — Replacement

**Context:** …the layers and the field, but part of what ⟦change⟧ tells " you the answer is 15 comes from the…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 168 — Replacement

**Context:** …and the field, but part of what " tells ⟦change⟧ you the answer is 15 comes from the embodied layer…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 169 — Replacement

**Context:** …layer, like the feeling of counting itself or vocal ⟦change⟧ movements. This is all a result of structure and…

**HTML-only text:**

```text
cord
```

**Current-only text:**

```text
chord
```


### Change 170 — Replacement

**Context:** …. This is all a result of structure and its ⟦change⟧ effects, not isolated nodes. Remembering that structure can…

**HTML-only text:**

```text
reverberating
```

**Current-only text:**

```text
reverabting
```


### Change 171 — Replacement

**Context:** …structure and its reverabting effects, not isolated nodes. ⟦change⟧ that structure can be broad, meaning " 3x5 "…

**HTML-only text:**

```text
Given
```

**Current-only text:**

```text
Remembering
```


### Change 172 — Replacement

**Context:** …nodes. Remembering that structure can be broad, meaning ⟦change⟧ 3x5 " and " 3x6 " share fundamental structure but…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 173 — Replacement

**Context:** …Remembering that structure can be broad, meaning " 3x5 ⟦change⟧ and " 3x6 " share fundamental structure but differ in…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 174 — Replacement

**Context:** …structure can be broad, meaning " 3x5 " and ⟦change⟧ 3x6 " share fundamental structure but differ in their wide…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 175 — Replacement

**Context:** …be broad, meaning " 3x5 " and " 3x6 ⟦change⟧ share fundamental structure but differ in their wide branches of…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 176 — Replacement

**Context:** …is put in to remember something. For instance, ⟦change⟧ 3x5 " has multiplication structure that can be applied to…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 177 — Replacement

**Context:** …in to remember something. For instance, " 3x5 ⟦change⟧ has multiplication structure that can be applied to a large…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 178 — Replacement

**Context:** …be applied to a large field of cues, while ⟦change⟧ name does not neccrasily have the same structure. When…

**HTML-only text:**

```text
someone’s
```

**Current-only text:**

```text
someone's
```


### Change 179 — Replacement

**Context:** …large field of cues, while someone's name does not ⟦change⟧ have the same structure. When trying to remember a…

**HTML-only text:**

```text
necessarily
```

**Current-only text:**

```text
neccrasily
```


### Change 180 — Replacement

**Context:** …have the same structure. When trying to remember a ⟦change⟧ name, there is little structure - sensitive rules that…

**HTML-only text:**

```text
person’s
```

**Current-only text:**

```text
person's
```


### Change 181 — Replacement

**Context:** …. When trying to remember a person's name, there ⟦change⟧ structure - sensitive rules that collapse options. So someone's…

**HTML-only text:**

```text
are few
```

**Current-only text:**

```text
is little
```


### Change 182 — Replacement

**Context:** …little structure - sensitive rules that collapse options. So ⟦change⟧ face could be " Bob, " " Kevin,…

**HTML-only text:**

```text
someone’s
```

**Current-only text:**

```text
someone's
```


### Change 183 — Replacement

**Context:** …rules that collapse options. So someone's face could be ⟦change⟧ Bob, " " Kevin, " or " John…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 184 — Replacement

**Context:** …options. So someone's face could be " Bob, ⟦change⟧ Kevin, " or " John " all the same…

**HTML-only text:**

```text
” “
```

**Current-only text:**

```text
" "
```


### Change 185 — Replacement

**Context:** …face could be " Bob, " " Kevin, ⟦change⟧ or " John " all the same, while "…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 186 — Replacement

**Context:** …be " Bob, " " Kevin, " or ⟦change⟧ John " all the same, while " 3x5 "…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 187 — Replacement

**Context:** …Bob, " " Kevin, " or " John ⟦change⟧ all the same, while " 3x5 " immeditely collapases…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 188 — Replacement

**Context:** …" or " John " all the same, while ⟦change⟧ 3x5 " immeditely collapases around hard - struck rules.…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 189 — Replacement

**Context:** …" John " all the same, while " 3x5 ⟦change⟧ around hard - struck rules. " 3x5 " cannot…

**HTML-only text:**

```text
” immediately collapses
```

**Current-only text:**

```text
" immeditely collapases
```


### Change 190 — Replacement

**Context:** …3x5 " immeditely collapases around hard - struck rules. ⟦change⟧ 3x5 " cannot be anything, which is why you…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 191 — Replacement

**Context:** …immeditely collapases around hard - struck rules. " 3x5 ⟦change⟧ cannot be anything, which is why you don't get…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 192 — Replacement

**Context:** …3x5 " cannot be anything, which is why you ⟦change⟧ get answers like " 200, " rather you might…

**HTML-only text:**

```text
don’t
```

**Current-only text:**

```text
don't
```


### Change 193 — Replacement

**Context:** …anything, which is why you don't get answers like ⟦change⟧ 200, " rather you might get an answer like…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 194 — Replacement

**Context:** …which is why you don't get answers like " 200 ⟦change⟧ rather you might get an answer like " 20.…

**HTML-only text:**

```text
”;
```

**Current-only text:**

```text
, "
```


### Change 195 — HTML-only

**Context:** …you don't get answers like " 200, " rather ⟦change⟧ you might get an answer like " 20. "…

**HTML-only text:**

```text
,
```


### Change 196 — Replacement

**Context:** …200, " rather you might get an answer like ⟦change⟧ 20. " Nothing about a face or body constrains…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 197 — Replacement

**Context:** …rather you might get an answer like " 20. ⟦change⟧ Nothing about a face or body constrains the product because…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 198 — Replacement

**Context:** …to be applied. There is no branch in the ⟦change⟧ tree routing face features to name sounds, but there…

**HTML-only text:**

```text
dependency
```

**Current-only text:**

```text
dependcy
```


### Change 199 — Replacement

**Context:** …there are branches routing numbers to how they interact with ⟦change⟧ rules. This is why arbitrary pairs with no underlying…

**HTML-only text:**

```text
mathematical
```

**Current-only text:**

```text
mathemtical
```


### Change 200 — Replacement

**Context:** …This is why arbitrary pairs with no underlying shared structure ⟦change⟧ more repeition to be more asily accessed. And it…

**HTML-only text:**

```text
need
```

**Current-only text:**

```text
needs
```


### Change 201 — Replacement

**Context:** …why arbitrary pairs with no underlying shared structure needs more ⟦change⟧ to be more asily accessed. And it is why…

**HTML-only text:**

```text
repetition
```

**Current-only text:**

```text
repeition
```


### Change 202 — Replacement

**Context:** …no underlying shared structure needs more repeition to be more ⟦change⟧ accessed. And it is why mnemonics work: they…

**HTML-only text:**

```text
easily
```

**Current-only text:**

```text
asily
```


### Change 203 — Replacement

**Context:** …the previous section. What this means is that memorizing ⟦change⟧ 3x3 " and " 3x4 " is the same move…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 204 — Replacement

**Context:** …section. What this means is that memorizing " 3x3 ⟦change⟧ and " 3x4 " is the same move as de…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 205 — Replacement

**Context:** …What this means is that memorizing " 3x3 " and ⟦change⟧ 3x4 " is the same move as de - chunking…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 206 — Replacement

**Context:** …means is that memorizing " 3x3 " and " 3x4 ⟦change⟧ is the same move as de - chunking a sensation…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 207 — Replacement

**Context:** …structure. The perception of recall, like the evaluation ⟦change⟧ a memory has been accessed successfully, is dependent on…

**HTML-only text:**

```text
of whether
```

**Current-only text:**

```text
if
```


### Change 208 — Replacement

**Context:** …has been accessed successfully, is dependent on the target ⟦change⟧ using to evaluate whether recall has been successful. As…

**HTML-only text:**

```text
you’re
```

**Current-only text:**

```text
you're
```


### Change 209 — Replacement

**Context:** …, when judging our ability to memorize a speech, ⟦change⟧ is dependent on how much of the speech we should…

**HTML-only text:**

```text
our judgment
```

**Current-only text:**

```text
it
```


### Change 210 — Replacement

**Context:** …a target of memorizing things which is dependent on the ⟦change⟧ targets themselves. If you were to get a multiple…

**HTML-only text:**

```text
instructor’s
```

**Current-only text:**

```text
instructor's
```


### Change 211 — HTML-only

**Context:** …targets themselves. If you were to get a multiple ⟦change⟧ choice question wrong, you would get a binary wrong…

**HTML-only text:**

```text
-
```


### Change 212 — Replacement

**Context:** …memorize things is not always a binary yes or no ⟦change⟧ it is dependent on the framing effects you place upon…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 213 — Replacement

**Context:** …time that produces certain embodied outputs, like a fast ⟦change⟧ , then I recall the memory a year later and…

**HTML-only text:**

```text
heartbeat
```

**Current-only text:**

```text
heart beat
```


### Change 214 — HTML-only

**Context:** …certain embodied outputs, like a fast heart beat, ⟦change⟧ then I recall the memory a year later and it…

**HTML-only text:**

```text
and
```


### Change 215 — Replacement

**Context:** …certain people, but hold the same memory differently when ⟦change⟧ alone, is that the " same " memory?…

**HTML-only text:**

```text
I’m
```

**Current-only text:**

```text
I'm
```


### Change 216 — Replacement

**Context:** …same memory differently when I'm alone, is that the ⟦change⟧ same " memory? Most people would probably answer,…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 217 — Replacement

**Context:** …differently when I'm alone, is that the " same ⟦change⟧ memory? Most people would probably answer, yes that's…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 218 — Replacement

**Context:** …same " memory? Most people would probably answer, ⟦change⟧ the same memory, but why is this? What…

**HTML-only text:**

```text
“ Yes, that’s
```

**Current-only text:**

```text
yes that's
```


### Change 219 — HTML-only

**Context:** …would probably answer, yes that's the same memory, ⟦change⟧ but why is this? What is being preserved?…

**HTML-only text:**

```text
”
```


### Change 220 — Replacement

**Context:** …the structure that produced the memory has to be changed ⟦change⟧ the output is slightly different. Is it that the…

**HTML-only text:**

```text
since
```

**Current-only text:**

```text
sense
```


### Change 221 — Replacement

**Context:** …way, memories and thoughts can be seen as being ⟦change⟧ alive ", in the sense that they respond to…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 222 — Replacement

**Context:** …memories and thoughts can be seen as being " alive ⟦change⟧ , in the sense that they respond to structure,…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 223 — HTML-only

**Context:** …interacting things like environment and bodily state, and error ⟦change⟧ correct by responding to targets we hold. Because of…

**HTML-only text:**

```text
-
```


### Change 224 — Replacement

**Context:** …holding, nor can it occur in such a way ⟦change⟧ we can " objectively " see it in its totality…

**HTML-only text:**

```text
that
```

**Current-only text:**

```text
to which
```


### Change 225 — Replacement

**Context:** …it occur in such a way to which we can ⟦change⟧ objectively " see it in its totality. Because we…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 226 — Replacement

**Context:** …in such a way to which we can " objectively ⟦change⟧ see it in its totality. Because we can't compare…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 227 — Replacement

**Context:** …objectively " see it in its totality. Because we ⟦change⟧ compare a memory to its original causal event, and…

**HTML-only text:**

```text
can’t
```

**Current-only text:**

```text
can't
```


### Change 228 — Replacement

**Context:** …because memories error - correct through current targets, evaluating ⟦change⟧ sameness " of a memory across time is complicated.…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 229 — Replacement

**Context:** …error - correct through current targets, evaluating " sameness ⟦change⟧ of a memory across time is complicated. Let's say…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 230 — Replacement

**Context:** …sameness " of a memory across time is complicated. ⟦change⟧ say you form a memory at 18 years old,…

**HTML-only text:**

```text
Let’s
```

**Current-only text:**

```text
Let's
```


### Change 231 — Replacement

**Context:** …a certain bodily response. Next, you recall the ⟦change⟧ same " memory at 20, and the bodily response…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 232 — Replacement

**Context:** …bodily response. Next, you recall the " same ⟦change⟧ memory at 20, and the bodily response is different…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 233 — Replacement

**Context:** …using when recalling. If the target is something like ⟦change⟧ did this happen to me " then yes the memory…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 234 — Replacement

**Context:** …target is something like " did this happen to me ⟦change⟧ then yes the memory would be the same. If…

**HTML-only text:**

```text
, ”
```

**Current-only text:**

```text
"
```


### Change 235 — HTML-only

**Context:** …like " did this happen to me " then yes ⟦change⟧ the memory would be the same. If the target…

**HTML-only text:**

```text
,
```


### Change 236 — Replacement

**Context:** …memory would be the same. If the target is ⟦change⟧ does this memory produce suffering, " then the answer…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 237 — Replacement

**Context:** …the target is " does this memory produce suffering, ⟦change⟧ then the answer would be no, this is not…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 238 — Replacement

**Context:** …produce suffering, " then the answer would be no ⟦change⟧ this is not the same memory. So in a…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


## 1.5 Bow Tie Architecture

### Change 1 — Replacement

**Context:** …fields of science. This model or architecture is in ⟦change⟧ shape of a bow tie, with one side starting…

**HTML-only text:**

```text
the
```

**Current-only text:**

```text
a
```


### Change 2 — Replacement

**Context:** …one side starting wide, converging into a middle narrow ⟦change⟧ , then expanding back to a wide funnel. This…

**HTML-only text:**

```text
point
```

**Current-only text:**

```text
points
```


### Change 3 — Replacement

**Context:** …introduced by Marie Csete and John Doyle in their paper ⟦change⟧ Bow ties, metabolism and disease '. This marks…

**HTML-only text:**

```text
‘
```

**Current-only text:**

```text
'
```


### Change 4 — Replacement

**Context:** …in their paper ' Bow ties, metabolism and disease ⟦change⟧ . This marks the core biological bow tie formulation,…

**HTML-only text:**

```text
’
```

**Current-only text:**

```text
'
```


### Change 5 — Replacement

**Context:** …core of molecules and then are spit back out into ⟦change⟧ building blocks " and macromolecules. Expanding on this,…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 6 — Replacement

**Context:** …and then are spit back out into " building blocks ⟦change⟧ and macromolecules. Expanding on this, Hiroaki Kitano in…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 7 — Replacement

**Context:** …. Expanding on this, Hiroaki Kitano in his paper ⟦change⟧ Biological robustness ' states that " there are specific architectural…

**HTML-only text:**

```text
‘
```

**Current-only text:**

```text
'
```


### Change 8 — Replacement

**Context:** …this, Hiroaki Kitano in his paper ' Biological robustness ⟦change⟧ states that " there are specific architectural requirements for robust…

**HTML-only text:**

```text
’
```

**Current-only text:**

```text
'
```


### Change 9 — Replacement

**Context:** …Kitano in his paper ' Biological robustness ' states that ⟦change⟧ there are specific architectural requirements for robust and evolvable systems…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 10 — Replacement

**Context:** …architecture. These architectural requirements are the basis for the ⟦change⟧ robustness against environmental perturbations, but congruent with genetic perturbations…

**HTML-only text:**

```text
system’s
```

**Current-only text:**

```text
system's
```


### Change 11 — Replacement

**Context:** …perturbations; they facilitate generation of a flexible phenotype. ⟦change⟧ Essentially, robust biological systems stay stable by funneling many…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 12 — Replacement

**Context:** …many papers already cited in this framework, such as ⟦change⟧ Constructive episodic retrieval processes underlying memory distortion contribute to creative…

**HTML-only text:**

```text
‘
```

**Current-only text:**

```text
'
```


### Change 13 — Replacement

**Context:** …memory distortion contribute to creative thinking and everyday problem solving ⟦change⟧ and ' The computational nature of memory modification '.…

**HTML-only text:**

```text
‘
```

**Current-only text:**

```text
'
```


### Change 14 — Replacement

**Context:** …contribute to creative thinking and everyday problem solving ' and ⟦change⟧ The computational nature of memory modification '. He draws…

**HTML-only text:**

```text
‘
```

**Current-only text:**

```text
'
```


### Change 15 — Replacement

**Context:** …solving ' and ' The computational nature of memory modification ⟦change⟧ . He draws upon autoencoders, neural networks that compress…

**HTML-only text:**

```text
‘
```

**Current-only text:**

```text
'
```


### Change 16 — HTML-only

**Context:** …He draws upon autoencoders, neural networks that compress high ⟦change⟧ dimensional input into a smaller latent representation and then decode…

**HTML-only text:**

```text
-
```


### Change 17 — Replacement

**Context:** …interpretation on the output. ” In the middle of ⟦change⟧ bow tie is the " bottleneck, " the portion…

**HTML-only text:**

```text
Levin’s
```

**Current-only text:**

```text
Levin's
```


### Change 18 — Replacement

**Context:** …” In the middle of Levin's bow tie is the ⟦change⟧ bottleneck, " the portion of the system that limits…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 19 — Replacement

**Context:** …middle of Levin's bow tie is the " bottleneck, ⟦change⟧ the portion of the system that limits data richness,…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 20 — Replacement

**Context:** …is the section that enables constructive reinterpretation of input using ⟦change⟧ stored " units, memory engrams, which as Levin…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 21 — Replacement

**Context:** …section that enables constructive reinterpretation of input using " stored ⟦change⟧ units, memory engrams, which as Levin puts it…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 22 — HTML-only

**Context:** …using " stored " units, memory engrams, which ⟦change⟧ as Levin puts it is essential: " the interpretation…

**HTML-only text:**

```text
,
```


### Change 23 — HTML-only

**Context:** …units, memory engrams, which as Levin puts it ⟦change⟧ is essential: " the interpretation by the right side…

**HTML-only text:**

```text
,
```


### Change 24 — Replacement

**Context:** …engrams, which as Levin puts it is essential: ⟦change⟧ the interpretation by the right side of the bowtie (…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 25 — Replacement

**Context:** …as both the environment and body internals shift). ⟦change⟧ There exists a paper called ' Optimal forgetting: Semantic…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 26 — Replacement

**Context:** …internals shift). " There exists a paper called ⟦change⟧ Optimal forgetting: Semantic compression of episodic memories ' (…

**HTML-only text:**

```text
‘
```

**Current-only text:**

```text
'
```


### Change 27 — Replacement

**Context:** …called ' Optimal forgetting: Semantic compression of episodic memories ⟦change⟧ (Nagy, Török & Orbán), in which…

**HTML-only text:**

```text
‘
```

**Current-only text:**

```text
'
```


### Change 28 — Replacement

**Context:** …of the world. Essentially, we have rich experiences ⟦change⟧ we " make " compressed latent representations, then this…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 29 — Replacement

**Context:** …world. Essentially, we have rich experiences, we ⟦change⟧ make " compressed latent representations, then this results in…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 30 — Replacement

**Context:** …Essentially, we have rich experiences, we " make ⟦change⟧ compressed latent representations, then this results in reconstructed memory…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 31 — Replacement

**Context:** …rich experiences, we " make " compressed latent representations ⟦change⟧ then this results in reconstructed memory. They also use…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 32 — Replacement

**Context:** …then this results in reconstructed memory. They also use ⟦change⟧ optimal forgetting " to claim that forgetting information isn't simply…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 33 — Replacement

**Context:** …in reconstructed memory. They also use " optimal forgetting ⟦change⟧ to claim that forgetting information isn't simply random deterioration,…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 34 — Replacement

**Context:** …use " optimal forgetting " to claim that forgetting information ⟦change⟧ simply random deterioration, it is an optimal process of…

**HTML-only text:**

```text
isn’t
```

**Current-only text:**

```text
isn't
```


### Change 35 — Replacement

**Context:** …" to claim that forgetting information isn't simply random deterioration ⟦change⟧ it is an optimal process of discarding the least useful…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 36 — Replacement

**Context:** …the least useful details. To quote the paper, ⟦change⟧ If memory resources are to be distributed rationally, this…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 37 — Replacement

**Context:** …way of discarding information so that memories degrade gracefully. ⟦change⟧ It should be clear as to how this is related…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 38 — Replacement

**Context:** …should be clear as to how this is related to ⟦change⟧ paper: it is (in a way) a…

**HTML-only text:**

```text
Levin’s
```

**Current-only text:**

```text
Levin's
```


### Change 39 — Replacement

**Context:** …is (in a way) a computational implementation of ⟦change⟧ bow tie ideas. The paper explains the middle bottleneck…

**HTML-only text:**

```text
Levin’s
```

**Current-only text:**

```text
Levin's
```


### Change 40 — Replacement

**Context:** …recollection. This is stated in the previous section: ⟦change⟧ recall is a dynamic act of decompression, meaning through…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 41 — Replacement

**Context:** …runs in the present moment and generates an output. ⟦change⟧ It is implied human perception itself, as a whole…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 42 — HTML-only

**Context:** …moment and generates an output. " It is implied ⟦change⟧ human perception itself, as a whole, can be…

**HTML-only text:**

```text
that
```


### Change 43 — Replacement

**Context:** …this way as well. Drawing upon the paper, ⟦change⟧ How higher goals are constructed and collapse under stress:…

**HTML-only text:**

```text
‘
```

**Current-only text:**

```text
'
```


### Change 44 — Replacement

**Context:** …collapse under stress: A hierarchical Bayesian control systems perspective ⟦change⟧ , it is possible to say that this bow tie…

**HTML-only text:**

```text
‘
```

**Current-only text:**

```text
'
```


### Change 45 — Replacement

**Context:** …. ” Even Levin in his 2024 paper states that ⟦change⟧ this is a kind of top - down causation or…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 46 — Replacement

**Context:** …gestalt) akin to predictive processing in cognitive systems. ⟦change⟧ Even more directly, Levin and Friston have worked on…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 47 — Replacement

**Context:** …worked on this type of synthesis together in the paper ⟦change⟧ Knowing one's place '. They model biological morphogenesis using…

**HTML-only text:**

```text
‘
```

**Current-only text:**

```text
'
```


### Change 48 — Replacement

**Context:** …this type of synthesis together in the paper ' Knowing ⟦change⟧ place '. They model biological morphogenesis using the FEP…

**HTML-only text:**

```text
one’s
```

**Current-only text:**

```text
one's
```


### Change 49 — Replacement

**Context:** …of synthesis together in the paper ' Knowing one's place ⟦change⟧ . They model biological morphogenesis using the FEP, arguing…

**HTML-only text:**

```text
‘
```

**Current-only text:**

```text
'
```


### Change 50 — Replacement

**Context:** …important? Across these models, many inflows of information ⟦change⟧ whether it be biological information or sensory information, or…

**HTML-only text:**

```text
—
```

**Current-only text:**

```text
,
```


### Change 51 — Current-only

**Context:** …Across these models, many inflows of information, whether ⟦change⟧ biological information or sensory information, or some type of…

**Current-only text:**

```text
it be
```


### Change 52 — Replacement

**Context:** …many inflows of information, whether it be biological information ⟦change⟧ sensory information, or some type of data points converge…

**HTML-only text:**

```text
,
```

**Current-only text:**

```text
or
```


### Change 53 — Replacement

**Context:** …information or sensory information, or some type of data ⟦change⟧ converge into one point, while expanding upon its outflow…

**HTML-only text:**

```text
point —
```

**Current-only text:**

```text
points
```


### Change 54 — HTML-only

**Context:** …model through its structure, so surviving requires discovering lower ⟦change⟧ dimensional causes and relationships that preserve what matters and then…

**HTML-only text:**

```text
-
```


### Change 55 — HTML-only

**Context:** …both ends form a loop, rather than a closed ⟦change⟧ off pipeline going in one direction. {diagram}…

**HTML-only text:**

```text
-
```


### Change 56 — Current-only

**Context:** …than a closed off pipeline going in one direction. ⟦change⟧ As inferred from the cited and discussed papers, this…

**Current-only text:**

```text
{diagram}
```


### Change 57 — Replacement

**Context:** …papers, this model uses the same general outline of ⟦change⟧ raw " input coming in, a bottleneck point is…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 58 — Replacement

**Context:** …this model uses the same general outline of " raw ⟦change⟧ input coming in, a bottleneck point is used to…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 59 — Replacement

**Context:** …same general outline of " raw " input coming in ⟦change⟧ a bottleneck point is used to process this, then…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 60 — HTML-only

**Context:** …coming in, a bottleneck point is used to process ⟦change⟧ this, then that is decompressed into output, whether…

**HTML-only text:**

```text
and represent
```


### Change 61 — Replacement

**Context:** …in, a bottleneck point is used to process this ⟦change⟧ then that is decompressed into output, whether it be…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 62 — HTML-only

**Context:** …in the compression gradient, or specific muscle movements. ⟦change⟧ It should be made clear here, that the smallest…

**HTML-only text:**

```text
What this results in is a bow - tie modeling inputs and outputs of an adaptive system, spread across a slice of time.
```


### Change 63 — Current-only

**Context:** …specific muscle movements. It should be made clear here ⟦change⟧ that the smallest point of compression here, the bottleneck…

**Current-only text:**

```text
,
```


### Change 64 — Replacement

**Context:** …across its “ own timescales. ” So, there ⟦change⟧ a clean moment where the first half of the bow…

**HTML-only text:**

```text
isn’t
```

**Current-only text:**

```text
isn't
```


### Change 65 — Replacement

**Context:** …broad perspective, bow ties can be thought of as ⟦change⟧ overlapping in such a way to generate continuously evolving patterns…

**HTML-only text:**

```text
continuously
```

**Current-only text:**

```text
continously
```


### Change 66 — Replacement

**Context:** …generate continuously evolving patterns within persistent architecture. Information is ⟦change⟧ flowing, but some type of structure must persist in…

**HTML-only text:**

```text
constantly
```

**Current-only text:**

```text
constly
```


### Change 67 — Replacement

**Context:** …. Ultimately, there are many temporally overlapping processes that ⟦change⟧ begin " and " end " within each other,…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 68 — Replacement

**Context:** …, there are many temporally overlapping processes that " begin ⟦change⟧ and " end " within each other, resulting in…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 69 — Replacement

**Context:** …are many temporally overlapping processes that " begin " and ⟦change⟧ end " within each other, resulting in complex system…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 70 — Replacement

**Context:** …temporally overlapping processes that " begin " and " end ⟦change⟧ within each other, resulting in complex system of flows…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 71 — HTML-only

**Context:** …and " end " within each other, resulting in ⟦change⟧ complex system of flows of information. As stated in…

**HTML-only text:**

```text
a
```


### Change 72 — HTML-only

**Context:** …we must ask the question then how exactly a stitched ⟦change⟧ together continuous experience is perceived if our sensory experience is…

**HTML-only text:**

```text
-
```


### Change 73 — HTML-only

**Context:** …experience is perceived if our sensory experience is constantly changing ⟦change⟧ which feeds back into the changing of the structure and…

**HTML-only text:**

```text
,
```


### Change 74 — Replacement

**Context:** …it finds itself in. If we keep the changes ⟦change⟧ shallow ", we can take effective action and use…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 75 — Replacement

**Context:** …itself in. If we keep the changes " shallow ⟦change⟧ , we can take effective action and use the invariant…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 76 — Replacement

**Context:** …timescales when measuring the reliability of deep priors. This ⟦change⟧ the diagram: the priors closest to the bottleneck point…

**HTML-only text:**

```text
follows from
```

**Current-only text:**

```text
is exactly what's seen on
```


### Change 77 — Replacement

**Context:** …deep priors. This is exactly what's seen on the ⟦change⟧ : the priors closest to the bottleneck point are seemingly…

**HTML-only text:**

```text
model
```

**Current-only text:**

```text
diagram
```


### Change 78 — Replacement

**Context:** …closest to the bottleneck point are seemingly the most compressed ⟦change⟧ as to be processed as quickly as possible. And…

**HTML-only text:**

```text
so
```

**Current-only text:**

```text
,
```


### Change 79 — HTML-only

**Context:** …. And what this results in is a perceived stitched ⟦change⟧ together continuous experience. Every " new " moment inherits…

**HTML-only text:**

```text
-
```


### Change 80 — Replacement

**Context:** …in is a perceived stitched together continuous experience. Every ⟦change⟧ new " moment inherits a large amount from the previous…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 81 — Replacement

**Context:** …a perceived stitched together continuous experience. Every " new ⟦change⟧ moment inherits a large amount from the previous moment,…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 82 — Replacement

**Context:** …, depend and are constrained by slow variables, like ⟦change⟧ I am me. " Fast variables are constrained by…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 83 — Replacement

**Context:** …by slow variables, like " I am me. ⟦change⟧ Fast variables are constrained by slower ones, meaning their…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 84 — Replacement

**Context:** …slower variables. The light changing cannot be opposite to ⟦change⟧ I am perceiving this light " if that is a…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 85 — Replacement

**Context:** …cannot be opposite to " I am perceiving this light ⟦change⟧ if that is a slower prior your system is using…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 86 — HTML-only

**Context:** …just experienced changes your internal state, which changes how ⟦change⟧ next new input is interpreted which changes output. Because…

**HTML-only text:**

```text
the
```


### Change 87 — HTML-only

**Context:** …state, which changes how next new input is interpreted ⟦change⟧ which changes output. Because many of these processes overlap…

**HTML-only text:**

```text
,
```


### Change 88 — Replacement

**Context:** …is not the preservation of something frozen, but the ⟦change⟧ regeneration of deeper invariant relations across changing moments. Each…

**HTML-only text:**

```text
repeated
```

**Current-only text:**

```text
repeatead
```


### Change 89 — Replacement

**Context:** …preserving transformation of the last while enough organizing structure remains ⟦change⟧ the same " for the system to experience sequences of…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 90 — Replacement

**Context:** …the last while enough organizing structure remains " the same ⟦change⟧ for the system to experience sequences of moments as one…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 91 — Replacement

**Context:** …to experience sequences of moments as one ongoing gestalt. ⟦change⟧ important to consider what is actually going on at the…

**HTML-only text:**

```text
It’s
```

**Current-only text:**

```text
It's
```


### Change 92 — Replacement

**Context:** …viewed really is dependent on what process and temporal variation ⟦change⟧ observing, but for now I consider a " singular…

**HTML-only text:**

```text
you’re
```

**Current-only text:**

```text
you're
```


### Change 93 — Replacement

**Context:** …variation you're observing, but for now I consider a ⟦change⟧ singular present moment " in relation to a task at…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 94 — Replacement

**Context:** …but for now I consider a " singular present moment ⟦change⟧ in relation to a task at hand. If we…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 95 — Replacement

**Context:** …the bottleneck point is a scale - relative point of ⟦change⟧ maximum " salient compression. It is the smallest currently…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 96 — Replacement

**Context:** …point is a scale - relative point of " maximum ⟦change⟧ salient compression. It is the smallest currently sufficient latent…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 97 — Replacement

**Context:** …target is being considered at that temporal level. More ⟦change⟧ , it marks the minimum suffiecent target - relevant state…

**HTML-only text:**

```text
precisely
```

**Current-only text:**

```text
preciesly
```


### Change 98 — Replacement

**Context:** …temporal level. More preciesly, it marks the minimum ⟦change⟧ target - relevant state. As a very isolated example…

**HTML-only text:**

```text
sufficient
```

**Current-only text:**

```text
suffiecent
```


### Change 99 — HTML-only

**Context:** …, it marks the minimum suffiecent target - relevant state ⟦change⟧ . As a very isolated example, if we are…

**HTML-only text:**

```text
, known through held knowledge
```


### Change 100 — Replacement

**Context:** …if we are hungry and have a dominating target of ⟦change⟧ something to eat, a rotted apple compresses input interpretation…

**HTML-only text:**

```text
finding
```

**Current-only text:**

```text
findings
```


### Change 101 — Replacement

**Context:** …if we are not hungry and have a target of ⟦change⟧ find the red object, " the property of redness…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 102 — Replacement

**Context:** …have a target of " find the red object, ⟦change⟧ the property of redness will be more salient instead of…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 103 — HTML-only

**Context:** …As discussed before, going from left to right, ⟦change⟧ the most decompressed input to the most compressed, is…

**HTML-only text:**

```text
from
```


### Change 104 — HTML-only

**Context:** …process of distributed hierarchical inference. Sensory systems, like ⟦change⟧ retina and early visual cortex, filter and encode (…

**HTML-only text:**

```text
the
```


### Change 105 — Replacement

**Context:** …My answer is persistence structure and memory. Structure here ⟦change⟧ the relatively persistent physical organization that makes particular organizing tools…

**HTML-only text:**

```text
means
```

**Current-only text:**

```text
meaning
```


### Change 106 — Replacement

**Context:** …learned survival - related target is not regenerated every 100ms ⟦change⟧ instead the pattern is learned to reinstantiate when current input…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 107 — HTML-only

**Context:** …- related target is not regenerated every 100ms, instead ⟦change⟧ the pattern is learned to reinstantiate when current input is…

**HTML-only text:**

```text
,
```


### Change 108 — Replacement

**Context:** …towards it. How is this known? Because stable ⟦change⟧ persists across moments that do not share context and change…

**HTML-only text:**

```text
behavior
```

**Current-only text:**

```text
behahior
```


### Change 109 — Replacement

**Context:** …- changing way rather than being reconstructed from scratch. ⟦change⟧ also a plausible survivable / evolutionary reason here: adaptive…

**HTML-only text:**

```text
There’s
```

**Current-only text:**

```text
There's
```


### Change 110 — Replacement

**Context:** …plausible survivable / evolutionary reason here: adaptive living systems ⟦change⟧ preserve and rapidly reinstate useful structure, which implies targets…

**HTML-only text:**

```text
that can
```

**Current-only text:**

```text
thatrcan
```


### Change 111 — Replacement

**Context:** …basic constraints in every moment, making behavior faster and ⟦change⟧ cheaper. " Next, we must turn to the…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 112 — Replacement

**Context:** …every moment, making behavior faster and " cheaper. ⟦change⟧ Next, we must turn to the field and how…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 113 — Replacement

**Context:** …is what is instantiated now, while memory and structure ⟦change⟧ what can be, filled with optionality. The field…

**HTML-only text:**

```text
are
```

**Current-only text:**

```text
is
```


### Change 114 — Replacement

**Context:** …currently instantiated configuration. Then, the field we know ⟦change⟧ sits " near or at the bottleneck of the bow…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 115 — Replacement

**Context:** …configuration. Then, the field we know " sits ⟦change⟧ near or at the bottleneck of the bow - tie…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 116 — Replacement

**Context:** …bow - tie, we can label this side as ⟦change⟧ output. " This side marks the act of decompression…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 117 — Replacement

**Context:** …, we can label this side as " output. ⟦change⟧ This side marks the act of decompression, creativity,…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 118 — Current-only

**Context:** …freedom. Here, the encoded input is spread across ⟦change⟧ a space of time, meaning we interpret some level…

**Current-only text:**

```text
in
```


### Change 119 — Replacement

**Context:** …we interpret some level of input, dependent on what ⟦change⟧ measuring like from 100ms to a year, then the…

**HTML-only text:**

```text
we’re
```

**Current-only text:**

```text
we're
```


### Change 120 — HTML-only

**Context:** …what we're measuring like from 100ms to a year, ⟦change⟧ then the interpretation of the input produces what we output…

**HTML-only text:**

```text
and
```


### Change 121 — Replacement

**Context:** …: nearest to the bottleneck of the bow - tie ⟦change⟧ deep priors which first interpret input, and farthest to…

**HTML-only text:**

```text
lie
```

**Current-only text:**

```text
lies
```


### Change 122 — Replacement

**Context:** …which first interpret input, and farthest to the waist ⟦change⟧ the most shallow priors, those that are most specific…

**HTML-only text:**

```text
lie
```

**Current-only text:**

```text
lies
```


### Change 123 — Current-only

**Context:** …thought of as going from priors that constrain almost everything ⟦change⟧ to priors that constrain less and less generation. Goekoop…

**Current-only text:**

```text
,
```


### Change 124 — Current-only

**Context:** …, to priors that constrain less and less generation. ⟦change⟧ When considering action and active inference, this process can…

**Current-only text:**

```text
Goekoop & de Kleijn state something simialr, saying " < >. "
```


### Change 125 — HTML-only

**Context:** …very specific proprioceptive predictions. This means there is not ⟦change⟧ hard cognition / bodily split in these branches, but…

**HTML-only text:**

```text
a
```


### Change 126 — Replacement

**Context:** …then provides a certain action to take to meet that ⟦change⟧ prediction. A very simple example might be like seeing…

**HTML-only text:**

```text
branch’s
```

**Current-only text:**

```text
branch's
```


### Change 127 — Replacement

**Context:** …like seeing a water bottle, interpreting those input signals ⟦change⟧ broad priors mark the bottle as a separate object,…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 128 — Replacement

**Context:** …these patterns are known through the structure and memory that ⟦change⟧ came before " the interpretation and action in relation to…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 129 — Replacement

**Context:** …known through the structure and memory that " came before ⟦change⟧ the interpretation and action in relation to the water bottle…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 130 — Replacement

**Context:** …action in relation to the water bottle. However, ⟦change⟧ not that simple of a modeling if we consider overlapping…

**HTML-only text:**

```text
it’s
```

**Current-only text:**

```text
it's
```


### Change 131 — Current-only

**Context:** …the water bottle. However, it's not that simple ⟦change⟧ a modeling if we consider overlapping and nested temporal targets…

**Current-only text:**

```text
of
```


### Change 132 — Replacement

**Context:** …bottle. However, it's not that simple of a ⟦change⟧ if we consider overlapping and nested temporal targets and bow…

**HTML-only text:**

```text
model
```

**Current-only text:**

```text
modeling
```


### Change 133 — Replacement

**Context:** …, say a target to drink the water, this ⟦change⟧ nested targets and bow - ties " within " that…

**HTML-only text:**

```text
introduces
```

**Current-only text:**

```text
intropduces
```


### Change 134 — Replacement

**Context:** …water, this intropduces nested targets and bow - ties ⟦change⟧ within " that specific target we are analyzing. Then…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 135 — Replacement

**Context:** …this intropduces nested targets and bow - ties " within ⟦change⟧ that specific target we are analyzing. Then, the…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 136 — Replacement

**Context:** …of this, a slow latent target can constrain many ⟦change⟧ smaller " targets, which constrain even more fast inference…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 137 — Replacement

**Context:** …, a slow latent target can constrain many " smaller ⟦change⟧ targets, which constrain even more fast inference - action…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 138 — Replacement

**Context:** …is actually occurring in reality. There is no true ⟦change⟧ frozen " state of being, instead these nested architectures…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 139 — Replacement

**Context:** …occurring in reality. There is no true " frozen ⟦change⟧ state of being, instead these nested architectures are constantly…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 140 — Replacement

**Context:** …There is no true " frozen " state of being ⟦change⟧ instead these nested architectures are constantly running, overlapping deeply…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 141 — HTML-only

**Context:** …no true " frozen " state of being, instead ⟦change⟧ these nested architectures are constantly running, overlapping deeply.…

**HTML-only text:**

```text
,
```


### Change 142 — Replacement

**Context:** …deeply. As a simple example, a target of ⟦change⟧ solve this math equation " lasts for one minute,…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 143 — Replacement

**Context:** …example, a target of " solve this math equation ⟦change⟧ lasts for one minute, while producing many constrained sub…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 144 — Replacement

**Context:** …minute, while producing many constrained sub - targets like ⟦change⟧ subtract 5 " which branch out of the organizing target…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 145 — Replacement

**Context:** …producing many constrained sub - targets like " subtract 5 ⟦change⟧ which branch out of the organizing target and has its…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 146 — Replacement

**Context:** …5 " which branch out of the organizing target and ⟦change⟧ own bow - tie, which then produces even smaller…

**HTML-only text:**

```text
have their
```

**Current-only text:**

```text
has its
```


### Change 147 — Replacement

**Context:** …of the organizing target and has its own bow - ⟦change⟧ , which then produces even smaller targets like hand movements…

**HTML-only text:**

```text
ties
```

**Current-only text:**

```text
tie
```


### Change 148 — Replacement

**Context:** …and has its own bow - tie, which then ⟦change⟧ even smaller targets like hand movements. It's important to…

**HTML-only text:**

```text
produce
```

**Current-only text:**

```text
produces
```


### Change 149 — Replacement

**Context:** …which then produces even smaller targets like hand movements. ⟦change⟧ important to mark the difference between inference and learning,…

**HTML-only text:**

```text
It’s
```

**Current-only text:**

```text
It's
```


### Change 150 — Replacement

**Context:** …update the current field, while repeated prediction error and ⟦change⟧ successful " action can more slowly retune the underlying structure…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 151 — Replacement

**Context:** …current field, while repeated prediction error and " successful ⟦change⟧ action can more slowly retune the underlying structure and memory…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 152 — Replacement

**Context:** …can more slowly retune the underlying structure and memory that ⟦change⟧ way to the field configuration. This emphasizes the importance…

**HTML-only text:**

```text
give
```

**Current-only text:**

```text
gives
```


### Change 153 — Current-only

**Context:** …, while preserving those that do matter. What is ⟦change⟧ meant by transformations? By transformations, I mean changes…

**Current-only text:**

```text
it
```


### Change 154 — HTML-only

**Context:** …still being interpreted as the same object; the surface ⟦change⟧ level changes are transformations, while the invariant relations,…

**HTML-only text:**

```text
-
```


### Change 155 — Replacement

**Context:** …changes are transformations, while the invariant relations, the ⟦change⟧ bundling together " of priors, useful to the target…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 156 — Replacement

**Context:** …, while the invariant relations, the " bundling together ⟦change⟧ of priors, useful to the target is preserved.…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 157 — Replacement

**Context:** …bundling together " of priors, useful to the target ⟦change⟧ preserved. Under SPTs between slices of input, the…

**HTML-only text:**

```text
, are
```

**Current-only text:**

```text
is
```


### Change 158 — Replacement

**Context:** …the inference side discards what does not matter for the ⟦change⟧ observed target, making the generative side preserve broad variables…

**HTML-only text:**

```text
slice’s
```

**Current-only text:**

```text
slice's
```


### Change 159 — Replacement

**Context:** …specific variables are constrained by the broad ones, meaning ⟦change⟧ water bottle " must come from a branch that is…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 160 — Replacement

**Context:** …constrained by the broad ones, meaning " water bottle ⟦change⟧ must come from a branch that is downstream of one…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 161 — Replacement

**Context:** …come from a branch that is downstream of one that ⟦change⟧ the input as an object. Equally as important in…

**HTML-only text:**

```text
interprets
```

**Current-only text:**

```text
interpretes
```


### Change 162 — Replacement

**Context:** …- relevant variation through equivariance. The bottleneck does not ⟦change⟧ erase " every difference that occurs in input, rather…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 163 — Replacement

**Context:** …variation through equivariance. The bottleneck does not " erase ⟦change⟧ every difference that occurs in input, rather it can…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 164 — Replacement

**Context:** …not " erase " every difference that occurs in input ⟦change⟧ rather it can preserve both a stable organization and structured…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 165 — HTML-only

**Context:** …erase " every difference that occurs in input, rather ⟦change⟧ it can preserve both a stable organization and structured information…

**HTML-only text:**

```text
,
```


### Change 166 — Current-only

**Context:** …organization that matters to the system because of salience. ⟦change⟧ The orientation of the object changes, but object identity…

**Current-only text:**

```text
We can have: bottle at angle A → bottle at angle B
```


### Change 167 — Replacement

**Context:** …organizations remain invariant and allow for broader patterns to remain ⟦change⟧ . Object - ness stays, while angle calculation,…

**HTML-only text:**

```text
stable
```

**Current-only text:**

```text
stables
```


### Change 168 — Replacement

**Context:** …angle calculation, the more specific interpretation, changes. ⟦change⟧ sibling is equivariance. While invariance means that some representation…

**HTML-only text:**

```text
Invariance’s
```

**Current-only text:**

```text
Invariation's
```


### Change 169 — Current-only

**Context:** …changes in a predictable way along with the transformation. ⟦change⟧ This bottle rotates, and its identity as a bottle…

**Current-only text:**

```text
We can have: bottle at angle A → bottle at angle B
```


### Change 170 — Replacement

**Context:** …, memory and compression, can be thought of as ⟦change⟧ preparing " input as for what needs to be preserved…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 171 — Replacement

**Context:** …and compression, can be thought of as " preparing ⟦change⟧ input as for what needs to be preserved and what…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 172 — Current-only

**Context:** …, can be thought of as " preparing " input ⟦change⟧ for what needs to be preserved and what can be…

**Current-only text:**

```text
as
```


### Change 173 — Replacement

**Context:** …tools from scratch in every single moment would cost too ⟦change⟧ resources, as in time and energy for example.…

**HTML-only text:**

```text
many
```

**Current-only text:**

```text
much
```


### Change 174 — Replacement

**Context:** …time and energy for example. The right side then ⟦change⟧ reverses " this process by using generative freedom. What…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 175 — Replacement

**Context:** …energy for example. The right side then " reverses ⟦change⟧ this process by using generative freedom. What this means…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 176 — Replacement

**Context:** …, crucially, how agents act creatively is in service ⟦change⟧ current concerns, not some universally privileged position. Context…

**HTML-only text:**

```text
of
```

**Current-only text:**

```text
towards
```


### Change 177 — Replacement

**Context:** …humans. William James (indirectly) defines intelligence as ⟦change⟧ reaching the same goal by different means " in the…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 178 — Replacement

**Context:** …intelligence as " reaching the same goal by different means ⟦change⟧ in the context of goal - directed problem solving under…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 179 — Replacement

**Context:** …it can vary. Well, crucially, here the ⟦change⟧ same goal " can be thought of as an invariant…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 180 — Replacement

**Context:** …. Well, crucially, here the " same goal ⟦change⟧ can be thought of as an invariant, while the…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 181 — Replacement

**Context:** …input without becoming blind to the specific differences needed for ⟦change⟧ representation " (the knowing of interpretations) and action…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 182 — Replacement

**Context:** …becoming blind to the specific differences needed for " representation ⟦change⟧ (the knowing of interpretations) and action. It…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 183 — Replacement

**Context:** …, like maybe 3 facts that seem isolated, but ⟦change⟧ can discover some relation that preserves these 3 facts,…

**HTML-only text:**

```text
intelligence
```

**Current-only text:**

```text
intellgence
```


### Change 184 — HTML-only

**Context:** …then use R to generate a novel variable, D ⟦change⟧ . Now it would be: {small diagram}…

**HTML-only text:**

```text
that shares the relation but differs in specificity
```


### Change 185 — Current-only

**Context:** …use R to generate a novel variable, D. ⟦change⟧ This mechanism can be observed across many adaptive systems,…

**Current-only text:**

```text
Now it would be: {small diagram}
```


### Change 186 — Replacement

**Context:** …around itself to produce the same final structure. As ⟦change⟧ paper on this states, “ in the service of…

**HTML-only text:**

```text
Levin’s
```

**Current-only text:**

```text
Levin's
```


### Change 187 — Replacement

**Context:** …change. ” The invariant here, the more robust ⟦change⟧ broad " target, can be thought of as working…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 188 — Replacement

**Context:** …” The invariant here, the more robust " broad ⟦change⟧ target, can be thought of as working towards the…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 189 — Replacement

**Context:** …side while input is being compressed into a useable point ⟦change⟧ which the particular system can commit from and find different…

**HTML-only text:**

```text
from
```

**Current-only text:**

```text
in
```


### Change 190 — Current-only

**Context:** …a useable point in which the particular system can commit ⟦change⟧ and find different paths to the same means. The…

**Current-only text:**

```text
from
```


### Change 191 — Replacement

**Context:** …find different paths to the same means. The system ⟦change⟧ understands " from the compression process that what survived is…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 192 — Replacement

**Context:** …paths to the same means. The system " understands ⟦change⟧ from the compression process that what survived is what is…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 193 — Replacement

**Context:** …work. This seems like a very efficient system as ⟦change⟧ no need to parse input while creatively attempting reaching an…

**HTML-only text:**

```text
there’s
```

**Current-only text:**

```text
there's
```


### Change 194 — Replacement

**Context:** …as there's no need to parse input while creatively attempting ⟦change⟧ an end point (setting aside nested processes and systems…

**HTML-only text:**

```text
to reach
```

**Current-only text:**

```text
reaching
```


### Change 195 — Replacement

**Context:** …, preserving what is important, is always in service ⟦change⟧ a target and the scale at play. " This…

**HTML-only text:**

```text
of
```

**Current-only text:**

```text
towards
```


### Change 196 — Replacement

**Context:** …service towards a target and the scale at play. ⟦change⟧ This food should not be thrown away " does not…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 197 — Replacement

**Context:** …play. " This food should not be thrown away ⟦change⟧ does not have to be fully stable and invariant across…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 198 — Replacement

**Context:** …stable and invariant across contexts. For instance, if ⟦change⟧ not hungry, the food might be marked as "…

**HTML-only text:**

```text
you’re
```

**Current-only text:**

```text
you're
```


### Change 199 — Replacement

**Context:** …you're not hungry, the food might be marked as ⟦change⟧ okay to throw away " because finding something to eat…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 200 — Replacement

**Context:** …food might be marked as " okay to throw away ⟦change⟧ because finding something to eat is not a relevant target…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 201 — Replacement

**Context:** …mean they lock down the system to just one path ⟦change⟧ instead the SPT preserves the ultimate target as the end…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 202 — HTML-only

**Context:** …lock down the system to just one path, instead ⟦change⟧ the SPT preserves the ultimate target as the end,…

**HTML-only text:**

```text
,
```


### Change 203 — Replacement

**Context:** …important invariants. We can go from a novel solution ⟦change⟧ not yet seen, to the process of practice,…

**HTML-only text:**

```text
we’ve
```

**Current-only text:**

```text
we've
```


### Change 204 — Replacement

**Context:** …this, invariance on its own does not mean goodness ⟦change⟧ it is simply the way our system evolved for survival…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 205 — Replacement

**Context:** …of intelligence can be good or bad (in relation ⟦change⟧ suffering), all depending on the context. A…

**HTML-only text:**

```text
to
```

**Current-only text:**

```text
towards
```


### Change 206 — Replacement

**Context:** …on the context. A person preserving the organization of ⟦change⟧ everything is dangerous " across a vast amount of diverse…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 207 — Replacement

**Context:** …A person preserving the organization of " everything is dangerous ⟦change⟧ across a vast amount of diverse input would be considered…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 208 — Replacement

**Context:** …others: the invariants track, even when coming across ⟦change⟧ . Now, something underlying all of this talk so…

**HTML-only text:**

```text
opposing evidence
```

**Current-only text:**

```text
opposiing eveidence
```


### Change 209 — Replacement

**Context:** …this talk so far has been the bow - tie ⟦change⟧ itself, which must be analyzed from a privield -…

**HTML-only text:**

```text
model
```

**Current-only text:**

```text
diagram
```


### Change 210 — Replacement

**Context:** …tie diagram itself, which must be analyzed from a ⟦change⟧ - human perspective which brings about intersting dynamics of modleing…

**HTML-only text:**

```text
privileged
```

**Current-only text:**

```text
privield
```


### Change 211 — Replacement

**Context:** …analyzed from a privield - human perspective which brings about ⟦change⟧ dynamics of modleing. Meaning, specificity, and width…

**HTML-only text:**

```text
interesting
```

**Current-only text:**

```text
intersting
```


### Change 212 — Replacement

**Context:** …privield - human perspective which brings about intersting dynamics of ⟦change⟧ . Meaning, specificity, and width of bow -…

**HTML-only text:**

```text
modeling
```

**Current-only text:**

```text
modleing
```


### Change 213 — Replacement

**Context:** …changes the questions one might ask about an organism or ⟦change⟧ system, thus it changes the answers you will find…

**HTML-only text:**

```text
adaptive
```

**Current-only text:**

```text
adaptivie
```


### Change 214 — Replacement

**Context:** …questions one might ask about an organism or adaptivie system ⟦change⟧ thus it changes the answers you will find, so…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 215 — HTML-only

**Context:** …might ask about an organism or adaptivie system, thus ⟦change⟧ it changes the answers you will find, so it…

**HTML-only text:**

```text
,
```


### Change 216 — Replacement

**Context:** …top - down target of an adaptive system, like ⟦change⟧ , " this dictates the sizing of all three levels…

**HTML-only text:**

```text
“ avoid death
```

**Current-only text:**

```text
" survive
```


### Change 217 — Replacement

**Context:** …target of an adaptive system, like " survive, ⟦change⟧ this dictates the sizing of all three levels of the…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 218 — Replacement

**Context:** …states. Think of a large - horizon target like ⟦change⟧ become a doctor. " This requires the system to…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 219 — Replacement

**Context:** …large - horizon target like " become a doctor. ⟦change⟧ This requires the system to " consider " both larger…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 220 — Replacement

**Context:** …become a doctor. " This requires the system to ⟦change⟧ consider " both larger subtargets, like going to medschool…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 221 — Replacement

**Context:** …doctor. " This requires the system to " consider ⟦change⟧ both larger subtargets, like going to medschool, and…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 222 — Replacement

**Context:** …" consider " both larger subtargets, like going to ⟦change⟧ , and extremely specific targets like " reach towards the…

**HTML-only text:**

```text
med school
```

**Current-only text:**

```text
medschool
```


### Change 223 — Replacement

**Context:** …like going to medschool, and extremely specific targets like ⟦change⟧ reach towards the notebook " for when you're studying.…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 224 — Replacement

**Context:** …and extremely specific targets like " reach towards the notebook ⟦change⟧ for when you're studying. Through this, the system…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 225 — Replacement

**Context:** …targets like " reach towards the notebook " for when ⟦change⟧ studying. Through this, the system must consider a…

**HTML-only text:**

```text
you’re
```

**Current-only text:**

```text
you're
```


### Change 226 — Replacement

**Context:** …nested targets. These nested targets are of course smaller ⟦change⟧ both a spatiotemporal scale and problem - solving level,…

**HTML-only text:**

```text
on
```

**Current-only text:**

```text
from
```


### Change 227 — HTML-only

**Context:** …are of course smaller from both a spatiotemporal scale and ⟦change⟧ problem - solving level, how many means to reach…

**HTML-only text:**

```text
a
```


### Change 228 — Replacement

**Context:** …from both a spatiotemporal scale and problem - solving level ⟦change⟧ how many means to reach the same endpoint, which…

**HTML-only text:**

```text
—
```

**Current-only text:**

```text
,
```


### Change 229 — HTML-only

**Context:** …scale and problem - solving level, how many means ⟦change⟧ to reach the same endpoint, which means the sizing…

**HTML-only text:**

```text
there are
```


### Change 230 — Replacement

**Context:** …level, how many means to reach the same endpoint ⟦change⟧ which means the sizing of these bow - ties will…

**HTML-only text:**

```text
—
```

**Current-only text:**

```text
,
```


### Change 231 — Replacement

**Context:** …these bow - ties will be smaller in comparison to ⟦change⟧ of the constraining, more dominant ones. Because of…

**HTML-only text:**

```text
that
```

**Current-only text:**

```text
those
```


### Change 232 — Replacement

**Context:** …, like a cell wanting to maintain ion balance, ⟦change⟧ clear both the inference and generative sides will be smaller…

**HTML-only text:**

```text
it’s
```

**Current-only text:**

```text
it's
```


### Change 233 — Current-only

**Context:** …level top - down state of a bow - tie ⟦change⟧ is not necasily specific in its nature. In fact…

**Current-only text:**

```text
does
```


### Change 234 — Replacement

**Context:** …down state of a bow - tie does is not ⟦change⟧ specific in its nature. In fact, these high…

**HTML-only text:**

```text
necessarily
```

**Current-only text:**

```text
necasily
```


### Change 235 — Replacement

**Context:** …quite abstract. Becoming a doctor is more abstract than ⟦change⟧ contract this figner muscle, " and the reason this…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 236 — Replacement

**Context:** …Becoming a doctor is more abstract than " contract this ⟦change⟧ muscle, " and the reason this is is precicely…

**HTML-only text:**

```text
finger
```

**Current-only text:**

```text
figner
```


### Change 237 — Replacement

**Context:** …is more abstract than " contract this figner muscle, ⟦change⟧ and the reason this is is precicely because it spawns…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 238 — Replacement

**Context:** …figner muscle, " and the reason this is is ⟦change⟧ because it spawns less specific generative output. More abstract…

**HTML-only text:**

```text
precisely
```

**Current-only text:**

```text
precicely
```


### Change 239 — HTML-only

**Context:** …. More abstract constraints drive more long - term specificity ⟦change⟧ . This also appears in the bottleneck section: in…

**HTML-only text:**

```text
in the system,. which is also relative to the system’s physical architecture like its limbs or brain
```


### Change 240 — Replacement

**Context:** …point that is useful to commit from will be massively ⟦change⟧ small " compared to a much more complex system like…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 241 — Replacement

**Context:** …is useful to commit from will be massively " small ⟦change⟧ compared to a much more complex system like a human…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 242 — HTML-only

**Context:** …place and branch out into the generative side, and ⟦change⟧ acted upon through nested trees, making the larger system…

**HTML-only text:**

```text
are
```


### Change 243 — Replacement

**Context:** …more specific in its own top - down tree. ⟦change⟧ , these bow - ties continuously overlap, for they…

**HTML-only text:**

```text
To model this nested system of bow - ties
```

**Current-only text:**

```text
And again
```


### Change 244 — Replacement

**Context:** …its own top - down tree. And again, ⟦change⟧ bow - ties continuously overlap, for they do not…

**HTML-only text:**

```text
we can look at a diagram like so: These
```

**Current-only text:**

```text
these
```


### Change 245 — Replacement

**Context:** …scale targets constrain faster, smaller - scale inference - ⟦change⟧ . For example, while reading a paragraph, the…

**HTML-only text:**

```text
cycles
```

**Current-only text:**

```text
cycle
```


### Change 246 — Replacement

**Context:** …span of time. Coming off this, I believe ⟦change⟧ idea of the cognitive light cone fits in neatly.…

**HTML-only text:**

```text
Levin’s
```

**Current-only text:**

```text
Levin's
```


### Change 247 — Replacement

**Context:** …in neatly. This light cone concept is demarcated as ⟦change⟧ the scale of the largest goal, in both space…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 248 — Replacement

**Context:** …, which a system is capable of working towards. ⟦change⟧ Originally I had made the assumption that we can simply…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 249 — Replacement

**Context:** …had made the assumption that we can simply model a ⟦change⟧ light cone by looking at its " whole " bow…

**HTML-only text:**

```text
system’s
```

**Current-only text:**

```text
system's
```


### Change 250 — Replacement

**Context:** …simply model a system's light cone by looking at its ⟦change⟧ whole " bow - tie, but quickly this comes…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 251 — Replacement

**Context:** …a system's light cone by looking at its " whole ⟦change⟧ bow - tie, but quickly this comes apart when…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 252 — Replacement

**Context:** …what occurs in the system when you prescribe perturbations that ⟦change⟧ invariant variables. Where you can " stop " observation…

**HTML-only text:**

```text
offset
```

**Current-only text:**

```text
offsets
```


### Change 253 — Replacement

**Context:** …system when you prescribe perturbations that offsets invariant variables. ⟦change⟧ you can " stop " observation in accordance to the…

**HTML-only text:**

```text
When
```

**Current-only text:**

```text
Where
```


### Change 254 — Replacement

**Context:** …prescribe perturbations that offsets invariant variables. Where you can ⟦change⟧ stop " observation in accordance to the system as a…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 255 — Replacement

**Context:** …that offsets invariant variables. Where you can " stop ⟦change⟧ observation in accordance to the system as a whole,…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 256 — Replacement

**Context:** …. Where you can " stop " observation in accordance ⟦change⟧ the system as a whole, is when you can…

**HTML-only text:**

```text
with
```

**Current-only text:**

```text
to
```


### Change 257 — Current-only

**Context:** …" observation in accordance to the system as a whole ⟦change⟧ is when you can no longer find evidence that the…

**Current-only text:**

```text
,
```


### Change 258 — Replacement

**Context:** …findings into knowing the relevant highest - level target. ⟦change⟧ say we have a starting prediction that a person wants…

**HTML-only text:**

```text
Let’s
```

**Current-only text:**

```text
Let's
```


### Change 259 — Replacement

**Context:** …in many perturbations like delaying their train, their phone ⟦change⟧ , or a stranger talking to them. When these…

**HTML-only text:**

```text
dying
```

**Current-only text:**

```text
dies
```


### Change 260 — Replacement

**Context:** …target remains invariant, and nested actions are in service ⟦change⟧ the target, we can say that at that level…

**HTML-only text:**

```text
of
```

**Current-only text:**

```text
towards
```


### Change 261 — Replacement

**Context:** …of analysis, the preserved higher - order variable is ⟦change⟧ getting home safe. " Now, to find out…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 262 — Replacement

**Context:** …higher - order variable is " getting home safe. ⟦change⟧ Now, to find out the cognitive light code of…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 263 — Replacement

**Context:** …. " Now, to find out the cognitive light ⟦change⟧ of the whole system, we need to ask a…

**HTML-only text:**

```text
cone
```

**Current-only text:**

```text
code
```


### Change 264 — Replacement

**Context:** …. For this, we might start with something like ⟦change⟧ survival " or " maintain viability. " Many lower…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 265 — Replacement

**Context:** …this, we might start with something like " survival ⟦change⟧ or " maintain viability. " Many lower - level…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 266 — Replacement

**Context:** …we might start with something like " survival " or ⟦change⟧ maintain viability. " Many lower - level variables change…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 267 — Replacement

**Context:** …something like " survival " or " maintain viability. ⟦change⟧ Many lower - level variables change continously, like eating…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 268 — Replacement

**Context:** …maintain viability. " Many lower - level variables change ⟦change⟧ , like eating different things, chaning cells, turnover…

**HTML-only text:**

```text
continuously
```

**Current-only text:**

```text
continously
```


### Change 269 — Replacement

**Context:** …level variables change continously, like eating different things, ⟦change⟧ cells, turnover of molecules, or changing internal temperates…

**HTML-only text:**

```text
changing
```

**Current-only text:**

```text
chaning
```


### Change 270 — Replacement

**Context:** …chaning cells, turnover of molecules, or changing internal ⟦change⟧ , while some high - level organi9zation persists, constraining…

**HTML-only text:**

```text
temperatures
```

**Current-only text:**

```text
temperates
```


### Change 271 — Replacement

**Context:** …or changing internal temperates, while some high - level ⟦change⟧ persists, constraining all of these low - level variables…

**HTML-only text:**

```text
organization
```

**Current-only text:**

```text
organi9zation
```


### Change 272 — HTML-only

**Context:** …constraining all of these low - level variables. Here ⟦change⟧ though, we must not be careful to confuse this…

**HTML-only text:**

```text
,
```


### Change 273 — Current-only

**Context:** …low - level variables. Here though, we must ⟦change⟧ be careful to confuse this with pure " survival.…

**Current-only text:**

```text
not
```


### Change 274 — HTML-only

**Context:** …variables. Here though, we must not be careful ⟦change⟧ to confuse this with pure " survival. " Here…

**HTML-only text:**

```text
not
```


### Change 275 — Replacement

**Context:** …we must not be careful to confuse this with pure ⟦change⟧ survival. " Here, viability is simply a useful…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 276 — Replacement

**Context:** …be careful to confuse this with pure " survival. ⟦change⟧ Here, viability is simply a useful high - level…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 277 — Replacement

**Context:** …enlarging the spatiotemporal scale of targets they can pursue: ⟦change⟧ the scaling enables cellular collectives to enlarge their ' cognitive…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 278 — Replacement

**Context:** …: " the scaling enables cellular collectives to enlarge their ⟦change⟧ cognitive light cone ' – the spatio - temporal scale…

**HTML-only text:**

```text
‘
```

**Current-only text:**

```text
'
```


### Change 279 — Replacement

**Context:** …enables cellular collectives to enlarge their ' cognitive light cone ⟦change⟧ – the spatio - temporal scale of the target states…

**HTML-only text:**

```text
’
```

**Current-only text:**

```text
'
```


### Change 280 — Replacement

**Context:** …of the target states they are able to pursue. ⟦change⟧ So then, the light cone of what we are…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 281 — Replacement

**Context:** …, and the generative side, are constrained by the ⟦change⟧ architecture itself. Every part faces binding constraints that make…

**HTML-only text:**

```text
system’s physical
```

**Current-only text:**

```text
system's
```


### Change 282 — Replacement

**Context:** …to each part that can give us insight into the ⟦change⟧ level of complexity, which determines the sizing of the…

**HTML-only text:**

```text
system’s
```

**Current-only text:**

```text
system's
```


### Change 283 — Replacement

**Context:** …determines the sizing of the bow - tie and the ⟦change⟧ capabilities. My guess goes like this: bow ties…

**HTML-only text:**

```text
system’s
```

**Current-only text:**

```text
system's
```


### Change 284 — HTML-only

**Context:** …generative side by what they can control. In humans ⟦change⟧ for instance, we can sense light, sound,…

**HTML-only text:**

```text
,
```


### Change 285 — Replacement

**Context:** …sound, chemicals, touch, and internal bodily states ⟦change⟧ we can integrate and preserve a certain amount of information…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 286 — Replacement

**Context:** …a certain amount of information because of structure and memory ⟦change⟧ and we can control external things through our physical bodies…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 287 — Replacement

**Context:** …cone size, like human thoughts, are not necessarily ⟦change⟧ physical. " Without getting into arguments surrounding physicalism and…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 288 — Replacement

**Context:** …like human thoughts, are not necessarily " physical. ⟦change⟧ Without getting into arguments surrounding physicalism and emergence, I…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 289 — Current-only

**Context:** …a more general labeling of the three parts that scale ⟦change⟧ up continuously across all living systems, it might go…

**Current-only text:**

```text
-
```


### Change 290 — Current-only

**Context:** …observability → internal control state → controllability → loop. ⟦change⟧ …

**Current-only text:**

```text
{diagram of above} note: symmetry gives us insight into " is this the same memory " role of affordances? rule of computational complexity in understanding bow - tie overlapping and real - world modeling? Now, all of this is interesting and " answers " the temporal binding problem, but none of this explains why exactly there is one unified experience at all, something like the general binding problem. All of the above could be true, but it could not predict that there is subjective feeling at all. A feeling that, you are not your individual neurons or memories, but something much larger that feels things, that feels all of this as one unified thing. This is something
```


## 2 The Dynamics of Fit

### Change 1 — Current-only

**Current-only text:**

```text
This section explains why the architecture moves, what felt tone reports, and how bodily states stabilize it.
```


## 2.1 The Energetic Triad

### Change 1 — Replacement

**Context:** …and memorize everything would die before it could capture what ⟦change⟧ after. What I mean by " cost " throughout…

**HTML-only text:**

```text
it’s
```

**Current-only text:**

```text
it's
```


### Change 2 — Replacement

**Context:** …could capture what it's after. What I mean by ⟦change⟧ cost " throughout is the relative usage of that allocation…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 3 — Replacement

**Context:** …what it's after. What I mean by " cost ⟦change⟧ throughout is the relative usage of that allocation. Our…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 4 — Replacement

**Context:** …an input’s relation to the current field’s target. When ⟦change⟧ threatening input, say if you saw a lion,…

**HTML-only text:**

```text
you face
```

**Current-only text:**

```text
facing
```


### Change 5 — Replacement

**Context:** …than what the system expected. It is important to ⟦change⟧ two things here that may get confused for being one…

**HTML-only text:**

```text
separate
```

**Current-only text:**

```text
seperate
```


### Change 6 — Replacement

**Context:** …two things here that may get confused for being one ⟦change⟧ baseline. " The fit - baseline describes moment -…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 7 — Replacement

**Context:** …that may get confused for being one " baseline. ⟦change⟧ The fit - baseline describes moment - to - moment…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 8 — Current-only

**Context:** …in general. This capacity is bottlenecked by held contraction ⟦change⟧ and the pushing away or pull torwards targets the system…

**Current-only text:**

```text
,
```


### Change 9 — Replacement

**Context:** …by held contraction, and the pushing away or pull ⟦change⟧ targets the system cannot satisfy (later expanded on through…

**HTML-only text:**

```text
towards
```

**Current-only text:**

```text
torwards
```


### Change 10 — Replacement

**Context:** …sometimes waves occur which we can call positive or negative ⟦change⟧ from the fit - baseline level. A swell up…

**HTML-only text:**

```text
differences
```

**Current-only text:**

```text
difference
```


### Change 11 — Replacement

**Context:** …than predicted and a down trough (or an imagined ⟦change⟧ reverse wave ") is when input comes in more…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 12 — Replacement

**Context:** …a down trough (or an imagined " reverse wave ⟦change⟧ ) is when input comes in more costly to process…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 13 — Replacement

**Context:** …process than predicted. These are both deviations from the ⟦change⟧ stable, flat surface of the calm ocean. Crucially…

**HTML-only text:**

```text
relatively
```

**Current-only text:**

```text
relatviely
```


### Change 14 — Replacement

**Context:** …levels based on the ocean level that day. If ⟦change⟧ high tide, the same wave will crest high,…

**HTML-only text:**

```text
it’s
```

**Current-only text:**

```text
it's
```


### Change 15 — Replacement

**Context:** …. This represents that the same insight that is processed ⟦change⟧ than predicted can be experienced either mundane one day or…

**HTML-only text:**

```text
more cheaply
```

**Current-only text:**

```text
less costly
```


### Change 16 — HTML-only

**Context:** …that is processed less costly than predicted can be experienced ⟦change⟧ either mundane one day or exciting another day due to…

**HTML-only text:**

```text
as
```


### Change 17 — Replacement

**Context:** …. Because input is constant and most input integrates near ⟦change⟧ predicted cost, these fit - baseline - level integrations…

**HTML-only text:**

```text
its
```

**Current-only text:**

```text
their
```


### Change 18 — Replacement

**Context:** …or sensations in the body, since part of an ⟦change⟧ feeling tone comes from the system registering these deviations against…

**HTML-only text:**

```text
input’s
```

**Current-only text:**

```text
input's
```


### Change 19 — HTML-only

**Context:** …is one reason why input that is hard to organize ⟦change⟧ like going to an event for the first time can…

**HTML-only text:**

```text
,
```


### Change 20 — HTML-only

**Context:** …organize like going to an event for the first time ⟦change⟧ can feel bad on its own, separate from anything…

**HTML-only text:**

```text
,
```


### Change 21 — Replacement

**Context:** …. Going to an unfamiliar event costs capacity to process ⟦change⟧ the system attempts to calculate and organize which is very…

**HTML-only text:**

```text
as
```

**Current-only text:**

```text
which
```


### Change 22 — HTML-only

**Context:** …to process which the system attempts to calculate and organize ⟦change⟧ which is very hard to do with input there is…

**HTML-only text:**

```text
input,
```


### Change 23 — HTML-only

**Context:** …The main measurement we can use here is compression progress ⟦change⟧ , the rate at which integration cost is reduced relative…

**HTML-only text:**

```text
(term coined by Jürgen Schmidhuber, “ Driven by Compression Progress, ” 2008 / 09)
```


### Change 24 — Replacement

**Context:** …this can result in feelings like enjoyment or flow. ⟦change⟧ , there seems to be a “ Goldilocks Effect ”…

**HTML-only text:**

```text
Interestingly
```

**Current-only text:**

```text
Interesingly
```


### Change 25 — HTML-only

**Context:** …a “ Goldilocks Effect ” in cognitive science and learning ⟦change⟧ which people disengage from sequences that are either too predictable…

**HTML-only text:**

```text
in
```


### Change 26 — HTML-only

**Context:** …either too predictable or too surprising. The “ Eighty ⟦change⟧ Five Percent Rule ” rule demonstrates something very similar in…

**HTML-only text:**

```text
-
```


### Change 27 — Current-only

**Context:** …too surprising. The “ Eighty Five Percent Rule ” ⟦change⟧ demonstrates something very similar in which “ there is a…

**Current-only text:**

```text
rule
```


### Change 28 — Replacement

**Context:** …to complex input. All this supports the fact that ⟦change⟧ of the difference between expected cost and actual integration cost…

**HTML-only text:**

```text
the result
```

**Current-only text:**

```text
results
```


### Change 29 — HTML-only

**Context:** …reading a book, produces differences in feeling when harder ⟦change⟧ to integrate passages are read. Because nothing about threat…

**HTML-only text:**

```text
-
```


### Change 30 — HTML-only

**Context:** …a book, produces differences in feeling when harder to ⟦change⟧ integrate passages are read. Because nothing about threat or…

**HTML-only text:**

```text
-
```


### Change 31 — HTML-only

**Context:** …like satisfaction of targets can come into play as well ⟦change⟧ Lastly, I want to touch on the importance of…

**HTML-only text:**

```text
.
```


### Change 32 — Replacement

**Context:** …felt tone, the way chronic stress and bad health ⟦change⟧ it. Put simply, the background felt tone (…

**HTML-only text:**

```text
lower
```

**Current-only text:**

```text
lowers
```


## 2.2 Embodiment and Somatic Stabilization

**Heading:** `Somatics` → `Embodiment and Somatic Stabilization`

### Change 1 — Current-only

**Context:** …ALL bodily tension can be mapped to some type of ⟦change⟧ relationship. (One possible mechanistic account is Michael Edward…

**Current-only text:**

```text
priors -
```


### Change 2 — HTML-only

**Context:** …can be mapped to some type of priors - relationship ⟦change⟧ . (One possible mechanistic account is Michael Edward Johnson’s…

**HTML-only text:**

```text
to priors
```


### Change 3 — Current-only

**Context:** …more definite one, holds it as a form of ⟦change⟧ memory, and, if sustained, latches into a…

**Current-only text:**

```text
medium - term
```


### Change 4 — Replacement

**Context:** …, and, if sustained, latches into a durable ⟦change⟧ that resists updating until the prediction resolves or the latch…

**HTML-only text:**

```text
pattern
```

**Current-only text:**

```text
prior
```


### Change 5 — Current-only

**Context:** …updating until the prediction resolves or the latch is released ⟦change⟧ .) These haptic contractions may match the depth of…

**Current-only text:**

```text
. Through this frame, taṇhā, or craving, is this compression - clench, which is why craving and the somatic contraction that holds it can be understood as the same process expressed through different channels
```


### Change 6 — Replacement

**Context:** …more persistent, and “ physically deeper ” contractions. ⟦change⟧ is trunk - level, which is one reason chronic…

**HTML-only text:**

```text
I predict this can potentially be seen physiologically within the vasocomputation framework. It
```

**Current-only text:**

```text
For example, a deep prior held as tension
```


### Change 7 — Replacement

**Context:** …For example, a deep prior held as tension is ⟦change⟧ - level, which is one reason chronic contractions can…

**HTML-only text:**

```text
known vascular tone has a very large dynamic range as local muscle blood flow can vary ~ 20
```

**Current-only text:**

```text
trunk
```


### Change 8 — Replacement

**Context:** …, a deep prior held as tension is trunk - ⟦change⟧ , which is one reason chronic contractions can be so…

**HTML-only text:**

```text
50x depending on the state you are in, such as coming off of exercise. It might be that priors that are deeply held
```

**Current-only text:**

```text
level
```


### Change 9 — Replacement

**Context:** …prior held as tension is trunk - level, which ⟦change⟧ can be so hard to release: releasing them means…

**HTML-only text:**

```text
might maintain themselves as distributed networks of latches that are more “ sticky ” through smooth muscle contraction and stay alive for years, would restrict local muscle blood flow at a greater level than specific branch - level priors that
```

**Current-only text:**

```text
is one reason chronic contractions
```


### Change 10 — Replacement

**Context:** …level, which is one reason chronic contractions can be ⟦change⟧ to release: releasing them means changing a foundational structure…

**HTML-only text:**

```text
swapped moment -
```

**Current-only text:**

```text
so hard
```


### Change 11 — Replacement

**Context:** …is one reason chronic contractions can be so hard to ⟦change⟧ that experience relies on. Tacit knowledge becomes an obvious…

**HTML-only text:**

```text
- moment. Teleologically, if networks of deep priors did allow for more local blood flow, these associative latches would be more inclined to expand and update, which plays against our own energetic needs as frequently updating these would be costly and not suitable for survival as an organism. Chronic contraction can still have its own costs like collapsing possibilities, but it is still less in magnitude than having to update load - bearing priors in which we would need to update everything
```

**Current-only text:**

```text
release: releasing them means changing a foundational structure
```


### Change 12 — Replacement

**Context:** …release: releasing them means changing a foundational structure that ⟦change⟧ . Tacit knowledge becomes an obvious example here. Deeply…

**HTML-only text:**

```text
is downstream
```

**Current-only text:**

```text
experience relies on
```


### Change 13 — Current-only

**Context:** …that stabilize predictions and make certain actions available.) ⟦change⟧ Some tension can be released within seconds because it is…

**Current-only text:**

```text
{graphic}
```


### Change 14 — Current-only

**Context:** …, making the underlying model more available for updating. ⟦change⟧ As stated earlier, single releases of contraction usually affect…

**Current-only text:**

```text
{check for ai writing below}
```


### Change 15 — Replacement

**Context:** …it’s just pure symbol input. This does not mean ⟦change⟧ manipulation is useless without the embodied layer, since notation…

**HTML-only text:**

```text
notational
```

**Current-only text:**

```text
notional
```


### Change 16 — Replacement

**Context:** …structures that can become embodied later. It’s that notation ⟦change⟧ meaningful to the system through feedback with the representational and…

**HTML-only text:**

```text
becomes
```

**Current-only text:**

```text
become
```


## 2.3 Slack

### Change 1 — Replacement

**Context:** …definition: in section 1. 2 deep priors needed ⟦change⟧ sufficient slack " to update and the energetic triad used…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 2 — Replacement

**Context:** …section 1. 2 deep priors needed " sufficient slack ⟦change⟧ to update and the energetic triad used capacity as a…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 3 — Replacement

**Context:** …process input. The quantity and measurement of slack now ⟦change⟧ to be explored before going further. Put simply,…

**HTML-only text:**

```text
need
```

**Current-only text:**

```text
needs
```


### Change 4 — Replacement

**Context:** …. Put simply, slack is the portion of the ⟦change⟧ capacity not currently committed to holding its active field configuration…

**HTML-only text:**

```text
system’s
```

**Current-only text:**

```text
system's
```


### Change 5 — Replacement

**Context:** …holding its active field configuration in place. Capacity here ⟦change⟧ the system's practical ability to process experience in a given…

**HTML-only text:**

```text
means
```

**Current-only text:**

```text
meaning
```


### Change 6 — Replacement

**Context:** …active field configuration in place. Capacity here meaning the ⟦change⟧ practical ability to process experience in a given moment,…

**HTML-only text:**

```text
system’s
```

**Current-only text:**

```text
system's
```


### Change 7 — Current-only

**Context:** …at the same time instead of closing down on one ⟦change⟧ , which means the system can hold errors as meaningful…

**Current-only text:**

```text
too hard
```


### Change 8 — Replacement

**Context:** …through habitual active inference. Slack is a property of ⟦change⟧ . It is not a fuel tank that simply depletes…

**HTML-only text:**

```text
mind - body system
```

**Current-only text:**

```text
the field, just like felt tone, fit distance, and reachability
```


### Change 9 — Replacement

**Context:** …not a fuel tank that simply depletes with use. ⟦change⟧ Mental energy runs out " (ego depletion) is…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 10 — Replacement

**Context:** …simply depletes with use. " Mental energy runs out ⟦change⟧ (ego depletion) is not a reliable measurement since…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 11 — Replacement

**Context:** …also not simply metabolic budget, or the ability to ⟦change⟧ think harder. " Your brain is already consuming most…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 12 — Replacement

**Context:** …budget, or the ability to " think harder. ⟦change⟧ Your brain is already consuming most of its required energy…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 13 — Replacement

**Context:** …the given context. When the system seems to run ⟦change⟧ out of fuel ", the brain has changed how…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 14 — Replacement

**Context:** …When the system seems to run " out of fuel ⟦change⟧ , the brain has changed how worthwhile an action feels…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 15 — Replacement

**Context:** …simply a fuel tank that holds universally across all contexts ⟦change⟧ it is in relation to the task at hand.…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 16 — Replacement

**Context:** …hand. This mirrors physiological reserve since reserve is the ⟦change⟧ difference between the basal level of a system and its…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 17 — Replacement

**Context:** …of a system and its maximal capacity to respond. ⟦change⟧ Essentially, it is the gap between what your body…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 18 — Replacement

**Context:** …updating. So releasing a deep latch in the body ⟦change⟧ not adding something new to experience, but releasing a…

**HTML-only text:**

```text
is
```

**Current-only text:**

```text
it
```


### Change 19 — Replacement

**Context:** …you need to operate. If actions and interpretations arrive ⟦change⟧ , like having a daily routine, you can operate…

**HTML-only text:**

```text
predictably
```

**Current-only text:**

```text
predictability
```


### Change 20 — Replacement

**Context:** …have to compute for. Chaotic environments that are unpredictable ⟦change⟧ more unused slack to handle the same task. The…

**HTML-only text:**

```text
require
```

**Current-only text:**

```text
requires
```


### Change 21 — Replacement

**Context:** …In section 1. 3, an asymmetry was noted ⟦change⟧ collapsing many - to - one is easier than expanding…

**HTML-only text:**

```text
:
```

**Current-only text:**

```text
that
```


### Change 22 — Replacement

**Context:** …one is easier than expanding one - to - many ⟦change⟧ this is because slack is needed to expand. Low…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 23 — Replacement

**Context:** …low slack is not simply shut off from doing anything ⟦change⟧ the system will simply update fast towards things that it…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 24 — Replacement

**Context:** …it is already oriented towards. Other options become unavailable ⟦change⟧ the only thing that matters is going towards the already…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 25 — Replacement

**Context:** …. Again, slack is not just one simple number ⟦change⟧ it is context dependent. Sleep loss can wreck sustained…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 26 — Replacement

**Context:** …can impair flexibility while improving inhibition. There is no ⟦change⟧ how much slack do I have " number. Instead…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 27 — Replacement

**Context:** …There is no " how much slack do I have ⟦change⟧ number. Instead we might measure it across different dimensions…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 28 — HTML-only

**Context:** …other, like physiology, attentional and working - memory ⟦change⟧ , expected controllability, availability of alternative configurations, environmental…

**HTML-only text:**

```text
capacity
```


### Change 29 — Replacement

**Context:** …and time to consolidate. Interestingly, some dimensions can ⟦change⟧ substitute " for one another, like external notation replacing…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 30 — Replacement

**Context:** …to consolidate. Interestingly, some dimensions can " substitute ⟦change⟧ for one another, like external notation replacing working memory…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 31 — Replacement

**Context:** …a new pattern can stabilize. Simply saying we need ⟦change⟧ more slack " is too vague, what matters is…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 32 — Replacement

**Context:** …can stabilize. Simply saying we need " more slack ⟦change⟧ is too vague, what matters is the interaction type…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 33 — Replacement

**Context:** …saying we need " more slack " is too vague ⟦change⟧ what matters is the interaction type between old and new…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 34 — Replacement

**Context:** …might not anticipate, while similar paths tend to fail ⟦change⟧ the same reason. If there is a novel disturbance…

**HTML-only text:**

```text
for
```

**Current-only text:**

```text
centering around
```


### Change 35 — Replacement

**Context:** …have not planned for, one reliable path may be ⟦change⟧ blocked " and capacity will be withheld. Slack can…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 36 — Replacement

**Context:** …planned for, one reliable path may be " blocked ⟦change⟧ and capacity will be withheld. Slack can become needlessly…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 37 — Replacement

**Context:** …to keep predicting and solving for uncertainty, so when ⟦change⟧ extra " openness appears, the system may spend it…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 38 — Replacement

**Context:** …predicting and solving for uncertainty, so when " extra ⟦change⟧ openness appears, the system may spend it by collapsing…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 39 — Replacement

**Context:** …later, has a job here: it lets several ⟦change⟧ open without collapse or a rush to resolve them.…

**HTML-only text:**

```text
possibilities remain
```

**Current-only text:**

```text
possibilties remian
```


### Change 40 — Replacement

**Context:** …be spent wisely instead of being instantly consumed by the ⟦change⟧ optimization function. To ensure slack does not become a…

**HTML-only text:**

```text
system’s
```

**Current-only text:**

```text
system's
```


### Change 41 — Current-only

**Context:** …of being instantly consumed by the system's optimization function. ⟦change⟧ …

**Current-only text:**

```text
To ensure slack does not become a " catch all " explanation of any failure to change, I think it is important to establish some practical proxy measurements of how much slack someone currently has. Because slack is a profile instead of a singular scalar, we cannot assign one proxy to its amount. So there are two main questions I see as being useful in assessing slack in a system: does the system become captured by a certain disturbance, and how quickly does the system recover once it is captured? First, I must answer what it means for a system to experience a disturbance at all and what it means to be captured. For a disturbance, I define this as any input that provides the system with a perturbation that " brings it out of " its current attractor state and settles into a new another attractor. This scales with the basin the system sits in: if the basin is wide and deep, the disturbance must be a great deal of shock to bring it out of that basin, while a basin that is shallow and narrow only requires a small disturbance to be brought out of. For the system to then be captured after such a disturbance, it must find itself in a new attractor and basin, rather than settling back in its old one. For example, I can be calm and collected when a stressing moment occurs, become temporality stressed, but return to being calm and collected after, which would not count here as being captured. I would have to remain stressed for an extended period of time as my new " default " state to experience a true disturbance. Now, once the system is captured in a new state, to recover, the system must return to either its old attractor, or a new " higher - order " one. Higher - order means an attractor configuration that can integrate a wider range of competing input without collapsing into a narrower state. This recovery of course takes time, and the amount of time this takes can be a useful proxy, not an exact indicator, as to how much slack the system currently holds, which scales with the amount of disturbance. The amount of disturbance, in my view, can be measured by how deep of priors in the system's dependency tree are " shaken. " As in shaken, I mean the input causes enough prediction error as to feel destabilizing so the system clamps down on singular interpretations and actions. This of course means input's affect on the system is always relative to that system's structure, not inherent to the input itself. So a change in your plans for a day would probably not cause that much of a disturbance, thus less slack is needed to handle it, while a car crash that " loosens " and destabilizes deep priors, like those pertaining to felt safety, needs much more slack to handle as to not be swayed into a new attractor state. And here, time to recover tells us about slack in relation to the specific disturbance. So an input that is seemingly small in its level of impact, like a change in plans, would typically require less time to recover from, and if it does require lots of time to recover from, it would indicate the system was not holding much slack in the first place pertaining to the relative channel the input affected. Meaning, one could have lots of slack in terms of cognitive flexibility and time to process input, but their physiology could be taxed, such as having a chronic illness, so input that affects the physiology channel would cause a disturbance of high (er) magnitude. This is not to say all slow recovery is bad; some is adaptive such as adjusting to harsh conditions of an experience like a car crash. But it does become " bad " when this recovery is used to move towards lower - order attractor states that sit in deep basins as to cut off certain experiences, thus reducing slack in general.
```


## 2.4 Language

### Change 1 — Current-only

**Context:** …“ discrete patterns of muscle tension ” that constrict certain ⟦change⟧ predictions within a given context, and if language is…

**Current-only text:**

```text
priors /
```


### Change 2 — Current-only

**Context:** …is a symbolic projection of felt senses and internal representations ⟦change⟧ , then certain stances bring about different linguistic patterns.…

**Current-only text:**

```text
(simplified)
```


### Change 3 — Replacement

**Context:** …constraints. A professional environment “ flips on ” certain ⟦change⟧ , making things like cursing unreachable, or at least…

**HTML-only text:**

```text
latches
```

**Current-only text:**

```text
patterns of tension
```


### Change 4 — Replacement

**Context:** …, held in place by patterns of tension. Since ⟦change⟧ models the nervous system as an FPGA (a programmable…

**HTML-only text:**

```text
Mike
```

**Current-only text:**

```text
Michael Johnson (creator of the vasocomputation and " stance " ideas)
```


### Change 5 — Current-only

**Context:** …constrained by your vasocomputation “ stance ” is valuable. ⟦change⟧ …

**Current-only text:**

```text
There is actually quite interesting research on second languages, which often finds that people who speak a second language can be more vulnerable in their L2 than in their L1. This might be because the first language's words were acquired in high - arousal settings, so each one indexes into more unpleasant addresses of tension patterns. The second language was likely wired in emotionally neutral or positive contexts, so it maps to a stance that isn't as unpleasant. In someone's L1, they would need to " break out of " their current stance to utter what their L2 allows in most stances; in L2, you " step out of the tension pattern " simply by changing which address - space you speak from. Caldwell - Harris et al. found that interviewees preferred English for emotional expression because its social environments felt less restrictive, noting that " respondents nonetheless preferred to express their emotions in English, citing more relaxed social constraints in English - speaking environments. " It is plausible to me that Chinese culture would clench more around endearments (e. g., " thank you, " " I miss you, " " I love you "), making that vulnerability harder to reach in a stance dealing with Mandarin, while English would produce " looser " stances.
```


## 3 Learning and Expertise

### Change 1 — Current-only

**Current-only text:**

```text
[PLACEHOLDER: Add section introduction]
```


## 3.1 Metaphors

### Change 1 — HTML-only

**Context:** …back to mathematics to demonstrate metaphor’s importance for understanding, ⟦change⟧ mathematics is a domain in which many of its objects…

**HTML-only text:**

```text
we see that
```


## 3.2 Intuition {check whole for ai}

No visible-text differences after normalization.

## 3.3 Mathematics

No visible-text differences after normalization.

## 3.4 Resonance & Friction

### Change 1 — Replacement

**Context:** …unfamiliar idea may produce friction, while a false but ⟦change⟧ one may produce resonance. Similarly, an incorrect representation…

**HTML-only text:**

```text
conditioned
```

**Current-only text:**

```text
condioned
```


### Change 2 — Replacement

**Context:** …fluent and easy to integrate because it fits a field ⟦change⟧ , but it produces resonance only when it integrates more…

**HTML-only text:**

```text
configuration
```

**Current-only text:**

```text
confirugation
```


### Change 3 — Replacement

**Context:** …these things reinforce a loop of integration and action that ⟦change⟧ the field in the direction of where precision is steered…

**HTML-only text:**

```text
retunes
```

**Current-only text:**

```text
retune
```


## 3.5 The Loop of Refinement

### Change 1 — HTML-only

**Context:** …again and again dive beneath the water of doubt. ⟦change⟧ Ludwig Wittgenstein, Remarks on Frazer’s Golden Bough We have…

**HTML-only text:**

```text
—
```


### Change 2 — Replacement

**Context:** …Fit is how well a probe satisfies the current field ⟦change⟧ coherence is how well your model holds together internally,…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 3 — Replacement

**Context:** …, coherence is how well your model holds together internally ⟦change⟧ and truth is correspondence with reality. Accurate correspondence means…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 4 — Replacement

**Context:** …. However, the loop also needs intuition to run ⟦change⟧ it is a contingent relationship. Feeling resonance or friction…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 5 — Replacement

**Context:** …loops also run in parallel rather than only one being ⟦change⟧ individually. You can be changing a representation internally by…

**HTML-only text:**

```text
run
```

**Current-only text:**

```text
ran at
```


### Change 6 — Current-only

**Context:** …to the more dense and mostly automatic version that exists ⟦change⟧ “ in the real world. ” Still, understanding…

**Current-only text:**

```text
'
```


### Change 7 — Replacement

**Context:** …describe your current embodied sense of what you know. ⟦change⟧ Gendlin’s findings at play. Internal or external probe A…

**HTML-only text:**

```text
These are
```

**Current-only text:**

```text
This is
```


### Change 8 — Current-only

**Context:** …compresses the felt sense of understanding into notation, like ⟦change⟧ writing about it. To present a probe is to…

**Current-only text:**

```text
drawing a diagram or
```


### Change 9 — Current-only

**Context:** …while notation can do it externally through a fixed sentence ⟦change⟧ . Thisdell’s deobjectification and epistemic testing are not identical operations…

**Current-only text:**

```text
or diagram
```


### Change 10 — HTML-only

**Context:** …deobjectification and epistemic testing are not identical operations since his ⟦change⟧ concerns contemplative action which is geared towards phenomenological changes,…

**HTML-only text:**

```text
work
```


### Change 11 — Current-only

**Context:** …additional limit on the internal loop because, in simple ⟦change⟧ tasks, we can typically hold only around three or…

**Current-only text:**

```text
unchunked
```


### Change 12 — Replacement

**Context:** …hold only around three or four items or chunks in ⟦change⟧ attention at once. This limitation is one reason a…

**HTML-only text:**

```text
direct
```

**Current-only text:**

```text
focal
```


### Change 13 — Replacement

**Context:** …or chunks in focal attention at once. This limitation ⟦change⟧ a vague felt sense of understanding can be misleading:…

**HTML-only text:**

```text
spells out that the
```

**Current-only text:**

```text
is one reason
```


### Change 14 — Replacement

**Context:** …reason a vague felt sense of understanding can be misleading ⟦change⟧ the system may be holding only a highly compressed outline…

**HTML-only text:**

```text
because
```

**Current-only text:**

```text
:
```


### Change 15 — Current-only

**Context:** …the system may be holding only a highly compressed outline ⟦change⟧ than the whole structure. To work around this constraint…

**Current-only text:**

```text
rather
```


### Change 16 — Replacement

**Context:** …may be holding only a highly compressed outline rather than ⟦change⟧ . To work around this constraint, we can offload…

**HTML-only text:**

```text
can specify into inaccurate working parts
```

**Current-only text:**

```text
the whole structure
```


### Change 17 — Current-only

**Context:** …work around this constraint, we can offload items into ⟦change⟧ notation or develop organized chunks in long - term memory…

**Current-only text:**

```text
external
```


### Change 18 — Replacement

**Context:** …constraint, we can offload items into external notation or ⟦change⟧ organized chunks in long - term memory. As Justin…

**HTML-only text:**

```text
condition
```

**Current-only text:**

```text
develop
```


### Change 19 — Current-only

**Context:** …offload items into external notation or develop organized chunks in ⟦change⟧ memory. As Justin Skycack puts it, “ Whereas…

**Current-only text:**

```text
long - term
```


### Change 20 — Replacement

**Context:** …organized chunks in long - term memory. As Justin ⟦change⟧ puts it, “ Whereas a beginner perceives individual isolated…

**HTML-only text:**

```text
Skycak
```

**Current-only text:**

```text
Skycack
```


### Change 21 — HTML-only

**Context:** …long - term memory. As Justin Skycack puts it ⟦change⟧ , “ Whereas a beginner perceives individual isolated pieces of…

**HTML-only text:**

```text
in “ Advice on Upskilling ”
```


### Change 22 — Replacement

**Context:** …and expertise therefore extend the loop in complementary ways by ⟦change⟧ structure into the environment, while the other compresses it…

**HTML-only text:**

```text
using
```

**Current-only text:**

```text
adding
```


### Change 23 — Replacement

**Context:** …therefore extend the loop in complementary ways by adding structure ⟦change⟧ the environment, while the other compresses it into retrievable…

**HTML-only text:**

```text
and compression through
```

**Current-only text:**

```text
into
```


### Change 24 — Current-only

**Context:** …loop in complementary ways by adding structure into the environment ⟦change⟧ . Test the probe: resonance, friction, or…

**Current-only text:**

```text
, while the other compresses it into retrievable internal structure
```


### Change 25 — Current-only

**Context:** …compresses it into retrievable internal structure. Test the probe ⟦change⟧ This part covers how the field responds when the probe…

**Current-only text:**

```text
: resonance, friction, or baseline
```


### Change 26 — HTML-only

**Context:** …A baseline response may mean that the probe is unsurprising ⟦change⟧ which does not produce a noticeable spike. There are…

**HTML-only text:**

```text
,
```


### Change 27 — HTML-only

**Context:** …the resonant side. If the response stays at baseline ⟦change⟧ a new question comes to light that asks was the…

**HTML-only text:**

```text
,
```


### Change 28 — Replacement

**Context:** …at baseline a new question comes to light that asks ⟦change⟧ the probe already expected or was it too weak to…

**HTML-only text:**

```text
: Was
```

**Current-only text:**

```text
was
```


### Change 29 — Replacement

**Context:** …from an equally shapeless gangue of false or inadequate ideas ⟦change⟧ it will gradually emerge from the limbo of the misunderstood…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 30 — HTML-only

**Context:** …pertinent, to surround them more and more closely. ⟦change⟧ Alexander Grothendieck, Récoltes et Semailles…

**HTML-only text:**

```text
—
```


## 3.6 Real-making vs Truth-making

### Change 1 — Replacement

**Context:** …In this loop, there ⟦change⟧ two main orientations that it can take, which I…

**HTML-only text:**

```text
exist
```

**Current-only text:**

```text
exists
```


### Change 2 — Replacement

**Context:** …the open and closed versions of the loop can be ⟦change⟧ parallel, these two orientations of either version can be…

**HTML-only text:**

```text
run in
```

**Current-only text:**

```text
ran at
```


### Change 3 — Replacement

**Context:** …parallel, these two orientations of either version can be ⟦change⟧ simultaneously to reinforce each other. Real - making,…

**HTML-only text:**

```text
run
```

**Current-only text:**

```text
ran
```


### Change 4 — Current-only

**Context:** …it a more reachable field configuration from a global point ⟦change⟧ of - view. It is making a thing more…

**Current-only text:**

```text
-
```


### Change 5 — Current-only

**Context:** …more reachable field configuration from a global point - of ⟦change⟧ view. It is making a thing more “ real…

**Current-only text:**

```text
-
```


### Change 6 — Replacement

**Context:** …a present configuration of the field. This process is ⟦change⟧ correlated with closed loops because what is being repeatedly tested…

**HTML-only text:**

```text
more so
```

**Current-only text:**

```text
moreso
```


### Change 7 — Replacement

**Context:** …course it is possible we can detect logical errors and ⟦change⟧ in our models, but this is much harder to…

**HTML-only text:**

```text
misnomers
```

**Current-only text:**

```text
misonerms
```


### Change 8 — HTML-only

**Context:** …our models, but this is much harder to do ⟦change⟧ closed because it is relying on your current field configuration…

**HTML-only text:**

```text
in a
```


### Change 9 — HTML-only

**Context:** …models, but this is much harder to do closed ⟦change⟧ because it is relying on your current field configuration to…

**HTML-only text:**

```text
loop
```


### Change 10 — Replacement

**Context:** …attached to it that is hard to let go of ⟦change⟧ this of course can make things seem a lot more…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 11 — Replacement

**Context:** …, other orthogonal feelings can real - make a thing ⟦change⟧ like fear and authority so it should be made clear…

**HTML-only text:**

```text
too,
```

**Current-only text:**

```text
to
```


### Change 12 — HTML-only

**Context:** …real - make a thing to like fear and authority ⟦change⟧ so it should be made clear resonance is not necessarily…

**HTML-only text:**

```text
,
```


### Change 13 — Replacement

**Context:** …not necessarily positive felt tone, so any mechanism that ⟦change⟧ to those two multipliers is what matters here. Truth…

**HTML-only text:**

```text
contributes
```

**Current-only text:**

```text
contribute
```


### Change 14 — HTML-only

**Context:** …two multipliers is what matters here. Truth - making ⟦change⟧ on the other hand is the process of testing and…

**HTML-only text:**

```text
,
```


### Change 15 — HTML-only

**Context:** …matters here. Truth - making on the other hand ⟦change⟧ is the process of testing and updating a model so…

**HTML-only text:**

```text
,
```


### Change 16 — HTML-only

**Context:** …other people, that push back against the current field ⟦change⟧ so naturally the process is closely correlated with open loops…

**HTML-only text:**

```text
,
```


### Change 17 — HTML-only

**Context:** …debaters are indeed truth - making within the ontological constraints ⟦change⟧ the frame they are operating in, and because we…

**HTML-only text:**

```text
of
```


### Change 18 — Replacement

**Context:** …The loop does not move towards truth on its own ⟦change⟧ it just modulates whatever its targets and feedback environment select…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 19 — Current-only

**Context:** …be useful before truth - making because an idea may ⟦change⟧ initially be too vague or fragile to test. If…

**Current-only text:**

```text
be
```


### Change 20 — Replacement

**Context:** …us instantly discarding it when we encounter friction. Michael ⟦change⟧ speaks of something similar by using the concept of “…

**HTML-only text:**

```text
Nielsen
```

**Current-only text:**

```text
Nielson
```


### Change 21 — Replacement

**Context:** …to find out if there’s something really there. ” ⟦change⟧ set of stories are there precisely to real - make…

**HTML-only text:**

```text
That
```

**Current-only text:**

```text
Those
```


### Change 22 — Replacement

**Context:** …there’s something really there. ” Those set of stories ⟦change⟧ there precisely to real - make the thing so it…

**HTML-only text:**

```text
is
```

**Current-only text:**

```text
are
```


### Change 23 — Replacement

**Context:** …here occurs when the protective process seals the cluster off ⟦change⟧ outside feedback due to sealing itself off. Crucially,…

**HTML-only text:**

```text
from
```

**Current-only text:**

```text
to
```


### Change 24 — Current-only

**Context:** …becomes an active priority within the system. This is ⟦change⟧ why I have believed that learning and “ reach towards…

**Current-only text:**

```text
long since
```


### Change 25 — HTML-only

**Context:** …the system. This is long since why I have ⟦change⟧ believed that learning and “ reach towards ” truth is…

**HTML-only text:**

```text
long
```


### Change 26 — Replacement

**Context:** …cannot control or plan for costs slack, since it ⟦change⟧ the system's ability to commit or not commit to certain…

**HTML-only text:**

```text
affects
```

**Current-only text:**

```text
effects
```


### Change 27 — Replacement

**Context:** …or plan for costs slack, since it effects the ⟦change⟧ ability to commit or not commit to certain configurations.…

**HTML-only text:**

```text
system’s
```

**Current-only text:**

```text
system's
```


## 3.7 Training Data

### Change 1 — Replacement

**Context:** …or repeatedly engage with in ways that shape perception. ⟦change⟧ , which determines what resonates, carries a compressed history…

**HTML-only text:**

```text
We must target our field’s substrate of structure here
```

**Current-only text:**

```text
Your field
```


### Change 2 — Replacement

**Context:** …with in ways that shape perception. Your field, ⟦change⟧ compressed history of what you have been trained on,…

**HTML-only text:**

```text
as it contains our “
```

**Current-only text:**

```text
which determines what resonates, carries a
```


### Change 3 — HTML-only

**Context:** …, which determines what resonates, carries a compressed history ⟦change⟧ of what you have been trained on, in a…

**HTML-only text:**

```text
” and the field is the thing that is instantiated from this. All
```


### Change 4 — HTML-only

**Context:** …which determines what resonates, carries a compressed history of ⟦change⟧ what you have been trained on, in a sense…

**HTML-only text:**

```text
this ultimately contributes to
```


### Change 5 — Replacement

**Context:** …determines what resonates, carries a compressed history of what ⟦change⟧ . Because of this, the quality and diversity of…

**HTML-only text:**

```text
resonate and what causes friction
```

**Current-only text:**

```text
you have been trained on, in a sense
```


### Change 6 — Current-only

**Context:** …stranger on the internet saying the same thing. And ⟦change⟧ a fact coming from someone you respect and admire will…

**Current-only text:**

```text
,
```


### Change 7 — Replacement

**Context:** …system than the same fact coming from someone you find ⟦change⟧ . Importantly, training data matters not only because it…

**HTML-only text:**

```text
untrustworthy
```

**Current-only text:**

```text
un - trustworthy
```


### Change 8 — Replacement

**Context:** …My answer is that existing chunks and properties can be ⟦change⟧ while the field makes a new thing out of the…

**HTML-only text:**

```text
reorganized
```

**Current-only text:**

```text
reoganized
```


### Change 9 — Replacement

**Context:** …thing out of the configuration, even if in full ⟦change⟧ has never appeared in training data before. We may…

**HTML-only text:**

```text
it
```

**Current-only text:**

```text
is
```


### Change 10 — Current-only

**Context:** …can reduce this kind of overfitting by making the field ⟦change⟧ distinguish what generalizes from what works only under a narrow…

**Current-only text:**

```text
to
```


### Change 11 — HTML-only

**Context:** …become internally coherent and highly resonant while remaining poorly calibrated ⟦change⟧ the training data it has used never forces wise revision…

**HTML-only text:**

```text
because
```


## 4 Emergence, Thresholds, and Creativity

### Change 1 — Current-only

**Current-only text:**

```text
[PLACEHOLDER: Add section introduction]
```


## 4.1 Emergence and Failed Gestalts

**Heading:** `Conditions of Emergence` → `Emergence and Failed Gestalts`

### Change 1 — Replacement

**Context:** …comes from the field attempting to maturate recognizable lower level ⟦change⟧ into higher order things and failing. The lower level…

**HTML-only text:**

```text
qualities
```

**Current-only text:**

```text
qualityies
```


### Change 2 — HTML-only

**Context:** …possess chunks that allow all objects in the image to ⟦change⟧ correctly process if the organization fits neatly. If the…

**HTML-only text:**

```text
be
```


### Change 3 — Replacement

**Context:** …chunks that allow all objects in the image to correctly ⟦change⟧ if the organization fits neatly. If the image were…

**HTML-only text:**

```text
processed
```

**Current-only text:**

```text
process
```


### Change 4 — Replacement

**Context:** …An emotional experience can contain recognizable sensations like a fast ⟦change⟧ while the person remains unable to interpret what they mean…

**HTML-only text:**

```text
heartbeat
```

**Current-only text:**

```text
heart beat
```


### Change 5 — Current-only

**Context:** …ability to “ morph ” the relations of the features ⟦change⟧ and the features themselves so a whole gestalt can be…

**Current-only text:**

```text
,
```


### Change 6 — HTML-only

**Context:** …so a whole gestalt can be recognized. For instance ⟦change⟧ in a sentence that has recognizable words but produces friction…

**HTML-only text:**

```text
,
```


## 4.2 Creativity and Structural Thresholds

**Heading:** `Structural Thresholds in Search Spaces` → `Creativity and Structural Thresholds`

### Change 1 — Replacement

**Context:** …Bear in mind this is descriptive, meaning labels like ⟦change⟧ enough " and " sufficiently stable " are only knowable…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 2 — Replacement

**Context:** …mind this is descriptive, meaning labels like " enough ⟦change⟧ and " sufficiently stable " are only knowable after the…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 3 — Replacement

**Context:** …is descriptive, meaning labels like " enough " and ⟦change⟧ sufficiently stable " are only knowable after the gestalt emerges…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 4 — Replacement

**Context:** …meaning labels like " enough " and " sufficiently stable ⟦change⟧ are only knowable after the gestalt emerges. I’ve long…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 5 — Current-only

**Context:** …emerges. I’ve long since been fascinated by this tweet ⟦change⟧ because it displays something very useful: the way that…

**Current-only text:**

```text
by
```


### Change 6 — Replacement

**Context:** …, and then totally obvious everyone’s doing it. The ⟦change⟧ jump part here in particular makes sense in the light…

**HTML-only text:**

```text
discontinuous
```

**Current-only text:**

```text
discontinous
```


### Change 7 — Replacement

**Context:** …only operate from the chunks your input history and field ⟦change⟧ learned, so every new idea is a novel manipulation…

**HTML-only text:**

```text
have
```

**Current-only text:**

```text
has
```


### Change 8 — Replacement

**Context:** …gestalt to become reachable from the creator’s current field. ⟦change⟧ has modeled something related called ‘ inferential distance, ’…

**HTML-only text:**

```text
LessWrong
```

**Current-only text:**

```text
Lesswrong
```


### Change 9 — Replacement

**Context:** …rather than creation. This also emphasizes the importance of ⟦change⟧ , since certain chunks are literally needed before learning and…

**HTML-only text:**

```text
explicit prerequisite maps
```

**Current-only text:**

```text
knowledge graphs and mapping out prerequisites
```


### Change 10 — Replacement

**Context:** …the state of the new thing, the new thing ⟦change⟧ be unavailable to access because the necessary priors have not…

**HTML-only text:**

```text
may
```

**Current-only text:**

```text
maybe
```


### Change 11 — Replacement

**Context:** …knowledge and action. At the start, the path ⟦change⟧ to the endpoint is genuinely outside your representable space.…

**HTML-only text:**

```text
or paths
```

**Current-only text:**

```text
(s)
```


### Change 12 — Replacement

**Context:** …start, the path (s) to the endpoint ⟦change⟧ genuinely outside your representable space. You reach the “…

**HTML-only text:**

```text
are
```

**Current-only text:**

```text
is
```


### Change 13 — Replacement

**Context:** …creating. Moderate, well - chosen constraints boost creativity ⟦change⟧ too few cause paralysis with infinite possibility, and too…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 14 — Replacement

**Context:** …that underlies learning and positive differences: too few constraints ⟦change⟧ the search space impossibly large, so there is no…

**HTML-only text:**

```text
leave
```

**Current-only text:**

```text
leaves
```


### Change 15 — Replacement

**Context:** …into a gestalt (paralysis), while too many ⟦change⟧ the space so much that nothing can be combined into…

**HTML-only text:**

```text
minimize
```

**Current-only text:**

```text
minimizes
```


### Change 16 — Replacement

**Context:** …that can be used and organized around, the field’s ⟦change⟧ like constraintsm organize the search space, slack and play…

**HTML-only text:**

```text
properties,
```

**Current-only text:**

```text
propertiesm
```


### Change 17 — Replacement

**Context:** …be used and organized around, the field’s propertiesm like ⟦change⟧ organize the search space, slack and play keep alternative…

**HTML-only text:**

```text
constraints,
```

**Current-only text:**

```text
constraintsm
```


## 5 Conflict, Control, and Suffering

**Heading:** `Emotions, Conflict & Suffering` → `Conflict, Control, and Suffering`

### Change 1 — Current-only

**Current-only text:**

```text
[PLACEHOLDER: Add section introduction]
```


## 5.1 Emotions

### Change 1 — Replacement

**Context:** … ⟦change⟧ We feel sorry because we cry, angry because we…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 2 — Replacement

**Context:** …angry because we strike, afraid because we tremble. ⟦change⟧ – William James, What Is an Emotion? What…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 3 — Replacement

**Context:** …What Is an Emotion? What is an emotion? ⟦change⟧ been attempted to be answered a lot, along with…

**HTML-only text:**

```text
There have
```

**Current-only text:**

```text
This question has
```


### Change 4 — Current-only

**Context:** …? What is an emotion? This question has been ⟦change⟧ a lot, along with their load - bearing downstream…

**Current-only text:**

```text
attempted to be answered
```


### Change 5 — Replacement

**Context:** …This question has been attempted to be answered a lot ⟦change⟧ load - bearing downstream effects on our mind - body…

**HTML-only text:**

```text
of attempts to answer this question and address emotions ’
```

**Current-only text:**

```text
, along with their
```


### Change 6 — Replacement

**Context:** …bearing downstream effects on our mind - body system. ⟦change⟧ like to offer an account of emotions that works within…

**HTML-only text:**

```text
I’d
```

**Current-only text:**

```text
I'd
```


### Change 7 — Replacement

**Context:** …Truthfully, any attempt to name an emotion or define ⟦change⟧ is a failure due to moving up the compression gradient…

**HTML-only text:**

```text
it
```

**Current-only text:**

```text
them
```


### Change 8 — Replacement

**Context:** …structure. The purpose of emotions naturally arises out of ⟦change⟧ definition and placement in this framework. It seems as…

**HTML-only text:**

```text
their
```

**Current-only text:**

```text
its
```


### Change 9 — Replacement

**Context:** …this framework. It seems as though emotion concepts are ⟦change⟧ chunks that organize bodily and situational context which would normally…

**HTML-only text:**

```text
reusable
```

**Current-only text:**

```text
resuable
```


### Change 10 — Replacement

**Context:** …not just a stored object that gets released or expressed ⟦change⟧ it is more like a context - sensitive organizational tool…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 11 — Replacement

**Context:** …perceived outcomes and how they feed back into mood. ⟦change⟧ the field contains many properties and mechanisms at play,…

**HTML-only text:**

```text
Given that
```

**Current-only text:**

```text
Taken as
```


### Change 12 — Replacement

**Context:** …context, and learned concepts from others, it is ⟦change⟧ bodily signals are not simply read and then labeled as…

**HTML-only text:**

```text
clear that
```

**Current-only text:**

```text
clearly
```


### Change 13 — HTML-only

**Context:** …do next, all of these different things brew together ⟦change⟧ which pulls the system in many different directions. Ultimately…

**HTML-only text:**

```text
,
```


### Change 14 — Replacement

**Context:** …it does not have to process each component of fear ⟦change⟧ they show up together. Crucially, instances of fear…

**HTML-only text:**

```text
every time
```

**Current-only text:**

```text
everytime
```


### Change 15 — Replacement

**Context:** …together as one gestalt, which can result in the ⟦change⟧ misclassification " of future instances due to wide pruning.…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 16 — Replacement

**Context:** …one gestalt, which can result in the " misclassification ⟦change⟧ of future instances due to wide pruning. And crucially…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 17 — Replacement

**Context:** …than being rigid, boundaries between emotions are not discrete ⟦change⟧ they are fuzzy. This means that categorical emotions lie…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 18 — Replacement

**Context:** …enough to become a clear structuring gestalt. This means ⟦change⟧ failed " emotional gestalts can exist, or ambiguous components…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 19 — Replacement

**Context:** …become a clear structuring gestalt. This means " failed ⟦change⟧ emotional gestalts can exist, or ambiguous components that don't…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 20 — Replacement

**Context:** …" emotional gestalts can exist, or ambiguous components that ⟦change⟧ cohere into a whole. This can be seen at…

**HTML-only text:**

```text
don’t
```

**Current-only text:**

```text
don't
```


### Change 21 — Replacement

**Context:** …things. Not every emotion has just one target built ⟦change⟧ its known configuration, though often times a singular target…

**HTML-only text:**

```text
into
```

**Current-only text:**

```text
in to
```


### Change 22 — Replacement

**Context:** …need for safety known through its action policy such as ⟦change⟧ I need to get away from this situation " in…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 23 — Replacement

**Context:** …as " I need to get away from this situation ⟦change⟧ in episodes of fear. Emotions can be seen as…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 24 — Replacement

**Context:** …Emotions can be seen as a sort of modulator that ⟦change⟧ and connect differing targets when it comes to current or…

**HTML-only text:**

```text
relates
```

**Current-only text:**

```text
relate
```


### Change 25 — Replacement

**Context:** …be seen as a sort of modulator that relate and ⟦change⟧ differing targets when it comes to current or predicted future…

**HTML-only text:**

```text
connects
```

**Current-only text:**

```text
connect
```


### Change 26 — Current-only

**Context:** …it comes to current or predicted future input. They ⟦change⟧ organize the field in relation to these targets in such…

**Current-only text:**

```text
they
```


### Change 27 — Replacement

**Context:** …in relation to these targets in such a way that ⟦change⟧ to preferred states, needs, and capacity, like…

**HTML-only text:**

```text
relates
```

**Current-only text:**

```text
relate
```


### Change 28 — HTML-only

**Context:** …how targets of anxiety might get someone to move to ⟦change⟧ state of avoidance to ensure the system is not overwhelmed…

**HTML-only text:**

```text
a
```


### Change 29 — Current-only

**Context:** …producing the emotion itself; they cannot be decoupled. ⟦change⟧ As stated in the field (?) section,…

**Current-only text:**

```text
This is where the well known graphic about mapping emotions onto the body comes into play:
```


### Change 30 — Current-only

**Context:** …body comes into play: As stated in the field ⟦change⟧ section, the dependency tree says most deep priors are…

**Current-only text:**

```text
(?)
```


### Change 31 — Current-only

**Context:** …that determine perception and action. When it comes to ⟦change⟧ emotional category itself, these are things further out on…

**Current-only text:**

```text
an
```


### Change 32 — Replacement

**Context:** …perception and action. When it comes to an emotional ⟦change⟧ , these are things further out on the branches of…

**HTML-only text:**

```text
categories themselves
```

**Current-only text:**

```text
category itself
```


### Change 33 — HTML-only

**Context:** …it very clearly stays at the top of our body ⟦change⟧ as to activate readiness and the needed actions associated with…

**HTML-only text:**

```text
so
```


### Change 34 — HTML-only

**Context:** …important in determining what exactly we do with these high ⟦change⟧ level, malleable organizations. It is also important to…

**HTML-only text:**

```text
-
```


### Change 35 — Current-only

**Context:** …more readily distinguish between states rather than compressing nuanced ones ⟦change⟧ . It turns out that increasing knowledge can reduce unhappiness…

**Current-only text:**

```text
into
```


### Change 36 — HTML-only

**Context:** …. Sensory evidence that is a result of the high ⟦change⟧ level organization, such as posture and interoceptive signals,…

**HTML-only text:**

```text
-
```


### Change 37 — Replacement

**Context:** …level organization, such as posture and interoceptive signals, ⟦change⟧ a feedback loop in which the system confirms the existing…

**HTML-only text:**

```text
creates
```

**Current-only text:**

```text
creating
```


### Change 38 — Replacement

**Context:** …in which the system confirms the existing organization to be ⟦change⟧ correct " in its way of describing experience. This…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 39 — Replacement

**Context:** …the system confirms the existing organization to be " correct ⟦change⟧ in its way of describing experience. This is why…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 40 — Replacement

**Context:** …responses become available so quickly and feel like how things ⟦change⟧ just are " rather than being actively constructed. These…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 41 — Replacement

**Context:** …so quickly and feel like how things " just are ⟦change⟧ rather than being actively constructed. These are conditioned patterns…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 42 — Replacement

**Context:** …other knowledge, and these patterns can differ in whether ⟦change⟧ held with rigidity or making a wide range of policies…

**HTML-only text:**

```text
they are
```

**Current-only text:**

```text
it is
```


### Change 43 — Replacement

**Context:** …can differ in whether it is held with rigidity or ⟦change⟧ a wide range of policies available. It's important to…

**HTML-only text:**

```text
make
```

**Current-only text:**

```text
making
```


### Change 44 — Replacement

**Context:** …rigidity or making a wide range of policies available. ⟦change⟧ important to mention contraction here, in the phenomenological sense…

**HTML-only text:**

```text
It’s
```

**Current-only text:**

```text
It's
```


### Change 45 — HTML-only

**Context:** …wide range of policies available. It's important to mention ⟦change⟧ contraction here, in the phenomenological sense of " closing…

**HTML-only text:**

```text
that
```


### Change 46 — Current-only

**Context:** …range of policies available. It's important to mention contraction ⟦change⟧ , in the phenomenological sense of " closing down "…

**Current-only text:**

```text
here
```


### Change 47 — Replacement

**Context:** …to mention contraction here, in the phenomenological sense of ⟦change⟧ closing down ", can play many roles such as…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 48 — Replacement

**Context:** …here, in the phenomenological sense of " closing down ⟦change⟧ , can play many roles such as closing off available…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 49 — Replacement

**Context:** …it might be tempting to label grief as purely contractive ⟦change⟧ it is a thing held in the body, but…

**HTML-only text:**

```text
since
```

**Current-only text:**

```text
sense
```


### Change 50 — Replacement

**Context:** …and the emotion moves through the system without blockage. ⟦change⟧ going on with mixed emotions? It seems as though…

**HTML-only text:**

```text
What’s
```

**Current-only text:**

```text
What's
```


### Change 51 — Replacement

**Context:** …emotions? It seems as though mixed emotions are those ⟦change⟧ the high - level structure produces many mixed chunks,…

**HTML-only text:**

```text
in which
```

**Current-only text:**

```text
that
```


### Change 52 — Replacement

**Context:** …but violation of targets in relation to identity and friendship ⟦change⟧ both are valid and result in seemingly contradicting interpretations.…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 53 — Replacement

**Context:** …of the compression gradient, expression itself can be an ⟦change⟧ inaccurate " (from the outside) indicator as to…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 54 — Replacement

**Context:** …compression gradient, expression itself can be an " inaccurate ⟦change⟧ (from the outside) indicator as to what the…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 55 — Replacement

**Context:** …this is usually not the case. There may be ⟦change⟧ leakage " in the system in which suppressed or mixed…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 56 — Replacement

**Context:** …usually not the case. There may be " leakage ⟦change⟧ in the system in which suppressed or mixed states may…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 57 — Replacement

**Context:** …signals like posture or voice, but they are not ⟦change⟧ to be known through one external signal. Regulation of…

**HTML-only text:**

```text
guaranteed
```

**Current-only text:**

```text
guaranteedß
```


### Change 58 — Replacement

**Context:** …like changing precision about an interpretation or action, or ⟦change⟧ different bodily action that results in some type of attenuation…

**HTML-only text:**

```text
taking
```

**Current-only text:**

```text
take
```


### Change 59 — Replacement

**Context:** …change how it feels) of a situation that is ⟦change⟧ causing " an emotion can also be helpful in regulation…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 60 — Replacement

**Context:** …it feels) of a situation that is " causing ⟦change⟧ an emotion can also be helpful in regulation since it…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 61 — Replacement

**Context:** …alive and only blocks what the expression looks like. ⟦change⟧ why reappraisal and suppression have much different downstream effects;…

**HTML-only text:**

```text
This is
```

**Current-only text:**

```text
Hence
```


### Change 62 — Replacement

**Context:** …reappraisal and suppression have much different downstream effects; the ⟦change⟧ is much more harmful in the long run. Suppression…

**HTML-only text:**

```text
latter
```

**Current-only text:**

```text
ladder
```


## 5.2 Field Dissonance

### Change 1 — HTML-only

**Context:** …from internal states. We can call this field dissonance ⟦change⟧ , which occurs when conflicting properties or action policies remain…

**HTML-only text:**

```text
(not to be confused with neural dissonance, characterized as a lack of symmetry in the representation of consciousness)
```


### Change 2 — HTML-only

**Context:** …violated ones unresolved. The dominant policy may appear as ⟦change⟧ cached such as the cliche statement of “ doing good…

**HTML-only text:**

```text
a
```


### Change 3 — HTML-only

**Context:** …ones unresolved. The dominant policy may appear as cached ⟦change⟧ such as the cliche statement of “ doing good,…

**HTML-only text:**

```text
response,
```


### Change 4 — Current-only

**Context:** …cliche statement of “ doing good, how about you ⟦change⟧ , ” while the “ losing ” ones continue to…

**Current-only text:**

```text
"
```


### Change 5 — Replacement

**Context:** …target error without producing a noticeable difference in felt tone ⟦change⟧ friction and negative felt tone is most common here.…

**HTML-only text:**

```text
, though
```

**Current-only text:**

```text
. Though
```


### Change 6 — Replacement

**Context:** …in felt tone. Though friction and negative felt tone ⟦change⟧ most common here. As another example of “ leakage…

**HTML-only text:**

```text
are
```

**Current-only text:**

```text
is
```


### Change 7 — Replacement

**Context:** …slices is not necessarily dysfunctional. For instance, it ⟦change⟧ keep competing interpretations and action policies available long enough for…

**HTML-only text:**

```text
may
```

**Current-only text:**

```text
make
```


### Change 8 — Replacement

**Context:** …policies available long enough for the system to find a ⟦change⟧ better " organization, like one that ends up reducing…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 9 — Replacement

**Context:** …long enough for the system to find a " better ⟦change⟧ organization, like one that ends up reducing suffering in…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 10 — HTML-only

**Context:** …can turn an ordinary conflict of properties into a self ⟦change⟧ reinforcing attractor. For example, a person may repeatedly…

**HTML-only text:**

```text
-
```


### Change 11 — Replacement

**Context:** …dominate behavior because of their high weighting, while bodily ⟦change⟧ signals remain unsatisfied. Each repetition reinforces the social action…

**HTML-only text:**

```text
threat
```

**Current-only text:**

```text
thread
```


### Change 12 — Replacement

**Context:** …the other structure, making the contraction and behavior increasingly ⟦change⟧ in similar situations. However, resolution of conflicting properties…

**HTML-only text:**

```text
likely
```

**Current-only text:**

```text
like
```


### Change 13 — HTML-only

**Context:** …Another resolution method is that of integration through a structure ⟦change⟧ preserving transformation. Instead of choosing to stay within a…

**HTML-only text:**

```text
-
```


### Change 14 — HTML-only

**Context:** …Instead of choosing to stay within a fantasy of safety ⟦change⟧ for example, the system identifies the invariant properties inside…

**HTML-only text:**

```text
,
```


### Change 15 — Replacement

**Context:** …. Integration is therefore another kind of structural threshold. ⟦change⟧ of selecting between existing policies to reduce conflict, the…

**HTML-only text:**

```text
Instead
```

**Current-only text:**

```text
Istead
```


### Change 16 — HTML-only

**Context:** …comfort, and a global target, like maintaining long ⟦change⟧ term health by going to the gym. A local…

**HTML-only text:**

```text
-
```


### Change 17 — HTML-only

**Context:** …gaining more motivational precision than the wider target. Self ⟦change⟧ control, then, is not simply overpowering parallel desires…

**HTML-only text:**

```text
-
```


### Change 18 — HTML-only

**Context:** …the global target should not always dominate. A long ⟦change⟧ term target can be poorly calibrated, while a local…

**HTML-only text:**

```text
-
```


### Change 19 — HTML-only

**Context:** …ability to reliably reinstate a wider horizon target when short ⟦change⟧ horizon competitors become salient, without becoming unable to revise…

**HTML-only text:**

```text
-
```


### Change 20 — Current-only

**Context:** …ensure the attractor states that are relevant for your goal ⟦change⟧ have high reachability. This means designing your environment and…

**Current-only text:**

```text
are
```


### Change 21 — HTML-only

**Context:** …to reinstate and makes protective policies, like somatic contraction ⟦change⟧ more reachable. Field dissonance itself is not identical to…

**HTML-only text:**

```text
,
```


## 5.3 The Suffering Loop

### Change 1 — Replacement

**Context:** …can be thought of as a negatively felt state that ⟦change⟧ spreads " across the field because a highly weighted target…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 2 — Replacement

**Context:** …thought of as a negatively felt state that " spreads ⟦change⟧ across the field because a highly weighted target makes experience…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 3 — Replacement

**Context:** …geared towards that target. In the practical sense, ⟦change⟧ also a temporal aspect at play since most people would…

**HTML-only text:**

```text
there’s
```

**Current-only text:**

```text
there's
```


### Change 4 — Replacement

**Context:** …is not fully getting rid of it, but reducing ⟦change⟧ of its magnitude as practically possible and increasing reachability across…

**HTML-only text:**

```text
as much
```

**Current-only text:**

```text
enough
```


### Change 5 — HTML-only

**Context:** …be far away or close to fitting into our field ⟦change⟧ which is what the fit distance property measures. Let’s…

**HTML-only text:**

```text
,
```


### Change 6 — Replacement

**Context:** …any interpretation or action. The hurt can come from ⟦change⟧ a target, violation of an expectation, loss,…

**HTML-only text:**

```text
a threat to
```

**Current-only text:**

```text
threatening of
```


### Change 7 — HTML-only

**Context:** …the first arrow which represents unavoidable painful experience. First ⟦change⟧ order hurt can be unpleasant before the system adds any…

**HTML-only text:**

```text
-
```


### Change 8 — Replacement

**Context:** …Romeo Stevens says the term might be better known as ⟦change⟧ fused to ' or ' welded to ' which seems…

**HTML-only text:**

```text
‘
```

**Current-only text:**

```text
'
```


### Change 9 — Replacement

**Context:** …the term might be better known as ' fused to ⟦change⟧ or ' welded to ' which seems more like an…

**HTML-only text:**

```text
’
```

**Current-only text:**

```text
'
```


### Change 10 — Replacement

**Context:** …might be better known as ' fused to ' or ⟦change⟧ welded to ' which seems more like an accurate phenomenological…

**HTML-only text:**

```text
‘
```

**Current-only text:**

```text
'
```


### Change 11 — Replacement

**Context:** …known as ' fused to ' or ' welded to ⟦change⟧ which seems more like an accurate phenomenological description. Anyways…

**HTML-only text:**

```text
, ’
```

**Current-only text:**

```text
'
```


### Change 12 — Replacement

**Context:** …about taṇhā is that it precedes suffering and is the ⟦change⟧ grabby " or " pushy " thing that interacts with…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 13 — Replacement

**Context:** …is that it precedes suffering and is the " grabby ⟦change⟧ or " pushy " thing that interacts with sensations of…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 14 — Replacement

**Context:** …it precedes suffering and is the " grabby " or ⟦change⟧ pushy " thing that interacts with sensations of experience.…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 15 — Replacement

**Context:** …suffering and is the " grabby " or " pushy ⟦change⟧ thing that interacts with sensations of experience. So it…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 16 — Replacement

**Context:** …rise to dukkha, rather than as dukkha itself: ⟦change⟧ ... the origin of suffering: it is…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 17 — Replacement

**Context:** …this craving which leads to renewed existence... ⟦change⟧ Next is where first - order hurt becomes suffering in…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 18 — Replacement

**Context:** …the direction of aversion, the target is something like ⟦change⟧ this state should not be happening, " so the…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 19 — Replacement

**Context:** …something like " this state should not be happening, ⟦change⟧ so the mind - body system attempts to evade the…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 20 — Replacement

**Context:** …In the craving direction, the target is something like ⟦change⟧ I need to reach or maintain that state, "…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 21 — Replacement

**Context:** …" I need to reach or maintain that state, ⟦change⟧ so the mind - body system attempts to obtain the…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 22 — Replacement

**Context:** …. Compare this to something like grief where the target ⟦change⟧ bringing someone back to life or denial of emotions:…

**HTML-only text:**

```text
is
```

**Current-only text:**

```text
of
```


### Change 23 — Replacement

**Context:** …have so far is: First - order hurt + ⟦change⟧ I don't want this " target → aversion Absence of…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 24 — Replacement

**Context:** …far is: First - order hurt + " I ⟦change⟧ want this " target → aversion Absence of desired state…

**HTML-only text:**

```text
don’t
```

**Current-only text:**

```text
don't
```


### Change 25 — Replacement

**Context:** …First - order hurt + " I don't want this ⟦change⟧ target → aversion Absence of desired state + " I…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 26 — Replacement

**Context:** …this " target → aversion Absence of desired state + ⟦change⟧ I must have this " target → craving (Absence…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 27 — Replacement

**Context:** …Absence of desired state + " I must have this ⟦change⟧ target → craving (Absence of a desired state is…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 28 — Replacement

**Context:** …arising signals of the same discrepancy. Co - arising ⟦change⟧ the thing implicitly signals another thing in experience, like…

**HTML-only text:**

```text
means
```

**Current-only text:**

```text
meaning
```


### Change 29 — Replacement

**Context:** …implicitly signals another thing in experience, like the way ⟦change⟧ up ' only means anything if ' down ' is…

**HTML-only text:**

```text
‘
```

**Current-only text:**

```text
'
```


### Change 30 — Replacement

**Context:** …another thing in experience, like the way ' up ⟦change⟧ only means anything if ' down ' is also available…

**HTML-only text:**

```text
’
```

**Current-only text:**

```text
'
```


### Change 31 — Replacement

**Context:** …like the way ' up ' only means anything if ⟦change⟧ down ' is also available. Every instance of craving…

**HTML-only text:**

```text
‘
```

**Current-only text:**

```text
'
```


### Change 32 — Replacement

**Context:** …way ' up ' only means anything if ' down ⟦change⟧ is also available. Every instance of craving will contain…

**HTML-only text:**

```text
’
```

**Current-only text:**

```text
'
```


### Change 33 — Current-only

**Context:** …rumination on memories, which are reconstructed as present representations ⟦change⟧ that bring about unpleasant sensations, so recalling one reinstates…

**Current-only text:**

```text
,
```


### Change 34 — HTML-only

**Context:** …this is that the latch itself, or contraction pattern ⟦change⟧ stops needing the original trigger for it to be enacted…

**HTML-only text:**

```text
,
```


### Change 35 — Replacement

**Context:** …sensations, but it is epistemically relevant as well. ⟦change⟧ , suffering can occur in the direction of epistemic ignorance…

**HTML-only text:**

```text
That is
```

**Current-only text:**

```text
Meaning
```


### Change 36 — Current-only

**Context:** …contraction, in the sense that it is a mechanism ⟦change⟧ to prevent unwanted experience from occurring. Disconfirming input that…

**Current-only text:**

```text
as
```


### Change 37 — Current-only

**Context:** …This friction can result in aversion, a reaching towards ⟦change⟧ a target of a more pleasant state of the model…

**Current-only text:**

```text
of
```


### Change 38 — Replacement

**Context:** …target of a more pleasant state of the model being ⟦change⟧ right ". Typically this results in suppression, like…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 39 — Replacement

**Context:** …a more pleasant state of the model being " right ⟦change⟧ . Typically this results in suppression, like blocking the…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 40 — HTML-only

**Context:** …habitual bodily contraction can bury priors deep into the body ⟦change⟧ making them the default way of viewing things, so…

**HTML-only text:**

```text
,
```


### Change 41 — Replacement

**Context:** …so too can the same thing happen to epistemic models ⟦change⟧ buried deep into the field if contracted around enough.…

**HTML-only text:**

```text
: they can be
```

**Current-only text:**

```text
in which it is
```


### Change 42 — Replacement

**Context:** …happen to epistemic models in which it is buried deep ⟦change⟧ the field if contracted around enough. This means revising…

**HTML-only text:**

```text
in
```

**Current-only text:**

```text
into
```


### Change 43 — Replacement

**Context:** …. For nuance, tacit knowledge might also be seen ⟦change⟧ the same way, contraction living in the body,…

**HTML-only text:**

```text
in
```

**Current-only text:**

```text
as
```


### Change 44 — Replacement

**Context:** …lower precision on targets that we once held heavily, ⟦change⟧ practice like meditation, we can feel a much smaller…

**HTML-only text:**

```text
through
```

**Current-only text:**

```text
though
```


### Change 45 — HTML-only

**Context:** …should be separated. Direction comes from the target itself ⟦change⟧ which can be wholesome like the desire for connection with…

**HTML-only text:**

```text
,
```


### Change 46 — Replacement

**Context:** …, and as taṇhā. Crucially, desire and pressure ⟦change⟧ what produces suffering, while desire by itself without pressure…

**HTML-only text:**

```text
are
```

**Current-only text:**

```text
is
```


### Change 47 — Replacement

**Context:** …as taṇhā. Crucially, desire and pressure is what ⟦change⟧ suffering, while desire by itself without pressure has the…

**HTML-only text:**

```text
produce
```

**Current-only text:**

```text
produces
```


### Change 48 — Replacement

**Context:** …the added pressure is usually not that much. If ⟦change⟧ starved and haven't had dessert in a while, more…

**HTML-only text:**

```text
you’re
```

**Current-only text:**

```text
you're
```


### Change 49 — Replacement

**Context:** …is usually not that much. If you're starved and ⟦change⟧ had dessert in a while, more pressure will appear…

**HTML-only text:**

```text
haven’t
```

**Current-only text:**

```text
haven't
```


### Change 50 — Replacement

**Context:** …fall away if the person chooses to drop it, ⟦change⟧ it is not organizing the field in such a way…

**HTML-only text:**

```text
since
```

**Current-only text:**

```text
sense
```


### Change 51 — HTML-only

**Context:** …load - bearing, like wanting of love or safety ⟦change⟧ feel that way because they target priors and branches deep…

**HTML-only text:**

```text
,
```


### Change 52 — Replacement

**Context:** …the dependency tree. Deep priors like a sense of ⟦change⟧ of things and selfhood sit in the trunk of the…

**HTML-only text:**

```text
permanence
```

**Current-only text:**

```text
permance
```


### Change 53 — Replacement

**Context:** …these practices that can help alleviate this type of suffering ⟦change⟧ weighting of targets too broadly or becomes disengagement somehow,…

**HTML-only text:**

```text
lower
```

**Current-only text:**

```text
lowers
```


### Change 54 — Replacement

**Context:** …type of suffering lowers weighting of targets too broadly or ⟦change⟧ disengagement somehow, it can produce apathy rather than equanimity…

**HTML-only text:**

```text
become
```

**Current-only text:**

```text
becomes
```


### Change 55 — Replacement

**Context:** …weighting of targets too broadly or becomes disengagement somehow, ⟦change⟧ can produce apathy rather than equanimity and motivation. Underling…

**HTML-only text:**

```text
they
```

**Current-only text:**

```text
it
```


### Change 56 — Replacement

**Context:** …it can produce apathy rather than equanimity and motivation. ⟦change⟧ all desires, whether it be desire for items,…

**HTML-only text:**

```text
Underlying
```

**Current-only text:**

```text
Underling
```


### Change 57 — Replacement

**Context:** …than equanimity and motivation. Underling all desires, whether ⟦change⟧ be desire for items, people, or states of…

**HTML-only text:**

```text
they
```

**Current-only text:**

```text
it
```


### Change 58 — Replacement

**Context:** …and motivation. Underling all desires, whether it be ⟦change⟧ for items, people, or states of being,…

**HTML-only text:**

```text
desires
```

**Current-only text:**

```text
desire
```


### Change 59 — Replacement

**Context:** …, this is because things are gestalts which organize input ⟦change⟧ they are not external objects that are neutrally handled.…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 60 — Replacement

**Context:** …. You do not desire the atoms of the thing ⟦change⟧ you desire the field configuration the object is expected to…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 61 — Replacement

**Context:** …to produce. The cake is not the desired thing ⟦change⟧ what is desired is the configuration associated with sweetness,…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 62 — Replacement

**Context:** …towards the target field configuration. If desire really is ⟦change⟧ about indivual objects, substitution of objects, like trading…

**HTML-only text:**

```text
solely
```

**Current-only text:**

```text
soley
```


### Change 63 — Replacement

**Context:** …target field configuration. If desire really is soley about ⟦change⟧ objects, substitution of objects, like trading cake for…

**HTML-only text:**

```text
individual
```

**Current-only text:**

```text
indivual
```


### Change 64 — Current-only

**Context:** …objects, substitution of objects, like trading cake for ⟦change⟧ another dessert, would be impossible. The fact that…

**Current-only text:**

```text
a
```


### Change 65 — Replacement

**Context:** …can satisfy the same desire proves the target is the ⟦change⟧ configuration, not the thing itself. This also helps…

**HTML-only text:**

```text
associated
```

**Current-only text:**

```text
assoaicted
```


### Change 66 — Replacement

**Context:** …we get the thing we wanted, often we are ⟦change⟧ and the desire does not fully end: the object…

**HTML-only text:**

```text
disappointed
```

**Current-only text:**

```text
dissapointed
```


### Change 67 — Replacement

**Context:** …and the desire does not fully end: the object ⟦change⟧ as the wanted gestalt, but not the deeper configuration…

**HTML-only text:**

```text
successfully registered
```

**Current-only text:**

```text
succesfully regiestered
```


### Change 68 — Replacement

**Context:** …inaccurate priors that simply cannot be satisfied, like object ⟦change⟧ and selfhood. So the proxy resolves, like through…

**HTML-only text:**

```text
permanence
```

**Current-only text:**

```text
permanace
```


### Change 69 — Replacement

**Context:** …ignorance or configurations not showing up how we want. ⟦change⟧ important not to completely collapse objects since they are reliable…

**HTML-only text:**

```text
It’s
```

**Current-only text:**

```text
It's
```


### Change 70 — Replacement

**Context:** …principle exists that collapsing states from many to one is ⟦change⟧ easier " than decompressing from one to many, like…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 71 — Replacement

**Context:** …that collapsing states from many to one is " easier ⟦change⟧ than decompressing from one to many, like notation to…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 72 — Current-only

**Context:** …to the embodied layer. Equanimity then becomes a tool ⟦change⟧ to prevent collapse as a result of deep haptic contraction…

**Current-only text:**

```text
as
```


### Change 73 — Replacement

**Context:** …in lower, producing resonance and positive felt tone. ⟦change⟧ theory, this could reduce first - order hurt which…

**HTML-only text:**

```text
In
```

**Current-only text:**

```text
IN
```


### Change 74 — Replacement

**Context:** …gets compared against. You feel better for a while ⟦change⟧ it becomes the norm, and you end up at…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 75 — Replacement

**Context:** …change integrates into the baseline. Contraction is different, ⟦change⟧ dealing with mind and haptic contraction. Mind contraction is…

**HTML-only text:**

```text
whether
```

**Current-only text:**

```text
both
```


### Change 76 — Replacement

**Context:** …baseline. Contraction is different, both dealing with mind ⟦change⟧ haptic contraction. Mind contraction is held " in the…

**HTML-only text:**

```text
contraction or
```

**Current-only text:**

```text
and
```


### Change 77 — Replacement

**Context:** …with mind and haptic contraction. Mind contraction is held ⟦change⟧ in the mind " rather than " in the body…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 78 — Replacement

**Context:** …contraction. Mind contraction is held " in the mind ⟦change⟧ rather than " in the body, " like holding…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 79 — Replacement

**Context:** …contraction is held " in the mind " rather than ⟦change⟧ in the body, " like holding a representation about…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 80 — Replacement

**Context:** …the mind " rather than " in the body, ⟦change⟧ like holding a representation about something to be true without…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 81 — Replacement

**Context:** …comparison to past states or when a change in conditions ⟦change⟧ you back into an old configuration with worse felt tone…

**HTML-only text:**

```text
drops
```

**Current-only text:**

```text
drop
```


### Change 82 — HTML-only

**Context:** …skills like equanimity, being dropped into conditions that used ⟦change⟧ decrease background felt tone can now be handled by not…

**HTML-only text:**

```text
to
```


### Change 83 — HTML-only

**Context:** …for holding intensity and makes more field configurations easily reachable ⟦change⟧ which results in fluidity. These are structural changes,…

**HTML-only text:**

```text
,
```


### Change 84 — Replacement

**Context:** …both true about different things. These processes of suffering ⟦change⟧ us to the tool of emptiness as a way to…

**HTML-only text:**

```text
lead
```

**Current-only text:**

```text
leads
```


### Change 85 — HTML-only

**Context:** …at play. It is important to recognize that first ⟦change⟧ order hurt when suffering is a perceived solid gestalt,…

**HTML-only text:**

```text
-
```


## 6 Transparency

**Heading:** `Reality Construction` → `Transparency`

### Change 1 — Current-only

**Current-only text:**

```text
[PLACEHOLDER: Add section introduction]
```


## 6.1 Emptiness & Ontological Authority

### Change 1 — HTML-only

**Context:** …Emptiness, or suññatā, is an extremely load ⟦change⟧ bearing concept within this framework that leads to insight about…

**HTML-only text:**

```text
-
```


### Change 2 — HTML-only

**Context:** …all, which is exactly what happens with the duck ⟦change⟧ rabbit illusion and the unreadable image. Emptiness is not…

**HTML-only text:**

```text
-
```


### Change 3 — Replacement

**Context:** …about dependent structures. Crucially, you can lower a ⟦change⟧ authority while it still appears clearly in experience. For…

**HTML-only text:**

```text
gestalt’s
```

**Current-only text:**

```text
gestalt's
```


### Change 4 — Replacement

**Context:** …it still appears clearly in experience. For instance, ⟦change⟧ dog " can appear as a real thing, while…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 5 — Replacement

**Context:** …appears clearly in experience. For instance, " dog ⟦change⟧ can appear as a real thing, while very little…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 6 — Replacement

**Context:** …while very little has to depend on it, like ⟦change⟧ all dogs are dangerous " which can produce subsequent action…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 7 — Replacement

**Context:** …depend on it, like " all dogs are dangerous ⟦change⟧ which can produce subsequent action like clenching muscles. The…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 8 — Current-only

**Context:** …use it as a premise, and updating cost comes ⟦change⟧ partly how many of the dependent priors must be recomputed…

**Current-only text:**

```text
from
```


### Change 9 — HTML-only

**Context:** …as a premise, and updating cost comes from partly ⟦change⟧ how many of the dependent priors must be recomputed.…

**HTML-only text:**

```text
from
```


### Change 10 — HTML-only

**Context:** …loops take, real - making and truth - making ⟦change⟧ matter: real - making raises ontological authority which makes…

**HTML-only text:**

```text
,
```


### Change 11 — Replacement

**Context:** …. This is why a simple representation of safety typically ⟦change⟧ work against a highly tense body. Haptic contraction gives…

**HTML-only text:**

```text
doesn’t
```

**Current-only text:**

```text
doesn't
```


### Change 12 — Current-only

**Context:** …of using a lot of resources in order to hold ⟦change⟧ other branches possible instead of defaulting to what the field…

**Current-only text:**

```text
hold
```


### Change 13 — Replacement

**Context:** …it in the body keeps one interpretation of input “ ⟦change⟧ ” and the system can depend on it without recomputing…

**HTML-only text:**

```text
sticky
```

**Current-only text:**

```text
sitcky
```


### Change 14 — HTML-only

**Context:** …is reification. If we question what is or was ⟦change⟧ high ontological authority, we have the chance to break…

**HTML-only text:**

```text
of
```


### Change 15 — Replacement

**Context:** …These students are no more stupid than you or me ⟦change⟧ they react as all the mathematicians in the world have…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 16 — Replacement

**Context:** …... To be clear, Grothendieck is speaking ⟦change⟧ of categories and frames here like, “ When I…

**HTML-only text:**

```text
more so
```

**Current-only text:**

```text
moreso
```


### Change 17 — Current-only

**Context:** …Grothendieck is speaking moreso of categories and frames here like ⟦change⟧ “ When I talk to students about the topology of…

**Current-only text:**

```text
,
```


### Change 18 — Replacement

**Context:** …and frames are operating as the structure itself which makes ⟦change⟧ harder to objectify than an object “ out there ”…

**HTML-only text:**

```text
them
```

**Current-only text:**

```text
it
```


### Change 19 — Replacement

**Context:** …stop giving authority to things in general ” but rather ⟦change⟧ what should we give authority to, how much to…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
, "
```


### Change 20 — Replacement

**Context:** …how much to give, and in what contexts. ⟦change⟧ …

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


## 6.2 Transparency

### Change 1 — Replacement

**Context:** …did not disappear since it still organizes certain parts like ⟦change⟧ 4 legs " and " fur "; what went…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 2 — Replacement

**Context:** …since it still organizes certain parts like " 4 legs ⟦change⟧ and " fur "; what went away is the…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 3 — Replacement

**Context:** …still organizes certain parts like " 4 legs " and ⟦change⟧ fur "; what went away is the over generalization…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 4 — Replacement

**Context:** …certain parts like " 4 legs " and " fur ⟦change⟧ ; what went away is the over generalization that the…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 5 — Replacement

**Context:** …and " fur "; what went away is the ⟦change⟧ that the original gestalt kept providing which was causing inaccurate…

**HTML-only text:**

```text
overgeneralization
```

**Current-only text:**

```text
over generalization
```


### Change 6 — Replacement

**Context:** …start contracting less. To take a deeper example, ⟦change⟧ I am unsafe " is a gestalt that if given…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 7 — Replacement

**Context:** …To take a deeper example, " I am unsafe ⟦change⟧ is a gestalt that if given enough ontological authority,…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 8 — HTML-only

**Context:** …, " I am unsafe " is a gestalt that ⟦change⟧ if given enough ontological authority, can produce lots of…

**HTML-only text:**

```text
,
```


### Change 9 — Replacement

**Context:** …every moment due to producing unhelpful targets and contraction. ⟦change⟧ low authority, we can see its parts like a…

**HTML-only text:**

```text
When it is given
```

**Current-only text:**

```text
Given
```


### Change 10 — Replacement

**Context:** …authority, we can see its parts like a fast ⟦change⟧ , which allows us to redirect precision in a way…

**HTML-only text:**

```text
heartbeat
```

**Current-only text:**

```text
heart beat
```


### Change 11 — Replacement

**Context:** …from the top - down label of unsafe to simply ⟦change⟧ oh this is just a fast heart beat. "…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 12 — Replacement

**Context:** …unsafe to simply " oh this is just a fast ⟦change⟧ . " Bear in mind, simply moving precision to…

**HTML-only text:**

```text
heartbeat
```

**Current-only text:**

```text
heart beat
```


### Change 13 — Replacement

**Context:** …" oh this is just a fast heart beat. ⟦change⟧ Bear in mind, simply moving precision to constructing parts…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 14 — Current-only

**Context:** …just a fast heart beat. " Bear in mind ⟦change⟧ simply moving precision to constructing parts is sometimes not enough…

**Current-only text:**

```text
,
```


### Change 15 — Replacement

**Context:** …body can hold patterns that feed back into the original ⟦change⟧ confirming evidence. Once a gestalt stops being treated as…

**HTML-only text:**

```text
gestalt’s
```

**Current-only text:**

```text
gestalt's
```


### Change 16 — Replacement

**Context:** …parts in each moment, and can fail when you ⟦change⟧ have enough slack like when tired. We might retreat…

**HTML-only text:**

```text
don’t
```

**Current-only text:**

```text
don't
```


### Change 17 — Replacement

**Context:** …paths the original gestalt left out of reach. Crucially ⟦change⟧ trying to achieve high transparency, this can be difficult…

**HTML-only text:**

```text
,
```

**Current-only text:**

```text
when
```


### Change 18 — Current-only

**Context:** …of reach. Crucially when trying to achieve high transparency ⟦change⟧ can be difficult due to perspective limitations. A high…

**Current-only text:**

```text
, this
```


### Change 19 — Replacement

**Context:** …can be a side effect. To understand this, ⟦change⟧ having slack " can mean two different things: the…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 20 — Replacement

**Context:** …side effect. To understand this, " having slack ⟦change⟧ can mean two different things: the spare capacity you…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 21 — Replacement

**Context:** …get out of a stuck state, and the condition ⟦change⟧ whether the field latches onto a state in the first…

**HTML-only text:**

```text
that determines
```

**Current-only text:**

```text
in which
```


### Change 22 — Replacement

**Context:** …good sleep raise the former, and transparency and equanimity ⟦change⟧ the ladder. A fully rested person with good health…

**HTML-only text:**

```text
help
```

**Current-only text:**

```text
helps
```


### Change 23 — Replacement

**Context:** …raise the former, and transparency and equanimity helps the ⟦change⟧ . A fully rested person with good health can still…

**HTML-only text:**

```text
latter
```

**Current-only text:**

```text
ladder
```


### Change 24 — Replacement

**Context:** …. On the other hand, someone with high equanimity ⟦change⟧ can see through the construction of gestalts can let the…

**HTML-only text:**

```text
who
```

**Current-only text:**

```text
and
```


### Change 25 — HTML-only

**Context:** …of gestalts can let the critique drop quickly even if ⟦change⟧ tired or has poor external circumstances. This is why…

**HTML-only text:**

```text
they are
```


### Change 26 — Replacement

**Context:** …can let the critique drop quickly even if tired or ⟦change⟧ poor external circumstances. This is why releasing contraction,…

**HTML-only text:**

```text
have
```

**Current-only text:**

```text
has
```


### Change 27 — Replacement

**Context:** …is why releasing contraction, both bodily and mentally, ⟦change⟧ simply fade back into the background felt tone like a…

**HTML-only text:**

```text
doesn’t
```

**Current-only text:**

```text
doesn't
```


### Change 28 — Replacement

**Context:** …the background felt tone like a new material item would ⟦change⟧ what was removed was capacity uselessly spent that can now…

**HTML-only text:**

```text
—
```

**Current-only text:**

```text
–
```


### Change 29 — Replacement

**Context:** …is also why rest and insight are not the same ⟦change⟧ someone can take a month long break from a situation…

**HTML-only text:**

```text
—
```

**Current-only text:**

```text
–
```


### Change 30 — HTML-only

**Context:** …are not the same – someone can take a month ⟦change⟧ long break from a situation, come back, and…

**HTML-only text:**

```text
-
```


### Change 31 — Replacement

**Context:** …onto the same field configuration just as easily as before ⟦change⟧ they become triggered. You also can't do the opposite…

**HTML-only text:**

```text
if
```

**Current-only text:**

```text
it
```


### Change 32 — Replacement

**Context:** …easily as before it they become triggered. You also ⟦change⟧ do the opposite: have the insight but be depleted…

**HTML-only text:**

```text
can’t
```

**Current-only text:**

```text
can't
```


### Change 33 — Current-only

**Context:** …insight but be depleted in terms of capacity and expect ⟦change⟧ the change to stay active. Someone with high equanimity…

**Current-only text:**

```text
for
```


### Change 34 — Replacement

**Context:** …This also tells us why depth of priors and gestalts ⟦change⟧ difficulty to see as transparent: trunk - level structure…

**HTML-only text:**

```text
predicts
```

**Current-only text:**

```text
predict
```


### Change 35 — Replacement

**Context:** …tells us why depth of priors and gestalts predict difficulty ⟦change⟧ as transparent: trunk - level structure resists change because…

**HTML-only text:**

```text
in seeing them
```

**Current-only text:**

```text
to see
```


### Change 36 — HTML-only

**Context:** …either easier or harder to see through. For instance ⟦change⟧ if we take the shallow gestalt of anxiety itself as…

**HTML-only text:**

```text
,
```


### Change 37 — HTML-only

**Context:** …is something like “ these sensations are happening to me ⟦change⟧ ” which is a threat prior that made the interpretation…

**HTML-only text:**

```text
,
```


### Change 38 — HTML-only

**Context:** …see through as a construction because more depends on it ⟦change⟧ which makes updating proportionally costly. Depth of the gestalt…

**HTML-only text:**

```text
,
```


### Change 39 — Replacement

**Context:** …the contraction and restoring the patterns that were closed off ⟦change⟧ two different processes, not just one. Meaning,…

**HTML-only text:**

```text
become
```

**Current-only text:**

```text
becomes
```


### Change 40 — HTML-only

**Context:** …here is like a joint stuck in a cast: ⟦change⟧ short term you remove the cast and the joint moves…

**HTML-only text:**

```text
in the
```


### Change 41 — HTML-only

**Context:** …like a joint stuck in a cast: short term ⟦change⟧ you remove the cast and the joint moves again,…

**HTML-only text:**

```text
,
```


### Change 42 — Replacement

**Context:** …term you remove the cast and the joint moves again ⟦change⟧ enough time spent in the cast and the literal tissue…

**HTML-only text:**

```text
; after
```

**Current-only text:**

```text
, long
```


### Change 43 — Replacement

**Context:** …moves again, long enough time spent in the cast ⟦change⟧ the literal tissue of the body changes, so producing…

**HTML-only text:**

```text
,
```

**Current-only text:**

```text
and
```


### Change 44 — HTML-only

**Context:** …and the negative felt tone decreases. And in general ⟦change⟧ this is why transparency reduces suffering. The suffering loop…

**HTML-only text:**

```text
,
```


### Change 45 — HTML-only

**Context:** …laid out in section 5. 2 starts with first ⟦change⟧ order hurt appearing as a gestalt that carries high authority…

**HTML-only text:**

```text
-
```


### Change 46 — Current-only

**Context:** …happening. This then leaves control, craving or aversion ⟦change⟧ as the only available action policy to be enacted to…

**Current-only text:**

```text
,
```


### Change 47 — Replacement

**Context:** …slack, mood, and environment). When the ⟦change⟧ gestalts hold high authority, the contraction latches which then…

**HTML-only text:**

```text
memory’s
```

**Current-only text:**

```text
memory's
```


### Change 48 — HTML-only

**Context:** …the memory's gestalts hold high authority, the contraction latches ⟦change⟧ which then confirms the prediction that produced it. When…

**HTML-only text:**

```text
,
```


### Change 49 — HTML-only

**Context:** …is reduced. Transparency does not completely remove the basin ⟦change⟧ though since a configuration is also instantiated by other things…

**HTML-only text:**

```text
,
```


### Change 50 — HTML-only

**Context:** …reduced. Transparency does not completely remove the basin though ⟦change⟧ since a configuration is also instantiated by other things like…

**HTML-only text:**

```text
,
```


### Change 51 — HTML-only

**Context:** …and attention which can all keep reinstating it. Importantly ⟦change⟧ when training transparency, it should be made clear that…

**HTML-only text:**

```text
,
```


### Change 52 — HTML-only

**Context:** …seen as constructed and its inner workings are made obvious ⟦change⟧ which reduces its ontological authority status; no longer will…

**HTML-only text:**

```text
,
```


### Change 53 — Replacement

**Context:** …deep organizational impact on experience, so the chance transparency ⟦change⟧ structure that depends on those gestalts is low. Now…

**HTML-only text:**

```text
affects
```

**Current-only text:**

```text
effects
```


### Change 54 — HTML-only

**Context:** …deeper in the dependency tree; these types of changes ⟦change⟧ however will take longer to occur rather than just the…

**HTML-only text:**

```text
,
```


### Change 55 — HTML-only

**Context:** …in the dependency tree; these types of changes however ⟦change⟧ will take longer to occur rather than just the shallow…

**HTML-only text:**

```text
,
```


### Change 56 — HTML-only

**Context:** …we can make bigger changes faster through targeting generative structures ⟦change⟧ which has the potential to allow us to move between…

**HTML-only text:**

```text
,
```


### Change 57 — HTML-only

**Context:** …aversion loses the structure it was using as a substrate ⟦change⟧ and that policy stops being the only available response.…

**HTML-only text:**

```text
,
```


### Change 58 — HTML-only

**Context:** …field no longer has to hold it as a high ⟦change⟧ authority structure, so the ongoing cost of integrating input…

**HTML-only text:**

```text
-
```


### Change 59 — HTML-only

**Context:** …of integrating input into a field with more available branches ⟦change⟧ which makes the surprise of resonance or friction propagates through…

**HTML-only text:**

```text
,
```


### Change 60 — Replacement

**Context:** …available branches which makes the surprise of resonance or friction ⟦change⟧ through less structure in the system so the difference in…

**HTML-only text:**

```text
propagate
```

**Current-only text:**

```text
propagates
```


### Change 61 — Replacement

**Context:** …baseline of experience, the background felt tone rises because ⟦change⟧ resources go to holding reified things, and because fewer…

**HTML-only text:**

```text
fewer
```

**Current-only text:**

```text
less
```


### Change 62 — HTML-only

**Context:** …depends on, we can run the loop on those ⟦change⟧ which means resonance and friction can pertain to deeper,…

**HTML-only text:**

```text
,
```


### Change 63 — HTML-only

**Context:** …and friction can pertain to deeper, more fundamental priors ⟦change⟧ which means more dependent things get updated. This helps…

**HTML-only text:**

```text
,
```


### Change 64 — HTML-only

**Context:** …why blurriness, the opposite of sensory clarity and transparency ⟦change⟧ causes suffering: it regenerates the conditions of the substrate…

**HTML-only text:**

```text
,
```


### Change 65 — Replacement

**Context:** …. The structures organizing experience are still given high authority ⟦change⟧ there is just a disconnection between certain ones that matter…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 66 — Replacement

**Context:** …Acting firmly while holding a gestalt with low ontological authority ⟦change⟧ not in tension, since compression is what makes action…

**HTML-only text:**

```text
is
```

**Current-only text:**

```text
are
```


### Change 67 — HTML-only

**Context:** …a flat - earther. Then action may be firm ⟦change⟧ but in no way can they enter the loop of…

**HTML-only text:**

```text
,
```


## 7 Sanity, Wisdom, and Practice

### Change 1 — Current-only

**Current-only text:**

```text
[PLACEHOLDER: Add section introduction]
```


## 7.1 Sanity & Wisdom

### Change 1 — Replacement

**Context:** …established that any gestalt can in principle be held transparently ⟦change⟧ that they are made of causes and conditions no different…

**HTML-only text:**

```text
and
```

**Current-only text:**

```text
,
```


### Change 2 — Replacement

**Context:** …any gestalt can in principle be held transparently, that ⟦change⟧ made of causes and conditions no different from optical illusions…

**HTML-only text:**

```text
it is
```

**Current-only text:**

```text
they are
```


### Change 3 — Replacement

**Context:** …is probably going to bring up politics which is so ⟦change⟧ complicated! But it’s all One... ”…

**HTML-only text:**

```text
overwhelmingly
```

**Current-only text:**

```text
overwhelming
```


### Change 4 — Replacement

**Context:** …compression by dropping details into high - level patterns which ⟦change⟧ a dense data set. This is seeing the entire…

**HTML-only text:**

```text
collapse
```

**Current-only text:**

```text
collapses
```


### Change 5 — Replacement

**Context:** …fluid capacity to move between levels, confusion and suffering ⟦change⟧ in and we try to navigate certain contexts with the…

**HTML-only text:**

```text
set
```

**Current-only text:**

```text
sets
```


### Change 6 — Replacement

**Context:** …it skip a few times... like it’s ⟦change⟧ like no, noo, maybe, no, yes…

**HTML-only text:**

```text
deciding
```

**Current-only text:**

```text
decising
```


### Change 7 — Replacement

**Context:** …you’re asking the river a question and every time it ⟦change⟧ . The first time I heard this I was amazed…

**HTML-only text:**

```text
answers
```

**Current-only text:**

```text
answer
```


### Change 8 — HTML-only

**Context:** …less conditioned field so it takes a different orientation. ⟦change⟧ I think the optimal state of maturity for an adult…

**HTML-only text:**

```text
“
```


### Change 9 — Replacement

**Context:** …an adult is to be like a Wise Old Child ⟦change⟧ Vacha states on Twitter. This is the mature form…

**HTML-only text:**

```text
, ”
```

**Current-only text:**

```text
"
```


### Change 10 — Replacement

**Context:** …trying, because their field has not yet solidified into ⟦change⟧ solid " reifications, which is why so many things…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 11 — Replacement

**Context:** …because their field has not yet solidified into " solid ⟦change⟧ reifications, which is why so many things feel fresh…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 12 — Replacement

**Context:** …things feel fresh and vivid and new. The average ⟦change⟧ world feels solid and dull because heavy conditioning has compressed…

**HTML-only text:**

```text
adult’s
```

**Current-only text:**

```text
adult's
```


### Change 13 — Replacement

**Context:** …releasing contraction does. As Michael Pollan puts it, ⟦change⟧ My own gut is there is something childlike about the…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 14 — Replacement

**Context:** …our desire to focus. We shut things out. ⟦change⟧ Contemplative practice is partly a deliberate return to that newness…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 15 — Current-only

**Context:** …flexibly, and update when they need to. But ⟦change⟧ we would not call this wise. Flexibility alone does…

**Current-only text:**

```text
,
```


### Change 16 — Replacement

**Context:** …do not acquire wisdom by just adopting the correct model ⟦change⟧ you understand it by releasing the contraction and reified structure…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 17 — Replacement

**Context:** …you could see and do when in other states. ⟦change⟧ point applies here too, since the target (s…

**HTML-only text:**

```text
Wittgenstein’s
```

**Current-only text:**

```text
Wittgenstein's
```


### Change 18 — Replacement

**Context:** …is and what it is aiming towards. This makes ⟦change⟧ easier to describe wisdom because it is side - stepping…

**HTML-only text:**

```text
wisdom
```

**Current-only text:**

```text
negation
```


### Change 19 — Replacement

**Context:** …is aiming towards. This makes negation easier to describe ⟦change⟧ because it is side - stepping the direct compression needed…

**HTML-only text:**

```text
through negation
```

**Current-only text:**

```text
wisdom
```


### Change 20 — Current-only

**Context:** …felt sense into words. This is because holding gestalts ⟦change⟧ that we must use for structure is a difficult task…

**Current-only text:**

```text
as transparent
```


### Change 21 — HTML-only

**Context:** …holding gestalts as transparent that we must use for structure ⟦change⟧ is a difficult task due to an apparent “ invisible…

**HTML-only text:**

```text
as transparent
```


### Change 22 — Current-only

**Context:** …might be said wisdom is reflexive, only known after ⟦change⟧ the - fact through examination of the person - environment…

**Current-only text:**

```text
-
```


### Change 23 — Current-only

**Context:** …said wisdom is reflexive, only known after - the ⟦change⟧ fact through examination of the person - environment system,…

**Current-only text:**

```text
-
```


### Change 24 — HTML-only

**Context:** …in their field preventing their dependency tree from containing what ⟦change⟧ . Lastly, the targets of wisdom matter. Removing…

**HTML-only text:**

```text
is needed
```


### Change 25 — Replacement

**Context:** …forms, you can recognize it as a construction and ⟦change⟧ level of abstraction it sits at like being too detailed…

**HTML-only text:**

```text
recognize the
```

**Current-only text:**

```text
which
```


### Change 26 — Replacement

**Context:** …a construction and which level of abstraction it sits at ⟦change⟧ too detailed or too broad. You can attempt to…

**HTML-only text:**

```text
, such as whether it is
```

**Current-only text:**

```text
like being
```


### Change 27 — Replacement

**Context:** …much of the field depends on it and what alternatives ⟦change⟧ is preventing you from seeing. You can act from…

**HTML-only text:**

```text
it
```

**Current-only text:**

```text
that
```


### Change 28 — Replacement

**Context:** …itself. Crucially, there is no global endpoint here ⟦change⟧ there never is to insight, both in terms of…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 29 — HTML-only

**Context:** …there is no global endpoint here, there never is ⟦change⟧ to insight, both in terms of wisdom and intellctual…

**HTML-only text:**

```text
an end
```


### Change 30 — Replacement

**Context:** …is to insight, both in terms of wisdom and ⟦change⟧ capacity. This is because holding a structure as transparent…

**HTML-only text:**

```text
intellectual
```

**Current-only text:**

```text
intellctual
```


### Change 31 — Replacement

**Context:** …stopped corresponding to reality and complexity. Sanity and wisdom ⟦change⟧ not about arrive at a singular, correct representation or…

**HTML-only text:**

```text
are
```

**Current-only text:**

```text
is
```


### Change 32 — Replacement

**Context:** …reality and complexity. Sanity and wisdom is not about ⟦change⟧ at a singular, correct representation or field. It…

**HTML-only text:**

```text
arriving
```

**Current-only text:**

```text
arrive
```


### Change 33 — Replacement

**Context:** …arrive at a singular, correct representation or field. ⟦change⟧ understanding that flexibility and feedback are crucial to increase well…

**HTML-only text:**

```text
They are about
```

**Current-only text:**

```text
It is
```


### Change 34 — Replacement

**Context:** …leave this off with an Alexander Grothendieck quote that eloquently ⟦change⟧ the essence of this conclusion and why it matters.…

**HTML-only text:**

```text
captures
```

**Current-only text:**

```text
capture
```


### Change 35 — Current-only

**Context:** …, and then over and over again... ⟦change⟧ …

**Current-only text:**

```text
How many are there, including among the unfortunate “ researchers ” themselves, in need of theses or articles, including even among the most “ scholarly ”, most prestigious among us - those who has the naivety to see that “ research ” is neither more nor less than questioning things, passionately - like a child who wants to know how he or his little sister came into the world. To search and to find, that is to say: to question and to listen is the simplest, most natural thing in the world, in which no one in the world has a privilege. It is a “ gift ” that we all have received since the cradle - made to express and flourish with an infinity of faces, from one moment to another and from one person to another... — Alexander Grothendieck
```


## 7.2 Practice

### Change 1 — Current-only

**Context:** …temperate acts, brave by doing brave acts. " ⟦change⟧ Through this statement, Aristotle asserts that practice is of…

**Current-only text:**

```text
– Aristotle, Nicomachean Ethics
```


### Change 2 — Replacement

**Context:** …enacted, for without practice, no demands are made ⟦change⟧ the world, and our field cannot cultivate those results…

**HTML-only text:**

```text
on
```

**Current-only text:**

```text
onto
```


### Change 3 — Replacement

**Context:** …or external, to enlarge what can be called the ⟦change⟧ cognitive light cone ' of living systems. Practice then…

**HTML-only text:**

```text
‘
```

**Current-only text:**

```text
'
```


### Change 4 — Replacement

**Context:** …enlarge what can be called the ' cognitive light cone ⟦change⟧ of living systems. Practice then not only is important…

**HTML-only text:**

```text
‘
```

**Current-only text:**

```text
'
```


### Change 5 — Current-only

**Context:** …cognitive light cone ' of living systems. Practice then ⟦change⟧ is important for pragmatic applications of theoretical thought, but…

**Current-only text:**

```text
not only
```


### Change 6 — HTML-only

**Context:** …of living systems. Practice then not only is important ⟦change⟧ for pragmatic applications of theoretical thought, but inspecting and…

**HTML-only text:**

```text
not only
```


### Change 7 — HTML-only

**Context:** …is important for pragmatic applications of theoretical thought, but ⟦change⟧ inspecting and using the field itself to result in self…

**HTML-only text:**

```text
also for
```


### Change 8 — Replacement

**Context:** …hold transparency, to practice not habitually contracting so we ⟦change⟧ suffer. Practice then is repeated engagement that directs attention…

**HTML-only text:**

```text
don’t
```

**Current-only text:**

```text
don't
```


### Change 9 — Replacement

**Context:** …spatial and temporal levels, using feedback to retune the ⟦change⟧ dispositions and dynamics to match our targets. Practice can…

**HTML-only text:**

```text
field’s
```

**Current-only text:**

```text
field's
```


### Change 10 — Current-only

**Context:** …and awareness. Moment - to - moment attention changes ⟦change⟧ what is available right now, dwelling on something retunes…

**Current-only text:**

```text
is
```


### Change 11 — Replacement

**Context:** …- moment attention changes is what is available right now ⟦change⟧ dwelling on something retunes the current field, repetition changes…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 12 — Replacement

**Context:** …right now, dwelling on something retunes the current field ⟦change⟧ repetition changes parameters and deeper priors, and " offline…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 13 — Replacement

**Context:** …field, repetition changes parameters and deeper priors, and ⟦change⟧ offline " periods like consolidation while sleeping supports structural and…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 14 — Replacement

**Context:** …repetition changes parameters and deeper priors, and " offline ⟦change⟧ periods like consolidation while sleeping supports structural and implicit changes…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 15 — Replacement

**Context:** …, and " offline " periods like consolidation while sleeping ⟦change⟧ structural and implicit changes. These varying levels offer a…

**HTML-only text:**

```text
support
```

**Current-only text:**

```text
supports
```


### Change 16 — HTML-only

**Context:** …gradient, different depths of knowledge change at different speeds ⟦change⟧ which matters for the amount of practice you must do…

**HTML-only text:**

```text
,
```


### Change 17 — Replacement

**Context:** …target. Notation can change quickly like rewriting a sentence ⟦change⟧ updating an internal model can be harder due to interacting…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 18 — HTML-only

**Context:** …deepest compression lives. A single piece of feedback containing ⟦change⟧ contradiction you must update towards will not instantly update your…

**HTML-only text:**

```text
a
```


### Change 19 — Replacement

**Context:** …section, it is specific to the task at hand ⟦change⟧ slack is not just one out - of - context…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 20 — Replacement

**Context:** …abilities in one field configuration while being unable to access ⟦change⟧ under states that reduce slack, like anxiety or social…

**HTML-only text:**

```text
them
```

**Current-only text:**

```text
it
```


### Change 21 — Replacement

**Context:** …being done in. Too few constraints on the practice ⟦change⟧ a very large search space of possibilities that leaves too…

**HTML-only text:**

```text
create
```

**Current-only text:**

```text
creates
```


### Change 22 — Replacement

**Context:** …possibilities that leaves too many branches open in the field ⟦change⟧ too many constraints and you force premature collapse, preventing…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 23 — Replacement

**Context:** …cannot easily be revised until it is made objectified. ⟦change⟧ , not all practice necessarily involves using this loop exactly…

**HTML-only text:**

```text
That said
```

**Current-only text:**

```text
Saying this
```


### Change 24 — Replacement

**Context:** …the general mechanisms still drive change. For example, ⟦change⟧ wanting to practice a conversational skill, this is still…

**HTML-only text:**

```text
take
```

**Current-only text:**

```text
taking
```


### Change 25 — Replacement

**Context:** …For example, taking wanting to practice a conversational skill ⟦change⟧ this is still stabilizing a felt sense through words.…

**HTML-only text:**

```text
:
```

**Current-only text:**

```text
,
```


### Change 26 — Replacement

**Context:** …sense through words. The words, the notation, ⟦change⟧ making the implicit stable so you can understand your current…

**HTML-only text:**

```text
are
```

**Current-only text:**

```text
is
```


### Change 27 — Replacement

**Context:** …us away from our long - term targets. A ⟦change⟧ false " idea can resonate through familiarity, and "…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 28 — Replacement

**Context:** …from our long - term targets. A " false ⟦change⟧ idea can resonate through familiarity, and " true "…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 29 — Replacement

**Context:** …" false " idea can resonate through familiarity, and ⟦change⟧ true " information can produce friction, all the more…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 30 — Replacement

**Context:** …" idea can resonate through familiarity, and " true ⟦change⟧ information can produce friction, all the more reason to…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 31 — Replacement

**Context:** …. The mechanics of practice and what it structurally changes ⟦change⟧ crucial to understand. Repetition with enough weighting turns recurring…

**HTML-only text:**

```text
are
```

**Current-only text:**

```text
is
```


### Change 32 — HTML-only

**Context:** …deal in practice shrinks the search space and frees attention ⟦change⟧ assuming targets remain stable. Of course often this isn't…

**HTML-only text:**

```text
,
```


### Change 33 — HTML-only

**Context:** …and frees attention assuming targets remain stable. Of course ⟦change⟧ often this isn't the case as chunks allow us to…

**HTML-only text:**

```text
,
```


### Change 34 — Replacement

**Context:** …attention assuming targets remain stable. Of course often this ⟦change⟧ the case as chunks allow us to explore targets that…

**HTML-only text:**

```text
isn’t
```

**Current-only text:**

```text
isn't
```


### Change 35 — Replacement

**Context:** …to explore harder problems that otherwise would not be possible ⟦change⟧ naturally our system gravitates towards these problems to satisfy underlying…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 36 — Replacement

**Context:** …Slack is meaningful here when talking about deliberate practice, ⟦change⟧ mindful repetition on performance tasks just beyond the edge of…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 37 — Replacement

**Context:** …mindful repetition on performance tasks just beyond the edge of ⟦change⟧ capabilities. " Difficulty by itself does not produce learning…

**HTML-only text:**

```text
one’s
```

**Current-only text:**

```text
one's
```


### Change 38 — Replacement

**Context:** …performance tasks just beyond the edge of one's capabilities. ⟦change⟧ Difficulty by itself does not produce learning. Repeated perceived…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 39 — Replacement

**Context:** …of practice may deepen automaticity but cease producing refinement on ⟦change⟧ edge of capabilities. Of course there are varying levels…

**HTML-only text:**

```text
one’s
```

**Current-only text:**

```text
one's
```


### Change 40 — Replacement

**Context:** …needed to be conditioned deeply into the embodied layer so ⟦change⟧ automatic, while some only needs to be brought up…

**HTML-only text:**

```text
it’s
```

**Current-only text:**

```text
it's
```


### Change 41 — HTML-only

**Context:** …, but be inaccessible when those cues disappear. Therefore ⟦change⟧ understanding invariants, factors that stay the same across problems…

**HTML-only text:**

```text
,
```


### Change 42 — HTML-only

**Context:** …factors that stay the same across problems, is important ⟦change⟧ as to not be reliant on specific cues. Practice…

**HTML-only text:**

```text
so
```


### Change 43 — Current-only

**Context:** …that stay the same across problems, is important as ⟦change⟧ not be reliant on specific cues. Practice should remove…

**Current-only text:**

```text
to
```


### Change 44 — HTML-only

**Context:** …the same across problems, is important as to not ⟦change⟧ be reliant on specific cues. Practice should remove support…

**HTML-only text:**

```text
to
```


### Change 45 — Replacement

**Context:** …priors we hold. As Justin Skycak puts it, ⟦change⟧ Having your prerequisites in place is the difference between something…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 46 — Replacement

**Context:** …is the difference between something seeming confusing and inaccessible versus ⟦change⟧ wait... that’s all it is? '…

**HTML-only text:**

```text
‘
```

**Current-only text:**

```text
'
```


### Change 47 — Replacement

**Context:** …' wait... that’s all it is? ⟦change⟧ The novice and expert therefore do not merely apply different…

**HTML-only text:**

```text
’ ”
```

**Current-only text:**

```text
' "
```


### Change 48 — Replacement

**Context:** …apply different amounts of reasoning to the same represented problem ⟦change⟧ their fields reconstruct the problem entirely different. As Terence…

**HTML-only text:**

```text
;
```

**Current-only text:**

```text
,
```


### Change 49 — Replacement

**Context:** …same represented problem, their fields reconstruct the problem entirely ⟦change⟧ . As Terence Tao says, " You’re so certain…

**HTML-only text:**

```text
differently
```

**Current-only text:**

```text
different
```


### Change 50 — Replacement

**Context:** …the problem entirely different. As Terence Tao says, ⟦change⟧ You’re so certain that a certain approach is going to…

**HTML-only text:**

```text
“
```

**Current-only text:**

```text
"
```


### Change 51 — Replacement

**Context:** …question is key to actually getting a satisfactory answer. ⟦change⟧ The expert will see relations, invariants, constraints,…

**HTML-only text:**

```text
”
```

**Current-only text:**

```text
"
```


### Change 52 — Replacement

**Context:** …, constraints, and available actions that the novice literally ⟦change⟧ perceive, not because of magic, but because practice…

**HTML-only text:**

```text
doesn’t
```

**Current-only text:**

```text
doesn't
```


### Change 53 — Replacement

**Context:** …they can also distinguish differences within those patterns that the ⟦change⟧ field collapses together. This resembles the skill of sensory…

**HTML-only text:**

```text
novice’s
```

**Current-only text:**

```text
novice's
```


### Change 54 — HTML-only

**Context:** …practice, meaningful abstractions can be built from concrete examples ⟦change⟧ which makes them valuable. Encountering an abstraction, like…

**HTML-only text:**

```text
,
```


### Change 55 — HTML-only

**Context:** …properties the definition holds and apply it elsewhere? High ⟦change⟧ quality training data allows us to practice holding structure and…

**HTML-only text:**

```text
-
```


### Change 56 — Replacement

**Context:** …is getting at. As we return to wisdom, ⟦change⟧ important to consider how we can translate practice into its…

**HTML-only text:**

```text
it’s
```

**Current-only text:**

```text
it's
```


### Change 57 — HTML-only

**Context:** …us the transparency and flexibility to revise the field, ⟦change⟧ as to not hold current models so rigidly. Wisdom…

**HTML-only text:**

```text
so
```


### Change 58 — Current-only

**Context:** …the transparency and flexibility to revise the field, as ⟦change⟧ not hold current models so rigidly. Wisdom orients that…

**Current-only text:**

```text
to
```


### Change 59 — HTML-only

**Context:** …and flexibility to revise the field, as to not ⟦change⟧ hold current models so rigidly. Wisdom orients that flexibility…

**HTML-only text:**

```text
to
```


### Change 60 — Current-only

**Context:** …path. We must practice acting decisively without contractive defense ⟦change⟧ and to not hold gestalts with high ontological authority as…

**Current-only text:**

```text
,
```


### Change 61 — Current-only

**Context:** …We must practice acting decisively without contractive defense, and ⟦change⟧ not hold gestalts with high ontological authority as to remain…

**Current-only text:**

```text
to
```


### Change 62 — Replacement

**Context:** …practice acting decisively without contractive defense, and to not ⟦change⟧ gestalts with high ontological authority as to remain open to…

**HTML-only text:**

```text
holding
```

**Current-only text:**

```text
hold
```


### Change 63 — HTML-only

**Context:** …, and to not hold gestalts with high ontological authority ⟦change⟧ as to remain open to feedback without losing direction.…

**HTML-only text:**

```text
so
```


## Notes

### Change 1 — Current-only

**Current-only text:**

```text
on why shame doesn't work that well: {Your framework gives you three converging reasons, and the fact that they converge is what makes the intuition worth trusting. The mechanical one is your own 6. 1 claim: lowering authority requires slack, and shame removes slack. It's a threat to a trunk - level prior about self, so the system is doing emergency defense of load - bearing structure, which is precisely the condition where the field increases precision on the existing model rather than exploring alternatives. So shame arrives asking for change at exactly the moment change is least affordable. That also explains why it can produce compliance without producing update: the behavior stops while the structure stays intact, because suppression is cheaper than revision. The somatic one you already have. Shame produces contraction, and the contraction generates interoceptive evidence that the shameful state is real, which raises precision on " I am bad " rather than on the specific behavior. That's why shame generalizes to the person while guilt can stay attached to the act. And sustained, it latches, which is your reachability problem: the states you'd need in order to act differently become unavailable because the body can't produce them, so it isn't a motivation failure at all. The third is targets. Shame installs a demand that the current state not be happening, which is the second - order control that starts the suffering loop, so the effort goes into not - being - this rather than into becoming something. That's the direction - versus - pressure distinction, and it predicts both failure modes you named: collapse when there's no viable path, rebellion when the pressure itself becomes the thing to escape. What works instead in your terms is a target with direction and enough slack to hold the current state without defending it, which is exactly the ideal parent figure case. One thing worth checking rather than assuming: shame plausibly does change behavior reliably in some contexts, especially socially enforced ones, and the honest version of your claim is that it produces defended compliance rather than structural update. That's a stronger claim anyway, and it's falsifiable.} on what a good model is: {The core of what you're reaching for is already in your framework, and it's cleaner than " correct feedback. " Your existing claim is that a good model lowers the integration cost of inputs you couldn't plan for, across long horizons. What you're adding now is the mechanism that makes that possible: a model is good to the degree it tracks invariants, the things that hold across contexts rather than only within the one you learned it in. Invariants are why feedback is reliable, not the other way around. That also explains your flat - earther case without new machinery, since their model tracks regularities of an echo chamber rather than of the world, so it works locally and fails on anything they didn't plan for. The math point needs care, because verification there isn't feedback from reality; it's feedback from a formal system. Your framework already handles this in 3. 6, where truth - making is relative to the ontological constraints of the frame. So math is the case where the constraint is maximally explicit and cheap to consult, which is why the loop runs fast, and it's the exception rather than the model for how open loops usually work. Worth saying, since a reader will otherwise take verification as the paradigm case and be misled about domains where the constraint is slower and noisier. The epistemic - ignorance connection is the strongest thing in what you wrote, and I'd build the section around it. " This will give lasting satisfaction " is a model that fails against an invariant, and the failure shows up as target error that keeps reopening. That makes the three characteristics into descriptions of invariants a model can either track or fight, and it gives you a non - moralizing reason why they matter: fighting an invariant means paying continuously. It also makes your depth point precise. A wrong math model is cheap because little rests on it; a wrong model of what a relationship requires is expensive because it sits under everything. So the priority of which models to get right follows from depth rather than from importance in any vaguer sense. Your defense - mechanisms intuition fits here too: a defense is what protects a deep model from the feedback that would update it, which is exactly your self - maintaining authority mechanism from 6. 1. Two cautions. Don't let " reliable feedback " collapse into " resonance, " since you already argued resonance reports fit with the current field. And on compression, the answer you want is that models tracking invariants compress well when the invariants are statable, which is why math notation works and why a model of God does not; the structure is real but there's little above it to compress into. On wisdom, I'd resist making it " having good models, " since that loses the conman distinction. Better: wisdom includes tracking invariants that concern what actually matters to beings, which is a target claim rather than a modeling one.}
```
