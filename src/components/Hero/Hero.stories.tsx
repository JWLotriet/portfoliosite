import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import Hero, { HeroProps } from "./Hero"
import { api } from "./Hero.api"
import { Color } from "../../common/types"

export default {
  title: "Components/Hero",
  component: Hero,
} as ComponentMeta<typeof Hero>

const Template: ComponentStory<typeof Hero> = (args: HeroProps) => (
  <Hero {...args}>{args.children}</Hero>
)

export const Default = Template.bind({})
Default.args = {
  ...api,
}

export const WithImage = Template.bind({})
WithImage.args = {
  ...api,
  image: (
    <img
      className="h-full w-full object-cover"
      src="https://images.unsplash.com/photo-1536337005238-94b997371b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3269&q=80"
      alt="People working on laptops"
    />
  ),
}

export const Green = Template.bind({})
Green.args = {
  ...api,
  color: Color.GREEN,
}

export const GreenWithImage = Template.bind({})
GreenWithImage.args = {
  ...api,
  color: Color.GREEN,
  image: (
    <img
      className="h-full w-full object-cover"
      src="https://images.unsplash.com/photo-1536337005238-94b997371b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3269&q=80"
      alt="People working on laptops"
    />
  ),
}
