export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [

    {
      name: 'colorCode',
      title: 'Color Code',
      type: 'string',
    },
    {
      name: 'numberOfColumns',
      title: 'Box column',
      type: 'number',
    },
    {
      name: 'numberOfOrder', //sjekk om denne responerer
      title: 'Order list',
      type: 'number',
    },
    {
      name: 'headerType',
      title: 'Header',
      type: 'string',
    },
    {
      name: 'showHeader',
      title: 'Show header',
      type: 'boolean',
    },
    {
      name: 'headerText',
      title: 'Header text',
      type: 'string',
    },
    {
      name: 'body',
      type: 'richText',    
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    // {
    //   name: 'body',
    //   title: 'Body',
    //   type: 'blockContent',
    // },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
