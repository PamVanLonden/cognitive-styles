const facets = [
    {
        "facetDefinitions": {
            "motivations": {
                "description": "Reasons for using technology",
                "facetValues": {
                    "taskCompletion": {
                        "description": "Preferring to use tech for task accomplishment",
                        "example": "When it comes to technology, I only want to use it to get something done and move on with my life."
                    },
                    "techInterest": {
                        "description": "Preferring to use tech for enjoyment and learning",
                        "example": "I like learning everything a device can do. Moreover, I enjoy experimenting."
                    }
                }
            },
            "InformationProcessingStyle": {
                "description": "Pattern of gathering data relative to taking action on that data",
                "facetValues": {
                    "comprehensive": {
                        "description": "Preferring to gather enough information to form a complete understanding before taking action",
                        "example": "I like having a complete picture of what I am working with before diving in. I do not work well with only selective knowledge."
                    },
                    "selective": {
                        "description": "Preferring to gather minimal information and act on the first promising option",
                        "example": "I don't want to process any information I'm not 100% convinced will be useful to me."
                    }
                }
            },
            "attitudeTowardsRisk": {
                "description": "Willingness to take technological risks",
                "facetValues": {
                    "riskAverse": {
                        "description": "Preferring to use familiar, predictable features over unfamiliar technologies",
                        "example": "I always worry about wasting my time and trying new things that might not turn out well."
                    },
                    "riskTolerant": {
                        "description": "Willing to take risks using unproven features of technology",
                        "example": "I dive in headfirst and throw caution to the wind. The undo button tends to be my best friend."
                    }
                }
            },
            "techSelfEfficacy": {
                "description": "Self-judgment about ability to use technology",
                "facetValues": {
                    "low": {
                        "description": "Less confident about performing unfamiliar technological tasks",
                        "example": "If it is completely foreign, I am more cautious or hesitant in my skill."
                    },
                    "high": {
                        "description": "More confident about technological abilities and persistence",
                        "example": "I will spend a lot of time trying to figure out new technology before giving up."
                    }
                }
            },
            "learningStyle": {
                "description": "Approach to forming an understanding of new technology features",
                "facetValues": {
                    "byProcess": {
                        "description": "Preferring organized learning with structured guidance",
                        "example": "I like to follow a guide or tutorial when learning something new. Tinkering stresses me out."
                    },
                    "byTinkering": {
                        "description": "Preferring playful experimentation and self-directed exploration",
                        "example": "I like to tinker and explore. I think the best way to learn about a feature is to try it out myself, rather than read about it."
                    }
                }
            }
        }
    }
];

export default facets;
