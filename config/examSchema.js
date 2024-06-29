const examSchemaConfig = `{
  "description": "Vietnam University Entrance Examination - English",
  "type": "object",
  "properties": {
    "parts": {
      "type": "object",
      "properties": {
        "part1": {
          "type": "object",
          "properties": {
            "questionType": {
              "type": "string",
              "description": "Choose the word whose underlined part is pronounced differently from the rest."
            },
            "numberOfQuestions": {
              "type": "integer",
              "description": "2"
            },
            "questions": {
              "type": "array",
              "description": "List of questions.",
              "items": {
                "type": "object",
                "properties": {
                  "question": {
                    "type": "string",
                    "description": "The question."
                  },
                  "options": {
                    "type": "array",
                    "description": "List of options.",
                    "items": {
                      "type": "string"
                    }
                  },
                  "correctOption": {
                    "type": "string",
                    "description": "Correct option."
                  },
                  "answerDetail": {
                    "type": "string",
                    "description": "Details or explanation for the answer."
                  }
                },
                "required": [
                  "question",
                  "options",
                  "correctOption",
                  "answerDetail"
                ]
              }
            }
          },
          "required": [
            "questionType",
            "numberOfQuestions",
            "questions"
          ]
        },
        "part2": {
          "type": "object",
          "properties": {
            "questionType": {
              "type": "string",
              "description": "Choose the word that has a different stress pattern from the rest."
            },
            "numberOfQuestions": {
              "type": "integer",
              "description": "2"
            },
            "questions": {
              "type": "array",
              "description": "List of questions.",
              "items": {
                "type": "object",
                "properties": {
                  "question": {
                    "type": "string",
                    "description": "The question."
                  },
                  "options": {
                    "type": "array",
                    "description": "List of options.",
                    "items": {
                      "type": "string"
                    }
                  },
                  "correctOption": {
                    "type": "string",
                    "description": "Correct option."
                  },
                  "answerDetail": {
                    "type": "string",
                    "description": "Details or explanation for the answer."
                  }
                },
                "required": [
                  "question",
                  "options",
                  "correctOption",
                  "answerDetail"
                ]
              }
            }
          },
          "required": [
            "questionType",
            "numberOfQuestions",
            "questions"
          ]
        },
        "part3": {
          "type": "object",
          "properties": {
            "questionType": {
              "type": "string",
              "description": "Choose the sentence that best completes the following exchange."
            },
            "numberOfQuestions": {
              "type": "integer",
              "description": "2"
            },
            "questions": {
              "type": "array",
              "description": "List of questions.",
              "items": {
                "type": "object",
                "properties": {
                  "question": {
                    "type": "string",
                    "description": "The question."
                  },
                  "options": {
                    "type": "array",
                    "description": "List of options.",
                    "items": {
                      "type": "string"
                    }
                  },
                  "correctOption": {
                    "type": "string",
                    "description": "Correct option."
                  },
                  "answerDetail": {
                    "type": "string",
                    "description": "Details or explanation for the answer."
                  }
                },
                "required": [
                  "question",
                  "options",
                  "correctOption",
                  "answerDetail"
                ]
              }
            }
          },
          "required": [
            "questionType",
            "numberOfQuestions",
            "questions"
          ]
        },
        "part4": {
          "type": "object",
          "properties": {
            "questionType": {
              "type": "string",
              "description": "Choose the word(s) OPPOSITE in meaning to the underlined word(s)"
            },
            "numberOfQuestions": {
              "type": "integer",
              "description": "2"
            },
            "questions": {
              "type": "array",
              "description": "List of questions.",
              "items": {
                "type": "object",
                "properties": {
                  "question": {
                    "type": "string",
                    "description": "The question."
                  },
                  "options": {
                    "type": "array",
                    "description": "List of options.",
                    "items": {
                      "type": "string"
                    }
                  },
                  "correctOption": {
                    "type": "string",
                    "description": "Correct option."
                  },
                  "answerDetail": {
                    "type": "string",
                    "description": "Details or explanation for the answer."
                  }
                },
                "required": [
                  "question",
                  "options",
                  "correctOption",
                  "answerDetail"
                ]
              }
            }
          },
          "required": [
            "questionType",
            "numberOfQuestions",
            "questions"
          ]
        },
        "part5": {
          "type": "object",
          "properties": {
            "questionType": {
              "type": "string",
              "description": "Choose the word(s) CLOSEST in meaning to the underlined word(s)."
            },
            "numberOfQuestions": {
              "type": "integer",
              "description": "2"
            },
            "questions": {
              "type": "array",
              "description": "List of questions.",
              "items": {
                "type": "object",
                "properties": {
                  "question": {
                    "type": "string",
                    "description": "The question."
                  },
                  "options": {
                    "type": "array",
                    "description": "List of options.",
                    "items": {
                      "type": "string"
                    }
                  },
                  "correctOption": {
                    "type": "string",
                    "description": "Correct option."
                  },
                  "answerDetail": {
                    "type": "string",
                    "description": "Details or explanation for the answer."
                  }
                },
                "required": [
                  "question",
                  "options",
                  "correctOption",
                  "answerDetail"
                ]
              }
            }
          },
          "required": [
            "questionType",
            "numberOfQuestions",
            "questions"
          ]
        },
        "part6": {
          "type": "object",
          "properties": {
            "questionType": {
              "type": "string",
              "description": "Choose the correct word or phrase to complete the sentence."
            },
            "numberOfQuestions": {
              "type": "integer",
              "description": "15"
            },
            "questions": {
              "type": "array",
              "description": "List of questions.",
              "items": {
                "type": "object",
                "properties": {
                  "question": {
                    "type": "string",
                    "description": "The question."
                  },
                  "options": {
                    "type": "array",
                    "description": "List of options.",
                    "items": {
                      "type": "string"
                    }
                  },
                  "correctOption": {
                    "type": "string",
                    "description": "Correct option."
                  },
                  "answerDetail": {
                    "type": "string",
                    "description": "Details or explanation for the answer."
                  }
                },
                "required": [
                  "question",
                  "options",
                  "correctOption",
                  "answerDetail"
                ]
              }
            }
          },
          "required": [
            "questionType",
            "numberOfQuestions",
            "questions"
          ]
        },
        "part7": {
          "type": "object",
          "properties": {
            "questionType": {
              "type": "string",
              "description": "Read the passage and fill in the blanks with suitable word or phrase."
            },
            "numberOfQuestions": {
              "type": "integer",
              "description": "5"
            },
            "passage": {
              "type": "string",
              "description": "The passage for the cloze test."
            },
            "questions": {
              "type": "array",
              "description": "List of blanks/questions.",
              "items": {
                "type": "object",
                "properties": {
                  "question": {
                    "type": "string",
                    "description": "Identifier for the blank."
                  },
                  "options": {
                    "type": "array",
                    "description": "List of options for the blank.",
                    "items": {
                      "type": "string"
                    }
                  },
                  "correctOption": {
                    "type": "string",
                    "description": "Correct option."
                  },
                  "answerDetail": {
                    "type": "string",
                    "description": "Details or explanation for the answer."
                  }
                },
                "required": [
                  "question",
                  "options",
                  "correctOption",
                  "answerDetail"
                ]
              }
            }
          },
          "required": [
            "questionType",
            "numberOfQuestions",
            "passage",
            "questions"
          ]
        },
        "part8": {
          "type": "object",
          "properties": {
            "questionType": {
              "type": "string",
              "description": "Read the passage and answer the questions."
            },
            "numberOfQuestions": {
              "type": "integer",
              "description": "5"
            },
            "passage": {
              "type": "string",
              "description": "The passage."
            },
            "questions": {
              "type": "array",
              "description": "List of questions.",
              "items": {
                "type": "object",
                "properties": {
                  "question": {
                    "type": "string",
                    "description": "The question."
                  },
                  "options": {
                    "type": "array",
                    "description": "List of options.",
                    "items": {
                      "type": "string"
                    }
                  },
                  "correctOption": {
                    "type": "string",
                    "description": "Correct option."
                  },
                  "answerDetail": {
                    "type": "string",
                    "description": "Details or explanation for the answer."
                  }
                },
                "required": [
                  "question",
                  "options",
                  "correctOption",
                  "answerDetail"
                ]
              }
            }
          },
          "required": [
            "questionType",
            "numberOfQuestions",
            "questions"
          ]
        },
        "part9": {
          "type": "object",
          "properties": {
            "questionType": {
              "type": "string",
              "description": "Read the paired passages and answer the questions."
            },
            "numberOfQuestions": {
              "type": "integer",
              "description": "7"
            },
            "passages": {
              "type": "array",
              "description": "List of the paired passages.",
              "items": {
                "type": "string"
              }
            },
            "questions": {
              "type": "array",
              "description": "List of questions.",
              "items": {
                "type": "object",
                "properties": {
                  "question": {
                    "type": "string",
                    "description": "The question."
                  },
                  "options": {
                    "type": "array",
                    "description": "List of options.",
                    "items": {
                      "type": "string"
                    }
                  },
                  "correctOption": {
                    "type": "string",
                    "description": "Correct option."
                  },
                  "answerDetail": {
                    "type": "string",
                    "description": "Details or explanation for the answer."
                  }
                },
                "required": [
                  "question",
                  "options",
                  "correctOption",
                  "answerDetail"
                ]
              }
            }
          },
          "required": [
            "questionType",
            "numberOfQuestions",
            "passages",
            "questions"
          ]
        },
        "part10": {
          "type": "object",
          "properties": {
            "questionType": {
              "type": "string",
              "description": "Choose the sentence so that it has a similar meaning to the original."
            },
            "numberOfQuestions": {
              "type": "integer",
              "description": "3"
            },
            "questions": {
              "type": "array",
              "description": "List of questions.",
              "items": {
                "type": "object",
                "properties": {
                  "question": {
                    "type": "string",
                    "description": "The question."
                  },
                  "options": {
                    "type": "array",
                    "description": "List of options.",
                    "items": {
                      "type": "string"
                    }
                  },
                  "correctOption": {
                    "type": "string",
                    "description": "Correct option."
                  },
                  "answerDetail": {
                    "type": "string",
                    "description": "Details or explanation for the answer."
                  }
                },
                "required": [
                  "question",
                  "options",
                  "correctOption",
                  "answerDetail"
                ]
              }
            }
          },
          "required": [
            "questionType",
            "numberOfQuestions",
            "questions"
          ]
        },
        "part11": {
          "type": "object",
          "properties": {
            "questionType": {
              "type": "string",
              "description": "Identify the one underlined word or phrase that must be changed in order for the sentence to be correct."
            },
            "numberOfQuestions": {
              "type": "integer",
              "description": "3"
            },
            "questions": {
              "type": "array",
              "description": "List of questions.",
              "items": {
                "type": "object",
                "properties": {
                  "question": {
                    "type": "string",
                    "description": "The question."
                  },
                  "options": {
                    "type": "array",
                    "description": "List of options.",
                    "items": {
                      "type": "string"
                    }
                  },
                  "correctOption": {
                    "type": "string",
                    "description": "Correct option."
                  },
                  "answerDetail": {
                    "type": "string",
                    "description": "Details or explanation for the answer."
                  }
                },
                "required": [
                  "question",
                  "options",
                  "correctOption",
                  "answerDetail"
                ]
              }
            }
          },
          "required": [
            "questionType",
            "numberOfQuestions",
            "questions"
          ]
        },
        "part12": {
          "type": "object",
          "properties": {
            "questionType": {
              "type": "string",
              "description": "Choose the sentence that best combines each pair of sentences in the following questions"
            },
            "numberOfQuestions": {
              "type": "integer",
              "description": "2"
            },
            "questions": {
              "type": "array",
              "description": "List of questions.",
              "items": {
                "type": "object",
                "properties": {
                  "question": {
                    "type": "string",
                    "description": "The question."
                  },
                  "options": {
                    "type": "array",
                    "description": "List of options.",
                    "items": {
                      "type": "string"
                    }
                  },
                  "correctOption": {
                    "type": "string",
                    "description": "Correct option."
                  },
                  "answerDetail": {
                    "type": "string",
                    "description": "Details or explanation for the answer."
                  }
                },
                "required": [
                  "question",
                  "options",
                  "correctOption",
                  "answerDetail"
                ]
              }
            }
          },
          "required": [
            "questionType",
            "numberOfQuestions",
            "questions"
          ]
        }
      }
    }
  },
  "required": [
    "parts"
  ]
}`;

export default examSchemaConfig;
