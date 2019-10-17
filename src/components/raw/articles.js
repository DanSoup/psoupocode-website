const articles = [
  {
    title: 'VARIABLES - LESSON 1',
    subTitle: 'JavaScript',
    slug: 'js-variables-lesson-1',
    sections: [
      {
        title: 'Summary',
        contents: [
          ['p', "In JavaScript we use variables to store information allowing us to use it later in the program. They make complex information and calculations easier to manipulate by giving them human-readable names."]
        ]
      },
      {
        title: 'Declaration',
        contents: [
          ['p', "Before a variable can be used it must be “declared”. You do this by using one of the three declaration keywords, specifically `const`, `let`, or `var`. For example:"],
          ['c', [
            "~bconst~ ~cdaysInAYear~;",
            "~blet~ ~cmyFavouriteFood~;",
            "~bvar~ ~cdogsAreGood~;"
          ]],
          ['p', "The differences between `const`, `let` and `var` will be covered in VARIABLES LESSON 2. Until you reach VARIABLES LESSON 2 you should use the `let` keyword to declare your variables."],
          ['p', "The name we give to a variable is known as its “identifier”. An identifier must start with a letter and may contain letters, numbers, `$`, and `_`. Identifiers are case sensitive, so `dogsAreGood` and `dogsaregood` will be considered two different variables."],
          ['p', "Best practice for naming variables is to give them a name to represent their value and use “camelCase”. This is where you give each word in the identifier a capital letter except the first."],
          ['p', "In general variables can only be declared once. If you declare a variable more than once you may receive an error message. This will be covered in more details in later lessons."]
        ]
      },
      {
        title: 'Assignment',
        contents: [
          ['p', "To use a variable it must be “assigned” a value. This is performed by using the equals sign (`=`) and is done as follows:"],
          ['c', [
            '~cdaysInAYear~ = ~l365~;',
            '~cmyFavouriteFood~ = ~r\'sausages\'~;',
            '~cdogsAreGood~ = ~btrue~;'
          ]],
          ['p', "The \"condition\" will be evaluated and if, it's evaluated to being truthy, the following code block is executed. As with any code block this could be one or more lines of code. If the condition is evaluated to falsy the code block is not executed."]
        ]
      },
      {
        title: 'Examples',
        contents: []
      }
    ],
    meta: {
      categories: ['JavaScript'],
      subCategories: [],
      version: '1.0.0',
      authors: ['Dan Soup'],
      contributors: [],
      published: '07/08/19',
      notes: ''
    }
  },
  {
    title: 'IF STATEMENTS - LESSON 1',
    subTitle: 'JavaScript',
    slug: 'js-if-statements-lesson-1',
    sections: [
      {
        title: 'Summary',
        contents: [
          ['p', "\"If\" statements in JavaScript allow us to control which lines of code execute and which ones don't. This is a form of \"flow control\", controlling the flow of the code. The most basic if statement executes a block of code is certain conditions are met."]
        ]
      },
      {
        title: 'Real World Examples',
        contents: [
          ['p', "I'm at home enjoying a day off and I ask myself if I am hungry. If I am hungry, I will eat a sandwich. The pseudocode for this might look as follow."],
          ['c', ["~pIF~ ~cI am hungry~ ~pTHEN~ ~ceat sandwich~"]],
          ['p', "I only eat the sandwich if I am hungry. I don't even consider eating the sandwich if I'm not hungry."],
          ['i', {
            src: "panda.png",
            alt: "Pikachu pulling a face",
            caption: "I am, of course, aways hungry."
          }]
        ]
      },
      {
        title: 'The Structure',
        contents: [
          ['p', "The basic if statement looks like this:"],
          ['c', [
            '~pif~ (~ccondition~) {',
            '  ~ccode to execute~;',
            '}'
          ]],
          ['p', "The \"condition\" will be evaluated and if, it's evaluated to being truthy, the following code block is executed. As with any code block this could be one or more lines of code. If the condition is evaluated to falsy the code block is not executed."]
        ]
      },
      {
        title: 'Examples',
        contents: []
      }
    ],
    meta: {
      categories: ['JavaScript'],
      subCategories: [],
      version: '1.0.0',
      authors: ['Dan Soup'],
      contributors: [],
      published: '07/08/19',
      notes: ''
    }
  },
  {
    title: 'IF STATEMENTS - LESSON 2',
    subTitle: 'JavaScript',
    slug: 'js-if-statements-lesson-2',
    sections: [
      {
        title: 'Summary',
        contents: [
          ['p', "\"If\" statements in JavaScript allow us to control which lines of code execute and which ones don't. This is a form of \"flow control\", controlling the flow of the code. The most basic if statement executes a block of code is certain conditions are met."]
        ]
      },
      {
        title: 'Real World Examples',
        contents: [
          ['p', "I'm at home enjoying a day off and I ask myself if I am hungry. If I am hungry, I will eat a sandwich. The pseudocode for this might look as follow."],
          ['c', ["~pIF~ ~cI am hungry~ ~pTHEN~ ~ceat sandwich~"]],
          ['p', "I only eat the sandwich if I am hungry. I don't even consider eating the sandwich if I'm not hungry."],
          ['i', {
            src: "panda.png",
            alt: "Pikachu pulling a face",
            caption: "I am, of course, aways hungry."
          }]
        ]
      },
      {
        title: 'The Structure',
        contents: [
          ['p', "The basic if statement looks like this:"],
          ['c', [
            '~pif~ (~ccondition~) {',
            '  ~ccode to execute~;',
            '}'
          ]],
          ['p', "The \"condition\" will be evaluated and if, it's evaluated to being truthy, the following code block is executed. As with any code block this could be one or more lines of code. If the condition is evaluated to falsy the code block is not executed."]
        ]
      },
      {
        title: 'Examples',
        contents: []
      }
    ],
    meta: {
      categories: ['JavaScript'],
      subCategories: [],
      version: '1.0.0',
      authors: ['Dan Soup'],
      contributors: [],
      published: '07/08/19',
      notes: ''
    }
  }
];

export default articles;