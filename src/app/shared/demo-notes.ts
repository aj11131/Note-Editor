

import { Note } from './note.model';

export const demoNotes: Note[] = [
    {
      title: 'Latin',
      date: new Date().toString(),
      body: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage'
    },
    {
      title: 'Store',
      date:  new Date().toString(),
      body: 'Eggs, milk, bread, peanut butter, bacon, cookies'
    },
    {
      title: 'ToDo',
      date:  new Date().toString(),
      body: 'Go to store'
    },
    {
      title: 'Content',
      date:  new Date().toString(),
      body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
    },
    {
      title: 'Industry',
      date:  new Date().toString(),
      body: "industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      title: 'Humor',
      date:  new Date().toString(),
      body: 'Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.'
    }
  ]
