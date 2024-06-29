const examSchemaConfig = `
{
    "title": "Vietnam University Entrance Examination - English",
    "type": "object",
    "properties": {
      "part1": {
        "type": "object",
        "title": "Phonetics",
        "properties": {
          "question_type": {
            "type": "string",
            "description": "Choose the word whose underlined part is pronounced differently from the rest."
          },
          "number_of_questions": {
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
                "correct_option": {
                  "type": "string",
                  "description": "Correct option."
                },
                "answer_detail": {
                  "type": "string",
                  "description": "Details or explanation for the answer."
                }
              },
              "required": [
                "question",
                "options",
                "correct_option",
                "answer_detail"
              ]
            }
          }
        },
        "required": [
          "question_type",
          "number_of_questions",
          "questions"
        ]
      },
      "part2": {
        "type": "object",
        "title": "Stress",
        "properties": {
          "question_type": {
            "type": "string",
            "description": "Choose the word that has a different stress pattern from the rest."
          },
          "number_of_questions": {
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
                "correct_option": {
                  "type": "string",
                  "description": "Correct option."
                },
                "answer_detail": {
                  "type": "string",
                  "description": "Details or explanation for the answer."
                }
              },
              "required": [
                "question",
                "options",
                "correct_option",
                "answer_detail"
              ]
            }
          }
        },
        "required": [
          "question_type",
          "number_of_questions",
          "questions"
        ]
      },
      "part3": {
        "type": "object",
        "title": "Vocabulary",
        "properties": {
          "question_type": {
            "type": "string",
            "description": "Choose the sentence that best completes the following exchange."
          },
          "number_of_questions": {
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
                "correct_option": {
                  "type": "string",
                  "description": "Correct option."
                },
                "answer_detail": {
                  "type": "string",
                  "description": "Details or explanation for the answer."
                }
              },
              "required": [
                "question",
                "options",
                "correct_option",
                "answer_detail"
              ]
            }
          }
        },
        "required": [
          "question_type",
          "number_of_questions",
          "questions"
        ]
      },
      "part4": {
        "type": "object",
        "title": "Vocabulary",
        "properties": {
          "question_type": {
            "type": "string",
            "description": "Choose the word(s) OPPOSITE in meaning to the underlined word(s)"
          },
          "number_of_questions": {
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
                "correct_option": {
                  "type": "string",
                  "description": "Correct option."
                },
                "answer_detail": {
                  "type": "string",
                  "description": "Details or explanation for the answer."
                }
              },
              "required": [
                "question",
                "options",
                "correct_option",
                "answer_detail"
              ]
            }
          }
        },
        "required": [
          "question_type",
          "number_of_questions",
          "questions"
        ]
      },
      "part5": {
        "type": "object",
        "title": "Vocabulary",
        "properties": {
          "question_type": {
            "type": "string",
            "description": "Choose the word(s) CLOSEST in meaning to the underlined word(s)."
          },
          "number_of_questions": {
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
                "correct_option": {
                  "type": "string",
                  "description": "Correct option."
                },
                "answer_detail": {
                  "type": "string",
                  "description": "Details or explanation for the answer."
                }
              },
              "required": [
                "question",
                "options",
                "correct_option",
                "answer_detail"
              ]
            }
          }
        },
        "required": [
          "question_type",
          "number_of_questions",
          "questions"
        ]
      },
      "part6": {
        "type": "object",
        "title": "Vocabulary and Grammar",
        "properties": {
          "question_type": {
            "type": "string",
            "description": "Choose the correct word or phrase to complete the sentence."
          },
          "number_of_questions": {
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
                "answer": {
                  "type": "string",
                  "description": "sentence."
                },
                "answer_detail": {
                  "type": "string",
                  "description": "Details or explanation for the answer."
                }
              },
              "required": [
                "question",
                "answer",
                "answer_detail"
              ]
            }
          }
        },
        "required": [
          "question_type",
          "number_of_questions",
          "questions"
        ]
      },
      "part7": {
        "type": "object",
        "title": "Sentence Completion",
        "properties": {
          "question_type": {
            "type": "string",
            "description": "Read the passage and fill in the blanks with suitable word or phrase."
          },
          "number_of_questions": {
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
                "blank": {
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
                "correct_option": {
                  "type": "string",
                  "description": "Correct option."
                },
                "answer_detail": {
                  "type": "string",
                  "description": "Details or explanation for the answer."
                }
              },
              "required": [
                "blank",
                "options",
                "correct_option",
                "answer_detail"
              ]
            }
          }
        },
        "required": [
          "question_type",
          "number_of_questions",
          "passage",
          "questions"
        ]
      },
      "part8": {
        "type": "object",
        "title": "Reading Comprehension - Single Passage",
        "properties": {
          "question_type": {
            "type": "string",
            "description": "Read the passage and answer the questions."
          },
          "number_of_questions": {
            "type": "integer",
            "description": "5"
          },
          "passage": {
            "type": "string",
            "description": "The passage for reading comprehension."
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
                "correct_option": {
                  "type": "string",
                  "description": "Correct option."
                },
                "answer_detail": {
                  "type": "string",
                  "description": "Details or explanation for the answer."
                }
              },
              "required": [
                "question",
                "options",
                "correct_option",
                "answer_detail"
              ]
            }
          }
        },
        "required": [
          "question_type",
          "number_of_questions",
          "passage",
          "questions"
        ]
      },
      "part9": {
        "type": "object",
        "title": "Reading Comprehension - Paired Passages",
        "properties": {
          "question_type": {
            "type": "string",
            "description": "Read the paired passages and answer the questions."
          },
          "number_of_questions": {
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
                "correct_option": {
                  "type": "string",
                  "description": "Correct option."
                },
                "answer_detail": {
                  "type": "string",
                  "description": "Details or explanation for the answer."
                }
              },
              "required": [
                "question",
                "options",
                "correct_option",
                "answer_detail"
              ]
            }
          }
        },
        "required": [
          "question_type",
          "number_of_questions",
          "passages",
          "questions"
        ]
      },
      "part10": {
        "type": "object",
        "title": "Sentence Transformation",
        "properties": {
          "question_type": {
            "type": "string",
            "description": "Choose the sentence so that it has a similar meaning to the original."
          },
          "number_of_questions": {
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
                "correct_option": {
                  "type": "string",
                  "description": "Correct option."
                },
                "answer_detail": {
                  "type": "string",
                  "description": "Details or explanation for the answer."
                }
              },
              "required": [
                "question",
                "options",
                "correct_option",
                "answer_detail"
              ]
            }
          }
        },
        "required": [
          "question_type",
          "number_of_questions",
          "questions"
        ]
      },
      "part11": {
        "type": "object",
        "title": "Error Identification",
        "properties": {
          "question_type": {
            "type": "string",
            "description": "Identify the one underlined word or phrase that must be changed in order for the sentence to be correct."
          },
          "number_of_questions": {
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
                "correct_option": {
                  "type": "string",
                  "description": "Correct option."
                },
                "answer_detail": {
                  "type": "string",
                  "description": "Details or explanation for the answer."
                }
              },
              "required": [
                "question",
                "options",
                "correct_option",
                "answer_detail"
              ]
            }
          }
        },
        "required": [
          "question_type",
          "number_of_questions",
          "questions"
        ]
      },
      "part12": {
        "type": "object",
        "title": "Combine sentenses",
        "properties": {
          "question_type": {
            "type": "string",
            "description": "Choose the sentence that best combines each pair of sentences in the following questions"
          },
          "number_of_questions": {
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
                "correct_option": {
                  "type": "string",
                  "description": "Correct option."
                },
                "answer_detail": {
                  "type": "string",
                  "description": "Details or explanation for the answer."
                }
              },
              "required": [
                "question",
                "options",
                "correct_option",
                "answer_detail"
              ]
            }
          }
        },
        "required": [
          "question_type",
          "number_of_questions",
          "questions"
        ]
      }
    }
  }
`;

export default examSchemaConfig;
