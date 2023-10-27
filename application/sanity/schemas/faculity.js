import {defineType} from 'sanity'

export default defineType({
  name: 'faculity',
  title: 'Faculity',
  type: 'document',
  fields: [
    {
      name: 'id',
      type: 'number',
      title: 'ID',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Profile',
    },
    {
      name: 'branch',
      type: 'string',
      title: 'Branch',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: 'phone',
      type: 'number',
      title: 'Mobile',
      // validation: (Rule) => Rule.length(10),
    },
    {
      name: 'designation',
      type: 'string',
      title: 'Designation',
    },
    {
      name: 'qualifications',
      type: 'string',
      title: 'Qualifications',
    },
    {
      name: 'linkedin',
      type: 'string',
      title: 'Linked-in',
    },
    {
      name: 'youtube',
      type: 'string',
      title: 'YouTube',
    },
    {
      name: 'subject',
      type: 'array',
      of: [{type: 'string'}]
    },
  ],
})
