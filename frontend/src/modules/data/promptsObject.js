const promptsObject = [
    { text: "Describe your Cognitive Style score ranges." },
    { text: "How are your facet values similar or different from another person who shared theirs?" },
    { text: "What is one big thing you and your teammates have in common?" },
    { text: "What is one big thing you and your teammates do differently?" },
    { text: "How did your cognitive styles affect how you approached the previous assignment?" },
    { text: "Name a specific task or two that you hesitate to tackle. Why, and what kind of support would help you overcome the hesitation?" },
    { text: "Give a concrete example for one or more facets of how the style affects your interactions with technology or how you learn." },
    { text: "Give a concrete example for one or more facets of how you work in a team." },
    { text: "How might your cognitive styles affect how you learn a new skill?" },
    { text: "What is a situation when your facet values might change?" }
];

// Automatically add IDs
const promptsWithIds = promptsObject.map((prompt, index) => ({
    ...prompt,
    id: index + 1
}));

// Export this as the default
export default promptsWithIds;
