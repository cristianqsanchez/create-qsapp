#!/usr/bin/env node

import path from 'node:path'
import { cp } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import pc from 'picocolors'
import prompts from 'prompts'

const TEMPLATES = [
  {
    title: 'Next.js + Shadcn/ui + ESlint',
    value: 'next-shadcn-eslint'
  },
  {
    title: 'React.js + Vite + ESlint',
    value: 'react-tw-eslint'
  }
]

async function main() {
  const project = await prompts([
    {
      type: 'text',
      name: 'name',
      message: 'What are you cooking?',
    },
    {
      type: 'select',
      name: 'template',
      message: 'Which kind of stack would you like to use?',
      choices: TEMPLATES
    }
  ],
    {
      onCancel: () => {
        console.log('\nBye 👏\n')
        process.exit(0)
      }
    }
  )

  const template = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    'templates',
    project.template
  )

  const destination = path.join(process.cwd(), project.name)

  await cp(path.join(template), destination, { recursive: true })
  //console.log({ template, destination })

  console.log(pc.bold(pc.blue(`\n  Project ${project.name} initialized!`)))
  console.log(pc.cyan(`    template copied ${project.template}`))
  console.log(pc.black(`\n    ${pc.bgBlue(' Run 🚀 \n')}`))
  console.log(`    - ${pc.blue(`cd ${project.name}`)}`)
  console.log(`    - ${pc.blue(`pnpm install`)}`)
  console.log(`    - ${pc.blue(`pnpm run dev`)}`)
  console.log('\n    Good cooking!\n')
}

main()

