import { config, collection, fields } from '@keystatic/core'

export default config({
  storage:
    process.env.NODE_ENV === 'production'
      ? { kind: 'github' as const, repo: 'ThalesZago/zagothales' }
      : { kind: 'local' as const },

  ui: {
    brand: { name: 'Thales Zago — CMS' },
    navigation: ['posts', 'projects'],
  },

  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'content/posts/*',
      entryLayout: 'content',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        date: fields.date({
          label: 'Date',
          defaultValue: { kind: 'today' },
          validation: { isRequired: true },
        }),
        excerpt: fields.text({
          label: 'Excerpt',
          multiline: true,
          validation: { isRequired: true },
        }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
          itemLabel: (props) => props.value,
        }),
        content: fields.mdx({ label: 'Content', extension: 'mdx' }),
      },
    }),

    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'content/projects/*',
      entryLayout: 'content',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({
          label: 'Description',
          multiline: true,
          validation: { isRequired: true },
        }),
        date: fields.date({
          label: 'Date',
          defaultValue: { kind: 'today' },
          validation: { isRequired: true },
        }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
          itemLabel: (props) => props.value,
        }),
        github: fields.url({ label: 'GitHub URL' }),
        demo: fields.url({ label: 'Demo URL' }),
        content: fields.mdx({ label: 'Content', extension: 'mdx' }),
      },
    }),
  },
})
