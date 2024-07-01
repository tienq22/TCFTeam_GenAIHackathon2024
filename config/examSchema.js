const examSchemaConfig = `{
  "description": "Vietnam National High School Graduation Examination - English",
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
              "description": "Choose the word whose underlined part differs from the other three in pronunciation in each of the following questions."
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
                    "description": "List of options containing opening and closing HTML <strong> and <u> tags to indicate the underlined part.",
                    "items": {
                      "type": "string",
                      "description": "The option that starts with A., B., C., or D."
                    }
                  },
                  "correctOption": {
                    "type": "number",
                    "description": "Correct option, from 0 to 3 only."
                  },
                  "answerDetail": {
                    "type": "string",
                    "description": "Details or explanation for the answer, in Vietnamese."
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
              "description": "Choose the word that differs from the other three in the position of stress in each of the following questions."
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
                    "description": "List of options containing only one word, without the ' symbol (apostrophe)",
                    "items": {
                      "type": "string",
                      "description": "The option that starts with A., B., C., or D."
                    }
                  },
                  "correctOption": {
                    "type": "number",
                    "description": "Correct option, from 0 to 3 only."
                  },
                  "answerDetail": {
                    "type": "string",
                    "description": "Details or explanation for the answer, in Vietnamese."
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
              "description": "Choose the sentence that best completes each of the following exchanges."
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
                      "type": "string",
                      "description": "The option that starts with A., B., C., or D."
                    }
                  },
                  "correctOption": {
                    "type": "number",
                    "description": "Correct option, from 0 to 3 only."
                  },
                  "answerDetail": {
                    "type": "string",
                    "description": "Details or explanation for the answer, in Vietnamese."
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
              "description": "Choose the word(s) OPPOSITE in meaning to the underlined word(s) in each of the following questions."
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
                    "description": "The sentence containing opening and closing HTML <strong> and <u> tags to indicate the underlined part."
                  },
                  "options": {
                    "type": "array",
                    "description": "List of options.",
                    "items": {
                      "type": "string",
                      "description": "The option that starts with A., B., C., or D."
                    }
                  },
                  "correctOption": {
                    "type": "number",
                    "description": "Correct option, from 0 to 3 only."
                  },
                  "answerDetail": {
                    "type": "string",
                    "description": "Details or explanation for the answer, in Vietnamese."
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
              "description": "Choose the word CLOSEST in meaning to the underlined word in each of the following questions."
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
                    "description": "The sentence containing opening and closing HTML <strong> and <u> tags to indicate the underlined part."
                  },
                  "options": {
                    "type": "array",
                    "description": "List of options.",
                    "items": {
                      "type": "string",
                      "description": "The option that starts with A., B., C., or D."
                    }
                  },
                  "correctOption": {
                    "type": "number",
                    "description": "Correct option, from 0 to 3 only."
                  },
                  "answerDetail": {
                    "type": "string",
                    "description": "Details or explanation for the answer, in Vietnamese."
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
                      "type": "string",
                      "description": "The option that starts with A., B., C., or D."
                    }
                  },
                  "correctOption": {
                    "type": "number",
                    "description": "Correct option, from 0 to 3 only."
                  },
                  "answerDetail": {
                    "type": "string",
                    "description": "Details or explanation for the answer, in Vietnamese."
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
              "description": "Read the following passage and choose the correct word or phrase that best fits each of the numbered blanks in the passage."
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
                      "type": "string",
                      "description": "The option that starts with A., B., C., or D."
                    }
                  },
                  "correctOption": {
                    "type": "number",
                    "description": "Correct option, from 0 to 3 only."
                  },
                  "answerDetail": {
                    "type": "string",
                    "description": "Details or explanation for the answer, in Vietnamese."
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
              "description": "Read the following passage and choose the best answer to each of the questions."
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
                      "type": "string",
                      "description": "The option that starts with A., B., C., or D."
                    }
                  },
                  "correctOption": {
                    "type": "number",
                    "description": "Correct option, from 0 to 3 only."
                  },
                  "answerDetail": {
                    "type": "string",
                    "description": "Details or explanation for the answer, in Vietnamese."
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
              "description": "Read the following paired or multiple passages and choose the best answer to each of the questions."
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
                      "type": "string",
                      "description": "The option that starts with A., B., C., or D."
                    }
                  },
                  "correctOption": {
                    "type": "number",
                    "description": "Correct option, from 0 to 3 only."
                  },
                  "answerDetail": {
                    "type": "string",
                    "description": "Details or explanation for the answer, in Vietnamese."
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
              "description": "Choose the sentence that is close in meaning to each of the following questions."
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
                      "type": "string",
                      "description": "The option that starts with A., B., C., or D."
                    }
                  },
                  "correctOption": {
                    "type": "number",
                    "description": "Correct option, from 0 to 3 only."
                  },
                  "answerDetail": {
                    "type": "string",
                    "description": "Details or explanation for the answer, in Vietnamese."
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
              "description": "Choose the underlined part that needs correction in each of the following questions."
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
                    "description": "The sentence containing opening and closing HTML <strong> and <u> tags to indicate the underlined part that needs correction."
                  },
                  "options": {
                    "type": "array",
                    "description": "List of options.",
                    "items": {
                      "type": "string",
                      "description": "The option that starts with A., B., C., or D."
                    }
                  },
                  "correctOption": {
                    "type": "number",
                    "description": "Correct option, from 0 to 3 only."
                  },
                  "answerDetail": {
                    "type": "string",
                    "description": "Details or explanation for the answer, in Vietnamese."
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
              "description": "Choose the sentence that best combines each pair of sentences in the following questions."
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
                      "type": "string",
                      "description": "The option that starts with A., B., C., or D."
                    }
                  },
                  "correctOption": {
                    "type": "number",
                    "description": "Correct option, from 0 to 3 only."
                  },
                  "answerDetail": {
                    "type": "string",
                    "description": "Details or explanation for the answer, in Vietnamese."
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
