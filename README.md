# Planning

Source Directory and a Dist Directory
Gulp and Sass
Reset/Normalize, Bootstrap, Font Awesome etc.
For now, just one file, but could look at breaking that up
Print



# ITCSS
- A meta-framework (a framework for frameworks) created by Harry Roberts
- Inverted Triangle achitecture for CSS
- A sane, scalable, managed architecture

## CSS' Fault
- Cascade and inheritance
- Very loose
- Highly dependent on source order
- Not very expressive
- Lots of gotchas
- Specificity

## Our Fault
- Lack of documentation
- Lack of structure, QA
- Mixture of abilities
- Different styles
- Not aware of what already exists
- Adding new styles to end of stylesheets

## Idea
- Write CSS in specificity order
- Generic to Explicit
- Far Reaching to Local
- Low Specificity to High Specificity

## Layers
- Settings - global variables
- Tools - mixins and functions
- Generic - ground zero styles e.g. normalize, resets etc.
- Base - unclassed HTML elements i.e. type selectors
- Objects - cosmetic free design patters e.g. grid
- Components - designed UI components
- Trumps - helpers and overrides
