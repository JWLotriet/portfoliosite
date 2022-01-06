import React from "react"
import { classNames } from "../../utils/class-names"
import { Color } from "../../common/types"
import { api } from "./Hero.api"

export interface HeroProps {
  /** Headline of the Hero */
  headline?: string
  /** What color is the componet? */
  color?: Color | null
  /** Image to be displayed as backgroud element */
  image?: React.ReactElement | undefined
  /** Content */
  content?: React.ReactElement | React.ReactNode
  /** Add a call to action to the Hero */
  children?: React.ReactElement | React.ReactNode
  /** Aditional Styles for the container */
  className?: string
  /** Id to identify specific component as provided by the CMS */
  id?: string
}

interface MapProps {
  bg: string
}

export const HERO_COLOR_MAPS: Record<Color, MapProps> = {
  [Color.BLUE]: { bg: "bg-brand-blue" },
  [Color.BLUE_LIGHT]: { bg: "bg-brand-blue-light" },
  [Color.ORANGE]: { bg: "bg-brand-orange" },
  [Color.ORANGE_LIGHT]: { bg: "bg-brand-orange-light" },
  [Color.YELLOW]: { bg: "bg-brand-yellow" },
  [Color.YELLOW_LIGHT]: { bg: "bg-brand-yellow-light" },
  [Color.GREEN]: { bg: "bg-brand-green" },
  [Color.GREEN_LIGHT]: { bg: "bg-brand-green-light" },
  [Color.PURPLE]: { bg: "bg-brand-purple" },
  [Color.PURPLE_LIGHT]: { bg: "bg-brand-purple-light" },
  [Color.BROWN]: { bg: "bg-brand-brown" },
  [Color.GRAY]: { bg: "bg-gray-300" },
  [Color.BLACK]: { bg: "bg-black" },
}

const Hero: React.FC<HeroProps> = ({
  className,
  headline,
  color,
  image,
  content,
  children,
  ...rest
}) => {
  return (
    <main className={classNames(className, "Hero")} {...rest}>
      <div className="relative w-screen h-screen overflow-hidden ">
        <div className="absolute inset-0">
          {image && image}
          <div
            className={`absolute inset-0 mix-blend-multiply ${
              color && HERO_COLOR_MAPS[color].bg
            }`}
          />
        </div>
        <div className="relative px-4 pt-32 pb-16 sm:px-6 sm:pt-52 sm:pb-24 lg:pb-52 lg:pt-72 lg:px-8 max-w-4xl mx-auto">
          {headline && (
            <h1 className="font-script font-normal text-white text-center text-5xl leading-[2.5rem] lg:text-8xl lg:leading-[5rem]">
              <span className="block text-white">{headline}</span>
            </h1>
          )}
          {content && (
            <div
              className={
                "mt-10 mx-auto text-center text-4xl text-white opacity-80"
              }
            >
              {content}
            </div>
          )}
          {children && children}
        </div>
      </div>
    </main>
  )
}

export default Hero

Hero.defaultProps = {
  // The Gray default prop is to provide the default color overlay for when an image is added

  color: Color.BLACK,
  headline: api.headline,
  content: api.children,
}
