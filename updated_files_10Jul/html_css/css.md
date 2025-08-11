# 21. What is CSS?
CSS stands for Cascading Style Sheets. It is a stylesheet language used to describe the
presentation of a document written in HTML.

# 22. What are the different ways to include CSS in an HTML document?
CSS can be included in an HTML document using inline styles, internal stylesheets
(using the <style> tag), or external stylesheets (linked using the <link> tag).

# 23. What is the box model in CSS?
The box model in CSS describes the layout and rendering of elements in a document. It
consists of content, padding, border, and margin.

# 24. What is the purpose of the float property in CSS?
The float property is used to align elements to the left or right within their containing
element. It is commonly used for creating layouts.

# 25. Explain the difference between display: block, display: inline, and display:
inline-block.
display: block makes an element a block-level element, taking up the full width
available, and starting on a new line. display: inline makes an element an
inline-level element, allowing it to flow within the text. display: inline-block
makes an element an inline-level block container, allowing it to have block-like behavior
while flowing within the text.

# 26. What is the purpose of the position property in CSS?
The position property specifies the positioning method used for an element. Values
include static, relative, absolute, fixed, and sticky.

# 27. Explain the difference between margin and padding.
Margin is the space outside the border of an element, while padding is the space
between the element's content and its border.

# 28. What is the CSS selector specificity?
CSS selector specificity determines which CSS rule takes precedence when multiple
rules apply to the same element. It is calculated based on the type of selector used.
29. What are pseudo-classes in CSS?
Pseudo-classes are keywords added to selectors that specify a special state of the
selected element. Examples include :hover, :active, :first-child, etc.
30. What is the purpose of the z-index property in CSS?
The z-index property specifies the stack order of an element along the z-axis
(front/back). It is used to control the stacking order of positioned elements.
31. What is the purpose of the clear property in CSS?
The clear property specifies whether an element should be moved below (cleared)
floating elements that precede it in the document flow.
32. What is the difference between the display: none and visibility: hidden properties?
display: none hides the element completely and removes it from the document flow,
while visibility: hidden hides the element but still occupies space in the
document flow.
33. What is the CSS box-sizing property used for?
The box-sizing property defines how the total width and height of an element are
calculated, including its padding and border.
34. What is the purpose of the overflow property in CSS?
The overflow property specifies what happens if the content of an element overflows its
box. Values include visible, hidden, scroll, and auto.
35. What is the purpose of the @media rule in CSS?
The @media rule is used to apply different styles for different media types/devices, such
as screen, print, or handheld devices.
36. What is a CSS sprite?
A CSS sprite is a technique used to combine multiple images into a single image file,
reducing the number of server requests and improving performance.
37. What is the purpose of the @import rule in CSS?
The @import rule is used to import an external style sheet into another style sheet. It can
be used to modularize stylesheets and improve organization.
38. What is the difference between margin: auto and margin: 0 auto?
margin: auto centers an element horizontally within its containing element, while
margin: 0 auto centers an element both horizontally and vertically within its
containing element.
39. Explain the difference between em and rem units in CSS.
em units are relative to the font size of the element itself, while rem units are relative to
the font size of the root element (usually the <html> tag).
40. What is the purpose of the CSS calc() function?
The calc() function allows for mathematical calculations to be performed within CSS
property values. It is commonly used for dynamic sizing and positioning.
Intermediate Questions
41. What is the CSS specificity of the following selector: .class1 .class2?
The CSS specificity of .class1 .class2 is 20 (10 for each class).
42. Explain the difference between padding-box and border-box values for the
box-sizing property.
padding-box includes padding but not the border in the total width/height calculation,
while border-box includes both padding and border.
43. What is the purpose of the CSS :nth-child() pseudo-class?
The :nth-child() pseudo-class selects elements based on their position in a group of
siblings. It allows for targeting elements that match a specific pattern.
44. What is the purpose of the CSS flexbox layout model?
The CSS flexbox layout model is used for creating flexible layouts where elements within
a container can be dynamically resized and aligned.
45. Explain the difference between inline and block-level elements.
Block-level elements start on a new line and take up the full width available, while inline
elements do not start on a new line and only take up as much width as necessary.
46. What is the purpose of the CSS transform property?
The transform property allows for the transformation of elements in two-dimensional or
three-dimensional space, including scaling, rotating, skewing, and translating.
47. What is the purpose of the CSS @keyframes rule?
The @keyframes rule is used to define animations in CSS by specifying a series of
keyframes at different points in the animation.
48. Explain the difference between static, relative, absolute, fixed, and sticky
positioning in CSS.
Static positioning is the default position where elements are positioned according to the
normal flow of the document. Relative positioning positions an element relative to its
normal position. Absolute positioning positions an element relative to its nearest
positioned ancestor. Fixed positioning positions an element relative to the viewport.
Sticky positioning is a hybrid of relative and fixed positioning, where the element is
treated as relatively positioned until it crosses a specified threshold, after which it is
treated as fixed positioning.
49. What is the purpose of the CSS grid layout model?
The CSS grid layout model is used for creating grid-based layouts where elements are
placed into rows and columns, allowing for more complex and flexible layouts than
traditional methods.
50. Explain the purpose of the CSS transition property.
The transition property allows for the smooth transition of CSS property values over a
specified duration, easing function, and delay.
Advanced Questions
51. What is the purpose of the CSS pseudo-elements ::before and ::after?
The ::before and ::after pseudo-elements are used to insert content before and after an
element's content, respectively. They are often used for decorative elements or adding
content using CSS.
52. Explain the concept of specificity in CSS and how it is calculated.
Specificity in CSS determines which style rule takes precedence when multiple rules
apply to the same element. It is calculated based on the type of selector used, with inline
styles having the highest specificity, followed by IDs, classes, and elements.
53. What are the advantages and disadvantages of using CSS preprocessors like
Sass or Less?
Advantages of CSS preprocessors include the ability to use variables, mixins, nesting,
and functions, which improve code maintainability and reusability. Disadvantages include
the need for an additional build step and potential complexity for beginners.
54. What is the purpose of the CSS object-fit property?
The object-fit property specifies how the content of an element should be resized to fit its
container. Values include fill, contain, cover, none, and scale-down.
55. What is the purpose of the CSS perspective property?
The perspective property is used in conjunction with 3D transforms to create depth and
perspective for transformed elements.
56. Explain the difference between CSS transitions and CSS animations.
CSS transitions are used to smoothly change CSS property values over a specified
duration, while CSS animations allow for more complex and customized animations by
defining keyframes and animation properties.
57. What is the purpose of the CSS filter property?
The filter property applies graphical effects like blur, grayscale, contrast, brightness, and
more to an element's content.
58. What are vendor prefixes in CSS, and why are they used?
Vendor prefixes are prefixes added to CSS property names to specify which browser
engine the property applies to. They are used to provide experimental or vendor-specific
implementations of CSS features before they are standardized.
59. What is the purpose of the CSS specificity hack?
The CSS specificity hack is a technique used to increase the specificity of a selector to
override styles applied by other selectors with lower specificity.
60. What is the purpose of the CSS rem unit, and how does it differ from the em unit?
The rem unit is relative to the font size of the root element, while the em unit is relative to
the font size of the parent element. Rem units provide a more predictable and consistent
way to size elements across the document.
61. Explain the purpose of the CSS @supports rule.
The @supports rule checks if the browser supports a specific CSS property and value
combination, allowing for the conditional application of styles.
62. What is the purpose of the CSS content property?
The content property is used with the ::before and ::after pseudo-elements to insert
generated content, such as text, images, or icons.
63. What is the CSS Grid Layout Module Level 2 and its features?
CSS Grid Layout Module Level 2 builds upon the features of the original CSS Grid
Layout Module, introducing subgrids, aspect ratio control, gap shorthand, and more.
64. Explain the concept of responsive web design and how CSS is used to achieve it.
Responsive web design is an approach to design and development that ensures web
pages render well on various devices and window or screen sizes. CSS media queries
are used to apply different styles based on the device's characteristics, such as width,
height, and orientation.
65. What is the purpose of the CSS perspective-origin property?
The perspective-origin property specifies the origin point of the perspective for 3D
transforms, determining where the viewer is looking at the 3D scene.