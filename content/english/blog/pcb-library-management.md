---
title: "PCB Library Management: A Guide to Structure, Workflow, and Best Practices"
meta_title: "PCB Library Management: A Guide to Structure, Workflow, and Best Practices"
description: "Demystifying PCB Library Management: Learn essential strategies, structures, and workflows in our latest blog post."
date: 2024-02-26T21:09:57+01:00
image: "/images/blog/pcb-library-management/thumbnail.jpg"
categories: ["design"]
author: "Embedded Consultants"
tags: ["blog", "embedded-consultants", "Library", "PCB"]
draft: false
---

### Everyday pain with libraries

Are you proud of your companies or personal component library? Would you show it off and brag about it?

Component libraries or for short Libraries are a big pain point of PCB designers and companies designing electronics products. 

The question 'Why?' can be answered with many answers, but the most common we heard is 'There is no strict guideline in place', 'We need a dedicated person for keeping the library tidy, we don't have time for it!', 'Our library is filled with a bunch of obselete parts and we just keep adding new ones!'

To be more mathmatical about this case, the complexity and the annoyingness of a component library grows with the number of projects and the number of engineers using that component library. Yikes!

Let's cut the drama and let us share our thoughts on what an ideal library is, how it of course doesn't excists and what are we doing to achieve it near ideal. 

### What is an ideal library?
In electronics we always learn about ideal components. Ideal diodes, ideal this, ideal that. 
There is no such thing, but lets continue this train of thought with component libraries in mind.  

Our thought is that an ideal library is one that is:
- updated constantly (price, stock, availability)
- all footprints are checked (preferably manufactured, soldered)
- there are no NR (Not recommended for new design) or OBSELETE components
- has adequate 3D models (preferably in-house designed)
- has a guideline that is followed throughout the whole library (layer naming, tolerances, footprint naming, symbols)
- it is version controlled (preferably with Git)

Of course, this list could go on, but we quickly realize that it is HARD to have this kind of library and not many companies can afford having this kind of library!

### How are the major tools solving this?

Major tools like Altium with introducing the Altium 365 platform is going toward achieving the full connection, which is:

A full connection would be: Symbol - Footprint - 3D model - Datasheet - Stock 

Companies like AISLER have their own PushTo feature where you only have to have the MPN of the component in your library and they will detect it and get pricing accordingly! Very clever, but still not the full connection. 

At the end of the day, a DRC tool, BOM tool or a third-party database won't fully protect you from making a big mistake on your footprint design, BUT they minimize it by a LOT! 

On all the above we still hear the comment "We want to offline manage or have our own server with our component library!"

### Automated or a separate person?

We have heard the following many times: "The team doesn't have time to organise the library, we just need to have a librarian on the payroll!"

The librarian in this context is an engineer, whos job is to:
- don't let any engineers touch the library
- design the symbols/footprints for each requested component - in some cases this is not a requirement, mostly due to time constraints on projects and the amount of symbols/footprints needed for each projects
- check symbols/footprints
- check other information like stock, availability etc.
- remove unwanted components like NR or obselete ones. 
- help engineers get connected to the library and set it up in their tool of choice

There have been tools that are trying to solve this by automating, but most engineers we met want to be sure that the footprint is correct by drawing it in-house, especially if they want to add their own twist, like pads for hand-soldering, grid like solder paste etc..

The real questions are 'How big is the team and the project numbers?' and 'Do we have enough cash flow to introduce a librarian in the mix, and will they have sufficient amount of work to do?'

### What are we doing?

"Yeah yeah, you guys criticize every method, lets hear what you are doing!", our answer is "Nothing special!"

As we are a small team, we don't have a librarian, but we have to rely on the professional approach of the team to make sure that our library is clean. 

- Standard
    - in the library we have a dummy component, which has all the layers set. When a new component is created, the layers are copied over, which eliminates the potential problem of not having the layers in sync. 
    - in case we don't design it ourselves, we use Altiums IPC® Compliant Footprint Wizard, which uses the IPC naming standard as well. We follow that standard for naming. 
    - 3D models are downloaded from the manufacturers website or if its a standard components (like a resistor 0603) we just take a standard model
    - in case 3D model is nowhere to be found, our CAD engineers design one for us
- Documentation
    - we try not to add any unnecessary info to the component, like "Temperature operating range", because it is not important. What is important is the "Manufacturer", "MPN".
- Life cycle
    - every 6-12 months we check all components in our library
    - unfortunately most NR/obsolete parts are detected while ordering
- Collaboration
    - we store our library on Git
    - using Merge requests, we have one person who approves the addition of new components, thus doing a review on the footprint, symbol, 3D model and information. This adds "another pair of eyes" in the mix when adding components. 
- Integration with CAD
    - for now, we use compiled libraries with Altium, which means that we upload compiled libraries to Git. 
    - we use compiled libraries, because that way Altium can give us warnings/errors based on the symbol and footprint link. 
    - this is definitely not the ideal way of doing it. We will be exploring this topic further in the future. 
- "Another pair of eyes"
    - the best tool out there!
    - our good practice is to have one engineer check the datasheet and the other the symbol and footprint at the same time. This eliminates small mistakes like pin swapping that can lead to missing a deadline or worse!

Based on the need of the client, we sometimes don't use our own library, but instead we build a local library made just for that specific project. This adds time (because standard components like 0603 resistors have to be added), but it is a good way to share it with the clients. 
(Note: Altium can export a separate library that contains all the components used only for a specific project)

### Conclusion

At the end of the day, libraries are hard to maintain. Most companies don't have the budget or the need for a librarian to keep everything in order, that is why we recommend the following:
- establish a source control platform (Git is preferred)
- establish a specific standard for every major part of the library
- do a 6-12 month sweep of the library to remove obsolete components
