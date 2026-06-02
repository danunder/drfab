---
title: "DrFab"
---
---
# Leave the homepage title empty to use the site title
title: ''
summary: 'Custom 3D modelling, 3D printing, and vacform packaging for small businesses in Ontario. No minimums.'
date: 2026-01-05
type: landing

sections:
  # Hero
  - block: dev-hero
    id: hero
    content:
      username: me
      greeting: ""
      show_status: false
      show_scroll_indicator: true
      typewriter:
        enable: true
        prefix: "We make"
        strings:
          - "prototypes"
          - "custom packaging"
          - "small-batch products"
          - "the thing that doesn’t exist yet"
        type_speed: 60
        delete_speed: 40
        pause_time: 2500
      cta_buttons:
        - text: Get a Free Quote
          url: "#contact"
          icon: envelope
        - text: See Our Work
          url: "#work"
          icon: arrow-down
    design:
      style: centered
      avatar_shape: square
      animations: true
      background:
        color:
          light: "#fafafa"
          dark: "#0a0a0f"
      spacing:
        padding: ["6rem", "0", "4rem", "0"]

  # What We Do - Services
  - block: markdown
    id: services
    content:
      title: "One shop. Whole chain."
      subtitle: ""
      text: |-
        DrFab takes your idea from sketch to shelf-ready product — all under one roof. No minimum orders. No weeks of back-and-forth between vendors.

        ---

        ### 3D Modelling

        Professional CAD and sculpting. We turn your napkin sketch, photo, or description into a production-ready 3D model.

        ### 3D Printing

        FDM and resin printing for prototypes, end-use parts, and everything in between. Multiple materials for any application.

        ### Custom Packaging

        Blister packs, clamshells, and trays — vacformed from 3D-printed molds. Retail-quality packaging in quantities of 1 to 500.

        ### Full-Service

        Model → Print → Package → Done. One quote, one timeline, one point of contact.
    design:
      columns: '1'
      background:
        color:
          light: "#ffffff"
          dark: "#0d0d12"
      spacing:
        padding: ["4rem", "0", "4rem", "0"]

  # Who We Help
  - block: markdown
    id: clients
    content:
      title: "Built for small runs and big ideas"
      subtitle: ""
      text: |-
        | If you’re a... | We can help you... |
        |----------------|-------------------|
        | **Startup or inventor** | Prototype your product and create investor-ready samples |
        | **Indie toy or game creator** | Model, print, and blister-package your creations |
        | **Small brand** | Get retail-ready packaging without a 5,000-unit minimum |
        | **Agency or marketing team** | Create physical mockups and presentation pieces fast |
        | **Manufacturer** | Replace broken parts, make custom jigs and fixtures |
        | **Anyone with an idea** | Make the thing that doesn’t exist yet |
    design:
      columns: '1'
      background:
        color:
          light: "#f5f5f5"
          dark: "#08080c"
      spacing:
        padding: ["4rem", "0", "4rem", "0"]

  # How It Works
  - block: markdown
    id: process
    content:
      title: "Three steps to real."
      subtitle: ""
      text: |-
        **1. Tell us what you need**
        Send us a sketch, a photo, a file, or just a description. We’ll scope it out and send you a clear quote within 48 hours.

        **2. We design and build**
        Ryan models it. Dan prints, forms, and finishes it. You approve the design before we go to production. No surprises.

        **3. Pick up or we ship**
        Local pickup or shipped anywhere in Ontario. Your project, in your hands.
    design:
      columns: '1'
      background:
        color:
          light: "#ffffff"
          dark: "#0d0d12"
      spacing:
        padding: ["4rem", "0", "4rem", "0"]

  # Portfolio / Work Samples
  - block: portfolio
    id: work
    content:
      title: "Recent Work"
      subtitle: "A selection of recent projects"
      count: 0
      filters:
        folders:
          - projects
      buttons:
        - name: All
          tag: '*'
        - name: Prototyping
          tag: Prototyping
        - name: Packaging
          tag: Packaging
        - name: Parts
          tag: Parts
      default_button_index: 0
    design:
      columns: 3
      background:
        color:
          light: "#f5f5f5"
          dark: "#08080c"
      spacing:
        padding: ["4rem", "0", "4rem", "0"]

  # About / Team
  - block: markdown
    id: about
    content:
      title: "Who’s behind DrFab"
      subtitle: ""
      text: |-
        **Dan** — Operations & Fabrication
        Materials scientist and developer with years of 3D printing experience. Runs production, handles materials selection, builds tooling, and operates the vacform line. If it needs to be made, Dan figures out how.

        **Ryan** — Design & Modelling
        Senior 3D modeller with professional experience in toy design and packaging. Creates production-ready models from any starting point — a sketch, a scan, a photo, or just a conversation. If it needs to look right, Ryan makes it happen.
    design:
      columns: '1'
      background:
        color:
          light: "#ffffff"
          dark: "#0d0d12"
      spacing:
        padding: ["4rem", "0", "4rem", "0"]

  # Pricing
  - block: markdown
    id: pricing
    content:
      title: "Transparent pricing"
      subtitle: ""
      text: |-
        | Service | Starting at |
        |---------|------------|
        | 3D print (you provide the file) | $50 |
        | 3D modelling + print | $250 |
        | Custom blister packaging (per design) | $300 |
        | Full-service: model + print + package | $1,000 |
        | Consultation | $100/hr |

        *Every project is different. Send us the details and we’ll quote it properly — no charge, no obligation.*
    design:
      columns: '1'
      background:
        color:
          light: "#f5f5f5"
          dark: "#08080c"
      spacing:
        padding: ["4rem", "0", "4rem", "0"]

  # FAQ
  - block: markdown
    id: faq
    content:
      title: "Questions"
      subtitle: ""
      text: |-
        **What file formats do you accept?**
        STL, OBJ, STEP, 3MF, or native files from Blender, ZBrush, Fusion 360, SolidWorks, etc. Not sure? Send it over and we’ll figure it out.

        **I don’t have a 3D model. Can you still help?**
        Absolutely. Send a sketch, a photo, measurements, or just describe what you need. Modelling is one of our core services.

        **What materials can you print in?**
        PLA, PETG, ABS, ASA, TPU, Nylon, and more (FDM). Standard, tough, flexible, and castable resins. We’ll recommend the right material for your application.

        **How fast can you turn things around?**
        Standard turnaround is 1–2 weeks depending on complexity. Rush service available for an additional fee.

        **What’s the minimum order?**
        One. Literally one. That’s the whole point.

        **Do you ship?**
        Yes — anywhere in Ontario (and beyond). Local pickup is also free.

        **Is there a setup fee for packaging?**
        The first blister mold is included in the quote. If you need additional sizes or designs, each mold is quoted separately. Once the mold exists, per-unit costs are low.

        **Can I get a sample before committing to a run?**
        Yes. We always recommend approving a sample before production runs. It’s built into our process.
    design:
      columns: '1'
      background:
        color:
          light: "#ffffff"
          dark: "#0d0d12"
      spacing:
        padding: ["4rem", "0", "4rem", "0"]
  # Blog
  - block: collection
    id: blog
    content:
      title: Latest Posts
      subtitle: ''
      text: ''
      filters:
        folders:
          - blog
        exclude_featured: false
      count: 3
      order: desc
    design:
      view: card
      columns: 3
      background:
        color:
          light: "#ffffff"
          dark: "#0d0d12"
      spacing:
        padding: ["4rem", "0", "4rem", "0"]
  # Contact
  - block: contact-info
    id: contact
    content:
      title: "Let’s make something"
      subtitle: "Tell us about your project. We’ll get back to you within 24 hours with questions or a quote."
      text: ""
      email: hello@drfab.ca
      autolink: true
    design:
      columns: '1'
      background:
        color:
          light: "#f5f5f5"
          dark: "#08080c"
      spacing:
        padding: ["4rem", "0", "4rem", "0"]

  # CTA Card
  - block: cta-card
    content:
      title: "From Concept to Product. No Minimums."
      text: |-
        Custom 3D printing, modelling, and packaging for Ontario’s makers, creators, and small businesses.
      button:
        text: 'Get a Free Quote'
        url: '#contact'
        new_tab: false
    design:
      card:
        css_class: 'bg-gradient-to-br from-primary-200 via-primary-100 to-secondary-200 dark:from-primary-600 dark:via-primary-700 dark:to-secondary-700'
        text_color: dark
      background:
        color:
          light: "#ffffff"
          dark: "#0a0a0f"
      spacing:
        padding: ["4rem", "0", "6rem", "0"]
---
